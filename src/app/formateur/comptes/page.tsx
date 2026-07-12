"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  Alert,
  Badge,
  Button,
  EmptyState,
  PageHeader,
  Panel,
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
    demoPassword,
  } = useAppStore();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(demoPassword);
  const [message, setMessage] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>([]);

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

  const activeCount = apprentices.filter((a) => a.active).length;
  const inactiveCount = apprentices.length - activeCount;
  const allSelected =
    apprentices.length > 0 && selected.length === apprentices.length;
  const someSelected = selected.length > 0;

  function onCreate(e: FormEvent) {
    e.preventDefault();
    if (state.users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      setMessage("Cet email existe déjà.");
      return;
    }
    upsertUser({
      email,
      password,
      displayName: name,
      role: "apprentice",
      classId: state.classRoom.id,
      active: true,
    });
    setName("");
    setEmail("");
    setPassword(demoPassword);
    setMessage("Compte apprenti créé.");
  }

  function toggleOne(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  function toggleAll() {
    if (allSelected) setSelected([]);
    else setSelected(apprentices.map((a) => a.id));
  }

  function activateGroup(active: boolean) {
    if (!someSelected) return;
    const n = selected.length;
    setUsersActive(selected, active);
    setMessage(
      active
        ? `${n} compte${n > 1 ? "s" : ""} activé${n > 1 ? "s" : ""}.`
        : `${n} compte${n > 1 ? "s" : ""} désactivé${n > 1 ? "s" : ""}.`,
    );
    setSelected([]);
  }

  function activateWholeClass(active: boolean) {
    const ids = apprentices.map((a) => a.id);
    if (ids.length === 0) return;
    setUsersActive(ids, active);
    setSelected([]);
    setMessage(
      active
        ? `Toute la classe est activée (${ids.length}).`
        : `Toute la classe est désactivée (${ids.length}).`,
    );
  }

  return (
    <div>
      <PageHeader
        title="Comptes apprentis"
        description={`${state.classRoom.name} — activez ou désactivez un élève ou un groupe.`}
      />

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
          <div className="flex items-end">
            <Button type="submit" className="w-full sm:w-auto">
              Créer le compte
            </Button>
          </div>
        </form>
        {message ? (
          <div className="mt-3">
            <Alert tone="success">{message}</Alert>
          </div>
        ) : null}
      </Panel>

      <Panel className="mb-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-display text-xl">Groupe / classe</h2>
            <p className="mt-1 text-sm text-ink-muted">
              {apprentices.length} élève{apprentices.length !== 1 ? "s" : ""} ·{" "}
              <span className="text-[#2f6b45]">{activeCount} actif
              {activeCount !== 1 ? "s" : ""}</span>
              {" · "}
              <span className="text-[#8b3d3d]">{inactiveCount} inactif
              {inactiveCount !== 1 ? "s" : ""}</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant="secondary"
              onClick={() => activateWholeClass(true)}
              disabled={
                apprentices.length === 0 || activeCount === apprentices.length
              }
            >
              <UserCheck className="h-4 w-4" />
              Toute la classe ON
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => {
                if (
                  confirm(
                    "Désactiver tous les apprentis de la classe ? Ils ne pourront plus se connecter.",
                  )
                ) {
                  activateWholeClass(false);
                }
              }}
              disabled={
                apprentices.length === 0 ||
                inactiveCount === apprentices.length
              }
            >
              <UserX className="h-4 w-4" />
              Toute la classe OFF
            </Button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 rounded-[var(--radius-md)] border border-border bg-surface-muted/50 p-3">
          <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-ink">
            <input
              type="checkbox"
              className="h-4 w-4 accent-[var(--color-primary)]"
              checked={allSelected}
              onChange={toggleAll}
              disabled={apprentices.length === 0}
            />
            {allSelected ? "Tout désélectionner" : "Tout sélectionner"}
          </label>
          <span className="text-xs text-ink-subtle">
            {selected.length} sélectionné{selected.length !== 1 ? "s" : ""}
          </span>
          <div className="ml-auto flex flex-wrap gap-2">
            <Button
              size="sm"
              variant="primary"
              disabled={!someSelected}
              onClick={() => activateGroup(true)}
            >
              <UserCheck className="h-4 w-4" />
              Activer le groupe
            </Button>
            <Button
              size="sm"
              variant="danger"
              disabled={!someSelected}
              onClick={() => activateGroup(false)}
            >
              <UserX className="h-4 w-4" />
              Désactiver le groupe
            </Button>
          </div>
        </div>
      </Panel>

      <div className="space-y-3">
        {apprentices.length === 0 ? (
          <EmptyState
            title="Aucun apprenti"
            description="Créez un compte ci-dessus pour commencer."
          />
        ) : (
          apprentices.map((a) => {
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
                    <p className="font-medium text-ink">{a.displayName}</p>
                    <p className="truncate text-sm text-ink-muted">{a.email}</p>
                  </div>
                </label>
                <div className="flex items-center gap-2">
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
          })
        )}
      </div>
    </div>
  );
}
