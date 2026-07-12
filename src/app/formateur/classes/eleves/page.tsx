"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Alert,
  Badge,
  Button,
  EmptyState,
  PageHeader,
  Panel,
  ProgressBar,
  Select,
  TextField,
} from "@/components/ui";
import { STUDY_YEAR_LABELS } from "@/lib/levels";
import { isStaffRole } from "@/lib/roles";
import { countLessonsForLevel, useAppStore } from "@/lib/store";
import { ArrowLeft } from "lucide-react";

export default function ElevesTablePage() {
  const {
    currentUser,
    state,
    setUserActive,
    setUserClass,
    setUsersActive,
    setUsersClass,
    deleteUser,
    getUserProgress,
  } = useAppStore();

  const [query, setQuery] = useState("");
  const [filterClass, setFilterClass] = useState("all");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [moveTo, setMoveTo] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const classes = useMemo(
    () => [...state.classes].sort((a, b) => a.name.localeCompare(b.name, "fr")),
    [state.classes],
  );

  const apprentices = useMemo(() => {
    let list = state.users.filter((u) => u.role === "apprentice");
    if (filterClass !== "all") {
      list = list.filter((u) => u.classId === filterClass);
    }
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (u) =>
          u.displayName.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q),
      );
    }
    return list.sort((a, b) => a.displayName.localeCompare(b.displayName, "fr"));
  }, [state.users, filterClass, query]);

  if (!currentUser) return null;
  if (!isStaffRole(currentUser.role)) {
    return <EmptyState title="Accès réservé aux formateurs et admins" />;
  }

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div>
      <PageHeader
        title="Élèves"
        description="Tableau global des apprentis — filtre, déplacement, activation."
        actions={
          <Link href="/formateur/classes">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4" />
              Classes
            </Button>
          </Link>
        }
      />

      {message ? (
        <div className="mb-4">
          <Alert tone="success">{message}</Alert>
        </div>
      ) : null}

      <Panel className="mb-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <TextField
            label="Recherche"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Nom ou email…"
          />
          <Select
            label="Classe"
            options={[
              { value: "all", label: "Toutes les classes" },
              ...classes.map((c) => ({
                value: c.id,
                label: `${c.name}${c.active ? "" : " (off)"}`,
              })),
            ]}
            value={filterClass}
            onChange={(e) => setFilterClass(e.target.value)}
          />
        </div>
      </Panel>

      {selected.size > 0 ? (
        <Panel className="mb-4 flex flex-wrap items-center gap-2">
          <span className="text-sm text-ink-muted">{selected.size} sélectionné(s)</span>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => {
              setUsersActive([...selected], true);
              setMessage("Activés.");
            }}
          >
            Activer
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => {
              setUsersActive([...selected], false);
              setMessage("Désactivés.");
            }}
          >
            Désactiver
          </Button>
          <Select
            label=""
            options={[
              { value: "", label: "Déplacer vers…" },
              ...classes.map((c) => ({ value: c.id, label: c.name })),
            ]}
            value={moveTo}
            onChange={(e) => setMoveTo(e.target.value)}
          />
          <Button
            size="sm"
            disabled={!moveTo}
            onClick={() => {
              setUsersClass([...selected], moveTo);
              setSelected(new Set());
              setMessage("Déplacés.");
            }}
          >
            Déplacer
          </Button>
        </Panel>
      ) : null}

      <Panel className="overflow-x-auto p-0">
        <table className="w-full min-w-[48rem] text-left text-sm">
          <thead className="bg-surface-muted/60 text-xs uppercase tracking-wide text-ink-subtle">
            <tr>
              <th className="px-3 py-2"> </th>
              <th className="px-3 py-2">Nom</th>
              <th className="px-3 py-2">Email</th>
              <th className="px-3 py-2">Classe</th>
              <th className="px-3 py-2">Niveau</th>
              <th className="px-3 py-2">Statut</th>
              <th className="px-3 py-2">Progression</th>
              <th className="px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {apprentices.map((m) => {
              const classroom = classes.find((c) => c.id === m.classId);
              const lessonTotal = classroom
                ? countLessonsForLevel(
                    state,
                    classroom.level,
                    classroom.studyYear,
                  )
                : 0;
              const done = getUserProgress(m.id).filter(
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
                      onChange={() => toggle(m.id)}
                    />
                  </td>
                  <td className="px-3 py-2 font-medium">{m.displayName}</td>
                  <td className="px-3 py-2 text-ink-muted">{m.email}</td>
                  <td className="px-3 py-2">
                    {classroom ? (
                      <Link
                        href={`/formateur/classes/${classroom.id}`}
                        className="text-primary-strong underline"
                      >
                        {classroom.name}
                      </Link>
                    ) : (
                      "—"
                    )}
                  </td>
                  <td className="px-3 py-2">
                    {classroom ? (
                      <>
                        <Badge tone="primary">{classroom.level}</Badge>{" "}
                        <Badge tone="accent">
                          {STUDY_YEAR_LABELS[classroom.studyYear]}
                        </Badge>
                      </>
                    ) : (
                      "—"
                    )}
                  </td>
                  <td className="px-3 py-2">
                    <Badge tone={m.active ? "success" : "danger"}>
                      {m.active ? "Actif" : "Inactif"}
                    </Badge>
                  </td>
                  <td className="px-3 py-2">
                    <div className="w-24">
                      <ProgressBar value={pct} />
                    </div>
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
                      <Select
                        label=""
                        options={classes.map((c) => ({
                          value: c.id,
                          label: c.name,
                        }))}
                        value={m.classId}
                        onChange={(e) => setUserClass(m.id, e.target.value)}
                      />
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          if (confirm(`Supprimer ${m.displayName} ?`)) {
                            deleteUser(m.id);
                          }
                        }}
                      >
                        Suppr.
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {apprentices.length === 0 ? (
          <p className="p-5 text-sm text-ink-muted">Aucun élève trouvé.</p>
        ) : null}
      </Panel>
    </div>
  );
}
