# Plan — Plateforme pédagogique Logistique (EPCAS)

Document de planification produit et technique. **Aucun développement fonctionnel avant validation de ce plan.**

---

## 1. Vision

Plateforme d’apprentissage pour apprentis en logistique : théorie (lecture complète + mode résumé), exercices interactifs (théorie + maths), évaluations à blanc, et suivi pédagogique formateur / élève.

**Priorité d’usage :** ordinateur en salle / entreprise, avec une expérience mobile solide (révision, quiz, consultation des notes).

**Identité :** EPCAS — formation professionnelle Valais. Le branding et le contenu doivent coller au métier (entrepôt, flux, stocks, transport), pas à un LMS générique.

---

## 2. Utilisateurs et rôles

| Rôle | Besoins principaux |
|------|-------------------|
| **Apprenti** | Lire la théorie, basculer en résumé, s’entraîner, passer des blancs, voir sa progression |
| **Formateur** | Publier / organiser le contenu, créer exercices & blancs, suivre la classe, repérer les lacunes |
| **Admin** (optionnel V1) | Comptes, classes, paramètres |

Authentification obligatoire (comptes liés à une classe). Pas d’accès anonyme pour le suivi.

---

## 3. Modules fonctionnels

### 3.1 Théorie

- Chapitres / modules métier (ex. réception, stockage, préparation, expédition, inventaire, sécurité, docs transport…).
- **Deux modes de lecture sur le même contenu :**
  - **Complet** : texte détaillé, schémas, exemples, définitions.
  - **Résumé** : points clés uniquement (listes, formules, « à retenir »), pour révision rapide avant un blanc.
- Navigation claire : table des matières, progression de lecture (marqué « lu »).
- Contenu structuré (pas du Word collé) pour permettre le bascule résumé / complet.

### 3.2 Exercices interactifs

Deux familles :

1. **Liés à la théorie** — QCM, vrai/faux, association, mise en ordre (étapes d’un processus), cas pratiques courts.
2. **Maths logistique** — calculs de volumes, masses, taux de remplissage, rotations de stock, coûts, pourcentages, conversions d’unités, etc.

Comportement attendu :

- Feedback immédiat (bonne / mauvaise réponse + explication courte).
- Tentatives illimitées en mode entraînement.
- Score et historique sauvegardés pour le suivi.
- Lien optionnel « Revoir la théorie » vers le chapitre concerné.

### 3.3 Évaluations à blanc

- Conditions proches de l’examen : timer, une tentative (ou N tentatives configurables), pas d’aide / pas de théorie pendant le blanc.
- Mix théorie + maths selon le barème du formateur.
- Correction automatique quand possible + correction manuelle pour questions ouvertes (V2 si besoin).
- Résultat : score, détail par question, thèmes faibles.

### 3.4 Suivi des élèves

**Côté apprenti :**

- Progression par module (% théorie lue, exercices faits, scores).
- Historique des blancs.
- Points faibles suggérés (thèmes où le score est bas).

**Côté formateur :**

- Vue classe : progression, derniers scores, alertes (élève en retard / scores bas).
- Fiche élève détaillée.
- Export simple (CSV) pour réunions / bilans.

---

## 4. Expérience bureau / mobile

Un seul site responsive (pas deux apps). Adaptation par layout, pas par produit séparé.

| Zone | Bureau | Mobile |
|------|--------|--------|
| Navigation | Sidebar + fil d’Ariane | Bottom nav (Accueil, Théorie, Exercices, Blancs, Profil) |
| Théorie | Texte large + TOC latérale + toggle Résumé | TOC en tiroir ; toggle Résumé bien visible |
| Exercices | Zone confortable clavier / souris | Grands boutons, clavier numérique pour maths |
| Blancs | Timer visible, questions en colonnes si besoin | Une question par écran, timer sticky |
| Suivi formateur | Tableaux / filtres | Cartes + filtres simplifiés |

Règles UX :

- Touch targets ≥ 44px sur mobile.
- Pas de hover obligatoire pour une action critique.
- Modes Complet / Résumé persistés par utilisateur.
- Offline léger (V2) : pas requis en V1.

---

## 5. Architecture technique proposée

### Stack recommandée (V1)

