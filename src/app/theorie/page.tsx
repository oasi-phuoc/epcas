"use client";

import Link from "next/link";
import { Badge, EmptyState, PageHeader, Panel } from "@/components/ui";
import { useAppStore } from "@/lib/store";

export default function TheorieIndexPage() {
  const { state, currentUser, getUserProgress } = useAppStore();
  if (!currentUser) return null;

  const progress = getUserProgress(currentUser.id);

  return (
    <div>
      <PageHeader
        title="Théorie"
        description="Parcourez les modules CFC. Basculez en mode résumé pour réviser."
      />
      <div className="space-y-4">
        {state.modules.map((mod) => {
          const lessons = state.lessons
            .filter((l) => l.moduleId === mod.id && l.published)
            .sort((a, b) => a.order - b.order);
          return (
            <Panel key={mod.id}>
              <p className="text-xs font-medium uppercase tracking-wide text-ink-subtle">
                Module {mod.order}
              </p>
              <h2 className="mt-1 font-display text-2xl">{mod.title}</h2>
              <ul className="mt-4 space-y-2">
                {lessons.map((lesson) => {
                  const p = progress.find((x) => x.lessonId === lesson.id);
                  return (
                    <li key={lesson.id}>
                      <Link
                        href={`/theorie/${lesson.id}`}
                        className="flex items-center justify-between gap-3 rounded-[var(--radius-md)] border border-border bg-surface-muted/50 px-3 py-3 transition hover:border-primary hover:bg-primary-soft/40"
                      >
                        <span className="font-medium text-ink">
                          {lesson.title}
                        </span>
                        <Badge
                          tone={
                            p?.status === "done"
                              ? "success"
                              : p?.status === "reading"
                                ? "accent"
                                : "neutral"
                          }
                        >
                          {p?.status === "done"
                            ? "Lu"
                            : p?.status === "reading"
                              ? "En cours"
                              : "À lire"}
                        </Badge>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              {lessons.length === 0 ? (
                <EmptyState title="Aucune leçon publiée" />
              ) : null}
            </Panel>
          );
        })}
      </div>
    </div>
  );
}
