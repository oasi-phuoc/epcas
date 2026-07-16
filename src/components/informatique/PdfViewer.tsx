"use client";

import { useEffect, useRef, useState } from "react";
import type { PDFDocumentProxy } from "pdfjs-dist";
import { cn } from "@/lib/cn";
import { CompactPageNav } from "@/components/ui/CompactPageNav";

type PdfViewerProps = {
  url: string;
  title?: string;
  /**
   * book — pages empilées (lecture continue)
   * paged — une page à la fois avec pagination compacte
   */
  layout?: "book" | "paged";
};

function PdfPageCanvas({
  pdf,
  pageNumber,
}: {
  pdf: PDFDocumentProxy;
  pageNumber: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let cancelled = false;
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    (async () => {
      const page = await pdf.getPage(pageNumber);
      if (cancelled) return;
      const baseViewport = page.getViewport({ scale: 1 });
      const width = wrap.clientWidth || 320;
      const scale = width / baseViewport.width;
      const viewport = page.getViewport({ scale });
      const ctx = canvas.getContext("2d");
      if (!ctx || cancelled) return;
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      await page.render({ canvasContext: ctx, viewport }).promise;
    })().catch(() => {
      /* rendu silencieux si page invalide */
    });

    return () => {
      cancelled = true;
    };
  }, [pdf, pageNumber]);

  return (
    <div
      ref={wrapRef}
      className="w-full border-b border-border/60 bg-white last:border-b-0"
    >
      <canvas ref={canvasRef} className="mx-auto block h-auto max-w-full" />
    </div>
  );
}

export function PdfViewer({ url, title, layout = "book" }: PdfViewerProps) {
  const [pdf, setPdf] = useState<PDFDocumentProxy | null>(null);
  const [numPages, setNumPages] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    setPdf(null);
    setNumPages(0);
    setPageIndex(0);

    (async () => {
      const pdfjs = await import("pdfjs-dist");
      pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

      const doc = await pdfjs.getDocument(url).promise;
      if (cancelled) {
        void doc.destroy();
        return;
      }
      setPdf(doc);
      setNumPages(doc.numPages);
      setPageIndex(0);
    })()
      .catch(() => {
        if (!cancelled) setError("Impossible d'afficher ce PDF dans la page.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [url]);

  useEffect(() => {
    return () => {
      void pdf?.destroy();
    };
  }, [pdf]);

  useEffect(() => {
    if (numPages > 0 && pageIndex > numPages - 1) {
      setPageIndex(numPages - 1);
    }
  }, [numPages, pageIndex]);

  if (loading) {
    return (
      <p className="text-sm text-ink-muted" role="status">
        Chargement du document…
      </p>
    );
  }

  if (error || !pdf || numPages < 1) {
    return (
      <div className="space-y-2 text-sm text-ink-muted">
        <p>{error ?? "Document indisponible."}</p>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-primary-strong underline"
        >
          Ouvrir dans un nouvel onglet
        </a>
      </div>
    );
  }

  const paged = layout === "paged";
  const pagesToShow = paged ? [pageIndex + 1] : Array.from({ length: numPages }, (_, i) => i + 1);

  return (
    <div className="space-y-3">
      {title ? (
        <p className="sr-only">{title}</p>
      ) : null}
      {paged ? (
        <CompactPageNav
          pageIndex={pageIndex}
          total={numPages}
          onPageChange={setPageIndex}
        />
      ) : null}
      <div
        className={cn(
          "overflow-hidden rounded-[var(--radius-md)] border border-border bg-ink/5",
          !paged && "max-h-[min(75vh,48rem)] overflow-y-auto overscroll-contain",
        )}
      >
        {pagesToShow.map((pageNum) => (
          <PdfPageCanvas key={pageNum} pdf={pdf} pageNumber={pageNum} />
        ))}
      </div>
      {paged ? (
        <CompactPageNav
          pageIndex={pageIndex}
          total={numPages}
          onPageChange={setPageIndex}
          className="pt-1"
        />
      ) : null}
    </div>
  );
}
