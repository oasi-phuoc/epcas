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
