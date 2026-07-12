"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  Badge,
  Button,
  EmptyState,
  PageHeader,
  Panel,
} from "@/components/ui";
import { STUDY_YEAR_LABELS } from "@/lib/levels";
import { ROLE_LABELS, isStaffRole } from "@/lib/roles";
import { countLessonsForLevel, useAppStore } from "@/lib/store";
import {
  GraduationCap,
  Plus,
  UserPlus,
  Users,
  UserRound,
} from "lucide-react";

export default function ClassesHubPage() {
  const {
    currentUser,
    state,
    setClassActive,
    getUserProgress,
  } = useAppStore();

  const classes = useMemo(
    () =>
      [...state.classes].sort((a, b) => {
        if (a.active !== b.active) return a.active ? -1 : 1;
        return a.name.localeCompare(b.name, "fr");
      }),
    [state.classes],
  );

  const apprentices = useMemo(
    () => state.users.filter((u) => u.role === "apprentice"),
    [state.users],
  );

  const staff = useMemo(
    () =>
      state.users.filter((u) => isStaffRole(u.role)).sort((a, b) =>
        a.displayName.localeCompare(b.displayName, "fr"),
      ),
    [state.users],
  );

  if (!currentUser) return null;
  if (!isStaffRole(currentUser.role)) {
    return <EmptyState title="Accès réservé aux formateurs et admins" />;
  }

  return (
    <div>
      <PageHeader
        title="Classes & élèves"
        description="Gérez les classes, les effectifs, le suivi pédagogique et les tâches."
      />

      <div className="mb-4 flex flex-wrap gap-2">
        <Link href="/formateur/classes/nouvelle">
          <Button size="sm">
            <Plus className="h-4 w-4" />
            Nouvelle classe
          </Button>
        </Link>
        <Link href="/formateur/classes/nouveau-compte">
          <Button size="sm" variant="secondary">
            <UserPlus className="h-4 w-4" />
            Nouveau compte
          </Button>
        </Link>
        <Link href="/formateur/classes/eleves">
          <Button variant="secondary" size="sm">
            <Users className="h-4 w-4" />
            Tableau des élèves
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <h2 className="font-display text-xl text-ink">Classes</h2>
          <p className="mt-1 text-sm text-ink-muted">
            {classes.filter((c) => c.active).length} active
            {classes.filter((c) => c.active).length !== 1 ? "s" : ""} ·{" "}
            {apprentices.length} élève{apprentices.length !== 1 ? "s" : ""}
          </p>
          <ul className="mt-4 space-y-2">
            {classes.map((c) => {
              const members = apprentices.filter((a) => a.classId === c.id);
              const activeMembers = members.filter((m) => m.active).length;
              const lessonTotal = countLessonsForLevel(
                state,
                c.level,
                c.studyYear,
              );
              let doneSum = 0;
              for (const m of members) {
                doneSum += getUserProgress(m.id).filter(
                  (p) => p.status === "done",
                ).length;
              }
              const avgPct =
                members.length === 0 || lessonTotal === 0
                  ? 0
                  : (doneSum / (members.length * lessonTotal)) * 100;
              const tasks = state.classTasks.filter(
                (t) => t.classId === c.id && t.status !== "done",
              ).length;

              return (
                <li key={c.id}>
                  <Link
                    href={`/formateur/classes/${c.id}`}
                    className="block rounded-[var(--radius-md)] border border-border px-3 py-3 transition hover:border-primary hover:bg-primary-soft/30"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-primary-strong" />
                      <span className="font-medium text-ink">{c.name}</span>
                      <Badge tone={c.active ? "success" : "danger"}>
                        {c.active ? "Active" : "Désactivée"}
                      </Badge>
                      <Badge tone="primary">{c.level}</Badge>
                      <Badge tone="accent">
                        {STUDY_YEAR_LABELS[c.studyYear]}
                      </Badge>
                    </div>
                    <p className="mt-2 text-xs text-ink-subtle">
                      {c.year} · {members.length} élève
                      {members.length !== 1 ? "s" : ""} ({activeMembers} actif
                      {activeMembers !== 1 ? "s" : ""}) · suivi ~
                      {Math.round(avgPct)}% · {tasks} tâche
                      {tasks !== 1 ? "s" : ""} ouverte
                      {tasks !== 1 ? "s" : ""}
                    </p>
                  </Link>
                  <div className="mt-1 flex justify-end">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setClassActive(c.id, !c.active)}
                    >
                      {c.active ? "Désactiver" : "Réactiver"}
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>
        </Panel>

        <Panel>
          <h2 className="mb-3 flex items-center gap-2 font-display text-xl text-ink">
            <UserRound className="h-5 w-5" />
            Staff ({staff.length})
          </h2>
          <ul className="space-y-2">
            {staff.map((u) => (
              <li
                key={u.id}
                className="flex flex-wrap items-center justify-between gap-2 rounded-[var(--radius-md)] border border-border px-3 py-2"
              >
                <span>
                  <span className="block text-sm font-medium text-ink">
                    {u.displayName}
                  </span>
                  <span className="text-xs text-ink-subtle">{u.email}</span>
                </span>
                <Badge tone={u.role === "admin" ? "primary" : "accent"}>
                  {ROLE_LABELS[u.role]}
                </Badge>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
