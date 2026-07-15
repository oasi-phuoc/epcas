"use client";

import { useId, useState, type ReactNode } from "react";
import { Button } from "@/components/ui";

type AnswerRevealProps = {
  children: ReactNode;
  /** Libellé du bouton, ex. « la réponse » ou « les réponses » */
  label?: string;
};

export function AnswerReveal({
  children,
  label = "les réponses",
}: AnswerRevealProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="my-4 rounded-[var(--radius-md)] border border-border bg-surface-muted/40 p-3 sm:p-4">
      <Button
        type="button"
        variant="secondary"
        size="sm"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? `Masquer ${label}` : `Afficher ${label}`}
      </Button>
      {open ? (
        <div
          id={panelId}
          className="mt-3 border-t border-border/70 pt-3"
          role="region"
          aria-label="Réponses"
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
