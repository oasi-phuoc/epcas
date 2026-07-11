# Plan — EPCAS Logistique

Plateforme pédagogique pour apprentis **CFC Logisticien·ne — EPCA Sion**.  
Document de planification **validé** (décisions section 9 verrouillées). Prêt pour Phase 1 après feu vert.

---

## 1. Vision

**EPCAS Logistique** — site d’apprentissage pour apprentis logistique :

- Théorie (lecture **Complète** + mode **Résumé**)
- Exercices interactifs (théorie + maths)
- Évaluations à blanc (auto + questions ouvertes par mots-clés)
- Suivi des élèves
- Interface formateur (contenu + comptes + suivi)

**Usage principal :** ordinateur. **Aussi adapté mobile** (révision, quiz, consultation).

**Référentiel :** CFC Logisticien·ne, EPCA Sion.  
**Langue :** français uniquement.  
**Marque :** EPCAS Logistique.

---

## 2. Utilisateurs et rôles

| Rôle | Besoins |
|------|---------|
| **Apprenti** | Théorie, résumé, exercices, blancs, sa progression |
| **Formateur** | Créer / éditer tout le contenu, gérer les comptes élèves, suivre la classe, créer exercices & blancs |

**Gestion des comptes :** le formateur crée, modifie, désactive les comptes apprentis **dans l’interface** (pas de SSO, pas d’auto-inscription).  
Mot de passe initial défini / réinitialisé par le formateur ; l’apprenti peut le changer ensuite.

Pas d’accès anonyme.

---

## 3. Modules fonctionnels

### 3.1 Théorie (contenu créé par le formateur)

- Modules / leçons alignés CFC Logisticien·ne.
- **Deux modes** sur le même contenu :
  - **Complet** — texte détaillé, exemples, définitions
  - **Résumé** — points clés « à retenir »
- Le formateur saisit les deux versions (ou génère un brouillon résumé à partir du complet, éditable).
- Progression de lecture (non lu / en cours / lu).

### 3.2 Exercices interactifs

1. **Théorie** — QCM, vrai/faux, association, mise en ordre, cas courts  
2. **Maths logistique** — volumes, masses, remplissage, stocks, pourcentages, conversions, etc.

- Feedback immédiat + explication  
- Entraînement : tentatives illimitées  
- Historique pour le suivi  
- Lien « Revoir la théorie »

### 3.3 Évaluations à blanc

- Timer, tentatives configurables, pas d’aide pendant le blanc  
- Mix QCM / maths / **questions ouvertes**  
- **Correction automatique** pour tout ce qui est fermé  
- **Questions ouvertes :** correction auto par **mots-clés** (voir §3.5)  
- Score + détail + thèmes faibles

### 3.4 Suivi

**Apprenti :** progression modules, historique blancs, points faibles.  
**Formateur :** vue classe, fiche élève, alertes, export CSV.

### 3.5 Correction des questions ouvertes (mots-clés)

Le formateur définit pour chaque question ouverte :

| Champ | Exemple |
|-------|---------|
| Réponse attendue (affichage) | « Unité de stock / SKU » |
| **Mots-clés obligatoires** | `stock`, `unité` *ou* `SKU` |
| Mots-clés bonus (optionnel) | `référence`, `article` |
| Tolérance | ignorer accents, majuscules, pluriels simples |
| Seuil | ex. 100 % des obligatoires → juste ; partielle → demi-points |

**Algorithme V1 (simple et transparent) :**

1. Normaliser la réponse élève (minuscules, sans accents, trim).  
2. Vérifier la présence de chaque groupe de mots-clés (ET / OU selon config).  
3. Score : tout trouvé → points pleins ; partiel → points partiels si activé ; sinon 0.  
4. Afficher à l’élève : correct / partiel / incorrect + la réponse modèle (après soumission).

