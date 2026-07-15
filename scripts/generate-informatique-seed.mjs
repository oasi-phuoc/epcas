/**
 * Scanne public/assets/informatique/{1,3}/{Word|Excel|PowerPoint}/
 * et génère src/lib/informatique-exercises.generated.ts
 *
 * Convention :
 * - Documents : *_base*, *_textebase*, *_donnees*, images
 * - Corrections : *_correction*, *_resultat* (résultat attendu)
 *
 * Pas d'année 2 pour Informatique.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const ASSETS = path.join(ROOT, "public", "assets", "informatique");
const OUT = path.join(ROOT, "src", "lib", "informatique-exercises.generated.ts");

const YEARS = [1, 3];

const APP_DIRS = {
  Word: "word",
  Excel: "excel",
  PowerPoint: "powerpoint",
};

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp"]);
const VIDEO_EXT = new Set([".mp4", ".webm", ".mov", ".m4v"]);

function slugify(s) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64);
}

function isJunkName(name) {
  const n = name.toLowerCase();
  if (name.startsWith("~$") || name.startsWith("~")) return true;
  if (n.endsWith(".tmp") || n.endsWith(".txt")) return true;
  return false;
}

function isCopieFolder(name) {
  return /\bcopie\b/i.test(name);
}

function classifyFile(fileName) {
  const lower = fileName.toLowerCase();
  const ext = path.extname(lower);
  if (isJunkName(fileName)) return null;

  if (lower.includes("_correction")) {
    return VIDEO_EXT.has(ext) ? "correction-video" : "correction-doc";
  }
  if (lower.includes("_resultat")) {
    return "correction-doc";
  }
  if (
    lower.includes("_base") ||
    lower.includes("_textebase") ||
    lower.includes("_donnees")
  ) {
    return "document";
  }
  if (IMAGE_EXT.has(ext)) {
    return "document";
  }
  return null;
}

/**
 * Dossiers feuilles sous une app qui contiennent des fichiers classifiables.
 * themeParts = thèmes parents (sans le nom de l'exercice).
 */
function findExercises(appDir) {
  const out = [];

  function walk(dir, parts) {
    const ents = fs.readdirSync(dir, { withFileTypes: true });
    const subdirs = ents
      .filter((e) => e.isDirectory() && !isCopieFolder(e.name))
      .sort((a, b) => a.name.localeCompare(b.name, "fr"));
    const files = ents.filter((e) => e.isFile());
    const classified = files.filter((f) => classifyFile(f.name));

    if (classified.length > 0 && parts.length >= 1) {
      out.push({
        dir,
        title: path.basename(dir),
        themeParts: parts.slice(0, -1),
        files: classified.map((f) => f.name),
      });
      return;
    }

    for (const d of subdirs) {
      walk(path.join(dir, d.name), [...parts, d.name]);
    }
  }

  walk(appDir, []);
  return out;
}

function publicUrlFor(absFile) {
  const rel = path.relative(ASSETS, absFile).split(path.sep).join("/");
  return (
    "/assets/informatique/" +
    rel
      .split("/")
      .map(encodeURIComponent)
      .join("/")
  );
}

function buildExercise({ year, app, exerciseDir, order }) {
  const themePath = exerciseDir.themeParts.join(" › ");
  const title = exerciseDir.title;
  const id = `inf-y${year}-${app}-${slugify(themePath || "general")}-${slugify(title)}`;

  const documents = [];
  const corrections = [];

  const sortedFiles = [...exerciseDir.files].sort((a, b) =>
    a.localeCompare(b, "fr"),
  );

  for (const fileName of sortedFiles) {
    const kind = classifyFile(fileName);
    if (!kind) continue;
    const url = publicUrlFor(path.join(exerciseDir.dir, fileName));
    const asset = {
      id: "tmp",
      name: fileName,
      url,
      kind: kind === "correction-video" ? "video" : "document",
    };
    if (kind === "document") documents.push(asset);
    else corrections.push(asset);
  }

  documents.forEach((d, i) => {
    d.id = `${id}-doc-${i + 1}`;
  });
  corrections.forEach((c, i) => {
    c.id = `${id}-cor-${i + 1}`;
  });

  const docList = documents.map((d) => `- \`${d.name}\``).join("\n");
  const instructions = `## Consignes

1. Téléchargez les **documents à utiliser** ci-dessous.
2. Réalisez l'exercice en suivant le fichier de données / le texte de base.
3. Consultez la **correction** (vidéo ou fichier) lorsqu'elle est disponible.

${docList ? `### Fichiers fournis\n\n${docList}\n` : ""}`;

  return {
    id,
    app,
    year,
    title,
    description: themePath
      ? `Année ${year} · ${themePath}`
      : `Année ${year}`,
    instructions,
    order,
    published: true,
    documents,
    corrections,
  };
}

function main() {
  const exercises = [];

  for (const year of YEARS) {
    const yearDir = path.join(ASSETS, String(year));
    if (!fs.existsSync(yearDir)) {
      console.warn(`Skip missing year ${year}`);
      continue;
    }
    for (const [folderName, appId] of Object.entries(APP_DIRS)) {
      const appDir = path.join(yearDir, folderName);
      if (!fs.existsSync(appDir)) continue;
      const found = findExercises(appDir);
      let order = 0;
      for (const ex of found) {
        order += 1;
        exercises.push(
          buildExercise({
            year,
            app: appId,
            exerciseDir: ex,
            order,
          }),
        );
      }
      console.log(`Y${year} ${folderName}: ${found.length} exercices`);
    }
  }

  const header = `/* eslint-disable */
/**
 * Généré par scripts/generate-informatique-seed.mjs — ne pas éditer à la main.
 * Relancer : node scripts/generate-informatique-seed.mjs
 */
import type { InformatiqueExercise } from "./types";

export const INFORMATIQUE_CATALOG_VERSION = ${Date.now()};

export const GENERATED_INFORMATIQUE_EXERCISES: InformatiqueExercise[] = `;

  fs.writeFileSync(
    OUT,
    header + JSON.stringify(exercises, null, 2) + " as InformatiqueExercise[];\n",
    "utf8",
  );
  console.log(
    `Wrote ${exercises.length} exercises → ${path.relative(ROOT, OUT)}`,
  );
}

main();
