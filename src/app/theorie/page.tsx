"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Badge, PageHeader, Panel, ProgressBar } from "@/components/ui";
import { STUDY_YEAR_LABELS, levelsLabel } from "@/lib/levels";
import { isStaffRole } from "@/lib/roles";
import { useAppStore, useVisibleModules } from "@/lib/store";

export default function TheorieIndexPage() {
  const { state, currentUser, getUserProgress, userLevel, userStudyYear } =
    useAppStore();
  const visibleModules = useVisibleModules();
  const [openBlocks, setOpenBlocks] = useState<Record<string, boolean>>({
    "block-100": true,
  });

  const statsByModule = useMemo(() => {
    const progress = currentUser ? getUserProgress(currentUser.id) : [];
    const map = new Map<string, { total: number; done: number }>();
    for (const mod of visibleModules) {
      const lessons = state.lessons.filter(
        (l) => l.moduleId === mod.id && l.published,
      );
      const done = lessons.filter((l) =>
        progress.some((p) => p.lessonId === l.id && p.status === "done"),
      ).length;
      map.set(mod.id, { total: lessons.length, done });
    }
    return map;
  }, [visibleModules, state.lessons, currentUser, getUserProgress]);

  if (!currentUser) return null;

  const blocks = [...state.blocks].sort((a, b) => a.order - b.order);
  const isTrainer = isStaffRole(currentUser.role);

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
        title="Théorie"
        description={
          isTrainer
            ? "Cursus EnterSite — blocs 100 à 900. Ouvrez un module pour voir ses pages."
            : `Parcours ${userLevel} · ${STUDY_YEAR_LABELS[userStudyYear]} — modules dans l'ordre défini par le formateur.`
        }
      />

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
          <ul className="space-y-2">
            {visibleModules.map((mod, index) => {
              const st = statsByModule.get(mod.id);
              const modPct =
                !st || st.total === 0 ? 0 : (st.done / st.total) * 100;
              const block = state.blocks.find((b) => b.id === mod.blockId);
              return (
                <li key={mod.id}>
                  <Link
                    href={`/theorie/module/${mod.id}`}
                    className="flex items-center justify-between gap-3 rounded-[var(--radius-md)] border border-border bg-surface px-3 py-3 transition hover:border-primary hover:bg-primary-soft/40"
                  >
                    <span className="flex min-w-0 items-start gap-3">
                      <span className="mt-0.5 w-6 shrink-0 text-xs font-medium text-ink-subtle">
                        {index + 1}
                      </span>
                      <span className="min-w-0">
                        <span className="text-xs font-medium text-primary-strong">
                          Module {mod.code}
                          {block ? ` · ${block.code}` : ""}
                        </span>
                        <span className="mt-0.5 block font-medium text-ink">
                          {mod.title}
                        </span>
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
        </div>
      ) : (
        <div className="space-y-3">
          {blocks.map((block) => {
            const modules = visibleModules
              .filter((m) => m.blockId === block.id)
              .sort((a, b) => a.code.localeCompare(b.code));
            if (modules.length === 0) return null;

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
                      {modules.length} modules · {blockDone}/{blockTotal} pages
                      lues
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
                      return (
                        <li key={mod.id} className="py-1">
                          <Link
                            href={`/theorie/module/${mod.id}`}
                            className="flex items-center justify-between gap-3 rounded-[var(--radius-md)] border border-transparent px-3 py-3 transition hover:border-primary hover:bg-primary-soft/40"
                          >
                            <span>
                              <span className="text-xs font-medium text-primary-strong">
                                Module {mod.code}
                              </span>
                              <span className="mt-0.5 block font-medium text-ink">
                                {mod.title}
                              </span>
                              <span className="mt-0.5 block text-xs text-ink-subtle">
                                {levelsLabel(mod.levels)}
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
        </div>
      )}
    </div>
  );
}
