export interface AcademyCourse {
  id: string;
  name: string;
  description: string;
  icon: string;
  gradient: string;
  stepId: number;
  unlockRequirement: 'unlocked' | number;
  estimatedHours: number;
  totalExercises: number;
  sections: AcademySection[];
  exercises?: AcademyExercise[];
  exercisePacks: ExercisePack[];
  quiz?: AcademyQuiz;
  quizPacks: QuizPack[];
}

export interface ExercisePack {
  id: string;
  title: string;
  description: string;
  icon: string;
  exercises: AcademyExercise[];
}

export interface QuizPack {
  id: string;
  title: string;
  description: string;
  icon: string;
  quiz: AcademyQuiz;
}

export interface AcademyExercise {
  id: string;
  sectionId: string;
  type: 'multiple-choice' | 'fill-blank' | 'matching' | 'ordering' | 'rewrite';
  question: string;
  translation?: string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
  points: number;
}

export interface AcademyQuiz {
  id: string;
  title: string;
  description: string;
  passingScore: number;
  xpReward: number;
  gemReward: number;
  timeLimit: number;
  questions: AcademyExercise[];
}

export interface AcademySection {
  id: string;
  title: string;
  type: 'grammar' | 'vocabulary' | 'practice';
  content: AcademyContent[];
}

export interface AcademyContent {
  id: string;
  title: string;
  subtitle?: string;
  text?: string;
  translation?: string;
  examples?: { en: string; pt: string; note?: string }[];
  rules?: { rule: string; example?: string }[];
  notes?: string[];
}

import { foundationExercisePacks, foundationQuizPacks } from './courses/foundation';
import { presentTensesExercisePacks, presentTensesQuizPacks } from './courses/presentTenses';
import { pastTensesExercisePacks, pastTensesQuizPacks } from './courses/pastTenses';
import { futureTensesExercisePacks, futureTensesQuizPacks } from './courses/futureTenses';
import { prepositionsExercisePacks, pronounsExercisePacks, conditionalExercisePacks, modalVerbsExercisePacks, comparisonsExercisePacks } from './courses/prepositions';
import { passiveVoiceExercisePacks } from './courses/passiveVoice';
import { reportedSpeechExercisePacks } from './courses/reportedSpeech';
import { complexSentencesExercisePacks } from './courses/complexSentences';
import { paragraphWritingExercisePacks } from './courses/paragraphWriting';
import { essayWritingExercisePacks } from './courses/essayWriting';
import { advancedGrammarExercisePacks } from './courses/advancedGrammar';
import { businessWritingExercisePacks } from './courses/businessWriting';
import { creativeWritingExercisePacks } from './courses/creativeWriting';

