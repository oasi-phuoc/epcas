import { cn } from "@/lib/cn";
import type { SelectHTMLAttributes } from "react";

type Option = { value: string; label: string };

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  hint?: string;
  error?: string;
  options: Option[];
  placeholder?: string;
};

export function Select({
  label,
  hint,
  error,
  options,
  placeholder,
  className,
  id,
  ...props
}: Props) {
  const fieldId = id ?? props.name;
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      {label ? <span className="font-medium text-ink">{label}</span> : null}
      <select
        id={fieldId}
        className={cn(
          "h-11 w-full appearance-none rounded-[var(--radius-md)] border border-border bg-surface px-3 text-ink shadow-[var(--shadow-sm)] transition focus:border-primary focus:ring-2 focus:ring-primary/25",
          error && "border-danger focus:ring-danger/25",
          className,
        )}
        {...props}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error ? <span className="text-xs text-danger">{error}</span> : null}
      {!error && hint ? (
        <span className="text-xs text-ink-subtle">{hint}</span>
      ) : null}
    </label>
  );
}
