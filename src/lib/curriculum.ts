import type { Block, Lesson, Module } from "./types";

/** Arborescence EnterSite CFC — EPCA Sion (OneNote Prof 2025-26) */

export const curriculumBlocks: Block[] = [
  { id: "block-100", code: "100", title: "Foundation", order: 100 },
  { id: "block-200", code: "200", title: "Customer Service", order: 200 },
  { id: "block-300", code: "300", title: "Procurement Management", order: 300 },
  { id: "block-400", code: "400", title: "Logistics", order: 400 },
  { id: "block-500", code: "500", title: "Production", order: 500 },
  { id: "block-600", code: "600", title: "Support and Distribution", order: 600 },
  { id: "block-700", code: "700", title: "FICO", order: 700 },
  { id: "block-800", code: "800", title: "ICT", order: 800 },
  { id: "block-900", code: "900", title: "Integrate", order: 900 },
];

type ModuleSeed = {
  code: string;
  title: string;
  blockId: string;
};

const moduleSeeds: ModuleSeed[] = [
  // 100 Foundation
  { code: "100", title: "Introduction aux modules", blockId: "block-100" },
  { code: "101", title: "Histoire de la logistique", blockId: "block-100" },
  { code: "102", title: "Structure de la logistique", blockId: "block-100" },
  { code: "103", title: "Tâches et objectifs", blockId: "block-100" },
  { code: "104", title: "Flux de marchandises", blockId: "block-100" },
  { code: "105", title: "Marchandises", blockId: "block-100" },
  { code: "106", title: "Élimination des déchets CH", blockId: "block-100" },
  {
    code: "107",
    title: "Élimination des déchets, continuum",
    blockId: "block-100",
  },
  {
    code: "108",
    title: "Élimination des déchets globale",
    blockId: "block-100",
  },
  {
    code: "109",
    title: "Protection des données et sécurité de l'information",
    blockId: "block-100",
  },
  {
    code: "110",
    title: "Définition de la gestion d'entrepôt",
    blockId: "block-100",
  },

  // 200 Customer Service
  { code: "201", title: "Le client", blockId: "block-200" },
  { code: "202", title: "Mon apparence", blockId: "block-200" },
  { code: "203", title: "La gestion de soi", blockId: "block-200" },
  { code: "204", title: "Le marché", blockId: "block-200" },
  { code: "205", title: "Le marketing", blockId: "block-200" },
  { code: "206", title: "La communication", blockId: "block-200" },
  { code: "207", title: "Pre-Sale-Service", blockId: "block-200" },
  { code: "208", title: "At-Sale-Service", blockId: "block-200" },
  { code: "209", title: "Le service après-vente", blockId: "block-200" },

  // 300 Procurement
  {
    code: "301",
    title: "La logistique d'approvisionnement",
    blockId: "block-300",
  },
  { code: "302", title: "L'achat de marchandises", blockId: "block-300" },
  {
    code: "303",
    title: "La réception des marchandises",
    blockId: "block-300",
  },
  {
    code: "304",
    title: "L'identification de la livraison",
    blockId: "block-300",
  },
  {
    code: "305",
    title: "Déchargement des marchandises",
    blockId: "block-300",
  },
  {
    code: "306",
    title: "Contrôle des supports de charge",
    blockId: "block-300",
  },
  {
    code: "307",
    title: "L'identification globale et le marquage",
    blockId: "block-300",
  },
  { code: "308", title: "Le contrôle détaillé", blockId: "block-300" },
  { code: "309", title: "Le contrôle de la qualité", blockId: "block-300" },
  {
    code: "310",
    title: "La préparation à l'entreposage",
    blockId: "block-300",
  },
  {
    code: "311",
    title: "Concepts d'approvisionnement",
    blockId: "block-300",
  },
  { code: "312", title: "Données de stockage", blockId: "block-300" },

  // 400 Logistics
  { code: "401", title: "Les rôles du stockage", blockId: "block-400" },
  { code: "402", title: "Les genres de stockage", blockId: "block-400" },
  { code: "403", title: "Les formes de stockage", blockId: "block-400" },
  { code: "404", title: "Les exigences techniques", blockId: "block-400" },
  { code: "405", title: "Dangers dans l'entrepôt", blockId: "block-400" },
  { code: "406", title: "Les principes de stockage", blockId: "block-400" },
  { code: "407", title: "Les systèmes de convoyage", blockId: "block-400" },
  { code: "408", title: "L'organisation de l'entrepôt", blockId: "block-400" },
  { code: "409", title: "Les engins de manutention", blockId: "block-400" },
  {
    code: "410",
    title: "Les dispositifs de convoyage",
    blockId: "block-400",
  },

  // 500 Production
  { code: "501", title: "La production", blockId: "block-500" },
  { code: "502", title: "La logistique de production", blockId: "block-500" },
  {
    code: "503",
    title: "L'organisation de la production",
    blockId: "block-500",
  },
  { code: "504", title: "Le flux de marchandises", blockId: "block-500" },
  {
    code: "505",
    title: "La planification et le contrôle",
    blockId: "block-500",
  },
  {
    code: "506",
    title: "L'assurance qualité dans la production",
    blockId: "block-500",
  },

  // 600 Support and Distribution
  {
    code: "601",
    title: "La préparation de commandes",
    blockId: "block-600",
  },
  { code: "602", title: "Les emballages", blockId: "block-600" },
  { code: "603", title: "L'arrimage des marchandises", blockId: "block-600" },
  {
    code: "604",
    title: "Les systèmes de distribution",
    blockId: "block-600",
  },
  { code: "605", title: "Service d'envoi postal", blockId: "block-600" },
  { code: "606", title: "Le transport routier", blockId: "block-600" },
  { code: "607", title: "Le transport ferroviaire", blockId: "block-600" },
  { code: "608", title: "Le transport aérien", blockId: "block-600" },
  { code: "609", title: "Navigation", blockId: "block-600" },
  { code: "610", title: "Le transport combiné", blockId: "block-600" },
  {
    code: "611",
    title: "La préparation de commandes (approfondissement)",
    blockId: "block-600",
  },
  {
    code: "612",
    title: "La planification des transports",
    blockId: "block-600",
  },
  {
    code: "613",
    title: "CPD — Qualité de service dans la distribution",
    blockId: "block-600",
  },
  {
    code: "614",
    title: "CPD — Possibilités de dépôt",
    blockId: "block-600",
  },
  {
    code: "615",
    title: "CPD — Préparer les envois postaux",
    blockId: "block-600",
  },
  {
    code: "616",
    title: "CPD — Processus dans les centres de distribution",
    blockId: "block-600",
  },

  // 700 FICO
  { code: "701", title: "L'inventaire", blockId: "block-700" },
  { code: "702", title: "Les coûts de stockage", blockId: "block-700" },
  { code: "703", title: "Les coûts du personnel", blockId: "block-700" },
  {
    code: "704",
    title: "Stockage — Les indicateurs logistiques",
    blockId: "block-700",
  },
  {
    code: "705",
    title: "La rentabilité de l'entrepôt",
    blockId: "block-700",
  },

  // 800 ICT
  {
    code: "801",
    title: "L'identification des marchandises",
    blockId: "block-800",
  },
  { code: "802", title: "Le transport (ICT)", blockId: "block-800" },
  { code: "803", title: "Logiciel d'exploitation", blockId: "block-800" },
  { code: "804", title: "Fondation Microsoft 365", blockId: "block-800" },
  { code: "805", title: "Word Microsoft 365", blockId: "block-800" },
  { code: "806", title: "Excel Microsoft 365", blockId: "block-800" },
  { code: "807", title: "PowerPoint Microsoft 365", blockId: "block-800" },
  { code: "808", title: "OneNote Microsoft 365", blockId: "block-800" },
  { code: "809", title: "Poste de contrôle", blockId: "block-800" },

  // 900 Integrate
  {
    code: "901",
    title: "Planifier et évaluer les ordres",
    blockId: "block-900",
  },
  { code: "902", title: "Les études de cas", blockId: "block-900" },
];

