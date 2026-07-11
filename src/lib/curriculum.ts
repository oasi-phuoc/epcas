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
        published: true,
        contentFull: filled?.full ?? PLACEHOLDER_FULL,
        contentSummary: filled?.summary ?? PLACEHOLDER_SUMMARY,
      });
    });
  }

  return lessons;
}
