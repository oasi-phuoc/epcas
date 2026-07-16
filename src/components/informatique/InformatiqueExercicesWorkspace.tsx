"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  Alert,
  Button,
  EmptyState,
  PageHeader,
  Panel,
  TextArea,
  TextField,
} from "@/components/ui";
import { MarkdownLite } from "@/components/MarkdownLite";
import { MarkdownToolbar } from "@/components/MarkdownToolbar";
import {
  INFORMATIQUE_APPS,
  INFORMATIQUE_YEARS,
  appsAvailableForYear,
  informatiqueAppLabel,
  informatiqueYearLabel,
  newInformatiqueId,
  resolveInformatiqueYear,
} from "@/lib/informatique-exercises";
import { useAppStore } from "@/lib/store";
import { isStaffRole } from "@/lib/roles";
import {
  collapseImageBlocksForEditor,
  expandImageBlocksFromEditor,
} from "@/lib/markdown-assets";
import type {
  InformatiqueApp,
  InformatiqueAsset,
  InformatiqueExercise,
  InformatiqueYear,
} from "@/lib/types";
import {
  Download,
  Eye,
  FileText,
  Monitor,
  Pencil,
  Plus,
  Trash2,
  Video,
} from "lucide-react";
import { PdfViewer } from "@/components/informatique/PdfViewer";
import { BulkDocumentsDownloadButton } from "@/components/informatique/BulkDocumentsDownloadButton";
import { isResultatPdf } from "@/lib/informatique-exercises";

const STUDENT_INSTRUCTIONS = [
  "Téléchargez les documents à utiliser ci-dessous.",
  "Réalisez l'exercice en suivant le fichier de données / le texte de base.",
  "Consultez la correction (vidéo ou fichier) lorsqu'elle est disponible.",
];

const MAX_EMBED_BYTES = 1_500_000;

function isVideoAsset(asset: InformatiqueAsset): boolean {
  if (asset.kind === "video") return true;
  const lower = (asset.name || asset.url || "").toLowerCase();
  return /\.(mp4|webm|mov|m4v)(\?|$)/i.test(lower);
}

function StudentCorrectionAsset({ asset }: { asset: InformatiqueAsset }) {
  const [videoOpen, setVideoOpen] = useState(false);
  const asVideo = isVideoAsset(asset);
  const asPdf = isResultatPdf(asset);

  if (!asset.url) {
    return (
      <li className="rounded-[var(--radius-md)] border border-border bg-surface-muted/40 px-3 py-2.5">
        <span className="text-sm text-ink-muted">Pas encore disponible</span>
      </li>
    );
  }

  if (asPdf) {
    return (
      <li className="rounded-[var(--radius-md)] border border-border bg-surface-muted/40 p-3 sm:p-4">
        <PdfViewer url={asset.url} />
      </li>
    );
  }

  if (asVideo) {
    return (
      <li className="rounded-[var(--radius-md)] border border-border bg-surface-muted/40 p-3 sm:p-4">
        {!videoOpen ? (
          <Button
            type="button"
            size="sm"
            variant="secondary"
            onClick={() => setVideoOpen(true)}
          >
            <Eye className="h-4 w-4" />
            Visionner
          </Button>
        ) : (
          <div className="overflow-hidden rounded-[var(--radius-md)] border border-border bg-ink/5">
            <video
              className="max-h-[min(70vh,28rem)] w-full"
              controls
              controlsList="nodownload noplaybackrate"
              disablePictureInPicture
              preload="metadata"
              src={asset.url}
            >
              Votre navigateur ne prend pas en charge la vidéo.
            </video>
          </div>
        )}
      </li>
    );
  }

  return (
    <li className="rounded-[var(--radius-md)] border border-border bg-surface-muted/40 p-3 sm:p-4">
      <a href={asset.url} target="_blank" rel="noreferrer" className="inline-flex">
        <Button type="button" size="sm" variant="secondary">
          <Eye className="h-4 w-4" />
          Visionner
        </Button>
      </a>
    </li>
  );
}

