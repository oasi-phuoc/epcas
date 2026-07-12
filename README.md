# EPCAS Logistique

Plateforme pédagogique **CFC Logisticien·ne — EPCA Sion** : théorie (complet / résumé), exercices interactifs, évaluations à blanc, suivi, interface formateur.

Thème pastel moderne + design system de composants partagés. Français uniquement.

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

Sans variables Supabase, les données restent dans le navigateur (localStorage).

### Synchronisation cloud (Supabase Free)

Pour partager **tout** l’état (classes, comptes, leçons, évaluations, progression…) entre navigateurs / appareils :

1. Créer un projet Free (région EU recommandée)
2. Exécuter `supabase/schema.sql` puis les fichiers de `supabase/migrations/` (notamment `20260712_sync_app_state.sql`)
3. Copier `.env.example` → `.env.local` et renseigner `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_ANON_KEY` (optionnel : `SUPABASE_SERVICE_ROLE_KEY` côté serveur)
4. Redémarrer `npm run dev` — la sync se fait automatiquement ; bouton manuel dans **Paramètres → Synchronisation**

Sans ces variables, l’app fonctionne en local uniquement.

## Documentation

- [Plan produit & technique](docs/PLAN.md)

## Scripts

- `npm run dev` — développement
- `npm run build` — build production
- `npm run lint` — ESLint
