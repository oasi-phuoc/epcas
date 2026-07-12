-- EPCAS Logistique — migration AFP/CFC + séquences + admin + contenus
-- À exécuter dans Supabase → SQL Editor (idempotent)
-- Date : 2026-07-12

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- 1) Enums
-- ---------------------------------------------------------------------------

do $$ begin
  create type public.user_role as enum ('admin', 'trainer', 'apprentice');
exception when duplicate_object then null;
end $$;

do $$ begin
  alter type public.user_role add value if not exists 'admin';
exception when others then null;
end $$;

do $$ begin
  create type public.diploma_level as enum ('AFP', 'CFC');
exception when duplicate_object then null;
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
  create type public.question_type as enum (
    'qcm', 'multi', 'true_false', 'math', 'open', 'matching', 'ordering', 'fill_blank'
  );
exception when duplicate_object then null;
end $$;

-- ---------------------------------------------------------------------------
-- 2) Classes : niveau diplôme + année d'apprentissage
-- ---------------------------------------------------------------------------

alter table public.classes
  add column if not exists diploma_level public.diploma_level not null default 'CFC';

alter table public.classes
  add column if not exists study_year smallint not null default 1;

alter table public.classes
  drop constraint if exists classes_study_year_check;

alter table public.classes
  add constraint classes_study_year_check
  check (study_year between 1 and 3);

-- ---------------------------------------------------------------------------
-- 3) Modules : niveaux AFP / CFC
-- ---------------------------------------------------------------------------

alter table public.modules
  add column if not exists levels public.diploma_level[]
  not null default array['AFP', 'CFC']::public.diploma_level[];

-- ---------------------------------------------------------------------------
-- 4) Lessons : page_slug + contenus AFP (null = identique au CFC)
-- ---------------------------------------------------------------------------

alter table public.lessons
  add column if not exists page_slug text;

alter table public.lessons
  add column if not exists content_full_afp text;

alter table public.lessons
  add column if not exists content_summary_afp text;

-- Remplir page_slug depuis un code éventuel (si vous stockez des ids type lesson-101-theorie)
update public.lessons
set page_slug = coalesce(
  page_slug,
  nullif(substring(id::text from '-(objectifs|apercu|theorie|glossaire|situation|maths|verification)$'), ''),
  'theorie'
)
where page_slug is null;

alter table public.lessons
  alter column page_slug set default 'theorie';

alter table public.lessons
  alter column page_slug set not null;

alter table public.lessons
  drop constraint if exists lessons_page_slug_check;

alter table public.lessons
  add constraint lessons_page_slug_check
  check (
    page_slug in (
      'objectifs', 'apercu', 'theorie', 'glossaire',
      'situation', 'maths', 'verification'
    )
  );

-- ---------------------------------------------------------------------------
-- 5) Séquences d'apprentissage (niveau × année → ordre des modules)
-- ---------------------------------------------------------------------------

create table if not exists public.learning_sequences (
  id text primary key,
  diploma_level public.diploma_level not null,
  study_year smallint not null check (study_year between 1 and 3),
  module_ids uuid[] not null default '{}',
  updated_at timestamptz not null default now(),
  unique (diploma_level, study_year)
);

-- ---------------------------------------------------------------------------
-- 6) Évaluations / blancs
-- ---------------------------------------------------------------------------

create table if not exists public.assessments (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null default '',
  duration_min int not null default 45,
  max_attempts int not null default 1,
  published boolean not null default false,
  levels public.diploma_level[] not null default array['AFP', 'CFC']::public.diploma_level[],
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.assessments
  add column if not exists levels public.diploma_level[]
  not null default array['AFP', 'CFC']::public.diploma_level[];

create table if not exists public.assessment_questions (
  id uuid primary key default gen_random_uuid(),
  assessment_id uuid not null references public.assessments (id) on delete cascade,
  type public.question_type not null,
  title text not null default '',
  points numeric not null default 1,
  sort_order int not null default 0,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists assessment_questions_assessment_id_idx
  on public.assessment_questions (assessment_id);

-- ---------------------------------------------------------------------------
-- 7) Helpers staff (admin + formateur)
-- ---------------------------------------------------------------------------

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
      and p.role in ('admin', 'trainer')
      and p.active
  );
