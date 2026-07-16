export type TheoryChapter = {
  /** Stable id for keys / select values */
  id: string;
  /** e.g. "5.1" when numbered, otherwise null */
  number: string | null;
  /** Short label for picker / chips */
  label: string;
  /** Markdown body including the section heading */
  markdown: string;
};

const NUMBERED_SECTION_RE = /^###\s+(\d+\.\d+)\b\s*(.*)$/;
const H2_RE = /^##\s+(.+)$/;
const HORIZONTAL_RULE_RE = /^-+$/;

function extractH2Title(line: string): string | null {
  const m = line.match(H2_RE);
  return m ? m[1].trim() : null;
}

/** Préambule avant le premier ### N.M : uniquement un titre ## (pas de page intro). */
function isTitleOnlyPreamble(preamble: string): boolean {
  const lines = preamble
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  if (lines.length === 0) return true;

  return lines.every(
    (line) => H2_RE.test(line) || HORIZONTAL_RULE_RE.test(line),
  );
}

function splitByNumberedSections(markdown: string): TheoryChapter[] | null {
  const lines = markdown.split(/\r?\n/);
  const hits: { line: number; number: string; titleRest: string }[] = [];

  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(NUMBERED_SECTION_RE);
    if (m) {
      hits.push({
        line: i,
        number: m[1],
        titleRest: m[2].trim(),
      });
    }
  }

  if (hits.length === 0) return null;

  const chapters: TheoryChapter[] = [];
  const first = hits[0].line;

  if (first > 0) {
    const preamble = lines.slice(0, first).join("\n").trim();
    if (preamble && !isTitleOnlyPreamble(preamble)) {
      const h2Line = lines.slice(0, first).find((l) => H2_RE.test(l));
      const title = h2Line ? extractH2Title(h2Line) : null;
      chapters.push({
        id: "intro",
        number: null,
        label: title || "Introduction",
        markdown: preamble,
      });
    }
  }

  const usedIds = new Set(chapters.map((c) => c.id));

  for (let i = 0; i < hits.length; i++) {
    const start = hits[i].line;
    const end = i + 1 < hits.length ? hits[i + 1].line : lines.length;
    const chunk = lines.slice(start, end).join("\n").replace(/\s+$/, "");
    const num = hits[i].number;
    const rest = hits[i].titleRest;
    let id = num;
    if (usedIds.has(id)) {
      id = `${num}-${i}`;
    }
    usedIds.add(id);
    chapters.push({
      id,
      number: num,
      label: rest ? `${num} ${rest}` : num,
      markdown: chunk,
    });
  }

  return chapters;
}

function splitByH2(markdown: string): TheoryChapter[] {
  const lines = markdown.split(/\r?\n/);
  const indices: number[] = [];

  for (let i = 0; i < lines.length; i++) {
    if (H2_RE.test(lines[i])) indices.push(i);
  }

  if (indices.length <= 1) {
    const label =
      indices.length === 1
        ? extractH2Title(lines[indices[0]]) || "Théorie"
        : "Théorie";
    return [
      {
        id: "all",
        number: null,
        label,
        markdown: markdown.trimEnd(),
      },
    ];
  }

  const chapters: TheoryChapter[] = [];

  if (indices[0] > 0) {
    const preamble = lines.slice(0, indices[0]).join("\n").trim();
    if (preamble && !isTitleOnlyPreamble(preamble)) {
      chapters.push({
        id: "intro",
        number: null,
        label: "Introduction",
        markdown: preamble,
      });
    }
  }

  for (let i = 0; i < indices.length; i++) {
    const start = indices[i];
    const end = i + 1 < indices.length ? indices[i + 1] : lines.length;
    const chunk = lines.slice(start, end).join("\n").replace(/\s+$/, "");
    const title = extractH2Title(lines[start]) || `Section ${i + 1}`;
    chapters.push({
      id: `h2-${i}`,
      number: null,
      label: title,
      markdown: chunk,
    });
  }

  return chapters;
}

/**
 * Découpe un corps de théorie en pages « chapitre ».
 * Priorité : sections numérotées `### N.M` ; sinon titres `##` ; sinon une seule page.
 */
export function splitTheoryChapters(markdown: string): TheoryChapter[] {
  const trimmed = markdown.trim();
  if (!trimmed) {
    return [{ id: "all", number: null, label: "Théorie", markdown: "" }];
  }

  const numbered = splitByNumberedSections(markdown);
  if (numbered && numbered.length > 0) return numbered;

  return splitByH2(markdown);
}

const STORAGE_PREFIX = "epcas:theory-chapter:";

export function loadTheoryChapterIndex(lessonId: string): number | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_PREFIX + lessonId);
    if (raw == null) return null;
    const n = Number.parseInt(raw, 10);
    return Number.isFinite(n) && n >= 0 ? n : null;
  } catch {
    return null;
  }
}

export function saveTheoryChapterIndex(lessonId: string, index: number): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(STORAGE_PREFIX + lessonId, String(index));
  } catch {
    /* ignore quota / private mode */
  }
}
