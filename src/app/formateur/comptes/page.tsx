"use client";

import { FormEvent, useMemo, useState } from "react";
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
import { useAppStore } from "@/lib/store";
import { UserCheck, UserX } from "lucide-react";

export default function ComptesPage() {
  const {
    currentUser,
    state,
    upsertUser,
    setUserActive,
    setUsersActive,
    setUserClass,
    upsertClass,
    deleteClass,
    demoPassword,
  } = useAppStore();

  const classes = useMemo(
    () => [...state.classes].sort((a, b) => a.name.localeCompare(b.name, "fr")),
    [state.classes],
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(demoPassword);
  const [classId, setClassId] = useState(classes[0]?.id ?? "");
  const [message, setMessage] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [newClassName, setNewClassName] = useState("");
  const [newClassYear, setNewClassYear] = useState("2025-2026");
  const [filterClassId, setFilterClassId] = useState<string>("all");

  const apprentices = useMemo(
    () =>
      state.users
        .filter((u) => u.role === "apprentice")
        .sort((a, b) => a.displayName.localeCompare(b.displayName, "fr")),
    [state.users],
  );

  const visibleApprentices = useMemo(
    () =>
      filterClassId === "all"
        ? apprentices
        : apprentices.filter((a) => a.classId === filterClassId),
    [apprentices, filterClassId],
  );

  const classOptions = useMemo(
    () =>
      classes.map((c) => ({
        value: c.id,
        label: `${c.name} (${c.year})`,
      })),
    [classes],
  );

  if (!currentUser) return null;
  if (currentUser.role !== "trainer") {
    return <EmptyState title="Accès réservé aux formateurs" />;
  }

  const groups = classes.map((c) => {
    const members = apprentices.filter((a) => a.classId === c.id);
    return {
      classroom: c,
      members,
      active: members.filter((m) => m.active).length,
      inactive: members.filter((m) => !m.active).length,
    };
  });

  const orphanMembers = apprentices.filter(
    (a) => !classes.some((c) => c.id === a.classId),
  );

  const selectedVisible = selected.filter((id) =>
    visibleApprentices.some((a) => a.id === id),
  );
  const allVisibleSelected =
    visibleApprentices.length > 0 &&
    visibleApprentices.every((a) => selected.includes(a.id));

  function onCreate(e: FormEvent) {
    e.preventDefault();
    const targetClass = classId || classes[0]?.id;
    if (!targetClass) {
      setMessage("Créez d'abord une classe.");
      return;
    }
    if (state.users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      setMessage("Cet email existe déjà.");
      return;
    }
    upsertUser({
      email,
      password,
      displayName: name,
      role: "apprentice",
      classId: targetClass,
      active: true,
    });
    setName("");
    setEmail("");
    setPassword(demoPassword);
    setMessage("Compte apprenti créé.");
  }

  function onCreateClass(e: FormEvent) {
    e.preventDefault();
    if (!newClassName.trim()) return;
    const id = upsertClass({
      name: newClassName.trim(),
      year: newClassYear.trim() || "2025-2026",
    });
    setNewClassName("");
    setClassId(id);
    setFilterClassId(id);
    setMessage("Classe créée.");
  }

  function toggleOne(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  function toggleVisible() {
    if (allVisibleSelected) {
      setSelected((prev) =>
        prev.filter((id) => !visibleApprentices.some((a) => a.id === id)),
      );
    } else {
      setSelected((prev) => [
        ...new Set([...prev, ...visibleApprentices.map((a) => a.id)]),
      ]);
    }
  }

  function activateGroup(active: boolean) {
    if (selectedVisible.length === 0) return;
    const n = selectedVisible.length;
    setUsersActive(selectedVisible, active);
    setMessage(
      active
        ? `${n} compte${n > 1 ? "s" : ""} activé${n > 1 ? "s" : ""}.`
        : `${n} compte${n > 1 ? "s" : ""} désactivé${n > 1 ? "s" : ""}.`,
    );
    setSelected([]);
  }

  function activateClass(classMembers: string[], active: boolean, label: string) {
    if (classMembers.length === 0) return;
    setUsersActive(classMembers, active);
    setSelected([]);
    setMessage(
      active
        ? `${label} : classe activée (${classMembers.length}).`
        : `${label} : classe désactivée (${classMembers.length}).`,
    );
  }

  return (
    <div>
      <PageHeader
        title="Comptes apprentis"
        description="Chaque élève est rattaché à une classe. Gérez les comptes par groupe."
      />

      <Panel className="mb-4">
        <h2 className="font-display text-xl">Nouvelle classe</h2>
        <form
          onSubmit={onCreateClass}
          className="mt-4 grid gap-3 sm:grid-cols-[1fr_10rem_auto]"
        >
          <TextField
            label="Nom de la classe"
            value={newClassName}
            onChange={(e) => setNewClassName(e.target.value)}
            placeholder="Ex. CFC 1ʳᵉ année — EPCA Sion"
            required
          />
          <TextField
            label="Année"
            value={newClassYear}
            onChange={(e) => setNewClassYear(e.target.value)}
            required
          />
          <div className="flex items-end">
            <Button type="submit">Créer</Button>
          </div>
        </form>
      </Panel>

      <Panel className="mb-4">
        <h2 className="font-display text-xl">Nouvel apprenti</h2>
        <form onSubmit={onCreate} className="mt-4 grid gap-3 sm:grid-cols-2">
          <TextField
            label="Nom affiché"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Mot de passe initial"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Select
            label="Classe"
            options={classOptions}
            value={classId || classes[0]?.id || ""}
            onChange={(e) => setClassId(e.target.value)}
          />
          <div className="flex items-end sm:col-span-2">
            <Button type="submit">Créer le compte</Button>
          </div>
        </form>
        {message ? (
          <div className="mt-3">
            <Alert tone="success">{message}</Alert>
          </div>
        ) : null}
      </Panel>

      <Panel className="mb-4">
        <div className="flex flex-wrap items-end gap-3">
          <div className="min-w-[14rem] flex-1">
            <Select
              label="Filtrer par classe"
              options={[
                { value: "all", label: "Toutes les classes" },
                ...classOptions,
              ]}
              value={filterClassId}
              onChange={(e) => {
                setFilterClassId(e.target.value);
                setSelected([]);
              }}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant="secondary"
              onClick={toggleVisible}
              disabled={visibleApprentices.length === 0}
            >
              {allVisibleSelected ? "Désélectionner" : "Sélectionner la vue"}
            </Button>
            <Button
              size="sm"
              variant="primary"
              disabled={selectedVisible.length === 0}
              onClick={() => activateGroup(true)}
            >
              <UserCheck className="h-4 w-4" />
              Activer le groupe
            </Button>
            <Button
              size="sm"
              variant="danger"
              disabled={selectedVisible.length === 0}
              onClick={() => activateGroup(false)}
            >
              <UserX className="h-4 w-4" />
              Désactiver le groupe
            </Button>
          </div>
        </div>
        <p className="mt-2 text-xs text-ink-subtle">
          {selectedVisible.length} sélectionné
          {selectedVisible.length !== 1 ? "s" : ""} dans la vue actuelle
        </p>
      </Panel>

      <div className="space-y-6">
        {groups.map(({ classroom, members, active, inactive }) => {
          if (filterClassId !== "all" && filterClassId !== classroom.id) {
            return null;
          }
          return (
            <section key={classroom.id}>
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h2 className="font-display text-2xl text-ink">
                    {classroom.name}
                  </h2>
                  <p className="text-sm text-ink-muted">
                    {classroom.year} · {members.length} élève
                    {members.length !== 1 ? "s" : ""} · {active} actif
                    {active !== 1 ? "s" : ""} · {inactive} inactif
                    {inactive !== 1 ? "s" : ""}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    disabled={members.length === 0 || active === members.length}
                    onClick={() =>
                      activateClass(
                        members.map((m) => m.id),
                        true,
                        classroom.name,
                      )
                    }
                  >
                    <UserCheck className="h-4 w-4" />
                    Classe ON
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    disabled={
                      members.length === 0 || inactive === members.length
                    }
                    onClick={() => {
                      if (
                        confirm(
                          `Désactiver tous les élèves de « ${classroom.name} » ?`,
                        )
                      ) {
                        activateClass(
                          members.map((m) => m.id),
                          false,
                          classroom.name,
                        );
                      }
                    }}
                  >
                    <UserX className="h-4 w-4" />
                    Classe OFF
                  </Button>
                  {classes.length > 1 ? (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        if (
                          confirm(
                            `Supprimer la classe « ${classroom.name} » ? Les élèves seront déplacés vers une autre classe.`,
                          )
                        ) {
                          deleteClass(classroom.id);
                        }
                      }}
                    >
                      Supprimer classe
                    </Button>
                  ) : null}
                </div>
              </div>

              {members.length === 0 ? (
                <EmptyState
                  title="Aucun élève dans cette classe"
                  description="Créez un compte ou déplacez un élève ici."
                />
              ) : (
                <div className="space-y-3">
                  {members.map((a) => {
                    const isChecked = selected.includes(a.id);
                    return (
                      <Panel
                        key={a.id}
                        className={`flex flex-wrap items-center justify-between gap-3 ${
                          isChecked ? "border-primary bg-primary-soft/30" : ""
                        }`}
                      >
                        <label className="flex min-w-0 flex-1 cursor-pointer items-center gap-3">
                          <input
                            type="checkbox"
                            className="h-4 w-4 shrink-0 accent-[var(--color-primary)]"
                            checked={isChecked}
                            onChange={() => toggleOne(a.id)}
                          />
                          <div className="min-w-0">
                            <p className="font-medium text-ink">
                              {a.displayName}
                            </p>
                            <p className="truncate text-sm text-ink-muted">
                              {a.email}
                            </p>
                          </div>
                        </label>
                        <div className="flex flex-wrap items-center gap-2">
                          <Select
                            options={classOptions}
                            value={a.classId}
                            onChange={(e) =>
                              setUserClass(a.id, e.target.value)
                            }
                            className="min-w-[12rem]"
                          />
                          <Badge tone={a.active ? "success" : "danger"}>
                            {a.active ? "Actif" : "Inactif"}
                          </Badge>
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => setUserActive(a.id, !a.active)}
                          >
                            {a.active ? "Désactiver" : "Réactiver"}
                          </Button>
                        </div>
                      </Panel>
                    );
                  })}
                </div>
              )}
            </section>
          );
        })}

        {orphanMembers.length > 0 && filterClassId === "all" ? (
          <section>
            <h2 className="mb-3 font-display text-2xl text-ink">
              Sans classe
            </h2>
            <div className="space-y-3">
              {orphanMembers.map((a) => (
                <Panel
                  key={a.id}
                  className="flex flex-wrap items-center justify-between gap-3"
                >
                  <div>
                    <p className="font-medium text-ink">{a.displayName}</p>
                    <p className="text-sm text-ink-muted">{a.email}</p>
                  </div>
                  <Select
                    options={classOptions}
                    value={classes[0]?.id ?? ""}
                    onChange={(e) => setUserClass(a.id, e.target.value)}
                    className="min-w-[12rem]"
                  />
                </Panel>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
