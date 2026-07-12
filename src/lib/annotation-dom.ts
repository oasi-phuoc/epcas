/** Helpers DOM pour annotations en lecture seule (offsets sur texte plat). */

import {
  highlightClassName,
  normalizeHighlightColor,
  type HighlightColor,
} from "@/lib/highlight-colors";

export const ANNOTATION_CLASS = "epcas-anno";

export function getPlainText(root: Node): string {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let text = "";
  let node = walker.nextNode();
  while (node) {
    text += node.textContent ?? "";
    node = walker.nextNode();
  }
  return text;
}

export function findTextPosition(
  root: Node,
  targetOffset: number,
): { node: Text; offset: number } | null {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let remaining = targetOffset;
  let node = walker.nextNode() as Text | null;
  while (node) {
    const len = node.textContent?.length ?? 0;
    if (remaining <= len) {
      return { node, offset: remaining };
    }
    remaining -= len;
    node = walker.nextNode() as Text | null;
  }
  return null;
}

/** Offsets absolus d’une sélection dans `root` (texte plat). */
export function selectionOffsetsIn(
  root: HTMLElement,
  selection: Selection,
): { start: number; end: number } | null {
  if (selection.rangeCount === 0 || selection.isCollapsed) return null;
  const range = selection.getRangeAt(0);
  if (!root.contains(range.commonAncestorContainer)) return null;

  const pre = document.createRange();
  pre.selectNodeContents(root);
  pre.setEnd(range.startContainer, range.startOffset);
  const start = pre.toString().length;
  const end = start + range.toString().length;
  if (end <= start) return null;
  return { start, end };
}

export function clearAnnotationMarks(root: HTMLElement): void {
  root.querySelectorAll(`mark.${ANNOTATION_CLASS}`).forEach((mark) => {
    const parent = mark.parentNode;
    if (!parent) return;
    while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
    parent.removeChild(mark);
  });
  root.normalize();
}

function styleClasses(style: string, color?: HighlightColor | string): string {
  switch (style) {
    case "highlight":
      return `epcas-anno-highlight ${highlightClassName(normalizeHighlightColor(color))}`;
    case "underline":
      return "epcas-anno-underline";
    case "italic":
      return "epcas-anno-italic";
    case "bold":
      return "epcas-anno-bold";
    case "note":
      return "epcas-anno-note";
    default:
      return `epcas-anno-highlight ${highlightClassName(normalizeHighlightColor(color))}`;
  }
}

export function wrapRangeWithMark(
  range: Range,
  opts: {
    id: string;
    style: string;
    hasNote: boolean;
    color?: HighlightColor | string;
  },
): HTMLElement | null {
  const mark = document.createElement("mark");
  mark.className = `${ANNOTATION_CLASS} ${styleClasses(opts.style, opts.color)}`;
  mark.dataset.annotationId = opts.id;
  if (opts.hasNote) mark.dataset.hasNote = "1";
  mark.title = opts.hasNote ? "Annotation — cliquer pour voir" : "";

  try {
    range.surroundContents(mark);
    return mark;
  } catch {
    try {
      mark.appendChild(range.extractContents());
      range.insertNode(mark);
      return mark;
    } catch {
      return null;
    }
  }
}

export function applyAnnotationsToContainer(
  root: HTMLElement,
  annotations: Array<{
    id: string;
    start: number;
    end: number;
    style: string;
    color?: string;
    note?: string;
  }>,
): void {
  clearAnnotationMarks(root);
  const sorted = [...annotations].sort(
    (a, b) => b.start - a.start || b.end - a.end,
  );

  for (const ann of sorted) {
    if (ann.end <= ann.start) continue;
    const start = findTextPosition(root, ann.start);
    const end = findTextPosition(root, ann.end);
    if (!start || !end) continue;
    const range = document.createRange();
    try {
      range.setStart(start.node, start.offset);
      range.setEnd(end.node, end.offset);
      wrapRangeWithMark(range, {
        id: ann.id,
        style: ann.style,
        color: ann.color,
        hasNote: Boolean(ann.note?.trim()),
      });
    } catch {
      // ignore invalid ranges (contenu changé)
    }
  }
}

/** Annotations qui chevauchent [start, end). */
export function overlappingAnnotationIds(
  annotations: Array<{ id: string; start: number; end: number }>,
  start: number,
  end: number,
): string[] {
  return annotations
    .filter((a) => a.start < end && a.end > start)
    .map((a) => a.id);
}
