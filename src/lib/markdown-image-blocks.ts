/** Ligne affichée à la place du data URL dans la zone de texte (mode édition). */
export const MARKDOWN_IMAGE_DATA_PLACEHOLDER = "(image enregistrée)";

export type MarkdownImageAlign = "left" | "center" | "right" | "justify";

const IMAGE_BLOCK_OPEN =
  /^:::image\s+(left|center|right|justify)\s*$/i;

export function isMarkdownImageAlign(
  value: string,
): value is MarkdownImageAlign {
  return (
    value === "left" ||
    value === "center" ||
    value === "right" ||
    value === "justify"
  );
}

/** Numéro suivant pour les libellés « image N » dans un document. */
export function nextEmbeddedImageLabel(markdown: string): string {
  let max = 0;
  for (const m of markdown.matchAll(/\bimage\s+(\d+)\b/gi)) {
    const n = Number(m[1]);
    if (Number.isFinite(n)) max = Math.max(max, n);
  }
  return `image ${max + 1}`;
}

export function buildAlignedImageBlock(
  align: MarkdownImageAlign,
  label: string,
  dataUrl: string,
): string {
  const safeLabel = label.trim() || "image 1";
  return `:::image ${align}\n${safeLabel}\n${dataUrl.trim()}\n:::`;
}

/** Extrait les lignes data: des blocs :::image dans l'ordre du document. */
export function collectImageBlockDataLines(markdown: string): string[] {
  const lines = markdown.split("\n");
  const data: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    if (!IMAGE_BLOCK_OPEN.test(lines[i].trim())) continue;
    const dataLine = lines[i + 2]?.trim() ?? "";
    if (dataLine.startsWith("data:")) data.push(lines[i + 2]);
  }
  return data;
}

/** Remplace les data URL par un libellé court dans l'éditeur. */
export function collapseImageBlocksForEditor(markdown: string): string {
  const lines = markdown.split("\n");
  const out: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    if (!IMAGE_BLOCK_OPEN.test(lines[i].trim())) {
      out.push(lines[i]);
      continue;
    }
    const labelLine = lines[i + 1];
    const dataLine = lines[i + 2];
    const closeLine = lines[i + 3];
    if (
      labelLine !== undefined &&
      dataLine?.trim().startsWith("data:") &&
      closeLine?.trim() === ":::"
    ) {
      out.push(
        lines[i],
        labelLine,
        MARKDOWN_IMAGE_DATA_PLACEHOLDER,
        closeLine,
      );
      i += 3;
      continue;
    }
    out.push(lines[i]);
  }
  return out.join("\n");
}

/**
 * Réinjecte les data URL depuis le markdown canonique lorsque l'éditeur
 * conserve le placeholder sur la ligne données.
 */
export function expandImageBlocksFromEditor(
  edited: string,
  canonical: string,
): string {
  const dataQueue = [...collectImageBlockDataLines(canonical)];
  const lines = edited.split("\n");
  const out: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    if (!IMAGE_BLOCK_OPEN.test(lines[i].trim())) {
      out.push(lines[i]);
      continue;
    }
    const labelLine = lines[i + 1];
    const thirdLine = lines[i + 2];
    const closeLine = lines[i + 3];
    if (
      labelLine !== undefined &&
      thirdLine?.trim() === MARKDOWN_IMAGE_DATA_PLACEHOLDER &&
      closeLine?.trim() === ":::"
    ) {
      const restored = dataQueue.shift();
      out.push(
        lines[i],
        labelLine,
        restored ?? thirdLine,
        closeLine,
      );
      i += 3;
      continue;
    }
    out.push(lines[i]);
  }
  return out.join("\n");
}

export function imageBlockFigureClass(align: MarkdownImageAlign): string {
  switch (align) {
    case "left":
      return "mr-auto ml-0";
    case "right":
      return "ml-auto mr-0";
    case "justify":
      return "w-full max-w-none";
    case "center":
    default:
      return "mx-auto";
  }
}

export function imageBlockImgClass(align: MarkdownImageAlign): string {
  const base =
    "max-h-[28rem] rounded-lg border border-border object-contain shadow-sm";
  if (align === "justify") {
    return cnJoin(base, "w-full max-w-full");
  }
  return cnJoin(base, "w-auto max-w-full");
}

function cnJoin(...parts: string[]) {
  return parts.filter(Boolean).join(" ");
}

export type ParsedMarkdownImageBlock = {
  align: MarkdownImageAlign;
  label: string;
  src: string;
  nextIndex: number;
};

export function parseMarkdownImageBlock(
  lines: string[],
  start: number,
): ParsedMarkdownImageBlock | null {
  const open = lines[start]?.trim().match(IMAGE_BLOCK_OPEN);
  if (!open) return null;
  const alignRaw = open[1].toLowerCase();
  if (!isMarkdownImageAlign(alignRaw)) return null;

  const label = lines[start + 1]?.trim() ?? "";
  const srcLine = lines[start + 2]?.trim() ?? "";
  const close = lines[start + 3]?.trim();
  if (close !== ":::") return null;
  if (!srcLine.startsWith("data:") && !/^https?:\/\//i.test(srcLine)) {
    return null;
  }

  return {
    align: alignRaw,
    label,
    src: srcLine,
    nextIndex: start + 4,
  };
}
