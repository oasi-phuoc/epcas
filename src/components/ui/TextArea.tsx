import { cn } from "@/lib/cn";
import type { TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  hint?: string;
  error?: string;
};

export function TextArea({
  label,
  hint,
  error,
  className,
  id,
  ...props
}: Props) {
  const fieldId = id ?? props.name;
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      {label ? <span className="font-medium text-ink">{label}</span> : null}
      <textarea
        id={fieldId}
        className={cn(
          "min-h-28 w-full rounded-[var(--radius-md)] border border-border bg-surface px-3 py-2.5 text-ink placeholder:text-ink-subtle shadow-[var(--shadow-sm)] transition focus:border-primary focus:ring-2 focus:ring-primary/25",
          error && "border-danger focus:ring-danger/25",
          className,
        )}
        {...props}
      />
      {error ? <span className="text-xs text-danger">{error}</span> : null}
      {!error && hint ? (
        <span className="text-xs text-ink-subtle">{hint}</span>
      ) : null}
    </label>
  );
}
