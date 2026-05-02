import { Level, Unit, Lesson } from '@/types';

export const levels: Level[] = [
  {
    id: 1,
    title: 'Beginner',
    description: 'Start your English writing journey',
    units: []
  },
  {
    id: 2,
    title: 'Elementary',
    description: 'Build your foundation',
    units: []
  },
  {
    id: 3,
    title: 'Intermediate',
    description: 'Express yourself with confidence',
    units: []
  },
  {
    id: 4,
    title: 'Upper Intermediate',
    description: 'Master complex structures',
    units: []
  },
  {
    id: 5,
    title: 'Advanced',
    description: 'Write like a native speaker',
    units: []
  }
];

export const units: Unit[] = [
  {
    id: 1,
    level: 1,
    title: 'Building Basic Sentences',
    description: 'Learn to form simple but correct sentences',
    icon: '📝',
    color: '#58cc02',
    lessons: []
  },
  {
    id: 2,
    level: 1,
    title: 'Present Tense',
    description: 'Master the present tenses',
    icon: '⏰',
    color: '#ff9600',
    lessons: []
  },
  {
    id: 3,
    level: 1,
    title: 'Articles & Nouns',
    description: 'Master articles and noun forms',
    icon: '📖',
    color: '#1cb0f6',
    lessons: []
  },
  {
    id: 4,
    level: 1,
    title: 'Adjectives & Adverbs',
    description: 'Make your writing more descriptive',
    icon: '✨',
    color: '#8e44ad',
    lessons: []
  },
  {
    id: 5,
    level: 2,
    title: 'Past Tense',
    description: 'Tell stories about the past',
    icon: '📚',
    color: '#e74c3c',
    lessons: []
  },
  {
    id: 6,
    level: 2,
    title: 'Prepositions',
    description: 'Connect ideas with prepositions',
    icon: '🔗',
    color: '#f39c12',
    lessons: []
  },
  {
    id: 7,
    level: 2,
    title: 'Subject-Verb Agreement',
    description: 'Make your sentences grammatically correct',
    icon: '✅',
    color: '#2ecc71',
    lessons: []
  },
  {
    id: 8,
    level: 2,
    title: 'Pronouns',
    description: 'Use pronouns correctly',
    icon: '👤',
    color: '#3498db',
    lessons: []
  },
  {
    id: 9,
    level: 3,
    title: 'Future Tense',
    description: 'Talk about the future',
    icon: '🚀',
    color: '#9b59b6',
    lessons: []
  },
  {
    id: 10,
    level: 3,
    title: 'Conditional Sentences',
    description: 'Express possibilities and Hypotheses',
    icon: '🤔',
    color: '#e67e22',
    lessons: []
  },
  {
    id: 11,
    level: 3,
    title: 'Modal Verbs',
    description: 'Express ability, possibility, and permission',
    icon: '💪',
    color: '#16a085',
    lessons: []
  },
  {
    id: 12,
    level: 3,
    title: 'Comparisons',
    description: 'Compare people, things, and ideas',
    icon: '⚖️',
    color: '#d35400',
    lessons: []
  },
  {
    id: 13,
    level: 4,
    title: 'Passive Voice',
    description: 'Change the focus of your sentences',
    icon: '🔄',
    color: '#2c3e50',
    lessons: []
  },
  {
    id: 14,
    level: 4,
    title: 'Reported Speech',
    description: 'Tell others what someone said',
    icon: '🗣️',
    color: '#8e44ad',
    lessons: []
  },
  {
    id: 15,
    level: 4,
    title: 'Complex Sentences',
    description: 'Join ideas with subordinating conjunctions',
    icon: '🔗',
    color: '#2980b9',
    lessons: []
  },
  {
    id: 16,
    level: 4,
    title: 'Paragraph Writing',
    description: 'Write well-structured paragraphs',
    icon: '📄',
    color: '#27ae60',
    lessons: []
  },
  {
    id: 17,
    level: 5,
    title: 'Essay Writing',
    description: 'Write argumentative and expository essays',
    icon: '📑',
    color: '#c0392b',
    lessons: []
  },
  {
    id: 18,
    level: 5,
    title: 'Advanced Grammar',
    description: 'Master advanced grammatical structures',
    icon: '🎓',
    color: '#7f8c8d',
    lessons: []
  },
  {
    id: 19,
    level: 5,
    title: 'Business Writing',
    description: 'Write professional emails and letters',
    icon: '💼',
    color: '#34495e',
    lessons: []
  },
  {
    id: 20,
    level: 5,
    title: 'Creative Writing',
    description: 'Write stories and narratives',
    icon: '✍️',
    color: '#e91e63',
    lessons: []
  }
];

export const getCurriculum = (): Level[] => {
  const curriculum = levels.map(level => ({
    ...level,
    units: units.filter(unit => unit.level === level.id)
  }));
  
  return curriculum;
};

export const getUnitById = (id: number): Unit | undefined => {
  return units.find(unit => unit.id === id);
};

export const getLessonById = (lessonId: string): Lesson | undefined => {
  for (const unit of units) {
    const lesson = unit.lessons.find(l => l.id === lessonId);
    if (lesson) return lesson;
  }
  return undefined;
};

export const getNextLesson = (currentLessonId: string): Lesson | null => {
  const allLessons = units.flatMap(unit => unit.lessons);
  const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
  
  if (currentIndex >= 0 && currentIndex < allLessons.length - 1) {
    return allLessons[currentIndex + 1];
  }
  
  return null;
};

export const getPreviousLesson = (currentLessonId: string): Lesson | null => {
  const allLessons = units.flatMap(unit => unit.lessons);
  const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
  
  if (currentIndex > 0) {
    return allLessons[currentIndex - 1];
  }
  
  return null;
};

export const getLessonsByUnit = (unitId: number): Lesson[] => {
  const unit = units.find(u => u.id === unitId);
  return unit?.lessons || [];
};

export const getTotalLessons = (): number => {
  return units.reduce((total, unit) => total + unit.lessons.length, 0);
};

export const getTotalXP = (): number => {
  return units.reduce((total, unit) => 
    total + unit.lessons.reduce((unitTotal, lesson) => unitTotal + lesson.xp, 0), 
    0
  );
};