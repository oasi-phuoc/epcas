import type { Lesson } from "./types";

export function isPlaceholderLessonContent(text: string): boolean {
  return (
    text.includes("## Contenu à importer") ||
    text.includes("Contenu résumé à compléter après import OneNote")
  );
}

/** Contenu local / cloud enregistré avant une mise à jour du curriculum Git. */
export function isStaleSavedLessonContent(
  saved: string | undefined,
  base: string,
): boolean {
  if (saved == null || !saved.trim()) return true;
  if (isPlaceholderLessonContent(saved)) return true;

  if (base.includes("### 5.4 Illustrations")) {
    if (!saved.includes("### 5.4 Illustrations")) return true;
    if (saved.includes("### 5.4 Tabulateurs")) return true;
    if (
      base.includes("/assets/curriculum/805/illustrations-ruban.png") &&
      !saved.includes("/assets/curriculum/805/illustrations-ruban.png")
    ) {
      return true;
    }
    if (
      base.includes("/word/illustrations/") &&
      !saved.includes("/illustrations-ruban.png") &&
      !saved.includes("/image-onglet-format.png")
    ) {
      return true;
    }
  }

  if (base.includes("### 5.5 Bordure et trame")) {
    if (
      base.includes("bordure-et-trame-dialog.png") &&
      saved.includes("word-borders-step1.svg") &&
      !saved.includes("bordure-et-trame-dialog.png")
    ) {
      return true;
    }
  }

  if (base.includes("### 5.2 Écrire un texte")) {
    if (
      base.includes("mise-en-forme-caracteres-raccourcis.png") &&
      !saved.includes("mise-en-forme-caracteres-raccourcis.png") &&
      saved.includes("### 5.2 Écrire un texte")
    ) {
      return true;
    }
  }

  if (
    base.includes("ruban-alignements.png") &&
    !saved.includes("ruban-alignements.png") &&
    saved.includes("### 5.3 Paragraphe")
  ) {
    return true;
  }

  if (
    base.includes(":::figure word-align-paragraphes") &&
    !saved.includes(":::figure word-align-paragraphes") &&
    saved.includes("### 5.3 Paragraphe")
  ) {
    return true;
  }

  if (
    base.includes("aligner-paragraphes.png") &&
    saved.includes("### 5.3 Paragraphe") &&
    !saved.includes("aligner-paragraphes.png")
  ) {
    return true;
  }

  return false;
}

export function preferLessonMarkdown(
  saved: string | undefined,
  base: string,
): string {
  if (isStaleSavedLessonContent(saved, base)) return base;
  return saved ?? base;
}

/** Fusionne une leçon enregistrée avec la version catalogue Git. */
export function mergeLessonWithCurriculumBase(
  saved: Lesson | undefined,
  base: Lesson,
): Lesson {
  if (!saved) return base;

  const contentFull = preferLessonMarkdown(saved.contentFull, base.contentFull);
  const contentSummary = preferLessonMarkdown(
    saved.contentSummary,
    base.contentSummary,
  );

  let contentFullAfp = saved.contentFullAfp;
  let contentSummaryAfp = saved.contentSummaryAfp;
  if (
    contentFullAfp != null &&
    isStaleSavedLessonContent(contentFullAfp, base.contentFull)
  ) {
    contentFullAfp = undefined;
  }
  if (
    contentSummaryAfp != null &&
    isStaleSavedLessonContent(contentSummaryAfp, base.contentSummary)
  ) {
    contentSummaryAfp = undefined;
  }

  const next: Lesson = {
    ...base,
    ...saved,
    id: base.id,
    moduleId: base.moduleId,
    pageSlug: base.pageSlug,
    order: base.order,
    title: saved.title?.trim() ? saved.title : base.title,
    contentFull,
    contentSummary,
    contentFullAfp,
    contentSummaryAfp,
    published: saved.published ?? base.published,
  };

  if (contentFullAfp === undefined) delete next.contentFullAfp;
  if (contentSummaryAfp === undefined) delete next.contentSummaryAfp;

  return next;
}
