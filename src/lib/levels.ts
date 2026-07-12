import type {
  Assessment,
  ClassRoom,
  DiplomaLevel,
  LearningSequence,
  Module,
  StudyYear,
  UserAccount,
} from "./types";

export const DIPLOMA_LEVELS: DiplomaLevel[] = ["AFP", "CFC"];

export const DIPLOMA_LABELS: Record<DiplomaLevel, string> = {
  AFP: "AFP",
  CFC: "CFC",
};

export const STUDY_YEARS: StudyYear[] = [1, 2, 3];

export const STUDY_YEAR_LABELS: Record<StudyYear, string> = {
  1: "1ʳᵉ année",
  2: "2ᵉ année",
  3: "3ᵉ année",
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

/**
 * Répartition pédagogique par défaut par année (codes modules).
 * Un module n'apparaît qu'une fois par niveau.
 */
const DEFAULT_YEAR_CODES: Record<DiplomaLevel, Record<StudyYear, string[]>> = {
  AFP: {
    1: [
      "100",
      "101",
      "102",
      "103",
      "104",
      "105",
      "109",
      "110",
      "201",
      "202",
      "203",
      "301",
      "302",
      "303",
      "304",
      "305",
      "306",
      "307",
      "308",
      "401",
      "402",
      "403",
      "404",
      "405",
      "801",
      "803",
      "804",
    ],
    2: [
      "106",
      "107",
      "108",
      "204",
      "205",
      "206",
      "207",
      "208",
      "209",
      "309",
      "310",
      "311",
      "312",
      "406",
      "407",
      "408",
      "409",
      "410",
      "601",
      "602",
      "603",
      "605",
      "606",
      "607",
      "608",
      "609",
      "610",
      "611",
      "613",
      "614",
      "615",
      "616",
      "701",
      "802",
      "808",
      "809",
    ],
    3: [],
  },
  CFC: {
    1: [
      "100",
      "101",
      "102",
      "103",
      "104",
      "105",
      "106",
      "107",
      "108",
      "109",
      "110",
      "201",
      "202",
      "203",
      "204",
      "205",
      "206",
      "301",
      "302",
      "303",
      "304",
      "305",
      "306",
      "307",
      "308",
      "309",
      "401",
      "402",
      "403",
      "404",
      "405",
      "801",
      "803",
      "804",
    ],
    2: [
      "207",
      "208",
      "209",
      "310",
      "311",
      "312",
      "406",
      "407",
      "408",
      "409",
      "410",
      "501",
      "502",
      "503",
      "601",
      "602",
      "603",
      "604",
      "605",
      "606",
      "607",
      "608",
      "609",
      "610",
      "611",
      "701",
      "802",
      "805",
      "808",
      "809",
    ],
    3: [
      "504",
      "505",
      "506",
      "612",
      "613",
      "614",
      "615",
      "616",
      "702",
      "703",
      "704",
      "705",
      "806",
      "807",
      "901",
      "902",
    ],
  },
};

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

export function maxStudyYear(level: DiplomaLevel): StudyYear {
  return level === "AFP" ? 2 : 3;
}

export function normalizeStudyYear(
  value: unknown,
  level: DiplomaLevel = "CFC",
): StudyYear {
  const n = typeof value === "number" ? value : Number(value);
  const max = maxStudyYear(level);
  if (n === 1 || n === 2 || n === 3) {
    return (Math.min(n, max) as StudyYear);
  }
  return 1;
}

export function inferLevelFromClassName(name: string): DiplomaLevel {
  return /\bAFP\b/i.test(name) ? "AFP" : "CFC";
}

export function inferStudyYearFromClassName(name: string): StudyYear {
  if (/3[eèᵉ]|troisi/i.test(name) || /\b3\b/.test(name)) return 3;
  if (/2[eèᵉ]|deuxi/i.test(name) || /\b2\b/.test(name)) return 2;
  return 1;
}

export function normalizeClassLevel(
  classroom: Partial<ClassRoom> & { name?: string },
): DiplomaLevel {
  if (classroom.level === "AFP" || classroom.level === "CFC") {
    return classroom.level;
  }
  return inferLevelFromClassName(classroom.name ?? "");
}

export function normalizeClassStudyYear(
  classroom: Partial<ClassRoom> & { name?: string },
): StudyYear {
  const level = normalizeClassLevel(classroom);
  if (
    classroom.studyYear === 1 ||
    classroom.studyYear === 2 ||
    classroom.studyYear === 3
  ) {
    return normalizeStudyYear(classroom.studyYear, level);
  }
  return normalizeStudyYear(inferStudyYearFromClassName(classroom.name ?? ""), level);
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

export function getUserStudyYear(
  user: UserAccount | null | undefined,
  classes: ClassRoom[],
): StudyYear {
  if (!user) return 1;
  const classroom = classes.find((c) => c.id === user.classId);
  if (!classroom) return 1;
  return normalizeClassStudyYear(classroom);
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

export function sequenceId(level: DiplomaLevel, studyYear: StudyYear): string {
  return `seq-${level}-${studyYear}`;
}

export function buildDefaultSequences(modules: Module[]): LearningSequence[] {
  const byCode = new Map(modules.map((m) => [m.code, m.id] as const));
  const sequences: LearningSequence[] = [];

  for (const level of DIPLOMA_LEVELS) {
    const max = maxStudyYear(level);
    for (const year of STUDY_YEARS) {
      if (year > max) {
        sequences.push({
          id: sequenceId(level, year),
          level,
          studyYear: year,
          moduleIds: [],
        });
        continue;
      }
      const codes = DEFAULT_YEAR_CODES[level][year] ?? [];
      const moduleIds = codes
        .map((code) => byCode.get(code))
        .filter((id): id is string => Boolean(id))
        .filter((id) => {
          const mod = modules.find((m) => m.id === id);
          return mod ? moduleVisibleForLevel(mod, level) : false;
        });
      sequences.push({
        id: sequenceId(level, year),
        level,
        studyYear: year,
        moduleIds,
      });
    }
  }

  // Modules du niveau non placés → année 1 (fin de liste)
  for (const level of DIPLOMA_LEVELS) {
    const placed = new Set(
      sequences
        .filter((s) => s.level === level)
        .flatMap((s) => s.moduleIds),
    );
    const missing = modules
      .filter((m) => moduleVisibleForLevel(m, level) && !placed.has(m.id))
      .sort((a, b) => a.code.localeCompare(b.code))
      .map((m) => m.id);
    if (missing.length === 0) continue;
    const first = sequences.find((s) => s.level === level && s.studyYear === 1);
    if (first) first.moduleIds = [...first.moduleIds, ...missing];
  }

  return sequences;
}

export function getSequence(
  sequences: LearningSequence[],
  level: DiplomaLevel,
  studyYear: StudyYear,
): LearningSequence | undefined {
  return (
    sequences.find((s) => s.level === level && s.studyYear === studyYear) ??
    sequences.find((s) => s.id === sequenceId(level, studyYear))
  );
}

export function normalizeSequences(
  sequences: LearningSequence[] | undefined,
  modules: Module[],
): LearningSequence[] {
  const defaults = buildDefaultSequences(modules);
  if (!Array.isArray(sequences) || sequences.length === 0) return defaults;

  const validIds = new Set(modules.map((m) => m.id));
  const byKey = new Map(
    sequences.map((s) => [`${s.level}-${s.studyYear}`, s] as const),
  );

  // 1) Nettoyage interne à chaque année
  const perYear = defaults.map((def) => {
    const saved = byKey.get(`${def.level}-${def.studyYear}`);
    if (!saved) return def;
    const seen = new Set<string>();
    const moduleIds = saved.moduleIds.filter((id) => {
      if (!validIds.has(id) || seen.has(id)) return false;
      const mod = modules.find((m) => m.id === id);
      if (!mod || !moduleVisibleForLevel(mod, def.level)) return false;
      seen.add(id);
      return true;
    });
    return { ...def, moduleIds };
  });

  // 2) Un module = une seule année par niveau (AFP / CFC)
  //    En cas de doublon (données anciennes), on conserve la 1ʳᵉ année trouvée.
  const claimedByLevel = new Map<DiplomaLevel, Set<string>>();
  for (const level of DIPLOMA_LEVELS) {
    claimedByLevel.set(level, new Set());
  }

  return perYear.map((seq) => {
    const claimed = claimedByLevel.get(seq.level)!;
    const moduleIds = seq.moduleIds.filter((id) => {
      if (claimed.has(id)) return false;
      claimed.add(id);
      return true;
    });
    return { ...seq, moduleIds };
  });
}

/** Année où un module est déjà placé pour un niveau (ou null). */
export function findModuleStudyYear(
  sequences: LearningSequence[],
  level: DiplomaLevel,
  moduleId: string,
): StudyYear | null {
  for (const year of STUDY_YEARS) {
    if (year > maxStudyYear(level)) continue;
    const seq = getSequence(sequences, level, year);
    if (seq?.moduleIds.includes(moduleId)) return year;
  }
  return null;
}

/** Modules d'un niveau non encore assignés à une année. */
export function unassignedModuleIds(
  sequences: LearningSequence[],
  modules: Module[],
  level: DiplomaLevel,
): string[] {
  const placed = new Set(
    sequences.filter((s) => s.level === level).flatMap((s) => s.moduleIds),
  );
  return modules
    .filter((m) => moduleVisibleForLevel(m, level) && !placed.has(m.id))
    .sort((a, b) => a.code.localeCompare(b.code))
    .map((m) => m.id);
}
