-- EPCAS — tables de sync suivi (progress / tentatives) pour usage hors-ligne → online
-- IDs texte pour rester compatible avec la démo locale et Supabase Auth plus tard.

create table if not exists public.sync_lesson_progress (
  user_key text not null,
  lesson_id text not null,
  status text not null check (status in ('unread', 'reading', 'done')),
  mode_pref text not null default 'full' check (mode_pref in ('full', 'summary')),
  updated_at timestamptz not null default now(),
  primary key (user_key, lesson_id)
);

create table if not exists public.sync_attempts (
  id text primary key,
  user_key text not null,
  exercise_id text not null,
  score numeric not null,
  max_score numeric not null default 1,
  created_at timestamptz not null default now()
);

create index if not exists sync_lesson_progress_user_key_idx
  on public.sync_lesson_progress (user_key);

create index if not exists sync_attempts_user_key_idx
  on public.sync_attempts (user_key);

alter table public.sync_lesson_progress enable row level security;
alter table public.sync_attempts enable row level security;

-- Lecture : staff ou propriétaire (user_key = auth.uid()::text ou email stocké)
drop policy if exists "sync_progress_read" on public.sync_lesson_progress;
drop policy if exists "sync_progress_write" on public.sync_lesson_progress;
drop policy if exists "sync_attempts_read" on public.sync_attempts;
drop policy if exists "sync_attempts_write" on public.sync_attempts;

create policy "sync_progress_read" on public.sync_lesson_progress
  for select to authenticated
  using (
    user_key = auth.uid()::text
    or user_key = coalesce(auth.jwt() ->> 'email', '')
    or public.is_staff()
  );

create policy "sync_progress_write" on public.sync_lesson_progress
  for all to authenticated
  using (
    user_key = auth.uid()::text
    or user_key = coalesce(auth.jwt() ->> 'email', '')
    or public.is_staff()
  )
  with check (
    user_key = auth.uid()::text
    or user_key = coalesce(auth.jwt() ->> 'email', '')
    or public.is_staff()
  );

create policy "sync_attempts_read" on public.sync_attempts
  for select to authenticated
  using (
    user_key = auth.uid()::text
    or user_key = coalesce(auth.jwt() ->> 'email', '')
    or public.is_staff()
  );

create policy "sync_attempts_write" on public.sync_attempts
  for all to authenticated
  using (
    user_key = auth.uid()::text
    or user_key = coalesce(auth.jwt() ->> 'email', '')
    or public.is_staff()
  )
  with check (
    user_key = auth.uid()::text
    or user_key = coalesce(auth.jwt() ->> 'email', '')
    or public.is_staff()
  );
