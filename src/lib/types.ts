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
  | "verification";

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
  published: boolean;
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

export interface AppState {
  classes: ClassRoom[];
  users: UserAccount[];
  blocks: Block[];
  modules: Module[];
  lessons: Lesson[];
  exercises: Exercise[];
  assessments: Assessment[];
  assessmentQuestions: AssessmentQuestion[];
  sequences: LearningSequence[];
  classTasks: ClassTask[];
  progress: Record<string, LessonProgress[]>;
  attempts: AttemptRecord[];
  currentUserId: string | null;
}
