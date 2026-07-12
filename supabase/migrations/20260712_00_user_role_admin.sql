-- EPCAS — Étape 1/2 : ajouter la valeur enum 'admin' (transaction séparée)
-- Exécuter SEUL, puis Commit / Run. Ensuite lancer 20260712_afp_cfc_sequences_admin.sql
-- Date : 2026-07-12

do $$ begin
  create type public.user_role as enum ('admin', 'trainer', 'apprentice');
exception when duplicate_object then null;
end $$;

-- Si l'enum existait déjà sans 'admin', l'ajouter maintenant.
-- PostgreSQL exige un COMMIT avant d'utiliser cette valeur ailleurs.
do $$ begin
  alter type public.user_role add value if not exists 'admin';
exception when others then null;
end $$;
