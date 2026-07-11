"use client";

import Link from "next/link";
import { Badge, PageHeader, Panel } from "@/components/ui";
import { useExercises } from "@/lib/store";

const typeLabel = {
  qcm: "QCM",
  math: "Maths",
  open: "Ouverte",
} as const;

export default function ExercicesPage() {
  const exercises = useExercises();

  return (
    <div>
      <PageHeader
        title="Exercices"
        description="Entraînement libre avec feedback immédiat. Tentatives illimitées."
      />
      <div className="grid gap-3">
        {exercises.map((ex) => (
          <Link key={ex.id} href={`/exercices/${ex.id}`}>
            <Panel className="transition hover:border-primary hover:shadow-[var(--shadow-lg)]">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{typeLabel[ex.type]}</Badge>
                <Badge
                  tone={
                    ex.difficulty === "facile"
                      ? "success"
                      : ex.difficulty === "moyen"
                        ? "accent"
                        : "warning"
                  }
                >
                  {ex.difficulty}
                </Badge>
              </div>
              <h2 className="mt-2 font-display text-xl">{ex.title}</h2>
            </Panel>
          </Link>
        ))}
      </div>
    </div>
  );
}
