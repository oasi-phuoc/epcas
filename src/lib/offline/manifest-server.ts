import { createHash } from "crypto";
import {
  buildCurriculumLessons,
  buildCurriculumModules,
  curriculumBlocks,
} from "@/lib/curriculum";
import type { Lesson, LessonPageSlug, Module } from "@/lib/types";

export type ContentManifestEntry = {
  id: string;
  moduleId: string;
  moduleCode: string;
  blockCode: string;
  pageSlug: LessonPageSlug;
  title: string;
  hash: string;
  size: number;
  url: string;
};

export type ContentManifest = {
  version: string;
  generatedAt: string;
  totalEntries: number;
  totalBytes: number;
  entries: ContentManifestEntry[];
};

export type LessonPackPayload = {
  id: string;
  moduleId: string;
  title: string;
  order: number;
  pageSlug: LessonPageSlug;
  published: boolean;
  contentFull: string;
  contentSummary: string;
  contentFullAfp?: string;
  contentSummaryAfp?: string;
  hash: string;
  size: number;
};

function stableLessonPayload(lesson: Lesson) {
  return JSON.stringify({
    id: lesson.id,
    moduleId: lesson.moduleId,
    title: lesson.title,
    order: lesson.order,
    pageSlug: lesson.pageSlug,
    published: lesson.published,
    contentFull: lesson.contentFull,
    contentSummary: lesson.contentSummary,
    contentFullAfp: lesson.contentFullAfp ?? null,
    contentSummaryAfp: lesson.contentSummaryAfp ?? null,
  });
}

export function hashContent(text: string): string {
  return createHash("sha256").update(text).digest("hex").slice(0, 16);
}

export function buildLessonPack(lesson: Lesson): LessonPackPayload {
  const raw = stableLessonPayload(lesson);
  const hash = hashContent(raw);
  const size = Buffer.byteLength(raw, "utf8");
  return {
    id: lesson.id,
    moduleId: lesson.moduleId,
    title: lesson.title,
    order: lesson.order,
    pageSlug: lesson.pageSlug,
    published: lesson.published,
    contentFull: lesson.contentFull,
    contentSummary: lesson.contentSummary,
    contentFullAfp: lesson.contentFullAfp,
    contentSummaryAfp: lesson.contentSummaryAfp,
    hash,
    size,
  };
}

let cachedManifest: ContentManifest | null = null;

export function buildContentManifest(): ContentManifest {
  if (cachedManifest) return cachedManifest;

  const modules = buildCurriculumModules();
  const lessons = buildCurriculumLessons();
  const moduleById = new Map(modules.map((m) => [m.id, m] as const));
  const blockById = new Map(curriculumBlocks.map((b) => [b.id, b] as const));

  const entries: ContentManifestEntry[] = lessons
    .filter((l) => l.published)
    .map((lesson) => {
      const pack = buildLessonPack(lesson);
      const mod = moduleById.get(lesson.moduleId) as Module | undefined;
      const block = mod ? blockById.get(mod.blockId) : undefined;
      return {
        id: lesson.id,
        moduleId: lesson.moduleId,
        moduleCode: mod?.code ?? "?",
        blockCode: block?.code ?? "?",
        pageSlug: lesson.pageSlug,
        title: lesson.title,
        hash: pack.hash,
        size: pack.size,
        url: `/api/content/lessons/${encodeURIComponent(lesson.id)}`,
      };
    })
    .sort((a, b) => a.id.localeCompare(b.id));

  const totalBytes = entries.reduce((s, e) => s + e.size, 0);
  const versionSeed = entries.map((e) => `${e.id}:${e.hash}`).join("|");
  const version = hashContent(versionSeed);

  cachedManifest = {
    version,
    generatedAt: new Date().toISOString(),
    totalEntries: entries.length,
    totalBytes,
    entries,
  };
  return cachedManifest;
}

export function getLessonPackById(id: string): LessonPackPayload | null {
  const lesson = buildCurriculumLessons().find((l) => l.id === id);
  if (!lesson || !lesson.published) return null;
  return buildLessonPack(lesson);
}
