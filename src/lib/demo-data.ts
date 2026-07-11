import type { AppState } from "./types";

export const DEMO_PASSWORD = "epcas2026";

export const initialState: AppState = {
  classRoom: {
    id: "class-1",
    name: "CFC Logisticien·ne — EPCA Sion",
    year: "2025-2026",
  },
  users: [
    {
      id: "user-trainer",
      email: "formateur@epcas.ch",
      password: DEMO_PASSWORD,
      displayName: "Formateur·rice EPCA",
      role: "trainer",
      classId: "class-1",
      active: true,
    },
    {
      id: "user-apprentice",
      email: "apprenti@epcas.ch",
      password: DEMO_PASSWORD,
      displayName: "Alex Dupont",
      role: "apprentice",
      classId: "class-1",
      active: true,
    },
  ],
  modules: [
    {
      id: "mod-1",
      title: "Fondamentaux de la logistique & flux",
      order: 1,
      published: true,
    },
  ],
  lessons: [
    {
      id: "lesson-1",
      moduleId: "mod-1",
      title: "Les flux logistiques en entrepôt",
      order: 1,
      published: true,
      contentFull: `## Objectif

Comprendre le parcours d'une marchandise dans un entrepôt, de la réception à l'expédition.

## Les grands flux

1. **Réception** — contrôle quantitatif et qualitatif à l'arrivée.
2. **Mise en stock** — affectation d'un emplacement (adresse de stockage).
3. **Préparation** — picking selon la commande client.
4. **Expédition** — colisage, étiquetage, chargement.

## Vocabulaire clé

- **SKU** : unité de stock / référence article.
- **FIFO** : premier entré, premier sorti.
- **Cross-docking** : transit sans stockage durable.

## Bonnes pratiques

Toujours tracer les mouvements (BL, bons de transfert) et signaler les écarts immédiatement.`,
      contentSummary: `## À retenir

- Parcours : **réception → stock → préparation → expédition**
- **SKU** = référence / unité de stock
- **FIFO** = premier entré, premier sorti
- Tracer chaque mouvement et signaler les écarts`,
    },
  ],
  exercises: [
    {
      id: "ex-qcm-1",
      lessonId: "lesson-1",
      title: "Ordre des flux",
      type: "qcm",
      difficulty: "facile",
      published: true,
      payload: {
        question:
          "Quel est l'ordre correct des flux principaux en entrepôt ?",
        choices: [
          "Préparation → Réception → Expédition → Stock",
          "Réception → Stock → Préparation → Expédition",
          "Expédition → Stock → Réception → Préparation",
          "Stock → Expédition → Préparation → Réception",
        ],
        correctIndex: 1,
        explanation:
          "La marchandise arrive (réception), est rangée (stock), puis préparée et enfin expédiée.",
      },
    },
    {
      id: "ex-math-1",
      lessonId: "lesson-1",
      title: "Taux de remplissage palette",
      type: "math",
      difficulty: "moyen",
      published: true,
      payload: {
        question:
          "Une palette peut contenir 120 cartons. Elle en contient 90. Quel est le taux de remplissage en % ?",
        unit: "%",
        answer: 75,
        tolerance: 0.1,
        explanation: "90 ÷ 120 × 100 = 75 %.",
      },
    },
    {
      id: "ex-open-1",
      lessonId: "lesson-1",
      title: "Définir un SKU",
      type: "open",
      difficulty: "facile",
      published: true,
      payload: {
        question: "Qu'est-ce qu'un SKU en logistique ?",
        modelAnswer: "Un SKU est une unité de stock / référence article.",
        requiredKeywords: ["stock", "unité|sku|référence|reference"],
        optionalKeywords: ["article"],
        explanation:
          "SKU = Stock Keeping Unit : identifiant d'une référence en stock.",
      },
    },
  ],
  progress: {
    "user-apprentice": [
      {
        lessonId: "lesson-1",
        status: "reading",
        modePref: "full",
      },
    ],
  },
  attempts: [],
  currentUserId: null,
};
