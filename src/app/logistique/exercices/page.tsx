"use client";

import { CurriculumBlockIndex } from "@/components/CurriculumBlockIndex";
import { MODULE_EXERCISE_PAGE_SLUGS } from "@/lib/lesson-content";
import { STUDY_YEAR_LABELS } from "@/lib/levels";
import { useAppStore, useVisibleLogistiqueModules } from "@/lib/store";

export default function LogistiqueExercicesPage() {
  const { userLevel, userStudyYear } = useAppStore();
  const modules = useVisibleLogistiqueModules();

  return (
    <CurriculumBlockIndex
      title="Exercices — Logistique"
      descriptionTrainer="Mises en situation, mathématiques et vérification — hors ICT 804–808."
      descriptionApprentice={`Parcours ${userLevel} · ${STUDY_YEAR_LABELS[userStudyYear]} — situations, maths et vérifications.`}
      pageSlugs={MODULE_EXERCISE_PAGE_SLUGS}
      moduleHrefBase="/logistique/exercices/module"
      modules={modules}
    />
  );
}
