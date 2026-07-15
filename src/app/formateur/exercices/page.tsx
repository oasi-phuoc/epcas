"use client";

import Link from "next/link";
import {
  Badge,
  EmptyState,
  PageHeader,
  Panel,
} from "@/components/ui";
import { FORMATEUR_EXERCISE_PAGES } from "@/lib/lesson-content";
import { useAppStore } from "@/lib/store";
import { isStaffRole } from "@/lib/roles";
import {
  Calculator,
  ClipboardCheck,
  Lightbulb,
  Monitor,
  PencilLine,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { LessonPageSlug } from "@/lib/types";

const ICONS: Record<string, LucideIcon> = {
  situation: Lightbulb,
  maths: Calculator,
  verification: ClipboardCheck,
  informatique: Monitor,
};

export default function FormateurExercicesHubPage() {
  const { currentUser, state } = useAppStore();

  if (!currentUser) return null;
  if (!isStaffRole(currentUser.role)) {
    return <EmptyState title="Accès réservé aux formateurs et admins" />;
  }

  return (
    <div>
      <PageHeader
        title="Contenu · Exercices"
        description="Mise en situation, mathématiques, vérification des acquis et informatique — variantes AFP / CFC."
      />

      <div className="grid gap-3 sm:grid-cols-2">
        {FORMATEUR_EXERCISE_PAGES.map((page) => {
          const Icon = ICONS[page.slug] ?? PencilLine;
          const count =
            page.slug === "informatique"
              ? state.informatiqueExercises?.length ?? 0
              : state.lessons.filter(
                  (l) => l.pageSlug === (page.slug as LessonPageSlug),
                ).length;
          return (
            <Link key={page.slug} href={page.href}>
              <Panel className="h-full transition hover:border-primary hover:bg-primary-soft/30">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-border bg-surface-muted text-primary-strong">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-display text-xl text-ink">
                        {page.title}
                      </h2>
                      <Badge tone="neutral">{count}</Badge>
                    </div>
                    <p className="mt-1 text-sm text-ink-muted">
                      {page.description}
                    </p>
                  </div>
                </div>
              </Panel>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
