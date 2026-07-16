import { defaultLevelsForModule } from "./levels";
import type { Block, Lesson, LessonPageSlug, Module } from "./types";

/** Arborescence EnterSite — EPCA Sion (OneNote Prof 2025-26), répartie AFP / CFC */

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
  { code: "202", title: "L'attitude personnelle / apparence", blockId: "block-200" },
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
    title: "Contrôle sommaire et traitement des dommages",
    blockId: "block-300",
  },
  {
    code: "308",
    title: "Les contrôles de quantités",
    blockId: "block-300",
  },
  { code: "309", title: "Le contrôle de la qualité", blockId: "block-300" },
  {
    code: "310",
    title: "La préparation à la mise en stock",
    blockId: "block-300",
  },
  {
    code: "311",
    title: "Les concepts de l'approvisionnement",
    blockId: "block-300",
  },
  { code: "312", title: "Données de stockage", blockId: "block-300" },

  // 400 Logistics
  { code: "401", title: "Le rôle du stockage", blockId: "block-400" },
  { code: "402", title: "Les genres de stockage", blockId: "block-400" },
  { code: "403", title: "Les formes de stockage", blockId: "block-400" },
  { code: "404", title: "Les prescriptions de stockage", blockId: "block-400" },
  { code: "405", title: "Dangers dans l'entrepôt", blockId: "block-400" },
  { code: "406", title: "Les principes de stockage", blockId: "block-400" },
  { code: "407", title: "Les moyens de transport", blockId: "block-400" },
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
  { code: "504", title: "Le flux de matériel", blockId: "block-500" },
  {
    code: "505",
    title: "Planification et contrôle de la production (PCP)",
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
  { code: "605", title: "Mode d'envoi postal", blockId: "block-600" },
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
    title: "Planifier et évaluer les projets logistiques",
    blockId: "block-900",
  },
  { code: "902", title: "Les études de cas", blockId: "block-900" },
];

/** Pages types OneNote → leçons EPCAS */
export const lessonPageTemplates: { slug: LessonPageSlug; title: string }[] = [
  { slug: "objectifs", title: "Objectifs" },
  { slug: "apercu", title: "Aperçu" },
  { slug: "theorie", title: "Connaissance théorique" },
  { slug: "glossaire", title: "Glossaire" },
  { slug: "situation", title: "Mise en situation" },
  { slug: "maths", title: "Mathématiques" },
  { slug: "verification", title: "Vérification des acquis" },
  { slug: "informatique", title: "Informatique" },
];

const PLACEHOLDER_FULL = `## Contenu à importer

Cette page est prête dans EPCAS Logistique.  
Le texte sera intégré depuis le OneNote **EnterSite_CFC** (ASFL / SVBL).

En attendant, le formateur peut déjà éditer cette leçon.`;

const PLACEHOLDER_SUMMARY = `## À retenir

- Contenu résumé à compléter après import OneNote.`;

/** Contenu Module 101 — Connaissance théorique (EnterSite / ASFL SVBL) */
const DEMO_101_THEORIE_FULL = `## 1. Histoire de la logistique

### 1.1 Activités logistiques

La logistique d'aujourd'hui est étroitement liée aux activités logistiques d'autrefois. L'acquisition de différents matériaux primaires, leur mise à disposition au bon moment et bon endroit, sans qu'ils ne perdent de leur valeur ainsi que leur consommation sont de simples étapes de processus de logistique qui ont évolué au fil de l'histoire.

Il y a de nombreuses années, le processus logistique aurait pu être représenté comme suit :

**Chasser - Transformer - Consommer**

La logistique de nos jours dessine le processus simplifié de manière suivante :

**Approvisionnement - Production - Distribution**

#### 1.1.1 La logistique en temps de guerre

Si l'on reconnaît les activités simples et originelles de la logistique, on comprend que la logistique a toujours eu une grande importance pour toutes les civilisations. Dans l'histoire de la logistique, outre les activités des hommes dès l'âge de pierre, essentielles à leur survie, les activités logistiques militaires sont également très pertinentes. L'histoire de la logistique a été fortement marquée par les campagnes d'expansion de **Napoléon Bonaparte** (1769-1821).

Autrefois, lorsqu'un chef d'armée ne parvenait pas à trouver à temps de la nourriture pour les soldats et du fourrage pour les animaux, les campagnes militaires n'avaient guère de succès. C'est pourquoi des troupeaux de bétail étaient transportés pour servir de réserves de viande vivante, ou les soldats entreprenaient des raids pour s'approvisionner.

Des commandants ingénieux ont tenté de réduire l'appétit de leurs soldats en leur imposant une consommation obligatoire de tabac. En effet, dès que les soldats fumaient ou mâchaient du tabac, ils mangeaient moins. Les commandants pouvaient ainsi économiser des quantités considérables de nourriture, ce qui facilitait le ravitaillement et donc la logistique.

Napoléon Bonaparte a fait de la logistique militaire une véritable science. Il ne s'agissait pas seulement de déplacer et nourrir les troupes, mais aussi d'acheminer de grandes quantités de matériel de guerre et de munitions. Cette logistique sophistiquée a largement contribué à la force de frappe de l'armée napoléonienne.

#### 1.1.2 La logistique et la construction des pyramides

Dans la vie civile aussi, des défis logistiques sont apparus, notamment là où de grands ouvrages ont été construits. La logistique et les défis qu'elle implique ont toujours été un sujet de préoccupation. L'humanité a toutefois réussi à plusieurs reprises à accomplir des tâches logistiques incroyables avec des moyens modestes. L'un des défis logistiques les plus importants a été relevé lors de la construction des pyramides.

Les blocs de granit utilisés pour la construction ne pesaient pas seulement plus de **50 tonnes**, ils étaient généralement extraits de carrières situées à **800 kilomètres** de là. À l'époque, il n'était pas rare qu'un port soit spécialement aménagé pour ce type de construction.

La construction des pyramides est si impressionnante aujourd'hui, qu'il n'y a longtemps eu aucune explication sur la manière dont elle a pu être réalisée. Ce n'est qu'au cours des dernières années que les archéologues ont découvert quelques indices qui ont permis de découvrir la technique de construction. On suppose que les pyramides ont été construites à l'aide d'immenses rampes. Sur ces rampes, les grandes et lourdes pierres de granit étaient poussées ou tirées de plus en plus haut, jusqu'au sommet de la pyramide. La construction des pyramides est une prouesse logistique de l'époque qui suscite encore aujourd'hui l'étonnement.

### 1.2 Produits commerciaux et circuits commerciaux

Autrefois, de nombreuses routes commerciales traversaient des déserts. Après avoir réussi à domestiquer les chameaux, ces animaux habitués au désert sont devenus un moyen de transport important. Dans l'histoire, les deux routes commerciales suivantes ont joué un rôle important.

#### 1.2.1 La Route de la Soie

L'ancienne route de la soie désigne un réseau d'anciennes voies commerciales entre la **Chine**, l'**Asie centrale** et la **Méditerranée**. Cette route longue et exigeante trouve son origine dans la capitale de l'époque, **Luoyang**. À travers les déserts et les montagnes, la route menait déjà il y a plus de **2000 ans** vers l'Asie centrale jusqu'en Europe.

Dans le flux de marchandises allant d'est en ouest, la **soie** était le produit commercial le plus important. Les autres marchandises échangées sont le thé, le sel, les épices, le sucre et la porcelaine.

#### 1.2.2 La route de l'ambre

Très tôt, les gens ont commencé à ramasser de l'ambre sur les plages. L'ambre brute et les bijoux en ambre sont ainsi devenus des biens commerciaux et des objets d'échange. Cela a conduit à donner son nom à la liaison nord-sud la plus importante d'Europe jusqu'à aujourd'hui : la **route de l'ambre**.

L'ambre est une résine fossile de couleur jaune doré. Autrefois, on l'appelait « l'or de la mer » ou « les larmes des dieux ».

La route de l'ambre menait de la **mer Baltique** aux ports de la **Méditerranée** et relie encore aujourd'hui les cultures du nord, du centre et du sud de l'Europe.

### 1.3 Les grandes étapes de la logistique

La logistique est marquée par différentes étapes qui ont conduit à un changement rapide. En voici quelques-unes :

- **1804** — La locomotive se met en marche
- **1875** — Le premier moteur à essence
- **1896** — Le premier camion transporte des marchandises
- **1907** — La naissance des services de colis
- **1944** — Les premières palettes en bois et chariots élévateurs arrivent en Europe avec le débarquement de Normandie
- **1948** — Ouverture de l'aéroport de Kloten (CH)
- **1949** — Invention du code-barre
- **1953** — « Révolution » du juste à temps
- **1955** — Le terme « logistique » est utilisé pour la première fois dans un contexte économique aux États-Unis
- **1956** — Présentation du modèle conteneur par Malcom McLean
- **1960** — Le terme « logistique » est utilisé dans l'espace germanophone
- **1980** — Le tunnel routier du Gothard est ouvert (CH)
- **1992** — Vote sur le projet du centenaire de la NLFA (mise en service définitive en juin 2020)

Ces jalons de la logistique pourraient être complétés par de nombreux autres événements. Il est cependant un terme auquel on ne peut échapper : l'**informatique**. Celle-ci a également complètement transformé la logistique.

Le terme « informatique » n'a été véritablement connu que dans les années 1960. Il se compose du jeu de mots suivant :

**Information + automatisme**

Depuis l'avènement de l'informatique, la logistique est en train de se réinventer et évolue de manière exponentielle.`;

const DEMO_101_THEORIE_SUMMARY = `## À retenir — Module 101

### Processus
- Autrefois : **Chasser → Transformer → Consommer**
- Aujourd'hui : **Approvisionnement → Production → Distribution**
- Idée clé : bon matériau, **bon moment**, **bon endroit**, sans perte de valeur

### Histoire
- **Guerre / Napoléon** : ravitaillement, munitions, logistique = science militaire
- **Pyramides** : blocs > 50 t, carrières à ~800 km, transport + rampes
- **Route de la Soie** : Chine → Asie centrale → Méditerranée (soie, thé, épices…)
- **Route de l'ambre** : Baltique → Méditerranée (« or de la mer »)

### Jalons (extraits)
- 1896 camion · 1907 colis · 1944 palettes / élévateurs · 1949 code-barre
- 1953 juste-à-temps · 1956 conteneur (McLean) · 1980 Gothard · NLFA 2020
- **Informatique** = information + automatisme → transformation continue de la logistique`;

const DEMO_101_APERCU_FULL = `## Aperçu du module 101

Ce module présente les **origines et les grandes étapes** de la logistique, de l'âge de pierre aux enjeux modernes.

### Vous allez découvrir
1. Les activités logistiques ancestrales et la chaîne actuelle
2. La logistique militaire (Napoléon) et civile (pyramides)
3. Les grands circuits commerciaux (Route de la Soie, route de l'ambre)
4. Les jalons techniques (camion, palette, code-barre, conteneur, NLFA…)
5. Le rôle de l'informatique dans l'évolution de la logistique

### Source
EnterSite — Logistics by ASFL / SVBL`;

const DEMO_101_APERCU_SUMMARY = `## Aperçu — Module 101
- Origines de la logistique + chaîne Approvisionnement / Production / Distribution
- Exemples historiques : guerre, pyramides, routes commerciales
- Jalons techniques et rôle de l'informatique`;

const DEMO_101_OBJECTIFS_FULL = `## Objectifs du module 101

À l'issue de ce module, l'apprenti·e est capable de :

- Expliquer le lien entre les activités logistiques anciennes et modernes
- Décrire la chaîne **Approvisionnement - Production - Distribution**
- Illustrer l'importance de la logistique à travers des exemples historiques (guerre, pyramides, routes commerciales)
- Citer les principales étapes / inventions qui ont marqué la logistique
- Expliquer pourquoi l'informatique transforme la logistique`;

const DEMO_101_OBJECTIFS_SUMMARY = `## Objectifs
- Relier logistique ancienne et moderne
- Maîtriser Approvisionnement → Production → Distribution
- Connaître exemples historiques + jalons clés + rôle de l'informatique`;

/** Glossaire Module 101 */
const DEMO_101_GLOSSAIRE_FULL = `## Glossaire — Module 101

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Route de l'Ambre | | Voie commerciale historique reliant la mer Baltique (zone de collecte de l'ambre) aux ports de la Méditerranée. Elle a longtemps été l'une des principales liaisons nord-sud d'Europe et a favorisé les échanges de biens et de cultures. |
| Route de la soie | | Réseau de voies commerciales eurasiatiques reliant notamment la Chine à l'Asie centrale et à la Méditerranée. La soie en était le produit phare ; d'autres marchandises (thé, sel, épices, porcelaine…) y circulaient aussi. |
| Informatique | | Mot formé par la contraction d'« information » et d'« automatisme » (ou automatique). Désigne le traitement automatique de l'information ; depuis les années 1960, ce domaine transforme en profondeur la logistique. |`;

const DEMO_101_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **Route de l'Ambre** : Baltique → Méditerranée (ambre, échanges nord-sud)
- **Route de la soie** : Chine → Méditerranée (soie et autres marchandises)
- **Informatique** : information + automatisme`;

/** Mises en situation Module 101 */
const DEMO_101_SITUATION_FULL = `## Mises en situation — Module 101

Contexte : tu travailles chez **EnterSite AG**. Les missions ci-dessous portent sur l'histoire de la logistique. Pour chaque mission, rédige d'abord ta propre réponse, puis compare éventuellement avec un·e camarade. Utilise le bouton pour afficher ou masquer les solutions proposées.

---

## Mission 1 — L'origine de la logistique

Décris, en **5 à 10 phrases**, les origines de la logistique (activités anciennes, exemples historiques).

:::reponse
Les activités connues de la logistique actuelle sont présentes dans tous les livres d'histoire. Chasser (se procurer de la nourriture) des animaux, les conserver pour une utilisation ultérieure et les préparer pour la consommation sont des activités logistiques classiques. De plus, des événements comme la construction des pyramides sont des preuves impressionnantes que la logistique de « l'époque » était déjà d'un niveau élevé. Les histoires de guerre montrent également que le processus logistique était reconnu comme étant au cœur de la guerre. C'est ainsi que des chefs de guerre connus ont commencé à empêcher de plus en plus le ravitaillement afin de pouvoir gagner des batailles.
:::

### 1.1 Comparaison avec un·e camarade

Complément de discussion : **réponse individuelle** (pas de solution unique). Note les points communs et les différences avec ton·ta camarade.

### 1.2 Dates clés — 1944, 1955, 1960

Associe chaque date au jalon correspondant.

:::reponse
- **1944** : Premières palettes en bois et chariots élévateurs au débarquement en Normandie
- **1955** : Première fois aux USA que des activités économiques sont subordonnées au terme « logistique »
- **1960** : Le terme « logistique » arrive en Europe (espace germanophone / européen)
:::

---

## Mission 2 — Routes commerciales et produits commerciaux

Cite des **routes commerciales** historiques importantes et des **produits** qui y circulaient.

:::reponse
- **Routes** : Route de l'ambre et Route de la soie
- **Produits** : par ex. épices, soie, pierres précieuses (aussi thé, sel, porcelaine…)
:::

### 2.1 Comparaison avec un·e camarade

Réponse individuelle — pas de solution unique.

> **Astuce EnterSite** : suis la visite virtuelle dans la salle **15 V2**. Astuce : Hide Thumbnail Menu. Lien : [Vers le site EnterSite](#entersite-placeholder) (URL à compléter lorsque disponible).

### 2.2 Les routes commerciales sont-elles encore d'actualité ?

:::reponse
Oui, la nouvelle route de la soie est un grand thème du commerce mondial actuel. Depuis l'Asie, tout est mis en œuvre pour obtenir un meilleur accès aux autres continents grâce à cette voie commerciale.
:::

---

## Mission 3 — Les grandes étapes de la logistique en Suisse

Cite **trois** événements majeurs de la logistique suisse.

:::reponse
1. Les **NLFA** (Nouvelle ligne ferroviaire à travers les Alpes)
2. Le **tunnel du Gothard**
3. L'**aéroport de Zurich / Kloten**
:::

### 3.1 Comparaison avec un·e camarade

Réponse individuelle. Champs « camarade » : à remplir en classe.

> **EnterSite** : consulte la frise chronologique dans la salle **15 V2** (lien EnterSite à compléter).

---

## Mission 4 — Les grandes étapes de la logistique mondiale

Cite **trois** événements / inventions majeurs de la logistique mondiale (mots-clés).

:::reponse
1. Origine d'**Internet**
2. **Code-barres** / codes **2D**
3. **RFID** / **GPS**
:::

### 4.1 Comparaison avec un·e camarade

Réponse individuelle — pas de solution unique.

---

## Mission 5 — Discussion de la situation de travail et d'apprentissage (STA)

Discute de ta STA avec la classe et le·la formateur·trice. Notes supplémentaires : **réponse ouverte** (pas de solution unique).`;

const DEMO_101_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **M1** : origines (chasse, pyramides, guerre / ravitaillement) · 1944 palettes · 1955 USA · 1960 Europe
- **M2** : Ambre + Soie · épices, soie… · nouvelle route de la soie actuelle
- **M3 (CH)** : NLFA · Gothard · aéroport Zurich/Kloten
- **M4 (monde)** : Internet · codes-barres/2D · RFID/GPS
- **M5** : discussion STA (ouverte)`;

/** Exercices de maths Module 101 */
const DEMO_101_MATHS_FULL = `## Exercices de mathématiques — Module 101

Calcule chaque résultat, puis vérifie avec le bouton solution.

### Exercice 1 — Frais d'expédition

Une console de jeux coûte **500 CHF**. Les frais d'expédition représentent **9 %** du prix. Quel est le montant des frais d'expédition ?

:::solution
**45,00 CHF**

Calcul : 500 × 9 / 100 = **45**
:::

### Exercice 2 — Port de Hambourg

En **2019**, le port de Hambourg a traité **93,9 Mt** de marchandises, soit **+3 %** par rapport à 2018. Quel était le tonnage en **2018** ?

:::solution
**91,083 Mt**

Calcul : 93,9 × 97 / 100 = **91,083**
:::

### Exercice 3 — Prestations CFF

Les CFF ont parcouru **147,5 millions de km** en **2018**. En 2019, la hausse est de **+2,4 %**. Quelle est la distance en **2019** ?

:::solution
**151,04 millions de km**

Calcul : 147,5 × 1,024 = **151,04**
:::

### Exercice 4 — Aéroport de Zurich

L'aéroport de Zurich accueille en moyenne **86 322** personnes par jour. Suite à une baisse de **32 %**, combien de personnes restent-elles en moyenne par jour ?

:::solution
**58 698,96 personnes**

Calcul : 86 322 × (1 − 0,32) = 86 322 × 0,68 = **58 698,96**
:::

> **Contrôle rapide (footer corrigé)** : 151,04 · 91,083 · 45,00 · 58 698,96`;

const DEMO_101_MATHS_SUMMARY = `## Maths — Solutions
1. **45,00 CHF** (500 × 9 %)
2. **91,083 Mt** (93,9 × 97/100)
3. **151,04 M km** (147,5 × 1,024)
4. **58 698,96** personnes (86 322 × 0,68)`;

/** Vérification des acquis Module 101 */
const DEMO_101_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

Que s'est-il passé en **1944** concernant la logistique en Europe (Seconde Guerre mondiale / débarquement) ?

:::reponse
Arrivée des **palettes en bois** et des **chariots élévateurs** (débarquement en Normandie).
:::

### Question 2

Cite **deux** routes commerciales médiévales / historiques célèbres.

:::reponse
La **Route de l'ambre** et la **Route de la soie**.
:::

### Question 3

Cite **quatre** produits commerciaux du Moyen Âge (ou circulant sur ces routes).

:::reponse
Par ex. : **épices**, **soie**, **thé**, **sel** (aussi pierres précieuses, porcelaine, sucre…).
:::

### Question 4

De quels mots se compose le terme **« informatique »** ?

:::reponse
**Information** et **automatisme** (ou automatique).
:::

### Question 5

Quel jalon majeur de la logistique suisse date de **1980** ?

:::reponse
Ouverture du **tunnel routier du Gothard**.
:::`;

const DEMO_101_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. **1944** : palettes en bois + chariots élévateurs
2. Route de l'ambre + Route de la soie
3. Épices, soie, thé, sel…
4. Information + automatisme
5. **1980** : tunnel routier du Gothard`;

/** Contenu Module 102 — Structure de la logistique */
const DEMO_102_THEORIE_FULL = `## 2. Structure de la logistique

### 2.1 Mondialisation

Le rythme des évolutions dans le domaine de la logistique est époustouflant. Les technologies changent d'année en année. Les technologies numériques constituent un facteur décisif de cette évolution. Au 20e siècle, la mondialisation est devenue une évidence. La mise en réseau permanente fait que les informations sont disponibles immédiatement et partout. Le terme de mondialisation est dérivé du mot « Mondial » et décrit une mise en réseau mondiale - donc globale.

L'exemple de la pandémie de Corona, qui s'est déclarée en 2020, illustre bien la mondialisation actuelle : des informations provenant de tous les continents ont pu être traitées quotidiennement (p. ex. nombre d'infections). Les évolutions actuelles ont pu être identifiées et interprétées (par ex. nouvelles variantes de virus). Des vaccins provenant de Grande-Bretagne, de Chine ou d'Allemagne ont pu être achetés et utilisés.

La mondialisation a d'autres conséquences. Elle a par exemple pour conséquence que des produits du monde entier sont disponibles au quotidien. Contrairement au passé, les fraises sont aujourd'hui disponibles toute l'année. Elles sont importées d'autres pays ou continents.

De plus, la mondialisation fait que le même produit est disponible dans différents pays : quelle que soit la durée du vol pour les vacances, on trouve à destination un McDonald's ou un Burger King avec des produits que l'on connaît.

**Remarque :** la mondialisation met le monde en réseau. Toutes les portes s'ouvrent à la logistique.

#### 2.1.1 Impact sur les entreprises

La mondialisation de l'économie est aujourd'hui très avancée. Les marchandises sont transportées sur des distances toujours plus grandes, notamment parce que de nombreuses entreprises ne misent plus uniquement sur leur propre production pour des raisons de coûts. Une grande partie des produits fabriqués à l'étranger proviennent d'Asie, principalement de **Chine** et du **Japon**, qui pratiquent un commerce mondial aussi bien pour les produits de masse que pour les produits de haute technologie. Ce commerce international, conséquence de la mondialisation, est principalement régi par des contrats internationaux. Ces contrats sont conclus selon les normes de l'**Organisation mondiale du commerce (OMC)**.

Ce ne sont pas seulement des produits, mais des entreprises entières qui sont échangées dans le monde entier. Les propriétaires de nombreuses entreprises « suisses » sont américains, japonais, australiens ou russes. Mais des citoyens et des entreprises suisses rachètent également des entreprises dans le monde entier (ou du moins détiennent la majorité des actions). Ils achètent de préférence des entreprises concurrentes.

#### 2.1.2 Impact sur les emplois

La mondialisation peut **détruire des emplois** dans les pays industrialisés. Pour réduire leur dépendance vis-à-vis de la production extérieure mais aussi pour faire des économies, les entreprises ouvrent une succursale dans les pays dits « à bas salaires ». Dans ces pays, le niveau de vie est bas. Les gens ne travaillent pas seulement pour moins d'argent, ils effectuent aussi nettement plus d'heures de travail par an ; ces deux éléments se répercutent sur le prix unitaire.

Ce sont surtout les grandes entreprises qui font usage de cette possibilité. Dans leurs succursales, elles peuvent faire fabriquer leurs produits ou même seulement des composants de produits à un prix beaucoup plus avantageux que dans le pays du siège principal. Elles peuvent y supprimer les emplois « chers ». Mais la mondialisation peut aussi **créer de nouveaux emplois**. Lorsqu'une entreprise parvient à s'implanter dans un autre pays, de nouveaux canaux de vente s'ouvrent à elle. Elle peut augmenter sa production et embaucher de nouveaux collaborateurs.

#### 2.1.3 Conséquences pour la logistique

Les piliers de la mondialisation sont l'approvisionnement et la production à l'échelle mondiale ainsi que la vente à l'échelle mondiale. Ces activités mondiales sont rendues possibles par des processus de transport et de communication modernes.

Dans ce contexte, les exigences de l'industrie et du commerce sont de plus en plus élevées. L'industrie et le commerce recherchent des processus logistiques **rapides** et **orientés vers le client**. Pour répondre à ces exigences élevées, des normes et des systèmes internationaux sont utilisés. Les **conteneurs ISO**, avec lesquels une part croissante des transports de marchandises est effectuée, en sont le symbole.

#### 2.1.4 Conséquences pour la politique

La mondialisation n'est pas la seule raison pour laquelle les systèmes politiques des différents pays se sont rapprochés. Aujourd'hui, de nombreux pays sont des démocraties et/ou ont une économie libérale. Ils poursuivent donc les mêmes objectifs, ce qui constitue une condition favorable au libre-échange et à l'émergence d'alliances internationales. Mais le commerce commun crée également des dépendances entre les nations. En outre, la criminalité mondiale devient un problème de plus en plus important, par exemple le trafic de drogue ou le terrorisme.

#### 2.1.5 Impact sur l'environnement

Le principal argument contre la mondialisation est son **impact écologique**. La population croît de manière exponentielle ; de plus, l'augmentation de la prospérité et les progrès rapides dans le domaine de la santé augmentent l'espérance de vie des gens. Pour répondre aux besoins des personnes, il faut extraire toujours plus de ressources, transporter toujours plus de marchandises à travers le monde et créer toujours plus d'entreprises. Tout cela se fait au détriment des ressources naturelles, qui sont un bien limité.

#### 2.1.6 Effets de la communication

La mondialisation a également des avantages et des inconvénients pour la communication. L'**anglais** prend de plus en plus d'importance en tant que langue internationale. Cela présente certes l'avantage de pouvoir s'entretenir avec des personnes partout dans le monde. Mais cela fait tomber dans l'oubli de nombreuses langues et accents anciens. La **numérisation**, qui fait partie de la mondialisation et qui en est la conséquence, simplifie énormément la communication. Grâce à elle, le monde entier est accessible d'un simple clic de souris. Mais cela peut aussi avoir des inconvénients. La situation professionnelle et personnelle est un facteur décisif pour savoir si la mondialisation est un avantage ou un inconvénient pour quelqu'un.

#### 2.1.7 Avantages et inconvénients de la mondialisation

La mondialisation détermine la vie de chacun d'entre nous. Elle joue un rôle important dans l'économie, la politique et la société. Elle comporte de nombreuses opportunités, mais aussi beaucoup de risques :

**Avantages**
- Commerce international et coopération mondiale
- Création d'emplois
- Répartition des richesses entre les pays
- Une économie mondiale en croissance constante
- Les innovations sont accessibles à tous
- Une offre étendue de produits et baisse des prix
- Une meilleure mobilité des biens et des personnes
- Communication avec des personnes du monde entier
- Les cultures se rapprochent

**Inconvénients**
- Pression sur l'environnement
- Exploitation de la main-d'œuvre (surtout dans les pays à bas salaires)
- Répartition inéquitable des richesses et accroissement des disparités
- Concurrence pour les grands groupes
- Dépendance vis-à-vis d'autres pays
- Déménagement d'entreprises à l'étranger
- Aggravation de la criminalité mondiale
- Problèmes et crises internationaux
- Perte de cultures

### 2.2 Logistique

Comme expliqué dans le module 101, le terme logistique a été appliqué pour la première fois au sens économique en **1955** aux États-Unis et en **1960** dans l'espace européen. À partir de là, le terme « logistique » a été appliqué à de nombreux domaines. Aujourd'hui, on s'intéresse à la question suivante : qu'est-ce qui n'est plus de la logistique ?

#### 2.2.1 La notion de logistique

Au fil des années, le terme « logistique » a été redéfini de manière plus globale. Auparavant, on entendait par ce terme :

**« La distribution de biens »**

Une autre définition des années précédentes :

**« La logistique planifie, conçoit et contrôle le flux de matériel, de l'approvisionnement à l'élimination des déchets en passant par la distribution, avec toutes les informations qui s'y rapportent ». **

Aujourd'hui, la définition de la logistique est beaucoup plus large :

**« Planifier, exécuter et contrôler les flux de matières, d'informations, de valeurs, de personnes et d'énergie. Il s'agit d'acheminer une certaine quantité à un endroit précis en un temps donné. Les sous-disciplines sont par exemple la logistique d'approvisionnement, de stockage, de transport, de production, de distribution et d'élimination ». **

Cette définition comprend, outre les domaines de l'approvisionnement, de la production, du stockage, du transport/distribution et de l'élimination, les facteurs **temps** et **efficacité**.

**Logistique de stockage**

Le choix de l'emplacement de l'entrepôt, la conception du système de stockage idéal, la technique de stockage et l'organisation de l'entrepôt sont des mesures logistiques qui doivent être planifiées, réalisées et contrôlées. Par ailleurs, l'exploitation d'un entrepôt fait également partie de la logistique de stockage.

**Logistique des transports**

La logistique de transport comprend d'une part le transport physique de marchandises par route, air et eau d'un endroit à un autre. D'autre part, elle comprend également les tâches liées au transport telles que la mise à disposition de lettres de voiture, le calcul du temps de transport ainsi que la planification de l'utilisation des moyens de transport, de la technique et de la main-d'œuvre.

**Intralogistique**

L'intralogistique représente généralement l'ensemble des processus logistiques sur un site donné ; il peut s'agir aussi bien d'une entreprise de production que d'un centre de distribution. Ainsi, selon le contexte, l'intralogistique comprend la logistique de production, la logistique de stockage, la logistique d'emballage et la logistique de distribution. L'ensemble des flux de matériaux au sein d'un site constitue le cœur de l'intralogistique.

**Logistique d'emballage**

La logistique d'emballage comprend la mise à disposition et l'élimination du matériel d'emballage ainsi que le choix de celui-ci en fonction de différents critères : économie de coûts, assurance qualité du produit transporté, maintien de la chaîne du froid, respect de l'environnement. L'introduction de technologies telles que la **RFID** (module 801) a donné une importance encore plus grande à la logistique d'emballage. En effet, les nouvelles technologies permettent non seulement de transporter des marchandises avec l'emballage, mais aussi de transmettre ou de générer des informations. Il en résulte une intersection avec la logistique de l'information.

**Logistique de l'information**

La logistique est tributaire d'informations en temps réel. Les informations doivent être mises à disposition en fonction du flux de matériel ou du transport de marchandises. L'emplacement actuel et l'état des marchandises doivent pouvoir être transmis à tout moment à la bonne personne. Pour cela, il faut également une planification stratégique et le développement de tous les systèmes d'information nécessaires à l'échange d'informations et au déroulement des processus commerciaux. C'est là qu'intervient par exemple la technologie **blockchain** : transactions sécurisées et non manipulables sur le réseau, utilisée dans la gestion de la chaîne d'approvisionnement.

**Logistique des succursales**

La logistique des succursales désigne l'approvisionnement régulier des points de vente d'une chaîne de distribution. Dans le commerce de détail alimentaire en particulier, il existe des milliers d'articles à rotation rapide qui sont soumis à des exigences spécifiques, par exemple en matière de livraison, de stockage, du déploiement du personnel et de réapprovisionnement des rayons.

**Logistique du dernier kilomètre**

Dans la vente par correspondance et le e-commerce, le « dernier kilomètre », c'est-à-dire le trajet entre le centre de distribution du prestataire de services d'expédition et l'adresse de livraison du client final, représente la partie la plus chère, la plus coûteuse et la plus complexe de l'ensemble du trajet. D'une part, la livraison sur le dernier kilomètre est un défi logistique du point de vue de la gestion d'entreprise. D'autre part, il existe des défis liés à l'augmentation du trafic dans les localités et à la recherche de solutions plus écologiques. Par exemple, les alternatives possibles pour les camions et les véhicules de livraison sont les vélos de transport, les stations de dépôt de colis ou les micro-dépôts dans les centres-villes.

### 2.3 Chaîne de processus logistique

La diversité des tâches au sein de la chaîne logistique est grande. C'est pourquoi de nombreuses entreprises se sont spécialisées dans certains domaines d'activité. Les collaborateurs possèdent les compétences adéquates pour exercer les fonctions prévues. L'entreprise dispose des installations et du savoir-faire organisationnel appropriés. Chaque entreprise possède donc des compétences clés pour certaines tâches. Les grandes entreprises s'associent à des partenaires afin de pouvoir proposer aux clients plusieurs domaines logistiques ou des solutions logistiques globales.

Pour que les tâches et objectifs initiaux de la logistique soient atteints, il est essentiel que la chaîne de processus fonctionne.

Chaque interface avec un ou plusieurs partenaires représente un défi de taille. La qualité et l'orientation client doivent être comprises de manière uniforme.

**Remarque :** la chaîne de processus de la logistique ne peut souvent être exécutée qu'en collaboration avec un partenaire. Chaque interface peut également être une source d'erreurs.

### 2.4 Gestion de la chaîne d'approvisionnement (SCM)

Aujourd'hui, la logistique est associée au terme anglais **Supply Chain Management**. Dans la traduction française, on parle d'une chaîne d'approvisionnement, de livraison et de création de valeur. Celle-ci peut être définie comme suit :

**« Supply Chain Management (SCM) ou gestion de la chaîne d'approvisionnement, également appelée théorie de la création de valeur, désigne la planification et la gestion (administration) de toutes les tâches de sélection des fournisseurs, d'approvisionnement et de transformation ainsi que de tous les domaines de la logistique. Elle comprend notamment la coordination et la coopération des partenaires impliqués (fournisseurs, distributeurs, prestataires logistiques, clients) ». **

Le terme « Supply Chain Management » ne se distingue pas facilement du terme « logistique ». Ce nouveau terme anglais n'est toutefois pas utilisé pour remplacer le terme quelque peu galvaudé de « logistique ». Les spécialistes donnent au terme « Supply Chain » une définition plus large et lui attribuent l'**ensemble de la chaîne de création de valeur**, et pas seulement la logistique.

Au début de la chaîne de création de valeur, il y a les négociations avec un fournisseur sur le prix et les conditions de livraison. Ce n'est qu'ensuite que commence le processus pour les logisticiens, qui emballent, transportent, stockent, distribuent et, à un moment donné, éliminent les marchandises. En d'autres termes, la notion de chaîne de processus comprend les tâches de flux optimal de marchandises et d'informations. Le SCM comprend en outre le **flux de valeurs** optimal et le **contact direct avec le client**.

Le champ d'action s'est encore élargi avec la gestion de la chaîne d'approvisionnement. La gestion des clients et la gestion financière s'ajoutent à la tâche de livrer le produit conformément aux exigences du flux de marchandises.`;

const DEMO_102_THEORIE_SUMMARY = `## À retenir — Module 102

### Mondialisation
- Mise en réseau mondiale (infos, produits, entreprises)
- Ex. Corona 2020, fraises toute l'année, enseignes mondiales
- Impacts : entreprises (Asie, OMC), emplois (+/−), logistique (rapidité, client, conteneurs ISO), politique, environnement, communication (anglais, numérique)

**Avantages** : commerce, emplois, innovations, prix, mobilité…  
**Inconvénients** : écologie, exploitation, inégalités, dépendance, criminalité, perte culturelle…

### Définition logistique (actuelle)
Planifier, exécuter, contrôler flux de **matières, infos, valeurs, personnes, énergie** — bonne quantité, bon lieu, bon moment.

### Sous-disciplines
Stockage · Transports · Intralogistique · Emballage (RFID) · Information (blockchain) · Succursales · Dernier kilomètre

### Chaîne de processus
Spécialisation + partenaires ; **chaque interface = risque d'erreur**

### SCM
Plus large que la logistique seule : création de valeur + fournisseurs + **flux de valeurs** + client`;

const DEMO_102_APERCU_FULL = `## Aperçu du module 102

Ce module présente la **structure moderne de la logistique** dans un monde globalisé.

### Vous allez découvrir
1. La mondialisation et ses impacts (entreprises, emplois, logistique, politique, environnement, communication)
2. Avantages et inconvénients de la mondialisation
3. La définition actuelle de la logistique et ses sous-disciplines
4. La chaîne de processus logistique et le rôle des partenaires
5. Le Supply Chain Management (SCM)

### Source
EnterSite — Logistics by ASFL / SVBL`;

const DEMO_102_APERCU_SUMMARY = `## Aperçu — Module 102
- Mondialisation + impacts
- Définition / sous-disciplines de la logistique
- Chaîne de processus et SCM`;

const DEMO_102_OBJECTIFS_FULL = `## Objectifs du module 102

À l'issue de ce module, l'apprenti·e est capable de :

- Expliquer ce qu'est la **mondialisation** et ses conséquences pour la logistique
- Citer avantages et inconvénients de la mondialisation
- Formuler la **définition moderne** de la logistique
- Distinguer les principales sous-disciplines (stockage, transport, intralogistique, emballage, information, succursales, dernier kilomètre)
- Expliquer l'importance des **interfaces** dans la chaîne de processus
- Différencier **logistique** et **Supply Chain Management (SCM)**`;

const DEMO_102_OBJECTIFS_SUMMARY = `## Objectifs
- Mondialisation → impacts logistiques
- Définition + sous-disciplines
- Interfaces / partenaires
- SCM ≠ seulement logistique`;

/** Glossaire Module 102 */
const DEMO_102_GLOSSAIRE_FULL = `## Glossaire — Module 102

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Logistique | | Ensemble de la chaîne de processus qui couvre l'**approvisionnement**, la **production**, la **distribution** et l'**élimination**, ainsi que les processus **TTS** (transport, transbordement et stockage). Elle vise un flux optimal des marchandises (et des données associées). |
| Supply Chain Management | | Gestion de la chaîne d'approvisionnement : englobe la **logistique** et les activités **avant** l'approvisionnement et **après** la livraison (négociations fournisseurs, facturation, réclamations…). Elle intègre les flux de **marchandises**, d'**informations** et de **valeurs**. |
| Chaîne de processus | | Enchaînement des **quatre domaines** de la logistique (approvisionnement, production, distribution, élimination) et des processus **TTS** (transport, transbordement, stockage) qui les relient. |`;

const DEMO_102_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **Logistique** : 4 domaines + TTS
- **SCM** : logistique + avant/après + flux marchandises / infos / valeurs
- **Chaîne de processus** : Approvisionnement → Production → Distribution → Élimination (+ TTS)`;

/** Mises en situation Module 102 */
const DEMO_102_SITUATION_FULL = `## Mises en situation — Module 102

Contexte : tu travailles chez **EnterSite AG**. Les missions ci-dessous portent sur la structure de la logistique (chaîne de processus, SCM, mondialisation). Pour chaque mission, rédige d'abord ta propre réponse, puis compare éventuellement avec un·e camarade. Utilise le bouton pour afficher ou masquer les solutions proposées.

---

## Mission 1 — Définition de la logistique

Recherche une définition de la logistique (env. **10 minutes**). Compare ensuite avec la solution proposée.

:::reponse
La logistique comprend toute la **chaîne de processus** : **approvisionnement**, **production**, **distribution** et **élimination**. Elle inclut aussi les processus **TTS** : **transport**, **transbordement** et **stockage**.
:::

### 1.1 Plenum — Réponse individuelle

Note tes idées pour le débat en plénière. **Réponse individuelle** (pas de solution unique).

---

## Mission 2 — La chaîne de processus

Décris la chaîne de processus pour un article de ton entreprise formatrice et réalise un **schéma**.

:::reponse
**Description :** Approvisionnement, production, distribution et élimination, avec les processus TTS (transport, transbordement, stockage).

**Schéma (structure type) :**

| | Approvisionnement | Production | Distribution | Élimination |
| --- | --- | --- | --- | --- |
| **Nous** | … | … | … | … |
| **Partenaires** | … | … | … | … |
| **La Poste Suisse** | | | … | |
| **Le client** | | | … | … |

Adapte les acteurs et les cases au produit choisi dans ton entreprise formatrice.
:::

### 2.1 Échange — Réponse individuelle

Échange avec un·e camarade. **Réponse individuelle** — pas de solution unique.

> **Astuce EnterSite** : salle **15 V3** — Modifier la chaîne de processus. Lien : [Vers le site EnterSite](#entersite-placeholder) (URL à compléter lorsque disponible).

---

## Mission 3 — Supply Chain Management

Formule une définition du **Supply Chain Management (SCM)**.

:::reponse
Le **SCM** englobe la **logistique** (les quatre domaines + TTS) et va **au-delà** : activités **avant** l'approvisionnement (ex. sélection / négociation fournisseurs) et **après** la livraison (facture, réclamations, service clientèle). Il couvre les flux de marchandises, d'informations et de valeurs.
:::

### 3.1 Compléter / élargir le schéma

Élargis ton schéma de la chaîne de processus vers un schéma SCM :

**Service clientèle → Approvisionnement → Production → Distribution → Élimination → Service clientèle**

Acteurs possibles : **Nous** / **Partenaires** / **La Poste Suisse** / **Le client**.

:::reponse
Le SCM « boucle » souvent avec le **service clientèle** en amont et en aval de la chaîne. Exemple de ligne d'acteurs : Nous / Partenaires / Poste / Client selon chaque étape (approvisionnement → élimination) et les interfaces client (facture, réclamations, SAV).
:::

---

## Mission 4 — Chaîne de processus vs. Supply Chain Management

Explique la différence entre **chaîne de processus (logistique)** et **SCM**.

:::reponse
- **Logistique / chaîne de processus** : viser un **flux de marchandises** optimal sur les **quatre domaines** + **TTS**.
- **SCM** : en plus, les flux d'**informations** et de **valeurs**, la communication client, la maîtrise des **coûts** et la coordination des partenaires sur toute la chaîne de création de valeur.
:::

### 4.1 Entreprise formatrice : chaîne ou SCM ?

Dans ton entreprise formatrice, parles-tu plutôt de **chaîne de processus** ou de **SCM** ? Justifie. **Réponse individuelle**.

---

## Mission 5 — Mondialisation

Réponds aux questions suivantes.

### 5.1 Définition

:::reponse
**Mondialisation** : mise en **réseau** du monde. Les informations sont disponibles **simultanément** à l'échelle mondiale.
:::

### 5.2 Exemple privé

:::reponse
Exemple : **PlayStation 5** / pouvoir **jouer avec le monde** (réseau international, contenu et joueurs partout).
:::

### 5.3 EnterSite — clients et fournisseurs

:::reponse
Clients et fournisseurs en **Europe**, en **Asie** et en **Amérique**.
:::

### 5.4 Effets au quotidien

:::reponse
Accès aux informations et produits en **temps réel** ; risque aussi d'être **dépassé** si l'on ne suit pas le rythme.
:::

### 5.5 Effets pour EnterSite

:::reponse
Des **clients internationaux**, mais aussi une **concurrence locale** accrue.
:::

### 5.6 Impact sur la logistique

:::reponse
**Croissance** des volumes, accélération du **rythme**, importance croissante de la **numérisation**.
:::

---

## Mission 6 — Discussion STA

Discussion en **plénière** de la situation de travail et d'apprentissage (STA). Notes supplémentaires : **réponse ouverte** (pas de solution unique).`;

const DEMO_102_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **M1** : logistique = 4 domaines + TTS
- **M2** : chaîne + schéma (Nous / Partenaires / Poste / Client) · EnterSite 15 V3
- **M3** : SCM = logistique + avant/après + service clientèle
- **M4** : marchandises (logistique) vs marchandises + infos + valeurs (SCM)
- **M5** : mondialisation (réseau, PS5, EnterSite, impacts)
- **M6** : discussion STA (ouverte)`;

/** Exercices de maths Module 102 */
const DEMO_102_MATHS_FULL = `## Exercices de mathématiques — Module 102

Calcule chaque résultat, puis vérifie avec le bouton solution.

### Exercice 1 — Taux d'erreurs

Sur **182'500** envois, le taux d'erreurs est de **1,8 %**. Combien d'envois sont erronés ?

:::solution
**3'285** envois

Calcul : 182'500 × 1,8 / 100 = **3'285**
:::

### Exercice 2 — Objectif qualité

L'objectif est un taux d'erreurs de **1,6 %** sur les mêmes **182'500** envois. Quel est le nombre **maximal** d'erreurs admissible ?

:::solution
**2'920** erreurs

Calcul : 182'500 × 1,6 / 100 = **2'920**
:::

### Exercice 3 — Conversion HKD → CHF

Un montant de **80'978 HKD** est converti avec le taux **1 HKD = 0,11 CHF**. Quel est le montant en CHF ?

:::solution
**8'907,58 CHF**

Calcul : 80'978 × 0,11 = **8'907,58**
:::

### Exercice 4 — Kilomètres → miles

Convertis **979 km** en miles. (1 mile ≈ **1,60934 km** ; on peut aussi approximer avec **1,61**.)

:::solution
**≈ 608,32 miles** (avec 1,60934)

Calcul : 979 / 1,60934 ≈ **608,32**

Approximation : 979 / 1,61 ≈ **608,07**
:::

> **Contrôle rapide** : 3'285 · 2'920 · 8'907,58 · ≈ 608,32`;

const DEMO_102_MATHS_SUMMARY = `## Maths — Solutions
1. **3'285** (182'500 × 1,8 %)
2. **2'920** (182'500 × 1,6 %)
3. **8'907,58 CHF** (80'978 × 0,11)
4. **≈ 608,32 miles** (979 / 1,60934)`;

/** Vérification des acquis Module 102 */
const DEMO_102_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

*Module 102 — Structure de la logistique*

### Question 1

Quel est l'**objectif** de la logistique ?

:::reponse
Assurer le **meilleur flux** possible des **marchandises** et des **données**.
:::

### Question 2

Qu'est-ce que l'**intralogistique** ?

:::reponse
La logistique des **processus internes** / au sein de l'**entreprise** (flux de matériel sur un site donné).
:::

### Question 3

Quelle est la différence entre **chaîne de processus** et **Supply Chain Management** ?

:::reponse
- **Chaîne de processus** : flux de **marchandises** et d'**informations**.
- **SCM** : flux de **marchandises**, d'**informations** et de **valeurs**.
:::

### Question 4

Quels sont les **critères** de choix d'un mode de transport ?

:::reponse
**Prix**, **sécurité**, **rapidité** et **efficacité**.
:::

### Question 5

Que signifie **TTS** ?

:::reponse
**Transport**, **Transbordement** (manutention) et **Stockage**.
:::`;

const DEMO_102_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. Meilleur flux marchandises + données
2. Intralogistique = processus internes / entreprise
3. Chaîne = marchandises + infos · SCM = + valeurs
4. Prix, sécurité, rapidité, efficacité
5. TTS = Transport, Transbordement, Stockage`;

/** Contenu Module 103 — Tâches et objectifs */
const DEMO_103_THEORIE_FULL = `## 3. Tâches et objectifs de la logistique

Nous vivons à une époque où les processus commerciaux doivent être organisés de manière efficace afin de répondre à la croissance du marché et aux besoins des clients. En conséquence, le terme de logistique est devenu très populaire. Auparavant, les livraisons et les achats au détail étaient effectués en personne ou par des canaux tels que le fax, le téléphone et le courrier recommandé. Aujourd'hui, la technologie et le monde numérique permettent de faire des achats en un seul clic de souris. Les entreprises communiquent entre elles à l'aide de logiciels sophistiqués.

Le marketing prend une nouvelle forme. Les processus commerciaux (opérationnels, organisationnels, administratifs) sont planifiés d'un point de vue stratégique. La stratégie vise à optimiser la communication entre les secteurs au sein de l'entreprise ou entre les parties internes et externes. Cela doit permettre d'améliorer la production et la distribution. La tactique sert à saisir les changements soudains sur le marché afin que l'entreprise puisse y réagir de manière appropriée.

Les ressources sont optimisées afin de réduire les coûts tout en augmentant les bénéfices. L'entreprise devient une organisation d'actifs et de capitaux. L'organisation est gérée dans les moindres détails afin de faire prospérer l'entreprise.

Selon les principes de la gestion d'entreprise, une entreprise réalise des bénéfices lorsqu'elle travaille de manière **efficace** et **efficiente** :

- **L'efficacité** est la capacité d'un établissement à atteindre les objectifs fixés dans les délais impartis.
- **L'efficience** est la réalisation des objectifs sans gaspillage de ressources.

La logistique est l'ensemble des activités organisationnelles, administratives et stratégiques qui régissent le flux de matières et d'informations connexes dans l'entreprise ; depuis la source chez les fournisseurs à la livraison des produits finis aux clients et au service après-vente. En d'autres termes, la logistique d'entreprise est une partie spécifique de la chaîne d'approvisionnement dont la mission est d'optimiser les activités de l'entreprise et ses relations avec le monde extérieur, en optimisant les ressources et en rendant les processus efficaces et efficients.

### Objectifs de la logistique

Les principales activités de la logistique sont l'acquisition de matériel et de ressources de production, y compris le capital humain, la transformation des ressources en produits ou services et la distribution des produits ou services sur le marché.

### 3.1 Définition de la logistique

Même si le terme logistique est facile à interpréter, la **Society Of Logistic Engineers (S.O.L.E.)** propose une autre définition :

**« La logistique est l'art et la science de l'organisation, de la planification et de l'activité technique en ce qui concerne les exigences, la définition, l'approvisionnement et les ressources nécessaires pour soutenir les objectifs, les plans et les opérations ». **

Source : http://www.sole.org/

### 3.2 Présentation simplifiée des tâches et des objectifs de la logistique

Au fil des années, la logistique a connu différentes définitions des tâches et des objectifs à atteindre. Les définitions ont évolué et se sont étoffées.

#### 3.2.1 Objectif

L'objectif de la logistique peut être déduit de la définition du terme :

**L'objectif de la logistique est d'assurer le meilleur flux possible de marchandises et de données.**

#### 3.2.2 Tâches

La logistique ne peut atteindre cet objectif ambitieux qu'en fournissant des prestations de haute qualité, ce qui signifie qu'elle doit remplir les « tâches B » suivantes.

**Définition des 6B selon le professeur Jünemann :**

1. **Bonne marchandise**
2. **Bonne quantité**
3. **Bonne qualité**
4. **Bon moment**
5. **Bon endroit**
6. **Bon prix**

Deux autres « B » se sont ajoutés et gagnent en importance :

7. **Bonnes informations**
8. **Bons clients**

La logistique consiste donc à **rendre les biens disponibles**. Les 6B montrent quels aspects doivent être pris en compte pour qu'une tâche logistique puisse être exécutée avec succès.

### Le développement d'une définition de la logistique

Pendant des années, la logistique s'est concentrée sur les **4B**, à savoir le bon produit, dans la bonne qualité, au bon moment et au bon endroit. Entre-temps, la quantité et les coûts sont venus s'y ajouter pour répondre à la réduction de l'intégration verticale (par exemple dans le cas d'une production en flux tendu, module 504). C'est ainsi que les **6B** se sont établis comme éléments clés de la logistique.

L'évolution n'est pas encore terminée. Aujourd'hui, on parle aussi de **7B** (6B plus la bonne information) ou de **8B** (6B plus la bonne information et le bon client). On parle de ces extensions parce que la gestion et l'importance des processus logistiques augmentent, tant dans la production industrielle que dans l'ensemble de la société.`;

const DEMO_103_THEORIE_SUMMARY = `## À retenir — Module 103

### Contexte
- Processus efficaces face à la croissance du marché et aux clients
- Du fax/téléphone → au clic numérique
- Stratégie (optimiser) + tactique (réagir au marché)

### Efficacité vs efficience
- **Efficacité** : atteindre les objectifs dans les délais
- **Efficience** : atteindre les objectifs **sans gaspiller** les ressources

### Objectif de la logistique
**Meilleur flux possible de marchandises et de données**

### Les « B » (Jünemann + extensions)
1. Bonne marchandise  
2. Bonne quantité  
3. Bonne qualité  
4. Bon moment  
5. Bon endroit  
6. Bon prix  
7. Bonnes informations  
8. Bons clients  

Évolution : **4B → 6B → 7B / 8B**

### Définition S.O.L.E.
Art et science d'organiser, planifier et soutenir objectifs / plans / opérations (ressources, exigences, approvisionnement).`;

const DEMO_103_APERCU_FULL = `## Aperçu du module 103

Ce module clarifie les **tâches et objectifs** de la logistique dans l'entreprise moderne.

### Vous allez découvrir
1. Le rôle de la logistique dans des processus efficaces et efficients
2. La définition S.O.L.E. de la logistique
3. L'objectif : meilleur flux de marchandises et de données
4. Les **6B / 7B / 8B** (Jünemann et extensions)

### Source
EnterSite — Logistics by ASFL / SVBL`;

const DEMO_103_APERCU_SUMMARY = `## Aperçu — Module 103
- Efficacité / efficience
- Objectif : flux marchandises + données
- Les B de la logistique (6 à 8)`;

const DEMO_103_OBJECTIFS_FULL = `## Objectifs du module 103

À l'issue de ce module, l'apprenti·e est capable de :

- Distinguer **efficacité** et **efficience**
- Formuler l'**objectif** de la logistique (flux marchandises et données)
- Énoncer et expliquer les **6B** (et les extensions 7B / 8B)
- Relier la logistique d'entreprise à la chaîne d'approvisionnement
- Citer la définition de la **S.O.L.E.**`;

const DEMO_103_OBJECTIFS_SUMMARY = `## Objectifs
- Efficacité ≠ efficience
- Objectif = meilleur flux marchandises + données
- Maîtriser les 6B / 7B / 8B`;

/** Glossaire Module 103 */
const DEMO_103_GLOSSAIRE_FULL = `## Glossaire — Module 103

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Règle des 6 B | | Règle formulée par le professeur **Jünemann** : pour réussir une tâche logistique, il faut fournir la **bonne marchandise**, en **bonne quantité**, de **bonne qualité**, au **bon moment**, au **bon endroit** et au **bon coût** (prix). L'évolution a abouti aux **7B** / **8B** en ajoutant la **bonne information** et le **bon client**. |
| Disponibilité | | Capacité à livrer les commandes clients à partir du stock (grande disponibilité de livraison). Elle s'équilibre avec les exigences de capital (investir le moins possible dans le stock) et la minimisation des coûts logistiques. |
| Flux de marchandise | | Circulation des biens le long de la chaîne logistique (approvisionnement, TTS, production, distribution, élimination), accompagnée du flux de données. L'objectif est d'assurer le **meilleur flux possible** de marchandises et de données. |
| Ressources | | Moyens (matériels, humains, financiers, informationnels) mobilisés pour atteindre les objectifs. Une entreprise vise l'**efficience** : atteindre ses buts **sans gaspiller** les ressources. |`;

const DEMO_103_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **6 B (Jünemann)** : marchandise, quantité, qualité, moment, endroit, coût (+ info / client → 8B)
- **Disponibilité** : livrer depuis le stock, en équilibre avec capital et coûts
- **Flux de marchandise** : meilleur flux marchandises + données
- **Ressources** : moyens à optimiser (efficience)`;

/** Mises en situation Module 103 */
const DEMO_103_SITUATION_FULL = `## Mises en situation — Module 103

### Aperçu des missions
1. Expérience personnelle
2. Analyse
3. Évaluation
4. Comparaison
5. Discussion de la situation de travail et d'apprentissage (STA)

> **Vers le site EnterSite** : suis la visite virtuelle dans la salle **15 V2**. Visite l'école professionnelle virtuelle à l'intérieur d'EnterSite. Cherche l'image à droite et résous la **grille de mots**. Lien : [Vers le site EnterSite](#entersite-placeholder) (URL à compléter lorsque disponible).

---

## Mission 1 — Expérience personnelle

Chaque personne a des besoins. Pour les satisfaire, il faut les identifier et se procurer le produit au bon endroit. Un client choisit le produit qui répond à son besoin actuel.

Quel est ton besoin actuel ? (console de jeu, vélo, télévision, ordinateur portable…)

Cherche le produit sur Internet et note :

- le **n° d'article** : réponse individuelle
- la **description** de l'article : réponse individuelle

### 1.1 Comparaison sur toppreise.ch

Visite le portail de comparaison [www.toppreise.ch](https://www.toppreise.ch). Trouve le produit (ou des fournisseurs qui le vendent) et établis un classement :

| Rang | Fournisseur | Prix | Disponibilité |
| --- | --- | --- | --- |
| 1er | Réponse individuelle | Réponse individuelle | Réponse individuelle |
| 2e | Réponse individuelle | Réponse individuelle | Réponse individuelle |
| 3e | Réponse individuelle | Réponse individuelle | Réponse individuelle |

### 1.2 Conclusion du classement

Note les raisons pour lesquelles tu as placé les fournisseurs en 1re, 2e ou 3e position. Quelle est ta conclusion ?

**Conclusion :** réponse individuelle — pas de solution unique.

---

## Mission 2 — Analyse

De retour sur **EnterSite AG**. Cherche dans la liste d'articles :

- **CE255XC**
- **CF410X**
- **1954525**

Complète / vérifie le tableau :

| N° d'article | Stock minimum | Stock maximum | Délai de livraison | Vente par jour |
| --- | --- | --- | --- | --- |
| CE255XC | 0 | 0 | 6 | 2 |
| CF410X | 0 | 0 | 3 | 0.5 |
| 1954525 | 2 | 5 | 17 | 2 |

### 2.1 Objectifs de la logistique — explications

Pour rappel, l'objectif de la logistique se décline aussi en trois axes. Explique le plus précisément possible la signification de…

:::reponse
- **Grande disponibilité de livraison** : nous voulons pouvoir livrer **toutes** les commandes de nos clients à partir de notre stock.
- **Faibles exigences de capital** : nous voulons investir **le moins d'argent possible** dans notre stock.
- **Minimisation des coûts** : la logistique doit consommer **le moins d'argent possible**.
:::

---

## Mission 3 — Évaluation

Dans la mission 2, tu as examiné la situation réelle d'EnterSite AG et dans la mission 2.1, tu as décrit la théorie. Compare maintenant tes connaissances théoriques avec les données pratiques.

**Qu'est-ce que tu peux voir ?**

:::reponse
Pour les articles **CE255XC** et **CF410X**, aucune commande de client ne peut être livrée car le stock est trop faible.
:::

**Quelles modifications dans le sens des objectifs proposerais-tu à M. Stierndli, responsable Logistique ?**

:::reponse
Dans le cadre de l'objectif « **Haute disponibilité de livraison** », les stocks devraient être corrigés au moins pour les articles **1 et 2** (CE255XC et CF410X).
:::

---

## Mission 4 — Comparaison

Présente tes données pour les tâches 1 à 3 à ton voisin de pupitre et compare vos solutions. Les données et les conclusions sont-elles identiques ? Y a-t-il des différences ?

**Conclusions :** réponse individuelle — pas de solution unique.

> **Vers le site EnterSite** : suis la visite virtuelle dans la salle **16 V2**. Visite la salle de travail de l'école professionnelle virtuelle. Cherche l'image à droite et résous le **LearningApp**. Lien : [Vers le site EnterSite](#entersite-placeholder) (URL à compléter lorsque disponible).

---

## Mission 5 — Discussion STA

Discute de la situation de travail et d'apprentissage en plénière avec la classe et l'enseignant·e. Note les informations supplémentaires : **réponse ouverte** (pas de solution unique).`;

const DEMO_103_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **M1** : besoin perso · n° article · toppreise.ch (classement 1–3) · conclusion individuelle
- **M2** : stocks CE255XC / CF410X / 1954525 · triad disponibilité / capital / coûts
- **M3** : CE255XC & CF410X non livrables · corriger stocks articles 1–2 (Stierndli)
- **M4** : comparaison camarade · LearningApp salle **16 V2**
- **M5** : discussion STA (ouverte)`;

/** Exercices de maths Module 103 */
const DEMO_103_MATHS_FULL = `## Exercices de mathématiques — Module 103

Calculez les tâches suivantes sur le sujet du transport outre-mer. Distances : **Shanghai → Rotterdam = 19'535 km** (utiliser cette valeur, même si une ligne de calcul erronée indique 19'935).

### Exercice 1 — Durée du trajet

Vous commandez un conteneur outre-mer depuis Shanghai. Le porte-conteneurs navigue à **15 nœuds/heure = 28 km/h**.

Combien de temps faut-il pour parcourir cette distance ? (en jours et en heures)

:::solution
**29 jours et 1 h 40 min**

Calcul : 19'535 / 28 = **697,6786 h**  
Jours : 697,6786 / 24 = **29,0699** → **29 jours**  
Heures : 0,0699 × 24 = **1,6776** → **1 h**  
Minutes : 0,6776 × 60 ≈ **40,66** → **40 min**
:::

### Exercice 2 — Consommation de carburant

Un porte-conteneurs consomme **13,5 tonnes** de carburant par heure.

Combien de tonnes de carburant sont nécessaires pour aller de Shanghai à Rotterdam ?

:::solution
**9'418,6611 tonnes** (arrondi contrôle : **9'418,66 t**)

Calcul : 697,6786 × 13,5 = **9'418,6611**
:::

### Exercice 3 — Coût du carburant

Le prix du carburant pour les bateaux s'élève à **1,04 € = 1,10 CHF/kg**.

À combien s'élèvent les frais de carburant pour le capitaine de Shanghai à Rotterdam ?

:::solution
**10'360'527,21 CHF** (arrondi contrôle : **10'360'527 CHF**)

Calcul : 9'418,6611 × 1,10 × 1'000 = **10'360'527,21**
:::

### Exercice 4 — Date d'arrivée

La marchandise commandée à Shanghai sera expédiée le **1er février**. Quand pouvez-vous espérer recevoir la marchandise à Rotterdam au plus tôt ?

:::solution
**1er mars (01.03)**

Calcul : 1er février + **29 jours** = **1er mars**
:::

> **SOLUTIONS** : 29 jours 1 h 40 min · 9'418,66 · 10'360'527 · 01.03`;

const DEMO_103_MATHS_SUMMARY = `## Maths — Solutions
1. **29 j + 1 h 40 min** (19'535 / 28)
2. **9'418,66 t** (× 13,5)
3. **10'360'527 CHF** (× 1,10 × 1000)
4. **01.03** (1er fév. + 29 j)`;

/** Vérification des acquis Module 103 */
const DEMO_103_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Module 103 — **Tâches et objectifs de la logistique**

Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

Quel est l'objectif de la logistique ? (triade des objectifs opérationnels)

:::reponse
- **Grande disponibilité de livraison**
- **Faibles exigences de capital**
- **Minimisation des coûts**
:::

### Question 2

Pour atteindre les prestations de haute qualité et les objectifs ambitieux de la logistique, il faut appliquer la règle des **6 B**. Cite les six tâches.

:::reponse
Définition des 6B selon le professeur **Jünemann** :

- Bonne marchandise
- Bonne quantité
- Bonne qualité
- Bon moment
- Bon endroit
- Bon coût
:::

### Question 3

Deux autres tâches « B » sont venues s'ajouter aux six susmentionnées. Desquelles s'agit-il ?

:::reponse
- **Bonne information**
- **Bon client**
:::

### Question 4

Quels sont les deux principes qui permettent à une entreprise de réaliser des bénéfices ?

:::reponse
Lorsqu'elle fonctionne de manière **efficace** et **efficiente**.

- **L'efficacité** est la capacité d'une institution à atteindre les objectifs fixés dans les délais impartis.
- **L'efficience** est la réalisation des objectifs sans gaspillage de ressources.
:::

### Question 5

Quels sont les objectifs de la logistique ? Écrivez la définition exacte.

:::reponse
L'objectif de la logistique est d'assurer le **meilleur flux possible de marchandises et de données**.
:::`;

const DEMO_103_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. Disponibilité · faibles exigences de capital · minimisation des coûts
2. 6B Jünemann : marchandise, quantité, qualité, moment, endroit, coût
3. Bonne information · Bon client
4. Efficace + efficiente (définitions)
5. Meilleur flux possible de marchandises et de données`;

/** Contenu Module 104 — Flux des marchandises */
const DEMO_104_THEORIE_FULL = `## 4. Flux des marchandises

Dans le module 102, les notions de processus logistique et de gestion de la chaîne d'approvisionnement (SCM) ont été approfondies. Ces notions se ressemblent et poursuivent des objectifs similaires. Les objectifs sont notamment le flux optimal des marchandises. Pour atteindre cet objectif, le flux de marchandises doit être connu et organisé de manière optimale. Le cas échéant, l'organisation d'un flux de marchandises nécessite le soutien d'un partenaire.

### Chaîne de processus (rappel)

Au sein de la chaîne logistique, le flux de marchandises mobilise notamment :

**Approvisionnement → Transport / Transbordement / Stockage → Production → Transport / Transbordement / Stockage → Distribution → Élimination**

Les fonctions **TTS** (transport, transbordement, stockage) soutiennent ces étapes.

### 4.1 Approvisionnement

L'achat de biens est une tâche responsable qui incombe à ceux que l'on appelle les **acheteurs**. Les acheteurs sont des professionnels qualifiés qui recherchent les biens présentant le meilleur rapport qualité/prix possible et qui négocient les conditions et les contrats de livraison avec les fournisseurs. Les acheteurs sont chargés de veiller à ce que leurs entreprises disposent toujours des biens adéquats, de haute qualité et au meilleur prix.

La mondialisation et les nouvelles possibilités numériques ont fait de l'approvisionnement un défi majeur. Il n'est pas exceptionnel que les fournisseurs se trouvent dans d'autres fuseaux horaires ou régions linguistiques.

### 4.2 Production

La production industrielle nécessite l'utilisation de machines. Comme leur acquisition est coûteuse, il convient de les utiliser au maximum de leurs capacités. Cela nécessite une planification et une gestion précises de l'ensemble du processus de production. Les machines doivent être « alimentées » en matières premières et les produits fabriqués doivent être évacués.

Pour la logistique de production, trouver la **bonne quantité** pour le processus de production est un grand défi. Des quantités trop importantes peuvent entraîner une surproduction (engorgement). En revanche, la production de trop petites quantités n'est pas intéressante financièrement.

### 4.3 Distribution

La distribution des biens du producteur au consommateur final s'appelle la **distribution**. Elle peut se faire de différentes manières. Par exemple, la poste distribue les envois adressés jusqu'au destinataire, c'est-à-dire jusqu'au consommateur final. C'est également le cas d'autres entreprises de transport de colis et de services.

Dans le cas du commerce de détail, en revanche, ce ne sont pas les clients qui sont directement livrés, mais les **points de vente**. Le client peut s'y procurer la marchandise souhaitée et l'emporter chez lui. L'évolution du transport routier entraîne constamment de nouveaux défis.

### 4.4 Élimination des déchets

L'élimination des déchets est le **dernier maillon** de la chaîne logistique. Dans la mesure du possible, les matières résiduelles doivent être réutilisées, ce que l'on appelle le **recyclage**. Les matières qui ne peuvent pas être recyclées sont généralement incinérées.

Les entreprises de logistique s'occupent quotidiennement de l'élimination correcte des déchets résiduels. Il s'agit par exemple de matériaux d'emballage ou d'objets usagés. Il convient d'accorder une attention particulière aux **substances nocives** qui sont produites lors de l'élimination de nombreux produits d'usage courant.

### 4.5 Fonctions TTS

Les processus de soutien au sein du SCM sont appelés fonctions **TTS** (**T**ransport, **T**ransbordement / manutention et **S**tockage). La différence avec les processus décrits précédemment réside dans le fait que les processus TTS ont une fonction de **soutien** au sein des domaines et entre eux.

#### 4.5.1 TTS — Transport

Les marchandises peuvent être transportées via différents modes de transport : **route, rail, eau et air**. Selon le mode de transport, d'autres moyens de transport entrent en ligne de compte. Le choix du mode de transport, et donc du moyen de transport, se fait généralement en fonction des critères de **prix**, de **sécurité**, de **vitesse** et d'**efficacité**. Avec l'augmentation massive des transports de marchandises au cours des dernières années, les critères **écologiques** (compatibilité avec l'environnement) ont en outre gagné en importance.

#### 4.5.2 TTS — Transbordement (manutention)

Lorsque des marchandises sont réceptionnées ou transférées d'un moyen de transport à un autre, on parle de **transbordement** de marchandises. Le transbordement signifie que les marchandises sont **déchargées**, **stockées temporairement** et **chargées** à nouveau.

#### 4.5.3 TTS — Stockage

Le stockage professionnel des marchandises est une tâche centrale au sein de la chaîne logistique. Il existe une multitude de types d'entrepôts et de systèmes différents. Chaque entrepôt a son caractère spécifique. La forme de l'entrepôt et les installations techniques dépendent des marchandises stockées et de la durée de stockage.

### 4.6 Le flux de marchandises : prestataire de services vs producteur

Le flux de marchandises peut prendre différentes formes. L'ordre correct résulte de la tâche à accomplir. Les différences sont évidentes si l'on compare un simple flux de marchandises d'un prestataire de services et d'un producteur.

#### 4.6.1 Flux de marchandises — Prestataires de services

Le prestataire de services **achète** ses biens et les **revend**. Il est spécialisé dans l'achat de biens de bonne qualité, leur stockage en conservant leur valeur et leur vente au bon client.

#### 4.6.2 Flux de marchandises — Producteur

Contrairement au prestataire de services, le producteur **modifie** le produit au sein du flux de marchandises. C'est pourquoi l'assemblage ou la production font également partie de ses attributions. Le produit passe d'une matière première ou d'un produit semi-fini à l'entrée des marchandises à un produit semi-fini ou à un produit fini à la sortie des marchandises.

**Remarque :** un flux de marchandises est très spécifique à l'entreprise. Il existe donc une grande diversité de représentations et de termes utilisés.

### 4.7 Tailles logistiques

La logistique est nécessaire lorsque les fournisseurs veulent vendre quelque chose que les clients veulent acheter. Les fournisseurs sont des entreprises qui livrent des matières premières, des produits semi-finis ou des produits finis contre paiement. Les clients sont des acheteurs de ces biens, qui les paient. Il est rare qu'une entreprise soit uniquement fournisseur ou uniquement client ; la plupart sont les deux.

En y regardant de plus près, on trouve partout un type de logistique, grande ou petite, simple ou compliquée. Même un ménage privé est en fait une logistique car, là aussi, il faut organiser l'approvisionnement en biens de consommation courante et l'élimination des déchets et, là aussi, cela ne fonctionne que si la communication est efficace.

Il existe plusieurs termes techniques pour désigner la division de la logistique en différentes tailles :

- **Intralogistique** (aussi logistique interne ou **micro-logistique**) : logistique interne allant de l'entrée à la sortie des marchandises (terme souvent utilisé par les fabricants de chariots de manutention).
- **Logistique interentreprises** ou **méta-logistique** : logistique créée entre au moins deux entreprises.
- **Macro-logistique** ou **logistique mondiale** : mouvements de marchandises internationaux ou même intercontinentaux entre deux entreprises.`;

const DEMO_104_THEORIE_SUMMARY = `## À retenir — Module 104

### But
Organiser un **flux de marchandises optimal** (souvent avec partenaires).

### Maillons
**Approvisionnement** → **Production** → **Distribution** → **Élimination**  
+ soutien **TTS**

### Approvisionnement
Acheteurs : qualité/prix, contrats, fournisseurs parfois mondiaux / autres fuseaux

### Production
Maximiser l'usage des machines ; éviter surproduction **et** lots trop petits

### Distribution
Jusqu'au client final (colis) **ou** via points de vente (retail)

### Élimination
Dernier maillon · recyclage prioritaire · attention substances nocives

### TTS
- **T**ransport : route / rail / eau / air — critères prix, sécurité, vitesse, efficacité, écologie
- **T**ransbordement : décharger → stocker temporairement → recharger
- **S**tockage : type d'entrepôt selon marchandise et durée

### Prestataire vs producteur
- Prestataire : achète → stocke → revend (sans transformer)
- Producteur : transforme (MP / semi-fini → produit)

### Tailles
- **Micro / intralogistique** : dans le site
- **Méta** : entre entreprises
- **Macro** : international / intercontinental`;

const DEMO_104_APERCU_FULL = `## Aperçu du module 104

Ce module décrit le **flux des marchandises** le long de la chaîne logistique et les fonctions de soutien TTS.

### Vous allez découvrir
1. Approvisionnement, production, distribution, élimination
2. Les fonctions TTS (transport, transbordement, stockage)
3. Différences prestataire de services / producteur
4. Micro-, méta- et macro-logistique

### Source
EnterSite — Logistics by ASFL / SVBL`;

const DEMO_104_APERCU_SUMMARY = `## Aperçu — Module 104
- Flux : Appro → Prod → Distrib → Élimination
- TTS + tailles (micro / méta / macro)`;

const DEMO_104_OBJECTIFS_FULL = `## Objectifs du module 104

À l'issue de ce module, l'apprenti·e est capable de :

- Décrire le flux de marchandises dans la chaîne de processus logistique
- Expliquer les rôles de l'approvisionnement, de la production, de la distribution et de l'élimination
- Définir les fonctions **TTS** et leurs critères
- Différencier le flux d'un **prestataire** et celui d'un **producteur**
- Distinguer micro-, méta- et macro-logistique`;

const DEMO_104_OBJECTIFS_SUMMARY = `## Objectifs
- Maillons du flux de marchandises
- TTS
- Prestataire ≠ producteur
- Micro / méta / macro`;

/** Glossaire Module 104 */
const DEMO_104_GLOSSAIRE_FULL = `## Glossaire — Module 104

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Flux de marchandises | | Chemin suivi par les biens le long de la chaîne logistique, de l'approvisionnement à l'élimination, en passant par la production et la distribution. Un flux optimal vise le bon produit, au bon endroit, au bon moment, avec le soutien des fonctions TTS. |
| Micrologistique | | Logistique de petite échelle, concentrée sur les flux **internes** d'une entreprise (entrée → sortie des marchandises). Souvent assimilée à l'intralogistique. |
| Intralogistique | | Synonyme courant de micrologistique : organisation et optimisation des flux de matériaux et d'informations **à l'intérieur** d'un site ou d'une entreprise (entre autres manutention, stockage interne). |
| Métalogistique | | Logistique **interentreprises** : coopération et coordination des flux entre au moins deux partenaires (fournisseurs, prestataires, clients). |
| Macrologistique | | Logistique à grande échelle : mouvements de marchandises **internationaux** ou **intercontinentaux** entre entreprises. |
| Processus TTS | | Fonctions de **soutien** de la chaîne de processus : **T**ransport, **T**ransbordement (manutention) et **S**tockage. Elles agissent dans et entre les domaines (approvisionnement, production, distribution, élimination). |
| Prestataire logistique | | Entreprise spécialisée qui organise tout ou partie du flux de marchandises pour le compte d'autrui (achat, stockage en conservant la valeur, transport, livraison). Contrairement au producteur, elle **n'altère** en général pas le produit. |
| EDI (Échange de données informatisées) | | Transmission structurée et automatisée de documents commerciaux entre systèmes informatiques (commandes, bons de livraison, factures, etc.), sans ressaisie manuelle, pour accélérer et sécuriser les échanges entre partenaires. |`;

const DEMO_104_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **Flux de marchandises** : chemin des biens (Appro → Prod → Distrib → Élimination) + TTS
- **Micro / intralogistique** : flux internes entreprise
- **Méta** : interentreprises · **Macro** : international / intercontinental
- **TTS** : Transport, Transbordement, Stockage
- **Prestataire** : achète / stocke / livre (sans transformer) · **EDI** : échange de données informatisées`;

/** Mises en situation Module 104 */
const DEMO_104_SITUATION_FULL = `## Mises en situation — Module 104

Contexte : tu travailles chez **EnterSite AG**. Les missions portent sur le **flux de marchandises** et la chaîne de processus. Rédige d'abord ta propre réponse, puis utilise le bouton pour afficher ou masquer les solutions proposées.

---

## Mission 1 — Décrire, schématiser et présenter le flux de marchandises

### Chemin du produit

Décris le chemin d'un produit dans le flux de marchandises (de l'approvisionnement jusqu'à l'élimination éventuelle).

**Réponse individuelle** (pas de solution unique) — appuie-toi sur Approvisionnement → Production → Distribution → Élimination, avec les fonctions TTS.

### 1.1 Photo / flipchart

Documente (photo, schéma flipchart ou croquis) le flux que tu as décrit.

**Réponse individuelle** — pas de solution unique.

### 1.2 Différences de flux

Compare le flux d'un **prestataire de services** et celui d'un **producteur**. Qu'est-ce qui change ?

:::reponse
- **Prestataire** : achète les biens, les stocke en conservant leur valeur, puis les revend / livre — **sans** transformer le produit.
- **Producteur** : **modifie** le produit (matière première ou semi-fini à l'entrée → semi-fini ou fini à la sortie) ; l'assemblage / la production font partie du flux.
:::

---

## Mission 2 — Tâches dans la chaîne de processus

Pour chaque domaine / processus indiqué, note une description claire de la tâche.

:::reponse
| Domaine / processus | Description |
| --- | --- |
| Approvisionnement | Acheter des biens aux meilleures conditions (qualité / prix), négocier contrats et livraisons avec les fournisseurs, et garantir la disponibilité des biens adéquats. |
| Production | Modifier les biens : transformer une matière première ou un produit semi-fini en produit semi-fini ou fini, avec une planification précise des quantités et des machines. |
| Distribution | Acheminer les biens vers le client final ou vers les points de vente (détail), selon le canal (colis, retail, etc.). |
| Transport | Transmettre / acheminer la marchandise via le **bon mode** (route, rail, eau, air) selon le temps, la sécurité, les coûts (et l'écologie). |
:::

> **Astuce EnterSite** : suis la visite virtuelle dans la salle **15 V3** — vidéo explicative. Lien : [Vers le site EnterSite](#entersite-placeholder) (URL à compléter lorsque disponible).

---

## Mission 3 — Analyser la chaîne de processus

Repère les **points forts** et les **points faibles** de la chaîne de processus (entreprise formatrice ou exemple EnterSite).

**Réponse individuelle** — pas de solution unique.

---

## Mission 4 — Optimiser la chaîne de processus

Propose des **mesures d'optimisation** pour réduire les points faibles identifiés en mission 3.

**Réponse individuelle** — pas de solution unique.

---

## Mission 5 — Discussion de la situation de travail et d'apprentissage (STA)

Discute de ta STA avec la classe et le·la formateur·trice. Notes supplémentaires : **réponse ouverte** (pas de solution unique).`;

const DEMO_104_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **M1** : chemin du produit · prestataire (sans transformer) ≠ producteur (transforme)
- **M2** : Approvisionnement · Production · Distribution · Transport (TTS) · EnterSite salle **15 V3**
- **M3–M4** : points forts/faibles + mesures d'optimisation (ouvert)
- **M5** : discussion STA (ouverte)`;

/** Exercices de maths Module 104 */
const DEMO_104_MATHS_FULL = `## Exercices de mathématiques — Module 104

Calcule chaque résultat, puis vérifie avec le bouton solution.

### Exercice 1 — Remise sur commande groupée

Tu peux acheter **1 000** pièces à **1,00 CHF** pièce, soit **1 000 CHF**.  
Ou bien **1 100** pièces avec une **remise de 10 %** sur le montant correspondant à 1 100 × 1,00 CHF.

Quel montant payes-tu avec la remise ? Quelle option est la plus avantageuse ?

:::solution
Sans remise (1 000 pcs) : **1 000 CHF**.

Avec 1 100 pcs et 10 % de remise :  
1 100 − (1 100 × 10 %) = 1 100 − **110** = **990 CHF**.

→ Il est plus avantageux d'acheter **1 100** pièces (990 CHF < 1 000 CHF).
:::

### Exercice 2 — Temps de production supplémentaire

On ajoute **100** pièces à produire. Chaque pièce nécessite **15 secondes**. Combien de secondes de production supplémentaires cela représente-t-il ?

:::solution
**1 500 secondes**

Calcul : 100 × 15 = **1 500**
:::

### Exercice 3 — Durée de trajet

Un camion doit parcourir **275 km** à une vitesse moyenne de **55 km/h**. Combien d'heures dure le trajet ?

:::solution
**5 h**

Calcul : 275 ÷ 55 = **5**
:::

### Exercice 4 — Masse à éliminer (emballage)

Un produit emballé pèse **1 155 g**. Une fois l'emballage retiré (ou recyclé), il reste **912 g** de produit. Quelle masse d'emballage part en élimination / recyclage ?

:::solution
**243 g**

Calcul : 1 155 − 912 = **243**
:::

> **Contrôle rapide** : 990 CHF (acheter 1 100) · 1 500 s · 5 h · 243 g`;

const DEMO_104_MATHS_SUMMARY = `## Maths — Solutions
1. **990 CHF** → acheter **1 100** (vs 1 000 CHF sans remise)
2. **1 500 s** (100 × 15)
3. **5 h** (275 ÷ 55)
4. **243 g** (1 155 − 912)`;

/** Vérification des acquis Module 104 */
const DEMO_104_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Thème : **Flux de marchandises**. Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

Schématise (ou décris) la **chaîne de processus** du flux de marchandises (domaines + TTS).

:::reponse
**Domaines (ordre) :**

**Approvisionnement → Production → Distribution → Élimination**

**Processus TTS** (soutien **dans** et **entre** les domaines) :

**T**ransport · **T**ransbordement (manutention) · **S**tockage

Schéma-type :

\`Approvisionnement\` — TTS — \`Production\` — TTS — \`Distribution\` — TTS — \`Élimination\`
:::

### Question 2

Dans le domaine de l'approvisionnement / groupe d'achats, qui est chargé d'acheter les biens aux meilleures conditions ?

:::reponse
L'**acheteur** (les acheteurs).
:::

### Question 3

Comment s'appelle l'acheminement des biens du **producteur** jusqu'au **client final** (ou vers les points de vente) ?

:::reponse
La **distribution**.
:::

### Question 4

Que signifient les processus **TTS** ? Donne une brève description de chaque lettre.

:::reponse
- **T — Transport** : acheminer les marchandises (route, rail, eau, air) selon prix, sécurité, vitesse, efficacité, écologie.
- **T — Transbordement** : décharger, stocker temporairement, recharger (changement de moyen de transport / réception).
- **S — Stockage** : entreposer professionnellement selon le type de marchandise et la durée.
:::

### Question 5

Cite les **trois tailles** de la logistique et explique-les brièvement.

:::reponse
- **Micrologistique** (= **intralogistique**) : flux **interne** à l'entreprise (entrée → sortie des marchandises).
- **Métalogistique** : logistique **interentreprises** / coopération entre partenaires.
- **Macrologistique** : mouvements **internationaux** ou **intercontinentaux**.
:::`;

const DEMO_104_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. Appro → Prod → Distrib → Élimination + TTS
2. **Acheteur**
3. **Distribution**
4. Transport · Transbordement · Stockage (avec rôles)
5. Micro/intra (interne) · Méta (interentreprises) · Macro (international)`;

/** Contenu Module 105 — Marchandises */
const DEMO_105_THEORIE_FULL = `## 5. Marchandises

Le terme « marchandises » désigne les objets physiques avec lesquels la logistique est organisée. Les marchandises sont également appelées articles, biens ou produits. La gestion de la grande diversité de marchandises constitue le plus grand défi de la logistique.

### 5.1 Caractéristiques et manipulation des marchandises

Toutes les marchandises ont des propriétés spécifiques dont il faut tenir compte lors de leur manipulation. Les pommes, par exemple, sont par nature périssables et sensibles à la pression et à la température. Comme les points de pression accélèrent leur détérioration, les pommes nécessitent une manipulation particulièrement délicate. Les moyens techniques utilisés pour la manipulation des pommes doivent être conçus de manière à ne pas les endommager. D'autres marchandises nécessitent d'autres moyens techniques spécifiques.

Lors du choix des moyens auxiliaires, il convient de tenir compte des caractéristiques suivantes des marchandises :

- La dimension, le volume
- La densité (poids spécifique)
- L'état de la matière (gazeux, liquide, solide)
- La périssabilité
- La fragilité
- L'empilabilité
- La valeur (stockage antivol)

Les exigences en matière d'une soigneuse manipulation des marchandises sont presque aussi nombreuses que les marchandises elles-mêmes. Chaque secteur a ses propres règles en matière de manipulation des marchandises.

### 5.2 Degré de transformation

Au cours du processus de production, la plupart des biens passent par plusieurs étapes de transformation. À chaque étape de transformation, d'autres caractéristiques peuvent être prises en compte. Selon le degré de transformation, les marchandises sont classées en **matières premières**, **produits semi-finis** et **produits finis**.

#### 5.2.1 Matières premières

Les matières premières sont des marchandises non transformées. Les matières premières dites « primaires » proviennent directement de la nature, comme par exemple les ressources minérales telles que le minerai de fer, le pétrole et le charbon. Le bois, le sable, l'eau, etc. peuvent également être utilisés comme matières premières. Les « matières premières secondaires » sont les matières premières que l'on a récupérées à partir de déchets (recyclage).

#### 5.2.2 Produits semi-finis

Les produits semi-finis sont des matières premières qui ont été assez transformées pour pouvoir être réutilisées (par exemple l'acier et les planches de bois). La farine utilisée pour faire du pain est également un produit semi-fini, obtenue à partir de la matière première : le blé. Le sel est aussi une matière première. Le sel domestique utilisé dans le pain est toutefois un produit semi-fini, voire un produit fini, car il a été nettoyé, éventuellement complété de fluor et conditionné. Les composants électroniques sont également des produits semi-finis, car il en faut un certain nombre pour les assembler et utiliser un appareil qui fonctionne.

#### 5.2.3 Produits finis

On appelle produits finis les produits qui ne nécessitent aucune transformation supplémentaire pour servir le consommateur final. Il en existe un très grand nombre, du simple pain à la machine la plus complexe. De nos jours, de nombreux biens de consommation courante sont également des produits finis, comme par exemple la pizza surgelée.

#### 5.2.4 Évaluer le degré de transformation

La perception du degré de transformation d'un produit peut varier en fonction de son observateur.

Si on a comme objectif de produire du jus de pomme, on évalue la pomme comme matière première. Mais qu'en est-il lorsque la pomme est cueillie directement sur l'arbre et consommée ? Dans ce cas, il s'agit d'un produit fini.

**Remarque :** le degré de traitement peut varier en fonction du point de vue de son observateur.

### 5.3 Les critères d'aptitude au stockage des marchandises

Les propriétés d'une marchandise sont d'une importance cruciale pour le stockage. Le choix du lieu de stockage est essentiellement déterminé par trois critères :

1. la **périssabilité**
2. la **dangerosité**
3. la **manutention**

Dans certaines situations, plusieurs caractéristiques doivent être prises en compte simultanément lors du choix du lieu de stockage. Les marchandises dangereuses, par exemple, peuvent également être périssables.

### 5.4 La périssabilité

Les produits stockés peuvent se détériorer sous l'effet d'une multitude d'influences. Les influences extérieures entraînent une détérioration spontanée ou une destruction lente des produits stockés. Les influences spontanées typiques sont :

- les influences mécaniques (choc, chute, pression)
- la chaleur
- le froid
- l'humidité
- les décharges électrostatiques (ESD)

Les détériorations spontanées ne surviennent généralement pas pendant le stockage, mais lors de la réception, du contrôle, du transport interne ou de l'entreposage. Une méthode de travail minutieuse permet d'éviter de nombreux dommages.

#### 5.4.1 Les influences mécaniques (choc, chute, pression)

C'est principalement lors du transport que les marchandises sont soumises à des contraintes mécaniques. En raison du mouvement de transport, des forces agissent sur la marchandise : elle peut se heurter, se renverser ou tomber. Des mesures de sécurité appropriées permettent d'éviter les dommages. Des marchandises de grande valeur peuvent être endommagées ou détruites en raison d'une inclinaison trop importante, par exemple une machine sensible. L'endommagement de marchandises stockées par des objets durs ou pointus est également considéré comme une influence mécanique. Les fourches des chariots élévateurs, en particulier, provoquent régulièrement des dommages.

#### 5.4.2 La chaleur

Les produits sensibles à la température peuvent être rapidement détruits par la chaleur. Dans le domaine du stockage, la chaleur peut avoir de graves conséquences. Si les marchandises réfrigérées sont exposées trop longtemps à une température trop élevée ou si elles ne sont pas assez refroidies, elles peuvent devenir inutilisables. C'est le cas par exemple des produits laitiers ou carnés. Les marchandises livrées trop chaudes en raison d'une rupture de la chaîne du froid ne peuvent même pas être acceptées.

#### 5.4.3 Le froid

Tout comme la chaleur, le froid peut également causer des dégâts. Certains légumes et fruits exotiques, mais aussi les fleurs, ne supportent pas des températures négatives. Même si ces produits ne sont exposés que brièvement à des températures négatives, certaines parties peuvent geler. La « brûlure de congélation » qui s'ensuit rend les produits inutilisables. Les logisticiens veillent à ce que les marchandises restent toujours dans la plage de température idéale pour elles et ne soient pas exposées à de fortes variations de température.

#### 5.4.4 L'humidité

L'action spontanée de l'humidité et de l'eau détruit rapidement les marchandises stockées. Elles doivent être protégées par l'emballage ou ne doivent pas être exposées à l'humidité. La pluie détruit les marchandises tout comme le déclenchement d'un système d'arrosage.

#### 5.4.5 Les décharges électrostatiques (ESD)

L'être humain génère en permanence des charges électrostatiques qui se déchargent au contact de la terre. Ce phénomène est connu sous le nom d'**Electrostatic Discharge (ESD)**. Les composants électroniques tels que les microprocesseurs ou les transistors (semi-conducteurs) peuvent être détruits par l'ESD. Des mesures de protection doivent donc être prises partout où de tels composants sont stockés, installés ou transportés. Les collaborateurs qui manipulent des pièces électroniques doivent être mis à la terre. La règle la plus importante pour le secteur de la logistique : **ne sortir les composants électroniques de leur emballage de protection que si cela s'avère absolument nécessaire**.

### 5.5 La périssabilité due à des influences de longue durée

Alors qu'il est possible d'éviter avec précaution que des marchandises soient endommagées par des influences extérieures spontanées, il n'est pas toujours possible d'identifier des influences dommageables de longue durée. La connaissance de la fragilité des marchandises constitue donc la base d'un stockage sans dommage. Ce sont surtout les influences suivantes qui peuvent provoquer des dommages :

- la pression à l'empilage
- la température de stockage incorrecte
- l'humidité de l'air inadaptée (trop humide ou trop sec)
- l'influence de la lumière
- le vieillissement
- les nuisibles
- l'influence réciproque des marchandises stockées

#### 5.5.1 La pression à l'empilage

L'empilage des marchandises génère une pression d'empilement. Seules les marchandises insensibles à la pression peuvent être stockées en empilage. Les marchandises peuvent être endommagées si le poids de la pile est trop important ou si des points de pression apparaissent suite à un empilage imprécis.

Les sacs doivent faire l'objet d'une attention particulière lors de l'empilement en bloc. Ceux-ci peuvent éclater dans des cas extrêmes. Les collaborateurs attentifs font attention aux emballages écrasés ou aux empilements inclinés et évitent les dommages en les démontant à temps. Les légumes ou les fruits ne peuvent être empilés que dans des récipients stables. Ces récipients ne doivent pas être remplis complètement, de manière à protéger entièrement leur contenu.

#### 5.5.2 La température de stockage

Les produits frais ne peuvent être stockés que dans des entrepôts climatisés, réfrigérés ou congelés. Valeurs indicatives :

- **Viande et charcuterie :** 0 à +2 °C
- **Produits laitiers :** +2 à +4 °C
- **Fruits et légumes :** +4 à +6 °C
- **Antichambres des entrepôts frigorifiques :** +4 à +6 °C
- **Produits surgelés :** en dessous de -18 °C

Les matières organiques sont attaquées ou décomposées par des bactéries et des champignons. Ces micro-organismes ont besoin de chaleur et d'humidité pour se multiplier. La réfrigération limite fortement leur prolifération. En dessous de **-18 °C**, la propagation s'arrête complètement : les micro-organismes n'entrent pas nécessairement en mort, mais en une sorte d'hibernation. Dès que la température augmente, la multiplication recommence. **Les aliments surgelés ne doivent donc pas être recongelés après avoir été décongelés.**

On distingue :

- la **réfrigération** : 0–5 °C
- la **congélation** : -18 °C

#### 5.5.3 L'hygrométrie

Le terme « humidité de l'air » désigne la part d'eau contenue dans un mètre cube d'air. Les spécialistes parlent d'**humidité relative** de l'air, car la part d'eau n'est pas constante, mais dépend de la température. L'air chaud peut absorber beaucoup plus d'eau que l'air froid.

**Hygrométrie trop élevée :** les produits sensibles à l'humidité absorbent l'humidité de l'air (réaction « hygroscopique », ex. papier). Les poudres peuvent s'agglutiner (ex. sucre). Les emballages d'appareils électroniques sont souvent accompagnés de sachets dessiccateurs (gel de silice / argile sèche).

**Hygrométrie trop faible :** fruits et légumes ont besoin d'environ **90 %** d'humidité pour ne pas se rider. Un rétrécissement trop important rend les produits inutilisables ; le bois peut se fissurer.

#### 5.5.4 La lumière

Les produits stockés contenant de l'huile et de la graisse se détériorent sous l'influence de la lumière (surtout les UV). La graisse peut rancir ; plastiques et caoutchouc peuvent être fragilisés. L'obscurité permet d'éviter ces dommages.

#### 5.5.5 Le vieillissement

Les produits stockés peuvent perdre de la valeur ou devenir inutilisables par simple vieillissement (produits tendance). À l'inverse, certains produits (vin, whisky) sont stockés pour vieillir et atteindre leur pleine valeur.

#### 5.5.6 Les nuisibles

Trois groupes de nuisibles peuvent nuire aux marchandises stockées :

1. champignons, spores et bactéries (micro-organismes)
2. insectes (coléoptères, mites, etc.)
3. petits mammifères (souris, rats)

Mesures : constructives, hygiène, conditions de stockage optimales, contrôle permanent. La lutte biologique (ex. guêpes microscopiques contre certaines larves dans les silos) est également étudiée.

#### 5.5.7 L'influence réciproque des marchandises

Les marchandises organiques peuvent s'influencer réciproquement. Les pommes dégagent un gaz qui accélère la maturation des autres fruits. D'autres aliments (ex. produits de boulangerie non emballés) absorbent aisément les odeurs.

### 5.6 La protection des marchandises stockées

Depuis toujours, les hommes essaient de prolonger la conservation de leurs aliments.

#### Méthodes traditionnelles

**5.6.1 Le séchage** — viande, poisson, fruits (méthode ancienne).

**5.6.2 Le salage (saumurage)** — viande frottée au sel ou à la saumure (ex. salami).

**5.6.3 Fumage** — exposition à la fumée de bois : conservation + goût spécifique.

**5.6.4 La pasteurisation** — du nom de Louis Pasteur : chauffage à environ **70 °C** pour tuer la plupart des micro-organismes (lait, fromage, jus…).

**5.6.5 Stérilisation** — chauffage jusqu'à environ **120 °C** : toutes les bactéries sont tuées ; beaucoup de vitamines aussi.

#### Méthodes plus récentes

**5.6.6 La réfrigération** — locaux réfrigérés / climatisés selon le produit.

**5.6.7 La congélation** — produits surgelés ; entrepôts énergivores.

**5.6.8 La mise sous vide** — évacuation de l'air du sac plastique (charcuterie…).

**5.6.9 L'emballage sous atmosphère protectrice** — air remplacé par un gaz inerte ; moins « écrasé » que le sous-vide.

**5.6.10 Le conditionnement sous atmosphère contrôlée (CA)** — Controlled Atmosphere : température, hygrométrie et composition de l'air constantes ; O₂ réduit, CO₂ augmenté → maturation ralentie (surtout fruits).

**5.6.11 Le stockage ULO** — Ultra Low Oxygen : perfectionnement du CA ; oxygène maintenu à une valeur extrêmement faible.

### 5.7 La dangerosité

Les exigences en matière de stockage découlent de la nature du danger. Le stockage des marchandises dangereuses est traité en détail dans le module 405.

#### Symboles de danger (à partir de 2012) — repères

- **Attention danger** — irritation, allergies, somnolence, intox. unique, ozone… (ex. tablettes lave-vaisselle, Javel)
- **Inflammable** — feu / étincelles / frottements / air / eau (ex. allume-feu, aérosols, solvants)
- **Comburant** — active / favorise un incendie, dégage de l'oxygène (ex. décolorant, eau oxygénée)
- **Explosif** — explosion sous influence ou mauvais stockage (ex. explosifs)
- **Gaz sous pression** — gaz comprimés / liquéfiés / dissous ; risque d'éclatement (ex. propane, CO₂)
- **Danger pour l'environnement** — milieux aquatiques (ex. insecticides, huiles moteur)
- **Corrosif** — brûlures peau / yeux (ex. nettoyant fours, déboucheurs)
- **Dangereux pour la santé** — organes, cancer, génétique, fertilité… (ex. essence, peintures)
- **Toxique** — intoxications graves / mort en très petites quantités (ex. mort-aux-rats)

#### 5.7.1 Manipulation des produits chimiques en toute sécurité

| Étape | Points clés |
|-------|-------------|
| **Achat** | Symboles, avertissements, alternatives moins dangereuses, ne pas suracheter |
| **Utilisation** | Notice, consignes, EPI (lunettes, gants), ne rien laisser sans surveillance |
| **Stockage** | Hors de portée des enfants, jamais dans des récipients alimentaires, consignes d'élimination, mesures structurelles (coupe-feu, bacs), plan d'incident |

#### 5.7.2 La manutention des marchandises

Critères principaux : volume, dimension, densité, empilage, état d'agrégation (solide / liquide / gazeux), valeur.

Trois types de marchandises pour la manutention :

1. **Faciles à manutentionner** — empilables, volume petit à moyen, dimensions standards, longueur max. **1,20 m**, adaptées palette EUR / rayonnages courants.
2. **Formes particulières ou encombrantes** — solutions individuelles, créativité, **sécurité prioritaire**.
3. **Grande valeur** — zones sécurisées (grillages, locaux verrouillables, armoires / rayonnages rotatifs). Protection aussi pour alcool, tabac, pharma, confidentialité / nouveaux produits.`;

const DEMO_105_THEORIE_SUMMARY = `## À retenir — Module 105

### Marchandises
Objets physiques = articles / biens / produits. Grande diversité = défi n°1.

### Caractéristiques à gérer
Dimension/volume · densité · état (S/L/G) · périssabilité · fragilité · empilabilité · valeur

### Degré de transformation
- **MP** : non transformées (primaires / secondaires = recyclage)
- **Semi-finis** : assez transformés pour réemploi (acier, farine, composants…)
- **Finis** : prêts pour le consommateur  
→ le classement dépend du **point de vue**

### Critères de stockage
**Périssabilité · Dangerosité · Manutention**

### Dommages spontanés
Mécanique · chaleur · froid · humidité · **ESD** (ne sortir l'électronique de son emballage que si nécessaire)

### Dommages longs
Pression empilage · T° · hygrométrie · lumière · vieillissement · nuisibles · influence réciproque (ex. gaz des pommes)

### Températures repères
Viande 0–2 · Laitiers 2–4 · Fruits/légumes 4–6 · Surgelés **< -18**  
Réfrigération 0–5 / Congélation -18 · **ne pas recongeler**

### Conservation
Tradition : séchage, salage, fumage, pasteurisation (~70 °C), stérilisation (~120 °C)  
Moderne : froid, sous-vide, atmosphère protectrice, **CA**, **ULO**

### Dangereux
Symboles CLP ; achat / usage / stockage sécurisés (module 405)

### Manutention
Facile (palette EUR, ≤ 1,20 m) · Encombrant (solution ad hoc) · Haute valeur (zones sécurisées)`;

const DEMO_105_APERCU_FULL = `## Aperçu du module 105

Ce module traite des **marchandises** : caractéristiques, degrés de transformation, stockage, conservation et dangerosité.

### Vous allez découvrir
1. Propriétés et manipulation des marchandises
2. Matières premières / semi-finis / finis
3. Périssabilité (spontanée et de longue durée)
4. Méthodes de conservation
5. Dangerosité et manutention (facile / encombrant / haute valeur)

### Source
EnterSite — Logistics by ASFL / SVBL`;

const DEMO_105_APERCU_SUMMARY = `## Aperçu — Module 105
- Caractéristiques des marchandises
- Transformation MP → semi-fini → fini
- Stockage, conservation, danger, manutention`;

const DEMO_105_OBJECTIFS_FULL = `## Objectifs du module 105

À l'issue de ce module, l'apprenti·e est capable de :

- Identifier les caractéristiques pertinentes pour manipuler une marchandise
- Classer une marchandise selon son degré de transformation
- Expliquer les critères d'aptitude au stockage (périssabilité, dangerosité, manutention)
- Citer les causes de détérioration (spontanées et longues) et les mesures de protection
- Distinguer les principales méthodes de conservation
- Appliquer les bases de sécurité pour les produits chimiques et la manutention`;

const DEMO_105_OBJECTIFS_SUMMARY = `## Objectifs
- Caractéristiques + degré de transformation
- Stockage / périssabilité / conservation
- Dangerosité + types de manutention`;

/** Glossaire Module 105 */
const DEMO_105_GLOSSAIRE_FULL = `## Glossaire — Module 105

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Manutention des marchandises | | Ensemble des opérations de prise en charge, de déplacement, de stockage et de manipulation des biens (levage, transport interne, empilage, etc.), adaptées aux propriétés de chaque marchandise. |
| Densité | | Rapport entre la masse et le volume d'une marchandise (poids spécifique). Elle influence le choix des moyens de manutention, l'empilabilité et les contraintes de stockage / transport. |
| Méthode de conservation | | Procédé visant à prolonger la durée de conservation d'une marchandise et à limiter sa détérioration (séchage, salage, fumage, pasteurisation, stérilisation, réfrigération, congélation, sous-vide, atmosphère protectrice, CA, ULO, etc.). |
| Matières premières | | Marchandises **non transformées**. **Primaires** : issues directement de la nature (minerai de fer, pétrole, charbon, bois, sable, eau…). **Secondaires** : récupérées à partir de déchets (recyclage). |
| Produits semi-finis | | Matières premières suffisamment transformées pour être réutilisées dans une étape ultérieure (ex. acier, planches de bois, farine, composants électroniques). |
| Produits finis | | Produits qui ne nécessitent **aucune** transformation supplémentaire pour servir le consommateur final (ex. pain, pizza surgelée, appareil assemblé). |
| ESD | Electro Static Discharge | Décharge électrostatique : transfert soudain de charge électrique pouvant endommager ou détruire des composants électroniques (microprocesseurs, semi-conducteurs). Protection : mise à la terre, emballages antistatiques ; ne sortir les pièces de leur emballage que si nécessaire. |
| Hygroscopique | | Qui absorbe l'humidité de l'air. Une hygrométrie trop élevée peut faire gonfler le papier, agglutiner les poudres (ex. sucre) ; des sachets dessiccateurs limitent ce risque. |
| Micro-organismes | | Organismes microscopiques (bactéries, champignons, spores…) qui se multiplient avec chaleur et humidité et décomposent les matières organiques. La réfrigération freine leur prolifération ; en dessous de **-18 °C**, elle s'arrête (hibernation). |
| Brûlure de congélation | | Dommage causé par une exposition (même brève) à des températures négatives non adaptées : tissus gelés (fruits, légumes, fleurs…) rendant le produit inutilisable. |`;

const DEMO_105_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **Manutention** · **Densité** · **Conservation**
- **MP** (primaires / secondaires) → **semi-finis** → **finis**
- **ESD** : Electro Static Discharge (risque électronique)
- **Hygroscopique** · **Micro-organismes** · **Brûlure de congélation**`;

/** Mises en situation Module 105 */
const DEMO_105_SITUATION_FULL = `## Mises en situation — Module 105

Contexte : tu travailles chez **EnterSite AG**. Les missions portent sur les **marchandises** (propriétés, manipulation, présentation). Rédige d'abord ta propre réponse, puis utilise le bouton pour afficher ou masquer les aides / checklists proposées.

> **Astuce EnterSite** : suis la visite virtuelle dans la salle **16 V2**. Visite la salle de travail de l'école professionnelle virtuelle ; cherche l'image à droite et **évalue le degré de traitement**. Lien : [Vers le site EnterSite](#entersite-placeholder) (URL à compléter lorsque disponible).

---

## Mission 1 — Choisir et préparer les marchandises

Chaque entreprise a des biens aux propriétés très différentes. Ces caractéristiques influencent la manière dont on manipule l'objet.

1. Choisis un objet de ton **entreprise formatrice** dont la **manipulation présente de grands défis**.
2. Prépare une présentation pour la classe (discute avec l'enseignant : **PowerPoint** et/ou **apporter l'objet**).
3. **Protection des données** : valide ce travail avec l'entreprise formatrice **avant** la présentation.

Inclus les facteurs suivants :

- Degré de transformation
- Propriétés des marchandises
- Critères / possibilité de conservation
- Dangerosité
- Périssabilité
- Manipulation
- N° d'article
- Désignation
- Prix de revient
- Pays d'origine
- Mode de transport
- Itinéraire de transport

:::reponse
**Réponse ouverte** — pas de solution unique (présentation individuelle).

**Checklist de présentation (exemple / aide-mémoire) :**

| Facteur | Notes (à compléter) |
| --- | --- |
| Degré de transformation | MP / semi-fini / fini (selon point de vue) |
| Propriétés | dimension/volume, densité, état, fragilité, empilabilité… |
| Conservation | critères + méthodes possibles |
| Dangerosité | symboles SGH / mesures |
| Périssabilité | influences spontanées / longues |
| Manipulation | facile / encombrant / haute valeur |
| N° article · Désignation | |
| Prix de revient | |
| Pays d'origine | |
| Mode + itinéraire de transport | |

*Exemple :* [objet de ton entreprise — à documenter ici].
:::

---

## Mission 2 — Présenter les marchandises

Présente ton article à la classe.

**Tes notes :** réponse individuelle (pas de solution unique).

> **Astuce EnterSite** : suis la visite virtuelle dans la salle **16 V2** — cherche l'image à droite et résous le **LearningApp**. Lien : [Vers le site EnterSite](#entersite-placeholder) (URL à compléter lorsque disponible).

---

## Mission 3 — Discussion de la situation de travail et d'apprentissage (STA)

Discute de la STA en plénière avec la classe et le·la formateur·trice. Notes complémentaires : **réponse ouverte** (pas de solution unique).`;

const DEMO_105_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **EnterSite** salle **16 V2** : degré de traitement · LearningApp
- **M1** : objet challenging + checklist présentation (ouvert / protection données)
- **M2** : présentation en classe (individuelle)
- **M3** : discussion STA (ouverte)`;

/** Exercices de maths Module 105 */
const DEMO_105_MATHS_FULL = `## Exercices de mathématiques — Module 105

Calcule chaque résultat, puis vérifie avec le bouton solution.

### Exercice 1 — Périmètre d'un pneu

Un pneu de tracteur a un diamètre de **2,32 m**. Quel est le périmètre de ce pneu (en mètres) ?

Formule indiquée dans le support : 2 × r × π — ici le calcul utilise directement **diamètre × π**.

:::solution
**7,2848 m**

Calcul : 2,32 × 3,14 = **7,2848 m**
:::

### Exercice 2 — Surface des planches

Dans un tronc d'arbre, on découpe **20** planches : longueur **5 m**, largeur **30 cm**, hauteur **19 mm**. Quelle surface peut-on couvrir avec ces planches ?

:::solution
**30 m²**

Largeur : 0,3 m  
Surface d'une planche : 5 × 0,3 = **1,5 m²**  
Surface totale : 20 × 1,5 = **30 m²**  
(équivalent : 20 × 5 × 0,3 = **30 m²**)
:::

### Exercice 3 — Volume des planches

Même jeu de **20** planches (5 m × 30 cm × 19 mm). Quel est le volume des planches sciées ?

:::solution
**0,57 m³**

Hauteur : 0,019 m  
Volume : surface × hauteur = 30 × 0,019 = **0,57 m³**
:::

### Exercice 4 — Bénéfice de vente

**1 m²** des planches de l'exercice 2 se vend **40 CHF/m²**. Quel bénéfice peut-on envisager avec la vente de ces **20** planches ?

:::solution
**1'200 CHF**

Calcul : 30 × 40 = **1'200 CHF**
:::

> **Contrôle rapide (footer corrigé)** : 7,2848 · 30 · 0,57 · 1'200`;

const DEMO_105_MATHS_SUMMARY = `## Maths — Solutions
1. **7,2848 m** (2,32 × 3,14)
2. **30 m²** (20 × 5 × 0,3)
3. **0,57 m³** (30 × 0,019)
4. **1'200 CHF** (30 × 40)`;

/** Vérification des acquis Module 105 */
const DEMO_105_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Thème : **Marchandises**. Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

Quelles sont les caractéristiques des marchandises dont il faut tenir compte lors du choix des moyens auxiliaires ? Nomme les **sept** propriétés connues.

:::reponse
1. **Dimension / volume**
2. **Densité** (poids spécifique)
3. **État d'agrégation** (gazeux, liquide, solide)
4. **Périssabilité**
5. **Fragilité**
6. **Empilabilité**
7. **Valeur** (stockage antivol)
:::

### Question 2

Les marchandises sont classées en **trois** degrés de transformation. Nomme-les et décris-les.

:::reponse
**1. Matières premières**  
Biens non transformés. **Primaires** : issues de la nature (minerai de fer, pétrole, charbon, bois, sable, eau…). **Secondaires** : récupérées à partir de déchets (recyclage).

**2. Produits semi-finis**  
Matières premières suffisamment transformées pour être réutilisées (ex. acier, planches de bois, farine à partir de céréales).

**3. Produits finis**  
Produits qui ne nécessitent pas d'étape de transformation supplémentaire pour le consommateur final.
:::

### Question 3

La fragilité des marchandises est la base d'un stockage sans dommage. Quelles **sept** influences peuvent malgré tout endommager les marchandises ?

:::reponse
1. **Pression d'empilage**
2. **Température de stockage incorrecte**
3. **Humidité de l'air inadaptée** (trop humide ou trop sèche)
4. **Influence de la lumière** (UV)
5. **Vieillissement**
6. **Parasites** (nuisibles)
7. **Influence réciproque** des produits stockés
:::

### Question 4

Nomme les symboles **SGH** ci-dessous avec le terme technique correct et donne pour chacun un exemple de produit.

:::reponse
| Symbole SGH | Terme technique | Exemples |
| --- | --- | --- |
| Attention / Dangereux | Irritation, allergies, somnolence, intox. unique… | Pastilles lave-vaisselle, produits de nettoyage, eau de Javel |
| Extrêmement inflammable | Feu / étincelles / frottements… | Allume-feu, huiles de lampe, aérosols, solvants |
| Comburant | Active / favorise un incendie (dégage O₂) | Eau de Javel, peroxyde d'hydrogène |
| Explosif | Explosion sous influence ou mauvais stockage | Explosifs, nitroglycérine |
| Gaz sous pression | Gaz comprimés / liquéfiés / dissous | Propane/butane, bouteilles de CO₂ |
| Dangereux pour l'environnement | Milieux aquatiques notamment | Dissolvant moisissures, sprays insectes, huiles moteur, chimie piscine |
| Corrosif | Brûlures peau / yeux | Nettoyant four, détartrant, détergents puissants, déboucheurs |
| Nocif | Organes, cancer, génétique, fertilité… | Essence, peintures, allume-feu, huiles de lampe, certaines huiles essentielles |
| Très toxique | Intoxications graves / mort en très petites quantités | Poison pour souris / rats |
:::

### Question 5

Quels sont les **trois** principaux critères à prendre en compte dans le choix du lieu de stockage ?

:::reponse
1. **Périssabilité**
2. **Dangerosité**
3. **Manipulation**
:::`;

const DEMO_105_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. Dimension/volume · Densité · État d'agrégation · Périssabilité · Fragilité · Empilabilité · Valeur
2. MP (primaires/secondaires) · Semi-finis · Finis
3. Pression empilage · T° · Humidité · Lumière UV · Vieillissement · Parasites · Influence réciproque
4. 9 symboles SGH + exemples (Attention → Très toxique)
5. Périssabilité · Dangerosité · Manipulation`;

/** Contenu Module 106 — Élimination des déchets CH */
const DEMO_106_THEORIE_FULL = `## 6. L'élimination des déchets CH

### 6.1 Qu'est-ce qu'un déchet ?

Il n'est pas toujours évident de définir un déchet. La loi définit les déchets comme suit :

**Loi sur la protection de l'environnement (LPE) — Art. 7 al. 6**

**« Par déchets, on entend les choses meubles dont le détenteur se défait ou dont l'élimination est commandée par l'intérêt public ». **

Il s'agit donc avant tout d'une question de temps : tout bien de consommation tôt ou tard ne sert plus, et devient alors un déchet. Contrairement aux biens de consommation, la nature ne connaît pas les déchets. Car les processus naturels se composent de cycles, au cours desquels chaque substance retourne à son état d'origine de façon périodique. Les déchets sont donc toujours produits par l'homme.

Au fil des siècles, la production mondiale de déchets a considérablement évolué. Longtemps, il a été possible d'éliminer dans le jardin les choses qui ne servaient plus. Ce type d'élimination n'était pas encore problématique puisqu'il s'agissait de petites quantités et que ceux-ci étaient moins nocifs (souvent organiques : bois, argile, restes de nourriture). Avec les grandes villes et l'industrialisation, la production de déchets par unité de surface a rapidement augmenté. Une réglementation s'est avérée nécessaire. De plus, les produits et les déchets ont une composition de plus en plus complexe.

**Remarque :** l'association de différents matériaux rend encore plus difficile une élimination respectueuse de l'environnement. (Source : OFEV)

Dans le langage technique, les déchets sont appelés **résidus**, résidus stabilisés, ou **matières revalorisables**. Ces termes indiquent que les déchets ne sont pas toujours gênants ou superflus, mais qu'ils peuvent être réutilisés de manière judicieuse. Le défi réside dans la diversité des matières résiduelles :

- solides, liquides ou gazeuses ; pures ou mélangées
- inoffensives, dangereuses ou toxiques (voire les deux)
- réutilisables / valorisables, ou seulement compressibles / neutralisables

**Exemple :** l'eau devient aussi un déchet (eaux usées). Les boues d'épuration, qui ne peuvent plus être épandues en agriculture, servent de combustible dans les **UIOM**.

Une définition possible : **« Une mauvaise matière au mauvais moment, dans la mauvaise situation et au mauvais endroit ». **

### 6.2 Importance et rôle des déchets

L'élimination des déchets a pris beaucoup d'importance pour les raisons suivantes :

- conscience écologique croissante
- pression pour des produits favorables à l'environnement
- protection de l'environnement comme facteur concurrentiel
- augmentation des coûts d'élimination
- renforcement de la réglementation

Pour la logistique d'élimination d'une entreprise, cela signifie :

- développer une attitude positive et orientée vers l'avenir
- rechercher des solutions économiques
- présenter les plans et les résultats atteints

La logistique d'élimination réglemente l'organisation du flux de matériel interne et externe des déchets produits. Prestations principales :

| Prestation centrale | Prestation complémentaire | Prestation d'informations |
|---------------------|---------------------------|---------------------------|
| Stockage | Collecte | Traitement des commandes |
| Transport | Tri | |
| Recyclage | Conditionnement | |

**Remarque :** éliminer = mettre en valeur, exploiter ou faire disparaître les déchets.

### 6.3 Flux de matières dans la gestion des déchets

Chaque année, la Suisse produit environ **80 à 90 millions de tonnes** de déchets. L'OFEV distingue notamment :

**Déchets urbains**
- provenant des ménages
- provenant d'entreprises < 250 ETP dont la composition est comparable aux déchets ménagers

**Matériaux de déblais et d'excavation**
- déblais : roches meubles, gravier, sable excavés
- excavation : blocs / roches brisées extraits mécaniquement ou à l'explosif

La plus grande partie est constituée de matériaux d'excavation et de déblais non pollués ainsi que de matériaux de déconstruction. En raison de son niveau de vie élevé, la Suisse produit **716 kg** de déchets par personne (parmi les volumes urbains les plus élevés au monde). Près de **53 %** de ces déchets sont recyclés. La Confédération veut prendre en compte tous les flux tout au long de la chaîne de création de valeur. (Source : OFEV)

### 6.4 Les modes d'élimination des déchets en Suisse

La Suisse dispose d'un système moderne : **décharges**, **incinération (UIOM)** et **recyclage**. Le recyclage est l'objectif principal à renforcer.

#### 6.4.1 Décharges

Les résidus d'incinération ou les déchets non valorisables sont déposés dans des décharges autorisées. Les déchets doivent répondre à certaines exigences (sinon traitement préalable).

**LPE Art. 30c al. 1 :** les déchets destinés à être stockés définitivement doivent être traités de façon à contenir le moins possible de carbone organique et à être aussi peu solubles dans l'eau que possible.

Cinq types de décharges (**A → E**, danger croissant) :

| Type | Placement | Exemples |
|------|-----------|----------|
| **A** | Excavation / déblais non pollués | Gravier, terre, sable |
| **B** | Matériaux inertes | Briques, tuiles, béton |
| **C** | Déchets inorganiques (souvent après traitement) | Terre polluée, balayures |
| **D** | Résidus d'incinération | Mâchefers / scories UIOM |
| **E** | Réacteur (fort potentiel de danger) | Isolation, amiante, asphalte |

#### 6.4.2 Incinération — UIOM

En Suisse, l'ensemble des déchets inflammables non recyclables doit être incinéré dans des installations appropriées (~**30 UIOM**). Seuls mâchefer et résidus de filtration finissent en décharge.

**LPE Art. 30c al. 2 :** il est interdit d'incinérer ailleurs que dans une installation (sauf déchets naturels forêts/champs/jardins sans immissions excessives).

Trois objectifs de l'incinération :

1. **Réduction volume (~90 %) et poids (~75 %)**
2. **Réduction des émissions polluantes** (filtres, lavage des fumées, DeNOx…)
3. **Production d'énergie / chauffage urbain** (~25 % électricité, ~75 % chaleur potentielle)

L'UIOM est aussi un **point de collecte central** régional (conseil au tri, lutte contre décharges sauvages).

#### 6.4.3 Le recyclage

**Recyclage = collecte, tri, traitement et valorisation des matières** — circuit fermé ; matière première **secondaire**.

Intérêts : moins de déchets, préservation des ressources, moins de CO₂, économie d'énergie. Le recyclage doit aussi être **économiquement viable** à long terme.

**Taux de recyclage Suisse ~53 %** (leader européen). Exemples OFEV 2020 (extraits) : vieux papiers 82 %, verre 94 %, PET 81 %, alu 94 %, piles 64 %.

**Distribution / redistribution :** lors des livraisons aux filiales, on récupère souvent emballages et retours (PET, verre, piles, appareils).

**Systèmes de transport**
- **Livraison :** le client apporte ses déchets au point de collecte
- **Enlèvement :** ramassage (ex. ordures ménagères)

**Financement**
- **CAR / CAE** (contribution anticipée) — souvent volontaire / marché
- **TEA / TAR** (taxe d'élimination anticipée) — LPE ; ex. piles via **INOBAT**

Organisations (ex.) : kompost.ch, IGORA (alu), PET-Recycling, INOBAT, Swiss Recycling (papier), FERRO, Vetrorecycling, SENS, Swico, SLRS.

**Organique :** compostage (~1/3 des déchets urbains) ; biogaz (fermentation → méthane/CO₂ → électricité/chaleur).

**Inorganique :** fer blanc (aimant), aluminium (IGORA ; refonte ≈ 20× moins d'énergie que bauxite), verre (points de collecte → transformation), plastiques (faible taux ; PET mieux organisé), piles, appareils (Swico / SENS).

### 6.5 Objectif 2030 — la pyramide des déchets

Objectifs nationaux :
1. Dissocier production de déchets et croissance économique
2. Éviter les effets nuisibles sur l'homme et l'environnement

D'ici **2030**, l'OFEV vise un cycle basé à **75 %** sur des matières premières **secondaires** et **25 %** sur des **primaires**.

Pyramide : **éviter > réduire > valoriser** (*Reduce, Reuse, Recycle*).

### 6.6 L'élimination dans les entreprises de logistique

Les entreprises logistiques produisent surtout des **matériaux d'emballage** ; elles gèrent aussi souvent les déchets des points de vente / de production. Conditionnement fréquent via **compacteurs / broyeurs**. Collaboration possible avec prestataires d'élimination.

**Check-list d'élimination** (aide à l'exécution) : groupe OFEV A–E, matière, symbole, conteneur, consignes, point de collecte, transporteur, organisme d'élimination, symbole recyclage, avertissements, classification ADR/SDR.

Groupes OFEV (exemple check-list) :
- **A** inoffensifs · **B** risque contamination · **C** agents infectieux · **D** spéciaux · **E** médicaux / éthiques

### 6.7 Les déchets sauvages (littering)

Le **littering** = jeter / abandonner de petites quantités de déchets urbains sans utiliser les infrastructures. Problème pour ~3/4 des communes. Coûts de nettoyage ≈ **200 millions CHF/an**. Compétence cantonale.

**Causes :** espace public « mobile », anonymat, effets de groupe, valeurs personnelles (ex. hausse Covid).

**Conséquences (OFEV) :** esthétiques, écologiques, économiques.

**Mesures :** sensibilisation (ex. IGSU), éducation, sanctions (selon cantons/villes) — l'exemplarité a le plus grand impact.`;

const DEMO_106_THEORIE_SUMMARY = `## À retenir — Module 106

### Définition (LPE Art. 7 al. 6)
Chose meuble dont on se défait **ou** dont l'élimination est commandée par l'intérêt public.  
Déchets = produits par l'homme (la nature = cycles).

### Enjeux pour l'entreprise
Conscience écolo · coûts · loi → attitude, solutions économiques, reporting  
Prestations : stockage, transport, recyclage + collecte/tri/conditionnement + infos

### Suisse — ordres de grandeur
- **80–90 Mt/an** (surtout excavation / déblais / déconstruction)
- **~716 kg/habitant** déchets urbains · **~53 %** recyclés

### 3 voies
1. **Décharges A→E** (danger croissant) — LPE 30c al.1
2. **UIOM** (~30) — volume −90 %, poids −75 %, énergie/chaleur — LPE 30c al.2
3. **Recyclage** = collecte + tri + traitement + valorisation (MP secondaires)

### Financement
CAR/CAE · TEA/TAR (ex. piles INOBAT)

### Objectif 2030
**75 % secondaires / 25 % primaires** · Pyramide : **éviter > réduire > valoriser**

### Logistique d'entreprise
Emballages, retours filiales, compactage, check-lists (groupes A–E, ADR/SDR)

### Littering
Déchets sauvages · ~200 MCHF/an · causes sociales · mesures : sensibiliser, éduquer, sanctionner`;

const DEMO_106_APERCU_FULL = `## Aperçu du module 106

Ce module présente l'**élimination des déchets en Suisse** : cadre légal, flux, décharges, UIOM, recyclage, entreprises et littering.

### Vous allez découvrir
1. Définition légale du déchet (LPE)
2. Types et volumes de déchets (OFEV)
3. Décharges A–E, UIOM, recyclage et organisations CH
4. Objectif 2030 et pyramide des déchets
5. Concepts d'élimination en entreprise et littering

### Source
EnterSite — Logistics by ASFL / SVBL · OFEV`;

const DEMO_106_APERCU_SUMMARY = `## Aperçu — Module 106
- Qu'est-ce qu'un déchet (LPE)
- Décharges / UIOM / recyclage
- Objectif 2030 + littering`;

const DEMO_106_OBJECTIFS_FULL = `## Objectifs du module 106

À l'issue de ce module, l'apprenti·e est capable de :

- Définir un déchet selon la **LPE**
- Expliquer l'importance de la logistique d'élimination pour l'entreprise
- Distinguer les principaux types de déchets et ordres de grandeur en Suisse
- Comparer **décharge**, **UIOM** et **recyclage**
- Citer les types de décharges **A à E**
- Expliquer le financement (CAR/CAE, TEA) et l'objectif 2030
- Décrire le littering, ses causes, conséquences et mesures`;

const DEMO_106_OBJECTIFS_SUMMARY = `## Objectifs
- Définition LPE + rôle entreprise
- 3 voies CH (décharge / UIOM / recyclage)
- A–E, 2030, littering`;

/** Glossaire Module 106 */
const DEMO_106_GLOSSAIRE_FULL = `## Glossaire — Module 106

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Décharge | | Installation autorisée où l’on stocke **définitivement** des résidus d’incinération ou des déchets non valorisables, après traitement si nécessaire (types **A → E**, danger croissant). |
| UIOM | Usine d’incinération des ordures ménagères | Installation qui incinère les déchets inflammables non recyclables ; réduit volume et poids, limite les émissions polluantes et produit de l’énergie / du chauffage urbain. |
| Recyclage | | Collecte, tri, traitement et **valorisation** des matières en circuit (quasi) fermé, pour obtenir des matières premières **secondaires**. |
| Biologique | | Relatif aux matières **organiques** d’origine vivante (restes alimentaires, déchets verts, etc.), valorisées par compostage ou fermentation (biogaz). |
| Inorganique | | Relatif aux matières **minérales / métalliques** (verre, métaux, minéraux…) qui se recyclent surtout par procédés physiques ou chimiques, sans compostage. |
| Immissions | *(orth. courante FR ; parfois écrit « Immisions »)* | Polluants **reçus / ressentis** sur un lieu (air, sol, eau, bruit…) — effet « côté récepteur », distinct des émissions à la source. |
| Émissions | | Polluants **rejetés à la source** (cheminée, échappement, process…) vers l’environnement. |
| Redistribution | | Lors des livraisons (ex. vers filiales), récupération en retour d’emballages, retours et flux à recycler (PET, verre, piles, appareils…). |
| Upcycling | | Valorisation d’un déchet ou d’un produit usagé en un bien de **valeur égale ou supérieure** (réemploi créatif), au-delà du simple recyclage matière. |`;

const DEMO_106_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **Décharge** A→E · **UIOM** · **Recyclage** (MP secondaires)
- **Biologique** vs **Inorganique**
- **Émissions** (source) ≠ **Immissions** (récepteur)
- **Redistribution** · **Upcycling**`;

/** Mises en situation Module 106 */
const DEMO_106_SITUATION_FULL = `## Mises en situation — Module 106

Contexte : tu travailles chez **EnterSite AG**. Les missions portent sur l’**élimination des déchets en Suisse** (littering, circuits de recyclage, cycles naturels). Rédige d’abord ta propre réponse, puis utilise le bouton pour afficher ou masquer les aides / solutions proposées.

### Vue d’ensemble des missions
1. Tous des déchets ou quoi ?
2. Où vont tes déchets ?
3. Comprendre les circuits
4. Discussion STA

---

## Mission 1 — Tous des déchets ou quoi ?

**Littering + recyclage** — crée une **carte heuristique** (mind map) / cluster sur ces thèmes.

Outils possibles (ouverts) :
- [mind-map-online.de](https://www.mind-map-online.de)
- [wortwolken.com](https://www.wortwolken.com)

**Ta carte heuristique** : travail **ouvert / individuel** (image ou schéma à produire). Pas de solution unique.

---

## Mission 2 — Où vont tes déchets ?

Réponds aux questions suivantes. Compare ensuite avec les exemples proposés (lorsque disponibles).

**Quels matériaux recyclables connais-tu ?**

:::reponse
Exemples : verre, plastiques, emballages, métaux, organiques, carton, papier, bois, déchets de construction, encombrants…
:::

**Quels produits recyclés connais-tu ?**

:::reponse
Exemples : emballages de bains de bouche, déodorants à bille, nettoyants ménagers, et d’autres emballages issus de matières recyclées…
:::

**Y a-t-il un produit non recyclable que tu voudrais pouvoir recycler ?**

**Réponse individuelle** — pas de solution unique.

### 2.1 Comportement personnel face aux déchets

Évalue ton comportement (échelle type : **Très bien → Bien → Moyen → Mal**). Checklist personnelle — **réponse individuelle**.

### 2.2–2.3 Travail de groupe — 10 matériaux recyclables (45–60 min)

En groupe, étudie **10** filières de recyclage (voir sous-missions ci-dessous), puis **présente** vos résultats à la classe.

> **Astuce EnterSite** : suis la visite virtuelle dans la salle **15 V3** — LearningApp. Lien : [Vers le site EnterSite](#entersite-placeholder) (URL à compléter lorsque disponible).

---

### Sous-mission 1 — Verre

À partir des données **Vetroswiss 2022** : quantités vendues / recyclées, schéma éventuel, et explication du **tri couleur**.

:::reponse
**Chiffres Vetroswiss 2022 :**
- **316 331 t** de verre d’emballage vendues
- **305 290 t** recyclées ≈ **97 %**

**Tri couleur :** le verre est trié par couleur (blanc, brun, vert) pour produire à nouveau du verre d’emballage de qualité. Sans tri correct, on oriente plutôt vers des usages comme le **verre cellulaire** ou la **laine de verre** (isolation), qui ne remettent pas le verre dans le même circuit « bouteille → bouteille ».
:::

---

### Sous-mission 2 — Papier

Chiffres 2005, produits issus du recyclage, et contrôle à l’école (ouvert).

:::reponse
**2005 :** **1 243 816 t** de vieux papier récupérées → **74,4 %** · **167 kg/habitant**.

**Produits recyclés (exemples) :** papier journal, cartons d’emballage, papier hygiénique / essuie-tout, papier à usage graphique recyclé, etc.

**Contrôle à l’école :** observation ouverte — où et comment le papier est collecté dans ton établissement ? (réponse individuelle / de groupe)
:::

---

### Sous-mission 3 — Vêtements

Quantités, consignes de collectes, répartition Texaid (et assimilés).

:::reponse
- **6,7 kg/habitant** · **~60 400 t** de textiles collectés
- Consignes : vêtements **propres**, **secs**, dans des sacs **fermés**
- Répartition typique (Texaid etc.) : **65 %** seconde main · **15 %** chiffons · **15 %** isolants · **5 %** détruits
:::

---

### Sous-mission 4 — PET

Définition, pétrole évité, points de collecte, taux 2023.

:::reponse
**PET** = polyéthylène téréphtalate (plastique des bouteilles de boissons).

- En Suisse, le recyclage PET évite l’équivalent d’environ **47 millions de litres** de pétrole
- **Plus de 58 000** points de collecte
- **2023 :** **42 562 t** vendues · **35 635 t** recyclées = **84 %**
:::

---

### Sous-mission 5 — Déchets verts

Que mettre / ne pas mettre ; biogaz ; kg/hab.

:::reponse
**Oui (ex.) :** tontes, feuilles, branchages, restes de jardin, souvent aussi déchets de cuisine selon consignes locales.  
**Non (ex.) :** plastique, verre, métaux, sacs non compostables, déchets spéciaux, certaines plantes malades selon directives.

- **2020 :** ~**79 000** ménages alimentés via le **biogaz** issu de la fermentation
- **~156,1 kg/an/habitant** de déchets verts / organiques (ordre de grandeur CH)
:::

---

### Sous-mission 6 — Aluminium

Énergie, recyclage, point de collecte (exemple).

:::reponse
- Jusqu’à **~95 %** d’économie d’énergie par rapport à la production primaire (bauxite)
- Recyclage **quasi infini** sans perte majeure de qualité
- Exemple de point : collecte / conteneur type **Jumbo Bulle** (ou point local IGORA / commune — à vérifier chez toi)
:::

---

### Sous-mission 7 — Luminaires

Quoi collecter, où rendre, volume.

:::reponse
- Collecter : **LED**, **néons**, lampes **basse consommation** (économie)
- Restitution : **magasin / point de vente** ou **déchetterie** (réseaux type SLRS / SENS selon catégorie)
- Volume CH précis : **introuvable** dans le support — noter « à rechercher / non indiqué »
:::

---

### Sous-mission 8 — Piles

Appareils, risques, taux de retour.

:::reponse
**Appareils (ex.) :** télécommandes, jouets, montres, lampes de poche, souris, détecteurs de fumée…

**Risques :** métaux lourds, pollution, **risque d’incendie** (surtout lithium).

**Taux de retour (ex.) :** **82,1 %** piles non-lithium · **19,5 %** piles **lithium**.
:::

---

### Sous-mission 9 — Fer blanc / tôle

Consommation, containers, composition.

:::reponse
- ~**40 boîtes / habitant / an**
- **~86 %** collectées via ~**4 000** conteneurs
- **Fer-blanc** = acier (fer) recouvert d’une fine couche d’**étain** (protection anticorrosion)
:::

---

### Sous-mission 10 — Électrique / électronique

Swico / SENS, kg/hab, inventaire personnel.

:::reponse
- Organisations : **Swico** / **SENS** (appareils électriques et électroniques, matériaux)
- **~14,7 kg/habitant**
- **Compte personnel :** liste ouverte — combien d’appareils chez toi ? (souvent **100+** dans un ménage équipé)
:::

---

## Mission 3 — Comprendre les circuits

Support PDF : **« 106_Comprendre les cycles »** — questions et découvertes **ouvertes** (notes personnelles).

### 3.1 Choisir un cycle à lire

Choisis **l’un** des deux textes ci-dessous (cycle de l’eau **ou** cycle de la matière biologique), lis-le attentivement, puis réponds aux questions du PDF / de l’enseignant·e.

#### Texte A — Cycle de l’eau

L’eau circule en permanence entre atmosphère, continents et océans. Le soleil évapore l’eau des mers, des lacs et du sol ; la vapeur forme des nuages, puis retombe en précipitations. Une part s’infiltre (eaux souterraines), une part ruisselle vers les cours d’eau, une part est utilisée par les êtres vivants, puis retourne à l’atmosphère (transpiration, respiration) ou aux milieux aquatiques.

Pour la gestion des déchets et de l’environnement, ce cycle rappelle que **ce que l’on rejette dans l’eau** (émissions) peut redevenir une **immission** pour d’autres usagers en aval. Les stations d’épuration et le traitement des boues d’épuration (parfois valorisées comme combustible en UIOM) font partie de la « boucle » humaine autour de ce cycle naturel.

#### Texte B — Cycle de la matière biologique

Dans la nature, les matières organiques (feuilles, restes végétaux, déjections…) sont décomposées par des micro-organismes. Les éléments nutritifs retournent au sol et nourrissent à nouveau les plantes : c’est un **cycle fermé**.

Les déchets verts et alimentaires peuvent rejoindre ce cycle via le **compostage** ou la **fermentation** (biogaz). Lorsqu’ils sont jetés avec les ordures mixtes et incinérés, on casse en partie ce circuit : on produit de l’énergie, mais on perd une partie du retour direct au sol. L’objectif de la pyramide des déchets (**éviter > réduire > valoriser**) est de rapprocher nos pratiques de ces cycles naturels.

### 3.2 Visualiser le cycle

Représente graphiquement le cycle choisi (schéma, dessin, numérique). **Réponse individuelle** — pas de solution unique.

---

## Mission 4 — Discussion de la situation de travail et d’apprentissage (STA)

Discute de la STA en plénière avec la classe et le·la formateur·trice. Notes : **réponse ouverte** (pas de solution unique).`;

const DEMO_106_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **M1** : mind map littering / recyclage (ouvert)
- **M2** : où vont tes déchets + **10 filières** (verre → électronique) · EnterSite **15 V3**
- **M3** : PDF cycles (eau **ou** matière bio) + schéma individuel
- **M4** : discussion STA (ouverte)`;

/** Exercices de maths Module 106 */
const DEMO_106_MATHS_FULL = `## Exercices de mathématiques — Module 106

Calcule chaque résultat, puis vérifie avec le bouton solution.

### Exercice 1 — Déchets totaux par personne

La Suisse produit environ **90 millions de tonnes** de déchets par an pour **8,637 millions** d’habitants. Quelle masse cela représente-t-il **par personne** (en kg) ?

:::solution
**10'420 kg/personne**

Calcul : 90 000 000 t ÷ 8,637 M hab = **10,420 t/hab** = **10'420 kg/personne**.
:::

### Exercice 2 — Déchets urbains totaux (kg)

Avec **8,637 millions** d’habitants et **716 kg** de déchets urbains par personne et par an, quelle est la masse totale de déchets urbains (en kg) ?

:::solution
**6'184'092'000 kg**

Calcul : 8,637 M × 716 = **6 184,092** (millions de kg) → **6'184'092'000 kg**.
:::

### Exercice 3 — Part recyclée

Sur **716 kg** de déchets urbains par personne, **53 %** sont recyclés. Quelle masse est recyclée (en kg) ?

:::solution
**379,48 kg**

Calcul : 716 × 0,53 = **379,48 kg**.
:::

### Exercice 4 — Coût des sacs poubelle

Si **716 kg** correspondent à environ un volume de sacs de **15 kg** chacun, et qu’un sac coûte **2 CHF**, quel est le coût annuel approximatif ?

:::solution
**95,46 CHF**

Nombre de sacs : 716 ÷ 15 = **47,733…** ≈ **47,73** sacs  
Coût : 47,73 × 2 = **95,46 CHF**.
:::

> **Contrôle rapide (footer corrigé)** : 95,46 · 10'420 · 6'184'092'000 · 379,48`;

const DEMO_106_MATHS_SUMMARY = `## Maths — Solutions
1. **10'420 kg/pers** (90 Mt ÷ 8,637 M)
2. **6'184'092'000 kg** (8,637 M × 716)
3. **379,48 kg** (716 × 53 %)
4. **95,46 CHF** (716÷15 × 2)`;

/** Vérification des acquis Module 106 */
const DEMO_106_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Thème : **Élimination des déchets CH**. Réponds d’abord sans regarder les solutions, puis révèle-les pour t’autocorriger.

### Question 1

Pourquoi l’élimination des déchets a-t-elle pris beaucoup d’importance ? Cite les raisons (enjeux + implications pour la logistique d’élimination d’une entreprise).

:::reponse
**Cinq enjeux principaux :**
1. Conscience écologique croissante
2. Pression pour des produits favorables à l’environnement
3. Protection de l’environnement comme facteur concurrentiel
4. Augmentation des coûts d’élimination
5. Renforcement de la réglementation

**Trois implications pour la logistique d’élimination :**
1. Développer une attitude positive et orientée vers l’avenir
2. Rechercher des solutions économiques
3. Présenter les plans et les résultats atteints
:::

### Question 2

Présente le tableau des types de décharges **A à E** (désignation / placement et exemples).

:::reponse
| Type | Placement / désignation | Exemples |
| --- | --- | --- |
| **A** | Excavation / déblais non pollués | Gravier, terre, sable |
| **B** | Matériaux inertes | Briques, tuiles, béton |
| **C** | Déchets inorganiques (souvent après traitement) | Terre polluée, balayures |
| **D** | Résidus d’incinération | Mâchefers / scories UIOM |
| **E** | Réacteur (fort potentiel de danger) | Isolation, amiante, asphalte |
:::

### Question 3

Quels sont les **trois** objectifs de l’incinération (UIOM) ?

:::reponse
1. **Réduction du volume (~90 %) et du poids (~75 %)**
2. **Réduction des émissions polluantes** (filtres, lavage des fumées, DeNOx…)
3. **Production d’énergie / chauffage urbain**
:::

### Question 4

Quelle est la « **voie royale** » de l’élimination des déchets ? Définis-la.

:::reponse
La **voie royale** = le **recyclage** : collecte, tri, traitement et valorisation des matières en circuit (quasi) fermé, pour obtenir des matières premières **secondaires**.
:::

### Question 5

Selon l’OFEV, quels sont les **trois** impacts du littering ? Quel ordre de grandeur économique cite-t-on ?

:::reponse
1. Impact **esthétique**
2. Impact **écologique**
3. Impact **économique** — nettoyage ≈ **200 millions CHF/an**
:::`;

const DEMO_106_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. 5 enjeux + 3 implications logistique d’élimination
2. Décharges **A→E** (désignation + exemples)
3. Volume/poids · émissions · énergie/chaleur urbaine
4. Voie royale = **recyclage** (MP secondaires)
5. Littering : esthétique · écologique · économique (~200 MCHF)`;

/** Contenu Module 107 — Catégories de déchets CH */
const DEMO_107_THEORIE_FULL = `## 7. Les catégories de déchets CH

Le module 106 a montré qu'en Suisse, **80 à 90 millions de tonnes** de déchets sont générées chaque année. Environ **deux tiers** sont des matériaux d'excavation et de déblais. Comme ceux-ci peuvent être en grande partie réutilisés directement, ils ne sont pas considérés comme des déchets pour certaines statistiques.

Si l'on ne tient pas compte des matériaux d'excavation et de déblais, **24 millions de tonnes** de déchets sont produits chaque année en Suisse (~**2,5 tonnes par habitant**). L'OFEV classe les déchets en **quatre catégories**, avec des sous-catégories.

Sur ces 24 Mt :
- ~**65 %** déchets de chantier
- ~**5,7 Mt** déchets urbains (souvent via UIOM)
- ~**2,4 Mt** déchets spéciaux
- ~**0,2 Mt** boues d'épuration

### Les quatre catégories principales

**Déchets de chantier**
En Suisse, de grandes quantités sont stockées dans une pluralité de petites décharges parfois peu appropriées. On distingue notamment : déchets encombrants de chantier (tri), gravats, déchets d'exploitation, déchets industriels et artisanaux. Les déchets industriels/artisanaux comprennent les déchets de production qui ne sont ni spéciaux ni urbains (ex. certaines scories métalliques, sable de fonderie, boues papetières). Leur élimination diffère des urbains (quantités, nocivité).

**Déchets urbains**
Déchets des ménages et déchets de composition comparable. Incluent déchets mixtes (ordures), encombrants et objets destinés au tri — **partie gérée par les services publics** (communes / associations intercommunales) : compostables, sacs poubelle, verre, métaux, plastique, etc.

**Déchets spéciaux**
Contrôlés par les cantons et au niveau fédéral via l'**OMoD** (ordonnance sur les mouvements de déchets). Recyclage écologique « traditionnel » souvent impossible ; grande diversité → traitements spécifiques. Majoritairement industrie/artisanat : boues organiques, matières inorganiques, acides/bases chargés de métaux lourds, piles, terres polluées, adjuvants de filtration, résidus chimiques, etc.

**Boues d'épuration**
Issues de l'assainissement des eaux usées. Matières solides minérales et organiques ; teneur en eau **90 à 99 %**.

### 7.1 L'inventaire des déchets (sélection)

**Bois usagé** — selon teneur en substances nocives :
- bois naturel (forêt)
- poussières / sciures (menuiseries)
- meubles vernis ou traités
- bois imprégné

Seul le bois naturel non traité peut être incinéré à feu ouvert / sans filtre. Bois traités et agglomérés → **UIOM**. Petites quantités ménages → encombrants.

**Pneus usagés** — rechapage si possible ; sinon souvent **cimenteries** (énergie). Dépôt en décharge **interdit depuis 2000**.

**Emballages / canettes aluminium** — refonte ≈ **95 %** d'énergie en moins vs bauxite. Presses / points de collecte ; grande valeur marchande.

**Matière d'excavation** — polluée vs non polluée. Non polluée → décharges / partiellement gravier. Polluée (« contaminée ») → traitements selon degré (ex. Kölliken : EPI intégrale).

**Piles et batteries** — obligation de report aux points de vente / collecte. Reprise gratuite (sauf batteries > 5 kg). Contiennent fer, Ni, Mn, Zn ; parfois Cd, Pb (Hg autrefois). **TEA** dans le prix.

**Déchets biogènes** — compostage / fermentation préférables à l'UIOM. ~1,3 Mt/an ; une part encore dans les ordures → UIOM.

**Appareils électriques et électroniques** — reprise gratuite (**OREA**). Métaux recyclables + métaux lourds. Collecte sélective décharge les urbains / UIOM.

**Emballages en verre** — collecte triée (blanc / brun / vert) ; fusion → nouveaux contenants ; reste → construction / isolation.

**Boues d'épuration** — ~4 Mt liquides / an (~200 000 t matière sèche). Contiennent engrais (P, N) mais aussi métaux lourds / pathogènes. **Depuis 2003 : interdiction d'épandage agricole.**

**Appareils réfrigérants** — avant 1994 : fréons (couche d'ozone). Sous **OREA** ; dépôts gratuits.

**Plastiques mixtes** — hors PET, encore beaucoup d'incinération UIOM ; fort potentiel de recyclage.

**Lampes fluorescentes** — mercure / métaux lourds ; reprise gratuite (SENS). Ampoules à incandescence / halogènes → déchets urbains.

**Déchets médicaux** — crématoriums ou UIOM, conteneurs spéciaux ; ordonnance spécifique.

**Métaux** — ferreux (magnétiques), non ferreux (Cu, laiton), gris (Pb, Zn, Sn, Al), nobles (Au, Ag). Points communaux + récupérateurs.

**Meubles** — encombrants / reprise magasins / seconde main.

**Papier et carton** — collecte bord de route ; tri qualité ; import/export selon besoins des usines.

**Bouteilles PET** — collecte par type (> 26 000 points). Pollution si PE lait / PET huile-vinaigre mélangés.

**Acier émaillé / fer blanc** — ~5 000 points ; ~12 000 t/an ; taux ~79 %.

**Textiles et chaussures** — ~40 000 t collectées/an (souvent œuvres) ; autant encore dans les ordures.

**Emballages** — stratégie CH d'optimisation (> 20 ans) : légers, recyclables ou éliminables avec urbains.

### 7.2 Les dispositions légales

Sans règles : risques environnementaux, qualité de vie, tourisme. La gestion des déchets est omniprésente dans la législation.

#### 7.2.1 Constitution fédérale (Cst.)

**Art. 74 Cst. :** la Confédération légifère sur la protection de l'être humain et de son environnement naturel contre les atteintes nuisibles ou incommodantes.

Hiérarchie : Constitution → lois → ordonnances (modalités d'application).

#### 7.2.2 Loi sur la protection de l'environnement (LPE)

Adoptée en **1983** (après l'ancrage constitutionnel de 1971). Régit notamment :
- limitation et élimination des déchets
- planification et obligation d'éliminer
- financement
- assainissement des sites pollués

**Remarque :** la LPE met l'accent sur la **limitation** de la pollution par les déchets.

#### 7.2.3 Ordonnances clés

Basées sur la LPE et la LEaux :

**OTD** (traitement des déchets) — réduction/traitement, décharges, dépôts provisoires, UIOM, compostage.

**OMoD** (mouvements de déchets) — mouvements internes CH (remise, réception, transport de spéciaux), transfrontaliers, exécution. Concerne déchets spéciaux et déchets soumis à contrôle.

**OREA** — restitution, reprise et élimination des appareils électriques/électroniques (loisirs, bureautique, ICT, électroménager, luminaires, sources lumineuses, outils, sport, jouets…).

### 7.3 Les déchets spéciaux

#### 7.3.1 Définition

Déchets qui, par leurs propriétés chimiques ou physiques, sont **nocifs** pour l'environnement ou l'homme et exigent un **traitement particulier**. Pas avec les urbains. Ex. : peintures, colles, solvants, acides, chimie, détergents, piles, huiles/graisses, sols pollués, séparateurs d'hydrocarbures, huiles moteur, batteries auto, filtrats, émulsions, eaux/boues métalliques…

~**10 %** de la quantité totale de déchets (OFEV 2016) ; surtout industrie.

#### 7.3.2 Traitement spécial

Manutention et traitement hautement professionnels. Sites, installations et méthodes réglementés. Seules les personnes / entreprises avec **autorisation cantonale** peuvent accepter des déchets spéciaux. Classification labo (toxicité/danger) → tri, traitement, emballage, stockage temporaire → recyclage ou traitement énergétique / physico-chimique.

#### 7.3.3 Danger potentiel

Mauvaise manutention → infiltration eau / sol / air. **Paracelse :** « Tout est poison… la dose seule fait que quelque chose n'est pas un poison. » Conservation correcte + protection des influences extérieures réduisent le danger. En cas de doute : traiter comme dangereux.

#### 7.3.4 Sept précautions élémentaires

**Manutention**
1. Ne pas ouvrir le contenant
2. Précaution maximale (ne pas renverser, éviter casse/poussière)
3. Pas à mains nues ; gants si contact ; se laver les mains ; lunettes si projections

**Stockage**
4. Accès contrôlé (verrouillable)
5. Ne pas mélanger substances inconnues
6. À l'abri des intempéries
7. Contenants étanches / bacs de rétention

### 7.4 Élimination des déchets spéciaux

Responsabilité de spécialistes. Particuliers → point de vente. Entreprises → fournisseur / repreneur. Grandes quantités : enregistrement banque de données **OFEV**. Le remettant ne remet qu'à un **repreneur autorisé** (autorisation cantonale) et doit **vérifier** cette autorisation.`;

const DEMO_107_THEORIE_SUMMARY = `## À retenir — Module 107

### Volumes (hors excavation/déblais)
**~24 Mt/an** · ~2,5 t/habitant  
Chantier ~65 % · Urbains ~5,7 Mt · Spéciaux ~2,4 Mt · Boues ~0,2 Mt

### 4 catégories OFEV
1. **Chantier** (gravats, industriels/artisanaux…)
2. **Urbains** (ménages + comparables, services publics)
3. **Spéciaux** (OMoD, traitements spécifiques)
4. **Boues d'épuration** (90–99 % eau ; plus d'épandage depuis 2003)

### Inventaire (clés)
Bois traité → UIOM · Pneus : pas décharge (2000) · Alu : −95 % énergie · Piles : TEA + reprise · Électro : OREA · Verre / PET / fer blanc / textiles / papier…

### Droit
**Cst. 74** → **LPE (1983)** → **OTD · OMoD · OREA**

### Déchets spéciaux
Nocifs → traitement particulier · ~10 % · autorisation cantonale · labo  
Paracelse = dose · 7 précautions (manutention + stockage)  
Remise uniquement à repreneur **autorisé** (vérifier)`;

const DEMO_107_APERCU_FULL = `## Aperçu du module 107

Ce module détaille les **catégories de déchets en Suisse**, l'inventaire des flux, le cadre légal et les déchets spéciaux.

### Vous allez découvrir
1. Les 4 catégories OFEV et ordres de grandeur
2. Un inventaire des principaux flux (bois, pneus, alu, piles, électro…)
3. Cst., LPE, OTD, OMoD, OREA
4. Déchets spéciaux : définition, dangers, précautions, élimination

### Source
EnterSite — Logistics by ASFL / SVBL · OFEV`;

const DEMO_107_APERCU_SUMMARY = `## Aperçu — Module 107
- 4 catégories + inventaire
- Cadre légal CH
- Déchets spéciaux et précautions`;

const DEMO_107_OBJECTIFS_FULL = `## Objectifs du module 107

À l'issue de ce module, l'apprenti·e est capable de :

- Distinguer les **quatre catégories** de déchets OFEV et citer des ordres de grandeur
- Attribuer des exemples concrets (bois, pneus, piles, électro…) aux bonnes filières
- Situer **Cst., LPE, OTD, OMoD, OREA**
- Définir un déchet spécial et expliquer pourquoi il exige un traitement particulier
- Appliquer les **précautions** de manutention/stockage et le principe du repreneur autorisé`;

const DEMO_107_OBJECTIFS_SUMMARY = `## Objectifs
- 4 catégories + inventaire
- LPE / OTD / OMoD / OREA
- Spéciaux : danger, précautions, autorisation`;

/** Glossaire Module 107 */
const DEMO_107_GLOSSAIRE_FULL = `## Glossaire — Module 107

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Déchets urbains | | Déchets des **ménages** et déchets de composition comparable provenant d'entreprises, d'administrations, etc. Incluent ordures mixtes, encombrants et fractions destinées au tri (verre, papier, métaux, compostables…). Leur collecte et élimination sont en grande partie gérées par les **services publics** (communes / associations intercommunales). |
| Déchets spéciaux | | Déchets qui, par leurs propriétés chimiques ou physiques, sont **nocifs** pour l'environnement ou l'homme et exigent un **traitement particulier** (pas avec les urbains). Contrôlés via l'**OMoD** ; exemples : peintures, colles, solvants, piles, acides, huiles, sols pollués… Remise uniquement à un **repreneur autorisé**. |
| Boues d'épuration | | Matières solides (minérales et organiques) issues de l'**assainissement des eaux usées**. Teneur en eau typique **90 à 99 %**. Contiennent des éléments fertilisants mais aussi métaux lourds / pathogènes ; **épandage agricole interdit depuis 2003** en Suisse. |`;

const DEMO_107_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **Déchets urbains** : ménages + comparables · services publics
- **Déchets spéciaux** : nocifs · OMoD · repreneur autorisé
- **Boues d'épuration** : 90–99 % eau · plus d'épandage (2003)`;

/** Mises en situation Module 107 */
const DEMO_107_SITUATION_FULL = `## Mises en situation — Module 107

Contexte : tu travailles chez **EnterSite AG**. Les missions portent sur les **catégories de déchets CH** et surtout les **déchets spéciaux**. Rédige d'abord ta propre réponse, puis utilise le bouton pour afficher ou masquer les solutions / aides proposées.

### Vue d'ensemble des missions
1. Définition des déchets spéciaux
2. Quotidien privé / professionnel
3. Responsabilités
4. Statistiques
5. Discussion STA

> **Astuce EnterSite** : commence la visite virtuelle dans la salle **16 V2** — LearningApp. Plus tard : salle **11** (LearningApp). Lien : [Vers le site EnterSite](#entersite-placeholder) (URL à compléter lorsque disponible).

---

## Mission 1 — Définition des déchets spéciaux

Qu'est-ce qu'un **déchet spécial** ? Quelles **caractéristiques / propriétés** le distinguent d'un déchet de la filière normale ?

:::reponse
**Un déchet spécial** est un déchet qui, en raison de ses propriétés chimiques ou physiques, est **nocif** pour l'environnement ou pour l'homme et **ne peut pas** être éliminé via la filière normale (urbains / ordures ménagères). Il exige un **traitement particulier**.

**Caractéristiques / propriétés typiques :**
- **explosives**
- **inflammables**
- **corrosives**
- **toxiques**
- (aussi : comburantes, écotoxiques, contaminées, etc.)

Exemples : peintures, colles, solvants, acides, piles, huiles, sols pollués…
:::

---

## Mission 2 — Quotidien privé / professionnel

Quels **déchets spéciaux** rencontres-tu dans le quotidien (ménage ou entreprise) ?

:::reponse
Exemples courants : **piles**, **solvants**, **colles**, **médicaments**, **peintures**, ainsi que huiles moteur, batteries, produits de nettoyage agressifs, aérosols, etc.
:::

### 2.1 Privé vs professionnel

Compare tes déchets spéciaux **à la maison** et **au travail** (types, quantités, filières de reprise). **Réponse individuelle** — pas de solution unique.

---

## Mission 3 — Responsabilités

Qui est **responsable** de l'élimination correcte des déchets spéciaux (particulier, entreprise, remettant, repreneur) ? Note tes réflexions.

**Réponse individuelle** — pas de solution unique. (Rappel théorie : le remettant ne remet qu'à un **repreneur autorisé** et doit **vérifier** l'autorisation.)

### 3.1 Convention de Bâle

Que règle la **Convention de Bâle** ? Pourquoi est-elle importante pour les déchets spéciaux ?

:::reponse
La **Convention de Bâle** (1989) est un accord international sur le **contrôle des mouvements transfrontières** de déchets dangereux et de leur élimination.

Elle vise notamment à :
- **réduire** la production de déchets dangereux
- traiter / éliminer les déchets **aussi près que possible** du lieu de production
- **empêcher** les transferts incontrôlés (notamment vers des pays moins équipés)
- exiger un **consentement préalable** (notification) avant exportation / importation

Elle complète le cadre national (OMoD, etc.) pour les flux **internationaux** de déchets spéciaux.
:::

### 3.2 Cas de ton entreprise

Comment ton entreprise formatrice organise-t-elle la reprise / l'élimination des déchets spéciaux ? **Réponse individuelle**.

---

## Mission 4 — Statistiques (déchets spéciaux)

Travaille sur les séries statistiques (quantités, parts Suisse / étranger, pays de destination). Calcule et interprète.

### 4.1 Quantités 2000 vs 2020

Compare les totaux et les parts **traitées en Suisse / à l'étranger**. Quelle évolution observes-tu ?

:::reponse
| Année | Quantité totale | Part CH | Part étranger |
| --- | --- | --- | --- |
| **2000** | **1'125'600 t** | **87,89 %** | **12,11 %** |
| **2020** | **1'847'200 t** | **77,85 %** | **22,15 %** |

**Évolution :** la quantité totale **augmente** fortement (≈ +64 %). La part traitée **à l'étranger** croît (≈ 12 % → 22 %) : signe de **mondialisation** des filières d'élimination / de recyclage des déchets spéciaux.
:::

### 4.2 Évolution 2007–2016 et groupe 2020

Décris la courbe et le principal groupe de déchets spéciaux en 2020.

:::reponse
- **2007–2016 :** **hausse** marquée des quantités, puis **légère baisse** ensuite.
- **Groupe dominant 2020 :** **résidus de traitement des boues** (sous-produits / résidus liés au traitement des boues d'épuration et assimilés).
:::

### 4.3 Exportations par pays (+330,99 %)

Interprète l'évolution des destinations (+330,99 %) et le tableau pays.

:::reponse
**Évolution globale des exports :** **+330,99 %** (forte internationalisation).

| Pays | Tendance |
| --- | --- |
| **NL** (Pays-Bas) | **↑** en hausse |
| **DE** (Allemagne) | **↓** en baisse |
| **FR / IT / BE / ES** | **stables** |
| **AT** (Autriche) | **↑** en hausse |

Interprétation : concentration / redistribution des flux vers certains hubs européens (NL, AT…), tandis que d'autres destinations (DE) reculent.
:::

---

## Mission 5 — Discussion de la situation de travail et d'apprentissage (STA)

Discute de la STA en plénière avec la classe et le·la formateur·trice. Notes : **réponse ouverte** (pas de solution unique).`;

const DEMO_107_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **EnterSite** : salle **16 V2** puis **11** (LearningApp)
- **M1** : déchet spécial = hors filière normale (explosif / inflammable / corrosif / toxique…)
- **M2** : piles, solvants, colles, médicaments, peintures… · 2.1 individuel
- **M3** : responsabilités · **Convention de Bâle** · cas entreprise
- **M4** : 2000/2020 · mondialisation · résidus boues · exports pays
- **M5** : discussion STA (ouverte)`;

/** Exercices de maths Module 107 */
const DEMO_107_MATHS_FULL = `## Exercices de mathématiques — Module 107

Calcule chaque résultat, puis vérifie avec le bouton solution.

### Exercice 1 — Recyclage de l'aluminium (énergie)

La production d'**1 kg** d'aluminium à partir de bauxite consomme environ **16 kWh**. Le recyclage permet d'économiser **95 %** de cette énergie. Quelle consommation reste-t-il pour **1 kg** d'aluminium recyclé (en kWh) ?

:::solution
**0,8 kWh**

Calcul : 16 × 0,05 = **0,8 kWh**  
(95 % économisés → il reste 5 % de 16 kWh.)
:::

### Exercice 2 — Valeur de reprise (aluminium)

Tu remets **16 000 kg** d'aluminium à un repreneur à **21,2 centimes/kg**. Quel montant total obtiens-tu (en CHF) ?

:::solution
**3'392 CHF**

Calcul : 16 000 × 0,212 = **3'392 CHF**.
:::

### Exercice 3 — Bénéfice net

La vente de ces **16 000 kg** rapporte en réalité **7 000 CHF** (autre canal / prix marché). Si les coûts / équivalent reprise de référence valent **3'392 CHF**, quel est le **bénéfice** ?

:::solution
**3'608 CHF**

Calcul : 7 000 − 3'392 = **3'608 CHF**.
:::

### Exercice 4 — Taux de collecte PET

Sur **44 479 t** de bouteilles PET mises sur le marché, **35 339 t** sont collectées. Quel est le **taux de collecte** (en %, arrondi à 2 décimales) ?

:::solution
**79,45 %**

Calcul : 35 339 ÷ 44 479 ≈ **0,7945** → **79,45 %**.
:::

> **Contrôle rapide (footer corrigé)** : 0,8 · 3'608 · 3'392 · 79,45`;

const DEMO_107_MATHS_SUMMARY = `## Maths — Solutions
1. **0,8 kWh** (16 × 0,05)
2. **3'392 CHF** (16 000 × 0,212)
3. **3'608 CHF** (7 000 − 3'392)
4. **79,45 %** (35 339 ÷ 44 479)`;

/** Vérification des acquis Module 107 */
const DEMO_107_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Thème : **Enlèvement / catégories de déchets CH**. Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

Quelles sont les **quatre catégories** de déchets selon l'**OFEV** (hors matériaux d'excavation/déblais dans certaines stats) ?

:::reponse
1. **Déchets de construction / chantier**
2. **Déchets urbains**
3. **Déchets spéciaux**
4. **Boues d'épuration**
:::

### Question 2

Quelle norme de rang supérieur ancre la protection de l'environnement (base des lois et ordonnances sur les déchets) ?

:::reponse
La **Constitution fédérale** — notamment l'**art. 74 Cst.** : la Confédération légifère sur la protection de l'être humain et de son environnement naturel contre les atteintes nuisibles ou incommodantes.

Hiérarchie : **Constitution → lois → ordonnances**.
:::

### Question 3

Cite les **quatre** grands points de la **LPE** relatifs aux déchets.

:::reponse
1. **Limitation** et **élimination** des déchets
2. **Planification** et **obligation** d'éliminer
3. **Financement**
4. **Assainissement** des sites pollués
:::

### Question 4

Quelles dispositions principales portent l'**OTD** et l'**OMoD** ?

:::reponse
**OTD** (ordonnance sur le traitement des déchets) : réduction / traitement des déchets, **décharges**, dépôts provisoires, **UIOM**, compostage, etc.

**OMoD** (ordonnance sur les mouvements de déchets) : mouvements **internes** (remise, réception, transport de spéciaux) et **transfrontaliers**, exécution. Concerne les déchets **spéciaux** et les déchets **soumis à contrôle**.
:::

### Question 5

Quelles sont les **sept mesures de précaution** pour les déchets spéciaux (manutention 1–3, stockage 4–7) ?

:::reponse
**Manutention**
1. Ne **pas ouvrir** le contenant
2. **Précaution maximale** (ne pas renverser, éviter casse / poussière)
3. Pas à **mains nues** ; gants si contact ; se laver les mains ; lunettes si projections

**Stockage**
4. **Accès contrôlé** (verrouillable)
5. Ne **pas mélanger** de substances inconnues
6. À l'**abri des intempéries**
7. Contenants **étanches** / **bacs de rétention**
:::`;

const DEMO_107_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. Chantier · Urbains · Spéciaux · Boues
2. **Constitution fédérale** (art. 74 Cst.)
3. LPE : limitation/élimination · planification/obligation · financement · assainissement
4. **OTD** (traitement / décharges / UIOM…) · **OMoD** (mouvements spéciaux / contrôle)
5. 7 précautions : manutention 1–3 · stockage 4–7`;

/** Contenu Module 108 — Élimination des déchets global */
const DEMO_108_THEORIE_FULL = `## 8. L'élimination des déchets global

### 8.1 Les systèmes de management environnemental (SME)

Un **système de management environnemental (SME)** fait partie intégrante de l'ensemble du système de management d'une entreprise. Il s'intéresse à la gestion de l'entreprise dans une optique environnementale. L'**OFEV** encourage le développement de technologies favorables à l'environnement et collabore avec entreprises, organisations et instituts.

Les SME permettent une intégration structurée et globale des objectifs environnementaux dans la gestion. Sans constituer une « marque d'écologie », ils indiquent que les questions environnementales sont ancrées dans les processus et les structures, et que des réponses optimisées sont recherchées en permanence. Pour l'OFEV, un SME est une clé du **développement économique durable**. Sa mise en œuvre exige des collaborateurs compétents à tous les niveaux.

#### 8.1.1 Contenu d'un SME

Une entreprise avec un SME s'engage à améliorer sa performance environnementale. Elle doit :

- s'identifier par rapport aux différentes atteintes à l'environnement
- s'engager à respecter en permanence les directives environnementales
- définir ses propres objectifs et programmes environnementaux
- déterminer la structure organisationnelle et les moyens pour atteindre ses objectifs
- procéder régulièrement à des **audits environnementaux**
- publier un **rapport** sur l'environnement et rendre compte de la performance réalisée

#### 8.1.2 Avantages d'un SME

**Avantages internes**
- rationalisation, diminution des coûts
- respect des lois, sécurité juridique
- innovations technologiques, prévention des atteintes
- motivation des collaborateurs

**Avantages externes**
- compétitivité accrue, avantage concurrentiel
- meilleure image (clients, public)
- meilleures relations avec les autorités
- davantage de transparence (actionnaires, banques, assurances)

#### 8.1.3 Certification — ISO 14001

Depuis **1996**, la norme **ISO 14001** permet de certifier les SME. Elle définit des critères mondiaux. La certification renforce la confiance (clients, fournisseurs, collaborateurs, autorités, investisseurs, société) et prouve l'intégration d'un comportement écologique dans les processus.

Avantages liés à la gestion environnementale durable :
- protection de l'environnement plus systématique
- risques et pollution minimisés
- prise de conscience des collaborateurs
- compétitivité et image améliorées
- présentation possible dans un rapport environnement / développement durable

Les informations doivent être visibles, notamment dans le rapport annuel.

#### 8.1.4 ISO 20121 — grandes manifestations

La norme **ISO 20121** a fait ses preuves lors des **Jeux olympiques de Londres 2012**. Elle vise le développement durable dans l'événementiel (organisateurs, visiteurs, fournisseurs) et optimise le processus de gestion.

**Exemple JO 2012 :** les vestes des ~70 000 bénévoles Adidas étaient fabriquées à partir de **matériaux recyclés** (ex. vieilles bouteilles PET).

### 8.2 Les problèmes environnementaux mondiaux

Même avec de bons investissements en Suisse, les changements environnementaux mondiaux exigent une collaboration internationale. Huit problèmes majeurs :

#### 8.2.1 Changement climatique
Refroidissement ou réchauffement ; aujourd'hui surtout **réchauffement**. Depuis les années 1980, hausse de la température moyenne (environ 0,2 °C → près de 1 °C). Conséquences : vagues de chaleur, tempêtes, inondations.

Causes notamment :
- déforestation tropicale → libération de CO₂ (effet de serre)
- combustion d'énergies fossiles (charbon, pétrole…)
- méthane des élevages (ex. vaches)
- mobilité (voitures, bateaux, avions)

#### 8.2.2 Pénurie d'eau
Suisse : ~**120 litres/habitant/jour**. Sur Terre : ~**97 %** eau salée, ~**2 %** gelée, ~**1 %** douce utilisable. Causes : modes de vie + pollution des rivières.

#### 8.2.3 Pollution de l'air
Gaz d'échappement industrie / voitures / avions. Grandes villes davantage touchées. OMS (2012) : ~**8 millions** de décès liés à la pollution de l'air.

#### 8.2.4 Érosion des sols
Sols = stockage de nutriments, eau et **plus de carbone que toutes les forêts**. Comportement humain → sols plus stériles ; produits non dégradables hors cycle naturel. ~**1 %** des sols perdus chaque année (constructions, autres usages, pollution).

#### 8.2.5 Surpopulation
Pas un problème environnemental « direct », mais un problème de **ressources**. Population ~2,77 Md (1955) → ~7,79 Md (2020) ; âge moyen 23 → 31. Plus d'habitants = plus de biens, énergie, eau, terres arables → déforestation → climat.

#### 8.2.6 Déforestation
Global Forest Watch : ~**30 millions d'hectares**/an détruits. Conséquences : climat, extinction d'espèces, érosion. Liens avec prospérité, démographie, produits (ex. huile de palme).

#### 8.2.7 Extinction des espèces
Habitat réduit / chasse. UICN : sur ~90 000 espèces évaluées, ~**25 800** menacées. Causes liées au mode de vie humain (érosion, déforestation, déchets…).

#### 8.2.8 Déchets plastiques
Statistiques : l'équivalent d'un camion de plastique dans la mer **chaque minute** ; ~**8 Mt**/an directement en mer + ~**32 Mt** dans l'environnement (voies détournées vers les océans). Plastique non dégradable pendant des siècles (bouteille ~**500 ans** → microplastiques). Cinq grands **vortex** de déchets ; Pacifique Nord estimé entre 700 000 et > 15 000 000 km².

### 8.3 Agenda 2030 — objectifs de développement durable

Le **25 septembre 2015**, l'ONU a adopté l'**Agenda 2030** : **17 objectifs** et **169 sous-objectifs** (suite des Objectifs du Millénaire).

Les 17 ODD (résumé) :
1. Éliminer la pauvreté
2. Éliminer la faim / agriculture durable
3. Vie saine et bien-être
4. Éducation de qualité
5. Égalité des sexes
6. Eau et assainissement
7. Énergie fiable et durable
8. Croissance / emploi décent
9. Infrastructure / industrialisation / innovation
10. Réduire les inégalités
11. Villes durables
12. Consommation et production durables
13. Lutte contre les changements climatiques
14. Océans et ressources marines
15. Écosystèmes terrestres / forêts / biodiversité
16. Paix, justice, institutions
17. Partenariat mondial

La coopération entre États est décisive : ce n'est qu'ensemble que de tels objectifs pourront être atteints.`;

const DEMO_108_THEORIE_SUMMARY = `## À retenir — Module 108

### SME
Management d'entreprise orienté environnement · clé du développement durable (OFEV)

**Exigences :** impacts · conformité · objectifs/programmes · organisation · audits · rapport

**Avantages :** coûts/légal/innovation/motivation (interne) · compétitivité/image/autorités/transparence (externe)

**ISO 14001** (depuis 1996) — certification SME mondiale  
**ISO 20121** — événements durables (ex. JO Londres 2012, tenues PET recyclé)

### 8 problèmes mondiaux
1. Climat (CO₂, méthane, mobilité…)
2. Eau (~1 % douce utilisable)
3. Air (~8 M décès OMS 2012)
4. Érosion des sols (~1 %/an)
5. Surpopulation → pression ressources
6. Déforestation (~30 M ha/an)
7. Extinction d'espèces (~25 800 menacées / 90 000)
8. Plastique océanique (~8 Mt/an ; vortex ; ~500 ans/bouteille)

### Agenda 2030 (ONU, 2015)
**17 ODD** · 169 cibles · coopération internationale indispensable  
Liens logistique : production/consommation durables, climat, océans, villes…`;

const DEMO_108_APERCU_FULL = `## Aperçu du module 108

Ce module élargit l'élimination des déchets à l'échelle **globale** : SME, problèmes environnementaux mondiaux et Agenda 2030.

### Vous allez découvrir
1. Contenu, avantages et certification des SME (ISO 14001 / 20121)
2. Huit grands problèmes environnementaux mondiaux
3. Les 17 Objectifs de développement durable de l'Agenda 2030

### Source
EnterSite — Logistics by ASFL / SVBL · OFEV · ONU`;

const DEMO_108_APERCU_SUMMARY = `## Aperçu — Module 108
- SME + ISO 14001 / 20121
- 8 problèmes mondiaux
- Agenda 2030 (17 ODD)`;

const DEMO_108_OBJECTIFS_FULL = `## Objectifs du module 108

À l'issue de ce module, l'apprenti·e est capable de :

- Expliquer ce qu'est un **SME** et ce qu'il exige d'une entreprise
- Citer avantages internes/externes et le rôle d'**ISO 14001** / **ISO 20121**
- Décrire les **huit problèmes** environnementaux mondiaux et leurs liens avec la logistique / consommation
- Situer l'**Agenda 2030** et les 17 ODD`;

const DEMO_108_OBJECTIFS_SUMMARY = `## Objectifs
- SME + ISO
- 8 problèmes mondiaux
- Agenda 2030 / 17 ODD`;

/** Glossaire Module 108 */
const DEMO_108_GLOSSAIRE_FULL = `## Glossaire — Module 108

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Système de management environnementale (SME) | SME | Partie du système de management d’une entreprise orientée environnement : intègre objectifs, structures et processus pour améliorer en permanence la performance environnementale (OFEV : clé du développement économique durable). |
| Norme ISO | International Organization for Standardization | Référentiel international définissant des critères communs. En environnement, **ISO 14001** (depuis 1996) certifie les SME ; **ISO 20121** cible le développement durable des grandes manifestations. |`;

const DEMO_108_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **SME** : Système de management environnementale (orth. source) — management orienté environnement
- **Norme ISO** : notamment **ISO 14001** (SME) · **ISO 20121** (événements)`;

/** Mises en situation Module 108 */
const DEMO_108_SITUATION_FULL = `## Mises en situation — Module 108

Contexte : tu travailles chez **EnterSite AG**. Les missions portent sur l’**environnement global** (actualité écologique, situations concrètes, présentation, STA). Rédige d’abord ta propre réponse, puis utilise le bouton pour afficher ou masquer les aides proposées.

### Vue d’ensemble des missions
1. Recherche actualité écologie
2. Décrire situation
3. Présentation
4. Discussion STA

> **Astuce EnterSite** : suis la visite virtuelle dans la salle **9 V2** — nettoyage des océans. Plus loin : salle **5** — jeu CIE. Lien : [Vers le site EnterSite](#entersite-placeholder) (URL à compléter lorsque disponible).

---

## Mission 1 — Recherche actualité écologie

Cherche une **actualité** récente liée à l’écologie / à l’environnement (presse, radio, web, entreprise…). Prépare un document Word (**Century Gothic**, **1 page A4**) et une courte présentation orale (**3 à 5 min**).

Consignes de forme (rappel EnterSite) :
- Police **Century Gothic**
- **1 page A4** maximum
- Présentation **3–5 minutes**

:::reponse
**Réponse individuelle** — pas de solution unique.

**Aide-mémoire structure Word (1 page A4) :**
1. Titre + source / date de l’actualité
2. Faits essentiels (quoi, où, quand, qui)
3. Lien avec l’environnement / la logistique / les déchets
4. Ton avis / question ouverte pour la classe
:::

---

## Mission 2 — Décrire situation

Décris une **situation concrète** (entreprise formatrice, quotidien, actualité) illustrant un enjeu environnemental mondial (climat, eau, air, sols, biodiversité, plastique, etc.).

Même format : Word **Century Gothic**, **1 page A4**, présentation **3–5 min**.

:::reponse
**Réponse individuelle** — pas de solution unique.

**Pistes :** impact observé · acteurs concernés · mesures possibles · lien éventuel avec un SME / ODD.
:::

---

## Mission 3 — Présentation

Présente ton travail (Mission 1 et/ou 2) à la classe selon les consignes du·de la formateur·trice (**3–5 min**). Notes de présentation : **réponse individuelle**.

:::reponse
**Réponse individuelle** — pas de solution unique.

Checklist orale : intro claire · 2–3 faits · lien module 108 · conclusion / question.
:::

---

## Mission 4 — Discussion de la situation de travail et d’apprentissage (STA)

Discute de la STA en plénière avec la classe et le·la formateur·trice. Notes ouvertes autorisées.

:::reponse
**Réponse ouverte** — notes individuelles / de classe (pas de solution unique).
:::`;

const DEMO_108_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **EnterSite** : salle **9 V2** (nettoyage océans) · salle **5** (jeu CIE)
- **M1–M3** : Word Century Gothic · 1 page A4 · oral 3–5 min (ouvert / individuel)
- **M4** : discussion STA (notes ouvertes)`;

/** Exercices de maths Module 108 — Festival Interlaken */
const DEMO_108_MATHS_FULL = `## Exercices de mathématiques — Module 108

Contexte : **Festival Interlaken** — **88 t** de déchets pour **25 000** personnes. Calcule chaque résultat, puis vérifie avec le bouton solution.

### Exercice 1 — Déchets par personne

Combien de **kg de déchets par personne** produit le festival ?

:::solution
**3,52 kg/personne**

88 t = **88 000 kg**  
88 000 ÷ 25 000 = **3,52 kg/personne**
:::

### Exercice 2 — Mégots

Les **mégots** représentent **0,8 %** des 88 t. Quelle masse de mégots (en kg) ?

:::solution
**704 kg**

88 000 × 0,8 % = 88 000 × 0,008 = **704 kg**
:::

### Exercice 3 — Plastique

Le **plastique** représente **11,6 %** des 88 t. Quelle masse (en kg) ?

:::solution
**10'208 kg**

88 000 × 11,6 % = 88 000 × 0,116 = **10'208 kg**
:::

### Exercice 4 — Part recyclée

**43 %** des 88 t sont **recyclés**. Quelle masse recyclée (en kg) ?

:::solution
**37'840 kg**

88 000 × 43 % = 88 000 × 0,43 = **37'840 kg**
:::

> **Contrôle rapide (footer corrigé)** : 3,52 · 704 · 10'208 · 37'840`;

const DEMO_108_MATHS_SUMMARY = `## Maths — Solutions (Festival Interlaken, 88 t / 25 000 pers.)
1. **3,52 kg/personne**
2. **704 kg** mégots (0,8 %)
3. **10'208 kg** plastique (11,6 %)
4. **37'840 kg** recyclés (43 %)`;

/** Vérification des acquis Module 108 */
const DEMO_108_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Thème : **Environnement global**. Réponds d’abord sans regarder les solutions, puis révèle-les pour t’autocorriger.

### Question 1

Quelles sont les **six** exigences d’une entreprise qui met en place un **SME** ?

:::reponse
1. S’**identifier** par rapport aux différentes atteintes à l’environnement
2. S’engager à **respecter en permanence** les directives environnementales
3. Définir ses propres **objectifs et programmes** environnementaux
4. Déterminer la **structure organisationnelle** et les **moyens** pour atteindre ses objectifs
5. Procéder régulièrement à des **audits environnementaux**
6. Publier un **rapport** sur l’environnement et rendre compte de la performance réalisée
:::

### Question 2

Qu’est-ce que la norme **ISO 14001** ? Depuis quand existe-t-elle et à quoi sert-elle ?

:::reponse
Depuis **1996**, **ISO 14001** permet de **certifier** les systèmes de management environnemental (SME). Elle définit des **critères mondiaux** et prouve l’intégration d’un comportement écologique dans les processus (confiance clients, fournisseurs, collaborateurs, autorités, investisseurs, société).
:::

### Question 3

Nomme les **huit** grands problèmes environnementaux mondiaux et donne pour chacun une brève description.

:::reponse
1. **Changement climatique** — surtout réchauffement ; CO₂ (déforestation, fossiles), méthane, mobilité → chaleur, tempêtes, inondations
2. **Pénurie d’eau** — ~1 % d’eau douce utilisable ; modes de vie + pollution
3. **Pollution de l’air** — industrie, voitures, avions ; ~8 millions de décès (OMS 2012)
4. **Érosion des sols** — sols plus stériles ; ~1 % des sols perdus/an
5. **Surpopulation** — pression sur ressources (biens, énergie, eau, terres)
6. **Déforestation** — ~30 millions d’hectares/an ; climat, espèces, érosion
7. **Extinction des espèces** — habitat réduit / chasse ; ~25 800 espèces menacées (UICN)
8. **Déchets plastiques** — ~8 Mt/an en mer ; non dégradables → microplastiques ; vortex océaniques
:::

### Question 4

Cite les **cinq** grands vortex (gyres) de déchets océaniques. (Si tu ne peux pas dessiner la carte, décris-les en texte.)

:::reponse
Les cinq principaux gyres / vortex de déchets marins :
1. **Pacifique Nord** (dont le « Great Pacific Garbage Patch »)
2. **Pacifique Sud**
3. **Atlantique Nord**
4. **Atlantique Sud**
5. **Océan Indien**

Ils concentrent plastiques et débris entraînés par les courants ; le Pacifique Nord est le plus souvent cité (étendues estimées très variables, de centaines de milliers à plusieurs millions de km²).
:::

### Question 5

Parmi les **17** Objectifs de développement durable (Agenda 2030), cite **quatre** objectifs (pauvreté, faim, santé, éducation) avec une courte description.

:::reponse
1. **Éliminer la pauvreté** — éradiquer la pauvreté sous toutes ses formes partout
2. **Éliminer la faim** — sécurité alimentaire et agriculture durable
3. **Vie saine et bien-être** — santé et bien-être pour tous à tous les âges
4. **Éducation de qualité** — éducation inclusive, équitable et de qualité ; opportunités d’apprentissage tout au long de la vie

*(Agenda 2030 adopté le 25 septembre 2015 par l’ONU : 17 ODD et 169 cibles.)*
:::`;

const DEMO_108_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. 6 exigences SME (impacts · conformité · objectifs · organisation · audits · rapport)
2. **ISO 14001** depuis 1996 — certification SME mondiale
3. 8 problèmes : climat · eau · air · sols · surpopulation · déforestation · espèces · plastique
4. 5 vortex : Pacifique N/S · Atlantique N/S · Indien
5. ODD 1–4 : pauvreté · faim · santé · éducation`;

/** Contenu Module 109 — Accès et protection des données */
const DEMO_109_THEORIE_FULL = `## 9. Accès et protection des données

### 9.1 Autorisation d'accès

Accepterais-tu qu'un étranger ait un accès illimité à ton appartement ? Probablement pas. C'est pourquoi, comme la plupart des gens, tu fermes la porte de ton appartement. Celui qui se trouve dans l'appartement d'un habitant sans son consentement commet une violation de domicile ; celui qui s'introduit de force commet un cambriolage.

Un propriétaire d'entreprise ne veut pas non plus d'hôtes indésirables. Il définit, selon la fonction des employés, le **droit d'accès** aux locaux et remet les **clés** ou **badges** correspondants (sécurité électronique). Une responsabilité particulière est liée à chaque clé ou badge.

**Règles :**
- Ne jamais confier une clé/badge à une autre personne sans contrôle (y compris connaissances et proches)
- Conserver en lieu sûr lorsqu'elle n'est pas utilisée
- Ne jamais laisser sur les portes
- Ne jamais déposer sous le paillasson ou dans la boîte aux lettres
- Ne pas porter de mention de l'entreprise (sécurité)

**Remarque :** la perte d'une clé ou d'un badge doit être **immédiatement** signalée à l'employeur.

La perte peut coûter cher : remplacement de toutes les serrures concernées. Sur les systèmes à puce électronique, une clé perdue peut être **désactivée** (sans changer les serrures), mais cela a aussi un coût.

### 9.2 Secret épistolaire

Sous le titre des infractions contre l'honneur et le domaine secret ou privé, le **Code pénal suisse (CP)** protège la sphère privée. La violation du secret épistolaire est sanctionnée par l'**art. 179 CP**. Il s'applique à la sphère professionnelle **et** privée. C'est un **délit sur plainte** (investigations seulement si la personne lésée le demande), contrairement à un délit poursuivi d'office.

**Art. 179 CP — Violation du secret épistolaire**

Quiconque, sans en avoir le droit, ouvre un pli ou colis fermé pour en connaître le contenu, ou quiconque, ayant pris connaissance de faits en ouvrant un pli/colis non destiné, les divulgue ou en tire profit, est, **sur plainte**, puni d'une **amende**.

**Pour les employés :**
- Le contenu des lettres/colis à transporter ne les concerne pas (Poste, courrier interne, particuliers)
- Seules les personnes chargées d'ouvrir le courrier reçu peuvent le faire
- Même avec mandat : attention aux noms personnels dans l'adresse
- Mentions **personnel**, **confidentiel** ou **personnel/confidentiel** → **ne jamais ouvrir**

**Exemples d'adresses :**

| Adresse | Action |
|---------|--------|
| EnterSite AG + adresse (sans nom) | ✅ Ouvrir |
| EnterSite AG « À l'attention de Reto Gugger » | ✅ Sans avis contraire : ouvrir sur instruction |
| Monsieur Reto Gugger + EnterSite AG | ❌ N'ouvrir que si M. Gugger l'a expressément demandé |
| Monsieur Reto Gugger + « Personnel/confidentiel » | ❌ **Ne jamais ouvrir** |

### 9.3 Secret postal

Le **secret postal** (CP) est plus large que le secret épistolaire : il protège non seulement le **contenu**, mais aussi **expéditeur** et **destinataire** dans leurs fonctions. Ex. : un facteur n'a pas le droit de dire à un tiers qui reçoit du courrier, de qui et à quelle fréquence.

Les infos de sphère hautement privée ne doivent jamais être transmises (actes judiciaires, commandements de payer…). Raconter qu'une rente AVS sera versée le lendemain peut mettre en danger livreurs et bénéficiaires.

**Art. 321ter CP — Violation du secret de la poste et des télécommunications**

Sanction possible : peine privative de liberté de **trois ans au plus** ou peine pécuniaire, notamment pour transmission d'infos sur relations postales / paiements / télécoms, ouverture d'envoi fermé, etc. Reste punissable après la fin de l'emploi. Exceptions (ex. déterminer l'ayant droit, prévenir des dommages) et réserves légales (obligation de renseigner / témoigner).

### 9.4 Secret des affaires

Selon le **Code des obligations**, tout employé doit garder les secrets d'affaires de son employeur.

**Art. 321a al. 4 CO** (devoir de diligence et de loyauté) : pendant le contrat, le travailleur ne doit pas utiliser ni révéler des faits confidentiels (secrets de fabrication et d'affaires) ; le secret peut subsister **après** la fin du contrat tant que l'exigent les intérêts légitimes de l'employeur.

**Remarque :** faire preuve de retenue en « bavardant » sur l'entreprise ; les critiques publiques laissent une impression négative.

### 9.5 Sécurité des données

À l'ère du traitement électronique, la protection des données est cruciale. Première « porte » : **nom d'utilisateur + mot de passe** (« se connecter »). Le système enregistre chaque accès (date/heure). Les droits d'accès correspondent généralement à la fonction. Réseaux souvent gérés par des administrateurs système ; les collaborateurs (y compris logisticiens) doivent respecter des règles.

#### 9.5.1 Protection par mot de passe

Utile à l'entreprise **et** au collaborateur : empêche qu'un tiers se connecte sous son identité.

**Bon mot de passe :**
- connu de personne d'autre
- nulle part écrit
- difficile à trouver (éviter date de naissance, lieu, surnoms, etc.)
- **ne pas réutiliser** (surtout pas le mot de passe Windows sur n'importe quel site)
- au moins **8 caractères** : majuscules + minuscules + chiffres + caractères spéciaux
- le changer régulièrement (souvent exigé par le système)

**Virus / vers / chevaux de Troie :** programmes aux effets variables (gênants → formatage / vol de mots de passe bancaires). La propagation repose souvent sur l'imprudence des utilisateurs. Compléments : module **805**.`;

const DEMO_109_THEORIE_SUMMARY = `## À retenir — Module 109

### Accès physique
Clés/badges selon fonction · ne jamais prêter sans contrôle · pas sur la porte / paillasson · pas de nom d'entreprise · **signaler toute perte immédiatement**

### Secret épistolaire (CP 179)
Délit **sur plainte** · amende  
Ne pas ouvrir le courrier d'autrui · « personnel / confidentiel » = **jamais**  
Adresse entreprise seule → OK · nom perso → prudence / mandat

### Secret postal (CP 321ter)
Protège contenu **+** expéditeur/destinataire · peine jusqu'à **3 ans**  
Ne pas divulguer qui reçoit quoi / quand (ex. AVS, actes)

### Secret des affaires (CO 321a al. 4)
Ne pas révéler secrets de fabrication/affaires · peut durer **après** le contrat

### Données / mots de passe
Login tracé · droits selon fonction  
≥ 8 car. mixtes · unique · secret · changé régulièrement  
Attention virus / phishing (→ module 805)`;

const DEMO_109_APERCU_FULL = `## Aperçu du module 109

Ce module traite de l'**accès** et de la **protection des données** : locaux, courrier, secrets et informatique.

### Vous allez découvrir
1. Autorisation d'accès (clés / badges) et responsabilités
2. Secret épistolaire et secret postal (Code pénal)
3. Secret des affaires (Code des obligations)
4. Sécurité des données et bons mots de passe

### Source
EnterSite — Logistics by ASFL / SVBL`;

const DEMO_109_APERCU_SUMMARY = `## Aperçu — Module 109
- Accès locaux
- Secrets épistolaire / postal / affaires
- Mots de passe et données`;

const DEMO_109_OBJECTIFS_FULL = `## Objectifs du module 109

À l'issue de ce module, l'apprenti·e est capable de :

- Appliquer les règles de responsabilité liées aux clés/badges
- Distinguer **secret épistolaire**, **secret postal** et **secret des affaires**
- Décider quand un courrier peut / ne peut pas être ouvert
- Formuler les règles d'un bon **mot de passe** et les risques liés aux malwares`;

const DEMO_109_OBJECTIFS_SUMMARY = `## Objectifs
- Clés/badges
- CP 179 / 321ter + CO 321a
- Courrier & mots de passe`;

/** Glossaire Module 109 */
const DEMO_109_GLOSSAIRE_FULL = `## Glossaire — Module 109

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Autorisation d'accès | | Droit, défini par l'employeur selon la fonction, d'entrer dans certains locaux ou systèmes (clés, badges, comptes informatiques). Chaque droit implique une **responsabilité** : ne pas confier, laisser, déposer ou perdre le moyen d'accès sans signalement immédiat. |
| Secret postal | Art. 321ter CP | Protection élargie des relations postales / télécoms : non seulement le **contenu** des envois, mais aussi l'**expéditeur** et le **destinataire** (qui reçoit quoi, de qui, à quelle fréquence). Violation passible d'amende ou de peine privative de liberté (jusqu'à 3 ans). |
| Secret épistolaire | Art. 179 CP | Interdiction d'ouvrir, sans droit, un pli ou colis fermé pour en connaître le contenu, ou de divulguer / tirer profit d'infos ainsi obtenues. **Délit sur plainte** (amende). Mentions « personnel » / « confidentiel » → ne jamais ouvrir. |
| Secret professionnel | Art. 321a al. 4 CO | Devoir de l'employé de ne pas utiliser ni divulguer les faits confidentiels (secrets de fabrication et d'affaires) de l'employeur ; peut **subsister après** la fin du contrat tant que l'exigent les intérêts légitimes de l'employeur. |`;

const DEMO_109_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **Autorisation d'accès** : droit + responsabilité (clés / badges / login)
- **Secret épistolaire** (CP 179) : ne pas ouvrir le courrier d'autrui
- **Secret postal** (CP 321ter) : contenu + expéditeur/destinataire
- **Secret professionnel** (CO 321a) : ne pas divulguer infos internes`;

/** Mises en situation Module 109 */
const DEMO_109_SITUATION_FULL = `## Mises en situation — Module 109

Contexte : tu travailles chez **EnterSite AG**. Les missions portent sur la **protection des données**, la **vidéosurveillance** et l'évaluation de situations sensibles. Rédige d'abord ta propre réponse, puis utilise le bouton pour afficher ou masquer les aides / exemples proposés.

### Vue d'ensemble des missions
1. Protection des données — Qu'est-ce que je révèle ?
2. Vidéosurveillance — Qu'est-ce qui est justifié ?
3. Évaluer correctement les situations (cartes d'action)
4. Évaluer la situation (comparaison PDF)
5. Travail de fin d'études Foundation (EnterSite)
6. Discussion STA

---

## Mission 1 — Protection des données — Qu'est-ce que je révèle ?

Nous sommes tous d'accord : il y a des données **privées** et des données que l'on partage avec le **public**. Mais sommes-nous tous d'accord sur le classement ? Qu'est-ce que tu révèles de toi ?

Coche dans le tableau à qui tu communiquerais quelles données :
- **(+)** oui
- **(−)** non
- **(?)** pas sûr(e)

:::reponse
**Exemple de remplissage (solution-type / comparaison)** — tes choix peuvent différer ; discutes-en en 1.1.

| Donnée | Famille | Collègues | Amis | Enseignant | Inconnu rue | Inconnu chat |
| --- | --- | --- | --- | --- | --- | --- |
| âge, sexe | + | + | + | + | + | + |
| Groupe sanguin | + | + | + | − | − | − |
| Infos frères/sœurs, famille | + | + | + | + | − | − |
| Salaire, emploi | + | − | + | − | − | − |
| Photos de mon ami(e) et de moi | + | + | + | − | − | − |
| Contacts professionnels | − | − | − | − | − | − |
| Liste de contacts du téléphone | + | − | + | − | − | − |
| Mon n° de téléphone portable | + | + | + | + | − | − |
| Mon adresse e-mail | + | + | + | + | − | − |
| Adresse du domicile | + | + | + | + | − | − |
| Code PIN téléphone / PC | + | − | + | − | − | − |
| Photo de mon visage | + | + | + | + | − | − |
| Photo du corps (vêtu) | + | + | + | − | − | − |
| Solde de mon compte | + | − | + | − | − | − |
| Emploi du temps | + | + | + | + | − | − |
| Infos perso apprises d'un(e) ami(e) | − | − | − | − | − | − |
| Mot de passe réseau social | − | − | − | − | − | − |
| Orientation sexuelle | + | − | + | − | − | − |
:::

### Mission 1.1 — Différences

Discute des résultats avec ton voisin ou ta voisine. Où trouvez-vous des différences et comment les expliquer ?

:::reponse
**Réponse individuelle** — pas de solution unique (comparer sensibilité, confiance, culture, contexte professionnel / scolaire).
:::

---

## Mission 2 — Vidéosurveillance — Qu'est-ce qui est justifié ?

Écoute le podcast *« Caméras de surveillance dans les immeubles locatifs »* (D_150 — Vidéosurveillance ABE). Discute ensuite des questions ci-dessous.

**Questions ouvertes (notes personnelles) :**
- Quels sont les avantages et les inconvénients de la vidéosurveillance d'immeubles privés ?
- … pour les personnes surveillées (invités, visiteurs) ?
- … pour le propriétaire de l'immeuble ?
- En tant que juge, quelle serait ta décision si un voisin se plaignait de la vidéosurveillance ?
- À ton avis, où la vidéosurveillance a-t-elle un sens ? Où ne le serait-elle pas ?

:::reponse
**Réponse ouverte** — podcast + discussion (pas de solution unique). Notes avantage/inconvénient selon parties prenantes, proportionnalité, vie privée vs sécurité.
:::

### Mission 2.1 — Six scénarios

Pour chaque situation : **justifié** ou **non justifié**, avec justification.

**1.** Après plusieurs actes de vandalisme, les transports publics surveillent l'intérieur des bus et des trams.

:::reponse
**Réponse individuelle** — justifié / non justifié + justification (ex. intérêt public / prévention vandalisme vs vie privée des usagers).
:::

**2.** Après des tags répétés, la commune scolaire installe une caméra qui surveille l'**extérieur** du bâtiment scolaire.

:::reponse
**Réponse individuelle** — justifié / non justifié + justification.
:::

**3.** M. M. soupçonne sa voisine de voler des fruits ; il installe une caméra surveillant son jardin et la clôture mitoyenne.

:::reponse
**Réponse individuelle** — justifié / non justifié + justification (attention à filmer aussi la propriété voisine).
:::

**4.** Un commerçant installe une caméra **devant les cabines d'essayage** pour voir qui entre/sort avec combien de vêtements.

:::reponse
**Réponse individuelle** — justifié / non justifié + justification (sphère très privée ; risque d'intrusion disproportionnée).
:::

**5.** Une commune interdit la circulation de nuit ; des caméras sont installées pour confondre les automobilistes fautifs.

:::reponse
**Réponse individuelle** — justifié / non justifié + justification.
:::

**6.** Un propriétaire de club filme le dancefloor et le bar et **diffuse les images en direct** sur Internet pour faire de la pub.

:::reponse
**Réponse individuelle** — justifié / non justifié + justification (consentement, droit à l'image, publicité).
:::

### Mission 2.2 — Différences

Discute des résultats avec ton voisin ou ta voisine. Où trouvez-vous des différences et comment les expliquer ?

:::reponse
**Réponse individuelle** — pas de solution unique.
:::

---

## Mission 3 — Évaluer correctement les situations

Formez des groupes de **4 personnes** et évaluez des situations à conséquences critiques. Sous le groupe « Situation de travail et d'apprentissage », le groupe **« Cartes d'action »** est exceptionnellement inséré (🔎 Carte d'action).

**Attribution :**
| Personne | Cartes |
| --- | --- |
| Personne 1 | 1, 5, 9, 13 |
| Personne 2 | 2, 6, 10, 14 |
| Personne 3 | 3, 7, 11, 15 |
| Personne 4 | 4, 8, 12, 16 |

Chaque personne traite ses cartes de façon autonome (**5 min** / carte). Après **20 min**, présentation au groupe + bref feedback des collègues.

:::reponse
**Notes ouvertes** — pas de solution unique ici (les propositions se trouvent au Mission 4 / PDF).
:::

---

## Mission 4 — Évaluer la situation

Va sur 🔎 **Matériel supplémentaire** du module 109. Ouvre le PDF *« Propositions de solutions pour les cartes d'action »* et compare tes solutions avec celles proposées.

:::reponse
**Réponse individuelle** — comparaison avec le PDF (pas de solution unique à recopier ici).
:::

---

## Mission 5 — Travail de fin d'études Foundation

> **Astuce EnterSite** : suis la visite virtuelle dans la salle **16 V2**. Visite la salle de travail de l'école professionnelle virtuelle ; cherche l'image à droite et résous le **travail de fin d'études sur la Fondation**. Lien : [Vers le site EnterSite](#entersite-placeholder) (URL à compléter lorsque disponible).

:::reponse
**Réponse ouverte** — activité EnterSite / Foundation (pas de solution unique dans ce support).
:::

---

## Mission 6 — Discussion STA

Discute de la situation de travail et d'apprentissage en plénière avec la classe et l'enseignant. Note les informations supplémentaires au bon endroit.

:::reponse
**Réponse ouverte** — notes de discussion STA (pas de solution unique).
:::`;

const DEMO_109_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **M1** : tableau vie privée (+/−/?) + différences (1.1)
- **M2** : podcast vidéosurveillance + 6 scénarios justifié/non
- **M3–M4** : cartes d'action → comparaison PDF
- **M5** : EnterSite salle **16 V2** (Foundation)
- **M6** : discussion STA`;

/** Exercices de maths Module 109 */
const DEMO_109_MATHS_FULL = `## Exercices de mathématiques — Module 109

Calcule chaque résultat, puis vérifie avec le bouton solution.

### Exercice 1 — Part de l'art. 122 CP

En 2020, **46'781** infractions ont été recensées en Suisse. **669** d'entre elles relevaient de l'art. **122 CP** (lésions corporelles graves).

Quel est le **pourcentage** des infractions visées à l'art. 122 CP ?

:::solution
**1,43 %**

Calcul : 669 × 100 / 46'781 = **1,43 %**
:::

### Exercice 2 — Jeunes mis en cause en 2009

En 2014, **2'466** prévenus (violence des jeunes) ont été enregistrés — soit une **baisse de 44 %** par rapport à 2009 (donc **56 %** du niveau 2009).

Quel était le nombre de jeunes mis en cause en **2009** ?

:::solution
**4'403 prévenus**

Calcul : 2'466 × 100 / 56 = 4'403,57 ≈ **4'403** prévenus
:::

### Exercice 3 — Homicides au Mexique (2018)

En 2018 : **29,07** homicides pour **100'000** habitants. Population : **128,9 millions**.

Combien d'homicides le pays a-t-il enregistrés ?

:::solution
**37'471 homicides**

Calcul : 29,07 × 128'900'000 / 100'000 = 37'471,23 ≈ **37'471**
:::

### Exercice 4 — Augmentation Mexique 2008 → 2018

En 2008 : **12,64** homicides / 100'000 hab. En 2018 : **29,07**.

Quel a été le **pourcentage** d'augmentation (niveau 2018 par rapport à 2008) ?

:::solution
**229,98 %**

Calcul : 29,07 × 100 / 12,64 = **229,98 %**
:::

> **Contrôle rapide (ordre du corrigé)** : 4'403 · 229,98 · 1,43 · 37'471`;

const DEMO_109_MATHS_SUMMARY = `## Maths — Solutions
1. **1,43 %** (669 / 46'781)
2. **4'403** prévenus (2'466 = 56 % de 2009)
3. **37'471** homicides (29,07 × 128,9 M / 100k)
4. **229,98 %** (12,64 → 29,07)`;

/** Vérification des acquis Module 109 */
const DEMO_109_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Thème : **Protection des données et droits d'accès**. Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

L'entreprise formatrice te remet une clé donnant accès à tous les locaux. Avec la prise en charge vient la responsabilité. Que **ne feras-tu jamais** avec cette clé ? Note **cinq** choses.

:::reponse
1. **Écrire** (mention / inscription liant la clé à l'entreprise)
2. **Copier**
3. **Transmettre** (prêter / confier sans contrôle)
4. **Déposer** (porte, paillasson, boîte aux lettres…)
5. **Avoir sur soi à titre privé** (usage non professionnel)
:::

### Question 2

Dans le cadre du **secret épistolaire**, marque les adresses que tu peux ouvrir **sans crainte** :

**A.** EnterSite AG — Rigistrasse 2 — 5102 Rupperswil *(sans nom)*

**B.** EnterSite AG — Z.H. Reto Gugger — Rigistrasse 2 — 5102 Rupperswil

**C.** Herr Reto Gugger — EnterSite AG — Rigistrasse 2 — 5102 Rupperswil

**D.** Personnel/confidentiel — Herr Reto Gugger — EnterSite AG — Rigistrasse 2 — 5102 Rupperswil

:::reponse
| Adresse | Ouvrir ? |
| --- | --- |
| **A** EnterSite AG (sans nom) | ✅ **Oui** — courrier entreprise |
| **B** Z.H. Reto Gugger | ⚠️ En principe **non** sans instruction claire / avis contraire |
| **C** Herr Reto Gugger + EnterSite | ❌ **Non** — sauf mandat exprès de M. Gugger |
| **D** Personnel/confidentiel | ❌ **Ne jamais ouvrir** |

→ Seule l'adresse **A** (entreprise seule, sans nom personnel) est clairement ouvrable « sans crainte ».
:::

### Question 3

Note un mot de passe qui répond à tous les critères (longueur, majuscules, minuscules, chiffres, caractères spéciaux).

:::reponse
Exemple valide : 8fZW2*_Gho2?
:::

### Question 4

Toutes les données d'une entreprise font déjà partie du « secret professionnel ». Qu'entends-tu par là ?

:::reponse
Les travailleurs **ne doivent pas divulguer** d'informations internes à des tiers. Les données de production ou financières portées à leur connaissance **ne sont pas diffusées** à l'extérieur.
:::

### Question 5

Dans la distribution, on parle aussi de **secret postal**. Qu'est-ce que quelqu'un devrait faire de « faux » pour être confronté au secret postal ? Cite **trois** délits / actes fautifs.

:::reponse
Le secret postal protège non seulement le **contenu**, mais aussi l'**expéditeur** et le **destinataire**. Les infos sur les envois ne sont pas communiquées à d'autres personnes.

**Trois actes fautifs (exemples) :**
1. Révéler **qui** reçoit du courrier
2. Révéler **de qui** vient le courrier
3. Révéler **à quelle fréquence** quelqu'un reçoit du courrier

(Le facteur n'a pas le droit de dire ces infos à un tiers.)
:::`;

const DEMO_109_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. Ne jamais : écrire · copier · transmettre · déposer · avoir à titre privé
2. Ouvrir sans crainte : **EnterSite AG seule** (sans nom) ; perso / confidentiel = non
3. Ex. 8fZW2*_Gho2?
4. Ne pas divulguer infos internes (production / finance…)
5. Secret postal : contenu + qui / de qui / fréquence`;

/** Contenu Module 110 — Définition de la gestion des marchandises */
const DEMO_110_THEORIE_FULL = `## 10. Définition de la gestion des marchandises

### 10.1 Que comprend la gestion des marchandises ?

La gestion des marchandises regroupe tous les **flux de marchandises et de données** au sein d'une entreprise (**en interne**). Points clés :

- **Approvisionnement et stockage** — planification des besoins (matières premières, fournitures, produits commerciaux, services, informations) → §10.5.1
- **Logistique interne** — préparation des commandes et transports internes → §10.5.2
- **Production et élimination** — flux en production, rebuts et déchets → §10.5.3
- **Distribution** — livraison des produits prêts à vendre → §10.5.4

Trois niveaux d'intégration :

1. **Gestion intégrée des matières** — articles et infos requis par la production, gérés de façon centrale
2. **Gestion intégrée avancée** — approvisionnement de toute l'entreprise (approvisionnement, stocks, planification de production)
3. **Gestion totalement intégrée des matériaux** — jusqu'à la livraison au marché des biens et services

Schéma progressif : Approvisionnement + Logistique + Production → (+ planification production) → (+ distribution).

**Difficulté :** faire coïncider les objectifs des services (couvrir les besoins, capacité de livraison, moins de manquants, moins de coûts de stockage…).

**À retenir :** dans la gestion matière, le **bon article** est mis à disposition au **bon moment**, au **bon endroit**, dans la **bonne quantité**, avec la **bonne qualité** et au **bon prix** (**6B** — Jünemann).

### 10.2 Objectifs et tâches

Optimiser le flux de marchandises (approvisionnement, mise à disposition interne, stockage, distribution) de façon **économique** (coûts réduits, disponibilité rapide). But ultime : **optimisation des marges**. Des **indicateurs** (§10.6) servent à comparer, piloter et optimiser.

**Objectif fondamental :** couvrir les besoins de la production et/ou des prestations de service **à temps** et de manière **économique**.

Trois groupes d'objectifs :

**Objectifs formels** (plutôt long terme, économiques, en valeur)
- **Coûts d'achat** — passation de commande + prix d'achat (à minimiser)
- **Frais de stockage** — capital immobilisé, faible rotation (à maintenir bas)
- **Coûts de ruptures de stock** — éviter erreurs / mauvaises dates de commande

**Objectifs spécifiques** — les 6B (bonne marchandise, endroit, moment, quantité, qualité, prix) + délai fournisseur inférieur au délai client souhaité si pas en stock

**Objectifs sociaux / environnementaux**
- Emballage respectueux de l'environnement
- Recyclage
- Protection de l'environnement (ex. transport)

Souvent **conflit d'objectifs** (ex. emballage écolo ↑ vs prix ↑).

### 10.3 Importance

Facteur essentiel pour les **marges**. Impacts sur qualité, **fiabilité des livraisons** et rentabilité.

Un **diagramme Sankey** visualise les quantités de flux internes (épaisseur de flèche = volume). Aide à prioriser les principaux flux pour l'optimisation.

### 10.4 Données statiques et dynamiques (ERP)

#### 10.4.1 Données de base (Master Data) — statiques
Réutilisées longtemps : n° d'article, désignation, unité (pce, kg, L, m), emplacement (fixe), fournisseur, poids, volume…  
Aussi : clients, fournisseurs, personnel, nomenclatures / listes de pièces.

#### 10.4.2 Données de mouvement (Transaction Data) — dynamiques
Évoluent en permanence : stock, consommation, commandes, factures…

**Remarque :** les mouvements s'appuient sur les données de base. Fiabilité des deux = clé d'une bonne gestion des articles.

### 10.5 Domaines de la gestion des matières

#### 10.5.1 Approvisionnement et stockage

Fournir matières premières (bois, acier, granulés…), auxiliaires (vis, emballages…), consommables (lubrifiants…), marchandises commerciales (non transformées), services, informations (dessins…).

**Détermination des besoins — 3 méthodes**
1. **Déterministe** (programme) — nomenclatures, gammes, OF, prévisions, commandes (articles coûteux, investissements)
2. **Stochastique** (consommation) — historique extrapolé + conjoncture (retail, commandes court terme)
3. **Heuristique** — estimation subjective (nouveaux articles)

**Questions d'optimisation :** make or buy · besoins nets · choix fournisseur · modes de transport · quand · analyse ABC

Exemple besoin net :
- Besoin total 250 − stock 100 − commandes 50 = **besoin net 100** → risque de rupture, il faut agir.

**Stockage :** éviter les attentes ; stocks optimaux ; moins d'intermédiaires ; distances internes courtes ; haute disponibilité. La logistique de stockage décide quoi / où / combien / comment stocker et sortir.

**Réception :** contrôle identité, quantité, qualité.  
**Entreposage :** affectation fixe, chaotique/flexible, zones par catégorie, ABC selon rotation.

#### 10.5.2 Intralogistique

**Préparation des commandes**
- 1 étape (par commande) / 2 étapes (par articles, puis répartition)
- En série / en parallèle (zones)
- Dynamique (marchandise → homme) / statique (homme → marchandise)
- Uni- / bi- / multidimensionnelle

Souvent **formes mixtes**.

**Transports internes :** mouvements dans l'entreprise ; critères = distance, priorité, délais, volume/poids, capacité engins, sécurité. Objectif : moins de temps de passage et de trajets à vide, coûts ↓, appro production sûr.

#### 10.5.3 Production et élimination

Questions : quoi produire (type, qty, délais) ? Comment éviter stocks intermédiaires ? Comment organiser transports/trajets ?

Élimination rebuts/déchets : économique, normes de recyclage, environnement (objectifs sociaux). Entrées (MP, énergie…) / sorties (déchets, chaleur, eaux usées, bruit…) — voir module 501.

#### 10.5.4 Distribution

Livraison des produits demandés par le marché. Questions : emballage transport, sécurité, make or buy, transporteurs, vente directe/indirecte.

### 10.6 Indicateurs (KPI)

Chiffre pour évaluer / comparer un contexte opérationnel ou économique. En gestion des matières : **Key Performance Indicators**.

**Exemples**

Rotation des stocks = besoin annuel / stock  
Ex. 150 000 / 100 000 = **1,5×** (stock renouvelé 1,5 fois)

Durée de stockage = 360 / rotation  
Ex. 360 / 1,5 = **240 jours**  
(**Année bancaire :** 12 mois × 30 j = **360 j/an**)

Taux de service = commandes honorées / commandes reçues × 100  
Ex. 237 / 262 × 100 ≈ **90,45 %**

Intensité matières = achats × 100 / CA  
Ex. 82 / 154 Mio ≈ **53,25 %** du CA pour les achats

**ROI (Du Pont, 1919) :** rentabilité mesurée au capital investi — système d'indicateurs reliant plusieurs ratios.

Autres ratios de stockage : voir le recueil de formules logistique.`;

const DEMO_110_THEORIE_SUMMARY = `## À retenir — Module 110

### Gestion des marchandises
Flux **internes** marchandises + données : Appro · Intralog · Prod/Élim · Distrib  
Intégration : intégrée → avancée → totalement intégrée  
**6B** (Jünemann) au cœur

### Objectifs
Fondamental : besoins **à temps** + **économiques** · marges  
Formels (coûts achat/stock/rupture) · Spécifiques (6B) · Sociaux (écolo)  
→ souvent **conflits d'objectifs**

### Données ERP
**Base** (Master) = statiques · **Mouvement** (Transaction) = dynamiques

### Besoins
Déterministe · Stochastique · Heuristique  
Besoin net = total − stock − commandes en cours

### Stockage / picking / transport
Quoi/où/combien · ABC · picking 1/2 étapes, série/parallèle, dynamique/statique  
Transport interne : distances, priorités, sécurité

### KPI
Rotation · durée (360/rot.) · taux de service · intensité matières · **ROI**`;

const DEMO_110_APERCU_FULL = `## Aperçu du module 110

Ce module définit la **gestion des marchandises** : périmètre, objectifs, données, domaines et indicateurs.

### Vous allez découvrir
1. Périmètre et niveaux d'intégration (6B)
2. Objectifs formels, spécifiques et sociaux
3. Données de base vs de mouvement
4. Approvisionnement, intralogistique, production, distribution
5. KPI (rotation, durée, taux de service, ROI…)

### Source
EnterSite — Logistics by ASFL / SVBL`;

const DEMO_110_APERCU_SUMMARY = `## Aperçu — Module 110
- Gestion matière interne + 6B
- Objectifs / données / domaines
- KPI essentiels`;

const DEMO_110_OBJECTIFS_FULL = `## Objectifs du module 110

À l'issue de ce module, l'apprenti·e est capable de :

- Définir la gestion des marchandises et ses niveaux d'intégration
- Relier la gestion matière aux **6B**
- Distinguer objectifs formels, spécifiques et sociaux (et leurs conflits)
- Différencier données de **base** et de **mouvement**
- Expliquer déterministe / stochastique / heuristique et le calcul du besoin net
- Citer les principes de picking et les KPI courants (rotation, durée, taux de service, ROI)`;

const DEMO_110_OBJECTIFS_SUMMARY = `## Objectifs
- Périmètre + 6B + objectifs
- Master / Transaction data
- Besoins, picking, KPI`;

/** Glossaire Module 110 */
const DEMO_110_GLOSSAIRE_FULL = `## Glossaire — Module 110

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Flux de marchandises | | Déplacements de biens et de données associés au sein de l'entreprise (approvisionnement, stockage, intralogistique, production, distribution). La gestion des marchandises vise un flux **économique** et **disponible** à temps. |
| Intralogistique | | Ensemble des activités logistiques **internes** : préparation des commandes (picking) et transports internes pour la production ou la création de services. |
| Distribution | | Livraison des produits prêts à vendre vers le marché / les clients (emballage de transport, make or buy, transporteurs, canaux de vente). |
| Taux de service | Degré de disponibilité | Indicateur = commandes clients honorées (ou livrées à temps) ÷ commandes reçues × 100. Mesure la capacité à livrer depuis le stock / dans les délais. |
| Capital immobilisé | | Capital lié dans les stocks (et autres actifs) ; des stocks élevés augmentent les frais de stockage et réduisent souvent la rentabilité (ex. ROI). |
| Fidélisation de la clientèle | | Capacité à fidéliser les clients grâce notamment à une disponibilité de livraison fiable, une qualité et un service cohérents — le client satisfait revient. |
| Optimisation des bénéfices | Marges | But ultime de la gestion des matières : optimiser les **marges** / bénéfices en conciliant coûts, disponibilité et objectifs formels / matériels / sociaux. |`;

const DEMO_110_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **Flux de marchandises** : biens + données en interne
- **Intralogistique** : picking + transports internes
- **Distribution** : livraison au marché
- **Taux de service** : commandes honorées / reçues × 100
- **Capital immobilisé** : argent lié dans les stocks
- **Fidélisation** · **Optimisation des bénéfices** (marges)`;

/** Mises en situation Module 110 — 3 STA */
const DEMO_110_SITUATION_FULL = `## Mises en situation — Module 110

Contexte : tu travailles chez **EnterSite AG**. Ce module comporte **trois** situations de travail et d'apprentissage (STA). Rédige d'abord ta propre réponse, puis utilise le bouton pour afficher ou masquer les aides / solutions proposées.

### Vue d'ensemble
**STA A — Gestion du matériel** · Missions 1–5  
**STA B — Retour sur investissement (ROI)** · Missions 1–7  
**STA C — KPI de l'entreprise formatrice** · Missions 1–5

---

# STA A — Gestion du matériel

### Missions
1. Tâches de la gestion du matériel  
2. Données de base / données de mouvement  
3. Données de base orientées logistique  
4. Diagramme de Sankey et KPI  
5. Discussion STA

---

## Mission 1 — Tâches de la gestion du matériel

Comment perçois-tu la gestion du matériel dans ton entreprise formatrice ? Selon que tu travailles dans une entreprise de production, de commerce ou de services, la gestion du matériel revêt différentes formes. Quelles sont les **tâches** de la gestion du matériel dans ton entreprise formatrice ?

:::reponse
**Réponse individuelle** — pas de solution unique.

**Pistes :** inventaire · réception · stockage · picking · transport interne · planification des besoins · élimination…
:::

### 1.1 Départements et responsabilités

Quels sont les **départements** qui organisent la gestion du matériel dans ton entreprise formatrice ? Qui est responsable ?

:::reponse
**Réponse individuelle** — pas de solution unique.
:::

### 1.2 Responsable des achats

Qui est responsable du **processus d'achat** dans ton entreprise formatrice ?

:::reponse
**Réponse individuelle** — pas de solution unique.
:::

---

## Mission 2 — Structure, importance et utilité des données de base

Décris la **structure**, l'**importance** et l'**utilité** des données de base.

:::reponse
**Structure :** numéro d'article, désignation, unité de mesure (p. ex. pièce, kg, litre, mètre), emplacement (principe de l'emplacement fixe), fournisseur, poids et volume.

**Importance :** des données de base **et** de mouvement fiables sont décisives pour une gestion des articles réussie.

**Utilité :** sans données de base, aucune gestion de stock n'est possible. Achat, préparation de commandes et vente de marchandises reposent sur des données de base **uniques**.
:::

### 2.1 Différence mouvement vs base

Explique les différences entre les **données de mouvement** et les **données de base**.

:::reponse
**Données de mouvement :** dynamiques — elles changent constamment.

**Données de base :** stables sur une période plus longue.

Les données de mouvement s'appuient sur les données de base.
:::

### 2.2 Responsabilité et modifications

Qui est responsable de la **saisie** des données de base dans ton entreprise formatrice ? Comment sont organisées les **modifications** (ex. pour un article) ?

:::reponse
**Compétence :** réponse individuelle.

**Gestion des modifications :** réponse individuelle.
:::

---

## Mission 3 — Stockage vs transport

Tu calcules les bases du stockage et du transport à l'aide des données de base. Quelles données sont importantes pour le **stockage** d'un article ? Pour le **transport** ?

:::reponse
**Stockage :**
- Numéro d'article
- Désignation de l'article
- Unité de mesure (p. ex. pièce, kg, litre, mètre)
- Emplacement de stockage (principe de l'emplacement fixe)

**Transport :**
- Numéro d'article
- Désignation de l'article
- Unité de mesure (p. ex. pièce, kg, litre, mètre)
- Poids
- Volume
:::

### 3.1 Base vs mouvement pour la livraison

Pour la disponibilité / livraison d'un article, de quelles **données de base** et de **mouvement** s'agit-il ?

:::reponse
**Données de base :**
- Numéro d'article
- Désignation de l'article
- Unité de mesure (p. ex. pièce, kg, litre, mètre)
- Fournisseur

**Données de mouvement :**
- Stock
- Consommation
- Commandes
- Commandes *(doublon tel que dans la source EnterSite)*
:::

---

## Mission 4 — Diagramme de Sankey

Décris un **diagramme de Sankey**. Quelle est son utilité du point de vue de la gestion du matériel ?

:::reponse
Un diagramme Sankey représente clairement les **quantités**, par exemple d'un flux de matériel interne. On voit **entre quels départements** et **combien** de marchandises circulent (ex. tonnes/an). Plus la flèche est **épaisse**, plus la quantité est importante.

Pour optimiser le flux, cette représentation aide à **identifier les principaux flux** et à **fixer des priorités**.
:::

### 4.1 KPI — décrire les résultats

Décris le résultat des KPI suivants.

:::reponse
**Intensité matières** — part (%) des achats par rapport au chiffre d'affaires :

Intensité matières = Achats × 100 / Chiffre d'affaires  
Exemple : 82 Mio × 100 / 154 Mio = **53,25 %**  
→ l'entreprise consacre **53,25 %** de son CA à l'achat de marchandises.

**Disponibilité de livraison** — % de commandes clients reçues qui peuvent être livrées directement.

**Durée de stockage** — combien de temps l'article reste en moyenne en stock avant d'être retiré.

**Rotation des stocks** — facteur indiquant combien de fois le stock moyen est renouvelé sur une période (souvent / an).
:::

---

## Mission 5 — Discussion STA (gestion du matériel)

Discute de la STA en plénière avec la classe et le·la formateur·trice. Note des informations supplémentaires.

:::reponse
**Réponse ouverte** — notes individuelles / de classe (pas de solution unique).
:::

---

# STA B — Retour sur investissement (ROI)

Liens et conséquences d'un simple mandat : relier le **ratio des coûts de stockage** au **ROI**.

> **Remarque :** toute médaille a deux faces. Un changement d'un côté a toujours des effets de l'autre.

### Missions
1. Calculer le taux de service  
2. Augmenter le stock minimum  
3. Un système d'indicateurs  
4. ROI — situation de départ  
5. ROI après ajustement des stocks  
6. Conclusion (rapport à Stierndli)  
7. Discussion

---

## Mission 1 (ROI) — Taux de service

Ton supérieur, le responsable logistique **Reto Stierndli**, souhaite le taux de service du 1er semestre :

- Commandes clients reçues : **262**
- Commandes clients livrées dans les délais : **237**

:::reponse
Taux de service = Quantité livrée / Quantité commandée × 100  

237 / 262 × 100 = **90,46 %**
:::

---

## Mission 2 (ROI) — Augmenter le stock minimum

Stierndli propose d'augmenter de **20 %** le stock minimum des articles non livrés à temps. D'après le tableau (fichier EnterSite *Augmentation_du_stock_minimum.xlsx*), de combien % le stock augmente-t-il ?

:::reponse
Niveau de stock après ajustement :
- **Avant :** 1'283 pcs
- **Après :** 1'540 pcs
- **Augmentation :** **20,03 %**
:::

---

## Mission 3 (ROI) — Utilité d'un système d'indicateurs

Explique l'utilité d'un **système de ratios** (article du module 110 + recherches).

:::reponse
Un système d'indicateurs permet de **mesurer et d'évaluer** les performances de différents secteurs. Le ROI évalue la **rentabilité** d'un investissement ou de l'entreprise.

Les indicateurs aident aussi à identifier et évaluer les **risques**, à réagir de façon proactive et à décider stratégiquement.

Dans le cas de +20 % de stocks minimaux, un système d'indicateurs permet d'évaluer l'impact sur le **ROI** (et d'autres KPI) pour décider en connaissance de cause : améliorer la disponibilité **sans** négliger la rentabilité globale.
:::

---

## Mission 4 (ROI) — Saisie du tableau

Dans le tableau ROI (*EnterSite_ROI_calcul.xlsx*), inscris les données fournies par **Besim Vuloltevic** (FICO) dans les cellules vertes.

| Poste | Valeur (unités × 1'000) |
| --- | --- |
| Coûts de structure | 560 |
| Actifs immobilisés | 30 |
| Coûts des produits | 1'375 |
| Stocks | 379 (exactement 378'527.16 Fr de la liste d'articles) |
| Créances | 50 |
| Liquidités | 70 |
| Produit brut | 2'000 |

> **Remarque :** le tableau calcule en unités de **1'000** (ex. liquidités « 70 » = 70'000 Fr).

:::reponse
**Saisie dans l'Excel EnterSite** — vérifier les cellules vertes avec les valeurs ci-dessus (unités × 1'000).
:::

---

## Mission 5 (ROI) — Après ajustement des stocks

Inscris le résultat de la Mission 2 (arrondi, sans décimale) dans la cellule jaune « Variations des stocks ». Que se passe-t-il pour le ROI ? De combien change-t-il ?

:::reponse
**a.** Le retour sur investissement **diminue**.

**b.** Le ROI diminue de **1,6 %**, passant de **12,3 %** à **10,7 %**.
:::

---

## Mission 6 (ROI) — Rapport à Reto Stierndli

Réponds et justifie :

a. Que rapportes-tu à Stierndli ?  
b. Proposes-tu d'adapter les stocks minimaux ?  
c. Discutes-tu avec d'autres départements ? Lesquels ?  
d. Autres solutions pour améliorer les livraisons ?

:::reponse
**a.** Informer que l'impact des changements n'est **pas uniquement positif**. Un changement à un niveau (ex. disponibilité) a des répercussions ailleurs. Il faut une **perspective globale** (dont le ROI) pour juger l'impact à long terme.

**b.** Avant une recommandation nette : demander une **analyse complète** (ROI et autres ratios). Examiner une adaptation **modérée** des articles A et des principaux B, coordonnée avec une stratégie à long terme.

**c.** Oui — notamment **Procurement Management**, **Logistics**, **Production** et **FICO** (fournisseurs, stockage, finances, production).

**d.** **Réponse individuelle** — autres solutions possibles (prévisions, délais fournisseurs, ABC, safety stock ciblé, etc.).
:::

---

## Mission 7 (ROI) — Discussion

Discute de la STA en plénière. Note les informations supplémentaires.

:::reponse
**Réponse ouverte** — notes individuelles / de classe (pas de solution unique).
:::

---

# STA C — KPI de l'entreprise formatrice

Rassemble les données dans ton **entreprise formatrice**. Demande **au préalable** l'autorisation à ton·ta formateur·trice.

Objectif : appliquer la théorie et évaluer les chiffres clés réels.

### Missions
1. Rotation des stocks  
2. Durée de stockage  
3. Disponibilité de livraison  
4. Intensité de matière  
5. Discussion

---

## Mission 1 (KPI) — Rotation des stocks

Choisis **six** articles. Documente-les (éventuellement photo) : fabriqués ou achetés ? Spécialités (saisonniers…) ? Calcule la rotation (6 mois ou 1 an) via l'ERP et donne ton appréciation.

:::reponse
**Réponse individuelle** (a–d).

Formule : Rotation = Besoin annuel (Fr. ou pcs) / Stock moyen (Fr. ou pcs)

Comment calcules-tu le stock moyen ? → réponse individuelle.
:::

---

## Mission 2 (KPI) — Durée de stockage

Avec les rotations de la Mission 1, calcule la durée moyenne (année bancaire **360** j).

:::reponse
**Réponse individuelle** (a–c).

Formule : Durée de stockage = 360 / Rotation
:::

---

## Mission 3 (KPI) — Disponibilité de livraison

Obtiens les infos nécessaires auprès du·de la formateur·trice pour six articles. Note résultats et réflexions.

:::reponse
**Réponse individuelle** (a–b).

Formule : Disponibilité = Commandes clients satisfaites / Commandes clients totales × 100
:::

---

## Mission 4 (KPI) — Intensité de matière

Si l'accès aux chiffres est autorisé, calcule l'intensité de matière et évalue-la. Sinon, ce n'est pas un problème.

:::reponse
**Réponse individuelle** (a–c).

Formule : Intensité de matière = Achats de marchandises × 100 / Chiffre d'affaires
:::

---

## Mission 5 (KPI) — Discussion

Discute des résultats en plénière. Note les informations complémentaires.

:::reponse
**Réponse ouverte** — notes individuelles / de classe (pas de solution unique).
:::`;

const DEMO_110_SITUATION_SUMMARY = `## Mises en situation — À retenir

### STA A — Gestion du matériel
- **M1** : tâches / départements / achats → individuel
- **M2** : structure (n°, désignation, UM, emplacement, fournisseur, poids/volume) · importance · utilité
- **M2.1** : mouvement = dynamique · base = stable
- **M3** : stockage vs transport (poids/volume pour transport)
- **M4** : Sankey = volumes / priorités · KPI (intensité ex. **53,25 %**)
- **M5** : discussion ouverte

### STA B — ROI
- Taux de service **90,46 %** · stock +**20,03 %** · ROI **12,3 % → 10,7 %** (−1,6)
- Tableau ROI en unités × **1'000** · rapport multi-départements

### STA C — KPI entreprise
- Rotation · durée (360/rot.) · disponibilité · intensité → **réponses individuelles**`;

/** Exercices de maths Module 110 */
const DEMO_110_MATHS_FULL = `## Exercices de mathématiques — Module 110

Calcule chaque résultat, puis vérifie avec le bouton solution.

### Exercice 1 — Disponibilité de livraison

L'an dernier, **750** exemplaires de l'article « 2481144 Moniteur » ont été vendus. Parmi eux, **670** ont été livrés à temps (les autres en retard).

Calcule le **degré de disponibilité** des moniteurs.

:::solution
**89,33 %**

750 pcs → 100 %  
670 pcs → X  

Calcul : 670 × 100 / 750 = **89,33 %**
:::

### Exercice 2 — Rotation et durée de stockage

Article « 2690517 ACER Notebook » (coût 549 Fr) : vendu **450** fois ; stock moyen **40** pcs.

Calcule la **rotation** et la **durée moyenne de stockage**.

:::solution
**Rotation :** 450 / 40 = **11,25**

**Durée moyenne :** 360 / 11,25 = **32** jours
:::

### Exercice 3 — Taux de rebuts

Production de **350** pcs « GT30_CB400A Cartridge Toner Black » : **27** mises au rebut.

Calcule le **pourcentage de rebuts**.

:::solution
**7,71 %**

350 pcs → 100 %  
27 pcs → X %  

Calcul : 100 × 27 / 350 = **7,71 %**
:::

### Exercice 4 — Intensité matières

Besim Vuloltevic (FICO) communique :
- Achats de marchandises : **154,7** Mio Fr
- CA annuel : **228** Mio Fr

Calcule la part (%) des achats par rapport au CA.

:::solution
**67,85 %**

228 Mio → 100 %  
154,7 Mio → X  

Calcul : 154,7 × 100 / 228 = **67,85 %**
:::

### Exercice 5 — Besoins nets

Article « GT30-CE410XD SwissEnterSite Cartridge HP CE410 Black » (approvisionnement déterministe). Commande client : **450** pcs. Données :
- Stock : **78** pcs
- Déjà commandés, pas encore livrés : **120** pcs

Calcule les **besoins nets**.

:::solution
**252 pcs**

Besoins nets = 450 − 78 − 120 = **252** pcs
:::

> **Contrôle rapide (footer corrigé)** : 67,85 · 11,25 · 89,33 · 252 · 7,71 · 32`;

const DEMO_110_MATHS_SUMMARY = `## Maths — Solutions
1. Disponibilité **89,33 %** (670/750)
2. Rotation **11,25** · durée **32** j (360/11,25)
3. Rebuts **7,71 %** (27/350)
4. Intensité **67,85 %** (154,7/228)
5. Besoins nets **252** pcs (450−78−120)`;

/** Vérification des acquis Module 110 */
const DEMO_110_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Thème : **Stockage / Définition de la gestion des marchandises**. Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

Dans la liste d'articles d'EnterSite AG, classe chaque donnée en **données de base** ou **données de mouvement**.

| Nom | Données de base | Données de mouvement | Remarque |
| --- | --- | --- | --- |
| N° d'article | | | |
| Description | | | |
| Unité de base | | | |
| Prix d'achat CHF | | | |
| Prix catalogue PA+25 % | | | |
| Stock | | | |
| Stock maxi | | | |
| Stock mini | | | |
| Délai de livraison (j) | | | |
| Vente moyenne / jour | | | |
| Fournisseur principal | | | |

:::reponse
| Nom | Base | Mouvement | Remarque |
| --- | --- | --- | --- |
| N° d'article | **x** | | Ne change pas |
| Description | **x** | | Désignation constante |
| Unité de base | **x** | | pce, kg, m, L… stable |
| Prix d'achat | **x** | | Peut évoluer mais reste en principe constant |
| Prix catalogue | | **x** | Analogue au prix d'achat *(classement source)* |
| Stock | | **x** | Change à chaque entrée / sortie |
| Stock mini | **x** | | Stock de sécurité ; stable sauf gros changements de ventes |
| Stock maxi | | **x** | Analogue au stock minimum *(classement source)* |
| Délai de livraison | | **x** | En principe toujours le même *(classement source)* |
| Vente moyenne / jour | | **x** | Dépend des sorties actuelles |
| Fournisseur principal | | **x** | Fournisseur constant *(classement source)* |

> Classement selon le corrigé EnterSite (même si certaines cases semblent contre-intuitives).
:::

### Question 2

Quelles sont les activités opérationnelles de l'**intralogistique** ?

:::reponse
L'intralogistique comprend la **préparation des commandes** et les **transports internes** à l'entreprise pour la production ou la création de services.
:::

### Question 3

Dans quels **trois groupes** classer les objectifs de la gestion des matériaux ? Décris-les brièvement.

:::reponse
1. **Objectifs formels** — plutôt long terme, caractère économique (argent)
2. **Objectifs matériels** — assurer les marchandises nécessaires à l'entreprise
3. **Objectifs sociaux** — comportement écologique dans la gestion des matériaux
:::

### Question 4

Les objectifs « stocks les plus petits possibles » et « disponibilité de livraison la plus grande possible » sont en **contradiction**. Explique.

:::reponse
Les stocks entraînent des coûts élevés (**capital immobilisé**) : on veut les garder raisonnablement bas. Or une **grande disponibilité** exige d'avoir en stock les articles à vendre. Ces deux objectifs s'opposent donc.
:::

### Question 5

Les objectifs matériels garantissent les marchandises nécessaires. Comment le professeur **Jünemann** a-t-il formulé ces objectifs (**6B**) ?

:::reponse
1. Le **bon moment**
2. La **bonne marchandise**
3. La **bonne quantité**
4. La **bonne qualité**
5. Le **bon endroit**
6. Le **bon prix**
:::`;

const DEMO_110_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. Tableau base/mouvement (suivre corrigé EnterSite, y compris cases inhabituelles)
2. Intralogistique = **picking** + **transports internes**
3. Objectifs **formels** · **matériels** · **sociaux**
4. Contradiction stock bas ↔ haute disponibilité (capital immobilisé)
5. **6B** Jünemann : moment · marchandise · quantité · qualité · endroit · prix`;

/** Contenu Module 201 — Le client */
const DEMO_201_THEORIE_FULL = `## 1. Le client

Le client est une personne ou une entreprise qui achète des marchandises ou utilise des services d'une autre personne ou entreprise. Souvent, le client est également appelé « acheteur » ou « débiteur ». Le mot « débiteur » est souvent utilisé pour la facturation et la comptabilité.

EnterSite AG a plusieurs types de clients :
- **Particuliers** — commandes souvent en petites quantités ; livraison à domicile ou achat en boutique
- **Grands commerçants** — commandes régulières, plusieurs articles ; livraison par colis pour les quantités plus importantes

### 1.1 L'importance du client

EnterSite AG et ses collaborateurs ont intérêt à exécuter au mieux chaque commande. Un client satisfait reviendra pour ses futures commandes. Chaque commande doit donc être exécutée avec une grande concentration du début à la fin.

Pour chaque commande exécutée, EnterSite AG établit une **facture**. Si le client paie, cela génère un **chiffre d'affaires**. Ce chiffre d'affaires sert à payer le **salaire** des collaborateurs. Le salaire de tous les collaborateurs provient donc des paiements des clients.

**Remarque :** en tant que logisticien·ne, je comprends que chaque commande client est la base de mon emploi et donc du paiement de mon salaire. En conséquence, je me comporte de manière **respectueuse** et **valorisante** envers tous les clients.

### 1.2 « Le client est roi »

Ce proverbe décrit souvent la relation client–entreprise. EnterSite AG le donne comme base à ses collaborateurs — **sans le prendre au pied de la lettre**.

Il s'agit plutôt de construire une **relation commerciale** fondée sur :
- le respect
- l'estime
- la confiance
- la durabilité

Les deux parties agissent d'égal à égal et cherchent à couvrir leurs besoins. Si la communication est artificielle ou malhonnête, la relation est tôt ou tard vouée à l'échec (divergences, nuisances aux affaires).

**Remarque :** le client souhaite être pris au sérieux et que l'on communique **honnêtement** avec lui.

### 1.3 Le client fidèle

Un client fidèle achète **régulièrement** des produits ou services auprès d'EnterSite AG. La relation est cohérente pour les deux parties.

Les clients fidèles peuvent discuter des prestations passées ou des développements futurs — source d'**amélioration** et de **réorientation** en faveur des clients. L'échange reste fondé sur respect, estime, confiance et durabilité.

### 1.4 Les entreprises doivent connaître leurs clients

Pour vendre avec succès, il faut connaître ses clients. Les questions « Qui sont mes clients ? » et « Qu'attendent-ils ? » relèvent surtout du **marketing**, qui analyse clients existants et potentiels.

Ces informations aident à :
- améliorer produits et services
- développer de nouvelles offres
- améliorer le service client et les processus internes
- découvrir / conquérir de nouveaux clients, groupes cibles et marchés

Le marketing est traité en profondeur dans le module **205**.`;

const DEMO_201_THEORIE_SUMMARY = `## À retenir — Module 201

### Client
Personne ou entreprise qui achète biens/services · aussi « acheteur » / « débiteur » (compta)

### Types (ex. EnterSite)
Particuliers (petites qty) · grands commerçants (commandes régulières, colis)

### Importance
Commande bien exécutée → satisfaction → fidélité → **CA** → **salaires**  
Logisticien·ne : respect et valorisation de chaque client

### « Client est roi »
Pas au pied de la lettre → relation d'égal à égal  
Valeurs : respect, estime, confiance, durabilité · communication **honnête**

### Client fidèle
Achats réguliers · dialogue pour améliorer l'offre

### Connaître le client
Rôle du **marketing** (module 205) : analyser besoins → mieux vendre / innover / conquérir`;

const DEMO_201_APERCU_FULL = `## Aperçu du module 201

Ce module introduit la notion de **client** et son importance pour l'entreprise et le logisticien.

### Vous allez découvrir
1. Définition et types de clients
2. Lien commande → chiffre d'affaires → salaire
3. Relation client (« client est roi », fidélité)
4. Pourquoi connaître ses clients (marketing)

### Source
EnterSite — Logistics by ASFL / SVBL`;

const DEMO_201_APERCU_SUMMARY = `## Aperçu — Module 201
- Qui est le client
- Importance / fidélité
- Relation et marketing`;

const DEMO_201_OBJECTIFS_FULL = `## Objectifs du module 201

À l'issue de ce module, l'apprenti·e est capable de :

- Définir ce qu'est un **client** (et les termes acheteur / débiteur)
- Expliquer pourquoi chaque commande compte pour l'emploi et le salaire
- Interpréter « le client est roi » comme une **relation** fondée sur le respect et l'honnêteté
- Décrire le client fidèle et le rôle du marketing pour connaître la clientèle`;

const DEMO_201_OBJECTIFS_SUMMARY = `## Objectifs
- Définir le client
- Lien commande → CA → salaire
- Relation / fidélité / marketing`;

/** Glossaire Module 201 */
const DEMO_201_GLOSSAIRE_FULL = `## Glossaire — Module 201

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Client | | Personne, entreprise ou organisation qui conclut une transaction avec une contrepartie en tant que demandeur (en anglais *customer* / *client*). |
| Acheteur | | Personne, groupe ou institution qui accepte ce qui a été livré ou produit par un autre en échange d'une contrepartie ; acheteur d'une prestation / offre (produit ou service). |
| Chiffre d'affaires | | Valeur des biens et services vendus au cours d'une période (vente, location, affermage). On distingue le CA en **valeur** et le CA en **quantité**. |
| Salaire mensuel | | Salaire au temps : ce qui compte, c'est le temps de travail effectué (pas la quantité). Versé régulièrement en fin de mois, généralement en montants égaux. |
| Salaire annuel | | Ensemble des revenus d'un travail non indépendant sur une année civile, y compris bonus, gratifications, 13ᵉ mois, etc. |
| Client fidèle | | Client (souvent appelé « client régulier ») qui achète **régulièrement** des biens ou services auprès d'un même fournisseur. |
| Base de données clients | | Inventaire structuré (fichier / système) des informations sur les clients (coordonnées, historique d'achats, préférences) servant au suivi commercial et au marketing. |
| Débiteur | | Personne physique ou morale (ex. un client) qui doit une somme après utilisation de produits / services et réception d'une facture. Face aux débiteurs (avoirs) : les **créanciers** (fournisseurs). |`;

const DEMO_201_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **Client** / **Acheteur** : demandeur / destinataire d'une prestation contre contrepartie
- **CA** : valeur (ou qty) des ventes sur une période
- **Salaire mensuel** vs **annuel** (+ bonus, 13ᵉ…)
- **Client fidèle** : achats réguliers
- **BDD clients** : suivi / marketing
- **Débiteur** : client facturé (vs créancier)`;

/** Mises en situation Module 201 */
const DEMO_201_SITUATION_FULL = `## Mises en situation — Module 201

Contexte : tu travailles chez **EnterSite AG**. Les missions portent sur le **client**, les termes associés et le proverbe « le client est roi ». Rédige d'abord ta propre réponse, puis utilise le bouton pour afficher ou masquer les solutions / exemples proposés.

### Vue d'ensemble des missions
1. Pourquoi perdons-nous des clients ?
2. Explication des termes
3. Le client est roi — Oui
4. Le client est roi — Non
5. Jeu de rôle « Prononcer dans l'arène » (+ 5.1 notes)
6. Discussion STA

---

## Mission 1 — Pourquoi perdons-nous des clients ?

> **Astuce EnterSite** : suis la visite virtuelle jusqu'à la salle **13 V1**. Rends-toi au premier poste de travail du département **Customer Service**. Cherche l'image à droite, traite la commande et note la solution correspondante. Lien : [Vers le site EnterSite](#entersite-placeholder) (URL à compléter lorsque disponible).

Quelles mesures mettrais-tu en œuvre dans le rôle de **M. Gugger**, sur la base des résultats ?

:::reponse
Je ferais des **formations** de mes collaborateurs pour **mettre le client au centre**.
:::

---

## Mission 2 — Explication des termes

Nous avons tous entendu et lu le mot « client » à de nombreuses reprises. D'autres termes dans ce contexte sont également toujours présents. Mais sont-ils compréhensibles ? Décris les termes suivants en **une phrase** (formulation personnelle) :

:::reponse
- **Client :** personne, entreprise ou organisation qui conclut une transaction avec une contrepartie en tant que demandeur (*customer* / *client*).
- **Acheteur :** personne, groupe ou institution qui accepte ce qui a été livré ou produit par un autre en échange d'une contrepartie (produit ou service).
- **Chiffre d'affaires :** valeur des biens et services vendus sur une période (vente, location, affermage) ; distinguer CA en valeur et CA en quantité.
- **Salaire mensuel :** salaire au temps — déterminant = temps de travail effectué ; versé régulièrement en fin de mois, souvent en montants égaux.
- **Salaire annuel :** tous les revenus d'un travail non indépendant sur une année civile (y compris bonus, gratifications, 13ᵉ mois).
- **Client privé :** client qui achète des biens ou services pour son **usage personnel**.
- **Client professionnel :** client qui achète des biens ou services pour le compte d'un **employeur**.
- **Client fidèle :** client qui achète **régulièrement** / souvent auprès d'un même fournisseur.
- **Nouveau client :** client qui achète pour la **première fois** auprès de ce fournisseur.
- **Débiteur :** personne (ex. client) qui doit une somme après utilisation de produits / services et réception d'une facture ; face aux débiteurs : les créanciers (fournisseurs).
:::

---

## Mission 3 — Le client est roi — Oui

Le CEO d'EnterSite AG, **Monsieur Reto Gugger**, aimerait que le proverbe « Le client est roi » soit encore plus appliqué dans le département Service clientèle. Les collaboratrices et collaborateurs doivent orienter leur attitude en fonction de ce proverbe. La directrice de la division, **Silvia Renggli**, et la responsable du service, **Sarah Nydegger**, ont invité l'équipe à une discussion.

Fais une recherche sur le proverbe et cherche les meilleurs arguments pour expliquer pourquoi « le client est roi » est exactement ce qu'il faut. Explique aussi pourquoi M. Gugger souhaite cette attitude chez EnterSite AG.

:::reponse
**L'attitude est juste, car** le client apporte l'argent à l'entreprise, qui me le verse à la fin du mois comme **salaire mensuel**.
:::

---

## Mission 4 — Le client est roi — Non

Fais une recherche sur le proverbe et trouve les meilleurs arguments pour expliquer pourquoi « le client est roi » **ne** correspond **pas** à la bonne attitude. Cherche des arguments pour expliquer pourquoi tu ne souhaites pas adopter cette attitude.

:::reponse
**L'attitude est fausse, car** le client est un **partenaire**. Je ne dois traiter personne en « roi ».
:::

---

## Mission 5 — Jeu de rôle « Prononcer dans l'arène »

En route pour le débat ! L'enseignant·e joue maintenant le rôle de **M. Gugger**. Un·e apprenant·e de la classe joue le rôle de **Mme Renggli** et un·e autre celui de **Mme Nydegger**. Pour ce faire, les deux apprenant·e·s peuvent inviter chacun·e une personne de la classe à les aider.

- L'apprenant·e jouant **Mme Renggli** adopte l'attitude de la **mission 3** (Oui).
- L'apprenant·e jouant **Mme Nydegger** adopte l'attitude de la **mission 4** (Non).

Tous les autres apprenant·e·s font office de spectateurs et peuvent influencer l'arène en posant des questions annoncées mais « provocatrices ».

Durée : **15–20 minutes**, sous la supervision de M. Gugger (modérateur / enseignant·e).

:::reponse
**Réponse individuelle** — notes de débat (pas de solution unique).
:::

### Mission 5.1 — Notes individuelles

Dans l'espoir que le débat ait vraiment « fait mouche », chacun dispose de **5 minutes** pour décrire la discussion pour soi-même. Note :

- Quels arguments sont appropriés ?
- Quels sont ceux qui ne le sont pas ?
- Quelle conclusion en tirer ?

:::reponse
**Réponse individuelle** — notes personnelles (pas de solution unique).
:::

---

## Mission 6 — Discussion STA

Discute de la situation de travail et d'apprentissage en plénière avec la classe et l'enseignant·e. Note les informations complémentaires.

:::reponse
**Réponse ouverte** — notes de discussion STA (pas de solution unique).
:::`;

const DEMO_201_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **M1** : EnterSite salle **13 V1** (Customer Service) · formations centrées client (Gugger)
- **M2** : définitions (client, acheteur, CA, salaires, privé/pro, fidèle, nouveau, débiteur)
- **M3 / M4** : « client est roi » — Oui (salaire) vs Non (partenaire)
- **M5 (+5.1)** : débat « arène » + notes individuelles
- **M6** : discussion STA`;

/** Exercices de maths Module 201 */
const DEMO_201_MATHS_FULL = `## Exercices de mathématiques — Module 201

Calcule chaque résultat, puis vérifie avec le bouton solution.

### Exercice 1 — Conversion de devises

La clientèle d'EnterSite AG est répartie dans le monde entier. Les offres et factures doivent parfois être établies en **euros** et en **yuan** (Chine).

Calcule le montant de **1'875 CHF** avec les cours suivants :
- **1 CHF = 1,05 EUR**
- **1 CHF = 8,19 Yuan**

:::solution
**1'968,75 EUR** · **15'356,25 Yuan**

Calculs :
- Euros : 1,05 × 1'875 = **1'968,75 EUR**
- Yuan : 8,19 × 1'875 = **15'356,25 Yuan**
:::

### Exercice 2 — Croissance de la clientèle

En 2021, EnterSite AG comptait **850** clients. En 2022, la base de clients a augmenté de **14 %**.

Quelle était la taille de la clientèle en **2022** ?

:::solution
**969 clients**

Calcul : 850 × 114 / 100 = 850 × 1,14 = **969**
:::

### Exercice 3 — Nouveaux clients : Internet, prix, qualité

Sur les **14 %** de nouveaux clients, **29 %** ont été acquis par Internet. EnterSite AG a convaincu **2/3** par son prix avantageux ; le reste (**1/3**) par la **qualité**.

Combien de clients ont été gagnés grâce au **prix** ? Combien grâce à la **qualité** ?

:::solution
**56 clients** (prix) · **28 clients** (qualité)

Étapes :
1. Nouveaux clients : 969 − 850 = **119**
2. Via Internet : 119 × 29 / 100 ≈ 34,51 → **34** clients
3. Reste : 119 − 34 = **85** clients
4. 1/3 : 85 / 3 ≈ 28,33 → **28** ; donc 2/3 = 28 × 2 = **56**
:::

### Exercice 4 — Bonus sur salaire net

Après une déduction de **11 %** sur le salaire brut (**4'600 CHF**/mois), un bonus de **10 %** a été versé sur le salaire **net**.

Quel est le montant du **bonus** en francs ?

:::solution
**409,40 CHF**

Calculs :
- Salaire net : 4'600 × 0,89 = **4'094 CHF**
- Bonus : 4'094 × 10 / 100 = **409,40 CHF**
:::

> **Contrôle rapide (ordre du corrigé)** : 15'356,25 / 1'968,75 · 409,40 · 56 / 28 · 969`;

const DEMO_201_MATHS_SUMMARY = `## Maths — Solutions
1. **1'968,75 EUR** · **15'356,25 Yuan** (1'875 × 1,05 / 8,19)
2. **969** clients (850 × 1,14)
3. **56** (prix) · **28** (qualité) — après 119 nouveaux dont 34 via Internet
4. **409,40 CHF** (net 4'094 × 10 %)`;

/** Vérification des acquis Module 201 */
const DEMO_201_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Thème : **Le client**. Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

Le client a un rôle essentiel à jouer. Explique pourquoi il en est ainsi.

:::reponse
Par ses achats, le client génère un **chiffre d'affaires** dans l'entreprise. Le CA comprend entre autres l'élément qui génère mon **salaire mensuel**.
:::

### Question 2

Décris la différence entre les **clients** et les **clients réguliers** avec tes propres mots.

:::reponse
Le **client** est un particulier ou une entreprise qui achète des biens ou des services à mon entreprise contre paiement. Le **client régulier** (fidèle) est un client qui le fait **régulièrement**.
:::

### Question 3

Le client régulier peut nous fournir de nombreuses informations passionnantes dans le cadre d'une relation commerciale qui fonctionne. Quelles informations pouvons-nous obtenir d'un client régulier ?

:::reponse
Grâce à l'achat récurrent, nous construisons une relation. Avec un contact « proche », on reçoit des infos précieuses (ex. produits dont le client pourrait encore avoir besoin) → améliorer les services et en proposer de nouveaux.
:::

### Question 4

Qu'entendons-nous par « **client interne** » ? Explique.

:::reponse
Un client interne travaille dans la **même entreprise** que moi. Ex. : le département de la production a besoin de biens de la logistique → le service de production est mon **client interne**.
:::

### Question 5

Quelles valeurs pourraient être attribuées à une relation commerciale qui fonctionne ?

:::reponse
**Honnêteté** · **Ouverture d'esprit** · **Respect** · **Confiance**
:::`;

const DEMO_201_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. Achats → **CA** → salaire
2. Client vs client **régulier** (fidèle)
3. Relation → besoins / amélioration de l'offre
4. **Client interne** = collègue / autre service de la même entreprise
5. Honnêteté · Ouverture · Respect · Confiance`;

/** Contenu Module 202 — L'attitude personnelle / apparence */
const DEMO_202_THEORIE_FULL = `## 2. L'attitude personnelle

La manière dont on se présente a une grande influence sur l'effet produit sur les autres. Il faut donc réfléchir consciemment à son apparence et l'adapter à la situation.

### 2.1 Ma position

Je transmets mon attitude ou mes convictions en montrant l'exemple de ma morale et de mes valeurs. Quelques valeurs possibles : chère (cherté / estime), honnêteté, amitié, fidélité, ordre, ponctualité.

**Remarque :** chaque personne fait des expériences différentes qui façonnent ses valeurs. Si j'ai intégré la ponctualité, être à l'heure compte pour moi — mais mes valeurs ne sont pas forcément celles des autres.

### 2.2 Ma communication

Vis-à-vis du client, j'adapte mon langage à la situation et je communique **honnêtement**. Je n'utilise pas le même registre qu'avec ma famille ou mes amis. Je choisis consciemment :
- les **mots** (communication verbale)
- mon **attitude corporelle** (non verbale)

La communication est approfondie dans le module **206**.

### 2.3 Mes vêtements

Les vêtements influencent mon apparence et mon image. Préférer des vêtements **discrets** ; éviter d'être trop ou pas assez habillé.

- **Dress code** = adapté à la situation
- **Underdressed** = pas assez bien habillé
- **Overdressed** = trop bien habillé

En privé, je peux exprimer mes goûts. Au travail, je **représente l'entreprise**. EnterSite AG attend des vêtements décents, surtout au contact clientèle ; certains départements ont des **vêtements de travail uniformes**. Après le travail : retirer la tenue pro et remettre des vêtements personnels.

### 2.4 Mon hygiène

Le terme vient de **Hygeia** (déesse grecque de la santé). L'**OMS** : « La santé est un état de complet bien-être physique, mental et social, et ne consiste pas seulement en une absence de maladie ou d'infirmité ».

L'hygiène étudie la santé. Déjà connue dans l'Empire romain (micro-organismes) ; dès **1840**, preuve que la désinfection limite les transmissions. Aujourd'hui : nettoyage, désinfection, stérilisation.

#### 2.4.1 Histoire de l'hygiène (sélection)

- **1348 — Peste** : ~100 millions de personnes touchées (Europe, Afrique du Nord, Proche-Orient) ; ~1/3 ne survivent pas ; foyer Asie centrale
- **1892 — Choléra à Hambourg** : chaleur, Elbe bas/chaud ; ~17 000 infectés, moitié morts ; sous-estimation initiale
- **1918 — Grippe espagnole** : plus de morts que la 1re Guerre mondiale (~17 M) ; propagation mondiale ; origine incertaine
- **1920 — Tuberculose** : apogée Autriche 1870–1885 (Vienne 909/100 000) ; lien industrialisation
- **1981 — SIDA** : transmission sexuelle, incurable ; CH ~16 700 personnes vivant avec le virus (données du cours) ; campagnes d'info, Aide Suisse contre le Sida (1985)
- **2020 — Covid-19** : Wuhan 31.12.2019 ; SARS-CoV-2 ; OMS : urgence de santé publique internationale (30.01.2020)

#### 2.4.2 Hygiène personnelle

Bonne hygiène = prévention des maladies **et** meilleure impression client.

**Santé et reconnaissance :** douche, cheveux, dents, oreilles, ongles ; alimentation adaptée avant un rendez-vous important (éviter café/Red Bull/odeurs fortes type oignon-ail). Apparence non soignée = effet repoussant (social / carrière). Laver aussi les vêtements régulièrement.

**Remarque :** trop de déodorant ou de parfum peut aussi être négatif — modération.

**Bactéries et virus :** certains utiles (digestion, défense) ; système immunitaire. En hiver, plus de rhumes souvent liés à l'énergie consacrée au réchauffement → immunité moins disponible.

**Voies de transmission :** contact (poignées, poignées de main, objets) ; **gouttelettes** (~1 m en parlant/toussant/éternuant) — grippe surtout.

**Mesures (valables hors pandémie aussi) :**
- distance suffisante
- tousser/éternuer dans un mouchoir ou au creux du bras
- mouchoir en papier à usage unique
- **se laver les mains régulièrement**

### 2.5 La charte d'entreprise

Déclaration écrite des **principes et valeurs** internes et externes. Guide l'action (motivation) et affiche ce que l'entreprise défend (**Corporate Identity**). Décrit la vision et cadre stratégies / objectifs / opérations.

#### 2.5.1 Fonctions

**Interne — légitimer les décisions**
- Que représentons-nous ? (**Vision**)
- Que voulons-nous accomplir ? (**Mission**)
- Quelles valeurs guident nos actions ? (**Charte**)

**Externe — orienter clients et parties prenantes**
- Que représente cette entreprise ?
- Quelle image poursuit-elle ?

#### 2.5.2 Charte EnterSite AG (extraits)

**Principes :** n'être actif que là où l'on est meilleur ; développer collaborateurs via responsabilités ; entreprise prospère, indépendante, taille gérable.

**Prestations :** services utiles avec savoir-faire ; commerce de produits adaptés aux problèmes clients ; services d'accompagnement élevés ; offre évolutive.

**Marchés :** clients industriels et privés.

**Qualité / techno :** « toujours une idée d'avance » (collaborateurs, travail, produits).

**Financement :** rendement approprié, bilan équilibré.

**Collaborateurs :** compétents, motivés, satisfaits ; information, délégation, initiative ; salaire selon fonction/performance/marché ; cadres : intégrité, leadership, entrepreneurial.

**Guide :** management participatif adapté à la situation ; **Management by Objectives (MbO)** ; management by exception (signaler les écarts) ; voie hiérarchique pour les instructions (flexible pour l'info / projets).

**Clients / fournisseurs :** service client au cœur ; justes mais exigeants envers fournisseurs.

**Public :** économie de marché libre ; collaboration loyale institutions ; associations ; information objective ; engagement politique/armée souvent positif.

**Environnement :** intégrer l'écologie (production, énergie, déchets, MP, emballages) ; mesures au-delà du légal si possible, même avec surcoût.`;

const DEMO_202_THEORIE_SUMMARY = `## À retenir — Module 202

### Attitude
Apparence consciente adaptée à la situation

### Position / valeurs
Honnêteté, fidélité, ordre, ponctualité… · personnelles ≠ universelles

### Communication
Registre client ≠ privé · verbal + non verbal · honnêteté (→ module 206)

### Vêtements
Dress code · under/overdressed · au travail = représenter l'entreprise · tenues pro

### Hygiène
OMS = bien-être global · histoire des épidémies (peste → Covid)  
Soins personnels + vêtements propres · mains / distance / toux  
Trop de parfum = négatif aussi

### Charte
Vision / Mission / valeurs · identité interne + image externe  
EnterSite : client au centre, qualité, MbO, écologie`;

const DEMO_202_APERCU_FULL = `## Aperçu du module 202

Ce module traite de l'**attitude personnelle** au contact client : valeurs, communication, tenue, hygiène et charte d'entreprise.

### Vous allez découvrir
1. Valeurs et position personnelle
2. Communication verbale / non verbale
3. Dress code et hygiène
4. Charte EnterSite AG (vision, mission, principes)

### Source
EnterSite — Logistics by ASFL / SVBL`;

const DEMO_202_APERCU_SUMMARY = `## Aperçu — Module 202
- Attitude, com, tenue, hygiène
- Charte d'entreprise`;

const DEMO_202_OBJECTIFS_FULL = `## Objectifs du module 202

À l'issue de ce module, l'apprenti·e est capable de :

- Relier ses **valeurs** à son attitude professionnelle
- Adapter communication et **tenue** au contexte client
- Expliquer l'importance de l'**hygiène** (santé + image) et les gestes de prévention
- Décrire le rôle d'une **charte** (vision, mission, valeurs)`;

const DEMO_202_OBJECTIFS_SUMMARY = `## Objectifs
- Valeurs + com + tenue
- Hygiène
- Charte entreprise`;

/** Glossaire Module 202 */
const DEMO_202_GLOSSAIRE_FULL = `## Glossaire — Module 202

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Hygiène | | Étude de la prévention des maladies et du maintien, de la promotion et de la consolidation de la santé. Elle vise à maintenir ou améliorer les performances et le bien-être des individus et de la société. |
| Micro-organisme | | Organisme vivant microscopique (bactéries, virus, champignons, etc.) capable de se multiplier et d'influencer la santé, les denrées ou l'environnement. |
| Nuisibles | | Organismes (insectes, rongeurs, parasites…) qui portent atteinte à la santé, aux marchandises, aux locaux ou à l'hygiène générale. |
| Moisissure | | Champignons microscopiques qui se développent sur des matières organiques en présence d'humidité ; elles détériorent les produits et peuvent présenter un risque sanitaire. |
| Corporate Identity | Identité d'entreprise | Ensemble des principes, valeurs et signes (visuels, culturels) par lesquels une entreprise se définit et se montre à l'interne comme à l'externe. |
| Vision | | Image du futur souhaité : ce que l'entreprise veut représenter et devenir à long terme. |
| Mission | | Ce que l'entreprise veut accomplir au quotidien : sa raison d'être et le but de ses activités. |
| Partie prenante | Stakeholder | Personne ou organisation concernée par les décisions et le succès de l'entreprise (collaborateurs, clients, fournisseurs, investisseurs, autorités, public…). |
| Rendement | | Rapport entre le résultat obtenu (ex. bénéfice) et les moyens engagés ; mesure de rentabilité attendue pour assurer la viabilité de l'entreprise. |
| Structures du bilan | | Composition et équilibre du bilan (actif / passif) : façon dont le patrimoine et son financement sont organisés pour garder l'entreprise financièrement saine. |
| Participation | | Mode de management associant les collaborateur·trice·s aux décisions et à la responsabilité, selon la situation. |
| Management by Objectives (MbO) | Management par objectifs | Style de direction fondé sur des objectifs convenus : les résultats attendus sont fixés et suivis ; chacun sait ce qu'il doit atteindre. |
| Management by Exception (MbE) | Management par exception | Style de direction où l'on n'intervient (ou ne signale) que les **écarts** importants par rapport aux objectifs / normes convenus. |
| Loyauté | | Fidélité et fiabilité dans les relations (entreprise, institutions, partenaires) : agir de façon honnête et engagée, dans le respect des engagements. |`;

const DEMO_202_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **Hygiène** · **Micro-organisme** · **Nuisibles** · **Moisissure**
- **Corporate Identity** · **Vision** · **Mission** · **Partie prenante**
- **Rendement** · **Structures du bilan** · **Participation**
- **MbO** (objectifs) · **MbE** (écarts) · **Loyauté**`;

/** Mises en situation Module 202 */
const DEMO_202_SITUATION_FULL = `## Mises en situation — Module 202

Contexte : tu travailles chez **EnterSite AG**. Les missions portent sur l'**hygiène**, l'**apparence** et les attentes professionnelles. Pour chaque mission, rédige d'abord ta propre réponse, puis compare éventuellement avec la solution proposée.

---

## Mission 1 — L'histoire de l'hygiène

La notion d'hygiène joue un rôle important dans l'histoire de l'humanité. Aujourd'hui encore, un nombre non négligeable de personnes perdent la vie en raison d'un manque d'hygiène.

Élabore une **définition personnelle** du terme « hygiène ».

:::reponse
L'hygiène est l'étude de la prévention des maladies et du maintien, de la promotion et de la consolidation de la santé. Elle a pour but de maintenir ou d'améliorer les performances et le bien-être des individus et de la société.
:::

### 1.1 Termes et événements liés à l'hygiène

Recherche et explique, en quelques phrases, les termes / événements suivants.

**Hygieia :** **réponse ouverte** (recherche individuelle — pas de solution unique dans le cours).

**1348 — Première vague de peste**

:::reponse
En 1348, les épidémies de peste sont déjà connues, mais cette vague frappe comme jamais auparavant. Près de **100 millions** de personnes sont touchées en Europe, en Afrique du Nord et au Proche-Orient. Environ **un tiers** de la population ne survit pas. L'épidémie est localisée en **Asie centrale**.
:::

**1892 — Épidémie de choléra à Hambourg**

:::reponse
Vague de chaleur et **Elbe** basse / chaude (~22 °C) : conditions idéales pour bactéries et virus. Premier cas le **15 août** ; sous-estimation initiale par les responsables. ~**17 000** infectés à Hambourg, la moitié ne survit pas. D'autres localités sont aussi touchées.
:::

**1918 — Grippe espagnole**

:::reponse
Dernière année de la 1re Guerre mondiale : propagation mondiale en quelques mois. Vers **1920**, plus de morts que pendant toute la guerre (~**17 millions**). Malgré le nom, l'origine n'est **pas** en Espagne (souvent citée : première infection avérée au **Kansas**, USA).
:::

**1920 — Tuberculose**

:::reponse
Détectée / mise en avant en **1920**, mais la maladie sévit déjà depuis longtemps. Apogée **1870–1885** en Autriche (Vienne : **909**/100 000). Propagation liée notamment à l'**industrialisation**.
:::

**1981 — SIDA**

:::reponse
Apparition dans le monde occidental au début des années 1980 : transmission sexuelle, **incurable**. Suisse : ~**16 700** personnes vivant avec le virus (données du cours) ; campagnes d'info ; **Aide Suisse contre le Sida** fondée en **1985**.
:::

**2020 — Covid-19**

:::reponse
Première contamination officiellement confirmée signalée à l'OMS le **31.12.2019** à **Wuhan**. Virus nommé ensuite **Covid-19** / **SARS-CoV-2**. Le **30.01.2020**, l'OMS qualifie la situation d'**urgence de santé publique de portée internationale** (niveau d'alerte le plus élevé).
:::

---

## Mission 2 — Que signifie l'hygiène personnelle ?

Que signifie pour toi l'hygiène personnelle ? Décris ce que tu entends par là et ce que tu fais pour qu'elle réponde à tes exigences.

- **Je comprends cela :** **réponse individuelle**
- **Je fais des efforts pour ça :** **réponse individuelle**

---

## Mission 3 — Qu'attend-on d'EnterSite AG ?

Tu as été engagé·e récemment comme apprenti·e logisticien·ne chez **EnterSite AG** (département Service clientèle et marketing). Même si les attentes d'hygiène ne sont pas toujours explicites, elles existent. Explique les attentes de la direction (**M. Reto Gugger**).

:::reponse
**Activités internes à l'entreprise :**
- Vêtements propres
- Se laver les cheveux régulièrement

**Contact physique avec le client :**
- Se laver les cheveux régulièrement
- Garder les ongles soignés
- Tenue professionnelle propre
- Dents brossées
:::

---

## Mission 4 — Perception de l'extérieur (collaborateurs et clients)

Mets-toi à la place de tes collègues ou de M. Gugger. Comment ces personnes te décriraient-elles en termes d'hygiène personnelle ?

**Perception de l'extérieur :** **réponse individuelle**

### 4.1 Préparation au contact clientèle

Au cours des prochaines semaines, tu seras en contact direct avec des clients. Comment te prépares-tu ?

:::reponse
Checklist de préparation :
- Quels travaux vais-je effectuer ?
- De quel type de clients s'agira-t-il ?
- Quelle tenue vestimentaire est souhaitée par l'employeur ?
- Respecter l'hygiène personnelle
- Cheveux soignés et coiffés
:::

---

## Mission 5 — Check-list de la communication (EnterSite)

> **Astuce EnterSite** : suis la visite virtuelle dans la salle **13 V2**. Traite la liste de contrôle sur la **communication**. Cherche l'image de droite : ta propre perception est-elle correcte ? Lien : [Vers le site EnterSite](#entersite-placeholder) (URL à compléter lorsque disponible).

Mission pratique EnterSite — **pas de solution unique** (à traiter dans la visite virtuelle).

---

## Mission 6 — Discussion de la situation de travail et d'apprentissage (STA)

Discute de ta STA en plénière avec la classe et l'enseignant·e. Note les informations complémentaires : **réponse ouverte** (pas de solution unique).`;

const DEMO_202_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **M1** : définition hygiène · jalons 1348→2020 (Hygieia = ouverte)
- **M2** : hygiène personnelle (individuelle)
- **M3** : attentes EnterSite (interne + client)
- **M4** : perception ext. (individuelle) · **4.1** checklist clientèle
- **M5** : salle **13 V2** check-list communication
- **M6** : discussion STA`;

/** Exercices de maths Module 202 */
const DEMO_202_MATHS_FULL = `## Exercices de mathématiques — Module 202

Calcule chaque résultat, puis vérifie avec le bouton solution.

### Exercice 1 — Pourcentage de guérisons Covid (25.01.2021)

| | Cas | Guéris |
| --- | --- | --- |
| **Suisse** | 509'279 | 317'600 |
| **Monde** | 99'275'637 | 54'833'616 |

Calcule le pourcentage de personnes guéries en Suisse et dans le monde. Où le pourcentage est-il le plus élevé ?

:::solution
**Suisse : 62,36 %** · **Monde : 55,23 %**

Calcul CH : 317'600 × 100 / 509'279 = **62,36 %**  
Calcul monde : 54'833'616 × 100 / 99'275'637 = **55,23 %**

→ Pourcentage de guérisons **plus élevé en Suisse**.
:::

### Exercice 2 — Moyenne des nouvelles infections (17–23 janvier 2021)

| Date | Cas |
| --- | --- |
| 17.1 (lun.) | 1'561 |
| 18.1 (mar.) | 1'562 |
| 19.1 (mer.) | 1'562 |
| 20.1 (jeu.) | 2'249 |
| 21.1 (ven.) | 2'717 |
| 22.1 (sam.) | 2'192 |
| 23.1 (dim.) | 2'145 |

Calcule la moyenne des nouvelles infections du 17 au 23 janvier 2021.

:::solution
**1'998 cas**

Total : 1'561 + 1'562 + 1'562 + 2'249 + 2'717 + 2'192 + 2'145 = **13'988**  
Moyenne : 13'988 / 7 = 1'998,28 ≈ **1'998 cas**
:::

### Exercice 3 — Augmentation de l'espérance de vie (CH)

En **1960** : **71,64** ans · En **2017** : **83,6** ans. Quel est le pourcentage d'augmentation ?

:::solution
**+16,69 %**

83,6 × 100 / 71,64 = **116,69 %**  
Augmentation : 116,69 − 100 = **16,69 %**
:::

### Exercice 4 — Écart USA vs Suisse (2017)

Espérance de vie USA **2017** : **78,54** ans · Suisse : **83,6** ans (base). Quel est l'écart en pourcentage ? Quelles raisons possibles ?

:::solution
**Écart : 6,05 %**

78,54 × 100 / 83,6 ≈ **93,95 %**  
Écart : 100 − 93,95 = **6,05 %**

Raisons possibles : **mode de vie** et **nutrition** (façon de se nourrir).
:::

> **Contrôle rapide (footer corrigé)** : 16,69 · 62,36 | 1'998 | 6,05`;

const DEMO_202_MATHS_SUMMARY = `## Maths — Solutions
1. CH **62,36 %** > monde **55,23 %**
2. Moyenne **1'998** cas
3. Espérance de vie **+16,69 %**
4. Écart US/CH **6,05 %** (mode de vie / nutrition)`;

/** Vérification des acquis Module 202 — Mon apparence */
const DEMO_202_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

*Module 202 — Mon apparence*

Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

Lorsque l'on est en contact avec des clients, il faut choisir des vêtements **discrets**. Qu'est-ce que cela signifie ? Explique.

:::reponse
**Décent** signifie : adapté ou discret. Les vêtements sont correctement choisis en fonction de la situation.
:::

### Question 2

Dans la littérature, on parle souvent d'« **attitude** ». Explique ce que tu entends par « attitude » et note un exemple.

:::reponse
L'attitude correspond à mes **valeurs**. Qu'est-ce qui est important pour moi ? Qu'est-ce que je veux donner mais aussi exiger ? Exemple : mes parents m'ont transmis la valeur de la **ponctualité** — je veux être à l'heure parce que c'est important pour moi.
:::

### Question 3

Quelles mesures permettent de prévenir d'éventuelles pandémies ou transmissions de maladies infectieuses ?

:::reponse
1. Éviter de rester en groupe
2. Se tenir délibérément à distance de son interlocuteur
3. Ne jamais tousser ou éternuer en direction de son entourage
4. N'utiliser qu'une seule fois des mouchoirs en papier
5. Se laver régulièrement les mains
:::

### Question 4

L'humanité a déjà dû faire face à de nombreuses maladies et épidémies. Cite **trois** maladies ou épidémies connues dans l'histoire de l'humanité.

:::reponse
La **grippe espagnole**, le **sida**, la **peste**, etc.
:::

### Question 5

Définis le terme « **épidémie** ».

:::reponse
Une épidémie (également appelée maladie épidémique) est une maladie dont l'apparition est **limitée dans le temps et dans l'espace** par une **multiplication des cas**.
:::`;

const DEMO_202_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. Vêtements discrets = adaptés / décents selon la situation
2. Attitude = valeurs (ex. ponctualité)
3. 5 mesures : groupes, distance, toux, mouchoir unique, mains
4. Grippe espagnole, sida, peste…
5. Épidémie = multiplication des cas, limitée temps / espace`;

/** Contenu Module 203 — Gestion de soi */
const DEMO_203_THEORIE_FULL = `## 3. Gestion de soi

L'**autogestion** est la compétence à se gérer soi-même. Des techniques issues du management, de la psychologie et de la gestion personnelle aident à augmenter sa motivation (**intrinsèque**), clarifier ses objectifs et mieux les atteindre. Compétences partielles : motivation, fixation d'objectifs, planification, gestion du temps, organisation, capacité d'apprentissage, contrôle des résultats via le feedback.

### 3.1 Se connaître — la fenêtre de Johari

Quelle est ma perception de moi-même, quelle est celle des autres ? Nous pensons souvent communiquer clairement et « lire » les autres — ce n'est pas le cas. Chacun a des secrets (honte, peur…). La **fenêtre de Johari** distingue quatre zones pour mieux travailler et vivre ensemble.

1. **Personne publique** — comportement et motivation connus de moi **et** des autres
2. **Mon secret** — connu de moi, caché aux autres
3. **Zone aveugle** — visible pour les autres, inconscient pour moi (habitudes, refoulé, préconscient)
4. **L'inconnu** — inconnu de moi **et** des autres (inconscient)

#### 3.1.1 Les cinq piliers de l'identité (Hilarion Petzold)

1. **Corporalité** — corps, esprit, psychologie ; base de l'identité. Menaces : maladie, accident, traumatisme.
2. **Relations sociales** — contacts, soutien, reconnaissance. Menaces : rupture, décès, isolement.
3. **Travail et prestations** — tâche utile, capacités, réalisation. Menace : perte / absence de tâche.
4. **Sécurité matérielle** — niveau de vie, finances, existence ; liée aux expériences d'enfance. Menace : peurs existentielles.
5. **Valeurs et idéaux** — vivre selon ses valeurs = harmonie ; conflits si valeurs divergent. Ce pilier peut soutenir l'identité même si d'autres fléchissent.

### 3.2 Styles de direction (Kurt Lewin)

Le style de leadership peut varier selon la situation, puis revenir à sa forme habituelle.

#### 3.2.1 Autoritaire (décision et directives exclusives)
**+** résolution rapide, résultats court terme, tâches/responsabilités claires, orienté action  
**−** tensions (peu de consensus), peu de flexibilité, surcharge du supérieur

#### 3.2.2 Laissez-faire (délégation large)
**+** potentiel / idées des collaborateurs, innovation, soulagement du supérieur  
**−** incertitude, responsabilités floues, tâches désagréables non faites, pas d'unité de doctrine

#### 3.2.3 Coopératif (codécision)
**+** résultats long terme, collaborateurs satisfaits, flexibilité, appartenance  
**−** décisions lentes, résultats court terme parfois moins bons, exigences élevées en leadership psychologique

#### 3.2.4 Caritatif (besoins des collaborateurs prioritaires)
**+** climat humain, soutien aux inquiets, questions critiques possibles  
**−** sollicitude = contrôle ressenti, manque de défi / motivation, erreurs et doublons faute d'alignement objectifs

### 3.3 Types de conflits (Thomas Kilmann)

Là où l'on travaille ensemble, des conflits apparaissent. Chacun veut ne pas « perdre la face ». Le comportement se différencie selon la prise en compte des **besoins** des parties (pas seulement des solutions).

### 3.4 Six étapes de gestion des conflits

1. Je suis dérangé par…
2. Mon objectif est… (je veux…)
3. Ton objectif est… (que veux-tu…)
4. Points communs
5. Recherche de solutions (idées → accepter → évaluer)
6. Accord (concret, détaillé, limité dans le temps)

### 3.5 Défi intellectuel — le stress

Stress = stimuli internes et externes. Il existe un stress **positif** et un stress **négatif**.

#### 3.5.1 Eustress
Facteurs positifs : ↑ attention, performance maximale, sans dommage ; effet bénéfique psychique et physique.

#### 3.5.2 Distress (disstress)
Stimuli menaçants / trop exigeants ; négatif si pas de compensation ou stress fréquent → développer des stratégies.

#### 3.5.3 Réactions humaine
Programme évolutif **combat ou fuite**. Autres : agression, fuite, acceptation, déni, peur, dépression.

Corps non conçu pour un stress permanent : cœur ↑, muscles tendus, respiration ↑, agitation, concentration ↓.

**Remarque :** exigences professionnelles ↑ → pression temps / performance.

**Compensation :** sport d'endurance, contacts sociaux (privés / entreprise), yoga, communication pour résoudre conflits.

### 3.6 Défi physique — sécurité au travail

#### 3.6.1 Sources de danger
Dangers aigus (accidents) et insidieux (troubles chroniques, posture). En logistique : risques typiques. ~**80 %** des accidents = comportement dangereux ; ~**20 %** = conditions dangereuses.

Comportements dangereux : non-respect des règles, négligence, non-application des protections, prise de risque volontaire.

#### 3.6.2 Minimiser les risques

**Pieds** — roues / chariots (pression élevée, ex. > 20 kN) ; clous. Pas de baskets/sandales. Chaussures de protection (orteils, plante). Règles : pas sous charges soulevées ; loin des roues ; rien au sol ; pieds dans le véhicule sur engins.

**Dos** — 24 vertèbres mobiles + sacrum/coccyx ; disques = amortisseurs. Activités à risque : reconditionnement, picking, chargement. Prendre sans se pencher profondément ; plans de prélèvement/rangement proches ; moyens auxiliaires (élévateur, diable…). **Dos droit** ; sangles si besoin.

**Mains** — gants pour empilage lourd, surfaces rugueuses, tri palettes, caisses bois, cerclages ; gants caoutchouc pour substances agressives ; gants légers hygiène / peau sensible.

**Tête** — casque si palans / gerbage / moto (loi) / manœuvre (+ gilet). Zone de gerbage : personne à proximité.

**Yeux** — lunettes si corrosifs, éclats/poussière, contrôle batterie élévateur. Douche oculaire (solution saline) → puis **ophtalmologue en urgence**.

**Cerclages (feuillards)** — couper pour extrémité courte + longue ; maintenir la longue (bois/gants, pas mains nues).

**Ergonomie** — aménager postes et équipements pour limiter fatigue et problèmes de santé ; adapter à la tâche et au physique. Signal d'alerte : tensions nuque.`;

const DEMO_203_THEORIE_SUMMARY = `## À retenir — Module 203

### Autogestion
Motivation, objectifs, temps, organisation, feedback

### Johari
Public · Secret · Aveugle · Inconnu

### 5 piliers identité
Corps · Social · Travail · Sécurité matérielle · Valeurs

### Leadership (Lewin)
Autoritaire · Laissez-faire · Coopératif · Caritatif  
(+/− selon situation)

### Conflits
Kilmann (besoins) · 6 étapes → accord concret daté

### Stress
**Eustress** + · **Distress** − · combat/fuite · compensation (sport, social, yoga)

### Sécurité physique
80 % comportement · EPI pieds/dos/mains/tête/yeux  
Dos droit + aides · ergonomie`;

const DEMO_203_APERCU_FULL = `## Aperçu du module 203

Ce module traite de la **gestion de soi** : connaissance de soi, leadership, conflits, stress et sécurité physique au travail.

### Vous allez découvrir
1. Fenêtre de Johari et 5 piliers de l'identité
2. Styles de direction (Lewin)
3. Conflits (Kilmann) et 6 étapes
4. Eustress / distress et prévention accidents / EPI / ergonomie

### Source
EnterSite — Logistics by ASFL / SVBL`;

const DEMO_203_APERCU_SUMMARY = `## Aperçu — Module 203
- Se connaître (Johari, piliers)
- Leadership, conflits, stress
- Sécurité et ergonomie`;

const DEMO_203_OBJECTIFS_FULL = `## Objectifs du module 203

À l'issue de ce module, l'apprenti·e est capable de :

- Expliquer la **fenêtre de Johari** et les **cinq piliers** de l'identité
- Comparer les styles de direction de Lewin (avantages / inconvénients)
- Appliquer les **six étapes** de gestion des conflits
- Distinguer eustress et distress et citer des moyens de compensation
- Identifier les risques physiques logistiques et les mesures de protection / ergonomie`;

const DEMO_203_OBJECTIFS_SUMMARY = `## Objectifs
- Johari + piliers
- Leadership / conflits / stress
- EPI et ergonomie`;

/** Glossaire Module 203 */
const DEMO_203_GLOSSAIRE_FULL = `## Glossaire — Module 203

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Motivation intrinsèque | | Motivation qui vient de l'intérieur : on agit par intérêt, plaisir ou sens personnel pour la tâche elle-même (pas seulement pour une récompense externe). |
| Motivation extrinsèque | | Motivation provenant de l'extérieur : on agit pour obtenir une récompense (salaire, prime, reconnaissance) ou éviter une sanction. |
| Incitations monétaires | | Stimuli financiers (augmentation, bonus, prime…) destinés à encourager un comportement ou une performance souhaités. |
| Unité de doctrine | | Alignement partagé des principes, méthodes et objectifs dans l'entreprise ; sans elle, chacun « bricole » à sa façon (risque typique du laissez-faire). |
| Évolution | | Changement progressif au fil du temps (comportement, satisfaction, point aveugle…) ; aussi cadre biologique (ex. réaction combat / fuite héritée de l'évolution). |
| Aiguë | | Qui survient soudainement et avec intensité (ex. danger ou blessure **aigu(ë)** : accident immédiat). |
| Cartilage | | Tissu souple entre les os (ex. disques intervertébraux) qui amortit les chocs ; fragile en cas de mauvaises postures / charges. |
| Chronique | | Qui dure longtemps ou revient régulièrement (ex. trouble **chronique** lié à une mauvaise posture, pas un accident unique). |
| Diable | | Engin de manutention manuel (chariot à deux roues / diable de manutention) pour déplacer des charges sans trop se pencher — aide ergonomique. |`;

const DEMO_203_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **Motivation** intrinsèque (intérieur) vs extrinsèque (extérieur) · **incitations monétaires**
- **Unité de doctrine** · **Évolution**
- **Aiguë** vs **chronique** · **Cartilage** · **Diable** (manutention)`;

/** Mises en situation Module 203 */
const DEMO_203_SITUATION_FULL = `## Mises en situation — Module 203

Contexte : tu travailles chez **EnterSite AG**. Les missions portent sur la **fenêtre de Johari**, le feedback et les **défis physiques** au travail. Rédige d'abord ta propre réponse, puis utilise le bouton pour afficher ou masquer les solutions / exemples proposés.

### Vue d'ensemble des missions
1. Johari — auto-évaluation
2. Évaluation par des tiers
3. Compléter Johari avec le feedback externe
4. Évolution du point aveugle
5. Défis corporels (+ 5.1 ergonomie · 5.2 EnterSite checklist)
6. Discussion STA

---

## Mission 1 — Auto-évaluation (fenêtre de Johari)

La **fenêtre de Johari** compare perception de soi et perception des autres. Elle représente, dans un rectangle à quatre parties, les caractéristiques conscientes et inconscientes du comportement et de la personnalité. Une équipe peut s'en servir pour analyser comportements et dynamiques de groupe. Les instruments **feedback** et **révélation de soi** rendent le comportement plus transparent et élargissent la marge de manœuvre.

| | Connu de moi | Inconnu de moi |
| --- | --- | --- |
| **Connu des autres** | Personne publique | Point aveugle |
| **Inconnu des autres** | Mon secret | Inconnu |

**Auto-évaluation :** choisis dans la liste ci-dessous **au maximum six adjectifs** qui te décrivent le mieux. Donne aussi des **secrets** sur toi-même (zone « Mon secret »).

acceptant · stupide · tendu · adaptable · attentif · modeste · déterminé · énergique · détendu · extraverti · capable · amical · attentionné · patient · habile · génial · heureux · généreux · serein · utile · idéaliste · intelligent · introverti · compétent · complexe · audacieux · affectueux · logique · puissant · compatissant · pensif · nerveux · gentil · organisé · réactif · mature · religieux · calme · timide · confiant · sûr de soi · sentimental · spontané · silencieux · fier · cherchant · courageux · indépendant · fiable · raisonnable · digne de confiance · chaleureux · sage · drôle · digne

:::reponse
**Réponse individuelle** — jusqu'à 6 adjectifs + secrets (pas de solution unique).
:::

---

## Mission 2 — Évaluation par un tiers

Choisis dans la **même liste d'adjectifs** (mission 1) **au maximum six adjectifs** qui décrivent le mieux ton collègue de travail, ton camarade de classe ou ton camarade d'école.

:::reponse
**Réponse individuelle** — jusqu'à 6 adjectifs pour un tiers (pas de solution unique).
:::

---

## Mission 3 — Récapitulation et tour de feedback

Rassemble toutes les évaluations externes. Complète ta **fenêtre de Johari** avec les retours de tes collègues / camarades (notamment la zone **Point aveugle**).

:::reponse
**Réponse individuelle** — grille Johari complétée avec le feedback externe (pas de solution unique).
:::

---

## Mission 4 — Évolution du point aveugle

Compare ton auto-évaluation avec les évaluations externes. **Comment ton « point aveugle » évolue-t-il ?**

:::reponse
**Réponse individuelle** — comparaison auto / tiers et évolution du point aveugle (pas de solution unique).
:::

---

## Mission 5 — Les défis corporels du monde du travail

Se connaître et s'utiliser correctement est important. Il est tout aussi important de comprendre et de respecter les **défis physiques** au travail : voir les sources de danger et agir correctement.

> **Astuce EnterSite** : suis la visite virtuelle de la **logistique**, salle **3 V4**. Cherche l'image à droite et modifie le **texte à trous** correspondant. Lien : [Vers le site EnterSite](#entersite-placeholder) (URL à compléter lorsque disponible).

:::reponse
**Réponse individuelle** — texte à trous EnterSite salle **3 V4** (pas de solution unique dans le cours papier).
:::

### Mission 5.1 — Ergonomie

Un terme très présent dans ce contexte : **ergonomie**. Décris-le le plus précisément possible avec tes propres mots.

:::reponse
**Réponse individuelle** — ex. aménager postes et équipements pour limiter fatigue et problèmes de santé, adaptés à la tâche et au physique (cf. théorie 3.6).
:::

### Mission 5.2 — Liste de contrôle EnterSite

Tu es prêt·e pour le test final.

> **Astuce EnterSite** : suis la visite virtuelle dans la salle **13 V2**. Traite la **liste de contrôle** sur la communication. Cherche l'image à droite : ta propre perception est-elle correcte ? Lien : [Vers le site EnterSite](#entersite-placeholder).

:::reponse
**Réponse individuelle** — checklist EnterSite salle **13 V2** (même salle que module 202 — consignes du cours).
:::

---

## Mission 6 — Discussion STA

Discute de la situation de travail et d'apprentissage en plénière avec la classe et l'enseignant·e. Note les informations complémentaires.

:::reponse
**Réponse ouverte** — notes de discussion STA (pas de solution unique).
:::`;

const DEMO_203_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **M1–M4** : Johari (auto / tiers / feedback / point aveugle) — individuelles
- **M5** : EnterSite logistique salle **3 V4** (texte à trous)
- **M5.1** : ergonomie · **M5.2** : salle **13 V2** checklist
- **M6** : discussion STA`;

/** Exercices de maths Module 203 */
const DEMO_203_MATHS_FULL = `## Exercices de mathématiques — Module 203

Calcule chaque résultat, puis vérifie avec le bouton solution.

### Exercice 1 — Augmentation de salaire

Tu n'es plus satisfait de ton salaire. Entretien avec **M. Gugger** : tu gagnes actuellement **13 mois** à **4'300 CHF**/mois. Il t'accorde **+200 CHF**/mois.

De combien de **pourcent** ton salaire a-t-il augmenté ?

:::solution
**4,65 %**

Nouveau salaire : 4'300 + 200 = **4'500 CHF**  
Calcul : 200 / 4'300 × 100 = **4,65 %**  
(ou 4'500 × 100 / 4'300 = 104,65 % → 104,65 − 100 = **4,65 %**)
:::

### Exercice 2 — Commandes supplémentaires

Après l'augmentation, tu prépares **125** commandes/jour, soit **10** de plus qu'avant.

Ces 10 commandes supplémentaires représentent combien de **pourcent** ?

:::solution
**8,69 %**

Avant : 125 − 10 = **115** commandes  
Calcul : 125 / 115 × 100 = 108,69 % → augmentation **8,69 %**
:::

### Exercice 3 — Abonnement fitness

Avec l'augmentation, tu t'offres un abonnement fitness à **398 CHF**/an. Quel **pourcentage** de ton salaire annuel cela représente-t-il ?

:::solution
**0,68 %**

Salaire annuel : 4'500 × 13 = **58'500 CHF**  
Calcul : 398 × 100 / 58'500 = **0,68 %**
:::

### Exercice 4 — Satisfaction des collaborateurs

M. Gugger mène une enquête de satisfaction chez EnterSite AG. Comment la satisfaction a-t-elle évolué ?

:::solution
**2020 : 4,90** · **2021 : 4,94** → évolution **positive**

- Enquête 2020 : 44,1 / 9 = **4,90**
- Enquête 2021 : 44,5 / 9 = **4,94**
:::

> **Contrôle rapide (ordre du corrigé)** : 4,65 / 8,69 / 0,68 / 4,90 / 4,94`;

const DEMO_203_MATHS_SUMMARY = `## Maths — Solutions
1. **4,65 %** (4'300 → 4'500)
2. **8,69 %** (115 → 125 commandes)
3. **0,68 %** (398 / 58'500)
4. Satisfaction **4,90** → **4,94** (positif)`;

/** Vérification des acquis Module 203 */
const DEMO_203_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Thème : **Gestion de soi**. Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

Complète la fenêtre de Johari (zones **A–D**) et décris les quatre domaines avec tes propres mots.

| | Connu de moi | Inconnu de moi |
| --- | --- | --- |
| **Connu des autres** | **A** Personne publique | **B** Zone aveugle |
| **Inconnu des autres** | **C** Mon secret | **D** Inconnu |

:::reponse
- **A — Personne publique :** activité libre / faits publics ; comportement et motivation perceptibles pour **moi et les autres**.
- **B — Zone aveugle :** visible pour les **autres**, inconscient pour moi (habitudes, refoulé, préconscient).
- **C — Mon secret :** connu de **moi**, caché aux autres.
- **D — Inconnu :** inconnu de moi **et** des autres (inconscient) ; rarement abordé en groupe d'entraînement.
:::

### Question 2

Complète les **cinq piliers** de l'identité (termes techniques).

:::reponse
1. **Corps** (corporalité)
2. **Relations sociales**
3. **Travail et performance**
4. **Sécurité matérielle**
5. **Valeurs et idéaux**
:::

### Question 3

Cite les styles de direction connus et indique pour chacun un avantage et un inconvénient.

:::reponse
**Autoritaire**  
+ Résolution rapide, bons résultats court terme, tâches/responsabilités claires, orienté action  
− Tensions (peu de consensus), peu de flexibilité, surcharge du supérieur

**Laissez-faire**  
+ Potentiel / idées des collaborateurs, innovation, soulagement du supérieur  
− Incertitude, responsabilités floues, tâches désagréables non faites, **pas d'unité de doctrine**

**Coopératif**  
+ Résultats long terme, collaborateurs satisfaits, flexibilité, appartenance  
− Décisions lentes, résultats court terme parfois moins bons, exigences élevées en leadership psychologique

**Caritatif**  
+ Climat humain, soutien aux inquiets, questions critiques possibles  
− Sollicitude = contrôle ressenti, manque de défi / motivation, erreurs et doublons faute d'alignement objectifs
:::

### Question 4

Quel comportement les parties en conflit doivent-elles adopter pour une situation **gagnant-gagnant** ?

:::reponse
Le comportement **coopératif** conduit à une situation gagnant / gagnant pour les deux parties.
:::

### Question 5

Complète les **six étapes** de la résolution des conflits.

:::reponse
1. Ce qui me dérange…
2. Mon but…
3. Ton but…
4. Nos points communs…
5. Recherche de solutions…
6. Accord…
:::`;

const DEMO_203_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. Johari A–D : public · aveugle · secret · inconnu
2. Corps · Relations · Travail · Sécurité matérielle · Valeurs
3. Autoritaire · Laissez-faire · Coopératif · Caritatif (+/−)
4. Comportement **coopératif** = win-win
5. Six étapes : dérange → mon but → ton but → communs → solutions → accord`;

/** Contenu Module 204 — Le marché */
const DEMO_204_THEORIE_FULL = `## 4. Le marché

Au néolithique, l'homme commence à récolter et stocker des céréales, puis à les cultiver. Certains se spécialisent (poterie, outils, taille de pierre) et échangent le surplus contre de la nourriture.

À la fin de l'âge du bronze, on échange des marchandises contre d'autres — il faut savoir négocier. Ainsi naissent les **marchés**, où marchand et acheteur se rencontrent (marchandises contre marchandises ou contre argent). Aujourd'hui encore : marché aux légumes, aux poissons, de Noël…

Pour qu'un marché se crée, il faut un **besoin** : envie ou souhait de remédier à un manque ressenti ou réel. L'élimination du manque = **satisfaction du besoin**. Les besoins varient selon l'âge, le pays, la profession, le lieu, l'époque… Exemple EnterSite : besoin de disques durs de stockage externes (**NAS**) → modèle d'entreprise.

### 4.1 L'étude de marché

Autrefois, l'expérience suffisait (marché gérable). Le marché grandissant, les entreprises doivent l'étudier avec des méthodes de marketing pour réduire les incertitudes et décider correctement.

#### 4.1.1 Pourquoi est-elle devenue nécessaire ?
- Plus d'entreprises → concurrence / lutte d'exclusion
- Marchés saturés ou biens de substitution → innovation
- Mondialisation → nouveaux marchés
- Renchérissement des matières premières
- etc.

Questions typiques : proposons-nous quelque chose de nouveau ? Améliorer le CA ? Nouveau groupe de clients ?

**Remarque :** tout changement sur le marché nécessite au préalable une étude de marché approfondie.

#### 4.1.2 Quels résultats ?
Recueillir des infos pour décider : opportunités / menaces, agir à temps.
- Situation actuelle (concurrents, influenceurs…)
- Nouvelles tendances et besoins
- Minimiser les risques de mauvaises décisions

#### 4.1.3 Étude vs analyse

Une forme plus simple / moins coûteuse : **étude de marché** — observer (Internet, presse) ou interviewer clients/fournisseurs ; **pas** une collecte systématique.

Les **prévisions de marché** s'appuient sur ces données pour orienter la politique commerciale.

**Remarque (définitions du cours) :**
- **Analyse / étude systématique** : analyse scientifique et situationnelle du marché comme base de la planification marketing
- **Étude occasionnelle** : collecte non systématique, parfois interne à l'entreprise

**Exemple EnterSite :** baisse des ventes d'armoires serveur → enquête clients (téléphone + Key Account Managers) → cause = qualité insuffisante → chefs produits améliorent la conception (avec rentabilité).

### 4.2 Types et formes de marché

#### 4.2.1 Types de marché

**Par objet / service :**
- Biens de consommation (livres, food, vêtements, électronique…)
- Travail
- Services (juridique, soins, divertissement…)
- Monétaire (crédits court terme)
- Immobilier
- Autres (matières premières, art…)

**Par fonction :** marché d'**approvisionnement** · marché de **vente**

**Par type d'accès :**
- **Ouverts** — aucune restriction ; concurrence (ex. caisses maladie)
- **Fermés** — accès limité (capital min., qualifications…) ; service public / infrastructures (Poste, CFF…)
- **Limités** — conditions restreintes (ex. taxis / concessions). Outils : licences, concessions, brevets, preuve de capacité / de capital

#### 4.2.2 Formes de marché (offre / demande)

- **Monopole** — un seul offreur (gazoducs, eau, réseau de transport…)
- **Oligopole** — peu d'offreurs (pétrole, électricité, mobile…)
- **Polypole** — beaucoup d'offreurs et demandeurs ; concurrence libre (marché hebdo, logement…)
- **Monopsone** — beaucoup d'offreurs, un seul demandeur (ex. souvent illustré côté marché du travail selon le cours)

Matrice simplifiée : un / peu / beaucoup × offreur / demandeur → monopole, oligopole, polypole, monopsone, formes bilatérales / limitées…

### 4.3 Taille d'un marché

Influence le marketing. Mesurée notamment par l'étendue géographique ou le nombre de clients potentiels.

#### 4.3.1 Taille géographique
1. **Local** — magasin de village
2. **Régional** — marché hebdomadaire
3. **National** — téléphonie mobile CH
4. **International** — UE
5. **Global** — marché financier`;

const DEMO_204_THEORIE_SUMMARY = `## À retenir — Module 204

### Marché
Lieu / mécanisme d'échange (biens ↔ biens ou ↔ argent)  
Naît d'un **besoin** → satisfaction du manque

### Étude de marché
Nécessaire (concurrence, saturation, mondialisation…)  
But : infos → décisions, opportunités/menaces  
Étude simple (observation/entretiens) ≠ analyse systématique scientifique  
Prévisions → politique commerciale

### Types
Par objet · Approvisionnement/Vente · Ouvert / Fermé / Limité

### Formes
**Monopole** (1 offreur) · **Oligopole** (peu) · **Polypole** (beaucoup) · **Monopsone** (1 demandeur)

### Taille géo
Local → Régional → National → International → Global`;

const DEMO_204_APERCU_FULL = `## Aperçu du module 204

Ce module présente le **marché** : origines, besoins, étude de marché, types, formes et tailles.

### Vous allez découvrir
1. Besoin et naissance d'un marché
2. Pourquoi et comment étudier le marché
3. Types (objet, fonction, accès) et formes (monopole, oligopole…)
4. Tailles géographiques

### Lien
[Vers le site EnterSite](#entersite-placeholder) (URL à compléter lorsque disponible).

### Source
EnterSite — Logistics by ASFL / SVBL`;

const DEMO_204_APERCU_SUMMARY = `## Aperçu — Module 204
- Besoin / marché
- Étude de marché
- Types, formes, tailles`;

const DEMO_204_OBJECTIFS_FULL = `## Objectifs du module 204

À l'issue de ce module, l'apprenti·e est capable de :

- Relier **besoin**, marché et satisfaction
- Expliquer le rôle de l'**étude de marché** et citer des résultats attendus
- Classer un marché par objet, fonction et type d'accès
- Distinguer monopole, oligopole, polypole, monopsone
- Situer un marché selon sa **taille géographique**`;

const DEMO_204_OBJECTIFS_SUMMARY = `## Objectifs
- Besoin → marché
- Étude de marché
- Types / formes / tailles`;

/** Glossaire Module 204 */
const DEMO_204_GLOSSAIRE_FULL = `## Glossaire — Module 204

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Gestion d'entreprise | | Ensemble des activités visant à **diriger, organiser et piloter** une entreprise (stratégie, finances, ressources humaines, production, commercial…) afin d'atteindre ses objectifs. |
| Biens de substitution | | Biens ou services susceptibles de **remplacer** un autre produit pour satisfaire un besoin comparable (ex. tablette vs ordinateur portable) — ils accentuent la concurrence et poussent à l'innovation. |
| Monopole | | Forme de marché où il n'existe **qu'un seul offreur** face à de nombreux demandeurs (ex. certains réseaux / infrastructures). |
| Oligopole | | Forme de marché où **peu d'offreurs** se partagent le marché face à de nombreux demandeurs (ex. téléphonie, pétrole, cartouches toner). |
| Marché concurrentiel | | Marché où **beaucoup d'offreurs et de demandeurs** se rencontrent librement ; la concurrence et la loi de l'offre et de la demande déterminent les prix (proche du **polypôle** / concurrence libre). |
| Monopsone | | Forme de marché où il n'existe **qu'un seul demandeur** face à de nombreux offreurs. |
| Formes de marché (monopole, oligopole, polypôle) | | Classification selon le **nombre** d'offreurs / demandeurs : **monopole** (1 offreur), **oligopole** (peu d'offreurs), **polypôle** (beaucoup d'offreurs et de demandeurs — concurrence). |`;

const DEMO_204_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **Gestion d'entreprise** : diriger / organiser / piloter
- **Biens de substitution** : produits interchangeables
- **Monopole** (1 offreur) · **Oligopole** (peu) · **Polypôle** / marché concurrentiel (beaucoup)
- **Monopsone** : 1 demandeur`;

/** Mises en situation Module 204 */
const DEMO_204_SITUATION_FULL = `## Mises en situation — Module 204

Contexte : tu travailles chez **EnterSite AG**. Les missions portent sur le **marché**, l'offre et la demande, les types / tailles de marchés et l'étude de marché. Rédige d'abord ta propre réponse, puis utilise le bouton pour afficher ou masquer les solutions proposées.

### Vue d'ensemble des missions
1. Le marché (loi de l'offre et de la demande) — + 1.1 à 1.4
2. Types de marchés — + 2.1 marché factuel
3. Taille du marché et possibilités d'accès — + 3.1
4. Découverte et étude de marché
5. Discussion STA

---

## Mission 1 — Le marché (loi de l'offre et de la demande)

On parle beaucoup du « marché ». Mais qu'entendons-nous par-là ? Cherche une définition appropriée à ce terme.

:::reponse
Le terme **« marché »** désigne un « lieu » où des marchandises sont **commercialisées de manière régulière**.
:::

### Mission 1.1 — Offre et demande

Dans de nombreuses définitions du terme « marché », on se heurte à la loi de l'offre et de la demande. Note, sans utiliser d'outils, ce que tu entends par les termes suivants :

:::reponse
- **Offre :** le produit / service proposé par un fournisseur sur le marché.
- **Demande :** le besoin d'un client — client intéressé par le produit / service proposé.
:::

### Mission 1.2 — Loi de l'offre et de la demande

Résume ce que tu entends par « loi de l'offre et de la demande ».

:::reponse
Si j'ai une offre qui trouve un client sur le marché, je peux vendre le produit. Si la **demande est élevée**, mon produit / service **prend de la valeur**. Si la demande est **faible ou inexistante**, mon produit **perd de la valeur**.
:::

### Mission 1.3 — EnterSite 3D : position sur le marché

EnterSite AG s'occupe de la technologie d'impression **3D**. Cette technologie est encore relativement nouvelle et peu de fournisseurs peuvent l'utiliser. Quelle position EnterSite AG peut-elle adopter face à la loi de l'offre et de la demande ? Quelle position EnterSite AG peut-elle occuper sur le marché ?

> **Vers le site EnterSite** : suis la visite virtuelle dans la production, salle **9 V1**. Pour comprendre ce que la technologie 3D peut faire, regarde la **vidéo** d'EnterSite. Cherche l'image de droite et utilise le lien. Lien : [Vers le site EnterSite](#entersite-placeholder) (URL à compléter lorsque disponible).

:::reponse
EnterSite pourrait avoir une offre pour laquelle il n'y a **pas encore de marché**. Si le produit attire des clients, il peut y avoir une demande satisfaite par nous. Il est possible qu'EnterSite occupe une position de **monopole**, au moins jusqu'à ce que d'autres producteurs proposent des produits alternatifs.
:::

### Mission 1.4 — Toner C9720AR : position sur le marché

EnterSite AG propose aussi des produits classiques. L'article **C9720AR** (cartouche de toner pour copieur laser, reconditionnée) connaît une forte concurrence en Suisse et à l'étranger. Quelle position EnterSite AG peut-elle ou doit-elle prendre sur le marché ?

:::reponse
La loi de l'offre et de la demande fait que pour EnterSite, c'est un produit **sans perspective d'avenir** : concurrence (offre) et évolutions numériques vont modifier la demande → situation d'**oligopole**.
:::

---

## Mission 2 — Types de marchés

Un marché peut avoir de nombreux « visages ». Deux des marchés les plus connus : le **marché des biens** et le **marché factuel**.

Le marché des biens connaît **quatre** marchés différents. Décris chaque marché en une phrase et note un exemple. **Marque en jaune** le marché sur lequel EnterSite AG est active.

:::reponse
- **Marché des biens et des services de consommation** *(jaune — EnterSite)* : commerce de biens destinés au consommateur final (livres, alimentaires, vêtements, électronique…).
- **Marché des services** : conseil juridique, soins, divertissement…
- **Marché des biens d'investissement** : machines, installations techniques, équipements.
- **Marché immobilier** : terrains et bâtiments.
:::

### Mission 2.1 — Marché factuel

Le marché factuel se divise aussi en quatre marchés. Décris chaque marché et donne un exemple.

:::reponse
- **Marché du travail :** la force de travail humaine est offerte et demandée.
- **Marché des capitaux :** crédits à long terme et placements de capitaux.
- **Marché monétaire :** mise à disposition de crédits à **court terme** par les banques.
- **Marché des devises :** échanges de devises étrangères.
:::

---

## Mission 3 — Taille du marché

Pour évaluer la taille d'une entreprise, on parle souvent de marchés **régionaux**, **nationaux** et **internationaux**. Cherche des entreprises sur chaque échelle. Note le lien et décris-les en une phrase. **Marque en jaune** la taille du marché dans lequel évolue EnterSite AG.

:::reponse
- **Régional** — Lien : [https://www.dimab.ch/fr](https://www.dimab.ch/fr)  
  Garage (succursales en Suisse romande) : BMW, Mini, Alpina.
- **National** — Lien : [https://www.coop.ch/fr/](https://www.coop.ch/fr/)  
  Magasin alimentaire · CA ≈ **31 milliards CHF**.
- **International** *(jaune — EnterSite)* — Lien : [https://www.nike.com/ch/fr/](https://www.nike.com/ch/fr/)  
  Magasin de sport · siège à Beaverton (USA). EnterSite AG opère sur un marché **international**.
:::

### Mission 3.1 — Possibilités d'accès

Tous les marchés ne sont pas accessibles à tous. Explique les termes, donne des exemples, et **marque en jaune** le marché correspondant à EnterSite AG.

:::reponse
- **Marché fermé :** réduit à un seul fournisseur possible (monopole d'accès). Ex. : La Poste suisse pour les lettres de moins de 50 g.
- **Marché ouvert** *(jaune — EnterSite)* : tous ceux qui ont quelque chose à vendre peuvent proposer leurs produits ; offre / demande influencent le marché. Ex. : vente de T-shirts.
- **Marché limité :** autorisation, certificat ou attestation nécessaire. Ex. : taxis, médecins, pharmacie, vente d'armes…
:::

---

## Mission 4 — Prospection vs étude de marché

Pour fonctionner sur un marché et identifier les besoins, l'entreprise doit le connaître. Le marché peut être **exploré** (prospecté) ou **étudié**.

Formez une équipe de deux. Une personne définit « **prospection / exploration du marché** », l'autre « **étude de marché** ». Recherche (10 min), puis échangez vos résultats.

:::reponse
- **Prospection de marché :** collecte **occasionnelle et non systématique** d'informations, dont certaines obtenues au sein de l'entreprise.
- **Étude de marché :** analyse **systématique et situationnelle** du marché selon des méthodes **scientifiques**, pour obtenir des informations comme base de la **planification marketing**.
:::

---

## Mission 5 — Discussion STA

Discute de la situation de travail et d'apprentissage en plénière avec la classe et l'enseignant·e. Note les informations complémentaires.

:::reponse
**Réponse ouverte** — notes de discussion STA (pas de solution unique).
:::`;

const DEMO_204_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **M1** : marché = lieu de commercialisation régulière · offre / demande · loi O/D · 3D → monopole (9 V1) · toner C9720AR → oligopole
- **M2** : 4 marchés des biens (EnterSite = **consommation**, jaune) · factuel : travail, capitaux, monétaire, devises
- **M3** : régional dimab · national coop · international nike (**EnterSite = international**) · accès : fermé / **ouvert** (EnterSite) / limité
- **M4** : prospection (occasionnelle) ≠ étude (scientifique / systématique)
- **M5** : discussion STA`;

/** Exercices de maths Module 204 */
const DEMO_204_MATHS_FULL = `## Exercices de mathématiques — Module 204

Calcule chaque résultat, puis vérifie avec le bouton solution.

### Exercice 1 — Prix des masques (offre / demande)

L'offre et la demande influencent les prix. Pendant la pandémie de Corona, le coût des masques de protection a fortement augmenté. Les masques en tissu, vendus **7 CHF** pièce avant la pandémie, ont vu leur prix monter de **30 %**.

Combien les masques ont-ils coûté après la hausse ?

:::solution
**9,10 CHF**

Calcul : 7 × 130 / 100 = **9,10 CHF**
:::

### Exercice 2 — Enquête en ligne

Étudier le marché, c'est aussi évaluer des données. Lors de la dernière enquête en ligne d'EnterSite AG, **12'000** réponses ont été reçues, soit un taux de **37 %**.

Quel aurait été le nombre maximal de réponses possibles ?

:::solution
**32'432 réponses**

Calcul : 12'000 × 100 / 37 ≈ 32'432,43 → **32'432** réponses
:::

### Exercice 3 — Marché 3D

EnterSite AG s'intéresse au développement du marché de la 3D. Le chiffre d'affaires actuel en Suisse est estimé à **3'000'000 CHF**. Les chercheurs estiment qu'il sera de **400 %** dans cinq ans (par rapport à aujourd'hui).

Quel sera le chiffre d'affaires dans cinq ans ?

:::solution
**12'000'000 CHF**

Calcul : 3'000'000 × 400 / 100 = **12'000'000 CHF**
:::

### Exercice 4 — Surface d'un modèle

Calcule la surface totale du modèle (grand rectangle + petit rectangle).

:::solution
**40,375 m²**

Calculs :
- Surface grand rectangle : 8,5 × 3,5 = **29,75 m²**
- Longueur des petits rectangles : 8,50 / 2 = **4,25 m**
- Surface petit rectangle : 4,25 × 2,50 = **10,625 m²**
- Surface totale : 29,75 + 10,625 = **40,375 m²**
:::

> **Contrôle rapide (footer corrigé)** : 9,10 · 32'432 · 12'000'000 · 40,375`;

const DEMO_204_MATHS_SUMMARY = `## Maths — Solutions
1. **9,10 CHF** (7 × 1,30)
2. **32'432** réponses (12'000 / 0,37)
3. **12'000'000 CHF** (3M × 400 %)
4. **40,375 m²**`;

/** Vérification des acquis Module 204 */
const DEMO_204_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Thème : **Le marché**. Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

Quelles sont les conséquences d'un **excédent d'offre** d'un produit (lorsque la demande est inférieure à l'offre) ?

a) pour le producteur  
b) pour le commerçant  
c) pour le client

:::reponse
- **a) Producteur :** reste assis sur ses produits · marchandise qui peut se détériorer · mauvais prix de vente · coûts de production non couverts · peu ou pas de bénéfice · frais de stockage supplémentaires.
- **b) Commerçant :** peut acheter moins cher · reste aussi assis sur la marchandise · emplacements de stockage occupés plus longtemps · mauvaise rotation des stocks (ratio).
- **c) Client :** peut acheter moins cher, éventuellement faire encore baisser le prix.
:::

### Question 2

Quelle est la principale caractéristique d'un **marché ouvert** ?

:::reponse
Sur un marché ouvert, la **concurrence est libre**. Tout le monde peut proposer ses produits ou acheter des marchandises. Le marché dépend de l'**offre** et de la **demande**.
:::

### Question 3

Quelles restrictions peuvent exister sur un **marché restreint (limité)** ? Coche les conditions qui s'appliquent :

| Condition | S'applique ? |
| --- | --- |
| Concession nécessaire | |
| Ordinateur nécessaire | |
| Licence nécessaire | |
| Attestation de formation nécessaire | |
| Capital minimum nécessaire | |
| Ne pas avoir plus de 40 ans | |

:::reponse
| Condition | S'applique ? |
| --- | --- |
| Concession nécessaire | **Oui** |
| Ordinateur nécessaire | Non |
| Licence nécessaire | **Oui** |
| Attestation de formation nécessaire | **Oui** |
| Capital minimum nécessaire | **Oui** |
| Ne pas avoir plus de 40 ans | Non |
:::

### Question 4

Que se passe-t-il sur un **marché fermé** où un seul fournisseur est actif ?

:::reponse
Dans un marché fermé, il y a un **monopole**.
:::

### Question 5

Quel mot français pouvons-nous utiliser pour le terme **« pronostic »** ? Illustre par des exemples.

:::reponse
**Prévision** de développements, d'états ou d'événements futurs.

Exemples : prévisions électorales, démographiques, de l'évolution du marché du travail, météorologiques.
:::`;

const DEMO_204_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. Excédent d'offre : producteur (stock / prix / coûts) · commerçant (achat bas mais rotation) · client (prix bas)
2. Marché ouvert = **concurrence libre** (offre / demande)
3. Restrictions : Concession · Licence · Attestation formation · Capital min. (**pas** ordinateur, **pas** max 40 ans)
4. Marché fermé = **monopole**
5. Pronostic = **prévision** (+ exemples)`;

/** Contenu Module 205 — Marketing */
const DEMO_205_THEORIE_FULL = `## 5. Marketing

### 5.1 Objectifs du marketing

Le marketing d'EnterSite AG a pour objectif de **promouvoir la vente** de ses produits et services. Les ventes font augmenter le chiffre d'affaires et donc le bénéfice (en règle générale). Générer des bénéfices est l'objectif principal : un bénéfice est calculé dans le prix des produits ou services. Le bénéfice augmente lorsque davantage de produits et services sont vendus.

Afin de réaliser un maximum de bénéfices, les objectifs visés par le marketing sont :
- la **préservation**, voire l'**augmentation** de sa part de marché
- l'amélioration de sa **notoriété**
- l'ancrage d'une **image positive** sur le marché

### 5.2 Personnes impliquées dans le marketing

Le marketing est une science. Pour le pratiquer de manière systématique, ce sont des **professionnels** qui s'en chargent. Au sein d'EnterSite AG, presque tous les collaborateurs participent délibérément ou non au marketing. Il englobe tous les niveaux et tous les domaines. Plus ils se complètent, plus l'entreprise aura du succès sur le marché.

Niveaux et domaines :
- la **direction**
- le **service commercial** (vente, marketing)
- les collaborateurs de la **production**
- les collaborateurs de l'**administration** et des services

### 5.3 La loi de l'offre et de la demande

Principe fondamental de l'économie : dynamique entre fournisseurs et consommateurs. L'équilibre entre la quantité disponible (**offre**) et la **demande** détermine le **prix de marché**.

#### 5.3.1 L'effet de l'offre

**Exemple — salades :** les maraîchers ont salué une « récolte du siècle ». Le temps favorable a fait mûrir toutes les salades en même temps. Malgré les offres spéciales des grands distributeurs et des prix très bas, une partie de la production a dû être détruite. Offre >> demande → baisses de prix, bénéfice espéré non réalisé.

**Effet inverse :** gel, grêle ou pluie prolongée → pertes de récolte → offre limitée → clients prêts à payer plus cher → prix ↑. Ce mécanisme est toutefois limité par la **mondialisation** (imports) : les consommateurs choisissent entre produits locaux chers et produits importés moins chers.

Les fournisseurs peuvent aussi réguler l'offre (ex. États pétroliers : extraire plus pour baisser le prix, réduire la production pour le faire monter).

#### 5.3.2 L'effet de la demande

Si la demande augmente sans que la production suive, l'offre est trop faible → prix ↑. Parfois, la demande étrangère fait aussi grimper le prix.

**Exemple — maïs / biocarburants :** alternatives au pétrole → biodiesel à base de maïs ou canne à sucre → demande ↑ → pénurie dans des pays « pauvres ». Au Mexique, le prix de la tortilla (plat national) a **doublé** ; le gouvernement a dû prendre des mesures d'urgence.

**Remarque :**
- Quantité offerte ↑ / demande stable → prix ↓
- Quantité offerte ↓ / demande stable → prix ↑
- Demande ↑ / offre stable → prix ↑
- Demande ↓ / offre stable → prix ↓

### 5.4 Les instruments du marketing

Pour définir sa stratégie de marketing (stratégie de vente), EnterSite AG doit se procurer des **informations sur le marché**, puis définir les mesures pour s'y imposer. Il s'agit le plus souvent d'une combinaison de mesures = **Marketing-Mix**. La description avec les **4 P** vient des États-Unis.

#### Product (Produit)

La commercialisation dépend d'abord de l'**utilité** (personne n'achète un produit inutile) et de la **qualité** (plus elle est élevée, mieux c'est). Éléments : stratégie de gamme, caractéristiques techniques, design, packaging.

Le produit doit s'intégrer dans l'**assortiment** (ex. : on ne cherche pas des jouets dans un magasin de sport). Le design doit être plaisant et contemporain pour attirer l'attention.

#### Price (Prix)

Critère important dans la décision d'achat. Dépend notamment de : nature du produit, coût des matières premières, ressources humaines et matérielles (production / distribution), dépenses de recherche. Ni trop bas ni trop haut : un bon prix est un prix que les clients sont prêts à payer **et** qui permet d'être suffisamment **rentable**.

Pression sur le prix : offres concurrentes, demandes de rabais ou de conditions de paiement avantageuses.

#### Place (Lieu)

Questions au lancement : qui sont les acheteurs actuels et potentiels ? Où se trouvent-ils ? Vente **directe** ou **indirecte** (commerces) ? Pour un nouveau produit dans un assortiment existant : où le placer pour maximiser les ventes ?

#### Promotion (Publicité)

Un placement optimal et un prix acceptable ne garantissent pas encore des ventes suffisantes. Des actions de **communication** (publicité) sont nécessaires pour attirer l'attention. Campagnes publicitaires et promotions internes aux points de vente. Grande variété de supports ; le choix dépend avant tout du **budget**.

### 5.5 La publicité

#### 5.5.1 Éléments qui composent les annonces

- **Logo** (signe distinctif d'un produit ou d'une entreprise)
- **Nom** du produit
- **Image** (photo, graphique, etc.)
- **Headline** (titre)
- **Informations** sur le produit
- **Slogan** (devise, principe directeur)

#### 5.5.2 Le concept AIDA

Pour que la publicité atteigne son but et que le client achète, les producteurs d'annonces procèdent selon **AIDA** :

- **A**ttention — attirer, capter l'attention du consommateur
- **I**ntérêt — aiguiser son intérêt
- **D**ésir — stimuler son désir
- **A**ction — déclencher l'achat

#### 5.5.3 Publicité informative et suggestive

- **Informative** — factuelle : informe sur les avantages en mettant en avant les caractéristiques. Discours **rationnel** pour convaincre que le produit répond aux besoins → acte d'achat.
- **Suggestive** — les caractéristiques sont secondaires. Influence l'**inconscient** par suggestion ; éveille des **émotions** qui incitent à acheter, même sans lien direct avec le produit.

**Remarque :** dans toute publicité (informative ou suggestive), les **coûts** sont un facteur important. Ils doivent être économiquement acceptables, c'est-à-dire proportionnés au chiffre d'affaires pouvant être obtenu avec le produit.

#### 5.5.4 Caractéristiques d'une bonne publicité

La publicité doit avoir un effet **durable**. Les clients apprécient davantage les publicités avec de la **musique** et de l'**humour**, moins celles avec des dessins animés et des démonstrations de produits.

Une bonne publicité est :
- **mémorable**, qui attire l'attention (originale, divertissante, pas de mauvais goût)
- **bien ciblée**
- **fidèle à la réalité** — elle ne vante que les caractéristiques que le produit possède réellement

Agence hambourgeoise : « Une bonne publicité, c'est : viser la tête et toucher le portefeuille. »

#### 5.5.5 Publicité en ligne

Être présent sur Internet permet de développer sa **visibilité**, de **cibler** précisément un public selon des critères précis, et de **mesurer** l'impact via le **taux de clics**. Celui-ci aide à distinguer les publicités efficaces et à mieux cibler les coûts. Souvent facturée **au clic** (honoraires de succès).

Outils de campagnes : **Google Ads**, **Facebook Ads**, **Instagram Ads**, **Amazon Advertising** (taux de conversion, rentabilité).

**Publicité par e-mail**  
E-mail aux clients potentiels avec un lien vers le site, invitation à cliquer. Mesure également via le taux de clics.

**Bannières publicitaires**  
Messages graphiques attachés à une page Internet pour attirer l'attention. Le produit promu n'a pas forcément de lien avec le contenu de la page. Prolifération → *banner blindness* (aveuglement des bannières) → messages conçus de manière toujours plus voyante.

**Content Ad**  
Publicité associée au site de manière discrète, difficile à distinguer du contenu. Certains utilisateurs ne réalisent qu'après coup qu'ils ont lu de la publicité.

**Pop-up / pop-under**  
Fenêtre qui s'affiche automatiquement lors de la navigation.
- **Pop-up** — plus petite, chevauche le contenu (invasive)
- **Pop-under** — non invasive ; visible surtout après fermeture de l'onglet
- Bloqueurs de pop-ups possibles
- **Hover Ads** — masquent le contenu et forcent l'attention ; il faut fermer la fenêtre pour accéder à la page`;

const DEMO_205_THEORIE_SUMMARY = `## À retenir — Module 205

### Objectifs marketing
Promouvoir ventes → CA → bénéfice  
Part de marché · notoriété · image positive

### Qui ?
Professionnels + presque toute l'entreprise  
Direction · commercial · production · admin/services

### Offre / demande
Équilibre offre–demande → prix de marché  
Offre ↑ → prix ↓ · Offre ↓ → prix ↑  
Demande ↑ → prix ↑ · Demande ↓ → prix ↓  
Ex. : salades (surproduction) · maïs / biodiesel (demande ↑)

### 4P (Marketing-Mix)
**Product** — utilité, qualité, gamme, design, assortiment  
**Price** — acceptable client + rentable ; pression concurrence/rabais  
**Place** — acheteurs, canaux direct/indirect, placement  
**Promotion** — communication / pub selon budget

### Publicité
Éléments : logo, nom, image, headline, infos, slogan  
**AIDA** : Attention → Intérêt → Désir → Action  
Informative (faits) vs suggestive (émotions)  
Coûts proportionnés au CA  
Bonne pub : mémorable, ciblée, réaliste

### Online
Taux de clics / CPC · Google/Facebook/Instagram/Amazon Ads  
E-mail · bannières (*banner blindness*) · Content Ad · pop-up / pop-under / Hover Ads`;

const DEMO_205_APERCU_FULL = `## Aperçu du module 205

Ce module présente le **marketing** chez EnterSite AG : objectifs, acteurs, loi de l'offre et de la demande, Marketing-Mix (4P) et publicité.

### Vous allez découvrir
1. Objectifs (part de marché, notoriété, image) et personnes impliquées
2. Effets de l'offre et de la demande sur les prix (exemples concrets)
3. Marketing-Mix : Product, Price, Place, Promotion
4. Publicité : éléments d'annonce, AIDA, informative vs suggestive
5. Formats en ligne : e-mail, bannières, Content Ad, pop-up / Hover Ads

### Source
EnterSite — Logistics by ASFL / SVBL`;

const DEMO_205_APERCU_SUMMARY = `## Aperçu — Module 205
- Objectifs + acteurs marketing
- Offre / demande → prix
- 4P + publicité (AIDA, types, online)`;

const DEMO_205_OBJECTIFS_FULL = `## Objectifs du module 205

À l'issue de ce module, l'apprenti·e est capable de :

- Citer les objectifs du marketing et les personnes / domaines impliqués
- Expliquer la **loi de l'offre et de la demande** et son effet sur les prix, avec des exemples
- Décrire le **Marketing-Mix (4P)** : Product, Price, Place, Promotion
- Lister les éléments d'une annonce et appliquer le schéma **AIDA**
- Distinguer publicité **informative** et **suggestive**
- Identifier les principaux formats de **publicité en ligne** (e-mail, bannières, Content Ad, pop-up)`;

const DEMO_205_OBJECTIFS_SUMMARY = `## Objectifs
- Objectifs + acteurs
- Offre / demande → prix
- 4P, AIDA, info vs suggestive
- Formats pub online`;

/** Glossaire Module 205 */
const DEMO_205_GLOSSAIRE_FULL = `## Glossaire — Module 205

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Marketing | | Ensemble des méthodes et activités visant à **promouvoir la vente** de produits et services, à préserver ou augmenter la **part de marché**, améliorer la **notoriété** et ancrer une **image positive** sur le marché. |
| Offre et demande | | Principe économique fondamental : l'équilibre entre la quantité de biens disponibles (**offre**) et la quantité désirée par les acheteurs (**demande**) détermine le **prix de marché**. |
| Marketing-Mix | | Combinaison des instruments du marketing pour définir une stratégie de vente. Décrit classiquement par les **4 P** : Product (produit), Price (prix), Place (lieu / distribution), Promotion (publicité / communication). |
| Publicité | | Actions de **communication** destinées à attirer l'attention sur un produit ou service et à favoriser l'achat. Peut être **informative** (faits) ou **suggestive** (émotions) ; souvent structurée selon le schéma **AIDA**. |`;

const DEMO_205_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **Marketing** : promouvoir ventes · part de marché · notoriété · image
- **Offre et demande** : équilibre → prix de marché
- **Marketing-Mix** : 4P (Product, Price, Place, Promotion)
- **Publicité** : communication · informative / suggestive · AIDA`;

/** Mises en situation Module 205 */
const DEMO_205_SITUATION_FULL = `## Mises en situation — Module 205

Contexte : tu travailles chez **EnterSite AG**. Les missions portent sur l'**analyse publicitaire**, les types de publicité et une commande EnterSite. Rédige d'abord ta propre réponse, puis utilise le bouton pour afficher ou masquer les solutions / exemples proposés.

### Vue d'ensemble des missions
1. Préparation pour l'analyse de la publicité
2. Partie principale pour l'analyse de l'annonce publicitaire
3. Fin de l'annonce publicitaire
4. Réalisez des affiches en groupe
5. Crée ton entreprise
6. Discussion STA

> **Référence** : [https://levrai.de](https://levrai.de)

---

## Mission 1 — Préparation pour l'analyse de la publicité

Examine attentivement l'annonce publicitaire et réponds aux questions suivantes :

:::reponse
- **Qu'est-ce qui attire l'attention dans l'annonce publicitaire ?** Le « faux f ».
- **Qu'est-ce qui attire l'attention dans le texte ?** Le bouton vert, le slogan, l'espace.
- **Nom du produit :** Ovomaltine
- **Nom du fabricant :** Wander AG
- **Groupe cible :** les enfants et les adolescents
- **Où a-t-elle été publiée ?** Site internet, réseaux sociaux
- **Pensées / classement :** la mauvaise orthographe génère de l'attention
:::

---

## Mission 2 — Partie principale pour l'analyse de l'annonce publicitaire

### 2.1 Analyse d'images

Analyse l'image de l'annonce publicitaire en répondant aux questions suivantes :

:::reponse
- **Accroche :** couleurs voyantes
- **Taille de l'accroche :** pas si grand que ça
- **Parties de l'image :** bouton vert · produit · arrière-plan
- **Couleurs principales :** orange et jaune avec écriture bleue
- **Éléments de texte :** annonce, slogan
- **Effet recherché :** le désir de posséder le produit naît
:::

### 2.2 Analyse de texte

Analyse le texte de l'annonce publicitaire :

:::reponse
- **Attention au plan du langage :** faute d'orthographe consciente
- **Headline :** « Nouveau »
- **Particularités du texte principal :** conçu avec des ombres
- **Slogan :** « Nous ne nous améliorons pas avec Ovomaltine »
- **Polices / tailles :** oui, plusieurs types sont utilisés
- **Texte factuel ou émotionnel :** axé sur les sentiments
:::

---

## Mission 3 — Fin de l'annonce publicitaire

Écris ton opinion sur l'annonce publicitaire et justifie-la.

:::reponse
- **L'annonce est-elle réussie ?** Réponse individuelle
- **Le groupe cible est-il atteint ?** Réponse individuelle
- **Le concept AIDA est-il appliqué ?** Oui
:::

---

## Mission 4 — Réalisez des affiches en groupe

En groupe, créez des affiches avec…

:::reponse
- **…une publicité informative** — réponse individuelle
- **…de la publicité suggestive** — réponse individuelle
:::

---

## Mission 5 — Crée ton entreprise

> **Astuce EnterSite** : suis la visite virtuelle jusqu'au département **Customer Service**, salle **13 V2**. **Madame Nydegger** attend et a déjà décrit la commande dans le carnet de notes. Cherche le carnet de notes, trouve l'image de droite et utilise le lien pour accéder à la mission. Lien : [Vers le site EnterSite](#entersite-placeholder) (URL à compléter lorsque disponible).

Le cadre de la mission est communiqué par l'enseignant·e.

**Dépôt de fichiers :**
- Travail écrit
- Présentation
- Visuels possibles

:::reponse
**Réponse individuelle** — dépôt écrit / présentation / visuels selon le cadre donné en classe (pas de solution unique).
:::

---

## Mission 6 — Discussion STA

Discute de la situation de travail et d'apprentissage en plénière avec la classe et l'enseignant·e. Note les informations complémentaires.

:::reponse
**Réponse ouverte** — notes de discussion STA (pas de solution unique).
:::`;

const DEMO_205_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **M1** : analyse prep Ovomaltine / Wander (« faux f », jeunes, réseaux)
- **M2** : image (couleurs, bouton vert…) + texte (faute, slogan, émotions)
- **M3** : opinion individuelle · **AIDA = Oui**
- **M4** : affiches informative / suggestive (individuelle)
- **M5** : EnterSite salle **13 V2** · Nydegger · dépôt fichiers
- **M6** : discussion STA`;

/** Exercices de maths Module 205 */
const DEMO_205_MATHS_FULL = `## Exercices de mathématiques — Module 205

Calcule chaque résultat, puis vérifie avec le bouton solution.

### Exercice 1 — Coûts publicitaires des concurrents (Santé SA)

Le département marketing de l'entreprise **Santé SA** souhaite élaborer un concept publicitaire pour un nouveau produit dans le domaine des **compléments alimentaires**. Afin de déterminer le budget publicitaire, les coûts publicitaires des concurrents sont calculés et comparés.

Calcule :
- la **part des coûts publicitaires par unité** (CHF/pièce) ;
- le **chiffre d'affaires** et le **chiffre d'affaires publicitaire** des concurrents.

Formules :
- CHF/pièce = prix unitaire × (part % / 100)
- CA = nombre de pièces × prix unitaire
- CA publicitaire = CA × (part % / 100)

> **Classeurs Excel de référence** (non fournis dans le dépôt) : \`Module A4 Santé SA.xlsm\` · \`Module A4 Santé SA_Solution.xlsm\`

| Fabricant | Produit | Pièces | Prix (CHF) | Part pub. % | CHF/pce | CA (CHF) | CA pub. (CHF) |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Health AG | Ultrastrong | 1'462 | 45.50 | 3.50 | ? | ? | ? |
| Strong GmbH | Power Plus | 2'651 | 34.80 | 2.40 | ? | ? | ? |
| Jung AG | Vitaliti (à partir de 50 ans) | 7'692 | 42.90 | 2.65 | ? | ? | ? |
| Vitalis | Flexi ultra | 5'890 | 44.80 | 3.25 | ? | ? | ? |
| Beauté & Co. | Beauty Skin | 3'480 | 50.20 | 2.90 | ? | ? | ? |
| Visilon AG | Fortifiant+ | 6'256 | 36.90 | 3.60 | ? | ? | ? |
| Ultrasport | Vitamine extra | 4'236 | 37.50 | 4.20 | ? | ? | ? |

:::solution
| Fabricant | Produit | Pièces | Prix | % | CHF/pce | CA | CA pub. |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Health AG | Ultrastrong | 1'462 | 45.50 | 3.50 | **1.59** | **66'521.00** | **2'328.24** |
| Strong GmbH | Power Plus | 2'651 | 34.80 | 2.40 | **0.84** | **92'254.80** | **2'214.12** |
| Jung AG | Vitaliti | 7'692 | 42.90 | 2.65 | **1.14** | **329'986.80** | **8'744.65** |
| Vitalis | Flexi ultra | 5'890 | 44.80 | 3.25 | **1.46** | **263'872.00** | **8'575.84** |
| Beauté & Co. | Beauty Skin | 3'480 | 50.20 | 2.90 | **1.46** | **174'696.00** | **5'066.18** |
| Visilon AG | Fortifiant+ | 6'256 | 36.90 | 3.60 | **1.33** | **230'846.40** | **8'310.47** |
| Ultrasport | Vitamine extra | 4'236 | 37.50 | 4.20 | **1.58** | **158'850.00** | **6'671.70** |
:::

### Exercice 2 — Budget annuel publicitaire (Santé SA)

Établis un **budget annuel publicitaire** possible pour Santé SA. Pour la part des frais publicitaires en %, on prend la **moyenne des concurrents**.

:::solution
**5'987.31 sFr** (CHF)

Budget annuel publicitaire possible = moyenne des CA publicitaires des concurrents ≈ **5'987.31 CHF**.
:::`;

const DEMO_205_MATHS_SUMMARY = `## Maths — Solutions
1. Tableau concurrents : CHF/pce · CA · CA pub. (Health 1.59 / 66'521 / 2'328.24 … Ultrasport 1.58 / 158'850 / 6'671.70)
2. Budget annuel moyen : **5'987.31 sFr**
- Classeurs réf. : \`Module A4 Santé SA.xlsm\` / \`…_Solution.xlsm\``;

/** Vérification des acquis Module 205 */
const DEMO_205_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Thème : **Le marketing**. Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

Quels sont les termes du marketing mix qui se cachent derrière les **quatre P** ?

:::reponse
- **Product** (Produit)
- **Price** (Prix)
- **Place** (Lieu)
- **Promotion** (Publicité)
:::

### Question 2

Afin de réaliser un maximum de bénéfices, EnterSite AG vise différents objectifs par le biais du marketing. Cite-en **trois**.

:::reponse
- La préservation, respectivement l'**augmentation de la part de marché**
- L'augmentation du **degré de notoriété**
- L'ancrage d'une **image positive** sur le marché
:::

### Question 3

Quels sont les départements d'EnterSite AG qui participent au marketing ? Cite tous les services que tu connais.

:::reponse
- La **direction**
- Le **service des ventes** (commercial / marketing)
- Les collaborateurs de la **production**
- Les collaborateurs de l'**administration** et des services
:::

### Question 4

Décris la **loi de l'offre**.

:::reponse
- Si le prix d'un bien **augmente**, l'offre de ce bien **augmente** également.
- Si le prix d'un bien **diminue**, l'offre de ce bien **diminue** également.
:::

### Question 5

Décris la **loi de la demande**.

:::reponse
- Si le prix d'un bien **augmente**, la demande pour ce bien **diminue**.
- Si le prix d'un bien **diminue**, la demande de ce bien **augmente**.
:::

### Question 6

Nomme le **point n° 5** avec le terme technique correct.

*(Point d'intersection offre / demande sur le graphique du marché — si l'image est absente, il s'agit de l'équilibre entre offre et demande.)*

:::reponse
**Équilibre du marché**
:::`;

const DEMO_205_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. **4P** : Product · Price · Place · Promotion
2. Part de marché · notoriété · image positive
3. Direction · ventes · production · admin/services
4. Prix ↑ → offre ↑ · Prix ↓ → offre ↓
5. Prix ↑ → demande ↓ · Prix ↓ → demande ↑
6. **Équilibre du marché**`;

/** Contenu Module 206 — Communication */
const DEMO_206_THEORIE_FULL = `## 6. Communication

### 6.1 Moyens de communication

La communication est omniprésente : elle englobe toutes les formes de transmission de messages d'un **émetteur** à un **récepteur**, qu'elle ait un but précis ou non.

Particularité : chaque partenaire agit à la fois comme émetteur **et** récepteur. Même si une seule personne parle (verbal), l'autre « répond » au moins par le langage corporel (**non-verbal**).

### 6.2 Fonctionnement de la communication

Pour qu'une communication humaine soit réussie, trois éléments au moins sont réunis :
- **émetteur**
- **message**
- **récepteur**
(plus un **canal** de transmission)

#### Contact indirect
L'émetteur envoie un message reçu par le récepteur **sans réponse**. Ex. : radio, télévision. Le présentateur n'a pas d'interlocuteur : il ne sait pas si le message a été reçu/compris ni ce que le destinataire en pense (pas de retour direct).

#### Contact direct
Le message est suivi d'un retour = **feedback**. L'émetteur transmet **et** observe le récepteur. Le feedback peut être **verbal** ou **non-verbal** ; il est enregistré par l'émetteur et influence la suite. L'émetteur interprète surtout les signaux non-verbaux.

**Remarque :** la communication peut être verbale ou non-verbale.

#### 6.2.1 Un modèle de communication — émetteur-récepteur

La communication = transmission d'une information d'un émetteur à un récepteur.

1. L'émetteur **code** le message (représentation compréhensible par les deux parties)
2. Le message passe par un **canal** (direct ou indirect)
3. Le récepteur **décode** / interprète
4. Des **interférences** peuvent survenir à chaque étape ; les deux doivent partager le même code
5. La **réponse** du récepteur = **feedback** (processus en sens inverse) : elle indique si le message a été compris. Le feedback peut aussi être perturbé.

**Remarque :** Entre ce que je pense, ce que je veux dire, ce que je crois dire, ce que je dis… et ce que vous voulez entendre, entendez, croyez comprendre, voulez comprendre, comprenez… il y a **au moins neuf possibilités** de ne pas se comprendre !

#### 6.2.2 Le feedback aide tout le monde

Le **feedback** = retour d'information : réponse du récepteur à l'émetteur (positif/négatif, verbal/non-verbal). Il faut l'écouter pour savoir si le message a été reçu et compris.

On devrait aussi **envoyer** du feedback (idéal : verbal + non-verbal) pour améliorer la communication et réduire les malentendus.

**Feedback utile :**
- Exprimer honnêtement comment on comprend le message et ce qu'on ressent
- Relier le feedback au **contenu**, pas à la personne
- Donner beaucoup de feedback, rapidement (verbal et non-verbal)

**Exemple :** tu envoies un message à un ami pour un service → sa réponse est un feedback.

#### 6.2.3 L'écoute active

Technique visant à encourager les échanges : **reformulations** et **interrogations** pour montrer qu'on écoute et comprend. Crée une atmosphère de confiance pour s'exprimer librement.

**Pratiquer l'écoute active :**
- Être là pour l'autre pendant un certain temps
- S'intéresser réellement à l'autre
- Savoir se taire (laisser l'autre s'exprimer)
- S'adapter ; être attentif
- Accepter l'autre tel qu'il/elle est
- Rester soi-même ; ne pas prendre en charge les problèmes de l'autre
- Se mettre à la place de l'autre

**Trois phases d'écoute active** (schéma du support) :
1. **Encourager** — ouvrir l'échange, inviter à parler
2. **Clarifier** — reformuler, poser des questions pour vérifier la compréhension
3. **Approfondir** — confirmer, synthétiser, aller plus loin si besoin

### 6.3 Types de communication

#### 6.3.1 Communication verbale

Messages transmis par les **mots**. Le non-verbal est tout aussi important, voire plus. Quand verbal et non-verbal sont en adéquation → **congruence** (communication plus efficace).

**Exemple :** « Quand est-ce que la marchandise promise arrivera-t-elle enfin ? »  
Ce n'est pas seulement une demande de date : le ton montre la colère / le mécontentement et un appel à respecter les accords. Message à **quatre niveaux** (modèle classique) :

| Niveau | Exemple de lecture |
| --- | --- |
| **Contenu factuel** | Demande de la date de livraison |
| **Révélation de soi** | « Je suis fâché / mécontent » |
| **Relation** | Pression / reproche envers le fournisseur |
| **Appel** | « Respecte les accords / livre enfin » |

Le **choix des mots** influence la perception et la réaction. La formulation ci-dessus sonne comme un reproche → l'autre se défend. Art : exprimer clairement les faits **sans blesser**.

Alternative possible :  
« Nous n'avons malheureusement pas encore reçu la marchandise, mais nous en aurions désespérément besoin. »

**Remarque :** le langage **expressif** (ton, émotion) est souvent encore plus important que le contenu. Les nourrissons ne réagissent qu'au langage expressif.

#### 6.3.2 Communication non-verbale

Tous les **signaux corporels** et façons de parler qui accompagnent le message verbal. Difficiles à contrôler ; souvent inconscients.

Utile pour comprendre le message dans sa globalité : peut appuyer ou altérer le verbal, et transmettre une info **émotionnelle**. Influence la relation. **Congruence** = mots + corps + voix portent le même message → plus convaincant.

**Éléments non-verbaux :**
- Volume (fort, faible)
- Ton de la voix (décontracté, objectif, brusque, menaçant)
- Vitesse d'élocution (lente, rapide, précipitée)
- Intonation (uniforme, avec insistance…)
- Expressions du visage
- Intensité du contact visuel
- Langage corporel et position
- Gestuelle et toucher

Environ **deux tiers** de la communication se ferait sans mots. Le non-verbal = expression de pensées/sentiments **et** caractéristique des relations.

| Signal | Signification |
| --- | --- |
| Posture décontractée | Détente, confiance en soi |
| Bras croisés sur la poitrine | Défense |
| Se détourner | Désintérêt |
| Posture rigide | Tension |
| Se balancer / gestes des mains | Impatience |
| Soutenir la tête | Réflexion ou ennui |
| Regard ouvert, visage amical | Intérêt, volonté de dialogue |
| Acquiescer de la tête | Compréhension ou accord |
| Froncer les sourcils | Incompréhension, mécontentement, scepticisme |
| Coins de la bouche vers le bas | Insatisfaction, scepticisme (souvent + froncement) |
| Baisser la tête / regarder le sol | Incertitude ou défi |
| Passer devant (couper) l'interlocuteur | Manque d'intérêt ou insécurité |

### 6.4 Questions dans la communication

Questionner ≠ simplement poser des questions : poser les **bonnes** questions au **bon** moment. Alliés : écoute active + reformulation (feedback). Attention aussi au non-verbal (le sien et celui de l'interlocuteur) et s'adapter.

Objectifs possibles : obtenir des infos, prendre contact, prospecter, négocier, conclure / obtenir une validation.

Au quotidien pro : se procurer des infos via des **questions ciblées** (un art).

#### 6.4.1 Question fermée

Vise une réponse **courte et précise** : valider, accord ou refus, sans développement. Souvent **oui** / **non**. Commence généralement par un **verbe**.

Exemples :
- « As-tu préparé la commande client ? »
- « Est-ce que le chargement du camion est terminé ? »
- « Est-ce que vous êtes satisfait du résultat que vous avez obtenu ? »
- « Le prix est-il un critère pour vous ? »
- « As-tu fait tes devoirs ? »
- « Est-ce que tu veux bien partager avec moi un peu de ton casse-croûte ? »

#### 6.4.2 Question ouverte

Efficace pour cerner **besoins** et **attentes** : invite à développer. On ne répond pas brièvement par oui/non. Méthode **QQOQCP** : Qui, Quoi/Quel, Où, Quand, Comment/Combien, Pourquoi.

Exemples :
- « Qui sont les parties prenantes engagées dans cette problématique ? »
- « Quel est le problème ? »
- « Où puis-je trouver cette référence ? »
- « Quand a eu lieu le problème ? »
- « Comment se manifeste le problème ? »
- « Combien d'intervenants est-il possible de consulter ? »
- « Pourquoi avoir choisi cette solution ? »

**Variante** : commence par un verbe mais demande quand même de s'exprimer :
- « Pouvez-vous me donner la raison de votre absence ? »
- « Est-il possible de me décrire le déroulement des faits ? »

### 6.5 Conduire une conversation

On préfère parler à certaines personnes sans toujours savoir pourquoi. Sympathies/antipathies peu contrôlables — mais la **manière de réagir** aux propos joue un grand rôle.

#### 6.5.1 Moteurs de communication

Prises de position qui incitent l'interlocuteur à **continuer** / en dire plus. Signalent compréhension, empathie, intérêt (= écoute active).

Exemples :
- « Ça a l'air intéressant ! »
- « Je ne le savais pas. »
- « Qu'est-ce que tu veux dire ? »
- « Il faut que tu en dises plus. »
- « Je te crois quand tu dis que… »

#### 6.5.2 Obstacles de communication

Rendent l'échange difficile voire impossible : désintérêt, ou environnement inadapté.

Manque d'intérêt : ignorer, formulations dévalorisantes → blessure ou agressivité ; nuit aussi aux rapprochements futurs.

En **service clientèle** : ne pas utiliser d'obstacles. Mieux : dire ouvertement qu'on n'a plus le temps et qu'on ne peut pas poursuivre.

**Obstacles possibles :**
- Émettre des recommandations / donner son avis (trop tôt)
- Passer l'interlocuteur en interrogatoire
- Ramener la conversation sur soi
- Minimiser ou mépriser les propos de l'autre
- Environnement inadapté

**Exemples typiques :**
- « Ce que tu ne dis pas, tu ne le crois pas toi-même ! »
- « N'importe qui peut dire ça ! »
- « Qui a bien pu te raconter ça ? »
- « Je comprends pourquoi c'est comme ça, ça ne peut pas être autrement ! »
- « Tu dois juste… »
- Lieux communs : « Les années d'apprentissage ne sont pas des années de travail ! »
- Recettes simples : « Tu dois apprendre plus ! »
- Insinuations : « Tu dois te coucher plus tard ! »
- Catégorisations : « À ton âge, on ne peut pas encore comprendre ! »
- Parler uniquement de soi : « Eh bien, j'ai toujours fait comme ça… »

#### 6.5.3 Mettre fin aux conversations

Conclure aussi bien que la conversation elle-même. Idéal : terminer par un **commentaire positif**.

Points à tenir :
- Remercier le client (ex. suggestions), réitérer des excuses si besoin
- Résumer brièvement les points en suspens et la suite
- Prendre congé, si possible en le **nommant**

Client bavard / charge de travail : formules pour clore sans le prendre personnellement :
- « J'aimerais vous écouter plus longtemps, mais malheureusement, mes fonctions m'obligent à poursuivre mon travail. »
- « Il faut absolument que nous continuions à parler une autre fois. Malheureusement, je ne peux pas faire attendre les autres clients plus longtemps. »
- « Il y aurait encore beaucoup de choses intéressantes à dire à ce sujet. Peut-être aurons-nous le temps d'échanger à nouveau quelques mots demain ? »`;

const DEMO_206_THEORIE_SUMMARY = `## À retenir — Module 206

### Bases
Émetteur ↔ récepteur · verbal + non-verbal  
Contact **indirect** (sans feedback) vs **direct** (avec feedback)

### Modèle
Coder → canal → décoder · interférences · feedback  
≥ 9 possibilités de malentendu

### Feedback & écoute active
Feedback utile : honnête, sur le contenu, rapide (verbal + non-verbal)  
Écoute active : reformuler, questionner, confiance  
3 phases : encourager → clarifier → approfondir

### Types
**Verbale** (mots) + **non-verbale** (corps, voix) → **congruence**  
4 niveaux d'un message : factuel, soi, relation, appel  
~2/3 sans mots · tableau des signaux corporels

### Questions
**Fermée** → oui/non, précise (souvent verbe)  
**Ouverte** → développer (QQOQCP) ; variantes « Pouvez-vous… »

### Conduire une conversation
**Moteurs** : « Ça a l'air intéressant ! », etc.  
**Obstacles** : avis, interrogatoire, parler de soi, mépris, lieu inadapté  
**Clore** : merci, résumé, suite, congé nommé · formules polies si charge de travail`;

const DEMO_206_APERCU_FULL = `## Aperçu du module 206

Ce module traite de la **communication** : émetteur/récepteur, feedback, écoute active, verbal/non-verbal, types de questions et conduite d'une conversation (moteurs, obstacles, clôture).

### Vous allez découvrir
1. Moyens et fonctionnement (contact direct / indirect)
2. Modèle émetteur-récepteur, feedback, écoute active
3. Communication verbale et non-verbale (congruence, signaux)
4. Questions fermées et ouvertes (QQOQCP)
5. Moteurs / obstacles et comment conclure avec un client

### Source
EnterSite — Logistics by ASFL / SVBL`;

const DEMO_206_APERCU_SUMMARY = `## Aperçu — Module 206
- Émetteur / récepteur, feedback
- Verbal / non-verbal, congruence
- Questions fermées / ouvertes
- Moteurs, obstacles, clôture`;

const DEMO_206_OBJECTIFS_FULL = `## Objectifs du module 206

À l'issue de ce module, l'apprenti·e est capable de :

- Expliquer le fonctionnement de la communication (émetteur, message, récepteur, feedback)
- Distinguer contact **direct** et **indirect**
- Décrire le **feedback** utile et pratiquer l'**écoute active**
- Différencier communication **verbale** et **non-verbale** et viser la **congruence**
- Interpréter des signaux corporels courants
- Formuler des questions **fermées** et **ouvertes** (QQOQCP)
- Identifier moteurs et obstacles de communication
- Conclure correctement une conversation client`;

const DEMO_206_OBJECTIFS_SUMMARY = `## Objectifs
- Modèle + feedback + écoute active
- Verbal / non-verbal
- Questions fermées / ouvertes
- Moteurs, obstacles, clôture`;

/** Glossaire Module 206 */
const DEMO_206_GLOSSAIRE_FULL = `## Glossaire — Module 206

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Verbale | | Communication qui passe par les **mots** (langue parlée ou écrite). Le contenu factuel est transmis verbalement ; le ton et le non-verbal l'accompagnent. |
| Non verbale | | Ensemble des **signaux corporels** et vocaux (mimique, gestes, posture, regard, volume, vitesse, intonation) qui accompagnent ou remplacent le message verbal. Souvent inconsciente ; ~2/3 de la communication. |
| Interpréter | Interpreter | Décoder / donner un sens au message reçu (mots **et** signaux non verbaux). L'interprétation peut être fausse → risque de malentendu ; d'où l'importance du **feedback**. |
| Feedback | | **Retour d'information** du récepteur vers l'émetteur (verbal et/ou non verbal). Indique si le message a été reçu et compris ; permet d'ajuster la suite de l'échange. |
| Appel | | Niveau d'un message (avec factuel, révélation de soi, relation) : ce que l'émetteur **veut obtenir** / déclencher chez le récepteur (ex. « livre enfin », « respecte l'accord »). |`;

const DEMO_206_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **Verbale** : mots · **Non verbale** : corps / voix (~2/3)
- **Interpréter** : décoder (risque de malentendu)
- **Feedback** : retour récepteur → émetteur
- **Appel** : ce que le message veut faire faire / obtenir`;

/** Mises en situation Module 206 */
const DEMO_206_SITUATION_FULL = `## Mises en situation — Module 206

Contexte : tu travailles chez **EnterSite AG**. Les missions portent sur la **communication** (éléments, questions, réclamation écrite, note téléphonique). Rédige d'abord ta propre réponse, puis utilise le bouton pour afficher ou masquer les solutions / exemples proposés.

### Vue d'ensemble des missions
1. Éléments de la communication
2. Questions ouvertes / fermées
3. Réclamation écrite (toner cyan)
4. Note téléphonique Müller / Cellwar
5. Discussion STA

---

## Mission 1 — Éléments de la communication

Selon **Lorenz**, un message ne doit pas seulement être **entendu**, mais aussi **compris**. Analyse les éléments de la communication et complète les parties demandées.

### 1.1 Principe de Lorenz

:::reponse
Le message n'est réussi que s'il est **compris** (pas seulement entendu). Sinon, émetteur et récepteur ne partagent pas le même code → malentendu. Le **feedback** permet de vérifier la compréhension.
:::

### 1.2 Les 7 points de l'écoute active

:::reponse
1. Être là pour l'autre pendant un certain temps
2. S'intéresser réellement à l'autre
3. Savoir se taire (laisser l'autre s'exprimer)
4. S'adapter ; être attentif
5. Accepter l'autre tel qu'il/elle est
6. Rester soi-même ; ne pas prendre en charge les problèmes de l'autre
7. Se mettre à la place de l'autre
:::

### 1.3 Quatre éléments du langage d'expression (niveaux d'un message)

:::reponse
| Niveau | Signification |
| --- | --- |
| **Contenu factuel** | Information / faits transmis |
| **Révélation de soi** | Ce que l'émetteur révèle de son état / sentiment |
| **Relation** | Comment l'émetteur se positionne face au récepteur |
| **Appel** | Ce que l'émetteur veut obtenir / faire faire |
:::

### 1.4 Tableau non verbal (signaux → signification)

:::reponse
| Signal | Signification |
| --- | --- |
| Posture décontractée | Détente, confiance en soi |
| Bras croisés sur la poitrine | Défense |
| Se détourner | Désintérêt |
| Posture rigide | Tension |
| Se balancer / gestes des mains | Impatience |
| Soutenir la tête | Réflexion ou ennui |
| Regard ouvert, visage amical | Intérêt, volonté de dialogue |
| Acquiescer de la tête | Compréhension ou accord |
| Froncer les sourcils | Incompréhension, mécontentement, scepticisme |
| Coins de la bouche vers le bas | Insatisfaction, scepticisme |
| Baisser la tête / regarder le sol | Incertitude ou défi |
| Passer devant (couper) l'interlocuteur | Manque d'intérêt ou insécurité |
:::

### 1.5 Schéma de la communication

Dessine / décris le schéma de la communication (émetteur → message / canal → récepteur + feedback).

:::reponse
**Réponse individuelle** — schéma ou description (émetteur, message, canal, récepteur, feedback / interférences). Pas de solution unique.
:::

### 1.6 Passages « texte » — attention

Repère dans le texte fourni les passages qui attirent l'attention (formulation, ton, non-verbal décrit, etc.) et justifie.

:::reponse
**Réponse individuelle** — passages soulignés / justifications personnelles (pas de solution unique).
:::

---

## Mission 2 — Questions ouvertes / fermées

Classe chaque question : **fermée (F)** ou **ouverte (O)**.

| # | Question | Type |
| --- | --- | --- |
| 1 | As-tu préparé la commande client ? | ? |
| 2 | Quel est le problème exactement ? | ? |
| 3 | Est-ce que le chargement du camion est terminé ? | ? |
| 4 | Comment se manifeste le dysfonctionnement ? | ? |
| 5 | Le prix est-il un critère pour vous ? | ? |
| 6 | Pourquoi avez-vous choisi cette solution ? | ? |
| 7 | Quand la marchandise devait-elle arriver ? | ? |
| 8 | Pouvez-vous me décrire le déroulement des faits ? | ? |

:::reponse
| # | Question | Type |
| --- | --- | :---: |
| 1 | As-tu préparé la commande client ? | **F** |
| 2 | Quel est le problème exactement ? | **O** |
| 3 | Est-ce que le chargement du camion est terminé ? | **F** |
| 4 | Comment se manifeste le dysfonctionnement ? | **O** |
| 5 | Le prix est-il un critère pour vous ? | **F** |
| 6 | Pourquoi avez-vous choisi cette solution ? | **O** |
| 7 | Quand la marchandise devait-elle arriver ? | **O** |
| 8 | Pouvez-vous me décrire le déroulement des faits ? | **O** (ouverte malgré verbe — invite à développer) |
:::

---

## Mission 3 — Réclamation écrite (toner cyan)

Un client signale une **différence de quantité** sur une livraison de **toner cyan**. Rédige une lettre / e-mail de réponse professionnelle (accusé de réception, excuses, clarification des faits, proposition de solution, suite).

> **Astuce EnterSite** : suis la visite virtuelle jusqu'à la salle **13 V1** (Customer Service). Cherche les **modèles** de lettres / notes à droite et traite la commande. Lien : [Vers le site EnterSite](#entersite-placeholder) (URL à compléter lorsque disponible).

:::reponse
**Modèle de lettre / e-mail (proposition) :**

\`\`\`
EnterSite AG — Service clientèle
[Adresse]

[Lieu], le [date]

Objet : Votre réclamation — différence de quantité toner cyan — [n° commande / livraison]

Madame, Monsieur,

Nous accusons réception de votre réclamation concernant une **différence de quantité** sur la livraison de **toner cyan**.

Nous vous présentons nos excuses pour le désagrément occasionné. Après vérification de votre dossier (commande n° … / livraison n° …), nous constatons / clarifions la situation comme suit : [écart constaté].

**Solution proposée :**
- envoi immédiat des pièces manquantes **ou**
- avoir / avoir-facture selon votre préférence

Nous vous tiendrons informé(e) dès confirmation de l'expédition. Pour toute question : [tél. / e-mail].

Avec nos meilleures salutations,
[Nom] — EnterSite AG, Service clientèle
\`\`\`
:::

---

## Mission 4 — Note téléphonique Müller / Cellwar

Tu reçois un appel de **M. Müller** (entreprise **Cellwar**). Rédige la **note téléphonique** pour le/la destinataire absent(e).

:::reponse
**Note téléphonique (modèle) :**

| Champ | Contenu |
| --- | --- |
| Date / heure | [jj.mm.aaaa — hh:mm] |
| Appelant | M. Müller |
| Entreprise | Cellwar |
| Destinataire | [Nom du collègue / service] |
| Motif / message | [Raison de l'appel — rappel demandé / info à transmettre] |
| N° de rappel | [téléphone] |
| Urgence | ☐ normal · ☐ urgent |
| Pris par | [Ton nom] |
:::

---

## Mission 5 — Discussion STA

Discute de la situation de travail et d'apprentissage en plénière avec la classe et l'enseignant·e. Note les informations complémentaires.

:::reponse
**Réponse ouverte** — notes de discussion STA (pas de solution unique).
:::`;

const DEMO_206_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **M1** : Lorenz (entendu ≠ compris) · 7 points écoute active · 4 niveaux · tableau non verbal · schéma / texte = individuel
- **M2** : questions F/O (verbe → souvent F ; QQOQCP → O)
- **M3** : réclamation toner cyan · EnterSite **13 V1** · modèle de lettre
- **M4** : note tél. Müller / Cellwar
- **M5** : discussion STA`;

/** Exercices de maths Module 206 */
const DEMO_206_MATHS_FULL = `## Exercices de mathématiques — Module 206

Contexte : analyses de **taux d'engagement Instagram** (likes / vues). Calcule chaque résultat, puis vérifie avec le bouton solution.

### Exercice 1 — Taux de likes d'une publication

Une publication a obtenu **37** likes pour **564** vues.

Calcule le taux de likes en **%** (arrondi à 2 décimales).

:::solution
**6,56 %**

Calcul : 37 / 564 × 100 = 6,560… ≈ **6,56 %**
:::

### Exercice 2 — Tableau de 10 publications + moyenne

Complète le **% de likes** pour chaque publication, puis calcule la **moyenne**.

| Post | Likes | Vues | % likes |
| --- | ---: | ---: | ---: |
| 1 | 33 | 503 | ? |
| 2 | 29 | 500 | ? |
| 3 | 36 | 500 | ? |
| 4 | 49 | 1'000 | ? |
| 5 | 61 | 1'000 | ? |
| 6 | 55 | 1'000 | ? |
| 7 | 40 | 500 | ? |
| 8 | 63 | 1'000 | ? |
| 9 | 47 | 1'000 | ? |
| 10 | 87 | 1'401 | ? |
| | | **Moyenne** | **?** |

:::solution
| Post | Likes | Vues | % likes |
| --- | ---: | ---: | ---: |
| 1 | 33 | 503 | **6,56** |
| 2 | 29 | 500 | **5,80** |
| 3 | 36 | 500 | **7,20** |
| 4 | 49 | 1'000 | **4,90** |
| 5 | 61 | 1'000 | **6,10** |
| 6 | 55 | 1'000 | **5,50** |
| 7 | 40 | 500 | **8,00** |
| 8 | 63 | 1'000 | **6,30** |
| 9 | 47 | 1'000 | **4,70** |
| 10 | 87 | 1'401 | **6,21** |
| | | **Moyenne** | **6,127 %** |

Moyenne détaillée : (6,56 + 5,80 + 7,20 + 4,90 + 6,10 + 5,50 + 8,00 + 6,30 + 4,70 + 6,21) / 10 = **6,127 %**

Selon l'arrondi du corrigé papier : **Moyenne ≈ 6,11 %**.
:::

### Exercice 3 — Tendance

Sur la période observée, la tendance du taux d'engagement est-elle **croissante**, **décroissante** ou **stable** ?

:::solution
**Croissant** (tendance ascendante)
:::

> **Contrôle rapide (ligne SOLUTION)** : **6,56** | Moyenne = **6,11** (détail **6,127 %**) | **Croissant**`;

const DEMO_206_MATHS_SUMMARY = `## Maths — Solutions
1. **6,56 %** (37 / 564 × 100)
2. Moyenne détaillée **6,127 %** · corrigé ≈ **6,11 %**
3. Tendance **Croissant**
- Ligne SOLUTION : 6,56 | Moyenne = 6,11 | Croissant`;

/** Vérification des acquis Module 206 */
const DEMO_206_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Thème : **La communication**. Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

Qu'est-ce qu'une **question fermée** ? Donne **deux exemples**.

:::reponse
Une question fermée vise une réponse **courte et précise** (souvent **oui** / **non**). Elle commence généralement par un **verbe**.

Exemples :
- « As-tu préparé la commande client ? »
- « Est-ce que le chargement du camion est terminé ? »
:::

### Question 2

Décris le **schéma de fonctionnement** de la communication (si l'image manque).

:::reponse
Schéma typique :
1. **Émetteur** — code le message
2. **Message** — contenu transmis
3. **Canal** — voie de transmission (directe ou indirecte)
4. **Récepteur** — décode / interprète
5. **Feedback** — retour du récepteur vers l'émetteur (vérifie la compréhension)
Des **interférences** peuvent perturber chaque étape.
:::

### Question 3

Pourquoi faut-il **éviter les tueurs de conversation** (obstacles) ?

:::reponse
Ils freinent ou **bloquent** l'échange (désintérêt, interrogatoire, mépris, parler de soi, avis trop tôt…). En service clientèle, ils blessent le client et nuisent à la relation. Mieux : moteurs d'écoute active, ou dire honnêtement qu'on n'a plus le temps.
:::

### Question 4

Cite **trois** formules polies pour conclure avec un client **bavard**.

:::reponse
1. « J'aimerais vous écouter plus longtemps, mais malheureusement, mes fonctions m'obligent à poursuivre mon travail. »
2. « Il faut absolument que nous continuions à parler une autre fois. Malheureusement, je ne peux pas faire attendre les autres clients plus longtemps. »
3. « Il y aurait encore beaucoup de choses intéressantes à dire à ce sujet. Peut-être aurons-nous le temps d'échanger à nouveau quelques mots demain ? »
:::

### Question 5

Un client demande ton **supérieur**, qui est aux **toilettes**. Comment répondre poliment ? Que fais-tu pour la **note téléphonique** ?

:::reponse
**Réponses polies (sans détail intime) :**
- « Il / elle n'est pas disponible pour le moment. Puis-je prendre un message ? »
- « Je vais vérifier s'il / si elle est libre. Puis-je noter votre nom et un numéro de rappel ? »
- Éviter : « Il est aux toilettes. »

**Note téléphonique :** date/heure · nom de l'appelant · entreprise · destinataire · motif · n° de rappel · urgence · pris par (toi).
:::`;

const DEMO_206_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. Question fermée = oui/non / courte · 2 exemples (verbe)
2. Émetteur → message / canal → récepteur + feedback (+ interférences)
3. Éviter les obstacles : ils bloquent / blessent la relation
4. Trois formules de clôture polie (charge de travail / autre rendez-vous)
5. Disponible plus tard + message · note tél. complète · pas de détail « toilettes »`;

/** Contenu Module 207 — Pre-Sale-Service */
const DEMO_207_THEORIE_FULL = `## 7. Pre-Sale-Service (service à la prévente)

### 7.1 Les besoins

Celui qui souhaite vendre quelque chose doit connaître les **besoins** des clients potentiels.

Du point de vue de la gestion d'entreprise :

> Un besoin est la **sensation d'un manque** liée au **souhait de le combler**.

#### 7.1.1 La pyramide des besoins

L'importance des besoins peut être représentée avec la **pyramide des besoins** (Maslow). Les besoins **élémentaires** (manger, boire, dormir) constituent la base : leur satisfaction est nécessaire à la vie. Ce n'est que lorsque les besoins du niveau inférieur sont comblés que les besoins **supérieurs** entrent en ligne de compte.

**Niveaux (de la base au sommet) :**
1. **Physiologiques** — manger, boire, dormir…
2. **Sécurité** — protection, santé, stabilité
3. **Sociaux** — appartenance, affection, contacts
4. **Estime** — reconnaissance, statut, considération
5. **Réalisation de soi** — développement personnel, accomplissement

**Constat :** une grande faim et une soif tenaillante évincent tous les autres besoins.

**Exceptions / nuances :**
- **Maladie** — besoins élémentaires moins prioritaires ; fort besoin de **sécurité** (guérir, soins, médicaments) et de besoins **sociaux** (affection, paroles réconfortantes)
- **Examens / tests** — les besoins élémentaires perdent aussi de l'importance au profit d'autres (sécurité, estime…)

### 7.2 Vente

Pour qu'une vente se réalise, il faut au moins **deux personnes** : un **acheteur** et un **vendeur**. L'un veut acheter, l'autre veut vendre.

Dans un contexte de gestion d'entreprise, la tâche principale de la vente est de générer un **chiffre d'affaires minimum** pour être rentable et assurer l'**existence** de l'entreprise.

### 7.3 Motifs d'achat

Raisons très différentes d'acheter un produit ou un service.

- Revenu **faible** → concentration sur les besoins **élémentaires**
- Revenu **plus élevé** → autres motifs possibles :
  - **curiosité** (un produit plaît, envie d'essayer du nouveau)
  - **augmentation de l'estime de soi** (symboles de statut social)
  - **passion** (ex. vieilles voitures, objets d'art)
  - **envie d'acheter** (objets dont on n'a pas vraiment besoin)

### 7.4 Les évaluations des fournisseurs

Pour trouver le **meilleur fournisseur** possible pour le produit requis, on effectue une **évaluation des fournisseurs**.

Variantes possibles. Modèle éprouvé : la **grille de scoring** (notation) — évaluation ponctuelle avec notes, indices ou ratios. On sélectionne des critères, on mesure ou on estime, puis on agrège en une **valeur globale**. Avec une **pondération** individuelle, certains critères pèsent davantage dans l'évaluation globale.

**Critères possibles** (comparables et mesurables au cas par cas) :
- **qualité** — fonction, apparence, propriétés / caractéristiques des produits, services et services complémentaires
- **compétences de livraison** — quantité, délai, informations, flexibilité
- **prix** des produits et services
- **risque de défaillance** du fournisseur
- **confiance** et **fiabilité** dans la coopération
- **dépendance** de l'acheteur vis-à-vis du fournisseur`;

const DEMO_207_THEORIE_SUMMARY = `## À retenir — Module 207

### Besoin
Sensation d'un manque + souhait de le combler  
Pyramide (Maslow) : physiologique → sécurité → social → estime → réalisation  
Base d'abord ; exceptions : maladie, examens

### Vente
Acheteur + vendeur · CA minimum pour rentabilité / existence

### Motifs d'achat
Élémentaires (revenu faible) · curiosité · estime/statut · passion · envie d'acheter

### Évaluation fournisseurs
Grille de **scoring** + pondération  
Critères : qualité, livraison, prix, risque, confiance/fiabilité, dépendance`;

const DEMO_207_APERCU_FULL = `## Aperçu du module 207

Ce module présente le **Pre-Sale-Service** (service à la prévente) : comprendre les besoins clients, le contexte de vente, les motifs d'achat et l'évaluation des fournisseurs.

### Vous allez découvrir
1. Définition du besoin et pyramide des besoins
2. Rôle de la vente (acheteur / vendeur, CA)
3. Motifs d'achat selon le revenu et les motivations
4. Évaluation des fournisseurs (grille de scoring, critères)

### Source
EnterSite — Logistics by ASFL / SVBL`;

const DEMO_207_APERCU_SUMMARY = `## Aperçu — Module 207
- Besoins + pyramide
- Vente et motifs d'achat
- Scoring fournisseurs`;

const DEMO_207_OBJECTIFS_FULL = `## Objectifs du module 207

À l'issue de ce module, l'apprenti·e est capable de :

- Définir un **besoin** et expliquer la **pyramide des besoins**
- Décrire le rôle de la **vente** (acheteur / vendeur, objectif de CA)
- Citer des **motifs d'achat** selon le contexte (revenu, curiosité, statut, passion…)
- Expliquer l'**évaluation des fournisseurs** via une grille de scoring et ses critères`;

const DEMO_207_OBJECTIFS_SUMMARY = `## Objectifs
- Besoin + pyramide
- Vente / motifs d'achat
- Scoring fournisseurs`;

/** Glossaire Module 207 */
const DEMO_207_GLOSSAIRE_FULL = `## Glossaire — Module 207

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Coût total de possession | TCO (*Total Cost of Ownership*) | Somme de **tous** les coûts liés à un produit ou service : prix d'achat, possession, utilisation, maintenance et mise hors service — pas seulement le prix d'achat. |
| Compétences de livraison | | Capacité d'un fournisseur à livrer selon la **quantité**, le **délai**, les **informations** et la **flexibilité** attendues. |
| Fondation | Foundation | Dans la formation CFC : travail / examen de fin d'études (**Foundation**). Plus largement : organisme à but déterminé doté d'un patrimoine propre (utilité publique). |`;

const DEMO_207_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **TCO** : tous les coûts (achat → élimination), pas seulement le prix
- **Compétences de livraison** : quantité, délai, infos, flexibilité
- **Fondation** : examen Foundation / organisme patrimonial`;

/** Mises en situation Module 207 */
const DEMO_207_SITUATION_FULL = `## Mises en situation — Module 207

Contexte : tu travailles chez **EnterSite AG** (département des ventes). Les missions portent sur la **pyramide des besoins**, la gamme de produits, les **motifs d'achat** et l'**évaluation des fournisseurs**. Rédige d'abord ta propre réponse, puis utilise le bouton pour afficher ou masquer les solutions.

### Vue d'ensemble des missions
1. Pyramide des besoins
2. Gamme de produits
3. Motifs d'achat
4. Évaluation des fournisseurs
5. Discussion STA

---

## Mission 1 — Pyramide des besoins

Pendant ton apprentissage, tu peux soutenir le département des ventes pendant trois mois. La responsable de la division, **Madame Silvia Renggli**, te fait remarquer que les produits d'EnterSite AG ne font pas partie des besoins fondamentaux selon **Maslow**, et qu'on ne peut donc pas simplement partir du principe que nos produits peuvent être vendus sans marketing ni publicité.

Que veut dire Madame Renggli lorsqu'elle parle de Maslow ? Nomme les **cinq niveaux** de la pyramide de Maslow.

:::reponse
| Niveau | Nom |
| --- | --- |
| 5 | **Réalisation de soi** |
| 4 | **Reconnaissance** |
| 3 | **Besoins sociaux** |
| 2 | **Sécurité** |
| 1 | **Besoins fondamentaux** |
:::

---

## Mission 2 — Gamme de produits

Réfléchis au portefeuille de produits d'EnterSite AG : à quel niveau de la pyramide de Maslow se situent les produits proposés par EnterSite AG ?

:::reponse
**Sécurité (travail)**
:::

---

## Mission 3 — Motifs d'achat

Comme l'a mentionné Mme Renggli, nos produits ne font pas partie des besoins fondamentaux selon Maslow. Quels sont les motifs d'achat qui nous contraignent ou quelle satisfaction ressentons-nous lorsque nous achetons des produits d'EnterSite ?

:::reponse
- Le **développement technique**
- La **productivité**
- Les **besoins sociaux**
:::

---

## Mission 4 — Évaluation des fournisseurs

Madame Renggli te demande d'établir une évaluation de trois fournisseurs (**A / B / C**) et de la lui présenter. Elle te met dans les mains une feuille avec trois évaluations (diagramme à colonnes). Tu dois présenter ce diagramme dans le style d'une évaluation de fournisseur selon le modèle d'un article spécialisé, y compris la **pondération**. Quel fournisseur obtient la meilleure évaluation ?

:::reponse
**Fournisseur B** gagne avec **292 points**.

| Critère | A | B | C |
| --- | --- | --- | --- |
| Qualité | 9×10 → **90** | 8×10 → **80** | 8×10 → **80** |
| Respect du délai de livraison | 6×8 → **48** | 10×8 → **80** | 8×9 → **72** |
| Délai de livraison | 4×7 → **28** | 6×7 → **42** | 7×7 → **49** |
| Prix | 7×7 → **49** | 6×7 → **42** | 7×7 → **49** |
| Service | 10×6 → **60** | 8×6 → **48** | 5×6 → **30** |
| **Total** | **275** | **292** | **280** |

Détail : A = 90 + 48 + 28 + 49 + 60 = **275** · B = 80 + 80 + 42 + 42 + 48 = **292** · C = 80 + 72 + 49 + 49 + 30 = **280**
:::

---

## Mission 5 — Discussion STA

Discute de la situation de travail et d'apprentissage en plénière avec la classe et l'enseignant·e. Note les informations complémentaires.

:::reponse
**Réponse ouverte** — notes de discussion STA (pas de solution unique).
:::`;

const DEMO_207_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **M1** : Maslow — réalisation de soi → reconnaissance → sociaux → sécurité → fondamentaux
- **M2** : produits EnterSite au niveau **Sécurité (travail)**
- **M3** : motifs — développement technique, productivité, besoins sociaux
- **M4** : scoring A/B/C → **B = 292** (A 275, C 280)
- **M5** : discussion STA`;

/** Exercices de maths Module 207 — Portes ouvertes / publicité */
const DEMO_207_MATHS_FULL = `## Exercices de mathématiques — Module 207

Calcule chaque résultat, puis vérifie avec le bouton solution. Thème : publicité en ligne et **journée portes ouvertes**.

### Exercice 1 — Influence de la publicité en ligne

La publicité en ligne attire de plus en plus l'attention. On suppose que **80 %** des internautes regardent la publicité de manière superficielle et que **20 %** la regardent de plus près. Chez **5 %** des utilisateurs qui regardent la publicité de plus près, celle-ci influence la décision d'achat.

Chez combien d'utilisateurs une publicité en ligne avec **15'000** clics influence-t-elle la décision d'achat ?

:::solution
**150 utilisateurs**

Calcul :
1. Regardent de plus près : 15'000 × 20 / 100 = **3'000**
2. Influencés à l'achat : 3'000 × 5 / 100 = **150**
:::

### Exercice 2 — Tickets de parking

Vous organisez une journée portes ouvertes dans votre entreprise formatrice. En guise d'incitation, vous envoyez aux **1'000** meilleurs clients des tickets de parking gratuits (**5 CHF** le ticket) pour cette journée.

Votre chef veut savoir à combien s'élèveraient les frais de parking si **tous** les clients utilisent cette offre ce jour-là.

:::solution
**5'000 CHF**

Calcul : 5 × 1'000 = **5'000 CHF**
:::

### Exercice 3 — Stand barbecue

Lors de la journée portes ouvertes, des saucisses à griller et des cervelas sont proposés au prix de **6 CHF** chacun. **500** clients profitent de cette offre. Vous avez acheté les saucisses chez le boucher pour **1 CHF** chacune.

1. Quel est ton **chiffre d'affaires** au barbecue ?
2. Peux-tu **compenser** la perte sur les tickets de parking de l'exercice 2 avec cette recette ?

:::solution
**CA barbecue : 3'000 CHF** · **Non**, on ne peut pas compenser entièrement.

Calculs :
- CA : 500 × 6 = **3'000 CHF**
- Coût des saucisses : 500 × 1 = **500 CHF**
- Bénéfice des saucisses : 3'000 − 500 = **2'500 CHF**
- Perte parking restante : 5'000 − 2'500 = **2'500 CHF** → **Non** (manque 2'500 CHF)
:::

### Exercice 4 — Coûts de personnel et coût total

Pour organiser la journée portes ouvertes, il vous a fallu **5** jours de **8,25 h**. Votre salaire s'élève à **25 CHF**/heure.

1. À combien s'élèvent vos **coûts de personnel** pour l'organisation ?
2. À combien s'élèvent les **frais totaux** pour cette journée (coûts salariaux, tickets de parking et stand de grillades) ?

:::solution
**Personnel : 1'031,25 CHF** · **Coût total de l'événement : 3'531,25 CHF**

Calculs :
1. Heures : 5 × 8,25 = **41,25 h** · Coût : 41,25 × 25 = **1'031,25 CHF**
2. Bénéfice saucisses : 3'000 − 500 = **2'500 CHF**
3. Total dépense : parking + salaire − bénéfice = 5'000 + 1'031,25 − 2'500 = **3'531,25 CHF**
:::

> **Contrôle rapide (ordre du corrigé)** : 150 / 5'000 / 3'000 / Non / 1'031,25 / 3'531,25`;

const DEMO_207_MATHS_SUMMARY = `## Maths — Solutions
1. **150** utilisateurs influencés (15'000 × 20 % × 5 %)
2. Parking **5'000 CHF**
3. CA BBQ **3'000 CHF** · **Non** (bénéfice 2'500 → manque 2'500)
4. Personnel **1'031,25 CHF** · total événement **3'531,25 CHF**`;

/** Vérification des acquis Module 207 — PreSales service */
const DEMO_207_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

*Module 207 — PreSales service*

Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

Définis les **services avant-vente** (Pre-Sale-Service) et cite **deux** exemples pratiques.

:::reponse
**Définition :** services proposés au client **avant** l'achat afin d'aider le vendeur à obtenir des commandes client.

**Exemples :**
1. Parking gratuit
2. Heures d'ouverture prolongées
:::

### Question 2

Pour vendre quelque chose, il faut connaître les besoins des clients potentiels. Nomme les **5 niveaux** de la pyramide de Maslow.

:::reponse
1. **Besoins fondamentaux**
2. **Sécurité**
3. **Besoins sociaux**
4. **Reconnaissance**
5. **Réalisation de soi**
:::

### Question 3

Deux caractéristiques innées chez l'homme influencent considérablement son comportement d'achat et sont utilisées par la psychologie de la vente : son **instinct de chasse** et son **instinct de cueillette**. Décris ces deux notions avec tes propres mots.

:::reponse
**Instinct de chasse :** les spécialistes du marketing l'utilisent avec les **soldes**. La « chasse aux bonnes affaires » sert surtout à satisfaire l'envie d'acheter et de chasser, plus que les besoins fondamentaux.

**Instinct de cueillette :** exploité avec des **bons de réduction**, des **points** et des **coupons**.
:::

### Question 4

Quels sont les **quatre motifs d'achat** ?

:::reponse
1. **Curiosité** — un produit interpelle, envie d'essayer du nouveau
2. **Augmentation de l'estime de soi** — symboles de statut social
3. **Engouement / passion** — ex. vieilles voitures, objets d'art
4. **Envie d'acheter** — objets dont on n'a pas vraiment besoin
:::

### Question 5

Selon quels **six points** une évaluation des fournisseurs est-elle établie ?

:::reponse
1. **Qualité** — fonction, propriétés / caractéristiques des produits, prestations et services complémentaires
2. **Compétences de livraison** — quantité, date de livraison, flexibilité
3. **Prix** des produits et services achetés, ainsi que le **coût total de possession** associé
4. **Risque de défaillance** du fournisseur
5. **Confiance et fiabilité** dans la collaboration
6. **Dépendance** de l'acheteur vis-à-vis du fournisseur
:::`;

const DEMO_207_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. Services avant-vente · ex. parking gratuit, heures prolongées
2. Maslow : fondamentaux → sécurité → sociaux → reconnaissance → réalisation de soi
3. Instincts **chasse** (soldes) / **cueillette** (bons, points, coupons)
4. Quatre motifs : curiosité, estime, passion, envie d'acheter
5. Six points : qualité, livraison, prix/TCO, risque, confiance, dépendance`;

/** Contenu Module 208 — At-Sale-Service */
const DEMO_208_THEORIE_FULL = `## 8. At-Sales-Service (Service à la vente)

### 8.1 Le comportement d'achat

Comportement de l'acheteur·euse concernant l'achat d'un bien ou d'un service. Intègre motivations et aspects très différents.

Ex. : comportement d'un **consommateur final** ≠ celui d'un **acheteur d'entreprise** (ressources, profit). Même entre consommateurs finaux, motifs et modèles varient fortement.

#### 8.1.1 Comment le client est-il incité à acheter ?

La **psychologie de vente** étudie le comportement d'achat. Résultats appliqués dans la conception des magasins :

**Présentation à hauteur des yeux**  
Produits à hauteur des yeux → plus souvent achetés que ceux pour lesquels il faut tendre les bras ou se baisser.

**Présentation devant la caisse**  
Attente aux caisses = occasion de vendre de petits articles (sucreries…). Cible typique : mères avec enfants (quémande pendant l'attente).

**Les odeurs**  
Ex. : boulangerie au milieu de la surface de vente. L'odeur du pain frais incite à acheter du pain **et** d'autres aliments. Conseil : ne pas faire ses courses le ventre vide — les clients affamés remplissent plus le caddie.

Aucun produit n'est placé au hasard : les experts marketing calculent **quand, où et comment** le client se sert de préférence.

#### 8.1.2 Timbres de rabais, points, coupons : la collecte

Les marketeurs exploitent l'**instinct de collecte** (bons, points, coupons).

Deux manières :
1. **Traditionnelle** — carte de fidélité où le client colle points/étiquettes ; carte pleine → lot ou réduction. Variante : cumul de tickets de caisse jusqu'à un total d'achat.
2. **Numérique** — carte de fidélité type carte de crédit ; le vendeur saisit les achats électroniquement, solde communiqué périodiquement (bons, etc.). Le client n'est plus responsable de la collecte.

Différence clé : méthode 1 → souvent juste une adresse ; méthode 2 → perte d'anonymat, peu d'influence sur les données → « **clients transparents** ». Protection via une **loi stricte sur la protection des données** ; les grossistes garantissent le respect.

**Remarque :** collecte numérique = le client communique des données sur son comportement d'achat → le vendeur adapte assortiment, promotions ciblées, etc.

#### 8.1.3 Nouvelles technologies

Étude du comportement via technologies avancées, ex. **IRM** : réactions du cerveau aux produits/emballages visibles en images → intégrées aux stratégies de vente.

Centres commerciaux : plus grands, proches d'un **parc d'attractions**. Pour beaucoup, l'achat = loisir ; pour d'autres = aventure (chercher, comparer les prix).

### 8.2 Les situations de vente

**Vente quotidienne** (consommation courante) : peu de travail, conseils accessoires, sentiments secondaires. Le client achète car il a besoin du produit/service. Il souhaite :
- être servi rapidement
- un règlement simple
- un service orienté client
- une bonne qualité à un prix raisonnable
- une bonne prestation

**Produit complexe / cher** (ex. voiture) ou prestation globale → **vente accompagnée de conseils**. Grand choix, complexité, prix élevé peuvent déconcerter → le client veut des conseils de spécialiste.

### 8.3 L'entretien de vente

Requiert connaissances spécialisées, **tact** et bonnes connaissances des personnes. Souvent le vendeur ne connaît pas le client et doit, rapidement, identifier besoins et motifs d'achat. Sinon : insatisfaction, départ sans achat.

**Un bon vendeur :**
- évalue correctement le motif d'achat
- s'adresse personnellement (« vous », pas « on »)
- centre la conversation sur l'objet de la vente
- indique l'**utilité** du produit/service
- vend le bon produit / la bonne prestation

**Objections** neutres mais non justifiées → contre-arguments ; sinon admettre et s'informer. **Jamais** de contrevérités.

Si le client **provoque** (non objectif) :
- rester calme
- écouter activement
- laisser le client s'exprimer
- intonation neutre
- ne pas convaincre à n'importe quel prix

**Remarque :** être curieusement **d'accord** avec un interlocuteur énervé peut lui retirer ses arguments (plutôt que de le contredire).

### 8.4 Entretiens de vente en face à face

Communication **en personne**. Objectif : conclusion d'un **contrat** (service ou produit).

Comprend :
- **Prospection** — approche directe d'un nouveau client potentiel
- **Communication** — conseiller, informer, influencer selon les objectifs de l'entreprise
- **Service** — dépannage, formation, etc.

**Remarque :** la **vente personnelle** est l'instrument le plus important de la vente. Efficacité = personnel qualifié techniquement + personnalité ouverte et communicative.

#### 8.4.1 La vente personnelle

Utile surtout pour produits nécessitant des **explications** et pour les **services**.

Types courants de vente personnelle :
- vente en magasin / comptoir
- vente sur site client (service extérieur)
- vente par démonstration / conseil spécialisé

#### 8.4.2 Exemple — entretien en parfumerie

**Vanessa Maliqi**, 16 ans, 2e année d'apprentissage en parfumerie.

1. Vanessa salue et propose son aide.
2. Cliente : parfum féminin longue durée, bon marché, fête des mères ; demande différence **EdT** / **EdP**.
3. Vanessa explique :
   - **EdT** (eau de toilette) : 6–9 % de concentré, plus volatile, léger (idéal été)
   - **EdP** (eau de parfum) : 10–14 % ; variante intense jusqu'à ~20 % ; perceptible plus longtemps → en utiliser peu
4. Elle demande l'âge / usages de la mère (40 ans, occasions spéciales).
5. Conseil : eau de toilette fruitée/légère (ex. Azzaro Mademoiselle).
6. Cliente : merci + emballage cadeau.

### 8.5 Entretiens par téléphone / conférence

**Télévente** :
- **Inbound** (entrante) — passive : le client appelle et commande
- **Outbound** (sortante) — active : le vendeur appelle des prospects

Importance croissante : décharge le service extérieur (coûts élevés).

**Points d'attention (téléphone / conf-call) :**
- se présenter clairement et vérifier le bon interlocuteur
- parler distinctement, sourire « s'entend »
- structurer l'entretien (objectif, besoins, offre, suite)
- noter les infos et confirmer les accords par écrit si besoin
- rester professionnel malgré l'absence de langage corporel visible

### 8.6 La promotion des ventes

Ensemble des mesures pour **augmenter les ventes**. But : hausse du CA et du bénéfice.

**Actions (ventes promotionnelles)**  
Mesure la plus fréquente : baisse de prix, « 3 pour le prix de 2 », etc. Sert à introduire de nouveaux produits, réduire stocks, écouler fins de série / dates de péremption. Prix attractif → clients essaient un produit inconnu.

**Démonstrations et dégustations**  
Échantillons (souvent nouveaux produits) + parfois préparation sur place → curiosité et envie d'acheter. Camelots : démonstration théâtrale ; plus le vendeur est divertissant, plus il écoule.

#### 8.6.1 Vente additionnelle (cross-selling)

Le client achète le produit prévu **plus** un second produit lié.  
Ex. : billet train Zurich + billet tram / carte journalière urbaine.

Bien perçu si **lié** à l'achat et non envahissant (ex. piles pour appareil photo, produit d'entretien pour chaussures neuves).

### 8.7 Le contrat de vente : droits et obligations

Selon **CO art. 184 al. 1** : le vendeur s'oblige à livrer la chose et à en transférer la propriété ; l'acheteur s'engage à payer le prix. Échange « coup pour coup ».

| | **Droits** | **Obligations** |
| --- | --- | --- |
| **Acheteur** | Obtenir la chose et en devenir propriétaire ; en cas de vice : remplacement, réduction ou rédhibition | Payer le prix dans les délais |
| **Vendeur** | Recevoir le paiement du prix | Transmettre la chose et céder la propriété |

#### 8.7.1 Conclusion du contrat

Peut être **verbal**, **écrit** ou **tacite**. En affaires : privilégier l'écrit. Souvent précédé d'une **offre** (proposition CO) ; la **commande** conclut le contrat.

#### 8.7.2 Résiliation du contrat

Bases : **CO art. 184 al. 1** (et dispositions liées).

**Exécution** — motif principal de « fin » du contrat : prestation exécutée.

**Résiliation** — seulement si prévu par la loi, ex. :
- demeure du débiteur (CO 107 et 109)
- retard / défaut de paiement (CO 214 / CO 95)
- droit de conversion de l'acheteur (CO 205) — type particulier

**Impossibilité** — si la prestation devient impossible : règles spécifiques (conséquences juridiques selon le cas).

### 8.8 Conditions générales de vente (CGV)

En Suisse, on peut aménager les bases légales via le contrat et les conditions. Souvent regroupées dans les **CGV**.

**Remarque :** les CGV servent à l'exécution rapide de **contrats de masse**.

#### 8.8.1 Contenu des CGV

Grande liberté à la conclusion → les CGV peuvent contenir des règles que les clients n'accepteraient pas dans le corps du contrat. Rédigées par **une** partie ; l'autre doit vérifier et accepter/contester. Une **clause** les intègre au contrat → signature = acceptation.

#### 8.8.2 Conditions commerciales déloyales

Surnommées « **petits caractères** » : volumineux / difficiles à lire → acceptation par commodité. Organisations de consommateurs : risques trop souvent reportés sur le client.

**LCD art. 8** — agit de façon déloyale celui qui utilise des CGV qui, en contradiction avec la bonne foi, prévoient au détriment du consommateur une **disproportion notable et injustifiée** entre droits et obligations du contrat.

#### 8.8.3 Exemples actuels (liens support)

- La Poste Suisse — CGV prestations postales clientèle commerciale
- CFF — CGV demi-tarif
- Swisscom — CGV clients professionnels`;

const DEMO_208_THEORIE_SUMMARY = `## À retenir — Module 208

### Comportement d'achat
Final ≠ entreprise · psychologie de vente  
Hauteur des yeux · caisse · odeurs · placement calculé  
Fidélité : manuelle vs numérique (« clients transparents » + LPD)  
IRM / centres = shopping-loisir

### Situations & entretien
Courant : rapidité, simplicité, qualité/prix  
Complexe/cher : conseil spécialisé  
Bon vendeur : motif, « vous », utilité, bon produit  
Objections / provocation : calme, écoute, pas de mensonge

### Face à face & téléphone
Prospection · communication · service  
Inbound (client appelle) / Outbound (vendeur appelle)

### Promotion
Actions prix · dégustations/démos · **cross-selling** (lié, non forcé)

### Contrat & CGV
CO 184 : livraison/propriété ↔ prix  
Conclusion : oral/écrit/tacite · offre → commande  
Résiliation : cas légaux (demeure, paiement, conversion…)  
CGV = contrats de masse · LCD art. 8 (conditions abusives)`;

const DEMO_208_APERCU_FULL = `## Aperçu du module 208

Ce module traite du **At-Sales-Service** (service à la vente) : comportement d'achat, situations et entretien de vente, téléphone, promotions, contrat de vente et CGV.

### Vous allez découvrir
1. Incitations à l'achat (magasin, fidélité, technologies)
2. Situations de vente courante vs conseil
3. Entretien face à face et télévente (inbound/outbound)
4. Promotion des ventes et cross-selling
5. Contrat de vente (CO) et conditions générales (LCD art. 8)

### Source
EnterSite — Logistics by ASFL / SVBL`;

const DEMO_208_APERCU_SUMMARY = `## Aperçu — Module 208
- Comportement d'achat & magasin
- Entretien / télévente
- Promotions + cross-selling
- Contrat CO + CGV / LCD`;

const DEMO_208_OBJECTIFS_FULL = `## Objectifs du module 208

À l'issue de ce module, l'apprenti·e est capable de :

- Décrire le **comportement d'achat** et des techniques d'incitation en magasin
- Distinguer vente courante et vente avec **conseil**
- Conduire les bases d'un **entretien de vente** (face à face et téléphone)
- Expliquer la **promotion des ventes** et le **cross-selling**
- Citer droits/obligations du **contrat de vente** (CO) et le rôle des **CGV** / LCD art. 8`;

const DEMO_208_OBJECTIFS_SUMMARY = `## Objectifs
- Comportement d'achat
- Entretien / télévente
- Promotions + cross-selling
- Contrat + CGV`;

/** Glossaire Module 208 */
const DEMO_208_GLOSSAIRE_FULL = `## Glossaire — Module 208

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Forcer la main | | Exercer une pression commerciale pour pousser le client à accepter une offre ou une conclusion (ex. cadeau, prix promo) alors qu'il n'est pas pleinement convaincu ; risque d'attentes accrues ou d'effet négatif sur la relation. |
| Coupons | | Bons / titres permettant d'obtenir une **réduction**, un cadeau ou un avantage lors d'un achat. Souvent liés à la **fidélisation** (collecte de points, tickets, cartes) — traditionnelle (collage) ou numérique. |
| Imagerie par résonance magnétique (IRM) | IRM | Technique d'imagerie médicale utilisée aussi en recherche marketing pour visualiser les **réactions du cerveau** face à des produits, emballages ou publicités, afin d'affiner les stratégies de vente. |
| Neuromarketing | | Application des neurosciences au marketing : étude des réactions cérébrales / émotionnelles des consommateurs (ex. via IRM) pour mieux comprendre le comportement d'achat et optimiser présentation, emballage et messages. |`;

const DEMO_208_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **Forcer la main** : pression commerciale / risque relationnel
- **Coupons** : bons fidélité / réductions (manuel ou numérique)
- **IRM** : images des réactions cérébrales
- **Neuromarketing** : neurosciences au service du marketing`;

/** Mises en situation Module 208 */
const DEMO_208_SITUATION_FULL = `## Mises en situation — Module 208

Contexte : tu soutiens le département des **ventes** chez **EnterSite AG**. Les missions portent sur les situations de vente, l'entretien et la promotion. Rédige d'abord ta propre réponse, puis utilise le bouton pour afficher ou masquer les solutions / exemples proposés.

### Vue d'ensemble des missions
1. Situations de vente
2. Entretien de vente
3. Entretien de vente avec des arguments stimulants
4. Promotion des ventes
5. Discussion STA

---

## Mission 1 — Situations de vente

Pendant ton apprentissage, tu peux soutenir le département des ventes pendant trois mois. La directrice de la division, **Madame Silvia Renggli**, te fait remarquer que les produits d'EnterSite AG font partie des besoins quotidiens des entreprises et que nous devons mener l'entretien de vente avec un **minimum d'efforts** pour nous-mêmes et pour nos clients. Que veut dire Madame Renggli par cette déclaration ?

:::reponse
Madame Renggli souhaite faire savoir qu'EnterSite relève d'un **« achat de tous les jours »** (besoins courants). **Aucun conseil** n'est nécessaire : les produits sont achetés et vendus le plus **rapidement** et le plus **simplement** possible.
:::

---

## Mission 2 — Entretien de vente

Pour la première fois, tu peux servir personnellement un client au guichet d'accueil avec Madame Renggli. Elle attend de toi que tu te prépares bien à l'entretien de vente à venir afin de pouvoir représenter EnterSite AG de manière compétente. Quels sont les **cinq points** sur lesquels tu dois te baser pour mener l'entretien de vente ?

:::reponse
1. **Évaluer correctement** le motif d'achat du client
2. **S'adresser personnellement** au client (« vous » et pas « on »)
3. Orienter la conversation pour **mettre toujours l'objet de la vente au centre**
4. Être en mesure d'indiquer au client l'**utilité** du produit ou du service
5. Être capable de vendre au client le **bon produit** ou la **prestation appropriée**
:::

---

## Mission 3 — Entretien de vente avec des arguments stimulants

Pendant l'entretien de vente, tu remarques que le client veut te faire sortir de tes gonds et tente de te provoquer en te donnant des informations sur la concurrence. Quelles règles de comportement devrais-tu appliquer pour calmer ton client (lui « couper l'herbe sous le pied ») ?

:::reponse
- Rester **calme**
- **Écouter activement**
- Laisser le client **s'exprimer**
- Garder une **intonation neutre**
- Ne pas chercher à convaincre le client **à n'importe quel prix**
:::

---

## Mission 4 — Promotion des ventes

Madame Renggli a suivi ton entretien de vente et te donne encore quelques conseils pour la prochaine fois. Si le client commence à provoquer pendant l'entretien, tu peux lui soumettre un **prix promotionnel** ou lui remettre un **échantillon publicitaire** (ex. un tapis de souris) en guise de cadeau. Quels avantages Mme Renggli voit-elle dans les deux promotions de vente ?

:::reponse
Madame Renggli voit la possibilité de **satisfaire le client** avec un « cadeau ». Elle craint peut-être que le client ne se tourne vers la **concurrence** dans le cas contraire.

**Effets négatifs possibles à considérer :**
- Quelles seront les **prochaines exigences** du client (habitude d'être « forcé la main » / d'obtenir toujours un avantage) ?
- Que penseront les **autres clients** si on leur propose un prix promotionnel (équité, image de marque) ?
:::

---

## Mission 5 — Discussion STA

Discute de la situation de travail et d'apprentissage en plénière avec la classe et l'enseignant·e. Note les informations complémentaires.

:::reponse
**Réponse ouverte** — notes de discussion STA (pas de solution unique).
:::`;

const DEMO_208_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **M1** : achat quotidien → rapidité / simplicité, peu de conseil
- **M2** : 5 points d'entretien (motif, « vous », objet, utilité, bon produit)
- **M3** : calme · écoute · expression · ton neutre · pas à tout prix
- **M4** : cadeau / promo pour satisfaire — mais risques (exigences ↑, équité)
- **M5** : discussion STA`;

/** Exercices de maths Module 208 */
const DEMO_208_MATHS_FULL = `## Exercices de mathématiques — Module 208

Calcule chaque résultat, puis vérifie avec le bouton solution.

### Exercice 1 — Supplément par point (mixeur)

Lors de tes achats, tu reçois un point pour chaque franc dépensé. Avec **150 points**, un mixeur d'une valeur de **18 francs** t'est offert.

Quel est le **supplément par point** qui a été pris en compte pour pouvoir distribuer gratuitement le mixeur ?

:::solution
\\( 18 / 150 = 0{,}12 \\) CHF = **12 centimes** par point
:::

### Exercice 2 — Montant publicitaire (bons Migros)

Chaque semaine, **1'500'000** Suisses reçoivent de la publicité de Migros. Dans le journal publicitaire se trouve un bon d'une valeur de **10 francs**. **45 %** des clientes et clients profitent de l'occasion et utilisent le bon lors de leur prochain achat.

Quel montant de publicité doit être supporté par le marketing ?

:::solution
\\( 1\\,500\\,000 \\times 0{,}45 \\times 10 = \\mathbf{6\\,750\\,000} \\) CHF
:::

### Exercice 3 — Dégustation fromage (clients par magasin)

Samedi, un nouveau fromage est proposé à la dégustation dans les **600** magasins Migros. Chaque client qui passe devant peut déguster un cube de **2 grammes**. Le lundi suivant, le décompte quantitatif de tous les magasins (**1'200 kg**) est envoyé au service marketing.

Combien de clients **par magasin** ont dégusté le nouveau fromage samedi ?

:::solution
\\( 1\\,200 / (600 \\times 0{,}002) = \\mathbf{1\\,000} \\) clients par magasin

*(0,002 kg = 2 g)*
:::

### Exercice 4 — Clients en heures de pointe (boulangerie)

Dans une boulangerie, il faut en moyenne **2 minutes** à une vendeuse pour servir et encaisser le client.

Quel est le nombre **maximal** de clients que la vendeuse peut servir pendant les heures de pointe, de **6h00 à 8h00** ?

:::solution
Durée : \\( 2 \\times 60 = 120 \\) min  
\\( 120 / 2 = \\mathbf{60} \\) clients
:::`;

const DEMO_208_MATHS_SUMMARY = `## Maths — Solutions
1. **12** centimes / point
2. **6'750'000** CHF
3. **1'000** clients / magasin
4. **60** clients`;

/** Vérification des acquis Module 208 */
const DEMO_208_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Thème : **At-Sales-Service (service à la vente)**. Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

Quelles sont tes attentes lorsque tu achètes un produit courant pour lequel tu n'as pas besoin de conseils ? Donne **quatre** exemples.

:::reponse
1. Un **service rapide**
2. Un **traitement simple** de la transaction
3. Un **bon service** (orienté client)
4. Un **bon prix** (bonne qualité à un prix raisonnable)
:::

### Question 2

Comment réagis-tu à la question d'un client à laquelle tu ne peux pas répondre ? Décris **quatre** exemples pratiques.

:::reponse
1. **Admettre** que je ne sais pas quelque chose
2. Proposer au client d'**aller chercher** l'information
3. **Collecter** des informations (fournisseur, chef·fe, etc.)
4. **Transmettre** la réponse au client dans un délai raisonnable (téléphone ou e-mail)
:::

### Question 3

Qu'entend-on par « **promotion des ventes** » ?

:::reponse
Par promotion des ventes, on entend **toutes les mesures** qu'une organisation de vente peut prendre pour **améliorer les ventes** de produits et de services.
:::

### Question 4

Quelles **mesures** de promotion des ventes peut-on citer ? Donne plusieurs exemples.

:::reponse
- Offrir des **réductions** ou des promotions temporaires
- Proposer des **échantillons gratuits** pour faire découvrir un produit
- Mettre en place des **programmes de fidélité** avec des récompenses
- Organiser des **événements promotionnels** en magasin ou en ligne
- Utiliser des stratégies de **publicité ciblées**
:::

### Question 5

Quels sont les **cinq comportements** indiqués lorsque les clients n'argumentent pas de manière objective, mais de façon **provocatrice** ?

:::reponse
1. Rester **calme**
2. **Écouter activement**
3. Laisser le client **s'exprimer**
4. Garder un **ton neutre et objectif**
5. Ne pas chercher à convaincre le client **à tout prix**
:::`;

const DEMO_208_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. Rapidité · simplicité · bon service · bon prix
2. Admettre · chercher · collecter · transmettre (délai)
3. Toutes les mesures pour améliorer les ventes
4. Réductions · échantillons · fidélité · événements · pub ciblée
5. Calme · écoute · expression · ton neutre · pas à tout prix`;

/** Contenu Module 209 — After-Sales-Service */
const DEMO_209_THEORIE_FULL = `## 9. After-Sales-Service (service après-vente / SAV)

Le **service après-vente** désigne les mesures de marketing prises **après** une vente réussie pour **fidéliser** les clients à long terme. Objectifs :
- confirmer ultérieurement la décision d'achat
- convaincre d'effectuer d'**autres achats**
- augmenter la **satisfaction** en général

Le SAV doit être adapté **individuellement** à chaque client·e.

Dans la distribution, le SAV ouvre souvent des **affaires supplémentaires**. Un bon SAV renforce le lien durable : plus l'expérience est bonne et confortable, plus le client a de chances de **revenir**.

### Fidéliser les clients

Exemples de services techniques et/ou commerciaux après l'achat :
- formation des opérateurs
- maintenance et réparation
- services de gestion

### 9.1 Réclamations

À distinguer du **droit de rétractation** et de la **garantie**.

Une **réclamation** peut être introduite lorsque le produit présente un **défaut matériel** déjà présent **avant** la remise. Il y a défaut matériel si la marchandise ne correspond pas à la qualité convenue dans le contrat. Le vendeur doit livrer sans défaut ; sinon le client a droit à la **garantie** (droit légal).

Idée de base de la loi : maintenir le contrat — mais le client ne doit pas se contenter d'un produit défectueux. Il peut demander **réparation** ou **échange**.

#### 9.1.2 Le droit de réclamation

**Délai légal : 2 ans.** Le commerçant ne peut pas raccourcir cette période de garantie.

Attention : ce n'est **pas** une garantie de durabilité — le fournisseur répond des défauts qui existaient **déjà au moment de l'achat**.

Factures et justificatifs sont aussi soumis à des **délais de conservation**.

#### Différence plainte / réclamation

| | |
| --- | --- |
| **Réclamation** | Porte sur un produit/service précis ; droit légal à la garantie si non-conformité au contrat |
| **Plainte** | Expression du **mécontentement** (sans forcément invoquer la garantie) |

### 9.2 Le service à la clientèle

#### 9.2.1 Le jeu-concours

Jeu de hasard avec un ou plusieurs prix. En règle générale, seuls les jeux orchestrés à des fins de **publicité** ou de **collecte de données**, **sans paiement** du joueur, sont des jeux promotionnels. Ce n'en sont pas si le but est autre (ex. piège à abonnement / conclusion de contrat).

Types : loteries, concours (écrit, électronique, téléphone), devinettes, quiz, tombolas, paris, etc.

**Objectif commercial :** publicité + obtention de **données personnelles** (marketing direct / commerce d'adresses) ; aussi attraction sur les réseaux sociaux.

**Attention aux arnaques :** avis de gain sans participation → demande de « frais », numéros surtaxés, événements avec marchandises chères de mauvaise qualité.

#### 9.2.2 Enquêtes auprès des clients

La **satisfaction client** est un facteur clé de succès. Sans savoir ce que le client veut (ou ne veut pas) → risque de CA en baisse.

**Enquête de satisfaction** (Customer Satisfaction Survey) : infos systématiques sur satisfaction, attentes, habitudes d'achat. Bien faite → confiance + image ; bases pour améliorer et exploiter le potentiel.

**Objectifs d'une enquête :**
- déterminer besoins, souhaits, attitudes, attentes
- détecter à temps les évolutions négatives (alerte précoce)
- identifier forces et faiblesses
- poser les bases des stratégies marketing/vente
- prévenir l'exode des clients
- montrer que l'entreprise se soucie de ses clients
- augmenter la fidélité (**Satisfied → Loyal → Advocate** : satisfait → fidèle → ambassadeur)
- motiver les employés via les retours positifs

**Formes d'enquête** (adapter au groupe cible ; lieu, étendue, moment, méthode) :
- enquête **en ligne** (la plus courante à l'ère numérique : large portée, coût bas, moment choisi par le client)
- enquête **téléphonique**
- enquête **personnelle**

### 9.3 Tolérance / bonne volonté (geste commercial)

Contexte : cycles de vie produits raccourcis + tendances rapides → satisfaction et fidélisation cruciales. Instrument souvent oublié : la **bonne volonté**.

#### 9.3.1 Qu'entend-on par bonne volonté ?

**Complaisance / geste commercial** = concession **unilatérale et volontaire** entre parties. L'entreprise n'y est **pas** légalement tenue.

- Accordable seulement **après** exécution complète d'une commande
- Juridiquement : décision volontaire de **renoncer** à des droits contractuels
- Se distingue de la **garantie** (régie par la loi)

### 9.4 Garantie

Deux notions à distinguer :

**Garantie (légale / vendeur)**  
En Suisse : **2 ans** de garantie sur les objets achetés — le vendeur garantit l'absence de défaut. Délai **obligatoire**, non raccourcissable. Il est toutefois permis d'**exclure totalement** une garantie dans un contrat ; dans ce cas, regarder la garantie fabricant.

**Garantie du fabricant**  
Le **fabricant** (pas le vendeur) offre une garantie sans défaut. **Non réglementée** par la loi : étendue et durée libres. Souvent réparation / pièces 1–5 ans ; parfois garantie de bon fonctionnement.

**Remarque :** garantie vendeur et garantie fabricant **ne s'excluent pas**. Le mode d'emploi y fait souvent référence — parfois **enregistrement** obligatoire chez le fabricant.`;

const DEMO_209_THEORIE_SUMMARY = `## À retenir — Module 209

### SAV
Après la vente : fidéliser, confirmer l'achat, racheter, satisfaction  
Personnalisé · affaires supplémentaires · lien durable  
Ex. : formation, maintenance, réparation, gestion

### Réclamation vs plainte
**Réclamation** = défaut matériel déjà présent → garantie (réparation/échange)  
Délai **2 ans** (pas de raccourcissement ; ≠ garantie de durabilité)  
**Plainte** = expression du mécontentement

### Service clientèle
Jeux-concours : pub / données ; attention arnaques (faux gains)  
Enquêtes : Satisfied → Loyal → Advocate  
Formes : online, téléphone, personnel

### Bonne volonté
Geste **volontaire** (pas une obligation légale) ≠ garantie  
Après exécution complète de la commande

### Garantie
Vendeur : 2 ans (Suisse), obligatoire sauf exclusion totale  
Fabricant : libre (durée/étendue) · peut coexister · parfois enregistrement`;

const DEMO_209_APERCU_FULL = `## Aperçu du module 209

Ce module présente le **After-Sales-Service** (SAV) : fidélisation après vente, réclamations, enquêtes et jeux-concours, geste commercial, garanties.

### Vous allez découvrir
1. Rôle du SAV et fidélisation
2. Réclamations (délai 2 ans) vs plaintes
3. Jeux-concours et enquêtes de satisfaction
4. Bonne volonté (geste commercial)
5. Garantie vendeur vs garantie fabricant

### Source
EnterSite — Logistics by ASFL / SVBL`;

const DEMO_209_APERCU_SUMMARY = `## Aperçu — Module 209
- SAV et fidélisation
- Réclamation / plainte (2 ans)
- Enquêtes + jeux-concours
- Geste commercial · garanties`;

const DEMO_209_OBJECTIFS_FULL = `## Objectifs du module 209

À l'issue de ce module, l'apprenti·e est capable de :

- Expliquer le rôle du **SAV** et la fidélisation client
- Distinguer **réclamation**, **plainte** et droits liés à la garantie
- Décrire jeux-concours (objectifs / risques) et **enquêtes** de satisfaction
- Définir la **bonne volonté** (geste commercial) face à la garantie légale
- Différencier **garantie vendeur** et **garantie fabricant**`;

const DEMO_209_OBJECTIFS_SUMMARY = `## Objectifs
- SAV / fidélisation
- Réclamation vs plainte
- Enquêtes + concours
- Geste commercial · garanties`;

/** Glossaire Module 209 */
const DEMO_209_GLOSSAIRE_FULL = `## Glossaire — Module 209

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Support | | Assistance apportée au client **après** l'achat (technique et/ou commerciale) : formation, maintenance, réparation, conseils d'utilisation, etc. Fait partie du SAV pour accompagner et fidéliser. |
| Réclamation | | Demande du client portant sur un **produit ou service précis** qui présente un **défaut matériel** déjà présent avant la remise (non-conformité au contrat). Ouvre le **droit légal à la garantie** (réparation ou échange). Délai légal : **2 ans**. |
| Piège de l'abonnement | | Pratique trompeuse (souvent via faux avis de gain / jeux-concours) visant à pousser le consommateur à conclure un **abonnement** ou un contrat payant (frais, numéros surtaxés, marchandises chères de mauvaise qualité). |
| Commercial | | Relatif à la **vente** et à la relation client. Un **geste commercial** (bonne volonté / complaisance) est une concession **unilatérale et volontaire** : l'entreprise n'y est pas légalement tenue (≠ garantie). |
| Stratégie | | Plan d'action à moyen / long terme (ex. marketing, vente, fidélisation). Les enquêtes clients servent notamment à fonder les **stratégies** marketing et de vente des années suivantes. |`;

const DEMO_209_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **Support** : assistance après achat (formation, maintenance…)
- **Réclamation** : défaut matériel → garantie (2 ans)
- **Piège de l'abonnement** : arnaque via faux concours / contrat forcé
- **Commercial** : vente · geste commercial = volontaire (≠ garantie)
- **Stratégie** : plan marketing / vente (souvent via enquêtes)`;

/** Mises en situation Module 209 */
const DEMO_209_SITUATION_FULL = `## Mises en situation — Module 209

Contexte : tu travailles chez **EnterSite AG**. Les missions portent sur le **service après-vente** (fidélisation, réclamations, geste commercial). Rédige d'abord ta propre réponse, puis utilise le bouton pour afficher ou masquer les solutions / exemples proposés.

### Vue d'ensemble des missions
1. Fidéliser la clientèle
2. Réclamation (cartouche d'encre)
3. Plainte ou réclamation
4. Tolérance / geste commercial
5. Travail de fin d'études — service à la clientèle (EnterSite)
6. Discussion STA

---

## Mission 1 — Fidéliser la clientèle

Pendant ton apprentissage, tu peux soutenir le département des ventes pendant **trois mois** et y exercer différentes activités. Madame **Silvia Renggli** veut savoir de toi comment EnterSite AG peut **fidéliser ses clients plus longtemps**.

:::reponse
Les clients peuvent être fidélisés de différentes manières. Les services **techniques et/ou commerciaux après l'achat** du produit en sont un exemple : formation des opérateurs, services de **maintenance** et de **réparation**, services de **gestion**.
:::

---

## Mission 2 — Réclamation

Un client se présente à ton guichet avec une réclamation : sa **cartouche d'encre** n'a pas tenu **deux ans**. En tant que représentant·e de ton entreprise, comment peux-tu aider ton client à ce sujet ? Le client a-t-il droit à une réclamation ?

:::reponse
Le délai pendant lequel les réclamations peuvent être faites est fixé par la loi : il est de **deux ans**. Je peux essayer d'être aussi **conciliant·e** que possible et de proposer ainsi une aide équitable au client.
:::

---

## Mission 3 — Plainte ou réclamation

Ton client au guichet est confus et utilise une fois le mot « **plainte** » et une fois le mot « **réclamation** » pour sa cartouche d'encre vide. Explique à ton client ce qu'est une réclamation et ce qu'est une plainte.

:::reponse
Une **réclamation** porte sur un produit ou un service **spécifique**. Elle comprend le **droit légal à la garantie** si le produit ou le service ne correspond pas aux spécifications convenues dans le contrat de vente.

Avec une **plainte**, le client exprime simplement son **insatisfaction** (mécontentement), sans forcément invoquer la garantie.
:::

---

## Mission 4 — Tolérance / geste commercial

Tu récupères la cartouche d'encre vide et lis la puce intégrée. Tu constates qu'elle n'a imprimé que **150 feuilles** au cours des deux dernières années. Avec cette information, tu retournes vers ton client et lui proposes une **cartouche de remplacement gratuitement**. Le client veut savoir quelle est la différence entre le **geste commercial** et la **garantie**.

:::reponse
Le **geste commercial** désigne la concession **unilatérale et volontaire** entre deux parties contractuelles. Une entreprise n'est **pas** légalement tenue d'être conciliante : elle peut l'être si elle le souhaite. Le geste commercial ne peut être accordé qu'**après** l'exécution complète d'une commande. Juridiquement, c'est une décision volontaire de **renoncer** à des droits fixés par contrat. Il se distingue de la **garantie**, qui est régie par la **loi**.

En Suisse, les consommateurs ont, selon la loi, **deux ans** de garantie sur les objets achetés : le vendeur doit garantir l'absence de défaut. Cette période est **obligatoire** et ne peut pas être raccourcie. Il est toutefois permis d'**exclure totalement** une garantie dans un contrat ; dans ce cas, regarder absolument la **garantie du fabricant**.
:::

---

## Mission 5 — Travail de fin d'études (service à la clientèle)

> **Astuce EnterSite** : suis la visite virtuelle jusqu'à la salle **13 V1**. Visite la salle de travail de l'école professionnelle virtuelle au sein d'EnterSite. Cherche l'image de droite et résous le **travail de fin d'études** sur le service à la clientèle. Lien : [Vers le site EnterSite](#entersite-placeholder) (URL à compléter lorsque disponible).

:::reponse
**Réponse individuelle** — selon le travail de fin d'études EnterSite (pas de solution unique ici).
:::

---

## Mission 6 — Discussion STA

Discute de la situation de travail et d'apprentissage en plénière avec la classe et l'enseignant·e. Prends des notes supplémentaires.

:::reponse
**Réponse ouverte** — notes de discussion STA (pas de solution unique).
:::`;

const DEMO_209_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **M1** : fidélisation via SAV (formation, maintenance, réparation, gestion)
- **M2** : réclamation cartouche · délai légal **2 ans** · conciliant
- **M3** : réclamation = garantie légale · plainte = mécontentement
- **M4** : geste commercial (volontaire) ≠ garantie (loi, 2 ans)
- **M5** : EnterSite salle **13 V1** (fin d'études service clientèle)
- **M6** : discussion STA`;

/** Exercices de maths Module 209 */
const DEMO_209_MATHS_FULL = `## Exercices de mathématiques — Module 209

Calcule chaque résultat, puis vérifie avec le bouton solution.

### Exercice 1 — Kilomètres chez les gros clients

**Sarah Nydegger** rend visite à différents gros clients **deux fois par semaine**. Le trajet **aller** pour se rendre chez le client est en moyenne de **100 km**.

Combien de kilomètres parcourt-elle **par an** pour EnterSite AG, si elle travaille **47 semaines** par an ?

:::solution
**18'800 km**

Calcul : 47 × 2 × 100 × 2 = **18'800 km**  
(47 semaines × 2 visites × 100 km aller × 2 pour l'aller-retour)
:::

### Exercice 2 — Provision garanties et réclamations

Pour la garantie et les réclamations, on compte **1,5 %** du chiffre d'affaires par an. Ton entreprise réalise un chiffre d'affaires de **1'250'000 francs** par mois.

Quel est le montant de la provision pour les garanties et réclamations ?

:::solution
**225'000 CHF**

Calcul : 1'250'000 × 12 × 1,5 % = 1'250'000 × 12 × 0,015 = **225'000 CHF**
:::

### Exercice 3 — Budget jeu-concours

Pour la journée portes ouvertes, tu organises un jeu-concours. Ton patron te libère **0,25 ‰** du chiffre d'affaires annuel.

Combien d'argent recevras-tu pour cette journée (mêmes valeurs que l'exercice 2) ?

:::solution
**3'750 CHF**

Calcul : 1'250'000 × 12 × 0,25 / 1'000 = **3'750 CHF**
:::

### Exercice 4 — Coût d'une enquête client

Tu engages un spécialiste des enquêtes qui doit réaliser pour toi une enquête auprès des clients via les médias sociaux. Il te demande **1'650 francs** pour ce service.

Quel est le **pourcentage** du chiffre d'affaires annuel (mêmes valeurs que l'exercice 2) ?

:::solution
**0,011 %**

Calcul : 1'650 / (1'250'000 × 12) × 100 = **0,011 %**
:::

> **Contrôle rapide (ordre du corrigé)** : 18'800 · 225'000 · 3'750 · 0,011`;

const DEMO_209_MATHS_SUMMARY = `## Maths — Solutions
1. **18'800 km** (47 × 2 × 100 × 2)
2. **225'000 CHF** (1'250'000 × 12 × 1,5 %)
3. **3'750 CHF** (CA annuel × 0,25 ‰)
4. **0,011 %** (1'650 / CA annuel × 100)`;

/** Vérification des acquis Module 209 */
const DEMO_209_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Thème : **Le service après-vente**. Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

Définis le **service après-vente** et formule **deux** exemples pratiques.

:::reponse
**Définition :** le service après-vente décrit l'ensemble des **mesures marketing** prises par une entreprise pour **fidéliser à long terme** le client concerné après la vente réussie d'un produit.

**Exemples :**
1. Formation du personnel de service / des opérateurs
2. Services de maintenance et de réparation
:::

### Question 2

Tu achètes un nouveau produit. Selon la loi, combien de temps le fournisseur doit-il t'accorder la **garantie** ?

:::reponse
**2 ans**
:::

### Question 3

Pourquoi les entreprises organisent-elles des **jeux-concours** ? Donne **deux** exemples.

:::reponse
1. Faire de la **publicité** et obtenir des **données personnelles** de consommateurs potentiels pour le commerce d'adresses (marketing direct).
2. Attirer l'attention sur les **réseaux sociaux**.
:::

### Question 4

Quels sont les objectifs de l'entreprise lorsqu'elle mène une **enquête** auprès de ses clients ? Cite au moins **quatre** objectifs.

:::reponse
Parmi les objectifs (citer au moins quatre) :
- Déterminer les **besoins**, souhaits, attitudes et attentes des clients
- Percevoir à temps les évolutions négatives (**alerte précoce**)
- Obtenir des infos sur les **forces et faiblesses** de l'entreprise
- Créer une base pour les **stratégies** marketing et de vente
- **Prévenir** les départs de clients
- Montrer que l'entreprise se **soucie** de ses clients
- Augmenter la **fidélisation** (**Satisfied → Loyal → Advocate** : satisfait → fidèle → ambassadeur)
:::

### Question 5

Quelle est la différence entre la **bonne volonté** (tolérance / geste commercial) et la **garantie** ?

:::reponse
**Bonne volonté / tolérance :** peut être accordée, mais ce n'est **pas** une obligation légale.

**Garantie :** en Suisse, les consommateurs ont, selon la loi, **deux ans** de garantie sur les objets achetés — le vendeur doit garantir l'absence de défaut.
:::`;

const DEMO_209_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. SAV = mesures marketing post-vente pour fidéliser · ex. formation, maintenance/réparation
2. Garantie légale : **2 ans**
3. Concours : pub + données · attraction réseaux sociaux
4. Enquête : besoins, alerte précoce, forces/faiblesses, stratégies, prévenir départs, image, fidélisation (Satisfied → Loyal → Advocate)…
5. Bonne volonté = volontaire · garantie = obligation légale (2 ans)`;

/** Contenu Module 301 — Logistique d'approvisionnement */
const DEMO_301_THEORIE_FULL = `## 1. La logistique d'approvisionnement

Sujet du quotidien à différents niveaux et rôles : personne seule, famille ou **entreprise** — chacune doit se procurer des produits. Quantités différentes, mais réflexions et démarche **similaires**.

Chez les particuliers : fournisseurs et prix souvent connus → achat facile. En entreprise : défi de taille.

L'**achat** est une tâche centrale. Des spécialistes (**acheteurs**) recherchent, négocient et fournissent la marchandise au meilleur rapport qualité/prix et les conditions de livraison.

**Règle des 6B** (objectif, Jünemann) : **bonne** marchandise, **bonne** quantité, **bonne** qualité, **bon** moment, **bon** endroit, **bon** prix.

Défis : large choix dans un monde interconnecté, influences politiques et naturelles, aspects financiers, protection de l'environnement, etc.

### 1.1 La procédure d'approvisionnement

Atteindre les objectifs d'achat exige connaissances spécialisées, compétences de négociation et répartition claire des tâches — souvent **stratégiques** vs **opérationnelles**.

#### Missions stratégiques (planification)
- Négociation des conditions de prix et de livraison
- Collaboration au développement des produits
- Garantie du savoir-faire (*know-how*)
- Optimisation des processus d'approvisionnement
- Garantie à long terme des sources d'approvisionnement

**Remarque :** souvent effectuées par les **cadres** de l'approvisionnement.

#### Missions opérationnelles (exécution)
- Passation de la commande
- Contrôle des délais
- Contrôle de la livraison

**Remarque :** peuvent être exécutées aussi par des acheteurs juniors. La commande respecte ce qui a été décidé au niveau stratégique.

#### 1.1.1 But de l'approvisionnement

Comme tout individu, l'entreprise se procure ce dont elle a besoin pour fonctionner, par ex. :
- biens
- informations
- prestations de services
- capitaux
- main-d'œuvre
- licences, brevets

Exemples : matières premières (fèves de cacao) ; main-d'œuvre (récolte de légumes).

**Catégories de biens à acquérir :**
- **Biens de consommation durables**
- **Matériaux de production** — matières premières, matières auxiliaires, consommables
- **Biens d'équipement** — machines de fabrication/bureau, halles de production et de stockage
- **Prestations de services** — nettoyage, gardiennage, formation, support informatique

### 1.2 Make or Buy (faire ou acheter)

Question du quotidien : « Je le fais ou je l'achète ? » (ex. pain maison vs boulangerie). Facteurs : **prix**, **qualité**, **temps**.

Même logique en entreprise : qu'est-ce qui est plus rentable / génère plus de profit — fabriquer soi-même ou faire fabriquer ? Décision ancrée dans la **stratégie**.

Principe guide :

> Nous ne faisons que ce que nous savons faire **mieux** que les autres.

- **Make** — l'entreprise croit être la mieux placée ; s'appuie sur ses **compétences clés**.
- **Buy** — les acheteurs cherchent le producteur le plus apte à fabriquer et livrer.

### 1.3 Externalisation (*outsourcing*)

*out* = hors de · *source* = source

Transfert d'une activité (en tout ou en partie) vers un **partenaire externe**, basé sur des **contrats** (durée, objectif des prestations). Choix du partenaire crucial ; confiance et communication ouverte.

**Exemples typiques :** travaux de nettoyage, assistance informatique, distribution, comptabilité, etc.

### 1.4 Quelles quantités doit-on acheter ?

Question clé : « Combien ? » — comme en cuisine (nombre de convives).

En entreprise : **prévision** et **planification des besoins** (valeurs empiriques + attentes pour le futur proche). Quantité discutée avec le fournisseur ; conditions de livraison clarifiées.

Cela aide à :
- fixer les quantités à acheter et le **nombre de commandes par an**
- définir conditions et modalités de livraison avec le partenaire

Autres aspects : ressources en personnel, capacité de stockage, consommation/écoulement des marchandises → chaque entreprise a une planification **individuelle**.

### 1.5 À quel moment acheter ?

Principe : acheter quand les besoins se font sentir. Exceptions :
- **Produits saisonniers** — disponibles seulement à certaines périodes
- **Achats spéculatifs** — profiter d'une hausse/baisse de prix (facteurs politiques/économiques). Ex. : pétrole, devises (CHF / EUR) ; aussi situations comme la spéculation sur les masques`;

const DEMO_301_THEORIE_SUMMARY = `## À retenir — Module 301

### Approvisionnement
Acheteurs : meilleur rapport qualité/prix + conditions  
**6B** : bonne marchandise, qualité, prix, moment, endroit, quantité  
Défis : choix, politique, nature, finance, environnement

### Stratégique vs opérationnel
**Stratégique** (cadres) : négociation, développement, know-how, processus, sources long terme  
**Opérationnel** : commande, délais, livraison

### Quoi acheter ?
Biens, infos, services, capitaux, main-d'œuvre, licences…  
Catégories : durables · MP/auxiliaires/consommables · équipements · services

### Make or Buy
Prix · qualité · temps  
« Ne faire que ce qu'on fait mieux que les autres » · compétences clés

### Externalisation
Transfert contractuel vers partenaire externe (nettoyage, IT, distribution, compta…)

### Combien / quand ?
Prévision + planification des besoins  
Saisonnier · spéculatif (pétrole, devises…)`;

const DEMO_301_APERCU_FULL = `## Aperçu du module 301

Ce module introduit la **logistique d'approvisionnement** : rôle des acheteurs, procédure stratégique/opérationnelle, Make or Buy, externalisation, quantités et moments d'achat.

### Vous allez découvrir
1. Défis et règle des 6B
2. Missions stratégiques vs opérationnelles
3. But de l'approvisionnement et catégories de biens
4. Make or Buy et externalisation
5. Quantités (prévisions) et timing (saisonnier / spéculatif)

### Source
EnterSite — Logistics by ASFL / SVBL`;

const DEMO_301_APERCU_SUMMARY = `## Aperçu — Module 301
- Approvisionnement & 6B
- Stratégique / opérationnel
- Make or Buy · outsourcing
- Quantités & timing`;

const DEMO_301_OBJECTIFS_FULL = `## Objectifs du module 301

À l'issue de ce module, l'apprenti·e est capable de :

- Expliquer le rôle de la **logistique d'approvisionnement** et des acheteurs (dont la règle des **6B**)
- Distinguer missions **stratégiques** et **opérationnelles**
- Citer ce que l'entreprise peut s'approvisionner et classer les biens
- Expliquer la décision **Make or Buy** et l'**externalisation**
- Décrire comment déterminer **quantités** et **moments** d'achat (prévisions, saisonnier, spéculatif)`;

const DEMO_301_OBJECTIFS_SUMMARY = `## Objectifs
- Approvisionnement & 6B
- Stratégique / opérationnel
- Make or Buy · outsourcing
- Quantités & timing`;

/** Glossaire Module 301 */
const DEMO_301_GLOSSAIRE_FULL = `## Glossaire — Module 301

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Acheteur | | Spécialiste de l'approvisionnement qui recherche, négocie et procure les marchandises (et services) au meilleur rapport **qualité / prix**, avec les conditions de livraison adaptées. |
| Outsourcing | Externalisation | Transfert (total ou partiel) d'activités jusqu'alors réalisées en interne vers un **partenaire externe**, sur la base de **contrats** (durée, prestations). Ex. : nettoyage, IT, distribution, comptabilité. |
| Make or Buy | Faire ou acheter | Décision stratégique : **fabriquer soi-même** (*make*) ou **acheter / sous-traiter** (*buy*), selon le **prix**, la **qualité** et le **temps**. Principe : ne faire que ce que l'on sait faire **mieux** que les autres (compétences clés). |
| Opérationnel | | Niveau d'exécution quotidienne de l'approvisionnement : passation de commande, contrôle des délais et de la livraison — souvent réalisé par des acheteurs juniors. |
| Stratégique | | Niveau de **planification** long terme : négociation des conditions, développement produit, know-how, optimisation des processus, sécurisation des sources d'approvisionnement — souvent mené par les cadres. |
| Capital | | Ressources financières que l'entreprise se procure (ex. crédit bancaire) pour financer son activité ; à rémunérer (intérêts) sur la durée. |
| Licences | | Droits d'utilisation d'un savoir-faire, d'une technologie ou d'une marque (souvent liés à un brevet) que l'entreprise achète ou obtient pour produire / commercialiser. |
| Biens de consommation | | Biens consommés dans l'activité (dont matériaux de production : matières premières, auxiliaires, consommables) nécessaires au fonctionnement courant. |
| Biens d'investissement | Biens d'équipement | Biens durables servant à la production ou à l'exploitation : machines, équipements de bureau, halles de production et de stockage. |
| Prestations de services | | Services acquis auprès de tiers : nettoyage, gardiennage, formation, support informatique, etc. |
| Procédure du point de commande - quantités fixes | | Commande déclenchée lorsque le stock atteint le **point de commande** ; la quantité commandée est toujours la même (**q** fixe). Simple, adaptée à forte rotation ; risque de surstock si la demande baisse. |
| Procédure du point de commande - quantités variables | | Commande déclenchée au **point de commande** ; la quantité vise à remonter le stock au **maximum**. Suit mieux les ventes ; calcul à chaque commande. |
| Procédure de rythme de commande - quantités fixes | | Commande à date / rythme **fixe** avec une quantité **fixe** (**q**). Adaptée aux ventes stables ; automatisable si les paramètres sont bons. |
| Procédure de rythme de commande - quantités variables | | Commande à date / rythme **fixe** ; la quantité remonte jusqu'au **max**. Livraisons régulières contractuelles ; risque de dépasser le max si les ventes baissent. |`;

const DEMO_301_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **Acheteur** : négocie et procure au meilleur rapport qualité/prix
- **Outsourcing** : externalisation contractuelle vers un partenaire
- **Make or Buy** : fabriquer ou acheter (prix · qualité · temps)
- **Opérationnel** vs **stratégique** : exécution vs planification
- **Capital · licences · biens** (consommation / investissement) · **services**
- **4 procédures de commande** : point de commande / rythme × qté fixe / variable`;

/** Mises en situation Module 301 */
const DEMO_301_SITUATION_FULL = `## Mises en situation — Module 301

Contexte : tu travailles chez **EnterSite AG** (département *Procurement Management*). Les missions portent sur la **logistique d'approvisionnement** (achat vs approvisionnement, Make or Buy, outsourcing). Rédige d'abord ta propre réponse, puis utilise le bouton pour afficher ou masquer les solutions / exemples proposés.

### Vue d'ensemble des missions
1. Clarifier les différences dans la logistique d'approvisionnement
2. Activités dans le domaine des marchés publics
3. Évaluer la fabrication interne ou externe
4. Make or Buy lors de l'achat d'appareils
5. Outsourcing – un facteur de compétitivité ?
6. Discussion de la mise en situation

---

## Mission 1 — Clarifier les différences dans la logistique d'approvisionnement

Aujourd'hui, c'est ton premier jour dans le département Procurement Management d'EnterSite AG. Lors de la visite d'introduction, tu entends souvent les termes « **approvisionnement** » et « **achat** ». Sur la base de ce que tu as appris jusqu'à présent, explique les différences possibles entre ces deux termes.

:::reponse
**Approvisionnement :**
L'approvisionnement comprend plus que le simple « achat ». Les tâches **stratégiques** telles que les produits et le **choix des fournisseurs** en font partie.

**Achat :**
Le terme « achat » désigne une activité **répétitive et quotidienne** consistant à acheter des marchandises. Il s'agit donc de **processus de commande** exécutés de manière répétitive.
:::

### Mission 1.1

Comme mentionné dans la théorie, l'objectif de l'approvisionnement peut être très différent. Décris en deux phrases ce que tu entends par les biens dont l'entreprise doit s'approvisionner, en te référant à **EnterSite AG**.

:::reponse
**Matériel :**
EnterSite achète entre autres des marchandises telles que des ordinateurs portables, des imprimantes 3D, des photocopieuses.

**Informations :**
La technologie de l'impression 3D n'est pas encore achevée. Il est possible que des informations sur le processus de fabrication de l'impression 3D soient achetées.

**Prestations de services :**
EnterSite dispose d'un support pour les biens vendus, qui est proposé en tant que service.

**Capital :**
EnterSite AG s'est éventuellement procuré du capital auprès de la banque. Un crédit qui doit être rémunéré au cours des prochaines années.

**Main-d'œuvre :**
Les jours/mois de forte vente, EnterSite AG embauche de la main-d'œuvre. La main-d'œuvre est « achetée » par un bureau temporaire.

**Licences, brevets :**
EnterSite AG n'identifie pas clairement les tâches qui nécessitent des licences ou des brevets. S'il y en a, ils se trouvent dans l'impression 3D. Il est possible qu'à l'avenir, les implants / articulations etc. soient fabriqués par impression 3D et que ce processus de fabrication nécessite une licence / un brevet.
:::

### Mission 1.2

Y a-t-il des différences entre EnterSite AG et ton entreprise formatrice en ce qui concerne la mission 1.1 ?

:::reponse
**Réponse individuelle** — selon ton entreprise formatrice (pas de solution unique).
:::

---

## Mission 2 — Activités dans le domaine des marchés publics

Après une brève introduction au service, tu reçois une première mission de la part de la responsable du service, **Agnes Zimmermann**. Les collaborateurs de l'administration doivent travailler davantage en home office. Pour ce faire, des ordinateurs portables performants doivent être mis à leur disposition. Fais des propositions sur les sources d'information que tu pourrais utiliser pour trouver des fournisseurs appropriés pour les ordinateurs portables.

:::reponse
**Sources d'information :**
- Internet
- Journaux / revues spécialisées
- Collègues / collaborateurs
- Partenaires commerciaux
:::

### Mission 2.1

Lors de tes recherches, tu découvres différentes offres intéressantes. Comment procéderais-tu ? Essaie de diviser la démarche en mission **stratégique** et **opérationnelle**.

:::reponse
**Stratégiquement**
- Première sélection de fournisseurs potentiels
- Obtention d'une offre (disponibilité, prix, etc.)
- Éventuellement, négociations supplémentaires après réception de l'offre
- Sélection du fournisseur

**Opérationnel**
- Déclencher la commande
- Surveiller le processus de commande
- Contrôle de la livraison reçue
:::

---

## Mission 3 — Évaluer la fabrication interne ou externe

Comme EnterSite AG possède un grand savoir-faire dans le domaine des ordinateurs portables, certains souhaitent assembler eux-mêmes les appareils en intégrant différents composants. Madame Zimmermann te demande de rédiger une prise de position sur les avantages et les inconvénients possibles d'une fabrication interne ou externe.

1. Échangez en groupes de 4 personnes max (5 min).
2. Élabore individuellement d'autres avantages / inconvénients (20 min).
3. Mettez vos résultats en commun (10 min).

👉 Respecte le temps imparti !

:::reponse
**Arguments en faveur d'une production interne :**
- J'ai la qualité entre mes mains
- Je peux réaliser moi-même la composition souhaitée
- Flexibilité en cas de modifications

**Arguments contre la production interne :**
- J'ai besoin de mes propres ressources / collaborateurs·trices
- Temps
- Coûts ?

**Arguments en faveur de la sous-traitance :**
- Je peux déléguer la commande, le travail
- Économiser des ressources

**Arguments contre la sous-traitance :**
- Qualité ?
- Possibilité de tenir compte de mes souhaits ?
- Flexibilité en cas de modifications ?
:::

### Mission 3.1

Les recherches peuvent faciliter la prise de décision en matière de fabrication. Lis les rapports suivants. Justifie la fabrication que tu privilégierais sur la base des rapports.

#### Investissement asiatique dans Beamer&Beamer ?

On spécule que l'entreprise taïwanaise **ElectroParts** pourrait entrer dans le capital de **Beamer&Beamer** afin de gagner des parts de marché supplémentaires sur le marché européen. Le comité d'entreprise et les collaborateurs de Beamer&Beamer craignent que la production ne soit délocalisée en conséquence à Taiwan. De plus, ElectroParts est plutôt représentée dans le segment de qualité moyenne, ce qui fait craindre une baisse de la qualité des produits.

:::reponse
**Fabrication interne**

**Justification :** la reprise pourrait entraîner des retards, des incertitudes et des pertes de qualité.
:::

#### Camions — Les chauffeurs italiens en grève

Une grève nationale des chauffeurs de camion dure maintenant depuis **14 jours**. Les entreprises en Suisse doivent en partie interrompre la production. La fin de la grève n'est pas en vue.

:::reponse
**Fabrication externe**

**Justification :** il faut vérifier quels sites de production disposent de quelles ressources. Le fait qu'il y ait des problèmes d'approvisionnement en matières premières en Suisse montre qu'il faut au moins examiner la possibilité d'une production externe.
:::

#### La durée d'utilisation des produits électriques diminue

L'institut d'études de marché « Markt2021 » a constaté que les consommateurs abandonnent de plus en plus souvent et rapidement les produits qu'ils utilisent pour acheter des produits et des technologies nouvellement sortis. C'est une grande opportunité pour les entreprises, mais la durée de vie des produits diminue et les entreprises doivent pouvoir réagir rapidement sur le marché.

:::reponse
**Fabrication interne**

**Justification :** dans cette situation de marché, il est essentiel de pouvoir réagir rapidement aux nouvelles circonstances. Si de nouvelles technologies ou de nouveaux souhaits de clients apparaissent, je dois pouvoir adapter ma production le plus rapidement possible.
:::

---

## Mission 4 — Make or Buy lors de l'achat d'appareils

Lors de l'achat d'appareils pour le bureau à domicile, on s'est mis d'accord au sein d'EnterSite AG pour comparer les coûts. Madame Zimmermann te demande de faire la compilation et de donner ensuite ton avis à la direction.

**Coûts de production interne :**
- Frais de personnel : **3'000 CHF/mois**
- Infrastructure : **65'000 CHF/an** (frais annexes inclus) → **5'416.65 CHF/mois**
- Coût unitaire des appareils fabriqués en interne : **800 CHF**/pièce

**Meilleure offre externe :** **820 CHF**/pièce

Crée le tableau suivant (Excel) et calcule à partir de quel nombre de pièces une fabrication en interne serait rentable.

| Nombre de pièces | Coût fixe mensuel | Coût unitaire mensuel | Coût total mensuel | Coût à la pce (interne) | Achat externe (coût unitaire) |
| --- | --- | --- | --- | --- | --- |
| 50 | 3'000.00 CHF | 5'416.65 CHF | 8'416.65 CHF | **968.33 CHF** | 820.00 CHF |
| 100 | 3'000.00 CHF | 5'416.65 CHF | 8'416.65 CHF | **884.17 CHF** | 820.00 CHF |
| 150 | 3'000.00 CHF | 5'416.65 CHF | 8'416.65 CHF | **856.11 CHF** | 820.00 CHF |
| 200 | 3'000.00 CHF | 5'416.65 CHF | 8'416.65 CHF | **842.08 CHF** | 820.00 CHF |

> **Note :** le « coût unitaire mensuel » ci-dessus correspond à la part d'infrastructure mensuelle (65'000 / 12). Le coût à la pièce interne = (3'000 + 5'416.65) / n + 800.

:::reponse
Voir le tableau ci-dessus. Même à **200 pces**, le coût interne à la pièce (**842.08 CHF**) reste supérieur à l'achat externe (**820 CHF**).
:::

### Mission 4.1

Fais part de tes appréciations à la direction dans une lettre écrite.

:::reponse
Il faudrait une quantité **supérieure à 200 pces** pour être rentable avec une production à l'interne. En produisant 200 pces, on remarque que ça nous coûte **22.08 CHF** de plus par pièce que si on les achète à l'externe.
:::

---

## Mission 5 — Outsourcing – un facteur de compétitivité ?

Lis attentivement le texte ci-dessous.

> **Qu'est-ce que l'outsourcing ?**
> Le terme « outsourcing » est composé des mots anglais *outside*, *resources* et du suffixe *-ing*. Outsourcing signifie donc : « utilisation de ressources externes ». En gestion d'entreprise, l'externalisation désigne le transfert à des entreprises externes de prestations jusqu'alors fournies par l'entreprise elle-même. L'externalisation est surtout pratiquée dans la production industrielle (secteur automobile) et dans les technologies de l'information. Depuis quelques années, le transfert de fonctions commerciales telles que la comptabilité, les ressources humaines et les achats vers des prestataires de services externes a particulièrement augmenté.

Décris avec tes propres mots ce que l'on entend par « outsourcing ».

:::reponse
Par externalisation, j'entends la **sous-traitance d'activités**. Mon examen « Make or Buy » me permet de décider si je produis moi-même ou si j'achète des produits / services. Si j'achète les produits / services, j'externalise les activités. Cette externalisation des activités correspond à la notion d'**outsourcing**.
:::

### Mission 5.1

Quel pourrait être le sens et le but de l'externalisation par EnterSite AG ? Quels risques pourraient y être liés pour EnterSite AG ?

:::reponse
**Sens et but :**
Le but est d'acheter des produits ou des services qui peuvent être mieux fabriqués et moins chers par d'autres. Cela me permet de me concentrer sur ce que je peux faire mieux que la concurrence.

**Risques :**
Le risque est de ne pas avoir de contrôle sur la production des produits. Que se passe-t-il si je veux changer quelque chose à court terme ? Cette flexibilité est-elle fournie ? Que se passe-t-il si la qualité attendue ne peut pas être atteinte ? Le risque de **dépendance** doit être reconsidéré.
:::

### Mission 5.2

Fais part de tes appréciations à la direction dans une lettre écrite.

:::reponse
Ma direction doit prendre la décision de « faire ou acheter ». Si le volume de vente de l'article de la mission 4 est suffisamment élevé, il est toujours recommandé de fabriquer les produits soi-même. Si nous avons une offre d'un fournisseur qui atteint la qualité souhaitée et que les coûts d'achat ne sont pas plus élevés que la fabrication propre, ce fournisseur doit être pris en considération. Il convient d'observer quelle variante « faire ou acheter » comporte le plus de risques.
:::

### Mission 5.3

En ce qui concerne la production interne, externe ou l'outsourcing, on parle toujours de la notion de « **compétence clé** ». Comment décrirais-tu la compétence clé d'EnterSite AG ?

:::reponse
La compétence clé correspond à l'activité que je peux exercer **mieux que les autres**. Ce sont les **points forts** de mon entreprise.
:::

### Mission 5.4

Qu'en est-il des compétences clés dans ton entreprise formatrice ?

:::reponse
**Réponse individuelle** — selon ton entreprise formatrice (pas de solution unique).
:::

---

## Mission 6 — Discussion de la mise en situation

Discute de la situation de travail et d'apprentissage en plénière avec la classe et l'enseignant·e. Notez les informations complémentaires.

:::reponse
**Réponse ouverte** — notes de discussion STA (pas de solution unique).
:::`;

const DEMO_301_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **M1** : approvisionnement (stratégique) ≠ achat (opérationnel quotidien)
- **M1.1** : matériel · infos · services · capital · main-d'œuvre · licences
- **M2** : sources fournisseurs · stratégique vs opérationnel
- **M3** : pour / contre make vs buy · cas Beamer&Beamer, grève, marché rapide
- **M4** : > 200 pces pour rentabiliser le make · à 200 : +22.08 CHF/pce vs buy
- **M5** : outsourcing · but (focus compétences) · risques (qualité, flexibilité, dépendance)
- **M6** : discussion STA`;

/** Exercices de maths Module 301 */
const DEMO_301_MATHS_FULL = `## Exercices de mathématiques — Module 301

Thème : **Make or Buy** — composant « extrudeur » pour imprimantes 3D EnterSite AG.

EnterSite AG a besoin du composant **extrudeur** pour ses imprimantes 3D. L'entreprise doit décider si elle veut fabriquer elle-même ce composant ou l'acheter (*make or buy*). Besoin : **200 pièces**.

**Achat en Inde :**
- Prix : **1'961.32 INR**/pièce
- Transport et taxes de douane pour 200 pièces : **560 CHF**
- Taux de change : **100 INR = 1,22 CHF**

**Fabrication interne (par pièce) :**
| Poste | Montant |
| --- | --- |
| Frais de matériel | 9 CHF |
| Coûts salariaux | 13.60 CHF |
| Coût des consommables | 7.30 CHF |
| Coût de l'infrastructure | 8 CHF |

L'entreprise doit-elle acheter les extrudeurs en Inde ?

### Exercice 1 — Prix de fabrication interne

Calcule le prix si le composant est produit en interne par EnterSite AG.

:::solution
**Total pour un composant :** 9 + 13.60 + 7.30 + 8 = **37.90 CHF**
:::

### Exercice 2 — Prix d'achat depuis l'Inde

Calcule le prix si le composant est acheté en Inde.

:::solution
**En CHF :** 1'961.32 × 1.22 / 100 = **23.92 CHF**

**Transport et taxes de douane pour 1 pce :** 560 / 200 = **2.80 CHF**

**Total :** 23.92 + 2.80 = **26.72 CHF**
:::

### Exercice 3 — Différence make vs buy

Calcule la différence entre le prix « make » et le prix « buy » en CHF et en pourcent.

:::solution
**Différence :** 37.90 − 26.72 = **11.18 CHF**

**En % :** 11.18 × 100 / 37.90 ≈ **29.50 %** (29.4987 %)
:::

### Exercice 4 — Augmentation de 25 % du prix indien

Les producteurs indiens augmentent de **25 %** le prix unitaire. EnterSite AG achète-t-elle encore en Inde, ou une production en interne est-elle désormais plus avantageuse ?

Calcule le nouveau prix unitaire à l'achat depuis l'Inde.

:::solution
23.92 CHF = 100 %  
X CHF = 125 %

**Nouveau prix unitaire :** 23.92 × 125 / 100 = **29.90 CHF**

**Total à l'achat :** 29.90 + 2.80 = **32.70 CHF**

→ L'achat reste plus avantageux que le make (**37.90 CHF**), même après hausse de 25 %.
:::

> **Contrôle rapide (ordre du corrigé) :** 11,18 + 29,49 | 37,90 | 32,70 | 26,72`;

const DEMO_301_MATHS_SUMMARY = `## Maths — Solutions
1. Make : **37.90 CHF**/pce
2. Buy Inde : **26.72 CHF**/pce (23.92 + 2.80)
3. Écart : **11.18 CHF** ≈ **29.50 %**
4. Après +25 % : buy **32.70 CHF** (toujours < make 37.90)`;

/** Vérification des acquis Module 301 */
const DEMO_301_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Thème : **La logistique d'approvisionnement**. Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

Explique ce que l'on entend par **missions stratégiques** dans l'approvisionnement.

:::reponse
- Négociation concernant les conditions de prix et de livraison
- Collaboration lors du développement du produit
- Garantie du savoir-faire (*know-how*)
- Optimisation (amélioration) des processus d'approvisionnement
- Garantie à long terme des sources d'approvisionnement
:::

### Question 2

**Make or Buy** est très présent dans le domaine de l'approvisionnement. Qu'est-ce que cela signifie ? Explique et complète ton explication par un exemple.

:::reponse
« Make or Buy » signifie « **faire ou acheter** ». Dans la vie quotidienne, on est souvent confronté à cette question : Je le fais ou je l'achète ? Exemple : est-ce que je fais mon pain moi-même ou est-ce que je l'achète ? La décision est influencée par les facteurs **prix**, **qualité** et **temps**.

Les entreprises se demandent : où est-ce que je génère le plus de profit — si je fabrique le produit moi-même ou si je l'achète ? La décision doit être ancrée dans la **stratégie**. Principe :

> Nous ne faisons que ce que nous savons faire **mieux** que les autres.

- **Make :** l'entreprise croit être la mieux placée → **compétences clés**.
- **Buy :** les acheteurs cherchent le producteur qui peut le mieux fabriquer et livrer.
:::

### Question 3

Si la décision est un « buy », les activités sont souvent externalisées. Le terme technique est le suivant :

:::reponse
**Outsourcing** (externalisation)
:::

### Question 4

L'acheteur se procure différents biens. Ces biens sont répartis en **trois catégories principales**. Quelles sont-elles ?

:::reponse
1. **Biens de consommation**
2. **Biens d'investissement**
3. **Prestations de services**
:::

### Question 5

Cite **deux exemples** pour chacune des trois catégories principales mentionnées.

:::reponse
**Biens de consommation :**
matériel de production comme les matières premières, les matières auxiliaires ou les consommables

**Biens d'investissement :**
machines de fabrication, équipement de bureau, halls de production et de stockage

**Prestations de services :**
nettoyage, entretien ménager, formation, support informatique
:::`;

const DEMO_301_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. Stratégique : négociation, développement, know-how, processus, sources long terme
2. Make or Buy = faire ou acheter (prix · qualité · temps) · compétences clés
3. **Outsourcing** (externalisation)
4. Biens de consommation · biens d'investissement · prestations de services
5. Ex. : MP/auxiliaires · machines/halles · nettoyage/formation/IT`;

/** Contenu Module 302 — Approvisionnement / achat de marchandises */
const DEMO_302_THEORIE_FULL = `## 2. L'approvisionnement de marchandises

Dans le module **301** : quantité et moment de la commande. Ici : **où** et **comment** envoyer la commande.

### 2.1 Où acheter ?

Défi différent pour un achat privé et un achat en entreprise. Aujourd'hui : nombreuses possibilités (dont **e-commerce**). Facteurs décisifs : **budget** (1re sélection), **disponibilité**, **relation** avec le fournisseur.

#### Exemple — achat d'un ordinateur portable

Questions principales quasi identiques pour un particulier et une entreprise (EnterSite AG).

| Étape | Apprenti (1 pce) | EnterSite AG (86 pces) |
| --- | --- | --- |
| Situation | Portable pour formation logisticien | Équiper les collaborateurs |
| Identifier le besoin | Besoin d'un portable | Idem |
| Définir le budget | Combien puis-je payer ? | Idem |
| Définir les exigences | Quelle performance ? | Idem |
| Rechercher des fournisseurs | Internet, expériences, environs, amis | Idem |
| Consultation sur place | Vérifier attentes / connaissances spécialisées | — |
| Demander une offre | — | Appel d'offres : qualité + prix |
| Évaluation de l'offre | Rapport qualité-prix, conditions, délai, confiance | Idem |
| Achat | Payer et prendre en charge | Idem |
| Évaluation | Attentes satisfaites ? Expérience → fidélité ou exclusion | Idem |

**Sélection de fournisseurs possibles :** grossistes et fournisseurs de différentes marques · e-commerce.

#### 2.1.1 Déroulement schématique d'une commande

Besoin → (demande d'offre) → offre → commande → confirmation → livraison → facture / paiement  
(selon le cas, l'étape offre peut être sautée si le fournisseur est déjà choisi)

### 2.2 La loi de l'offre et de la demande

#### 2.2.1 La demande

**Demande** = quantité d'un produit commandée par le client à un prix donné. Peut venir d'une commande client, des besoins de fabrication, du réapprovisionnement, etc.

**Loi de la demande :** plus c'est cher, moins il y a de demande.

Origine : Antoine Augustin **Cournot** (1838) — courbe de demande et concept d'**élasticité** (réaction de l'offre/demande aux variations de prix ou de revenus).

**Exemple — cartes graphiques 2020**  
NVIDIA / AMD pour PS5, Xbox, PC. Demande ↑ (ventes massives) → retards (ex. PS5), stocks épuisés. Causes : Covid (usines bloquées/fermées) + demande appareils ↑ ~175 %. Offre insuffisante → prix des cartes restantes ×3.

#### 2.2.2 L'offre

**Offre** = quantité proposée par le vendeur à un prix donné. Groupes de marchandises (ex.) :
- Agriculture : fruits, légumes
- Énergie : fossile, renouvelable, nucléaire
- Textile : habillement
- Papier/carton : emballages
- Cuir, caoutchouc, plastiques
- Produits chimiques / pharma
- Pierres et terres : verre, matériaux de construction
- Métaux : fer, acier…
- Machines, électronique
- Véhicules
- Instruments, horlogerie, bijoux
- Autres : meubles, jouets
- Métaux précieux : art, or, platine

Courbe de l'offre : **Alfred Marshall** (après Cournot).

**Fonctionnement :** EnterSite visite un salon impression 3D → 4 fournisseurs = offre de quantité 4. Plus le prix ↑, plus la quantité offerte ↑ (et plus de vendeurs entrent) → **loi de l'offre**.

#### 2.2.3 L'équilibre du marché

Sur un marché en **équilibre** :

**Quand les prix ↑**
- quantité **offerte** ↑ (producteurs encouragés à produire/vendre)
- quantité **demandée** ↓ (acheteurs moins prêts)

**Quand les prix ↓**
- quantité **offerte** ↓
- quantité **demandée** ↑

### 2.3 Le processus de commande

Les parties consignent juridiquement leurs accords, les présentent et les contrôlent.

#### 2.3.1 L'offre

Déclenché par un **besoin non satisfait**. Le client peut contacter plusieurs fournisseurs et demander une **offre** (appel d'offres) pour trouver le plus approprié (qualité/prix). Pas obligatoire : si le fournisseur est déjà choisi → commande directe.

**Minimum dans la demande d'offre :**
- article souhaité
- quantité
- date de livraison
- adresse de livraison

**Attention :** l'offre a une **date de validité**. Jusqu'à cette date, le fournisseur s'engage. Si le client change les conditions → offre plus valable. Confirmation client → contenu fixé → dans le processus, confirmation entraîne la **commande**.

#### 2.3.2 La commande

Basée sur l'offre (si phase offre) ou définie à ce stade. **Caractère obligatoire** : les deux parties doivent respecter le contenu.

| | **Droits** | **Obligations** |
| --- | --- | --- |
| **Acheteur** | Obtenir la chose et en devenir propriétaire ; en cas de vice : remplacement, réduction ou rédhibition | Payer le prix dans les délais |
| **Vendeur** | Recevoir le paiement | Transmettre la chose et céder la propriété |

Non-respect → solution commune ; sinon **CGV** ou **CO**.

**Minimum dans une commande :**
- article (n° + description)
- quantité
- date de livraison
- adresse de livraison
- prix

#### 2.3.3 La confirmation de commande

Document (souvent écrit, ex. e-mail) confirmant **réception** et **contenu** de la commande. Ex. : confirmation EnterSite AG.

#### 2.3.4 La facture

Clôture du processus : marchandise livrée selon confirmation, propriété transférée ; paiement selon CO à la date convenue. Forme libre (mise en page).

**Minimum sur une facture :**
- nom et adresse du fournisseur
- numéro de **TVA** du fournisseur
- nom et adresse du destinataire
- date de livraison
- désignation exacte de la livraison / prestation
- prix
- montant de la **TVA**
- signature`;

const DEMO_302_THEORIE_SUMMARY = `## À retenir — Module 302

### Où acheter ?
Budget · disponibilité · relation fournisseur · e-commerce  
Même logique particulier / entreprise (besoin → budget → exigences → fournisseurs → offre/évaluation → achat → bilan)

### Offre / demande
**Demande** ↑ quand prix ↓ (Cournot, élasticité)  
**Offre** ↑ quand prix ↑ (Marshall)  
Équilibre : prix ↑ → offre ↑ / demande ↓ · prix ↓ → inverse  
Ex. cartes graphiques 2020

### Processus de commande
Demande d'offre (article, qté, délai, adresse) · validité  
**Commande** obligatoire · droits/obligations acheteur-vendeur (CO/CGV)  
**Confirmation** · **Facture** (TVA, désignation, prix, signature…)`;

const DEMO_302_APERCU_FULL = `## Aperçu du module 302

Ce module précise **où** et **comment** commander : choix du fournisseur, offre/demande, processus de commande (offre → commande → confirmation → facture).

### Vous allez découvrir
1. Critères « où acheter » (exemple portable)
2. Loi de l'offre et de la demande / équilibre
3. Offre, commande, confirmation, facture (contenus minimaux)

### Source
EnterSite — Logistics by ASFL / SVBL · Suite du module 301`;

const DEMO_302_APERCU_SUMMARY = `## Aperçu — Module 302
- Où acheter ?
- Offre / demande / équilibre
- Processus de commande`;

const DEMO_302_OBJECTIFS_FULL = `## Objectifs du module 302

À l'issue de ce module, l'apprenti·e est capable de :

- Expliquer comment choisir **où** acheter (budget, disponibilité, relation, canaux)
- Décrire la **loi de l'offre et de la demande** et l'équilibre de marché
- Dérouler le **processus de commande** : offre, commande, confirmation, facture
- Lister les éléments **minimaux** d'une demande d'offre, d'une commande et d'une facture`;

const DEMO_302_OBJECTIFS_SUMMARY = `## Objectifs
- Où acheter
- Offre / demande
- Processus commande + documents`;


/** Glossaire Module 302 */
const DEMO_302_GLOSSAIRE_FULL = `## Glossaire — Module 302

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Fournisseur | [EnterSite](#entersite-placeholder) | Entreprise ou personne qui **livre** des marchandises ou des prestations à une autre entreprise (l'acheteur). Dans l'approvisionnement, on compare plusieurs fournisseurs (prix, qualité, délais, etc.). |
| Créancier | [EnterSite](#entersite-placeholder) | Partie envers laquelle une **dette** est due : elle a une **créance** (droit d'exiger un paiement ou une prestation). Ex. : un fournisseur qui a livré et attend le règlement de la facture. |
| Débiteur | [EnterSite](#entersite-placeholder) | Partie qui **doit** quelque chose (argent ou prestation) à un créancier. Ex. : l'entreprise acheteuse tant que la facture n'est pas payée. |
| TVA | [EnterSite](#entersite-placeholder) | **Taxe sur la valeur ajoutée** (impôt indirect suisse, *MwSt*). Elle s'ajoute généralement au prix net : prix **brut** = prix net + TVA. Le taux applicable figure sur l'offre / la facture. |`;

const DEMO_302_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **Fournisseur** : livre marchandises / prestations à l'acheteur
- **Créancier** : celui à qui l'on doit (a une créance)
- **Débiteur** : celui qui doit (a une dette)
- **TVA** : taxe sur la valeur ajoutée (net → brut)`;

/** Mises en situation Module 302 */
const DEMO_302_SITUATION_FULL = `## Mises en situation — Module 302

Contexte : tu travailles chez **EnterSite AG** (département *Procurement Management*). Les missions portent sur **l'achat de marchandises** (toners compatibles OKI). Rédige d'abord ta propre réponse, puis utilise le bouton pour afficher ou masquer les solutions / exemples proposés.

### Vue d'ensemble des missions
1. Créer un processus pour l'acquisition
2. Demander des offres
3. Comparaison quantitative des offres (résolution sous Mathématiques)
4. Comparaison qualitative des offres
5. Présenter et justifier le choix du fournisseur lors d'une réunion du département
6. Discussion de la situation de travail et d'apprentissage

---

## Mission 1 — Créer un processus pour l'acquisition

EnterSite AG a récemment élargi son assortiment avec l'imprimante de la marque **OKI**. Grâce à ses caractéristiques, l'**OKI MC883dn** est devenue un succès de vente. Mais ces derniers temps, de nombreux clients s'annoncent irrités par le prix élevé des toners d'impression **originaux OKI** et souhaitent des toners **compatibles** pour ce modèle. Les clients argumentent d'une part sur le **prix** et d'autre part sur le fait que les toners compatibles permettent de contribuer à la **protection de l'environnement**.

Certains clients menacent déjà de prendre en considération d'autres entreprises. C'est pourquoi le temps presse et il est urgent pour EnterSite AG d'agir. Selon **Madame Zimmermann**, il n'est toutefois pas possible de produire les toners en interne dans l'urgence.

En tant que collaborateur/trice du service Procurement Management, tu réfléchis à la possibilité et à la manière de réagir à cette situation. Établis un plan de déroulement pour une éventuelle procédure d'approvisionnement.

:::reponse
**Processus d'approvisionnement :**
- Besoin connu
- Propres produits déjà disponibles ? Si non, est-ce que les produits sont disponibles ?
- Production interne possible / souhaitée ? Si non, il faut le faire
- Chercher des fournisseurs potentiels
- Demander des offres, clarifier les prix et la qualité
- Déterminer le fournisseur
- Envoyer la commande
- Suivre la commande
- Réception et contrôle des marchandises
- Mise en stock
:::

---

## Mission 2 — Demander des offres

L'étape suivante consiste à rechercher des fournisseurs et à demander des offres éventuelles. Pour ce faire, ouvre le fichier **Demande** (voir ci-dessous) et formule une demande au fournisseur **13225**. Le produit, numéro d'article **45862840**.

Si l'enseignant·e est satisfait·e de ta demande, tu peux la classer dans le champ des solutions.

**Fichier :** \`Demande offre.docx\`

**Dépôt de fichiers / solution :** \`Demande d'offre_solution.docx\`

:::reponse
**Réponse individuelle** — demande d'offre au fournisseur 13225 pour l'article 45862840 (fichier \`Demande offre.docx\` → classer \`Demande d'offre_solution.docx\` après validation).
:::

---

## Mission 3 — Comparaison quantitative des offres

Suite aux demandes que tu as écrites, différentes offres sont arrivées. Il s'agit maintenant de comparer les offres entre elles afin de faire un choix de fournisseur approprié.

Pour cela, va sur la page **Mathématiques** et détermine, à l'aide du schéma de calcul préparé, les prix des différentes offres pour une commande de **200 pièces**. Tu peux ensuite copier le schéma de calcul dans le champ de solution.

> **Vers le site EnterSite** : suis la visite virtuelle de la salle **14 V2**. Madame Zimmermann a épinglé les offres qui sont arrivées sur le tableau d'affichage. Cherche pour cela l'image et modifie les offres. Lien : [Vers EnterSite](#entersite-placeholder) (URL à compléter lorsque disponible).

**PDF (offres) :**
- \`Offre-PeachPatronen.pdf\`
- \`Offre-Inkolor.pdf\`
- \`Offre-TonerPartner.pdf\`

**Dépôt de fichiers :** \`Comparaison des offres_solution.xlsx\`

:::reponse
**Schéma de calcul** — à compléter / copier depuis Mathématiques (commande de **200 pièces**) → \`Comparaison des offres_solution.xlsx\`.
:::

---

## Mission 4 — Comparaison qualitative des offres

Le service des achats reçoit une communication de la direction. Mme Zimmermann demande donc une réunion du département.

**Communication de la direction :**

Le service des ventes signale une augmentation de la demande de cartouches d'impression compatibles. La commande doit donc être effectuée dans les plus brefs délais. Veuillez fournir une réponse concernant le choix d'un fournisseur d'ici demain. Lors du choix du fournisseur, ne compare **pas seulement les prix**.

Étant donné que l'offre la moins chère n'est pas toujours la meilleure, des critères de **qualité** devraient également être pris en compte. Madame Zimmermann vous fournit les critères suivants pour l'analyse : **prix d'achat**, **délai de livraison**, **conscience environnementale**, **respect des délais**, **comportement en cas de réclamation**, **qualité**.

Consulte une nouvelle fois, premièrement, les comparaisons d'offres et, deuxièmement, le fichier joint contenant des informations supplémentaires sur les fournisseurs et remplis ainsi le tableau de critères suivant.

**Fichier :** \`Informations sur les fournisseurs.pdf\`

:::reponse
| Critères | TonerPartner | PeachPatronen | Inkolor |
| --- | --- | --- | --- |
| Prix | Rang 2 | Rang 3 | Rang 1 |
| Délai de livraison | Rang 3 | Rang 2 | Rang 1 |
| Aspects environnementaux | Rang 1 | Rang 3 | Rang 2 |
| Respect des délais | Rang 3 | Rang 2 | Rang 1 |
| Réclamations | Rang 1 | Rang 1 | Rang 2 |
| Qualité | Rang 2 | Rang 1 | Rang 2 |
:::

### Mission 4.1 — Analyse de l'utilité

Tu inscris maintenant les critères dans l'analyse de la valeur qui suit.

Pondère les six critères de sélection des fournisseurs. Répartis un total de **100 points** entre les différents critères, le critère le plus important pour toi recevant le plus de points.

Passe maintenant en revue chaque critère et attribue une note à chaque fournisseur. Attribue des points d'évaluation de **1 à 5** (5 = remplit très bien le critère).

Ensuite, multiplie la pondération des critères par les points d'évaluation et additionne les valeurs partielles. Le fournisseur avec le **total le plus élevé** est ton favori.

👉 Conseil : tu peux aussi créer l'analyse de la valeur utile dans Excel et la copier dans le champ de solution.

**Points d'évaluation :** 1 = très mauvais · 5 = très bon

:::reponse
| Critères | Pondération | TonerPartner Éval. | Valeur part. | PeachPatronen Éval. | Valeur part. | Inkolor Éval. | Valeur part. |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Prix | 20 | 3 | 60 | 1 | 20 | 5 | 100 |
| Délai de livraison | 10 | 3 | 30 | 1 | 10 | 5 | 50 |
| Aspects environnementaux | 30 | 5 | 150 | 1 | 30 | 3 | 90 |
| Respect des délais | 15 | 1 | 15 | 3 | 45 | 5 | 75 |
| Réclamations | 5 | 5 | 25 | 5 | 25 | 3 | 15 |
| Qualité | 20 | 3 | 60 | 5 | 100 | 3 | 60 |
| **Valeur totale** | **100** | | **340** | | **230** | | **390** |

**Favori : Inkolor (390)**
:::

---

## Mission 5 — Présenter et justifier le choix du fournisseur

Lors de la prochaine réunion du département, tu dois maintenant présenter et justifier ton choix de fournisseur. Note tes arguments.

:::reponse
**Ma sélection de fournisseurs : Inkolor**

**Arguments en faveur de mon fournisseur :**
En tenant compte des aspects écologiques et économiques, Inkolor peut offrir le meilleur paquet global.

**Arguments contre les autres fournisseurs :**
Le manque de qualité ou des facteurs de pollution de l'environnement parlent contre les autres fournisseurs.
:::

### Mission 5.1 — Réunion du département

Il est maintenant temps de passer à la réunion du département. Lors de la réunion dirigée par la direction du département, assieds-toi avec les autres et présente ton résultat en exposant ton argumentation.

Les autres collègues suivent attentivement la réunion du service et notent les différents arguments en faveur des choix des fournisseurs.

:::reponse
**Argument 1 :** Réponse individuelle

**Argument 2 :** Réponse individuelle

**Argument 3 :** Réponse individuelle

**Argument 4 :** Réponse individuelle
:::

---

## Mission 6 — Discussion STA

Discute de la situation de travail et d'apprentissage en plénière avec la classe et l'enseignant·e. Notez les informations complémentaires.

:::reponse
**Réponse ouverte** — notes de discussion STA (pas de solution unique).
:::`;

const DEMO_302_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **M1** : processus d'approvisionnement (toners OKI compatibles)
- **M2** : demande d'offre (fournisseur 13225 · art. 45862840)
- **M3** : comparaison quantitative · Maths · EnterSite salle **14 V2**
- **M4** : critères + analyse utilité → **Inkolor 390**
- **M5** : justifier Inkolor · **M5.1** arguments individuels
- **M6** : discussion STA`;

/** Exercices de maths Module 302 */
const DEMO_302_MATHS_FULL = `## Exercices de mathématiques — Module 302

Calcule les tâches suivantes sur le sujet : **l'achat de marchandises**. Vérifie ensuite avec le bouton solution.

### Exercice 1 — Schéma de comparaison des offres

À l'aide du schéma de calcul préparé, détermine les prix des différentes offres pour une commande de **200 pièces**. Tu peux ensuite copier le schéma de calcul dans le champ de solution ci-dessous ainsi que dans le champ de solution de la situation de travail et d'apprentissage.

**Fichiers :**
- \`Comparaison des offres.xlsx\`
- \`Comparaison des offres_Réponse.xlsx\`
- \`Comparaison des offres_solution.xlsx\`

:::solution
Schéma de calcul (commande 200 pces) — valeurs repères / solutions :
**27,35 | 180.504 | 3,43 | 27,20 | 26,40 | 27 | 418.56**

(Copier le schéma depuis \`Comparaison des offres_solution.xlsx\`.)
:::

### Exercice 2 — Écart en % entre fournisseurs

De combien de % le prix du fournisseur le moins cher est-il inférieur à celui du fournisseur dont le prix unitaire est le plus élevé ?

:::solution
26.41 × 100 / 27.35 = **96.56 %**

Inférieur de : 100 − 96.56 = **3.44 %** (repère solutions : **3,43**)
:::

### Exercice 3 — Fournisseurs sporadiques

Le répertoire des fournisseurs comprend **360** entreprises chez EnterSite AG. **70 %** des entreprises livrent régulièrement des marchandises, **30 %** seulement de manière sporadique. Parmi les entreprises qui ne livrent que sporadiquement, **25 %** ne livrent que trois fois par an environ.

Combien de fournisseurs ne livrent que trois fois ?

:::solution
Fournisseurs qui livrent sporadiquement : 360 × 30 / 100 = **108** fournisseurs

Fournisseurs qui livrent 3× par an : 108 × 25 / 100 = **27** fournisseurs
:::

### Exercice 4 — TVA et rabais

Un fournisseur d'EnterSite AG indique sur son offre une TVA de **218 francs**.

a. Quelle est la valeur nette de la marchandise avec une TVA de **8 %** ?

b. Quel est le prix brut si tu bénéficies en plus d'un rabais de **10 %** sur celui-ci ?

:::solution
**a.** Valeur nette de la marchandise : 218 / 8 × 100 = **2'725 CHF**

**b.** Valeur brute : 2725 / 100 × 110 = **2'997.5 CHF**
:::

**Solutions (ligne de contrôle) :** 27,35 | 180.504 | 3,43 | 27,20 | 26,40 | 27 | 418.56`;

const DEMO_302_MATHS_SUMMARY = `## Maths — Solutions
1. Schéma offres 200 pces (xlsx) · 27,35 | 180.504 | …
2. **3.44 %** moins cher (repère 3,43)
3. **27** fournisseurs
4. Net **2'725 CHF** · brut **2'997.5 CHF**`;

/** Vérification des acquis Module 302 */
const DEMO_302_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

**Module 302_L'achat de marchandises**

Thème : **l'achat de marchandises**. Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

En matière d'achat de biens, on parle souvent de la « **loi de l'offre et de la demande** ».

Explique en quoi cette loi influence la fixation des prix.

:::reponse
Quand la demande est supérieure à l'offre, cela fait monter les prix. Mais cela ne dure qu'un temps. Les fabricants, pour répondre aux demandes des vendeurs, vont augmenter leur production, faisant alors baisser le prix qui va progressivement revenir vers son niveau d'équilibre.

Quand l'offre est supérieure à la demande, cela donne une baisse des prix.
:::

### Question 2

Comment se déroule généralement le **processus administratif de commande** ? Décris les différents points dans l'ordre.

:::reponse
1. Demande
2. Offre
3. Commande
4. Confirmation de commande
5. Facture
:::

### Question 3

Dans quel but des offres sont-elles demandées à différents fournisseurs ?

:::reponse
En recevant des offres de différents fournisseurs, je peux les comparer et choisir celle qui me convient le mieux.
:::

### Question 4

Quelles sont les informations **minimales** que doit contenir une commande ?

:::reponse
- L'article souhaité (n° d'article et description)
- La quantité
- La date de livraison
- L'adresse de livraison
- Le prix
:::

### Question 5

Quels sont les **droits de l'acheteur** d'un bien ?

:::reponse
- Obtenir la chose vendue et en devenir propriétaire
- En cas de défaut : livraison de remplacement, réduction ou rédhibition
:::`;

const DEMO_302_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. Offre/demande → hausses ou baisses de prix vers l'équilibre
2. Demande → Offre → Commande → Confirmation → Facture
3. Comparer les offres et choisir la meilleure
4. Article · quantité · date · adresse · prix
5. Propriété de la chose · défaut → remplacement / réduction / rédhibition`;

/** Contenu Module 303 — Réception des marchandises */
const DEMO_303_THEORIE_FULL = `## 3. Processus de réception des marchandises

### 3.1 Réception des marchandises

Activité centrale de la logistique. Après le processus d'approvisionnement, vient la **réception des marchandises**.

#### 3.1.1 La base juridique

Trois situations fréquentes, réglementées dans le **Code des obligations (CO)** :

| Situation | Domaine logistique | Base CO |
| --- | --- | --- |
| **Acceptation en tant qu'acheteur** d'un bien mobilier | Approvisionnement | Titre 6e Achat et échange · art. **184–186** (droits/obligations) · art. **187–215** (vente mobilière). Transport international : Convention de Vienne |
| **Acceptation en tant que transporteur** | Transport | Titre 16e Contrat de transport · art. **440–457** |
| **Acceptation pour conservation** | Stockage | Titre 19e Contrat de dépôt · art. **472–491** |

### 3.2 Acceptation en tant qu'acheteur (vente mobilière)

**CO art. 184 al. 1 et 2 :**
- Par le contrat de vente, le vendeur s'engage à **remettre** l'objet ; l'acheteur à **payer** le prix.
- Sauf accord contraire : prestations en même temps (**« donnant donnant »**).
- Le prix est suffisamment déterminé s'il peut l'être selon les circonstances.

**Rappel (module 302) — droits / obligations :**

| | Droits | Obligations |
| --- | --- | --- |
| **Acheteur** | Obtenir la chose et en devenir propriétaire ; en cas de vice : remplacement, réduction ou rédhibition | Payer le prix dans les délais |
| **Vendeur** | Recevoir le paiement | Transmettre la chose et céder la propriété |

#### 3.2.1 Acceptation lors de l'achat au comptant

« Donnant donnant » = chaque partie remplit successivement sa part :
1. Je prends l'objet dans le rayon
2. À la caisse, je **paie** avant de quitter le magasin

#### 3.2.2 Achat sur facture

Règle de base : payer **immédiatement** après réception. Certains fournisseurs accordent 10 jours ou **30 jours**.

**Déroulement :**
1. Contrat de vente négocié et signé
2. Vendeur livre les marchandises
3. Acheteur confirme la réception → marchandise **acceptée** ; sous sa **garde**, pas encore pleinement en sa **possession** (au sens du paiement)
4. Vendeur établit la facture
5. Acheteur paie dans le délai → à partir de là, les marchandises **appartiennent** à l'acheteur

Flux matériel + flux d'informations en parallèle (commande → livraison → confirmation → facture → paiement).

**Remarque :** établir une **liste de contrôle** pour la réception ; tout écart → signaler au supérieur.

### 3.3 Réception planifiée et non planifiée

#### 3.3.1 Réception planifiée

Date, type et quantité **connus** à l'avance. Mesures possibles :
- réserver un **quai** de chargement
- réserver un espace en zone de réception
- préparer les **documents**
- préparer les moyens auxiliaires (palettes vides, chariots, moyens de contrôle…)
- organiser le **personnel**
- déterminer l'**emplacement** de stockage

→ réception rapide, efforts et coûts réduits.

**Attention :** arrivée hors créneau → accès peut être **refusé**. Le transporteur doit respecter le créneau ; tout écart (embouteillage, accident, douane…) doit être **signalé tôt** pour reprogrammer.

**Exemple ERP :** commandes saisies dans l'ERP (→ module 804) pour contrôler date, articles, quantités. Données consultables immédiatement par d'autres collaborateurs.

**Infos typiques pour le contrôle d'entrée :**
- fournisseur
- date de réservation / type de documents de livraison
- n° d'article et désignation
- quantité commandée
- quantité effectivement livrée (saisie au contrôle)
- lieu de stockage
- disponibilité (libre, stock bloqué, contrôle qualité…)

#### 3.3.2 Réception non planifiée

Livraison dont **ni la date ni la quantité** n'étaient connues (pas de créneau convenu, ou notification non parvenue à la réception).

**Exemple Poste :** clients au guichet sans annonce préalable → réception non planifiée du point de vue de la Poste.

En entrepôt : à **éviter**. Une commande devrait entraîner une info disponible. Si non annoncé → souvent un **manque de communication** entre achats et logistique.`;

const DEMO_303_THEORIE_SUMMARY = `## À retenir — Module 303

### Bases juridiques (CO)
Acheteur (vente mobilière 184–215) · Transporteur (440–457) · Dépôt (472–491)  
Vente : remise ↔ paiement · « donnant donnant » sauf accord contraire

### Comptant vs facture
Comptant : paye avant de partir  
Facture : livraison → acceptation (garde) → facture → paiement → propriété  
Liste de contrôle + signaler les écarts

### Planifiée vs non planifiée
**Planifiée** : quai, espace, docs, moyens, personnel, emplacement · respecter créneau · ERP  
**Non planifiée** : date/qté inconnues · à éviter en entrepôt (souvent mauvais flux info achats ↔ logistique)`;

const DEMO_303_APERCU_FULL = `## Aperçu du module 303

Ce module traite de la **réception des marchandises** : bases juridiques (CO), acceptation acheteur (comptant / facture), réception planifiée vs non planifiée.

### Vous allez découvrir
1. Cadre CO (acheteur, transporteur, dépôt)
2. Donnant donnant, achat comptant et sur facture
3. Préparation d'une réception planifiée (quai, ERP…)
4. Risques des réceptions non planifiées

### Source
EnterSite — Logistics by ASFL / SVBL · Suite des modules 301–302`;

const DEMO_303_APERCU_SUMMARY = `## Aperçu — Module 303
- CO : acheteur / transporteur / dépôt
- Comptant vs facture
- Réception planifiée / non planifiée`;

const DEMO_303_OBJECTIFS_FULL = `## Objectifs du module 303

À l'issue de ce module, l'apprenti·e est capable de :

- Relier la réception de marchandises aux bases du **CO** (acheteur, transporteur, dépôt)
- Expliquer l'acceptation en vente mobilière (**donnant donnant**, comptant, facture)
- Distinguer réception **planifiée** et **non planifiée** et citer les préparatifs utiles
- Décrire le rôle d'un **ERP** et les infos de contrôle à l'entrée`;

const DEMO_303_OBJECTIFS_SUMMARY = `## Objectifs
- Bases CO réception
- Comptant / facture
- Planifiée vs non planifiée + ERP`;

/** Glossaire Module 303 */
const DEMO_303_GLOSSAIRE_FULL = `## Glossaire — Module 303

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Code des obligations | | Loi suisse (CO) qui régit notamment la **vente**, le **transport** et le **dépôt**. À la réception de marchandises, elle fixe les droits et obligations selon que l'on agit comme acheteur (art. 184–215), transporteur (art. 440–457) ou dépositaire (art. 472–491). |
| Réception planifiée | | Réception dont la **date**, l'**heure** et la **quantité** à livrer sont connues à l'avance. Permet de réserver quai, espace, documents, moyens auxiliaires, personnel et emplacement → réception plus rapide et moins coûteuse. |
| Réception non planifiée | | Réception pour laquelle **ni la date ni la quantité** ne sont connues (pas de créneau convenu, ou information non parvenue). À éviter en entrepôt : souvent liée à un défaut de communication entre achats et logistique. |
| Donnant donnant | | Principe (CO art. 184) : sauf accord contraire, vendeur et acheteur exécutent leurs prestations **en même temps** (remise de la chose ↔ paiement du prix). Exemple courant : achat au comptant en magasin. |`;

const DEMO_303_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **Code des obligations** : vente, transport, dépôt (bases juridiques de la réception)
- **Réception planifiée** : date / heure / quantité connues → préparation possible
- **Réception non planifiée** : date et quantité inconnues → à éviter en entrepôt
- **Donnant donnant** : prestations simultanées (remise ↔ paiement)`;

/** Mises en situation Module 303 */
const DEMO_303_SITUATION_FULL = `## Mises en situation — Module 303

Contexte : tu travailles chez **EnterSite AG**. Les missions portent sur la **réception des marchandises** (bases juridiques CO, influence sur les départements, procédures). Rédige d'abord ta propre réponse, puis utilise le bouton pour afficher ou masquer les solutions / exemples proposés.

### Vue d'ensemble des missions
1. Clarifier la base juridique
1.1 Autres situations juridiques (partenaires)
2. Évaluer la base juridique
2.1 EnterSite — puzzle réception planifiée / non planifiée (salle 14 V3)
3. Influence sur les départements
4. Instructions de procédure (entreprise de formation)
5. Discussion de la mise en situation

---

## Mission 1 — Clarifier la base juridique

Les toners compatibles de la mise en situation du module **302** ont été commandés par EnterSite AG. La base juridique prévoit différents types d'hypothèses. Quelle est la situation juridique qui s'applique à la commande et à la réception des toners d'imprimante compatibles pour EnterSite AG ? Justifie ta réponse.

Il s'agit d'une acceptation en tant que….

:::reponse
**Acceptation en tant qu'acheteur d'un bien mobilier.**

**Justification :** je ne suis pas un transporteur et je ne garde pas de biens. Ma mission est d'**acheter** des biens.
:::

---

## Mission 1.1 — Autres situations juridiques

Existe-t-il d'autres situations juridiques pour les partenaires impliqués dans la livraison ?

Acceptation en tant que….

:::reponse
**En tant que transporteur de marchandises.** Les marchandises sont livrées par ce dernier.
:::

---

## Mission 2 — Évaluer la base juridique

Les toners commandés devraient être livrés demain par camion sur des palettes. L'offre que tu as acceptée en commandant les toners contient le texte suivant :

> Le prix s'entend frais d'emballage inclus. Nous accordons une remise de **15 %** pour tout achat de **50 pièces** ou plus. Payable dans les **10 jours** sous déduction d'un escompte de **2 %**. Pour l'expédition, nous facturons un forfait de **Fr. 10.-** pour une commande de 50 pièces ou plus. La livraison a lieu au plus tard **5 jours** après réception de la commande.

Aujourd'hui, tu reçois un e-mail du fournisseur avec le texte suivant :

> Mesdames et Messieurs  
> Comme convenu, vous recevrez demain les produits que vous avez commandés chez nous. Malheureusement, nous devons vous informer qu'en raison de problèmes de liquidités, nous ne pouvons accorder la remise qu'à partir de **250 pièces** (200 pièces commandées) et que nous attendons votre paiement (facture jointe), déduction faite de l'escompte de 2 %, **directement après réception** de la marchandise.  
> Salutations amicales — Ventes internes

Comment juges-tu la situation décrite sur la base de la législation ? Pour ce faire, recherche les articles de loi correspondants dans le **CO** et explique tes conclusions.

:::reponse
Cette adaptation **n'est pas correcte**. L'offre envoyée a une validité selon la date indiquée sur l'offre. Si j'ai **accepté** l'offre dans ce délai, la vente doit être exécutée **conformément** à celle-ci. Selon le CO, j'ai le droit de recevoir le **rabais convenu**.
:::

---

## Mission 2.1 — EnterSite (réception planifiée / non planifiée)

> **Astuce EnterSite** : suis la visite virtuelle de la salle **14 V3**. Traite la réception planifiée et non planifiée des marchandises dans un **puzzle**. Cherche l'image sur la droite. Lien : [Vers EnterSite](#entersite-placeholder) (URL à compléter lorsque disponible).

:::reponse
**Réponse individuelle** — selon le puzzle EnterSite (salle 14 V3).
:::

---

## Mission 3 — Influence sur les départements

La réception des marchandises entrantes se déroule à la réception des marchandises. Cependant, la réception des biens influence également d'autres départements. Explique quelles sont les influences de la réception des marchandises par rapport à EnterSite AG et ses différents départements.

:::reponse
La réception des marchandises a pour conséquence que le stock reçu doit être **stocké**. L'entrée des marchandises doit donc garantir une grande collaboration avec le **stockage**. Le stock enregistré n'est pas seulement reconnaissable physiquement : cette mutation est également visible dans le **système**. Le stock dans le système permet au service des **ventes** de voir le stock actuel et de pouvoir proposer la bonne offre lors du conseil au client. Les **finances** voient le nouveau stock comptable et peuvent ainsi valider le paiement de la facture reçue.

Il est donc important que la réception des marchandises soit effectuée **sans erreur**.
:::

---

## Mission 4 — Créer des instructions de procédure

Pense maintenant à ta propre entreprise de formation. Établis une **liste de contrôle** et/ou une procédure pour tes activités à la réception des marchandises.

**Remarque pour l'élaboration de la liste de contrôle :**
- Il ne suffit pas d'écrire : « Vérifier l'adresse ».
- Indique également **comment**, **où**, **avec quoi**, etc. tu fais ceci ou cela.
- Essaie également de visualiser les différents points de la liste avec des images, des photos, des croquis, etc.

Tu crées la check-list ou les instructions de procédure dans un **document séparé** et tu le places dans le champ de solution.

:::reponse
**Réponse individuelle** — dépôt de fichier (liste de contrôle / procédure selon ton entreprise de formation).
:::

---

## Mission 5 — Discussion de la mise en situation

Discute de la mise en situation en plénière avec la classe et l'enseignant·e. Note les informations complémentaires.

:::reponse
**Réponse ouverte** — notes de discussion (pas de solution unique).
:::`;

const DEMO_303_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **M1** : EnterSite = acheteur d'un bien mobilier (pas transporteur / dépositaire)
- **M1.1** : le partenaire livreur agit comme **transporteur**
- **M2** : changement de remise après acceptation de l'offre → **pas valable** (CO)
- **M2.1** : EnterSite salle **14 V3** (puzzle planifiée / non planifiée)
- **M3** : impacts stock / ventes / finances → réception sans erreur
- **M4** : checklist individuelle (fichier)
- **M5** : discussion plénière`;

/** Exercices de maths Module 303 */
const DEMO_303_MATHS_FULL = `## Exercices de mathématiques — Module 303

Calcule chaque résultat, puis vérifie avec le bouton solution.

### Exercice 1 — Durée moyenne d'une réception

En moyenne, une personne peut effectuer **25,5** réceptions de marchandises par jour.

Combien de temps dure en moyenne une réception de marchandises chez EnterSite AG pour un temps de travail hebdomadaire de **42,5 heures** ?

:::solution
**20 min**

Calcul :
- Nombre de réceptions par semaine : 5 × 25,5 = **127,5** réceptions
- Durée d'une réception : 42,5 / 127,5 = **0,33 h** → 0,33 × 60 = **20 min**
:::

### Exercice 2 — Coûts salariaux d'une réception

Quels sont donc les coûts salariaux d'une réception moyenne de marchandises pour **4,333** semaines par mois et un salaire mensuel de **4'450 francs** par mois ?

:::solution
**8,05 CHF**

Calcul :
- Salaire à la semaine : 4'450 / 4,333 ≈ **1'027,0020 CHF**
- Coûts salariaux pour une réception : 1'027,0020 / 127,5 ≈ **8,054 CHF** → **8,05 CHF**
:::

### Exercice 3 — Erreurs de processus

L'année dernière, un total de **7'800** réceptions de marchandises a été enregistré par EnterSite AG. Des erreurs ont été constatées dans **3 %** des réceptions de marchandises. Il s'est avéré par la suite qu'il s'agissait à nouveau d'erreurs de processus dans **3 %** des cas.

Combien de réceptions de marchandises sont donc des erreurs de processus ?

:::solution
**7,02**

Calcul :
- Erreurs constatées : 7'800 × 3 / 100 = **234** erreurs
- Erreurs de processus : 234 × 3 / 100 = **7,02** réceptions
:::

### Exercice 4 — Pourcentage d'erreurs de processus

Quel est le pourcentage d'erreurs de processus sur la totalité des réceptions de marchandises **acceptées** ?

:::solution
**0,09 %**

Calcul :
- Nombre de réceptions acceptées : 7'800 − 234 = **7'566** réceptions
- % d'erreurs de processus : 7,02 × 100 / 7'566 ≈ **0,0928 %** → **0,09 %**
:::

> **Contrôle rapide (ordre du corrigé)** : 7,02 · 0,09 · 8,05 · 20`;

const DEMO_303_MATHS_SUMMARY = `## Maths — Solutions
1. **20 min** (42,5 h / 127,5 réceptions)
2. **8,05 CHF** (salaire hebdo / 127,5)
3. **7,02** (7'800 × 3 % × 3 %)
4. **0,09 %** (7,02 / 7'566 × 100)`;

/** Vérification des acquis Module 303 */
const DEMO_303_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Thème : **La réception des marchandises**. Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

Quelles sont les trois situations de départ régies par la loi dans le domaine de la logistique lors de la réception de marchandises ?

:::reponse
1. Réception en tant qu'**acheteur**
2. Réception en tant que **transporteur**
3. Réception pour le **dépôt**
:::

### Question 2

Expliquez la notion « **donnant donnant** » lors de l'achat de marchandises.

:::reponse
« **Donnant donnant** » signifie que chaque partie remplit successivement sa part du marché.

Dans le magasin, je prends l'objet souhaité dans le rayon. À la caisse, avant de quitter le magasin, je **paie** l'équivalent en argent.
:::

### Question 3

Inscris dans les encadrés le déroulement d'un **achat sur facture**.

:::reponse
1. Un contrat de vente est négocié et signé.
2. Le vendeur livre la marchandise dont il a été convenu.
3. L'acheteur accuse réception de la marchandise. La marchandise est considérée comme réceptionnée et est désormais sous la **garde** de l'acheteur, mais pas encore en sa **possession** (au sens du paiement).
4. Le vendeur établit une facture.
5. L'acheteur vire le montant dans le délai de paiement prévu. Désormais, les marchandises **appartiennent** à l'acheteur.
:::

### Question 4

Quand parle-t-on d'une réception de marchandises **non planifiée** ?

:::reponse
Nous parlons d'une réception de marchandises non planifiée lorsque **ni la date ni la quantité** qui arrivera ne sont connues.
:::

### Question 5

Décris les caractéristiques d'une réception **planifiée** et ses avantages pour l'entreprise.

:::reponse
Dans le cas d'une réception planifiée, contrairement à une réception non planifiée, la **date**, l'**heure** et la **quantité** à livrer sont connues.

La possibilité de planifier permet de :
- réserver les **quais** de chargement
- réserver l'**espace** nécessaire
- mettre à disposition les **documents** nécessaires
- mettre à disposition les **moyens auxiliaires**
- mettre à disposition du **personnel**
:::`;

const DEMO_303_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. Acheteur · transporteur · dépôt
2. Donnant donnant = prestations successives / simultanées (ex. comptant en magasin)
3. Contrat → livraison → réception (garde) → facture → paiement → propriété
4. Non planifiée : date et quantité inconnues
5. Planifiée : date/heure/qté connues → quai, espace, docs, moyens, personnel`;

/** Contenu Module 304 — Identification de la livraison */
const DEMO_304_THEORIE_FULL = `## 4. Identification de la livraison

Lorsque le transporteur entre sur le site, la marchandise est **physiquement arrivée**. Qu'elle soit planifiée ou non, elle doit être **identifiée**.

> **Identification** = identifier de manière distincte ; comparer ou associer quelque chose / quelqu'un.

### 4.1 Identification globale

Première question : **la marchandise nous est-elle destinée ?**

On demande au transporteur les **documents d'accompagnement** pour vérifier l'**adresse de livraison**. Décharger puis découvrir que ce n'est pas pour EnterSite AG serait une perte de temps et d'argent.

Même logique dans le privé : vérifier l'adresse avant d'ouvrir un envoi postal.

#### 4.1.1 Ouverture des véhicules de transport

**Camion (route)**  
Après l'identification globale, le transporteur peut ouvrir. Avant déchargement : toujours respecter les **consignes de sécurité** de l'entreprise.

**Transports ferroviaires, semi-remorques, conteneurs**  
En transport **non accompagné** (pas de chauffeur sur place) : inspecter l'extérieur (état). Si documents présents et mesures de sécurité prises → ouverture possible.

#### 4.1.2 Plombs douaniers

Livraison de l'étranger → prescriptions douanières à connaître.

Les **scellés / plombs douaniers** sur camions, semi-remorques ou conteneurs **ne doivent en aucun cas** être coupés ou desserrés sans autorisation. Ouverture selon règles entreprise ; parfois spécialiste douanes ou personne habilitée. Procédure à clarifier **au préalable**.

Coupure / détachement seulement si documents nécessaires **ou** accord d'une personne compétente des douanes + instructions de l'entreprise.

#### 4.1.3 Première vision

Après ouverture des portes : bref coup d'œil sur l'**état** du chargement. Chargement bousculé / palettes renversées → contraintes trop fortes → dommages possibles pendant le transport.

Dommages **climatiques** (humidité, température) plus difficiles à détecter. Trafic international : attention particulière ; organismes de contrôle qualité si besoin.

### 4.2 Identification détaillée

Une fois confirmé que la livraison est destinée à EnterSite, véhicule ouvert et première impression OK → contrôler si la **bonne marchandise** a été livrée.

Questions :
- Qui est le **fournisseur** ?
- Documents de livraison disponibles ?
- Plomb douanier à ne pas ouvrir ?
- Étranger : documents **douaniers** complets ?
- N° d'articles / désignations = bulletin de livraison ?
- Nombre de colis / palettes = bon de livraison ?

### 4.3 Documents d'accompagnement des marchandises

Prescrits en transport international (route, rail, air, mer) et aussi en transport intérieur.

#### 4.3.1 Le bon de transport

Ordre de transport émis par l'entreprise de transport. Indique : expéditeur, destinataire, type et quantité, poids brut, unité de livraison, éventuellement valeur en douane, instructions particulières. Permet au transporteur de réclamer son salaire. Conservation selon dispositions entreprise. Forme libre.

**Minimum :** adresse de l'expéditeur · adresse du destinataire.

#### 4.3.2 Lettre de voiture CMR

Selon la **Convention relative au contrat de transport international de marchandises par route**. Valable pour transports routiers de marchandises à titre onéreux — surtout au-delà des frontières vers pays participants (UE et hors UE : Russie, Turquie, Islande… ; la Suisse en fait partie).

Nécessaire si **au moins un** des deux pays (chargement ou déchargement) est partie à la convention. Remplie avant transport et remise au transporteur (douanes, etc.).

**Particularités :**
- toujours **3 exemplaires originaux**, signés par expéditeur **et** transporteur
- art. 6 CMR : infos séparées sur la marchandise + infos spécifiques
- art. 9 CMR : **effet probatoire**
- obligations de contrôle distinctes pour le transporteur

Pratique : fret préparé en entrepôt → palettes → sortie → chargement → lettre de voiture signée (souvent automatisé/numérisé). Importante pour la **responsabilité** en cas de dommages pendant le transport.

#### 4.3.3 Lettre de voiture (ferroviaire)

Transport ferroviaire : transmise par e-mail ; données sur **transpondeur** → conducteur + plan de transport. L'étiquette / transpondeur indique : expéditeur, destinataire, nombre et désignation des unités, poids, matériel échangeable.

#### 4.3.4 Le bulletin de livraison

Informe sur les marchandises livrées ; sert au **contrôle**. Vérifier : contenu de la livraison + conformité à la **commande**. Entreprises au registre du commerce : conservation **10 ans**.

**Corrections :** idéalement en présence du transporteur (contresigne). Différences inscrites **directement** sur le bon. Pas de règle juridique unique — **jamais** effacer / Tipp-Ex ; corrections clairement visibles ; signatures transporteur **et** destinataire. Accords **oraux** non probants. Contestation grave → informer **immédiatement** le fournisseur.

### 4.4 La réception sous réserve

Si une réception approfondie est impossible → « **réception sous réserve** » notée sur le bon de livraison. Il faut une **raison** (un simple cachet sans motif ne suffit pas). Ex. : emballage endommagé. Si défauts confirmés ensuite → réclamation dans le délai légal ; cas graves : remplacement ou résiliation.

Marchandises non comptables immédiatement → **ne pas** accepter sans réserve + signature.

**Conditions d'une acceptation sous réserve valable :**
- intitulé : « Acceptation sous réserve » (aussi à la main)
- **motif** (ex. emballage écrasé)
- date
- signature

### 4.5 Réglementations et contrats transfrontaliers

#### 4.5.1 Traité de Maastricht

Signé le 7.2.1992, en vigueur le 1.11.1993. Structure l'UE en trois piliers : Communauté européenne · politique étrangère et de sécurité · coopération policière et judiciaire.

Impact transport : fin des planifications purement nationales incompatibles (autoroutes qui « disparaissent », trains inutilisables…). Aujourd'hui : locomotives, wagons et personnel peuvent opérer **au-delà des frontières**.

#### 4.5.2 Convention de Vienne (CVIM)

Convention des Nations unies sur les contrats de vente internationale de marchandises. Signée le 11.4.1988 (10 pays à l'origine) ; aujourd'hui ~**89** pays signataires (> 3/4 du commerce international).

Objectif : règles **uniformes** pour les contrats de vente internationaux, égalité et avantage mutuel, réduction des obstacles juridiques.`;

const DEMO_304_THEORIE_SUMMARY = `## À retenir — Module 304

### Identification
**Globale** : destinée à nous ? (adresse / documents) avant déchargement  
**Détaillée** : bonne marchandise ? (fournisseur, docs, douane, articles, quantités)  
Ouverture : sécurité · non accompagné = inspection extérieure  
**Plombs douaniers** : ne pas ouvrir sans autorisation  
Première vision : état visible + attention climat / international

### Documents
Bon de transport · **CMR** (3 originaux, effet probatoire, responsabilité) · lettre de voiture rail · **bulletin de livraison** (contrôle + conservation 10 ans)  
Corrections : visibles, signées, pas d'effacement ; oral ≠ preuve

### Sous réserve
Motif + date + signature · pas un cachet vide  
Sinon réclamation / remplacement / résiliation possibles

### International
Maastricht → réseaux transfrontaliers  
CVIM (Vienne) → règles uniformes vente internationale`;

const DEMO_304_APERCU_FULL = `## Aperçu du module 304

Ce module traite de l'**identification de la livraison** à la réception : globale puis détaillée, documents d'accompagnement, réception sous réserve et cadres internationaux.

### Vous allez découvrir
1. Identification globale (adresse, ouverture, plombs, première vision)
2. Identification détaillée (articles, quantités, docs)
3. Bon de transport, CMR, lettre de voiture, bulletin de livraison
4. Réception sous réserve
5. Traité de Maastricht et Convention de Vienne (CVIM)

### Source
EnterSite — Logistics by ASFL / SVBL · Suite du module 303`;

const DEMO_304_APERCU_SUMMARY = `## Aperçu — Module 304
- Identification globale / détaillée
- Documents (CMR, bulletin…)
- Sous réserve · cadres internationaux`;

const DEMO_304_OBJECTIFS_FULL = `## Objectifs du module 304

À l'issue de ce module, l'apprenti·e est capable de :

- Distinguer identification **globale** et **détaillée**
- Appliquer les règles d'ouverture (sécurité, plombs douaniers)
- Citer les principaux **documents d'accompagnement** (bon de transport, CMR, lettre de voiture, bulletin)
- Effectuer correctement une **réception sous réserve**
- Situer Maastricht et la **CVIM** dans le transport / commerce international`;

const DEMO_304_OBJECTIFS_SUMMARY = `## Objectifs
- Globale vs détaillée
- Documents + plombs
- Sous réserve · CVIM / Maastricht`;

/** Glossaire Module 304 */
const DEMO_304_GLOSSAIRE_FULL = `## Glossaire — Module 304

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Identification globale | | Première étape à l'arrivée du transport : vérifier si la marchandise est **destinée à EnterSite** (adresse sur les documents, documents d'accompagnement) **avant** le déchargement. Comprend aussi un premier coup d'œil sur l'état du chargement et le respect des consignes de sécurité à l'ouverture. |
| Identification détaillée | | Deuxième étape une fois la livraison confirmée : contrôler si la **bonne marchandise** a été livrée (fournisseur, articles, quantités, colis/palettes, documents douaniers si besoin) et la comparer au bulletin de livraison / commande. |
| Le traité de Maastricht | | Traité signé le **7.2.1992**, en vigueur le **1.11.1993**, qui structure l'UE en trois piliers (Communauté européenne, PESC, coopération policière et judiciaire). Impact logistique : développement des réseaux de transport **transfrontaliers** (route, rail). |
| Convention de Vienne | | **CVIM** — Convention des Nations unies sur les contrats de vente internationale de marchandises (signée en 1980, ~89 pays). Objectif : règles **uniformes** pour les contrats de vente internationaux, égalité et avantage mutuel, réduction des obstacles juridiques au commerce. |
| CMR | | **Convention relative au contrat de transport international de marchandises par route** — base de la **lettre de voiture CMR** pour les transports routiers rémunérés, surtout transfrontaliers (Suisse, UE, Russie, Turquie, Islande…). Nécessaire si au moins un pays de chargement ou de déchargement est partie à la convention ; **3 exemplaires originaux** signés. `;

const DEMO_304_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **Identification globale** : pour nous ? adresse / docs avant déchargement
- **Identification détaillée** : bonne marchandise ? articles · quantités · docs
- **Maastricht** : intégration UE · transports transfrontaliers
- **Convention de Vienne (CVIM)** : vente internationale uniforme
- **CMR** : transport routier international · lettre de voiture (3 originaux)`;

/** Mises en situation Module 304 */
const DEMO_304_SITUATION_FULL = `## Mises en situation — Module 304

Contexte : tu travailles à la **réception des marchandises** chez **EnterSite AG**. Les missions portent sur l'**identification de la livraison**, les **documents de transport** et le **bulletin de livraison**. Rédige d'abord ta propre réponse, puis utilise le bouton pour afficher ou masquer les solutions / exemples proposés.

### Vue d'ensemble des missions
1. Défauts constatés — étape et mesures
2. Préparer une réception planifiée
2.1 Identification globale avant déchargement
3. Traiter le bulletin de transport
3.1 Signature du transporteur
3.2 Plomb douanier sur conteneur
3.3 Lettre de voiture CMR
4. Corriger le bulletin de livraison
5. Discussion de la mise en situation

---

## Mission 1 — Identification des marchandises

Tu travailles déjà depuis quelques semaines à la réception des marchandises chez EnterSite AG. Ton formateur veut vérifier tes connaissances : à quelle **étape** de la réception les défauts suivants ont été constatés et quelles **mesures** tu prendrais ?

### Défaut 1
Un colis est livré par DHL et est adressé à une **entreprise voisine**.

**Étape :** …  
**Mesures à prendre :** …

:::reponse
**Étape :** identification **globale**

**Mesures :** refuser la réception de la marchandise (mauvais destinataire).
:::

### Défaut 2
Lors d'une livraison de colis sur **10 palettes**, il **manque un colis**.

**Étape :** …  
**Mesures à prendre :** …

:::reponse
**Étape :** identification **détaillée**

**Mesures :** corriger le bulletin de livraison et le signaler au service des achats.
:::

### Défaut 3
Sur une palette, un carton est presque entièrement **enfoncé**.

**Étape :** …  
**Mesures à prendre :** …

:::reponse
**Étape :** identification **globale** (première vision à l'ouverture)

**Mesures :** procès-verbal de dommage avec photo et signature du transporteur ; annonce au service des achats.
:::

### Défaut 4
Lors du contrôle des marchandises, une partie des produits dans un colis est **endommagée**.

**Étape :** …  
**Mesures à prendre :** …

:::reponse
**Étape :** identification **détaillée**

**Mesures :** établir un procès-verbal de dommage ; corriger le bulletin de livraison et en informer le service des achats.
:::

---

## Mission 2 — Préparer la réception des marchandises

Bravo — tu as réussi le test. Aujourd'hui, pour la première fois, tu es seul responsable de la réception. Un chargement (palettes, cartons, fûts) est annoncé pour cet après-midi.

Décris ce que cela signifie pour toi et comment tu t'y prépares.

:::reponse
Grâce à la réception **planifiée**, je peux préparer des palettes vides et/ou des cadres et couvercles pour l'échange. Je peux libérer le quai et réserver une place dans la zone de réception. Les responsables de l'entrepôt sont **informés** et un emplacement de stockage est attribué.
:::

---

## Mission 2.1 — Identification globale avant déchargement

Avec une demi-heure de retard, le camion **Planzer** arrive. Le chauffeur ouvre la paroi arrière et tire immédiatement une palette sur le quai. Tu lui demandes d'attendre pour effectuer d'abord les premières étapes de l'identification.

Décris ces **premières étapes**.

:::reponse
L'**identification globale** : contrôle de l'adresse de livraison, premier coup d'œil dans le camion, vérification que les mesures de **sécurité** sont respectées — **avant** de laisser décharger.
:::

---

## Mission 3 — Traiter le bulletin de transport

L'identification effectuée, le transporteur te remet le bulletin de transport. Traite-le avec les informations suivantes (tu peux compléter librement d'autres indications) :

- **Destinataire :** EnterSite AG, Rigistrasse 2, 5102 Rupperswil
- **Expéditeur :** ALSO Suisse SA, Meierhofstrasse 5, 6032 Emmen
- Outils de mesure sur **1** palette Euro avec cadre et couvercle, **55 kg**
- **2** cartons d'outils de mesure, **12 kg**
- Matière première **Encre Black** en **9** fûts, **430 kg**
- Cartouches de toner vides, **7** palettes de **35 kg** chacune
- **6** palettes perdues, matière première **Toner Black** en sacs, **650 kg**

### Bulletin de transport (modèle)

| Champ | Valeur |
| --- | --- |
| Destinataire | EnterSite AG, Rigistrasse 2, 5102 Rupperswil |
| Expéditeur | ALSO Schweiz AG, Meierhofstrasse 5, 6032 Emmen |
| N° de commande | xxx |
| Date / heure | xxx |
| Mode d'expédition | Camion |

| Pos. | Nombre | Unité | Contenu | Poids |
| --- | --- | --- | --- | --- |
| 1 | 1 | Europalette | Outils de mesure | 55 kg |
| 2 | 2 | Carton | Outils de mesure | 12 kg |
| 3 | 9 | Fûts | Encre brute Black | 430 kg |
| 4 | 7 | Europalette | Cartouches de toner vides | 245 kg |
| 5 | 6 | Palettes perdues | Matières premières Toner Black | 650 kg |
| | | | **Poids total** | **1'392 kg** |
| | 8 | Palette Euro | | |
| | 1 | Cadre | | |
| | 1 | Couvercle | | |

:::reponse
Bulletin complété selon le tableau ci-dessus (dates, n° commande et signatures à compléter). Vérifier cohérence des poids : 55 + 12 + 430 + 245 + 650 = **1'392 kg**.
:::

---

## Mission 3.1 — Signature sur le bulletin de transport

Tu sais que tu ne dois **pas** conserver le bulletin de transport signé. Mais pourquoi le transporteur a-t-il besoin de **ta signature** ?

:::reponse
Avec cette signature, il peut prouver à l'expéditeur que la commande a été **exécutée** et ainsi réclamer son **paiement**.
:::

---

## Mission 3.2 — Plomb douanier sur conteneur

Pendant que tu réceptionnes, un collègue ne peut pas ouvrir un conteneur : une pièce inconnue est fixée à la serrure.

Explique ce qui est indiqué sur le conteneur et comment ton collègue doit agir.

:::reponse
Il s'agit d'un **plomb de douane**. Le collègue **ne doit pas** l'ouvrir. Il est impératif de respecter les **directives internes** ou d'informer le **supérieur hiérarchique**. Des instructions sur la manière de procéder seront définies en collaboration avec les **autorités douanières**.
:::

---

## Mission 3.3 — Lettre de voiture CMR

Ton collègue reçoit un document qu'il ne connaît pas. Explique-lui de quoi il s'agit et les différences avec les papiers de transport habituels.

:::reponse
La **lettre de voiture CMR** correspond à la *Convention relative au contrat de transport international de marchandises par route*. Elle est valable pour les transports routiers de marchandises **à titre onéreux**. Une CMR couvre surtout les livraisons **au-delà des frontières** vers d'autres pays participants (UE et hors UE : Russie, Turquie, Islande… ; la Suisse en fait partie).

Avant le transport, la lettre de voiture doit être **remplie** et remise au transporteur pour la présenter aux instances autorisées (douanes, etc.).

**Différences principales** avec un simple bon de transport national : **3 exemplaires originaux**, effet **probatoire**, champs normalisés (art. 6 CMR), responsabilité du transporteur en cas de dommages.

Une CMR est nécessaire si **au moins un** des deux pays (chargement ou déchargement) est partie à la convention.
:::

---

## Mission 4 — Traiter le bulletin de livraison

Avant de quitter, tu traites le bulletin de livraison. Lors du contrôle :

- **Encre matière première** : un fût n'est pas entièrement rempli → il manque **15 litres**
- **Rohstoff Toner** : un sac déchiré → **4 kg** de toner perdus pendant le transport
- **Cartouches de toner vides** : il manque **une unité d'emballage**

Corrige le bulletin de livraison de manière professionnelle.

:::reponse
Corrections à porter **sur le bulletin** (en présence du transporteur si possible, signatures) :

| Poste | Quantité corrigée |
| --- | --- |
| Encre matière première | **435 lt** (volume corrigé) |
| Rohstoff Toner | **646 kg** (650 − 4 kg) |
| Cartouches de toner vides | **49 uv** (unités d'emballage) |

Ne jamais effacer (pas de Tipp-Ex) : corrections **lisibles**, motif indiqué, signatures transporteur **et** destinataire. Informer le **service des achats** / fournisseur si nécessaire.
:::

---

## Mission 5 — Discussion de la mise en situation

Discute de la mise en situation en plénière avec la classe et l'enseignant·e. Note les informations complémentaires.

:::reponse
**Réponse ouverte** — notes de discussion (pas de solution unique).
:::`;

const DEMO_304_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **M1** : globale = mauvais destinataire / dommage visible · détaillée = quantité / contenu
- **M2** : réception planifiée → quai, engins d'échange, stockage
- **M2.1** : identification globale **avant** déchargement
- **M3** : bulletin de transport ALSO → 1'392 kg
- **M3.1** : signature = preuve de livraison pour paiement transporteur
- **M3.2** : plomb douanier → ne pas ouvrir · hiérarchie / douanes
- **M3.3** : CMR = transport international routier (3 originaux)
- **M4** : corrections bulletin : 435 lt · 646 kg · 49 uv
- **M5** : discussion plénière`;

/** Exercices de maths Module 304 */
const DEMO_304_MATHS_FULL = `## Exercices de mathématiques — Module 304

Calcule chaque résultat, puis vérifie avec le bouton solution.

### Exercice 1 — Dégâts sur tablettes tactiles

Parmi **3'500** tablettes tactiles achetées à Taïwan pour **665'000 CHF**, **6 %** des pièces sont devenues inutilisables (eau de mer dans le conteneur).

À combien s'élèvent les dégâts en CHF ?

:::solution
**39'900 CHF**

Calcul :
- Pièces défectueuses : 3'500 × 6 / 100 = **210** pièces
- Prix unitaire : 665'000 / 3'500 = **190 CHF**
- Dégâts : 210 × 190 = **39'900 CHF**
:::

### Exercice 2 — Composants imprimante 3D

Lors du contrôle à l'entrée, sur **250** composants, **15** pièces sont endommagées. Prix unitaire : **22,50 CHF**.

a) Dégâts en CHF ?  
b) Dégâts en % de la livraison ?

:::solution
a) **337,50 CHF** — 15 × 22,50 = 337,50 CHF

b) **6 %** — 15 × 100 / 250 = 6 %
:::

### Exercice 3 — Liquide de refroidissement

Liquide de refroidissement : densité **0,95 kg/dm³**. Conteneur : poids brut **230 kg**, tare **40 kg**.

Combien de **litres** ont été livrés ?

:::solution
**200 litres**

Calcul :
- Poids net : 230 − 40 = **190 kg**
- 1 dm³ = 1 litre → volume : 190 / 0,95 = **200 dm³** = **200 litres**
:::

### Exercice 4 — Capacité citerne de mazout

Citerne camion-silo : diamètre intérieur **4 m**, longueur **8 m**, remplie de mazout.  
Citerne EnterSite : diamètre **5 m**, hauteur **13 m**, déjà remplie aux **¾**.

La capacité restante est-elle suffisante pour recevoir le camion-silo ?

:::solution
**Non**

Calcul :
- Citerne camion : (4/2)² × 3,14 × 8 = **100,48 m³**
- Citerne EnterSite : (5/2)² × 3,14 × 13 = **255,125 m³**
- Remplissage ¾ : 255,125 × 75 / 100 = **191,34 m³**
- Reste : 255,125 − 191,34 = **63,785 m³**
- **63,785 m³ < 100,48 m³** → capacité **insuffisante**
:::

> **Contrôle rapide (ordre du corrigé)** : 200 · Non · 39'900 · 6 · 337,50`;

const DEMO_304_MATHS_SUMMARY = `## Maths — Solutions
1. **39'900 CHF** (210 × 190)
2. a) **337,50 CHF** · b) **6 %**
3. **200 litres** (190 / 0,95)
4. **Non** (63,8 m³ restants < 100,5 m³ camion)`;

/** Vérification des acquis Module 304 */
const DEMO_304_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Thème : **Module 304 — L'identification de la livraison**. Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

Quelles sont les **deux étapes** de l'identification des marchandises ?

:::reponse
1. **Identification globale**
2. **Identification détaillée**
:::

### Question 2

Nommez les objets illustrés (scellés / plombs douaniers) et décrivez leur fonction.

:::reponse
Les **scellés ou plombs douaniers** apposés sur les camions, semi-remorques ou conteneurs **ne doivent en aucun cas** être coupés ou détachés sans autorisation.

Les conteneurs scellés doivent être ouverts conformément aux **règles de l'entreprise**. Dans certains cas, il faut faire appel à un spécialiste de l'administration des douanes ou à une personne **habilitée** par l'entreprise. La procédure doit être **clarifiée au préalable**.
:::

### Question 3

Que faut-il faire si l'on constate des **dommages** sur le chargement d'un camion lors de son ouverture ?

:::reponse
Vérifier que les **instructions internes** ont été respectées ou consulter le **supérieur hiérarchique**.

Si le travail peut être poursuivi, les dégâts doivent être **documentés** (constat avec **photos**). Si le transporteur est sur place, il peut consigner la documentation. S'il n'est plus sur place, prendre contact avec le **fournisseur**.
:::

### Question 4

Quels sont les documents d'accompagnement des marchandises que l'on peut avoir lors d'un **transport routier** ?

:::reponse
- Le **bulletin de transport** (bon de transport)
- Le **bulletin de livraison**
- (En international) la lettre de voiture **CMR**
:::

### Question 5

Quel est l'objectif de la **Convention de Vienne** ?

:::reponse
Permettre le **développement** dans le **commerce international** grâce à des règles **uniformes** pour les contrats de vente internationaux (égalité, avantage mutuel, réduction des obstacles juridiques).
:::`;

const DEMO_304_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. Globale · détaillée
2. Plombs douaniers : ne pas couper · procédure entreprise / douanes
3. Documenter (photos) · hiérarchie · fournisseur si besoin
4. Bulletin de transport · bulletin de livraison (+ CMR international)
5. CVIM : commerce international uniforme`;

/** Contenu Module 305 — Déchargement des marchandises */
const DEMO_305_THEORIE_FULL = `## 5. Déchargement des marchandises

Après le contrôle des documents (module **304**), les marchandises sont **déchargées** et contrôlées. Le déchargement sur rampe/quai comporte des risques → concentration + connaissances en **sécurité au travail**.

Deux domaines :
1. Dangers liés à l'**infrastructure**
2. Dangers / risques liés au **travail**

### 5.1 Dangers liés à l'infrastructure

Risques liés aux conditions de construction (rampes, zones de circulation…) = **zones dangereuses**.

#### 5.1.1 Surfaces de stockage et de circulation

Zones de **stockage** clairement séparées des zones de **circulation** (aussi pour stockages en bloc non signalés).

Largeurs minimales (piétons) :
- voies **secondaires** ≥ **80 cm**
- voies **principales** ≥ **120 cm**

Marchandises : ne pas dépasser sur les voies (risque de trébuchement). **Aucune** marchandise sur les voies de circulation.

#### 5.1.2 Autres endroits dangereux

| # | Lieu | Points clés |
| --- | --- | --- |
| 1 | **Plateformes** | Sols surélevés ; barrières ; engins immobilisés (pas de déplacement intempestif) |
| 2 | **Balances intégrées** | Pas de chariots de manutention sur plateformes de balance (sauf balances sol pour véhicules routiers) |
| 3 | **Salissures** | Nettoyer vite ; éviter flaques et objets au sol |
| 4 | **Portails / portes** | Hauteur, visibilité ; prudence, miroirs, vitesse réduite |
| 5 | **Quai de chargement** | Risque de chute ; y aller seulement si nécessaire ; pas de stockage ; attention au déportement du chariot |
| 6 | **Rails** | Traverser voies industrielles à ~**45°** (manuel cariste) |
| 7 | **Plateformes élévatrices** | Assurer les engins ; distance suffisante au levage |
| 8 | **Grilles / regards** | Risque d'effondrement / enfoncement ; vitesse réduite |
| 9 | **Rampes** | Pas d'accélération ; charge toujours **en amont** de la pente ; vide = directives internes |

##### Zone dangereuse : quai de chargement

Souvent **sans** barrières permanentes (accès camions/wagons) → risque de chute.

**Mesures :**
- rampes assez larges : allée de travail (Ast) **+ 10 %** (manuel cariste)
- bords marqués / protections amovibles
- pas de stationnement ni stockage temporaire sur le quai
- respect des mesures de prudence
- rampes trop étroites / inadaptées → **interdiction** de circulation engins

### 5.2 Risques liés au travail

Points d'attention au chargement / déchargement :
- sécurisation du véhicule
- choix de l'engin de manutention approprié
- usage correct des moyens auxiliaires (ponts, tôles de liaison…)
- postes disposés pour circulation piétons/véhicules sûre

#### 5.2.1 Sécurisation du véhicule

Véhicules très divers (semi, camion, camionnette, wagon…).

**Transport routier**
- Chargement/déchargement arrière ou côté
- **Guides de roues** : alignement, moins de chocs, positionnement près du quai (souvent jaune/noir)
- **Butoirs de quai** : amortir le choc (fixes ou mobiles)
- Une fois à quai : **frein de stationnement** + couper le contact
- Avec chariots : forces de poussée → **cales** sous les roues + **chaîne/sangle** au quai
- Équipements de sûreté automatiques possibles

**Semi-remorques** : mêmes mesures + anti-basculement (**béquille**, pile de palettes / support dolly / dispositif anti-basculement).

**Ferroviaire** : personnel qualifié ; **frein à main** et/ou **sabot de freinage** (entre rail et roue).

#### 5.2.2 Choix correct de l'engin de manutention

##### Catégories sans risque d'accident important (ex. CFST 6518)

Instruction selon fabricant + sécurité entreprise (théorie + pratique, **documentée**). Formateurs : cours engins à timon auprès d'un centre reconnu **Suva**. Durée selon complexité.

| Cat. | Exemples | Usage |
| --- | --- | --- |
| **S1** Tracteur | Remorquage, souvent électrique, siège | Peu/pas de charge |
| **S2** À timon | Transpalette électrique (levée initiale) ; gerbeur (~5,5 m) ; variantes à conducteur porté | Courtes/moyennes distances, gerbage, chargement |
| **S3** Préparateurs | Petite levée / horizontal | Préparation 1er–2e niveau ; plateforme ≤ ~1 m |

##### Catégories « particulièrement dangereuses »

Risque d'accident important. Apprentis : en principe non — **dérogation** (ordonnance jeunes) pour formations reconnues Suva (logisticiens). Formation base débutants **4 jours** (expérimentés 2 j) + complémentaire 1 j / type.

| Cat. | Exemples | Usage |
| --- | --- | --- |
| **R1** Contrepoids | Élec./thermique 3–4 roues | Universel ; mât ~7 m ; jusqu'à ~2 t (légers) / 10–40 t+ (lourds, extérieur) |
| **R2** Haute levée / retract | Gerbeur assis, mât rétractable, tri-directionnel, préparateur vertical, multidirectionnel | Intérieur ; jusqu'à ~5–15 m selon type |
| **R3** Latéral | Chariot latéral | Marchandises longues (scieries) ; ~4 m |
| **R4** Télescopique | Bras télescopique | Extérieur, polyvalent |

**OPA art. 6 et 8** : informer des dangers ; travaux dangereux → employés formés.

**Jeunes (< 18 ans)** : travaux dangereux interdits en principe ; conduite chariots = dangereuse → **18 ans** en règle générale. **Dérogation logisticiens** : dès **15 ans** en formation avec mesures d'accompagnement (art. 4 protection des jeunes / loi sur le travail art. 29).

##### Transporter en toute sécurité

Quai mal organisé, vitesse, palettes mal placées, signalisation non respectée → accidents. Base : **manuel du cariste**.

**Statistique (ordres de grandeur) :** > 10 000 accidents engins / an en Suisse (~100 mio CHF). Causes graves (exemple DE) : collisions **48,7 %** · conducteur 20,6 % · monter/descendre 4,6 % · accessoire 6,5 % · chargement 9,8 % · autres 9,8 %.

**Règle d'or :** regarder **dans le sens de la marche** (même trajets courts).

**Exemple accident :** piéton non autorisé surgit → écrasé par chariot 6 t → mortel. Mesure : sens de marche = direction du regard ; vue toujours dégagée.

#### 5.2.3 Moyens auxiliaires de liaison

Pour palettes : **tôles de liaison** / **ponts de chargement** (hauteurs camion ≠ quai).

Exigences minimales :
- capacité de charge **indiquée** et suffisante
- surface **antidérapante**
- protection contre le **déplacement**

Préférer modèles **accrochés au quai** et rabattables. Éviter rampes tordues/glissantes.

**Plateformes élévatrices / rampes ajustables :** ne pas dépasser charge utile ; mode d'emploi affiché ; maintenance par spécialistes.

#### 5.2.4 Ascenseurs et monte-charges

Charge utile **affichée**. Avant entrée : **chariot + charge + conducteur** < capacité. Calculer avant d'entrer.

**Incendie :** **jamais** d'ascenseur / monte-charge (effet cheminée → piège mortel).

#### 5.2.5 Installations de stockage automatisées

En principe **ne pas** rester dans HRL / automatismes. Dépannage = personnel formé. Pour y pénétrer : arrêter **toute** l'installation + sécuriser contre remise en marche (**cadenas** sur interrupteur principal). Ne jamais se fier à un simple « c'est arrêté ». Signaler / faire faire par le supérieur.

#### 5.2.6 Électricité

Lignes HT dangereuses. Ligne de contact ferroviaire **15 000 V** : s'approcher = danger de mort. Charger wagons ouverts seulement si lignes **déconnectées et mises à la terre**. **Ne pas toucher** même déconnectées/mises à la terre sans procédure.

#### 5.2.7 Signalisation et restriction d'accès

| Type | Forme / couleurs | Rôle |
| --- | --- | --- |
| **Avertissement** | Triangle jaune/noir (ou rouge/blanc en circulation) | Danger imminent ; souvent + interdiction |
| **Interdiction** | Rond rouge/blanc | Contraignant — à respecter absolument |
| **Obligation** | Rond bleu/blanc | Comportement imposé (casque, lunettes…) |
| **Secours** | Souvent vert/blanc | Évacuation, aide d'urgence |

**Ex. 1 :** zone explosion (jaune/noir) + interdiction chariots + dérogation chariots antidéflagrants.  
**Ex. 2 :** grues (jaune/noir) + obligation casque + chaussures de sécurité.`;

const DEMO_305_THEORIE_SUMMARY = `## À retenir — Module 305

### Infrastructure
Stockage ≠ circulation · secondaires ≥80 cm · principales ≥120 cm  
Quai : risque chute · Ast+10 % · pas de stockage · bords marqués  
Rampes : charge en amont · pas d'accélération · 45° sur rails

### Sécuriser le véhicule
Frein + contact OFF · cales · chaîne/sangle · guides/butoirs  
Semi : béquille + anti-basculement  
Rail : frein à main et/ou sabot

### Engins (CFST)
S1–S3 : moindre risque · instruction documentée  
R1–R4 : particulièrement dangereux · formation Suva  
Jeunes : 18 ans règle / apprentis logistique dès 15 ans (dérogation)  
Regarder dans le sens de la marche · collisions = cause n°1

### Auxiliaires & zones
Ponts/tôles : charge, antidérapant, anti-déplacement  
Monte-charge : chariot+charge+conducteur < charge utile · jamais en incendie  
Automatismes : cadenas sur coupe-circuit · pas d'entrée sans consignes  
Électricité HT / 15 kV : danger mortel  
Signaux : avertissement / interdiction / obligation / secours`;

const DEMO_305_APERCU_FULL = `## Aperçu du module 305

Ce module traite du **déchargement** sous l'angle de la **sécurité au travail** : dangers d'infrastructure et risques liés au travail (véhicules, engins, auxiliaires, signalisation).

### Vous allez découvrir
1. Zones dangereuses (circulation, quai, rampes…)
2. Sécurisation route / rail
3. Catégories d'engins CFST (S / R) et formation
4. Ponts de chargement, monte-charges, automatismes, électricité
5. Signalisation de sécurité

### Source
EnterSite — Logistics by ASFL / SVBL · Suite du module 304`;

const DEMO_305_APERCU_SUMMARY = `## Aperçu — Module 305
- Dangers infrastructure (quai, rampes…)
- Sécurisation véhicules + engins
- Auxiliaires, monte-charges, signaux`;

const DEMO_305_OBJECTIFS_FULL = `## Objectifs du module 305

À l'issue de ce module, l'apprenti·e est capable de :

- Identifier les **dangers d'infrastructure** (circulation, quai, rampes…)
- Expliquer la **sécurisation** des véhicules routiers et ferroviaires au déchargement
- Distinguer catégories d'engins **S** et **R** (CFST) et les règles de formation / âge
- Utiliser correctement ponts/tôles, monte-charges et règles d'accès aux automatismes
- Reconnaître les **signaux** d'avertissement, interdiction, obligation et secours`;

const DEMO_305_OBJECTIFS_SUMMARY = `## Objectifs
- Infrastructure & quai
- Sécurisation + engins S/R
- Auxiliaires · signaux`;

/** Glossaire Module 305 */
const DEMO_305_GLOSSAIRE_FULL = `## Glossaire — Module 305

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Signaux d'avertissement | | Signaux de forme **triangulaire**. En entreprise, les dangers imminents sont en général signalés en **jaune/noir** ; sur les voies de circulation, on utilise aussi des signaux **rouge/blanc** issus de la circulation routière. Souvent combinés avec des signaux d'interdiction. |
| Signaux d'interdiction | | Signaux **ronds**, **rouge/blanc** (comme sur la route). Ils imposent une **interdiction obligatoire** — ils doivent absolument être respectés (ex. interdiction d'accès aux chariots élévateurs sur un quai étroit). |
| Signaux d'obligation | | Signaux **ronds**, **bleu/blanc**. Ils imposent un comportement de protection (casque, lunettes de protection, chaussures de sécurité…). Également **contraignants** et à respecter. |
| Signaux de secours | | Signaux d'**indication** (pas toujours uniformes), en général **vert/blanc**. Ils indiquent les voies d'évacuation ou les lieux/installations où obtenir de l'aide en cas d'urgence. `;

const DEMO_305_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **Avertissement** : triangle · jaune/noir (ou rouge/blanc circulation)
- **Interdiction** : rond · rouge/blanc · obligatoire
- **Obligation** : rond · bleu/blanc · EPI / comportement imposé
- **Secours** : vert/blanc · évacuation · aide d'urgence`;

/** Mises en situation Module 305 */
const DEMO_305_SITUATION_FULL = `## Mises en situation — Module 305

Contexte : tu travailles au **déchargement** chez **EnterSite AG**. Les missions portent sur les **dangers au quai**, la **signalisation de sécurité** et l'analyse des **zones dangereuses**. Rédige d'abord ta propre réponse, puis utilise le bouton pour afficher ou masquer les solutions / exemples proposés.

### Vue d'ensemble des missions
1. Dangers sur les quais de chargement
2. Signalisation de sécurité
3. Vidéo d'apprentissage (travail de groupe)
4. Zones dangereuses dans l'entreprise formatrice
5. Discussion de la mise en situation

---

## Mission 1 — Dangers sur les quais de chargement

Chez EnterSite AG, plusieurs situations délicates se sont produites lors du déchargement sur le quai. La direction te demande ton aide.

Cherche sur Internet les déclarations d'accidents du travail sur les quais de chargement (mots-clés : « accident du travail » et « quai de chargement »). Sur la base de tes recherches et de tes connaissances, remplis le tableau des dangers possibles.

| Activité | Dangers possibles |
| --- | --- |
| Approche et accostage à la rampe | … |
| Chargement et déchargement | … |
| Utilisation de la tôle de liaison | … |
| Départ du camion | … |

:::reponse
| Activité | Dangers possibles |
| --- | --- |
| **Approche et accostage à la rampe** | Personne coincée sur la rampe · rampe mal approchée |
| **Chargement et déchargement** | Le véhicule se déplace ; la personne et le véhicule chutent le long de la rampe · le/la logisticien·ne tombe d'une rampe non sécurisée |
| **Utilisation de la tôle de liaison** | Le pont de transbordement ne supporte pas le poids et s'effondre · le pont n'a pas été fixé — l'homme et le véhicule soutiennent la rampe |
| **Départ du camion** | Le véhicule est arrimé à la rampe mais le transporteur démarre quand même · le transporteur démarre alors que le/la logisticien·ne n'a pas terminé son travail |
:::

---

## Mission 2 — Signalisation de sécurité

Pour minimiser les risques, EnterSite AG prévoit d'apposer davantage de marquages de sécurité. Explique les différents **signaux distinctifs** avec leur forme, leur couleur et leur utilisation.

:::reponse
| Signaux | Forme, couleur et utilisation |
| --- | --- |
| **Signaux d'avertissement** | Toujours **triangulaires**. En entreprise : dangers imminents en **jaune/noir** ; sur les voies de circulation aussi **rouge/blanc** (route). Souvent combinés avec des interdictions. |
| **Signaux d'interdiction** | **Ronds**, **rouge/blanc** (comme sur la route). **Obligatoires** — à respecter absolument. |
| **Signaux d'obligation** | **Ronds**, **bleu/blanc**. Imposent un comportement de protection (lunettes, casque…). Également obligatoires. |
| **Signaux de secours** | Signaux d'indication, en général **vert/blanc**. Voies d'évacuation ou lieux d'aide en cas d'urgence. |
:::

---

## Mission 3 — Vidéo d'apprentissage

Pendant la pause, l'idée de tourner une vidéo sur la sécurité au travail surgit. Avec **trois partenaires**, réalisez une vidéo sur le thème **« Dangers lors du déchargement sur le quai »**.

**Exigences :**
- Vidéo structurée (introduction, partie principale, conclusion)
- Sujet présenté de manière condensée
- **Scénario** préalable visible et présenté à l'enseignant·e avant le tournage
- Générique de début et de fin (noms + date de remise en fin, discret)
- Durée : **2 à 4 minutes** max.
- Matériel disponible (ex. smartphones) — temps total d'environ **3 leçons**

> **Modèle** : scénario selon le modèle fourni (fichier Word).

:::reponse
**Réponse individuelle** — dépôt de la vidéo et du scénario (travail de groupe, évaluation selon la grille de la mission).
:::

---

## Mission 4 — Zones dangereuses (entreprise formatrice)

Qu'en est-il des zones dangereuses dans **ton entreprise formatrice** ?

- Quels domaines, appareils ou moyens auxiliaires considères-tu comme **dangereux** ?
- Quelles **mesures de protection** ont été ou sont appliquées ?
- Ces mesures sont-elles **suffisantes** ? Justifie.

| Zones dangereuses | Mesures de protection | Tes appréciations |
| --- | --- | --- |
| … | … | … |

:::reponse
**Réponse individuelle** — tableau à compléter selon ton entreprise de formation (quais, engins, rampes, stockage, électricité…).
:::

---

## Mission 5 — Discussion de la mise en situation

Discute de la mise en situation en plénière avec la classe et l'enseignant·e. Note les informations complémentaires.

:::reponse
**Réponse ouverte** — notes de discussion (pas de solution unique).
:::`;

const DEMO_305_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **M1** : tableau dangers quai (accostage · déchargement · tôle · départ camion)
- **M2** : 4 types de signaux (forme + couleurs)
- **M3** : vidéo 2–4 min + scénario (groupe, dépôt fichier)
- **M4** : zones dangereuses entreprise formatrice (individuel)
- **M5** : discussion plénière`;

/** Exercices de maths Module 305 */
const DEMO_305_MATHS_FULL = `## Exercices de mathématiques — Module 305

Calcule chaque résultat, puis vérifie avec le bouton solution.

### Exercice 1 — Surface de chargement camion

Un chauffeur affirme que la surface de chargement de son camion (**8,50 m × 2,44 m**) est exploitée à **70 %** et qu'il peut encore charger **8** palettes Euro type I.

Combien de palettes peut-il **réellement** encore charger ?

*(Palette Euro type I : 1,20 m × 0,80 m = 0,96 m².)*

:::solution
**6 palettes**

Calcul :
- Surface totale : 8,50 × 2,44 = **20,74 m²**
- Surface exploitée (70 %) : 20,74 × 70 / 100 = **14,518 m²**
- Surface restante : 20,74 − 14,518 = **6,22 m²**
- Surface 1 palette : 1,20 × 0,80 = **0,96 m²**
- Nombre de palettes : 6,22 / 0,96 = **6,48** → **6 palettes** (pas 8)
:::

### Exercice 2 — Capacité de charge d'une tôle de liaison

Tôle de liaison (1 m × 0,8 m) : étiquette **charge admissible max. 8'330 N**.  
Nouveau chariot à timon : **1,05 t** · palette la plus lourde : **1'200 kg** · collaborateur : **95 kg** · distance camion–rampe : **0,6 m**.

L'affirmation du collègue (capacité insuffisante) est-elle **juste** ?

:::solution
**Oui**

Calcul :
- Charge admissible : 8'330 / 10 = **833 kg** (≈ 850 kg)
- Charge totale : 1'050 + 1'200 + 95 = **2'345 kg**
- **2'345 kg > 833 kg** → l'affirmation du collègue est **correcte** : la tôle ne convient **pas**.
:::

### Exercice 3 — Nombre de camions pour 36 palettes

EnterSite AG : 4 camions. Dimensions intérieures : **7,52 m × 2,43 m × 2,45 m**.  
À charger : **36** palettes EUR type I pour un client.

Combien de camions faut-il réserver ?

:::solution
**2 camions**

Calcul :
- Palettes en longueur : 7,52 / 1,20 = **6** palettes
- Palettes en largeur : 2,43 / 0,80 = **3** palettes
- Par camion : 6 × 3 = **18** palettes
- Pour 36 palettes : 36 / 18 = **2 camions**
:::

### Exercice 4 — Charge utile des camions

Charge utile des camions réservés : **12 tonnes** chacun.  
Une palette avec chargement pèse **640 kg**. (**36** palettes au total.)

Peut-on utiliser les camions de l'entreprise ou faut-il un transporteur externe ?

:::solution
**Camions de l'entreprise**

Calcul :
- Poids total : 640 × 36 = **23'040 kg** = **23,04 tonnes**
- Capacité 2 camions : 2 × 12 = **24 tonnes**
- **23,04 t < 24 t** → les **camions de l'entreprise** suffisent.
:::

> **Contrôle rapide (ordre du corrigé)** : 6 · Oui · 2 · camions de l'entreprise`;

const DEMO_305_MATHS_SUMMARY = `## Maths — Solutions
1. **6 palettes** (6,22 m² restants / 0,96 m²)
2. **Oui** (2'345 kg > 833 kg admissibles)
3. **2 camions** (18 palettes/camion)
4. **Camions de l'entreprise** (23,04 t < 24 t)`;

/** Vérification des acquis Module 305 */
const DEMO_305_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Thème : **Module 305 — Déchargement des marchandises**. Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

Quels sont les points auxquels il faut faire particulièrement attention lors du **chargement et du déchargement** des camions ?

:::reponse
- La **sécurité** du véhicule à charger ou décharger
- Le choix d'un **engin de manutention** approprié
- L'utilisation correcte des **rampes de chargement** et des **tôles de liaison**
- Aménager les lieux de travail pour que la circulation des **piétons** et des **véhicules** se fasse en toute sécurité
:::

### Question 2

Comment un camion doit-il être **sécurisé** sur le quai de chargement ? Cite toutes les mesures de sécurité que tu connais.

:::reponse
- Serrer le **frein à main**
- Couper le **contact** (arrêter le moteur)
- Placer une **cale** sous les roues
- Fixer le véhicule à la rampe avec une **chaîne** ou une **sangle**
:::

### Question 3

Que représente cette image ? Donne une explication la plus précise possible.

*(Image : frein à main sur wagon ferroviaire.)*

:::reponse
Il s'agit du **frein à main** sur les **wagons de chemin de fer**. On le trouve soit sur la **plateforme** du wagon, soit sur le **côté longitudinal** du wagon. Il sert à immobiliser le wagon pendant le chargement ou le déchargement.
:::

### Question 4

Quelles conditions doivent être remplies par les **tôles de liaison / ponts de chargement** pour une utilisation en toute sécurité ?

:::reponse
- Une **capacité de charge suffisante** (indiquée sur l'équipement)
- Une surface **antidérapante**
- Une protection contre le **déplacement** (fixation au quai de préférence)
:::

### Question 5

Où peux-tu rencontrer ce pictogramme dans une entreprise de logistique ? Existe-t-il des exceptions qui lèvent cette interdiction ?

*(Pictogramme : interdiction d'accès aux chariots élévateurs.)*

:::reponse
Cela signifie une **interdiction d'accès pour les chariots élévateurs**. On le constate notamment si les quais de chargement sont **trop étroits** ou **inadaptés** aux chariots élévateurs.

**Non**, il n'y a en principe **pas d'exceptions** qui lèvent cette interdiction.
:::`;

const DEMO_305_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. Sécurité véhicule · engin adapté · rampes/tôles · circulation piétons/véhicules
2. Frein · contact OFF · cales · chaîne/sangle
3. **Frein à main** wagon (plateforme ou côté longitudinal)
4. Charge indiquée · antidérapant · anti-déplacement
5. Interdiction chariots (quai étroit) · pas d'exception`;

/** Contenu Module 306 — Contrôle des contenants / supports de charge */
const DEMO_306_THEORIE_FULL = `## 6. Contrôle des contenants

Après l'identification détaillée (module **304**), on contrôle souvent les **emballages / contenants** pendant ou après le déchargement. Contrôle consciencieux = assez de **temps** et d'**espace**.

### 6.1 Qu'est-ce qu'un contenant ?

Regroupement de marchandises/matériaux en une **nouvelle unité** pour simplifier transport, stockage et déstockage.

Exemples : unités palettisées · fûts · récipients plastique · caisses bois…

**Coûts** non négligeables. Exemple (situation 2022) — Euro palette avec cadres :

| Désignation | Qté | Coût unitaire | Total |
| --- | --- | --- | --- |
| Palette Euro | 1 | CHF 18.30 | CHF 18.30 |
| Cadre Euro | 3 | CHF 48.– | CHF 144.– |
| Couvercle Euro | 1 | CHF 17.80 | CHF 17.80 |
| **Total contenants** | | | **CHF 180.10** |

Sur une livraison complète, les coûts montent vite → travailler concentré et **éviter les pertes** à l'échange.

### 6.2 Le support de charge

Marchandises empilées sur supports de charge ; la **palette** s'est imposée mondialement, mais **pas** de dimensions uniques.

| Région / type | Dimensions (L × l × h) | Poids approx. | Remarques |
| --- | --- | --- | --- |
| Euro type **1** | 1200 × 800 × 144 mm | 22 kg | Standard le plus courant |
| Euro type **2** | 1200 × 1000 × 162 mm | ~28 kg | « Textile » |
| Euro type **3** | 1200 × 1200 × 162 mm | ~35 kg | « Chimique » / « Baloise » · EPAL 3 charges lourdes |
| Euro type **6** | 600 × 800 × 144 mm | ~18 kg | Demi-palette / Düsseldorf |
| **USA** | 48" × 40" (1219 × 1016 mm) | ~30 kg | Palette américaine |
| **Asie** | 1100 × 1100 × 144 mm | ~28 kg | Conteneurs outre-mer (larg. 2430 mm) |

Souvent aussi des palettes **sur mesure** hors normes.

#### 6.2.1 Support de charge selon EURO

~**450 millions** d'Euro palettes en circulation. Type **1** = de loin le plus utilisé ; échangeables dans les pays du pool (dont Suisse).

**Pool européen de palettes (EPP)** : initié CFF 1952 (pool CH) → chemins de fer allemands 1962 (EPP). Union ferroviaire pour simplifier transports via palettes (et cadres/couvercles) échangeables.

**Charges Euro palette type 1 :**
- **1000 kg** — charge aléatoire
- **1500 kg** — charge uniforme
- **2000 kg** — charge compacte et uniforme sur toute la surface

##### Critères d'échange — palettes

Non échangeables si non conformes construction/marquage **ou** défauts :
1. Planche manquante
2. Planche cassée transversalement/obliquement
3. Accrocs laissant apparaître tiges/têtes de clous (seuils selon planches)
4. Plot manquant ou fendu (plus d'un clou visible)
5. Marque **EPAL** ou **EUR** manquante

Aussi non échangeables : mauvais état général · capacité de charge non garantie · trop sales · plusieurs plots fendus · composants non conformes.

##### Critères — cadres et couvercles (Suisse)

**Cadres** non échangeables si : signes non conformes · paroi enfoncée · fente avec tige de vis · parois intérieures très sales · plusieurs parois endommagées · mauvais état général.

**Couvercles** non échangeables si : planche manquante/cassée/fendue avec clous visibles · arête bordure cassée > moitié longueur et brèche > 20 cm · sigle chemins de fer manquant/illisible.

### 6.3 EPAL (European Pallet Association)

Organisation faîtière fabricants/réparateurs de supports EPAL ; plus grand pool **ouvert** ; assurance qualité (fabrication et réparation sous EPAL).

#### 6.3.1 Normes de qualité (repères)

1. Marque EPAL  
2. Marque compagnie ferroviaire européenne  
3. Marque pool (EPAL ou EUR)  
4. Plan de cloutage standardisé  
5. Planches inférieures chanfreinées  
6. Pas de moisissure  
7. Agrafe de contrôle qualité EPAL  
8. Après réparation : clou de réparation EPAL  

### 6.4 Procédure d'échange de palettes EURO

Centaines de palettes/jour possibles → à restituer (coût).

#### 6.4.1 Pools d'engins échangeables

*Pool* = « réservoir ». Adhésion **non** obligatoire.

- **Ouvert** : engins propriété des participants ; remise ↔ remplacement de même valeur ; règlement. 3 variantes d'échange (évite de tout recharger).
- **Fermé** : voir CHEP (§ 6.5)

#### 6.4.2 Échange standard (pièce contre pièce)

Ex. : 30 Euro palettes livrées → 30 vides rendues. Coûts équilibrés ; échanger des palettes **équivalentes**.

#### 6.4.3 Échange contre un bon

Si pas assez de vides : **bon** (forme libre) reconnaissant la dette (type + nombre). Valable juridiquement avec **signature** d'un collaborateur.

#### 6.4.4 Échange avec compte courant

Registre (papier/Excel/portail) des entrées/sorties. **Solde** : positif pour l'un, négatif pour l'autre → le solde négatif a droit aux engins. Ex. : Portail de palettes ou fichier Excel partagé.

### 6.5 Support de charge selon CHEP

*Commonwealth Handling Equipment Pool* — alternative aux euros. Origine Australie (WW2 / AMHSC) ; aujourd'hui ~220 centres / 35 pays. « Palettes **bleues** » ; aussi quarts 600×400 et USA.

#### 6.5.1 Pool fermé

Une entreprise propriétaire loue aux autres. Différences vs ouvert :
- **Location** (collecte + réparation incluses), pas d'achat
- **Pas** d'échange pièce à pièce : on informe CHEP (nombre, type, destinataire)
- Vides → point de collecte CHEP

### 6.6 Supports de charge spéciaux

| Type | Caractéristiques |
| --- | --- |
| Palette **tôle d'acier** | Jusqu'à 2 t ; 1200×800, 1000×800, 1200×1000 |
| Palette **synthétique** | Couleurs/dimensions variées ; zones humides, chimie, alimentaire |
| Palettes **INKA** | Empilables, usage unique marchandises légères ; copeaux compressés |
| Palette à **fûts** | Fûts couchés |
| **Pal-Box** | Carton + plots styropor ; fourches/transpalette |
| **Cadre grillagé** | Désormais échangeable EPP si critères OK |
| **Box-palettes** métal | Vrac (copeaux, verre…), déchets/recyclage |
| **Box à claire-voie** | Fruits/légumes, aération ; saisonniers |
| **Varitainers** / palettes réservoirs | Liquides / vrac fin ; parfois MD ; dims Euro |
| Conteneurs **réservoirs** | 0,8–1,2 m³ ; agroalimentaire |

#### 6.6.1 Matériels auxiliaires (non échangeables pool)

Supports **frontaux** (rouleaux, balles) · supports **latéraux** (aide empilage) — adaptés Euro I, **hors** accord pool.

### 6.7 Supports de charge sur roulettes

Manipulation / transbordement facilités.

- **Palettes à roulettes** — métal, montants rabattables, roulettes d'un côté → rouler en soulevant l'autre (wagons)
- **Rollcontainers** — petits lots courts trajets ; approvisionnement magasins ; barres en camion
- **Conteneur de collecte** (ex. Poste) — conteneurs de courrier (BB)

### 6.8 Emballages à usage unique

Utilisés **une** fois puis éliminés → coûts déchets + impact environnemental ; souvent encore indispensables. → module **602**.

### 6.9 Emballages réutilisables

Conçus pour plusieurs usages ; pas de déchet direct si le circuit est respecté. Souvent plastique (ex. Dispo-Box → module **602**).`;

const DEMO_306_THEORIE_SUMMARY = `## À retenir — Module 306

### Contenant
Unité regroupée (palette, fût, caisse…) · coûts réels · pas de pertes à l'échange

### Palettes
Euro 1 : 1200×800 · charges 1000 / 1500 / 2000 kg  
Types 2, 3, 6 · USA · Asie  
**EPP** / **EPAL** · critères d'échange (planches, plots, marques EUR/EPAL)  
Cadres & couvercles : critères CH

### Échange
Pool **ouvert** : pièce/pièce · bon (signé) · compte courant  
Pool **fermé CHEP** : location, pas d'échange, collecte

### Spéciaux & roulettes
Acier, plastique, INKA, fûts, Pal-Box, grillagé, box métal/claire-voie, varitainers…  
Rollcontainers · palettes à roulettes

### Emballages
Usage unique vs réutilisable → module 602`;

const DEMO_306_APERCU_FULL = `## Aperçu du module 306

Ce module traite du **contrôle des contenants** et des **supports de charge** : types de palettes, EPAL/EPP, échanges, CHEP, supports spéciaux et emballages.

### Vous allez découvrir
1. Contenant et coûts (Euro + cadres)
2. Types de palettes (Europe, USA, Asie) et charges Euro
3. Critères d'échange EPAL / cadres / couvercles
4. Pools ouvert (échange) vs fermé (CHEP)
5. Supports spéciaux, roulettes, usage unique / réutilisable

### Source
EnterSite — Logistics by ASFL / SVBL · Suite des modules 304–305`;

const DEMO_306_APERCU_SUMMARY = `## Aperçu — Module 306
- Contenants & palettes Euro
- EPAL / critères d'échange
- Pools ouvert vs CHEP
- Supports spéciaux`;

const DEMO_306_OBJECTIFS_FULL = `## Objectifs du module 306

À l'issue de ce module, l'apprenti·e est capable de :

- Définir un **contenant** / support de charge et citer les principaux types de palettes
- Appliquer les **critères d'échange** Euro / EPAL (palettes, cadres, couvercles)
- Distinguer pool **ouvert** et pool **fermé** (CHEP) et les modes d'échange
- Identifier des supports **spéciaux** et sur roulettes
- Différencier emballages **à usage unique** et **réutilisables**`;

const DEMO_306_OBJECTIFS_SUMMARY = `## Objectifs
- Contenants / palettes
- Critères d'échange EPAL
- Pools · supports spéciaux`;

/** Glossaire Module 306 */
const DEMO_306_GLOSSAIRE_FULL = `## Glossaire — Module 306

| Terme technique | Lien | Définition |
| --- | --- | --- |
| CHEP | [EnterSite](#entersite-placeholder) | *Commonwealth Handling Equipment Pool* : pool **fermé** de supports de charge (souvent palettes **bleues**). Les entreprises **louent** les engins ; pas d'échange pièce à pièce — on informe CHEP (nombre, type, destinataire) et on ramène les vides à un point de collecte. |
| EPP | [EnterSite](#entersite-placeholder) | **Pool européen de palettes** (*Europäischer Paletten-Pool*) : système d'échange de palettes (et cadres / couvercles) Euro entre pays participants. Initié par les chemins de fer (CFF 1952, Allemagne 1962) pour simplifier le transport. |
| EPAL | [EnterSite](#entersite-placeholder) | *European Pallet Association* : organisation faîtière des fabricants / réparateurs de supports EPAL. Plus grand pool **ouvert** ; assure la qualité (fabrication et réparation sous marque EPAL) et les critères d'échange. |
| Compte courant pour engins échangeables | | Registre (papier, Excel ou portail) des **entrées et sorties** d'engins échangeables entre partenaires. Le **solde** indique qui doit des palettes à qui (solde négatif = droit aux engins). |
| Pool ouvert | | Système où les participants sont **propriétaires** de leurs engins. Remise ↔ remplacement de même valeur selon un règlement. Trois modes : pièce contre pièce, bon d'échange, compte courant. |
| Fiche d'information sur les critères d'échange | Image | Document / support visuel rappelant les **critères EPAL** (défauts non échangeables : planches, plots, marques…) et le sort des palettes non conformes (refus d'échange, réparation, élimination). |
| Pool fermé | | Système où les engins appartiennent à **une** entreprise propriétaire (ex. **CHEP**, LPR) qui les **loue**. Pas d'échange pièce à pièce ; location + collecte / réparation incluses. |`;

const DEMO_306_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **CHEP** : pool fermé (location, palettes bleues)
- **EPP** : pool européen d'échange Euro
- **EPAL** : qualité / critères du pool ouvert
- **Compte courant** : solde entrées / sorties entre partenaires
- **Pool ouvert** vs **fermé** : propriété + échange vs location
- **Fiche critères d'échange** : rappel des défauts non échangeables`;

/** Mises en situation Module 306 */
const DEMO_306_SITUATION_FULL = `## Mises en situation — Module 306

Contexte : tu travailles à la **réception des marchandises** chez **EnterSite AG**. Tu contrôles les **supports de charge** livrés et gères les **échanges**. Rédige d'abord ta propre réponse, puis utilise le bouton pour afficher ou masquer les solutions / exemples proposés.

### Vue d'ensemble des missions
1. Définir la notion de support de charge
1.1 Supports possibles chez EnterSite
2. Critères d'échange (palette défectueuse)
2.1 Fiche d'information (modèle)
3. Bon d'échange (Word)
3.1 Compte courant Planzer (EnterSite salle 3 V1)
4. Tableau des supports de charge
5. Discussion de la mise en situation

---

## Mission 1 — Définir la notion de support de charge

Actuellement, tu es responsable de la réception des marchandises chez EnterSite AG, et tu es chargé de vérifier les supports de charge livrés et, si nécessaire, de les remplacer. Explique en tes propres termes ce que tu comprends par « **support de charge** ».

:::reponse
Pour le stockage ou le transport, les marchandises sont empilées sur des **supports de charge**. Dans cette optique, la **palette** s'est imposée dans le monde entier. Il n'existe toutefois **pas** de dimensions uniformes pour la palette à l'échelle mondiale.
:::

---

## Mission 1.1 — Supports livrés à EnterSite

Sur la base de tes expériences passées, note les supports de charge sur lesquels les marchandises pourraient être livrées à EnterSite AG. Justifie ton choix.

:::reponse
- **Europalette** — standard le plus courant en Suisse / Europe ; échangeable dans le pool
- **Palette à usage unique** — livraisons ponctuelles ou marchandises légères ; pas d'échange pool
- **Palette CHEP** — palette bleue du pool fermé ; fréquente chez certains fournisseurs
:::

---

## Mission 2 — Critères pour l'échange d'engin

Des marchandises ont été livrées à la réception sur la palette suivante. Le transporteur souhaiterait les échanger. Quelle est ton opinion à ce sujet ? Justifie ta décision.

:::reponse
**Non** — il manque **deux planches**. En conséquence, la palette **n'est pas échangeable**.
:::

---

## Mission 2.1 — Fiche d'information (modèle)

Sur la base de la palette livrée ci-dessus, tu décides d'établir une **fiche d'information** sur laquelle sont consignés les critères d'échange de palettes. Sur cette fiche, tu indiques également ce qu'il advient des palettes qui ne remplissent pas les critères d'échange. Utilise pour cela le modèle.

> **Dépôt de fichiers** : modèle de fiche (Word) + version solution.

:::reponse
**Réponse individuelle** — dépôt de fichier (fiche critères d'échange selon le modèle ; palettes non conformes → refus d'échange / réparation / élimination).
:::

---

## Mission 3 — Bon d'échange (Word)

Un camion de la société **Galliker** se trouve sur le quai. Galliker te livre des marchandises avec les supports de charge suivants :

- 3 palettes EUR type **1**
- 3 cadres échangeables
- 2 couvercles échangeables
- 2 palettes EUR type **6**
- 4 palettes en matière synthétique

Comme tu dois actuellement être un peu économe en engins échangeables, tu décides d'émettre un **bon**. Malheureusement, hier, la dernière copie du bon a été retirée du casier. Comme personne ne peut te dire où trouver le modèle, tu crées toi-même un bon d'échange dans **Word**.

> **Dépôt de fichiers** : bon d'échange palettes (Word).

:::reponse
**Réponse individuelle** — dépôt de fichier (bon d'échange signé : type + nombre d'engins dus ; les palettes synthétiques ne sont en principe **pas** dans le pool Euro).
:::

---

## Mission 3.1 — Compte courant Planzer (EnterSite)

Comme le mois touche à sa fin, ton supérieur hiérarchique te demande de finaliser le relevé des palettes avec la société **Planzer**. Le collègue qui s'est occupé de l'échange des supports de charge au cours des trois dernières semaines n'a pas de compétences en informatique, il a donc tout inscrit sur du papier.

> **Astuce EnterSite** : suis la visite virtuelle dans la salle **3 V1**. Reprends les notes qui ont été déposées pour toi. Cherche l'image sur la droite. Lien : [Vers EnterSite](#entersite-placeholder) (URL à compléter lorsque disponible).

Traite le **compte courant** (modèle Excel) conformément aux notes et informe ton supérieur de la situation du **solde**.

> **Dépôt de fichiers** : modèle Excel + notes PDF + version solution.

:::reponse
**Réponse individuelle** — compte courant mis à jour d'après les notes EnterSite (salle 3 V1) + information du supérieur sur le solde (qui doit des engins à qui).
:::

---

## Mission 4 — Tableau des supports de charge

Ton supérieur a encore une fois besoin de ton aide. Il souhaite que tu établisses un **tableau** des différents supports de charge et moyens auxiliaires utilisés chez EnterSite AG. Pour ce faire, cherche des images et décris-les sur la base des termes du tableau.

| Nr. | Type / moyens auxiliaires | Matériau | Usage unique / réutilisable | Spécificité | Possibilités d'utilisation |
| --- | --- | --- | --- | --- | --- |
| 1 | Palette en tôle d'acier | Acier | Réutilisable | Poids de charge élevé | Construction |
| 2 | Palettes en plastique | Plastique | Réutilisable | Lavable | Alimentation |
| 3 | Palettes empilables | Bois | Réutilisable | Empilable | Logistique générale |
| 4 | Palette à fûts | Acier | Réutilisable | Peut contenir des fûts | Liquides |
| 5 | Pal-Box | Carton | Unique | En carton | Produits légers |
| 6 | Caisse / cadre à claire-voie | Métal | Réutilisable | Avec grille à emboîter | Compactage / fruits-légumes |
| 7 | Boîte métallique | Métal | Réutilisable | Murs fermés | Gravier / vrac |
| 8 | Boîte en bois | Bois | Réutilisable | Pour les aliments | Pommes de terre |
| 9 | Palettes-citernes | Plastique | Réutilisable | Pour les liquides | Liquides |

:::reponse
Voir le tableau ci-dessus (compléter avec images selon consigne).
:::

---

## Mission 5 — Discussion de la mise en situation

Discute de la mise en situation en plénière avec la classe et l'enseignant·e. Note les informations complémentaires.

:::reponse
**Réponse ouverte** — notes de discussion (pas de solution unique).
:::`;

const DEMO_306_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **M1** : support de charge = base d'empilage / transport (ex. palette) ; dims non mondiales
- **M1.1** : Euro · usage unique · CHEP (exemples EnterSite)
- **M2** : planches manquantes → **non échangeable**
- **M2.1** : fiche critères d'échange (fichier modèle)
- **M3** : bon d'échange Word (Galliker)
- **M3.1** : compte courant Planzer · EnterSite salle **3 V1**
- **M4** : tableau 9 supports (acier, plastique, INKA, fûts, Pal-Box…)
- **M5** : discussion plénière`;

/** Exercices de maths Module 306 */
const DEMO_306_MATHS_FULL = `## Exercices de mathématiques — Module 306

Calcule chaque résultat, puis vérifie avec le bouton solution.

### Exercice 1 — Économie sur les palettes

Grâce à un contrôle optimisé à la réception des marchandises d'EnterSite AG, la quantité de palettes échangeables à éliminer et à racheter a diminué de **0,42 %**. L'entreprise échange en moyenne **855** palettes par mois. Avant l'optimisation, **2,2 %** des palettes n'étaient plus échangeables.

Combien peut-on économiser **par trimestre** s'il faut payer **23 CHF** pour l'achat d'une nouvelle palette et **0,20 CHF/kg** pour l'élimination ?

*(Masse d'une palette pour l'élimination : **25 kg**.)*

:::solution
**1'008 CHF**

Calcul :
- Trimestre : 855 × 3 = **2'565** palettes
- Avant optimisation : 2'565 × 2,2 / 100 ≈ **56** palettes
- Après optimisation : 2'565 × 1,78 / 100 ≈ **44** palettes (2,2 − 0,42 = 1,78)
- Réduction : 56 − 44 = **12** palettes
- Économie achat : 12 × 3 × 23 = **828 CHF**
- Économie élimination : 0,20 × 25 × 12 × 3 = **180 CHF**
- **Total : 828 + 180 = 1'008 CHF**
:::

### Exercice 2 — Monte-charge

Le monte-charge a une capacité de charge de **2'300 kg** et peut être utilisé par un chariot à timon. Il peut transporter 3 palettes Euro. Mathis (**80 kg**) a déjà placé **2** palettes de **330 kg** chacune sur le monte-charge. Il doit monter au 3ᵉ étage et charge la dernière palette de **298 kg** et le chariot à timon de **990 kg**.

Peut-il utiliser le monte-charge ?

:::solution
**Oui**

Calcul :
- Charge totale : (2 × 330) + 80 + 298 + 990 = **2'028 kg**
- Capacité : **2'300 kg** → 2'028 < 2'300 → **Oui**, il peut utiliser le monte-charge.
:::

### Exercice 3 — Surfaces de contrôle

Votre fournisseur livre **30** palettes EUR Type **II**. Pour le contrôle complet, vous avez besoin de **50 cm** d'espace libre de chaque côté de la palette et vous faites **3** rangées.

Quelle surface optimale doit être disponible pour que toutes les palettes puissent être contrôlées sans déplacement ultérieur ?

*(EUR Type II = **1 200 × 1 000 mm**.)*

:::solution
**86,8 m²** (orientation transversale) · **87,5 m²** (orientation longitudinale)

Calcul (30 palettes = 10 × 3) :

**Palettes en transversal** (côté 1,2 m sur la largeur) :
- Largeur : 0,5 + 1,2 + 0,5 + 1,2 + 0,5 + 1,2 + 0,5 = **5,6 m**
- Longueur : (10 × 1) + (0,5 × 11) = **15,5 m**
- Surface : 15,5 × 5,6 = **86,8 m²**

**Palettes en longitudinal** (côté 1,0 m sur la largeur) :
- Largeur : 0,5 + 1 + 0,5 + 1 + 0,5 + 1 + 0,5 = **5 m**
- Longueur : (10 × 1,2) + (0,5 × 11) = **17,5 m**
- Surface : 5 × 17,5 = **87,5 m²**
:::

### Exercice 4 — Gain de surface

Nous avons signé un accord avec notre fournisseur pour que les contrôles complets soient faits chez lui avant de nous livrer. Quand les **30** palettes EUR Type II arrivent dans notre entreprise, elles sont stockées **en blocs** en attendant de leur attribuer une place dans l'entrepôt.

Combien de m² gagne-t-on sur la surface d'entreposage en n'ayant plus de contrôle complet à faire ?

:::solution
**50,8 m²**

Calcul :
- Bloc : 3 lignes × 10 palettes → Long. 10 × 1 = **10 m** · Larg. 3 × 1,2 = **3,6 m**
- Surface du bloc : 10 × 3,6 = **36 m²**
- Gain : 86,8 − 36 = **50,8 m²**
:::

> **Contrôle rapide (ordre du corrigé)** : 86,8 · 1'008 · Oui · 50,8`;

const DEMO_306_MATHS_SUMMARY = `## Maths — Solutions
1. **1'008 CHF** (économies achat + élimination / trimestre)
2. **Oui** (2'028 kg < 2'300 kg)
3. **86,8 m²** / **87,5 m²** (transversal / longitudinal)
4. **50,8 m²** (86,8 − 36)`;

/** Vérification des acquis Module 306 */
const DEMO_306_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Thème : **Module 306 — Contrôle des supports de charge**. Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

Note les dimensions (L × l × h) en mm et le poids de la palette EURO de type **I**.

:::reponse
Longueur **1 200 mm**, largeur **800 mm**, hauteur **144 mm**, poids **22 kg**.
:::

### Question 2

Nomme ce support de charge et décris son domaine d'utilisation.

:::reponse
**Conteneur à roues (rollcontainers)** — domaine : **approvisionnement des filiales** (petits lots, courts trajets).
:::

### Question 3

Quelles sont les normes de qualité applicables aux palettes échangeables ? Notez les **huit** normes connues.

:::reponse
1. Marque **EPAL**
2. Marquage d'un **réseau ferré européen**
3. Marque **EUR** (ou pool EPAL)
4. **Plan de cloutage** standardisé
5. Planches de rive **chanfreinées**
6. Pas de traces de **moisissures**
7. **Agrafe** de contrôle de la qualité avec marque EPAL
8. Après réparation : **clou de réparation** avec marque EPAL
:::

### Question 4

Explique la différence entre un pool **ouvert** et un pool **fermé** et citez un exemple de produit pour chacun.

:::reponse
**Pool ouvert** : les membres sont **propriétaires** de leurs palettes. Chaque membre qui transmet un engin échangeable reçoit en contrepartie quelque chose d'**équivalent**. Ex. : palette **Euro / EPAL**.

**Pool fermé** : les entreprises membres **ne sont pas** propriétaires des supports de charge. Elles les **louent**. Une entreprise (**CHEP**, LPR…) achète les équipements et les met à disposition contre rémunération. Ex. : palette **bleue CHEP**.
:::

### Question 5

Quelles sont les **trois** possibilités d'échange de palettes ? Décris en quelques phrases la fonction de chaque type d'échange.

:::reponse
1. **Échange standard (pièce contre pièce)** : si je reçois trois palettes en bon état, je rends trois palettes au chauffeur.
2. **Échange contre bon** : si je ne dispose pas d'assez de palettes vides, je rédige un bon indiquant le type et le nombre d'engins dus. La **signature** d'un collaborateur rend le bon valable.
3. **Compte courant pour engins échangeables** : registre (souvent électronique) des entrées et sorties d'engins entre un fournisseur et un client ; le **solde** indique qui doit des palettes à qui.
:::`;

const DEMO_306_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. Euro I : **1200 × 800 × 144 mm**, **22 kg**
2. **Rollcontainers** — approvisionnement des filiales
3. 8 normes EPAL (marques, cloutage, chanfreins, moisissure, agrafe, clou réparation)
4. Ouvert = propriété + échange (Euro) · Fermé = location (CHEP)
5. Pièce/pièce · bon signé · compte courant`;

/** Contenu Module 307 — Contrôle sommaire et traitement des dommages */
const DEMO_307_THEORIE_FULL = `## 7. Contrôle sommaire et traitement des dommages

Erreurs et dommages ne sont pas rares en logistique. Il faut les **reconnaître**, en analyser les **causes** et améliorer le **taux d'erreur**.

### 7.1 Erreur dans la livraison

Les contrôles d'identification globale et détaillée (module **304**) doivent déjà faire ressortir défauts et erreurs.

#### 7.1.1 Mauvais destinataire

Livraison non destinée à EnterSite → l'identification **globale** doit l'éviter. Sinon : temps et coûts inutiles.

Prévention : adresses et contacts clairs (interne + transversal) entre expéditeur, transporteur et destinataire.

**Remarque :** risque accru pour les entreprises à **plusieurs succursales**.

#### 7.1.2 Marchandises incorrectes

Bon destinataire ≠ bon contenu. Expéditeur : **double contrôle** ou **scanners**. Destinataire : identification **détaillée**.

#### 7.1.3 Mauvaise quantité

Aussi une erreur de livraison. Le scanner « mauvaise marchandise » ne suffit pas toujours pour la quantité — surtout petites pièces en grandes quantités. Outils → module **308**.

#### 7.1.4 Différence qualitative

Dommages transport / influences extérieures : déchirures, bosses, déformations ; papier/humidité, etc. Livraison « correcte » sans la qualité attendue = erreur. Garantie qualité → module **309**.

**Remarque :** contenants endommagés = aussi anomalie qualitative (empêchent la vente).

#### 7.1.5 Livraison tardive

Date convenue liée à production / livraison client. Non-respect → annulation possible, image dégradée, coûts ↑.

#### 7.1.6 Taux d'erreur et conséquences

Accord qualité fournisseur–client : **taux d'erreur** toléré (selon valeur/importance des articles) + conséquences (jusqu'à **pénalité**). Chaque erreur est de trop ; impact image possible. Le **taux d'erreur de livraison** est un chiffre-clé (approfondi en stockage).

### 7.2 Dégâts

Première vision (identification globale) : chargement déplacé / palettes renversées → contraintes fortes, dommages probables. Dommages **climatiques** (humidité, température) moins évidents — surtout en international ; bureaux de contrôle qualité si besoin.

Suremballage de transport protège l'emballage de **vente**. Emballage de vente déjà endommagé → souvent **non présenté** en point de vente.

#### 7.2.1 Emballages endommagés durant le transport

Distinguer **suremballage** et **emballage de vente**.

| Aspect | Interprétation |
| --- | --- |
| **Déchiré** | Contenu souvent endommagé ; emballage de vente abîmé → impropre à la vente |
| **Taché** | Tache de l'intérieur = casse → inutilisable ; de l'extérieur = parfois OK pour suremballage, pas pour emballage de vente |
| **Écrasé / cabossé** | Vérifier le contenu ; emballage de vente → **refuser** |

#### 7.2.2 Moyens auxiliaires pour détecter les dommages

Produits coûteux/délicats : indicateurs et enregistreurs pour chocs, basculement, froid, etc. Preuves pour assurance : **photos** et/ou **données**. Enjeu aussi : confiance client / réputation.

**Indicateur de basculement**
- Sable de quartz bleu : activer en retirant la séparation ; inclinaison ~**60°** → sable visible
- Billes de verre : la bille se déplace et reste collée selon l'angle

**Indicateur de choc**  
Tube verre + liquide rouge : chute/choc anormal → coloration **irréversible** du tube central.

**Indicateur de température**  
Chaîne du froid critique ; dégâts peu visibles. Points de couleur → rouge si température dépassée.

**Utilisation en 5 étapes :**
1. Appliquer l'indicateur sur l'emballage
2. Transporteur confirme l'intégrité à la prise en charge
3. Réception vérifie à la livraison
4. Transporteur confirme indicateur déclenché ou manquant
5. Examen du produit → libération ou traitement du sinistre

**Infrarouge**  
Mesure rapide de température **instantanée** — ne reconstitue pas l'historique du transport.

**Enregistreurs numériques**  
Température, humidité, inclinaison, chocs en continu ; seuils ; app mobile. Usages exigeants : musées, pharma, médical…

### 7.3 En cas de dommage

Signalement **immédiat** au supérieur ; documentation selon directives (formulaire de constatation). Photos sous tous les angles → jointes au protocole.

#### 7.3.1 Comportement selon le mode de livraison

**Transport accompagné**
- **Camion** : constater avec le chauffeur ; signature sur formulaire ; transmission au fournisseur
- **Courrier / coursier** : déclaration de dommage (formulaire + délais selon prestataire) ; **conserver** l'envoi jusqu'à fin d'enquête

**Transport non accompagné**
- **Ferroviaire** : signaler au gestionnaire d'événements ferroviaires de la région (constat sur place)
- **Conteneur par camion** : signaler transporteur/fournisseur ; parfois **interrompre** le déchargement jusqu'à évaluation

#### Protocole des dégâts

Mise en page libre ; contenu correct + **visa du transporteur** indispensables. Joindre **photos** + bon de transport / livraison traité.`;

const DEMO_307_THEORIE_SUMMARY = `## À retenir — Module 307

### Erreurs de livraison
Mauvais destinataire · mauvaises marchandises · mauvaise quantité · qualité · retard  
Prévention : ID globale/détaillée, double contrôle, scanners  
Accord qualité → taux d'erreur toléré + pénalités possibles

### Dégâts emballage
Suremballage ≠ emballage de vente  
Déchiré / taché / écrasé → vérifier contenu ; vente abîmée → refus

### Indicateurs
Basculement · choc · température (+ infrarouge instantané · enregistreurs)  
5 étapes : poser → confirmer départ → contrôler arrivée → confirmer anomalie → libérer/traiter

### En cas de sinistre
Supérieur + formulaire + photos  
Accompagné : signature chauffeur / déclaration coursier  
Non accompagné : rail (gestionnaire) · conteneur (attendre consignes)  
Protocole + visa transporteur`;

const DEMO_307_APERCU_FULL = `## Aperçu du module 307

Ce module traite du **contrôle sommaire** : types d'erreurs de livraison, constatation des dégâts, indicateurs de transport et comportement en cas de sinistre.

### Vous allez découvrir
1. Erreurs : destinataire, marchandise, quantité, qualité, retard
2. Taux d'erreur et accords qualité
3. Emballages endommagés (suremballage vs vente)
4. Indicateurs (basculement, choc, température) et enregistreurs
5. Protocole de dégâts selon le mode de livraison

### Source
EnterSite — Logistics by ASFL / SVBL · Suite des modules 304–306`;

const DEMO_307_APERCU_SUMMARY = `## Aperçu — Module 307
- Types d'erreurs de livraison
- Dégâts & indicateurs
- Protocole / comportement sinistre`;

const DEMO_307_OBJECTIFS_FULL = `## Objectifs du module 307

À l'issue de ce module, l'apprenti·e est capable de :

- Citer les principaux types d'**erreurs de livraison** et comment les détecter
- Distinguer dommages sur suremballage et emballage de **vente**
- Expliquer le rôle des **indicateurs** (basculement, choc, température) et des enregistreurs
- Appliquer la procédure en **5 étapes** et le comportement en cas de **sinistre** (protocole, photos, signatures)`;

const DEMO_307_OBJECTIFS_SUMMARY = `## Objectifs
- Erreurs de livraison
- Dégâts & indicateurs
- Protocole sinistre`;

/** Glossaire Module 307 */
const DEMO_307_GLOSSAIRE_FULL = `## Glossaire — Module 307

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Protocole de dégâts | | Document de **constatation des dégâts** (mise en page libre) décrivant la nature et l'ampleur des dommages, avec **photos**, bon de transport/livraison traité et **visa du transporteur**. Sert de preuve pour le fournisseur et l'assurance. |
| Indicateur | | Dispositif apposé sur l'emballage pendant le transport pour **détecter** et **prouver** des anomalies (choc, basculement, température…). Vérifié à la prise en charge et à la réception. |
| Dommages | | Atteintes aux marchandises ou emballages pendant le **transport** ou la **manutention** (déchirures, bosses, fuites, influences climatiques…). À documenter immédiatement (photos, protocole, signature transporteur si présent). |
| Thermomètre infrarouge | | Appareil **à infrarouge** permettant de mesurer la **température instantanée** à l'arrivée (sans contact). Ne reconstitue pas l'historique du transport — utile en complément des indicateurs/enregistreurs. |
| Indicateur de basculement | | Indicateur mesurant l'**inclinaison** pendant le transport (ex. sable de quartz ou billes de verre). Se déclenche au-delà d'un angle critique (~60°) → preuve de basculement anormal. |
| Indicateur de choc | | Indicateur mesurant les **secousses**, **chocs** ou contraintes dues aux chutes (tube en verre + liquide coloré). Coloration **irréversible** en cas de choc anormal. `;

const DEMO_307_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **Protocole de dégâts** : constat + photos + visa transporteur
- **Indicateur** : preuve d'anomalie transport (poser · contrôler départ/arrivée)
- **Dommages** : atteintes transport/manutention → documenter tout de suite
- **Thermomètre infrarouge** : température instantanée à l'arrivée
- **Basculement** : inclinaison · **Choc** : secousses / chutes`;

/** Mises en situation Module 307 */
const DEMO_307_SITUATION_FULL = `## Mises en situation — Module 307

Contexte : tu travailles à la **réception** chez **EnterSite AG** et formes un **nouveau collègue**. Les missions portent sur les **sources d'erreur**, la **détection des dommages** et le **traitement des sinistres**. Rédige d'abord ta propre réponse, puis utilise le bouton pour afficher ou masquer les solutions / exemples proposés.

### Vue d'ensemble des missions
1. Sources d'erreur à la réception
1.1 Autres signes de marchandises défectueuses
2. Moyens auxiliaires de détection des dommages
3. Procédure selon le mode de transport
4. Établir un protocole de dégâts
5. Discussion de la mise en situation

---

## Mission 1 — Identifier les sources d'erreur

Beaucoup de travail t'attend à la réception. Tu formes un collègue qui découvre le métier. Des erreurs et dommages sont fréquents à la réception.

Décris les différentes **sources d'erreur** auxquelles il doit être particulièrement attentif.

:::reponse
- **Mauvais destinataire** (livraison non destinée à EnterSite)
- **Mauvaise marchandise** (articles incorrects)
- **Mauvaise quantité** (trop/peu de pièces ou colis)
- **Non-conformité qualitative** (qualité insuffisante, dommages produit)
- **Emballages endommagés** (suremballage ou emballage de vente abîmé)
:::

---

## Mission 1.1 — Autres signes sans déplacer une palette

En ouvrant le pont de chargement, vous découvrez une palette fortement endommagée. Ton collègue demande s'il existe d'autres signes de marchandises défectueuses **sans déplacer une palette entière**.

:::reponse
- Emballages qui ne sont plus en bon état (**déchirés**, **bosselés**, **enfoncés**)
- Emballages **tachés** → fuites de liquides possibles
- Dommages **climatiques** (température, humidité) : très difficiles à détecter de l'extérieur → outils comme un **indicateur de température** ou un thermomètre infrarouge
:::

---

## Mission 2 — Moyens auxiliaires de détection

Tu expliques que des dommages peuvent être détectés avec des **outils** même sans signe évident au premier abord. Cite quelques moyens auxiliaires et leur fonction.

| Moyens auxiliaires | Fonction / description |
| --- | --- |
| … | … |

:::reponse
| Moyens auxiliaires | Fonction / description |
| --- | --- |
| **Indicateur de basculement** | Mesure l'**inclinaison** pendant le transport |
| **Indicateur de choc** | Mesure les **secousses**, chocs ou contraintes dues aux chutes |
| **Indicateur de température** | Mesure la **température** pendant le transport |
| **Appareils à infrarouge** | Mesurent la température **à l'arrivée** (instantanée) |
| **Enregistreurs numériques** | Enregistrent les données en **temps réel** pendant le transport (température, humidité, chocs…) |
:::

---

## Mission 3 — Procédure en cas de dommage

EnterSite AG reçoit des marchandises de différents fournisseurs. Le traitement des dommages varie selon le **transporteur**. Que fais-tu dans ces situations ?

| Transporteurs | Mesures à prendre en cas de dommage |
| --- | --- |
| Poste / coursier | … |
| Camion | … |
| Train | … |

:::reponse
| Transporteurs | Mesures à prendre en cas de dommage |
| --- | --- |
| **Poste / coursier** | Déclaration de dommage avec le formulaire « Déclaration de dommage ». Délai et procédure selon le prestataire. **Conserver** l'envoi endommagé jusqu'à la fin de l'enquête. |
| **Camion** | Constat en **présence du conducteur**. Il **signe** le formulaire de constatation. L'entreprise transmet le document au **fournisseur**. Le chauffeur décide s'il informe son entreprise. |
| **Train** | Signaler au **gestionnaire d'événements ferroviaires** de la région (wagon ou conteneur) pour déterminer sur place la nature et l'ampleur des dommages. |
:::

---

## Mission 4 — Établir un protocole de dégâts

Tu dois rédiger un **constat des dégâts** pour la livraison de la commande 1.1 (palette endommagée). Tu peux inventer librement les données manquantes.

> **Dépôt de fichiers** : constat de dégât (PDF) selon le modèle fourni.

:::reponse
**Réponse individuelle** — dépôt du protocole de dégâts (description, photos, date, références commande/transport, visa transporteur si applicable).
:::

---

## Mission 5 — Discussion de la mise en situation

Discute de la mise en situation en plénière avec la classe et l'enseignant·e. Note les informations complémentaires.

:::reponse
**Réponse ouverte** — notes de discussion (pas de solution unique).
:::`;

const DEMO_307_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **M1** : 5 sources d'erreur (destinataire · marchandise · quantité · qualité · emballage)
- **M1.1** : signes visibles + indicateurs température
- **M2** : basculement · choc · température · infrarouge · enregistreurs
- **M3** : coursier (déclaration + conserver) · camion (signature) · train (gestionnaire)
- **M4** : protocole de dégâts (fichier)
- **M5** : discussion plénière`;

/** Exercices de maths Module 307 */
const DEMO_307_MATHS_FULL = `## Exercices de mathématiques — Module 307

Calcule chaque résultat, puis vérifie avec le bouton solution.

### Exercice 1 — Tolérance de poids (cartouches d'encre)

Poids visé au remplissage : **540 g** par cartouche. Tolérance acceptée : **−2 %** et **+3 %**.

Quelle **fourchette de poids** (en grammes) est acceptée au contrôle final ?

:::solution
**529,2 g à 556,2 g**

Calcul :
- Tolérance négative : 540 × 98 / 100 = **529,2 g**
- Tolérance positive : 540 × 103 / 100 = **556,2 g**
:::

### Exercice 2 — Cartouches défectueuses

Lors du remplissage, **1 cartouche sur 14** est défectueuse et ne peut pas être mise en stock.

Combien de cartouches ne peuvent **pas** être stockées si l'on contrôle **2'000** pièces ?

:::solution
**143 cartouches**

Calcul : 2'000 / 14 = 142,857… → **143 cartouches** défectueuses (arrondi supérieur selon consigne).
:::

### Exercice 3 — Limite de taux de perte

Le taux de perte doit être **inférieur à 3,2 %** (sur 2'000 cartouches contrôlées).

Combien de cartouches peuvent être défectueuses au maximum ?

:::solution
**63 cartouches**

Calcul : 2'000 × 3,2 / 100 = **64 cartouches** (= 3,2 %)  
Taux **inférieur** à 3,2 % → maximum **63 cartouches** défectueuses.
:::

### Exercice 4 — Taux d'erreur fournisseur

EnterSite se fournit chez **98** fournisseurs. Sur **780** livraisons/an, le plus gros fournisseur représente **30 %** des livraisons. Sur son total, **27** livraisons comportaient des erreurs.

a) Combien de livraisons cela représente-t-il ?  
b) Quel est le **taux d'erreur** de ce fournisseur ?

:::solution
a) **234 livraisons** — 780 × 30 / 100 = 234

b) **11,53 %** — 27 / 234 × 100 = 11,5385… ≈ **11,53 %**

Formule : nombre d'erreurs / nombre total de livraisons × 100
:::

> **Contrôle rapide (ordre du corrigé)** : 529,2 · 234 · 143 · 556,2 · 63 · 11,53`;

const DEMO_307_MATHS_SUMMARY = `## Maths — Solutions
1. **529,2 – 556,2 g** (−2 % / +3 % de 540 g)
2. **143** cartouches (2'000 / 14)
3. **63** cartouches (< 3,2 % de 2'000)
4. **234** livraisons · **11,53 %** d'erreurs (27/234)`;

/** Vérification des acquis Module 307 */
const DEMO_307_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Thème : **Module 307 — Identification globale et règlement des dommages**. Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

Donne la **formule** pour calculer le taux d'erreurs de livraisons.

:::reponse
**Nombre d'erreurs de livraison / nombre total de livraisons × 100**
:::

### Question 2

Qu'est-ce qu'une livraison **excédentaire** ?

:::reponse
Livraison pour laquelle la quantité livrée est **supérieure** à la quantité attendue et/ou indiquée sur le bulletin de livraison **hors de la tolérance** acceptée.
:::

### Question 3

Par quelles **mesures** le destinataire peut-il éviter de recevoir des marchandises erronées ?

:::reponse
- Contrôler que les marchandises nous sont bien **destinées** (identification **globale** : adresse, documents)
- Vérifier qu'il s'agit bien des **marchandises attendues** (identification **détaillée** : fournisseur, articles, quantités)
- Utiliser des **scanners** et contrôles visuels rigoureux
- Maintenir des **adresses et contacts clairs** entre expéditeur, transporteur et destinataire
:::

### Question 4

Qu'est-ce qu'une livraison **incomplète** ?

:::reponse
Livraison pour laquelle il **manque** une certaine quantité par rapport à la quantité indiquée sur le bulletin de livraison **hors de la tolérance** acceptée.
:::

### Question 5

Comment le **fournisseur** peut-il éviter les livraisons incomplètes ?

:::reponse
- Attribuer clairement des **numéros d'article**
- Effectuer un **contrôle visuel sérieux** avant expédition
- Indiquer le plus clairement possible la **désignation** et les quantités sur le **bulletin de livraison**
- Mettre en place un **double contrôle** ou des scanners en préparation
:::`;

const DEMO_307_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. Erreurs / total livraisons × 100
2. Excédentaire = quantité > attendue hors tolérance
3. ID globale + détaillée · scanners · contacts clairs
4. Incomplète = quantité manquante hors tolérance
5. N° articles · contrôle visuel · bulletin clair · double contrôle`;

/** Contenu Module 308 — Contrôles de quantités */
const DEMO_308_THEORIE_FULL = `## 8. Les contrôles de quantités

Compter, mesurer et peser sont des contrôles centraux dans le transport de marchandises. En Europe : système **décimal**. Autres unités encore utilisées (douzaine, pint, etc.).

**Exemples d'unités :**
- Baril (USA) : 158,8 l pétrole
- Gallon USA : 3,79 l · Gallon GB : 4,55 l
- Douzaine : 12 · Grosse : 144 (12×12)
- Inch : 2,54 cm
- Carat : 0,2 g
- Paire : 2
- Pint (GB) : 0,568 l
- Shipping ton (US) : 1,132 m³
- TB / TJB : taille de navire
- **TEU** : conteneur 20 pieds

### 8.1 Mesurer

Souvent longueur / largeur / hauteur. Autrefois : pied, pas, coude…  
**1 pied = 0,3048 m**

1791 : Assemblée nationale française → mesures uniformes ; mètre = 1/10 000 000 de la distance Pôle Nord–Équateur. **Convention du mètre** (1875) : Suisse parmi les 17 signataires ; aujourd'hui 51 membres + 26 associés. Mètre étalon (platine-iridium) à Paris (1799).

### 8.2 Techniques de comptage

Compétences numériques + **quantités partielles** pour éviter de tout compter pièce à pièce.

Ex. : 1536 pièces en cartons de 12 → 128 cartons × 12 (échantillon du contenu carton). Encore plus simple avec 3 niveaux : pièces/carton × cartons/couche × couches.

Ex. simple : 8 pièces/couche × 4 couches = **32**  
Ex. complexe : 2×12 + 1×27 + 3×(4×21) = **303**

#### 8.2.1 Compteur manuel

Bouton + affichage cumulatif — grandes quantités sur la durée (ex. visiteurs).

#### 8.2.2 Mesure des longueurs (quotidien / travail)

Mètre courant suffit souvent. **Compteur métrique** (fils, câbles…) ; souvent remplacé par **laser**. Roue de mesure + compteur pour câbles/cordes ; confection automatique chez producteurs.

#### 8.2.3 Accessoires de mesure des longueurs (précision)

Mètres pliants/rubans parfois imprécis (plusieurs mm/m). Qualité : classe de précision **DIN 866** (I–III).

- **Pied à coulisse** (calibre) : épaisseur, diamètre, profondeur · ~1/10 mm
- **Micromètre** (palmer) : 0,01 mm à 1/1000 mm · matériaux fins · fragile
- **Gabarit / chablon** : Poste (tarifs lettres), contrôle vis, tolérances

#### 8.2.4 Mesure des volumes

Récipient jaugé ; stations-service : compteur mécanique/électronique.

- **Pompe à piston** : aspiration/refoulement ; compteur × volume cylindre
- **Débitmètre** : débit liquide/gaz ; aussi ultrasons
- **Scanner volumétrique** : dimensions emballages/palettes → entrée marchandises, emplacements, chargement transport

#### 8.2.5 Mesure du poids

Poids lié à la gravité (Lune ~6× plus faible). Unité de force : **newton (N)** ; langage courant : « poids ».

Deux principes :
1. **Comparaison des masses** (avec poids connu)
2. **Dynamomètre** (mesure directe de la force)

**Balances de comparaison**
- **Bras égaux** : levier ; poids normalisés jusqu'à équilibre
- **Romaine** : bras inégaux ; contrepoids mobile + échelle

**Dynamomètre / balances à ressort**
- Force contre ressort ; sensible à la gravité locale → calibrer sur lieu d'usage ; ressort s'use → poids trop élevés
- Dynamomètres de traction (grues) : marchandises suspendues, jusqu'à plusieurs tonnes

#### 8.2.6 Balances professionnelles

| Type | Usage |
| --- | --- |
| **Balance de table** | Petites marchandises · bureau, petites pièces, sortie |
| **Balance compteuse** | Poids de référence (ex. 10 pces) → calcule le nombre total · inventaires (vis, clous…) |
| **Plate-forme de pesage** | Charges importantes · sol ou rampe · **ne pas rester** sur la balance ; retirer le véhicule après dépôt (sans tarage préalable du véhicule) |
| **Pèse-palettes** | Adapté palettes · moyen de transport non pesé · aussi intégré convoyeurs |
| **Manutention + pesage** | Transpalette/chariot avec écran · systèmes embarqués camions |
| **Pont-bascule** | Camions/wagons · poids total − tare véhicule = charge · douanes, gares, transbordement… |

### 8.3 Utilisation des balances

Règles :
- Instruments de précision : propres, entretien par spécialistes ; ne pas toucher au mécanisme
- Respecter charge **max** (et parfois min) ; ponts-bascules : pas toujours adaptés aux chariots
- Mode d'emploi ; balances électroniques : **préchauffage** ; souvent laisser allumées la journée

#### 8.3.1 Tarer et calibrer

- **Tarer** : mettre à zéro avec emballage vide → peser sans compter la **tare** (poids emballage)
- **Calibrer** : remettre à zéro avant usage (sol, déséquilibre, nouveau lieu / gravité). Sans conséquence financière → possible sans officier

#### 8.3.2 Obligation de vérification

**Cst. art. 125** : métrologie = Confédération → **loi fédérale sur la métrologie**. Contrôles périodiques par **vérificateur** ; marque d'identification. Non vérifié → mention « non vérifié officiellement ».

Plombs de contrôle : ne pas endommager ; manquants/endommagés → signaler + **mettre hors service**.

**Soumis à vérification (ex.) :** douanes · pompes à essence vente. Tolérance type : > 2 l → écart max **0,5 %**.

**Non soumis (ex.) :** ravitaillement interne entreprise · mélanges process · remplissage emballages finaux.`;

const DEMO_308_THEORIE_SUMMARY = `## À retenir — Module 308

### Unités
Décimal + baril, gallon, douzaine, inch, pint, TEU…

### Compter / mesurer
Quantités partielles (couches × cartons × pièces)  
Compteur manuel · mètre / laser · DIN 866 · pied à coulisse · micromètre · gabarit  
Volumes : pompe piston, débitmètre, scanner volumétrique

### Peser
Comparaison de masses vs dynamomètre  
Table · compteuse · plate-forme · pèse-palettes · embarqué · pont-bascule  
**Tarer** = soustraire emballage · **Calibrer** = remettre à zéro  
Vérification fédérale + plombs · tolérances`;

const DEMO_308_APERCU_FULL = `## Aperçu du module 308

Ce module traite des **contrôles de quantités** : compter, mesurer et peser — unités, techniques et instruments utilisés en logistique.

### Vous allez découvrir
1. Unités décimales et étrangères (TEU, gallon…)
2. Techniques de comptage par quantités partielles
3. Mesure longueurs / volumes (pied à coulisse, micromètre, débitmètre…)
4. Types de balances professionnelles
5. Tarage, calibrage et obligation de vérification (métrologie CH)

### Source
EnterSite — Logistics by ASFL / SVBL · Suite du module 307`;

const DEMO_308_APERCU_SUMMARY = `## Aperçu — Module 308
- Compter / mesurer / peser
- Instruments & balances
- Tarer · calibrer · vérification`;

const DEMO_308_OBJECTIFS_FULL = `## Objectifs du module 308

À l'issue de ce module, l'apprenti·e est capable de :

- Utiliser des **unités** courantes et des techniques de comptage par quantités partielles
- Choisir des outils de **mesure** (longueurs, volumes) adaptés
- Distinguer les principaux types de **balances** et leur usage
- Expliquer **tarage**, **calibrage** et l'**obligation de vérification** en Suisse`;

const DEMO_308_OBJECTIFS_SUMMARY = `## Objectifs
- Unités & comptage
- Mesure & balances
- Tarer / calibrer / vérification`;

/** Glossaire Module 308 */
const DEMO_308_GLOSSAIRE_FULL = `## Glossaire — Module 308

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Pied à coulisse | | Instrument de mesure de **précision** (calibre) pour l'**épaisseur**, le **diamètre** ou la **profondeur** d'un objet (ex. longueur et diamètre d'une vis). Précision de l'ordre du **1/10 mm**. |
| Balance à bras égaux | | Balance fonctionnant selon la **loi du levier** : l'objet à peser est placé sur un plateau, des **poids normalisés** sont ajoutés sur l'autre plateau jusqu'à l'**équilibre**. |
| Dynamomètre | | Instrument mesurant directement une **force** (ressort). Utilisé pour la pesée par déformation d'une ressort ou pour la **traction** (grues). Sensible au lieu d'utilisation (gravité) ; la ressort s'use avec le temps. |
| Balance compteuse | | Balance déterminant le **nombre de pièces** à partir d'un **poids de référence** (ex. 10 pièces pesées) puis comparaison avec le poids total. Idéale pour inventaires (vis, boulons, clous…). |
| Tare | | Poids de l'**emballage** ou du contenant vide. Le **tarage** (mise à zéro avec emballage) permet d'obtenir le **poids net** de la marchandise sans compter l'emballage. |
| Calibrage | | Remise à **zéro** de la balance avant utilisation (sol non idéal, déséquilibre, nouveau lieu / influence de la gravité). Peut être fait **sans officier** si le résultat n'a pas de conséquence financière directe. |
| Étalonnage | | Contrôle **officiel** périodique des instruments de mesure selon la **loi fédérale sur la métrologie** (art. 125 Cst.). Effectué par un **vérificateur** ; instruments vérifiés reçoivent un **signe distinctif**. Sinon : mention « non vérifié officiellement ». |
| Balance multitêtes | | Balance professionnelle avec **plusieurs plateaux** ou **têtes de pesage** (multitêtes), permettant de peser différentes unités ou postes de travail sur une même installation — utile en réception pour pièces légères et charges moyennes. `;

const DEMO_308_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **Pied à coulisse** : diamètre · longueur · profondeur (~0,1 mm)
- **Bras égaux** : levier + poids normalisés
- **Dynamomètre** : force / ressort (traction possible)
- **Balance compteuse** : poids référence → nombre de pièces
- **Tare** : poids emballage · tarer = zéro avec emballage
- **Calibrage** : remise à zéro (usage courant)
- **Étalonnage** : vérification officielle (métrologie)
- **Multitêtes** : plusieurs plateaux / têtes de pesage`;

/** Mises en situation Module 308 */
const DEMO_308_SITUATION_FULL = `## Mises en situation — Module 308

Contexte : tu es affecté·e au **contrôle détaillé** à la réception chez **EnterSite AG**. Les missions portent sur les **outils de mesure**, de **pesage** et de **comptage**. Rédige d'abord ta propre réponse, puis utilise le bouton pour afficher ou masquer les solutions / exemples proposés.

### Vue d'ensemble des missions
1. Énumérer les outils de mesure
2. Décrire les outils de mesure (vis — dimensions)
2.1 Résultats de mesure · 2.2 Alternatives
3. Outils de pesage et de comptage
3.1 Étalonnage vs calibrage · 3.2 Utilisation professionnelle · 3.3 Comptage · 3.4 Tolérance
4. Mesurer les liquides (fûts)
4.1 Calcul du volume · 4.2 EnterSite salle 3 V3
5. Discussion de la mise en situation

---

## Mission 1 — Énumérer les outils de mesure

Tu es chargé·e du contrôle détaillé à la réception. Quels **outils de mesure** connais-tu sur ce thème ?

:::reponse
**Réponse individuelle** — ex. : pied à coulisse, micromètre, gabarit, mètre ruban, balance compteuse, balance de table, pompe à piston, pont-bascule, compteur manuel…
:::

---

## Mission 2 — Contrôle des dimensions (vis)

Des vis commandées en Chine doivent être contrôlées (dimensions + échantillonnage). Le **diamètre** et la **longueur** doivent être vérifiés.

Choisis un outil et décris en détail ses **avantages**.

:::reponse
**Pied à coulisse** — convient pour mesurer précisément les dimensions des vis.

Lors du contrôle d'une vis, plusieurs valeurs comptent : **longueur**, **diamètre** et **pas de vis**. La méthode dépend aussi de la forme (tête hexagonale, tête ronde, etc.). Le pied à coulisse permet des mesures directes avec une bonne précision (~1/10 mm).
:::

---

## Mission 2.1 — Résultats de mesure

Les mesures effectuées donnent les résultats suivants :

- **78,45 mm**
- **23,60** (mm — diamètre ou autre dimension selon le plan)

:::reponse
**Réponse individuelle** — consigner les valeurs mesurées et les comparer aux **tolérances** / cotes du plan fournisseur (longueur, diamètre, pas de filetage).
:::

---

## Mission 2.2 — Autres instruments de mesure

D'autres instruments conviendraient-ils comme **alternative** pour le contrôle des dimensions des vis ?

:::reponse
- **Gabarit** ou **jauge de filetage** : résultats **rapides** si la précision maximale n'est pas exigée
- **Gabarit de filetage** : contrôle **précis** du filetage (pas, profil)
- **Micromètre** : très haute précision pour diamètres fins (alternative au pied à coulisse)
:::

---

## Mission 3 — Balance de comptage

Il faut contrôler le **nombre de pièces** par échantillonnage avec la balance de comptage **récemment étalonnée**. Laquelle choisis-tu ?

:::reponse
**Réponse individuelle** — choisir la **balance compteuse** adaptée (charge max, précision, affichage en **nombre de pièces** après saisie du poids de référence). Vérifier le **signe de vérification** / étalonnage officiel si usage commercial.
:::

---

## Mission 3.1 — Étalonner ou calibrer ?

Explique ce que tu sais à ce sujet.

:::reponse
**Étalonnage (vérification officielle)**  
Sur la base de la **loi fédérale sur la métrologie** (art. 125 Cst.), le bon fonctionnement et l'indication correcte des instruments doivent être contrôlés **à intervalles réguliers** par un **vérificateur** (personne officielle). Les instruments vérifiés reçoivent un **signe distinctif**. Sinon : mention « **non vérifié officiellement** ».

**Calibrage**  
Remise à **zéro** avant utilisation (sol, déséquilibre, nouveau lieu / gravité). La balance peut afficher 0,1–0,2 kg sans charge. Le calibrage peut être fait **sans officier** lorsque le résultat n'a **pas de conséquence financière** directe.
:::

---

## Mission 3.2 — Utilisation professionnelle des balances

Donne les règles pour obtenir des résultats de mesure **corrects**.

:::reponse
- Balances = instruments de **précision** : propres, entretien par **spécialiste** ; ne pas toucher au mécanisme
- Respecter la charge **maximale** (et parfois **minimale**) ; prudence sur **ponts-bascules** avec chariots
- Utiliser une balance **adaptée** à l'usage ; lire le **mode d'emploi**
- Balances électroniques : **préchauffage** ; ne pas éteindre pendant la journée de travail
:::

---

## Mission 3.3 — Processus de comptage

Décris **étape par étape** le processus de comptage des vis avec la balance compteuse.

:::reponse
1. Peser une **quantité de référence** (ex. **10 pièces**) → enregistrer le **poids de référence**
2. Peser la **quantité totale** à contrôler (ou l'échantillon)
3. La balance **compare** avec le poids de référence
4. L'écran affiche le **nombre de pièces** (au lieu du poids seul)
:::

---

## Mission 3.4 — Tolérance

La marchandise est en ordre « en raison de la **tolérance** ». Que signifie la tolérance dans ce contexte ?

:::reponse
Lors de la livraison, une **tolérance** peut être convenue : la quantité effectivement livrée peut différer d'un certain **pourcentage** (en plus ou en moins) de la quantité commandée. Elle permet au fournisseur de compenser les fluctuations de **production** ou de **stocks**.
:::

---

## Mission 4 — Quantité manquante dans un fût

Deux fûts de liquide de refroidissement sont livrés ; l'un n'est rempli qu'aux **deux tiers**. Le fournisseur demande la **quantité manquante** pour ne pas sur-facturer.

Avec quel **outil** déterminer la quantité manquante ? Décris son fonctionnement.

:::reponse
**Pompe à piston** — instrument simple de mesure de volume.

Un **piston** monte et descend dans un **cylindre étagé** de volume connu. En montant, le piston **aspire** le liquide ; en descendant, il le **refoule**. Les mouvements ascendants sont comptés par un **compteur** fixé à la pompe → volume mesuré.
:::

---

## Mission 4.1 — Calcul du volume manquant

La détermination serait aussi possible par **calcul**. Comment ?

:::reponse
1. Calculer le **volume total** du fût : V_total = (r² × π) × h_fût
2. Mesurer la **hauteur de liquide** dans le fût et calculer V_liquide = (r² × π) × h_liquide
3. **Quantité manquante** = V_total − V_liquide
:::

---

## Mission 4.2 — EnterSite (salle 3 V3)

> **Astuce EnterSite** : suis la visite virtuelle dans la salle **3 V3**. Cherche 1 à 3 collègues et montre tes capacités dans la tâche de contrôle détaillé. Cherche l'image sur la droite. Lien : [Vers EnterSite](#entersite-placeholder) (URL à compléter lorsque disponible).

:::reponse
**Réponse individuelle** — selon l'exercice EnterSite (salle 3 V3, contrôle détaillé en équipe).
:::

---

## Mission 5 — Discussion de la mise en situation

Discute de la mise en situation en plénière avec la classe et l'enseignant·e. Note les informations complémentaires.

:::reponse
**Réponse ouverte** — notes de discussion (pas de solution unique).
:::`;

const DEMO_308_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **M1** : outils de mesure (liste individuelle)
- **M2** : pied à coulisse (longueur · diamètre · pas)
- **M2.2** : gabarit / jauge de filetage · micromètre
- **M3** : balance compteuse · étalonnage vs calibrage · règles d'usage
- **M3.3** : référence 10 pces → comptage total
- **M4** : pompe à piston · calcul volume fût
- **M4.2** : EnterSite salle **3 V3**
- **M5** : discussion plénière`;

/** Exercices de maths Module 308 */
const DEMO_308_MATHS_FULL = `## Exercices de mathématiques — Module 308

Calcule chaque résultat, puis vérifie avec le bouton solution.

### Exercice 1 — Échantillons qualité (huile)

À la réception, **6 fûts** d'huile de charge égale (1 baril = **158,8 litres** chacun). L'assurance qualité demande de prélever **0,1 %** de la quantité livrée dans des bouteilles de **250 ml** (0,25 l), **une bouteille par fût** (ne jamais regrouper plusieurs échantillons).

Combien de bouteilles et d'étiquettes faut-il ?

:::solution
**6 bouteilles** et **6 étiquettes**

Calcul :
- Prélèvement par fût : 158,8 × 0,1 / 100 = **0,1588 l**
- Une bouteille (0,25 l) par fût suffit
- **6 fûts** → **6 bouteilles** et **6 étiquettes**
:::

### Exercice 2 — Comptage de boulons

Balance compteuse : **10 boulons** = **136,16 g** (poids de référence).  
Masse brute de l'envoi : **6,5 kg** · emballage : **700 g**.

Combien de boulons ont été livrés ?

:::solution
**425 boulons**

Calcul :
- Masse brute : 6,5 kg = **6'500 g**
- Masse nette : 6'500 − 700 = **5'800 g**
- Proportion : 5'800 × 10 / 136,16 = 425,97… → **425 boulons**
:::

### Exercice 3 — Conversion pouces / centimètres

Écrans d'ordinateur : bulletin en **pouces** (22, 24, 15) ; mesure métrique : **55,88 cm**, **60,96 cm**, **38,1 cm**.

Doit-on accepter la livraison ? *(1 pouce = 2,54 cm)*

:::solution
**Oui**

Calcul :
- 22 × 2,54 = **55,88 cm** ✓
- 24 × 2,54 = **60,96 cm** ✓
- 15 × 2,54 = **38,1 cm** ✓

Les mesures **correspondent** → livraison **acceptable**.
:::

### Exercice 4 — Poids brut, tare et net

Marchandise : **7'600 kg** brut. L'emballage représente **7 %** du poids.

Calcule le poids de l'emballage et le **poids net**.

:::solution
- **Tare (emballage) : 532 kg** — 7'600 × 7 / 100 = 532 kg
- **Poids net : 7'068 kg** — 7'600 − 532 = 7'068 kg
:::

> **Contrôle rapide (ordre du corrigé)** : Oui · 6 · 425 · 532 · 6 · 7'068`;

const DEMO_308_MATHS_SUMMARY = `## Maths — Solutions
1. **6** bouteilles + **6** étiquettes (0,1588 l < 0,25 l par fût)
2. **425** boulons (5'800 g net / 136,16 g pour 10)
3. **Oui** (conversions pouces OK)
4. Tare **532 kg** · net **7'068 kg**`;

/** Vérification des acquis Module 308 */
const DEMO_308_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Thème : **Module 308 — Le contrôle détaillé**. Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

Quelle est la contenance en litres d'un **gallon USA** et **GB** ? Pour quelles marchandises sont-ils utilisés ?

:::reponse
- **Gallon USA** : **3,79 litres**
- **Gallon GB** : **4,55 litres**

Utilisés pour les **liquides** et les **carburants**.
:::

### Question 2

Qu'est-ce qui est pesé avec un **pont-bascule** ? Explique le processus de pesage.

:::reponse
Il sert à peser de **grandes charges** (**camion** ou **wagon**).

Le véhicule se gare sur le pont-bascule placé sur la voie de circulation. Après l'arrêt, la pesée est effectuée.

En principe : pesée **chargée**, puis après déchargement **à vide**. La **différence** = poids de la marchandise.
:::

### Question 3

Quelle balance est représentée sur l'image ? Décris son fonctionnement.

*(Image : balance à bras égaux.)*

:::reponse
C'est une **balance à bras égaux**. Elle fonctionne selon la **loi du levier** : on pose l'objet à peser sur un plateau, puis on place des **poids normalisés** sur l'autre plateau jusqu'à ce que la balance soit en **équilibre**.
:::

### Question 4

Dans quels cas une balance doit-elle être **vérifiée** (étalonnage officiel) ?

:::reponse
Exemples d'installations soumises à vérification :
- Installations pour la fixation des **droits de douane**
- **Distributeurs de carburant** pour la vente de carburant au public
:::

### Question 5

Comment s'appelle cet instrument de mesure ? Que peux-tu mesurer avec ?

*(Image : pied à coulisse / calibre.)*

:::reponse
**Pied à coulisse** (ou **calibre**).

Il sert à mesurer l'**épaisseur**, le **diamètre** ou la **profondeur** d'un objet.
:::`;

const DEMO_308_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. Gallon USA **3,79 l** · GB **4,55 l** · liquides / carburants
2. Pont-bascule : camion/wagon · chargé − vide = marchandise
3. **Balance à bras égaux** · levier + poids normalisés
4. Douanes · pompes à essence (vente)
5. **Pied à coulisse** · épaisseur · diamètre · profondeur`;

/** Contenu Module 309 — Contrôle de la qualité */
const DEMO_309_THEORIE_FULL = `## 9. Contrôle de la qualité

### 9.1 Importance de l'assurance qualité

L'**assurance qualité** = toutes les mesures pour garantir une qualité **constante** des produits/services.

Particularité élevée : agroalimentaire, aéronautique, pharmaceutique (santé, sécurité). Ex. aéronautique : chaque composant avec **certificat** (origine, matériaux) — risque de certificats falsifiés → défi pour le contrôle.

Souvent confié à des collaborateurs formés : service AQ ou **laboratoire** d'essai. Crucial si la production dépend de la qualité des achats.

### 9.2 Définition de la qualité

> « La qualité, c'est quand la **performance** correspond à l'**attente**. »

### 9.3 Critères de qualité

- **Subjectifs** — opinions, sentiments, jugement personnel (ex. : choisir VW pour la réputation du SAV)
- **Objectifs** — mesurables : géométrie, labo, contrôles, couleur, évaluations clients (ex. : 96 % d'avis positifs à la réception d'hôtel ; écarts géométriques sur échantillons)

**Outils possibles :** contrôle géométrique · colorimètre / nuancier · composition chimique en labo · contrôle de fonctionnement (sommaire ou approfondi).

#### 9.3.1 Contrôles par échantillonnage

Prélèvement d'échantillons à l'arrivée pour vérifier composition, dureté, couleur, épaisseur, etc. Suivre les **procédures internes** ; étiquetage **100 % fiable**. Courant en chimie et alimentaire (ex. céréales avant déchargement bateau).

**Stock AQ / quarantaine**  
Marchandises échantillonnées **non disponibles** tant que le contrôle n'a pas validé. Zone dédiée (« AQ », quarantaine) + étiquettes si besoin — pas de mélange avec stock libre / production.

**Rôle de la logistique**  
Souvent : prélever, étiqueter, transmettre au service compétent ; solde en quarantaine. Après résultat : **refuser/renvoyer** ou **valider** et stocker.

### 9.4 Niveau de qualité

| Niveau | Sens |
| --- | --- |
| **Sous-qualité** | N'atteint pas les exigences · apparemment moins cher · retours, perte de confiance |
| **Bonne qualité** | Correspond aux attentes · juste prix · partenaire fiable |
| **Sur-qualité** | Au-delà des besoins · plus cher à produire · trop cher pour un besoin « basique » |

### 9.5 Contrôles de qualité dans les entreprises

De l'anglais *quality assurance* : tous les processus pour une qualité constante. Indispensable pour répondre au client. Gestion de la qualité / ISO → module **506**.

### 9.6 Techniques de contrôle

Selon sensibilité des marchandises, fiabilité fournisseur, risques production. Méthodes définies en management qualité : **contrôle complet** ou **par échantillonnage**.

#### 9.6.1 Contrôle complet

**Toute** la livraison contrôlée — coûteux (ex. kits à démonter/assembler). Justifié notamment si :
- premier achat / fournisseur non éprouvé
- défauts graves antérieurs
- mauvaise impression à l'arrivée
- biens très chers / haute qualité exigée
- forte dépendance à la qualité reçue

But : éviter la répétition d'erreurs et la perte de confiance clients.

#### 9.6.2 Contrôles par échantillonnage

Fournisseur fiable → échantillonnage suffit. Parfois **aucun** contrôle destinataire si le fournisseur a un SMQ approuvé (ex. ISO 9001) et accord écrit.

**Improvisé (spontané)** — non planifié, là où c'est le plus simple :
- recomptage partiel
- soulever le haut pour voir le bas
- pesage partiel
- ouvrir une unité pour vérifier le contenu

**Planifié** — quantité et technique prédéfinies par la qualité ; résultats discutés avec le fournisseur → améliorations. Simple ou multiple.

**Échantillonnage simple**  
Ex. : 2 unités par livraison, ou 1 livraison sur 2. Ou **plans d'échantillonnage** :
- grandeur du **lot**
- **n** = quantité prélevée
- **Tol n** = défauts autorisés
- **niveau de qualité** (1–3 ; plus bas = plus strict)
- **niveau de contrôle** : approfondi / normal / sommaire (quantité contrôlée)

**Échantillonnage multiple**  
Plusieurs prélèvements ; tableau : **Refuser** / **Poursuivre** / **Accepter**. On continue tant qu'on est en « poursuivre ».

Ex. pratique (palette 980 paquets de vis, lots de 30) :
- défauts cumulés 1 → poursuivre
- 1 → poursuivre
- 2 → poursuivre
- 3 → poursuivre
- 3 → **accepter**  
Total testé : 150 · défectueux : 3

### 9.7 Contrôle du fonctionnement

Contrôle opérationnel : complet ou par échantillonnage. Nécessaire si marchandises sensibles. Rudimentaire (allumer) ou complet (banc d'essai). Critères : entreprise et/ou loi.

Ex. : lampe de chevet = allumer ; composants électroniques = montage sur banc de test.

Entre entreprises certifiées : souvent le fournisseur s'engage par écrit à contrôler avant livraison → destinataire peut s'en dispenser.`;

const DEMO_309_THEORIE_SUMMARY = `## À retenir — Module 309

### Qualité
Performance = attente  
AQ cruciale (agro, aéro, pharma) · certificats · labo  
Critères subjectifs vs objectifs

### Logistique & AQ
Échantillonnage + étiquetage fiable  
**Quarantaine / stock AQ** jusqu'à validation  
Prélever → transmettre → refuser ou stocker

### Niveaux
Sous-qualité · bonne · sur-qualité

### Méthodes
**Complet** : cher, cas critiques / nouveaux fournisseurs  
**Échantillonnage** : improvisé ou planifié (simple / multiple)  
Plans : lot, n, Tol n, niveaux qualité & contrôle  
Fonctionnement : allumage → banc d'essai · parfois délégué au fournisseur (ISO)`;

const DEMO_309_APERCU_FULL = `## Aperçu du module 309

Ce module traite du **contrôle de la qualité** : définition, critères, échantillonnage, niveaux de qualité et techniques (complet / échantillonnage / fonctionnement).

### Vous allez découvrir
1. Assurance qualité et enjeux (certificats, labo)
2. Critères subjectifs / objectifs et outils
3. Stock AQ / quarantaine et rôle de la logistique
4. Sous-qualité, bonne qualité, sur-qualité
5. Contrôle complet vs échantillonnage (simple / multiple) et contrôle de fonctionnement

### Source
EnterSite — Logistics by ASFL / SVBL · Suite du module 308 · Lien module 506`;

const DEMO_309_APERCU_SUMMARY = `## Aperçu — Module 309
- AQ & critères de qualité
- Quarantaine / échantillonnage
- Complet vs plans d'échantillonnage`;

const DEMO_309_OBJECTIFS_FULL = `## Objectifs du module 309

À l'issue de ce module, l'apprenti·e est capable de :

- Définir la **qualité** et l'**assurance qualité**
- Distinguer critères **subjectifs** et **objectifs**
- Expliquer le rôle de la logistique (échantillons, **quarantaine AQ**)
- Comparer **sous- / bonne / sur-qualité**
- Choisir entre contrôle **complet** et **par échantillonnage** (improvisé, simple, multiple) et décrire un contrôle de **fonctionnement**`;

const DEMO_309_OBJECTIFS_SUMMARY = `## Objectifs
- Qualité & AQ
- Quarantaine / échantillons
- Complet vs échantillonnage`;

/** Glossaire Module 309 */
const DEMO_309_GLOSSAIRE_FULL = `## Glossaire — Module 309

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Qualité | | Degré selon lequel la **performance** d'un produit, service ou processus correspond à l'**attente** du client. Impact sur satisfaction, image, compétitivité et succès à long terme. |
| Prélèvement d'échantillon | | Prise d'une **partie représentative** d'une livraison pour contrôle (composition, dimensions, couleur, fonctionnement…). Échantillon **étiqueté** et souvent placé en **quarantaine** jusqu'au résultat. |
| Technique de contrôle | | Méthode choisie pour vérifier la qualité : **contrôle complet** (toutes les pièces) ou **contrôle par échantillonnage** (improvisé, simple planifié ou multiple planifié). |
| Contrôle complet | | Vérification de **toutes** les pièces de la commande, une par une. Justifié pour nouveaux fournisseurs, défauts graves antérieurs, marchandises chères ou critiques pour la sécurité. |
| Contrôle par échantillonnage simple | | Contrôle **planifié** sur une partie de l'envoi selon des règles fixes (ex. 2 unités par livraison, 1 livraison sur 2) ou un **plan** (lot, n, Tol n, niveau AQL, contrôle normal/approfondi). |
| Contrôle par échantillonnage multiple | | Plusieurs **prélèvements successifs** ; résultat tracé dans un tableau **Refuser / Poursuivre / Accepter**. Le contrôle continue tant que le résultat reste en zone « Poursuivre le contrôle ». `;

const DEMO_309_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **Qualité** : performance = attente client
- **Prélèvement** : partie représentative · quarantaine possible
- **Technique** : complet vs échantillonnage
- **Complet** : 100 % des pièces
- **Simple** : plan fixe ou plan AQL (n, Tol n)
- **Multiple** : prélèvements · Refuser / Poursuivre / Accepter`;

/** Mises en situation Module 309 */
const DEMO_309_SITUATION_FULL = `## Mises en situation — Module 309

Contexte : tu participes au **contrôle de la qualité** à la réception chez **EnterSite AG**. Les missions portent sur la notion de **qualité**, les **méthodes de contrôle** et les **plans d'échantillonnage**. Rédige d'abord ta propre réponse, puis utilise le bouton pour afficher ou masquer les solutions / exemples proposés.

### Vue d'ensemble des missions
1. Importance de la qualité (quotidien + EnterSite)
2. Contrôle complet vs échantillonnage
2.1 Autres méthodes de contrôle
3. Plan d'échantillonnage simple (tambours · boulons)
4. Plan d'échantillonnage multiple (puces électroniques)
5. Discussion de la mise en situation

---

## Mission 1 — Importance de la qualité

La notion de « qualité » est perçue de manière **subjective**. Que signifie la qualité pour toi ? Note des exemples tirés de ta vie quotidienne.

:::reponse
**Réponse individuelle** — ex. : fiabilité d'un téléphone, goût d'un produit alimentaire, finition d'un vêtement, ponctualité d'un transport…
:::

---

## Mission 1.1 — Qualité chez EnterSite AG

Quelle est la signification du terme « qualité » par rapport à **EnterSite AG** ?

:::reponse
La qualité a une signification **centrale** pour EnterSite : caractéristiques et propriétés des produits, services ou processus qui garantissent la satisfaction des **exigences** et **attentes** des clients.

Impact direct sur : satisfaction client · **image** de l'entreprise · **compétitivité** · succès à **long terme**.
:::

---

## Mission 2 — Raisons d'un contrôle complet

Ton collègue t'informe que tu dois effectuer un **contrôle complet**. Quelles raisons peuvent conduire à ce choix ?

:::reponse
- **Nouveau fournisseur** qui doit encore prouver sa fiabilité
- **Défauts graves** constatés lors d'envois précédents du même fournisseur
- La livraison **fait mauvaise impression** à l'arrivée
- Marchandises **très chères**
- Marchandises **importantes pour la sécurité** de l'entreprise
- Forte **dépendance** de l'entreprise à la qualité des marchandises reçues
:::

---

## Mission 2.1 — Autres méthodes de contrôle

Avec quelles **autres méthodes**, en plus du contrôle complet, EnterSite peut-elle contrôler ses marchandises ?

:::reponse
**Contrôle par échantillonnage (général)** — ne porte pas sur la totalité de l'envoi.

**Échantillonnage improvisé (spontané)** — non planifié, là où c'est le plus simple :
- recomptage d'une partie de la livraison
- soulever les emballages du haut pour examiner le bas
- peser une partie de la livraison
- ouvrir une unité pour vérifier le contenu

**Échantillonnage selon un plan** — quantité et technique **prédéfinies** par le management qualité :
- **échantillonnage simple** (ex. 2 unités par livraison, ou 1 livraison sur 2 ; plans AQL)
- **échantillonnage multiple** (tableau Refuser / Poursuivre / Accepter)
:::

---

## Mission 3 — Plan simple (tambours A1CC533A)

Contrôle de **950 tambours** A1CC533A par échantillonnage simple — niveau **normal**, AQL **0,65**, contrôle **renforcé** (fournisseur en défaut). **2 tambours** non conformes constatés.

- Combien de pièces contrôler ?
- Marchandise acceptée ou non ?
- Nombre maximal de tambours défectueux autorisé ?

:::reponse
- **Pièces à contrôler : 110**
- **Acceptation : NON** (2 défauts > 1 autorisé)
- **Défauts max autorisés : 1 tambour**
:::

---

## Mission 3.1 — Plan simple (boulons A1CC533A)

Lot de **2'530 boulons** A1CC533A. Contrôles :
- **Longueur** (défaut **grave**)
- **Diamètre** (défaut **moyen**)
- **Arêtes cassées** (défaut **non grave**)

Défauts constatés : longueur **3** · diamètre **2** · arêtes **3**  
Contrôle **normal**, niveau de qualité **2,50**.

- Quantité à contrôler ?
- Envoi accepté ?

:::reponse
- **Quantité de contrôle : 150 pièces**
- **Acceptation : NON** — l'envoi doit être **refusé**. Les erreurs constatées dépassent le maximum autorisé (**4 pièces** au total selon le plan ; 3+2+3 = 8 erreurs constatées sur les critères).
:::

---

## Mission 4 — Plan d'échantillonnage multiple

Contrôle de **puces électroniques** (maintenance à distance) par échantillonnage **multiple**. Lots de **30 pièces** :

| Essai | Défauts constatés |
| --- | --- |
| 1er | 1 |
| 2e | 0 |
| 3e | 1 |
| 4e | 1 |
| 5e | 0 |

Trace l'évolution dans le tableau. L'envoi peut-il être accepté ? Que faut-il faire ?

:::reponse
| Essai | Défauts (lot) | Cumul testé | Cumul défauts | Zone |
| --- | --- | --- | --- | --- |
| 1 | 1 | 30 | 1 | Poursuivre |
| 2 | 0 | 60 | 1 | Poursuivre |
| 3 | 1 | 90 | 2 | Poursuivre |
| 4 | 1 | 120 | 3 | Poursuivre |
| 5 | 0 | 150 | 3 | Selon tableau plan |

L'envoi **ne peut pas encore être accepté** en l'état s'il n'y a pas de **résultat concret** (zone de décision non atteinte). Il faut **poursuivre les vérifications** ou **consulter le supérieur** / le fournisseur.

*(Selon le plan multiple EnterSite, 3 défauts sur 150 pièces peut mener à l'acceptation — vérifier le tableau du plan en vigueur.)*
:::

---

## Mission 5 — Discussion de la mise en situation

Discute de la mise en situation en plénière avec la classe et l'enseignant·e. Note les informations complémentaires.

:::reponse
**Réponse ouverte** — notes de discussion (pas de solution unique).
:::`;

const DEMO_309_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **M1** : qualité subjective · centrale chez EnterSite
- **M2** : contrôle complet = nouveau fournisseur · défauts · sécurité · coût
- **M2.1** : improvisé · simple · multiple
- **M3** : 950 tambours → 110 pces · max 1 défaut · **refus** (2 défauts)
- **M3.1** : 2'530 boulons → 150 pces · **refus** (> 4 erreurs max)
- **M4** : multiple 5×30 pces · poursuivre / consulter hiérarchie
- **M5** : discussion plénière`;

/** Exercices de maths Module 309 */
const DEMO_309_MATHS_FULL = `## Exercices de mathématiques — Module 309

Calcule chaque résultat, puis vérifie avec le bouton solution.

### Exercice 1 — Dégâts sur tablettes tactiles

**3'500** tablettes pour **665'000 CHF** ; **6 %** inutilisables (eau de mer).

À combien s'élèvent les dégâts en CHF ?

:::solution
**39'900 CHF**

Calcul : 665'000 × 6 / 100 = **39'900 CHF**
:::

### Exercice 2 — Coût du contrôle qualité

Un collaborateur met **25 min** pour contrôler une tablette (**27 CHF/h**).  
Combien coûte le contrôle des tablettes **fonctionnelles** (94 % de 3'500) ?

:::solution
**37'012,41 CHF**

Calcul :
- Tablettes fonctionnelles : 3'500 × 94 / 100 = **3'290**
- Temps total : 25 × 3'290 = 82'250 min = 82'250 / 60 = **1'370,83 h**
- Coût : 1'370,83 × 27 = **37'012,41 CHF**
:::

### Exercice 3 — Plan de sondage (deux contrôles)

> Référence : plan de sondage fourni (PDF).

**Contrôle normal** — lot **808**, niveau qualité **1,50**, **3** erreurs constatées.  
**Contrôle approfondi** — lot **2'500**, niveau **0,65**, **6** erreurs constatées.

Pour chaque contrôle : nombre de pièces à prélever et **décision**.

:::solution
**Contrôle normal**
- Prélever **110 pièces**
- Erreurs acceptées max : **4**
- Avec **3** erreurs → décision : **Accepter**

**Contrôle approfondi**
- Prélever **150 pièces**
- Erreurs acceptées max : **2**
- Avec **6** erreurs → décision : **Refuser**
:::

### Exercice 4 — Tolérance de pièces défectueuses

Livraison de **1'500** pièces. Tolérance acceptée : **0,75 %** de pièces défectueuses.  
**14** pièces défectueuses constatées.

Autorises-tu la mise en stock ?

:::solution
**Non**

Calcul :
- Défauts max acceptés : 1'500 × 0,75 / 100 = **11,25** pièces
- **14 > 11,25** → mise en stock **non autorisée**
:::

> **Contrôle rapide (ordre du corrigé)** : 39'900 · 37'012,41 · 110/Accepter · 150/Refuser · Non`;

const DEMO_309_MATHS_SUMMARY = `## Maths — Solutions
1. **39'900 CHF** (665'000 × 6 %)
2. **37'012,41 CHF** (3'290 tablettes × 25 min × 27 CHF/h)
3. Normal : **110** pces, **accepter** (3 ≤ 4) · Approfondi : **150** pces, **refuser** (6 > 2)
4. **Non** (14 > 11,25 défauts max)`;

/** Vérification des acquis Module 309 */
const DEMO_309_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Thème : **Module 309 — Le contrôle de la qualité**. Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

Lors d'un contrôle de qualité, on distingue critères **subjectifs** et **objectifs**. Explique ces deux notions.

:::reponse
**Critères subjectifs** : basés sur la conception **personnelle** de la qualité (opinions, sentiments, émotions, jugement personnel).

**Critères objectifs** : basés sur la **mesurabilité réelle** (mesures géométriques, analyses en laboratoire, contrôles internes/externes, coloration, évaluations clients, etc.).
:::

### Question 2

Que veut-on dire par **sous-qualité** pour un produit ?

:::reponse
Le produit **ne répond pas** aux exigences du client. Souvent moins cher à l'achat, mais représente un **coût à long terme** (retours, perte de confiance, image dégradée).
:::

### Question 3

À quoi sert l'**assurance qualité** ?

:::reponse
L'assurance qualité comprend **toutes les mesures** qui servent à garantir de manière **constante** la qualité d'un produit ou service, afin que le client soit convaincu que le produit correspond à ses **attentes**.
:::

### Question 4

Décrivez le **contrôle complet** des marchandises.

:::reponse
Le contrôle complet implique la vérification de **toutes les pièces** de la commande. Les pièces sont contrôlées **une par une**.
:::

### Question 5

Note ce qui est fait lors d'un **contrôle aléatoire improvisé**.

:::reponse
- Recomptage d'une **partie** de la livraison
- Soulever les emballages du **haut** pour examiner ceux du **bas**
- **Peser** une partie de la livraison
- **Ouvrir** une unité de livraison pour vérifier si le contenu correspond à la description
:::`;

const DEMO_309_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. Subjectif = opinion · Objectif = mesurable
2. Sous-qualité = n'atteint pas les exigences client
3. AQ = qualité constante · attentes client
4. Complet = 100 % des pièces, une par une
5. Improvisé : recomptage · soulever · peser · ouvrir une unité`;

/** Contenu Module 310 — Préparation à la mise en stock */
const DEMO_310_THEORIE_FULL = `## 10. Préparation à la mise en stock

Dernière étape de la logistique d'**approvisionnement**, après contrôles qualité et quantité. Organisation selon exigences internes et nature de la marchandise (stockage, transport, vente).

Sans exigences particulières → stockage direct. Sinon : **réemballage**, **repacking** ou **étiquetage** spécial.

### 10.1 Objectifs d'un nouvel emballage

Raisons de reconditionner / réétiqueter :

**Présentation**  
Inscription, logo ou couleur ≠ emballage de vente cible → déballer et réemballer.

**Emballage incorrect**  
Taille inadaptée (POS), endommagé, image de vente, perte de fonction de protection → nouvel emballage adapté.

**Marquage des promotions**  
Réduction / nouveau prix indiqués sur le produit.

**Nouvelles tailles d'emballage**  
Achat à la pièce mais ventes en lots → assembler des pièces (conception de lot).

**Création de bundles**  
Ex. EnterSite : toners C/M/Y/K vendus séparément **ou** en « Rainbow Kit » regroupé.

**Manutention**  
Faciliter la logistique (ex. bac à bec pour centaines de vis vs pièce à pièce).

**Type de stockage / préparation**  
Rayonnages à palettes → préparer sur palettes conformes ; emplacements de prélèvement → bacs.

**Automatisation**  
Ex. rayonnage palettes auto → marquage d'identification pour stockage/déstockage système.

### 10.2 Enregistrement de la marchandise

En fin de préparation : **enregistrement** dans l'ERP (même si pas de modification d'emballage).

Réception **planifiée** (module 303) : commande déjà pré-enregistrée → à la préparation, enregistrement + transfert vers l'emplacement.

### 10.3 Gestion des stocks

L'article est enregistré dès réception de la commande.

#### 10.3.1 Notions de base

Terminologie **non uniforme** selon sources.

**Article** = marchandise en stock dont toutes les parties sont **identiques**. Une caractéristique différente = autre article.

Ex. toners :
- CE410X 305 X Toner BLACK
- CE411A 305 Toner CYAN
- CE412A 305 Toner YELLOW
- CE413A 305 Toner MAGENTA

#### 10.3.2 En-tête de la fiche de stock

Données article / stock (SGS ou ERP) :

| # | Élément | Rôle |
| --- | --- | --- |
| 1 | **N° d'article** | Identification unique |
| 2 | **Désignation** | Contrôle visuel, anti-confusion |
| 3 | **UL** (unité de livraison) | Qté minimale livrée par le fournisseur (ex. 5) |
| 4 | **UV** (unité de vente) | Qté minimale de vente (souvent 1) |
| 5 | **Prix d'achat** | Coût d'acquisition · évaluation stocks · **confidentiel** · ≠ prix de vente (PV) |
| 6 | **Fournisseur** | Réactivité en cas d'irrégularité |
| 7 | **Stock maximal** | Selon rotation + espace · évite surstocks coûteux |
| 8 | **Point de commande** (cote d'alerte) | Niveau déclenchant une nouvelle commande (souvent auto) |
| 9 | **Stock de sécurité** (stock min.) | Réserve « coups durs » · ne devrait pas être franchi |

#### 10.3.3 Les saisies comptables

| # | Colonne | Effet |
| --- | --- | --- |
| 10 | **Date** | Saisie (+ souvent ID utilisateur pour traçabilité) |
| 11 | **Entrées** | ↑ stock |
| 12 | **Sorties** | ↓ stock |
| 13 | **Stock réservé** | Physique mais non disponible · ↓ disponible, pas le total |
| 14 | **Stock AQ** | En attente de contrôle · physique, non disponible |
| 15 | **Stock bloqué** | Inutilisable / non livrable · dans le total, pas le disponible |
| 16 | **Stock disponible** | Livrable immédiatement |
| 17 | **Stock total** | Disponible + réservé + AQ + bloqué |

#### 10.3.4 Exemple de comptabilisation

Stock initial 01.09 : **10'000** (disponible = total).

| Date | Entrée | Sortie | Disponible / Total |
| --- | --- | --- | --- |
| 01.09 | | | 10'000 |
| 02.09 | | 2'870 | 7'130 |
| 03.09 | | 1'640 | 5'490 |
| 04.09 | | 3'980 | 1'510 |
| 05.09 | 5'000 | | 6'510 |
| 06.09 | | 2'300 | 4'210 |

Entrées/sorties concrètes → disponible et total fluctuent de la **même** quantité (sans réservation/AQ/blocage).`;

const DEMO_310_THEORIE_SUMMARY = `## À retenir — Module 310

### Préparation stockage
Après contrôles Q/qté · reconditionnement si besoin  
Raisons : présentation, emballage, promo, lots/bundles, manutention, type de stockage, automatisation

### Enregistrement
ERP en fin de process · réception planifiée = commande pré-enregistrée

### Fiche de stock
Article = caractéristiques identiques  
En-tête : n°, désignation, UL, UV, prix d'achat, fournisseur, max, point de commande, sécurité  
Mouvements : entrées/sorties · réservé · AQ · bloqué · **disponible** · **total**  
Total = disponible + réservé + AQ + bloqué`;

const DEMO_310_APERCU_FULL = `## Aperçu du module 310

Ce module traite de la **préparation à la mise en stock** : reconditionnement, enregistrement ERP et bases de la gestion des stocks (fiche, mouvements).

### Vous allez découvrir
1. Objectifs du nouvel emballage / repacking / bundles
2. Enregistrement dans l'ERP
3. Notions : article, UL, UV, stocks max / alerte / sécurité
4. Colonnes de la fiche (disponible, réservé, AQ, bloqué, total)
5. Exemple de comptabilisation entrée/sortie

### Source
EnterSite — Logistics by ASFL / SVBL · Fin du processus d'approvisionnement`;

const DEMO_310_APERCU_SUMMARY = `## Aperçu — Module 310
- Repacking / bundles
- Enregistrement ERP
- Fiche de stock & mouvements`;

const DEMO_310_OBJECTIFS_FULL = `## Objectifs du module 310

À l'issue de ce module, l'apprenti·e est capable de :

- Expliquer pourquoi et comment **préparer** (réemballer / étiqueter) avant stockage
- Décrire l'**enregistrement** des marchandises dans l'ERP
- Définir un **article** et lire l'en-tête d'une fiche de stock (UL, UV, point de commande…)
- Distinguer stock **disponible**, réservé, AQ, bloqué et **total**
- Comptabiliser des **entrées** et **sorties** simples`;

const DEMO_310_OBJECTIFS_SUMMARY = `## Objectifs
- Préparation / repacking
- Fiche de stock
- Disponible vs total`;

/** Glossaire Module 310 */
const DEMO_310_GLOSSAIRE_FULL = `## Glossaire — Module 310

| Terme technique | Lien | Définition |
| --- | --- | --- |
| Automatisation | | L'**homme ne participe pas** directement à ces travaux : logiciels et matériel permettent de réaliser l'étape de manière **autonome** (ex. rayonnage palettes automatique avec marquage pour stockage/déstockage système). |
| Manutention | | Ensemble des opérations de **déplacement**, **manipulation** et **transport** des marchandises. La préparation au stockage peut viser à faciliter la manutention (ex. regrouper des pièces en bacs au lieu de les stocker à l'unité). |
| Offre groupée | | Regroupement de **plusieurs produits** en une **nouvelle unité** de vente (*bundle*). Les produits peuvent être différents ou identiques. Ex. : kit toner C/M/Y/K · trousse scolaire (crayons + gomme + règle). `;

const DEMO_310_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- **Automatisation** : travail autonome par système (sans intervention humaine directe)
- **Manutention** : déplacer · manipuler · transporter
- **Offre groupée** : plusieurs produits = une unité (bundle)`;

/** Mises en situation Module 310 */
const DEMO_310_SITUATION_FULL = `## Mises en situation — Module 310

Contexte : tu prépares les marchandises pour la **mise en stock** chez **EnterSite AG** après réception et contrôles. Rédige d'abord ta propre réponse, puis utilise le bouton pour afficher ou masquer les solutions / exemples proposés.

### Vue d'ensemble des missions
1. Préparation en entreprise formatrice
2. Préparer deux articles (exemples 1)
3. Préparer deux autres articles (exemples 2)
4. Gestion des stocks (écritures)
5. EnterSite — Procurement Management
6. Discussion de la mise en situation

---

## Mission 1 — Préparation en entreprise formatrice

Comment les marchandises sont-elles préparées pour le stockage dans **ton entreprise de formation** après la réception ?

:::reponse
**Réponse individuelle** — décrire les étapes réelles : contrôle, étiquetage, reconditionnement, enregistrement, emplacement de stockage…
:::

---

## Mission 2 — Préparer deux articles (variantes)

Choisis **deux articles** et décris **quatre variantes** différentes sur la manière et les raisons de les préparer pour le stockage.

### Article 1 — SwissEnterSite Cartouche SAMSUNG CLP-415BK Toner noir

Livré en **unité de 20 pièces** ; vendu en **pièces détachées** → reconditionnement nécessaire.

### Article 2 — Oki Toner Black pour MC883dn

Action de vente : composition d'un **lot** Black, Yellow, Magenta et Cyan.

:::reponse
**Article 1 — Samsung CLP-415BK (exemples de variantes)**

1. **Déconditionnement** : ouvrir les cartons de 20 et préparer la vente à l'unité
2. **Réemballage** : emballage de vente EnterSite (logo, format POS)
3. **Étiquetage** : code article / prix / code-barres par pièce
4. **Manutention** : regroupement en bacs de prélèvement pour le picking

**Article 2 — Oki MC883dn (exemples de variantes)**

1. **Offre groupée (bundle)** : regrouper les 4 couleurs en un kit promotionnel
2. **Marquage promotion** : étiquette « action de vente » sur le lot
3. **Emballage adapté** : carton bundle avec calage pour les 4 toners
4. **Enregistrement ERP** : créer un article « kit » + décrémenter les articles unitaires
:::

---

## Mission 3 — Deux autres articles

Sélectionne **deux autres articles** pour la préparation à la mise en stock.

:::reponse
**Réponse 1 — Cartouches d'encre vides**  
Pour faciliter la manipulation, emballage par **50 pièces** (reconditionnement en lots).

**Réponse 2 — Matière première Encre Black**  
Livrée en **Big Packs** / citernes ; transfert dans les **conteneurs de production** correspondants avant stockage ou alimentation directe de la ligne.

*Autres réponses possibles* : substances dangereuses + fiche technique · palettes entières en réserve · zone expédition directe…
:::

---

## Mission 4 — Gestion des stocks

Exécute les **écritures** et calcule le **stock disponible** et le **stock total** pour les deux articles.

### Article 2677970 — DELL D Series D2721H (27")

| Date | Entrées | Sorties | Stock réservé | Stock AQ | Stock bloqué | Stock disponible | Stock total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 01.09.20xx | | | | | | ? | ? |
| … | | | | | | | |

### Article 2622942 — ACER Predator X27P (27" 4K)

| Date | Entrées | Sorties | … | Stock disponible | Stock total |
| --- | --- | --- | --- | --- | --- |

:::reponse
**DELL D2721H — 2677970**

| Date | Entrées | Sorties | Stock réservé | Stock AQ | Stock bloqué | Stock disponible | Stock total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 01.09.20xx | | | | | | **18** | **18** |
| 02.09.20xx | | 4 | | | | **14** | **14** |
| 03.09.20xx | | 3 | | | | **11** | **11** |
| 04.09.20xx | | 5 | | | | **6** | **6** |
| 05.09.20xx | 10 | | | | | **16** | **16** |
| 06.09.20xx | | 7 | | | | **9** | **9** |

**ACER Predator X27P — 2622942**

| Date | Entrées | Sorties | Stock réservé | Stock AQ | Stock bloqué | Stock disponible | Stock total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 01.09.20xx | | | | | | **23** | **32** |
| 02.09.20xx | | 12 | | | | **11** | **20** |
| 03.09.20xx | | 4 | | | | **7** | **16** |
| 04.09.20xx | | 2 | | | | **5** | **14** |
| 05.09.20xx | 25 | | | | | **30** | **39** |
| 06.09.20xx | | 7 | | | | **23** | **32** |

*Stock total = disponible + réservé + AQ + bloqué (ici différences dues aux stocks réservés/AQ/bloqués non détaillés ligne par ligne).*
:::

---

## Mission 5 — EnterSite Procurement Management

> **Astuce EnterSite** : suis la visite virtuelle dans le bureau **Procurement Management**, salle de travail **14 V1**. Cherche l'image de droite et résous le travail final. Lien : [Vers EnterSite](#entersite-placeholder) (URL à compléter lorsque disponible).

:::reponse
**Réponse individuelle** — selon l'exercice EnterSite (salle 14 V1, Procurement Management).
:::

---

## Mission 6 — Discussion de la mise en situation

Discute de la mise en situation en plénière avec la classe et l'enseignant·e. Note les informations complémentaires.

:::reponse
**Réponse ouverte** — notes de discussion (pas de solution unique).
:::`;

const DEMO_310_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **M1** : préparation en entreprise formatrice (individuel)
- **M2** : Samsung → déconditionner 20 pces · Oki → bundle 4 couleurs
- **M3** : encres vides ×50 · encre Black Big Pack → production
- **M4** : écritures stock DELL / ACER (disponible vs total)
- **M5** : EnterSite salle **14 V1**
- **M6** : discussion plénière`;

/** Exercices de maths Module 310 */
const DEMO_310_MATHS_FULL = `## Exercices de mathématiques — Module 310

Calcule chaque résultat, puis vérifie avec le bouton solution.

### Exercice 1 — Réserve de fiches techniques

**80** articles/jour équipés d'une fiche technique → réserve suffisante **6 jours**.

Pour combien de jours la réserve suffit-elle si **60** articles/jour doivent être équipés ?

:::solution
**8 jours**

Calcul :
- Réserve totale : 80 × 6 = **480** articles
- Durée : 480 / 60 = **8 jours**
:::

### Exercice 2 — Valeur de la livraison

Articles en zone de préparation (prix d'achat unitaire) :

| Article | Qté | Prix unitaire |
| --- | --- | --- |
| Cartouches encre Cyan | 150 | 23,85 CHF |
| Cartouches encre noir | 56 | 20,00 CHF |
| Set cartouches encre | 240 | 52,00 CHF |
| Écrous imprimante 3D | 605 | 1,35 CHF |
| Puce électronique 3D | 25 | 3,50 CHF |

Quelle est la **valeur** de cette livraison ?

:::solution
**18'081,75 CHF**

Calcul :
(150 × 23,85) + (56 × 20) + (240 × 52) + (605 × 1,35) + (25 × 3,50)
= 3'577,50 + 1'120 + 12'480 + 816,75 + 87,50 = **18'081,75 CHF**
:::

### Exercice 3 — Coût du reconditionnement

À reconditionner avant stockage :
- Cartouches (Cyan + noir + sets) : **446** pièces → boîtes plastique **20,20 CHF/pièce** (1 pièce = 1 emballage)
- Puces électroniques : **25** pièces → sachets ESD **34,35 CHF/pièce**

Main-d'œuvre : **27 CHF/h** · **22,3 h** pour cartouches · **125 min** pour puces.

Coût total du reconditionnement ?

:::solution
**10'526,21 CHF**

Calcul matériel :
- Cartouches : (150 + 56 + 240) × 20,20 = **9'009,20 CHF**
- Puces : 25 × 34,35 = **858,75 CHF**
- Total matériel : **9'867,95 CHF**

Main-d'œuvre :
- Temps : (22,3 × 60) + 125 = 1'463 min = **24,38 h**
- Coût : 24,38 × 27 = **658,26 CHF**

**Total : 9'867,95 + 658,26 = 10'526,21 CHF**
:::

### Exercice 4 — Amortissement contenants réutilisables

Réduction des déchets : **15 %**. Coût actuel élimination : **980 CHF/mois**.  
Investissement contenants réutilisables : **5'600 CHF**.

Combien de temps pour **amortir** l'investissement ?

:::solution
**38 mois** (environ **3 ans et 2 mois**)

Calcul :
- Économie mensuelle : 980 × 15 / 100 = **147 CHF**
- Amortissement : 5'600 / 147 = 38,1… → **38 mois**
:::

> **Contrôle rapide (ordre du corrigé)** : 18'081,75 · 38 · 8 · 10'526,21`;

const DEMO_310_MATHS_SUMMARY = `## Maths — Solutions
1. **8 jours** (480 articles / 60 par jour)
2. **18'081,75 CHF** (valeur livraison)
3. **10'526,21 CHF** (matériel + main-d'œuvre)
4. **38 mois** (5'600 / 147 CHF économisés)`;

/** Vérification des acquis Module 310 */
const DEMO_310_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Thème : **Module 310 — La préparation à l'entreposage**. Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

Quelle est la définition d'un **emballage** ?

:::reponse
Objet destiné à **contenir temporairement** un produit ou un groupe de produits en vue de le **protéger** ou de faciliter les opérations suivantes : **manipulation**, **stockage**, **transport** et **présentation en magasin**.
:::

### Question 2

Cite **trois influences** possibles sur le **temps** de préparation pour la mise en stock.

:::reponse
Exemples (citer au moins trois) :
- La marchandise doit-elle passer par le **contrôle qualité** ?
- Doit-elle être **reconditionnée** pour le stockage ?
- Stockage en **réserve palettes** (palettes entières) ?
- Destination directe **zone d'expédition** ?
- **Compatibilité** avec les autres marchandises (dangerosité, manipulation…) ?
:::

### Question 3

Que signifient ces **pictogrammes** ?

*(Ne pas renverser · Centre de gravité · À protéger de la chaleur.)*

:::reponse
- **Ne pas renverser**
- **Centre de gravité** (indiquer le centre de gravité pour la manutention)
- **À protéger de la chaleur**
:::

### Question 4

Le stockage peut être très **automatisé**. Qu'entend-on par « automatisation » ?

:::reponse
L'**homme ne participe pas** à ces travaux. Les **logiciels** et le **matériel** fonctionnent de manière à ce que cette étape puisse être réalisée de manière **autonome**.
:::

### Question 5

EnterSite travaille avec des **offres groupées**. Qu'entendez-vous par ce terme ? Citez un exemple du quotidien.

:::reponse
Une **offre groupée** (*bundle*) réunit **plusieurs produits** en une seule unité (produits différents ou non).

Ex. EnterSite : les **quatre couleurs** de toner en un seul ensemble.

Au quotidien : une **trousse scolaire** (crayons, feutres, gomme, règle) — plusieurs pièces deviennent une **nouvelle unité**.
:::`;

const DEMO_310_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. Emballage = contenir · protéger · manipulation/stockage/transport/vente
2. AQ · reconditionnement · réserve palettes · expédition · compatibilité
3. Ne pas renverser · centre de gravité · protéger de la chaleur
4. Automatisation = autonome sans intervention humaine directe
5. Bundle = plusieurs produits en une unité (kit toner · trousse scolaire)`;

/** Contenu Module 311 — Concepts d'approvisionnement */
const DEMO_311_THEORIE_FULL = `## 11. Les concepts de l'approvisionnement

### 11.1 Approvisionnement (*Procurement / Purchasing*)

Service qui s'occupe de l'approvisionnement de l'entreprise : matériel de production, services (conseil, formation…), marchandises destinées à la revente.

Tendance : on produit moins soi-même, on **achète plus** → importance croissante. Achats autrefois locaux/régionaux → aujourd'hui **mondiaux**. Tous les flux de marchandises sont déclenchés par l'approvisionnement et mis en œuvre par la **logistique**.

### 11.2 Formes d'approvisionnement

Le marché exige un **délai de réapprovisionnement** acceptable. Le **délai d'approvisionnement** (commande → dispo stock) doit être **≤** ce délai accepté. Sinon → gérer l'article **en stock** pour livrer immédiatement.

**Composition du délai d'approvisionnement :**
1. Détermination et communication des besoins
2. Offres, négociations, choix fournisseurs
3. Déroulement de la commande
4. Attente confirmation
5. Délai de livraison
6. Délai de transport
7. Entrée marchandises (contrôles qté/qualité)
8. Transport vers entrepôt / lieu de consommation

Si le fournisseur ne tient pas le délai accepté → risque de **perdre le client**.

| Forme | Principe | Avantages | Inconvénients |
| --- | --- | --- | --- |
| **Approvisionnement (stock)** | Acheter plus que le besoin immédiat · réserve en entrepôt | Autonomie marché/fournisseurs · capacité de livraison | Capital immobilisé · risque de stocks morts |
| **Juste-à-temps (JIT)** | Acheter seulement quand besoin, quantité exacte | Peu d'immobilisation · collaboration fournisseurs | Stocks « sur la route » · pollution · dépendance ponctualité/qualité |
| **Synchronisé fabrication** | Variante JIT : livraison exacte à la date de prod. (ex. auto) | Stocks très bas · partenaire intégré | Dépendance forte |

Souvent **mix** des trois selon articles / concept.

### 11.3 Concepts de sourcing

Formes mixtes fréquentes.

| Concept | Idée |
| --- | --- |
| **Global sourcing** | Achats internationaux · coûts · logistique mondiale |
| **Local sourcing** | Région/pays · biens critiques · moins de retards transport · prix parfois ↑ |
| **Single sourcing** | Un seul fournisseur · partenariat long terme · optimisation processus · volume/rabais |
| **Double sourcing** | Deux fournisseurs concurrents · moins de dépendance · volumes parfois trop faibles pour rabais |
| **Multiple sourcing** | Plusieurs fournisseurs · prix court terme · interchangeabilité · biens standardisés (ex. max 33 % chez un fournisseur) |
| **Modular / system sourcing** | Modules/sous-ensembles prêts · montage final · hors compétences clés · dépendance fournisseurs |

### 11.4 Stock et délai d'approvisionnement

Pas de gros stocks si article toujours dispo chez fournisseurs régionaux. Stocks bas si courte distance + réappro permanent. Distance ↑ ou dispo irrégulière → stocks ↑.

> Le stock couvre les besoins (clients/production) **en attendant** la prochaine livraison.

**Ex. bananes :** récolte verte → carton → bateau ~2 semaines en CA (atmosphère contrôlée) → mûrisserie → rayon.

**Dilemme :** stock élevé = coûts (capital) · stock bas = risque de mauvaise disponibilité.

### 11.5 Procédures de commande (variation liée à la consommation)

À chaque article : une **procédure de commande**.

| Procédure | Déclencheur | Quantité | Remarques |
| --- | --- | --- | --- |
| **Point de commande · qté fixe** | Stock ≤ point de commande | Toujours **q** fixe | Simple · forte rotation · contrats long terme · risque surstock si demande ↓ |
| **Point de commande · qté variable** | Stock ≤ point de commande | Remonter au **max** | Suit les ventes · espace max stable · calcul à chaque fois |
| **Rythme · date fixe · qté variable** | Moment **t** fixe | Jusqu'au max | Pas de cote d'alerte · livraisons régulières contractuelles · risque dépassement max si ventes ↓ |
| **Rythme · date fixe · qté fixe** | Moment **t** fixe | **q** fixe | Ventes stables · automatisable si bons paramètres |

Point de commande à qté fixe = **orienté consommation** (cadence suit l'usage).

### 11.6 Quantité de commande optimale (Qopt)

**Harris** (1913) / **Andler** (1929) · angl. **EOQ** (*Economic Order Quantity*).

Deux courbes :
- **Coûts de stockage** ↑ avec la quantité
- **Coûts de passation de commande** / pièce ↓ avec la quantité

Qopt = intersection / point bas des coûts totaux.

Coûts de commande (internes) : offres, commande, réception, AQ, factures… souvent estimés **100–200 CHF**/commande (ou plus). Ex. : 150 CHF / 1 pce = 150 · / 4 pces = 37.50…

#### 11.6.1 Formule d'Andler — conditions

Besoins connus et constants · entrée/consommation uniformes · prix et coûts de commande constants · coûts de stockage connus et constants.

| Symbole | Sens |
| --- | --- |
| Q / Qopt | Quantité (optimale) de commande |
| m ou M | Besoin annuel |
| a ou B | Coût de passation de commande |
| p ou P | Prix d'achat unitaire |
| q ou L | Coût de stockage (% valeur) |

Formule usuelle (Andler / EOQ) :

**Qopt = √( 2 × M × B  /  (P × L) )**

(avec L en décimal, ex. 28 % → 0,28)

#### 11.6.2 Exemple

M = 30'000 · P = 4.50 · B = 1'250 · L = 28 %  
→ Qopt ≈ **7'715** pièces (~8'000 dans un tableau) · ~**4** commandes/an.

### 11.7 Analyse ABC / XYZ

#### 11.7.1 Pareto (80/20)

Vilfredo Pareto (1906) : ~20 % de la pop. → ~80 % de la fortune. Généralisé : 20 % d'effort → 80 % de résultat ; 20 % clients → 80 % CA. En stockage → **analyse ABC**.

| Classe | Part quantité (ex.) | Part valeur/rotation (ex.) | Action typique |
| --- | --- | --- | --- |
| **A** | 20 % | 75 % | Près de la sortie/prod · priorité achats |
| **B** | 30 % | 20 % | Zone centrale · 2e priorité |
| **C** | 50 % | 5 % | Zone arrière · 3e priorité |

Critères : **rotation** et/ou **valeur**.

#### 11.7.2 ABC selon valeur de commande

Classer articles par valeur cumulée. Ex. : 4 articles = 20 % qté et ~80 % valeur → effort particulier (négociations prix).

#### 11.7.3 Optimisation des emplacements

Stockage chaotique → trajets longs. Après ABC : articles **A** près de la production → trajets ↓.

#### 11.7.4 Analyse XYZ (prévisibilité)

| Classe | Consommation | Prévision |
| --- | --- | --- |
| **X** | Très régulière | Grande précision |
| **Y** | Tendance régulière ↑/↓ | Moyenne |
| **Z** | Très irrégulière | Faible |

Liens formes d'appro : stock · au cas par cas · JIT.

#### 11.7.5 Fusion ABC × XYZ

XA/XB/XC = plus faciles à planifier · ZA/ZB/ZC = plus difficiles.

**Contrats sur appel / cadres** (souvent YA, ZA) : quantité annuelle garantie · fournisseur tient stock · acheteur commande le besoin net (→ module 110) · délai court · stocks bas · bons prix.

### 11.8 Conséquences sur la réception des marchandises

Réception = entre livraison et stockage (modules 304, 308, 309) : déchargement, contrôles, AQ, stockage ou signalement achats.

**Effet du mode d'acquisition :** passer un article XB d'Andler/lots à **JIT** → plus de livraisons → **surcharge** réception (peut annuler le gain stock).

**Solution (ex.) :** fournisseur ISO 9001 inclut les points de contrôle client dans son contrôle sortie + certificat → réception réduite à réception/stockage/enregistrement. Applicable **au cas par cas** selon directives internes.`;

const DEMO_311_THEORIE_SUMMARY = `## À retenir — Module 311

### Approvisionnement
Achat mondial croissant · délai appro ≤ délai marché accepté sinon stock

### Formes
Stock · JIT · sync. fabrication (mix fréquent)

### Sourcing
Global / local · single / double / multiple · modular-system

### Commande
Point commande q fixe/variable · rythme date fixe q fixe/variable  
**Andler/EOQ** : Qopt = √(2MB / PL) · conditions restrictives

### ABC-XYZ
Pareto 80/20 · A près sortie · XYZ = prévisibilité  
XA–XC faciles · ZA–ZC difficiles · contrats cadres/appel

### Réception
JIT ↑ fréquences → charge réception · certificat fournisseur ISO possible`;

const DEMO_311_APERCU_FULL = `## Aperçu du module 311

Ce module clôture le bloc **approvisionnement** : formes d'appro, concepts de sourcing, procédures de commande, formule d'Andler, analyses ABC/XYZ et impact sur la réception.

### Vous allez découvrir
1. Délai d'approvisionnement vs délai accepté par le marché
2. Stock, JIT, sync. fabrication
3. Global/local, single/double/multiple, modular sourcing
4. Quatre procédures de commande + Qopt (Andler)
5. ABC, XYZ, contrats cadres et effets sur la réception

### Source
EnterSite — Logistics by ASFL / SVBL · Fin du bloc 300`;

const DEMO_311_APERCU_SUMMARY = `## Aperçu — Module 311
- Formes d'appro & sourcing
- Procédures de commande + Andler
- ABC/XYZ · impact réception`;

const DEMO_311_OBJECTIFS_FULL = `## Objectifs du module 311

À l'issue de ce module, l'apprenti·e est capable de :

- Relier **délai d'approvisionnement** et besoin de stock
- Comparer stock, **JIT** et sync. fabrication ainsi que les concepts de **sourcing**
- Choisir une **procédure de commande** adaptée
- Calculer une **Qopt** (Andler) dans les conditions du modèle
- Utiliser les analyses **ABC** et **XYZ** et en déduire des formes d'appro / emplacements
- Expliquer l'impact du mode d'acquisition sur la **réception**`;

const DEMO_311_OBJECTIFS_SUMMARY = `## Objectifs
- Formes & sourcing
- Commande + Andler
- ABC/XYZ · réception`;

/** Contenu Module 312 — Données de stockage */
const DEMO_312_THEORIE_FULL = `## 12. Données de stockage

### 12.1 STOCK : définition et importance

Le **stock** = ensemble des produits stockés (matières premières, semi-finis, finis).

Rôle : couvrir les besoins futurs (clients / production) et garantir une exploitation normale. Coût = **capital immobilisé**. Trop élevé → argent manquant pour d'autres investissements. Trop faible → rupture, CA ↓, retards de production.

> Règle : **aussi peu que possible — autant que nécessaire.**

Niveau idéal = satisfaire demande interne/externe **sans** surstocks. Exige chaînes d'approvisionnement fiables + **prévisions de vente** transparentes.

### 12.2 Classification (date / périssabilité)

| Groupe | Caractéristique | Principe | Exemples |
| --- | --- | --- | --- |
| **Avec date d'expiration** | À consommer avant date | **FEFO** (First Expired, First Out) | Médicaments, yaourt, lait… |
| **Périssables** | Qualité qui se dégrade vite | **FIFO** (First In, First Out) | Surgelés, viande/poisson, fruits/légumes, fleurs, chimie |
| **Non périssables** | Qualité stable dans le temps | **LIFO** possible | Vis/écrous, tubes/profilés, machines |

### 12.3 Types de stocks

**Stock physique (réel)** — couvre la demande courante clients/production, quel que soit l'emplacement.

**Stock mini (minimum)** — couvre la consommation pendant le délai de réapprovisionnement.

> Stock mini = consommation journalière × délai de réapprovisionnement (jours)

**Stock de sécurité** — quantité toujours présente (souvent dans l'ERP) pour :
- besoins supplémentaires non prévus / aléas de production
- délai de réappro retardé  
→ maintient la **capacité de livraison**.

**Stock maximum** — limite supérieure (place, coûts, obsolescence technique — ex. multimédia).

**Point de commande (cote d'alerte)** — seuil déclenchant une nouvelle commande :

> Point de commande = (consommation journalière × délai réappro) + stock de sécurité

**Stock négatif (manquant)** — pas physique ; indique la quantité manquante / incapacité à livrer. À éviter.

**Stock temporaire** — lié aux temps de passage différents (AQ entrée, conditionnement sortie…).

**Stock saisonnier** — demande liée à une saison/événement (ex. lapins de Pâques).

**Stock dormant** — obsolète techniquement ou périmé → à retirer.

**Stock spéculatif** — achat anticipé (hausse de prix / risques livraison) au-delà du stock actif.

### 12.4 Aspect opérationnel

| Notion | Sens |
| --- | --- |
| **Stock optimal** | Équilibre besoins / commandes / coûts de stockage (rentabilité) |
| **Sur réservation / JIT** | Court terme · quantités exactes · stocks bas |
| **Réservation** | Précommandé pour un but · encore physique jusqu'à la sortie |
| **Stock total / physique** | Quantité réellement présente |
| **Stock net** | Total − réservations |
| **Stock disponible** | Total − réservé − AQ − bloqué |
| **Stock AQ** | Physique mais non utilisable tant que contrôle qualité en cours · dans total, pas disponible · si KO → bloqué |
| **Stock bloqué** | Non utilisable/livrable · dans total, pas disponible |

### 12.5 Gestion des stocks

#### 12.5.1–12.5.2 Article

Marchandise stockée **identique dans toutes ses parties**. Une caractéristique différente (ex. hauteur) → **nouveau n° d'article**.

Ex. cylindre ∅ 45 mm : H 125 / 135 / 145 → trois n° distincts.

#### 12.5.3 En-tête de fiche (données **statiques**)

| Champ | Rôle |
| --- | --- |
| N° d'article | Identification unique |
| Désignation | Complément / anti-confusion |
| Unité de livraison (UL) | Qté min. de commande fournisseur (ex. par 5) |
| Unité de vente (UV) | Qté min. de vente (souvent 1) |
| Prix d'achat | Interne · valeur de stock · ≠ prix de vente |
| Fournisseur | Fournisseur standard |
| Stock maximum | Limite |
| Point de commande | Proposition de commande auto |
| Stock de sécurité | Capacité de livraison |

#### 12.5.4 Mouvements (données **dynamiques**)

Date · Entrées (↑) · Sorties (↓) · Réservé · AQ · Bloqué · **Disponible** · **Total**  
Total = disponible + réservé + AQ + bloqué.

#### 12.5.5–12.5.7 Comptabilisations

- Entrées/sorties **physiques** → disponible et total bougent de la **même** quantité.
- Entrée en **AQ** → ↑ total, pas le disponible ; libération OK → AQ → disponible (total inchangé) ; part KO → **bloqué** ; retour fournisseur → sortie + ↓ total.
- **Réservation** → ↑ réservé, ↓ disponible, total inchangé ; à la sortie prévue → réservé → 0, ↓ total ; disponible déjà ajusté.
- Sortie supplémentaire le même jour qu'une réservation : disponible ↓ seulement de la nouvelle sortie ; total ↓ réservation + nouvelle sortie.

#### 12.5.8 Cycle graphique (schéma typique)

Baisse régulière → point de commande → commande → arrivée avant stock mini → hausse (parfois jusqu'au max) → forte demande : stock de sécurité évite la rupture · ou consommation trop forte → stock mini épuisé → **rupture / non-livraison**.

### 12.6 Conclusion

Ces données donnent du sens opérationnel aux **6B** (Jünemann) : bonne marchandise, quantité, qualité, moment, endroit, prix.`;

const DEMO_312_THEORIE_SUMMARY = `## À retenir — Module 312

### Stock
Aussi peu que possible — autant que nécessaire  
Surstock = capital · rupture = CA / production

### Classification
FEFO (DLC) · FIFO (périssable) · LIFO possible (non périssable)

### Formules
Stock mini = conso/j × délai  
Point de commande = stock mini + stock de sécurité

### Types
Physique · sécurité · max · négatif · saisonnier · dormant · spéculatif · temporaire  
Disponible = total − réservé − AQ − bloqué

### Fiche
En-tête statique · mouvements dynamiques  
AQ/bloqué/réservation : effets distincts sur disponible vs total`;

const DEMO_312_APERCU_FULL = `## Aperçu du module 312

Ce module présente les **données de stockage** : définition du stock, classification, types de stocks, fiche article et comptabilisations (disponible, AQ, bloqué, réservé).

### Vous allez découvrir
1. Importance du niveau de stock
2. FEFO / FIFO / LIFO
3. Stock mini, sécurité, max, point de commande
4. Stock disponible vs total (AQ, bloqué, réservé)
5. Fiche de stock et exemples de comptabilisation

### Source
EnterSite — Logistics by ASFL / SVBL · Suite du bloc 300 / transition stockage`;

const DEMO_312_APERCU_SUMMARY = `## Aperçu — Module 312
- Niveau de stock idéal
- Types & formules
- Fiche · disponible / total`;

const DEMO_312_OBJECTIFS_FULL = `## Objectifs du module 312

À l'issue de ce module, l'apprenti·e est capable de :

- Expliquer l'importance du **niveau de stock** pour l'entreprise
- Classer les stocks (FEFO / FIFO / LIFO) et citer les principaux **types**
- Calculer **stock mini** et **point de commande**
- Distinguer stock **disponible**, réservé, AQ, bloqué et **total**
- Lire une **fiche de stock** et comptabiliser entrées, sorties, AQ et réservations`;

const DEMO_312_OBJECTIFS_SUMMARY = `## Objectifs
- Niveau de stock
- Types & formules
- Fiche / comptabilisations`;

/** Contenu Module 401 — Le rôle du stockage */
const DEMO_401_THEORIE_FULL = `## 1. Le rôle du stockage

### 1.1 La fonction de réserve

Le stockage de réserves n'est pas nouveau : denrées alimentaires chez nos ancêtres ; en Suisse, **réserves obligatoires** de la Confédération pour l'approvisionnement en crise ; chez l'écureuil, noisettes dispersées (comparable au stockage **chaotique** → module **406**).

**Définition chez EnterSite AG :** « stockage » désigne à la fois le **local** où l'on stocke et les **biens** qui y sont conservés.

**Remarque :** on ne peut souvent pas acheter uniquement la quantité immédiatement nécessaire → l'entrepôt tient un **stock de réserve**.

### 1.2 Aperçu des fonctions de stockage

#### 1.2.1 Fonction de sécurité

Forme la plus importante. Stocks d'urgence = fonction de **réserve**, aussi appelée **tampon** ou **compensation**, pour surmonter des situations critiques :

- retards de livraison / difficultés de transport
- variations de consommation (demande ↑ ou aléas de production)
- marchandises livrées insuffisantes ou défectueuses

**Remarque :** en langage technique, on parle aussi de **stock de sécurité**.

#### 1.2.2 Fonction de transformation

Dans les entrepôts commerciaux : transvaser, mélanger, trier — mettre les marchandises à disposition dans les **quantités** souhaitées ou en **kits**.

Exemples typiques :
- reconditionnement
- coupe / découpe
- mélange (chimie, colorants)
- prémontage de composants
- séchage (ex. bois)

#### 1.2.3 Fonction de contrôle et de tri

Dans le flux de marchandises :
- identification
- contrôle quantité et état
- suivi des délais

**Tri :** marchandises obsolètes, inutiles ou périmées → élimination selon directives entreprise.

#### 1.2.4 Fonction de spéculation

Acheter au bon moment (avant hausse de prix) pour obtenir un avantage — ex. mazout en été, revente plus cher ensuite.

#### 1.2.5 Fonction d'affinage ou de maturation

Certaines marchandises n'atteignent leur qualité optimale qu'après stockage adapté (fromage, vin, produits carnés…). Locaux souvent appelés **entrepôts de maturation**.`;

const DEMO_401_THEORIE_SUMMARY = `## À retenir — Module 401

### Stockage
Local + biens · réserve nécessaire (pas seulement le besoin immédiat)  
Chaotique ≈ « cachettes » dispersées → module 406

### Fonctions
1. **Sécurité** (tampon / stock de sécurité) — retards, variations, défauts  
2. **Transformation** — reconditionnement, kits, découpe, mélange, séchage…  
3. **Contrôle & tri** — ID, qté/état, délais · élimination obsolète/périmé  
4. **Spéculation** — achat anticipé pour prix  
5. **Affinage / maturation** — fromage, vin, charcuterie…`;

const DEMO_401_APERCU_FULL = `## Aperçu du module 401

Ce module introduit le **rôle du stockage** : fonction de réserve et autres fonctions (sécurité, transformation, contrôle, spéculation, maturation).

### Vous allez découvrir
1. Définition du stockage chez EnterSite
2. Fonction de sécurité / stock de sécurité
3. Transformation, contrôle-tri, spéculation, affinage

### Source
EnterSite — Logistics by ASFL / SVBL · Début du bloc 400`;

const DEMO_401_APERCU_SUMMARY = `## Aperçu — Module 401
- Réserve & définition
- 5 fonctions du stockage`;

const DEMO_401_OBJECTIFS_FULL = `## Objectifs du module 401

À l'issue de ce module, l'apprenti·e est capable de :

- Définir le **stockage** (local et biens) et la fonction de **réserve**
- Expliquer la fonction de **sécurité** (stock de sécurité / tampon)
- Citer et illustrer les fonctions de **transformation**, **contrôle-tri**, **spéculation** et **affinage/maturation**`;

const DEMO_401_OBJECTIFS_SUMMARY = `## Objectifs
- Définition + réserve
- 5 fonctions du stockage`;

/** Contenu Module 402 — Les genres de stockage */
const DEMO_402_THEORIE_FULL = `## 2. Les genres de stockage

Tous les entrepôts ne sont pas identiques. Critères de planification (ex. EnterSite AG) :
- Quelles **marchandises** stocker ?
- Dans quel **domaine d'activité** ?
- **Où** se trouve l'entrepôt ?
- Quelle **fonction** doit-il remplir ?

### 2.1 Distinction selon les marchandises

Caractéristiques influençant manipulation et stockage (→ module **105**) :
- dimensions / volume
- densité (poids)
- état physique (solide, liquide, gazeux)
- durabilité (périssable, fragile, empilable)
- valeur (stockage sécurisé)
- etc.

#### 2.1.1 Entrepôt de matières premières

Acier, bois, coton… = composants principaux de la production. Stock **centralisé** pour toute l'entreprise ou **décentralisé** près de la production. Chez EnterSite : surtout fonction **tampon** pour la chaîne de production.

#### 2.1.2 Entrepôt self-service

Petit stock de petites quantités d'articles **fréquents** (vis, rondelles, joints…). Les collaborateurs se servent **sans** comptabiliser chaque prélèvement. Contrôles périodiques pour recalculer les stocks.

#### 2.1.3 Entrepôt de produits finis

Produits non vendus immédiatement → stockage temporaire. Lien **production ↔ vente**. En détail/gros : **stock de vente** (achat producteur → vente petites quantités). L'espace de vente au client = aussi « entrepôt de vente ».

### 2.2 Distinction par secteur

Chaque branche a ses dispositions.

#### 2.2.1 Entreprises de fabrication (production)

Ex. EnterSite : stylos, cartouches, agrafes. Trois types d'entrepôts dans le processus :

**En amont** — approvisionner la fabrication (MP, semi-finis…) pour une production équilibrée et une bonne utilisation des moyens.

**Intermédiaire** — temps d'attente entre étapes (prémontage → fabrication → peinture → montage final). Fonction de **transition**. Pharma : « **bulk** » (grands récipients, pas encore emballage de vente).

**En aval** —
- approvisionnement régulier commerce/vente
- absorption des excédents de production
- équilibre offre / demande

#### 2.2.2 Entreprise de distribution

Poste, expéditeurs, transports → entrepôts de **transbordement** (→ module **600**).

**Entrepôt de transbordement** = sans stock durable. Stockage temporaire pour :
- changement de moyen de transport
- tri des envois
- préparation au chargement
- formalités douanières / importation

Souvent aux **nœuds** : ports, gares, aéroports, terminaux conteneurs, centres de tri.

**Tâches administratives :** douane · contrôles de sécurité · lettres de voiture · facturation transport.

#### 2.2.3 Entreprises commerciales

Grandes quantités pour détail et fabrication.

**Centre / entrepôt de distribution (livraison)** — réduit distance et délai vers les clients. Un producteur peut aussi stocker chez un transporteur pour livraisons rapides.

**Entrepôt de consignation** — marchandises propriété du **fournisseur**, stockées chez le client ; prélèvements décomptés périodiquement. Client : flux assuré + **moins** de capital immobilisé.

### 2.3 Choix du site géographique

**Facteurs internes :** type de biens · poids · volume · durabilité · taux de rotation  

**Facteurs externes :** règles de construction · environnement · bruit · marchandises dangereuses · circulation  

#### 2.3.1 Centralisé vs décentralisé (production)

Idéal : proximité production. Choix central / décentralisé.

**Centralisé — avantages :**
- stocks plus bas
- achats facilités (moins de commandes, plus de volume → rabais)
- meilleure exploitation de l'espace
- infrastructure optimisée
- planification du personnel facilitée

**Décentralisé** — si distance trop grande (lourds/volumineux, **JIT**).  
Avantages : flux d'infos ↑ · trajets ↓ · marchandises spéciales mieux coordonnées.

### 2.4 Entrepôt temporaire

Accueillir temporairement jusqu'à enlèvement/consommation. Ex. : consignes à bagages, casiers, boîtes aux lettres — souvent **courte** durée (heures).

Exception : dépôts intermédiaires de déchets radioactifs en Suisse (parfois **années** faute de stockage définitif).

### 2.5 Entrepôt de maturation

Produits qui doivent mûrir : fromage (4–12 mois), produits carnés, vin/bière/spiritueux, fruits.

Goût évolue (fromage : doux → corsé). Climat décisif ; grottes / anciens ouvrages militaires ; entretien (solution saline).

Fruits exotiques : transport verts → **mûrisseries** (ex. bananes des grands distributeurs).`;

const DEMO_402_THEORIE_SUMMARY = `## À retenir — Module 402

### Critères
Marchandises · activité · localisation · fonction

### Selon marchandises
MP (tampon) · self-service · produits finis / vente

### Selon secteur
**Production** : amont · intermédiaire (bulk) · aval  
**Distribution** : transbordement (sans stock durable) + admin  
**Commerce** : centre distribution · **consignation** (propriété fournisseur)

### Site
Internes vs externes · centralisé (stocks ↓, rabais) vs décentralisé (trajets ↓, JIT)

### Autres
Temporaire (casiers…) · maturation (fromage, vin, bananes)`;

const DEMO_402_APERCU_FULL = `## Aperçu du module 402

Ce module présente les **genres de stockage** selon marchandises, secteur, site, et les cas particuliers (temporaire, maturation).

### Vous allez découvrir
1. Entrepôts MP, self-service, produits finis
2. Production (amont/intermédiaire/aval), distribution, commerce
3. Centralisé vs décentralisé
4. Transbordement, consignation, maturation

### Source
EnterSite — Logistics by ASFL / SVBL · Suite du module 401`;

const DEMO_402_APERCU_SUMMARY = `## Aperçu — Module 402
- Genres selon marchandises & secteurs
- Central / décentral
- Transbordement · consignation · maturation`;

const DEMO_402_OBJECTIFS_FULL = `## Objectifs du module 402

À l'issue de ce module, l'apprenti·e est capable de :

- Distinguer les entrepôts selon les **marchandises** (MP, self-service, finis)
- Expliquer les entrepôts de **production**, **distribution** et **commerce**
- Comparer stockage **centralisé** et **décentralisé**
- Décrire transbordement, **consignation**, entrepôts **temporaires** et de **maturation**`;

const DEMO_402_OBJECTIFS_SUMMARY = `## Objectifs
- Genres d'entrepôts
- Central / décentral
- Transbordement · consignation · maturation`;

/** Contenu Module 403 — Les formes de stockage */
const DEMO_403_THEORIE_FULL = `## 3. Les formes de stockage

### 3.1 Stockage au sol

Marchandises placées **au sol**. Variante de base pour le détail : peu d'organisation, coûts réduits.

#### 3.1.1 Bloc à plat
Unités **non empilées**, accès via couloirs entre rangées. Grande surface. Idéal : volumineux, spéciaux, voitures, vrac (gravier).

#### 3.1.2 Bloc en piles
Base au sol + empilement. Matériel **insensible à la pression** + moyens de gerbage. Grandes quantités du même article (promos, harasses/palettes vides). Attention : **charge au sol** (kg/m²).

#### 3.1.3 Empilage de marchandises
Autorisé si chargement solide et conditions OK (T°, humidité…). Respecter hauteur de pile, contrôle régulier. Sacs : pas d'endommagement, pile stable.

#### 3.1.4 Lignes ou rangées
- **Lignes** (l'une derrière l'autre) : accès à l'unité suivante de la ligne
- **Rangées** (côte à côte) : accès à chaque unité · allée entre chaque rangée

Disposition longi/transversale. Piles inclinées → démonter et reconditionner aussitôt.

**Remarque :** stockage au sol économique pour blocs/rangées quand l'accès à **chaque** unité n'est pas obligatoire.

#### 3.1.5 Bouteilles sous pression
Gaz en bouteilles acier : ne doivent **pas** pouvoir se renverser → souvent **chaîne**. Même exigence pour le transport interne.

#### 3.1.6 Produits longs et panneaux
Tubes/barres souvent horizontaux ; pièces individuelles verticales en **râteliers** (séparation, recherche facile). Attention forces latérales au prélèvement vertical. Surveiller la **déformation**.

### 3.2 Rayonnage compartimenté

Aussi : rayonnage à tablettes / plateaux. Marchandises de détail **sans** palette · étagères. Pièces individuelles, petits volumes/poids. Tiroirs et bacs → nombreuses références · préparation manuelle.

#### 3.2.1 À étages
Plusieurs niveaux pour optimiser l'espace. **ABC** : rotation rapide = trajets courts ; lente = fond / haut.

### 3.3 Rayonnage à palettes

Montants + **traverses (lisses)** · palettes dessus. Souvent pas de sécurité arrière contre basculement (palette = support). Simple (contre mur) ou double (deux côtés).

**Versions :** charge/traverse typique 1600–1800 kg · lourds jusqu'à ~4500 kg · intérieur / extérieur (galvanisé).

**Traverses :** profilés tôle · goupilles anti-soulèvement fourches · charge indiquée. Montants endommagés (chariots) → capacité ↓ → **remplacer**.

**Accessoires :**
- **Protection antichoc** (montants)
- **Butée arrière** (palettes ne passent pas derrière)
- **Grille** anti-chute (zones piétonnes derrière / sous rayonnage)
- Supports pour marchandises non palettisées

### 3.4 Rayonnage drive-in

Alternative au stockage en bloc : canaux de rayonnages continus. Palettes sur **profilés latéraux** (pas empilées) → marchandises sensibles à la pression possibles. Remplissage d'un côté → seule l'avant accessible. Grandes quantités non empilables · **FIFO impossible**.

### 3.5 Drive-in à double entrée

Accessible des **deux** côtés : entrée d'un côté, sortie de l'autre → **FIFO** possible.

### 3.6 Rayonnage dynamique

Marchandises sur plan incliné à **rouleaux** · gravité du chargement vers le prélèvement (dynamique). Remplissage d'un côté, prélèvement de l'autre.

#### 3.6.1 Accumulation
Inclinaison vers la sortie · nouvelles poussent les anciennes → **LIFO**. Peu sensibles aux chocs, sans DLC.

### 3.7 Rayonnage cantilever (porte-à-faux)

Pour produits **longs** (planches, barres, tubes). Montant central + bras latéraux · accès sans traverse bloquante.

#### 3.7.1 Stockage horizontal auto (empileur)
Cassettes mobiles · déstockage automatique · plus coûteux.

### 3.8 Étagère / casier en nid d'abeille

Petites/moyennes quantités de marchandises longues (tunnels). Profondeur ≈ longueur (acier souvent 6 m). Plateforme mobile devant. Prélèvement main/pinces · découpe possible sur place. Profilés coupés moins visibles qu'en cantilever.

### 3.9 Rayonnage mobile

Rangées coulissantes **sans** allées fixes → gain d'espace. Allée ouverte seulement où besoin. Sur rails · direction unique · manuel ou moteur.

**Remarque :** beaucoup de place gagnée, **temps d'accès élevé** · quantités moyennes, **faible** rotation.

- **Compartiments mobiles** — surtout archives
- **Palettes mobiles** — faible rotation · chambres froides (m³ économisés = énergie ↓)

### 3.10 Rayonnages rotatifs

#### 3.10.1 Verticaux (« Paternoster »)
Compartiments sur chaînes verticales · souvent fermés/verrouillables (anti-vol · valeur). Prélèvement à hauteur ergonomique · clavier. Un utilisateur à la fois.

#### 3.10.2 Horizontaux
Casiers sur roulements / chaîne · « la marchandise va à l'homme ».

### 3.11 Stockage suspendu

#### 3.11.1 Statique
Cintres/crochets · housses · multi-niveaux avec plateformes.

#### 3.11.2 Dynamique
Convoyeur horizontal (rails + chaîne) · textiles, conteneurs… Piloté par ordinateur · « marchandise vers l'homme ». Textile, boucheries industrielles, distributeurs, vestiaires événements.

### 3.12 Installations modernes

#### 3.12.1 Navette (satellite)
Véhicule autonome pour entreposer / transférer / retirer. Petites pièces et conteneurs · volume optimisé · frigorifique jusqu'à < −30 °C.

#### 3.12.2 Robots de prélèvement
Automatiques : tâche partielle ou complète. **Cobots** (collaboratifs) · **AMR** (autonomes dans les allées).

#### 3.12.3 Hauts rayonnages (grande hauteur)
Hauteur ~**15–45 m** · milliers à centaines de milliers d'emplacements. Fort investissement · WMS · transstockeurs. Préparation statique (homme → marchandise) ou dynamique (marchandise → homme).

#### 3.12.4 Autostore
Norvège · petites pièces · bacs empilés (sans rayonnage classique) · robots. Rotation rapide en haut, lente en bas.

**Avantages :** espace · protection (vol/poussière) · rotation ↑ · pré-ordonnancement WMS · 24/7 · extensible  
**Inconvénients :** limité volume/poids (petites pièces)`;

const DEMO_403_THEORIE_SUMMARY = `## À retenir — Module 403

### Sol
Bloc plat / piles · lignes/rangées · bouteilles (chaîne) · longs/panneaux

### Rayonnages
**Compartimenté** (petites pièces, étages + ABC)  
**Palettes** : traverses, antichoc, butées, grilles · 1,6–4,5 t/traverse  
**Drive-in** (1 côté, pas FIFO) · **double entrée** (FIFO)  
**Dynamique** (gravité) · **accumulation** (LIFO)  
**Cantilever** / nid d'abeille · **mobile** (place ↑, accès ↓)  
**Rotatif** V/H · **suspendu** statique/dynamique

### Moderne
Navettes · cobots/AMR · hauts rayonnages 15–45 m · **Autostore**`;

const DEMO_403_APERCU_FULL = `## Aperçu du module 403

Ce module présente les **formes de stockage** : sol, rayonnages classiques et solutions modernes (navettes, robots, Autostore).

### Vous allez découvrir
1. Stockage au sol (bloc, piles, longs, gaz)
2. Compartimenté, palettes, drive-in, dynamique, cantilever
3. Mobile, rotatif, suspendu
4. Navettes, robots, hauts rayonnages, Autostore

### Source
EnterSite — Logistics by ASFL / SVBL · Suite des modules 401–402`;

const DEMO_403_APERCU_SUMMARY = `## Aperçu — Module 403
- Sol & rayonnages classiques
- Drive-in / dynamique / cantilever
- Mobile · rotatif · moderne (Autostore)`;

const DEMO_403_OBJECTIFS_FULL = `## Objectifs du module 403

À l'issue de ce module, l'apprenti·e est capable de :

- Décrire le stockage **au sol** et ses variantes
- Comparer rayonnages **compartimenté**, **palettes**, **drive-in**, **dynamique**, **cantilever**
- Expliquer rayonnages **mobiles**, **rotatifs** et stockage **suspendu**
- Situer les solutions modernes (navettes, robots, hauts rayonnages, **Autostore**) et leurs limites`;

const DEMO_403_OBJECTIFS_SUMMARY = `## Objectifs
- Sol & rayonnages
- FIFO/LIFO selon forme
- Solutions modernes`;

/** Contenu Module 404 — Prescriptions de stockage */
const DEMO_404_THEORIE_FULL = `## 4. Prescriptions de stockage

### 4.1 Entrepôts ouverts, couverts, fermés

#### 4.1.1 À ciel ouvert
Biens **insensibles** aux intempéries et peu exposés au vol. Terrain accessible, souvent clôturé.

Ex. : citernes · vrac (charbon, sable, gravier) · bois non transformé · ciment durci · containers · tubes béton en bloc.

#### 4.1.2 Couverts (semi-ouverts)
Toit, **ouverts** sur les côtés. Protection soleil/pluie ; insensibles aux variations T°/humidité ; peu de risque de vol.

Ex. : engins de chantier · tubes acier · planches brutes · palettes vides · tuiles/briques.

#### 4.1.3 Fermés
Marchandises sensibles aux intempéries ou au vol. Un ou plusieurs étages · murs + toit. Hauts rayonnages : souvent **structure de stockage d'abord**, puis enveloppe du bâtiment.

### 4.2 Hauteurs d'entrepôt

#### 4.2.1 Faible hauteur
Stockage au sol · chariots conventionnels (mâts ~**7 m**). Courant en **PME** · peu coûteux · rayonnages dans locaux existants.

#### 4.2.2 Moyenne hauteur
Jusqu'à ~**15 m** · locaux existants souvent ≤ 7 m → nouvelles infrastructures. Engins adaptés : chariots pour rayonnages hauts / allées étroites / mât rétractable / **transstockeurs**.

#### 4.2.3 Grande hauteur (MGH)
Jusqu'à ~**45 m** · rares en Suisse. Pas de chariots libres traditionnels → systèmes de stockage **complexes**.

### 4.3 Structure de l'entrepôt

#### 4.3.1 Mécanisés
Rayonnages moyens / hauts + **transstockeurs à conducteur**. Efficaces pour nombreux articles en petites quantités. Souvent 1 appareil / allée (changement d'allée rare).

#### 4.3.2 Automatiques
Matériel + **logiciels** · supervision humaine (dysfonctionnements). Accès restreint — danger **mortel** si entrée non autorisée. Transstockeurs commandés par ordinateur (entrée via convoyeurs / sortie via WMS).

#### 4.3.3 Systèmes complexes
Éléments en réseau : déchargement/chargement · stockage statique/dynamique · convoyeurs continus (bande, rouleaux) · discontinus (chariots, AGV, transstockeurs, monte-charge) · picking · emballage.

Défi : harmoniser les performances · une panne ne doit pas tout arrêter.

### 4.4 Conditions pour un stockage optimal

Stockage professionnel = conservation **ordonnée**. Trois principes :

#### 4.4.1 Propreté
Locaux, installations, outils, marchandises, voies.

Avantages : moins d'accidents · durabilité des équipements · satisfaction collaborateurs · image · moins de pertes/dégradations.

#### 4.4.2 Spaciosité
Assez d'espace → manutention optimale · entrées/sorties plus rapides · moins de recherches/déplacements inutiles · moins d'accidents.

#### 4.4.3 Netteté (clarté)
- **Zones** : entrée → sortie (+ secteurs selon entreprise)
- **Zones de stockage** : volume, rotation, valeur, périssabilité, dangerosité…
- **Marquage / étiquetage** : vue d'ensemble du transit interne
- **N° d'articles** : identification, information, contrôle, classification
- **Localisation** : attribution à un emplacement · base de la gestion informatisée · évite recherches et trajets à vide`;

const DEMO_404_THEORIE_SUMMARY = `## À retenir — Module 404

### Enveloppe
Ouvert (intempéries OK) · couvert (toit) · fermé (sensible/vol)

### Hauteur
Faible ~7 m · moyenne ~15 m · grande jusqu'à ~45 m (MGH)

### Structure
Mécanisé (transstockeur conducteur) · automatique (WMS, accès restreint) · système complexe (réseau d'installations)

### 3 principes
**Propreté** · **spaciosité** · **netteté** (zones, marquage, n°, localisation)`;

const DEMO_404_APERCU_FULL = `## Aperçu du module 404

Ce module traite des **prescriptions de stockage** : types d'enveloppe, hauteurs, structures (mécanisé/automatique) et conditions d'un stockage optimal.

### Vous allez découvrir
1. Entrepôts ouverts, couverts, fermés
2. Faible / moyenne / grande hauteur
3. Entrepôts mécanisés, automatiques et systèmes complexes
4. Propreté, spaciosité, netteté (zones, localisation)

### Source
EnterSite — Logistics by ASFL / SVBL · Suite du module 403`;

const DEMO_404_APERCU_SUMMARY = `## Aperçu — Module 404
- Ouvert / couvert / fermé
- Hauteurs & automatisation
- Propreté · espace · clarté`;

const DEMO_404_OBJECTIFS_FULL = `## Objectifs du module 404

À l'issue de ce module, l'apprenti·e est capable de :

- Distinguer entrepôts **ouverts**, **couverts** et **fermés**
- Situer les entrepôts selon leur **hauteur** et les engins associés
- Comparer structures **mécanisées**, **automatiques** et **complexes**
- Appliquer les principes de **propreté**, **spaciosité** et **netteté** (zones, marquage, localisation)`;

const DEMO_404_OBJECTIFS_SUMMARY = `## Objectifs
- Types d'enveloppe & hauteurs
- Mécanisé / auto
- 3 principes de stockage`;

/** Contenu Module 405 — Dangers dans les entrepôts */
const DEMO_405_THEORIE_FULL = `## 5. Dangers dans les entrepôts

Potentiels fréquents : **accidents** · **incendie** · **vol** · **substances dangereuses** · **nuisibles**.

Techniques de sécurité variables selon produits. Certaines entreprises connaissent les dangers sans appliquer les mesures.

### 5.1 Risque d'accident

Beaucoup d'engins + piétons dans un espace restreint. Voies pas toujours séparées → visiteurs particulièrement exposés. Rayonnages aussi soumis aux exigences de sécurité.

> Stockage et transport interne = parmi les activités logistiques les **plus risquées**.

**Empiler correctement :** sol plat et porteur · emplacement préparé · pile stable en elle-même · ne pas s'appuyer sur les murs · distances suffisantes · protéger les emballages · petites/légères sur grandes/lourdes · imbrication ou couches intermédiaires.

**Remarque :** plus la pile est haute, plus une irrégularité du sol déplace le centre de gravité → risque d'effondrement + pression asymétrique.

**Charge au sol :** max admissible affichée (kg/m² ou N/m²). En logistique : facteur ≈ **10** (75 kg → ~750 N). Détails → module **408**.

**Rayonnages :** stabilité · ne pas dépasser charges fabricant (traverse, sol, total) · charges réparties. Lisses non vissées → **goupilles**. Grilles anti-chute · protections antichocs aux angles. Contrôles réguliers (déformations, goupilles).

**Panneaux verticaux :** pas de « feuilletage » manuel · ne pas appuyer sans sécuriser · installations adaptées · compartiments ≤ **0,5 m**. Transport : préférer horizontal ; antidérapants.

**Armoires à tiroirs :** fixer mur/sol · blocage multi-tiroirs · remplir bas → haut · lourds en bas.

Toujours dégager **voies d'évacuation**, extincteurs, voies de circulation · portes coupe-feu non bloquées.

#### 5.1.1 Types de mesures
Humaines · techniques · matérielles · d'exploitation · légales. ~**80 %** erreurs humaines · ~**20 %** dispositifs manquants.

#### 5.1.2 Horaires de travail (apprentis CH)
Temps de travail = disponibilité pour l'employeur. Logistique : max **45 h/semaine**, **9 h/jour** (art. 9 LTr) dans une plage de 12 h (souvent 06–20 h ; jusqu'à 22 h si ≥ 16 ans). Repos quotidien ≥ **12 h** (< 18 ans). Nuit/dimanche : en principe interdits sans autorisation (exceptions formation). Contrôle écrit du temps obligatoire.

#### 5.1.3 Organisation des secours
Adapter à l'entreprise (risques, formation, postes, com, signalisation). S'entraîner. En urgence : **Observer → Réfléchir → Agir** (protéger/sauver d'abord, alerter).

**Schéma d'annonce :** Qui ? Quoi ? Quand ? Où ? Combien ? Autres dangers ?

Enquêter après incident pour améliorer.

**Principe STOP** (ordre) :
1. **S**ubstitution
2. **T**echnique
3. **O**rganisationnelle
4. **P**ersonnes (EPI, instructions)

Ex. rayonnage mobile EnterSite : cellules HS → plan de travail, pas de chariot pendant picking, gilets, chaussures de sécurité, instruction.

EPI logistique : tête · mains · dos (posture) · pieds.

### 5.2 Risque d'incendie

Grandes quantités de matériaux → feu vite majeur. Règles : **interdiction de fumer** · prudence aux réparations.

#### 5.2.1 Détection / extinction
- **Détecteurs** fumée / chaleur (~60 °C) · alarme interne d'abord (ex. 3 min) pour écarter fausse alerte
- **Sprinklers** : bouchon ~70 °C · jet jusqu'à ~8 m · prudence (dégâts d'eau)
- **Extinction CO₂** : pas d'eau · quitter la pièce à la pré-alarme (asphyxie)

#### 5.2.2 Classes de feu
Choisir l'agent adapté — mauvais agent = inefficace ou dangereux.

#### 5.2.3 Comportement
**Alerter → Sauver → Éteindre** (ne pas retarder l'alarme).

### 5.3 Risque de vol

Causes : contrôles faibles · interfaces · retours négligés · faiblesses orga · absence de directives.

Mesures : contrôles E/S fiables · retours soignés · séparation homme/marchandises · moyens techniques · emballage · contrôles sacs/portes.

### 5.4 Matières dangereuses

Danger pour personnes, animaux, environnement si mauvaise manipulation. Exigences strictes, contrôles autorités.

**Principe :** autant que nécessaire, **aussi peu que possible**. Accès fermé · récipients fermés · loin aliments/médicaments · quantités limitées au poste si usage permanent.

**FDS (fiche de données de sécurité) :** obligatoire · fabricant/importateur · dangers, protection, stockage, transport, élimination, accidents. Travailleur : suivre instructions / les demander / consulter FDS.

**SGH/GHS :** 9 symboles (→ module **105**) · classification mondiale · commerce · SST / environnement / transport.

**Zones :** pictogrammes Suva + interdiction d'accès.

**Risques :** incendie (gaz toxiques, explosions, eaux d'extinction) · inondations · fuites/élimination incorrecte.

Stockage : réduire risques · respect légal · état de l'art · piles sans endommager les récipients qui tombent.

### 5.5 Nuisibles

Trois groupes : champignons/bactéries · insectes · petits mammifères.

Prévention : entrepôt sec, propre, peu poussiéreux · T°/humidité/lumière défavorables. Lutte : chimie, physique, prédateurs, humain — limitation possible, exclusion totale rare.`;

const DEMO_405_THEORIE_SUMMARY = `## À retenir — Module 405

### Accidents
Piles stables · charge au sol · rayonnages (goupilles, grilles, antichocs)  
~80 % humain · STOP · EPI · apprentis : 45 h / 9 h · secours (observer-réfléchir-agir)

### Incendie
Non-fumeur · détecteurs · sprinklers / CO₂ · classes de feu  
**Alerter – Sauver – Éteindre**

### Vol
Contrôles E/S · retours · séparation · techniques

### MD
Peu que possible · FDS · SGH · zones signalées · accès fermé

### Nuisibles
Propreté + climat · lutte ciblée`;

const DEMO_405_APERCU_FULL = `## Aperçu du module 405

Ce module traite des **dangers dans l'entrepôt** : accidents, incendie, vol, matières dangereuses et nuisibles — avec mesures de prévention et comportement d'urgence.

### Vous allez découvrir
1. Empilage, charge au sol, sécurité des rayonnages
2. Mesures, horaires apprentis, secours, principe STOP
3. Détection/extinction incendie et classes de feu
4. Vol, MD (FDS, SGH), nuisibles

### Source
EnterSite — Logistics by ASFL / SVBL · Suite du module 404`;

const DEMO_405_APERCU_SUMMARY = `## Aperçu — Module 405
- Accidents & STOP
- Incendie · vol · MD · nuisibles`;

const DEMO_405_OBJECTIFS_FULL = `## Objectifs du module 405

À l'issue de ce module, l'apprenti·e est capable de :

- Appliquer les règles de **sécurité** d'empilage et de rayonnage
- Expliquer le principe **STOP**, l'organisation des **secours** et les bases du **temps de travail** apprentis
- Décrire prévention et comportement en cas d'**incendie**
- Citer mesures anti-**vol**, règles MD (**FDS**, SGH) et lutte contre les **nuisibles**`;

const DEMO_405_OBJECTIFS_SUMMARY = `## Objectifs
- Accidents / STOP / secours
- Incendie · vol · MD · nuisibles`;

/** Contenu Module 406 — Principes de stockage */
const DEMO_406_THEORIE_FULL = `## 6. Principes de stockage

### 6.1 Lotissement par case (emplacement fixe)

Chaque article a un emplacement **définitivement attribué** — « chaque chose à sa place ». Courant : rayons libre-service, entrepôts commerciaux, préparation de commandes.

Souvent sans **SGS** (gestion de stock informatisée). Inconvénient : fortes fluctuations → **mauvaise** utilisation de l'espace (emplacement réservé au stock **maximal** même si case quasi vide).

Cas optimal : stock max atteint (souvent juste après une livraison). Sinon : emplacements vides inutilisables pour d'autres articles.

### 6.2 Stockage chaotique (anarchique)

« Chaos » ≠ désordre ici. N'importe quel **emplacement libre** peut être attribué → meilleure exploitation de l'espace (pas de réservation du max par article).

**Remarque :** possible **uniquement** avec gestion de stock **assistée par ordinateur**.

#### 6.2.1 Conditions
Tenir compte des caractéristiques produits et **interdictions de stockage en commun** (systèmes optimisés). Prendre en compte fréquences / rotations. Répartir sur plusieurs zones → une panne n'empêche pas de déstocker tout un groupe.

### 6.3 FIFO — First In, First Out

Toujours sortir l'unité de chargement la **plus ancienne**. Évite que les marchandises restent trop longtemps. Surtout **périssables** / DLC (comme le réfrigérateur à la maison).

**Formes qui supportent le FIFO** (si bien utilisées) :
- rayonnage **dynamique**
- drive-in à **double entrée**
- stockage en pile avec prélèvement à la **base**

### 6.4 LIFO — Last In, First Out

Généralement **non recommandé** (formation de « stocks » anciens). Inévitable avec :
- stockage en **bloc**
- lignes/rangées accessibles d'**un seul** côté
- drive-in à **une** entrée

Sur rayonnages palettes/compartiments : ni favorisé ni empêché — les logisticiens doivent gérer la rotation : **nouvelles marchandises derrière** les anciennes.

### 6.5 HIFO — Highest In, First Out

Procédure de **valorisation** des stocks : sortir d'abord les plus **chers** → stock valorisé aux prix d'achat les plus bas (chiffre d'affaires élevé / stock final faible à l'inventaire · parfois réduction du revenu imposable). Courant à l'étranger ; **pas** toujours autorisé (ex. droit commercial/fiscal allemand). Avantage : évaluation prudente (prix bas).`;

const DEMO_406_THEORIE_SUMMARY = `## À retenir — Module 406

### Emplacement
**Lotissement par case** : fixe · simple · mauvaise occupation si stocks variables  
**Chaotique** : emplacement libre · espace ↑ · **ordinateur obligatoire**

### Rotation
**FIFO** : plus ancien d'abord · périssables · dynamique / drive-in double / pile base  
**LIFO** : plus récent d'abord · bloc / 1 côté / drive-in simple  
Palettes/compartiments : stocker le neuf **derrière** l'ancien

### HIFO
Valorisation : plus cher sorti d'abord · stock à prix bas · règles fiscales variables`;

const DEMO_406_APERCU_FULL = `## Aperçu du module 406

Ce module présente les **principes de stockage** : emplacement fixe vs chaotique, et règles de rotation FIFO / LIFO / HIFO.

### Vous allez découvrir
1. Lotissement par case et limites d'occupation
2. Stockage chaotique (SGS obligatoire)
3. FIFO et formes de rayonnage compatibles
4. LIFO et HIFO (valorisation)

### Source
EnterSite — Logistics by ASFL / SVBL · Suite du module 405`;

const DEMO_406_APERCU_SUMMARY = `## Aperçu — Module 406
- Case fixe vs chaotique
- FIFO · LIFO · HIFO`;

const DEMO_406_OBJECTIFS_FULL = `## Objectifs du module 406

À l'issue de ce module, l'apprenti·e est capable de :

- Comparer **lotissement par case** et stockage **chaotique**
- Expliquer pourquoi le chaotique exige un **SGS**
- Appliquer les principes **FIFO** et **LIFO** et citer les formes adaptées
- Situer le **HIFO** comme méthode de valorisation`;

const DEMO_406_OBJECTIFS_SUMMARY = `## Objectifs
- Case vs chaotique
- FIFO / LIFO / HIFO`;

/** Contenu Module 407 — Moyens de transport */
const DEMO_407_THEORIE_FULL = `## 7. Moyens de transport

### 7.1 Notions de base

**Convoyage** et **transport** sont liés. Chez EnterSite / en logistique interne : **transporter** = déplacer des marchandises **au sein** de l'entreprise (unité d'exploitation délimitée : logistique, production…).

Deux familles :
- **Installations fixes** : convoyeurs à rouleaux, bandes…
- **Engins mobiles** (sans installation fixe) : chariots élévateurs, etc.

### 7.2 Moyens de transport dans la logistique

Du simple appareil aux systèmes complexes. Classification possible selon plusieurs critères.

#### 7.2.1 Critères de subdivision

| Critère | Exemples |
| --- | --- |
| **Guidage** | Sur rails (transstockeur) · sans rail (FTS / AGV) |
| **Mobilité** | Flux 2D (chariot élévateur) · 1D (convoyeur à rouleaux) |
| **Entraînement** | Manuel (transpalette) · mécanique (appareil à timon) |
| **Automatisation** | Opérateur (préparateur) · ordinateur (transstockeur auto) |
| **Type de marchandise** | Unitaire (palettes) · vrac · liquides |

#### 7.2.2 Choisir le bon moyen
Type de marchandise · poids/dimensions · quantité · direction et longueur du trajet · effet de rationalisation recherché.

#### 7.2.3 Manuels
Toujours utiles sur **courtes** distances : flexibles et économiques. Ex. : transpalette manuel · chariot à bras · palan à chaîne.

#### 7.2.4 Convoyeurs continus
Transport **permanent** sur parcours linéaire. Grandes quantités (production de masse, Poste…).

**+** automatisation · peu de personnel  
**−** investissement ↑ · rentable seulement si forte utilisation · pas pour tous produits · panne = arrêt du flux

Ex. : bande · rouleaux · chaîne.

#### 7.2.5 Ponts et portiques roulants
Levage **aérien** · déplacement 3D possible · lourds / encombrants. Intérieur ou extérieur.

#### 7.2.6 Engins de manutention internes
Au sol · manuels ou mécaniques · largeur d'allée (**AST**) adaptée. Sans rail = flexibilité.

Ex. : transpalette électrique à timon · gerbeur · tracteur porté · préparateurs de commandes (petite levée…).

#### 7.2.7 Chariot élévateur
Engin le plus fréquent. Fourches / accessoires · mât hydraulique · inclinaison (prise/dépose, anti-glissement). Variantes : contrepoids · mât rétractable · gerbeur assis…

**RFID** sur engins : enregistrement auto palettes · attribution emplacements · régulation vitesse (zones/MD) · optimisation d'itinéraires.

#### 7.2.8 Transstockeur
Guidé par **rails** dans l'allée · stockage/déstockage rationnel. Souvent 1 appareil / allée (coût ↑, rendement ↑). Déplacement entre allées via aiguillages possible (capacité ↓).

Auto : fourche télescopique. Alternative : **engin de mise en stock** (allée un peu plus large · manuel · siège au sol ou poste sur mât).

### 7.3 Loi du levier

Chariot à **contrepoids** = levier à deux bras. Charge hors base des roues · essieu **avant** = point d'appui. Moment du chariot > moment de la charge sinon **basculement**.

Pour ↑ capacité : alourdir le chariot · allonger l'arrière · raccourcir le bras de charge.

| Terme | Sens (contrepoids) |
| --- | --- |
| Point d'appui P | Essieu avant |
| Forces F | Charge / contrepoids |
| Bras a | Distance essieu → force |
| Moment | Force × bras (Nm) |

Équilibre ex. : 0,4 m × 200 N = 80 Nm = 0,8 m × 100 N.

Sûr tant que : **M gauche (contrepoids) > M droite (mât + charge)**.

### 7.4 Diagrammes de capacité de charge

Plaque signalétique : charge max **jamais** dépassée. Diagramme : poids autorisé selon **distance du centre de gravité** et souvent **hauteur de levage**.

- Sans hauteur (ex. gerbeur à timon) : lire poids vs distance CdG
- Avec hauteur : capacité **↓** quand hauteur ↑ · même lecture + tenir compte du niveau`;

const DEMO_407_THEORIE_SUMMARY = `## À retenir — Module 407

### Transport interne
Déplacement dans l'entreprise · fixes vs engins mobiles

### Classification
Rails/sans · 1D/2D · manuel/méca · opérateur/PC · unitaire/vrac/liquide

### Moyens
Manuel (court) · convoyeurs continus · ponts · chariots · élévateur (+ RFID) · transstockeur

### Levier / capacité
Contrepoids = 2 bras · M chariot > M charge  
Diagramme : CdG + hauteur · ne jamais dépasser`;

const DEMO_407_APERCU_FULL = `## Aperçu du module 407

Ce module présente les **moyens de transport** internes : classification, types d'engins, loi du levier et diagrammes de charge.

### Vous allez découvrir
1. Notions transport / convoyage internes
2. Critères de choix et familles d'engins
3. Chariot élévateur, RFID, transstockeur
4. Loi du levier et lecture des diagrammes de capacité

### Source
EnterSite — Logistics by ASFL / SVBL · Suite du module 406`;

const DEMO_407_APERCU_SUMMARY = `## Aperçu — Module 407
- Familles de moyens de transport
- Élévateur · transstockeur
- Levier & diagrammes de charge`;

const DEMO_407_OBJECTIFS_FULL = `## Objectifs du module 407

À l'issue de ce module, l'apprenti·e est capable de :

- Distinguer transport interne et types de **moyens** (fixes / mobiles)
- Classer et **choisir** un moyen selon critères (marchandise, trajet, automatisation…)
- Expliquer le rôle du **chariot élévateur** et du **transstockeur**
- Appliquer la **loi du levier** et lire un **diagramme de capacité de charge**`;

const DEMO_407_OBJECTIFS_SUMMARY = `## Objectifs
- Classification & choix
- Élévateur / transstockeur
- Levier · diagrammes`;

/** Contenu Module 408 — Organisation de l'entrepôt */
const DEMO_408_THEORIE_FULL = `## 8. Organisation de l'entrepôt

Objectif : flux de marchandises le **plus court et simple** possible. Les exemples sont indicatifs selon la tâche de l'entreprise.

### 8.1 Structure d'une entreprise de stockage

Recevoir de grandes quantités, stocker, livrer selon besoin. Besoins typiques :
- réception performante
- capacité de stockage suffisante
- secteur **préparation de commandes**
- service **expédition**

### 8.2 Planification d'un entrepôt

Planification complexe, individuelle — avantage concurrentiel (JIT). Circulation fluide au premier plan.

**Questions clés :** flux optimal · quelles marchandises/quantités · exigences (périssable, vol, MD) · fonctions (tampon…) · charge au sol / occupation · rayonnages, ERP, engins · chaotique vs case · automatisation · extensions.

S'appuyer sur plans, chiffres clés (rotation, stock moyen), **ABC**. Réserver de la capacité en pointe. Occupation optimale des emplacements : **80–90 %** max (au-delà → problèmes quotidiens).

**Agencement** : plan d'implantation (flux, zones, rayonnages). Après mise en service : vérifier/optimiser. Simulations numériques pour détecter les erreurs avant aménagement.

### 8.3 Types d'entrepôts par fonction

| Type | Rôle |
| --- | --- |
| **Intermédiaire** | Tampon entre étapes de process |
| **Produits finis** | Attente expédition · délai ↓ · près de l'expédition |
| **Transbordement** | Court séjour · réception diverse → points de vente (distribution) |
| **Approvisionnement / MP** | Garantir le flux de production |
| **Préparation de commandes** | Accès efficace · espace/temps/coûts |
| **Réserve** | Fluctuations · faible rotation · stocks élevés |

### 8.4 Formes simples (sol)

Sans rayonnage · extérieur ou fermé · volumineux/lourds/vrac.

**+** pas d'installations · organisation simple · surfaces flexibles  
**−** peu mécanisable · hauteur limitée · mauvaises vue d'ensemble si gros stocks

#### 8.4.1 Blocs
Bonne occupation · pas d'accès direct à chaque unité · **FIFO difficile** · grandes quantités homogènes · attention pression d'empilement.

#### 8.4.2 Rangées / lignes
Allées entre rangées · occupation ↓ · accès ↑ · FIFO possible · meilleure vue.

#### 8.4.3 Épis
Moins de temps de manœuvre · occupation encore ↓ · rare (accès prioritaire sur occupation).

**Remarque :** forme compacte = meilleure occupation, temps d'accès ↑.

### 8.5 Charge au sol

Forces **statiques** (stock) et **dynamiques** (engins). Rayonnages/préparateurs → charges **ponctuelles** élevées. Afficher le max (norme : blanc sur bleu). Sans panneau ≠ illimité → vérifier ingénieur.

**Conversion :** 1 kg ≈ **10 N** (pratique ; physique 9,81). Palette 1000 kg → ~10 000 N.

Rayonnage : jusqu'à **7 t+** sous un montant (~100 cm²). Même somme de forces qu'en bloc, mais concentrée.

Engins : charges dynamiques (transstockeur jusqu'à ~20 t) · fortes à l'arrêt (ex. fourches latérales en hauteur).

**Autres facteurs :** qualité du sol · hauteur locaux · accès (portes, ascenseur) · climat.

#### Exemples
1. 80 palettes × 850 kg sur 10×13 m → ~**5230 N/m²** (523 kg/m²)  
2. 45×25 m, 20 000 N/m², palettes 500 kg → max **4500** palettes

### 8.6 Largeur d'allée (Ast)

Largeur nécessaire au chariot pour stocker/déstocker. Plus large = moins de surface de stockage.

**Formule :** L1 (chariot jusqu'à base fourche) + L2 (longueur charge) + **20 cm**.

Ordres de grandeur : contrepoids 3 roues ~**4 m** · mât rétractable ~**3 m**.

### 8.7 Utilisation des surfaces

| Notion | Calcul |
| --- | --- |
| Surface **globale** | L × l × nb étages |
| Surface **brute** | Globale − inutilisable (piliers, sanitaires, quais…) |
| Surface **nette** | Brute − allées |
| **Taux d'exploitation surfaces** | Nette / brute × 100 |

Ex. Rupperswil : 65×45 = 2925 m² → brute 2650 → nette 1350 → taux ≈ **51 %**.

Volume : Euro I ≈ 1 m² de base en pratique · hauteur 1 m → ~1 m³.

### 8.8 Utilisation de l'espace

Intègre la **hauteur**. Taux = volume utilisé / volume total × 100.  
Ex. : nette 1350 · hauteur pièce 5 m · hauteur palettes 1,60 m → 2160/6750 ≈ **32 %**.

Aussi critique en transport (route, rail, mer, air).

### 8.9 Stockage sur rayonnages

Meilleure utilisation du volume vs sol. Alvéole = 2 montants + traverses · souvent 3 palettes. Places au sol · puis niveaux 1, 2… Picking manuel surtout au sol.

**Charges :** traverse (alvéole) · au sol (entre 2 montants) · totale (rayonnage entier).

Hauteurs homogènes dans une alvéole = meilleure occupation. Types : hauteur (faible ≤7 m · >5,5 m = spécialistes · jusqu'à 45 m) · profondeur 1100/750 mm · traverses souvent 2700 mm · lourds vissés.

### 8.10 Numérotation des articles

Objectifs : **identifier** · **classifier** · **informer** · **contrôler** (chiffre de contrôle, ex. GTIN-13 → module 801).

### 8.11 Numérotation des emplacements

« Adresse » dans l'entrepôt (rue/maison/étage/appart.). Pas de norme unique. Ex. : étagère–niveau–emplacement ou étagère–emplacement–niveau · pairs/impairs sur rayonnages doubles.

### 8.12 Flux de marchandises

**Externe :** fournisseurs ↔ entreprise ↔ clients (modes de transport).  
**Interne type :** réception → contrôle → préparation stockage → mise en stock → sortie → picking → emballage → chargement.

Variantes : contrôle sauté si accord · réserve palettes vs zone picking · automatique (marchandise vers l'homme).

### 8.13 Images de stock

Vue d'occupation (libres / zones). **Analogique** (cartes/sachets) ou **numérique** (WMS/Excel) · actualisation continue.`;

const DEMO_408_THEORIE_SUMMARY = `## À retenir — Module 408

### Planification
Flux court · 80–90 % occupation max · agencement + simulation

### Fonctions
Intermédiaire · finis · transbordement · MP · picking · réserve

### Sol
Blocs (occupation ↑, FIFO ↓) · rangées · épis  
Charge au sol : 1 kg ≈ 10 N · ponctuel vs réparti · Ast

### Indicateurs
Globale → brute → nette · taux surfaces · taux espace (hauteur)

### Rayonnages
Traverse / sol / totale · hauteurs homogènes

### Orga
N° articles & emplacements · flux E→S · images de stock`;

const DEMO_408_APERCU_FULL = `## Aperçu du module 408

Ce module traite de l'**organisation de l'entrepôt** : planification, fonctions, formes au sol, charge au sol, allées, taux d'occupation, rayonnages, numérotation et flux.

### Vous allez découvrir
1. Planification et agencement (80–90 %)
2. Types par fonction et formes au sol
3. Charge au sol, Ast, taux surface/espace
4. Rayonnages, n° articles/emplacements, flux, images de stock

### Source
EnterSite — Logistics by ASFL / SVBL · Suite du module 407`;

const DEMO_408_APERCU_SUMMARY = `## Aperçu — Module 408
- Planification & fonctions
- Charge au sol · Ast · taux
- Flux · numérotation · images`;

const DEMO_408_OBJECTIFS_FULL = `## Objectifs du module 408

À l'issue de ce module, l'apprenti·e est capable de :

- Expliquer la **planification** et l'agencement d'un entrepôt
- Distinguer les entrepôts par **fonction** et les formes au sol
- Calculer / interpréter **charge au sol**, **Ast**, taux d'**occupation** surface et espace
- Décrire charges de rayonnage, **numérotation**, **flux** interne et **images de stock**`;

const DEMO_408_OBJECTIFS_SUMMARY = `## Objectifs
- Planification & formes
- Charge · Ast · taux
- Flux & numérotation`;

/** Contenu Module 409 — Les engins de manutention */
const DEMO_409_THEORIE_FULL = `## 9. Les engins de manutention

Suite du module **407** (moyens de transport). Le transport d'objets tient compte de l'**économie** (rentabilité) et de l'**écologie**. Ce module traite des véhicules qui se déplacent **au sol**.

### 9.1 Définition

**Engin de manutention** = véhicule · **au sol** = qui touche le sol pour se déplacer.

Classé selon le mouvement **horizontal** — pas la hauteur de levage. Un chariot à contrepoids avec 12 m de levage reste un engin de manutention au sol.

### 9.2 Types d'engins au sol

| Catégorie | Types |
| --- | --- |
| Engins à **timon** | Transpalette électrique · gerbeur électrique |
| **Préparation** de commandes | Petite levée · grande levée (vertical) |
| **Tracteur** (S1) | Tracteur |
| **Chariot élévateur** | Contrepoids (R1) · mât rétractable (R2) · télescopique (R4) · latéral (R3) · multidirectionnel |
| Engin de **mise en stock** | Gerbeur · tri-directionnel |
| **Transstockeur** | Desserte rayonnages moyennes/grandes hauteurs |

#### Porte-à-faux vs bras porteurs
- **Porte-à-faux** : charge hors base des roues — télescopique, contrepoids, mise en stock
- **Bras porteurs** : charge entre/sur les bras — mât rétractable, gerbeur, multidirectionnel

#### 9.2.1 Transpalette électrique à timon
Levée de **transport** · surtout chargement / déchargement de véhicules.  
**+** maniabilité · économique · **−** transport seulement

#### 9.2.2 Gerbeur électrique à timon (S2)
Transport **et** empilage / stockage au 1er niveau de rayonnage.  
**+** maniabilité · hauteur · **−** hauteur limitée

#### 9.2.3 Tracteurs (S1)
« Tractent » de grandes quantités : marchandises préparées dans des chariots roulants.  
**+** vitesse · simplicité · **−** maniabilité · déplace chariots seulement

#### 9.2.4 Chariot élévateur télescopique (R4)
Bras télescopique massif déplacé vers l'arrière → sert de **contrepoids** (seul ce type de construction permet de soulever).  
**+** capacité · hauteur · **−** coûts · maniabilité

#### 9.2.5 Préparateur de commandes vertical
Chariot **2D** : vertical + horizontal, mais lié au sol.  
**+** allées étroites · 2 axes · **−** coûts · vitesse

#### 9.2.6 Préparateur à petite levée
Déplace homme + support de charge horizontalement vers le prélèvement.  
**+** vitesse · maniabilité · **−** pas de picking vertical haut

#### 9.2.7 Contrepoids (R1)
Le plus connu · tailles et entraînements variés · intérieur / extérieur. Capacité = taille + poids. Outils portés possibles.  
**+** charge · variantes · outils · V+H · **−** coûts · maniabilité

#### 9.2.8 Mât rétractable (R2)
Le mât recule la charge **entre** la base des roues (contrairement au contrepoids où le poids propre fixe la capacité).  
**+** charge · variantes · maniabilité · V+H · **−** coûts · sol plan · vue avant limitée

#### 9.2.9 Gerbeur à conducteur porté assis
Siège **latéral** · pas de mât qui s'avance. Convient à l'expédition. Peut prendre **2 palettes** (fourches + levée initiale).  
**+** maniabilité · V+H · **−** charge limitée · vue avant · sol plan

#### 9.2.10 Transstockeur
Desserte de rayonnages moyens/hauts · formes variables. **Pas de retournement** dans l'allée → largeur minimale. Guidage manuel, semi-auto ou auto · souvent rails sol + plafond.  
**+** opération min. · V+H · occupation max · auto · **−** coûts · pas de longs trajets

#### 9.2.11 Mise en stock tri-directionnel
Allées très étroites (~**1500–1800 mm**) · pas de retournement. Conducteur porté en hauteur **ou** cabine au sol. Fourches **pivotantes** (tri-directionnel) → stocker/déstocker haut.  
**+** allée min. · occupation · **−** coûts · sol plan · pas de longs trajets

#### 9.2.12 Multidirectionnel
Change de sens **sur place** (roues L/R, même diagonale). Maniabilité exceptionnelle pour un engin massif.  
**+** sens sélectionnable · charge ↑ · V+H · **−** coûts · massif · sol plan

#### 9.2.13 Latéral (R3)
Marchandises **longues**. Cabine dans le sens de marche · mât coulissant **perpendiculaire** → prise latérale, dépôt sur pont de chargement.  
**+** intérieur/extérieur · longs · vitesse · **−** coûts · rayon · hauteur limitée · usage dédié

### 9.3 Marché

Grande concurrence (comme l'auto). Marques spécialisées · regrouper autant d'appareils que possible chez un même fournisseur. En Suisse : **Linde** et **Still** (groupe **Kion**).

#### 9.3.1 Fabricants (CA mondial, Md USD)

| Fabricant | Origine | 2013 | 2020 |
| --- | --- | --- | --- |
| Toyota Industries | Japon | 7,71 | 12,7 |
| Groupe Kion | Allemagne | 6,11 | 6,9 |
| Jungheinrich | Allemagne | 3,16 | 4,6 |
| Mitsubishi Nichiyu | Japon | 1,96 | 3,8 |
| Crown | USA | 2,4 | 3,6 |
| Hyster-Yale | USA | 2,67 | 2,8 |
| Anhui / Hangcha | Chine | ~1 | 1,9 / 1,3 |
| Manitou | France | — | 1,3 |
| Doosan | Corée | — | 1,0 |

*(Source Statista — ordres de grandeur)*

#### 9.3.2 Types d'entraînement

| Mode | Points clés |
| --- | --- |
| **Diesel** | Extérieur · puissance ↑ (jusqu'à ~100 t) · pas d'intérieur (échappements) · le plus résistant |
| **Gaz** | Intérieur **et** extérieur si bonne ventilation · combine diesel + élec. |
| **Électrique** | Le plus utilisé · silencieux · zéro échappement · charge batterie · puissance souvent ↓ · récupération possible |
| **Hybride** | Générateur diesel/gaz **ou** moteur élec. · intérieur et extérieur |

Essence : rare.

#### 9.3.3 Comparaison

**Combustion (diesel / essence / gaz)**  
**+** rapidement opérationnel · pentes · chargement/déchargement · charge ↑ (poids propre) · achat souvent ↓  
**−** bruit · émissions · odeur · entretien (usure)

**Électrique**  
**+** sans échappement · silencieux · coûts d'exploitation ↓ · maniabilité  
**−** charge batterie · frais généraux · coût d'acquisition · moins de puissance

**Hybride**  
**+** environnement · faible usure · maniabilité · conso ↓  
**−** acquisition · entretien ↑

### 9.4 Parties de l'engin

#### 9.4.1 Mât de levage
Soulever hydrauliquement fourches + charge.

| Type | Remarque |
| --- | --- |
| Simplex | Quasi disparu |
| Duplex | Minimum moderne |
| Triplex | Déjà standard |
| Quadruplex | Rare · plus épais/lourd |

« Mât à bonne visibilité » : chaînes / cylindres **latéraux** → vue avant dégagée.

#### 9.4.2 Types de courses
- **Sans levée libre** : le mât se déploie avec la fourche (locaux hauts · modèles anciens)
- **Levée libre partielle** : fourche jusqu'à ~**400 mm** sans déployer le mât
- **Levée libre complète** : fourche jusqu'à hauteur de construction sans sortir le profilé intérieur → locaux bas, camions, wagons (préférer à l'achat)

#### 9.4.3 Fourches
Inclinaison = sécuriser au transport + déposer avec délicatesse. Contrepoids : mât inclinable. Mât rétractable : mât souvent rigide → **fourches inclinables**.

#### 9.4.4 Rallonges
Longueur type Euro-palette : **800–1200 mm** (plus la capacité est faible, plus les fourches sont courtes). Petites capacités : profilé en U + cheville. Grosses : profilé creux fermé.

#### 9.4.5 Fourches rétractables
Rallonges avancées **hydrauliquement** · camions chargés d'un seul côté · rayonnages doubles accessibles d'un côté.

👉 **CdG** : rallonges / rétractables avancent le centre de gravité → informer le cariste · **diagramme de charge** sur l'engin.

#### 9.4.6 Fourches relevables
Voie publique : fourches relevées **ou** barre de protection. Relevables si circulation publique régulière (quais, gares). Occasionnel → barre suffit.

### 9.5 Outils portés

| Outil | Rôle |
| --- | --- |
| **Grille de protection** | Protège le cariste des chutes d'éléments · attention en rayonnage (décrochage) |
| **Ripage latéral** | Positionnement au cm · garder position **neutre** médiane |
| **Écartement des fourches** | Largeur hydraulique depuis le siège · **double fourche** = 2 palettes · pas pour pincer non-palettisé |
| **Tête rotative** | Vider bacs / pivoter palettes · souvent + pinces · bacs à sabots fermés |
| **Pince à balles** | Charges non sensibles à la pression (papier, cellulose, électroménager) |
| **Pince à bobines** | Surfaces arrondies · 1 ou 2 grappins · papier (tonnes) · + rotative |
| **Pince à pierres** | Parallélépipèdes · carrières · mâchoires structurées · hydraulique |
| **Grappin bois rond** | Grumes / troncs · parcs à bois · engins lourds |
| **Éperon** | Rouleaux de moquette jusqu'à ~4 m · CdG à mi-longueur · conduite prudente |
| **Potence** | Saisie par le haut · machines, armatures, longs · CdG · ne pas télescoper chargé |
| **Compresseur de charge** | Stabilise piles non sanglées (boissons…) · force adaptée · soupape si long trajet |

### 9.6 FTS / AGV

Systèmes de transport **sans conducteur** (FTS / AGV) : grandes quantités sur **itinéraires identiques** (souvent entrepôt ↔ production). Anciens modèles : arceau souple anti-collision à l'avant.

#### 9.6.1 Guidage
- **Induction** : câble noyé dans le sol + générateur de fréquence · bifurcations programmables
- **Optique** : piste réfléchissante balayée par capteurs

#### 9.6.2 Systèmes intelligents
Plus de guidage fixe · **parcours d'apprentissage** · ultrasons / laser anti-collision · validation auprès d'un poste central aux croisements.

### 9.7 Transstockeurs auto / semi-auto

#### 9.7.1 Manuel / semi-automatique
Sur **rails** · commandés par une personne · mât vertical guidé haut/bas · plate-forme vers l'emplacement. Semi-auto : picking **statique** · conducteur ou saisie du n° d'emplacement. « Homme va à la marchandise ».

#### 9.7.2 Automatique
Sans conducteur · ordres WMS · stockent / prélèvent palettes ou conteneurs. **Double jeu** : enchaîne entrée puis sortie sans retour au point de départ. Souvent **1 appareil / allée** (coût ↑, efficacité et sécurité d'approvisionnement ↑). Entrée : **contrôle de profil** (dimensions).

### 9.8 Autostore

Technologie de stockage **robotisée** (entreprise norvégienne, 1996) — cube automatisé, pas issue de l'auto asiatique. >**45 pays** · partenaires locaux (vente, install, maintenance).

#### 9.8.1 Fonctionnement
Matériel + logiciel.

- **Grille** : structure remplie de caisses · planifiée selon le bâtiment (« technique Lego »)
- **Robots** : rails sur la grille · axes **X/Y** · désempilent en profondeur · modèles selon conso/taille
- **Caisses** : empilées · 1 étiquette = 1 emplacement · multi-compartiments / multi-articles possibles · tailles variées

#### 9.8.2 Avantages
Occupation d'espace **max** · vitesse · **24/7** (pas de congés) · logiciel réordonne : articles à **rotation rapide** en haut, faible rotation en bas (phases calmes).`;

const DEMO_409_THEORIE_SUMMARY = `## À retenir — Module 409

### Définition
Engin au sol = déplacement horizontal au sol (hauteur secondaire)

### Types
Timon (S2) · préparateurs · tracteur (S1)  
Contrepoids (R1) · retract (R2) · latéral (R3) · télesco (R4) · multi  
Transstockeur · mise en stock tri-directionnel

### Entraînements
Diesel (ext.) · gaz · électrique (fréquent) · hybride  
Toyota · Kion (Linde/Still) · Jungheinrich…

### Technique
Mâts Simplex→Quad · levée libre partielle (~40 cm) / complète  
Fourches / rallonges / rétractables → **CdG** + diagramme  
Outils : ripage, pinces, éperon, potence, compresseur…

### Auto
AGV induction / optique / intelligent  
Transstockeur WMS · double cycle · contrôle de profil  
Autostore = grille + robots + caisses`;

const DEMO_409_APERCU_FULL = `## Aperçu du module 409

Ce module détaille les **engins de manutention au sol** : types, marché et entraînements, composants, outils portés, AGV, transstockeurs et Autostore.

### Vous allez découvrir
1. Définition et catalogue des engins (S/R, porte-à-faux vs bras porteurs)
2. Diesel / gaz / élec. / hybride et fabricants
3. Mâts, levées libres, fourches, outils portés (CdG)
4. FTS/AGV, transstockeurs, Autostore

### Source
EnterSite — Logistics by ASFL / SVBL · Suite des modules 407–408`;

const DEMO_409_APERCU_SUMMARY = `## Aperçu — Module 409
- Engins au sol (types S/R)
- Entraînements & composants
- AGV · transstockeur · Autostore`;

const DEMO_409_OBJECTIFS_FULL = `## Objectifs du module 409

À l'issue de ce module, l'apprenti·e est capable de :

- Définir un **engin de manutention au sol** et citer les principaux types (timon, préparateurs, élévateurs, transstockeur…)
- Comparer les **entraînements** (diesel, gaz, élec., hybride) selon intérieur/extérieur
- Décrire mâts, **levées libres**, fourches et **outils portés**, en tenant compte du **centre de gravité**
- Expliquer AGV/FTS, **transstockeurs** (manuel → auto) et le principe **Autostore**`;

const DEMO_409_OBJECTIFS_SUMMARY = `## Objectifs
- Types d'engins
- Entraînements & pièces
- AGV / Autostore`;

/** Contenu Module 410 — Les dispositifs de convoyage */
const DEMO_410_THEORIE_FULL = `## 10. Les dispositifs de convoyage

Contrairement aux chariots de manutention (**mobiles**), les systèmes de convoyage sont **fixes**. Objectif similaire : amener les marchandises au bon endroit. Le **type** et la **quantité** déterminent le convoyeur.

### 10.1 Convoyeur vertical

Transport vers le **haut** ou le **bas** · complète souvent les convoyeurs horizontaux · liaison entre étages.

#### 10.1.1 Plate-forme / table élévatrice (PEMP)
Mouvement **alternatif** · souvent sur quais. Structure à **ciseaux** hydrauliques (= table élévatrice à ciseaux). Aussi : adapter la hauteur d'un plan de travail. Apparenté : **transpalette à ciseaux**.

**Convoyeur à étages** (classique) : hisse le produit **et** une partie de la voie de transport à l'étage suivant.

#### 10.1.2 Convoyeur en S
Mouvement en forme de **S**. Rouleaux à l'étage bas → plates-formes tournantes du convoyeur S (vertical) → rouleaux à l'étage haut. Même idée : **Liftveyor** / ascenseur à sacs (produit + élément de voie soulevés ensemble).

#### 10.1.3 Élévateurs de marchandises
Contrairement aux monte-charges : transport **non accompagné**. Souvent intégrés au flux automatique.

**Chargement / déchargement d'un seul côté**  
Rouleaux → **contrôle de profil** → porte → étage → rouleaux. Capacité limitée (pas de prise/dépose simultanée au même étage). Sécurité d'accès : personnes interdites.

**Deux côtés**  
Capacité nettement ↑ : pendant qu'on décharge d'un côté, le chargement suivant est déjà prêt de l'autre · cycles croisés haut/bas.

#### 10.1.4 Monte-charges inclinés
Entrepôts (souvent **mobiles**), chantiers, fermes (balles de foin). Marchandises moyennes, pas trop lourdes · chargement/déchargement souvent **manuel**. Ex. : combiné avec basculement pour rouleaux de papier.

### 10.2 Engins de levage

Servent à **soulever** (pas à transporter sur distance comme un convoyeur).

#### 10.2.1 Ponts roulants
Enjambent la surface · rails de chaque côté. **Chariot roulant** = mécanisme de levage mobile latéralement sur la charpente. Ex. bipoutre 25 t.

#### 10.2.2 Ponts roulants suspendus
Charpente **suspendue** au rail (rails au plafond) · chariots à membrure inférieure. Plus légers / moins chers que les portiques · pas pour charges très lourdes. Passage possible vers travée voisine / voie suspendue.

🔎 Check-lists **SUVA** : engins de levage · grues industrie/artisanat.

#### 10.2.3 Portique roulant & Container-Carrier
**Portique** : terminaux conteneurs, ports, zones de transbordement (sur rails).

**Container-Carrier (cavalier)** : aussi un portique, mais **sur roues** (libre) · alternative au chariot élévateur à conteneurs. Empile jusqu'à ~**4** conteneurs · cabine ~8 m · mât >10 m · allées très étroites grâce à la construction en portique.

#### 10.2.4 Dispositifs de prise de charge

**Chariot roulant** — déplacement transversal du levage :
- **Membrure inférieure** (monopoutre) : suspendu à la poutre
- **Membrure supérieure** (bipoutre) : sur la face supérieure des poutres
- **Chariot d'angle** : version spéciale

**Moufle inférieure & crochet** — palan à câble = **mouflage** :
- 1 poulie → palan simple · rapport **1:2**
- 2 poulies → palan double · rapport **1:4**  
Le crochet est fixé au moufle inférieur (partie mobile).

#### 10.2.5 Règles de levage (grue / pont)

1. **Interdit** de se tenir sous une charge suspendue · signal SUVA · vue d'ensemble · éloigner les non-autorisés
2. Uniquement dispositifs de levage / suspension **contrôlés et appropriés** · jamais improvisés · charge nominale inscrite ou code couleur
3. Contrôler régulièrement (fissures, frottement) · retirer si endommagé · attention produits chimiques (capacité ↓ sans dommage visible)
4. Protéger des **arêtes vives** (gaines, tuyaux, élingues renforcées)
5. **Nœuds interdits** (détruisent le tissu)
6. Jamais poser sangle/élingue sur la **pointe** du crochet · linguet fermé · ne pas tordre
7. **Centre de gravité** à la verticale sous le crochet · objets longs → **palonnier**
8. Respecter l'**angle d'inclinaison β** : plus β ↑, capacité ↓ · **β > 60° interdit** · à 60° ≈ 50 % · à 45° ≈ 70 %

### 10.3 Convoyeurs continus

Suite modules **407 / 409**. Contrairement au discontinu : se déplace **en boucle**, toujours dans le **même sens** (pas de marche arrière) · virages et obstacles possibles.

#### 10.3.1 Convoyeur à rouleaux (galets)
Détail, caisses, palettes · souvent combiné (chaînes, bandes pour pentes/courbes). Intégration possible : remplisseuses, **cerclage**. Virages : entraînement souvent par bande.

#### 10.3.2 Convoyeur à chaîne porteuse
Entraînement **dynamique** (ex. entrée d'entrepôt auto). Chaînes sous les planches extérieures de palette · galets sous la planche centrale = appui. Prise longitudinale ou transversale · combinaison possible avec bande (palettes + Rolltainers).

👉 Ne jamais pénétrer dans l'installation · traverser uniquement sur les **ponts** prévus.

#### 10.3.3 Éléments de transfert
Changer de direction, transférer ou retirer de la ligne.

| Élément | Rôle |
| --- | --- |
| **Distributeur à chaîne** | Chaîne se soulève sous la charge → convoyeur parallèle |
| **Pousseur à chaîne** | Pousse perpendiculairement (rouleaux transversaux / glissière) |
| **Pousseur légers** | Bras hydraulique · colis postaux / tri |
| **Table rotative** | Tourne la palette (ex. 90° devant monte-charge) |

Signal : galet palpeur ou cellule photoélectrique.

#### 10.3.4 Convoyeur à rouleaux à accumulation
Sections commandables individuellement → stocker sans s'empiler. Freinage des rouleaux = arrêt.

**Fonctionnement :** rouleaux de traction (ex. rouges) tirés vers le haut par un **ressort** → entraînent les porteurs. Produit sur **galet palpeur** → genouillère pousse l'entraînement vers le bas → plus d'entraînement. Galet déchargé → reprise.

#### 10.3.5 Table à billes
Billes encastrées (quelques mm) · déplacement **toutes directions** presque sans effort · reconditionnement (grandes feuilles papier…). Variante : buses d'air. Ex. : PEMP mobile + table à billes.`;

const DEMO_410_THEORIE_SUMMARY = `## À retenir — Module 410

### Fixe vs mobile
Convoyage = **fixe** · chariots = mobiles · même but : déplacer

### Vertical
Table à ciseaux · convoyeur S / Liftveyor · élévateur (1 ou 2 côtés + profil) · monte-charge incliné

### Levage
Pont · suspendu · portique · Container-Carrier  
Chariot membrure inf./sup. · mouflage 1:2 / 1:4  
8 règles SUVA · β ≤ 60° · CdG sous crochet

### Continu
Boucle, un seul sens · rouleaux · chaîne porteuse · transfert (distributeur, pousseur, table rotative) · accumulation · table à billes`;

const DEMO_410_APERCU_FULL = `## Aperçu du module 410

Ce module présente les **dispositifs de convoyage** fixes : verticaux, engins de levage et convoyeurs continus (dont transferts et accumulation).

### Vous allez découvrir
1. Convoyeurs verticaux (ciseaux, S, élévateurs, inclinés)
2. Ponts, portiques, Container-Carrier et règles de levage
3. Convoyeurs continus : rouleaux, chaînes, transferts
4. Accumulation et table à billes

### Source
EnterSite — Logistics by ASFL / SVBL · Suite des modules 407–409`;

const DEMO_410_APERCU_SUMMARY = `## Aperçu — Module 410
- Convoyage vertical & levage
- Continus · transferts · accumulation`;

const DEMO_410_OBJECTIFS_FULL = `## Objectifs du module 410

À l'issue de ce module, l'apprenti·e est capable de :

- Distinguer convoyage **fixe** et engins **mobiles**, et citer les convoyeurs **verticaux**
- Décrire ponts / portiques / **Container-Carrier** et appliquer les **règles de levage** (dont angle β)
- Expliquer les convoyeurs **continus** (rouleaux, chaînes) et les **éléments de transfert**
- Décrire le principe du convoyeur à **accumulation** et de la **table à billes**`;

const DEMO_410_OBJECTIFS_SUMMARY = `## Objectifs
- Verticaux & levage
- Continus & transferts
- Accumulation · sécurité`;

/** Contenu Module 501 — La production */
const DEMO_501_THEORIE_FULL = `## 1. Production

### 1.1 Définition

Du latin *producere* = « produire ». La **production** désigne la fabrication de :
- **Biens matériels** — voiture, téléphone, pain, montres…
- **Énergies** — électricité, chaleur, essence…
- **Services** — émissions TV, assurances…

C'est une **transformation** d'*inputs* (facteurs de production) en *outputs* via des techniques spécifiques :

| Facteur | Exemples |
| --- | --- |
| Prestation de **travail** | Personnes, spécialistes |
| **Matériel** d'exploitation | Machines de production |
| **Matériaux** | Matières premières, matériaux bruts |

Processus de **création de valeur** : combiner les facteurs d'entrée pour obtenir des sorties de la plus haute qualité possible.

### 1.2 Objectifs et tâches

> « Si tu veux construire un bateau, ne rassemble pas les hommes pour trouver du bois… mais enseigne-leur la nostalgie de la mer vaste et infinie. » — Antoine de Saint-Exupéry

Objectif fondamental : un **bon produit** qui répond aux attentes clients — idéalement les **dépasse**.

| Objectif | Sens |
| --- | --- |
| **Coûts** réduits | Produire au meilleur prix possible |
| **Rendement** élevé | Produire le plus possible |
| Haute **qualité** | Exigences respectées · le moins de **rebuts** possible |
| Respect des **délais** | Livrer à temps (ni trop tôt, ni trop tard) |
| **Charge** de travail élevée | Employés et machines suffisamment occupés |
| **Temps de passage** réduit | Délai de fabrication le plus court possible |
| **Satisfaction** clients | Répondre à leurs attentes |

Les matières premières ou produits non finis passent de l'état actuel à l'état souhaité (**transformation**). Main-d'œuvre + machines, outils, énergie.

👉 La production accomplit une **transformation**.

### 1.3 Développement de produits

#### 1.3.1 De l'idée au produit

Toutes les activités menant à un produit **vendable** : vision / idée → lancement marché.

**Exemple Zeridwen** — poupée pour initier les 4–9 ans au brossage manuel. Témoins lumineux dans la dentition → l'enfant reproduit les gestes. Marché potentiel Europe ≈ **11,8 millions** d'unités (étude HEB).

Parcours typique :
1. **Dessins techniques** → **modèle fonctionnel** (fonctionne, pas encore vendable)
2. Modèle fonctionnel → **modèle de série** (proposé sur le marché)
3. **Achats** : fournisseurs de matières premières
4. **PCP** (planification et contrôle de la production) : pièces, processus sans faille
5. Produit commercialisé

### 1.4 Structure des produits

Organise le produit selon des critères pour planifier / contrôler : conception → achat → production → montage.

| Service | Point de vue |
| --- | --- |
| **Construction** | Quelles **fonctions** ? |
| **Achats** | Semi-finis, finis, matières premières à **acheter** ? |
| **Production** | Quelles **machines** pour les composants ? |
| **Montage** | Dans quel **ordre** monter composants / sous-ensembles ? |

#### 1.4.1 Objectif
Structure aussi **simple** et **neutre client** (standardisée) que possible jusqu'aux niveaux supérieurs. Différences individuelles (= souhaits clients) le **plus tard possible** dans le process.

👉 Sert à la **documentation complète** d'un produit (ou famille) sous plusieurs angles (conception, fabrication…).`;

const DEMO_501_THEORIE_SUMMARY = `## À retenir — Module 501

### Définition
Production = biens · énergies · services  
Inputs → transformation → outputs (création de valeur)

### Objectifs
Coûts ↓ · rendement ↑ · qualité ↑ · délais · charge · temps de passage ↓ · satisfaction

### Développement
Idée → dessins → modèle fonctionnel → série · Achats + PCP

### Structure produit
Vues construction / achats / production / montage  
Standardiser tôt · personnaliser **tard**`;

const DEMO_501_APERCU_FULL = `## Aperçu du module 501

Premier module du bloc **Production** : définition, objectifs, développement de produits et structure produit.

### Vous allez découvrir
1. Définition et facteurs de production (inputs → outputs)
2. Objectifs (coûts, qualité, délais, temps de passage…)
3. De l'idée au produit (ex. Zeridwen)
4. Structure produit multi-points de vue

### Source
EnterSite — Logistics by ASFL / SVBL · Bloc 500 Production`;

const DEMO_501_APERCU_SUMMARY = `## Aperçu — Module 501
- Définition & objectifs
- Développement & structure produit`;

const DEMO_501_OBJECTIFS_FULL = `## Objectifs du module 501

À l'issue de ce module, l'apprenti·e est capable de :

- Définir la **production** et ses facteurs (travail, matériel, matériaux)
- Citer les **objectifs** principaux (coûts, qualité, délais, temps de passage…)
- Décrire le parcours **idée → produit** (modèle fonctionnel / série, rôle Achats et PCP)
- Expliquer la **structure produit** selon construction, achats, production et montage`;

const DEMO_501_OBJECTIFS_SUMMARY = `## Objectifs
- Définition & objectifs
- Idée → produit
- Structure multi-vues`;

/** Contenu Module 502 — La logistique de production */
const DEMO_502_THEORIE_FULL = `## 2. Logistique de production

### 2.1 Définition

Processus d'une entreprise de fabrication situé entre la logistique d'**approvisionnement** (input) et de **distribution** (output).

Elle **planifie et contrôle** le flux de marchandises :
- Approvisionner la production depuis les entrepôts (matières premières, auxiliaires, consommables…)
- Après fabrication : **évacuer** et stocker correctement les produits
- Soutenir les activités de production

### 2.2 Objectifs et tâches

Toutes les mesures du processus de **création de valeur** : de la prise en charge des **facteurs de production** jusqu'au transfert des produits finis à la distribution.

Mettre à disposition matériaux et informations : **bon type**, **bonne quantité**, **bonne qualité**, **bon moment** — comparer la **règle des 6B** (Jünemann, module 101).

| Objectif | Sens |
| --- | --- |
| Délais d'**exécution** courts | Temps de passage ↓ |
| Grand respect des **délais** | Fiabilité |
| **Stocks** aussi bas que possible | Coûts de stockage ↓ |
| Niveau de **qualité** élevé | Peu de rebuts / retours |
| Utilisation optimale de la **capacité** | Homme + machine |
| **Voies de transport** optimales | Flux dans l'atelier |

👉 En résumé : réduire au maximum les **coûts de fabrication**.

### 2.3 Types de stocks dans la production

#### 2.3.1 Stocks d'approvisionnement / de production

Stocker matières premières, semi-finis et finis nécessaires à la production.

- **Entrepôt d'approvisionnement** : réception des marchandises **achetées**
- **Entrepôts de production** : souvent dans la zone de prod. → distances ↓  
  Petites entreprises : les deux souvent **réunis**

| Type | Rôle |
| --- | --- |
| Production **en amont** | MP, semi-finis, finis pour démarrer le process |
| **Intermédiaire** | Semi-finis en attente d'une étape suivante |
| Production **en aval** | Semi-finis / finis prêts pour suite (ex. peinture) ou marché |
| Stock de **proximité** | Petits espaces, souvent **mobiles** · libre-service · en général **sans** compta ERP pièce à pièce (vis = poste consommable du produit fini) |

### 2.4 Logistique opérationnelle d'élimination

Collecter, trier, emballer, stocker et évacuer les déchets — préparation et exécution **écologique** et **économique**.

Ordre de priorité : **prévention** → **valorisation** → **élimination**.

#### 2.4.1 Tâches (logistique classique)

| Type | Contenu |
| --- | --- |
| Prestation **principale** | Transport, Transbordement, Stockage (**TTS**) |
| Prestation **supplémentaire** | Collecte, tri, emballage / regroupement |
| Prestation d'**information** | Commandes, suivi, traçabilité |

🔎 Détails élimination : module **106**.`;

const DEMO_502_THEORIE_SUMMARY = `## À retenir — Module 502

### Place
Approvisionnement → **logistique de production** → distribution

### Mission
Fournir facteurs / infos (6B) · évacuer / stocker · ↓ coûts de fabrication

### Objectifs
Exécution courte · délais · stocks bas · qualité · capacité · voies optimales

### Stocks
Amont · intermédiaire · aval · proximité (souvent hors ERP détail)

### Déchets
Prévention > valorisation > élimination · TTS + tri + info (→ 106)`;

const DEMO_502_APERCU_FULL = `## Aperçu du module 502

Ce module situe la **logistique de production** entre approvisionnement et distribution : objectifs, types de stocks et logistique d'élimination.

### Vous allez découvrir
1. Définition et position dans la chaîne
2. Objectifs (délais, stocks, qualité, capacité…) et lien 6B
3. Stocks amont / intermédiaire / aval / proximité
4. Élimination des déchets (TTS, priorité écologique)

### Source
EnterSite — Logistics by ASFL / SVBL · Suite du module 501`;

const DEMO_502_APERCU_SUMMARY = `## Aperçu — Module 502
- Place & objectifs (6B)
- Types de stocks
- Élimination`;

const DEMO_502_OBJECTIFS_FULL = `## Objectifs du module 502

À l'issue de ce module, l'apprenti·e est capable de :

- Situer la **logistique de production** entre approvisionnement et distribution
- Citer ses **objectifs** et les relier aux **6B**
- Distinguer les **types de stocks** (amont, intermédiaire, aval, proximité)
- Décrire les tâches de la logistique d'**élimination** et l'ordre prévention → valorisation → élimination`;

const DEMO_502_OBJECTIFS_SUMMARY = `## Objectifs
- Place & 6B
- Types de stocks
- Élimination`;

/** Contenu Module 503 — L'organisation de la production */
const DEMO_503_THEORIE_FULL = `## 3. Organisation de la production

Les caractéristiques du produit déterminent l'infrastructure — au stockage **et** en production. Structures variées → plusieurs façons d'organiser.

### 3.1 Critères (types de fabrication)

La **fabrication** dépend de :
- **Quantité** de produits fabriqués
- **Organisation** de la production
- **Dépendance** du lieu de fabrication

Le type choisi peut être modifié plus tard, mais avec beaucoup d'**efforts** et de **coûts** → bien planifier dès le départ.

### 3.2 Types de fabrication

#### 3.2.1 Fabrication unitaire
Pièces **uniques** · infra + personnel **polyvalents** · changements d'équipement fréquents. Aucun produit n'est identique. Ex. : tableaux, appartements, costumes sur mesure.  
**+** personnalisation client · **−** temps de fabrication ↑

#### 3.2.2 Production multiple
Même produit fabriqué **plusieurs fois** · infra et personnel orientés process spécifique · activités **répétitives** → optimisation possible.

#### 3.2.3 Production de masse
Max. de quantité en min. de temps · qualité maintenue · quantité non limitée au démarrage · process adapté puis automatisable · **rationalisation** · coût unitaire ↓. Ex. : ciment, oursons en gomme, pièces de monnaie.  
**+** grandes quantités = coût ↓ · **−** aucune flexibilité

#### 3.2.4 Production en série
Entre unitaire et masse · **nombre limité** de produits similaires · séries avec différences minimales. Ex. : voitures, vêtements, meubles.  
**+** productivité ↑ · **−** peu de flexibilité · coûts de conversion ↑

#### 3.2.5 Production de variété (par sortes)
Proche de la série · quantités avec **différences minimes** (ex. tailles mode). Ex. : cigarettes, bière, mode.  
**+** MP identiques / similaires · **−** taille optimale des lots = défi

#### 3.2.6 Production par lots
Différences **non volontaires** dans le process (limite d'infra : four, récipient, parcelle…). Ex. : chimie, pain, pommes de terre.  
**+** série ratée éliminable · **numérotation / traçabilité** (→ module 506) · **−** laborieux · arrêtés par l'infra

### 3.3 Organisation de la production

Après le type de fabrication : définir **infrastructure** et **ordre**. Modifier ensuite = efforts + coûts ↑.

#### 3.3.1 Fabrication à l'établi
Une personne / un groupe mène le produit **du début à la fin** au même poste · pas de transition obligatoire. Uniques ou petites séries. Ex. : bijoux, tableaux (aussi EnterSite AG).  
**+** qualité ↑ · **−** process souvent redéfini · temps / coût ↑

#### 3.3.2 Fabrication en atelier
Postes / moyens **similaires regroupés** · le produit « circule » selon le plan (fraise → rabote → perce…). Grande **flexibilité** d'ordre. Ex. : bois, métal.  
**+** flexibilité · **−** temps de passage ↑

#### 3.3.3 Fabrication à la chaîne (flux)
Ordre **fixe** · postes **coordonnés dans le temps** · transport continu (manuel ou chaîne). Vitesse adaptée pour que chaque poste finisse à temps. Ex. : voitures.  
**+** temps de traitement ↓ · **−** installation coûteuse · tâches monotones

#### 3.3.4 Fabrication de chantier (principe de l'emplacement)
Main-d'œuvre + moyens amenés **sur site** · produit trop grand / lié au lieu (maison, tunnel). Pièces parfois préfabriquées hors site.  
**+** surface fournie par le client · **−** coûts de transport (personnel + **intrants**)

*Intrant* = élément entrant dans le process · *extrant* = élément sortant.

### 3.4 Aperçu synthétique

| Type / orga | Brève description | + | − |
| --- | --- | --- | --- |
| Unitaire | Produits uniques | Qualité / perso. | Coûts / temps |
| Masse | Séries continues | Coûts ↓ | Flexibilité ↓ |
| Série | Grandes quantités limitées | Productivité | Conversion |
| Variété | Différences minimes | MP uniformes | Lots / conversion |
| Lots | Limite d'infra | Traçabilité | Temps |
| Établi | Un poste | Qualité | Temps |
| Atelier | Plusieurs postes flexibles | Flexibilité | Passage / planification |
| Chaîne | Ordre fixe synchronisé | Temps ↓ | Coûts machines |
| Chantier | Sur place | Pas de surface propre | Transport |

### 3.5 Lean Production

« Production **allégée** » : usage économique et efficace du temps, des moyens, de la production et du personnel.

Choisir la meilleure variante fabrication + organisation · supprimer le **superflu** · n'utiliser que le nécessaire.

Objectifs lean : stocks ↓ · petits lots · flexibilité client ↑ · temps de passage ↓ · bon travail d'équipe.`;

const DEMO_503_THEORIE_SUMMARY = `## À retenir — Module 503

### Critères
Quantité · organisation · lieu

### Fabrication
Unitaire · multiple · masse · série · variété · lots (+ traçabilité)

### Organisation
Établi · atelier · chaîne · chantier

### Lean
Alléger : stocks ↓ · petits lots · flexibilité · passage court`;

const DEMO_503_APERCU_FULL = `## Aperçu du module 503

Ce module présente les **types de fabrication** et les **formes d'organisation** de la production, jusqu'à la Lean Production.

### Vous allez découvrir
1. Critères de choix du type de fabrication
2. Unitaire → masse / série / variété / lots
3. Établi, atelier, chaîne, chantier
4. Lean Production (production allégée)

### Source
EnterSite — Logistics by ASFL / SVBL · Suite des modules 501–502`;

const DEMO_503_APERCU_SUMMARY = `## Aperçu — Module 503
- Types de fabrication
- Organisations (établi → chantier)
- Lean`;

const DEMO_503_OBJECTIFS_FULL = `## Objectifs du module 503

À l'issue de ce module, l'apprenti·e est capable de :

- Citer les **critères** qui influencent le type de fabrication
- Distinguer fabrication **unitaire**, **masse**, **série**, **variété** et **lots**
- Comparer les organisations **établi**, **atelier**, **chaîne** et **chantier**
- Expliquer le principe de la **Lean Production**`;

const DEMO_503_OBJECTIFS_SUMMARY = `## Objectifs
- Types de fabrication
- Organisations
- Lean`;

/** Contenu Module 504 — Le flux de matériel */
const DEMO_504_THEORIE_FULL = `## 4. Le flux de matériel

Suite du module **503** (types / organisation) : comment gérer matières premières et semi-finis pour atteindre les objectifs de production (**501**). Planification délicate : caractéristiques et **quantités** influencent fortement le flux.

### 4.1 Types de flux

#### 4.1.1 Flux externe
Souvent assuré par des **prestataires logistiques**. Choix des fournisseurs = qualité de service client. En **Lean** (503) : peu de réserves pour absorber retards / non-livraisons.

#### 4.1.2 Flux interne
Responsabilité de l'entreprise (ex. EnterSite AG). De la livraison MP/semi-finis jusqu'à leur mise en œuvre. Objectifs lean : efforts ↓ · processus clairs · tâches attribuées · **chemin le plus direct**.

### 4.2 Système Kanban

Méthode de gestion selon le principe du **flux tiré** (prélèvement / appel) · orienté uniquement sur le besoin du **poste consommateur**. Japonais : « carte » / « tableau ». Développé chez **Toyota** (1947) : productivité, rapidité client, espace limité, stocks coûteux.

#### 4.2.1 Fonctionnement
Si niveau < **minimum** → appel au sous-traitant. Le poste aval prélève ce dont il a besoin **après** l'opération amont. La fiche (Kanban) accompagne le lot et revient quand le lot est entamé. Règles strictes : seules pièces **conformes** livrées.

Évolution : carte → **conteneur** étiqueté → **numérique** (code-barres / QR · ERP / GPAO → sous-traitant, module **505**) · moins d'erreurs et de pertes de temps.

### 4.3 Système Two-Bin
Deux conteneurs. Réappro quand le 1er est **vide** et le 2e **entamé**. Infos sur le conteneur. Quantité du 2e = couverture jusqu'au retour du 1er. Défi lean : assez, mais **pas trop**.

### 4.4 Commande optique
Marquage / signalétique sur le conteneur = seuil de commande. Déclenchement : bon, e-mail, scan code-barres/QR… Déterminer **où** placer le repère est plus délicat que de déclencher.

### 4.5 Just in Time (JIT)

« Juste à temps » : livrer MP / semi-finis **au poste** au moment voulu · ↓ coûts de stockage (idéalement sans stock) · fabrication sans retard. Exige flux **externe + interne** parfaitement organisés · toute la **supply chain**. Origine : Japon / automobile.

**Exemple EnterSite (Rupperswil)** — cartouche SwissEnterSite (GT10-TN221) : 18 pièces, fournisseurs mondiaux. Commande client → besoin → pièces programmées jour J · monteurs + poste prêts → si JIT OK = coûts ↓ (pas de stock tampon).

#### 4.5.1 Avantages / inconvénients

**+** Économie stockage · pas d'immobilisation · process accéléré · évite « boutiques vides » · personnel d'appro ↓ · temps de passage ↓  

**−** Dépendance flux externe · aléas (embouteillages, grèves, météo…) · worst case = **arrêt** de production (+ coûts / image)

Contrats client–fournisseur : qualité + **sanctions** si objectifs non tenus.

### 4.6 Just in Sequence (JIS)

« Juste à temps **et dans le bon ordre** » · développement du JIT (surtout auto). Mêmes +/- que JIT. Différence : marchandise **déballée** et rangée dans l'ordre pour le monteur (« à portée de main »), pas seulement en emballage de transport près du poste.

### 4.7 Low Cost Automation (LCA)

Aussi « Lean Automation » : automatiser à partir de l'**existant** (outils, machines, personnel) · compléter **ponctuellement** avec composants standard du marché. Objectif : process automatisé au max. · tâches répétitives avec **moins de personnel** · temps de passage ↓.

### 4.8 Jidoka

« Automation **autonome** » : machine sans surveillance humaine continue · capteurs détectent les écarts → **avertissement / arrêt** · évite produits défectueux · qualité ↑. Étape vers une automatisation où la machine corrigerait elle-même les erreurs.`;

const DEMO_504_THEORIE_SUMMARY = `## À retenir — Module 504

### Flux
Externe (prestataires, peu de réserve lean) · interne (chemin direct)

### Tirage
**Kanban** (flux tiré, Toyota) · Two-Bin · commande optique

### JIT / JIS
JIT = juste à temps · stocks ↓ · supply chain critique  
JIS = JIT + ordre / déballé pour le monteur

### Techno
LCA (lean automation) · **Jidoka** (arrêt autonome si défaut)`;

const DEMO_504_APERCU_FULL = `## Aperçu du module 504

Ce module traite du **flux de matériel** en production : flux interne/externe, Kanban, Two-Bin, JIT/JIS, LCA et Jidoka.

### Vous allez découvrir
1. Flux externe vs interne
2. Kanban, Two-Bin, commande optique
3. JIT et JIS (avantages / risques)
4. Low Cost Automation et Jidoka

### Source
EnterSite — Logistics by ASFL / SVBL · Suite des modules 501–503`;

const DEMO_504_APERCU_SUMMARY = `## Aperçu — Module 504
- Flux interne / externe
- Kanban · Two-Bin · optique
- JIT / JIS · LCA · Jidoka`;

const DEMO_504_OBJECTIFS_FULL = `## Objectifs du module 504

À l'issue de ce module, l'apprenti·e est capable de :

- Distinguer flux de matériel **externe** et **interne**
- Expliquer **Kanban**, **Two-Bin** et la commande **optique**
- Comparer **JIT** et **JIS** (avantages, risques, contrats)
- Décrire **LCA** et **Jidoka** dans une logique lean / qualité`;

const DEMO_504_OBJECTIFS_SUMMARY = `## Objectifs
- Flux interne / externe
- Kanban · Two-Bin · JIT/JIS
- LCA · Jidoka`;

/** Contenu Module 505 — Planification et contrôle de la production (PCP) */
const DEMO_505_THEORIE_FULL = `## 5. Planification et contrôle de la production (PCP)

Les ventes établissent un **programme de vente**. Les achats organisent MP / semi-finis / finis. Pour la fabrication interne : **programme de production** → planification des besoins matières → identifier la **couverture insuffisante** → **délais & capacités** → quand les ordres sont prêts, le **contrôle** de production surveille tout le process.

### Tâches de la PCP

| Étape | Contenu |
| --- | --- |
| **Programme de production** | Produits : type, quantité, délai |
| **Gestion matériel / quantités** | Pièces, sous-ensembles, achats : type, quantité, délai |
| **Délais & capacités** | Temps de traitement · capacités homme/machine · ordre de prod. |
| **Lancement d'ordre** | Démarrage · attribution des travaux / ordres |
| **Suivi des commandes** | Avancement · capacités · commandes fournisseurs · entrées |

### 5.1 Production push / pull

| | **Push** (flux poussé) | **Pull** (flux tiré) |
| --- | --- | --- |
| Pilotage | Unité **centrale** de planification / contrôle | Souvent **décentralisé** · besoins clients |
| Flux | Infos et marchandises **même sens** | Infos **à contre-courant** du matériel (client → amont) |
| Effets | Stocks ↑ · délais ↑ · coûts de planification ↑ | Stocks ↓ · délais ↓ · planification ↓ · orientation client ↑ |

Production **selon les besoins** en pull.

### 5.2 Production en vrac (bulk)

*Bulk* = masse / quantité. Marchandises en **très grandes** quantités (cargaisons…) · souvent pour commerçants / transformateurs · semi-finis ou biens de production pour un produit final.

👉 Même caractéristiques · quantités **non limitées** · production **récurrente** (= logique de masse).

### 5.3 Liste des pièces / nomenclature

Programme de vente = **besoin primaire** (produits vendables, ex. voitures) · composé de pièces / sous-ensembles.

**Nomenclature** (*Bill of Materials*, BOM) : tous les articles et sous-ensembles du produit final = **besoins secondaires** (servent à produire le primaire).

Comparaison besoins secondaires ↔ stock actuel → **besoins secondaires nets**.

**Exemple :** primaire 100 voitures · secondaire 400 pneus · stock 100 → besoin net **300** pneus.

#### 5.3.1 Types de nomenclature

**Quantitative** — tous les composants **sans** structure (interne / externe). Clair pour **achats** / coûts · pas pour le montage (pas d'appartenance / hiérarchie).  
Codes usuels : **B** = sous-ensemble · **E** = fabrication interne · **F** = pièce externe.

**Structurelle** — forme **hiérarchisée** · stade de fabrication visible · quantités par module (ex. 1 produit A → 3 groupes II → 2 A → 6). Tableau possible, moins lisible.

**Modulaire** — découpe de la structurelle · montre l'assemblage d'un **sous-ensemble** donné (niveaux de fabrication).

**Variantes** — produit final avec **légères différences** (couleur vélo · boîte auto · tension 120 V / 230 V…).

Utilisées en : planification prod., matériaux, capacités, temps, montage, achats, coûts…  
👉 Qualité des nomenclatures **critique** : erreurs = perturbations + coûts.`;

const DEMO_505_THEORIE_SUMMARY = `## À retenir — Module 505

### PCP
Programme prod. → quantités → délais/capacités → lancement → suivi

### Push / Pull
Push : central, stocks ↑ · Pull : besoins client, stocks ↓

### Bulk
Masse récurrente, quantités non limitées

### Nomenclature (BOM)
Primaire → secondaires → nets (secondaires − stock)  
Quantitative · structurelle · modulaire · variantes`;

const DEMO_505_APERCU_FULL = `## Aperçu du module 505

Ce module présente la **PCP** : du programme de production au suivi, push/pull, production en vrac et nomenclatures (BOM).

### Vous allez découvrir
1. Les 5 tâches de la PCP
2. Flux poussé vs tiré
3. Production en vrac (bulk)
4. Besoins primaire / secondaire / net et types de nomenclature

### Source
EnterSite — Logistics by ASFL / SVBL · Suite des modules 501–504`;

const DEMO_505_APERCU_SUMMARY = `## Aperçu — Module 505
- PCP (5 tâches)
- Push / pull · bulk
- Nomenclatures BOM`;

const DEMO_505_OBJECTIFS_FULL = `## Objectifs du module 505

À l'issue de ce module, l'apprenti·e est capable de :

- Décrire les étapes de la **PCP** (programme → suivi)
- Comparer production **push** et **pull**
- Expliquer la production en **vrac** et le calcul **besoin primaire / secondaire / net**
- Distinguer les types de **nomenclature** (quantitative, structurelle, modulaire, variantes)`;

const DEMO_505_OBJECTIFS_SUMMARY = `## Objectifs
- PCP & push/pull
- Bulk & besoins
- Types de BOM`;

/** Contenu Module 506 — L'assurance qualité dans la production */
const DEMO_506_THEORIE_FULL = `## 6. Assurance qualité (AQ) dans la production

Suite du module **501** : la **qualité** est un objectif central — la maintenir et l'**améliorer**.

### 6.1 MQ vs AQ

#### 6.1.1 Management de la qualité (MQ)
Définir la **structure** pour atteindre la qualité : types/orga de fabrication, flux matériel, tâches → souvent dans un **manuel qualité**.

👉 Le MQ s'applique à **toute** l'entreprise (tous processus influençant la satisfaction client), pas seulement au produit.

**Ex. EnterSite** — cartouche GT10-TN221 : documentation écrite (fournisseurs, MP, type/orga, flux) + tâches collaborateurs.

#### 6.1.2 Assurance qualité (AQ)
Après le MQ : **détecter et éliminer** à temps les influences négatives · garantir le respect des directives MQ.  
Contrairement au **contrôle qualité** (produit), l'AQ contrôle **activités et processus**. Si le niveau n'est pas atteint → retrait / cycle d'amélioration.

**Ex.** Après prod. + expédition : qualité / satisfaction / coûts OK ? Oui → MQ validée · Non → cycle d'amélioration.

### 6.2 Méthodes MQ / AQ

#### 6.2.1 Kaizen
*Kai* = changement · *zen* = pour le mieux. Japon / auto (~1980) · amélioration **progressive**. Outil clé : cycle **PDCA**.

#### 6.2.2 Cycle PDCA (Shewhart)
| Phase | Sens |
| --- | --- |
| **PLAN** | Problème · ressources · solution · conditions · objectifs |
| **DO** | Mettre en œuvre · rôles clairs · communication · imprévus possibles |
| **CHECK** | Phase **critique** · ce qui marche · points faibles · causes |
| **ACT** | Évaluer · poursuivre si objectifs OK · **remettre en question** en continu |

👉 Amélioration constante · productivité / efficacité ↑.

#### 6.2.3–6.2.5 Processus d'amélioration continue (PAC)
Amélioration constante produits / process / services · **petites** mesures rapides · ancré dans la culture.

Démarche type : trier · éviter · propreté · ménage · ordre · simplicité · standardisation.  
Domaines : **bureau** (ordre → moins d'erreurs) · **fabrication / logistique** (distances ↓ · accès · flux d'info).  
Effets : potentiel collaborateurs · compétitivité · emplois. Facteurs clés : culture + bonne gestion.

#### 6.2.6 Muda (gaspillage)
Activités **sans valeur ajoutée** · souvent « cécité professionnelle » → analyse (idéalement regard externe).

**7 mudas :**
1. **Surstockage** / stock inutile  
2. **Surproduction**  
3. **Transport** / déplacement inutile  
4. **Temps d'attente**  
5. **Erreurs** / qualité insuffisante (rebuts, reprises)  
6. **Surprocessing** (traitements inutiles)  
7. **Sous-utilisation** des compétences  

Démarche : identifier → évaluer (bases uniformes · **Pareto** 20/80) → contre-mesures → prioriser (court/moyen/long terme · responsables · dates · contrôle). Impliquer les collaborateurs.

#### 6.2.7 ISO 9001
Certification = confirmation formelle MQ/AQ.  
- **ISO 9001** : systèmes de management de la qualité  
- **ISO 14001** : management environnemental  

Suisse : **SN EN ISO 9001:2015** (norme suisse + européenne + ISO · version 2015).

Couvre : organisation SMQ · personnel / infra · réalisation produit · mesure / analyse / amélioration.  
**+** adéquation presta/qualité · satisfaction client · perf. · coûts ↓ · com. · moral · image. Coût élevé → avantages doivent le justifier.

**Audits :** interne (formés en interne) · externe (organisme indépendant) avant certification.

### 6.3 Ressources et efficacité énergétique

#### 6.3.1 Économie circulaire
Ressources limitées · métaux rares · émissions → repenser recyclage et flux. Maximiser l'efficacité des ressources · avantage concurrentiel.

**Urban Mining** : récupérer matières (métaux, plastiques) depuis appareils urbains mis au rebut (ex. démarche type Bosch).

Idéal : zéro déchet · substances réintroduites · cycles matériaux/énergie ralentis et resserrés · cadre politique uniforme.

👉 Réduire déchets · recycler · allonger le cycle de vie (réemploi / transformation).

### 6.4 Traçabilité

Suivre le produit : MP → production → distribution → utilisateur → élimination. Exigée (ex. ISO 9001) · auto, électronique, alimentaire, pharma.

Documenter fabricants / fournisseurs / intermédiaires à chaque étape.

**Pourquoi ?** En cas de défaut : identifier composant, fournisseur, autres produits touchés → réagir vite.  
👉 Qualité **et** sécurité produit.

**Ex. qualité :** capteurs pression pneus bas de gamme → fausses alertes → coût / image > économie achat.  
**Ex. sécurité :** plaquettes de frein défectueuses → retrouver véhicules / propriétaires → rappel.

### 6.5 Instructions de procédure (IP)

Quand · dans quelle situation · par qui · de quelle manière. Schéma + responsables + outils. Indispensables pour ISO 9001 · contrôlées en audit · doivent être **appliquées** au quotidien.

### 6.6 Autres méthodes
Nombreux outils AQ dans le monde (sélection non exhaustive dans la formation) · Kaizen, PDCA, PAC, Muda, ISO restent des piliers.`;

const DEMO_506_THEORIE_SUMMARY = `## À retenir — Module 506

### MQ vs AQ
MQ = structure / manuel · toute l'entreprise  
AQ = garantir & améliorer process (≠ contrôle produit seul)

### Méthodes
Kaizen · **PDCA** · PAC · **7 Muda** · ISO 9001 (+ audits)

### Ressources
Économie circulaire · Urban Mining · efficacité énergie

### Traçabilité & IP
Historique complet · qualité + sécurité · IP pour ISO`;

const DEMO_506_APERCU_FULL = `## Aperçu du module 506

Ce module traite de l'**assurance qualité** en production : MQ/AQ, Kaizen, PDCA, PAC, Muda, ISO 9001, économie circulaire, traçabilité et IP.

### Vous allez découvrir
1. Différence Management vs Assurance qualité
2. Kaizen, PDCA, PAC et 7 mudas
3. ISO 9001 et audits
4. Économie circulaire, traçabilité, instructions de procédure

### Source
EnterSite — Logistics by ASFL / SVBL · Suite des modules 501–505`;

const DEMO_506_APERCU_SUMMARY = `## Aperçu — Module 506
- MQ / AQ
- PDCA · Muda · ISO
- Traçabilité · IP`;

const DEMO_506_OBJECTIFS_FULL = `## Objectifs du module 506

À l'issue de ce module, l'apprenti·e est capable de :

- Distinguer **MQ** et **AQ** (et du contrôle qualité produit)
- Expliquer **Kaizen**, le cycle **PDCA** et le **PAC**
- Citer les **7 mudas** et le principe **ISO 9001** (audits inclus)
- Relier **traçabilité**, **économie circulaire** et **IP** à la qualité / sécurité`;

const DEMO_506_OBJECTIFS_SUMMARY = `## Objectifs
- MQ vs AQ
- PDCA · Muda · ISO
- Traçabilité · IP`;

/** Contenu Module 601 — La préparation de commandes */
const DEMO_601_THEORIE_FULL = `## 1. La préparation de commandes

Rassembler des articles d'un assortiment (entrepôt) selon les **commandes clients**. Aussi appelé « préparation » · anglais : **picking**.

### 1.1 Stratégies et notions

#### 1.1.1 Types
| Type | Principe |
| --- | --- |
| **Statique** | L'**homme va à la marchandise** · stock immobile · préparateur à pied / engin |
| **Dynamique** | La **marchandise vient à l'homme** · système amène vers la zone picking · reste restocké |

👉 Entrepôts auto souvent dynamiques · investissement ↑ · personnel ↓.

#### 1.1.2 Modes de déplacement
- **Unidimensionnel** : horizontal seulement · sol / 1er niveau · petite levée / chariots · déplacement rapide · 1 emplacement sol / article · réappro nécessaire
- **Bidimensionnel** : horizontal **+** vertical · grande levée / transstockeurs · temps d'accès ↑ · pas de manutention réserve→picking

#### 1.1.3 Prélèvement
- **Manuel** : préparateur → bac (même en auto souvent)
- **Automatique** : trieurs / robots → bac · **très rare**

#### 1.1.4 Transfert (dans l'entrepôt)
- **Centralisé** : vers zone d'expédition pour emballage
- **Décentralisé** : dépôt près du picking (fin d'allée / convoyeur) puis regroupement central · distances ↓ · productivité ↑ · fréquent avec transstockeurs / hauts rayonnages

#### 1.1.5 Informations
| Mode | Caractéristique |
| --- | --- |
| **Batch** | Lots de commandes · papier fréquent · données pas toujours actuelles · inventaire = interruption |
| **Real-time** | Données → MDE en direct · modifs jusqu'à mise à dispo · stocks actualisés · réappro auto |

👉 Temps réel : délais ↓ · disponibilité ↑ · inventaire à tout moment.

#### 1.1.6 Secteurs
**Un seul** secteur · ou **plusieurs** zones (collecte multi-zones).

#### 1.1.7 Une ou plusieurs commandes
- **Orienté commande** (1 commande) : tout pour le même client → emballage direct
- **Orienté article** (plusieurs) : 1re étape prélèvement multi-commandes · 2e répartition · distances ↓ si longs trajets

#### 1.1.8 Série ou parallèle
- **Série** (1 étape) : zones les unes après les autres · grosses commandes = temps ↑
- **Parallèle** (2 étapes) : parties traitées **simultanément** par plusieurs préparateurs → regroupement · temps ↓ pour commandes volumineuses

#### 1.1.9 Par allée
Accès allées d'un seul côté · articles **A** (fréquence ↑) près de l'allée principale · analyse **ABC** (module **408**).

#### Exemple EnterSite AG
Statique · déplacement **2D** (grande levée) · prélèvement **manuel** · transfert **centralisé** · 3 zones (toners, IT, cave « C ») · en principe **1 étape** orientée commande · cave en **2 étapes** orientée article · **série** · scanners MDE / WLAN = **temps réel**.

### 1.2 Techniques spéciales (sans papier)

Assistées ordi · objectif : données rapides · réaction ↓ · erreurs ↓ · base = **MDE**.

| Technique | Principe |
| --- | --- |
| **Pick-by-Scan** | MDE affiche la commande · le plus répandu · souvent pas 2 mains libres |
| **Pick-by-Voice** | Casque + micro · mains libres · vitesse / qualité ↑ |
| **Pick-by-Light** | LED indiquent emplacement + quantité · confirmation touche · **1 commande / zone** |
| **Pick-by-Vision** | Lunettes AR · infos superposées (lieu, qté, n°) · 2 mains libres · SGS · temps réel |

👉 Aident au quotidien · investissement ↑ vs classiques.

### 1.3 Pick-and-Pack

Prélèvement **et** conditionnement en **une** opération · article → emballage prêt à expédier · pas de poste emballage dédié. Contrôle ID/qté : préparateur, contrôleur ou auto.

Possible si : produits déjà préemballés · emballages **normalisés** · pas d'emballage complexe.`;

const DEMO_601_THEORIE_SUMMARY = `## À retenir — Module 601

### Types
Statique (homme→marchandise) · dynamique (marchandise→homme)

### Dimensions & prélèvement
1D / 2D · manuel (fréquent) / auto (rare)  
Transfert centralisé ou décentralisé

### Stratégies
Batch vs real-time · 1 / multi secteurs  
Orienté commande vs article · série vs parallèle · ABC allées

### Tech
Scan · Voice · Light · Vision · Pick-and-Pack`;

const DEMO_601_APERCU_FULL = `## Aperçu du module 601

Premier module du bloc **Distribution** : stratégies et techniques de **préparation de commandes** (picking).

### Vous allez découvrir
1. Types (statique / dynamique) et modes de déplacement
2. Prélèvement, transfert, infos, secteurs, série/parallèle
3. Techniques Pick-by-Scan / Voice / Light / Vision
4. Procédure Pick-and-Pack

### Source
EnterSite — Logistics by ASFL / SVBL · Bloc 600`;

const DEMO_601_APERCU_SUMMARY = `## Aperçu — Module 601
- Stratégies de picking
- Techniques sans papier
- Pick-and-Pack`;

const DEMO_601_OBJECTIFS_FULL = `## Objectifs du module 601

À l'issue de ce module, l'apprenti·e est capable de :

- Distinguer préparation **statique** / **dynamique** et déplacement **1D** / **2D**
- Comparer modes de prélèvement, transfert, infos (batch / real-time) et série / parallèle
- Expliquer prélèvement **orienté commande** vs **orienté article**
- Décrire Pick-by-Scan, Voice, Light, Vision et **Pick-and-Pack**`;

const DEMO_601_OBJECTIFS_SUMMARY = `## Objectifs
- Stratégies picking
- Scan / Voice / Light / Vision
- Pick-and-Pack`;

/** Contenu Module 602 — Les emballages */
const DEMO_602_THEORIE_FULL = `## 2. Les emballages

### 2.1 Emballer, mais pourquoi ?

| Fonction | Rôle |
| --- | --- |
| **Protection** | Contre humidité, lumière, température, chutes, chocs, salissures, corrosion, vol, micro-organismes… · et protéger l'environnement du contenu (MD, tranchant…) |
| **Logistique** | Regrouper · permettre l'empilage · mieux utiliser stockage/chargement · accélérer chargement · convoyeurs = emballages **normalisés** |
| **Information** | Mentions obligatoires, technique, composition, **marketing** (emballage de vente) |

👉 Aujourd'hui : pas seulement protéger — la logistique dépend d'un bon emballage.

**Ex. EnterSite** — écran ACER : carton + polystyrène · protection mécanique · palettisable · design « gamers » + infos techniques.

### 2.2 Termes DIN 55405

| Terme | Sens |
| --- | --- |
| **Matériel** d'emballage | Papier, carton, bois, métal, verre, plastique… |
| **Produit emballé** | Contenu |
| **Moyen** d'emballage | Boîte, caisse, bouteille, palette… (contient le produit) |
| **Accessoires** | Calage / scellage : ruban, ficelle, chips, colle… |
| **Emballage** | Moyen + accessoires |
| **Paquet** | Produit + emballage |
| **Unité d'emballage** | Paquet prêt à expédier / stocker |
| **Jetable** | Usage unique · recyclé / jeté |
| **Repris** (consigné) | Réutilisable |

#### 2.2.1 Autres termes (hors DIN)
- **Emballage de vente** : présentation en magasin + pub / infos
- **Fictif** : fait croire à plus de contenu
- **Suremballage** : protège l'emballage de vente (stockage / transport)
- **Emballage final** : pour le transport (y compris film étirable / rétractable palettes → module **603**)

### 2.3 Quel est le bon emballage ?

Facteurs : fragilité · mode de transport · itinéraire / durée · consignes · entreposage · souhaits client · **environnement** · quantité · pub · poids / prix.

**Ex.** Toner HP : exigences ≠ Afrique du Sud vs succursale Köniz.

#### 2.3.1 Choix du moyen
Jetables (incinérés / recyclés) vs **réutilisables** (pools ouvert / fermé).

| Solution | Points clés |
| --- | --- |
| **Dispobox** | Plastique léger / stable · 7 tailles · plombable · **pool fermé** |
| **IFCO** | « Internal Fish Container » (1985) · fruits/légumes · pliables · nettoyées · pool fermé |
| **Bacs gerbables** | Nervures · charges + humidité · boissons… · fonds : plat, renforcé, nervuré, grillagé, « tête de taureau » |

**Restrictions plastique :** fond tête de taureau ≠ convoyeurs à rouleaux · contact alimentaire = label UE · frais ≠ bac fermé (moisissures) · retours / contrôles anti-perte.

#### 2.3.2 Accessoires de rembourrage
« Aussi peu que possible, autant que nécessaire » · éviter mélanges peu professionnels. Secousses → solide **et** absorbant · chips seules ≠ OK (produit s'enfonce) → inserts carton + compactage. Outre-mer délicat : mousse expansive (« sur mesure », peu écologique).

#### 2.3.3 Durabilité
Réduire plastiques · emballages ingénieux · **Natural Branding** (laser sur fruits/légumes). Privilégier réutilisable.

### 2.4 Contraintes de protection

| Famille | Exemples |
| --- | --- |
| **Mécaniques** | Chutes · cisaillements/chocs · pressions · secousses |
| **Climatiques** | Météo · géographie · T°, humidité, pression… |
| **Nuisibles** | Moisissures · rongeurs / parasites |
| **Vol / pillage** | Détournement |

#### 2.4.1 Mécaniques
Emballage = **zone de déformation** qui absorbe l'énergie du choc.

- **Chute** : hauteur · masse · sol · type d'impact (plan / arête / angle)
- **Cisaillement / choc** : palettes, wagons (manœuvres), conteneurs
- **Pression** : empilage · intercalaires · lourds en bas
- **Secousses** : routes, aiguillages, mer, turbulences aériennes

#### 2.4.2 Climatiques
Selon zones / saison / parcours / durée / mode. Condensation (T° / pression) → dégâts (électronique, cuir…).

Mesures : polystyrène (isolation, souvent jetable) · **sachets silice** · mise sous **vide** · **VCI** (« papier gaz ») + papiers huilés / bitumés…

#### 2.4.3 Nuisibles
Attirés par l'odeur · carton ondulé faible · emballage intérieur **étanche aux odeurs** (film soudé · PVC / PE épais). Bois international : **ISPM-15** (IPPC) · exemptions : panneaux, contreplaqué, bois < 6 mm… · fumigation par spécialistes.

#### 2.4.4 Vol
Film opaque · pas d'étiquetage visible · composants séparés · panneaux anti-perçage…

### 2.5 Normes d'emballage

Dimensions transport normalisées (ISO) → s'adaptent à l'**Europalette** · L/l = surface · H = volume.

#### 2.5.1 Empilage
Préférer **imbriqué** (jointures décalées) à **en colonne** → stabilité ↑.

#### 2.5.2 Marques
Symboles de sensibilité : **DIN 55402** / **ISO R 780**.`;

const DEMO_602_THEORIE_SUMMARY = `## À retenir — Module 602

### 3 fonctions
Protection · logistique · information

### Vocabulaire DIN
Matériel → moyen + accessoires = emballage · paquet · jetable / repris

### Choix
Fragilité, transport, durée, écolo…  
Dispobox · IFCO · bacs · rembourrage minimal utile · durabilité

### Contraintes
Mécaniques · climatiques · nuisibles (ISPM-15) · vol  
Empilage imbriqué · symboles DIN/ISO`;

const DEMO_602_APERCU_FULL = `## Aperçu du module 602

Ce module traite des **emballages** : fonctions, vocabulaire DIN, choix, contraintes et normes.

### Vous allez découvrir
1. Fonctions protection / logistique / information
2. Termes DIN 55405 et notions associées
3. Choix (Dispobox, IFCO, rembourrage, durabilité)
4. Contraintes mécaniques, climatiques, nuisibles, vol · normes

### Source
EnterSite — Logistics by ASFL / SVBL · Suite du module 601`;

const DEMO_602_APERCU_SUMMARY = `## Aperçu — Module 602
- Fonctions & vocabulaire DIN
- Choix & durabilité
- Contraintes & normes`;

const DEMO_602_OBJECTIFS_FULL = `## Objectifs du module 602

À l'issue de ce module, l'apprenti·e est capable de :

- Expliquer les trois **fonctions** de l'emballage
- Utiliser le vocabulaire **DIN 55405** (moyen, accessoires, paquet…)
- Choisir un emballage / rembourrage selon contraintes et **durabilité**
- Décrire les contraintes (mécaniques, climatiques, nuisibles, vol) et les **normes** (empilage, symboles)`;

const DEMO_602_OBJECTIFS_SUMMARY = `## Objectifs
- Fonctions & DIN
- Choix & contraintes
- Normes · durabilité`;

/** Contenu Module 603 — L'arrimage des marchandises */
const DEMO_603_THEORIE_FULL = `## 3. L'arrimage des marchandises

Pour sécuriser un chargement de palettes : **filmage (stretch)** · **rétraction** · **cerclage**.

### Filmage / stretching
Envelopper avec un **film étirable** (dérouleur manuel ou filmeuse).

- Étirer le film pendant l'enveloppement → stabilité (réglage de la tension)
- Inclure la **palette** dans le stretch pour stabilité optimale · **sauf** avant contrôle de profil auto (sinon rejet « palette défectueuse »)
- Idéal pour charges **homogènes** · arêtes saillantes peuvent percer · charges avec éléments lourds → **+ cerclage** plastique

👉 Langage courant : « filmer » = souvent banderolage étirable (à distinguer de la rétraction thermique).

### Rétraction
Housse **thermo-rétractable** (souvent PVC épais) chauffée (soufflante / flamme / four) → se resserre. Protège intempéries, poussière, vol. Peu écologique. **Non étirable** : une fois abîmée, protection insuffisante. Ne pas surchauffer un même endroit.

### Cerclage
Feuillard autour de grosses unités. **Vertical** = souvent le mieux (relie palette + charge). **Horizontal** plus rare (ex. fûts). Piles très instables : combinaison V+H · parfois mieux d'ajouter du stretch plutôt qu'un cerclage horizontal.

### 3.1 Choisir le bon feuillard

Critères : résistance à la traction · extensibilité · capacité de rappel · prix · environnement.

| Matériau | Traction (N/mm²) | Extensibilité | Rappel | Prix | Écolo |
| --- | --- | --- | --- | --- | --- |
| Plastique **PP / PET** | 330–400 | 16–22 % | Très grand | Bon marché | PET recyclable |
| Textile / polyester | 470–570 | 11–16 % | Grand | Cher | Non recyclable |
| **Acier** | 700–1100 | 6–12 % | Petit | Très cher | Recyclable |

#### 3.1.1 Résistance à la traction
N/mm² = force pour déchirer 1 mm². Comparer plutôt la **force de rupture** :  
**Force de rupture = section × résistance** · section = largeur × épaisseur.  
(Pratique : ~10 N ≈ 1 kg.)

**Ex. EnterSite** — palette toner 600 kg · 2 cerclages → ≥ **300 kg** / feuillard.

| | Plastique | Acier |
| --- | --- | --- |
| Dimensions | 20 × 0,4 mm → 8 mm² | 15 × 0,6 mm → 9 mm² |
| Traction | 400 N/mm² | 1200 N/mm² |
| Rupture | 3200 N ≈ **320 kg** | 10 800 N ≈ **1080 kg** |

Les deux suffisent → trancher sur d'autres critères.

#### 3.1.2 Allongement
% d'extension jusqu'à rupture · PP le plus extensible.

#### 3.1.3 Capacité de rétractation (rappel)
Capacité à se **resserrer** après étirement · importante si la charge se tasse. Plastique ≫ acier (acier étiré ne se contracte presque plus).

### 3.2 Types de fermeture

Avec **boucle** · avec **chape** · **sans chape** (soudage, poinçonnage, encliquetage).

#### 3.2.1 Boucle
Économique · fils polyester / textile / PP · rouvrable / retendable · bois, meubles, sécurisation temporaire interne.

#### 3.2.2 Chape
Tendre → poser chape → écraser / poinçonner · plastique ou métal · appareils combinés (tension + chape + soudure).

#### 3.2.3 Sans chape
Plus rationnel · soudure / encliquetage. Plastique : soudeuses **vibrantes** (frottement 200–300 Hz) · ultrasons surtout sur machines auto haut rendement.

#### 3.2.4 Ficelle
Industrie des boissons : caisses souvent sécurisées par **une ficelle** pré-coupée · rapide et économique · adopté ailleurs.`;

const DEMO_603_THEORIE_SUMMARY = `## À retenir — Module 603

### 3 méthodes
Stretch (étirer, inclure palette sauf profil) · rétraction (chaleur, PVC) · cerclage (V > H)

### Feuillard
PP/PET · textile · acier  
Comparer **force de rupture** (= section × traction)  
Plastique = rappel ↑ si charge se tasse

### Fermetures
Boucle · chape · sans chape (vibration) · ficelle boissons`;

const DEMO_603_APERCU_FULL = `## Aperçu du module 603

Ce module traite de l'**arrimage** des charges palettisées : filmage, rétraction, cerclage, choix du feuillard et fermetures.

### Vous allez découvrir
1. Stretch, rétraction et cerclage
2. Choix du feuillard (traction, allongement, rappel)
3. Calcul de la force de rupture
4. Fermetures (boucle, chape, sans chape, ficelle)

### Source
EnterSite — Logistics by ASFL / SVBL · Suite des modules 601–602`;

const DEMO_603_APERCU_SUMMARY = `## Aperçu — Module 603
- Stretch · rétraction · cerclage
- Feuillards & force de rupture
- Types de fermeture`;

const DEMO_603_OBJECTIFS_FULL = `## Objectifs du module 603

À l'issue de ce module, l'apprenti·e est capable de :

- Comparer **filmage**, **rétraction** et **cerclage**
- Choisir un **feuillard** (PP/PET, textile, acier) selon traction, allongement et rappel
- Calculer une **force de rupture** et l'appliquer à un cas (ex. 2 cerclages)
- Distinguer les **fermetures** (boucle, chape, sans chape, ficelle)`;

const DEMO_603_OBJECTIFS_SUMMARY = `## Objectifs
- Stretch / rétraction / cerclage
- Feuillard & rupture
- Fermetures`;

/** Contenu Module 604 — Les systèmes de distribution */
const DEMO_604_THEORIE_FULL = `## 4. Les systèmes de distribution

### 4.1 Canaux de vente

#### 4.1.1 Vente directe
Producteur → client final (**B2C**) · livraison ou retrait chez le producteur · pas d'intermédiaire → prix souvent plus avantageux · trajets parfois plus longs pour le client.

#### 4.1.2 Vente indirecte
Producteur → **intermédiaire** (ex. Coop, Migros) → autre distributeur ou client · **B2B** entre producteurs / commerçants.

### 4.2 Distribution (répartition)

#### 4.2.1 À un niveau
Client chez le producteur **ou** producteur sur un point de vente (ferme, marché, magasin d'usine / outlet).

#### 4.2.2 À plusieurs niveaux
Passage par intermédiaire et/ou entrepôt d'un grand distributeur.

**Centralisé vs décentralisé**  
Un niveau supplémentaire se justifie si coûts d'entreposage ≤ économies de transport. Infra transport développée → tendance **centralisée**.

Critères de décision : importance de la région · type de marchandise (périssable ?) · structure clientèle · proximité client · écologie · sites (prod., entrepôt central/régional, dépôt).

##### Grande distribution — concept classique
Réseau multiniveaux · centres d'achat + points de vente · large assortiment · défi logistique d'approvisionnement des magasins.

##### Concept décentralisé
Centres spécialisés par type (non-food, DIY, coloniales…) · commandes des magasins · préparation « pour magasins » · pas de stock régional : **transit** / regroupement = **Cross Docking**.

**Cross Docking :** marchandises déjà pré-commissionnées par le fournisseur · pas (ou peu) de stockage · réexpédition rapide · picking reporté chez le fournisseur. Prérequis : commandes clients déjà passées · délais fournisseurs courts.  
👉 Objectif : stocks ↓ · vitesse ↑ · coûts de stockage ↓.

Entrepôts régionaux → souvent **plateformes frais** · gros points de vente parfois livrés directement depuis production / distribution centrale → réseau complexe.

##### Vente par correspondance / e-commerce
Commande en ligne · livraison domicile · ex. Galaxus, Coop, Migros, Lindt… · EnterSite AG a aussi sa boutique.

### 4.3 Marché postal

Ouverture du marché · plusieurs opérateurs · seule **La Poste Suisse SA** a l'obligation de service public : lettres et colis ≤ **20 kg** partout en Suisse à prix identiques/avantageux.

#### 4.3.1 Réservé / non réservé / concurrentiel
| Type | Contenu |
| --- | --- |
| **Réservé** (monopole) | Lettres ≤ **50 g** · exclusivité Poste (sauf étranger) · finance le service universel |
| **Non réservé** | Lettres > 50 g + colis · Poste **en concurrence** |
| **Concurrentiel** | Services que la Poste **peut** offrir (ex. express) · pas d'obligation |

👉 Mission service public ↔ exclusivité < 50 g.

#### 4.3.2 Transport Poste
Dépôt → camion → centre de tri lettres/colis · même zone → district · sinon train vers autre centre → camion vers régions / bases colis → remise (scooter DXP, voiture, camionnette).

### 4.4 Secteur des transports

#### 4.4.1 DEC (documents, express, colis)
Principaux : **Poste**, **DPD**, **DHL** · + messagers / coursiers vélo (villes).

### 4.5 Exemples

#### 4.5.1 Diverses marchandises
Colis > **30 kg** souvent sur palette = transport de **colis unitaires** · ramassage → plateforme → tri régional → livraison camion.

👉 Stratégie de distribution adaptée = succès entreprise.

#### 4.5.2 Étranger
Emballage spécial · **dédouanement** · assurance · spécialistes / transitaires.

##### Incoterms 2020
*International Commercial Terms* — répartissent entre vendeur et acheteur :
- coûts (conditionnement, fret, assurances)
- documents import / export
- droits de douane / taxes
- **transfert des risques**

Familles usuelles (tout mode vs mer/fluvial) :  
**EXW** · **FCA** · **CPT** · **CIP** · **DAP** · **DPU** · **DDP** (tout mode) · **FAS** · **FOB** · **CFR** · **CIF** (mer / fluvial).

De EXW (quasi tout à charge acheteur) à **DDP** (vendeur jusqu'au lieu de destination dédouané).`;

const DEMO_604_THEORIE_SUMMARY = `## À retenir — Module 604

### Vente
Directe (B2C) · indirecte (intermédiaires)

### Distribution
1 niveau · multi-niveaux · centralisé / décentralisé  
**Cross Docking** · plateformes frais · e-commerce

### Postal
Service public · réservé ≤50 g · non réservé · concurrentiel  
Flux : dépôt → tri → distribution

### Transport & export
DEC (Poste, DPD, DHL) · palettes >30 kg · **Incoterms**`;

const DEMO_604_APERCU_FULL = `## Aperçu du module 604

Ce module présente les **systèmes de distribution** : canaux de vente, concepts multiniveaux, marché postal, DEC et Incoterms.

### Vous allez découvrir
1. Vente directe / indirecte et distribution 1 / multi niveaux
2. Concepts classiques vs décentralisés et Cross Docking
3. Marché postal (réservé / non réservé / concurrentiel)
4. DEC, colis unitaires et Incoterms 2020

### Source
EnterSite — Logistics by ASFL / SVBL · Suite des modules 601–603`;

const DEMO_604_APERCU_SUMMARY = `## Aperçu — Module 604
- Canaux & concepts de distribution
- Cross Docking · postal
- DEC · Incoterms`;

const DEMO_604_OBJECTIFS_FULL = `## Objectifs du module 604

À l'issue de ce module, l'apprenti·e est capable de :

- Distinguer vente **directe** / **indirecte** et distribution à **un** / **plusieurs** niveaux
- Expliquer centralisé vs décentralisé et le **Cross Docking**
- Décrire le marché **postal** (service public, réservé ≤50 g…)
- Situer les acteurs **DEC** et le rôle des **Incoterms** à l'export`;

const DEMO_604_OBJECTIFS_SUMMARY = `## Objectifs
- Canaux & Cross Docking
- Postal · DEC
- Incoterms`;

/** Contenu Module 605 — Mode d'envoi postal */
const DEMO_605_THEORIE_FULL = `## 5. Mode d'envoi postal

### 5.1 Adressage

Base d'un flux sans faille dépôt → distribution. Autrefois : adresses de fermes + mémoire des facteurs. Aujourd'hui : critères stricts pour machines (jusqu'à ~**18 millions** de lettres/jour).

**Lettres — points clés :**
- Aligné à **gauche** · 3 à 6 lignes · pas de lignes vides
- Nom entreprise / nom + prénom complets
- Rue + n° · ou **Case postale** + n°
- **NPA** + localité complets
- Pas de soulignement ni espaces entre lettres

Étiquette à gauche ou droite (droite = plus de place expéditeur / pub).

**Colis — conseils Poste :**
1. Police 3–4 mm (12–16 pt) · laser / jet d'encre · pas décorative
2. Destinataire : personne/entreprise · rue/n° ou CP · NPA + localité
3. Expéditeur : de préférence **vertical** · à gauche · ≥ **10 mm** du destinataire
4. **Code-barres** d'envoi (expéditeur + n° d'envoi)
5. Étiquettes prestations (ex. Priority, Signature) à **droite** du code-barres

👉 Étiquetage correct = travail Poste simplifié · évite hausses de prix.

### 5.2 Modes d'envoi

#### 5.2.1 Lettres
| Prestation | Contenu |
| --- | --- |
| **Courrier A** | J+1 · lun–sam |
| **Courrier B** | Plus économique · au plus tard 3e jour ouvrable · lun–ven |
| **Recommandé (R)** | Signature · preuve · assuré jusqu'à **500 CHF** · J+1 lun–ven |
| **En main propre (RMP)** | Remise uniquement à la personne nommée |
| **Remboursement (BLN)** | Signature + paiement · crédit compte postal expéditeur |
| **Swiss-Express Lune** | Avant **9 h** · J+1 lun–sam |
| **SameDay Coursier** | Jour même · lun–ven · plus cher |

#### 5.2.2 Colis
| Prestation | Contenu |
| --- | --- |
| **PostPac Priority (PRI)** | J+1 lun–ven |
| **PostPac Economy** | 2e jour ouvrable lun–ven |
| **Encombrants (SP)** | Volumineux / non emballés · tri **manuel** |
| **Signature (SI)** | Contre signature · responsabilité jusqu'à **1 500 CHF** |
| **BLN / RMP** | Comme lettres |
| **Assurance (AS)** | Comme SI + jusqu'à **5 000 CHF** · discret (aspect SI) |
| **Fragile (FRA)** | Soin particulier · jusqu'à **5 000 CHF** · manuel |
| **Lune / SameDay** | Comme lettres |

Listes non exhaustives · combinaisons possibles. Autres CEP/DEC sur le marché.

### 5.3 Envoi à l'étranger

Contrôle douanier pays d'origine **et** destination · documents complets.  
Colis > **2 kg** : Urdorf (camion) ou Zurich Aéroport (avion).  
Documents / petites marchandises ≤ **2 kg** : hub ZH-Mülligen (colis ≤ 2 kg = « documents » en postal international).  
Autres CEP internationaux actifs.

### 5.4 Centres de tri

#### 5.4.1 Lettres
3 grands centres · zone d'oblitération / 1er tri. Machine lit rue + NPA. Si échec → photo → saisie manuelle (ex. Coire). Code-barres bas = ordre 2e tri.  
Tri **séquencé** : centre · secteur · rue · n° · ordre des boîtes → facteur reçoit conteneur (BB) déjà classé.

#### 5.4.2 Colis
Séparation au dépôt (Priority / Economy · encombrants · Express) · RollBox RX. 1er tri par NPA · 2e tri vers centres de distribution (train/camion) · secteurs.

#### 5.4.3 Santé
**Exosquelette** : structure externe · ergonomie · ↓ accidents dos (lien module **405**) · testé par la Poste.  
Préférer auxiliaires (chariots, tables à ciseaux, ventouses, diables…) · règles **SUVA** de levage.

### 5.5 Distribution

Ville : lettres / colis / express souvent séparés · campagne : même coursier. Fusion PostMail + PostLogistics → **Logistics Services**.  
Moyens : pied, vélo, tricycle élec. (**DXP**, cargo, VR-bike), voiture, camionnette. Service public = couverture nationale. Ville : > **2000** lettres/jour · campagne : moins d'envois mais parfois > **50 km**.

Scanner (smartphone) · codes-barres · données ménage · nouveaux clients → système **AMP** (mis à jour quotidiennement) · sert au tri séquencé.

**Preuve d'identité** (ex. RMP) : carte d'identité · passeport · permis CH · livret étrangers · carte d'identité Poste.

#### 5.5.1 PickPost
> **2500** points (gares, magasins, stations…) · retrait flexible lettres recommandées / colis · pas de frais extra · avis SMS/e-mail.

#### 5.5.2 My Post 24
Automates **24/7** · retrait / dépôt · adresse alternative / 2e livraison. CEP privés : offres similaires.`;

const DEMO_605_THEORIE_SUMMARY = `## À retenir — Module 605

### Adressage
Gauche · NPA · code-barres · étiquettes prestations

### Prestations
A/B · R · RMP · BLN · Lune · SameDay  
Priority / Economy · SI · AS · FRA · SP

### Flux
Étranger (Urdorf / ZRH / Mülligen)  
Tri lettres séquencé · colis RollBox  
Distribution + AMP · PickPost · My Post 24`;

const DEMO_605_APERCU_FULL = `## Aperçu du module 605

Ce module détaille le **mode d'envoi postal** : adressage, prestations lettres/colis, étranger, centres de tri et distribution.

### Vous allez découvrir
1. Règles d'adressage lettres et colis
2. Prestations de base et complémentaires
3. Export postal et traitement en centres de tri
4. Distribution, identité, PickPost et My Post 24

### Source
EnterSite — Logistics by ASFL / SVBL · Suite du module 604`;

const DEMO_605_APERCU_SUMMARY = `## Aperçu — Module 605
- Adressage & prestations
- Tri · distribution
- PickPost · My Post 24`;

const DEMO_605_OBJECTIFS_FULL = `## Objectifs du module 605

À l'issue de ce module, l'apprenti·e est capable de :

- Appliquer les règles d'**adressage** lettres et colis
- Comparer les principales **prestations** (A/B, Priority/Economy, Signature…)
- Décrire le flux **étranger** et le **tri** (lettres séquencé, colis)
- Expliquer la **distribution**, PickPost et My Post 24`;

const DEMO_605_OBJECTIFS_SUMMARY = `## Objectifs
- Adressage & prestations
- Tri & distribution
- PickPost / My Post 24`;

/** Contenu Module 606 — Le transport routier */
const DEMO_606_THEORIE_FULL = `## 6. Le transport routier

### 6.1 Trafic routier

Malgré la **RPLP** (depuis 2001), la route reste avantageuse : flexibilité et liberté d'organisation (quoi, quand, où). Idéale pour la **distribution fine**. Contreparties : embouteillages · réglementation forte (nuit, dimanche, fériés, temps de conduite…).

Trafic dense surtout sur le **plateau** · axe N–S via le **Gothard**. Les PL suisses transportent surtout des biens d'approvisionnement (denrées alimentaires en tête, ex. 2019).

#### 6.1.1 Forces dynamiques
Mesurées en m/s² (N) · pesanteur ≈ **10 m/s²** = **1 g** · 1 kg ≈ 10 N.

| Force | Sens / effet |
| --- | --- |
| **Accélération** | Vers l'**arrière** · ↑ avec masse et accélération |
| **Décélération** | Vers l'**avant** · inertie · souvent > accélération (freinage fort) · jusqu'à ~1 g |
| **Centrifuge** | Vers l'**extérieur** du virage · ↑ avec rayon ↓ et vitesse · **vitesse au carré** (×2 vitesse → ×4 force) · risque de renversement si charge glisse |
| **Verticales** (vibrations) | Secousses · ↓ frottement / adhérence · charge peut « perdre » le sol → **arrimage** |

👉 Comprendre ces forces = mieux sécuriser le chargement.

#### 6.1.2 Sécuriser le véhicule
Avant chargement : véhicule correctement sécurisé (procédures / checklist).

### 6.2 Répartition de la charge

#### 6.2.1 Bases légales
Positionner pour :
- ≥ **20 %** du poids effectif sur l'essieu **directeur**
- ≥ **25 %** sur l'essieu **tracteur**
- ne pas dépasser charges max. / essieu ni **poids total**

Permis de circulation : charges essieux · poids à vide · charge utile · poids total.

#### 6.2.2 Chargement et sécurisation
| Mode | Principe |
| --- | --- |
| Arrimage de **blocage** | Contact tous côtés avec parois → pas de déplacement |
| Arrimage de **force** | Charge libre sur le pont · exigences d'arrimage **élevées** |
| Plan de **répartition** | Vérifie si charge complète peut aller contre paroi frontale |

#### 6.2.3 Chargement
Palettes : transversal · longitudinal · mixte. Itinéraire de déchargement → **LIFO**.

**Procédure :**
1. Définir le **bloc** (L/T/mixte) + **centre de gravité** (milieu du bloc)
2. Calculer la **longueur** du bloc
3. Centrer sur la surface · répartir selon poids / CdG · LIFO selon tournée
4. Avec plan de charge utile : CdG dans la **zone verte** · sinon pas contre la paroi frontale

#### 6.2.4 Sécurisation
Arrimer contre **toutes** les forces dynamiques. Moyens : sangles · chaînes · filets · tapis antidérapants · barres (H/V) · coussins d'air…

### 6.3 RPLP

Depuis 2005 : trains routiers / articulés jusqu'à **40 t** (accords bilatéraux UE). Objectif politique : report vers le **rail** (transit alpin). RPLP votée 1998 · en vigueur **2001** · véhicules > **3,5 t** (exceptions).

Tarif selon **émissions** (véhicules propres = moins taxés). CH : appareil électronique + tachygraphe · contrôle **GPS**. Étrangers : appareil ou paiement douane (carte à puce).

**Objectifs :** freiner hausse du trafic lourd · report rail · ↓ impact environnemental.

**Recettes :** 1/3 cantons (coûts routiers non couverts) · 2/3 Confédération (ferroviaire, bruit : NLFA, Rail 2000, TGV…). Facturation mensuelle par l'administration des douanes.

👉 Coûts élevés → véhicules récents rentables **et** plus écologiques.

**Ex. EnterSite** — Rupperswil → Marly · **122 km** · 26 t · EURO 5 ≈ **98.35 CHF** · EURO 6 ≈ **72.30 CHF**.`;

const DEMO_606_THEORIE_SUMMARY = `## À retenir — Module 606

### Route
Flexible · distribution fine · réglementée · embouteillages

### Forces
Accélération · décélération · centrifuge (v²) · vibrations → arrimage

### Charge
≥20 % directeur · ≥25 % tracteur · max essieux / poids total  
Blocage vs force · LIFO · sangles, tapis, barres…

### RPLP
>3,5 t · selon émissions · report rail · 1/3 cantons · 2/3 Confédération`;

const DEMO_606_APERCU_FULL = `## Aperçu du module 606

Ce module traite du **transport routier** : forces dynamiques, répartition/sécurisation de charge et RPLP.

### Vous allez découvrir
1. Atouts et contraintes du trafic routier en Suisse
2. Forces dynamiques et sécurisation
3. Répartition légale et moyens d'arrimage
4. RPLP (objectifs, calcul, recettes)

### Source
EnterSite — Logistics by ASFL / SVBL · Suite du module 605`;

const DEMO_606_APERCU_SUMMARY = `## Aperçu — Module 606
- Forces dynamiques
- Répartition & arrimage
- RPLP`;

const DEMO_606_OBJECTIFS_FULL = `## Objectifs du module 606

À l'issue de ce module, l'apprenti·e est capable de :

- Expliquer les atouts / contraintes du **transport routier** en Suisse
- Relier les **forces dynamiques** à la sécurisation du chargement
- Appliquer les règles de **répartition** (essieux) et citer les moyens d'arrimage
- Décrire la **RPLP** (objectifs, tarification, utilisation des recettes)`;

const DEMO_606_OBJECTIFS_SUMMARY = `## Objectifs
- Forces & arrimage
- Répartition légale
- RPLP`;

/** Contenu Module 607 — Le transport ferroviaire */
const DEMO_607_THEORIE_FULL = `## 7. Le transport ferroviaire

Variante **économique** et **écologique** pour de grandes quantités. En Suisse : crucial pour contourner l'**interdiction de nuit** des camions. Interrégional / national souvent au **rail** · ramassage / livraison finale souvent à la **route**.

Rôle central CH dans le trafic **N–S** européen. Asie → Europe : rail gagne vs maritime (« **nouvelle route de la soie** » / BRI).

**CFF Cargo** : ~**29,8 Mt**/an (wagons complets, trains complets, combiné) ≈ **10 000** trajets camion/jour.

**+** vs autres modes : plus rapide que mer · moins cher que air · nettement plus écologique qu'air / eau / route.

**Ex. ports rhénans (Bâle)** — objectif **50 %** conteneurs sur rail (vs ~10 % aujourd'hui / 90 % camion) · **Gateway Basel Nord** : mieux relier rail–route–eau.

### 7.1 Principaux itinéraires

#### 7.1.1 Suisse
Axe **N–S** (Gothard dès 1882 · NLFA) · axe **O–E** Genève → Suisse orientale via Berne / Zurich.

#### 7.1.2 Europe
Liaisons N–S cruciales. Traité de **Maastricht** (1992) : accès au réseau européen au-delà des frontières.

#### 7.1.3 Global
Chine dominante · investissements mer + rail · **Belt and Road Initiative (BRI)**.

#### 7.1.4 NLFA
Œuvre du siècle · 3 tunnels de base + accès :
- **Lötschberg** 34,7 km (2007)
- **Saint-Gothard** **57 km** (2016) — plus long tunnel ferroviaire du monde
- **Ceneri** 15,4 km (sept. 2020) — achèvement NLFA

**Avantages :**
- Capacité : 210 créneaux/jour transit · objectif 260 (fin 2022)
- Temps : Rotterdam–Milan ≈ **−2 h**
- Trains jusqu'à **750 m** · ~**2100 t** N→S / **2000 t** S→N · ~**100 km/h**
- Durabilité : >3000 emplacements semi-remorques/jour · **0,3 t CO₂** économisée / remorque · jusqu'à ~**890 t CO₂**/jour à pleine capacité

👉 Coût total NLFA > **22,6 milliards CHF**.

### 7.2 Forces dynamiques (rail)

Aiguillages / manœuvres = contraintes fortes.

| Force | Ordre de grandeur |
| --- | --- |
| **Décélération** | Jusqu'à **4 g** en gare de triage (« laisser-couler ») |
| **Vibrations / centrifuge** | ~**0,3 g** (aiguillages, virages) |

#### 7.2.1 Sécuriser les wagons
Avant chargement : véhicules correctement sécurisés.

#### 7.2.2 Charger correctement
**Chargeur / client** responsable (CIM art. 13 al. 2 · CGV CFF Cargo) : directives, limites de charge, poids exact sur lettre de voiture.

Règles : charger / sécuriser selon directives · répartir uniformément · éviter max. pour marchandises hygroscopiques (bois, sable…) · utiliser équipements de pesage.

Poids important sur les **essieux** · compactage (cloisons, coussins d'air).  
**Ne jamais** mettre le fragile contre les parois frontales.

Rapports max. : essieux **1:2** · bogies **1:3** · transversal : écart ≤ **25 %** (facteur 1,25).  
*Bogie* = chariot sous le véhicule portant les essieux/roues.

### 7.3 Marchandises dangereuses

Wagons MD : **classe de danger** + **n° ONU**.  
Ex. : danger **33** (liquides inflammables, double = particularité) + ONU **1203** = essence.

### 7.4 Avenir

Projets de report route → rail · **Cargo Sous Terrain** (module **610**) · tubes rapides type **Hyperloop** (plus lointain).`;

const DEMO_607_THEORIE_SUMMARY = `## À retenir — Module 607

### Rail CH
Éco · contourne interdiction nuit · CFF Cargo ~30 Mt/an  
NLFA : Lötschberg · Gothard 57 km · Ceneri · >22,6 Md CHF

### Forces
Triage jusqu'à 4 g · vibrations ~0,3 g

### Chargement
Responsabilité chargeur · essieux 1:2 · bogies 1:3  
MD : classe + ONU · avenir CST / Hyperloop`;

const DEMO_607_APERCU_FULL = `## Aperçu du module 607

Ce module présente le **transport ferroviaire** : axes, NLFA, forces dynamiques, chargement et MD.

### Vous allez découvrir
1. Avantages du rail et rôle de la Suisse (N–S, BRI)
2. NLFA (tunnels, capacités, CO₂)
3. Forces en triage et règles de chargement
4. Marquage MD et perspectives (CST)

### Source
EnterSite — Logistics by ASFL / SVBL · Suite du module 606`;

const DEMO_607_APERCU_SUMMARY = `## Aperçu — Module 607
- Axes · NLFA · BRI
- Chargement & forces
- MD · avenir`;

const DEMO_607_OBJECTIFS_FULL = `## Objectifs du module 607

À l'issue de ce module, l'apprenti·e est capable de :

- Expliquer les atouts du **rail** et le rôle de la Suisse / NLFA
- Décrire les **forces dynamiques** en ferroviaire (triage, vibrations)
- Appliquer les principes de **chargement** (responsabilité, rapports essieux/bogies)
- Lire un marquage **MD** (classe + ONU) et citer des perspectives d'avenir`;

const DEMO_607_OBJECTIFS_SUMMARY = `## Objectifs
- Rail & NLFA
- Chargement & forces
- MD · avenir`;

/** Contenu Module 608 — Le transport aérien */
const DEMO_608_THEORIE_FULL = `## 8. Le transport aérien

### 8.1 Importance du fret aérien

Élément clé du commerce international · **vitesse** inégalée. Pour la Suisse : accès aux marchés mondiaux · ~**50 %** de la valeur des exportations (2019 : 157 Md CHF sur 312 Md via aéroports CH · hors or/métaux précieux dans certaines études). Crise COVID : rapatriements + approvisionnement urgent.

👉 Mode le plus **rapide** à l'échelle mondiale.

### 8.2 Domaines d'application

Animaux vivants · fleurs / fruits · journaux / films · mode / saisonnier · pièces urgentes · médicaments · délais précis · courrier aérien · haute valeur / sensibles / sujettes au vol · secours · documents · organes / dépouilles.

### 8.3 Trafic de remplacement aérien

Optimiser les capacités : acheminement **camion** vers/depuis hub (ex. Luxembourg → Zurich · CH → Francfort puis Asie). Concurrence entre prestataires. Semi-remorques souvent à **plancher à rouleaux**.

### 8.4 Aéroports suisses

Trois aéroports nationaux : **Zurich**, **Genève**, **Bâle**.

#### 8.4.1 Zurich
~**70 %** du marché fret CH · **hub** · Swiss WorldCargo ~**65 %** · majorité en avions passagers · ~**70 %** fret de transfert · >1200 t/jour · ~1400 collab. · manutention Cargologic / Dnata · ~120 transporteurs alentours.

#### 8.4.2 Genève
Plaque régionale/nationale · frontière CH–FR · produits haute valeur (chimie, montres…).

#### 8.4.3 EuroAirport Bâle-Mulhouse
Seul aéroport **binational** · région tri-nationale · 5 km Allemagne · import/export CH **et** UE · pharma · liaisons autoroutes CH/FR/DE.

### 8.5 Unités, moyens, avions

#### 8.5.1 Unités
**BUP** (*Bulk Unitization Program*) : unitisation type « conteneur ISO » du maritime.  
**ULD** (*Unit Load Devices*) : conteneurs / plaques aluminium + filet · ↓ nb d'unités · personnel/temps au sol ↓.

#### 8.5.2 Moyens
Remorques + tracteur · chariot porte-conteneurs · **plates-formes élévatrices** à rouleaux pour chargement avion.

#### 8.5.3 Avions
Cargos moins nombreux / discrets. **Belly freight** : fret sous la cabine passagers · réseau long-courrier souvent rentable **seulement** avec fret.

### 8.6 Dédouanement et contrôles

Toute import/export via douane · contrôles ciblés · taxes. Futur : déclaration **numérique** (ex. n° **Air Waybill**).  
**Vétérinaire de frontière** : épizooties · hygiène alimentaire · espèces menacées.  
**Service phytosanitaire** : maladies végétales / ravageurs.

### 8.7 Forces dynamiques

Décollage / atterrissage · transbordement jusqu'à ~**1,0 g** (+ secousses chargement).

### 8.8 Expédition

#### 8.8.1 Emballage
Par l'expéditeur selon règles générales · cas spéciaux (MD…).

#### 8.8.2 Chargement ULD
Directives **IATA** · formation **IATA Cargo** obligatoire · principes proches du routier · film + filet.

#### 8.8.3 MD (DGR)
*Dangerous Goods Regulations* : quelles MD · quantités nettes max. · emballages spéciaux · incompatibilités · parfois **Cargo Aircraft Only**. Pictogrammes · **Shipper's Declaration** (équivalent ONU, qté nette, classe, groupe, instruction d'emballage · parfois n° urgence 24h). Entreprises spécialisées fréquentes.

#### 8.8.4 Air Waybill (AWB)
Contrat expéditeur (*shipper*) ↔ compagnie (*carrier*). **Non négociable** (≠ Bill of Lading maritime).

Rôles : confirmation de prise en charge · instructions manipulation/acheminement · justificatif assurance · niveau de responsabilité · possible déclaration douane · base de facturation fret.`;

const DEMO_608_THEORIE_SUMMARY = `## À retenir — Module 608

### Importance
Plus rapide · ~50 % valeur export CH · hubs Zurich / GVA / Bâle

### Technique
ULD / BUP · belly freight · remplacement camion  
Douane · vétérinaire · phytosanitaire

### Expédition
IATA · DGR · AWB (non négociable)`;

const DEMO_608_APERCU_FULL = `## Aperçu du module 608

Ce module présente le **fret aérien** : importance pour la Suisse, aéroports, ULD, contrôles et documents (AWB, DGR).

### Vous allez découvrir
1. Poids économique du fret aérien
2. Domaines d'application et trafic de remplacement
3. Zurich, Genève, Bâle · ULD et belly freight
4. Douane, forces, emballage, MD et Air Waybill

### Source
EnterSite — Logistics by ASFL / SVBL · Suite du module 607`;

const DEMO_608_APERCU_SUMMARY = `## Aperçu — Module 608
- Fret aérien CH
- ULD · aéroports
- AWB · DGR`;

const DEMO_608_OBJECTIFS_FULL = `## Objectifs du module 608

À l'issue de ce module, l'apprenti·e est capable de :

- Expliquer l'importance du **fret aérien** pour la Suisse
- Situer les trois **aéroports** nationaux et le rôle des **ULD**
- Décrire douane / contrôles et les **forces** en aérien
- Distinguer **AWB**, règles **IATA** et **DGR** pour les MD`;

const DEMO_608_OBJECTIFS_SUMMARY = `## Objectifs
- Importance & aéroports
- ULD · belly freight
- AWB · DGR`;

/** Glossaire Module 608 */
const DEMO_608_GLOSSAIRE_FULL = `## Glossaire — Module 608

| Terme technique | Lien | Définition |
| --- | --- | --- |
| **Marchés mondial** | §8.1 | Accès du commerce suisse aux **marchés internationaux** via fret aérien · ~**50 %** de la **valeur** des exportations CH (2019) malgré faible part en **tonnage**. |
| **Vols de rapatriement** | §8.1 | Vols spéciaux pour **rapatrier** passagers ou marchandises (ex. crise COVID) · complément du fret commercial urgent. |
| **Airwaybill (AWB)** | §8.8.4 | *Lettre de transport aérien* · contrat expéditeur ↔ compagnie · **non négociable** · base douane, assurance et facturation fret. |
| **Bill of Lading (B/L)** | §8.8.4 | *Connaissement maritime* · titre de propriété **négociable** (contraire de l'AWB) · preuve de réception marchandises en transport **maritime**. |
| **Épizootie** | §8.6 | Maladie animale contagieuse · contrôlée par le **vétérinaire de frontière** à l'import/export (hygiène, espèces protégées). |
| **Aéroport binational** | §8.4.3 | **EuroAirport Bâle-Mulhouse** · seul aéroport binational CH/FR · région tri-nationale · pharma · accès autoroutes CH/FR/DE. |`;

const DEMO_608_GLOSSAIRE_SUMMARY = `## Glossaire — À retenir
- Fret aérien = **valeur** ↑ · tonnage ↓ vs maritime
- **AWB** non négociable · **B/L** maritime négociable
- **ULD** / **BUP** · **belly freight**
- ZRH ~70 % fret CH · EuroAirport **binational**`;

/** Mises en situation Module 608 */
const DEMO_608_SITUATION_FULL = `## Mises en situation — Module 608

**EnterSite AG** : import/export, produits fret aérien, emballage, belly freight Swiss → New York.

### Vue d'ensemble des missions
1. Import/Export — statistiques fret aérien CH
2. Produits de fret aérien (quotidien)
3. Carte mentale emballage fret aérien
4. Belly Freight Swiss → NYC (JFK) + CO₂
5. Discussion STA

---

## Mission 1.1 — Statistiques fret aérien suisse (2019)

:::reponse
**Tonnage** — part du fret aérien très **faible** vs fret **maritime**.

**Valeur** — à l'**export** : fret aérien ≈ **77 %** de la valeur · à l'**import** : aérien et maritime s'équilibrent (~50 % chacun).

**Volume par aéroport** — **Zurich** leader avec **~70,8 %** du fret aérien CH · **Bâle** et **Genève** se partagent le reste (~30 %).
:::

---

## Mission 1.2 — Importation et exportation

:::reponse
**Importation** — achat de biens/services à l'**étranger** et entrée dans son propre pays · matières premières, produits finis, machines, technologies, services.

**Exportation** — vente de biens/services sur des **marchés étrangers** · génère revenus, emplois et croissance économique.
:::

---

## Mission 2 — Produits transportés par avion

:::reponse
Marchandises adaptées au fret aérien :
- Animaux vivants · fleurs · fruits exotiques · journaux · films
- Mode et articles **saisonniers**
- Pièces de rechange **urgentes**
- Médicaments et produits médicaux
- Envois à **terme** · courrier aérien
- Haute **valeur** · sensibles · volables
- Biens de **secours** (catastrophes)
- Documents · organes humains · dépouilles mortelles
:::

---

## Mission 3 — Emballage fret aérien (carte mentale)

:::reponse
**Points clés emballage** — protection chocs/vibrations (décollage/atterrissage ~1 g) · étanchéité · identification · conformité **IATA** / **DGR** si MD · film + filet en ULD.

**Moyens auxiliaires**
- **BUP** (*Bulk Unitization Program*)
- **ULD** (*Unit Load Devices*)
- Plate-forme de levage
- Chariot de transport
- Tracteur de conteneur
:::

---

## Mission 4 — Belly Freight vers New York

:::reponse
Recherche **Swiss World Cargo** — vol passager le plus proche vers **New York**.

**Code IATA New York (JFK)** : **JFK**

**Réponse individuelle** — numéro de vol · horaire · réservation belly freight.
:::

### Mission 4.1 — Empreinte CO₂ ZRH ↔ NYC

:::reponse
**Réponse individuelle** — calcul CO₂ passager ZRH–NYC A/R (calculateur en ligne) · comparaison avec **4,31 t CO₂/an** (moyenne Suisse 2019).

**Mesures d'économie** — appareils basse consommation · énergies renouvelables · transports publics/vélo · réduction viande · projets environnementaux · efforts **politiques globaux** indispensables en complément.
:::

---

## Mission 5 — Discussion STA

:::reponse
**Réponse ouverte** — notes de discussion en plénière.
:::`;

const DEMO_608_SITUATION_SUMMARY = `## Mises en situation — À retenir
- **M1** : tonnage ↓ vs mer · valeur 77 % export · ZRH 70 %
- **M2** : urgent · périssable · haute valeur · médical
- **M3** : ULD · BUP · plate-forme · tracteur
- **M4** : belly freight · **JFK** · CO₂ ~46 % annuel Suisse
- **M5** : discussion STA`;

/** Exercices de maths Module 608 */
const DEMO_608_MATHS_FULL = `## Exercices de mathématiques — Module 608

Calcule chaque résultat, puis vérifie avec le bouton solution.

### Exercice 1 — CO₂ vol vs consommation annuelle

Vol ZRH ↔ NYC : **2 t CO₂** · moyenne Suisse 2019 : **4,31 t CO₂/habitant**.

:::solution
**46,4 %** de la consommation annuelle moyenne

\`\`\`
2 / 4,31 × 100 = 46,4 %
\`\`\`
:::

### Exercice 2 — Swiss World Cargo à Zurich

**1'200 t/jour** à ZRH · part Swiss World Cargo **65 %**.

:::solution
**780 tonnes/jour**

\`\`\`
1'200 × 65 / 100 = 780 t
\`\`\`
:::

### Exercice 3 — Durée totale du voyage ZRH → Brisbane

Vol **23 h 05** · escale Dubaï **3 h 50** · arrivée ZRH **45 min** · enregistrement **3 h** · douane Brisbane **55 min**.

:::solution
**31 h 35 min** (1'895 min)

\`\`\`
(23×60+5) + (3×60+50) + 45 + (3×60) + 55 = 1'895 min
1'895 / 60 = 31 h 35 min
\`\`\`
:::

### Exercice 4 — Avion vs bateau (carte mère Chine)

Fret aérien **CHF 175** · maritime **CHF 12,50** (3 mois).

:::solution
L'avion est **14 fois** plus cher que le bateau

\`\`\`
175 / 12,5 = 14
\`\`\`
:::

> **Contrôle rapide (ordre du corrigé)** : 31 h 35 min · 46,4 · 14 · 780`;

const DEMO_608_MATHS_SUMMARY = `## Maths — Solutions
1. Vol NYC = **46,4 %** consommation annuelle CO₂
2. Swiss World Cargo : **780 t**/jour
3. Voyage total : **31 h 35 min**
4. Avion **14×** plus cher que bateau`;

/** Vérification des acquis Module 608 */
const DEMO_608_VERIFICATION_FULL = `## Vérification des acquis — Questions de contrôle

Thème : **Module 608 — Le transport aérien**. Réponds d'abord sans regarder les solutions, puis révèle-les pour t'autocorriger.

### Question 1

Un **avantage** du transport aérien ?

:::reponse
Utilisable à l'**échelle mondiale** et très **rapide**.
:::

### Question 2

Un **inconvénient** du transport aérien ?

:::reponse
**Nuisible pour le climat** · **coûteux**.
:::

### Question 3

Marchandises particulièrement adaptées au **fret aérien** ?

:::reponse
Animaux vivants · fleurs · fruits exotiques · journaux · films · mode/saisonnier · pièces urgentes · médicaments · envois à terme · courrier aérien · haute valeur/sensibles/volables · secours catastrophe · documents · organes humains · dépouilles mortelles.
:::

### Question 4

Les **trois aéroports nationaux** en Suisse ?

:::reponse
**Zurich** · **Bâle** (EuroAirport) · **Genève**.
:::

### Question 5

Qu'est-ce que l'**ULD** ?

:::reponse
*Unit Load Devices* — conteneurs/plaques de fret aérien pour bagages, fret et courrier.

Réduisent le nombre d'unités à charger · économisent personnel au sol, **temps** et efforts pour les entreprises de manutention.
:::`;

const DEMO_608_VERIFICATION_SUMMARY = `## Questions de contrôle — Solutions
1. Mondial + rapide
2. Climat + coût
3. Urgent · périssable · haute valeur · médical…
4. **Zurich · Bâle · Genève**
5. **ULD** = conteneurs fret · gain temps/personnel`;

/** Contenu Module 609 — Navigation */
const DEMO_609_THEORIE_FULL = `## 9. Navigation

Pratique depuis > **8000 ans** · pierre angulaire de la **mondialisation**. Villes au bord de l'eau = commerce. Aujourd'hui : encore décisif · relativement **lent** (Hong Kong–Hambourg ≈ 25–30 jours) · mais beaucoup de poids · **faible coût** · peu d'énergie.

👉 Grandes quantités · moindres coûts · mondial.

**Ex.** Citerne Rhin **2800 t** · Rotterdam–Bâle–Rotterdam ≈ **6×24 h** (avec chargement) ≈ 35 wagons-citernes ou **147** camions · ~**1,1 ct**/litre pétrole Rotterdam→Bâle.

### 9.1 Principales voies

#### 9.1.1 Suisse
Voies intérieures peu importantes (sauf sable/gravier sur lacs). Seul le **Rhin** pour bateaux de marchandises.

**Rhin — porte sur le monde**  
~1239 km · voie intérieure n°1 Europe · **10–12 %** imports CH · **1/4–1/3** imports huiles minérales. Convention de **Mannheim** (1868) : accès libre · eaux internationales jusqu'au Mittlere Brücke (Bâle). Capacité bateaux ~**300–3000 t**. Dépend du **niveau d'eau** (crues / étiage = limitations).

#### 9.1.2 Océans
Milliers de miles nautiques · semaines/mois. Cap Horn → Rotterdam > **12 000 km** ≈ **6500 NM**.  
**1 mile nautique (NM) = 1,852 km**.

#### 9.1.3 Voies artificielles
Nerf de la guerre · interruptions = embouteillages / pertes (ex. **Ever Given**, Suez, mars 2021 · 6 jours).

| Canal | Ordre de grandeur |
| --- | --- |
| **Suez** | ~19 000 bateaux/an · ~1200 Mt fret |
| **Panama** | ~13 000 · ~255 Mt |
| **Kiel** | ~28 000 · ~84 Mt |

Climat : **passage du Nord-Est** raccourcit Shanghai–Rotterdam ≈ **3800 km** (2100 NM) · étés sans brise-glace parfois possibles.

👉 Économie mondiale tributaire d'itinéraires qui fonctionnent.

### 9.2 Principaux ports

#### 9.2.1 Ports du Rhin (Bâle)
Transbordement · stockage temporaire · dédouanement · livraison · transformation · réservoirs / silos · prestataires logistiques.

#### 9.2.2 Grands ports mondiaux
Dominés par la **Chine** (usine du monde). **Shanghai** > **40 M** conteneurs · **Rotterdam** (1er Europe) ≈ **14 M**.

**TEU** (*Twenty-foot Equivalent Unit*) : 20' = **1 TEU** · 40' = **2 TEU**.

### 9.3 Transbordement

#### 9.3.1 Moyens
Grues / **portiques** · chariots télescopiques / contrepoids lourds (jusqu'à ~**50 t**) · **Container-Carrier** (cavalier).

#### 9.3.2 Spreader
Dispositif télescopique accroché aux **4 coins** du conteneur.

#### 9.3.3 Arrimage à bord
Chargement **LIFO**. Cale : glissières. Pont : *bridge fittings*, **twistlocks**, barres d'arrimage…

### 9.4 Forces dynamiques

Vagues · Beaufort 10–11 · vagues ~15 m → tangage / roulis. Forces **simultanées**, intenses, multidirectionnelles (tangage, roulis, immersion, glissement, oscillations…). Ne jamais supposer mer calme · arrimage terrestre ≠ toujours suffisant en mer.

### 9.5 Charger correctement

Palettes **peu** utilisées (espace > travail) · EUR type 1 **inadaptée** au conteneur. Retenues murales · **blocage sans espace** · coussins d'air pour vides.

👉 Bon arrimage dans le conteneur = éviter les dommages.`;

const DEMO_609_THEORIE_SUMMARY = `## À retenir — Module 609

### Navigation
Lent · cheap · grandes quantités · Rhin vital pour CH

### Voies
Mannheim · Suez / Panama / Kiel · Nord-Est arctique

### Ports & technique
Bâle · Shanghai / TEU · portiques · spreader · LIFO  
Forces vagues · blocage dans conteneur`;

const DEMO_609_APERCU_FULL = `## Aperçu du module 609

Ce module traite de la **navigation** : voies (Rhin, océans, canaux), ports, transbordement et arrimage.

### Vous allez découvrir
1. Atouts du transport fluvial / maritime
2. Rhin, canaux artificiels et TEU
3. Moyens de manutention et arrimage à bord
4. Forces dynamiques et chargement conteneur

### Source
EnterSite — Logistics by ASFL / SVBL · Suite du module 608`;

const DEMO_609_APERCU_SUMMARY = `## Aperçu — Module 609
- Rhin · canaux · ports
- TEU · spreader · LIFO
- Forces & arrimage`;

const DEMO_609_OBJECTIFS_FULL = `## Objectifs du module 609

À l'issue de ce module, l'apprenti·e est capable de :

- Expliquer le rôle de la **navigation** (coût, capacité, lenteur) et du **Rhin** pour la Suisse
- Situer les grandes **voies** (océans, Suez/Panama/Kiel) et la notion de **TEU**
- Décrire le **transbordement** (portiques, spreader, LIFO, arrimage)
- Relier les **forces** maritimes au chargement correct des conteneurs`;

const DEMO_609_OBJECTIFS_SUMMARY = `## Objectifs
- Rhin & voies mondiales
- Ports · TEU · manutention
- Forces & arrimage`;

/** Contenu Module 610 — Le transport combiné */
const DEMO_610_THEORIE_FULL = `## 10. Le transport combiné

Plusieurs modes de transport interagissent. Véhicules, semi-remorques, caisses mobiles ou **conteneurs** passent d'un mode à l'autre sans grand effort via des **interfaces** :

- Gares de marchandises (rail/route)
- Terminaux à conteneurs (rail/route)
- Centres de tri courrier/colis (rail/route)
- Installations portuaires (eau/rail/route)
- Aéroports (air/route/rail)

Aux interfaces : **entrepôts de transbordement** (module **402**) — reconditionnement, tri, stock temporaire, contrôles, dédouanement.

👉 Combiner = profiter des atouts de chaque mode · contourner les inconvénients · viser la combinaison **optimale**.  
**Ex.** Zurich Aéroport : air + route + rail.

### 10.1 Chaussée roulante (ROLA)

**Ferroutage accompagné** : camion sur wagon à plancher bas · chauffeur dans voiture-couchette · reprend le véhicule à destination. Dès **1968** en CH · **Hupac** · ~100 trains/jour · (ex. 2011 : 724 000 envois routiers).

#### 10.1.1 Ferroutage non accompagné
Tracteur laisse la **semi-remorque** au terminal · remorque voyage seule · reprise par un tracteur à destination (chauffeur + tracteur nécessaires).

### 10.2 Conteneurs ISO

Dimensions normalisées → multi-modes sans déchargement intermédiaire · sécurité (fermeture / scellés). Origine US **1956** · mesures en **pieds** (1 pied = **30,48 cm**). Courants : **20'** et **40'** (grands / maritimes).

| | 20' | 40' |
| --- | --- | --- |
| L ext. | 6,058 m | 12,192 m |
| l / H ext. | 2,438 / 2,591 m | idem |
| Volume | ~33,2 m³ | ~67,7 m³ |
| Vide / utile / total | 2250 / 21 750 / **24 000** kg | 3780 / 26 700 / **30 480** kg |

Types : fermé (le plus fréquent · étanche pour pont navire) · porte frontale / latérale · frigo · parois amovibles · **High-Cube** · toit ouvert · citerne…

👉 Incontournables dans un monde globalisé.

### 10.3 Autres systèmes d'échange

#### 10.3.1 ACTS
*Abroll-Container-Transport-Service* (1988) · conteneur avec **roulettes** + **crochet** · dépôt au sol / bascule par camion spécial · papier, gravats, déchets… Sur rail : châssis **pivotant** sur wagon → pivot + verrouillage · à destination pivot externe → tirage sur camion.

#### 10.3.2 Caisses / conteneurs interchangeables
Normalisés comme ISO · reposent sur **supports rabattables**. Camion sous la caisse · suspensions pneumatiques · béquilles rabattues · grue pour mise sur wagon.

#### 10.3.3 Cargo Domino
Rail/route · caisses adaptées camion + wagon · profilé transversal · **pas de rotation** · camion à côté · poussée **perpendiculaire** sur le wagon.

#### 10.3.4 Combinaison route–rail
Nuit : rail vers centres régionaux · jour : distribution camion · soir : recollecte palettes → wagons.

#### 10.3.5 Cargo Sous Terrain (CST)
Tunnels souterrains · désengorger les routes · ~**30 km/h** constant · 1er tronçon Härkingen–Niederbipp → Zurich prévu **2031**.`;

const DEMO_610_THEORIE_SUMMARY = `## À retenir — Module 610

### Combiné
Interfaces · profiter des atouts de chaque mode

### ROLA
Accompagné (chauffeur couchette) · non accompagné (semi seule)

### ISO
20'/40' · scellés · types variés · ACTS · caisses · Domino · CST`;

const DEMO_610_APERCU_FULL = `## Aperçu du module 610

Ce module présente le **transport combiné** : interfaces, ROLA, conteneurs ISO et systèmes d'échange (ACTS, Domino, CST).

### Vous allez découvrir
1. Interfaces et logique multi-modes
2. Chaussée roulante accompagnée / non accompagnée
3. Conteneurs ISO (dimensions, types)
4. ACTS, caisses mobiles, Domino, route–rail, Cargo Sous Terrain

### Source
EnterSite — Logistics by ASFL / SVBL · Suite des modules 606–609`;

const DEMO_610_APERCU_SUMMARY = `## Aperçu — Module 610
- Interfaces · ROLA
- Conteneurs ISO
- ACTS · Domino · CST`;

const DEMO_610_OBJECTIFS_FULL = `## Objectifs du module 610

À l'issue de ce module, l'apprenti·e est capable de :

- Expliquer le **transport combiné** et le rôle des **interfaces**
- Distinguer ferroutage **accompagné** (ROLA) et **non accompagné**
- Décrire les conteneurs **ISO** (20'/40', types) et leur intérêt
- Comparer **ACTS**, caisses mobiles, **Cargo Domino** et situer **CST**`;

const DEMO_610_OBJECTIFS_SUMMARY = `## Objectifs
- Combiné & interfaces
- ROLA · ISO
- ACTS · Domino · CST`;

/** Contenu Module 611 — La préparation de commandes (approfondissement) */
const DEMO_611_THEORIE_FULL = `## 11. La préparation de commandes (approfondissement)

### 11.1 Principes
Regrouper des marchandises selon des **ordres** (internes / clients). Souvent sous-estimée · erreurs ou retards → impact direct production / clients.

### 11.2 Termes
**Préparateur** · **commissionnement** (= préparation) · **liste de prélèvement** (n° article, désignation, emplacement, qté… · papier ou système).

#### 11.2.1–11.2.4 Erreurs
Fréquentes : mauvaise **quantité** · mauvaise **marchandise** · mauvaise **unité** (pièce vs carton).

**Causes personnelles :** motivation · concentration · responsabilité · valeurs · connaissances.  
**Causes organisationnelles :** ordres confus · stock mal étiqueté · formation · pannes MDE.

**Conséquences :** retours, express, coûts ↑ · perte d'**image** / clients.

**Prévention :** ambiance · formation · contrôles (double, poids…) · procédures **sans document**.

### 11.3 Système de préparation

Trois sous-systèmes en interaction (ex. commande Karl König / toners EnterSite) :

| Sous-système | Rôle |
| --- | --- |
| **Informations** | Saisie → préparation → transmission → quittance |
| **Flux matériel** | Mise à dispo · déplacement · prélèvement · transfert (+ contrôle) |
| **Organisation** | Zones · 1/multi commandes · série/parallèle · parcours |

#### 11.3.1 Flux d'informations
1. **Saisie** — web, écrit, téléphone · réservation stock  
2. **Préparation** — batch ou **real-time** (+ infos emballage, dangers…) → module **601**  
3. **Transmission**  
   - **Hors ligne** : listes · flexible · plus d'erreurs / travail  
   - **En ligne** : rendement ↑ · erreurs ↓ · contrôles auto · coût / panne IT  
   - Pick-by-Scan / Voice / Light / Vision (**601**) · **Pick-by-RFID** (sans contact, radio)  
4. **Quittance** — humaine (coche, scan, voix) ou **automatique** · déclenche souvent la compta sans document

#### 11.3.2 Flux de matériel
1. **Préparation** — **statique** (homme→marchandise · investissement ↓ · trajets ↑) vs **dynamique** (marchandise→homme · rendement ↑ · investissement ↑ · moins flexible express)  
2. **Déplacement** — **1D** horizontal / **multi** (hauteur, meilleure occupation)  
3. **Prélèvement** — manuel (± engins) · auto (trieurs/robots · volumes homogènes)  
4. **Transfert** — centralisé vs décentralisé · **Pick-and-Pack** si préemballé / normalisé / simple  
5. **Contrôle** — quand (après prélèvement / avant-après emballage) · qui · total vs échantillon · scan / RFID / poids

#### 11.3.3 Organisation
- **1 secteur** ou **plusieurs** zones (puis regroupement)  
- **1 étape / commande** vs **multi-étapes / multi-commandes** (ordre collectif → répartition)  
- Transmission **par ordre** (1 étape · responsabilités claires · pas d'opti trajets) vs **par article** (2 étapes · longs trajets / articles communs)  
- **Série** (l'un après l'autre · lentes si grosses commandes) vs **parallèle** (simultané · temps ↓)

#### 11.3.4 Parcours
**Par allée** (A en tête) · **série** (toutes allées) · **MOP** (*Multi Order Picking* : plusieurs petites commandes / tour · 1 conteneur / commande).

### 11.4 Trieurs
Répartissent vers destinations via code lu au début.

| Type | Principe | Adapté à |
| --- | --- | --- |
| **Plateau inclinable** (*Tilt Tray*) | Bac bascule → goulotte | Large spectre (ex. bagages) |
| **Sabots** (*Sliding*) | Patins poussent sur plaques | Fonds lisses (cartons, blisters…) |
| **Roulettes pivotantes** (*pop-up*) | Rouleaux relevés / inclinés | Sols rigides lisses · ≠ sachets |
| **Bandes transversales** | Bandes perpendiculaires | Plus soigneux que bascule |
| **Trappes / Split-Tray** | Fond s'ouvre vers le bas | Légers, souples (textiles, lettres) |

### 11.5 Optimiser (5 temps partiels)

| Temps | Contenu | Leviers (ex.) |
| --- | --- | --- |
| **Organisation** | Avant/après (docs, moyens, transfert) | Docs clairs · auxiliaires proches · Pick-and-Pack · sortie décentralisée |
| **Déplacement** | Entre 2 prélèvements | Connaissance entrepôt · ordre système · ABC · regroupement · dynamique · engins |
| **Prélèvement** | Saisir / déposer | Profondeur ↓ · hauteur idéale · ergonomie · unités saisissables |
| **Mort** (secondaire) | Lire, compter, contrôler, réappro… | Lisibilité · balance · unités entières · Voice |
| **Perdu** | Personnel (pauses, bavardage) / matériel (attentes) | Ambiance · orga · motivation · flex pauses · primes |

Somme des temps partiels = **100 %** du temps picking.

### 11.6 Critères & ratios

Facteurs **statiques** (structure, ABC, stock…) et **dynamiques** (flux/jour, commandes, poids…). Structure commande / articles → indicateurs (positions/commande, rotation, dimensions…).

**Formules utiles :**
- Capacité (pos./h) = **3600 / temps prélèvement (s/pos.)**  
  Ex. 85 s → **42,35** pos./h
- Coût / pos. = coûts d'exploitation/h ÷ capacité/h → ex. 85 / 42,35 ≈ **2 CHF**
- Coût / commande = total coûts picking ÷ nb commandes  
- Positions moy. / commande = total positions ÷ nb commandes  
- Taux d'erreur (%) = erreurs ÷ prélèvements × 100

**Ex. effectif :** 1400 pos./j · 14 s prélèvement = 15 % du temps total → temps total/pos. ≈ 93,3 s → **36,3 h**/j → ≈ **5** préparateurs (8 h).  
**Ex. capacité :** 15 s = 15 % → 100 s/pos. · 8 h = 28 800 s → **288** pos./jour.

### 11.7 Conception d'entrepôts (exemples types)

| Config | Idée clé | + / − typiques |
| --- | --- | --- |
| 1 | Picking bas + réserve au-dessus · dynamique petits · 1D | Flexible · personnel / surface / ergo − |
| 2 | 2 palettes / préparateur · réappro **auto** transstockeur | Personnel ↓ · pas d'attente · investissement ↑ |
| 3 | Dynamique · grands assortiments petits · FIFO · zones | Trajets courts · réappro manuel · investissement |
| 4 | **2D** grande levée · palettes ou pièces · pas de réappro | Volume ↑ · sols / haut peu adaptés au picking |

👉 Adapter volume, nb d'articles, rotation, etc.`;

const DEMO_611_THEORIE_SUMMARY = `## À retenir — Module 611

### Erreurs
Qté / article / unité · causes perso + orga · coûts & image

### 3 systèmes
Info (saisie→quittance) · matériel (statique/dynamique) · orga (zones, série/parallèle, MOP)

### Trieurs & temps
Tilt / sabots / pop-up / bandes / trappes  
5 temps : orga · déplacement · prélèvement · mort · perdu

### Ratios
3600/t · coût/pos. · taux d'erreur · conception selon flux`;

const DEMO_611_APERCU_FULL = `## Aperçu du module 611

Approfondissement du **picking** (suite **601**) : erreurs, trois sous-systèmes, trieurs, optimisation des temps et ratios.

### Vous allez découvrir
1. Erreurs, causes, conséquences et prévention
2. Systèmes d'information, de matériel et d'organisation
3. Types de trieurs et 5 temps partiels
4. Ratios de performance et conceptions d'entrepôt

### Source
EnterSite — Logistics by ASFL / SVBL · Suite du module 601 / 610`;

const DEMO_611_APERCU_SUMMARY = `## Aperçu — Module 611
- Erreurs & 3 systèmes
- Trieurs · 5 temps
- Ratios · conception`;

const DEMO_611_OBJECTIFS_FULL = `## Objectifs du module 611

À l'issue de ce module, l'apprenti·e est capable de :

- Analyser les **erreurs** de picking (causes, conséquences, prévention)
- Décrire les trois **sous-systèmes** (info, matériel, organisation) et options (série/parallèle, MOP…)
- Différencier les principaux **trieurs** et les **5 temps** partiels
- Calculer des **ratios** de performance et relier conception d'entrepôt aux besoins`;

const DEMO_611_OBJECTIFS_SUMMARY = `## Objectifs
- Erreurs & systèmes
- Trieurs · temps
- Ratios · conception`;

/** Contenu Module 612 — La planification des transports */
const DEMO_612_THEORIE_FULL = `## 12. La planification des transports

### 12.1 En mutation

Objectif : livrer de façon **économique**, **rapide** et **sûre**. Contraintes : écologie · délais clients · pénurie de chauffeurs · pression coûts / énergie (transport parfois > **30 %** des coûts logistiques) · sécurité · lois.  
~**5000** entreprises de transport en CH · majorité des prestations par la **route**.

### 12.2 Principe d'une tournée

Distribution de détail → **plan de tournée** selon lieux de déchargement · métier des **disponents**.

#### 12.2.1 LIFO
Dernier chargé = premier déchargé. Ex. : Estavayer 1er stop → chargé **en dernier** · Genève dernier stop → chargé **en premier**.

Efficacité aussi : itinéraire / restrictions · véhicules · priorités clients · engins de déchargement · temps de travail/repos chauffeurs.

#### 12.2.2 Organisation (disposition)
*Dispositio* = ordre / affectation. Décisions → ordres de transport.  
**Télématique** : localisation, suivi · données : position · ETA · trafic · avancement · temps de conduite restant · pauses · clôture tâche client.

#### 12.2.3 Cadre légal (aperçu)
| Abrév. | Domaine |
| --- | --- |
| **LTr** | Travail, pauses, repos |
| **LCR** | Circulation routière |
| **OSR** | Signalisation |
| **RPLP** | Redevance PL (module **606**) |
| **OTR** | Durée travail / repos chauffeurs |
| **ADR/SDR** | Marchandises dangereuses |

#### 12.2.4 Planification des tournées
Données obligatoires : expéditeur / destinataire (adresse, date/heure, particularités) · envoi (type, pièces, dimensions, poids, MD, froid, valeur/assurance).

Facteurs : **géographie** (relief, météo, cols, interdictions Gothard/San Bernardino…) · **écologie** (km ↓, conso ↓) · **rentabilité** (véhicule, itinéraires directs, RPLP, coûts vs revenus).

Étapes : collecter/trier ordres · véhicule optimal · contraintes · chauffeur adapté · enregistrer h/km · améliorer.

### 12.3 Make or Buy (distribution)

Lien module **301**. Opérationnelle (coûts court terme) vs **stratégique** (long terme + critères subjectifs · analyse valeur / pondération).

#### 12.3.1 Critères
**Coûts** · **risques** (fiabilité, dépendance prestataires) · **qualité** (transparence interne) · **image** · **liquidités** (investissements flotte) · **ressources** (chauffeurs, véhicules).

#### 12.3.2 Scoring
Critères pondérés (ex. coûts **40 %**) · variantes notées · somme 100 %. Ex. : flotte interne gagne → conserver / développer.

#### 12.3.3 Scoring +/−
**+** quantitatif + qualitatif · multi-critères · multi-départements · transparent.  
**−** pondération subjective · effort ↑.

### 12.4 Denrées périssables

Bases : LDA · **ODAlOUs** · ordonnances. **Devoir d'annonce** (art. 20) si activité alimentaire.

#### 12.4.1 Contenants
Uniquement contenants alimentaires · symbole **verre-fourchette** (UE) = contact alimentaire sûr.

#### 12.4.2 Chaîne du froid
Réfrigération < **+5 °C** · congélation < **−18 °C**. Ininterrompue prod. → conso.

Indicatifs : beurre +10 · viande / lait +6 · haché/poisson +2 · surgelés −18 · glaces −20. Étiquettes obligatoires.

#### 12.4.3 HACCP
*Hazard Analysis Critical Control Points* · origines spatiales (1959) · hygiène UE depuis 2006.

**7 principes :** identifier dangers · CCP · valeurs limites · surveillance · mesures correctives · vérification système · **documentation**.

#### 12.4.4 Surveillance T°
Enregistreurs / numérique · pré-refroidir/réchauffer si besoin · panne → informer disponent immédiatement · rupture = risque non-commercialisation.

### 12.5 Répartition & arrimage

Rappel module **606** : accélération · décélération · centrifuge · verticales.  
Légal : ≥**20 %** essieu directeur · ≥**25 %** tracteur · max essieux / poids total.  
Responsabilité finale : **chauffeur** (même si tiers a chargé). Brochure ASTAG « Charger correctement, arrimer correctement ».

Unités : cadre + couvercle + cerclage · cylindriques (plat / cales) · panneaux (cerclage L+T si glissant) · support adapté longueur.

### 12.6 Regroupage & Cross-Docking

**Regroupage :** remplir unités à moitié vides pour ↓ km / carburant.

**Cross-Docking** (module **604**) :
| Variante | Idée |
| --- | --- |
| **1 étape** | Fournisseur prépare déjà pour le client · réception → expédition |
| **2 étapes** | Regroupement en nouvelles unités au hub |
| **Multi-niveaux** | + montage, remplissage, conditionnement, découpe, étiquetage… · éventuellement + stock |

**+** stock ↓ · étapes ↓ · CO₂ ↓. Judicieux : grandes qté stables · périssables · actions · haute valeur / délais courts.`;

const DEMO_612_THEORIE_SUMMARY = `## À retenir — Module 612

### Tournées
LIFO · disposition · télématique · LTr/LCR/OTR/RPLP/ADR

### Make or Buy
Scoring pondéré · coûts, risques, qualité, image…

### Froid & HACCP
Annonce · verre-fourchette · chaîne froide · 7 principes

### Charge & CD
Essieux 20/25 % · chauffeur responsable  
Regroupage · Cross-Docking 1/2/multi`;

const DEMO_612_APERCU_FULL = `## Aperçu du module 612

Ce module traite de la **planification des transports** : tournées, disposition, Make or Buy, denrées périssables et cross-docking.

### Vous allez découvrir
1. Planification de tournées et LIFO
2. Cadre légal et télématique
3. Make or Buy / scoring
4. Chaîne du froid, HACCP, arrimage et Cross-Docking

### Source
EnterSite — Logistics by ASFL / SVBL · Suite des modules 606 / 611`;

const DEMO_612_APERCU_SUMMARY = `## Aperçu — Module 612
- Tournées · LIFO · disposition
- Make or Buy · froid / HACCP
- Arrimage · Cross-Docking`;

const DEMO_612_OBJECTIFS_FULL = `## Objectifs du module 612

À l'issue de ce module, l'apprenti·e est capable de :

- Expliquer la **planification de tournées** (LIFO, disposition, cadre légal)
- Mener une réflexion **Make or Buy** / scoring en distribution
- Appliquer les bases **denrées / chaîne du froid** et les **7 principes HACCP**
- Relier **répartition/arrimage**, regroupage et variantes de **Cross-Docking**`;

const DEMO_612_OBJECTIFS_SUMMARY = `## Objectifs
- Tournées & disposition
- Make or Buy · HACCP
- Arrimage · Cross-Docking`;

/** Contenu Module 613 — CPD — Qualité de service dans la distribution */
const DEMO_613_THEORIE_FULL = `## 13. Qualité du service dans les entreprises de distribution

### 13.1–13.2 Principes & notions

**Qualité de service** = mesure dans laquelle l'entreprise répond (idéalement dépasse) les attentes clients — pas seulement « livré à l'heure », mais aussi **comment** (amabilité, état du colis…).

| Notion | Sens |
| --- | --- |
| **Orientation service** | Produits/services systématiquement alignés sur besoins clients |
| **Qualité de service** | Écart attentes ↔ prestation perçue |
| **Image** | Réputation née d'expériences, opinions, communication |

### 13.3–13.6 Exemple « stand kebab » & 6B

Attentes typiques : amabilité · attente courte · hygiène · produit chaud/frais · prix équitable…

**Règle des 6B** (rappel Jünemann) appliquée au service :
bonne **marchandise** · **qualité** · **moment** · **endroit** · **quantité** · **prix**.

**Mauvaise qualité →** perte clients · ↓ recettes · licenciements · insolvabilité. Bouche-à-oreille : insatisfait ≈ **10–15** personnes informées.  
**Bonne qualité →** fidélisation · nouveaux clients · image ↑ · CA ↑ · emplois.

### 13.7 Ton influence
En tenue / véhicule d'entreprise = **ambassadeur**. Comportement = image. Livrer selon les 6B renforce l'entreprise et l'emploi.

---

### 13.8–13.12 Marché postal & cadre légal

| Terme | Sens |
| --- | --- |
| **CEC** | Coursier · Express · Colis |
| **Courrier** | Lettres |
| **Service public / universel** | Prestations importantes partout en CH · même prix / qualité |
| **Loi sur la poste** | Mandat Confédération |
| **Monopole** | Seule l'entreprise peut offrir la presta |

**Poste** = SA de droit public · **100 %** Confédération.

| Catégorie | Contenu |
| --- | --- |
| **Réservé** | Lettres intérieures ≤ **50 g** · monopole · amende jusqu'à **100 000 CHF** si concurrent |
| **Non réservé** | Poste **doit** · concurrents **peuvent** (grandes lettres, colis…) |
| **Service libre** | Poste **peut** · pas d'obligation · concurrence (coursier, cars postaux, adressage…) · **ne pas** financer par recettes du service universel |

Autres services publics : CFF, Swisscom, SRF…

---

### 13.13–13.16 Coûts & marge

| Notion | Sens |
| --- | --- |
| **Coûts de distribution** | Fabricant → client final |
| **Marge** | Prix de vente − prix d'achat (≠ bénéfice net : encore personnel, transport, emballage…) |
| **Flux monétaire** | Où l'argent entre / sort |

Défis : livrer **vite** et **pas cher**. Marges distribution **faibles** → analyser / optimiser coûts.

Ex. livraison repas : personnel (nuit/fériés) · véhicule · emballage / smartphone · systèmes / remboursements.

### 13.17–13.19 LPMVM

Facteurs de coûts tout au long du process :

| Lettre | Contenu |
| --- | --- |
| **L**oyer | Bâtiments, entretien, énergie |
| **P**ersonnes | Salaires, assurances, tenues, formation |
| **M**achines | Tri, codeurs, convoyeurs, exosquelettes… |
| **V**éhicules | Achat, énergie, entretien |
| **M**atériel | Scanners, rollbox, emballage, boîtes aux lettres… |

Coûts différents selon dépôt **desservi** (filiale) vs **non desservi** (automate).

### 13.20 Trois flux
**Marchandises** · **informations** · **argent** — toujours ensemble. Flux monétaire + = recettes > dépenses.`;

const DEMO_613_THEORIE_SUMMARY = `## À retenir — Module 613

### Qualité
Orientation service · image · 6B · ambassadeur  
Mauvaise qualité = bouche-à-oreille ×10–15

### Postal
Poste = Confédération · réservé ≤50 g · non réservé · libre

### Coûts
Marge faible · **LPMVM** · flux marchandises / info / argent`;

const DEMO_613_APERCU_FULL = `## Aperçu du module 613

Module **CPD** : qualité de service en distribution, cadre postal et coûts (LPMVM).

### Vous allez découvrir
1. Qualité, orientation service, image et 6B
2. Effets d'une bonne / mauvaise qualité · rôle du collaborateur
3. Service universel, réservé / non réservé / libre
4. Marges, défis coût/délai et grille **LPMVM**

### Source
EnterSite — Logistics by ASFL / SVBL · CPD Distribution`;

const DEMO_613_APERCU_SUMMARY = `## Aperçu — Module 613
- Qualité & 6B
- Service public postal
- LPMVM · marges`;

const DEMO_613_OBJECTIFS_FULL = `## Objectifs du module 613

À l'issue de ce module, l'apprenti·e est capable de :

- Définir qualité de service, orientation service et **image**, et appliquer les **6B**
- Expliquer les effets d'une bonne / mauvaise qualité et son rôle d'**ambassadeur**
- Distinguer service **réservé**, **non réservé** et **libre** (loi sur la poste)
- Analyser les **coûts de distribution** via **LPMVM** et la notion de **marge**`;

const DEMO_613_OBJECTIFS_SUMMARY = `## Objectifs
- Qualité · 6B · image
- Cadre postal
- LPMVM · marges`;

/** Contenu Module 614 — CPD — Possibilités de dépôt */
const DEMO_614_THEORIE_FULL = `## 14. Possibilités de dépôt

### 14.1 Bases
Le **dépôt** = point de départ du voyage logistique : envoi déposé / réceptionné / préparé pour transport, tri, distribution.  
Ex. EnterSite : LOGO vient chercher les appareils · factures/lettres déposées en boîte aux lettres publique.

### 14.2 Termes
| Terme | Sens |
| --- | --- |
| Retirer / collecter / réceptionner | Point de vue **entreprise de distribution** |
| Déposer | Point de vue **client** qui remet l'envoi |
| Expéditeur / déposant | Qui envoie |
| Destinataire | Qui reçoit |
| Entreprise de distribution / CEC & courrier | Prise en charge, transport, livraison |
| Clientèle privée / commerciale | Usage perso vs professionnel |

### 14.3 Possibilités

#### 14.3.1 Prise en charge
Collaborateurs viennent chercher chez le client · privée ou commerciale · régulière ou à la demande.

- **Privé** : commande en ligne / Post-App · domicile ou adresse choisie  
- **Commercial** : lettres, colis, VinoLog, express, étranger · selon besoins

#### 14.3.2 Déposer soi-même

**Points desservis**  
Filiales propres ou **partenaires** (Poste : Volg, Landi… · DPD : magasins, pharmacies…).

**Points non desservis**  
- **Boîtes aux lettres** (Poste) · 24/7 · lettres affranchies  
- **Automates à colis** (My Post 24, DHL…) · dépôt / expédition · affranchissement possible sur place  
- **Point clientèle commerciale self-service** : convention + badge · envois affranchis dans conteneurs · levée 1×/jour

👉 Prise en charge = confort + contact · coûts personnel/véhicules.  
Desservi = moins de ramassage · loyers/personnel.  
Non desservi = 24/7 · ↓ personnel · ↑ acquisition/entretien.

### 14.4 Prise en charge chez les clients

#### 14.4.1 Privé (ex. Poste pick@home)
Ordre → smartphone facteur. Standard : contrôler/traiter ordre · scanner · confirmer prise en charge · suite expédition. Cas spéciaux : étiquette retour, emballage, produits sans code-barres (consignes QMS).

#### 14.4.2 Commercial
| Mode | Contenu |
| --- | --- |
| **Régulier** | Jours/plages contractuels |
| **Occasionnel** | Sur commande |

Petites qté (≤ ~5) : souvent pendant tournée distribution · grandes qté : tournée camion dédiée (plage ~½ h).

### 14.5 Levée des points non desservis

Respecter **horaires** et processus → satisfaction client.

#### 14.5.1 Boîtes aux lettres (5 étapes)
1. Respecter heures de levée (lun–ven ≠ sam · **pas** d'anticipation)  
2. Scanner code-barres **intérieur** (qualité)  
3. Vider entièrement (coins, fond, rebord)  
4. Bien fermer / vérifier la clé  
5. Coup d'œil arrière avant départ (envois tombés)

Protéger des intempéries et regards (**secret postal**).

#### 14.5.2 Événements particuliers
Sales/endommagées → photo + signaler · sous-affranchis → centre / carte perception · trousseau Key Finder → supérieur · client veut récupérer lettre → description + ID = expéditeur · bulletin + billet → supérieur (argent en BA interdite).

#### 14.5.3 Automates (My Post 24)
Versions **1.0** (écran) / **2.0** (smartphone/scanner).  
**D'abord retirer** les envois (casiers libres) · puis entreposer.

1. Login (écran ou app + Bluetooth)  
2. « Retirer un envoi » · vider **par catégorie** (dépôt, retour…)  
3. Comparer nb retiré ↔ total affiché · manquants → office + Masterkey  
4. Déconnexion · charger véhicule **par catégorie**  
5. Livraison séparée par catégorie

#### 14.5.4 Erreurs automates
Deux envois / casier · automate plein. Prévention : bien vérifier fond · vider **avant** d'entreposer.`;

const DEMO_614_THEORIE_SUMMARY = `## À retenir — Module 614

### Dépôt
Prise en charge · points desservis · non desservis (BA, automates, self-service CC)

### Processus
Privé pick@home · commercial régulier/occasionnel  
BA : 5 étapes · horaires stricts · secret postal  
My Post 24 : retirer d'abord · par catégories`;

const DEMO_614_APERCU_FULL = `## Aperçu du module 614

Module **CPD** : possibilités de **dépôt** et levée des points non desservis.

### Vous allez découvrir
1. Termes et canaux de dépôt
2. Prise en charge privée / commerciale
3. Points desservis et non desservis
4. Levée BA et automates My Post 24

### Source
EnterSite — Logistics by ASFL / SVBL · CPD Distribution`;

const DEMO_614_APERCU_SUMMARY = `## Aperçu — Module 614
- Canaux de dépôt
- Prise en charge
- Levée BA / automates`;

const DEMO_614_OBJECTIFS_FULL = `## Objectifs du module 614

À l'issue de ce module, l'apprenti·e est capable de :

- Distinguer **prise en charge**, points **desservis** et **non desservis**
- Décrire les processus de prise en charge **privée** et **commerciale**
- Appliquer la levée des **boîtes aux lettres** (5 étapes + cas particuliers)
- Expliquer le vidage des **automates** (ordre retirer → entreposer, catégories)`;

const DEMO_614_OBJECTIFS_SUMMARY = `## Objectifs
- Canaux de dépôt
- Prise en charge
- Levée BA / automates`;

/** Contenu Module 615 — CPD — Préparer les envois postaux */
const DEMO_615_THEORIE_FULL = `## 15. Préparer les envois pour le processus de tri

### 15.1–15.6 Envois spéciaux & MD

**Envois spéciaux** = traitement particulier (ex. vin). **MD** = danger personnes/environnement. **LQ** (*Limited Quantity*) = quantités MD autorisées en CEC.

| Catégorie | Idée / limites |
| --- | --- |
| **MD** | Inflammable, toxique… · ADR · étiquette + code presta · n° ONU + poids brut |
| **Marchandises** | > encombrants ou > **30 kg** · sur palette |
| **Encombrants** | > colis standard (Poste **100×60×60**, 30 kg · DHL **120×60×60**, 31,5 kg) ou sans emballage |
| **Traitement manuel** | Forme/emballage/adresse empêchent le tri auto |
| **Liquides** | Quantités + emballage adaptés (vin…) |
| **Précieux / fragiles / T°** | Assurance · tri manuel · signalétique froid |
| **Animaux vivants** | Surtout **coursier** (sauf insectes alimentaires) |
| **Militaire / cécogramme** | N° militaire · boîtes jaunes non affranchies |

**Interdits CEC (ex.) :** trop grands/lourds · MD hors LQ · animaux vivants (sauf exceptions).  
**MD interdites :** explosifs, feux d'artifice, bouteilles gaz BBQ ≥1 L, batteries Li > **100 Wh**.  
**LQ autorisées (ex.) :** aérosols, désinfectant ≤1 L, pâte combustible ≤1 L · parfum/peinture jusqu'à ~5 L (Poste).

### 15.7–15.11 Préparation aux points de dépôt

**Préparation** = trier avant centre (ex. express dans même RX). Points de dépôt : guichets, filiales, BA, automates…

**Lettres — critères :** à oblitérer / déjà ok · presta (A/B/B2) · auto / manuel · format **FN** (≤B5) / **GF** (≤B4) / MIX · gabarits bleu/jaune. Puis **séparation par 7** · étiquettes sur BB. Si temps : oblitérer sur place · sinon au centre.

**Colis :** presta (Priority / Economy / Express) + type (encombrants, vin…) → même **RX**.

👉 Erreur de rollbox (Express dans Economy) = retard + client mécontent.  
Envoi abîmé / bruits suspects → mettre de côté · informer responsable.

### 15.12–15.14 Supports de charges & étiquetage

| Support | Usage / limites |
| --- | --- |
| Contenant réutilisable | Plastique · isolé si T° |
| **BB** (lettres) | Max **15 kg** (tapis centre) |
| **SB** (collectifs) | Lettres/BB entre sites · max **460 kg** |
| **RX** (rollbox) | Colis · contrôle sécurité annuel · ≤6 RX accrochés (≤3 encombrants) |
| Palettes | En nombre / > encombrants |
| Sacs | Internationaux (DHL Destination Bags ≤25 kg) · Poste sacs ouverts / journaux / dépôt courrier (≠ fonds / justificatifs) |
| Conteneurs avion / **WB** | Air · rail/route (grue) |

Étiquetage = **quoi** + **où**. Poste : A/B · FN/GF · auto/manuel. DHL : n°/code-barres conteneur. Planzer : QR + GPS.

### 15.15–15.17 Centres & NPA

Sites près **autoroute + rail** (interdiction nuit PL 22h–5h → train). Proche population · pas plein centre-ville.

**NPA** 4 chiffres (CH pionnière) : 1 = rayon O→E · 2 = territoire · 3 = (ex-ligne ferroviaire) · 4 = localité. Secteurs urbains / NPA entreprise / isolés.  
1er chiffre → centre / région de desserte · suite → tournée facteur.

### 15.18–15.23 Hubs, niveaux & modes

**Hub** = nœud de regroupement / tri / réacheminement · **cross-docking** ↓ trajets.

| Niveaux | Exemple |
| --- | --- |
| **1** | Direct (coursier, repas) |
| **2** | Usine → magasin / transport marchandises |
| **3** | Automate → centre → destinataire |
| **Multi** | International (avion, dédouanement…) |

**Modes :** route (flexible, RPLP, nuit) · rail (volume, écolo, peu de raccordements) · eau (lent, cheap) · air (rapide, cher). En CH distribution : surtout **route + rail**.`;

const DEMO_615_THEORIE_SUMMARY = `## À retenir — Module 615

### Spéciaux & MD
Encombrants · manuel · LQ · interdits (explosifs, Li>100 Wh, animaux CEC…)

### Préparation
Lettres : séparation par 7 · colis : presta + type → RX  
Étiqueter BB/RX correctement

### Supports & réseau
BB 15 kg · RX · WB · NPA 4 chiffres · hubs / CD  
Niveaux 1→multi · route + rail`;

const DEMO_615_APERCU_FULL = `## Aperçu du module 615

Module **CPD** : préparer les envois (spéciaux, MD, supports, NPA, hubs).

### Vous allez découvrir
1. Envois spéciaux, MD et Limited Quantity
2. Préparation lettres/colis et séparation par 7
3. Supports de charges et étiquetage
4. NPA, hubs, niveaux de distribution et modes

### Source
EnterSite — Logistics by ASFL / SVBL · CPD Distribution`;

const DEMO_615_APERCU_SUMMARY = `## Aperçu — Module 615
- Spéciaux · MD · LQ
- Préparation · supports
- NPA · hubs · modes`;

const DEMO_615_OBJECTIFS_FULL = `## Objectifs du module 615

À l'issue de ce module, l'apprenti·e est capable de :

- Classer les **envois spéciaux** et appliquer les règles **MD / LQ**
- Préparer lettres et colis (séparation, rollbox, signalétique)
- Choisir et **étiqueter** les supports de charges
- Relier **NPA**, hubs, niveaux de distribution et modes de transport`;

const DEMO_615_OBJECTIFS_SUMMARY = `## Objectifs
- Spéciaux · MD · LQ
- Préparation · supports
- NPA · hubs`;

/** Contenu Module 616 — CPD — Processus dans les centres de distribution */
const DEMO_616_THEORIE_FULL = `## 16. Processus dans les centres de tri / distribution

### Principes
Lettres et colis : machines et process différents · même logique : **1er tri** puis **2e tri**.

### 16.1 Notions
| Terme | Sens |
| --- | --- |
| Commissionnement | Regrouper pour bases / suite |
| Préparation des envois | Avant tri (presta, format…) |
| Région de desserte | Zone du **tri secondaire** du centre |
| CCR | Centres colis **régionaux** (soutien) |
| **Tri de dépôt** | 1er tri · hors région → autre centre |
| **Tri de distribution** | 2e tri · dans la région du centre |
| **Tri séquentiel (GFS)** | Ordre de la tournée facteur |
| Base de distribution | Office où part la tournée |
| Clinique des colis | Réparation colis endommagés |

### 16.2–16.4 Flux global
Entrée → préparation → 1er tri → 2e tri (même centre ou autre) → commissionnement → sortie.  
3 **PZ** principaux · NPA / tableaux d'acheminement. CCR ex. : Vétroz, Ostermundigen, Härkingen, Urdorf, Cadenazzo…

### 16.5–16.7 Tri lettres (Poste)
**Logistique de site** (gestion quais/véhicules) → **entrée** (robots/manuel · PromoPost/journaux parfois directs) → **préparation** (FN/GF · auto/manuel · A/B · oblitération) → **tri** (IRV, DBCS, GFSA · GF · manuel) → codage auto / **vidéocodage** (ex. Coire) → casiers / buts de tri.

**GFS** : 2–3 phases après tri distribution → ordre boîtes / noms → **BB** → commissionnement (**SB**) → sortie (train si autre centre · route si bases).

Outils : CFC · IRV · robot portail · casiers manuels · unité GF · GFSA.

### 16.8–16.9 Tri colis (Poste)
1. **Entrée** — endommagés → clinique · non-colis retirés · aptitude mécanique · adresse vers le haut  
2. **Identification** — ACS · pesée/mesure clients · VCS · MCS  
3. **Tri** — distribution (même centre) vs dépôt (autre)  
4. **Sortie autres centres** — RX → WB · souvent **train**  
5. **Sortie** — bases de distribution (route)

Machines : **plateaux inclinables** (1 envoi/plateau · glissement variable) · **bandes transversales** (précis, soigneux, rapide) · **rouleaux inclinés** (fond plat requis). Aussi : convoyeurs, FTS, robots.

### 16.10 Sécurité
Badge · clôture · éclairage · sacs **transparents** · vestiaires perso · caméras · alarmes.  
Travail : instruction machines · passeport formation · MD · permis Suva chariots.

### 16.11–16.15 NPA, IATA, MIL
Rappel NPA 4 chiffres (module **615**) · Liechtenstein 9485–9498. Internationaux : 5–7 chiffres / lettres · certains pays sans.  
**IATA** : 3 lettres aéroport (ZRH, LHR, CDG) · aussi sur AWB/codes.  
**MIL** : adresse campagne · franc de port ≤ **5 kg** (sans presta payante) · code MIL · Poste seule · remise poste de campagne / sous-officier.

**Ex. retour baskets :** Aarau → Härkingen (1er tri) → train Daillens (10XX) → 2e tri → base → commerçant.

### 16.16–16.23 Logistique entre centres & aides
| Outil | Rôle |
| --- | --- |
| **Grue de terminal** | Portique · WB sur wagons · max ~**20 t** |
| Pilotage logistique extérieure | Centrale · ordres véhicules/grues |
| Véhicules de site | Manœuvre WB |
| **Caisses mobiles** | RX ou **vrac** (volume ↑ · déchargement ↓) |
| **Camions double pont** | Jusqu'à **36** RX vs 24 (2×12 WB) · plancher hydraulique |

Signalétique : Planzer (fiche + Datamatrix) · Poste (fiche avant RX · écran lieu cible vrac).

Aides internes : tracteurs RX · chariots SB/palettes · mât rétractable · contrepoids.  
Ergo : plates-formes · points de déversement · bandes télescopiques · aides traction · trottinettes.`;

const DEMO_616_THEORIE_SUMMARY = `## À retenir — Module 616

### Tri
Dépôt vs distribution · GFS · CCR  
Lettres : IRV/GFSA · Colis : ACS + trieurs

### Sécurité & réseau
Badge · Suva · NPA · IATA · MIL  
WB · grue 20 t · double pont 36 RX`;

const DEMO_616_APERCU_FULL = `## Aperçu du module 616

Dernier module **CPD** du bloc 600 : processus et moyens dans les **centres de tri**.

### Vous allez découvrir
1. Tri de dépôt / distribution et GFS
2. Flux lettres et colis (Poste)
3. Machines, sécurité, NPA / IATA / MIL
4. Grues, WB, double pont et aides ergonomiques

### Source
EnterSite — Logistics by ASFL / SVBL · CPD Distribution`;

const DEMO_616_APERCU_SUMMARY = `## Aperçu — Module 616
- Processus de tri
- Machines · sécurité
- WB · NPA · MIL`;

const DEMO_616_OBJECTIFS_FULL = `## Objectifs du module 616

À l'issue de ce module, l'apprenti·e est capable de :

- Distinguer **tri de dépôt**, **tri de distribution** et **GFS**
- Décrire les flux **lettres** et **colis** en centre (entrée → sortie)
- Citer machines clés et mesures de **sécurité**
- Relier NPA / IATA / MIL et les outils de **logistique de site** (WB, grue, double pont)`;

const DEMO_616_OBJECTIFS_SUMMARY = `## Objectifs
- Dépôt / distribution / GFS
- Flux & machines
- Sécurité · WB · MIL`;

/** Contenu Module 701 — L'inventaire */
const DEMO_701_THEORIE_FULL = `## 1. L'inventaire

### 1.1 Obligation d'inventaire

Entreprise inscrite au **registre du commerce** → bilan annuel. Les **stocks** (actifs) doivent être contrôlés : valeurs comptables (**théoriques**) vs physiques (**réelles**). Documents d'inventaire à conserver **10 ans**.

📜 **CO art. 958c al. 2** : chaque poste du bilan / annexe est justifié par un inventaire (ou autre).

👉 Inventaire ≥ **1×/an** · conservation **10 ans**.

### 1.2 Types d'inventaire

#### 1.2.1 À date fixe (jour de clôture)
Comptage un jour précis · listes par secteur · équipes (voire tout le personnel) · papier ou **MDE**. Idéalement **aucune** entrée/sortie ce jour-là. Très précis.

#### 1.2.2 Permanent (tournant)
Tout au long de l'année · système indique aléatoirement quoi compter · **chaque** article ≥ 1×/an. Idéal avec inventaire **temps réel** (MDE) pour continuer les mouvements.

#### 1.2.3 Par sondage à jour fixe
Accord autorités fiscales · échantillon représentatif extrapolé · souvent pour articles **bon marché** · articles de valeur = inventaire complet.

### 1.3 Déroulement

Directive / plan d'inventaire **contraignant** (adapté à l'entreprise).

**Sources d'erreur :** manque de personnel · unités peu claires · pannes / erreurs MDE.

**Préparation :** instruction · concertation · délimiter les EM non planifiées · enlever emballages / palettes vides · étiquetage racks · pré-trier unités de comptage.

**Pendant :** **mesurer** (mètres) · **peser** (poids) · **compter** (unités).

### 1.4 Évaluation

Théorique ↔ réelle. Écarts > seuil → **recompter**. Si confirmé → **différence d'inventaire** (souvent perte) · charge au compte de résultat.

👉 Clarifier les écarts = pistes d'amélioration des process.

### 1.5 Causes des différences

**Stock physique (réel) :** erreurs réception/stockage · livraisons non détectées · pertes substance (retrait, décomposition, évaporation) · DLC · erreurs picking · casse · **vol**.

**Stock comptable (théorique) :** saisies incorrectes · mouvements non enregistrés · doublons · mauvais article.`;

const DEMO_701_THEORIE_SUMMARY = `## À retenir — Module 701

### Obligation
Bilan · théorique vs réel · 1×/an · docs 10 ans · CO 958c

### Types
Date fixe · tournant · sondage

### Processus
Directive · préparer · mesurer/peser/compter  
Écarts → recompter → différences (souvent charges)`;

const DEMO_701_APERCU_FULL = `## Aperçu du module 701

Premier module du bloc **FICO** : obligation, types et déroulement de l'**inventaire**.

### Vous allez découvrir
1. Base légale (CO) et conservation 10 ans
2. Inventaire fixe, tournant et par sondage
3. Préparation, comptage et évaluation
4. Causes des différences théoriques / réelles

### Source
EnterSite — Logistics by ASFL / SVBL · Bloc 700`;

const DEMO_701_APERCU_SUMMARY = `## Aperçu — Module 701
- Obligation légale
- 3 types d'inventaire
- Écarts & causes`;

const DEMO_701_OBJECTIFS_FULL = `## Objectifs du module 701

À l'issue de ce module, l'apprenti·e est capable de :

- Expliquer l'**obligation** d'inventaire (CO, 1×/an, 10 ans)
- Distinguer inventaire **fixe**, **tournant** et par **sondage**
- Décrire la **préparation** et le déroulement (mesurer, peser, compter)
- Analyser les **différences** d'inventaire et leurs causes`;

const DEMO_701_OBJECTIFS_SUMMARY = `## Objectifs
- Obligation & types
- Déroulement
- Différences`;

/** Contenu Module 703 — Les coûts du personnel */
const DEMO_703_THEORIE_FULL = `## 3. Coût du personnel

Les collaborateurs sont essentiels au succès — et génèrent des **coûts de personnel**, souvent parmi les plus importants. Catégories (lien module **702**) : salaires · prestations sociales · prestations spéciales (formation, gratifications…) · administration RH.

### 3.1 Point de vue entreprise (EnterSite)

#### Directs vs indirects
| Directs | Indirects |
| --- | --- |
| Salaire **brut** / rémunération | Équipement poste · recrutement |
| Cotisations retraite, maladie, chômage… | |
| Primes vacances / Noël · gratifications | |
| Frais pro (formation, déplacements) | |
| Maintien salaire maladie | |

#### 3.1.1 Salaire vs rémunération
- **Salaire** : pour travail **effectué** · variable (heures, tâche, pièces)
- **Rémunération** : montant **fixe** · indépendant du volume · payée aussi en vacances · heures supp. souvent compensées (pas payées cash)

#### 3.1.2 Réduire les coûts
Jusqu'à ~**80 %** des coûts totaux selon secteur. Leviers : **réserves** (saisons) · ↓ heures supp. (compensation) · ↓ absentéisme · **externalisation** (qualité à préserver, module **301**).

#### 3.1.3 Fixes vs temporaires
Emploi fixe : mensuel · vacances · déductions · essai + préavis ~3 mois.  
Temporaire : agence / **freelance** (indépendant gère impôts/social) · agence gère l'admin.

Objectif employeur responsable : emploi durable · maîtriser les coûts court **et** long terme.

### 3.2 Point de vue collaborateur

**Brut** = avant déductions légales · **net** = versé.

#### 3.2.1 Trois piliers
| Pilier | Contenu |
| --- | --- |
| **1** Public | AVS · AI · PC · AC · APG (militaire, maternité, paternité) · répartition (actifs → retraités) · cotisation dès 18 ans si actif |
| **2** Professionnel | LPP · LAA · LFLP · sur-obligatoire · avec pilier 1 ≈ **60–70 %** dernier salaire |
| **3** Privé | Facultatif · **3a** (vieillesse / logement · déductible) · **3b** (épargne / risques) |

#### 3.2.2 Déductions (ordre 2021, part employé)
AVS **4,35 %** · AI **0,7 %** · APG **0,25 %** · AANP **0,75 %** · AC **1,1 %** · total ≈ **7,15 %**.  
LPP si revenu > **21 510 CHF**/an (seuil indiqué).

**Ex.** Brut 52 000 → déductions 3 718 → net **48 282**.

👉 Personnel ≠ seulement salaire : + **charges sociales**.

### 3.3 Droits et obligations (CO)

| | Employeur | Employé |
| --- | --- | --- |
| **Droits** | Prestation complète · fidélité · vérité · direction | Revenu · emploi · expression · égalité |
| **Obligations** | Assistance · personnalité/données · égalité H/F · biens · certificat | Travail personnel · diligence/loyauté · comptes · heures supp. · ordres |

#### 3.3.1 Protection santé (LAA art. 82)
Employeur : mesures prévention (expérience, technique, conditions) · faire collaborer le personnel.  
Employé : assister · EPI · dispositifs de sécurité · ne pas les retirer sans autorisation.  
Travaux à risques particuliers : certificat de formation possible (CF).`;

const DEMO_703_THEORIE_SUMMARY = `## À retenir — Module 703

### Coûts
Directs (brut, sociales…) · indirects (recrutement, poste)  
Salaire (variable) vs rémunération (fixe)

### Collaborateur
3 piliers · brut → net (~7 % déductions 2021) · LPP

### Cadre
Droits/obligations CO · LAA prévention`;

const DEMO_703_APERCU_FULL = `## Aperçu du module 703

Ce module traite des **coûts de personnel** : vision entreprise et collaborateur, trois piliers et cadre légal.

### Vous allez découvrir
1. Coûts directs / indirects et salaire vs rémunération
2. Leviers de réduction et emploi fixe / temporaire
3. Trois piliers et déductions (brut / net)
4. Droits et obligations CO / LAA

### Source
EnterSite — Logistics by ASFL / SVBL · Suite du module 702`;

const DEMO_703_APERCU_SUMMARY = `## Aperçu — Module 703
- Coûts directs / indirects
- 3 piliers · brut/net
- Droits CO / LAA`;

const DEMO_703_OBJECTIFS_FULL = `## Objectifs du module 703

À l'issue de ce module, l'apprenti·e est capable de :

- Distinguer coûts de personnel **directs** / **indirects** et salaire / rémunération
- Expliquer des leviers de **réduction** des coûts et les formes d'emploi
- Décrire les **trois piliers** et calculer un ordre de grandeur brut → net
- Citer les droits/obligations **CO** et les devoirs **LAA** de prévention`;

const DEMO_703_OBJECTIFS_SUMMARY = `## Objectifs
- Directs / indirects
- 3 piliers · déductions
- CO · LAA`;

/** Contenu Module 704 — Stockage — Les indicateurs logistiques */
const DEMO_704_THEORIE_FULL = `## 4. Les indicateurs logistiques (KPI'S)

Les indicateurs (KPI) permettent à EnterSite AG de stocker à **moindre coût**. On peut les calculer pour l'entreprise entière, un **groupe d'articles** ou un **article**.

### 4.1 Le stock moyen

Donnée de base pour la rotation, le taux d'intérêt des stocks, les frais de stockage, etc. Période d'analyse type = **1 année** (12 mois).

| Formule | Calcul | Fiabilité |
| --- | --- | --- |
| **1** | (début d'année + fin d'année) / **2** | Fiable sur courte période · sur 1 an seulement si faibles fluctuations |
| **2** | (début + fins de chaque trimestre) / **5** | Plus précis · encore sensible aux variations |
| **3** | (début + fins de chaque mois) / **13** | Le plus proche de la réalité · préférable sur longues périodes |

#### Exemple — matériel de vissage pour A1CC530AS

| Date | Stock |
| --- | --- |
| Solde initial (1er janv.) | 2000 |
| 31 janv. | 300 |
| 28 févr. | 750 |
| 31 mars | 900 |
| 30 avr. | 1100 |
| 31 mai | 200 |
| 30 juin | 850 |
| 31 juil. | 700 |
| 31 août | 1700 |
| 30 sept. | 1400 |
| 31 oct. | 600 |
| 30 nov. | 800 |
| 31 déc. | 1500 |

- **F1 :** (2000 + 1500) / 2 = **1750** pièces  
- **F2 :** (2000 + 900 + 850 + 1400 + 1500) / 5 = **1330** pièces  
- **F3 :** (2000 + 300 + 750 + 900 + 1100 + 200 + 850 + 700 + 1700 + 1400 + 600 + 800 + 1500) / 13 = **984** pièces  

👉 Plus le nombre de stocks pris en compte est élevé, plus le résultat est **précis**.

### 4.2 La rotation des stocks

Nombre de fois où le stock moyen a été **renouvelé** (entièrement consommé et reconstitué) sur la période. Calculable pour articles, groupes d'articles ou tout l'entrepôt.

**Rotation = utilisation des marchandises (consommation) / stock moyen**

**Ex.** Toner Q3960AR : 14 000 / 2 000 = **7** fois (facteur).

- **Rotation rapide** : forte rotation · **lente** : faible rotation  
- Alimentaire : souvent facteur **12–15**  
- Facteur ≤ **1** : faible → vérifier si le stockage en vaut la peine (sauf pièces de rechange critiques ou biens en maturation — rotation peu pertinente)

**Avantages** d'une rotation ↑ : coûts ↓ · immobilisation du capital / intérêts / places ↓ · risque de stockage ↓ (invendus).

**Leviers :** commander plus petit / plus souvent · inventaire à jour (ex. permanent) · stocks maximums · juste-à-temps · retirer les articles qui ne fonctionnent pas.

#### 4.2.1 La durée de stockage

Laps de temps moyen entre entrée et sortie. Plus la rotation ↑, plus la durée ↓ (et inversement).

**Durée de stockage = 360 jours (ou période choisie) / rotation**

**Ex.** 360 / 7 ≈ **51,4 jours**.

👉 Comparer rotation / durée avec N−1 ou le secteur = indice de **rentabilité**.

### 4.3 La couverture des stocks

Nombre de **jours** pendant lesquels le stock suffit au rythme de consommation moyenne / planifiée.

**Stock disponible = stock physique − réservations + entrées prévues**

**Couverture = niveau de stock / besoin journalier**

**Ex.** 1300 pièces / 150 = **8,6 jours**.

### 4.4 La capacité de livraison (taux de service)

Clients : choix large + délais courts → forte disponibilité, mais **100 %** sur tout l'assortiment coûte cher. Principe : « **aussi peu que possible, autant que nécessaire** ». Via analyse **ABC** (module **311**), on augmente surtout les stocks des articles **A**.

**Taux de service (%) = demandes satisfaites / demandes totales × 100**

« Demande » peut être : une commande · une ligne · une pièce. La **période** (instantané vs semaines/mois) compte aussi. Analyser aussi les conséquences d'une rupture (image, préjudice).

**Ex.** Toner Q3960AR, mars : ≈ **98,4 %** (réaliste pour solutions bureautiques). Ruptures en fin de semaine → adapter les livraisons. ~**98 %** souvent atteignable raisonnablement · **100 %** = effort disproportionné.

### 4.5 Les erreurs de livraison

Toute livraison avec irrégularité : mauvais destinataire / article / quantité · endommagé ou défectueux.

#### 4.5.1 Éviter en tant que fournisseur
N° d'articles univoques · contrôles optiques · documents précis (préparation, livraison).

#### 4.5.2 Éviter en tant que destinataire
Identification globale à la livraison (module **304**) : pour nous ? attendu ? commande en système ? Puis contrôle professionnel EM (modules **307–308**).

#### 4.5.3 Différence de quantité
Excédent ou manque. Pas toujours une « erreur » si **tolérance** contractuelle. Compter en **temps réel** à l'EM : écart négatif = perte pour le destinataire.

**Dommages transport :** souvent mécaniques (pression, chute, choc) → constater tôt · PV écrit + photos · signaler (**307**).

#### 4.5.4 Taux d'erreur de livraison

**Taux d'erreur (%) = livraisons défectueuses / livraisons totales × 100**

**Ex.** 22 / 550 × 100 = **4 %**.

Calculable par position · par fournisseur/client · globalement sur une période. Indicateur de **qualité fournisseur** · accords qualité / **pénalités** possibles.`;

const DEMO_704_THEORIE_SUMMARY = `## À retenir — Module 704

### Stock moyen
F1 /2 · F2 /5 · F3 /13 → + de points = + précis

### Rotation & durée
Conso / stock moy. · 360 / rotation  
↑ rotation = ↓ coûts, capital, risques

### Couverture & service
Disponible = physique − réserv. + entrées  
Couverture = stock / besoin/j  
Service ≈ 98 % réaliste · ABC (**311**)

### Erreurs
Taux = défectueuses / total × 100  
Prévention 304 / 307–308 · tolérances · PV dommages`;

const DEMO_704_APERCU_FULL = `## Aperçu du module 704

Ce module présente les principaux **KPI de stockage** : stock moyen, rotation, couverture, capacité de livraison et erreurs.

### Vous allez découvrir
1. Les 3 formules du stock moyen (année, trimestres, mois)
2. Rotation des stocks et durée de stockage
3. Couverture, taux de service et logique ABC
4. Taux d'erreurs de livraison et mesures de prévention

### Source
EnterSite — Logistics by ASFL / SVBL · Bloc 700 FICO`;

const DEMO_704_APERCU_SUMMARY = `## Aperçu — Module 704
- Stock moyen (3 formules)
- Rotation · couverture · service
- Erreurs de livraison`;

const DEMO_704_OBJECTIFS_FULL = `## Objectifs du module 704

À l'issue de ce module, l'apprenti·e est capable de :

- Calculer un **stock moyen** selon les 3 formules et justifier le choix
- Calculer **rotation** et **durée de stockage** et en tirer des conclusions
- Interpréter **couverture** et **taux de service** (dont logique ABC, module 311)
- Calculer le **taux d'erreur** de livraison et citer des mesures de prévention (fournisseur / destinataire)`;

const DEMO_704_OBJECTIFS_SUMMARY = `## Objectifs
- Stock moyen · rotation · durée
- Couverture · service · ABC
- Erreurs · prévention`;

/** Contenu Module 705 — La rentabilité de l'entrepôt */
const DEMO_705_THEORIE_FULL = `## 5. La rentabilité de l'entrepôt

Gérer les marchandises pour générer le **moins de coûts** possible. Types de coûts : voir aussi module **702** (approfondis ici).

### 5.1 Aperçu des types de coûts

Connaître la **structure des coûts** (propre à chaque entreprise) = condition pour améliorer.

#### 5.1.1 Coûts totaux
**Coûts totaux = coûts fixes + coûts variables** (module **702**).

Seuls, ils ne disent pas si l'entreprise est performante. Les comparer à une période précédente (mois, trimestre, année…) → **tendance** +/−.

#### 5.1.2 Taux de couverture des coûts

**Taux de couverture (%) = coûts totaux / chiffre d'affaires × 100**

| Résultat | Interprétation |
| --- | --- |
| **> 100 %** | CA ne couvre pas les coûts → **pertes** |
| **< 100 %** | Coûts couverts par le CA → **gains** (rentable) |

👉 Structure EnterSite : totaux = fixes + variables · rentable si couverture **< 100 %**.

### 5.2 Coûts de stockage

Liés à la gestion des stocks. **Fixes** = permanents, indépendants du volume. **Variables** = proportionnels à l'activité.

#### Exemple EnterSite — trimestres

| | 1er trim. | 2e trim. |
| --- | --- | --- |
| Chiffre d'affaires | Fr. 48 440.– | Fr. 46 550.– |
| Coûts fixes | Fr. 8 550.– | Fr. 8 550.– |
| Coûts variables | Fr. 26 475.– | Fr. 22 900.– |
| **Résultat** | Fr. 13 415.– | Fr. 15 100.– |

Meilleurs prix d'achat au T2 → variables ↓ · CA ↓ mais **résultat ↑**.  
👉 ↓ coûts (fixes ou variables) → ↑ résultat · bénéfice = travail **rentable**.

#### Composants

| Coûts fixes | Coûts variables |
| --- | --- |
| Amortissements · Personnel · Intérêts · Loyers · Entretien · Assurances · Systèmes de gestion | Marchandises · Vol, vieillissement, dépréciation · Goulets d'étranglement · Énergie |

#### 5.2.1 Amortissements
Perte de valeur d'un bien (bâtiment, équipement…) due à l'usure. Durées indicatives :

| Bien | Durée |
| --- | --- |
| Bâtiment | 25 ans |
| Rayonnage haut | 15 ans |
| Rayonnages à palettes | 10 ans |
| Installations de transport | 10 ans |
| Chariots élévateurs | 5 ans |

Calcul **linéaire** (souvent sur 50 % de l'investissement pour les intérêts, cf. ex. ci-dessous).

**Ex.** Chariot Fr. 18 000.– / 5 ans = **Fr. 3 600.–**/an. An 2 au bilan : 18 000 − 3 600 = **Fr. 14 400.–**.

#### 5.2.2–5.2.7 Autres coûts fixes
- **Personnel** → module **703**
- **Intérêts** : capital étranger (hypothèque, prêt…) · taux lié à la BNS / marché + risque entreprise · taux théorique (fictif) pour le coût du capital
- **Loyers** : contrat d'usage (bâtiment, entrepôts…)
- **Entretien / maintenance** (prolonger la durée de vie) — repères vs investissement : bâtiments **1,2 %** · transport **2,5 %** · manutention **8 %**
- **Assurances** (corporel, matériel, pécuniaire) : ≈ **0,1–0,5 %** de l'investissement (entrepôt)
- **Systèmes (ERP / stocks)** : maintenance, mises à jour, licences (partiellement imputés à l'entrepôt)

#### 5.2.8–5.2.11 Coûts variables
- **Marchandises** : actifs circulants · capital immobilisé tant que stockées · création de valeur à la vente / production (détail §5.3–5.4)
- **Vol, vieillissement, dépréciation** : inventaire ≥ 1×/an · qualité / DLC / conditions de stockage
- **Goulets** : place manquante → location / 3PL (valeurs indicatives)

| Service | Prix indicatif (Fr.) |
| --- | --- |
| Espace ~6 m haut / m² | 80–200 |
| Palette/an (normal) | 85–95 |
| Palette/an (sécurité ↑) | 110–120 |
| Frigorifique / congélateur | 140–150 / 155–170 |
| EM / palette | 5–10 |
| Picking / article · / gamme | 0,60–1,00 · 5–7 |

- **Énergie** (gaz, électricité, eau…) : ≈ **0,5–1,0 %** de l'investissement

#### Exemple — coût total d'un chariot à mât rétractable (Fr. 36 000.–)

Amort. 5 ans · intérêt calculé **8 %** · entretien **6 %** · énergie **950.–**/an · assurances **0,5 %**.

| Poste | Calcul | Montant |
| --- | --- | --- |
| Énergie | donné | Fr. 950.– |
| Assurances | 36 000 × 0,5 % | Fr. 180.– |
| Entretien | 36 000 × 6 % | Fr. 2 160.– |
| **Coût de fonctionnement** | somme | **Fr. 3 290.–** |
| Amortissement | 36 000 / 5 | Fr. 7 200.– |
| Intérêt | 36 000 / 2 × 8 % | Fr. 1 440.– |
| **Coût du capital** | somme | **Fr. 8 640.–** |

### 5.3 Niveaux de stocks

Stocks évoluent avec la demande · surveillance permanente · réapprovisionnement (fournisseur / production). Le **point de commande** dépend de la conso prévue pendant le délai + du délai.

#### 5.3.1 Stock minimum (stock de couverture)
Quantité pour couvrir la demande pendant l'approvisionnement (conso moyenne × délai). Articles critiques → minimum ↑ (évite ruptures, ↑ valeur stock).

#### 5.3.2 Stock de sécurité
Libre selon stratégie · réservé aux **exceptions** (conso ↑, retards, erreurs). Coûte cher → surtout articles **stratégiques**.  
👉 **Aussi peu que possible, aussi élevé que nécessaire.**

#### 5.3.3 Stock maximum
Plafond pour éviter des coûts trop élevés · souvent atteint à l'arrivée de la commande.

**Stock maximum = cote d'alerte + quantité optimale de commande**

#### 5.3.4 Point de commande (cote d'alerte)
Niveau qui déclenche une nouvelle commande. ↑ délai → ↑ point de commande.  
Sans stock sécurité = stock minimum · avec sécurité = minimum + sécurité.

**Point de commande = (délai d'approvisionnement × conso journalière) + stock sécurité**

**Ex.** Toner Brother TN2320 : 10 pces/j · sécurité 40 · qté optimale 70 · délai 4 j · stock au 31/08 = 90.

- Point de commande = (10 × 4) + 40 = **80**
- Stock maximum = 40 + 70 = **110**

Commande le 1er et 8 sept. (point atteint) · livraison le 5 et 12 (sécurité atteinte) → reconstitution jusqu'au max.

#### 5.3.5 Stock moyen
Quantité moyenne sur une période → détail module **704**.

### 5.4 Minimisation des coûts de stockage

Objectif : ↑ bénéfices en ↓ coûts. Conflit : minimiser la **valeur** du stock **et** maximiser la **disponibilité**.

| Stock trop élevé | Stock trop faible |
| --- | --- |
| Capital immobilisé ↑ · coûts entrepôt ↑ · risque vieillissement / perte de valeur | Pénurie · perte clients · pertes production / ventes |

#### 5.4.1 Taux d'intérêt de stockage

Données : taux d'intérêt du **marché** · **rotation** · **durée moyenne** de stockage.

**Ex.** Toner HP Cyan : 60 vendues · stock moy. 20 · taux marché **2,5 %** · prix de revient **71.–**.

| Étape | Calcul | Résultat |
| --- | --- | --- |
| Rotation | 60 / 20 | **3** fois |
| Durée moy. | 360 / 3 | **120** jours |
| Taux intérêt stockage | 2,5 % × 120 / 360 | **0,84 %** |
| Coût capital immobilisé | 0,84 × 20 × 71 | **Fr. 1 192,80** |

👉 Rotation faible → taux d'intérêt de stockage ↑ (coûteux si peu utilisés).

#### 5.4.2 Taux des coûts de stockage (possession)

Nécessaire pour la **quantité optimale de commande** (module **311**).  
Besoin : coûts de stockage · valeur moyenne du stock (stock moy. × prix de revient) · taux d'intérêt du marché.

**Taux (%) = (coûts de stockage / valeur moy. du stock × 100) + intérêts du marché**

Priorité de réduction : d'abord **variables**, puis **fixes** si besoin.

**Ex.** 2022 : coûts stockage 25 000 · valeur moy. 335 000 · intérêt 2,5 %.  
25 000 / 335 000 × 100 = **7,45 %** + 2,5 % = **9,95 %**.

👉 Taux ↑ = mauvaise gestion ou coûts trop élevés.

#### Autres leviers
- Respecter consommables · soigner / entretenir engins · consignes de sécurité
- Indicateurs de stocks (module **704**) · optimiser les niveaux de stocks`;

const DEMO_705_THEORIE_SUMMARY = `## À retenir — Module 705

### Structure & couverture
Totaux = fixes + variables  
Couverture = totaux / CA × 100 · rentable si **< 100 %**

### Coûts de stockage
Fixes (amort., personnel, intérêts, loyers…) · variables (marchandises, pertes, énergie…)  
Amort. linéaire · intérêts sur capital moyen

### Niveaux
Min · sécurité · max · point de commande  
PC = (délai × conso/j) + sécurité · « peu / nécessaire »

### Minimisation
Taux intérêt stockage · taux possession (+ marché)  
Conflit valeur stock vs disponibilité · module **704** / **311**`;

const DEMO_705_APERCU_FULL = `## Aperçu du module 705

Ce module traite de la **rentabilité de l'entrepôt** : structure des coûts, composants du stockage, niveaux de stocks et leviers de minimisation.

### Vous allez découvrir
1. Coûts totaux et taux de couverture (< 100 % = rentable)
2. Composants fixes / variables et calcul d'un coût d'équipement
3. Stock min, sécurité, max et point de commande
4. Taux d'intérêt de stockage et taux des coûts de possession

### Source
EnterSite — Logistics by ASFL / SVBL · Bloc 700 FICO`;

const DEMO_705_APERCU_SUMMARY = `## Aperçu — Module 705
- Couverture des coûts
- Coûts de stockage (fixes / variables)
- Niveaux · minimisation`;

const DEMO_705_OBJECTIFS_FULL = `## Objectifs du module 705

À l'issue de ce module, l'apprenti·e est capable de :

- Distinguer **coûts totaux**, fixes et variables et calculer le **taux de couverture**
- Identifier les composants des coûts de stockage et calculer amortissement / coût d'un équipement
- Calculer **point de commande**, stock max et expliquer min / sécurité
- Calculer **taux d'intérêt de stockage** et **taux des coûts de possession** et citer des leviers de minimisation`;

const DEMO_705_OBJECTIFS_SUMMARY = `## Objectifs
- Couverture · structure des coûts
- Composants · amortissement
- Niveaux · taux stockage / possession`;

/** Contenu Module 801 — L'identification des marchandises */
const DEMO_801_THEORIE_FULL = `## 1. Identification des marchandises

Chez les grands distributeurs, chaque article porte un **GTIN** (Global Trade Item Number). À la caisse, un **scanner laser** lit les barres / espaces clairs et récupère désignation + prix depuis l'ordinateur central. Un numéro seul ne suffit pas : il faut l'accès à la liste du système.

**Avantages :** plus de saisie manuelle · ticket détaillé · changements de prix (promos) en rayon seulement, pas sur chaque article.

### 1.1 SSCC (Serial Shipping Container Code)

Série de numéros pour **étiqueter les palettes** · jusqu'à **128** caractères · alphanumérique (chiffres + lettres). Données aussi imprimées en clair sur l'étiquette. Permet le **Track & Trace** tout au long du trajet — à condition de lire à **chaque interface**. En Allemagne : **NVE** (numéro d'unité d'expédition).

### 1.2 GTIN-8, GTIN-13, ISBN

#### 1.2.1 Global Trade Item Number (GTIN)
Code-barres **1-D** sur les produits en magasin · identification à la caisse + prix depuis la BDD. Chaque numéro est **unique au monde** (sinon confusion à la caisse).

| Bureau | Rôle |
| --- | --- |
| **GS1 Suisse** | Enregistrement GTIN (Suisse) |
| **Agence ISBN Suisse** | Livres (ISBN) |

👉 **GTIN-13** = standard le plus répandu en Europe (13 positions). **UPC** (USA, 12 chiffres) : on ajoute un **0** devant → GTIN-13 compatible.

### 1.3 Structure GTIN-13, GTIN-8, ISBN

Les premiers chiffres = **pays** ou **groupe de produits** · le **dernier** = chiffre de contrôle.

| Préfixe | Signification |
| --- | --- |
| 400–440 | Allemagne |
| **76** | Suisse et Liechtenstein |
| 90–91 | Autriche |
| 00–13 | États-Unis |
| 977 | Périodiques (monde) |
| 978–979 | Livres (monde) |

#### 1.3.1 ISBN vs GTIN-13
**ISBN** = International Standard Book Number. Ancien **ISBN-10** → intégré au GTIN-13 en **2007** via préfixe **978** (ou **979**).

**Ex.** 978-3-7657-1111-4 → GTIN-13 sans tirets : **9783765711114**

| Segment | Sens |
| --- | --- |
| 978 | Livre |
| 3 | Pays / langue |
| 7657 | Maison d'édition |
| 1111 | N° éditeur |
| 4 | Contrôle |

### 1.4 GTIN-128 (GS1-128)

Code-barres de **transport** pour unités de commande / livraison / transport · scan EM/SM · assurance qualité. Sur palettes, cartons, emballages standard, présentoirs… Souvent + **SSCC** pour Track & Trace mondial. Utilisé aussi où la **sécurité** compte (santé, chimie, alimentation).

**Tracking** = où est la marchandise maintenant · **Tracing** = traçabilité du parcours.

### 1.5 Code QR (Quick Response)

Développé en **1994** par **Denso Wave** (Japon) pour la logistique automobile Toyota. Matrice **2D** de points · 3 repères d'orientation · correction d'erreurs jusqu'à **~30 %** de perte. Lecture via smartphone (« mobile tagging »). Usages : expositions, musées, sentiers, monuments…

#### 1.5.1 Stockage
Étiquette article avec **DLC** + **n° de lot** · souvent + GTIN-128. En entreprise certifiée : rattacher un produit à son lot même après vente → **rappel ciblé** (seuls les lots concernés).

### 1.6 Code Data Matrix

Code **2D** très répandu · inscriptions permanentes (laser, estampage aiguille…) · chimie / médecine · tickets / adressage postal. Norme **ISO/IEC 16022**. Capacité jusqu'à **~3 116** chiffres ou **~2 335** caractères ASCII. Angle droit de lignes continues = position. Correction d'erreurs → souvent plus sûr / compact que le 1-D.

#### 1.6.1 Distribution
Adresse magazine via Data Matrix · lecture par **caméra** (2D, sans mouvement optique). QR : jusqu'à ~**4 000** caractères (magazines) · Data Matrix plus **petit** → industrie. Aussi : affranchissement envois en nombre · retour courrier indistribuable (Poste).

### 1.7 Placement des codes

#### Palettes
Étiquettes sur **≥ 2 côtés**, au-dessus du coin. Symbole le plus bas à **45 cm** du sol (± **5 cm**). Distance bord extérieur ≥ **5 cm**.

#### Cartons
Marquage sur **≥ 2 côtés**, en bas à droite. Distances : **34 mm** à droite (+0 / −23 mm) · **32 mm** vers le bas. Étiquette de recouvrement possible.

#### Longs / cylindriques
Diamètre ≥ **20 mm** ou arête ≥ **30 mm** → étiquette autocollante · sinon **étiquette volante**. Marquage radial : longueur du symbole ≤ **1/6** de la circonférence.

### 1.8 RFID (Radio Frequency Identification)

Identification / localisation **automatique** sans contact visuel obligatoire. Objectifs logistique : ↓ ruptures · ↑ contrôle erreurs · ↓ coûts personnel. Commerce : suivi palettes / cartons sur toute la chaîne.

#### 1.8.1 Composants
| Élément | Rôle |
| --- | --- |
| **Transpondeur / tag** (puce + antenne) | Fixé sur/dans l'objet (souvent adhésif) |
| **Lecteur / encodeur** | Lit ou modifie les données · passif ou actif · cm → > 1 km selon fréquence / puissance / environnement |

#### 1.8.2 Applications
Antivol magasins · accès bâtiments / remontées · EM / transport / stockage · blanchisseries · bibliothèques · animaux · vision : caisse supermarché / passeports / implants médicaux (débat vie privée).

**Ex.** Hôpital (Caroline du Nord) : puce bébé → alarme « Code Pink » aux sorties → enlèvement évité.  
**Ex.** Chronométrage sport (marathon, Ironman) : puce chaussure / vélo · temps live.`;

const DEMO_801_THEORIE_SUMMARY = `## À retenir — Module 801

### Codes 1-D
GTIN-13 (EU) · GTIN-8 · UPC→+0 · ISBN→978/979  
SSCC (palettes) · GS1-128 (transport + Track & Trace)  
Préfixe 76 = CH/LI · dernier chiffre = contrôle

### Codes 2-D
QR (jusqu'à ~30 % erreur · lots / DLC)  
Data Matrix (ISO · compact · industrie / Poste)

### Placement & RFID
Palettes ≥2 côtés · 45 cm du sol  
RFID = tag + lecteur · sans contact · antivol, accès, chronométrage…`;

const DEMO_801_APERCU_FULL = `## Aperçu du module 801

Ce module présente les principaux systèmes d'**identification des marchandises** : codes-barres 1-D, codes 2-D, règles de placement et RFID.

### Vous allez découvrir
1. GTIN, SSCC et GS1-128 (caisse, palettes, transport)
2. Structure ISBN / GTIN-13 et préfixes pays
3. Codes QR et Data Matrix (stockage, distribution)
4. Placement des étiquettes et principes RFID

### Source
EnterSite — Logistics by ASFL / SVBL · Bloc 800 ICT`;

const DEMO_801_APERCU_SUMMARY = `## Aperçu — Module 801
- GTIN · SSCC · GS1-128
- QR · Data Matrix
- Placement · RFID`;

const DEMO_801_OBJECTIFS_FULL = `## Objectifs du module 801

À l'issue de ce module, l'apprenti·e est capable de :

- Expliquer le rôle du **GTIN** à la caisse et la différence GTIN-8 / GTIN-13 / ISBN / UPC
- Décrire **SSCC** et **GS1-128** pour le suivi des unités de transport
- Comparer **QR** et **Data Matrix** et citer des usages logistiques
- Appliquer les règles de **placement** des codes et expliquer le principe **RFID** (tag + lecteur)`;

const DEMO_801_OBJECTIFS_SUMMARY = `## Objectifs
- GTIN · SSCC · GS1-128
- QR · Data Matrix
- Placement · RFID`;

/** Contenu Module 802 — Le transport (ICT) */
const DEMO_802_THEORIE_FULL = `## 2. Le transport

### 2.1 Surveillance du transport

#### 2.1.1 Pourquoi surveiller ?
Contrôle sans faille des **conditions de transport** (indicateurs + enregistreurs) jusqu'au client → détecter négligences et protéger la qualité.

Pendant le trajet / stockage : chocs, chutes, dépose brutale, basculement, rupture de **chaîne du froid**, vols…  
Conséquences : argent · confiance · **réputation**. L'**assurance transport** couvre le financier **si le dommage est prouvé** — pas l'image. Les indicateurs prouvent le respect (ou non) des exigences de manutention.

**Avantages :** prescriptions contrôlables (fab. → client) · heure / lieu / responsables en cas de dommage · ↓ dommages · détection de dommages **cachés** · ↓ réclamations / coûts.

**Domaines :** distribution · route / rail / air / mer · transitaires · manutentions internes.

#### 2.1.2 Indicateurs
Types et usages → détail module **307**.

**Enregistreur de données de transport :** mesure continue et incorruptible (prod. → client) · chocs, vibrations, température, humidité, pression, inclinaison · horodatage · export PC · analyses stats / graphiques.

### 2.2 Track and Trace

Suivi et **traçabilité** d'un envoi de l'expéditeur au destinataire · avant et après livraison · utile pour améliorer l'expédition et traiter les **ordres de recherche**.

| Variante | Principe |
| --- | --- |
| **Track & Trace** classique | Code-barres unique scanné aux étapes clés · statut consultable (ex. « Trié pour la livraison ») |
| **Advanced** | Saisie auto via **RFID** (moins de manuel) |

#### 2.2.1 Suivi d'un colis postal (ex. Poste Suisse)

| Étape | Contenu |
| --- | --- |
| **Avis** | E-commerce (ex. Zalando) informe la date de livraison prévue |
| **Suivi** | N° d'envoi sur post.ch · historique ~**180 jours** · services de planification tant que non livré |
| **Réception** | Livraison chez le client · historique via n° d'identification |
| **Retour** | Enregistrement en ligne · vendeur informé des articles attendus |
| **Dépôt** | Guichet / agence · si pas d'étiquette retour → code-barres collé au dépôt |
| **Quittance** | Récépissé avec n° = preuve de dépôt · base de **responsabilité** (perte / dommage) |

🔎 Track & Trace Poste : [post.ch — expédier des colis](https://www.post.ch/fr/expedier-des-colis)

#### 2.2.2 Statut d'un envoi
Lecture en **2 étapes** au scanner : d'abord le **statut**, puis le **code d'identification**.

**Envois suivables (ex. Poste) :**

| Type | Exemples |
| --- | --- |
| Express | SameDay (après-midi / soir), Lune Swiss Express |
| Colis | PostPac Priority / Economy, Encombrant, Promo, Vinolog, BLN… |
| Lettres | Recommandée (R), actes judiciaires, A Plus, Dispomail T&T… |
| International | URGENT, PRIORITY Plus, PostPac International, recommandées |

### 2.3 Planification du transport

Préparer les **tournées** pour des véhicules à pleine capacité sur un itinéraire optimal. Objectif : **optimiser les coûts** (énergie ↑, espace de chargement rare) + écologie — sans sacrifier **délais** et **qualité**.

👉 Mission : coordonner tous les aspects vers des objectifs précis.

#### 2.3.1 Principe des tournées
Itinéraire basé sur les **lieux de déchargement** · métier des organisateurs de transport.

**LIFO (Last-In, First-Out) :** ce qui se décharge en premier se charge en **dernier** → déchargement rationnel.

**Facteurs d'influence :** trafic / chantiers · volume / poids / MD · n° de points · capacité véhicules · priorités clients (urgence, créneau) · moyens de déchargement · temps de travail / repos chauffeurs.

**Mise à disposition :** si le chauffeur charge lui-même → préparer les unités par lieu de déchargement en zone dédiée.

#### 2.3.2 Planification des tournées
Regrouper et ordonner les ordres de transport · 1 tournée ≈ 1 personne + véhicule. Ex. : filiales, courrier, déchets, personnes, DEC (réseaux réguliers). Missions : détail (palettes) · vrac · personnes.

| Approche | Caractéristique |
| --- | --- |
| **Manuelle** | Petites entreprises · carte · peu d'optimisation des coûts |
| **Assistée (optimisation)** | Modèles mathématiques adaptés / **paramétrés** à l'entreprise |

**Quatre points de l'optimisation :**
1. Itinéraire optimal
2. Utilisation économique des véhicules
3. Chargement conforme et optimal
4. Transmission auto des données (**sans papier**)`;

const DEMO_802_THEORIE_SUMMARY = `## À retenir — Module 802

### Surveillance
Indicateurs + enregistreurs (chocs, T°, humidité…)  
Preuve qualité · ↓ dommages · assurance si preuve

### Track & Trace
Scan code-barres (ou RFID avancé) · statut central  
Poste : n° envoi · ~180 j · quittance = responsabilité

### Planification
Tournées · LIFO · facteurs trafic / clients / capacité  
Optimisation assistée : itinéraire · véhicules · chargement · données`;

const DEMO_802_APERCU_FULL = `## Aperçu du module 802

Ce module traite du **transport** côté ICT : surveillance des conditions, Track & Trace et planification / optimisation des tournées.

### Vous allez découvrir
1. Indicateurs et enregistreurs de transport (lien module 307)
2. Track & Trace classique et avancé (RFID) · parcours colis postal
3. Planification des tournées (LIFO, facteurs) et optimisation assistée

### Source
EnterSite — Logistics by ASFL / SVBL · Bloc 800 ICT`;

const DEMO_802_APERCU_SUMMARY = `## Aperçu — Module 802
- Surveillance · enregistreurs
- Track & Trace
- Tournées · optimisation`;

const DEMO_802_OBJECTIFS_FULL = `## Objectifs du module 802

À l'issue de ce module, l'apprenti·e est capable de :

- Expliquer pourquoi surveiller le transport et le rôle des **indicateurs / enregistreurs**
- Décrire le **Track & Trace** (classique vs RFID) et le suivi d'un colis (statut, quittance)
- Appliquer le principe **LIFO** et citer les facteurs de planification des tournées
- Distinguer planification **manuelle** et **optimisation** assistée (4 axes)`;

const DEMO_802_OBJECTIFS_SUMMARY = `## Objectifs
- Surveillance · enregistreurs
- Track & Trace · statut
- LIFO · optimisation tournées`;

/** Contenu Module 803 — Logiciel d'exploitation */
const DEMO_803_THEORIE_FULL = `## 3. Logiciel d'exploitation

### 3.1 ERP (Enterprise Resource Planning)

Application **complexe** : plusieurs logiciels / systèmes qui communiquent pour soutenir la **planification des ressources** de l'entreprise. Souvent divisé en **modules** combinables selon les besoins et avec des capacités variables.

### 3.2 CRM (Customer Relationship Management)

Orientation de l'entreprise vers ses **clients** · objectifs : **acquisition** et **fidélisation**. Collecte des données pertinentes → marketing relationnel aligné sur les besoins.

| Sens du CRM | Contenu |
| --- | --- |
| **Logiciel** | Base techno pour saisir, analyser, présenter les interactions client |
| **Stratégie** | Orientations des processus vers une expérience client optimale |
| **Processus** | Procédures techno + stratégiques + systématiques d'orientation client |

### 3.3 Vente / Marketing

**Vente (sales) :** identification des groupes cibles · approche / acquisition · vente jusqu'à la livraison · de plus en plus le **suivi** post-vente (nouvelles ventes).

**Marketing :** quels produits / services le marché souhaite · produire ce que les clients achètent (quantité suffisante) · comment influencer l'achat de nouveautés.

### 3.4 Ressources humaines (RH)

Objectifs : efficacité / productivité · sécurité des postes · capacité de travail et motivation · recrutement / fidélisation à coût raisonnable · climat / culture de direction · alignement sur l'objectif entreprise.

### 3.5 Planification et contrôle de la production (PCP)

Frontière gestion d'entreprise / informatique. Planifier, mettre en place et surveiller la production en **quantité** et **délais**. Couvre aussi l'amont (approvisionnement) et l'aval (distribution) · **gestion des matériaux** centrale.

#### 3.5.1 Tâches
Planification du travail / temps de passage · gestion du matériel (approvisionnement + stockage) · type et organisation de fabrication · expédition (distribution).

**Durée de fabrication** = temps pour passer toutes les étapes · base du taux d'exploitation des machines. Recalcul quotidien (ou +) : pannes / manque de matériel impactent tout.

**Leviers d'optimisation :** système PCP · ↓ taille des lots · ↓ temps d'adaptation · ↓ transport / attentes / stockage · ↓ stocks.

Stocks utiles pour : capacité de livraison · délais de réappro · fluctuations demande · séries économiques. Lien étroit : ↓ temps de passage ↔ ↓ stocks.

### 3.6 Management de projet

Gérer un projet **quelle que soit sa taille** (du déménagement au grand projet industriel) : objectifs · stratégie · organisation / coordination des facteurs de production · gestion des collaborateurs.

### 3.7 Management qualité

Mesures pour une qualité **constante** des produits / services. Critique en alimentaire / pharma (santé) · aéronautique : chaque pièce avec **certificat** d'origine / matériaux (risque de falsification). Contrôle souvent par spécialistes (poste CQ / labo) · crucial si la prod. dépend de pièces achetées.

### 3.8 Comptabilité financière (CoFi)

Déterminer le **résultat global** · documenter actifs et variations de stocks · bénéfice / perte de la période · utile à l'entreprise, actionnaires, créanciers · **compte de résultat** + **bilan**.

#### 3.8.1 Comptabilité
| Domaine | Contenu |
| --- | --- |
| **Créanciers** | Obligations de paiement · factures **entrantes** (fournisseur) |
| **Débiteurs** | Créances de l'entreprise · factures **sortantes** (client) |

#### 3.8.2 Controlling
Contrôle de gestion : contrôler les opérations · analyses → rentabilité, bénéfices, valeur.

### 3.9 Gestion de matériel (GM)

Gestion, planification et contrôle des **mouvements de matériel** (marchandises / biens). En production : approvisionner la fab. · lien étroit avec la **PCP**. International : « Materials Management ».

#### 3.9.1 Achat
Activités opérationnelles et stratégiques d'**acquisition** (matériaux, marchandises, moyens d'exploitation, services) — module **301**. Plus étroit que **approvisionnement** (qui inclut aussi la logistique d'appro). Objectif : lieu / délai / quantité / qualité + rapport qualité-prix. Inclut souvent la **gestion des relations fournisseurs**.

#### 3.9.2 E-Commerce (WebEDI)
Échange numérique fournisseur ↔ acheteur (radio simple → IA). Internet, BDD, médias sociaux, banque en ligne, chatbots… → distances spatiales surmontées · parfois sans contact physique · évite le magasin / conseil face-à-face.`;

const DEMO_803_THEORIE_SUMMARY = `## À retenir — Module 803

### Socle
ERP = modules ressources · CRM = client (logiciel / stratégie / processus)

### Domaines métier
Vente / marketing · RH · PCP (délais, lots, stocks)  
Projet · qualité · CoFi (créanciers / débiteurs + controlling)

### Matériel
GM + achat (301) · E-Commerce / WebEDI`;

const DEMO_803_APERCU_FULL = `## Aperçu du module 803

Ce module présente les principaux **logiciels / domaines d'exploitation** d'une entreprise : ERP et modules associés (CRM, PCP, CoFi, GM…).

### Vous allez découvrir
1. ERP et CRM (logiciel, stratégie, processus)
2. Vente, marketing, RH, PCP et management projet / qualité
3. Comptabilité financière, controlling et gestion de matériel (achat, e-commerce)

### Source
EnterSite — Logistics by ASFL / SVBL · Bloc 800 ICT`;

const DEMO_803_APERCU_SUMMARY = `## Aperçu — Module 803
- ERP · CRM
- PCP · CoFi · qualité
- GM · achat · e-commerce`;

const DEMO_803_OBJECTIFS_FULL = `## Objectifs du module 803

À l'issue de ce module, l'apprenti·e est capable de :

- Expliquer le rôle d'un **ERP** et des modules associés
- Distinguer CRM logiciel / stratégie / processus et situer vente, marketing, RH
- Décrire les tâches de la **PCP** et les leviers de réduction des temps / stocks
- Situer **CoFi** (créanciers / débiteurs), controlling, **GM** et e-commerce dans le système d'info`;

const DEMO_803_OBJECTIFS_SUMMARY = `## Objectifs
- ERP · CRM
- PCP · qualité · projet
- CoFi · GM · e-commerce`;

/** Contenu Module 804 — Fondation Microsoft 365 / Bases & droit d'auteur */
const DEMO_804_THEORIE_FULL = `## 4. Bases de l'informatique et droit d'auteur

### 0.1 Utilisation — ENT VS Se connecter

Première connexion à l'environnement numérique de travail Valais ([edu.vs.ch](https://edu.vs.ch)).

#### Connexion

1. Ouvrir [https://edu.vs.ch](https://edu.vs.ch)
2. Cliquer sur **Connexion**

![Page d'accueil edu.vs.ch — Connexion](/assets/curriculum/804/ent-vs-accueil.png)

3. Optionnel : changer la langue via **FR**
4. Saisir le nom d'utilisateur et le mot de passe reçus en classe
5. Cliquer sur **Connexion**

![Formulaire de connexion ICT-VS](/assets/curriculum/804/ent-vs-connexion.png)

#### Première connexion

Lors de la première connexion, le système demande de changer le mot de passe.

5. Saisir à nouveau le mot de passe reçu en classe (**mot de passe actuel**)
6. Saisir un **nouveau mot de passe** en respectant les règles :

- Entre 10 et 50 caractères
- Majuscule, minuscule, chiffre et caractère spécial
- Ne doit pas contenir le prénom / nom
- Doit être différent des 10 derniers mots de passe

7. Confirmer le nouveau mot de passe
8. Cliquer sur **Modifier mon mot de passe**

![Changer le mot de passe](/assets/curriculum/804/ent-vs-mot-de-passe.png)

> Vous êtes maintenant connecté sur votre environnement numérique de travail.

![Tableau de bord ENT VS](/assets/curriculum/804/ent-vs-tableau-de-bord.png)

### 0.2 Utilisation — TEAMS

#### Lancer TEAMS depuis l'ENT

1. Cliquer sur **Accès** (carte Teams)
2. Saisir l'identifiant Teams — id ENT (\`prenom.nom@edu.vs.ch\`)
3. Cliquer sur **Suivant**
4. Cliquer sur **Utilisez l'application Web à la place**

![Mes services — Accès Teams](/assets/curriculum/804/teams-acces.png)

![Connexion Microsoft — identifiant](/assets/curriculum/804/teams-identifiant.png)

![Choisir l'application Web Teams](/assets/curriculum/804/teams-web.png)

> Vous pouvez aussi installer le client de bureau ; l'application Web suffit pour démarrer.

#### La barre latérale

- **Activité** — notifications

![Activité](/assets/curriculum/804/teams-icone-activite.png)

- **Conversation** — conversations

![Conversation](/assets/curriculum/804/teams-icone-conversation.png)

- **Équipes** — classe

![Équipes](/assets/curriculum/804/teams-icone-equipes.png)

- **Affectations** — devoirs

![Affectations](/assets/curriculum/804/teams-icone-affectations.png)

- **Calendrier** — calendrier

![Calendrier](/assets/curriculum/804/teams-icone-calendrier.png)

#### Les conversations et messages

1. Chercher un élève ou un professeur
2. Taper le message

![Nouvelle conversation Teams](/assets/curriculum/804/teams-conversations.png)

#### Votre classe

1. Sélectionner votre classe

![Sélection de la classe](/assets/curriculum/804/teams-classe.png)

#### Les canaux (branches)

1. Consulter les branches / canaux disponibles
2. Pour un canal masqué : **…** → **Afficher**

![Canaux de la classe](/assets/curriculum/804/teams-canaux.png)

![Afficher un canal masqué](/assets/curriculum/804/teams-canaux-masques.png)

#### Les ressources disponibles

1. Ouvrir un canal → onglet **Fichiers** → naviguer dans les dossiers

![Fichiers du canal](/assets/curriculum/804/teams-fichiers.png)

#### Téléchargements

1. Sur un document → **…** → **Télécharger**

![Menu — Télécharger un fichier](/assets/curriculum/804/teams-telecharger.png)

#### Les devoirs

1. Ouvrir **Affectations**
2. Voir les échéances
3. Sélectionner un devoir
4. Télécharger les documents de référence / faire le travail
5. **Joindre** (PC ou OneDrive)
6. **Ouvrir** le fichier choisi
7. Cliquer sur **Remettre**

![Liste des affectations](/assets/curriculum/804/teams-affectations.png)

![Détail du devoir — documents et Remettre](/assets/curriculum/804/teams-devoir.png)

![Joindre un fichier](/assets/curriculum/804/teams-joindre.png)

![Boîte de dialogue Ouvrir](/assets/curriculum/804/teams-remettre.png)

### 0.3 Utilisation — Installation d'Office 365

1. Aller dans votre espace ENT
2. Sélectionner l'application **Office 365** → **Accès**
3. Cliquer sur **Installer Office**
4. Le téléchargement commence dans le navigateur (\`OfficeSetup.exe\`)
5. Ouvrir le dossier du fichier téléchargé (par défaut **Téléchargements**)
6. Accepter et lancer l'installation
7. Attendre la fin de l'installation
8. Lancer Office 365 depuis le bureau (recherche Windows : « 365 »)

![ENT — Accès Office 365](/assets/curriculum/804/office-acces.png)

![Installer Office](/assets/curriculum/804/office-installer.png)

![Téléchargement OfficeSetup.exe](/assets/curriculum/804/office-telechargement.png)

![Dossier Téléchargements](/assets/curriculum/804/office-dossier-telechargements.png)

![Progression de l'installation](/assets/curriculum/804/office-progression.png)

![Tout est prêt !](/assets/curriculum/804/office-pret.png)

![Recherche Windows — 365](/assets/curriculum/804/office-recherche-windows.png)

![Portail Microsoft 365 — Installer des applications](/assets/curriculum/804/office-portail.png)

### 0.4 Utilisation — OneDrive

#### Se connecter à OneDrive

1. Aller dans l'espace ENT
2. Sélectionner **OneDrive** → **Accès**
3. Saisir l'adresse e-mail complète (\`prenom.nom@edu.vs.ch\`)
4. Cliquer sur **Suivant**
5. Fenêtre **Rester connecté ?** — sur un PC partagé, mieux vaut **ne pas** rester connecté

![ENT — Accès OneDrive](/assets/curriculum/804/onedrive-acces.png)

![Connexion Microsoft — e-mail](/assets/curriculum/804/onedrive-connexion.png)

![Rester connecté ?](/assets/curriculum/804/onedrive-rester-connecte.png)

![OneDrive — Mes fichiers](/assets/curriculum/804/onedrive-mes-fichiers.png)

#### Créer un nouveau dossier

1. **+ Nouveau**
2. **Dossier**
3. Saisir le nom
4. **Créer**
5. Trois points verticaux → menu d'actions

![Menu + Nouveau — Dossier](/assets/curriculum/804/onedrive-nouveau-dossier.png)

![Créer un dossier](/assets/curriculum/804/onedrive-creer-dossier.png)

![Dossier créé — Afficher les actions](/assets/curriculum/804/onedrive-actions.png)

#### Insérer un fichier

1. **Charger**
2. **Fichiers** (ou glisser-déposer)
3. Sélectionner le fichier
4. **Ouvrir** (Ctrl pour une sélection multiple)

![Charger → Fichiers](/assets/curriculum/804/onedrive-charger.png)

![Boîte de dialogue Ouvrir](/assets/curriculum/804/onedrive-ouvrir.png)

#### Restaurer un fichier

Les éléments supprimés vont dans la **Corbeille** ; on peut les restaurer.

1. Ouvrir **Corbeille**
2. Sélectionner l'élément
3. Cliquer sur **Restaurer**

![Corbeille — Restaurer](/assets/curriculum/804/onedrive-corbeille.png)

### 0.5 Utilisation — Outlook

#### Connexion à Outlook

1. Aller dans l'espace ENT
2. Sélectionner **Outlook** → **Accès**
3. Saisir l'adresse \`prenom.nom@edu.vs.ch\`
4. Cliquer sur **Suivant**

![ENT — Accès Outlook](/assets/curriculum/804/outlook-acces.png)

![Connexion Outlook — e-mail](/assets/curriculum/804/outlook-connexion.png)

#### Réception de nouveaux messages

Vous êtes sur la page d'accueil de la boîte aux lettres. Les nouveaux messages arrivent automatiquement et restent dans **Boîte de réception**.

![Boîte de réception Outlook](/assets/curriculum/804/outlook-boite.png)

#### Répondre à un message

1. Cliquer sur le résumé du message
2. Le message complet s'affiche à droite
3. Cinq symboles en haut à droite
4. Flèche gauche = répondre à l'expéditeur
5. Double flèche gauche = répondre à tous
6. Flèche droite = transférer

![Icônes Répondre / Répondre à tous / Transférer](/assets/curriculum/804/outlook-repondre.png)

#### Écrire un courriel

1. Les champs **De** et **À** sont à remplir dans l'en-tête
2. Rédiger le message dans l'éditeur
3. Cliquer sur **Envoyer**
4. Vérifier l'envoi via **Éléments envoyés**

![Rédaction d'un courriel — Envoyer](/assets/curriculum/804/outlook-ecrire.png)

![Éléments envoyés](/assets/curriculum/804/outlook-envoyes.png)

### 4.1 Démarrage et arrêt de l'ordinateur

Après mise sous tension : **booting** (microprogramme) → vérif. périphériques → chargement du système d'exploitation en mémoire → fenêtre de connexion / bureau.

👉 Attendre la **fin du démarrage** avant d'insérer USB / SSD avec données personnelles.

#### 4.1.1 Connexion
En entreprise / école : environnement **réseau / domaine** · compte utilisateur + données partagées. Auth : mot de passe, PIN, code image, empreinte, iris…

- Sécurise les **droits d'accès**
- Droits souvent **limités** · seuls les **admins** ont des droits illimités
- Saisir le nom d'utilisateur + mot de passe attribués par l'admin

### 4.2 L'interface du bureau

Après Enter : le **bureau** commande vos actions.

#### 4.2.1 Corbeille
Icône différente si vide / pleine. Double-clic pour ouvrir · **Restaurer** pour récupérer · **Delete** pour supprimer définitivement depuis la corbeille.

#### 4.2.2 Accès dossiers / fichiers
Double-clic sur l'icône du dossier.

#### 4.2.3 Arrière-plan
Clic droit Bureau → **Personnaliser** → **Arrière-plan** :

| Option | Effet |
| --- | --- |
| Remplir | Rogne pour occuper tout l'espace |
| Ajuster | Agrandit en gardant les proportions |
| Étendre | Idem, proportions conservées |
| Étirer | Agrandit à la taille du bureau |
| Vignette | Répète l'image |
| Centrer | Cadre au centre |

#### 4.2.4 Raccourcis
Menu contextuel fichier/dossier/app → Afficher plus d'options → **Envoyer vers** → Bureau (créer un raccourci). Petite **flèche** en bas à gauche = raccourci.

#### 4.2.5–4.2.6 Menu démarrer & Recherche
Bouton Démarrer → liste des apps. Bouton **Recherche** (barre des tâches) : fichiers, apps, sites web.

#### 4.2.7 Explorateur de fichiers
Accès via icône barre des tâches. Windows 11 crée un **dossier personnel** (Documents, Téléchargements, Images, Musique, Vidéos, OneDrive, Bureau…). Stocké sous \`C:\\Utilisateurs\\…\` · pas d'accès par défaut aux dossiers des autres · dossier **Public** pour partager sur la machine.

#### 4.2.8–4.2.12 Barre des tâches & outils
- **Épingler** une app : menu contextuel → Épingler à la barre des tâches
- **Capture** : app Capture d'écran ou **Win+Shift+S**
- Paramètres barre des tâches via menu contextuel
- **Clavier tactile** (environnement tactile) via paramètres barre des tâches
- Langue clavier, Internet/Wi‑Fi, haut-parleur, batterie, date/heure : zone de notification (bas droite)

### 4.3 Nombres et dates (pays)

Souvent via **Panneau de configuration** (compte admin) · formats régionaux : nombres, symbole monétaire, heure, date.

### 4.4 Créer / nommer un dossier

Explorateur → dossier cible (souvent Documents) → **Nouveau → Dossier** (ou **Ctrl+Shift+N**) → nommer → Enter. Renommer par clic · sous-dossiers idem · **Ctrl+C / Ctrl+V** pour copier-coller.

### 4.5 Sessions

Plusieurs utilisateurs sur la même machine sans tout fermer : ouvrir / activer une autre session.

| Action | Effet |
| --- | --- |
| **Se déconnecter** | Ferme la session + apps/fichiers (enregistrer d'abord) |
| Choisir un autre user | Nouvelle session · la précédente peut rester en **attente** |

### 4.6 Arrêt / veille / redémarrage

Démarrer → **Marche/Arrêt**. **Veille** : peu d'énergie · apps ouvertes · reprise rapide.

### 4.7 Application bloquée

**Ctrl+Alt+Suppr** → Gestionnaire des tâches → sélectionner l'app → **Fin de tâche** (parfois plusieurs fois).

### 4.8 Droit d'auteur et licences

#### 4.8.1 Types de logiciels / usages

| Type | Idée clé |
| --- | --- |
| **Bêta** | Préversion · bogues possibles · aussi sous droit d'auteur |
| **Freeware** | Gratuit mais sous copyright |
| **Libre / open source** | Code source publié · copier, modifier, redistribuer (ex. Linux) |
| **Shareware** | Essai gratuit · puis paiement ou fonctions bloquées |
| **Copie pirate** | Usage sans licence · violation du droit d'auteur |

**Partage de fichiers :** upload **et** download relevant du droit d'auteur. Usage privé depuis sources légales (et en pratique aussi illégales pour le download/stream) souvent toléré en CH · **upload** d'œuvres protégées **interdit** sauf si vous détenez les droits / œuvre libre.

#### 4.8.2 Copyright (Suisse)
Régi par la loi fédérale + accords internationaux. **Copies privées** autorisées : sphère perso / proches · enseignants en cours · copies internes entreprises / admins / instituts.

#### 4.8.3 Licence de logiciel
On n'« achète » pas le logiciel : on acquiert une **licence** (CLUF / EULA à accepter). Souvent : 2ᵉ copie sur appareil mobile pour l'utilisateur principal. **ID produit** = authenticité (ex. Office : Fichier → Compte → À propos).

#### 4.8.4 Plagiat
Vol de propriété intellectuelle · punissable. Poursuites difficiles (Internet, lois variables). En CH : surtout distribution depuis un PC en Suisse · streaming / download souvent peu poursuivis. Suivre l'évolution légale (ex. actions BSA).`;

const DEMO_804_THEORIE_SUMMARY = `## À retenir — Module 804

### Utilisation ENT / M365
ENT VS : edu.vs.ch → Connexion → 1ʳᵉ fois changer MDP  
Teams : Accès → Web · barre latérale · canaux · devoirs  
Office 365 : Installer Office · OfficeSetup · recherche « 365 »  
OneDrive : Accès · dossier · charger · corbeille  
Outlook : Accès · boîte · répondre · envoyer

### Windows
Boot → connexion domaine · bureau · corbeille · raccourcis  
Explorateur · dossiers perso · sessions · veille / arrêt  
Ctrl+Alt+Suppr si app bloquée · Win+Shift+S capture

### Droit d'auteur
Licence ≠ propriété · CLUF · freeware / libre / shareware / pirate  
Copies privées OK · upload d'œuvres protégées non  
Plagiat = infraction · CH : situation nuancée`;

const DEMO_804_APERCU_FULL = `## Aperçu du module 804

Ce module pose les **bases Windows** (bureau, fichiers, sessions), guide l'**utilisation ENT / Microsoft 365** (Teams, Office, OneDrive, Outlook) et introduit le **droit d'auteur** / licences — fondation avant Word, Excel, etc.

### Vous allez découvrir
1. Connexion ENT VS, Teams, installation Office 365, OneDrive et Outlook
2. Démarrage, connexion et interface du bureau Windows 11
3. Fichiers, dossiers, sessions, arrêt / veille, Gestionnaire des tâches
4. Formats régionaux et outils de la barre des tâches
5. Licences, copyright suisse, partage de fichiers et plagiat

### Source
EnterSite — Logistics by ASFL / SVBL · Bloc 800 ICT`;

const DEMO_804_APERCU_SUMMARY = `## Aperçu — Module 804
- ENT · Teams · Office · OneDrive · Outlook
- Bureau Windows · fichiers · sessions
- Arrêt / veille · panne
- Licences · copyright · plagiat`;

const DEMO_804_OBJECTIFS_FULL = `## Objectifs du module 804

À l'issue de ce module, l'apprenti·e est capable de :

- Se connecter à l'**ENT VS** et utiliser **Teams**, **OneDrive**, **Outlook** et installer **Office 365**
- Démarrer / se connecter / utiliser le **bureau** Windows (corbeille, raccourcis, explorateur)
- Créer des dossiers, gérer les **sessions**, arrêter / mettre en veille et quitter une app bloquée
- Paramétrer formats régionaux et outils de la barre des tâches
- Distinguer types de licences / logiciels et appliquer les règles de base du **droit d'auteur** (CH)`;

const DEMO_804_OBJECTIFS_SUMMARY = `## Objectifs
- ENT · Teams · Office · OneDrive · Outlook
- Bureau · fichiers · sessions
- Veille / panne
- Licences · copyright`;

/** Contenu Module 805 — Word Microsoft 365 */
const DEMO_805_THEORIE_FULL = `## 5. Word Microsoft 365

Le traitement de texte est central en pro et en privé (lettres simples → documentations illustrées) · compétence de base dans presque toutes les professions.

### 5.1 L'écran de travail

Interface Word : ruban (onglets Accueil, Insertion, Références…), zone de texte, règle, barre d'état.

### 5.2 Écrire un texte

#### 5.2.1 Texte courant
- Activer **Afficher tout** (**Ctrl+Shift+8** / bouton ¶) pour voir les caractères non imprimables
- Saisir « au kilomètre » : Word gère les retours de ligne · **Enter** = nouveau **paragraphe** · **Shift+Enter** = saut de ligne dans le même paragraphe · **Shift** = majuscule
- **Delete** = caractère suivant · **Retour arrière** = précédent · double-clic + Delete = mot · triple-clic = paragraphe
- **Modifier la casse** (onglet Accueil) · flèches **Annuler / Rétablir**
- Saut de page : **Ctrl+Enter**

#### 5.2.2 Date et heure système
Insertion → Date et heure → choisir format / langue · option **Mettre à jour automatiquement** si besoin → OK.

#### 5.2.3 Symboles
Insertion → **Symbole** (ou Autres symboles). Polices utiles : Texte normal · Symbol (grec / maths) · Webdings / Wingdings (graphiques).

### 5.3 Paragraphe

Curseur n'importe où dans le paragraphe · groupe **Paragraphe** (Accueil) : alignement · interligne · espacement · retraits.

### 5.4 Tabulateurs

Taquet + touche **Tab** pour aligner précisément.

| Type | Effet |
| --- | --- |
| Gauche | Alignement à gauche |
| Centré | Centré sur le taquet |
| Droite | Alignement à droite |
| Décimal | Alignement sur la virgule |

Clics sur le bouton à gauche de la **règle** pour choisir le type · clic sur la règle pour poser · ou boîte **Tabulation** (groupe Paragraphe).

### 5.5 Bordure et trame

Sélectionner le(s) paragraphe(s) **avec** la marque ¶ · Accueil → Bordure et trame : Encadrement / Ombre · Style, Couleur, Largeur · **trame** = fond coloré.

### 5.6 Puces et numérotation

Accueil → Puces ou Numérotation · **Aucune** dans la bibliothèque pour supprimer.

#### 5.6.1 Liste à plusieurs niveaux
Accueil → Liste à plusieurs niveaux · changer de niveau avec **Augmenter / Diminuer le retrait** (curseur entre n° et texte). Pour une future table des matières : styles **Titre 1, Titre 2…**

### 5.7 Styles de présentation

Formats de caractères / paragraphes **mémorisés** · réutilisables. Accueil → galerie **Styles**. Styles **Titre** indispensables pour la table des matières.

### 5.8 Table des matières

1. Appliquer Titre 1, Titre 2… aux titres
2. Positionner le curseur
3. **Références** → Table des matières → modèle prédéfini

#### 5.8.1 Mise à jour
Clic dans la table → bouton **Mettre à jour la table** (après modifications du texte).

### 5.9 En-tête et pied de page

Textes dans les marges haut / bas · souvent sur **toutes** les pages.

#### 5.9.1 Prédéfini
Insertion → En-tête / Pied de page → modèle → compléter si besoin.

#### 5.9.2 Première page différente
Modifier l'en-tête/pied → cocher **Première page différente** (masque E/P sur la page 1).

#### 5.9.3 Fermer
Bouton Fermer ou double-clic hors de la zone E/P.

### 5.10 Numéroter les pages

Insertion → Numéro de page → Haut / Bas de page · styles prédéfinis.

### 5.11 Imprimer

**Fichier → Imprimer** : aperçu à droite · choisir imprimante et paramètres · quitter via la flèche haut gauche.

### 5.12 Tableaux

Un **tableau** organise les informations en **grille** (lignes et colonnes). Utile pour comparer des données, un planning, un formulaire, un devis, etc.

#### 5.12.1 Création d'un tableau
1. Onglet **Insertion**
2. Cliquer **Tableau**
3. Sélectionner la taille (ex. **4×4**) ou **Insérer un tableau…**

![Insertion → Tableau 4×4](/assets/curriculum/805/tableau-insertion.png)

#### 5.12.2 Modification du tableau
Sélectionner le tableau ou placer le curseur dans une cellule → les onglets **Création** et **Disposition** apparaissent à droite du ruban.

![Onglets Création et Disposition](/assets/curriculum/805/tableau-creation-disposition.png)

#### 5.12.3 Changer la taille
1. Sélectionner une colonne, puis glisser les marques sur la **règle**
2. Ou utiliser l'onglet **Disposition**
3. Modifier hauteur / largeur dans **Taille de la cellule**

![Marques de colonnes sur la règle](/assets/curriculum/805/tableau-regle-colonnes.png)

![Disposition — Taille de la cellule](/assets/curriculum/805/tableau-taille-cellule.png)

#### 5.12.4 Ajouter ou supprimer des lignes / colonnes
1. Sélectionner la ligne ou la colonne
2. **Disposition** → **Supprimer**
3. Ou **Insérer** une ligne / colonne (au-dessus, en dessous, à gauche, à droite)

![Lignes et colonnes — Insérer / Supprimer](/assets/curriculum/805/tableau-lignes-colonnes.png)

#### 5.12.5 Aligner le texte dans le tableau
1. Sélectionner la ou les cellule(s)
2. **Disposition** → l'alignement désiré (**9** positions : coin supérieur gauche … coin inférieur droit)

![Neuf icônes d'alignement](/assets/curriculum/805/tableau-alignement-icones.png)

![Exemple d'alignements dans un tableau 3×3](/assets/curriculum/805/tableau-alignement-exemple.png)

#### 5.12.6 Fusionner et fractionner des cellules
1. Sélectionner les cellules (ou lignes / colonnes)
2. **Disposition** → **Fusionner**
3. Ou **Fractionner** pour découper une cellule

![Fusionner / Fractionner](/assets/curriculum/805/tableau-fusionner-fractionner.png)

#### 5.12.7 Encadrer des cellules
1. Sélectionner les lignes / colonnes (ou cellules)
2. Onglet **Création**
3. Groupe **Bordures** pour ajouter ou enlever des traits

![Création — groupe Bordures](/assets/curriculum/805/tableau-bordures.png)

### 5.13 Styles

#### 5.13.1 Un style, c'est quoi ?
Un **style** est un ensemble de mises en forme enregistrées — typiquement une **police**, une **taille** et un **alignement** de paragraphe. À l'ouverture de Word, le modèle **Normal** est sélectionné par défaut. Ce modèle contient des styles de **titres** et plusieurs autres styles prêts à l'emploi.

**Types de styles :**
- **a.** Style de **caractère** — mise en forme d'un mot ou d'une sélection (police, gras, couleur…)
- **b.** Style de **paragraphe** — mise en forme de tout le paragraphe (alignement, interligne, retraits…)
- **c.** Style **lié** — combine caractère et paragraphe
- **d.** Style de **liste** — puces / numérotation
- **e.** Style de **tableau** — apparence globale d'un tableau

#### 5.13.2 Utilité des styles
En **modifiant un style**, **toutes les occurrences** de ce style dans le document sont mises à jour automatiquement. Gain de temps, cohérence visuelle, et base indispensable pour une **table des matières**.

#### 5.13.3 Appliquer un style
1. Sélectionner le texte (ou placer le curseur dans le paragraphe)
2. Onglet **Accueil** → groupe **Styles**
3. Cliquer le style voulu dans la **galerie** (aperçu au survol)

![Galerie Styles — Accueil](/assets/curriculum/805/styles-galerie.png)

#### 5.13.4 Exemple

![Label Exemple](/assets/curriculum/805/styles-label-exemple.png)

Document annoté (**Le Petit Rapporteur**) : styles marqués en rouge — **Titre 1**, **Titre 2**, **Normal**, **Numéros**.

![Exemple annoté — Titre 1 / Titre 2 / Normal / Numéros](/assets/curriculum/805/styles-exemple-annote.png)

#### 5.13.5 Créer un style
1. **a.** Mettre en forme le texte modèle (police, taille, alignement…)
2. **b.** Ouvrir le menu de la galerie **Styles** (flèche vers le bas) → **Créer un style**

![Menu — Créer un style](/assets/curriculum/805/styles-menu-creer.png)

3. **c.** Dans le dialogue **Créer un style à partir de la mise en forme**, saisir un **Nom** (ex. **EXEMPLE**) → éventuellement **Modifier…**

![Dialogue — Nom du style](/assets/curriculum/805/styles-dialogue-creer-nom.png)

4. **d.** Sous **Propriétés**, vérifier notamment :
   - **Type de style** : **Paragraphe**
   - **Style basé sur** / **Style du paragraphe suivant**

![Propriétés — type Paragraphe](/assets/curriculum/805/styles-proprietes-paragraphe.png)

5. **e.** Sous **Mise en forme**, ajuster police, taille, gras/italique, alignement, interligne… Consulter l'**aperçu**.

![Mise en forme du style](/assets/curriculum/805/styles-mise-en-forme.png)

6. **f.** Bouton **Format** pour les options avancées (Police, Paragraphe, Tabulations, Bordure, Numérotation…)

![Menu Format](/assets/curriculum/805/styles-menu-format.png)

7. **g.** Cocher **Ajouter à la galerie de styles** si besoin → **OK**

#### 5.13.6 Modifier un style

**Méthode 1 — Mettre à jour pour correspondre à la sélection**
1. Modifier la mise en forme d'un texte déjà stylé
2. Clic droit sur le style dans la galerie → **Mettre à jour … pour correspondre à la sélection**

**Méthode 2 — Modifier… via Format**
1. Clic droit sur le style → **Modifier…**
2. Ajuster les options ou ouvrir **Format** (Police, Paragraphe…) → **OK**

![Clic droit — Mettre à jour / Modifier](/assets/curriculum/805/styles-clic-droit-modifier.png)

### 5.14 Table des matières

#### 5.14.1 Créer une table des matières
Pour créer une table des matières, vous devez appliquer des styles de « Titres »
- **a.** Par exemple : **Titre 1**, **Titre 2**, **Titre 3**, etc. au texte que vous souhaitez inclure dans la table des matières.

![Galerie Styles — Titre 1 sélectionné](/assets/curriculum/805/tdm-styles-titre1.png)

Microsoft Word recherche ces titres, puis insère la table des matières dans votre document.
Lorsque vous créez une table des matières de cette façon, vous pouvez la mettre rapidement à jour lorsque vous apportez des modifications à votre document.

#### 5.14.2 Créer une table des matières à partir de la galerie
Une fois les entrées marquées avec les « Titres 1, Titre 2, etc. », vous pouvez générer la table des matières :
- **a.** Cliquer à l'endroit où vous souhaitez insérer la table des matières (en général au début du document)
- **b.** Sous l'onglet **Références**
- **c.** Cliquer sur **Table des matières**
- **d.** Puis sur le style de table des matières souhaité

![Références — galerie Table des matières](/assets/curriculum/805/tdm-galerie.png)

- **e.** Cliquer sur **Table des matières personnalisée**, si vous souhaitez spécifier davantage d'options (par exemple le nombre de niveaux de titres à afficher)

#### 5.14.3 Créer une table des matières personnalisée

![Dialogue — Table des matières personnalisée](/assets/curriculum/805/tdm-personnalisee.png)

Dans la boîte de dialogue **Table des matières**, vous pouvez effectuer l'une des opérations suivantes :
- **a.** Saisir le nombre de niveaux dans **Afficher les niveaux**.
- **b.** Choisir l'apparence globale dans le **Format**.
- **c.** Choisir le type de ligne affichée entre le texte d'entrée et le numéro de page, dans **Caractères de suite**.
- **d.** Les zones **Aperçu avant impression** et **Aperçu Web** vous donnent une idée de ce à quoi ressemblera votre table des matières.

#### 5.14.4 Mettre à jour la table des matières
Si vous avez ajouté ou supprimé des titres ou d'autres entrées de table des matières dans votre document, vous pouvez mettre à jour la table des matières rapidement.
- **a.** Cliquer sur **Mettre à jour la table**, dans l'onglet **Références**

![Groupe Table des matières — Mettre à jour la table](/assets/curriculum/805/tdm-mettre-a-jour.png)

- **b.** Cliquer sur **Mettre à jour les numéros de page uniquement** ou **Mettre à jour toute la table**.

![Dialogue — Mettre à jour la table des matières](/assets/curriculum/805/tdm-dialogue-mise-a-jour.png)

#### 5.14.5 Supprimer une table des matières
- **a.** Cliquez sur **Table des matières**, puis sur **Supprimer la table des matières**.

![Menu — Supprimer la table des matières](/assets/curriculum/805/tdm-supprimer.png)

### 5.15 Référencements — Référencer c'est quoi ?

Quand on écrit un document, on peut avoir besoin de citer des sources, d'ajouter des explications ou d'insérer des images avec des légendes. Pour faire ça proprement, on utilise les outils de **références** dans Word.

Voici les principaux outils et à quoi ils servent :
- **a.** Notes de bas de page ou de fin
- **b.** Bibliographie et citations
- **c.** Légendes et table des illustrations

Les fonctionnalités se trouvent dans l'onglet **Références**.

![Onglet Références — notes, citations, légendes](/assets/curriculum/805/references-onglet.png)

#### 5.15.1 Note de bas de page

Une **note de bas de page** permet d'ajouter une petite explication ou une source en bas de la page. Par exemple, quand on parle d'un mot compliqué, on peut l'expliquer dans une note de bas de page.

**Comment faire ?**
- **a.** Cliquer à l'endroit du texte où on veut mettre la note
- **b.** Aller dans l'onglet **Références**
- **c.** Cliquer sur **Insérer une note de bas de page**

![Groupe Notes de bas de page](/assets/curriculum/805/note-bas-page-ruban.png)

- **d.** Word ajoute un petit chiffre (appel de note) à côté du texte
- **e.** Écrire ensuite l'explication en bas de la page

![Exemple de note de bas de page](/assets/curriculum/805/note-bas-page-texte.png)

La **note de fin** est comme une note de bas de page, mais elle s'affiche à la **toute fin** du document. Elle est utile si on veut regrouper toutes les notes au même endroit.

#### 5.15.2 Bibliographie et citations

La **bibliographie** est une liste de tous les livres, sites web ou documents que tu as utilisés pour le travail. Elle se met souvent à la fin.

##### Insérer des sources

Avant d'insérer la bibliographie, il faut ajouter tes sources.

**Comment faire ?**
- **a.** Aller dans l'onglet **Références**
- **b.** Cliquer sur **Gérer les sources**

![Citations et bibliographie — Gérer les sources](/assets/curriculum/805/citations-bibliographie-ruban.png)

- **c.** Cliquer sur **Nouveau…**

![Gestionnaire de source — Nouveau](/assets/curriculum/805/references-gestionnaire-sources.png)

- **d.** Remplir les informations (titre, auteur, année, etc.) → **OK**

![Créer une source — livre exemple](/assets/curriculum/805/bibliographie-creer-source.png)

##### Insérer une citation

Ensuite, on peut insérer une **citation** dans le texte pour montrer d'où vient une idée ou une phrase.

**Comment faire ?**
- **a.** Cliquer dans le texte où on veut mettre la citation
- **b.** Aller dans **Références**
- **c.** Cliquer sur **Insérer une citation**
- **d.** Choisir une source à ajouter

![Menu Insérer une citation](/assets/curriculum/805/citation-menu-insertion.png)

- **e.** Word ajoute la source à la fin du paragraphe (ex. style auteur–année)

Exemple : *L'entreprise de logistique a connu une croissance exponentielle au cours des deux dernières années.* **(Van, 2000)**

##### Insérer une bibliographie

Enfin, on peut insérer la bibliographie avec toutes les sources saisies dans le document.

**Comment faire ?**
- **a.** Cliquer dans le texte où tu veux mettre la bibliographie
- **b.** Aller dans **Références**
- **c.** Cliquer sur **Bibliographie** et choisir un modèle

![Galerie Bibliographie — modèles prédéfinis](/assets/curriculum/805/bibliographie-modeles.png)

![Exemple de bibliographie](/assets/curriculum/805/bibliographie-exemple.png)

#### 5.15.3 Légendes et table des illustrations

Quand tu mets une image, une photo ou un graphique, il est bien de mettre une **légende** (une petite phrase en dessous pour dire ce que c'est).

**Comment faire ?**
- **a.** Cliquer sur l'image
- **b.** Aller dans l'onglet **Références**
- **c.** Cliquer sur **Insérer une légende**

![Groupe Légendes](/assets/curriculum/805/legendes-ruban.png)

- **d.** Écrire un texte. Par exemple : « Figure 1 : Logo de l'entreprise »

![Dialogue Légende](/assets/curriculum/805/legende-dialogue.png)

- **e.** Word crée une zone de texte sous l'image

![Exemple — logo avec légende](/assets/curriculum/805/legende-exemple-logo.png)

> **Astuce :** la zone de texte de la légende garde le même **habillage** que l'image.

- **f.** On peut changer l'**étiquette** de la légende (Figure, Tableau…) ou simplement **exclure** le texte de l'étiquette (options du dialogue)

##### Insérer une table des illustrations

Si tu as mis plusieurs images ou graphiques avec des légendes, tu peux créer une **table des illustrations** (comme une table des matières, mais pour les images).

**Comment faire ?**
- **a.** Cliquer dans le texte où tu veux mettre la table des illustrations
- **b.** Aller dans **Références**
- **c.** Cliquer sur **Insérer une table des illustrations** et choisir un modèle
- **d.** Word crée une liste de toutes les images avec leur numéro de page

> **Astuce :** la table des illustrations **n'a pas de titre** — c'est à vous de le rajouter.

![Exemple — Table des illustrations](/assets/curriculum/805/table-illustrations-exemple.png)
`;

const DEMO_805_THEORIE_SUMMARY = `## À retenir — Module 805

### Saisie
Afficher tout · Enter vs Shift+Enter · Ctrl+Enter page  
Date/heure · Symboles · Annuler/Rétablir

### Mise en forme
Paragraphe · tabulateurs · bordures/trames · puces / listes  
Styles Titre → table des matières (Références)

### Styles
Définition · types (caractère / paragraphe / lié / liste / tableau)  
Appliquer · créer · modifier (MAJ sélection ou Modifier…)

### Table des matières
Styles Titre · galerie / personnalisée · mise à jour · supprimer

### Référencements
Notes de bas / de fin · sources · citations · bibliographie  
Légendes · table des illustrations

### Tableaux
Insertion → Tableau · Création / Disposition  
Taille · lignes/colonnes · alignements (9) · fusionner/fractionner · bordures

### Pages
En-tête / pied · 1re page différente · n° de page · Imprimer`;

const DEMO_805_APERCU_FULL = `## Aperçu du module 805

Ce module couvre les bases de **Word Microsoft 365** : saisie, mise en forme, styles, table des matières et impression.

### Vous allez découvrir
1. Saisie de texte, date/heure et symboles
2. Paragraphes, tabulateurs, bordures, listes
3. Styles, table des matières, en-têtes / pieds et numérotation
4. Aperçu avant impression

### Source
EnterSite — Logistics by ASFL / SVBL · Bloc 800 ICT`;

const DEMO_805_APERCU_SUMMARY = `## Aperçu — Module 805
- Saisie · paragraphes · listes
- Styles · table des matières
- En-têtes · impression`;

const DEMO_805_OBJECTIFS_FULL = `## Objectifs du module 805

À l'issue de ce module, l'apprenti·e est capable de :

- Saisir et corriger un texte (paragraphes, sauts, casse, date, symboles)
- Mettre en forme paragraphes, tabulateurs, bordures/trames et listes
- Appliquer des **styles Titre** et générer / mettre à jour une **table des matières**
- Insérer en-têtes, pieds de page, numéros de page et préparer l'impression`;

const DEMO_805_OBJECTIFS_SUMMARY = `## Objectifs
- Saisie · mise en forme
- Styles · TdM
- En-têtes · impression`;

/** Contenu Module 806 — Excel Microsoft 365 */
const DEMO_806_THEORIE_FULL = `## 6. Excel Microsoft 365

Les fichiers Excel s'appellent des **classeurs**. Nouveau classeur vierge · modèles · liste **Récent** · **Ouvrir** un existant.

### 6.1 L'écran de travail

Ruban, barre de formule, feuille (lignes / colonnes / cellules), onglets de feuilles.

### 6.2 Saisir des données

Texte, chiffres, dates/heures, formules, fonctions. Excel reconnaît chiffres / dates / heures pour les calculs.  
Texte aligné à **gauche** · nombres à **droite**. Paramètres régionaux **Suisse** : souvent le **point** comme séparateur décimal.

**Sélection multiple** (zones non contiguës) : maintenir **Ctrl** pendant la sélection.

#### 6.2.1 Formater un nombre
Par défaut : format **Standard**. Menu contextuel → **Format de cellule** → décimales · séparateur de milliers…

### 6.3 Calculs simples

#### 6.3.1 Principe des formules
Toute formule commence par **=**.

| Opérateurs | Exemples |
| --- | --- |
| Maths \`+ − * / % ^\` | \`=5%\` → 0,05 · \`=2^3\` → 8 |
| Comparaison \`= <> < > <= >=\` | résultat **VRAI** / **FAUX** |
| Concaténation \`&\` | \`"Ouest"&" et "&"Nord"\` |
| Référence \`:\` \`;\` | \`B1:C4\` plage · \`B1;C4\` cellules séparées |

**Fonctions** = formules préécrites (ex. **MOYENNE**).

#### 6.3.2 Formule simple
Cellule résultat → \`=\` → cliquer les cellules + opérateurs → **Enter**. Ex. \`=B2*C2\`.

#### 6.3.3 Fonctions statistiques (Accueil → Édition)
| Fonction | Rôle |
| --- | --- |
| Somme | Total |
| Moyenne | Moyenne |
| Nb | Nombre de valeurs numériques |
| Max / Min | Plus grande / plus petite |

**Priorités :** \`2*3+4=10\` · \`2*(3+4)=14\` → utiliser des **parenthèses**.

#### 6.3.4 Référence absolue
Fixer une cellule à la recopie : touche **F4** → \`$A$1\` · 2ᵉ F4 = ligne seule · 3ᵉ = colonne seule.

### 6.4 Calcul avec fonctions

\`=\` + début du nom → liste · double-clic → arguments.

| Fonction | Usage |
| --- | --- |
| ARRONDI / .INF / .SUP | Arrondir (ex. paquets / palettes) |
| ARRONDI.AU.MULTIPLE | Ex. 5 centimes · ou \`=ARRONDI(n*20;0)/20\` (négatifs visibles) |
| RANG · GRANDE/PETITE.VALEUR | Classement / nᵉ valeur |
| NB.SI · NB.SI.ENS · SOMME.SI(.ENS) | Compter / sommer sous condition |
| SI · SIERREUR | Condition · masquer #N/A (ex. avec RECHERCHV) |
| NBVAL · NB | Non vides / nombres |
| VPM | Mensualité prêt |
| RECHERCHV / RECHERCHX | Recherche dans un tableau |
| GAUCHE / DROITE | Extraire caractères |
| ANNEE / MOIS / JOUR | Extraire d'une date |
| \`&\` / CONCATENER | Lier textes (espace entre \`" "\`) |

**Données → Convertir** : séparer un texte (ex. \`1400\` | \`Yverdon-les-Bains\`).  
**Heures > 24 h :** format \`[hh]:mm\` · calendrier 1904 pour heures négatives (options).

#### 6.4.1–6.4.3 Formats
- **%** : Excel ×100 → ne pas ×100 dans la formule
- Boutons ↑/↓ décimales
- Format **Comptabilité** + symbole monétaire (CHF…)

### 6.5 Afficher les formules

Raccourci **Ctrl + accent grave** (\` sous Windows) : bascule formules ↔ résultats.

### 6.6 Créer un graphique

#### 6.6.1 Types
| Type | Usage |
| --- | --- |
| Histogramme / courbe | Évolution dans le temps |
| Secteurs | % d'une seule série |
| Barres | Comparaisons |

#### 6.6.2–6.6.4 Création
Sélectionner données (Ctrl si non contiguës) → **Insertion** → Graphiques recommandés ou type choisi.  
**Déplacer le graphique** → Nouvelle feuille (onglet Création).

### 6.7 Publipostage (mailing)

Envoi en nombre = **2 fichiers** :

| Fichier | Contenu |
| --- | --- |
| Document de base (Word) | Texte fixe + **champs** |
| Source de données (Excel) | Infos variables = **champs** × **enregistrements** |

**Procédure :** créer Excel → lettre Word → Publipostage → **Sélection des destinataires** (liste existante) → insérer champs → **Aperçu** → **Terminer** (document fusionné).`;

const DEMO_806_THEORIE_SUMMARY = `## À retenir — Module 806

### Bases
Classeur · saisie · format nombres · Ctrl sélection multiple

### Formules
Commencent par = · opérateurs · F4 absolu · Somme/Moyenne/Max…  
Fonctions utiles : SI, RECHERCHV, ARRONDI, NB.SI…

### Graphiques & mailing
Types adaptés · Insertion · nouvelle feuille  
Excel = source · Word = publipostage`;

const DEMO_806_APERCU_FULL = `## Aperçu du module 806

Ce module couvre les bases d'**Excel Microsoft 365** : saisie, formules, fonctions, graphiques et lien avec le publipostage Word.

### Vous allez découvrir
1. Saisie et formatage des données
2. Formules, opérateurs, références absolues et fonctions
3. Graphiques recommandés et types principaux
4. Source de données Excel pour un publipostage Word

### Source
EnterSite — Logistics by ASFL / SVBL · Bloc 800 ICT`;

const DEMO_806_APERCU_SUMMARY = `## Aperçu — Module 806
- Saisie · formules · fonctions
- Graphiques
- Publipostage (source Excel)`;

const DEMO_806_OBJECTIFS_FULL = `## Objectifs du module 806

À l'issue de ce module, l'apprenti·e est capable de :

- Saisir et formater des données dans un classeur Excel
- Créer des formules (opérateurs, priorités, **références absolues F4**)
- Utiliser des fonctions statistiques et métiers (SI, RECHERCHV, ARRONDI…)
- Créer un graphique adapté et préparer une **source de données** pour le publipostage`;

const DEMO_806_OBJECTIFS_SUMMARY = `## Objectifs
- Saisie · formules · F4
- Fonctions · graphiques
- Source publipostage`;

/** Contenu Module 807 — PowerPoint Microsoft 365 */
const DEMO_807_THEORIE_FULL = `## 7. PowerPoint Microsoft 365

Créer des présentations (projection, web, entretien, cours, séances). Imprimable pour notes. Possible : défilement auto · animations · sons · vidéos · liens.  
👉 PowerPoint = **support** · les techniques orales de présentation s'apprennent à part.

### 7.1 L'écran de travail

Nouvelle présentation → ruban (onglets Fichier, Accueil, Insertion, Création, Transitions, Animations, Diaporama…).

#### 7.1.1 Barre d'outils Accès rapide
Si absente : **Fichier → Options → Barre d'outils Accès rapide** → Afficher. Ajouter au minimum : **Commencer depuis le début** · Enregistrer · Annuler · Refaire. Personnaliser aussi via le bouton ▼ de la barre.

### 7.2–7.3 Outils d'aide
**Annuler / Refaire** via Accès rapide.  
**Affichage** : cocher Règle / Grille pour aligner les objets.

### 7.4 Créer une présentation

| Méthode | Démarche |
| --- | --- |
| Modèle / thème | Fichier → Nouveau → vignette |
| Depuis existant | Fichier → Ouvrir → **Ouvrir une copie** → modifier → Enregistrer sous |

### 7.5 Mode Masque des diapositives

Trame commune : thème, polices, emplacements, puces. Modifications → **toutes** les diapositives.

- Police / gras / italique / couleur (Accueil)
- Puces / numéros / niveaux · Personnaliser (Webdings, Wingdings…)
- Logo : Insertion → Images · fermer le masque ensuite

### 7.6 Construire les diapositives

Après fermeture du masque :

| Action | Où |
| --- | --- |
| Nouvelle diapositive | Accueil → Diapositives |
| Disposition | Titre · Titre et contenu · Deux contenus… |

**Saisie :** Enter = nouveau paragraphe · **Shift+Enter** = saut de ligne. Formats issus du masque. Niveaux de puces : Augmenter / Diminuer le retrait.

### 7.7 Tableau

Disposition Titre et contenu → icône Tableau → lignes / colonnes. Onglets **Création** et **Mise en page**.

Sélection cellule / colonne / ligne / tableau entier · Insérer / Supprimer lignes-colonnes · Scinder · Fusionner · Trier.

### 7.8 Graphique

PowerPoint s'appuie sur **Excel**.

| Méthode | Démarche |
| --- | --- |
| Objet Excel | Insertion → Objet → À partir d'un fichier · **Liaison** = maj auto |
| Titre et contenu | Icône Graphique → type → données fictives à adapter |

### 7.9 Vidéo

Formats mp3/mp4/mov… · disposition Titre et contenu ou Insertion → Vidéo.

- **Fichier** local ou **Vidéo en ligne** (YouTube…) = moins lourd
- **Découper** (onglet Lecture) · lecture aperçu · plein écran / luminosité (Format vidéo)

### 7.10–7.11 SmartArt & images

SmartArt → **Hiérarchie** (organigramme).  
Images : Insertion (ou dans le masque) · Format image · **Aligner / Grouper** plusieurs images.

### 7.12 Personnaliser

| Réglage | Contenu |
| --- | --- |
| Taille | Défaut **16:9** (grand écran) · ou 4:3 / personnalisé (Conception) |
| Arrière-plan | Masquer graphiques du masque sur une diapo (Mise en forme de l'arrière-plan) |

### 7.13 Pied de page / numérotation

Insertion → En-tête et pied de page : Date · N° diapositive · Texte pied → **Appliquer partout**.

### 7.14 Audio

Insertion → Audio → Fichier sur PC · ou **Enregistrer l'audio** (micro) → haut-parleur sur la diapo.

### 7.15 Transition

Effet d'apparition d'une diapo → suivante. Onglet **Transitions** : effet · options · durée · Après (auto) · **Appliquer partout**. Icône sous la miniature = transition présente.

### 7.16 Animation

Effets sur **objets** (pas toute la diapo) :

| Type | Moment |
| --- | --- |
| Entrée | À l'arrivée |
| Accentuation | Objet déjà là |
| Sortie | Disparition |
| Trajectoire | Mouvement |

Volet Animation : ordre · démarrage (clic / avec précédent / après) · délai / durée · son associé.

### 7.17 Diaporama

| Config | Usage |
| --- | --- |
| Présentateur (plein écran) | Exposé live (défaut) |
| Borne | Boucle jusqu'à Échap (stands) |
| Personnalisé | Sous-ensemble / ordre choisi de diapos |
| Mode Présentateur | 2 moniteurs (notes + public) |

### 7.18 Enregistrer

- **.pptx** : transitions + animations · visionneuse compatible côté destinataire
- **Vidéo** : Fichier → Exporter → Créer une vidéo (wmv…) · résolution / minutage

### 7.19 Imprimer

Fichier → Imprimer (Ctrl+P) : copies · imprimante · toutes / sélection / active · n° de diapos par page · recto / recto-verso.`;

const DEMO_807_THEORIE_SUMMARY = `## À retenir — Module 807

### Socle
Ruban · Accès rapide · Masque (= trame globale)  
Dispositions · tableaux · graphiques Excel · images / SmartArt

### Média & effets
Vidéo (fichier / en ligne) · audio · transitions · animations (4 types)

### Diffusion
Diaporama présentateur / borne / personnalisé  
Enregistrer pptx ou vidéo · imprimer notes`;

const DEMO_807_APERCU_FULL = `## Aperçu du module 807

Ce module couvre **PowerPoint Microsoft 365** : création de diapositives, médias, animations et diffusion.

### Vous allez découvrir
1. Écran, Accès rapide, masque et dispositions
2. Tableaux, graphiques, images, SmartArt, vidéo et audio
3. Transitions, animations et configuration du diaporama
4. Enregistrement (.pptx / vidéo) et impression

### Source
EnterSite — Logistics by ASFL / SVBL · Bloc 800 ICT`;

const DEMO_807_APERCU_SUMMARY = `## Aperçu — Module 807
- Masque · dispositions · objets
- Média · transitions · animations
- Diaporama · export · impression`;

const DEMO_807_OBJECTIFS_FULL = `## Objectifs du module 807

À l'issue de ce module, l'apprenti·e est capable de :

- Créer une présentation (modèle / copie) et personnaliser le **masque**
- Insérer texte, tableaux, graphiques, images, SmartArt, vidéo et audio
- Appliquer **transitions** et **animations** (ordre, minutage)
- Configurer le diaporama, enregistrer (.pptx / vidéo) et imprimer`;

const DEMO_807_OBJECTIFS_SUMMARY = `## Objectifs
- Masque · diapositives · objets
- Média · animations
- Diaporama · export`;

/** Contenu Module 808 — OneNote Microsoft 365 */
const DEMO_808_THEORIE_FULL = `## 8. OneNote Microsoft 365

Centraliser documents, ressources et notes (cours / projet) au même endroit · remplacer le bloc-notes papier · intégrer PowerPoint, Word, web, captures, notes manuscrites…

### 8.1 Versions

| Version | Particularité |
| --- | --- |
| **OneNote 2016** (bureau) | Ruban Office complet · sections horizontales · **seul** à stocker aussi en local (PC) + cloud · max. d'options (Fichier → Options) |
| **OneNote pour Windows** | Préinstallé · ruban compact · navigation verticale · Premium M365 (relecture manuscrite, Chercheur, Maths…) |
| **OneNote 365** | Équivalent cloud · données sur **OneDrive** |

Fonctions et symboles proches d'une version à l'autre → on s'y retrouve vite.

### 8.2 Structure

**Bloc-notes** → **sections** → **pages** / sous-pages. Organisation libre · renommer, déplacer, supprimer à tout moment.

### 8.3 Formation

Aide Microsoft (vidéos à jour) :  
[Formation OneNote](https://support.microsoft.com/fr-fr/office/vid%C3%A9o-de-formation-onenote-1c983b65-42f6-42c1-ab61-235aae5d0115)

### 8.4 Premiers pas

1. **Fichier → Nouveau** → emplacement (ex. OneDrive) → nom → Créer  
2. Partage possible à la création ou plus tard  
3. **+ Nouvelle section** · clic droit → Renommer  
4. **Ajouter une page** · cliquer le titre en haut pour nommer

### 8.5 Prise de notes

- **Texte :** clic n'importe où · police / taille / couleur
- **Dessin :** onglet Dessin · stylet / souris / doigt · formes, crayons, surligneurs, pinceaux

### 8.6 Collaboration et partage

Utile pour : coédition · révision · historique des versions (y compris partage avec soi-même).

**Fichier → Partager** → e-mail · autorisations · message → Envoyer. Modifier les personnes à tout moment · coédition en temps réel.

### 8.7 Astuces avancées

#### 8.7.1 Recherche intelligente
Révision → sélectionner des mots → **Recherche intelligente** (panneau web à droite) · ou saisir d'autres termes.

#### 8.7.2 Audio
Insertion → **Enregistrer l'audio** → Arrêter · fichier sur la page · Renommer (clic droit) · Lecture.

### 8.8 Organisation avancée

#### 8.8.1 Balises
Cases à cocher, adresse (maison), etc. · créer les siennes : **Personnaliser mes balises** → Nouvelle balise (nom, symbole, couleur texte / surlignage).  
**Rechercher des indicateurs** : panneau de toutes les balises du bloc-notes (cocher / décocher depuis le panneau).

#### 8.8.2 Couleurs
| Élément | Comment |
| --- | --- |
| Bloc-notes | Clic droit → Propriétés → couleur |
| Section | Clic droit → Couleur de la section |
| Page | Affichage → Couleur de page |

### 8.9–8.10 Modèles

**Insertion → Modèles de page** : Académique · Vierge · Professionnel · Décoratif · Planificateur.  
**Enregistrer la page active comme modèle** → Mes modèles · option modèle par défaut de la section.

#### Notes manuscrites
Dessin → **Sélection par lasso** → **Entrée manuscrite en texte** (stylet → texte tapé).

### 8.11 Conclusion

Outil polyvalent · explorer les fonctions pour l'adapter à son style de travail.`;

const DEMO_808_THEORIE_SUMMARY = `## À retenir — Module 808

### Socle
3 versions · structure bloc-notes / sections / pages  
OneDrive (cloud) · 2016 = local possible

### Usage
Notes texte + dessin · partage / coédition  
Balises · couleurs · modèles · audio · recherche intelligente  
Lasso → manuscrit en texte`;

const DEMO_808_APERCU_FULL = `## Aperçu du module 808

Ce module présente **OneNote Microsoft 365** : organisation des notes, collaboration et fonctionnalités avancées.

### Vous allez découvrir
1. Versions OneNote et structure bloc-notes / sections / pages
2. Création, saisie, dessin et partage
3. Balises, couleurs, modèles et enregistrement audio
4. Recherche intelligente et conversion manuscrit → texte

### Source
EnterSite — Logistics by ASFL / SVBL · Bloc 800 ICT`;

const DEMO_808_APERCU_SUMMARY = `## Aperçu — Module 808
- Versions · structure
- Notes · partage · balises
- Modèles · audio · manuscrit`;

const DEMO_808_OBJECTIFS_FULL = `## Objectifs du module 808

À l'issue de ce module, l'apprenti·e est capable de :

- Distinguer les **versions** OneNote et organiser un bloc-notes (sections / pages)
- Prendre des notes (texte, dessin) et **partager** pour collaborer
- Utiliser balises, couleurs et **modèles** (y compris modèles perso)
- Enregistrer de l'audio, utiliser la recherche intelligente et convertir le **manuscrit en texte**`;

const DEMO_808_OBJECTIFS_SUMMARY = `## Objectifs
- Versions · structure
- Notes · partage
- Balises · modèles · manuscrit`;

/** Contenu Module 809 — Poste de contrôle */
const DEMO_809_THEORIE_FULL = `## 9. Poste de contrôle

### 9.1 Intralogistique

Terme d'origine allemande (manutention / stockage). **Logistique interne** à l'entreprise : contrôler, exécuter et organiser le **flux de matériel** interne.

👉 Même domaine que le flux de matériel interne / micro-logistique · met en évidence la frontière **interne ↔ externe**.

#### 9.1.1 Rôles
Réception et sortie · systèmes de stockage · transport · logiciel picking / tri · télématique, capteurs, robotique · logiciels métier · systèmes complets.

👉 Harmoniser le plus grand nombre possible de domaines et de conditions.

### 9.2 Le poste de contrôle

Aussi appelé **panneau de commande** · point central d'un **WMS** · assiste la gestion globale entrepôt / exploitation. Importance croissante avec capteurs et robotique.

#### 9.2.1 Objectifs
Regrouper les **KPI** d'intralogistique (saisie, évaluation, analyse récurrente), par ex. :

- Volume / urgences en commissionnement
- Transports utilisés / actifs
- Capacité personnel (expédition, picking)
- Livraisons entrantes encore ouvertes
- Taux de prélèvement · volume prévu du jour

Aussi : **représentation graphique** des processus → réagir vite aux perturbations / imprévus · flux sans faille. Questions typiques : dysfonctionnements manutention ? logiciel ?

Niveau technique du poste de contrôle → impact fort sur l'**efficacité** des processus.

#### 9.2.2 Rôle
Selon l'infrastructure : visualisation · planification · optimisation · prévisions vs réalité · limites de performance · controlling · état du système.

Le responsable peut ↑ / modifier ressources ou mesures organisationnelles. En général le poste de contrôle **évalue, prépare et visualise** — il ne pilote pas toujours directement.  
Particularité : les collaborateurs **associent** les recommandations à leur expérience · **eux** décident des mesures finales.

#### 9.2.3 Exigences collaborateurs
Pivot de l'intralogistique · formation logistique solide + expérience · bonnes compétences **IT / Excel** · pensée analytique, process, prévoyante · **travail en équipe** fréquent.

#### 9.2.4 Conclusion
Instrument de **contrôle opérationnel** en intralogistique : soutient planification et pilotage · visualise / surveille en continu · détecte écarts objectifs ↔ réalité · propose des **recommandations d'action**.`;

const DEMO_809_THEORIE_SUMMARY = `## À retenir — Module 809

### Intralogistique
Flux matériel **interne** · EM/SM, stock, transport, picking, capteurs…

### Poste de contrôle
Centralise KPI + visualisation processus  
Évalue / recommande · humains décident  
Profil : logistique + Excel + analyse + équipe`;

const DEMO_809_APERCU_FULL = `## Aperçu du module 809

Ce module situe l'**intralogistique** et le rôle du **poste de contrôle** (panneau de commande) dans l'entrepôt.

### Vous allez découvrir
1. Définition et rôles de l'intralogistique
2. Objectifs du poste de contrôle (KPI et visualisation)
3. Rôles opérationnels et exigences des collaborateurs
4. Conclusion : contrôle opérationnel et recommandations

### Source
EnterSite — Logistics by ASFL / SVBL · Bloc 800 ICT`;

const DEMO_809_APERCU_SUMMARY = `## Aperçu — Module 809
- Intralogistique
- Poste de contrôle (KPI · process)
- Profil collaborateurs`;

const DEMO_809_OBJECTIFS_FULL = `## Objectifs du module 809

À l'issue de ce module, l'apprenti·e est capable de :

- Définir l'**intralogistique** et citer ses domaines d'activité
- Expliquer les **objectifs** du poste de contrôle (indicateurs + visualisation)
- Décrire son **rôle** (évaluation / recommandations vs décision humaine)
- Citer les **exigences** envers les collaborateurs du poste de contrôle`;

const DEMO_809_OBJECTIFS_SUMMARY = `## Objectifs
- Intralogistique
- Poste de contrôle · KPI
- Rôle · profil collab.`;

/** Contenu Module 901 — Planifier et évaluer les projets logistiques */
const DEMO_901_THEORIE_FULL = `## 1. Planifier et évaluer les projets logistiques

Les entreprises cherchent clients et projets (marketing). Mission du logisticien : bien gérer les tâches logistiques. Tous les projets ne réussissent pas · facteurs souvent ambigus → **étude de faisabilité** pour une vue d'ensemble.

**Phases éprouvées** (rappel cycle **PDCA**, module **506**) :
1. Étude de faisabilité
2. Planification du projet
3. Exécution du projet
4. Évaluation du projet

### 1.1 Étude de faisabilité (Feasibility Study)

Analyser les solutions possibles · identifier les risques · estimer les chances de réussite. Plus le projet est complexe, plus l'étude l'est.

Vérifie si les solutions atteignent les **conditions cadres** (logistique, services, production…). L'évaluation économique (avantages pour le client) n'en fait pas toujours partie · souvent via **analyse coûts-bénéfices**.

| Objectifs | Résultats |
| --- | --- |
| Estimer les investissements | Analyser / évaluer les solutions |
| Assurer la qualité | Documenter opportunités et risques |
| Identifier les risques | Préconiser une décision |
| Identifier la solution optimale | |

Petits projets : solution rapide, peu de ressources · étude légère. Grands défis / longues ressources → vérifier :

| Faisabilité | Contenu |
| --- | --- |
| **Technique** | Réalisable ? propriétés des matériaux… |
| **Économique** | Moyens de l'investisseur · investir avant paiement client · marge à la fin |
| **Politique** | Parties prenantes (collab., fournisseurs, clients) · culturel / éthique / sociopolitique |
| **Juridique** | Conformité réglementaire |
| **Organisationnelle** | Organisation capable de planifier, piloter, surveiller |
| **Ressources** | Personnel, matériel, machines, savoir-faire (lié au financier / orga.) |

### 1.2 Planification du projet

Démarre **après** faisabilité OK **et** mandat **écrit** (donneur / preneur d'ordre).

Activités sur un **axe temporel** : qui · quel matériel · quand. Planning **simple, clair, lisible** · marge de sécurité (réserve horaire). Bonne planification = clé du succès.

> « Attends-toi à l'inattendu, et rien ne pourra jamais te surprendre. »

### 1.3 Exécution du projet

**Communication** centrale · collaborateurs = ressource clé. Points de situation = positifs (amélioration), pas « contrôle excessif ». Écarts / problèmes : détecter tôt, traiter vite · procédure connue de l'équipe.

Le responsable **documente** les activités → pistes d'amélioration / capitalisation pour le prochain mandat.

### 1.4 Évaluation du projet

Dès la fin : objectifs / résultats atteints ? Comparer données théoriques (faisabilité) ↔ **réalité**. Pas forcément corriger a posteriori · surtout apprendre pour les **futurs** mandats.

Évaluation avec **FICO** · présentée au supérieur / direction. Idéal : planning = résultat, ou mieux que prévu.`;

const DEMO_901_THEORIE_SUMMARY = `## À retenir — Module 901

### Cycle projet
Faisabilité → Planif. → Exécution → Éval. (PDCA / 506)

### Faisabilité
Technique · éco · politique · juridique · orga · ressources  
Objectifs : investissements, qualité, risques, solution opt.

### Suite
Plan : qui / quoi / quand + réserve  
Exécution : communiquer · documenter  
Éval. : théorie ↔ réalité · avec FICO`;

const DEMO_901_APERCU_FULL = `## Aperçu du module 901

Ce module présente le cycle de **gestion des projets logistiques** : faisabilité, planification, exécution et évaluation.

### Vous allez découvrir
1. Les 4 phases (lien PDCA, module 506)
2. Contenu et critères d'une étude de faisabilité
3. Planification (axe temporel, réserve) et exécution (communication, documentation)
4. Évaluation finale avec FICO et capitalisation

### Source
EnterSite — Logistics by ASFL / SVBL · Bloc 900 Integrate`;

const DEMO_901_APERCU_SUMMARY = `## Aperçu — Module 901
- 4 phases projet
- Étude de faisabilité
- Planif. · exécution · évaluation`;

const DEMO_901_OBJECTIFS_FULL = `## Objectifs du module 901

À l'issue de ce module, l'apprenti·e est capable de :

- Citer les **4 phases** de gestion d'un projet logistique et le lien avec le PDCA
- Expliquer les **objectifs / résultats** et les types de **faisabilité**
- Décrire les principes d'une bonne **planification** et d'une **exécution** maîtrisée
- Justifier l'importance de l'**évaluation** finale (théorie ↔ réalité, FICO)`;

const DEMO_901_OBJECTIFS_SUMMARY = `## Objectifs
- 4 phases · PDCA
- Faisabilité (6 axes)
- Planif. · exéc. · éval.`;

export function buildCurriculumModules(): Module[] {
  return moduleSeeds.map((m, index) => ({
    id: `mod-${m.code}`,
    blockId: m.blockId,
    code: m.code,
    title: m.title,
    order: index + 1,
    published: true,
    levels: defaultLevelsForModule(m.code),
  }));
}

type FilledPages = Record<string, { full: string; summary: string }>;

const filledByModule: Record<string, FilledPages> = {
  "101": {
    objectifs: {
      full: DEMO_101_OBJECTIFS_FULL,
      summary: DEMO_101_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_101_APERCU_FULL,
      summary: DEMO_101_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_101_THEORIE_FULL,
      summary: DEMO_101_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_101_GLOSSAIRE_FULL,
      summary: DEMO_101_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_101_SITUATION_FULL,
      summary: DEMO_101_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_101_MATHS_FULL,
      summary: DEMO_101_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_101_VERIFICATION_FULL,
      summary: DEMO_101_VERIFICATION_SUMMARY,
    },
  },
  "102": {
    objectifs: {
      full: DEMO_102_OBJECTIFS_FULL,
      summary: DEMO_102_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_102_APERCU_FULL,
      summary: DEMO_102_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_102_THEORIE_FULL,
      summary: DEMO_102_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_102_GLOSSAIRE_FULL,
      summary: DEMO_102_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_102_SITUATION_FULL,
      summary: DEMO_102_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_102_MATHS_FULL,
      summary: DEMO_102_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_102_VERIFICATION_FULL,
      summary: DEMO_102_VERIFICATION_SUMMARY,
    },
  },
  "103": {
    objectifs: {
      full: DEMO_103_OBJECTIFS_FULL,
      summary: DEMO_103_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_103_APERCU_FULL,
      summary: DEMO_103_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_103_THEORIE_FULL,
      summary: DEMO_103_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_103_GLOSSAIRE_FULL,
      summary: DEMO_103_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_103_SITUATION_FULL,
      summary: DEMO_103_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_103_MATHS_FULL,
      summary: DEMO_103_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_103_VERIFICATION_FULL,
      summary: DEMO_103_VERIFICATION_SUMMARY,
    },
  },
  "104": {
    objectifs: {
      full: DEMO_104_OBJECTIFS_FULL,
      summary: DEMO_104_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_104_APERCU_FULL,
      summary: DEMO_104_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_104_THEORIE_FULL,
      summary: DEMO_104_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_104_GLOSSAIRE_FULL,
      summary: DEMO_104_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_104_SITUATION_FULL,
      summary: DEMO_104_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_104_MATHS_FULL,
      summary: DEMO_104_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_104_VERIFICATION_FULL,
      summary: DEMO_104_VERIFICATION_SUMMARY,
    },
  },
  "105": {
    objectifs: {
      full: DEMO_105_OBJECTIFS_FULL,
      summary: DEMO_105_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_105_APERCU_FULL,
      summary: DEMO_105_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_105_THEORIE_FULL,
      summary: DEMO_105_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_105_GLOSSAIRE_FULL,
      summary: DEMO_105_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_105_SITUATION_FULL,
      summary: DEMO_105_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_105_MATHS_FULL,
      summary: DEMO_105_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_105_VERIFICATION_FULL,
      summary: DEMO_105_VERIFICATION_SUMMARY,
    },
  },
  "106": {
    objectifs: {
      full: DEMO_106_OBJECTIFS_FULL,
      summary: DEMO_106_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_106_APERCU_FULL,
      summary: DEMO_106_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_106_THEORIE_FULL,
      summary: DEMO_106_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_106_GLOSSAIRE_FULL,
      summary: DEMO_106_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_106_SITUATION_FULL,
      summary: DEMO_106_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_106_MATHS_FULL,
      summary: DEMO_106_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_106_VERIFICATION_FULL,
      summary: DEMO_106_VERIFICATION_SUMMARY,
    },
  },
  "107": {
    objectifs: {
      full: DEMO_107_OBJECTIFS_FULL,
      summary: DEMO_107_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_107_APERCU_FULL,
      summary: DEMO_107_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_107_THEORIE_FULL,
      summary: DEMO_107_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_107_GLOSSAIRE_FULL,
      summary: DEMO_107_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_107_SITUATION_FULL,
      summary: DEMO_107_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_107_MATHS_FULL,
      summary: DEMO_107_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_107_VERIFICATION_FULL,
      summary: DEMO_107_VERIFICATION_SUMMARY,
    },
  },
  "108": {
    objectifs: {
      full: DEMO_108_OBJECTIFS_FULL,
      summary: DEMO_108_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_108_APERCU_FULL,
      summary: DEMO_108_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_108_THEORIE_FULL,
      summary: DEMO_108_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_108_GLOSSAIRE_FULL,
      summary: DEMO_108_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_108_SITUATION_FULL,
      summary: DEMO_108_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_108_MATHS_FULL,
      summary: DEMO_108_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_108_VERIFICATION_FULL,
      summary: DEMO_108_VERIFICATION_SUMMARY,
    },
  },
  "109": {
    objectifs: {
      full: DEMO_109_OBJECTIFS_FULL,
      summary: DEMO_109_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_109_APERCU_FULL,
      summary: DEMO_109_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_109_THEORIE_FULL,
      summary: DEMO_109_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_109_GLOSSAIRE_FULL,
      summary: DEMO_109_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_109_SITUATION_FULL,
      summary: DEMO_109_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_109_MATHS_FULL,
      summary: DEMO_109_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_109_VERIFICATION_FULL,
      summary: DEMO_109_VERIFICATION_SUMMARY,
    },
  },
  "110": {
    objectifs: {
      full: DEMO_110_OBJECTIFS_FULL,
      summary: DEMO_110_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_110_APERCU_FULL,
      summary: DEMO_110_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_110_THEORIE_FULL,
      summary: DEMO_110_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_110_GLOSSAIRE_FULL,
      summary: DEMO_110_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_110_SITUATION_FULL,
      summary: DEMO_110_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_110_MATHS_FULL,
      summary: DEMO_110_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_110_VERIFICATION_FULL,
      summary: DEMO_110_VERIFICATION_SUMMARY,
    },
  },
  "201": {
    objectifs: {
      full: DEMO_201_OBJECTIFS_FULL,
      summary: DEMO_201_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_201_APERCU_FULL,
      summary: DEMO_201_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_201_THEORIE_FULL,
      summary: DEMO_201_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_201_GLOSSAIRE_FULL,
      summary: DEMO_201_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_201_SITUATION_FULL,
      summary: DEMO_201_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_201_MATHS_FULL,
      summary: DEMO_201_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_201_VERIFICATION_FULL,
      summary: DEMO_201_VERIFICATION_SUMMARY,
    },
  },
  "202": {
    objectifs: {
      full: DEMO_202_OBJECTIFS_FULL,
      summary: DEMO_202_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_202_APERCU_FULL,
      summary: DEMO_202_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_202_THEORIE_FULL,
      summary: DEMO_202_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_202_GLOSSAIRE_FULL,
      summary: DEMO_202_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_202_SITUATION_FULL,
      summary: DEMO_202_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_202_MATHS_FULL,
      summary: DEMO_202_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_202_VERIFICATION_FULL,
      summary: DEMO_202_VERIFICATION_SUMMARY,
    },
  },
  "203": {
    objectifs: {
      full: DEMO_203_OBJECTIFS_FULL,
      summary: DEMO_203_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_203_APERCU_FULL,
      summary: DEMO_203_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_203_THEORIE_FULL,
      summary: DEMO_203_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_203_GLOSSAIRE_FULL,
      summary: DEMO_203_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_203_SITUATION_FULL,
      summary: DEMO_203_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_203_MATHS_FULL,
      summary: DEMO_203_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_203_VERIFICATION_FULL,
      summary: DEMO_203_VERIFICATION_SUMMARY,
    },
  },
  "204": {
    objectifs: {
      full: DEMO_204_OBJECTIFS_FULL,
      summary: DEMO_204_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_204_APERCU_FULL,
      summary: DEMO_204_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_204_THEORIE_FULL,
      summary: DEMO_204_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_204_GLOSSAIRE_FULL,
      summary: DEMO_204_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_204_SITUATION_FULL,
      summary: DEMO_204_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_204_MATHS_FULL,
      summary: DEMO_204_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_204_VERIFICATION_FULL,
      summary: DEMO_204_VERIFICATION_SUMMARY,
    },
  },
  "205": {
    objectifs: {
      full: DEMO_205_OBJECTIFS_FULL,
      summary: DEMO_205_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_205_APERCU_FULL,
      summary: DEMO_205_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_205_THEORIE_FULL,
      summary: DEMO_205_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_205_GLOSSAIRE_FULL,
      summary: DEMO_205_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_205_SITUATION_FULL,
      summary: DEMO_205_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_205_MATHS_FULL,
      summary: DEMO_205_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_205_VERIFICATION_FULL,
      summary: DEMO_205_VERIFICATION_SUMMARY,
    },
  },
  "206": {
    objectifs: {
      full: DEMO_206_OBJECTIFS_FULL,
      summary: DEMO_206_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_206_APERCU_FULL,
      summary: DEMO_206_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_206_THEORIE_FULL,
      summary: DEMO_206_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_206_GLOSSAIRE_FULL,
      summary: DEMO_206_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_206_SITUATION_FULL,
      summary: DEMO_206_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_206_MATHS_FULL,
      summary: DEMO_206_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_206_VERIFICATION_FULL,
      summary: DEMO_206_VERIFICATION_SUMMARY,
    },
  },
  "207": {
    objectifs: {
      full: DEMO_207_OBJECTIFS_FULL,
      summary: DEMO_207_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_207_APERCU_FULL,
      summary: DEMO_207_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_207_THEORIE_FULL,
      summary: DEMO_207_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_207_GLOSSAIRE_FULL,
      summary: DEMO_207_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_207_SITUATION_FULL,
      summary: DEMO_207_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_207_MATHS_FULL,
      summary: DEMO_207_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_207_VERIFICATION_FULL,
      summary: DEMO_207_VERIFICATION_SUMMARY,
    },
  },
  "208": {
    objectifs: {
      full: DEMO_208_OBJECTIFS_FULL,
      summary: DEMO_208_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_208_APERCU_FULL,
      summary: DEMO_208_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_208_THEORIE_FULL,
      summary: DEMO_208_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_208_GLOSSAIRE_FULL,
      summary: DEMO_208_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_208_SITUATION_FULL,
      summary: DEMO_208_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_208_MATHS_FULL,
      summary: DEMO_208_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_208_VERIFICATION_FULL,
      summary: DEMO_208_VERIFICATION_SUMMARY,
    },
  },
  "209": {
    objectifs: {
      full: DEMO_209_OBJECTIFS_FULL,
      summary: DEMO_209_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_209_APERCU_FULL,
      summary: DEMO_209_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_209_THEORIE_FULL,
      summary: DEMO_209_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_209_GLOSSAIRE_FULL,
      summary: DEMO_209_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_209_SITUATION_FULL,
      summary: DEMO_209_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_209_MATHS_FULL,
      summary: DEMO_209_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_209_VERIFICATION_FULL,
      summary: DEMO_209_VERIFICATION_SUMMARY,
    },
  },
  "301": {
    objectifs: {
      full: DEMO_301_OBJECTIFS_FULL,
      summary: DEMO_301_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_301_APERCU_FULL,
      summary: DEMO_301_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_301_THEORIE_FULL,
      summary: DEMO_301_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_301_GLOSSAIRE_FULL,
      summary: DEMO_301_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_301_SITUATION_FULL,
      summary: DEMO_301_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_301_MATHS_FULL,
      summary: DEMO_301_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_301_VERIFICATION_FULL,
      summary: DEMO_301_VERIFICATION_SUMMARY,
    },
  },
  "302": {
    objectifs: {
      full: DEMO_302_OBJECTIFS_FULL,
      summary: DEMO_302_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_302_APERCU_FULL,
      summary: DEMO_302_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_302_THEORIE_FULL,
      summary: DEMO_302_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_302_GLOSSAIRE_FULL,
      summary: DEMO_302_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_302_SITUATION_FULL,
      summary: DEMO_302_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_302_MATHS_FULL,
      summary: DEMO_302_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_302_VERIFICATION_FULL,
      summary: DEMO_302_VERIFICATION_SUMMARY,
    },
  },
  "303": {
    objectifs: {
      full: DEMO_303_OBJECTIFS_FULL,
      summary: DEMO_303_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_303_APERCU_FULL,
      summary: DEMO_303_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_303_THEORIE_FULL,
      summary: DEMO_303_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_303_GLOSSAIRE_FULL,
      summary: DEMO_303_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_303_SITUATION_FULL,
      summary: DEMO_303_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_303_MATHS_FULL,
      summary: DEMO_303_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_303_VERIFICATION_FULL,
      summary: DEMO_303_VERIFICATION_SUMMARY,
    },
  },
  "304": {
    objectifs: {
      full: DEMO_304_OBJECTIFS_FULL,
      summary: DEMO_304_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_304_APERCU_FULL,
      summary: DEMO_304_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_304_THEORIE_FULL,
      summary: DEMO_304_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_304_GLOSSAIRE_FULL,
      summary: DEMO_304_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_304_SITUATION_FULL,
      summary: DEMO_304_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_304_MATHS_FULL,
      summary: DEMO_304_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_304_VERIFICATION_FULL,
      summary: DEMO_304_VERIFICATION_SUMMARY,
    },
  },
  "305": {
    objectifs: {
      full: DEMO_305_OBJECTIFS_FULL,
      summary: DEMO_305_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_305_APERCU_FULL,
      summary: DEMO_305_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_305_THEORIE_FULL,
      summary: DEMO_305_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_305_GLOSSAIRE_FULL,
      summary: DEMO_305_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_305_SITUATION_FULL,
      summary: DEMO_305_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_305_MATHS_FULL,
      summary: DEMO_305_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_305_VERIFICATION_FULL,
      summary: DEMO_305_VERIFICATION_SUMMARY,
    },
  },
  "306": {
    objectifs: {
      full: DEMO_306_OBJECTIFS_FULL,
      summary: DEMO_306_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_306_APERCU_FULL,
      summary: DEMO_306_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_306_THEORIE_FULL,
      summary: DEMO_306_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_306_GLOSSAIRE_FULL,
      summary: DEMO_306_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_306_SITUATION_FULL,
      summary: DEMO_306_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_306_MATHS_FULL,
      summary: DEMO_306_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_306_VERIFICATION_FULL,
      summary: DEMO_306_VERIFICATION_SUMMARY,
    },
  },
  "307": {
    objectifs: {
      full: DEMO_307_OBJECTIFS_FULL,
      summary: DEMO_307_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_307_APERCU_FULL,
      summary: DEMO_307_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_307_THEORIE_FULL,
      summary: DEMO_307_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_307_GLOSSAIRE_FULL,
      summary: DEMO_307_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_307_SITUATION_FULL,
      summary: DEMO_307_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_307_MATHS_FULL,
      summary: DEMO_307_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_307_VERIFICATION_FULL,
      summary: DEMO_307_VERIFICATION_SUMMARY,
    },
  },
  "308": {
    objectifs: {
      full: DEMO_308_OBJECTIFS_FULL,
      summary: DEMO_308_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_308_APERCU_FULL,
      summary: DEMO_308_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_308_THEORIE_FULL,
      summary: DEMO_308_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_308_GLOSSAIRE_FULL,
      summary: DEMO_308_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_308_SITUATION_FULL,
      summary: DEMO_308_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_308_MATHS_FULL,
      summary: DEMO_308_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_308_VERIFICATION_FULL,
      summary: DEMO_308_VERIFICATION_SUMMARY,
    },
  },
  "309": {
    objectifs: {
      full: DEMO_309_OBJECTIFS_FULL,
      summary: DEMO_309_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_309_APERCU_FULL,
      summary: DEMO_309_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_309_THEORIE_FULL,
      summary: DEMO_309_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_309_GLOSSAIRE_FULL,
      summary: DEMO_309_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_309_SITUATION_FULL,
      summary: DEMO_309_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_309_MATHS_FULL,
      summary: DEMO_309_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_309_VERIFICATION_FULL,
      summary: DEMO_309_VERIFICATION_SUMMARY,
    },
  },
  "310": {
    objectifs: {
      full: DEMO_310_OBJECTIFS_FULL,
      summary: DEMO_310_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_310_APERCU_FULL,
      summary: DEMO_310_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_310_THEORIE_FULL,
      summary: DEMO_310_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_310_GLOSSAIRE_FULL,
      summary: DEMO_310_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_310_SITUATION_FULL,
      summary: DEMO_310_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_310_MATHS_FULL,
      summary: DEMO_310_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_310_VERIFICATION_FULL,
      summary: DEMO_310_VERIFICATION_SUMMARY,
    },
  },
  "311": {
    objectifs: {
      full: DEMO_311_OBJECTIFS_FULL,
      summary: DEMO_311_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_311_APERCU_FULL,
      summary: DEMO_311_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_311_THEORIE_FULL,
      summary: DEMO_311_THEORIE_SUMMARY,
    },
  },
  "312": {
    objectifs: {
      full: DEMO_312_OBJECTIFS_FULL,
      summary: DEMO_312_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_312_APERCU_FULL,
      summary: DEMO_312_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_312_THEORIE_FULL,
      summary: DEMO_312_THEORIE_SUMMARY,
    },
  },
  "401": {
    objectifs: {
      full: DEMO_401_OBJECTIFS_FULL,
      summary: DEMO_401_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_401_APERCU_FULL,
      summary: DEMO_401_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_401_THEORIE_FULL,
      summary: DEMO_401_THEORIE_SUMMARY,
    },
  },
  "402": {
    objectifs: {
      full: DEMO_402_OBJECTIFS_FULL,
      summary: DEMO_402_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_402_APERCU_FULL,
      summary: DEMO_402_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_402_THEORIE_FULL,
      summary: DEMO_402_THEORIE_SUMMARY,
    },
  },
  "403": {
    objectifs: {
      full: DEMO_403_OBJECTIFS_FULL,
      summary: DEMO_403_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_403_APERCU_FULL,
      summary: DEMO_403_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_403_THEORIE_FULL,
      summary: DEMO_403_THEORIE_SUMMARY,
    },
  },
  "404": {
    objectifs: {
      full: DEMO_404_OBJECTIFS_FULL,
      summary: DEMO_404_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_404_APERCU_FULL,
      summary: DEMO_404_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_404_THEORIE_FULL,
      summary: DEMO_404_THEORIE_SUMMARY,
    },
  },
  "405": {
    objectifs: {
      full: DEMO_405_OBJECTIFS_FULL,
      summary: DEMO_405_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_405_APERCU_FULL,
      summary: DEMO_405_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_405_THEORIE_FULL,
      summary: DEMO_405_THEORIE_SUMMARY,
    },
  },
  "406": {
    objectifs: {
      full: DEMO_406_OBJECTIFS_FULL,
      summary: DEMO_406_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_406_APERCU_FULL,
      summary: DEMO_406_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_406_THEORIE_FULL,
      summary: DEMO_406_THEORIE_SUMMARY,
    },
  },
  "407": {
    objectifs: {
      full: DEMO_407_OBJECTIFS_FULL,
      summary: DEMO_407_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_407_APERCU_FULL,
      summary: DEMO_407_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_407_THEORIE_FULL,
      summary: DEMO_407_THEORIE_SUMMARY,
    },
  },
  "408": {
    objectifs: {
      full: DEMO_408_OBJECTIFS_FULL,
      summary: DEMO_408_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_408_APERCU_FULL,
      summary: DEMO_408_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_408_THEORIE_FULL,
      summary: DEMO_408_THEORIE_SUMMARY,
    },
  },
  "409": {
    objectifs: {
      full: DEMO_409_OBJECTIFS_FULL,
      summary: DEMO_409_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_409_APERCU_FULL,
      summary: DEMO_409_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_409_THEORIE_FULL,
      summary: DEMO_409_THEORIE_SUMMARY,
    },
  },
  "410": {
    objectifs: {
      full: DEMO_410_OBJECTIFS_FULL,
      summary: DEMO_410_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_410_APERCU_FULL,
      summary: DEMO_410_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_410_THEORIE_FULL,
      summary: DEMO_410_THEORIE_SUMMARY,
    },
  },
  "501": {
    objectifs: {
      full: DEMO_501_OBJECTIFS_FULL,
      summary: DEMO_501_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_501_APERCU_FULL,
      summary: DEMO_501_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_501_THEORIE_FULL,
      summary: DEMO_501_THEORIE_SUMMARY,
    },
  },
  "502": {
    objectifs: {
      full: DEMO_502_OBJECTIFS_FULL,
      summary: DEMO_502_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_502_APERCU_FULL,
      summary: DEMO_502_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_502_THEORIE_FULL,
      summary: DEMO_502_THEORIE_SUMMARY,
    },
  },
  "503": {
    objectifs: {
      full: DEMO_503_OBJECTIFS_FULL,
      summary: DEMO_503_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_503_APERCU_FULL,
      summary: DEMO_503_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_503_THEORIE_FULL,
      summary: DEMO_503_THEORIE_SUMMARY,
    },
  },
  "504": {
    objectifs: {
      full: DEMO_504_OBJECTIFS_FULL,
      summary: DEMO_504_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_504_APERCU_FULL,
      summary: DEMO_504_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_504_THEORIE_FULL,
      summary: DEMO_504_THEORIE_SUMMARY,
    },
  },
  "505": {
    objectifs: {
      full: DEMO_505_OBJECTIFS_FULL,
      summary: DEMO_505_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_505_APERCU_FULL,
      summary: DEMO_505_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_505_THEORIE_FULL,
      summary: DEMO_505_THEORIE_SUMMARY,
    },
  },
  "506": {
    objectifs: {
      full: DEMO_506_OBJECTIFS_FULL,
      summary: DEMO_506_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_506_APERCU_FULL,
      summary: DEMO_506_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_506_THEORIE_FULL,
      summary: DEMO_506_THEORIE_SUMMARY,
    },
  },
  "601": {
    objectifs: {
      full: DEMO_601_OBJECTIFS_FULL,
      summary: DEMO_601_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_601_APERCU_FULL,
      summary: DEMO_601_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_601_THEORIE_FULL,
      summary: DEMO_601_THEORIE_SUMMARY,
    },
  },
  "602": {
    objectifs: {
      full: DEMO_602_OBJECTIFS_FULL,
      summary: DEMO_602_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_602_APERCU_FULL,
      summary: DEMO_602_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_602_THEORIE_FULL,
      summary: DEMO_602_THEORIE_SUMMARY,
    },
  },
  "603": {
    objectifs: {
      full: DEMO_603_OBJECTIFS_FULL,
      summary: DEMO_603_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_603_APERCU_FULL,
      summary: DEMO_603_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_603_THEORIE_FULL,
      summary: DEMO_603_THEORIE_SUMMARY,
    },
  },
  "604": {
    objectifs: {
      full: DEMO_604_OBJECTIFS_FULL,
      summary: DEMO_604_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_604_APERCU_FULL,
      summary: DEMO_604_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_604_THEORIE_FULL,
      summary: DEMO_604_THEORIE_SUMMARY,
    },
  },
  "605": {
    objectifs: {
      full: DEMO_605_OBJECTIFS_FULL,
      summary: DEMO_605_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_605_APERCU_FULL,
      summary: DEMO_605_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_605_THEORIE_FULL,
      summary: DEMO_605_THEORIE_SUMMARY,
    },
  },
  "606": {
    objectifs: {
      full: DEMO_606_OBJECTIFS_FULL,
      summary: DEMO_606_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_606_APERCU_FULL,
      summary: DEMO_606_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_606_THEORIE_FULL,
      summary: DEMO_606_THEORIE_SUMMARY,
    },
  },
  "607": {
    objectifs: {
      full: DEMO_607_OBJECTIFS_FULL,
      summary: DEMO_607_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_607_APERCU_FULL,
      summary: DEMO_607_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_607_THEORIE_FULL,
      summary: DEMO_607_THEORIE_SUMMARY,
    },
  },
  "608": {
    objectifs: {
      full: DEMO_608_OBJECTIFS_FULL,
      summary: DEMO_608_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_608_APERCU_FULL,
      summary: DEMO_608_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_608_THEORIE_FULL,
      summary: DEMO_608_THEORIE_SUMMARY,
    },
    glossaire: {
      full: DEMO_608_GLOSSAIRE_FULL,
      summary: DEMO_608_GLOSSAIRE_SUMMARY,
    },
    situation: {
      full: DEMO_608_SITUATION_FULL,
      summary: DEMO_608_SITUATION_SUMMARY,
    },
    maths: {
      full: DEMO_608_MATHS_FULL,
      summary: DEMO_608_MATHS_SUMMARY,
    },
    verification: {
      full: DEMO_608_VERIFICATION_FULL,
      summary: DEMO_608_VERIFICATION_SUMMARY,
    },
  },
  "609": {
    objectifs: {
      full: DEMO_609_OBJECTIFS_FULL,
      summary: DEMO_609_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_609_APERCU_FULL,
      summary: DEMO_609_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_609_THEORIE_FULL,
      summary: DEMO_609_THEORIE_SUMMARY,
    },
  },
  "610": {
    objectifs: {
      full: DEMO_610_OBJECTIFS_FULL,
      summary: DEMO_610_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_610_APERCU_FULL,
      summary: DEMO_610_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_610_THEORIE_FULL,
      summary: DEMO_610_THEORIE_SUMMARY,
    },
  },
  "611": {
    objectifs: {
      full: DEMO_611_OBJECTIFS_FULL,
      summary: DEMO_611_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_611_APERCU_FULL,
      summary: DEMO_611_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_611_THEORIE_FULL,
      summary: DEMO_611_THEORIE_SUMMARY,
    },
  },
  "612": {
    objectifs: {
      full: DEMO_612_OBJECTIFS_FULL,
      summary: DEMO_612_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_612_APERCU_FULL,
      summary: DEMO_612_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_612_THEORIE_FULL,
      summary: DEMO_612_THEORIE_SUMMARY,
    },
  },
  "613": {
    objectifs: {
      full: DEMO_613_OBJECTIFS_FULL,
      summary: DEMO_613_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_613_APERCU_FULL,
      summary: DEMO_613_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_613_THEORIE_FULL,
      summary: DEMO_613_THEORIE_SUMMARY,
    },
  },
  "614": {
    objectifs: {
      full: DEMO_614_OBJECTIFS_FULL,
      summary: DEMO_614_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_614_APERCU_FULL,
      summary: DEMO_614_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_614_THEORIE_FULL,
      summary: DEMO_614_THEORIE_SUMMARY,
    },
  },
  "615": {
    objectifs: {
      full: DEMO_615_OBJECTIFS_FULL,
      summary: DEMO_615_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_615_APERCU_FULL,
      summary: DEMO_615_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_615_THEORIE_FULL,
      summary: DEMO_615_THEORIE_SUMMARY,
    },
  },
  "616": {
    objectifs: {
      full: DEMO_616_OBJECTIFS_FULL,
      summary: DEMO_616_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_616_APERCU_FULL,
      summary: DEMO_616_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_616_THEORIE_FULL,
      summary: DEMO_616_THEORIE_SUMMARY,
    },
  },
  "701": {
    objectifs: {
      full: DEMO_701_OBJECTIFS_FULL,
      summary: DEMO_701_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_701_APERCU_FULL,
      summary: DEMO_701_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_701_THEORIE_FULL,
      summary: DEMO_701_THEORIE_SUMMARY,
    },
  },
  "703": {
    objectifs: {
      full: DEMO_703_OBJECTIFS_FULL,
      summary: DEMO_703_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_703_APERCU_FULL,
      summary: DEMO_703_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_703_THEORIE_FULL,
      summary: DEMO_703_THEORIE_SUMMARY,
    },
  },
  "704": {
    objectifs: {
      full: DEMO_704_OBJECTIFS_FULL,
      summary: DEMO_704_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_704_APERCU_FULL,
      summary: DEMO_704_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_704_THEORIE_FULL,
      summary: DEMO_704_THEORIE_SUMMARY,
    },
  },
  "705": {
    objectifs: {
      full: DEMO_705_OBJECTIFS_FULL,
      summary: DEMO_705_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_705_APERCU_FULL,
      summary: DEMO_705_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_705_THEORIE_FULL,
      summary: DEMO_705_THEORIE_SUMMARY,
    },
  },
  "801": {
    objectifs: {
      full: DEMO_801_OBJECTIFS_FULL,
      summary: DEMO_801_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_801_APERCU_FULL,
      summary: DEMO_801_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_801_THEORIE_FULL,
      summary: DEMO_801_THEORIE_SUMMARY,
    },
  },
  "802": {
    objectifs: {
      full: DEMO_802_OBJECTIFS_FULL,
      summary: DEMO_802_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_802_APERCU_FULL,
      summary: DEMO_802_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_802_THEORIE_FULL,
      summary: DEMO_802_THEORIE_SUMMARY,
    },
  },
  "803": {
    objectifs: {
      full: DEMO_803_OBJECTIFS_FULL,
      summary: DEMO_803_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_803_APERCU_FULL,
      summary: DEMO_803_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_803_THEORIE_FULL,
      summary: DEMO_803_THEORIE_SUMMARY,
    },
  },
  "804": {
    objectifs: {
      full: DEMO_804_OBJECTIFS_FULL,
      summary: DEMO_804_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_804_APERCU_FULL,
      summary: DEMO_804_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_804_THEORIE_FULL,
      summary: DEMO_804_THEORIE_SUMMARY,
    },
  },
  "805": {
    objectifs: {
      full: DEMO_805_OBJECTIFS_FULL,
      summary: DEMO_805_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_805_APERCU_FULL,
      summary: DEMO_805_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_805_THEORIE_FULL,
      summary: DEMO_805_THEORIE_SUMMARY,
    },
  },
  "806": {
    objectifs: {
      full: DEMO_806_OBJECTIFS_FULL,
      summary: DEMO_806_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_806_APERCU_FULL,
      summary: DEMO_806_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_806_THEORIE_FULL,
      summary: DEMO_806_THEORIE_SUMMARY,
    },
  },
  "807": {
    objectifs: {
      full: DEMO_807_OBJECTIFS_FULL,
      summary: DEMO_807_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_807_APERCU_FULL,
      summary: DEMO_807_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_807_THEORIE_FULL,
      summary: DEMO_807_THEORIE_SUMMARY,
    },
  },
  "808": {
    objectifs: {
      full: DEMO_808_OBJECTIFS_FULL,
      summary: DEMO_808_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_808_APERCU_FULL,
      summary: DEMO_808_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_808_THEORIE_FULL,
      summary: DEMO_808_THEORIE_SUMMARY,
    },
  },
  "809": {
    objectifs: {
      full: DEMO_809_OBJECTIFS_FULL,
      summary: DEMO_809_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_809_APERCU_FULL,
      summary: DEMO_809_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_809_THEORIE_FULL,
      summary: DEMO_809_THEORIE_SUMMARY,
    },
  },
  "901": {
    objectifs: {
      full: DEMO_901_OBJECTIFS_FULL,
      summary: DEMO_901_OBJECTIFS_SUMMARY,
    },
    apercu: {
      full: DEMO_901_APERCU_FULL,
      summary: DEMO_901_APERCU_SUMMARY,
    },
    theorie: {
      full: DEMO_901_THEORIE_FULL,
      summary: DEMO_901_THEORIE_SUMMARY,
    },
  },
};

export function buildCurriculumLessons(): Lesson[] {
  const lessons: Lesson[] = [];

  for (const m of moduleSeeds) {
    lessonPageTemplates.forEach((page, pageIndex) => {
      const id = `lesson-${m.code}-${page.slug}`;
      const filled = filledByModule[m.code]?.[page.slug];

      lessons.push({
        id,
        moduleId: `mod-${m.code}`,
        title: page.title,
        order: pageIndex + 1,
        pageSlug: page.slug,
        published: true,
        contentFull: filled?.full ?? PLACEHOLDER_FULL,
        contentSummary: filled?.summary ?? PLACEHOLDER_SUMMARY,
      });
    });
  }

  return lessons;
}
