import { cn } from "@/lib/cn";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "./Button";

export function Panel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-[var(--radius-lg)] border border-border bg-surface/90 p-5 shadow-[var(--shadow-md)] backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function PageHeader({
  title,
  description,
  actions,
  backHref,
  backLabel = "Retour",
}: {
  title: string;
  description?: string;
  actions?: ReactNode;
  /** Lien retour affiché à gauche du titre (icône seule). */
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <header className="mb-6 animate-fade-up">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex min-w-0 items-start gap-2">
          {backHref ? (
            <Link href={backHref} className="mt-1.5 shrink-0">
              <Button
                variant="ghost"
                size="sm"
                className="px-2"
                aria-label={backLabel}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
          ) : null}
          <div className="min-w-0">
            <h1 className="font-display text-3xl text-ink sm:text-4xl">{title}</h1>
            {description ? (
              <p className="mt-1 max-w-2xl text-ink-muted">{description}</p>
            ) : null}
          </div>
        </div>
        {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
      </div>
    </header>
  );
}

export function Badge({
  children,
  tone = "primary",
}: {
  children: ReactNode;
  tone?: "primary" | "accent" | "success" | "warning" | "danger" | "neutral";
}) {
  const tones = {
    primary: "bg-primary-soft text-primary-strong",
    accent: "bg-accent-soft text-accent-strong",
    success: "bg-success-soft text-[#2f6b45]",
    warning: "bg-warning-soft text-[#7a6220]",
    danger: "bg-danger-soft text-[#8b3d3d]",
    neutral: "bg-surface-muted text-ink-muted",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}

export function Alert({
  children,
  tone = "info",
}: {
  children: ReactNode;
  tone?: "info" | "success" | "warning" | "danger";
}) {
  const tones = {
    info: "bg-primary-soft border-primary/30 text-ink",
    success: "bg-success-soft border-success/40 text-ink",
    warning: "bg-warning-soft border-warning/40 text-ink",
    danger: "bg-danger-soft border-danger/40 text-ink",
  };
  return (
    <div
      className={cn(
        "rounded-[var(--radius-md)] border px-4 py-3 text-sm animate-soft-pop",
        tones[tone],
      )}
    >
      {children}
    </div>
  );
}

export function ProgressBar({
  value,
  label,
}: {
  value: number;
  label?: string;
}) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className="space-y-1.5">
      {label ? (
        <div className="flex justify-between text-xs text-ink-muted">
          <span>{label}</span>
          <span>{Math.round(pct)} %</span>
        </div>
      ) : null}
      <div className="h-2.5 overflow-hidden rounded-full bg-primary-soft">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export function EmptyState({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-dashed border-border bg-surface-muted/60 px-6 py-10 text-center">
      <p className="font-display text-xl text-ink">{title}</p>
      {description ? (
        <p className="mt-2 text-sm text-ink-muted">{description}</p>
      ) : null}
    </div>
  );
}
