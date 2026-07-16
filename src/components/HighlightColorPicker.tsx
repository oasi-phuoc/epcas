"use client";

import {
  DEFAULT_HIGHLIGHT_COLOR,
  HIGHLIGHT_COLORS,
  type HighlightColor,
} from "@/lib/highlight-colors";
import { cn } from "@/lib/cn";

type Props = {
  value?: HighlightColor;
  onChange: (color: HighlightColor) => void;
  /** Si fourni : un clic applique directement (annotations) */
  onPick?: (color: HighlightColor) => void;
  size?: "sm" | "md";
  className?: string;
};

export function HighlightColorPicker({
  value = DEFAULT_HIGHLIGHT_COLOR,
  onChange,
  onPick,
  size = "sm",
  className,
}: Props) {
  const dim = size === "sm" ? "h-5 w-5" : "h-6 w-6";

  return (
    <div
      className={cn("flex flex-wrap items-center gap-1", className)}
      role="group"
      aria-label="Couleur de surlignage"
    >
      {HIGHLIGHT_COLORS.map((c) => {
        const selected = c.id === value;
        return (
          <button
            key={c.id}
            type="button"
            title={c.label}
            aria-label={`Surlignage ${c.label}`}
            aria-pressed={selected}
            onClick={() => {
              onChange(c.id);
              onPick?.(c.id);
            }}
            className={cn(
              dim,
              "rounded-full border-2 transition active:scale-95",
              selected
                ? "border-ink ring-2 ring-primary/40"
                : "border-border hover:border-ink/40",
            )}
            style={{ background: c.bg }}
          />
        );
      })}
    </div>
  );
}
