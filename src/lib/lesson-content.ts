import type { DiplomaLevel, Lesson, LessonPageSlug } from "./types";

/** Sous-menu Contenu formateur (hors Objectifs / Aperçu). */
export const FORMATEUR_CONTENT_PAGES: {
  slug: LessonPageSlug;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    slug: "theorie",
    title: "Théorie",
    description: "Connaissance théorique du module",
    href: "/formateur/contenu/theorie",
  },
  {
    slug: "glossaire",
    title: "Glossaire",
    description: "Termes et définitions",
    href: "/formateur/contenu/glossaire",
  },
  {
    slug: "situation",
    title: "Mise en situation",
    description: "Cas pratiques EnterSite",
    href: "/formateur/contenu/situation",
  },
  {
    slug: "maths",
    title: "Mathématiques",
    description: "Calculs et applications numériques",
    href: "/formateur/contenu/maths",
  },
  {
    slug: "verification",
    title: "Vérification des acquis",
    description: "Contrôle des connaissances",
    href: "/formateur/contenu/verification",
  },
];

export function isFormateurContentSlug(
  slug: string,
): slug is LessonPageSlug {
  return FORMATEUR_CONTENT_PAGES.some((p) => p.slug === slug);
}

export function pageSlugFromLessonId(id: string): LessonPageSlug | null {
  const match = /^lesson-\d+-(.+)$/.exec(id);
  if (!match) return null;
  const slug = match[1];
  const known: LessonPageSlug[] = [
    "objectifs",
    "apercu",
    "theorie",
    "glossaire",
    "situation",
    "maths",
    "verification",
  ];
  return known.includes(slug as LessonPageSlug)
    ? (slug as LessonPageSlug)
    : null;
}

/** AFP identique au CFC tant que les champs AFP ne sont pas renseignés. */
export function isAfpIdenticalToCfc(lesson: Lesson): boolean {
  if (
    lesson.contentFullAfp == null &&
    lesson.contentSummaryAfp == null
  ) {
    return true;
  }
  return (
    (lesson.contentFullAfp ?? lesson.contentFull) === lesson.contentFull &&
    (lesson.contentSummaryAfp ?? lesson.contentSummary) === lesson.contentSummary
  );
}

export function getLessonBody(
  lesson: Lesson,
  level: DiplomaLevel,
  mode: "full" | "summary",
): string {
  if (level === "AFP") {
    if (mode === "full") {
      return lesson.contentFullAfp ?? lesson.contentFull;
    }
    return lesson.contentSummaryAfp ?? lesson.contentSummary;
  }
  return mode === "full" ? lesson.contentFull : lesson.contentSummary;
}

export function applyLevelContent(
  lesson: Lesson,
  level: DiplomaLevel,
  title: string,
  full: string,
  summary: string,
): Lesson {
  if (level === "CFC") {
    const next: Lesson = {
      ...lesson,
      title,
      contentFull: full,
      contentSummary: summary,
    };
    // Si AFP était identique, garder le lien ; sinon conserver la variante AFP
    if (isAfpIdenticalToCfc(lesson)) {
      delete next.contentFullAfp;
      delete next.contentSummaryAfp;
    }
    return next;
  }

  // AFP : si égal au CFC → supprimer la variante (reste identique)
  if (full === lesson.contentFull && summary === lesson.contentSummary) {
    const next: Lesson = { ...lesson, title };
    delete next.contentFullAfp;
    delete next.contentSummaryAfp;
    return next;
  }

  return {
    ...lesson,
    title,
    contentFullAfp: full,
    contentSummaryAfp: summary,
  };
}
