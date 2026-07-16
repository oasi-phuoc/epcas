import { normalizeText, scoreOpenAnswer } from "./keywords";

export type AnswerCheckStatus =
  | "empty"
  | "individual"
  | "correct"
  | "partial"
  | "incorrect";

export type AnswerCheckResult = {
  status: AnswerCheckStatus;
  message: string;
};

const STOPWORDS = new Set([
  "avec",
  "dans",
  "pour",
  "par",
  "une",
  "des",
  "les",
  "est",
  "sont",
  "que",
  "qui",
  "pas",
  "plus",
  "tout",
  "tous",
  "cette",
  "cela",
  "comme",
  "aussi",
  "entre",
  "chez",
  "sans",
  "sous",
  "vers",
  "depuis",
  "lors",
  "donc",
  "mais",
  "ou",
  "et",
  "de",
  "du",
  "la",
  "le",
  "en",
  "au",
  "aux",
  "un",
]);

/** Retire le markdown léger pour comparer le texte brut. */
export function stripMarkdown(md: string): string {
  return md
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/==([^=]+)==/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^[-*]\s+/gm, "")
    .replace(/^\d+\.\s+/gm, "")
    .replace(/^>\s+/gm, "")
    .replace(/:::/g, "")
    .trim();
}

export function isIndividualAnswer(teacherAnswer: string): boolean {
  const t = normalizeText(stripMarkdown(teacherAnswer));
  return (
    t.includes("reponse individuelle") ||
    t.includes("pas de solution unique") ||
    t.includes("reponse ouverte") ||
    t.includes("reponse de groupe") ||
    t.includes("depot de fichier")
  );
}

/** Extrait les nombres d'une chaîne (formats suisses : 45,00 · 91'083 · 58 698,96). */
export function extractNumbers(text: string): number[] {
  const cleaned = text
    .replace(/'/g, "")
    .replace(/\s(?=\d)/g, "");
  const matches = cleaned.match(/-?\d+(?:[.,]\d+)?/g) ?? [];
  return matches
    .map((m) => Number(m.replace(",", ".")))
    .filter((n) => Number.isFinite(n));
}

function numbersMatch(
  studentNums: number[],
  teacherNums: number[],
  tolerance = 0.02,
): boolean {
  if (studentNums.length === 0 || teacherNums.length === 0) return false;
  return studentNums.some((s) =>
    teacherNums.some((t) => {
      const base = Math.max(Math.abs(t), 1);
      return Math.abs(s - t) <= tolerance * base;
    }),
  );
}

function extractKeywordGroups(teacherPlain: string): string[] {
  const groups: string[] = [];
  const lines = teacherPlain.split(/\n+/).map((l) => l.trim()).filter(Boolean);

  for (const line of lines) {
    const withoutPrefix = line.replace(/^[-*•]\s*/, "").replace(/^\d+\.\s*/, "");
    const parts = withoutPrefix
      .split(/[,;·|]/)
      .map((p) => p.trim())
      .filter((p) => p.length > 2);
    if (parts.length > 1) {
      for (const part of parts) groups.push(part);
    } else if (withoutPrefix.length > 2) {
      groups.push(withoutPrefix);
    }
  }

  if (groups.length === 0) {
    const tokens = teacherPlain
      .split(/\s+/)
      .map((t) => t.replace(/[^\p{L}\p{N}-]/gu, ""))
      .filter((t) => t.length > 3 && !STOPWORDS.has(normalizeText(t)));
    return [...new Set(tokens)].slice(0, 8);
  }

  return groups;
}

export function checkStudentAnswer(
  studentAnswer: string,
  teacherAnswer: string,
  kind: "solution" | "reponse",
): AnswerCheckResult {
  const student = studentAnswer.trim();
  const teacherPlain = stripMarkdown(teacherAnswer);

  if (!student) {
    return {
      status: "empty",
      message: "Saisissez d'abord votre réponse, puis cliquez sur Contrôle.",
    };
  }

  if (isIndividualAnswer(teacherAnswer)) {
    return {
      status: "individual",
      message:
        "Pas de solution unique pour cette question. Comparez votre réponse avec les critères du cours ou échangez avec un·e camarade.",
    };
  }

  if (kind === "solution") {
    const studentNums = extractNumbers(student);
    const teacherNums = extractNumbers(teacherPlain);
    if (numbersMatch(studentNums, teacherNums)) {
      return {
        status: "correct",
        message: "Résultat numérique correct. Consultez la solution détaillée ci-dessous.",
      };
    }
    if (studentNums.length > 0 && teacherNums.length > 0) {
      return {
        status: "incorrect",
        message:
          "Le résultat ne correspond pas. Relisez l'énoncé et vérifiez votre calcul avec la solution ci-dessous.",
      };
    }
  }

  const groups = extractKeywordGroups(teacherPlain);
  if (groups.length === 0) {
    const overlap =
      normalizeText(student).includes(normalizeText(teacherPlain).slice(0, 40)) ||
      normalizeText(teacherPlain).includes(normalizeText(student).slice(0, 40));
    return {
      status: overlap ? "correct" : "partial",
      message: overlap
        ? "Votre réponse semble aller dans la bonne direction."
        : "Comparez votre réponse avec la correction proposée ci-dessous.",
    };
  }

  const pipeGroups = groups.map((g) => {
    const words = g
      .split(/\s+/)
      .map((w) => w.replace(/[^\p{L}\p{N}-]/gu, ""))
      .filter((w) => w.length > 2);
    return words.length > 0 ? words.join("|") : g;
  });

  const { score } = scoreOpenAnswer(student, pipeGroups);
  if (score >= 1) {
    return {
      status: "correct",
      message: "Bonne réponse ! Les éléments essentiels sont présents.",
    };
  }
  if (score >= 0.5) {
    return {
      status: "partial",
      message:
        "Réponse partiellement correcte. Complétez avec les éléments manquants indiqués ci-dessous.",
    };
  }
  return {
    status: "incorrect",
    message:
      "Plusieurs éléments attendus manquent. Relisez la question et comparez avec la correction ci-dessous.",
  };
}
