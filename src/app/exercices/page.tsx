"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Badge, PageHeader, Panel } from "@/components/ui";
import { useAppStore, useExercises, useVisibleModules } from "@/lib/store";
import type { Exercise, Module } from "@/lib/types";

const typeLabel = {
  qcm: "QCM",
  math: "Maths",
  open: "Ouverte",
} as const;

function ExerciseCard({ ex }: { ex: Exercise }) {
  return (
    <Link href={`/exercices/${ex.id}`} className="block py-1">
      <div className="rounded-[var(--radius-md)] border border-transparent px-3 py-3 transition hover:border-primary hover:bg-primary-soft/40">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{typeLabel[ex.type]}</Badge>
          <Badge
            tone={
              ex.difficulty === "facile"
                ? "success"
                : ex.difficulty === "moyen"
                  ? "accent"
                  : "warning"
            }
          >
            {ex.difficulty}
          </Badge>
        </div>
        <h3 className="mt-1.5 font-medium text-ink">{ex.title}</h3>
      </div>
    </Link>
  );
}

export default function ExercicesPage() {
  const { state } = useAppStore();
  const exercises = useExercises();
  const visibleModules = useVisibleModules();

  const lessonToModule = useMemo(() => {
    const map = new Map<string, string>();
    for (const lesson of state.lessons) {
      map.set(lesson.id, lesson.moduleId);
    }
    return map;
  }, [state.lessons]);

  const moduleById = useMemo(
    () => new Map(state.modules.map((m) => [m.id, m] as const)),
    [state.modules],
  );

  const blocksWithModules = useMemo(() => {
    const byModule = new Map<string, Exercise[]>();
    const orphan: Exercise[] = [];

    for (const ex of exercises) {
      const moduleId = ex.lessonId
        ? lessonToModule.get(ex.lessonId)
        : undefined;
      if (!moduleId || !moduleById.has(moduleId)) {
        orphan.push(ex);
        continue;
      }
      const list = byModule.get(moduleId) ?? [];
      list.push(ex);
      byModule.set(moduleId, list);
    }

    const blocks = [...state.blocks].sort((a, b) => a.order - b.order);
    const visibleIds = new Set(visibleModules.map((m) => m.id));

    const grouped = blocks
      .map((block) => {
        const modules: { module: Module; exercises: Exercise[] }[] = [];
        // Modules du bloc : d'abord ceux de la séquence visible, dans l'ordre
        for (const mod of visibleModules) {
          if (mod.blockId !== block.id) continue;
          const list = byModule.get(mod.id);
          if (list && list.length > 0) {
            modules.push({ module: mod, exercises: list });
          }
        }
        // Modules hors séquence mais avec exercices (ex. staff)
        const extras: { module: Module; exercises: Exercise[] }[] = [];
        for (const [moduleId, list] of byModule) {
          if (visibleIds.has(moduleId)) continue;
          const mod = moduleById.get(moduleId);
          if (!mod || mod.blockId !== block.id || list.length === 0) continue;
          extras.push({ module: mod, exercises: list });
        }
        extras.sort((a, b) => a.module.code.localeCompare(b.module.code));
        return { block, modules: [...modules, ...extras] };
      })
      .filter((entry) => entry.modules.length > 0);

    return { grouped, orphan };
  }, [
    exercises,
    lessonToModule,
    moduleById,
    state.blocks,
    visibleModules,
  ]);

  const [openBlocks, setOpenBlocks] = useState<Record<string, boolean>>(() => {
    const first = blocksWithModules.grouped[0]?.block.id;
    return first ? { [first]: true } : { "block-100": true };
  });
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({});

  const { grouped, orphan } = blocksWithModules;

  return (
    <div>
      <PageHeader
        title="Exercices"
        description="Entraînement libre avec feedback immédiat. Tentatives illimitées — groupés par bloc EnterSite."
      />

      <div className="space-y-3">
        {grouped.map(({ block, modules }) => {
          const open = openBlocks[block.id] ?? false;
          const count = modules.reduce((s, m) => s + m.exercises.length, 0);

          return (
            <Panel key={block.id} className="overflow-hidden p-0">
              <button
                type="button"
                className="flex w-full items-center gap-3 px-5 py-4 text-left transition hover:bg-surface-muted/60"
                onClick={() =>
                  setOpenBlocks((prev) => ({
                    ...prev,
                    [block.id]: !open,
                  }))
                }
                aria-expanded={open}
              >
                {open ? (
                  <ChevronDown className="h-5 w-5 shrink-0 text-primary-strong" />
                ) : (
                  <ChevronRight className="h-5 w-5 shrink-0 text-ink-subtle" />
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge>{block.code}</Badge>
                    <h2 className="font-display text-xl text-ink sm:text-2xl">
                      {block.title}
                    </h2>
                  </div>
                  <p className="mt-1 text-xs text-ink-subtle">
                    {modules.length} module{modules.length !== 1 ? "s" : ""} ·{" "}
                    {count} exercice{count !== 1 ? "s" : ""}
                  </p>
                </div>
              </button>

              {open ? (
                <div className="space-y-2 border-t border-border bg-surface-muted/30 px-3 py-3 sm:px-5">
                  {modules.map(({ module: mod, exercises: modExercises }) => {
                    const modOpen = openModules[mod.id] ?? true;
                    return (
                      <div
                        key={mod.id}
                        className="overflow-hidden rounded-[var(--radius-md)] border border-border/70 bg-surface"
                      >
                        <button
                          type="button"
                          className="flex w-full items-center gap-2 px-3 py-2.5 text-left transition hover:bg-primary-soft/30"
                          onClick={() =>
                            setOpenModules((prev) => ({
                              ...prev,
                              [mod.id]: !modOpen,
                            }))
                          }
                          aria-expanded={modOpen}
                        >
                          {modOpen ? (
                            <ChevronDown className="h-4 w-4 shrink-0 text-primary-strong" />
                          ) : (
                            <ChevronRight className="h-4 w-4 shrink-0 text-ink-subtle" />
                          )}
                          <span className="min-w-0 flex-1">
                            <span className="text-xs font-medium text-primary-strong">
                              Module {mod.code}
                            </span>
                            <span className="mt-0.5 block text-sm font-medium text-ink">
                              {mod.title}
                            </span>
                          </span>
                          <Badge tone="neutral">
                            {modExercises.length}
                          </Badge>
                        </button>
                        {modOpen ? (
                          <ul className="border-t border-border/60 px-1 pb-1">
                            {modExercises.map((ex) => (
                              <li key={ex.id}>
                                <ExerciseCard ex={ex} />
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </Panel>
          );
        })}

        {orphan.length > 0 ? (
          <Panel className="overflow-hidden p-0">
            <div className="px-5 py-4">
              <h2 className="font-display text-xl text-ink">Autres</h2>
              <p className="mt-1 text-xs text-ink-subtle">
                Exercices non rattachés à un module
              </p>
            </div>
            <ul className="border-t border-border bg-surface-muted/30 px-3 py-2 sm:px-5">
              {orphan.map((ex) => (
                <li key={ex.id}>
                  <ExerciseCard ex={ex} />
                </li>
              ))}
            </ul>
          </Panel>
        ) : null}

        {grouped.length === 0 && orphan.length === 0 ? (
          <Panel className="p-5 text-sm text-ink-muted">
            Aucun exercice disponible pour votre parcours.
          </Panel>
        ) : null}
      </div>
    </div>
  );
}
