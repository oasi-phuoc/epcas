import { initialState } from "@/lib/demo-data";
import {
  mergeInformatiqueExercises,
  SEED_INFORMATIQUE_EXERCISES,
} from "@/lib/informatique-exercises";
import {
  loadRemoteAppStateRow,
  patchRemoteAppState,
  type PublishResult,
} from "@/lib/sync/app-state-cloud";
import type {
  Assessment,
  AssessmentQuestion,
  ClassRoom,
  InformatiqueExercise,
  LearningSequence,
  UserAccount,
} from "@/lib/types";

export async function loadMergedInformatiqueExercises(): Promise<
  InformatiqueExercise[]
> {
  const row = await loadRemoteAppStateRow();
  return mergeInformatiqueExercises(
    row?.payload.informatiqueExercises,
    SEED_INFORMATIQUE_EXERCISES,
  );
}

export async function loadSharedAssessments(): Promise<{
  assessments: Assessment[];
  assessmentQuestions: AssessmentQuestion[];
}> {
  const row = await loadRemoteAppStateRow();
  if (!row?.payload) {
    return {
      assessments: initialState.assessments,
      assessmentQuestions: initialState.assessmentQuestions,
    };
  }
  return {
    assessments: row.payload.assessments?.length
      ? row.payload.assessments
      : initialState.assessments,
    assessmentQuestions: row.payload.assessmentQuestions?.length
      ? row.payload.assessmentQuestions
      : initialState.assessmentQuestions,
  };
}

export async function loadSharedOrg(): Promise<{
  classes: ClassRoom[];
  users: UserAccount[];
  sequences: LearningSequence[];
}> {
  const row = await loadRemoteAppStateRow();
  if (!row?.payload) {
    return {
      classes: initialState.classes,
      users: initialState.users,
      sequences: initialState.sequences,
    };
  }
  const p = row.payload;
  return {
    classes: p.classes?.length ? p.classes : initialState.classes,
    users: p.users?.length ? p.users : initialState.users,
    sequences: p.sequences?.length ? p.sequences : initialState.sequences,
  };
}

export async function publishInformatiqueExerciseToCloud(
  exercise: InformatiqueExercise,
): Promise<PublishResult> {
  return patchRemoteAppState((current) => {
    const merged = mergeInformatiqueExercises(
      current.informatiqueExercises,
      SEED_INFORMATIQUE_EXERCISES,
    );
    const exists = merged.some((e) => e.id === exercise.id);
    const informatiqueExercises = exists
      ? merged.map((e) => (e.id === exercise.id ? { ...e, ...exercise } : e))
      : [...merged, exercise];
    return { ...current, informatiqueExercises };
  });
}

export async function publishInformatiqueExercisesListToCloud(
  informatiqueExercises: InformatiqueExercise[],
): Promise<PublishResult> {
  return patchRemoteAppState((current) => ({
    ...current,
    informatiqueExercises,
  }));
}

export async function publishAssessmentsToCloud(
  assessments: Assessment[],
  assessmentQuestions: AssessmentQuestion[],
): Promise<PublishResult> {
  return patchRemoteAppState((current) => ({
    ...current,
    assessments,
    assessmentQuestions,
  }));
}

export async function publishOrgToCloud(
  classes: ClassRoom[],
  users: UserAccount[],
  sequences: LearningSequence[],
): Promise<PublishResult> {
  return patchRemoteAppState((current) => ({
    ...current,
    classes,
    users,
    sequences,
  }));
}
