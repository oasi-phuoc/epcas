import type { DiplomaLevel, Lesson, LessonPageSlug } from "./types";

/** Pages du parcours Théorie (apprenti). */
export const THEORY_PAGE_SLUGS: LessonPageSlug[] = [
  "objectifs",
  "apercu",
  "theorie",
  "glossaire",
];

/** Pages Exercices liées aux modules curriculum (hors Informatique Office). */
export const MODULE_EXERCISE_PAGE_SLUGS: LessonPageSlug[] = [
  "situation",
  "maths",
  "verification",
];

/** Pages du parcours Exercices (apprenti) — contenu EnterSite. */
export const EXERCISE_PAGE_SLUGS: LessonPageSlug[] = [
  ...MODULE_EXERCISE_PAGE_SLUGS,
  "informatique",
];

export function isTheoryPageSlug(slug: LessonPageSlug): boolean {
  return THEORY_PAGE_SLUGS.includes(slug);
}

export function isExercisePageSlug(slug: LessonPageSlug): boolean {
  return EXERCISE_PAGE_SLUGS.includes(slug);
}

/** Sous-menu Contenu formateur — pages théorie. */
export const FORMATEUR_THEORY_PAGES: {
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
];

/** Sous-menu Exercices formateur — situations, maths, vérifications, informatique. */
export const FORMATEUR_EXERCISE_PAGES: {
  slug: LessonPageSlug;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    slug: "situation",
    title: "Mise en situation",
    description: "Cas pratiques EnterSite",
    href: "/formateur/exercices/situation",
  },
  {
    slug: "maths",
    title: "Mathématiques",
    description: "Calculs et applications numériques",
    href: "/formateur/exercices/maths",
  },
  {
    slug: "verification",
    title: "Vérification des acquis",
    description: "Contrôle des connaissances",
    href: "/formateur/exercices/verification",
  },
  {
    slug: "informatique",
    title: "Informatique",
    description: "Word, Excel, PowerPoint — documents et corrections vidéo",
    href: "/formateur/exercices/informatique",
  },
];

/** @deprecated Utiliser FORMATEUR_THEORY_PAGES + FORMATEUR_EXERCISE_PAGES */
export const FORMATEUR_CONTENT_PAGES = [
  ...FORMATEUR_THEORY_PAGES,
  ...FORMATEUR_EXERCISE_PAGES,
];

export function isFormateurContentSlug(
  slug: string,
): slug is LessonPageSlug {
  return FORMATEUR_CONTENT_PAGES.some((p) => p.slug === slug);
}

export function isFormateurExerciseSlug(
  slug: string,
): slug is LessonPageSlug {
  return FORMATEUR_EXERCISE_PAGES.some((p) => p.slug === slug);
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
    "informatique",
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
