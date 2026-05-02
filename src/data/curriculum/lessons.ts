import { Lesson, Unit } from '@/types';
import { units as allUnits } from './structure';

const createLessonsForUnit1 = (): Lesson[] => [
  {
    id: '1-1',
    unitId: 1,
    title: 'Subject + Verb',
    description: 'Learn the basic sentence structure',
    type: 'grammar',
    xp: 10,
    gems: 1,
    exercises: [
      {
        id: '1-1-1',
        type: 'multiple_choice',
        question: 'Complete: I ___ English every day.',
        options: ['write', 'writes', 'writed', 'writing'],
        correct: 0,
        explanation: 'With "I", we use the verb without "s". Write → write',
        xp: 10
      },
      {
        id: '1-1-2',
        type: 'fill_blank',
        question: 'She ___ (study) medicine.',
        answer: 'studies',
        explanation: 'With "she/he/it", we add "s" to the verb. Study → studies',
        xp: 10
      },
      {
        id: '1-1-3',
        type: 'multiple_choice',
        question: 'Which sentence is correct?',
        options: [
          'He go to school.',
          'He goes to school.',
          'He going to school.',
          'He to go school.'
        ],
        correct: 1,
        explanation: 'With "he", we use "goes" (verb + s)',
        xp: 10
      },
      {
        id: '1-1-4',
        type: 'fill_blank',
        question: 'They ___ (work) at a bank.',
        answer: 'work',
        explanation: 'With "they", use the infinitive (without s)',
        xp: 10
      },
      {
        id: '1-1-5',
        type: 'multiple_choice',
        question: 'When ___ he ___ (arrive)?',
        options: ['does / arrives', 'do / arrives', 'does / arrive', 'do / arrive'],
        correct: 2,
        explanation: 'Question with "does" + base verb (without s)',
        xp: 10
      }
    ],
    prerequisites: []
  },
  {
    id: '1-2',
    unitId: 1,
    title: 'Articles: a, an, the',
    description: 'Master the use of articles',
    type: 'grammar',
    xp: 10,
    gems: 1,
    exercises: [
      {
        id: '1-2-1',
        type: 'multiple_choice',
        question: 'Complete: ___ honest man',
        options: ['a', 'an', 'the', '∅'],
        correct: 1,
        explanation: 'We use "an" before vowels. Honest starts with vowel sound (o-nest)',
        xp: 10
      },
      {
        id: '1-2-2',
        type: 'fill_blank',
        question: 'I need ___ (a) book.',
        answer: 'a',
        explanation: 'We use "a" before consonants. Book starts with consonant sound',
        xp: 10
      },
      {
        id: '1-2-3',
        type: 'multiple_choice',
        question: 'Which article do we use for "university"?',
        options: ['a university', 'an university', 'the university', '∅ university'],
        correct: 0,
        explanation: 'University starts with consonant sound (yu-), so we use "a"',
        xp: 10
      },
      {
        id: '1-2-4',
        type: 'fill_blank',
        question: 'She is ___ (the) best student.',
        answer: 'the',
        explanation: '"The" is used before superlatives',
        xp: 10
      },
      {
        id: '1-2-5',
        type: 'multiple_choice',
        question: 'Complete: I bought ___ apple.',
        options: ['a', 'an', 'the', 'some'],
        correct: 0,
        explanation: 'We use "a" with singular countable nouns when talking about one',
        xp: 10
      }
    ],
    prerequisites: ['1-1']
  },
  {
    id: '1-3',
    unitId: 1,
    title: 'Singular and Plural',
    description: 'Learn regular and irregular plurals',
    type: 'grammar',
    xp: 10,
    gems: 1,
    exercises: [
      {
        id: '1-3-1',
        type: 'multiple_choice',
        question: 'The plural of "child" is:',
        options: ['childs', 'children', 'childrens', 'childes'],
        correct: 1,
        explanation: '"Child" is irregular. Plural: children',
        xp: 10
      },
      {
        id: '1-3-2',
        type: 'fill_blank',
        question: 'There are three ___ (woman) in the room.',
        answer: 'women',
        explanation: 'Woman → Women (irregular)',
        xp: 10
      },
      {
        id: '1-3-3',
        type: 'multiple_choice',
        question: 'The correct plural of "tooth" is:',
        options: ['tooths', 'teeth', 'toothes', 'toothies'],
        correct: 1,
        explanation: 'Tooth → Teeth (irregular)',
        xp: 10
      },
      {
        id: '1-3-4',
        type: 'fill_blank',
        question: 'There are many ___ (mouse) in the house.',
        answer: 'mice',
        explanation: 'Mouse → Mice (irregular)',
        xp: 10
      },
      {
        id: '1-3-5',
        type: 'multiple_choice',
        question: 'The plural of "box" is:',
        options: ['boxs', 'boxes', 'boxies', 'boxen'],
        correct: 1,
        explanation: 'Regular plural: add "es" to words ending in x, s, sh, ch',
        xp: 10
      }
    ],
    prerequisites: ['1-2']
  },
  {
    id: '1-4',
    unitId: 1,
    title: 'Writing: About Yourself',
    description: 'Write about yourself',
    type: 'writing',
    xp: 20,
    gems: 5,
    exercises: [
      {
        id: '1-4-1',
        type: 'writing',
        question: 'Write 5-8 sentences about yourself. Include your name, what you do, and what you like.',
        prompt: 'Write about yourself. Include:\n- Your name\n- What you do (work/study)\n- What you like to do\n- Something interesting about you',
        minWords: 30,
        maxWords: 100,
        grammarFocus: ['subject-verb', 'articles', 'present-simple'],
        xp: 20,
        explanation: 'Write about yourself using what you learned about sentence structure and articles.'
      }
    ],
    prerequisites: ['1-3']
  }
];

