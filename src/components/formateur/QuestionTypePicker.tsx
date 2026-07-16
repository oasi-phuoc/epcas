"use client";

import {
  AlignLeft,
  ArrowLeftRight,
  Calculator,
  CheckSquare,
  CircleDot,
  ListOrdered,
  TextCursorInput,
  ToggleLeft,
  type LucideIcon,
} from "lucide-react";
import { QUESTION_TYPE_META } from "@/lib/question-templates";
import type { QuestionType } from "@/lib/types";
import { cn } from "@/lib/cn";

export const QUESTION_TYPE_ICONS: Record<QuestionType, LucideIcon> = {
  qcm: CircleDot,
  multi: CheckSquare,
  true_false: ToggleLeft,
  math: Calculator,
  open: AlignLeft,
  matching: ArrowLeftRight,
  ordering: ListOrdered,
  fill_blank: TextCursorInput,
};

const TYPES = Object.keys(QUESTION_TYPE_META) as QuestionType[];

type Props = {
  value: QuestionType;
  onChange: (type: QuestionType) => void;
  /** Affiche la description du type sélectionné sous la rangée */
  showHint?: boolean;
  className?: string;
};

/**
 * Les 8 types sur une seule ligne (icônes).
 * Le texte d’aide du type sélectionné s’affiche en dessous.
 */
export function QuestionTypePicker({
  value,
  onChange,
  showHint = true,
  className,
}: Props) {
  const meta = QUESTION_TYPE_META[value];

  return (
    <div className={cn("space-y-2", className)}>
      <div
        className="flex flex-wrap items-center gap-1.5"
        role="radiogroup"
        aria-label="Type de question"
      >
        {TYPES.map((type) => {
          const Icon = QUESTION_TYPE_ICONS[type];
          const selected = type === value;
          const m = QUESTION_TYPE_META[type];
          return (
            <button
              key={type}
              type="button"
              role="radio"
              aria-checked={selected}
              title={m.label}
              aria-label={m.label}
              onClick={() => onChange(type)}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border transition",
                selected
                  ? "border-primary bg-primary-soft text-primary-strong shadow-[var(--shadow-sm)]"
                  : "border-border bg-surface text-ink-muted hover:border-primary/50 hover:bg-surface-muted hover:text-ink",
              )}
            >
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </button>
          );
        })}
      </div>
      {showHint ? (
        <p className="text-sm text-ink-muted">
          <span className="font-medium text-ink">{meta.label}</span>
          {" — "}
          {meta.description}
        </p>
      ) : null}
    </div>
  );
}
