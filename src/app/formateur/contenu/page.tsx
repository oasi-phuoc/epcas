"use client";

import Link from "next/link";
import {
  EmptyState,
  PageHeader,
  Panel,
} from "@/components/ui";
import { FORMATEUR_THEORY_PAGES } from "@/lib/lesson-content";
import { useAppStore } from "@/lib/store";
import { isStaffRole } from "@/lib/roles";
import { BookMarked, BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { LessonPageSlug } from "@/lib/types";

const ICONS: Record<string, LucideIcon> = {
  theorie: BookOpen,
  glossaire: BookMarked,
};

export default function ContenuHubPage() {
  const { currentUser, state } = useAppStore();

  if (!currentUser) return null;
  if (!isStaffRole(currentUser.role)) {
    return <EmptyState title="Accès réservé aux formateurs et admins" />;
  }

  return (
    <div>
      <PageHeader
        title="Contenu · Théorie"
        description="Éditez les pages théoriques EnterSite (théorie, glossaire) — variantes AFP / CFC."
      />

      <div className="grid gap-3 sm:grid-cols-2">
        {FORMATEUR_THEORY_PAGES.map((page) => {
          const Icon = ICONS[page.slug] ?? BookOpen;
          const count = (state.lessons ?? []).filter(
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
                    <h2 className="font-display text-xl text-ink">
                      {page.title}
                    </h2>
                    <p className="mt-0.5 text-xs text-ink-subtle">
                      {count} page{count !== 1 ? "s" : ""}
                    </p>
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
