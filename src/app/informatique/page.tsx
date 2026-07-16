"use client";

import Link from "next/link";
import { BookOpen, FileSpreadsheet, PencilLine } from "lucide-react";
import { PageHeader, Panel } from "@/components/ui";
import { isStaffRole } from "@/lib/roles";
import { useAppStore } from "@/lib/store";

export default function InformatiqueHubPage() {
  const { currentUser } = useAppStore();
  const staff = Boolean(currentUser && isStaffRole(currentUser.role));

  return (
    <div>
      <PageHeader
        title="Informatique"
        description="Modules Microsoft 365 (804–808) et pratique Word, Excel, PowerPoint."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Link href="/informatique/theorie">
          <Panel className="flex h-full flex-col gap-2 p-5 transition hover:border-primary hover:bg-primary-soft/30">
            <BookOpen className="h-6 w-6 text-primary-strong" />
            <h2 className="font-display text-xl text-ink">Théorie</h2>
            <p className="text-sm text-ink-muted">
              Modules 804 à 808 — accessibles sans restriction d&apos;année scolaire.
            </p>
          </Panel>
        </Link>
        {staff ? (
          <Link href="/informatique/exercices">
            <Panel className="flex h-full flex-col gap-2 p-5 transition hover:border-primary hover:bg-primary-soft/30">
              <PencilLine className="h-6 w-6 text-primary-strong" />
              <h2 className="font-display text-xl text-ink">Exercices</h2>
              <p className="text-sm text-ink-muted">
                Situations, maths et contrôles des modules ICT, plus fichiers Office.
              </p>
            </Panel>
          </Link>
        ) : null}
        <Link
          href="/informatique/exercices/pratique"
          className={staff ? "sm:col-span-2" : undefined}
        >
          <Panel className="flex flex-col gap-2 p-5 transition hover:border-primary hover:bg-primary-soft/30 sm:flex-row sm:items-center sm:gap-4">
            <FileSpreadsheet className="h-6 w-6 shrink-0 text-primary-strong" />
            <div>
              <h2 className="font-display text-xl text-ink">Pratique Office</h2>
              <p className="text-sm text-ink-muted">
                Documents Word, Excel et PowerPoint avec corrections.
              </p>
            </div>
          </Panel>
        </Link>
      </div>
    </div>
  );
}
