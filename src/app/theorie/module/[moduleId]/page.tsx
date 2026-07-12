"use client";

import { CurriculumModuleDetail } from "@/components/CurriculumModuleDetail";
import { THEORY_PAGE_SLUGS } from "@/lib/lesson-content";

export default function TheorieModulePage() {
  return (
    <CurriculumModuleDetail
      pageSlugs={THEORY_PAGE_SLUGS}
      sectionHref="/theorie"
      lessonHrefBase="/theorie"
    />
  );
}
