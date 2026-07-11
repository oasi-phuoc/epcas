import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger" | "accent";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-strong shadow-[var(--shadow-sm)]",
  secondary:
    "bg-surface text-ink border border-border hover:bg-surface-muted",
  ghost: "bg-transparent text-ink-muted hover:bg-primary-soft hover:text-ink",
  danger: "bg-danger text-white hover:opacity-90",
  accent: "bg-accent text-white hover:bg-accent-strong shadow-[var(--shadow-sm)]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm rounded-[var(--radius-sm)]",
  md: "h-11 px-4 text-sm rounded-[var(--radius-md)]",
  lg: "h-12 px-5 text-base rounded-[var(--radius-md)]",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
