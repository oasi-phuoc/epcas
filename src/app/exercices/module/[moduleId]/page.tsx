"use client";

import { CurriculumModuleDetail } from "@/components/CurriculumModuleDetail";
import { EXERCISE_PAGE_SLUGS } from "@/lib/lesson-content";

export default function ExercicesModulePage() {
  return (
    <CurriculumModuleDetail
      pageSlugs={EXERCISE_PAGE_SLUGS}
      sectionHref="/exercices"
      lessonHrefBase="/exercices/lecon"
      includeInteractiveExercises
    />
  );
}
