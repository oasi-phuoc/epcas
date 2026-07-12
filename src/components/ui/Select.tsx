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
          "h-11 w-full appearance-none rounded-[var(--radius-md)] border border-border bg-surface bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat px-3 pr-10 text-base text-ink shadow-[var(--shadow-sm)] transition focus:border-primary focus:ring-2 focus:ring-primary/25 sm:text-sm",
          "bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%23555%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M19 9l-7 7-7-7%27/%3E%3C/svg%3E')]",
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
