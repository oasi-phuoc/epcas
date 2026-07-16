"use client";

import { CurriculumModuleDetail } from "@/components/CurriculumModuleDetail";
import { MODULE_EXERCISE_PAGE_SLUGS } from "@/lib/lesson-content";

export default function LogistiqueExercicesModulePage() {
  return (
    <CurriculumModuleDetail
      pageSlugs={MODULE_EXERCISE_PAGE_SLUGS}
      sectionHref="/logistique/exercices"
      lessonHrefBase="/logistique/exercices/lecon"
      includeInteractiveExercises
    />
  );
}
