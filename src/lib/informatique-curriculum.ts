/** Modules ICT traités dans le menu Informatique (sans filtre d'année scolaire). */
export const INFORMATIQUE_CURRICULUM_MODULE_CODES = [
  "804",
  "805",
  "806",
  "807",
  "808",
] as const;

export type InformatiqueCurriculumModuleCode =
  (typeof INFORMATIQUE_CURRICULUM_MODULE_CODES)[number];

const INFORMATIQUE_CODE_SET = new Set<string>(
  INFORMATIQUE_CURRICULUM_MODULE_CODES,
);

export function isInformatiqueCurriculumModuleCode(
  code: string,
): code is InformatiqueCurriculumModuleCode {
  return INFORMATIQUE_CODE_SET.has(code);
}

export type CurriculumTrack = "logistique" | "informatique";

export function curriculumTrackForModuleCode(
  code: string,
): CurriculumTrack {
  return isInformatiqueCurriculumModuleCode(code)
    ? "informatique"
    : "logistique";
}

export function curriculumTheoryPaths(code: string) {
  const track = curriculumTrackForModuleCode(code);
  const base =
    track === "informatique" ? "/informatique/theorie" : "/logistique/theorie";
  return { index: base, module: (moduleId: string) => `${base}/module/${moduleId}` };
}

export function curriculumExercisePaths(code: string) {
  const track = curriculumTrackForModuleCode(code);
  const base =
    track === "informatique"
      ? "/informatique/exercices"
      : "/logistique/exercices";
  return {
    index: base,
    module: (moduleId: string) => `${base}/module/${moduleId}`,
    lesson: (lessonId: string) => `${base}/lecon/${lessonId}`,
  };
}
