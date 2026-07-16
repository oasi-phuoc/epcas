"use client";

import { CurriculumBlockIndex } from "@/components/CurriculumBlockIndex";
import { THEORY_PAGE_SLUGS } from "@/lib/lesson-content";
import { useVisibleInformatiqueModules } from "@/lib/store";

export default function InformatiqueTheoriePage() {
  const modules = useVisibleInformatiqueModules();

  return (
    <CurriculumBlockIndex
      title="Théorie — Informatique"
      descriptionTrainer="Modules 804 à 808 — Microsoft 365 et bases ICT."
      descriptionApprentice="Modules 804 à 808 — accessibles toutes années, sans filtre de séquence."
      pageSlugs={THEORY_PAGE_SLUGS}
      moduleHrefBase="/informatique/theorie/module"
      modules={modules}
      emptyMessage="Aucun module informatique publié pour le moment."
    />
  );
}
