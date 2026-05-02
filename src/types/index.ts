export type LessonType = 'grammar' | 'writing' | 'vocabulary';

export type ProficiencyLevel = 'beginner' | 'elementary' | 'intermediate' | 'upper_intermediate' | 'advanced';

export type ExerciseType = 'multiple_choice' | 'fill_blank' | 'writing' | 'ordering' | 'matching' | 'correction';

export interface BaseExercise {
  id: string;
  type: ExerciseType;
  question: string;
  explanation: string;
  xp: number;
}

export interface MultipleChoiceExercise extends BaseExercise {
  type: 'multiple_choice';
  options: string[];
  correct: number;
}

export interface FillBlankExercise extends BaseExercise {
  type: 'fill_blank';
  answer: string;
  hint?: string;
}

export interface WritingExercise extends BaseExercise {
  type: 'writing';
  prompt: string;
  minWords: number;
  maxWords: number;
  grammarFocus: string[];
}

export interface OrderingExercise extends BaseExercise {
  type: 'ordering';
  words: string[];
  correctOrder: number[];
}

export interface MatchingExercise extends BaseExercise {
  type: 'matching';
  pairs: { left: string; right: string }[];
}

export interface CorrectionExercise extends BaseExercise {
  type: 'correction';
  text: string;
  errors: { start: number; end: number; suggestion: string }[];
}

export type Exercise = 
  | MultipleChoiceExercise 
  | FillBlankExercise 
  | WritingExercise 
  | OrderingExercise 
  | MatchingExercise
  | CorrectionExercise;

export interface Lesson {
  id: string;
  unitId: number;
  title: string;
  description: string;
  type: LessonType;
  xp: number;
  gems: number;
  exercises: Exercise[];
  prerequisites?: string[];
}

export interface Unit {
  id: number;
  level: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  lessons: Lesson[];
}

export interface Level {
  id: number;
  title: string;
  description: string;
  units: Unit[];
}

export type LessonStatus = 'locked' | 'available' | 'in_progress' | 'completed' | 'mastered';

export type SkillCategory = 'verbs' | 'tenses' | 'grammar' | 'writing';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  description: string;
}

export interface WalkthroughStep {
  id: number;
  name: string;
  description: string;
  skills: Skill[];
}

export interface UserProgress {
  currentLessonId: string | null;
  streak: number;
  lastAccessDate: string | null;
  totalXP: number;
  gems: number;
  completedLessons: string[];
  masteredLessons: string[];
  lessonProgress: Record<string, ExerciseProgress>;
}

export interface ExerciseProgress {
  lessonId: string;
  currentExercise: number;
  correctAnswers: number;
  totalAttempts: number;
  completedAt?: string;
}

export interface UserAnswer {
  lessonId: string;
  exerciseId: string;
  answer: string;
  isCorrect: boolean;
  timestamp: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  requirement: number;
  type: 'lessons' | 'streak' | 'xp' | 'writing' | 'perfect';
}