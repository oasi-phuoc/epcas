"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Badge,
  EmptyState,
  PageHeader,
  Panel,
  ProgressBar,
  Select,
} from "@/components/ui";
import { DIPLOMA_LABELS } from "@/lib/levels";
import { countLessonsForLevel, useAppStore } from "@/lib/store";

export default function FormateurSuiviPage() {
  const { currentUser, state, getUserProgress, getAttemptsForUser } =
    useAppStore();
  const [filterClassId, setFilterClassId] = useState<string>("all");

  const classes = useMemo(
    () => [...state.classes].sort((a, b) => a.name.localeCompare(b.name, "fr")),
    [state.classes],
  );

  const apprentices = useMemo(
    () =>
      state.users
        .filter((u) => u.role === "apprentice")
        .sort((a, b) => a.displayName.localeCompare(b.displayName, "fr")),
    [state.users],
  );

  if (!currentUser) return null;
  if (currentUser.role !== "trainer") {
    return <EmptyState title="Accès réservé aux formateurs" />;
  }

  const classOptions = [
    { value: "all", label: "Toutes les classes" },
    ...classes.map((c) => ({
      value: c.id,
      label: `${c.name} · ${DIPLOMA_LABELS[c.level]} (${c.year})`,
    })),
  ];

  const groups = classes
    .map((c) => ({
      classroom: c,
      members: apprentices.filter((a) => a.classId === c.id),
    }))
    .filter(
      (g) => filterClassId === "all" || g.classroom.id === filterClassId,
    );

  return (
    <div>
      <PageHeader
        title="Suivi des classes"
        description="Progression des apprentis, séparée par classe et niveau AFP / CFC."
      />

      <Panel className="mb-4">
        <Select
          label="Afficher"
          options={classOptions}
          value={filterClassId}
          onChange={(e) => setFilterClassId(e.target.value)}
        />
      </Panel>

      <div className="space-y-6">
        {groups.map(({ classroom, members }) => {
          const active = members.filter((m) => m.active).length;
          const lessonTotal = countLessonsForLevel(state, classroom.level);
          return (
            <section key={classroom.id}>
              <div className="mb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-display text-2xl text-ink">
                    {classroom.name}
                  </h2>
                  <Badge tone="primary">{classroom.level}</Badge>
                </div>
                <p className="text-sm text-ink-muted">
                  {classroom.year} · {members.length} élève
                  {members.length !== 1 ? "s" : ""} · {active} actif
                  {active !== 1 ? "s" : ""}
                </p>
              </div>

              {members.length === 0 ? (
                <EmptyState
                  title="Aucun apprenti dans cette classe"
                  description="Assignez des comptes depuis l’onglet Comptes."
                />
              ) : (
                <div className="space-y-3">
                  {members.map((a) => {
                    const progress = getUserProgress(a.id);
                    const done = progress.filter(
                      (p) => p.status === "done",
                    ).length;
                    const pct =
                      lessonTotal === 0 ? 0 : (done / lessonTotal) * 100;
                    const attempts = getAttemptsForUser(a.id);
                    const avg =
                      attempts.length === 0
                        ? 0
                        : (attempts.reduce(
                            (s, x) => s + x.score / x.maxScore,
                            0,
                          ) /
                            attempts.length) *
                          100;

                    return (
                      <Panel key={a.id}>
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <p className="font-display text-xl">
                              {a.displayName}
                            </p>
                            <p className="text-sm text-ink-muted">{a.email}</p>
                          </div>
                          <Badge tone={a.active ? "success" : "danger"}>
                            {a.active ? "Actif" : "Inactif"}
                          </Badge>
                        </div>
                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                          <ProgressBar value={pct} label="Théorie" />
                          <ProgressBar value={avg} label="Exercices" />
                        </div>
                        <p className="mt-3 text-xs text-ink-subtle">
                          {done}/{lessonTotal} pages · {attempts.length}{" "}
                          tentative(s)
                        </p>
                      </Panel>
                    );
                  })}
                </div>
              )}
            </section>
          );
        })}

        {apprentices.length === 0 ? (
          <EmptyState
            title="Aucun apprenti"
            description="Créez des comptes dans l’onglet Comptes."
          />
        ) : null}
      </div>

      <p className="mt-4 text-sm text-ink-muted">
        <Link
          href="/formateur/comptes"
          className="text-primary-strong underline"
        >
          Gérer les comptes et les classes
        </Link>
      </p>
    </div>
  );
}
