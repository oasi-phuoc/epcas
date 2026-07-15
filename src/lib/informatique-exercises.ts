import type {
  InformatiqueApp,
  InformatiqueExercise,
} from "./types";

export const INFORMATIQUE_APPS: {
  id: InformatiqueApp;
  label: string;
  description: string;
}[] = [
  {
    id: "word",
    label: "Word",
    description: "Traitement de texte Microsoft Word",
  },
  {
    id: "excel",
    label: "Excel",
    description: "Tableurs et calculs Microsoft Excel",
  },
  {
    id: "powerpoint",
    label: "PowerPoint",
    description: "Présentations Microsoft PowerPoint",
  },
];

export function informatiqueAppLabel(app: InformatiqueApp): string {
  return INFORMATIQUE_APPS.find((a) => a.id === app)?.label ?? app;
}

/** Exercices démo — documents / vidéos en URLs placeholder. */
export const SEED_INFORMATIQUE_EXERCISES: InformatiqueExercise[] = [
  {
    id: "inf-word-1",
    app: "word",
    title: "Mettre en forme une lettre commerciale",
    description:
      "Ouvrir le modèle fourni, appliquer les styles Titre 1 / Normal, puis générer une table des matières sur une page.",
    instructions: `## Consignes

1. Téléchargez le document **lettre-modele.docx**.
2. Appliquez le style **Titre 1** au titre principal.
3. Mettez le corps du texte en style **Normal**, police Century Gothic 11.
4. Insérez une **table des matières** en début de document.
5. Enregistrez sous le nom \`lettre-NOM-PRENOM.docx\`.

**Durée indicative :** 30 minutes.`,
    order: 1,
    published: true,
    documents: [
      {
        id: "inf-word-1-doc-1",
        name: "lettre-modele.docx",
        url: "/assets/informatique/placeholders/lettre-modele.docx",
        kind: "document",
      },
    ],
    corrections: [
      {
        id: "inf-word-1-vid-1",
        name: "Correction — styles et table des matières",
        url: "",
        kind: "video",
      },
    ],
  },
  {
    id: "inf-word-2",
    app: "word",
    title: "Publipostage simple",
    description:
      "Créer un publipostage à partir d'une liste Excel fournie.",
    instructions: `## Consignes

1. Ouvrez le document Word et le fichier Excel destinataires.
2. Lancez **Publipostage → Lettres**.
3. Reliez la source de données Excel.
4. Insérez les champs Nom, Prénom, Adresse.
5. Prévisualisez puis terminez la fusion.

**Durée indicative :** 40 minutes.`,
    order: 2,
    published: true,
    documents: [
      {
        id: "inf-word-2-doc-1",
        name: "modele-publipostage.docx",
        url: "/assets/informatique/placeholders/modele-publipostage.docx",
        kind: "document",
      },
      {
        id: "inf-word-2-doc-2",
        name: "destinataires.xlsx",
        url: "/assets/informatique/placeholders/destinataires.xlsx",
        kind: "document",
      },
    ],
    corrections: [],
  },
  {
    id: "inf-excel-1",
    app: "excel",
    title: "Calculer un taux de remplissage",
    description:
      "Compléter un tableau de stocks et calculer les taux de remplissage.",
    instructions: `## Consignes

1. Téléchargez le classeur **stocks-exercice.xlsx**.
2. Complétez la colonne **Taux** avec la formule \`=occupé/capacité\`.
3. Formatez en pourcentage avec 1 décimale.
4. Ajoutez une mise en forme conditionnelle (rouge si < 50 %).

**Durée indicative :** 25 minutes.`,
    order: 1,
    published: true,
    documents: [
      {
        id: "inf-excel-1-doc-1",
        name: "stocks-exercice.xlsx",
        url: "/assets/informatique/placeholders/stocks-exercice.xlsx",
        kind: "document",
      },
    ],
    corrections: [
      {
        id: "inf-excel-1-vid-1",
        name: "Correction — formules et mise en forme",
        url: "",
        kind: "video",
      },
    ],
  },
  {
    id: "inf-ppt-1",
    app: "powerpoint",
    title: "Présentation 5 diapositives",
    description:
      "Créer une courte présentation sur un outil ICT du cours.",
    instructions: `## Consignes

1. Créez une présentation de **5 diapositives** maximum.
2. Structure : titre · contexte · 2 points clés · conclusion.
3. Utilisez un thème cohérent (pas de texte trop petit).
4. Exportez en PDF pour le rendu.

**Durée indicative :** 35 minutes.`,
    order: 1,
    published: true,
    documents: [
      {
        id: "inf-ppt-1-doc-1",
        name: "grille-evaluation.pdf",
        url: "/assets/informatique/placeholders/grille-evaluation.pdf",
        kind: "document",
      },
    ],
    corrections: [],
  },
];

export function newInformatiqueId(prefix: string): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2, 7)}`;
}
