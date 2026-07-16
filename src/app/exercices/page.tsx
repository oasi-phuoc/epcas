"use client";

import { CurriculumBlockIndex } from "@/components/CurriculumBlockIndex";
import { MODULE_EXERCISE_PAGE_SLUGS } from "@/lib/lesson-content";
import { STUDY_YEAR_LABELS } from "@/lib/levels";
import { useAppStore } from "@/lib/store";

export default function ExercicesPage() {
  const { userLevel, userStudyYear } = useAppStore();

  return (
    <CurriculumBlockIndex
      title="Exercices"
      descriptionTrainer="Mise en situation, mathématiques et vérification des acquis."
      descriptionApprentice={`Parcours ${userLevel} · ${STUDY_YEAR_LABELS[userStudyYear]} — situations, maths et vérifications.`}
      pageSlugs={MODULE_EXERCISE_PAGE_SLUGS}
      moduleHrefBase="/exercices/module"
    />
  );
}
