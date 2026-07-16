"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PdfViewerProps = {
  url: string;
  title?: string;
};

export function PdfViewer({ url, title }: PdfViewerProps) {
  const [page, setPage] = useState(1);

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-medium text-ink">
          {title ?? "Document PDF"}
        </p>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            size="sm"
            variant="secondary"
            disabled={page <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            aria-label="Page précédente"
          >
            <ChevronLeft className="h-4 w-4" />
            Précédente
          </Button>
          <span className="min-w-[4.5rem] text-center text-sm text-ink-muted">
            Page {page}
          </span>
          <Button
            type="button"
            size="sm"
            variant="secondary"
            onClick={() => setPage((p) => p + 1)}
            aria-label="Page suivante"
          >
            Suivante
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="overflow-hidden rounded-[var(--radius-md)] border border-border bg-ink/5">
        <iframe
          key={page}
          src={`${url}#page=${page}`}
          title={title ?? "Visionneuse PDF"}
          className="h-[min(70vh,42rem)] w-full bg-white"
        />
      </div>
    </div>
  );
}
