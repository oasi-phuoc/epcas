"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Alert,
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
import { useAppStore } from "@/lib/store";
import type { DiplomaLevel, Role, StudyYear } from "@/lib/types";
import { Plus } from "lucide-react";

export default function NouveauComptePage() {
  const { currentUser, state, upsertUser, upsertClass } = useAppStore();
  const router = useRouter();

  const [stuName, setStuName] = useState("");
  const [stuEmail, setStuEmail] = useState("");
  const [stuPassword, setStuPassword] = useState("");
  const [stuRole, setStuRole] = useState<Role>("apprentice");
  const [stuLevel, setStuLevel] = useState<DiplomaLevel>("CFC");
  const [stuYear, setStuYear] = useState<StudyYear>(1);
  const [stuClassId, setStuClassId] = useState("");
  const [error, setError] = useState<string | null>(null);

  const classes = useMemo(
    () =>
      [...state.classes].sort((a, b) => {
        if (a.active !== b.active) return a.active ? -1 : 1;
        return a.name.localeCompare(b.name, "fr");
      }),
    [state.classes],
  );

  if (!currentUser) return null;
  if (!isStaffRole(currentUser.role)) {
    return <EmptyState title="Accès réservé aux formateurs et admins" />;
  }

  const classOptions = classes.map((c) => ({
    value: c.id,
    label: `${c.name}${c.active ? "" : " (désactivée)"}`,
  }));

  function createAccount(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!stuName.trim() || !stuEmail.trim()) return;
    if (stuRole === "admin" && currentUser!.role !== "admin") {
      setError("Seul un admin peut créer un compte admin.");
      return;
    }

    let classId =
      stuClassId || classes.find((c) => c.active)?.id || classes[0]?.id;
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
    if (!classId) {
      setError("Aucune classe disponible. Créez d’abord une classe.");
      return;
    }
    if (!stuPassword.trim()) {
      setError("Indiquez un mot de passe pour le compte.");
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

    if (stuRole === "apprentice") {
      router.push(`/formateur/classes/${classId}`);
    } else {
      router.push("/formateur/classes");
    }
  }

  return (
    <div>
      <PageHeader
        title="Nouveau compte"
        description="Créez un compte apprenti, formateur ou admin."
        actions={
          <Link href="/formateur/classes">
            <Button variant="ghost" size="sm">
              ← Classes
            </Button>
          </Link>
        }
      />

      <Panel className="max-w-xl">
        {error ? (
          <div className="mb-3">
            <Alert tone="danger">{error}</Alert>
          </div>
        ) : null}
        <form className="space-y-3" onSubmit={createAccount}>
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
            type="password"
            value={stuPassword}
            onChange={(e) => setStuPassword(e.target.value)}
            required
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
          <div className="flex flex-wrap gap-2 pt-1">
            <Button type="submit">
              <Plus className="h-4 w-4" />
              Créer le compte
            </Button>
            <Link href="/formateur/classes">
              <Button type="button" variant="secondary">
                Annuler
              </Button>
            </Link>
          </div>
        </form>
      </Panel>
    </div>
  );
}
