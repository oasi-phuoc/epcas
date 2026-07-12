"use client";

import { useMemo, useState } from "react";
import {
  Alert,
  Badge,
  Button,
  EmptyState,
  PageHeader,
  Panel,
  Select,
} from "@/components/ui";
import {
  DIPLOMA_LEVELS,
  DIPLOMA_LABELS,
  STUDY_YEAR_LABELS,
  getSequence,
  maxStudyYear,
  unassignedModuleIds,
} from "@/lib/levels";
import { useAppStore } from "@/lib/store";
import type { DiplomaLevel, StudyYear } from "@/lib/types";
import { ArrowDown, ArrowUp, Plus, RotateCcw, Trash2 } from "lucide-react";

export default function SequencesPage() {
  const {
    currentUser,
    state,
    setSequenceModuleIds,
    resetSequences,
  } = useAppStore();

  const [level, setLevel] = useState<DiplomaLevel>("CFC");
  const [studyYear, setStudyYear] = useState<StudyYear>(1);
  const [message, setMessage] = useState<string | null>(null);

  const maxYear = maxStudyYear(level);
  const effectiveYear =
    studyYear > maxYear ? (maxYear as StudyYear) : studyYear;

  const sequence = useMemo(
    () => getSequence(state.sequences, level, effectiveYear),
    [state.sequences, level, effectiveYear],
  );

  const moduleById = useMemo(
    () => new Map(state.modules.map((m) => [m.id, m] as const)),
    [state.modules],
  );

  const orderedModules = useMemo(
    () =>
      (sequence?.moduleIds ?? [])
        .map((id) => moduleById.get(id))
        .filter((m): m is NonNullable<typeof m> => Boolean(m)),
    [sequence, moduleById],
  );

  const availableIds = useMemo(
    () => unassignedModuleIds(state.sequences, state.modules, level),
    [state.sequences, state.modules, level],
  );

  const availableModules = useMemo(
    () =>
      availableIds
        .map((id) => moduleById.get(id))
        .filter((m): m is NonNullable<typeof m> => Boolean(m)),
    [availableIds, moduleById],
  );

  const yearOptions = useMemo(() => {
    const years: StudyYear[] = level === "AFP" ? [1, 2] : [1, 2, 3];
    return years.map((y) => ({
      value: String(y),
      label: STUDY_YEAR_LABELS[y],
    }));
  }, [level]);

  const yearCounts = useMemo(() => {
    const years: StudyYear[] = level === "AFP" ? [1, 2] : [1, 2, 3];
    return years.map((y) => {
      const seq = getSequence(state.sequences, level, y);
      return { year: y, count: seq?.moduleIds.length ?? 0 };
    });
  }, [state.sequences, level]);

  if (!currentUser) return null;
  if (currentUser.role !== "trainer") {
    return <EmptyState title="Accès réservé aux formateurs" />;
  }

  function commitIds(nextIds: string[], toast?: string) {
    setSequenceModuleIds(level, effectiveYear, nextIds);
    if (toast) {
      setMessage(toast);
      setTimeout(() => setMessage(null), 2500);
    }
  }

  function move(index: number, dir: -1 | 1) {
    const ids = [...(sequence?.moduleIds ?? [])];
    const target = index + dir;
    if (target < 0 || target >= ids.length) return;
    [ids[index], ids[target]] = [ids[target], ids[index]];
    commitIds(ids);
  }

  function removeAt(index: number) {
    const ids = [...(sequence?.moduleIds ?? [])];
    ids.splice(index, 1);
    commitIds(ids, "Module retiré de la séquence.");
  }

  function addModule(moduleId: string) {
    commitIds([...(sequence?.moduleIds ?? []), moduleId], "Module ajouté.");
  }

  function onLevelChange(next: DiplomaLevel) {
    setLevel(next);
    const max = maxStudyYear(next);
    if (studyYear > max) setStudyYear(max);
  }

  return (
    <div>
      <PageHeader
        title="Séquences d'apprentissage"
        description="Définissez l'ordre des modules par année (1ʳᵉ, 2ᵉ, 3ᵉ) et par niveau AFP / CFC."
      />

      <Panel className="mb-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <Select
            label="Niveau"
            options={DIPLOMA_LEVELS.map((l) => ({
              value: l,
              label: DIPLOMA_LABELS[l],
            }))}
            value={level}
            onChange={(e) => onLevelChange(e.target.value as DiplomaLevel)}
          />
          <Select
            label="Année d'apprentissage"
            options={yearOptions}
            value={String(effectiveYear)}
            onChange={(e) =>
              setStudyYear(Number(e.target.value) as StudyYear)
            }
          />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {yearCounts.map(({ year, count }) => (
            <button
              key={year}
              type="button"
              onClick={() => setStudyYear(year)}
              className="rounded-[var(--radius-md)] border border-border px-2 py-1 text-xs transition hover:border-primary"
            >
              <Badge tone={year === effectiveYear ? "primary" : "neutral"}>
                {STUDY_YEAR_LABELS[year]} · {count}
              </Badge>
            </button>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => {
              if (
                confirm(
                  `Réinitialiser les séquences ${DIPLOMA_LABELS[level]} aux valeurs par défaut ?`,
                )
              ) {
                resetSequences(level);
                setMessage(`Séquences ${level} réinitialisées.`);
              }
            }}
          >
            <RotateCcw className="h-4 w-4" />
            Reset {level}
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              if (
                confirm(
                  "Réinitialiser toutes les séquences AFP et CFC ?",
                )
              ) {
                resetSequences();
                setMessage("Toutes les séquences réinitialisées.");
              }
            }}
          >
            Reset tout
          </Button>
        </div>
        {message ? (
          <div className="mt-3">
            <Alert tone="success">{message}</Alert>
          </div>
        ) : null}
      </Panel>

      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <h2 className="font-display text-xl text-ink">
              Ordre — {DIPLOMA_LABELS[level]} · {STUDY_YEAR_LABELS[effectiveYear]}
            </h2>
            <Badge tone="accent">{orderedModules.length} modules</Badge>
          </div>
          <p className="mb-3 text-sm text-ink-muted">
            Cet ordre est celui vu par les apprentis de cette année / ce
            niveau.
          </p>
          {orderedModules.length === 0 ? (
            <EmptyState
              title="Aucun module dans cette année"
              description="Ajoutez des modules depuis la liste de droite."
            />
          ) : (
            <ul className="space-y-2">
              {orderedModules.map((mod, index) => (
                <li
                  key={mod.id}
                  className="flex flex-wrap items-center gap-2 rounded-[var(--radius-md)] border border-border bg-surface-muted/40 px-3 py-2"
                >
                  <span className="w-6 shrink-0 text-xs font-medium text-ink-subtle">
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-primary-strong">
                      Module {mod.code}
                    </p>
                    <p className="truncate text-sm font-medium text-ink">
                      {mod.title}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      size="sm"
                      variant="ghost"
                      disabled={index === 0}
                      onClick={() => move(index, -1)}
                      aria-label="Monter"
                    >
                      <ArrowUp className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      disabled={index === orderedModules.length - 1}
                      onClick={() => move(index, 1)}
                      aria-label="Descendre"
                    >
                      <ArrowDown className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeAt(index)}
                      aria-label="Retirer"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Panel>

        <Panel>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <h2 className="font-display text-xl text-ink">Disponibles</h2>
            <Badge tone="neutral">{availableModules.length}</Badge>
          </div>
          <p className="mb-3 text-sm text-ink-muted">
            Modules {level} non encore placés dans une année. Un module ne peut
            être que dans une seule année.
          </p>
          {availableModules.length === 0 ? (
            <EmptyState
              title="Tous les modules sont assignés"
              description="Retirez un module d'une année pour le réattribuer."
            />
          ) : (
            <ul className="max-h-[32rem] space-y-2 overflow-y-auto pr-1">
              {availableModules.map((mod) => (
                <li
                  key={mod.id}
                  className="flex items-center gap-2 rounded-[var(--radius-md)] border border-border px-3 py-2"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-primary-strong">
                      Module {mod.code}
                    </p>
                    <p className="truncate text-sm text-ink">{mod.title}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => addModule(mod.id)}
                  >
                    <Plus className="h-4 w-4" />
                    Ajouter
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </Panel>
      </div>
    </div>
  );
}