**Limite assumée :** ce n’est pas de l’IA sémantique. Une formulation correcte sans les mots-clés peut être refusée ; une phrase avec les bons mots peut passer. Le formateur rédige les mots-clés avec soin.  
**Filet de sécurité (option) :** flag « à revoir manuellement » si score partiel, pour le formateur.

---

## 4. Design system — thème pastel + composants uniques

### 4.1 Direction visuelle

- **Thème unique pastel moderne** (variables CSS globales) — une seule palette pour tout le site.
- Proposition de direction (ajustable) :
  - Base : lavande / bleu glacier très doux
  - Accent : menthe ou pêche pastel (un seul accent fort)
  - Texte : ardoise douce, pas noir pur
  - Fonds : dégradés pastel légers + texture discrète (pas flat blanc)
- Typographie expressive (pas Inter / Roboto / Arial) : une display titres + une lisible corps.
- Marque **EPCAS Logistique** bien visible sur l’accueil.
- Motion discret : transition Complet ↔ Résumé, feedback exercices, apparition des scores.
- Éviter : violet-indigo générique « AI », cream + terracotta, dark mode par défaut, pills partout, ombres empilées.

### 4.2 Bibliothèque de composants (obligatoire)

**Un seul design system** — aucun champ / bouton / select recréé page par page.

Composants partagés (ex. `components/ui/`) :

| Composant | Usage |
|-----------|--------|
| `Button` | primary / secondary / ghost / danger |
| `TextField` | input texte, email, password |
| `TextArea` | questions ouvertes, éditeur contenu |
| `Select` | listes déroulantes |
| `Checkbox` / `Radio` / `Switch` | choix, toggle Résumé |
| `NumberField` | maths, notes, durée |
| `Card` / `Panel` | uniquement quand interaction ou regroupement utile |
| `Badge` / `Tag` | statut, difficulté |
| `Alert` / `Toast` | feedback |
| `Modal` / `Drawer` | confirmations, TOC mobile |
| `Table` + `EmptyState` | suivi formateur |
| `Progress` / `ScoreBar` | progression |
| `Timer` | blancs |
| `PageHeader` / `Section` | titres de page harmonisés |
| `Skeleton` | chargement |

Règles :

- Toute nouvelle page **importe** ces composants ; pas de styles ad hoc pour les contrôles.
- Tokens (couleurs, rayons, espacements, ombres) en **CSS variables** uniquement.
- Même look bureau et mobile ; seuls layout et densité changent.

---

## 5. Expérience bureau / mobile

Un site responsive (pas deux apps).

| Zone | Bureau | Mobile |
|------|--------|--------|
| Nav | Sidebar + fil d’Ariane | Bottom nav |
| Théorie | TOC + toggle Résumé | TOC tiroir |
| Exercices | Confort clavier | Gros boutons, clavier numérique maths |
| Blancs | Timer visible | 1 question / écran, timer sticky |
| Formateur | Tableaux | Cartes + filtres simples |

---

## 6. Architecture technique

### Stack V1

| Couche | Choix |
|--------|-------|
| Front | **Next.js (App Router) + TypeScript** |
| UI | **Tailwind** + **design system maison** (§4.2) |
| Backend data | **Supabase** (Auth, Postgres, RLS, Storage si besoin) |
| Contenu | **Éditeur formateur → base Supabase** (pas MDX figé dans le repo) |
| Front hosting | **Vercel** (free Hobby) + **Supabase Free** pour data |

### Hébergement gratuit Supabase — oui, possible pour démarrer

Le plan **Free** Supabase convient pour une classe / petit centre en phase de démarrage :

| Ressource | Limite Free (indicatif) |
|-----------|-------------------------|
| Base Postgres | ~500 MB |
| Stockage fichiers | ~1 GB |
| Utilisateurs actifs / mois | ~50 000 MAU (largement OK pour une école) |
| Projets actifs | 2 |
| **Attention** | Projet **mis en pause après ~1 semaine d’inactivité** |

**Implications EPCAS :**

