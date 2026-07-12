import type {
  AssessmentQuestion,
  QuestionPayload,
  QuestionType,
} from "./types";

export const QUESTION_TYPE_META: Record<
  QuestionType,
  { label: string; description: string; short: string }
> = {
  qcm: {
    label: "QCM (1 réponse)",
    short: "QCM",
    description: "Une seule bonne réponse parmi plusieurs choix.",
  },
  multi: {
    label: "Choix multiples",
    short: "Multi",
    description: "Plusieurs bonnes réponses possibles.",
  },
  true_false: {
    label: "Vrai / Faux",
    short: "V/F",
    description: "Affirmation à valider ou invalider.",
  },
  math: {
    label: "Calcul numérique",
    short: "Maths",
    description: "Réponse chiffrée avec tolérance.",
  },
  open: {
    label: "Réponse ouverte",
    short: "Ouverte",
    description: "Texte libre noté via mots-clés.",
  },
  matching: {
    label: "Appariement",
    short: "Match",
    description: "Relier des éléments gauche ↔ droite.",
  },
  ordering: {
    label: "Remise en ordre",
    short: "Ordre",
    description: "Classer des étapes dans le bon ordre.",
  },
  fill_blank: {
    label: "Texte à trous",
    short: "Trous",
    description: "Compléter les ___ dans la phrase.",
  },
};

export function createTemplatePayload(type: QuestionType): QuestionPayload {
  switch (type) {
    case "qcm":
      return {
        question: "Quelle est la bonne réponse ?",
        choices: ["Option A", "Option B", "Option C", "Option D"],
        correctIndex: 0,
        explanation: "Expliquez ici pourquoi c'est la bonne réponse.",
      };
    case "multi":
      return {
        question: "Quelles affirmations sont correctes ? (plusieurs réponses)",
        choices: ["Affirmation 1", "Affirmation 2", "Affirmation 3", "Affirmation 4"],
        correctIndexes: [0, 2],
        explanation: "Précisez pourquoi ces choix sont justes.",
      };
    case "true_false":
      return {
        question: "Cette affirmation est-elle vraie ?",
        correct: true,
        explanation: "Justifiez la réponse Vrai ou Faux.",
      };
    case "math":
      return {
        question: "Calculez le résultat (indiquez l'unité si besoin).",
        unit: "%",
        answer: 100,
        tolerance: 0.1,
        explanation: "Montrez le calcul attendu.",
      };
    case "open":
      return {
        question: "Expliquez en quelques phrases…",
        modelAnswer: "Réponse modèle attendue.",
        requiredKeywords: ["mot1", "mot2"],
        optionalKeywords: ["bonus"],
        explanation: "Les mots-clés obligatoires doivent apparaître.",
      };
    case "matching":
      return {
        question: "Reliez chaque élément à sa définition.",
        pairs: [
          { left: "Terme A", right: "Définition A" },
          { left: "Terme B", right: "Définition B" },
          { left: "Terme C", right: "Définition C" },
        ],
        explanation: "Chaque paire doit être correctement associée.",
      };
    case "ordering":
      return {
        question: "Remettez les étapes dans le bon ordre.",
        items: ["Étape 1", "Étape 2", "Étape 3", "Étape 4"],
        explanation: "L'ordre ci-dessus est l'ordre correct.",
      };
    case "fill_blank":
      return {
        question:
          "Le stock ___ indique le niveau qui déclenche une commande. La couverture se calcule : stock / ___.",
        answers: ["minimum", "besoin journalier"],
        caseSensitive: false,
        explanation: "Chaque ___ correspond à une réponse, dans l'ordre.",
      };
  }
}

export function createTemplateQuestion(
  assessmentId: string,
  type: QuestionType,
  order: number,
): AssessmentQuestion {
  const meta = QUESTION_TYPE_META[type];
  return {
    id: `aq-${crypto.randomUUID().slice(0, 8)}`,
    assessmentId,
    type,
    title: `Question ${meta.short}`,
    points: type === "open" || type === "matching" ? 2 : 1,
    order,
    payload: createTemplatePayload(type),
  };
}
