import { cn } from "@/lib/cn";
import type { InputHTMLAttributes, ReactNode } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  error?: string;
  leftIcon?: ReactNode;
};

export function TextField({
  label,
  hint,
  error,
  leftIcon,
  className,
  id,
  ...props
}: Props) {
  const fieldId = id ?? props.name;
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      {label ? (
        <span className="font-medium text-ink">{label}</span>
      ) : null}
      <span className="relative">
        {leftIcon ? (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-subtle">
            {leftIcon}
          </span>
        ) : null}
        <input
          id={fieldId}
          className={cn(
            "h-11 w-full rounded-[var(--radius-md)] border border-border bg-surface px-3 text-ink placeholder:text-ink-subtle shadow-[var(--shadow-sm)] transition focus:border-primary focus:ring-2 focus:ring-primary/25",
            leftIcon && "pl-10",
            error && "border-danger focus:ring-danger/25",
            className,
          )}
          {...props}
        />
      </span>
      {error ? <span className="text-xs text-danger">{error}</span> : null}
      {!error && hint ? (
        <span className="text-xs text-ink-subtle">{hint}</span>
      ) : null}
    </label>
  );
}
