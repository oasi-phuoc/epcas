"use client";

import { cn } from "@/lib/cn";

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  description?: string;
  disabled?: boolean;
};

export function Switch({
  checked,
  onChange,
  label,
  description,
  disabled,
}: Props) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={cn(
        "flex w-full items-center justify-between gap-4 rounded-[var(--radius-md)] border border-border bg-surface px-3 py-3 text-left transition hover:bg-surface-muted disabled:opacity-50",
      )}
    >
      <span>
        <span className="block text-sm font-medium text-ink">{label}</span>
        {description ? (
          <span className="mt-0.5 block text-xs text-ink-subtle">
            {description}
          </span>
        ) : null}
      </span>
      <span
        className={cn(
          "relative h-7 w-12 shrink-0 rounded-full transition",
          checked ? "bg-primary" : "bg-border-strong",
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition",
            checked ? "left-5" : "left-0.5",
          )}
        />
      </span>
    </button>
  );
}
