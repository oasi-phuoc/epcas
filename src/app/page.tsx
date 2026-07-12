"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button, Panel } from "@/components/ui";
import { useAppStore } from "@/lib/store";

export default function HomePage() {
  const { currentUser, hydrated } = useAppStore();
  const router = useRouter();

  useEffect(() => {
    if (hydrated && currentUser) router.replace("/accueil");
  }, [hydrated, currentUser, router]);

  return (
    <div className="bg-mesh relative min-h-dvh overflow-hidden">
      <div className="mx-auto flex min-h-dvh max-w-5xl flex-col justify-center px-4 py-10">
        <div className="animate-fade-up max-w-2xl">
          <p className="font-display text-5xl leading-none text-ink sm:text-7xl">
            EPCAS
            <span className="mt-2 block text-3xl text-primary-strong sm:text-4xl">
              Logistique
            </span>
          </p>
          <p className="mt-5 max-w-lg text-lg text-ink-muted">
            Formation AFP &amp; CFC Logisticien·ne — EPCA Sion. Théorie,
            exercices, évaluations à blanc et suivi, adaptés au niveau de
            chaque classe.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/connexion">
              <Button size="lg">Se connecter</Button>
            </Link>
          </div>
        </div>

        <Panel className="mt-12 max-w-xl animate-soft-pop delay-100">
          <p className="text-sm font-medium text-ink">Phase 1 — Socle</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-muted">
            <li>Thème pastel unique + composants UI partagés</li>
            <li>Comptes gérés par le formateur</li>
            <li>Théorie Complet / Résumé, QCM et maths</li>
          </ul>
        </Panel>
      </div>
    </div>
  );
}
