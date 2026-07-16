"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const SAMPLE_LONG =
  "Si vous utilisez régulièrement certains attributs de mise en forme de paragraphes ou de caractères, il peut être utile de modifier les paramètres prédéfinis.";

function MarginBar({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={cn(
        "w-2 shrink-0 self-stretch bg-ink",
        side === "left" ? "mr-1" : "ml-1",
      )}
      aria-hidden
    />
  );
}

function LabelBox({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "flex min-h-[3.25rem] w-[11.5rem] shrink-0 items-center justify-center border border-ink bg-[#e8e8e8] px-2 py-2 text-center text-sm font-semibold leading-snug text-ink",
        className,
      )}
    >
      {children}
    </div>
  );
}

type RowProps = {
  label: ReactNode;
  children: ReactNode;
};

function AlignRow({ label, children }: RowProps) {
  return (
    <div className="flex items-stretch gap-3 border-b border-border/40 py-3 last:border-b-0">
      <div className="flex min-h-[3.25rem] min-w-0 flex-1 items-center">{children}</div>
      <LabelBox>{label}</LabelBox>
    </div>
  );
}

/** Reproduction pédagogique — Aligner les paragraphes (module 805). */
export function WordParagraphAlignFigure() {
  return (
    <figure className="my-6">
      <h4 className="mb-4 font-display text-xl font-bold text-ink">
        Aligner les paragraphes
      </h4>
      <div className="overflow-x-auto rounded-[var(--radius-md)] border border-border bg-white p-4 sm:p-6">
        <AlignRow label="Centré">
          <div className="flex w-full items-stretch justify-center gap-0">
            <MarginBar side="left" />
            <div className="max-w-[14rem] px-2 text-center text-sm leading-snug text-ink">
              <p>Formatage de paragraphe</p>
              <p>Winword</p>
              <p>Traitement de texte</p>
            </div>
            <MarginBar side="right" />
          </div>
        </AlignRow>

        <AlignRow label="Aligné à gauche">
          <div className="flex w-full items-stretch">
            <MarginBar side="left" />
            <p className="max-w-[18rem] flex-1 text-left text-sm leading-snug text-ink">
              {SAMPLE_LONG}
            </p>
          </div>
        </AlignRow>

        <AlignRow label="Aligné à droite">
          <div className="flex w-full items-stretch justify-end">
            <div className="max-w-[12rem] text-right text-sm leading-snug text-ink">
              <p>Nom et Prénom :</p>
              <p>Adresse :</p>
              <p>NPA Localité :</p>
            </div>
            <MarginBar side="right" />
          </div>
        </AlignRow>

        <AlignRow label="Justifié">
          <div className="flex w-full items-stretch">
            <MarginBar side="left" />
            <p className="flex-1 px-1 text-justify text-sm leading-snug text-ink">
              {SAMPLE_LONG}
            </p>
            <MarginBar side="right" />
          </div>
        </AlignRow>

        <AlignRow label="Retrait à gauche">
          <div className="flex w-full items-stretch">
            <MarginBar side="left" />
            <p className="ml-8 max-w-[16rem] flex-1 text-left text-sm leading-snug text-ink">
              {SAMPLE_LONG}
            </p>
          </div>
        </AlignRow>

        <AlignRow label={<>Retrait à gauche/droite<br />Justifié</>}>
          <div className="flex w-full items-stretch">
            <MarginBar side="left" />
            <p className="mx-8 flex-1 text-justify text-sm leading-snug text-ink">
              {SAMPLE_LONG}
            </p>
            <MarginBar side="right" />
          </div>
        </AlignRow>

        <AlignRow label="Retrait positif de la première ligne">
          <div className="flex w-full items-stretch">
            <MarginBar side="left" />
            <p
              className="flex-1 px-1 text-justify text-sm leading-snug text-ink"
              style={{ textIndent: "2rem" }}
            >
              {SAMPLE_LONG}
            </p>
          </div>
        </AlignRow>

        <AlignRow label="Retrait négatif de la première ligne">
          <div className="flex w-full items-stretch">
            <MarginBar side="left" />
            <p
              className="flex-1 px-1 text-justify text-sm leading-snug text-ink"
              style={{ textIndent: "-2rem", paddingLeft: "2rem" }}
            >
              {SAMPLE_LONG}
            </p>
          </div>
        </AlignRow>
      </div>
    </figure>
  );
}
