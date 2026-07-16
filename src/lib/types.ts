export type Role = "admin" | "trainer" | "apprentice";

/** Niveau de diplôme fédéral suisse */
export type DiplomaLevel = "AFP" | "CFC";

/** Année d'apprentissage (AFP : 1–2, CFC : 1–3) */
export type StudyYear = 1 | 2 | 3;

export type LessonStatus = "unread" | "reading" | "done";

export type ExerciseType = "qcm" | "math" | "open";

/** Types de questions pour les évaluations / blancs */
export type QuestionType =
  | "qcm"
  | "multi"
  | "true_false"
  | "math"
  | "open"
  | "matching"
  | "ordering"
  | "fill_blank";

export interface ClassRoom {
  id: string;
  name: string;
  year: string;
  /** Niveau de la classe : détermine le contenu visible des apprentis */
  level: DiplomaLevel;
  /** Année d'apprentissage (1ʳᵉ, 2ᵉ, 3ᵉ) */
  studyYear: StudyYear;
  /** Classe active (désactivée = masquée du parcours courant, élèves conservés) */
  active: boolean;
}

/** Tâche / consigne pédagogique assignée à une classe ou un élève */
export type ClassTaskStatus = "todo" | "doing" | "done";

export interface ClassTask {
  id: string;
  classId: string;
  /** Si défini : tâche individuelle ; sinon : toute la classe */
  userId?: string;
  title: string;
  description: string;
  dueAt?: string;
  status: ClassTaskStatus;
  createdAt: string;
  updatedAt: string;
}

/** Parcours d'apprentissage ordonné pour un couple niveau × année */
export interface LearningSequence {
  id: string;
  level: DiplomaLevel;
  studyYear: StudyYear;
  /** Ordre pédagogique des modules (ids `mod-XXX`) */
  moduleIds: string[];
}

export interface Block {
  id: string;
  code: string;
  title: string;
  order: number;
}

export interface UserAccount {
  id: string;
  email: string;
  password: string;
  displayName: string;
  role: Role;
  classId: string;
  active: boolean;
}

/** Pages types EnterSite / Contenu formateur */
export type LessonPageSlug =
  | "objectifs"
  | "apercu"
  | "theorie"
  | "glossaire"
  | "situation"
  | "maths"
  | "verification"
  | "informatique";

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  order: number;
  /** Type de page EnterSite (theorie, glossaire, …) */
  pageSlug: LessonPageSlug;
  /** Contenu CFC (référence) — complet */
  contentFull: string;
  /** Contenu CFC — résumé */
  contentSummary: string;
  /**
   * Contenu AFP — complet.
   * Absent / undefined = identique au CFC.
   */
  contentFullAfp?: string;
  /**
   * Contenu AFP — résumé.
   * Absent / undefined = identique au CFC.
   */
  contentSummaryAfp?: string;
  /**
   * Fichiers d'exercice téléchargeables (mise en situation, maths, vérification).
   * Absent = aucun fichier.
   */
  attachments?: LessonAttachment[];
  /** Variante AFP des pièces jointes ; absent = identique au CFC. */
  attachmentsAfp?: LessonAttachment[];
  published: boolean;
}

/** Document téléchargeable rattaché à une page d'exercice curriculum. */
export interface LessonAttachment {
  id: string;
  name: string;
  /**
   * URL de téléchargement.
   * Placeholder public, data URL (fichiers légers), ou vide si pas encore fourni.
   */
  url: string;
  mimeType?: string;
}

export interface Module {
  id: string;
  blockId: string;
  code: string;
  title: string;
  order: number;
  published: boolean;
  /** Niveaux pour lesquels le module est visible */
  levels: DiplomaLevel[];
}

export interface QcmPayload {
  question: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
}

export interface MultiPayload {
  question: string;
  choices: string[];
  correctIndexes: number[];
  explanation: string;
}

export interface TrueFalsePayload {
  question: string;
  correct: boolean;
  explanation: string;
}

export interface MathPayload {
  question: string;
  unit?: string;
  answer: number;
  tolerance?: number;
  explanation: string;
}

export interface OpenPayload {
  question: string;
  modelAnswer: string;
  requiredKeywords: string[];
  optionalKeywords?: string[];
  explanation: string;
}

