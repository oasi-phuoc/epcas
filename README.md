# EPCAS Logistique

Plateforme pédagogique **CFC Logisticien·ne — EPCA Sion** : théorie (complet / résumé), exercices interactifs, évaluations à blanc, suivi, interface formateur.

Thème pastel moderne + design system de composants partagés. Français uniquement.

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

### Comptes démo (stockage local Phase 1)

| Rôle | Email | Mot de passe |
|------|-------|--------------|
| Apprenti | `apprenti@epcas.ch` | `epcas2026` |
| Formateur | `formateur@epcas.ch` | `epcas2026` |

Sans variables Supabase, l’app tourne en **mode démo** (localStorage).

### Supabase (optionnel)

1. Créer un projet Free (région EU)
2. Exécuter `supabase/schema.sql`
3. Copier `.env.example` → `.env.local` et renseigner URL + anon key

## Documentation

- [Plan produit & technique](docs/PLAN.md)

## Scripts

- `npm run dev` — développement
- `npm run build` — build production
- `npm run lint` — ESLint
