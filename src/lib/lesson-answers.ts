const STORAGE_PREFIX = "epcas-lesson-answers";

export type SavedLessonAnswer = {
  answer: string;
  validatedAt?: string;
  controlledAt?: string;
};

export type LessonAnswersMap = Record<string, SavedLessonAnswer>;

function storageKey(userId: string, lessonId: string): string {
  return `${STORAGE_PREFIX}:${userId}:${lessonId}`;
}

export function loadLessonAnswers(
  userId: string,
  lessonId: string,
): LessonAnswersMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(storageKey(userId, lessonId));
    if (!raw) return {};
    return JSON.parse(raw) as LessonAnswersMap;
  } catch {
    return {};
  }
}

export function saveLessonAnswer(
  userId: string,
  lessonId: string,
  questionId: string,
  patch: Partial<SavedLessonAnswer> & { answer: string },
): LessonAnswersMap {
  const current = loadLessonAnswers(userId, lessonId);
  const next: LessonAnswersMap = {
    ...current,
    [questionId]: {
      ...current[questionId],
      ...patch,
    },
  };
  if (typeof window !== "undefined") {
    localStorage.setItem(storageKey(userId, lessonId), JSON.stringify(next));
  }
  return next;
}
