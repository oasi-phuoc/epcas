"use client";

import { Button, Select } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { TheoryChapter } from "@/lib/theory-chapters";

type TheoryChapterNavProps = {
  chapters: TheoryChapter[];
  pageIndex: number;
  onPageChange: (index: number) => void;
  /** Compact bar for bottom of the chapter */
  placement?: "top" | "bottom";
};

export function TheoryChapterNav({
  chapters,
  pageIndex,
  onPageChange,
  placement = "top",
}: TheoryChapterNavProps) {
  if (chapters.length <= 1) return null;

  const total = chapters.length;
  const isFirst = pageIndex <= 0;
  const isLast = pageIndex >= total - 1;
  const current = chapters[pageIndex];
  const showChips = total <= 10;

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        placement === "top" && "mb-5 border-b border-border pb-4",
        placement === "bottom" && "mt-8 border-t border-border pt-4",
      )}
    >
      {placement === "top" ? (
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <Select
            label="Chapitre"
            className="h-9 sm:min-w-[16rem]"
            value={String(pageIndex)}
            onChange={(e) => onPageChange(Number(e.target.value))}
            options={chapters.map((ch, i) => ({
              value: String(i),
              label: ch.label,
            }))}
          />
          <p className="text-sm text-ink-muted">
            Page {pageIndex + 1} / {total}
            {current?.number ? (
              <span className="text-ink-subtle"> · § {current.number}</span>
            ) : null}
          </p>
        </div>
      ) : (
        <p className="text-center text-sm text-ink-muted">
          Page {pageIndex + 1} / {total}
        </p>
      )}

      {placement === "top" && showChips ? (
        <div className="flex flex-wrap gap-1.5">
          {chapters.map((ch, i) => {
            const active = i === pageIndex;
            return (
              <button
                key={ch.id}
                type="button"
                onClick={() => onPageChange(i)}
                className={cn(
                  "inline-flex h-8 min-w-8 items-center justify-center rounded-[var(--radius-sm)] border px-2 text-xs font-medium transition-colors",
                  active
                    ? "border-primary bg-primary-soft text-primary-strong"
                    : "border-border bg-surface text-ink-muted hover:bg-surface-muted hover:text-ink",
                )}
                aria-current={active ? "page" : undefined}
                title={ch.label}
              >
                {ch.number ?? (i === 0 ? "Intro" : String(i + 1))}
              </button>
            );
          })}
        </div>
      ) : null}

      <div className="flex flex-wrap items-center justify-between gap-2">
        <Button
          type="button"
          variant="secondary"
          size="sm"
          disabled={isFirst}
          onClick={() => onPageChange(pageIndex - 1)}
        >
          ← Précédent
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          disabled={isLast}
          onClick={() => onPageChange(pageIndex + 1)}
        >
          Suivant →
        </Button>
      </div>
    </div>
  );
}
