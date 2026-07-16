"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
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
import { isStaffRole } from "@/lib/roles";
import { useAppStore } from "@/lib/store";
import type { DiplomaLevel, StudyYear } from "@/lib/types";
import { Plus } from "lucide-react";

export default function NouvelleClassePage() {
  const { currentUser, upsertClass } = useAppStore();
  const router = useRouter();

  const [name, setName] = useState("");
  const [year, setYear] = useState("2025-2026");
  const [level, setLevel] = useState<DiplomaLevel>("CFC");
  const [studyYear, setStudyYear] = useState<StudyYear>(1);

  if (!currentUser) return null;
  if (!isStaffRole(currentUser.role)) {
    return <EmptyState title="Accès réservé aux formateurs et admins" />;
  }

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
    router.push(`/formateur/classes/${id}`);
  }

  return (
    <div>
      <PageHeader
        title="Nouvelle classe"
        backHref="/formateur/classes"
        backLabel="Retour aux classes"
        description="Créez une classe AFP ou CFC pour y rattacher des élèves."
      />

      <Panel className="max-w-xl">
        <form className="space-y-3" onSubmit={createClass}>
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
              options={Array.from({ length: maxStudyYear(level) }, (_, i) => {
                const y = (i + 1) as StudyYear;
                return { value: String(y), label: STUDY_YEAR_LABELS[y] };
              })}
              value={String(studyYear)}
              onChange={(e) =>
                setStudyYear(Number(e.target.value) as StudyYear)
              }
            />
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            <Button type="submit">
              <Plus className="h-4 w-4" />
              Créer la classe
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
