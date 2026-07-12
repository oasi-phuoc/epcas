"use client";

import { CurriculumBlockIndex } from "@/components/CurriculumBlockIndex";
import { THEORY_PAGE_SLUGS } from "@/lib/lesson-content";
import { STUDY_YEAR_LABELS } from "@/lib/levels";
import { useAppStore } from "@/lib/store";

export default function TheorieIndexPage() {
  const { userLevel, userStudyYear } = useAppStore();

  return (
    <CurriculumBlockIndex
      title="Théorie"
      descriptionTrainer="Cursus EnterSite — blocs 100 à 900. Objectifs, aperçu, théorie et glossaire."
      descriptionApprentice={`Parcours ${userLevel} · ${STUDY_YEAR_LABELS[userStudyYear]} — objectifs, aperçu, théorie et glossaire.`}
      pageSlugs={THEORY_PAGE_SLUGS}
      moduleHrefBase="/theorie/module"
    />
  );
}