export interface MatchingPayload {
  question: string;
  pairs: { left: string; right: string }[];
  explanation: string;
}

export interface OrderingPayload {
  question: string;
  items: string[];
  explanation: string;
}

export interface FillBlankPayload {
  question: string;
  answers: string[];
  caseSensitive?: boolean;
  explanation: string;
}

export type QuestionPayload =
  | QcmPayload
  | MultiPayload
  | TrueFalsePayload
  | MathPayload
  | OpenPayload
  | MatchingPayload
  | OrderingPayload
  | FillBlankPayload;

export interface Exercise {
  id: string;
  lessonId?: string;
  title: string;
  type: ExerciseType;
  difficulty: "facile" | "moyen" | "difficile";
  payload: QcmPayload | MathPayload | OpenPayload;
  published: boolean;
}

/** Application Office cible pour les exercices Informatique. */
export type InformatiqueApp = "word" | "excel" | "powerpoint";

/** Document ou vidéo de correction rattaché à un exercice Informatique. */
export interface InformatiqueAsset {
  id: string;
  name: string;
  /**
   * URL de téléchargement / lecture.
   * Placeholder public, data URL (fichiers légers), ou vide si pas encore fourni.
   */
  url: string;
  kind: "document" | "video";
  mimeType?: string;
}

/** Années de cours Informatique (pas de 2e année). */
export type InformatiqueYear = 1 | 3;

/**
 * Exercice Informatique (Word / Excel / PowerPoint),
 * indépendant des modules curriculum 100–900.
 */
export interface InformatiqueExercise {
  id: string;
  app: InformatiqueApp;
  /** Année du parcours Informatique (1 ou 3 uniquement). */
  year: InformatiqueYear;
  title: string;
  /** Court descriptif affiché dans la liste. */
  description: string;
  /** Consigne / contenu (markdown) — preview élève, édition formateur. */
  instructions: string;
  order: number;
  published: boolean;
  documents: InformatiqueAsset[];
  /** Corrections (vidéos et/ou documents) — `_correction*` / `_resultat*`. */
  corrections: InformatiqueAsset[];
}

export interface Assessment {
  id: string;
  title: string;
  description: string;
  durationMin: number;
  maxAttempts: number;
  published: boolean;
  /** Public cible (défaut AFP + CFC) */
  levels: DiplomaLevel[];
  createdAt: string;
  updatedAt: string;
}

export interface AssessmentQuestion {
  id: string;
  assessmentId: string;
  type: QuestionType;
  title: string;
  points: number;
  order: number;
  payload: QuestionPayload;
}

export interface LessonProgress {
  lessonId: string;
  status: LessonStatus;
  modePref: "full" | "summary";
}

export interface AttemptRecord {
  id: string;
  exerciseId: string;
  userId: string;
  score: number;
  maxScore: number;
  createdAt: string;
}

/** Styles d'annotation élève (ne modifient jamais le texte source) */
export type AnnotationStyle =
  | "highlight"
  | "underline"
  | "bold"
  | "italic"
  | "note";

/** Annotation personnelle sur une leçon — calquée sur le texte affiché, pas sur le markdown source */
export interface TextAnnotation {
  id: string;
  userId: string;
  lessonId: string;
  /** Mode d'affichage au moment de la sélection */
  mode: "full" | "summary";
  start: number;
  end: number;
  style: AnnotationStyle;
  /** Texte libre pour le style "note" */
  note?: string;
  createdAt: string;
}

export interface AppState {
  classes: ClassRoom[];
  users: UserAccount[];
  blocks: Block[];
  modules: Module[];
  lessons: Lesson[];
  exercises: Exercise[];
  /** Exercices Word / Excel / PowerPoint (parcours Informatique). */
  informatiqueExercises: InformatiqueExercise[];
  assessments: Assessment[];
  assessmentQuestions: AssessmentQuestion[];
  sequences: LearningSequence[];
  classTasks: ClassTask[];
  /** Annotations personnelles des apprentis (surlignage, notes…) */
  textAnnotations: TextAnnotation[];
  progress: Record<string, LessonProgress[]>;
  attempts: AttemptRecord[];
  currentUserId: string | null;
}
