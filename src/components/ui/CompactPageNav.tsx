"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

type CompactPageNavProps = {
  pageIndex: number;
  total: number;
  onPageChange: (index: number) => void;
  className?: string;
};

/** Pagination compacte (icônes + Page x/y), comme en théorie apprenti. */
export function CompactPageNav({
  pageIndex,
  total,
  onPageChange,
  className,
}: CompactPageNavProps) {
  if (total <= 1) return null;

  const isFirst = pageIndex <= 0;
  const isLast = pageIndex >= total - 1;

  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      <button
        type="button"
        aria-label="Page précédente"
        disabled={isFirst}
        onClick={() => onPageChange(pageIndex - 1)}
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-border bg-surface text-ink transition",
          "hover:bg-surface-muted disabled:pointer-events-none disabled:opacity-40",
        )}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <p className="min-w-[5.5rem] text-center text-sm font-medium tabular-nums text-ink-muted">
        Page {pageIndex + 1}/{total}
      </p>
      <button
        type="button"
        aria-label="Page suivante"
        disabled={isLast}
        onClick={() => onPageChange(pageIndex + 1)}
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-border bg-surface text-ink transition",
          "hover:bg-surface-muted disabled:pointer-events-none disabled:opacity-40",
        )}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
