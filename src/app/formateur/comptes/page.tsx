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
import {
  DIPLOMA_LABELS,
  DIPLOMA_LEVELS,
  STUDY_YEAR_LABELS,
  maxStudyYear,
  normalizeStudyYear,
} from "@/lib/levels";
import { ROLE_LABELS, ROLES, isStaffRole } from "@/lib/roles";
import type { DiplomaLevel, Role, StudyYear } from "@/lib/types";

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
  const [newRole, setNewRole] = useState<Role>("apprentice");
  const [apprenticeLevel, setApprenticeLevel] = useState<DiplomaLevel>("CFC");
  const [apprenticeYear, setApprenticeYear] = useState<StudyYear>(1);
  const [message, setMessage] = useState<string | null>(null);
  const [messageTone, setMessageTone] = useState<"success" | "danger">(
    "success",
  );
  const [selected, setSelected] = useState<string[]>([]);
  const [newClassName, setNewClassName] = useState("");
  const [newClassYear, setNewClassYear] = useState("2025-2026");
  const [newClassLevel, setNewClassLevel] = useState<DiplomaLevel>("CFC");
  const [newClassStudyYear, setNewClassStudyYear] = useState<StudyYear>(1);
  const [filterClassId, setFilterClassId] = useState<string>("all");
  const [filterLevel, setFilterLevel] = useState<"all" | DiplomaLevel>("all");

  const apprentices = useMemo(
    () =>
      state.users
        .filter((u) => u.role === "apprentice")
        .sort((a, b) => a.displayName.localeCompare(b.displayName, "fr")),
    [state.users],
  );

  const staffUsers = useMemo(
    () =>
      state.users
        .filter((u) => isStaffRole(u.role))
        .sort((a, b) => a.displayName.localeCompare(b.displayName, "fr")),
    [state.users],
  );

  const classOptions = useMemo(
    () =>
      classes.map((c) => ({
        value: c.id,
        label: `${c.name} · ${DIPLOMA_LABELS[c.level]} ${STUDY_YEAR_LABELS[c.studyYear]}`,
      })),
    [classes],
  );

  const studyYearOptions = useMemo(() => {
    const max = maxStudyYear(newClassLevel);
    const years: StudyYear[] = max === 2 ? [1, 2] : [1, 2, 3];
    return years.map((y) => ({
      value: String(y),
      label: STUDY_YEAR_LABELS[y],
    }));
  }, [newClassLevel]);

  const apprenticeYearOptions = useMemo(() => {
    const max = maxStudyYear(apprenticeLevel);
    const years: StudyYear[] = max === 2 ? [1, 2] : [1, 2, 3];
    return years;
  }, [apprenticeLevel]);

  const levelFilteredClasses = useMemo(
    () =>
      filterLevel === "all"
        ? classes
        : classes.filter((c) => c.level === filterLevel),
    [classes, filterLevel],
  );

  const visibleApprentices = useMemo(() => {
    const classIds = new Set(levelFilteredClasses.map((c) => c.id));
    return apprentices.filter((a) => {
      if (!classIds.has(a.classId)) return false;
      if (filterClassId !== "all" && a.classId !== filterClassId) return false;
      return true;
    });
  }, [apprentices, levelFilteredClasses, filterClassId]);

  if (!currentUser) return null;
  if (!isStaffRole(currentUser.role)) {
    return <EmptyState title="Accès réservé aux formateurs et admins" />;
  }

  const groups = levelFilteredClasses.map((c) => {
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

  function flash(text: string, tone: "success" | "danger" = "success") {
    setMessage(text);
    setMessageTone(tone);
  }

  function resolveApprenticeClassId(level: DiplomaLevel, studyYear: StudyYear) {
    const year = normalizeStudyYear(studyYear, level);
    const existing = classes.find(
      (c) => c.level === level && c.studyYear === year,
    );
    if (existing) return existing.id;
    return upsertClass({
      name: `${level} ${STUDY_YEAR_LABELS[year]} — EPCA Sion`,
      year: "2025-2026",
      level,
      studyYear: year,
    });
  }

  function onCreate(e: FormEvent) {
    e.preventDefault();
    if (state.users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      flash("Cet email existe déjà.", "danger");
      return;
    }

    if (newRole === "admin" && currentUser?.role !== "admin") {
      flash("Seul un admin peut créer un compte admin.", "danger");
      return;
    }

    let targetClass = classes[0]?.id ?? "";
    if (newRole === "apprentice") {
      targetClass = resolveApprenticeClassId(apprenticeLevel, apprenticeYear);
    } else if (!targetClass) {
      flash("Créez d'abord une classe (référence pour le compte).", "danger");
      return;
    }

    upsertUser({
      email,
      password,
      displayName: name,
      role: newRole,
      classId: targetClass,
      active: true,
    });
    setName("");
    setEmail("");
    setPassword(demoPassword);
    if (newRole === "apprentice") {
      flash(
        `Compte apprenti créé — ${apprenticeLevel} ${STUDY_YEAR_LABELS[normalizeStudyYear(apprenticeYear, apprenticeLevel)]}.`,
      );
    } else {
      flash(`Compte ${ROLE_LABELS[newRole].toLowerCase()} créé.`);
    }
  }

  function onCreateClass(e: FormEvent) {
    e.preventDefault();
    if (!newClassName.trim()) return;
    const id = upsertClass({
      name: newClassName.trim(),
      year: newClassYear.trim() || "2025-2026",
      level: newClassLevel,
      studyYear: newClassStudyYear,
    });
    setNewClassName("");
    setFilterClassId(id);
    flash(
      `Classe ${newClassLevel} ${STUDY_YEAR_LABELS[newClassStudyYear]} créée.`,
    );
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
    flash(
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
    flash(
      active
        ? `${label} : classe activée (${classMembers.length}).`
        : `${label} : classe désactivée (${classMembers.length}).`,
    );
  }

  return (
    <div>
      <PageHeader
        title="Comptes"
        description="Créez des comptes Admin, Formateur ou Apprenti. Pour les élèves : niveau AFP/CFC et année 1 / 2 / 3."
      />

      <Panel className="mb-4">
        <h2 className="font-display text-xl">Nouveau compte</h2>
        <form onSubmit={onCreate} className="mt-4 space-y-4">
          <div>
            <p className="mb-2 text-sm font-medium text-ink">Rôle</p>
            <div className="flex flex-wrap gap-2">
              {ROLES.map((role) => {
                const disabled =
                  role === "admin" && currentUser.role !== "admin";
                return (
                  <Button
                    key={role}
                    type="button"
                    size="sm"
                    variant={newRole === role ? "primary" : "secondary"}
                    disabled={disabled}
                    onClick={() => setNewRole(role)}
                  >
                    {ROLE_LABELS[role]}
                  </Button>
                );
              })}
            </div>
            {currentUser.role !== "admin" ? (
              <p className="mt-1 text-xs text-ink-subtle">
                Seul un admin peut créer un compte admin.
              </p>
            ) : null}
          </div>

          {newRole === "apprentice" ? (
            <>
              <div>
                <p className="mb-2 text-sm font-medium text-ink">Niveau</p>
                <div className="flex flex-wrap gap-2">
                  {DIPLOMA_LEVELS.map((level) => (
                    <Button
                      key={level}
                      type="button"
                      size="sm"
                      variant={
                        apprenticeLevel === level ? "primary" : "secondary"
                      }
                      onClick={() => {
                        setApprenticeLevel(level);
                        const max = maxStudyYear(level);
                        if (apprenticeYear > max) setApprenticeYear(max);
                      }}
                    >
                      {DIPLOMA_LABELS[level]}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-ink">
                  Année d&apos;apprentissage
                </p>
                <div className="flex flex-wrap gap-2">
                  {apprenticeYearOptions.map((year) => (
                    <Button
                      key={year}
                      type="button"
                      size="sm"
                      variant={
                        apprenticeYear === year ? "primary" : "secondary"
                      }
                      onClick={() => setApprenticeYear(year)}
                    >
                      {year}
                    </Button>
                  ))}
                </div>
                <p className="mt-1 text-xs text-ink-subtle">
                  L&apos;élève sera placé dans la classe{" "}
                  {apprenticeLevel} {STUDY_YEAR_LABELS[normalizeStudyYear(apprenticeYear, apprenticeLevel)]}
                  {" "}(créée automatiquement si besoin).
                </p>
              </div>
            </>
          ) : null}

          <div className="grid gap-3 sm:grid-cols-2">
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
          </div>
          <Button type="submit">Créer le compte</Button>
        </form>
        {message ? (
          <div className="mt-3">
            <Alert tone={messageTone}>{message}</Alert>
          </div>
        ) : null}
      </Panel>

      <Panel className="mb-4">
        <h2 className="mb-3 font-display text-xl">
          Admins &amp; formateurs ({staffUsers.length})
        </h2>
        {staffUsers.length === 0 ? (
          <EmptyState title="Aucun compte staff" />
        ) : (
          <div className="space-y-3">
            {staffUsers.map((u) => (
              <Panel
                key={u.id}
                className="flex flex-wrap items-center justify-between gap-3"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-medium text-ink">{u.displayName}</p>
                    <Badge tone={u.role === "admin" ? "warning" : "primary"}>
                      {ROLE_LABELS[u.role]}
                    </Badge>
                  </div>
                  <p className="text-sm text-ink-muted">{u.email}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone={u.active ? "success" : "danger"}>
                    {u.active ? "Actif" : "Inactif"}
                  </Badge>
                  <Button
                    size="sm"
                    variant="secondary"
                    disabled={u.id === currentUser.id}
                    onClick={() => setUserActive(u.id, !u.active)}
                  >
                    {u.active ? "Désactiver" : "Réactiver"}
                  </Button>
                </div>
              </Panel>
            ))}
          </div>
        )}
      </Panel>

      <Panel className="mb-4">
        <h2 className="font-display text-xl">Nouvelle classe</h2>
        <form
          onSubmit={onCreateClass}
          className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_9rem_7rem_9rem_auto]"
        >
          <TextField
            label="Nom de la classe"
            value={newClassName}
            onChange={(e) => setNewClassName(e.target.value)}
            placeholder="Ex. AFP 1ʳᵉ année — EPCA Sion"
            required
          />
          <TextField
            label="Année scolaire"
            value={newClassYear}
            onChange={(e) => setNewClassYear(e.target.value)}
            required
          />
          <Select
            label="Niveau"
            options={DIPLOMA_LEVELS.map((l) => ({
              value: l,
              label: DIPLOMA_LABELS[l],
            }))}
            value={newClassLevel}
            onChange={(e) => {
              const next = e.target.value as DiplomaLevel;
              setNewClassLevel(next);
              const max = maxStudyYear(next);
              if (newClassStudyYear > max) setNewClassStudyYear(max);
            }}
          />
          <Select
            label="Année d'app."
            options={studyYearOptions}
            value={String(newClassStudyYear)}
            onChange={(e) =>
              setNewClassStudyYear(Number(e.target.value) as StudyYear)
            }
          />
          <div className="flex items-end">
            <Button type="submit">Créer</Button>
          </div>
        </form>
      </Panel>

      <Panel className="mb-4">
        <div className="flex flex-wrap items-end gap-3">
          <div className="min-w-[12rem] flex-1">
            <Select
              label="Filtrer par niveau"
              options={[
                { value: "all", label: "AFP + CFC" },
                ...DIPLOMA_LEVELS.map((l) => ({
                  value: l,
                  label: DIPLOMA_LABELS[l],
                })),
              ]}
              value={filterLevel}
              onChange={(e) => {
                setFilterLevel(e.target.value as "all" | DiplomaLevel);
                setSelected([]);
              }}
            />
          </div>
          <div className="min-w-[14rem] flex-1">
            <Select
              label="Filtrer par classe"
              options={[
                { value: "all", label: "Toutes les classes" },
                ...levelFilteredClasses.map((c) => ({
                  value: c.id,
                  label: `${c.name} · ${DIPLOMA_LABELS[c.level]}`,
                })),
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
        <h2 className="font-display text-2xl text-ink">Apprentis par classe</h2>
        {groups.map(({ classroom, members, active, inactive }) => {
          if (filterClassId !== "all" && filterClassId !== classroom.id) {
            return null;
          }
          return (
            <section key={classroom.id}>
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-xl text-ink">
                      {classroom.name}
                    </h3>
                    <Badge tone="primary">{classroom.level}</Badge>
                    <Badge tone="accent">
                      {STUDY_YEAR_LABELS[classroom.studyYear]}
                    </Badge>
                  </div>
                  <p className="text-sm text-ink-muted">
                    {classroom.year} · {members.length} élève
                    {members.length !== 1 ? "s" : ""} · {active} actif
                    {active !== 1 ? "s" : ""} · {inactive} inactif
                    {inactive !== 1 ? "s" : ""}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Select
                    options={DIPLOMA_LEVELS.map((l) => ({
                      value: l,
                      label: DIPLOMA_LABELS[l],
                    }))}
                    value={classroom.level}
                    onChange={(e) => {
                      const level = e.target.value as DiplomaLevel;
                      const max = maxStudyYear(level);
                      upsertClass({
                        id: classroom.id,
                        name: classroom.name,
                        year: classroom.year,
                        level,
                        studyYear:
                          classroom.studyYear > max ? max : classroom.studyYear,
                      });
                    }}
                    className="min-w-[6rem]"
                  />
                  <Select
                    options={(maxStudyYear(classroom.level) === 2
                      ? ([1, 2] as StudyYear[])
                      : ([1, 2, 3] as StudyYear[])
                    ).map((y) => ({
                      value: String(y),
                      label: STUDY_YEAR_LABELS[y],
                    }))}
                    value={String(classroom.studyYear)}
                    onChange={(e) =>
                      upsertClass({
                        id: classroom.id,
                        name: classroom.name,
                        year: classroom.year,
                        level: classroom.level,
                        studyYear: Number(e.target.value) as StudyYear,
                      })
                    }
                    className="min-w-[8rem]"
                  />
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
            <h3 className="mb-3 font-display text-xl text-ink">Sans classe</h3>
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
