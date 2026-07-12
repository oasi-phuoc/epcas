"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Alert,
  Badge,
  Button,
  EmptyState,
  PageHeader,
  Panel,
  ProgressBar,
  Select,
  TextArea,
  TextField,
} from "@/components/ui";
import { cn } from "@/lib/cn";
import {
  DIPLOMA_LABELS,
  DIPLOMA_LEVELS,
  STUDY_YEAR_LABELS,
  maxStudyYear,
  normalizeStudyYear,
} from "@/lib/levels";
import { isStaffRole } from "@/lib/roles";
import { countLessonsForLevel, useAppStore } from "@/lib/store";
import type {
  ClassTaskStatus,
  DiplomaLevel,
  StudyYear,
} from "@/lib/types";
import {
  ArrowLeft,
  Check,
  Plus,
  Trash2,
  UserMinus,
  UserX,
} from "lucide-react";

type Tab = "effectifs" | "suivi" | "taches" | "reglages";

const TASK_STATUS_LABEL: Record<ClassTaskStatus, string> = {
  todo: "À faire",
  doing: "En cours",
  done: "Terminé",
};

export default function ClassDetailPage() {
  const params = useParams<{ classId: string }>();
  const classId = params.classId;
  const {
    currentUser,
    state,
    setUserActive,
    setUsersActive,
    setUserClass,
    setUsersClass,
    setClassActive,
    emptyClass,
    deleteClass,
    deleteUser,
    upsertClass,
    upsertClassTask,
    deleteClassTask,
    setClassTaskStatus,
    getUserProgress,
    getAttemptsForUser,
  } = useAppStore();

  const [tab, setTab] = useState<Tab>("effectifs");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [message, setMessage] = useState<string | null>(null);
  const [moveTo, setMoveTo] = useState("");

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskDue, setTaskDue] = useState("");
  const [taskUserId, setTaskUserId] = useState("");

  const classroom = state.classes.find((c) => c.id === classId);

  const otherClasses = useMemo(
    () =>
      state.classes
        .filter((c) => c.id !== classId)
        .sort((a, b) => a.name.localeCompare(b.name, "fr")),
    [state.classes, classId],
  );

  const members = useMemo(
    () =>
      state.users
        .filter((u) => u.role === "apprentice" && u.classId === classId)
        .sort((a, b) => a.displayName.localeCompare(b.displayName, "fr")),
    [state.users, classId],
  );

  const orphans = useMemo(
    () =>
      state.users.filter(
        (u) =>
          u.role === "apprentice" &&
          !state.classes.some((c) => c.id === u.classId),
      ),
    [state.users, state.classes],
  );

  const tasks = useMemo(
    () =>
      state.classTasks
        .filter((t) => t.classId === classId)
        .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)),
    [state.classTasks, classId],
  );

  if (!currentUser) return null;
  if (!isStaffRole(currentUser.role)) {
    return <EmptyState title="Accès réservé aux formateurs et admins" />;
  }
  if (!classroom) {
    return (
      <EmptyState
        title="Classe introuvable"
        description="Retournez à la liste des classes."
      />
    );
  }

  const lessonTotal = countLessonsForLevel(
    state,
    classroom.level,
    classroom.studyYear,
  );

  const tabs: { id: Tab; label: string }[] = [
    { id: "effectifs", label: `Effectifs (${members.length})` },
    { id: "suivi", label: "Suivi" },
    { id: "taches", label: `Tâches (${tasks.filter((t) => t.status !== "done").length})` },
    { id: "reglages", label: "Réglages" },
  ];

  function toggleSelect(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function selectAll() {
    setSelected(new Set(members.map((m) => m.id)));
  }

  function clearSelection() {
    setSelected(new Set());
  }

  function toast(msg: string) {
    setMessage(msg);
    setTimeout(() => setMessage(null), 2500);
  }

  function createTask(e: FormEvent) {
    e.preventDefault();
    if (!taskTitle.trim()) return;
    upsertClassTask({
      classId,
      userId: taskUserId || undefined,
      title: taskTitle.trim(),
      description: taskDesc.trim(),
      dueAt: taskDue || undefined,
      status: "todo",
    });
    setTaskTitle("");
    setTaskDesc("");
    setTaskDue("");
    setTaskUserId("");
    toast("Tâche créée.");
  }

  return (
    <div>
      <PageHeader
        title={classroom.name}
        description={`${classroom.year} · ${DIPLOMA_LABELS[classroom.level]} · ${STUDY_YEAR_LABELS[classroom.studyYear]}`}
        actions={
          <Link href="/formateur/classes">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4" />
              Classes
            </Button>
          </Link>
        }
      />

      <div className="mb-4 flex flex-wrap gap-2">
        <Badge tone={classroom.active ? "success" : "danger"}>
          {classroom.active ? "Classe active" : "Classe désactivée"}
        </Badge>
        <Badge tone="primary">{classroom.level}</Badge>
        <Badge tone="accent">{STUDY_YEAR_LABELS[classroom.studyYear]}</Badge>
        <Badge tone="neutral">
          {members.filter((m) => m.active).length}/{members.length} actifs
        </Badge>
      </div>

      {message ? (
        <div className="mb-4">
          <Alert tone="success">{message}</Alert>
        </div>
      ) : null}

      <div className="mb-5 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={cn(
              "rounded-[var(--radius-md)] px-3 py-2 text-sm font-medium transition",
              tab === t.id
                ? "bg-primary-soft text-primary-strong"
                : "text-ink-muted hover:bg-surface-muted hover:text-ink",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "effectifs" ? (
        <div className="space-y-4">
          {selected.size > 0 ? (
            <Panel className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-ink-muted">
                {selected.size} sélectionné{selected.size !== 1 ? "s" : ""}
              </span>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => {
                  setUsersActive([...selected], true);
                  toast("Élèves activés.");
                }}
              >
                Activer
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => {
                  setUsersActive([...selected], false);
                  toast("Élèves désactivés.");
                }}
              >
                Désactiver
              </Button>
              {otherClasses.length > 0 ? (
                <>
                  <Select
                    label=""
                    options={[
                      { value: "", label: "Déplacer vers…" },
                      ...otherClasses.map((c) => ({
                        value: c.id,
                        label: c.name,
                      })),
                    ]}
                    value={moveTo}
                    onChange={(e) => setMoveTo(e.target.value)}
                  />
                  <Button
                    size="sm"
                    disabled={!moveTo}
                    onClick={() => {
                      setUsersClass([...selected], moveTo);
                      clearSelection();
                      toast("Élèves déplacés.");
                    }}
                  >
                    Déplacer
                  </Button>
                </>
              ) : null}
              <Button size="sm" variant="ghost" onClick={clearSelection}>
                Annuler
              </Button>
            </Panel>
          ) : null}

          <Panel className="overflow-x-auto p-0">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3">
              <h2 className="font-display text-lg text-ink">
                Tableau des élèves
              </h2>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost" onClick={selectAll}>
                  Tout sélectionner
                </Button>
                <Link href="/formateur/classes/eleves">
                  <Button size="sm" variant="secondary">
                    Gérer tous les élèves
                  </Button>
                </Link>
              </div>
            </div>
            {members.length === 0 ? (
              <div className="p-5">
                <EmptyState
                  title="Classe vide"
                  description="Créez un élève ou déplacez-en depuis une autre classe."
                />
              </div>
            ) : (
              <table className="w-full min-w-[40rem] text-left text-sm">
                <thead className="bg-surface-muted/60 text-xs uppercase tracking-wide text-ink-subtle">
                  <tr>
                    <th className="px-3 py-2 font-medium"> </th>
                    <th className="px-3 py-2 font-medium">Nom</th>
                    <th className="px-3 py-2 font-medium">Email</th>
                    <th className="px-3 py-2 font-medium">Statut</th>
                    <th className="px-3 py-2 font-medium">Suivi</th>
                    <th className="px-3 py-2 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((m) => {
                    const progress = getUserProgress(m.id);
                    const done = progress.filter(
                      (p) => p.status === "done",
                    ).length;
                    const pct =
                      lessonTotal === 0 ? 0 : (done / lessonTotal) * 100;
                    return (
                      <tr
                        key={m.id}
                        className="border-t border-border/70 hover:bg-primary-soft/20"
                      >
                        <td className="px-3 py-2">
                          <input
                            type="checkbox"
                            checked={selected.has(m.id)}
                            onChange={() => toggleSelect(m.id)}
                          />
                        </td>
                        <td className="px-3 py-2 font-medium text-ink">
                          {m.displayName}
                        </td>
                        <td className="px-3 py-2 text-ink-muted">{m.email}</td>
                        <td className="px-3 py-2">
                          <Badge tone={m.active ? "success" : "danger"}>
                            {m.active ? "Actif" : "Inactif"}
                          </Badge>
                        </td>
                        <td className="px-3 py-2">
                          <div className="w-28">
                            <ProgressBar value={pct} />
                          </div>
                          <span className="text-[10px] text-ink-subtle">
                            {done}/{lessonTotal}
                          </span>
                        </td>
                        <td className="px-3 py-2">
                          <div className="flex flex-wrap gap-1">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => setUserActive(m.id, !m.active)}
                            >
                              {m.active ? "Off" : "On"}
                            </Button>
                            {otherClasses[0] ? (
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => {
                                  setUserClass(m.id, otherClasses[0]!.id);
                                  toast("Élève retiré de la classe.");
                                }}
                                aria-label="Retirer de la classe"
                              >
                                <UserMinus className="h-4 w-4" />
                              </Button>
                            ) : null}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </Panel>

          {orphans.length > 0 ? (
            <Alert tone="warning">
              {orphans.length} élève(s) sans classe valide — corrigez-les dans
              le tableau global.
            </Alert>
          ) : null}
        </div>
      ) : null}

      {tab === "suivi" ? (
        <div className="space-y-3">
          {members.length === 0 ? (
            <EmptyState title="Aucun élève à suivre" />
          ) : (
            members.map((m) => {
              const progress = getUserProgress(m.id);
              const done = progress.filter((p) => p.status === "done").length;
              const pct =
                lessonTotal === 0 ? 0 : (done / lessonTotal) * 100;
              const attempts = getAttemptsForUser(m.id);
              const avg =
                attempts.length === 0
                  ? 0
                  : (attempts.reduce((s, a) => s + a.score / a.maxScore, 0) /
                      attempts.length) *
                    100;
              return (
                <Panel key={m.id}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="font-display text-xl">{m.displayName}</p>
                      <p className="text-sm text-ink-muted">{m.email}</p>
                    </div>
                    <Badge tone={m.active ? "success" : "danger"}>
                      {m.active ? "Actif" : "Inactif"}
                    </Badge>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <ProgressBar value={pct} label="Théorie / pages" />
                    <ProgressBar value={avg} label="Score exercices" />
                  </div>
                  <p className="mt-2 text-xs text-ink-subtle">
                    {done}/{lessonTotal} pages · {attempts.length} tentative(s)
                  </p>
                </Panel>
              );
            })
          )}
        </div>
      ) : null}

      {tab === "taches" ? (
        <div className="grid gap-4 lg:grid-cols-2">
          <Panel>
            <h2 className="font-display text-xl text-ink">Nouvelle tâche</h2>
            <form className="mt-3 space-y-3" onSubmit={createTask}>
              <TextField
                label="Titre"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                required
                placeholder="Lire le module 301"
              />
              <TextArea
                label="Consigne"
                value={taskDesc}
                onChange={(e) => setTaskDesc(e.target.value)}
                rows={3}
              />
              <TextField
                label="Échéance (optionnel)"
                type="date"
                value={taskDue}
                onChange={(e) => setTaskDue(e.target.value)}
              />
              <Select
                label="Destinataire"
                options={[
                  { value: "", label: "Toute la classe" },
                  ...members.map((m) => ({
                    value: m.id,
                    label: m.displayName,
                  })),
                ]}
                value={taskUserId}
                onChange={(e) => setTaskUserId(e.target.value)}
              />
              <Button type="submit">
                <Plus className="h-4 w-4" />
                Assigner
              </Button>
            </form>
          </Panel>

          <Panel>
            <h2 className="font-display text-xl text-ink">Liste des tâches</h2>
            {tasks.length === 0 ? (
              <p className="mt-3 text-sm text-ink-muted">
                Aucune tâche pour cette classe.
              </p>
            ) : (
              <ul className="mt-3 space-y-2">
                {tasks.map((t) => {
                  const assignee = t.userId
                    ? state.users.find((u) => u.id === t.userId)
                    : null;
                  return (
                    <li
                      key={t.id}
                      className="rounded-[var(--radius-md)] border border-border px-3 py-3"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="font-medium text-ink">{t.title}</p>
                          {t.description ? (
                            <p className="mt-1 text-sm text-ink-muted">
                              {t.description}
                            </p>
                          ) : null}
                          <p className="mt-1 text-xs text-ink-subtle">
                            {assignee
                              ? `Pour ${assignee.displayName}`
                              : "Toute la classe"}
                            {t.dueAt ? ` · échéance ${t.dueAt}` : ""}
                          </p>
                        </div>
                        <Badge
                          tone={
                            t.status === "done"
                              ? "success"
                              : t.status === "doing"
                                ? "accent"
                                : "neutral"
                          }
                        >
                          {TASK_STATUS_LABEL[t.status]}
                        </Badge>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {(
                          ["todo", "doing", "done"] as ClassTaskStatus[]
                        ).map((st) => (
                          <Button
                            key={st}
                            size="sm"
                            variant={t.status === st ? "primary" : "ghost"}
                            onClick={() => setClassTaskStatus(t.id, st)}
                          >
                            {st === "done" ? (
                              <Check className="h-3 w-3" />
                            ) : null}
                            {TASK_STATUS_LABEL[st]}
                          </Button>
                        ))}
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => {
                            deleteClassTask(t.id);
                            toast("Tâche supprimée.");
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </Panel>
        </div>
      ) : null}

      {tab === "reglages" ? (
        <div className="space-y-4">
          <Panel>
            <h2 className="font-display text-xl text-ink">
              Paramètres de la classe
            </h2>
            <form
              className="mt-3 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const nextLevel = (fd.get("level") as DiplomaLevel) || classroom.level;
                upsertClass({
                  id: classroom.id,
                  name: String(fd.get("name") || classroom.name),
                  year: String(fd.get("year") || classroom.year),
                  level: nextLevel,
                  studyYear: normalizeStudyYear(
                    Number(fd.get("studyYear")) || classroom.studyYear,
                    nextLevel,
                  ),
                  active: classroom.active,
                });
                toast("Classe mise à jour.");
              }}
            >
              <TextField
                label="Nom"
                name="name"
                defaultValue={classroom.name}
                required
              />
              <TextField
                label="Année scolaire"
                name="year"
                defaultValue={classroom.year}
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <Select
                  label="Niveau"
                  name="level"
                  defaultValue={classroom.level}
                  options={DIPLOMA_LEVELS.map((l) => ({
                    value: l,
                    label: DIPLOMA_LABELS[l],
                  }))}
                />
                <Select
                  label="Année d'apprentissage"
                  name="studyYear"
                  defaultValue={String(classroom.studyYear)}
                  options={Array.from(
                    { length: maxStudyYear(classroom.level) },
                    (_, i) => {
                      const y = (i + 1) as StudyYear;
                      return { value: String(y), label: STUDY_YEAR_LABELS[y] };
                    },
                  )}
                />
              </div>
              <Button type="submit">Enregistrer</Button>
            </form>
          </Panel>

          <Panel>
            <h2 className="font-display text-xl text-ink">Actions</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              <Button
                variant="secondary"
                onClick={() => {
                  setClassActive(classroom.id, !classroom.active);
                  toast(
                    classroom.active
                      ? "Classe désactivée."
                      : "Classe réactivée.",
                  );
                }}
              >
                {classroom.active ? "Désactiver la classe" : "Réactiver"}
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  if (
                    confirm(
                      "Vider la classe ? Les élèves seront déplacés vers une autre classe.",
                    )
                  ) {
                    emptyClass(classroom.id);
                    toast("Classe vidée.");
                  }
                }}
              >
                <UserX className="h-4 w-4" />
                Vider la classe
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  if (state.classes.length <= 1) {
                    toast("Impossible de supprimer la dernière classe.");
                    return;
                  }
                  if (
                    confirm(
                      "Supprimer définitivement cette classe ? Les élèves seront réaffectés.",
                    )
                  ) {
                    deleteClass(classroom.id);
                    window.location.href = "/formateur/classes";
                  }
                }}
              >
                <Trash2 className="h-4 w-4" />
                Supprimer
              </Button>
            </div>
            <p className="mt-3 text-xs text-ink-subtle">
              Désactiver conserve les élèves et l&apos;historique. Vider
              déplace les apprentis. Supprimer retire la classe.
            </p>
          </Panel>

          {members.length > 0 ? (
            <Panel>
              <h2 className="font-display text-xl text-ink">
                Suppression d&apos;élèves
              </h2>
              <ul className="mt-3 space-y-2">
                {members.map((m) => (
                  <li
                    key={m.id}
                    className="flex items-center justify-between gap-2 text-sm"
                  >
                    <span>{m.displayName}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        if (confirm(`Supprimer le compte de ${m.displayName} ?`)) {
                          deleteUser(m.id);
                          toast("Compte supprimé.");
                        }
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </li>
                ))}
              </ul>
            </Panel>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