async function fileToAsset(
  file: File,
  kind: "document" | "video",
): Promise<InformatiqueAsset> {
  const tooLarge = file.size > MAX_EMBED_BYTES;
  let url = "";
  if (!tooLarge) {
    url = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result ?? ""));
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  }
  return {
    id: newInformatiqueId(kind === "video" ? "vid" : "doc"),
    name: file.name,
    url,
    kind,
    mimeType: file.type || undefined,
  };
}

function AssetList({
  assets,
  emptyLabel,
  downloadLabel,
  editable,
  onRemove,
  onAddFile,
  onAddUrl,
  accept,
  /** Mode d'affichage par défaut si l'asset n'indique pas clairement vidéo/doc. */
  defaultMode,
  /** Vue apprenti : PDF résultat en visionneuse, pas de téléchargement. */
  studentMode = false,
}: {
  assets: InformatiqueAsset[];
  emptyLabel: string;
  downloadLabel: string;
  editable: boolean;
  onRemove?: (id: string) => void;
  onAddFile?: (file: File) => void;
  onAddUrl?: (name: string, url: string, kind: "document" | "video") => void;
  accept?: string;
  defaultMode: "document" | "video" | "mixed";
  studentMode?: boolean;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [urlName, setUrlName] = useState("");
  const [urlValue, setUrlValue] = useState("");

  return (
    <div className="space-y-3">
      {assets.length === 0 ? (
        <p className="rounded-[var(--radius-md)] border border-dashed border-border px-3 py-4 text-center text-sm text-ink-subtle">
          {emptyLabel}
        </p>
      ) : (
        <ul className="space-y-2">
          {assets.map((asset) => {
            if (studentMode && !editable && defaultMode === "mixed") {
              return <StudentCorrectionAsset key={asset.id} asset={asset} />;
            }

            const asVideo =
              defaultMode === "document" ? false : isVideoAsset(asset);
            const asResultatPdf =
              studentMode && !editable && isResultatPdf(asset) && asset.url;
            const allowDownload = !studentMode || !asResultatPdf;
            return (
              <li
                key={asset.id}
                className="space-y-2 rounded-[var(--radius-md)] border border-border bg-surface-muted/40 px-3 py-2.5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="flex min-w-0 items-center gap-2 text-sm text-ink">
                    {asVideo ? (
                      <Video className="h-4 w-4 shrink-0 text-primary-strong" />
                    ) : (
                      <FileText className="h-4 w-4 shrink-0 text-primary-strong" />
                    )}
                    <span className="min-w-0 truncate font-medium">
                      {asset.name}
                    </span>
                  </span>
                  <span className="flex flex-wrap gap-2">
                    {asVideo && asset.url ? (
                      <a
                        href={asset.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex"
                      >
                        <Button type="button" size="sm" variant="secondary">
                          <Eye className="h-4 w-4" />
                          Voir
                        </Button>
                      </a>
                    ) : null}
                    {!asVideo && asset.url && allowDownload ? (
                      <a
                        href={asset.url}
                        download={asset.name}
                        className="inline-flex"
                      >
                        <Button type="button" size="sm" variant="secondary">
                          <Download className="h-4 w-4" />
                          {downloadLabel}
                        </Button>
                      </a>
                    ) : null}
                    {asVideo && asset.url && allowDownload ? (
                      <a
                        href={asset.url}
                        download={asset.name}
                        className="inline-flex"
                      >
                        <Button type="button" size="sm" variant="ghost">
                          <Download className="h-4 w-4" />
                          Télécharger
                        </Button>
                      </a>
                    ) : null}
                    {!asset.url ? (
                      <span className="text-sm text-ink-muted">
                        Pas encore disponible
                      </span>
                    ) : null}
                    {editable && onRemove ? (
                      <Button
                        type="button"
                        size="sm"
                        variant="ghost"
                        onClick={() => onRemove(asset.id)}
                        title="Supprimer"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    ) : null}
                  </span>
                </div>
                {asVideo && asset.url ? (
                  <div className="overflow-hidden rounded-[var(--radius-md)] border border-border bg-ink/5">
                    <video
                      className="max-h-64 w-full"
                      controls
                      preload="metadata"
                      src={asset.url}
                    >
                      Votre navigateur ne prend pas en charge la vidéo.
                    </video>
                  </div>
                ) : null}
                {asResultatPdf ? (
                  <PdfViewer url={asset.url} title={asset.name} />
                ) : null}
              </li>
            );
          })}
        </ul>
      )}

      {editable ? (
        <div className="space-y-2 border-t border-border pt-3">
          <input
            ref={fileRef}
            type="file"
            accept={accept}
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file && onAddFile) onAddFile(file);
              e.target.value = "";
            }}
          />
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              size="sm"
              variant="secondary"
              onClick={() => fileRef.current?.click()}
            >
              <Plus className="h-4 w-4" />
              {defaultMode === "document"
                ? "Ajouter un document"
                : "Ajouter un fichier"}
            </Button>
          </div>
          {onAddUrl ? (
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end">
              <TextField
                label="Nom"
                value={urlName}
                onChange={(e) => setUrlName(e.target.value)}
                placeholder={
                  defaultMode === "document"
                    ? "fichier.docx"
                    : "Correction — titre"
                }
                className="sm:max-w-[12rem]"
              />
              <TextField
                label="URL (lien ou /chemin)"
                value={urlValue}
                onChange={(e) => setUrlValue(e.target.value)}
                placeholder="https://… ou /assets/…"
                className="min-w-0 flex-1"
              />
              <Button
                type="button"
                size="sm"
                variant="secondary"
                disabled={!urlName.trim()}
                onClick={() => {
                  const kind =
                    defaultMode === "document"
                      ? "document"
                      : /\.(mp4|webm|mov|m4v)(\?|$)/i.test(urlValue) ||
                          defaultMode === "video"
                        ? "video"
                        : "document";
                  onAddUrl(urlName.trim(), urlValue.trim(), kind);
                  setUrlName("");
                  setUrlValue("");
                }}
              >
                Ajouter le lien
              </Button>
            </div>
          ) : null}
          <p className="text-xs text-ink-subtle">
            Fichiers légers (&lt; 1,5 Mo) sont enregistrés localement. Pour les
            vidéos lourdes, préférez un lien URL vers{" "}
            <code className="text-[0.7rem]">/assets/…</code>.
          </p>
        </div>
      ) : null}
    </div>
  );
}