- OK pour prototype et première année si le site est utilisé régulièrement.
- Pendant les vacances longues : risque de pause → prévoir un ping / visite périodique, ou passer Pro plus tard (~usage réel).
- Le **front** (Next.js) se déploie gratuitement sur Vercel Hobby ; Supabase ne remplace pas l’hébergement du site, seulement auth + base.
- Données sur infra Supabase (régions EU possibles — à choisir **EU** à la création du projet).

### Modèle de données (esquisse)

```
profiles (id → auth.users, role: apprentice|trainer, class_id, display_name, active)
classes (id, name, year)
modules (id, title, order, published)
lessons (id, module_id, title, content_full, content_summary, order, published)
exercises (id, lesson_id?, type, payload JSON, difficulty, published)
attempts (id, user_id, exercise_id, score, answers, created_at)
assessments (id, title, duration_min, config JSON, published)
assessment_questions (id, assessment_id, type, payload, keywords JSON?, points)
assessment_attempts (id, user_id, assessment_id, score, answers, started_at, finished_at)
lesson_progress (user_id, lesson_id, status, mode_pref)
```

`payload` / `keywords` portent la config QCM, maths, ou mots-clés des ouvertes.

### Sécurité

- RLS : apprenti = ses données ; formateur = sa classe + contenu.
- Seul le formateur peut créer des users (via Edge Function / service role côté serveur, jamais la clé service dans le navigateur).

---

## 7. Structure de contenu (CFC Logisticien·ne — trame)

Trame de départ (le formateur remplit / ajuste via l’interface) :

1. Fondamentaux de la logistique & flux  
2. Réception des marchandises  
3. Stockage & implantations  
4. Préparation de commandes  
5. Expédition & transport  
6. Inventaires & stocks  
7. Documents & traçabilité  
8. Sécurité, ergonomie, qualité  
9. Maths appliquées (transversal)

---

## 8. Décisions verrouillées

| # | Décision | Choix |
|---|----------|--------|
| 1 | Référentiel | **CFC Logisticien·ne — EPCA Sion** |
| 2 | Contenu | **Formateur via interface** |
| 3 | Comptes | **Gérés par le formateur dans l’interface** |
| 4 | Hébergement data | **Supabase Free** (front Vercel Free) — avec limite pause inactivité |
| 5 | Correction | **Auto** + ouvertes par **mots-clés** (+ option relecture manuelle partielle) |
| 6 | Langue | **Français uniquement** |
| 7 | Nom | **EPCAS Logistique** |
| + | Design | **Thème pastel unique** + **design system de composants partagés** |

---

## 9. Livraison par phases

### Phase 0 — Plan *(fait)*
Décisions + design system + stack.

### Phase 1 — Socle + design system
- Tokens pastel + composants UI de base  
- Auth + rôles + shell (nav bureau / mobile)  
- Interface formateur : créer classe, créer comptes apprentis  
- 1 module théorie démo (Complet / Résumé) éditable  
- 1 QCM + 1 exercice maths + progression basique  

### Phase 2 — Pédagogie complète
- Tous types d’exercices  
- Blancs (timer, score)  
- Questions ouvertes + moteur mots-clés  
- Suivi formateur (classe + fiche)  

### Phase 3 — Contenu & polish
- Remplissage CFC via interface  
- Export CSV, alertes  
- Affinage mobile / accessibilité  

### Phase 4 (optionnel)
- Relecture manuelle des ouvertes partielles  
- Hors-ligne lecture  
- Gamification légère  

---

## 10. Critères de succès V1

- Formateur crée un compte apprenti, une leçon (complet + résumé), un exercice, un blanc avec question ouverte à mots-clés.  
- Apprenti lit en résumé, s’entraîne, passe un blanc, voit son score.  
- Même look des champs / boutons sur toutes les pages.  
- Mobile utilisable pour quiz et révision.  

---

## 11. Prochaine étape

**Démarrer Phase 1 — Socle + design system** dès confirmation.
