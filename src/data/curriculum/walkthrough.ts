export type ProficiencyLevel = 'beginner' | 'elementary' | 'intermediate' | 'upper_intermediate' | 'advanced';

import type { Skill, WalkthroughStep, SkillCategory } from '@/types';
export type { Skill, WalkthroughStep, SkillCategory };

export const skills: Skill[] = [
  // Verb fundamentals
  { id: 'subject-verb', name: 'Subject-Verb Agreement', category: 'verbs', description: 'Basic sentence structure' },
  { id: 'be-verb', name: 'Be Verb (am/is/are)', category: 'verbs', description: 'Using the be verb' },
  { id: 'have-verb', name: 'Have/Has', category: 'verbs', description: 'Possession and auxiliary' },
  
  // Tenses
  { id: 'present-simple', name: 'Present Simple', category: 'tenses', description: 'Daily routines and facts' },
  { id: 'present-continuous', name: 'Present Continuous', category: 'tenses', description: 'Actions happening now' },
  { id: 'past-simple', name: 'Past Simple', category: 'tenses', description: 'Completed actions in past' },
  { id: 'past-continuous', name: 'Past Continuous', category: 'tenses', description: 'Actions in progress in past' },
  { id: 'future-will', name: 'Future (will)', category: 'tenses', description: 'Predictions and decisions' },
  { id: 'future-going', name: 'Future (going to)', category: 'tenses', description: 'Plans and intentions' },
  
  // Grammar
  { id: 'articles', name: 'Articles (a/an/the)', category: 'grammar', description: 'Definite and indefinite articles' },
  { id: 'pronouns', name: 'Pronouns', category: 'grammar', description: 'Personal and possessive pronouns' },
  { id: 'adjectives', name: 'Adjectives', category: 'grammar', description: 'Describing nouns' },
  { id: 'adverbs', name: 'Adverbs', category: 'grammar', description: 'Modifying verbs and adjectives' },
  { id: 'prepositions', name: 'Prepositions', category: 'grammar', description: 'Position and time' },
  { id: 'comparatives', name: 'Comparatives', category: 'grammar', description: 'Comparing things' },
  { id: 'conditionals', name: 'Conditionals', category: 'grammar', description: 'If sentences' },
  { id: 'modal-verbs', name: 'Modal Verbs', category: 'grammar', description: 'Can, must, should, etc.' },
  { id: 'passive', name: 'Passive Voice', category: 'grammar', description: 'Focus on the action' },
  
  // Writing
  { id: 'sentences', name: 'Sentence Writing', category: 'writing', description: 'Writing basic sentences' },
  { id: 'paragraphs', name: 'Paragraph Writing', category: 'writing', description: 'Writing organized paragraphs' },
  { id: 'essays', name: 'Essay Writing', category: 'writing', description: 'Writing essays' },
];

export const walkthroughPath: WalkthroughStep[] = [
  {
    id: 1,
    name: 'Foundation',
    description: 'Learn the basics of English writing',
    skills: [
      skills.find(s => s.id === 'subject-verb')!,
      skills.find(s => s.id === 'be-verb')!,
      skills.find(s => s.id === 'present-simple')!,
      skills.find(s => s.id === 'articles')!,
      skills.find(s => s.id === 'sentences')!,
    ],
  },
  {
    id: 2,
    name: 'Present Tenses',
    description: 'Master present tenses for everyday writing',
    skills: [
      skills.find(s => s.id === 'present-simple')!,
      skills.find(s => s.id === 'present-continuous')!,
      skills.find(s => s.id === 'pronouns')!,
      skills.find(s => s.id === 'adverbs')!,
    ],
  },
  {
    id: 3,
    name: 'Past Tenses',
    description: 'Tell stories about the past',
    skills: [
      skills.find(s => s.id === 'past-simple')!,
      skills.find(s => s.id === 'past-continuous')!,
      skills.find(s => s.id === 'adjectives')!,
    ],
  },
  {
    id: 4,
    name: 'Future & More',
    description: 'Talk about the future and expand your skills',
    skills: [
      skills.find(s => s.id === 'future-will')!,
      skills.find(s => s.id === 'future-going')!,
      skills.find(s => s.id === 'prepositions')!,
      skills.find(s => s.id === 'comparatives')!,
    ],
  },
  {
    id: 5,
    name: 'Intermediate Grammar',
    description: 'Advanced grammar structures',
    skills: [
      skills.find(s => s.id === 'conditionals')!,
      skills.find(s => s.id === 'modal-verbs')!,
      skills.find(s => s.id === 'have-verb')!,
    ],
  },
  {
    id: 6,
    name: 'Advanced Writing',
    description: 'Write complex texts',
    skills: [
      skills.find(s => s.id === 'passive')!,
      skills.find(s => s.id === 'paragraphs')!,
      skills.find(s => s.id === 'essays')!,
    ]
  }
];

export const getSkillById = (id: string): Skill | undefined => {
  return skills.find(s => s.id === id);
};

export const getSkillsByCategory = (category: Skill['category']): Skill[] => {
  return skills.filter(s => s.category === category);
};

export const getWalkthroughStep = (stepId: number): WalkthroughStep | undefined => {
  return walkthroughPath.find(s => s.id === stepId);
};

export const getTotalSteps = (): number => {
  return walkthroughPath.length;
};