import type {
  InformatiqueApp,
  InformatiqueExercise,
  InformatiqueYear,
} from "./types";
import {
  GENERATED_INFORMATIQUE_EXERCISES,
  INFORMATIQUE_CATALOG_VERSION,
} from "./informatique-exercises.generated";

export { INFORMATIQUE_CATALOG_VERSION };

/** Années proposées dans l'UI (aucune 2e année Informatique). */
export const INFORMATIQUE_YEARS: {
  id: InformatiqueYear;
  label: string;
}[] = [
  { id: 1, label: "1re année" },
  { id: 3, label: "3e année" },
];

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

export function informatiqueYearLabel(year: InformatiqueYear): string {
  return INFORMATIQUE_YEARS.find((y) => y.id === year)?.label ?? `Année ${year}`;
}

/**
 * Mappe l'année d'apprentissage élève vers une année Informatique (1 ou 3).
 * Il n'y a pas de cours Informatique en 2e année.
 */
export function resolveInformatiqueYear(
  studyYear: number | null | undefined,
): InformatiqueYear {
  return studyYear === 3 ? 3 : 1;
}

export function isResultatPdf(asset: {
  name?: string;
  url?: string;
}): boolean {
  const ref = (asset.name || asset.url || "").toLowerCase();
  return /\.pdf(\?|$)/i.test(ref) && ref.includes("resultat");
}

/** Catalogue dérivé de public/assets/informatique/{1,3}/… */
export const SEED_INFORMATIQUE_EXERCISES: InformatiqueExercise[] =
  GENERATED_INFORMATIQUE_EXERCISES;

export function isCatalogInformatiqueExercise(id: string): boolean {
  return id.startsWith("inf-y1-") || id.startsWith("inf-y3-");
}

export function isLegacyPlaceholderInformatique(
  exercises: InformatiqueExercise[] | undefined,
): boolean {
  if (!exercises || exercises.length === 0) return true;
  const hasCatalog = exercises.some((e) => isCatalogInformatiqueExercise(e.id));
  if (hasCatalog) return false;
  return exercises.some(
    (e) =>
      e.id.startsWith("inf-word-") ||
      e.id.startsWith("inf-excel-") ||
      e.id.startsWith("inf-ppt-") ||
      e.documents.some((d) => d.url.includes("/placeholders/")) ||
      // Ancien seed sans champ year
      (e as { year?: number }).year == null,
  );
}

/**
 * Fusionne le catalogue FS avec les exercices personnalisés formateur.
 * Les ids catalogue sont toujours rafraîchis depuis le seed (URLs / fichiers).
 * Les overrides formateur (titre, consignes, publié) sont conservés.
 */
export function mergeInformatiqueExercises(
  saved: InformatiqueExercise[] | undefined,
  seed: InformatiqueExercise[] = SEED_INFORMATIQUE_EXERCISES,
): InformatiqueExercise[] {
  if (!saved || saved.length === 0 || isLegacyPlaceholderInformatique(saved)) {
    return seed;
  }

  const seedById = new Map(seed.map((e) => [e.id, e]));
  const overrides = new Map(
    saved.filter((e) => seedById.has(e.id)).map((e) => [e.id, e]),
  );
  const custom = saved.filter(
    (e) => !seedById.has(e.id) && !isLegacyPlaceholderExercise(e),
  );

  const mergedSeed = seed.map((base) => {
    const o = overrides.get(base.id);
    if (!o) return base;
    return {
      ...base,
      title: o.title || base.title,
      description: o.description || base.description,
      instructions: o.instructions || base.instructions,
      published: o.published,
      // Garder docs/corrections du catalogue FS ; fusionner ajouts manuels
      documents: mergeAssets(base.documents, o.documents),
      corrections: mergeAssets(base.corrections, o.corrections),
    };
  });

  return [...mergedSeed, ...custom];
}

function isLegacyPlaceholderExercise(e: InformatiqueExercise): boolean {
  return (
    e.id.startsWith("inf-word-") ||
    e.id.startsWith("inf-excel-") ||
    e.id.startsWith("inf-ppt-") ||
    e.documents.some((d) => d.url.includes("/placeholders/"))
  );
}

function mergeAssets<T extends { id: string; url: string }>(
  fromCatalog: T[],
  fromSaved: T[],
): T[] {
  const catalogUrls = new Set(fromCatalog.map((a) => a.url));
  const catalogIds = new Set(fromCatalog.map((a) => a.id));
  const extras = fromSaved.filter(
    (a) =>
      !catalogIds.has(a.id) &&
      !catalogUrls.has(a.url) &&
      a.url &&
      !a.url.includes("/placeholders/"),
  );
  return [...fromCatalog, ...extras];
}

export function newInformatiqueId(prefix: string): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2, 7)}`;
}

export function appsAvailableForYear(
  exercises: InformatiqueExercise[],
  year: InformatiqueYear,
): InformatiqueApp[] {
  const present = new Set(
    exercises.filter((e) => e.year === year).map((e) => e.app),
  );
  return INFORMATIQUE_APPS.map((a) => a.id).filter((id) => present.has(id));
}