/** Pages types OneNote → leçons EPCAS */
export const lessonPageTemplates: { slug: string; title: string }[] = [
  { slug: "objectifs", title: "Objectifs" },
  { slug: "apercu", title: "Aperçu" },
  { slug: "theorie", title: "Connaissance théorique" },
  { slug: "glossaire", title: "Glossaire" },
  { slug: "situation", title: "Mise en situation" },
  { slug: "maths", title: "Mathématiques" },
  { slug: "verification", title: "Vérification des acquis" },
];

const PLACEHOLDER_FULL = `## Contenu à importer

Cette page est prête dans EPCAS Logistique.  
Le texte sera intégré depuis le OneNote **EnterSite_CFC** (ASFL / SVBL).

En attendant, le formateur peut déjà éditer cette leçon.`;

const PLACEHOLDER_SUMMARY = `## À retenir

- Contenu résumé à compléter après import OneNote.`;

/** Contenu démo déjà rempli pour le module 101 — connaissance théorique */
const DEMO_101_THEORIE_FULL = `## 1. Histoire de la logistique

### 1.1 Activités logistiques

#### 1.1.1 La logistique en temps de guerre

La logistique n'est pas née dans les entrepôts modernes : elle accompagne depuis longtemps l'organisation des armées et des sociétés.

**Chasser - Transformer - Consommer**

Avec le temps, ces activités se structurent en chaîne économique :

**Approvisionnement - Production - Distribution**

Des figures historiques comme **Napoléon Bonaparte** ont illustré l'importance cruciale du ravitaillement et du transport pour réussir une campagne — le même principe vaut aujourd'hui pour une entreprise : sans flux maîtrisés, pas de service client fiable.

## À retenir pour le métier

- La logistique relie **approvisionnement**, **production** et **distribution**.
- Chaque étape doit être planifiée, tracée et contrôlée.
- Les fondamentaux historiques aident à comprendre pourquoi les flux actuels sont organisés ainsi.`;

const DEMO_101_THEORIE_SUMMARY = `## À retenir

- Origines : organisation des flux (armée → économie)
- Chaîne : **Approvisionnement → Production → Distribution**
- Équivalent ancestral : **Chasser → Transformer → Consommer**
- Sans flux maîtrisés, pas de service fiable`;

export function buildCurriculumModules(): Module[] {
  return moduleSeeds.map((m, index) => ({
    id: `mod-${m.code}`,
    blockId: m.blockId,
    code: m.code,
    title: m.title,
    order: index + 1,
    published: true,
  }));
}

export function buildCurriculumLessons(): Lesson[] {
  const lessons: Lesson[] = [];

  for (const m of moduleSeeds) {
    lessonPageTemplates.forEach((page, pageIndex) => {
      const id = `lesson-${m.code}-${page.slug}`;
      const isDemoTheorie = m.code === "101" && page.slug === "theorie";

      lessons.push({
        id,
        moduleId: `mod-${m.code}`,
        title: page.title,
        order: pageIndex + 1,
        published: true,
        contentFull: isDemoTheorie ? DEMO_101_THEORIE_FULL : PLACEHOLDER_FULL,
        contentSummary: isDemoTheorie
          ? DEMO_101_THEORIE_SUMMARY
          : PLACEHOLDER_SUMMARY,
      });
    });
  }

  return lessons;
}
