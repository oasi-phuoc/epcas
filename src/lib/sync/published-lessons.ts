import { initialState } from "@/lib/demo-data";
import { buildCurriculumLessons } from "@/lib/curriculum";
import { createServiceClient, isSupabaseConfigured } from "@/lib/supabase/service";
import { APP_STATE_SYNC_ID } from "@/lib/sync/types";
import { mergeLessonWithCurriculumBase } from "@/lib/curriculum-lesson-merge";
import type { AppState, Lesson } from "@/lib/types";

/** Fusionne le catalogue Git avec les leçons enregistrées dans Supabase. */
export function mergeCurriculumWithRemoteLessons(
  remote: Lesson[] | undefined,
): Lesson[] {
  const base = buildCurriculumLessons();
  if (!remote?.length) return base;
  const map = new Map(remote.map((l) => [l.id, l] as const));
  return base.map((b) => {
    const saved = map.get(b.id);
    return mergeLessonWithCurriculumBase(saved, b);
  });
}

export async function loadMergedLessons(): Promise<Lesson[]> {
  if (!isSupabaseConfigured()) {
    return buildCurriculumLessons();
  }
  const supabase = createServiceClient();
  if (!supabase) return buildCurriculumLessons();

  const { data, error } = await supabase
    .from("sync_app_state")
    .select("payload")
    .eq("id", APP_STATE_SYNC_ID)
    .maybeSingle();

  if (error || !data?.payload) {
    return buildCurriculumLessons();
  }

  const payload = data.payload as AppState;
  return mergeCurriculumWithRemoteLessons(payload.lessons);
}

export async function getMergedLessonById(id: string): Promise<Lesson | null> {
  const lessons = await loadMergedLessons();
  const lesson = lessons.find((l) => l.id === id);
  if (!lesson?.published) return null;
  return lesson;
}

export async function publishLessonToCloud(
  lesson: Lesson,
): Promise<{ ok: boolean; configured: boolean; error?: string; revision?: number }> {
  if (!isSupabaseConfigured()) {
    return { ok: false, configured: false, error: "Supabase non configuré" };
  }
  const supabase = createServiceClient();
  if (!supabase) {
    return { ok: false, configured: false, error: "Client Supabase indisponible" };
  }

  const { data: row, error: readError } = await supabase
    .from("sync_app_state")
    .select("payload, revision")
    .eq("id", APP_STATE_SYNC_ID)
    .maybeSingle();

  if (readError) {
    return { ok: false, configured: true, error: readError.message };
  }

  const basePayload: AppState = row?.payload
    ? (row.payload as AppState)
    : { ...initialState, currentUserId: null };

  const merged = mergeCurriculumWithRemoteLessons(basePayload.lessons);
  const nextLessons = merged.map((l) =>
    l.id === lesson.id
      ? {
          ...l,
          ...lesson,
          id: l.id,
          moduleId: l.moduleId,
          pageSlug: l.pageSlug,
          order: l.order,
        }
      : l,
  );

  const payload: AppState = {
    ...basePayload,
    lessons: nextLessons,
    currentUserId: null,
  };

  const nextRevision = (row?.revision ?? 0) + 1;
  const updatedAt = new Date().toISOString();

  const { data, error } = await supabase
    .from("sync_app_state")
    .upsert(
      {
        id: APP_STATE_SYNC_ID,
        payload,
        revision: nextRevision,
        updated_at: updatedAt,
      },
      { onConflict: "id" },
    )
    .select("revision")
    .single();

  if (error) {
    return { ok: false, configured: true, error: error.message };
  }

  return { ok: true, configured: true, revision: data.revision };
}
