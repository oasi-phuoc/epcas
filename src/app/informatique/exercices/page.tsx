"use client";

import Link from "next/link";
import { CurriculumBlockIndex } from "@/components/CurriculumBlockIndex";
import { Button, Panel } from "@/components/ui";
import { MODULE_EXERCISE_PAGE_SLUGS } from "@/lib/lesson-content";
import { useVisibleInformatiqueModules } from "@/lib/store";

export default function InformatiqueExercicesPage() {
  const modules = useVisibleInformatiqueModules();

  return (
    <CurriculumBlockIndex
      title="Exercices — Informatique"
      descriptionTrainer="Situations, maths et vérifications — modules 804 à 808."
      descriptionApprentice="Modules 804 à 808 — accessibles toutes années."
      pageSlugs={MODULE_EXERCISE_PAGE_SLUGS}
      moduleHrefBase="/informatique/exercices/module"
      modules={modules}
      emptyMessage="Aucun module informatique publié pour le moment."
      preamble={
        <Panel className="flex flex-wrap items-center justify-between gap-3 p-4">
          <p className="text-sm text-ink-muted">
            Fichiers Word, Excel et PowerPoint avec consignes et corrections.
          </p>
          <Link href="/informatique/exercices/pratique">
            <Button size="sm" variant="secondary">
              Ouvrir la pratique Office
            </Button>
          </Link>
        </Panel>
      }
    />
  );
}