function ExercisePreview({
  exercise,
}: {
  exercise: InformatiqueExercise;
}) {
  return (
    <div className="rounded-[var(--radius-md)] border border-border bg-surface-muted/40 p-4 sm:p-5">
      <p className="mb-2 text-xs text-ink-subtle">
        {informatiqueYearLabel(exercise.year)} · {informatiqueAppLabel(exercise.app)}
      </p>
      <h2 className="mb-3 font-display text-2xl text-ink sm:text-3xl">
        {exercise.title || "Sans titre"}
      </h2>
      {exercise.description ? (
        <p className="mb-4 text-sm text-ink-muted">{exercise.description}</p>
      ) : null}
      <MarkdownLite text={exercise.instructions || "_Aucune consigne._"} />
    </div>
  );
}

function ExerciseEditorForm({
  exercise,
  onSave,
  onDelete,
}: {
  exercise: InformatiqueExercise;
  onSave: (next: InformatiqueExercise) => void;
  onDelete: () => void;
}) {
  const [draft, setDraft] = useState(exercise);
  const [saved, setSaved] = useState(false);
  const [mode, setMode] = useState<"edit" | "preview">("edit");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const instructionsDisplay = useMemo(
    () => collapseImageBlocksForEditor(draft.instructions),
    [draft.instructions],
  );

  function setInstructionsFromEditor(edited: string) {
    setDraft((d) => ({
      ...d,
      instructions: expandImageBlocksFromEditor(edited, d.instructions),
    }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSave(draft);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  async function addDocument(file: File) {
    const asset = await fileToAsset(file, "document");
    setDraft((d) => ({ ...d, documents: [...d.documents, asset] }));
  }

  async function addCorrection(file: File) {
    const isVid = /\.(mp4|webm|mov|m4v)$/i.test(file.name) ||
      file.type.startsWith("video/");
    const asset = await fileToAsset(file, isVid ? "video" : "document");
    setDraft((d) => ({ ...d, corrections: [...d.corrections, asset] }));
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <Button
          type="button"
          size="sm"
          variant={mode === "preview" ? "primary" : "secondary"}
          onClick={() => setMode("preview")}
        >
          <Eye className="h-4 w-4" />
          Preview
        </Button>
        <Button
          type="button"
          size="sm"
          variant={mode === "edit" ? "primary" : "secondary"}
          onClick={() => setMode("edit")}
        >
          <Pencil className="h-4 w-4" />
          Édition
        </Button>
        <label className="ml-auto flex items-center gap-2 text-sm text-ink">
          <input
            type="checkbox"
            checked={draft.published}
            onChange={(e) =>
              setDraft((d) => ({ ...d, published: e.target.checked }))
            }
          />
          Publié
        </label>
      </div>

      {mode === "edit" ? (
        <>
          <TextField
            label="Titre de l'exercice"
            value={draft.title}
            onChange={(e) =>
              setDraft((d) => ({ ...d, title: e.target.value }))
            }
            required
          />
          <TextField
            label="Description courte"
            value={draft.description}
            onChange={(e) =>
              setDraft((d) => ({ ...d, description: e.target.value }))
            }
          />
          <MarkdownToolbar
            textareaRef={textareaRef}
            value={draft.instructions}
            onChange={(next) =>
              setDraft((d) => ({ ...d, instructions: next }))
            }
          />
          <TextArea
            ref={textareaRef}
            label="Consignes (markdown)"
            className="min-h-56 text-sm leading-relaxed"
            value={instructionsDisplay}
            onChange={(e) => setInstructionsFromEditor(e.target.value)}
            required
          />
        </>
      ) : (
        <ExercisePreview exercise={draft} />
      )}

      <Panel className="bg-surface-muted/20">
        <h3 className="mb-1 font-display text-lg text-ink">
          Les documents à utiliser
        </h3>
        <p className="mb-3 text-sm text-ink-muted">
          Fichiers remis aux apprentis pour réaliser l&apos;exercice (
          <code className="text-xs">_base</code>,{" "}
          <code className="text-xs">_donnees</code>, images…).
        </p>
        <AssetList
          defaultMode="document"
          assets={draft.documents}
          emptyLabel="Aucun document pour le moment."
          downloadLabel="Télécharger"
          editable
          accept=".doc,.docx,.xls,.xlsx,.xlsm,.ppt,.pptx,.pdf,.zip,.txt,.jpg,.jpeg,.png,.gif,.webp"
          onRemove={(id) =>
            setDraft((d) => ({
              ...d,
              documents: d.documents.filter((a) => a.id !== id),
            }))
          }
          onAddFile={(file) => void addDocument(file)}
          onAddUrl={(name, url, kind) =>
            setDraft((d) => ({
              ...d,
              documents: [
                ...d.documents,
                {
                  id: newInformatiqueId("doc"),
                  name,
                  url,
                  kind,
                },
              ],
            }))
          }
        />
      </Panel>

      <Panel className="bg-surface-muted/20">
        <h3 className="mb-1 font-display text-lg text-ink">Les corrections</h3>
        <p className="mb-3 text-sm text-ink-muted">
          Vidéos ou documents de correction (
          <code className="text-xs">_correction</code>, résultat attendu…).
        </p>
        <AssetList
          defaultMode="mixed"
          assets={draft.corrections}
          emptyLabel="Aucune correction pour le moment."
          downloadLabel="Télécharger"
          editable
          accept="video/*,.mp4,.webm,.mov,.doc,.docx,.xls,.xlsx,.xlsm,.pdf,.png,.jpg"
          onRemove={(id) =>
            setDraft((d) => ({
              ...d,
              corrections: d.corrections.filter((a) => a.id !== id),
            }))
          }
          onAddFile={(file) => void addCorrection(file)}
          onAddUrl={(name, url, kind) =>
            setDraft((d) => ({
              ...d,
              corrections: [
                ...d.corrections,
                {
                  id: newInformatiqueId(kind === "video" ? "vid" : "doc"),
                  name,
                  url,
                  kind,
                },
              ],
            }))
          }
        />
      </Panel>

      <div className="flex flex-wrap gap-2">
        <Button type="submit">Enregistrer</Button>
        <Button
          type="button"
          variant="danger"
          onClick={() => {
            if (confirm("Supprimer cet exercice ?")) onDelete();
          }}
        >
          <Trash2 className="h-4 w-4" />
          Supprimer
        </Button>
      </div>
      {saved ? <Alert tone="success">Exercice enregistré.</Alert> : null}
    </form>
  );
}

function StudentExerciseDetail({
  exercise,
}: {
  exercise: InformatiqueExercise;
}) {
  return (
    <div className="space-y-4">
      <Panel>
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          {exercise.title || "Sans titre"}
        </h2>
        {exercise.description ? (
          <p className="mt-1 text-sm text-ink-muted">{exercise.description}</p>
        ) : null}

        <h3 className="mt-6 font-display text-lg text-ink">Consignes</h3>
        <ul className="mt-2 space-y-1.5 text-sm text-ink-muted">
          {STUDENT_INSTRUCTIONS.map((line) => (
            <li key={line} className="ml-5 list-disc text-justify leading-relaxed">
              {line}
            </li>
          ))}
        </ul>
      </Panel>

      <Panel>
        <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <h3 className="font-display text-lg text-ink">
            Documents à utiliser / à télécharger
          </h3>
          <BulkDocumentsDownloadButton
            exercises={[exercise]}
            archiveName={`Informatique-${exercise.title.replace(/\s+/g, "-")}`}
            label="Télécharger cet exercice (ZIP)"
          />
        </div>
        <AssetList
          defaultMode="document"
          assets={exercise.documents}
          emptyLabel="Aucun document pour cet exercice."
          downloadLabel="Télécharger"
          editable={false}
          studentMode
        />
      </Panel>

      <Panel>
        <h3 className="mb-1 font-display text-lg text-ink">Corrections</h3>
        <p className="mb-3 text-sm text-ink-muted">
          Vidéos à visionner ou résultat attendu à consulter directement.
        </p>
        <AssetList
          defaultMode="mixed"
          assets={exercise.corrections}
          emptyLabel="Aucune correction disponible pour le moment."
          downloadLabel="Télécharger"
          editable={false}
          studentMode
        />
      </Panel>
    </div>
  );
}

export function InformatiqueExercicesWorkspace({
  mode,
}: {
  mode: "edit" | "view";
}) {
  const {
    currentUser,
    userStudyYear,
    state,
    upsertInformatiqueExercise,
    deleteInformatiqueExercise,
  } = useAppStore();
  const [selectedYear, setSelectedYear] = useState<InformatiqueYear>(() =>
    resolveInformatiqueYear(userStudyYear),
  );
  const [selectedApp, setSelectedApp] = useState<InformatiqueApp>("word");
  const [selectedId, setSelectedId] = useState<string>("");
  const [exerciseQuery, setExerciseQuery] = useState("");

  const isEdit = mode === "edit";

  useEffect(() => {
    if (!isEdit) {
      setSelectedYear(resolveInformatiqueYear(userStudyYear));
    }
  }, [userStudyYear, isEdit]);

  const availableApps = useMemo(
    () =>
      appsAvailableForYear(state.informatiqueExercises ?? [], selectedYear),
    [state.informatiqueExercises, selectedYear],
  );

  useEffect(() => {
    if (availableApps.length === 0) return;
    if (!availableApps.includes(selectedApp)) {
      setSelectedApp(availableApps[0]);
      setSelectedId("");
    }
  }, [availableApps, selectedApp]);

  const exercises = useMemo(() => {
    const list = state.informatiqueExercises ?? [];
    return list
      .filter((e) => e.year === selectedYear)
      .filter((e) => e.app === selectedApp)
      .filter((e) => (isEdit ? true : e.published))
      .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title, "fr"));
  }, [state.informatiqueExercises, selectedYear, selectedApp, isEdit]);

  const filtered = useMemo(() => {
    const q = exerciseQuery.trim().toLowerCase();
    if (!q) return exercises;
    return exercises.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q),
    );
  }, [exercises, exerciseQuery]);

  const effectiveId = useMemo(() => {
    if (filtered.some((e) => e.id === selectedId)) return selectedId;
    return filtered[0]?.id ?? "";
  }, [filtered, selectedId]);

  const selected = filtered.find((e) => e.id === effectiveId);

  const studentYear = resolveInformatiqueYear(userStudyYear);
  const yearForBulk = isEdit ? selectedYear : studentYear;

  const bulkDownloadExercises = useMemo(() => {
    const list = state.informatiqueExercises ?? [];
    return list
      .filter((e) => e.year === yearForBulk)
      .filter((e) => (isEdit ? true : e.published))
      .sort(
        (a, b) =>
          a.app.localeCompare(b.app) ||
          a.order - b.order ||
          a.title.localeCompare(b.title, "fr"),
      );
  }, [state.informatiqueExercises, yearForBulk, isEdit]);

  if (!currentUser) return null;
  if (isEdit && !isStaffRole(currentUser.role)) {
    return <EmptyState title="Accès réservé aux formateurs et admins" />;
  }

  const hubHref = isEdit ? "/formateur/exercices" : "/exercices";

  const appsToShow = INFORMATIQUE_APPS.filter(
    (app) => isEdit || availableApps.includes(app.id),
  );

  return (
    <div>
      <PageHeader
        title="Informatique"
        backHref={hubHref}
        backLabel={isEdit ? "Retour aux exercices" : "Retour aux exercices"}
        description={
          isEdit
            ? "Gérez les exercices Word et Excel (1re et 3e année) — documents et corrections."
            : `Exercices ${informatiqueAppLabel(selectedApp)} — ${informatiqueYearLabel(studentYear)}.`
        }
      />

      {isEdit ? (
        <nav className="mb-4 flex flex-wrap gap-3 text-sm">
          <Link href="/formateur/exercices/situation" className="text-ink-muted hover:text-ink">
            Mise en situation
          </Link>
          <Link href="/formateur/exercices/maths" className="text-ink-muted hover:text-ink">
            Mathématiques
          </Link>
          <Link href="/formateur/exercices/verification" className="text-ink-muted hover:text-ink">
            Vérification des acquis
          </Link>
          <span className="font-medium text-primary-strong">Informatique</span>
        </nav>
      ) : null}

      <Panel className="mb-4">
        {isEdit ? (
          <>
            <p className="mb-2 text-sm font-medium text-ink">Année</p>
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Choisir une année"
            >
              {INFORMATIQUE_YEARS.map((y) => (
                <Button
                  key={y.id}
                  type="button"
                  size="sm"
                  variant={selectedYear === y.id ? "primary" : "secondary"}
                  onClick={() => {
                    setSelectedYear(y.id);
                    setSelectedId("");
                    setExerciseQuery("");
                  }}
                >
                  {y.label}
                </Button>
              ))}
            </div>
            <p className="mt-2 text-xs text-ink-subtle">
              Pas de cours Informatique en 2e année — seuls 1re et 3e sont proposés.
            </p>
          </>
        ) : (
          <p className="text-sm text-ink-muted">
            Parcours <strong className="text-ink">{informatiqueYearLabel(studentYear)}</strong> — seuls les exercices de votre année sont affichés.
          </p>
        )}

        <p className="mb-2 mt-4 text-sm font-medium text-ink">Application</p>
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Choisir une application"
        >
          {appsToShow.map((app) => {
            const disabled = !availableApps.includes(app.id) && !isEdit;
            return (
              <Button
                key={app.id}
                type="button"
                size="sm"
                variant={selectedApp === app.id ? "primary" : "secondary"}
                disabled={disabled}
                onClick={() => {
                  setSelectedApp(app.id);
                  setSelectedId("");
                  setExerciseQuery("");
                }}
              >
                <Monitor className="h-4 w-4" />
                {app.label}
              </Button>
            );
          })}
        </div>
        <p className="mt-2 text-xs text-ink-subtle">
          {INFORMATIQUE_APPS.find((a) => a.id === selectedApp)?.description}
          {availableApps.length === 0
            ? " — Aucun exercice pour cette année / application."
            : !availableApps.includes("powerpoint")
              ? " — PowerPoint non proposé (pas de ressources)."
              : null}
        </p>

        <div className="mt-4 rounded-[var(--radius-md)] border border-border bg-surface-muted/30 p-3 sm:p-4">
          <p className="mb-2 text-sm font-medium text-ink">
            Téléchargement groupé
          </p>
          <BulkDocumentsDownloadButton
            exercises={bulkDownloadExercises}
            archiveName={`Informatique-${informatiqueYearLabel(yearForBulk).replace(/\s+/g, "-")}-documents`}
            label="Télécharger tous les documents (ZIP)"
            variant="primary"
          />
        </div>

        <div className="mt-4">
          <TextField
            label="Rechercher un exercice"
            value={exerciseQuery}
            onChange={(e) => setExerciseQuery(e.target.value)}
            placeholder="Ex. mise en forme, styles…"
          />
        </div>

        <div className="mt-3">
          <p className="mb-2 text-sm font-medium text-ink">
            Choisir un exercice ({filtered.length})
          </p>
          {filtered.length === 0 ? (
            <p className="rounded-[var(--radius-md)] border border-dashed border-border px-3 py-4 text-center text-sm text-ink-subtle">
              {exerciseQuery.trim()
                ? `Aucun exercice pour « ${exerciseQuery} »`
                : isEdit
                  ? "Aucun exercice dans cette application — créez-en un ci-dessous."
                  : "Aucun exercice publié pour cette année / application."}
            </p>
          ) : (
            <ul
              className="max-h-56 touch-pan-y space-y-1.5 overflow-y-auto overscroll-contain rounded-[var(--radius-md)] border border-border bg-surface-muted/40 p-2 sm:max-h-72"
              role="listbox"
              aria-label="Exercices"
            >
              {filtered.map((ex) => {
                const selectedRow = ex.id === effectiveId;
                return (
                  <li key={ex.id}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={selectedRow}
                      onClick={() => {
                        setSelectedId(ex.id);
                        setExerciseQuery("");
                      }}
                      className={`flex min-h-12 w-full items-start gap-2 rounded-[var(--radius-md)] border px-3 py-2.5 text-left transition active:scale-[0.99] ${
                        selectedRow
                          ? "border-primary bg-primary-soft text-ink shadow-[var(--shadow-sm)]"
                          : "border-transparent bg-surface text-ink hover:border-border hover:bg-surface"
                      }`}
                    >
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-medium leading-snug">
                          {ex.title}
                        </span>
                        {ex.description ? (
                          <span className="mt-0.5 block text-xs text-ink-subtle">
                            {ex.description}
                          </span>
                        ) : null}
                      </span>
                      {isEdit && !ex.published ? (
                        <span className="shrink-0 text-xs text-ink-muted">
                          Brouillon
                        </span>
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {isEdit ? (
          <div className="mt-3">
            <Button
              type="button"
              size="sm"
              variant="secondary"
              onClick={() => {
                const id = upsertInformatiqueExercise({
                  app: selectedApp,
                  year: selectedYear,
                  title: `Nouvel exercice ${informatiqueAppLabel(selectedApp)}`,
                  description: `Année ${selectedYear}`,
                  instructions: `## Consignes\n\nDécrivez ici l'exercice.\n`,
                  published: false,
                  documents: [],
                  corrections: [],
                });
                setSelectedId(id);
              }}
            >
              <Plus className="h-4 w-4" />
              Nouvel exercice {informatiqueAppLabel(selectedApp)} (
              {informatiqueYearLabel(selectedYear)})
            </Button>
          </div>
        ) : null}
      </Panel>

      {!selected ? (
        <EmptyState
          title="Aucun exercice sélectionné"
          description={
            isEdit
              ? "Créez un exercice ou choisissez-en un dans la liste."
              : "Choisissez une application puis un exercice."
          }
        />
      ) : isEdit ? (
        <Panel>
          <ExerciseEditorForm
            key={selected.id}
            exercise={selected}
            onSave={(next) => upsertInformatiqueExercise(next)}
            onDelete={() => {
              deleteInformatiqueExercise(selected.id);
              setSelectedId("");
            }}
          />
        </Panel>
      ) : (
        <StudentExerciseDetail key={selected.id} exercise={selected} />
      )}
    </div>
  );
}
