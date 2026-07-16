import { svgToDataUrl } from "@/lib/markdown-assets";

export type MarkdownFigureTemplate = {
  id: string;
  label: string;
  description: string;
  /** Bloc markdown à insérer (figure éditable ou image SVG). */
  markdown: string;
};

const SVG_ARROW = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 48" fill="none">
  <path d="M8 24h120" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
  <path d="M120 24l18-10v20z" fill="#2563eb"/>
</svg>`;

const SVG_PROCESS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 80" fill="none">
  <rect x="4" y="12" width="96" height="56" rx="8" stroke="#334155" stroke-width="2" fill="#f8fafc"/>
  <rect x="132" y="12" width="96" height="56" rx="8" stroke="#334155" stroke-width="2" fill="#f8fafc"/>
  <rect x="260" y="12" width="96" height="56" rx="8" stroke="#334155" stroke-width="2" fill="#f8fafc"/>
  <path d="M104 40h20M236 40h20" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M118 40l10-6v12zM250 40l10-6v12z" fill="#2563eb"/>
  <text x="52" y="44" text-anchor="middle" font-size="12" fill="#334155" font-family="system-ui,sans-serif">Étape 1</text>
  <text x="180" y="44" text-anchor="middle" font-size="12" fill="#334155" font-family="system-ui,sans-serif">Étape 2</text>
  <text x="308" y="44" text-anchor="middle" font-size="12" fill="#334155" font-family="system-ui,sans-serif">Étape 3</text>
</svg>`;

const SVG_GRID = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 180" fill="none">
  <rect x="8" y="8" width="120" height="72" rx="6" stroke="#94a3b8" stroke-width="2" fill="#fff"/>
  <rect x="152" y="8" width="120" height="72" rx="6" stroke="#94a3b8" stroke-width="2" fill="#fff"/>
  <rect x="8" y="100" width="120" height="72" rx="6" stroke="#94a3b8" stroke-width="2" fill="#fff"/>
  <rect x="152" y="100" width="120" height="72" rx="6" stroke="#94a3b8" stroke-width="2" fill="#fff"/>
</svg>`;

const SVG_CIRCLE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
  <circle cx="60" cy="60" r="48" stroke="#2563eb" stroke-width="3" fill="#eff6ff"/>
</svg>`;

function figureBlock(kind: string, body: string): string {
  return `:::figure ${kind}\n${body}\n:::`;
}

export const MARKDOWN_FIGURE_TEMPLATES: MarkdownFigureTemplate[] = [
  {
    id: "encadre",
    label: "Encadré",
    description: "Bloc texte dans un cadre",
    markdown: figureBlock("encadre", "Texte ou illustration à compléter…"),
  },
  {
    id: "remarque",
    label: "Remarque",
    description: "Encadré mis en évidence",
    markdown: figureBlock("remarque", "Point important à retenir…"),
  },
  {
    id: "etapes",
    label: "Étapes",
    description: "Liste d'étapes numérotées",
    markdown: figureBlock(
      "etapes",
      "1. Première étape\n2. Deuxième étape\n3. Troisième étape",
    ),
  },
  {
    id: "fleche",
    label: "Flèche",
    description: "Flèche directionnelle (SVG)",
    markdown: `![Flèche](${svgToDataUrl(SVG_ARROW)})`,
  },
  {
    id: "schema",
    label: "Schéma 3 étapes",
    description: "Processus linéaire (SVG)",
    markdown: `![Schéma processus](${svgToDataUrl(SVG_PROCESS)})`,
  },
  {
    id: "grille",
    label: "Grille 2×2",
    description: "Quatre zones (SVG)",
    markdown: `![Grille](${svgToDataUrl(SVG_GRID)})`,
  },
  {
    id: "cercle",
    label: "Cercle",
    description: "Forme circulaire (SVG)",
    markdown: `![Cercle](${svgToDataUrl(SVG_CIRCLE)})`,
  },
];
