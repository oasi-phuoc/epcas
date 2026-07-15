"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Badge, PageHeader, Panel, ProgressBar } from "@/components/ui";
import { STUDY_YEAR_LABELS, levelsLabel } from "@/lib/levels";
import { isStaffRole } from "@/lib/roles";
import { useAppStore, useVisibleModules } from "@/lib/store";
import type { LessonPageSlug } from "@/lib/types";

type CurriculumBlockIndexProps = {
  title: string;
  descriptionTrainer: string;
  descriptionApprentice: string;
  /** Filtre les pages comptées / liées à cette section */
  pageSlugs: LessonPageSlug[];
  /** Base URL module, ex. /theorie/module ou /exercices/module */
  moduleHrefBase: string;
  emptyMessage?: string;
  /** Contenu optionnel sous le titre (ex. raccourci Informatique). */
  preamble?: ReactNode;
};

export function CurriculumBlockIndex({
  title,
  descriptionTrainer,
  descriptionApprentice,
  pageSlugs,
  moduleHrefBase,
  emptyMessage = "Aucun module dans votre parcours pour le moment.",
  preamble,
}: CurriculumBlockIndexProps) {
  const { state, currentUser, getUserProgress, userLevel, userStudyYear } =
    useAppStore();
  const visibleModules = useVisibleModules();
  const isTrainer = currentUser ? isStaffRole(currentUser.role) : false;
  const slugSet = useMemo(() => new Set(pageSlugs), [pageSlugs]);

  const blocksWithModules = useMemo(() => {
    const blocks = [...state.blocks].sort((a, b) => a.order - b.order);
    const ordered = isTrainer
      ? [...visibleModules].sort((a, b) => a.code.localeCompare(b.code))
      : visibleModules;

    return blocks
      .map((block) => ({
        block,
        modules: ordered.filter((m) => m.blockId === block.id),
      }))
      .filter((entry) => entry.modules.length > 0);
  }, [state.blocks, visibleModules, isTrainer]);

  const [openBlocks, setOpenBlocks] = useState<Record<string, boolean>>(() => {
    const first = blocksWithModules[0]?.block.id;
    return first ? { [first]: true } : { "block-100": true };
  });

  const statsByModule = useMemo(() => {
    const progress = currentUser ? getUserProgress(currentUser.id) : [];
    const map = new Map<string, { total: number; done: number }>();
    for (const mod of visibleModules) {
      const lessons = state.lessons.filter(
        (l) =>
          l.moduleId === mod.id &&
          l.published &&
          slugSet.has(l.pageSlug),
      );
      const done = lessons.filter((l) =>
        progress.some((p) => p.lessonId === l.id && p.status === "done"),
      ).length;
      map.set(mod.id, { total: lessons.length, done });
    }
    return map;
  }, [
    visibleModules,
    state.lessons,
    currentUser,
    getUserProgress,
    slugSet,
  ]);

  const sequenceIndex = useMemo(() => {
    const map = new Map<string, number>();
    visibleModules.forEach((m, i) => map.set(m.id, i + 1));
    return map;
  }, [visibleModules]);

  if (!currentUser) return null;

  const totalDone = visibleModules.reduce(
    (s, m) => s + (statsByModule.get(m.id)?.done ?? 0),
    0,
  );
  const totalPages = visibleModules.reduce(
    (s, m) => s + (statsByModule.get(m.id)?.total ?? 0),
    0,
  );
  const overallPct = totalPages === 0 ? 0 : (totalDone / totalPages) * 100;

  return (
    <div>
      <PageHeader
        title={title}
        description={
          isTrainer ? descriptionTrainer : descriptionApprentice
        }
      />

      {preamble ? <div className="mb-4">{preamble}</div> : null}

      {!isTrainer ? (
        <div className="mb-4 space-y-3">
          <div className="flex flex-wrap gap-2">
            <Badge tone="primary">Niveau {userLevel}</Badge>
            <Badge tone="accent">{STUDY_YEAR_LABELS[userStudyYear]}</Badge>
          </div>
          <Panel className="p-4">
            <ProgressBar
              value={overallPct}
              label={`${totalDone}/${totalPages} pages · ${visibleModules.length} modules`}
            />
          </Panel>
        </div>
      ) : null}

      <div className="space-y-3">
        {blocksWithModules.map(({ block, modules }) => {
          const open = openBlocks[block.id] ?? false;
          const blockDone = modules.reduce(
            (s, m) => s + (statsByModule.get(m.id)?.done ?? 0),
            0,
          );
          const blockTotal = modules.reduce(
            (s, m) => s + (statsByModule.get(m.id)?.total ?? 0),
            0,
          );
          const pct = blockTotal === 0 ? 0 : (blockDone / blockTotal) * 100;

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
                    {blockDone}/{blockTotal} pages lues
                  </p>
                  <div className="mt-2 max-w-sm">
                    <ProgressBar value={pct} />
                  </div>
                </div>
              </button>

              {open ? (
                <ul className="border-t border-border bg-surface-muted/30 px-3 py-3 sm:px-5">
                  {modules.map((mod) => {
                    const st = statsByModule.get(mod.id);
                    const modPct =
                      !st || st.total === 0 ? 0 : (st.done / st.total) * 100;
                    const seq = sequenceIndex.get(mod.id);
                    return (
                      <li key={mod.id} className="py-1">
                        <Link
                          href={`${moduleHrefBase}/${mod.id}`}
                          className="flex items-center justify-between gap-3 rounded-[var(--radius-md)] border border-transparent px-3 py-3 transition hover:border-primary hover:bg-primary-soft/40"
                        >
                          <span className="flex min-w-0 items-start gap-3">
                            {!isTrainer && seq ? (
                              <span className="mt-0.5 w-6 shrink-0 text-xs font-medium text-ink-subtle">
                                {seq}
                              </span>
                            ) : null}
                            <span className="min-w-0">
                              <span className="text-xs font-medium text-primary-strong">
                                Module {mod.code}
                              </span>
                              <span className="mt-0.5 block font-medium text-ink">
                                {mod.title}
                              </span>
                              {isTrainer ? (
                                <span className="mt-0.5 block text-xs text-ink-subtle">
                                  {levelsLabel(mod.levels)}
                                </span>
                              ) : null}
                            </span>
                          </span>
                          <Badge
                            tone={
                              modPct === 100
                                ? "success"
                                : modPct > 0
                                  ? "accent"
                                  : "neutral"
                            }
                          >
                            {st?.done ?? 0}/{st?.total ?? 0}
                          </Badge>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </Panel>
          );
        })}

        {blocksWithModules.length === 0 ? (
          <Panel className="p-5 text-sm text-ink-muted">{emptyMessage}</Panel>
        ) : null}
      </div>
    </div>
  );
}
