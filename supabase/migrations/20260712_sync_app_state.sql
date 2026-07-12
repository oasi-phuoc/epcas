-- Sync complète de l'état applicatif (plan Free Supabase).
-- Un snapshot JSON partagé : classes, comptes, contenu, évaluations, suivi, etc.

create table if not exists public.sync_app_state (
  id text primary key default 'default',
  payload jsonb not null default '{}'::jsonb,
  revision bigint not null default 1,
  updated_at timestamptz not null default now()
);

comment on table public.sync_app_state is
  'Snapshot partagé AppState EPCAS — sync multi-utilisateurs (Free tier)';

alter table public.sync_app_state enable row level security;

-- Accès lecture/écriture via anon key (école / Free).
-- Pour durcir : retirer ces policies et n'utiliser que la service role côté API.
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
