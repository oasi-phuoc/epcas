"use client";

import Link from "next/link";
import { BookOpen, PencilLine } from "lucide-react";
import { PageHeader, Panel } from "@/components/ui";

export default function LogistiqueHubPage() {
  return (
    <div>
      <PageHeader
        title="Logistique"
        description="Parcours EnterSite — théorie et exercices par année de formation."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Link href="/logistique/theorie">
          <Panel className="flex h-full flex-col gap-2 p-5 transition hover:border-primary hover:bg-primary-soft/30">
            <BookOpen className="h-6 w-6 text-primary-strong" />
            <h2 className="font-display text-xl text-ink">Théorie</h2>
            <p className="text-sm text-ink-muted">
              Objectifs, aperçu, cours et glossaire des modules de votre année.
            </p>
          </Panel>
        </Link>
        <Link href="/logistique/exercices">
          <Panel className="flex h-full flex-col gap-2 p-5 transition hover:border-primary hover:bg-primary-soft/30">
            <PencilLine className="h-6 w-6 text-primary-strong" />
            <h2 className="font-display text-xl text-ink">Exercices</h2>
            <p className="text-sm text-ink-muted">
              Mises en situation, mathématiques et vérification des acquis.
            </p>
          </Panel>
        </Link>
      </div>
    </div>
  );
}
