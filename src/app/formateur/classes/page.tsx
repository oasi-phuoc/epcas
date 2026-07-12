"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import {
  Alert,
  Badge,
  Button,
  EmptyState,
  PageHeader,
  Panel,
  Select,
  TextField,
} from "@/components/ui";
import {
  DIPLOMA_LABELS,
  DIPLOMA_LEVELS,
  STUDY_YEAR_LABELS,
  maxStudyYear,
  normalizeStudyYear,
} from "@/lib/levels";
import { ROLE_LABELS, isStaffRole } from "@/lib/roles";
import { countLessonsForLevel, useAppStore } from "@/lib/store";
import type { DiplomaLevel, Role, StudyYear } from "@/lib/types";
import {
  GraduationCap,
  Plus,
  Users,
  UserRound,
} from "lucide-react";

export default function ClassesHubPage() {
  const {
    currentUser,
    state,
    upsertClass,
    setClassActive,
    upsertUser,
    getUserProgress,
    getAttemptsForUser,
  } = useAppStore();

  const [name, setName] = useState("");
  const [year, setYear] = useState("2025-2026");
  const [level, setLevel] = useState<DiplomaLevel>("CFC");
  const [studyYear, setStudyYear] = useState<StudyYear>(1);
  const [message, setMessage] = useState<string | null>(null);

  const [stuName, setStuName] = useState("");
  const [stuEmail, setStuEmail] = useState("");
  const [stuPassword, setStuPassword] = useState("");
  const [stuRole, setStuRole] = useState<Role>("apprentice");
  const [stuLevel, setStuLevel] = useState<DiplomaLevel>("CFC");
  const [stuYear, setStuYear] = useState<StudyYear>(1);
  const [stuClassId, setStuClassId] = useState("");

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

  const classOptions = classes.map((c) => ({
    value: c.id,
    label: `${c.name}${c.active ? "" : " (désactivée)"}`,
  }));

  function createClass(e: FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    const id = upsertClass({
      name: name.trim(),
      year: year.trim() || "2025-2026",
      level,
      studyYear: normalizeStudyYear(studyYear, level),
      active: true,
    });
    setName("");
    setMessage(`Classe créée.`);
    setStuClassId(id);
  }

  function createAccount(e: FormEvent) {
    e.preventDefault();
    if (!stuName.trim() || !stuEmail.trim()) return;
    if (stuRole === "admin" && currentUser!.role !== "admin") {
      setMessage("Seul un admin peut créer un compte admin.");
      return;
    }

    let classId = stuClassId || classes.find((c) => c.active)?.id || classes[0]?.id;
    if (stuRole === "apprentice") {
      const match = classes.find(
        (c) =>
          c.active &&
          c.level === stuLevel &&
          c.studyYear === normalizeStudyYear(stuYear, stuLevel),
      );
      if (match) classId = match.id;
      else {
        classId = upsertClass({
          name: `${stuLevel} ${STUDY_YEAR_LABELS[normalizeStudyYear(stuYear, stuLevel)]} — EPCA Sion`,
          year: "2025-2026",
          level: stuLevel,
          studyYear: normalizeStudyYear(stuYear, stuLevel),
          active: true,
        });
      }
    }
    if (!classId) return;
    if (!stuPassword.trim()) {
      setMessage("Indiquez un mot de passe pour le compte.");
      return;
    }

    upsertUser({
      email: stuEmail.trim().toLowerCase(),
      password: stuPassword.trim(),
      displayName: stuName.trim(),
      role: stuRole,
      classId,
      active: true,
    });
    setStuName("");
    setStuEmail("");
    setStuPassword("");
    setMessage("Compte créé.");
  }

  return (
    <div>
      <PageHeader
        title="Classes & élèves"
        description="Gérez les classes, les effectifs, le suivi pédagogique et les tâches."
      />

      {message ? (
        <div className="mb-4">
          <Alert tone="success">{message}</Alert>
        </div>
      ) : null}

      <div className="mb-4 flex flex-wrap gap-2">
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
                      {activeMembers !== 1 ? "s" : ""}) · suivi ~{Math.round(avgPct)}
                      % · {tasks} tâche{tasks !== 1 ? "s" : ""} ouverte
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

        <div className="space-y-4">
          <Panel>
            <h2 className="font-display text-xl text-ink">Nouvelle classe</h2>
            <form className="mt-3 space-y-3" onSubmit={createClass}>
              <TextField
                label="Nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="CFC 1ʳᵉ année — EPCA Sion"
                required
              />
              <TextField
                label="Année scolaire"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <Select
                  label="Niveau"
                  options={DIPLOMA_LEVELS.map((l) => ({
                    value: l,
                    label: DIPLOMA_LABELS[l],
                  }))}
                  value={level}
                  onChange={(e) => {
                    const next = e.target.value as DiplomaLevel;
                    setLevel(next);
                    setStudyYear(normalizeStudyYear(studyYear, next));
                  }}
                />
                <Select
                  label="Année d'apprentissage"
                  options={Array.from(
                    { length: maxStudyYear(level) },
                    (_, i) => {
                      const y = (i + 1) as StudyYear;
                      return { value: String(y), label: STUDY_YEAR_LABELS[y] };
                    },
                  )}
                  value={String(studyYear)}
                  onChange={(e) =>
                    setStudyYear(Number(e.target.value) as StudyYear)
                  }
                />
              </div>
              <Button type="submit">
                <Plus className="h-4 w-4" />
                Créer la classe
              </Button>
            </form>
          </Panel>

          <Panel>
            <h2 className="font-display text-xl text-ink">Nouveau compte</h2>
            <form className="mt-3 space-y-3" onSubmit={createAccount}>
              <TextField
                label="Nom affiché"
                value={stuName}
                onChange={(e) => setStuName(e.target.value)}
                required
              />
              <TextField
                label="Email"
                type="email"
                value={stuEmail}
                onChange={(e) => setStuEmail(e.target.value)}
                required
              />
              <TextField
                label="Mot de passe"
                value={stuPassword}
                onChange={(e) => setStuPassword(e.target.value)}
              />
              <Select
                label="Rôle"
                options={(
                  currentUser.role === "admin"
                    ? (["admin", "trainer", "apprentice"] as Role[])
                    : (["trainer", "apprentice"] as Role[])
                ).map((r) => ({ value: r, label: ROLE_LABELS[r] }))}
                value={stuRole}
                onChange={(e) => setStuRole(e.target.value as Role)}
              />
              {stuRole === "apprentice" ? (
                <div className="grid gap-3 sm:grid-cols-2">
                  <Select
                    label="Niveau"
                    options={DIPLOMA_LEVELS.map((l) => ({
                      value: l,
                      label: DIPLOMA_LABELS[l],
                    }))}
                    value={stuLevel}
                    onChange={(e) => {
                      const next = e.target.value as DiplomaLevel;
                      setStuLevel(next);
                      setStuYear(normalizeStudyYear(stuYear, next));
                    }}
                  />
                  <Select
                    label="Année"
                    options={Array.from(
                      { length: maxStudyYear(stuLevel) },
                      (_, i) => {
                        const y = (i + 1) as StudyYear;
                        return {
                          value: String(y),
                          label: STUDY_YEAR_LABELS[y],
                        };
                      },
                    )}
                    value={String(stuYear)}
                    onChange={(e) =>
                      setStuYear(Number(e.target.value) as StudyYear)
                    }
                  />
                </div>
              ) : (
                <Select
                  label="Classe de rattachement"
                  options={classOptions}
                  value={stuClassId || classOptions[0]?.value || ""}
                  onChange={(e) => setStuClassId(e.target.value)}
                />
              )}
              <Button type="submit">
                <Plus className="h-4 w-4" />
                Créer le compte
              </Button>
            </form>
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
    </div>
  );
}
