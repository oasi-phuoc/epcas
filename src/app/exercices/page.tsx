"use client";

import Link from "next/link";
import { CurriculumBlockIndex } from "@/components/CurriculumBlockIndex";
import { Badge, Button, Panel } from "@/components/ui";
import { MODULE_EXERCISE_PAGE_SLUGS } from "@/lib/lesson-content";
import { STUDY_YEAR_LABELS } from "@/lib/levels";
import { useAppStore } from "@/lib/store";
import { Monitor } from "lucide-react";

export default function ExercicesPage() {
  const { userLevel, userStudyYear, state } = useAppStore();
  const publishedCount = (state.informatiqueExercises ?? []).filter(
    (e) => e.published,
  ).length;

  return (
    <CurriculumBlockIndex
      title="Exercices"
      descriptionTrainer="Mise en situation, mathématiques, vérification des acquis et informatique Office."
      descriptionApprentice={`Parcours ${userLevel} · ${STUDY_YEAR_LABELS[userStudyYear]} — situations, maths, vérifications et informatique.`}
      pageSlugs={MODULE_EXERCISE_PAGE_SLUGS}
      moduleHrefBase="/exercices/module"
      preamble={
        <Panel className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-start gap-3">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-border bg-surface-muted text-primary-strong">
              <Monitor className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-display text-xl text-ink">Informatique</h2>
                <Badge tone="neutral">{publishedCount} exercices</Badge>
              </div>
              <p className="mt-1 text-sm text-ink-muted">
                Word · Excel · PowerPoint — consignes (preview), documents à
                télécharger et corrections vidéo.
              </p>
            </div>
          </div>
          <Link href="/exercices/informatique">
            <Button>Ouvrir Informatique</Button>
          </Link>
        </Panel>
      }
    />
  );
}
