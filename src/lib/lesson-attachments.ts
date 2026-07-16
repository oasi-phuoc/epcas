import type { DiplomaLevel, Lesson, LessonAttachment } from "./types";

/** Taille max pour intégrer un fichier en data URL (localStorage). */
export const LESSON_ATTACHMENT_MAX_BYTES = 1_500_000;

export function newLessonAttachmentId(): string {
  return `attach-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export async function fileToLessonAttachment(file: File): Promise<LessonAttachment> {
  const tooLarge = file.size > LESSON_ATTACHMENT_MAX_BYTES;
  let url = "";
  if (!tooLarge) {
    url = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result ?? ""));
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  }
  return {
    id: newLessonAttachmentId(),
    name: file.name,
    url,
    mimeType: file.type || undefined,
  };
}

function attachmentsEqual(
  a: LessonAttachment[] | undefined,
  b: LessonAttachment[] | undefined,
): boolean {
  return JSON.stringify(a ?? []) === JSON.stringify(b ?? []);
}

export function isAfpAttachmentsIdenticalToCfc(lesson: Lesson): boolean {
  if (lesson.attachmentsAfp == null) return true;
  return attachmentsEqual(lesson.attachmentsAfp, lesson.attachments);
}

export function getLessonAttachments(
  lesson: Lesson,
  level: DiplomaLevel,
): LessonAttachment[] {
  if (level === "AFP") {
    return lesson.attachmentsAfp ?? lesson.attachments ?? [];
  }
  return lesson.attachments ?? [];
}

/** Fichiers avec URL utilisable (affichage élève). */
export function getDownloadableLessonAttachments(
  lesson: Lesson,
  level: DiplomaLevel,
): LessonAttachment[] {
  return getLessonAttachments(lesson, level).filter((a) => a.url.trim());
}

function normalizeAttachments(
  attachments: LessonAttachment[],
): LessonAttachment[] | undefined {
  const next = attachments
    .map((a) => ({
      ...a,
      name: a.name.trim(),
      url: a.url.trim(),
    }))
    .filter((a) => a.name);
  return next.length > 0 ? next : undefined;
}

export function applyLevelAttachments(
  lesson: Lesson,
  level: DiplomaLevel,
  attachments: LessonAttachment[],
): Lesson {
  const normalized = normalizeAttachments(attachments);

  if (level === "CFC") {
    const next: Lesson = { ...lesson };
    if (normalized) next.attachments = normalized;
    else delete next.attachments;

    if (isAfpAttachmentsIdenticalToCfc({ ...lesson, attachments: normalized })) {
      delete next.attachmentsAfp;
    }
    return next;
  }

  const cfc = lesson.attachments ?? [];
  if (attachmentsEqual(normalized ?? [], cfc)) {
    const next: Lesson = { ...lesson };
    delete next.attachmentsAfp;
    return next;
  }

  const next: Lesson = { ...lesson };
  if (normalized) next.attachmentsAfp = normalized;
  else delete next.attachmentsAfp;
  return next;
}