const createLessonsForUnit2 = (): Lesson[] => [
  {
    id: '2-1',
    unitId: 2,
    title: 'Present Simple',
    description: 'Master the present simple tense',
    type: 'grammar',
    xp: 10,
    gems: 1,
    exercises: [
      {
        id: '2-1-1',
        type: 'multiple_choice',
        question: 'She ___ coffee every morning.',
        options: ['drink', 'drinks', 'drinking', 'drank'],
        correct: 1,
        explanation: 'Present Simple with she/he/it: verb + s',
        xp: 10
      },
      {
        id: '2-1-2',
        type: 'fill_blank',
        question: 'They ___ (work) at a bank.',
        answer: 'work',
        explanation: 'With "they", verb in infinitive (without s)',
        xp: 10
      },
      {
        id: '2-1-3',
        type: 'multiple_choice',
        question: 'When ___ he ___ (arrive)?',
        options: ['does / arrives', 'do / arrives', 'does / arrive', 'do / arrive'],
        correct: 2,
        explanation: 'Question with "does" + base verb (without s)',
        xp: 10
      },
      {
        id: '2-1-4',
        type: 'fill_blank',
        question: 'The sun ___ (rise) in the east.',
        answer: 'rises',
        explanation: 'With third person singular, add "s" to the verb',
        xp: 10
      },
      {
        id: '2-1-5',
        type: 'multiple_choice',
        question: 'I ___ (not/understand) French.',
        options: ['not understand', "don't understand", 'not understands', "doesn't understand"],
        correct: 1,
        explanation: 'Negative: subject + do not + base verb',
        xp: 10
      }
    ],
    prerequisites: []
  },
  {
    id: '2-2',
    unitId: 2,
    title: 'Present Continuous',
    description: 'Describe actions happening now',
    type: 'grammar',
    xp: 10,
    gems: 1,
    exercises: [
      {
        id: '2-2-1',
        type: 'multiple_choice',
        question: 'Look! She ___ (dance).',
        options: ['dance', 'dances', 'is dancing', 'danced'],
        correct: 2,
        explanation: 'Present Continuous = am/is/are + verb-ing. For actions happening now',
        xp: 10
      },
      {
        id: '2-2-2',
        type: 'fill_blank',
        question: 'I ___ (study) English now.',
        answer: 'am studying',
        explanation: 'I + am + verb-ing',
        xp: 10
      },
      {
        id: '2-2-3',
        type: 'multiple_choice',
        question: 'They ___ (play) football right now.',
        options: ['play', 'plays', 'are playing', 'is playing'],
        correct: 2,
        explanation: 'They + are + playing',
        xp: 10
      },
      {
        id: '2-2-4',
        type: 'fill_blank',
        question: 'He ___ (not/work) today.',
        answer: 'is not working',
        explanation: 'Negative: is/are/am + not + verb-ing',
        xp: 10
      },
      {
        id: '2-2-5',
        type: 'multiple_choice',
        question: 'What ___ you ___ (do) right now?',
        options: ['are / doing', 'do / doing', 'are / do', 'do / do'],
        correct: 0,
        explanation: 'Question: am/is/are + subject + verb-ing',
        xp: 10
      }
    ],
    prerequisites: ['2-1']
  },
  {
    id: '2-3',
    unitId: 2,
    title: 'Present Simple vs Continuous',
    description: 'Know when to use each tense',
    type: 'grammar',
    xp: 15,
    gems: 2,
    exercises: [
      {
        id: '2-3-1',
        type: 'multiple_choice',
        question: 'I ___ English every day. (routine)',
        options: ['am learning', 'learn', 'learns', 'learning'],
        correct: 1,
        explanation: 'Routines and habits use Present Simple',
        xp: 10
      },
      {
        id: '2-3-2',
        type: 'multiple_choice',
        question: 'Right now, I ___ my homework. (action in progress)',
        options: ['do', 'doing', 'am doing', 'does'],
        correct: 2,
        explanation: 'Actions at the moment use Present Continuous',
        xp: 10
      },
      {
        id: '2-3-3',
        type: 'fill_blank',
        question: 'She usually ___ (wake up) at 7am. But right now she ___ (sleep).',
        answer: 'wakes up; is sleeping',
        explanation: 'Usually = Present Simple. Now = Present Continuous',
        xp: 15
      },
      {
        id: '2-3-4',
        type: 'multiple_choice',
        question: 'Water ___ (boil) at 100 degrees.',
        options: ['is boiling', 'boils', 'boiling', 'boiled'],
        correct: 1,
        explanation: 'General truths and facts use Present Simple',
        xp: 10
      },
      {
        id: '2-3-5',
        type: 'fill_blank',
        question: 'Listen! Someone ___ (knock) at the door.',
        answer: 'is knocking',
        explanation: 'Listen/Look + Present Continuous for immediate actions',
        xp: 15
      }
    ],
    prerequisites: ['2-2']
  },
  {
    id: '2-4',
    unitId: 2,
    title: 'Writing: Your Day',
    description: 'Describe your daily routine',
    type: 'writing',
    xp: 20,
    gems: 5,
    exercises: [
      {
        id: '2-4-1',
        type: 'writing',
        question: 'Describe your typical day. Use Present Simple for routines and Present Continuous for what you are doing right now.',
        prompt: 'Write about your typical day:\n- What time do you wake up?\n- What do you do in the morning?\n- What are you doing while writing this?',
        minWords: 50,
        maxWords: 120,
        grammarFocus: ['present_simple', 'present_continuous', 'time_expressions'],
        xp: 20,
        explanation: 'Use Present Simple for habits and routines, Present Continuous for actions happening now.'
      }
    ],
    prerequisites: ['2-3']
  }
];

