import type { AppState } from "./types";
import {
  buildCurriculumLessons,
  buildCurriculumModules,
  curriculumBlocks,
} from "./curriculum";
import { buildDefaultSequences } from "./levels";

export const DEMO_PASSWORD = "epcas2026";

const modules = buildCurriculumModules();
const lessons = buildCurriculumLessons();
const sequences = buildDefaultSequences(modules);

export const initialState: AppState = {
  classes: [
    {
      id: "class-afp-1",
      name: "AFP 1ʳᵉ année — EPCA Sion",
      year: "2025-2026",
      level: "AFP",
      studyYear: 1,
      active: true,
    },
    {
      id: "class-1",
      name: "CFC 1ʳᵉ année — EPCA Sion",
      year: "2025-2026",
      level: "CFC",
      studyYear: 1,
      active: true,
    },
    {
      id: "class-2",
      name: "CFC 2ᵉ année — EPCA Sion",
      year: "2025-2026",
      level: "CFC",
      studyYear: 2,
      active: true,
    },
    {
      id: "class-3",
      name: "CFC 3ᵉ année — EPCA Sion",
      year: "2025-2026",
      level: "CFC",
      studyYear: 3,
      active: true,
    },
  ],
  users: [
    {
      id: "user-admin",
      email: "admin@epcas.ch",
      password: DEMO_PASSWORD,
      displayName: "Admin EPCA",
      role: "admin",
      classId: "class-1",
      active: true,
    },
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
    {
      id: "user-apprentice-afp",
      email: "afp@epcas.ch",
      password: DEMO_PASSWORD,
      displayName: "Camille Rossi",
      role: "apprentice",
      classId: "class-afp-1",
      active: true,
    },
    {
      id: "user-apprentice-2",
      email: "jamie@epcas.ch",
      password: DEMO_PASSWORD,
      displayName: "Jamie Martin",
      role: "apprentice",
      classId: "class-1",
      active: true,
    },
    {
      id: "user-apprentice-3",
      email: "sam@epcas.ch",
      password: DEMO_PASSWORD,
      displayName: "Sam Bernard",
      role: "apprentice",
      classId: "class-2",
      active: true,
    },
    {
      id: "user-apprentice-4",
      email: "lea@epcas.ch",
      password: DEMO_PASSWORD,
      displayName: "Léa Favre",
      role: "apprentice",
      classId: "class-2",
      active: false,
    },
    {
      id: "user-apprentice-5",
      email: "noah@epcas.ch",
      password: DEMO_PASSWORD,
      displayName: "Noah Keller",
      role: "apprentice",
      classId: "class-3",
      active: true,
    },
  ],
  blocks: curriculumBlocks,
  modules,
  lessons,
  sequences,
  exercises: [
    {
      id: "ex-qcm-1",
      lessonId: "lesson-101-theorie",
      title: "Chaîne logistique historique",
      type: "qcm",
      difficulty: "facile",
      published: true,
      payload: {
        question:
          "Quelle est la séquence moderne qui correspond à « Chasser - Transformer - Consommer » ?",
        choices: [
          "Distribution - Production - Approvisionnement",
          "Approvisionnement - Production - Distribution",
          "Production - Distribution - Approvisionnement",
          "Stockage - Transport - Vente",
        ],
        correctIndex: 1,
        explanation:
          "Approvisionnement, production et distribution forment la chaîne logistique moderne.",
      },
    },
    {
      id: "ex-math-1",
      lessonId: "lesson-104-theorie",
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
      lessonId: "lesson-101-theorie",
      title: "Définir la chaîne Approvisionnement – Production – Distribution",
      type: "open",
      difficulty: "facile",
      published: true,
      payload: {
        question:
          "En une phrase, que relie la chaîne Approvisionnement – Production – Distribution ?",
        modelAnswer:
          "Elle relie l'achat/approvisionnement des biens, leur transformation, puis leur distribution au client.",
        requiredKeywords: [
          "approvisionnement|achat",
          "production|transformation",
          "distribution|client",
        ],
        optionalKeywords: ["flux", "logistique"],
        explanation:
          "Les trois maillons couvrent le parcours complet des marchandises.",
      },
    },
  ],
  progress: {
    "user-apprentice": [
      {
        lessonId: "lesson-101-theorie",
        status: "reading",
        modePref: "full",
      },
    ],
  },
  attempts: [],
  assessments: [],
  assessmentQuestions: [],
  textAnnotations: [],
  classTasks: [
    {
      id: "task-demo-1",
      classId: "class-1",
      title: "Lire le module 101 (théorie + glossaire)",
      description: "Marquer les pages comme lues avant le prochain cours.",
      dueAt: "2026-07-18",
      status: "todo",
      createdAt: "2026-07-12T08:00:00.000Z",
      updatedAt: "2026-07-12T08:00:00.000Z",
    },
    {
      id: "task-demo-2",
      classId: "class-1",
      userId: "user-apprentice",
      title: "Refaire l'exercice QCM chaîne logistique",
      description: "Score cible ≥ 80 %.",
      status: "doing",
      createdAt: "2026-07-12T08:05:00.000Z",
      updatedAt: "2026-07-12T08:05:00.000Z",
    },
  ],
  currentUserId: null,
};