| Couche | Choix | Pourquoi |
|--------|-------|----------|
| Frontend | **Next.js (App Router) + TypeScript** | SSR/SEO léger, routes claires, un seul déploiement |
| UI | **Tailwind CSS** + composants maison | Responsive rapide, design contrôlé |
| Auth + DB | **Supabase** (Auth, Postgres, RLS) | Comptes, classes, suivi sans backend lourd |
| Contenu théorie | Markdown / MDX versionné dans le repo **ou** éditeur formateur en DB | MDX = qualité + revue git ; DB = autonomie formateur |
| Hébergement | Vercel (front) + Supabase (data) | Simple pour une école |

### Modèle de données (esquisse)

```
users (id, role: apprentice|trainer|admin, class_id, display_name)
classes (id, name, year)
modules (id, slug, title, order)
lessons (id, module_id, title, content_full, content_summary, order)
exercises (id, lesson_id?, type, payload JSON, difficulty)
attempts (id, user_id, exercise_id, score, answers, created_at)
assessments (id, title, duration_min, questions JSON / relation)
assessment_attempts (id, user_id, assessment_id, score, answers, started_at, finished_at)
lesson_progress (user_id, lesson_id, status: unread|reading|done, mode_pref)
```

### Sécurité

- Row Level Security : un apprenti ne voit que ses données ; un formateur voit sa classe.
- Pas de secrets côté client.
- Sessions sécurisées (Supabase Auth).

---

## 6. Structure de contenu pédagogique (exemple)

À valider / adapter au référentiel CFC Logisticien·ne (ou programme EPCAS exact) :

1. Fondamentaux de la logistique & flux
2. Réception des marchandises
3. Stockage & implantations
4. Préparation de commandes
5. Expédition & transport
6. Inventaires & stocks
7. Documents & traçabilité
8. Sécurité, ergonomie, qualité
9. Maths appliquées (fil rouge transversal)

Chaque module = leçons + exercices liés + questions réutilisables dans les blancs.

---

## 7. Design & identité visuelle

Direction proposée (à confirmer) :

- Atmosphère **entrepôt / flux / précision** : bleus industriels, orange signalisation, fond texturé léger (pas flat blanc).
- Typographie expressive (pas Inter/Roboto) : une display pour titres, une lisible pour le corps de texte long.
- Hero / accueil : marque **EPCAS** dominante + une phrase métier + CTA « Continuer ma formation ».
- Éviter l’esthétique « dashboard violet » ou « carte cream + terracotta ».
- Motion discret : transition Complet ↔ Résumé, feedback exercice, entrée des scores.

---

## 8. Livraison par phases

### Phase 0 — Validation (cette étape)
- Valider ce plan, le référentiel, les rôles, la stack.

### Phase 1 — Socle
- Auth, rôles, classes, shell app (nav bureau + mobile).
- 1 module théorie démo (Complet / Résumé).
- 1 type d’exercice QCM + 1 exercice maths.
- Progression basique apprenti.

### Phase 2 — Pédagogie
- Tous les types d’exercices prévus.
- Évaluations à blanc (timer, score, historique).
- Suivi formateur (vue classe + fiche élève).

### Phase 3 — Contenu & polish
- Remplir les modules réels.
- Export CSV, alertes lacunes.
- Affinage mobile, accessibilité, performances.

### Phase 4 (optionnel)
- Questions ouvertes + correction manuelle.
- Mode hors-ligne lecture.
- Badges / gamification légère (si demandé).

---

## 9. Décisions à trancher avant le code

1. **Référentiel exact** : CFC Logisticien·ne ORFO, programme interne EPCAS, autre ?
2. **Qui crée le contenu** : formateurs via interface, ou contenu fourni / rédigé dans le repo (MDX) ?
3. **Comptes** : email/mot de passe école, SSO Microsoft/Google, codes classe ?
4. **Hébergement & domaine** : contraintes IT Valais / EPCAS ?
5. **Évaluations** : correction 100 % auto en V1, ou déjà des questions ouvertes ?
6. **Langue** : français uniquement, ou FR + DE plus tard ?
7. **Données sensibles** : hébergement CH/EU requis ?
8. **Nom produit** : « EPCAS Logistique », autre marque ?

---

## 10. Critères de succès V1

- Un apprenti peut lire un chapitre en mode résumé, faire 5 exercices, passer un blanc, et voir son score.
- Un formateur voit en un coup d’œil qui a travaillé et qui bloque.
- L’usage mobile permet révision + quiz sans frustration.
- Temps de chargement raisonnable sur réseau école.

---

## 11. Prochaine étape

Après validation des points de la section 9 (même réponses partielles), démarrer **Phase 1 — Socle** sur une branche dédiée.
