/** Palette de surlignage partagée (formateur markdown + annotations élèves). */

export const HIGHLIGHT_COLORS = [
  { id: "yellow", label: "Jaune", bg: "rgb(250 204 21 / 0.55)" },
  { id: "green", label: "Vert", bg: "rgb(74 222 128 / 0.5)" },
  { id: "blue", label: "Bleu", bg: "rgb(125 211 252 / 0.55)" },
  { id: "pink", label: "Rose", bg: "rgb(249 168 212 / 0.55)" },
  { id: "orange", label: "Orange", bg: "rgb(251 146 60 / 0.5)" },
  { id: "violet", label: "Violet", bg: "rgb(196 181 253 / 0.55)" },
] as const;

export type HighlightColor = (typeof HIGHLIGHT_COLORS)[number]["id"];

export const DEFAULT_HIGHLIGHT_COLOR: HighlightColor = "yellow";

export function isHighlightColor(value: unknown): value is HighlightColor {
  return (
    typeof value === "string" &&
    HIGHLIGHT_COLORS.some((c) => c.id === value)
  );
}

export function normalizeHighlightColor(
  value: unknown,
): HighlightColor {
  return isHighlightColor(value) ? value : DEFAULT_HIGHLIGHT_COLOR;
}

export function highlightColorMeta(color: HighlightColor) {
  return (
    HIGHLIGHT_COLORS.find((c) => c.id === color) ?? HIGHLIGHT_COLORS[0]
  );
}

/** Classe CSS pour mark markdown / annotation */
export function highlightClassName(color: HighlightColor): string {
  return `epcas-hl epcas-hl-${normalizeHighlightColor(color)}`;
}

/**
 * Syntaxe markdown :
 * - `==texte==` → jaune (défaut)
 * - `==[green]texte==` → couleur nommée
 */
export function wrapHighlightMarkdown(
  text: string,
  color: HighlightColor = DEFAULT_HIGHLIGHT_COLOR,
): string {
  const inner = text || "texte important";
  if (color === DEFAULT_HIGHLIGHT_COLOR) return `==${inner}==`;
  return `==[${color}]${inner}==`;
}

export function parseHighlightMarkdown(
  token: string,
): { color: HighlightColor; text: string } | null {
  if (!token.startsWith("==") || !token.endsWith("==")) return null;
  const inner = token.slice(2, -2);
  const colored = inner.match(/^\[(\w+)\]([\s\S]*)$/);
  if (colored) {
    return {
      color: normalizeHighlightColor(colored[1]),
      text: colored[2],
    };
  }
  return { color: DEFAULT_HIGHLIGHT_COLOR, text: inner };
}
