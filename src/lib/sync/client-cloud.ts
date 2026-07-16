import { readSyncMeta, writeSyncMeta } from "@/lib/sync/types";
import type {
  Assessment,
  AssessmentQuestion,
  ClassRoom,
  InformatiqueExercise,
  LearningSequence,
  UserAccount,
} from "@/lib/types";

function applyRevision(revision: number | undefined) {
  if (typeof revision !== "number") return;
  const meta = readSyncMeta();
  writeSyncMeta({
    ...meta,
    revision: Math.max(meta.revision, revision),
    lastPushedAt: new Date().toISOString(),
  });
}

export async function pushInformatiqueExercisesListToApi(
  exercises: InformatiqueExercise[],
): Promise<void> {
  try {
    const res = await fetch("/api/sync/informatique/exercises", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ exercises }),
    });
    if (!res.ok) return;
    const json = (await res.json()) as { revision?: number };
    applyRevision(json.revision);
  } catch {
    /* hors-ligne */
  }
}

export async function pushInformatiqueExerciseToApi(
  exercise: InformatiqueExercise,
): Promise<void> {
  try {
    const res = await fetch(
      `/api/sync/informatique/exercises/${encodeURIComponent(exercise.id)}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(exercise),
      },
    );
    if (!res.ok) return;
    const json = (await res.json()) as { revision?: number };
    applyRevision(json.revision);
  } catch {
    /* hors-ligne */
  }
}

export async function pushAssessmentsToApi(
  assessments: Assessment[],
  assessmentQuestions: AssessmentQuestion[],
): Promise<void> {
  try {
    const res = await fetch("/api/sync/assessments", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ assessments, assessmentQuestions }),
    });
    if (!res.ok) return;
    const json = (await res.json()) as { revision?: number };
    applyRevision(json.revision);
  } catch {
    /* hors-ligne */
  }
}

export async function pushOrgToApi(
  classes: ClassRoom[],
  users: UserAccount[],
  sequences: LearningSequence[],
): Promise<void> {
  try {
    const res = await fetch("/api/sync/org", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ classes, users, sequences }),
    });
    if (!res.ok) return;
    const json = (await res.json()) as { revision?: number };
    applyRevision(json.revision);
  } catch {
    /* hors-ligne */
  }
}

export async function pullSharedContentFromApi(): Promise<{
  informatiqueExercises?: InformatiqueExercise[];
  assessments?: Assessment[];
  assessmentQuestions?: AssessmentQuestion[];
  classes?: ClassRoom[];
  users?: UserAccount[];
  sequences?: LearningSequence[];
} | null> {
  try {
    const [infRes, assessRes, orgRes] = await Promise.all([
      fetch("/api/sync/shared/informatique-exercises", { cache: "no-store" }),
      fetch("/api/sync/shared/assessments", { cache: "no-store" }),
      fetch("/api/sync/shared/org", { cache: "no-store" }),
    ]);
    if (!infRes.ok && !assessRes.ok && !orgRes.ok) return null;

    const inf = infRes.ok
      ? ((await infRes.json()) as { exercises: InformatiqueExercise[] })
      : null;
    const assess = assessRes.ok
      ? ((await assessRes.json()) as {
          assessments: Assessment[];
          assessmentQuestions: AssessmentQuestion[];
        })
      : null;
    const org = orgRes.ok
      ? ((await orgRes.json()) as {
          classes: ClassRoom[];
          users: UserAccount[];
          sequences: LearningSequence[];
        })
      : null;

    return {
      informatiqueExercises: inf?.exercises,
      assessments: assess?.assessments,
      assessmentQuestions: assess?.assessmentQuestions,
      classes: org?.classes,
      users: org?.users,
      sequences: org?.sequences,
    };
  } catch {
    return null;
  }
}