export const academyCourses: AcademyCourse[] = [
  {
    id: 'foundation',
    name: 'Foundation',
    description: 'Master the building blocks of English grammar',
    icon: '🏠',
    gradient: 'from-emerald-500 to-green-600',
    stepId: 1,
    unlockRequirement: 'unlocked',
    estimatedHours: 8,
    totalExercises: 120,
    exercisePacks: foundationExercisePacks,
    quizPacks: foundationQuizPacks,
    sections: [
      { id: 'found-subject-verb', title: 'Subject-Verb Agreement', type: 'grammar', content: [{ id: 'sv-intro', title: 'What is Subject-Verb Agreement?', text: 'In English, the verb must agree with its subject in number.', translation: 'Em inglês, o verbo deve concordar com o sujeito em número.', examples: [{ en: 'He plays', pt: 'Ele joga' }, { en: 'They play', pt: 'Eles jogam' }] }] },
      { id: 'found-articles', title: 'Articles: A, An, The', type: 'grammar', content: [{ id: 'art-intro', title: 'When to Use Articles', text: 'Articles are words that define nouns.', translation: 'Artigos são palavras que definem substantivos.', examples: [{ en: 'A cat', pt: 'Um gato' }] }] }
    ]
  },
  {
    id: 'present-tenses',
    name: 'Present Tenses',
    description: 'Learn Present Simple and Present Continuous',
    icon: '⚡',
    gradient: 'from-blue-500 to-cyan-600',
    stepId: 2,
    unlockRequirement: 1,
    estimatedHours: 10,
    totalExercises: 150,
    exercisePacks: presentTensesExercisePacks,
    quizPacks: presentTensesQuizPacks,
    sections: [
      { id: 'pres-simple', title: 'Present Simple Tense', type: 'grammar', content: [{ id: 'ps-intro', title: 'What is Present Simple?', text: 'Present Simple describes habits and routines.', translation: 'O Present Simple é usado para hábitos e rotinas.', examples: [{ en: 'I drink coffee', pt: 'Eu bebo café' }] }] },
      { id: 'pres-continuous', title: 'Present Continuous Tense', type: 'grammar', content: [{ id: 'pc-intro', title: 'What is Present Continuous?', text: 'Present Continuous describes actions happening now.', translation: 'O Present Continuous é usado para ações acontecendo agora.', examples: [{ en: 'I am drinking', pt: 'Estou bebendo' }] }] }
    ]
  },
  {
    id: 'past-tenses',
    name: 'Past Tenses',
    description: 'Learn Past Simple and Past Continuous',
    icon: '⏪',
    gradient: 'from-purple-500 to-violet-600',
    stepId: 3,
    unlockRequirement: 2,
    estimatedHours: 12,
    totalExercises: 180,
    exercisePacks: pastTensesExercisePacks,
    quizPacks: pastTensesQuizPacks,
    sections: [
      { id: 'past-simple', title: 'Past Simple Tense', type: 'grammar', content: [{ id: 'ps-intro', title: 'What is Past Simple?', text: 'Past Simple describes completed actions.', translation: 'O Past Simple é para ações completadas.', examples: [{ en: 'I watched', pt: 'Eu assisti' }] }] },
      { id: 'past-continuous', title: 'Past Continuous Tense', type: 'grammar', content: [{ id: 'pc-intro', title: 'What is Past Continuous?', text: 'Past Continuous describes actions in progress in the past.', translation: 'O Past Continuous é para ações em progresso no passado.', examples: [{ en: 'I was watching', pt: 'Eu estava assistindo' }] }] }
    ]
  },
  {
    id: 'future',
    name: 'Future & More',
    description: 'Learn future forms',
    icon: '⏩',
    gradient: 'from-amber-500 to-orange-600',
    stepId: 4,
    unlockRequirement: 3,
    estimatedHours: 8,
    totalExercises: 100,
    exercisePacks: futureTensesExercisePacks,
    quizPacks: futureTensesQuizPacks,
    sections: [
      { id: 'fut-will', title: 'Future with WILL', type: 'grammar', content: [{ id: 'fw-intro', title: 'What is Future with WILL?', text: 'WILL is for predictions and spontaneous decisions.', translation: 'WILL é para previsões e decisões espontâneas.', examples: [{ en: 'I will help', pt: 'Eu vou ajudar' }] }] },
      { id: 'fut-going', title: 'Future with GOING TO', type: 'grammar', content: [{ id: 'fg-intro', title: 'What is Future with GOING TO?', text: 'GOING TO is for plans and intentions.', translation: 'GOING TO é para planos e intenções.', examples: [{ en: 'I am going to study', pt: 'Eu vou estudar' }] }] }
    ]
  },
  {
    id: 'prepositions',
    name: 'Prepositions',
    description: 'Connect ideas with prepositions',
    icon: '🔗',
    gradient: 'from-yellow-500 to-amber-600',
    stepId: 6,
    unlockRequirement: 4,
    estimatedHours: 6,
    totalExercises: 80,
    exercisePacks: prepositionsExercisePacks,
    quizPacks: [],
    sections: [
      { id: 'prep-basic', title: 'Basic Prepositions', type: 'grammar', content: [{ id: 'pb-intro', title: 'What are Prepositions?', text: 'Prepositions show the relationship between nouns.', translation: 'Preposições mostram a relação entre substantivos.', examples: [{ en: 'The book is on the table', pt: 'O livro está sobre a mesa' }] }] }
    ]
  },
  {
    id: 'pronouns',
    name: 'Pronouns',
    description: 'Use pronouns correctly',
    icon: '👤',
    gradient: 'from-blue-500 to-indigo-600',
    stepId: 8,
    unlockRequirement: 4,
    estimatedHours: 5,
    totalExercises: 70,
    exercisePacks: pronounsExercisePacks,
    quizPacks: [],
    sections: [
      { id: 'pron-basic', title: 'Personal Pronouns', type: 'grammar', content: [{ id: 'pron-intro', title: 'What are Pronouns?', text: 'Pronouns replace nouns.', translation: 'Pronomes substituem substantivos.', examples: [{ en: 'He is my friend', pt: 'Ele é meu amigo' }] }] }
    ]
  },
  {
    id: 'conditional',
    name: 'Conditional Sentences',
    description: 'Express possibilities and hypotheses',
    icon: '🤔',
    gradient: 'from-purple-500 to-pink-600',
    stepId: 10,
    unlockRequirement: 5,
    estimatedHours: 8,
    totalExercises: 100,
    exercisePacks: conditionalExercisePacks,
    quizPacks: [],
    sections: [
      { id: 'cond-zero', title: 'Zero Conditional', type: 'grammar', content: [{ id: 'cz-intro', title: 'Zero Conditional', text: 'Used for general truths.', translation: 'Usado para verdades gerais.', examples: [{ en: 'If you heat water, it boils', pt: 'Se você esquenta água, ela ferve' }] }] }
    ]
  },
  {
    id: 'modal-verbs',
    name: 'Modal Verbs',
    description: 'Express ability, possibility, and permission',
    icon: '💪',
    gradient: 'from-teal-500 to-cyan-600',
    stepId: 11,
    unlockRequirement: 5,
    estimatedHours: 7,
    totalExercises: 90,
    exercisePacks: modalVerbsExercisePacks,
    quizPacks: [],
    sections: [
      { id: 'modal-basic', title: 'Modal Verbs', type: 'grammar', content: [{ id: 'mb-intro', title: 'What are Modal Verbs?', text: 'Modal verbs express ability or possibility.', translation: 'Verbos modais expressam habilidade ou possibilidade.', examples: [{ en: 'I can swim', pt: 'Eu sei nadar' }] }] }
    ]
  },
  {
    id: 'comparisons',
    name: 'Comparisons',
    description: 'Compare people and things',
    icon: '⚖️',
    gradient: 'from-orange-500 to-red-600',
    stepId: 12,
    unlockRequirement: 6,
    estimatedHours: 6,
    totalExercises: 80,
    exercisePacks: comparisonsExercisePacks,
    quizPacks: [],
    sections: [
      { id: 'comp-basic', title: 'Comparatives & Superlatives', type: 'grammar', content: [{ id: 'cb-intro', title: 'Making Comparisons', text: 'Use comparatives and superlatives.', translation: 'Use comparativos e superlativos.', examples: [{ en: 'She is taller', pt: 'Ela é mais alta' }] }] }
    ]
  },
  {
    id: 'passive-voice',
    name: 'Passive Voice',
    description: 'Change sentence focus',
    icon: '🔄',
    gradient: 'from-slate-600 to-slate-800',
    stepId: 13,
    unlockRequirement: 6,
    estimatedHours: 7,
    totalExercises: 90,
    exercisePacks: passiveVoiceExercisePacks,
    quizPacks: [],
    sections: [
      { id: 'pass-basic', title: 'Passive Voice', type: 'grammar', content: [{ id: 'pass-intro', title: 'What is Passive Voice?', text: 'Passive voice focuses on the action.', translation: 'Voz passiva foca na ação.', examples: [{ en: 'The cake was eaten', pt: 'O bolo foi comido' }] }] }
    ]
  },
  {
    id: 'reported-speech',
    name: 'Reported Speech',
    description: 'Tell others what someone said',
    icon: '🗣️',
    gradient: 'from-violet-500 to-purple-700',
    stepId: 14,
    unlockRequirement: 6,
    estimatedHours: 8,
    totalExercises: 100,
    exercisePacks: reportedSpeechExercisePacks,
    quizPacks: [],
    sections: [
      { id: 'rep-basic', title: 'Reported Speech', type: 'grammar', content: [{ id: 'rep-intro', title: 'What is Reported Speech?', text: 'Reported speech conveys what someone said.', translation: 'Discurso reportado transmite o que alguém disse.', examples: [{ en: 'She said she was tired', pt: 'Ela disse que estava cansada' }] }] }
    ]
  },
  {
    id: 'complex-sentences',
    name: 'Complex Sentences',
    description: 'Join ideas with conjunctions',
    icon: '🔗',
    gradient: 'from-blue-600 to-indigo-700',
    stepId: 15,
    unlockRequirement: 6,
    estimatedHours: 8,
    totalExercises: 100,
    exercisePacks: complexSentencesExercisePacks,
    quizPacks: [],
    sections: [
      { id: 'complex-basic', title: 'Complex Sentences', type: 'grammar', content: [{ id: 'cx-intro', title: 'What are Complex Sentences?', text: 'Complex sentences have main and subordinate clauses.', translation: 'Orações complexas têm cláusulas.', examples: [{ en: 'Although it rained', pt: 'Embora chovesse' }] }] }
    ]
  },
  {
    id: 'paragraph-writing',
    name: 'Paragraph Writing',
    description: 'Write well-structured paragraphs',
    icon: '📄',
    gradient: 'from-green-500 to-emerald-700',
    stepId: 16,
    unlockRequirement: 6,
    estimatedHours: 6,
    totalExercises: 80,
    exercisePacks: paragraphWritingExercisePacks,
    quizPacks: [],
    sections: [
      { id: 'para-basic', title: 'Paragraph Structure', type: 'grammar', content: [{ id: 'para-intro', title: 'What is a Paragraph?', text: 'A paragraph has topic, details, and conclusion.', translation: 'Um parágrafo tem tópico e detalhes.', examples: [{ en: 'First...', pt: 'Primeiro...' }] }] }
    ]
  },
  {
    id: 'essay-writing',
    name: 'Essay Writing',
    description: 'Write essays',
    icon: '📑',
    gradient: 'from-red-500 to-rose-700',
    stepId: 17,
    unlockRequirement: 6,
    estimatedHours: 10,
    totalExercises: 120,
    exercisePacks: essayWritingExercisePacks,
    quizPacks: [],
    sections: [
      { id: 'essay-basic', title: 'Essay Structure', type: 'grammar', content: [{ id: 'essay-intro', title: 'What is an Essay?', text: 'An essay has intro, body, and conclusion.', translation: 'Uma redação tem introdução e conclusão.', examples: [{ en: 'In conclusion...', pt: 'Em conclusão...' }] }] }
    ]
  },
  {
    id: 'advanced-grammar',
    name: 'Advanced Grammar',
    description: 'Master advanced structures',
    icon: '🎓',
    gradient: 'from-slate-500 to-slate-700',
    stepId: 18,
    unlockRequirement: 6,
    estimatedHours: 12,
    totalExercises: 150,
    exercisePacks: advancedGrammarExercisePacks,
    quizPacks: [],
    sections: [
      { id: 'adv-basic', title: 'Advanced Structures', type: 'grammar', content: [{ id: 'adv-intro', title: 'Advanced Grammar', text: 'Learn complex structures.', translation: 'Aprenda estruturas complexas.', examples: [{ en: 'Had I known', pt: 'Se eu soubesse' }] }] }
    ]
  },
  {
    id: 'business-writing',
    name: 'Business Writing',
    description: 'Write professional emails',
    icon: '💼',
    gradient: 'from-slate-600 to-slate-800',
    stepId: 19,
    unlockRequirement: 6,
    estimatedHours: 8,
    totalExercises: 100,
    exercisePacks: businessWritingExercisePacks,
    quizPacks: [],
    sections: [
      { id: 'biz-basic', title: 'Professional Writing', type: 'grammar', content: [{ id: 'biz-intro', title: 'Business Writing', text: 'Learn formal writing.', translation: 'Aprenda escrita formal.', examples: [{ en: 'Dear Sir', pt: 'Prezado Senhor' }] }] }
    ]
  },
  {
    id: 'creative-writing',
    name: 'Creative Writing',
    description: 'Write stories',
    icon: '✍️',
    gradient: 'from-pink-500 to-rose-700',
    stepId: 20,
    unlockRequirement: 6,
    estimatedHours: 10,
    totalExercises: 120,
    exercisePacks: creativeWritingExercisePacks,
    quizPacks: [],
    sections: [
      { id: 'creat-basic', title: 'Narrative Writing', type: 'grammar', content: [{ id: 'creat-intro', title: 'Creative Writing', text: 'Write engaging stories.', translation: 'Escreva histórias envolventes.', examples: [{ en: 'Suddenly...', pt: 'De repente...' }] }] }
    ]
  }
];

export const getAcademyCourse = (id: string): AcademyCourse | undefined => academyCourses.find(course => course.id === id);
export const getAcademyCourseByStepId = (stepId: number): AcademyCourse | undefined => academyCourses.find(course => course.stepId === stepId);