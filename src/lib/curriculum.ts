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
