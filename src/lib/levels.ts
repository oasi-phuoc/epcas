import type {
  Assessment,
  ClassRoom,
  DiplomaLevel,
  Module,
  UserAccount,
} from "./types";

export const DIPLOMA_LEVELS: DiplomaLevel[] = ["AFP", "CFC"];

export const DIPLOMA_LABELS: Record<DiplomaLevel, string> = {
  AFP: "AFP",
  CFC: "CFC",
};

/** Modules CFC uniquement (gestion, production, FICO, bureautique avancée, intégration). */
const CFC_ONLY_CODES = new Set([
  "501",
  "502",
  "503",
  "504",
  "505",
  "506",
  "604",
  "612",
  "702",
  "703",
  "704",
  "705",
  "805",
  "806",
  "807",
  "901",
  "902",
]);

/** Répartition pédagogique par défaut EnterSite : opérationnel = AFP+CFC, approfondissement = CFC. */
export function defaultLevelsForModule(code: string): DiplomaLevel[] {
  if (CFC_ONLY_CODES.has(code)) return ["CFC"];
  return ["AFP", "CFC"];
}

export function normalizeLevels(
  levels: DiplomaLevel[] | undefined | null,
): DiplomaLevel[] {
  const set = new Set(
    (levels ?? []).filter((l): l is DiplomaLevel => l === "AFP" || l === "CFC"),
  );
  if (set.size === 0) return ["AFP", "CFC"];
  return DIPLOMA_LEVELS.filter((l) => set.has(l));
}

export function inferLevelFromClassName(name: string): DiplomaLevel {
  return /\bAFP\b/i.test(name) ? "AFP" : "CFC";
}

export function normalizeClassLevel(
  classroom: Partial<ClassRoom> & { name?: string },
): DiplomaLevel {
  if (classroom.level === "AFP" || classroom.level === "CFC") {
    return classroom.level;
  }
  return inferLevelFromClassName(classroom.name ?? "");
}

export function getUserDiplomaLevel(
  user: UserAccount | null | undefined,
  classes: ClassRoom[],
): DiplomaLevel {
  if (!user) return "CFC";
  const classroom = classes.find((c) => c.id === user.classId);
  if (!classroom) return "CFC";
  return normalizeClassLevel(classroom);
}

export function moduleVisibleForLevel(
  mod: Module,
  level: DiplomaLevel,
): boolean {
  return normalizeLevels(mod.levels).includes(level);
}

export function assessmentVisibleForLevel(
  assessment: Assessment,
  level: DiplomaLevel,
): boolean {
  return normalizeLevels(assessment.levels).includes(level);
}

export function levelsLabel(levels: DiplomaLevel[]): string {
  const n = normalizeLevels(levels);
  if (n.length === 2) return "AFP + CFC";
  return n[0] ?? "CFC";
}

export function toggleLevel(
  levels: DiplomaLevel[],
  level: DiplomaLevel,
): DiplomaLevel[] {
  const set = new Set(normalizeLevels(levels));
  if (set.has(level)) {
    if (set.size === 1) return normalizeLevels([...set]);
    set.delete(level);
  } else {
    set.add(level);
  }
  return DIPLOMA_LEVELS.filter((l) => set.has(l));
}
