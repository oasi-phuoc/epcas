export type StudentHighlight = {
  id: string;
  quote: string;
};

export type StudentComment = {
  id: string;
  text: string;
  /** Extrait après lequel insérer le commentaire (optionnel). */
  afterQuote?: string;
};

export type StudentLessonAnnotations = {
  highlights: StudentHighlight[];
  comments: StudentComment[];
};

export function emptyStudentLessonAnnotations(): StudentLessonAnnotations {
  return { highlights: [], comments: [] };
}

export function studentAnnotationStorageKey(
  userId: string,
  lessonId: string,
  mode: "full" | "summary",
  chapterIndex: number,
): string {
  return `epcas-lesson-annot:${userId}:${lessonId}:${mode}:${chapterIndex}`;
}

export function loadStudentLessonAnnotations(
  userId: string,
  lessonId: string,
  mode: "full" | "summary",
  chapterIndex: number,
): StudentLessonAnnotations {
  if (typeof window === "undefined") return emptyStudentLessonAnnotations();
  try {
    const raw = localStorage.getItem(
      studentAnnotationStorageKey(userId, lessonId, mode, chapterIndex),
    );
    if (!raw) return emptyStudentLessonAnnotations();
    const parsed = JSON.parse(raw) as StudentLessonAnnotations;
    return {
      highlights: Array.isArray(parsed.highlights) ? parsed.highlights : [],
      comments: Array.isArray(parsed.comments) ? parsed.comments : [],
    };
  } catch {
    return emptyStudentLessonAnnotations();
  }
}

export function saveStudentLessonAnnotations(
  userId: string,
  lessonId: string,
  mode: "full" | "summary",
  chapterIndex: number,
  data: StudentLessonAnnotations,
): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(
    studentAnnotationStorageKey(userId, lessonId, mode, chapterIndex),
    JSON.stringify(data),
  );
}

export function newStudentAnnotationId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function collapseSpaces(s: string): string {
  return s.replace(/\s+/g, " ").trim();
}

/** Retrouve une sous-chaîne du markdown correspondant à la sélection. */
export function resolveQuoteInMarkdown(
  markdown: string,
  selection: string,
): string | null {
  const q = selection.trim();
  if (!q) return null;
  if (markdown.includes(q)) return q;
  const collapsed = collapseSpaces(q);
  if (markdown.includes(collapsed)) return collapsed;
  return null;
}

function applyHighlights(
  markdown: string,
  highlights: StudentHighlight[],
): string {
  let out = markdown;
  for (const h of highlights) {
    const quote = h.quote;
    if (!quote) continue;
    const wrapped = `==${quote}==`;
    if (out.includes(wrapped)) continue;
    const idx = out.indexOf(quote);
    if (idx === -1) continue;
    out =
      out.slice(0, idx) + wrapped + out.slice(idx + quote.length);
  }
  return out;
}

function insertCommentBlock(
  markdown: string,
  comment: StudentComment,
): string {
  const block = `\n\n:::eleve-note ${comment.id}\n${comment.text.trim()}\n:::\n`;
  const anchor = comment.afterQuote?.trim();
  if (!anchor) return markdown + block;
  const idx = markdown.indexOf(anchor);
  if (idx === -1) return markdown + block;
  let lineEnd = markdown.indexOf("\n", idx);
  if (lineEnd === -1) lineEnd = markdown.length;
  return markdown.slice(0, lineEnd) + block + markdown.slice(lineEnd);
}

export function applyStudentAnnotations(
  markdown: string,
  annotations: StudentLessonAnnotations,
): string {
  let out = applyHighlights(markdown, annotations.highlights);
  for (const comment of annotations.comments) {
    out = insertCommentBlock(out, comment);
  }
  return out;
}