const createLessonsForUnit3 = (): Lesson[] => [
  {
    id: '3-1',
    unitId: 3,
    title: 'Using Adjectives',
    description: 'Learn adjective order and usage',
    type: 'grammar',
    xp: 10,
    gems: 1,
    exercises: [
      {
        id: '3-1-1',
        type: 'multiple_choice',
        question: "She's a ___ girl.",
        options: ['beautiful tall', 'tall beautiful', 'beautifully tall', 'tall beautifully'],
        correct: 1,
        explanation: 'Order: size + adjective. Tall beautiful girl',
        xp: 10
      },
      {
        id: '3-1-2',
        type: 'fill_blank',
        question: 'I have ___ (three) dogs.',
        answer: 'three',
        explanation: 'Numbers come before adjectives',
        xp: 10
      },
      {
        id: '3-1-3',
        type: 'multiple_choice',
        question: 'The ___ weather made us stay home.',
        options: ['bad', 'badly', 'badder', 'more bad'],
        correct: 0,
        explanation: 'Adjective after "the" and before the noun',
        xp: 10
      },
      {
        id: '3-1-4',
        type: 'fill_blank',
        question: "It's a ___ (beautiful) day.",
        answer: 'beautiful',
        explanation: 'Adjective comes before noun or after linking verb',
        xp: 10
      },
      {
        id: '3-1-5',
        type: 'multiple_choice',
        question: 'This is the ___ movie I have ever seen.',
        options: ['most interesting', 'interestingest', 'more interesting', 'interestingmost'],
        correct: 0,
        explanation: 'Superlative with "the most" for long adjectives',
        xp: 10
      }
    ],
    prerequisites: []
  },
  {
    id: '3-2',
    unitId: 3,
    title: 'Adverbs of Frequency',
    description: 'Express how often you do something',
    type: 'grammar',
    xp: 10,
    gems: 1,
    exercises: [
      {
        id: '3-2-1',
        type: 'multiple_choice',
        question: 'She ___ goes to the gym.',
        options: ['always', 'alwaysly', 'most always', 'very always'],
        correct: 0,
        explanation: 'Frequency adverbs come before the main verb',
        xp: 10
      },
      {
        id: '3-2-2',
        type: 'fill_blank',
        question: 'I ___ (never) eat fast food.',
        answer: 'never',
        explanation: 'Never, always, usually, sometimes come before the verb',
        xp: 10
      },
      {
        id: '3-2-3',
        type: 'multiple_choice',
        question: '___ do you study? - I study every day.',
        options: ['How long', 'How often', 'When', 'What time'],
        correct: 1,
        explanation: 'How often is used for frequency',
        xp: 10
      },
      {
        id: '3-2-4',
        type: 'fill_blank',
        question: 'They are ___ (usually) late.',
        answer: 'usually',
        explanation: 'Frequency adverb comes after "to be" verb',
        xp: 10
      },
      {
        id: '3-2-5',
        type: 'multiple_choice',
        question: 'I go to the cinema ___ a month.',
        options: ['twice', 'two times', 'second time', 'the second'],
        correct: 0,
        explanation: 'Twice, once, three times are used for frequency',
        xp: 10
      }
    ],
    prerequisites: ['3-1']
  },
  {
    id: '3-3',
    unitId: 3,
    title: 'Comparatives',
    description: 'Compare people and things',
    type: 'grammar',
    xp: 10,
    gems: 1,
    exercises: [
      {
        id: '3-3-1',
        type: 'multiple_choice',
        question: 'This book is ___ than that one.',
        options: ['more interesting', 'interestinger', 'more interestinger', 'interesting'],
        correct: 0,
        explanation: 'Comparative: more + long adjective',
        xp: 10
      },
      {
        id: '3-3-2',
        type: 'fill_blank',
        question: 'She is ___ (tall) than her sister.',
        answer: 'taller',
        explanation: 'Short adjectives: adjective + er',
        xp: 10
      },
      {
        id: '3-3-3',
        type: 'multiple_choice',
        question: 'The weather is getting ___.',
        options: ['badder', 'more bad', 'worse', 'bader'],
        correct: 2,
        explanation: 'Irregular: bad → worse',
        xp: 10
      },
      {
        id: '3-3-4',
        type: 'fill_blank',
        question: 'This is the ___ (good) movie I have seen.',
        answer: 'best',
        explanation: 'Irregular: good → better → best',
        xp: 10
      },
      {
        id: '3-3-5',
        type: 'multiple_choice',
        question: 'She runs ___ than me.',
        options: ['more fast', 'faster', 'more faster', 'fastlier'],
        correct: 1,
        explanation: 'Short adjectives double final consonant: fast → faster',
        xp: 10
      }
    ],
    prerequisites: ['3-2']
  },
  {
    id: '3-4',
    unitId: 3,
    title: 'Writing: Describe a Person',
    description: 'Write about someone you know',
    type: 'writing',
    xp: 20,
    gems: 5,
    exercises: [
      {
        id: '3-4-1',
        type: 'writing',
        question: 'Describe someone you know well. Use adjectives to describe their appearance and personality. Include comparatives.',
        prompt: 'Write about someone you know:\n- What do they look like?\n- What is their personality like?\n- Compare them to someone else\n- How long have you known them?',
        minWords: 50,
        maxWords: 120,
        grammarFocus: ['adjectives', 'adverbs', 'comparatives', 'superlatives'],
        xp: 20,
        explanation: 'Use adjectives to describe and comparatives to compare.'
      }
    ],
    prerequisites: ['3-3']
  }
];

export const initializeLessons = (): Unit[] => {
  const updatedUnits = [...allUnits];
  
  const unit1Index = updatedUnits.findIndex(u => u.id === 1);
  if (unit1Index !== -1) {
    updatedUnits[unit1Index] = {
      ...updatedUnits[unit1Index],
      lessons: createLessonsForUnit1()
    };
  }
  
  const unit2Index = updatedUnits.findIndex(u => u.id === 2);
  if (unit2Index !== -1) {
    updatedUnits[unit2Index] = {
      ...updatedUnits[unit2Index],
      lessons: createLessonsForUnit2()
    };
  }
  
  const unit3Index = updatedUnits.findIndex(u => u.id === 3);
  if (unit3Index !== -1) {
    updatedUnits[unit3Index] = {
      ...updatedUnits[unit3Index],
      lessons: createLessonsForUnit3()
    };
  }
  
  return updatedUnits;
};

export const lessonsData = initializeLessons();