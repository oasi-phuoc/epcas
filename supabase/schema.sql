-- EPCAS Logistique — schéma Phase 1 (à exécuter dans Supabase SQL Editor)
-- Région recommandée : EU (Frankfurt ou proche)
-- Idempotent : peut être relancé sans erreur si objets déjà présents

create extension if not exists "pgcrypto";

do $$ begin
  create type public.user_role as enum ('admin', 'trainer', 'apprentice');
exception when duplicate_object then null;
end $$;

-- Migration douce si l'enum existait sans 'admin'
do $$ begin
  alter type public.user_role add value if not exists 'admin';
exception when others then null;
end $$;

do $$ begin
  create type public.lesson_status as enum ('unread', 'reading', 'done');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.exercise_type as enum ('qcm', 'math', 'open');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.diploma_level as enum ('AFP', 'CFC');
exception when duplicate_object then null;
end $$;

create table if not exists public.classes (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  year text not null,
  diploma_level public.diploma_level not null default 'CFC',
  created_at timestamptz not null default now()
);

alter table public.classes
  add column if not exists diploma_level public.diploma_level not null default 'CFC';

alter table public.classes
  add column if not exists study_year smallint not null default 1;

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  role public.user_role not null default 'apprentice',
  class_id uuid references public.classes (id),
  display_name text not null,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.blocks (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  title text not null,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.modules (
  id uuid primary key default gen_random_uuid(),
  block_id uuid not null references public.blocks (id) on delete cascade,
  code text not null unique,
  title text not null,
  sort_order int not null default 0,
  published boolean not null default false,
  levels public.diploma_level[] not null default array['AFP', 'CFC']::public.diploma_level[],
  created_at timestamptz not null default now()
);

alter table public.modules
  add column if not exists levels public.diploma_level[] not null default array['AFP', 'CFC']::public.diploma_level[];

create table if not exists public.lessons (
  id uuid primary key default gen_random_uuid(),
  module_id uuid not null references public.modules (id) on delete cascade,
  title text not null,
  content_full text not null default '',
  content_summary text not null default '',
  sort_order int not null default 0,
  published boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.exercises (
  id uuid primary key default gen_random_uuid(),
  lesson_id uuid references public.lessons (id) on delete set null,
  title text not null,
  type public.exercise_type not null,
  difficulty text not null default 'facile',
  payload jsonb not null default '{}'::jsonb,
  published boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.lesson_progress (
  user_id uuid not null references public.profiles (id) on delete cascade,
  lesson_id uuid not null references public.lessons (id) on delete cascade,
  status public.lesson_status not null default 'unread',
  mode_pref text not null default 'full' check (mode_pref in ('full', 'summary')),
  updated_at timestamptz not null default now(),
  primary key (user_id, lesson_id)
);

create table if not exists public.attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  exercise_id uuid not null references public.exercises (id) on delete cascade,
  score numeric not null,
  max_score numeric not null default 1,
  answers jsonb,
  created_at timestamptz not null default now()
);

alter table public.classes enable row level security;
alter table public.profiles enable row level security;
alter table public.blocks enable row level security;
alter table public.modules enable row level security;
alter table public.lessons enable row level security;
alter table public.exercises enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.attempts enable row level security;

create or replace function public.is_staff()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid()
      and p.role::text in ('admin', 'trainer')
      and p.active
  );
$$;

create or replace function public.is_trainer()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select public.is_staff();
$$;

-- Policies (drop + recreate pour rester idempotent)
drop policy if exists "profiles_select_own_or_trainer" on public.profiles;
drop policy if exists "profiles_update_own" on public.profiles;
drop policy if exists "blocks_read" on public.blocks;
drop policy if exists "blocks_write" on public.blocks;
drop policy if exists "modules_read" on public.modules;
drop policy if exists "modules_write" on public.modules;
drop policy if exists "lessons_read" on public.lessons;
drop policy if exists "lessons_write" on public.lessons;
drop policy if exists "exercises_read" on public.exercises;
drop policy if exists "exercises_write" on public.exercises;
drop policy if exists "progress_own" on public.lesson_progress;
drop policy if exists "attempts_own" on public.attempts;
drop policy if exists "classes_read" on public.classes;
drop policy if exists "classes_write" on public.classes;

create policy "profiles_select_own_or_trainer"
  on public.profiles for select
  using (id = auth.uid() or public.is_trainer());

create policy "profiles_update_own"
  on public.profiles for update
  using (id = auth.uid() or public.is_trainer());

create policy "blocks_read" on public.blocks for select to authenticated
  using (true);
create policy "blocks_write" on public.blocks for all to authenticated
  using (public.is_trainer()) with check (public.is_trainer());

create policy "modules_read" on public.modules for select to authenticated
  using (published or public.is_trainer());
create policy "modules_write" on public.modules for all to authenticated
  using (public.is_trainer()) with check (public.is_trainer());

create policy "lessons_read" on public.lessons for select to authenticated
  using (published or public.is_trainer());
create policy "lessons_write" on public.lessons for all to authenticated
  using (public.is_trainer()) with check (public.is_trainer());

create policy "exercises_read" on public.exercises for select to authenticated
  using (published or public.is_trainer());
create policy "exercises_write" on public.exercises for all to authenticated
  using (public.is_trainer()) with check (public.is_trainer());

create policy "progress_own" on public.lesson_progress for all to authenticated
  using (user_id = auth.uid() or public.is_trainer())
  with check (user_id = auth.uid() or public.is_trainer());

create policy "attempts_own" on public.attempts for all to authenticated
  using (user_id = auth.uid() or public.is_trainer())
  with check (user_id = auth.uid() or public.is_trainer());

create policy "classes_read" on public.classes for select to authenticated
  using (true);
create policy "classes_write" on public.classes for all to authenticated
  using (public.is_trainer()) with check (public.is_trainer());

-- ---------------------------------------------------------------------------
-- Sync AppState (snapshot JSON partagé — plan Free)
-- Voir aussi : migrations/20260712_sync_app_state.sql
-- ---------------------------------------------------------------------------
create table if not exists public.sync_app_state (
  id text primary key default 'default',
  payload jsonb not null default '{}'::jsonb,
  revision bigint not null default 1,
  updated_at timestamptz not null default now()
);

comment on table public.sync_app_state is
  'Snapshot partagé AppState EPCAS — sync multi-utilisateurs (Free tier)';

alter table public.sync_app_state enable row level security;

drop policy if exists sync_app_state_select on public.sync_app_state;
drop policy if exists sync_app_state_insert on public.sync_app_state;
drop policy if exists sync_app_state_update on public.sync_app_state;

create policy sync_app_state_select on public.sync_app_state
  for select using (true);

create policy sync_app_state_insert on public.sync_app_state
  for insert with check (true);

create policy sync_app_state_update on public.sync_app_state
  for update using (true) with check (true);

insert into public.sync_app_state (id, payload, revision)
values ('default', '{}'::jsonb, 0)
on conflict (id) do nothing;