$$;

-- Compat : ancien helper
create or replace function public.is_trainer()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select public.is_staff();
$$;

-- ---------------------------------------------------------------------------
-- 8) RLS
-- ---------------------------------------------------------------------------

alter table public.learning_sequences enable row level security;
alter table public.assessments enable row level security;
alter table public.assessment_questions enable row level security;

drop policy if exists "sequences_read" on public.learning_sequences;
drop policy if exists "sequences_write" on public.learning_sequences;
drop policy if exists "assessments_read" on public.assessments;
drop policy if exists "assessments_write" on public.assessments;
drop policy if exists "assessment_questions_read" on public.assessment_questions;
drop policy if exists "assessment_questions_write" on public.assessment_questions;

-- Recréer policies principales avec is_staff()
drop policy if exists "profiles_select_own_or_trainer" on public.profiles;
drop policy if exists "profiles_update_own" on public.profiles;
drop policy if exists "blocks_write" on public.blocks;
drop policy if exists "modules_read" on public.modules;
drop policy if exists "modules_write" on public.modules;
drop policy if exists "lessons_read" on public.lessons;
drop policy if exists "lessons_write" on public.lessons;
drop policy if exists "exercises_read" on public.exercises;
drop policy if exists "exercises_write" on public.exercises;
drop policy if exists "progress_own" on public.lesson_progress;
drop policy if exists "attempts_own" on public.attempts;
drop policy if exists "classes_write" on public.classes;

create policy "profiles_select_own_or_trainer"
  on public.profiles for select
  using (id = auth.uid() or public.is_staff());

create policy "profiles_update_own"
  on public.profiles for update
  using (id = auth.uid() or public.is_staff());

create policy "blocks_write" on public.blocks for all to authenticated
  using (public.is_staff()) with check (public.is_staff());

create policy "modules_read" on public.modules for select to authenticated
  using (published or public.is_staff());
create policy "modules_write" on public.modules for all to authenticated
  using (public.is_staff()) with check (public.is_staff());

create policy "lessons_read" on public.lessons for select to authenticated
  using (published or public.is_staff());
create policy "lessons_write" on public.lessons for all to authenticated
  using (public.is_staff()) with check (public.is_staff());

create policy "exercises_read" on public.exercises for select to authenticated
  using (published or public.is_staff());
create policy "exercises_write" on public.exercises for all to authenticated
  using (public.is_staff()) with check (public.is_staff());

create policy "progress_own" on public.lesson_progress for all to authenticated
  using (user_id = auth.uid() or public.is_staff())
  with check (user_id = auth.uid() or public.is_staff());

create policy "attempts_own" on public.attempts for all to authenticated
  using (user_id = auth.uid() or public.is_staff())
  with check (user_id = auth.uid() or public.is_staff());

create policy "classes_write" on public.classes for all to authenticated
  using (public.is_staff()) with check (public.is_staff());

create policy "sequences_read" on public.learning_sequences for select to authenticated
  using (true);
create policy "sequences_write" on public.learning_sequences for all to authenticated
  using (public.is_staff()) with check (public.is_staff());

create policy "assessments_read" on public.assessments for select to authenticated
  using (published or public.is_staff());
create policy "assessments_write" on public.assessments for all to authenticated
  using (public.is_staff()) with check (public.is_staff());

create policy "assessment_questions_read" on public.assessment_questions for select to authenticated
  using (
    exists (
      select 1 from public.assessments a
      where a.id = assessment_id and (a.published or public.is_staff())
    )
  );
create policy "assessment_questions_write" on public.assessment_questions for all to authenticated
  using (public.is_staff()) with check (public.is_staff());
