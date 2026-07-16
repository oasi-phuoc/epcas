"use client";

import { CurriculumBlockIndex } from "@/components/CurriculumBlockIndex";
import { THEORY_PAGE_SLUGS } from "@/lib/lesson-content";
import { STUDY_YEAR_LABELS } from "@/lib/levels";
import { useAppStore, useVisibleLogistiqueModules } from "@/lib/store";

export default function LogistiqueTheoriePage() {
  const { userLevel, userStudyYear } = useAppStore();
  const modules = useVisibleLogistiqueModules();

  return (
    <CurriculumBlockIndex
      title="Théorie — Logistique"
      descriptionTrainer="Cursus EnterSite — hors modules informatique 804–808."
      descriptionApprentice={`Parcours ${userLevel} · ${STUDY_YEAR_LABELS[userStudyYear]} — objectifs, aperçu, théorie et glossaire.`}
      pageSlugs={THEORY_PAGE_SLUGS}
      moduleHrefBase="/logistique/theorie/module"
      modules={modules}
    />
  );
}
