"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  Badge,
  Button,
  EmptyState,
  PageHeader,
  Panel,
  ProgressBar,
} from "@/components/ui";
import { STUDY_YEAR_LABELS } from "@/lib/levels";
import { ROLE_LABELS, isStaffRole } from "@/lib/roles";
import { countLessonsForLevel, useAppStore } from "@/lib/store";
import {
  Pencil,
  Plus,
  Trash2,
  UserPlus,
  Users,
  UserRound,
} from "lucide-react";

export default function ClassesHubPage() {
  const {
    currentUser,
    state,
    deleteClass,
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

  function handleDelete(classId: string, name: string) {
    if (state.classes.length <= 1) {
      alert("Impossible de supprimer la dernière classe.");
      return;
    }
    if (
      !confirm(
        `Supprimer la classe « ${name} » ? Les élèves seront réaffectés à une autre classe.`,
      )
    ) {
      return;
    }
    deleteClass(classId);
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

      <Panel className="mb-4 overflow-x-auto p-0">
        <div className="border-b border-border px-4 py-3">
          <h2 className="font-display text-lg text-ink">Classes</h2>
          <p className="mt-1 text-sm text-ink-muted">
            {classes.filter((c) => c.active).length} active
            {classes.filter((c) => c.active).length !== 1 ? "s" : ""} ·{" "}
            {apprentices.length} élève{apprentices.length !== 1 ? "s" : ""}
          </p>
        </div>

        {classes.length === 0 ? (
          <div className="p-5">
            <EmptyState
              title="Aucune classe"
              description="Créez une première classe pour commencer."
            />
          </div>
        ) : (
          <table className="w-full min-w-[52rem] text-left text-sm">
            <thead className="bg-surface-muted/60 text-xs uppercase tracking-wide text-ink-subtle">
              <tr>
                <th className="px-3 py-2 font-medium">Classe</th>
                <th className="px-3 py-2 font-medium">Statut</th>
                <th className="px-3 py-2 font-medium">Niveau</th>
                <th className="px-3 py-2 font-medium">Année</th>
                <th className="px-3 py-2 font-medium">Période</th>
                <th className="px-3 py-2 font-medium">Élèves</th>
                <th className="px-3 py-2 font-medium">Suivi</th>
                <th className="px-3 py-2 font-medium">Tâches</th>
                <th className="px-3 py-2 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
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
                  <tr
                    key={c.id}
                    className="border-t border-border/70 hover:bg-primary-soft/20"
                  >
                    <td className="px-3 py-2.5 font-medium text-ink">
                      {c.name}
                    </td>
                    <td className="px-3 py-2.5">
                      <Badge tone={c.active ? "success" : "danger"}>
                        {c.active ? "Active" : "Désactivée"}
                      </Badge>
                    </td>
                    <td className="px-3 py-2.5">
                      <Badge tone="primary">{c.level}</Badge>
                    </td>
                    <td className="px-3 py-2.5">
                      <Badge tone="accent">
                        {STUDY_YEAR_LABELS[c.studyYear]}
                      </Badge>
                    </td>
                    <td className="px-3 py-2.5 text-ink-muted">{c.year}</td>
                    <td className="px-3 py-2.5 text-ink-muted">
                      {members.length}
                      <span className="text-ink-subtle">
                        {" "}
                        ({activeMembers} actif
                        {activeMembers !== 1 ? "s" : ""})
                      </span>
                    </td>
                    <td className="px-3 py-2.5">
                      <div className="w-24">
                        <ProgressBar value={avgPct} />
                      </div>
                      <span className="text-[10px] text-ink-subtle">
                        ~{Math.round(avgPct)}%
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-ink-muted">{tasks}</td>
                    <td className="px-3 py-2.5">
                      <div className="flex flex-wrap gap-1">
                        <Link href={`/formateur/classes/${c.id}`}>
                          <Button size="sm" variant="secondary">
                            Détails
                          </Button>
                        </Link>
                        <Link href={`/formateur/classes/${c.id}?tab=reglages`}>
                          <Button size="sm" variant="ghost" title="Modifier">
                            <Pencil className="h-4 w-4" />
                            <span className="hidden sm:inline">Modifier</span>
                          </Button>
                        </Link>
                        <Button
                          size="sm"
                          variant="ghost"
                          title="Supprimer"
                          onClick={() => handleDelete(c.id, c.name)}
                        >
                          <Trash2 className="h-4 w-4 text-danger" />
                          <span className="hidden sm:inline">Supprimer</span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
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
  );
}
