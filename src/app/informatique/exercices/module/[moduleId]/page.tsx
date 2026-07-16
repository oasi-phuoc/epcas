"use client";

import { CurriculumModuleDetail } from "@/components/CurriculumModuleDetail";
import { InformatiqueCurriculumExercisesGate } from "@/components/informatique/InformatiqueCurriculumExercisesGate";
import { MODULE_EXERCISE_PAGE_SLUGS } from "@/lib/lesson-content";

export default function InformatiqueExercicesModulePage() {
  return (
    <InformatiqueCurriculumExercisesGate>
      <CurriculumModuleDetail
        pageSlugs={MODULE_EXERCISE_PAGE_SLUGS}
        sectionHref="/informatique/exercices"
        lessonHrefBase="/informatique/exercices/lecon"
        includeInteractiveExercises
        allowInformatiqueExerciseAccess
      />
    </InformatiqueCurriculumExercisesGate>
  );
}
