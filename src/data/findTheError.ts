export interface FindTheErrorPack {
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: 'easy' | 'medium' | 'hard';
  exercises: {
    id: string;
    text: string;
    errors: { wordIndex: number; text: string; explanation: string }[];
    points: number;
  }[];
}

export const findTheErrorPacks: FindTheErrorPack[] = [
  // Easy Packs
  {
    id: 'fte-easy-1',
    title: 'Basic Grammar',
    description: 'Common beginner mistakes',
    icon: '📝',
    difficulty: 'easy',
    exercises: [
      {
        id: 'fte-e1-1',
        text: "She don't likes coffee because its too sweet.",
        errors: [
          { wordIndex: 1, text: "don't likes", explanation: "Use doesn't with third person: She doesn't like" },
          { wordIndex: 5, text: "its", explanation: "Use it's (it is) for possession" }
        ],
        points: 15
      },
      {
        id: 'fte-e1-2',
        text: "He go to school by bus everyday.",
        errors: [
          { wordIndex: 1, text: "go", explanation: "Third person singular: He goes" },
          { wordIndex: 7, text: "everyday", explanation: "Use every day (two words)" }
        ],
        points: 15
      },
      {
        id: 'fte-e1-3',
        text: "I am agree with you about this matter.",
        errors: [
          { wordIndex: 1, text: "am agree", explanation: "Use agree without am: I agree (not I am agree)" }
        ],
        points: 15
      },
      {
        id: 'fte-e1-4',
        text: "She have two childs and a dog.",
        errors: [
          { wordIndex: 2, text: "childs", explanation: "Plural of child is children" }
        ],
        points: 15
      }
    ]
  },
  {
    id: 'fte-easy-2',
    title: 'Subject-Verb',
    description: 'Agreement errors',
    icon: '🔗',
    difficulty: 'easy',
    exercises: [
      {
        id: 'fte-e2-1',
        text: "My friends is very happy today.",
        errors: [
          { wordIndex: 2, text: "is", explanation: "Friends is plural: My friends are" }
        ],
        points: 15
      },
      {
        id: 'fte-e2-2',
        text: "There is many reasons for this.",
        errors: [
          { wordIndex: 1, text: "is", explanation: "Use many with countable: There are many reasons" }
        ],
        points: 15
      },
      {
        id: 'fte-e2-3',
        text: "The news are good for us.",
        errors: [
          { wordIndex: 2, text: "are", explanation: "News is uncountable: The news is" }
        ],
        points: 15
      },
      {
        id: 'fte-e2-4',
        text: "She don't goes to the gym.",
        errors: [
          { wordIndex: 1, text: "don't", explanation: "Use doesn't: She doesn't go" }
        ],
        points: 15
      }
    ]
  },
  {
    id: 'fte-easy-3',
    title: 'Adjectives & Adverbs',
    description: 'Common adjective mistakes',
    icon: '✨',
    difficulty: 'easy',
    exercises: [
      {
        id: 'fte-e3-1',
        text: "I am interesting in learning English.",
        errors: [
          { wordIndex: 2, text: "interesting", explanation: "Use interested (not interesting) for feelings" }
        ],
        points: 15
      },
      {
        id: 'fte-e3-2',
        text: "He drove the car very fastly.",
        errors: [
          { wordIndex: 5, text: "fastly", explanation: "Fast is already an adverb" }
        ],
        points: 15
      },
      {
        id: 'fte-e3-3',
        text: "She speaks English real good.",
        errors: [
          { wordIndex: 3, text: "real", explanation: "Use really good (real is adjective)" }
        ],
        points: 15
      }
    ]
  },
  // Medium Packs
  {
    id: 'fte-medium-1',
    title: 'Conditionals',
    description: 'If clauses mistakes',
    icon: '🤔',
    difficulty: 'medium',
    exercises: [
      {
        id: 'fte-m1-1',
        text: "If I was you, I will help him.",
        errors: [
          { wordIndex: 2, text: "was", explanation: "Use subjunctive: If I were you" },
          { wordIndex: 5, text: "will", explanation: "Use would after if: I would help" }
        ],
        points: 25
      },
      {
        id: 'fte-m1-2',
        text: "If she would come, I will be happy.",
        errors: [
          { wordIndex: 2, text: "would", explanation: "Don't use would after if: If she comes" }
        ],
        points: 25
      },
      {
        id: 'fte-m1-3',
        text: "I would have went if I knew.",
        errors: [
          { wordIndex: 4, text: "went", explanation: "Use past participle: gone, not went" }
        ],
        points: 25
      }
    ]
  },
  {
    id: 'fte-medium-2',
    title: 'Comparisons',
    description: 'Comparative errors',
    icon: '⚖️',
    difficulty: 'medium',
    exercises: [
      {
        id: 'fte-m2-1',
        text: "This is a most beautiful house I have ever saw.",
        errors: [
          { wordIndex: 3, text: "most", explanation: "Use the most for superlative" },
          { wordIndex: 9, text: "saw", explanation: "Use seen: have ever seen" }
        ],
        points: 25
      },
      {
        id: 'fte-m2-2',
        text: "She is more better than him.",
        errors: [
          { wordIndex: 3, text: "more better", explanation: "Don't use more + better. Use better" }
        ],
        points: 25
      },
      {
        id: 'fte-m2-3',
        text: "The weather is more bad today.",
        errors: [
          { wordIndex: 4, text: "more bad", explanation: "Use worse (comparative of bad)" }
        ],
        points: 25
      }
    ]
  },
  {
    id: 'fte-medium-3',
    title: 'Prepositions',
    description: 'Preposition mistakes',
    icon: '🔗',
    difficulty: 'medium',
    exercises: [
      {
        id: 'fte-m3-1',
        text: "I am looking forward to meet you.",
        errors: [
          { wordIndex: 5, text: "to meet", explanation: "Use to meeting: looking forward to meeting" }
        ],
        points: 25
      },
      {
        id: 'fte-m3-2',
        text: "She is married with John.",
        errors: [
          { wordIndex: 3, text: "with", explanation: "Use to: married to John" }
        ],
        points: 25
      },
      {
        id: 'fte-m3-3',
        text: "I depend of my parents.",
        errors: [
          { wordIndex: 2, text: "of", explanation: "Use on: depend on" }
        ],
        points: 25
      }
    ]
  },
  // Hard Packs
  {
    id: 'fte-hard-1',
    title: 'Advanced Agreement',
    description: 'Complex subject-verb',
    icon: '🎓',
    difficulty: 'hard',
    exercises: [
      {
        id: 'fte-h1-1',
        text: "Neither the students nor the teacher were absent.",
        errors: [
          { wordIndex: 6, text: "were", explanation: "With neither...nor, verb agrees with nearest: was" }
        ],
        points: 40
      },
      {
        id: 'fte-h1-2',
        text: "Each of the students have to submit their assignment.",
        errors: [
          { wordIndex: 0, text: "Each", explanation: "Each is singular: has to submit" },
          { wordIndex: 7, text: "their", explanation: "Use his or her (each is singular)" }
        ],
        points: 40
      },
      {
        id: 'fte-h1-3',
        text: "The committee have decided that the proposal are acceptable.",
        errors: [
          { wordIndex: 2, text: "have", explanation: "Committee is singular: has decided" },
          { wordIndex: 8, text: "are", explanation: "Proposal is singular: is acceptable" }
        ],
        points: 40
      }
    ]
  },
  {
    id: 'fte-hard-2',
    title: 'Double Negatives',
    description: 'Avoid double negatives',
    icon: '⛔',
    difficulty: 'hard',
    exercises: [
      {
        id: 'fte-h2-1',
        text: "I don't know nothing about it.",
        errors: [
          { wordIndex: 2, text: "don't", explanation: "Double negative. Use anything or nothing" },
          { wordIndex: 3, text: "know nothing", explanation: "Double negative. Use anything" }
        ],
        points: 40
      },
      {
        id: 'fte-h2-2',
        text: "She hasn't got no money.",
        errors: [
          { wordIndex: 3, text: "got no", explanation: "Double negative. Use any money or no money" }
        ],
        points: 40
      },
      {
        id: 'fte-h2-3',
        text: "I didn't had no choice.",
        errors: [
          { wordIndex: 3, text: "had no", explanation: "Double negative. Use didn't have any or had no" }
        ],
        points: 40
      }
    ]
  },
{
    id: 'fte-hard-3',
    title: 'Subjunctive',
    description: 'Wish/if only structures',
    icon: '💫',
    difficulty: 'hard',
    exercises: [
      {
        id: 'fte-h3-1',
        text: 'If only I was taller.',
        errors: [
          { wordIndex: 3, text: 'was', explanation: 'Use subjunctive: were. If only I were taller' }
        ],
        points: 40
      },
      {
        id: 'fte-h3-2',
        text: 'I wish I was there yesterday.',
        errors: [
          { wordIndex: 3, text: 'was', explanation: 'Use were for unreal past: I wish I were there' }
        ],
        points: 40
      },
      {
        id: 'fte-h3-3',
        text: "It's essential that he is on time.",
        errors: [
          { wordIndex: 5, text: 'he is', explanation: 'Use subjunctive: he be on time' }
        ],
        points: 40
      }
    ]
  },
  // Easy - Verb Be AM
  {
    id: 'fte-e4',
    title: 'Verb Be - AM',
    description: 'Using am correctly',
    icon: '🔵',
    difficulty: 'easy',
    exercises: [
      { id: 'fte-e4-1', text: 'I am a student at this university.', errors: [{ wordIndex: 1, text: 'am', explanation: 'Correct: I am' }], points: 10 },
      { id: 'fte-e4-2', text: 'I am happy to meet you.', errors: [{ wordIndex: 1, text: 'am', explanation: 'Correct: I am' }], points: 10 },
      { id: 'fte-e4-3', text: 'She am from Brazil.', errors: [{ wordIndex: 1, text: 'am', explanation: 'Use is with she: She is' }], points: 10 },
      { id: 'fte-e4-4', text: 'I is tired today.', errors: [{ wordIndex: 1, text: 'is', explanation: 'Use am with I: I am' }], points: 10 },
      { id: 'fte-e4-5', text: 'We am going to the park.', errors: [{ wordIndex: 1, text: 'am', explanation: 'Use are with we: We are' }], points: 10 }
    ]
  },
  // Easy - Verb Be IS/ARE
  {
    id: 'fte-e5',
    title: 'Verb Be - IS/ARE',
    description: 'Using is and are correctly',
    icon: '🟢',
    difficulty: 'easy',
    exercises: [
      { id: 'fte-e5-1', text: 'He is a teacher at the school.', errors: [{ wordIndex: 1, text: 'is', explanation: 'Correct: He is' }], points: 10 },
      { id: 'fte-e5-2', text: 'They are my friends from college.', errors: [{ wordIndex: 1, text: 'are', explanation: 'Correct: They are' }], points: 10 },
      { id: 'fte-e5-3', text: 'She are very intelligent.', errors: [{ wordIndex: 1, text: 'are', explanation: 'Use is with she: She is' }], points: 10 },
      { id: 'fte-e5-4', text: 'It are raining outside.', errors: [{ wordIndex: 1, text: 'are', explanation: 'Use is with it: It is' }], points: 10 },
      { id: 'fte-e5-5', text: 'The children is playing in the garden.', errors: [{ wordIndex: 3, text: 'is', explanation: 'Children is plural: The children are' }], points: 10 }
    ]
  },
  // Easy - Do/Does
  {
    id: 'fte-e6',
    title: 'Do/Does',
    description: 'Using do and does correctly',
    icon: '❓',
    difficulty: 'easy',
    exercises: [
      { id: 'fte-e6-1', text: 'She does not like coffee.', errors: [{ wordIndex: 2, text: 'does not', explanation: "Correct: does not (she doesn't)" }], points: 10 },
      { id: 'fte-e6-2', text: 'Do you want to come with us?', errors: [{ wordIndex: 0, text: 'Do', explanation: 'Correct: Do you' }], points: 10 },
      { id: 'fte-e6-3', text: 'He do not understand the question.', errors: [{ wordIndex: 1, text: 'do', explanation: 'Use does with he: He does not' }], points: 10 },
      { id: 'fte-e6-4', text: 'She do plays tennis every week.', errors: [{ wordIndex: 2, text: 'do plays', explanation: 'Use does without -s: She plays' }], points: 10 },
      { id: 'fte-e6-5', text: 'Does he works here?', errors: [{ wordIndex: 1, text: 'works', explanation: 'Use does without -s: Does he work here?' }], points: 10 }
    ]
  },
  // Easy - Verb Tenses
  {
    id: 'fte-e7',
    title: 'Verb Tenses',
    description: 'Basic tense mistakes',
    icon: '⏱️',
    difficulty: 'easy',
    exercises: [
      { id: 'fte-e7-1', text: 'Yesterday I go to the store.', errors: [{ wordIndex: 3, text: 'go', explanation: 'Use past tense: went' }], points: 15 },
      { id: 'fte-e7-2', text: 'I see him yesterday.', errors: [{ wordIndex: 2, text: 'see', explanation: 'Use past tense: saw' }], points: 15 },
      { id: 'fte-e7-3', text: 'She go to school every day.', errors: [{ wordIndex: 1, text: 'go', explanation: 'Use goes with she' }], points: 15 },
      { id: 'fte-e7-4', text: 'They not speak English.', errors: [{ wordIndex: 2, text: 'not', explanation: 'Use do not: They do not speak' }], points: 15 },
      { id: 'fte-e7-5', text: 'He have a car.', errors: [{ wordIndex: 2, text: 'have', explanation: 'Use has with he: He has' }], points: 15 }
    ]
  },
  // Easy - Question Words
  {
    id: 'fte-e8',
    title: 'Question Words',
    description: 'Wh-questions mistakes',
    icon: '❔',
    difficulty: 'easy',
    exercises: [
      { id: 'fte-e8-1', text: 'What you think about this?', errors: [{ wordIndex: 1, text: 'What', explanation: 'Use: What do you think?' }], points: 10 },
      { id: 'fte-e8-2', text: 'Where is she go?', errors: [{ wordIndex: 4, text: 'go', explanation: 'Use: Where is she going?' }], points: 10 },
      { id: 'fte-e8-3', text: 'Who you are waiting for?', errors: [{ wordIndex: 1, text: 'Who', explanation: 'Use: Who are you waiting for?' }], points: 10 },
      { id: 'fte-e8-4', text: 'When the train leaves?', errors: [{ wordIndex: 0, text: 'When', explanation: 'Use: When does the train leave?' }], points: 10 },
      { id: 'fte-e8-5', text: 'Why you are laughing?', errors: [{ wordIndex: 1, text: 'Why', explanation: 'Use: Why are you laughing?' }], points: 10 }
    ]
  },
  // Medium - Past Irregular
  {
    id: 'fte-m4',
    title: 'Past Irregular',
    description: 'Irregular verb forms',
    icon: '📚',
    difficulty: 'medium',
    exercises: [
      { id: 'fte-m4-1', text: 'I goed to the party last night.', errors: [{ wordIndex: 1, text: 'goed', explanation: 'Past of go is went' }], points: 20 },
      { id: 'fte-m4-2', text: 'She saw a beautiful sunset yesterday.', errors: [{ wordIndex: 1, text: 'saw', explanation: 'Past of see is saw (correct)' }], points: 20 },
      { id: 'fte-m4-3', text: 'They eated dinner at 8 PM.', errors: [{ wordIndex: 2, text: 'eated', explanation: 'Past of eat is ate' }], points: 20 },
      { id: 'fte-m4-4', text: 'He spoked to his mother yesterday.', errors: [{ wordIndex: 2, text: 'spoked', explanation: 'Past of speak is spoke' }], points: 20 },
      { id: 'fte-m4-5', text: 'We buyed a new house last month.', errors: [{ wordIndex: 2, text: 'buyed', explanation: 'Past of buy is bought' }], points: 20 }
    ]
  },
  // Medium - Past Perfect
  {
    id: 'fte-m5',
    title: 'Past Perfect',
    description: 'Using had + past participle',
    icon: '🔄',
    difficulty: 'medium',
    exercises: [
      { id: 'fte-m5-1', text: 'I had saw the movie before.', errors: [{ wordIndex: 2, text: 'saw', explanation: 'Past participle: seen' }], points: 25 },
      { id: 'fte-m5-2', text: 'She had went home early.', errors: [{ wordIndex: 2, text: 'went', explanation: 'Past participle: gone' }], points: 25 },
      { id: 'fte-m5-3', text: 'They had already ate when I arrived.', errors: [{ wordIndex: 4, text: 'ate', explanation: 'Past participle: eaten' }], points: 25 },
      { id: 'fte-m5-4', text: 'He had did his homework.', errors: [{ wordIndex: 2, text: 'did', explanation: 'Past participle: done' }], points: 25 },
      { id: 'fte-m5-5', text: 'We had wrote a letter to the manager.', errors: [{ wordIndex: 2, text: 'wrote', explanation: 'Past participle: written' }], points: 25 }
    ]
  },
  // Medium - Present Perfect
  {
    id: 'fte-m6',
    title: 'Present Perfect',
    description: 'Using have/has + past participle',
    icon: '✨',
    difficulty: 'medium',
    exercises: [
      { id: 'fte-m6-1', text: 'I have went to London twice.', errors: [{ wordIndex: 2, text: 'went', explanation: 'Past participle: gone' }], points: 25 },
      { id: 'fte-m6-2', text: 'She has already ate breakfast.', errors: [{ wordIndex: 3, text: 'ate', explanation: 'Past participle: eaten' }], points: 25 },
      { id: 'fte-m6-3', text: 'They have did the project.', errors: [{ wordIndex: 2, text: 'did', explanation: 'Past participle: done' }], points: 25 },
      { id: 'fte-m6-4', text: 'He have seen that movie.', errors: [{ wordIndex: 1, text: 'have', explanation: 'Use has with he: He has seen' }], points: 25 },
      { id: 'fte-m6-5', text: 'We have wrote a new song.', errors: [{ wordIndex: 2, text: 'wrote', explanation: 'Past participle: written' }], points: 25 }
    ]
  },
  // Medium - Prepositions Time
  {
    id: 'fte-m7',
    title: 'Prepositions Time',
    description: 'Prepositions for time expressions',
    icon: '🕐',
    difficulty: 'medium',
    exercises: [
      { id: 'fte-m7-1', text: 'I will see you on Monday morning.', errors: [{ wordIndex: 5, text: 'on', explanation: 'In the morning (no article)' }], points: 20 },
      { id: 'fte-m7-2', text: 'She was born on 1990.', errors: [{ wordIndex: 4, text: 'on', explanation: 'Use in for years: in 1990' }], points: 20 },
      { id: 'fte-m7-3', text: 'I usually wake up in 7 AM.', errors: [{ wordIndex: 5, text: 'in', explanation: 'Use at for specific times: at 7 AM' }], points: 20 },
      { id: 'fte-m7-4', text: 'The meeting is at weekend.', errors: [{ wordIndex: 4, text: 'at', explanation: 'Use on the weekend' }], points: 20 },
      { id: 'fte-m7-5', text: 'I study in the night.', errors: [{ wordIndex: 4, text: 'in', explanation: 'Use at night' }], points: 20 }
    ]
  },
  // Medium - Prepositions Place
  {
    id: 'fte-m8',
    title: 'Prepositions Place',
    description: 'Prepositions for locations',
    icon: '📍',
    difficulty: 'medium',
    exercises: [
      { id: 'fte-m8-1', text: 'The book is in the table.', errors: [{ wordIndex: 4, text: 'in', explanation: 'Use on the table' }], points: 20 },
      { id: 'fte-m8-2', text: 'She lives in a small village in the USA.', errors: [{ wordIndex: 7, text: 'in', explanation: 'Use in the USA (countries with areas)' }], points: 20 },
      { id: 'fte-m8-3', text: 'He is at the bed.', errors: [{ wordIndex: 4, text: 'at', explanation: 'Use in bed or on the bed' }], points: 20 },
      { id: 'fte-m8-4', text: 'The cat is under the sofa.', errors: [{ wordIndex: 4, text: 'under', explanation: 'Correct: under the sofa' }], points: 20 },
      { id: 'fte-m8-5', text: 'I will meet you on the airport.', errors: [{ wordIndex: 5, text: 'on', explanation: 'Use at the airport' }], points: 20 }
    ]
  },
  // Medium - Gerund/Infinitive
  {
    id: 'fte-m9',
    title: 'Gerund/Infinitive',
    description: 'Using gerunds and infinitives',
    icon: '🎯',
    difficulty: 'medium',
    exercises: [
      { id: 'fte-m9-1', text: 'I enjoy to swim in the morning.', errors: [{ wordIndex: 3, text: 'to swim', explanation: 'Use gerund after enjoy: swimming' }], points: 25 },
      { id: 'fte-m9-2', text: 'She hates to wait for buses.', errors: [{ wordIndex: 3, text: 'to wait', explanation: 'Use gerund: waiting' }], points: 25 },
      { id: 'fte-m9-3', text: 'I like playing tennis and to run.', errors: [{ wordIndex: 5, text: 'to run', explanation: 'Keep same form: running' }], points: 25 },
      { id: 'fte-m9-4', text: 'He suggested me to take a break.', errors: [{ wordIndex: 4, text: 'to take', explanation: 'Use gerund: taking' }], points: 25 },
      { id: 'fte-m9-5', text: 'I look forward to hearing from you.', errors: [{ wordIndex: 4, text: 'to hearing', explanation: 'Correct use of gerund after look forward to' }], points: 25 }
    ]
  },
  // Medium - Much/Many
  {
    id: 'fte-m10',
    title: 'Much/Many',
    description: 'Countable vs uncountable nouns',
    icon: '🔢',
    difficulty: 'medium',
    exercises: [
      { id: 'fte-m10-1', text: 'I have many information about this.', errors: [{ wordIndex: 3, text: 'many', explanation: 'Information is uncountable: much information' }], points: 20 },
      { id: 'fte-m10-2', text: 'How much books did you buy?', errors: [{ wordIndex: 2, text: 'much', explanation: 'Books are countable: how many books' }], points: 20 },
      { id: 'fte-m10-3', text: 'There is much reasons for this.', errors: [{ wordIndex: 3, text: 'much', explanation: 'Reasons are countable: many reasons' }], points: 20 },
      { id: 'fte-m10-4', text: 'She has much friends at school.', errors: [{ wordIndex: 3, text: 'much', explanation: 'Friends are countable: many friends' }], points: 20 },
      { id: 'fte-m10-5', text: 'We need many water for the trip.', errors: [{ wordIndex: 3, text: 'many', explanation: 'Water is uncountable: much water' }], points: 20 }
    ]
  },
  // Medium - Adj/Adv
  {
    id: 'fte-m11',
    title: 'Adjectives/Adverbs',
    description: 'Adjective vs adverb usage',
    icon: '📝',
    difficulty: 'medium',
    exercises: [
      { id: 'fte-m11-1', text: 'She speaks English very good.', errors: [{ wordIndex: 4, text: 'good', explanation: 'Use adverb: well' }], points: 20 },
      { id: 'fte-m11-2', text: 'He runs very fastly.', errors: [{ wordIndex: 3, text: 'fastly', explanation: 'Fast is already an adverb' }], points: 20 },
      { id: 'fte-m11-3', text: 'That was a terrible bad day.', errors: [{ wordIndex: 4, text: 'bad', explanation: 'Use badly with verb: terribly bad' }], points: 20 },
      { id: 'fte-m11-4', text: 'The test was real easy.', errors: [{ wordIndex: 4, text: 'real', explanation: 'Use really easy' }], points: 20 },
      { id: 'fte-m11-5', text: 'She seems very happily today.', errors: [{ wordIndex: 4, text: 'happily', explanation: 'Seem takes adjective: happy' }], points: 20 }
    ]
  },
  // Medium - there/their/they're
  {
    id: 'fte-m12',
    title: 'There/Their/They\'re',
    description: 'Common confusions',
    icon: '🏠',
    difficulty: 'medium',
    exercises: [
      { id: 'fte-m12-1', text: 'Their going to the store.', errors: [{ wordIndex: 0, text: 'Their', explanation: 'Use: They are going (they\'re)' }], points: 20 },
      { id: 'fte-m12-2', text: 'There books are on the table.', errors: [{ wordIndex: 0, text: 'There', explanation: 'Use: Their (possessive)' }], points: 20 },
      { id: 'fte-m12-3', text: 'They are living in there house.', errors: [{ wordIndex: 6, text: 'there', explanation: 'Use: their (possessive)' }], points: 20 },
      { id: 'fte-m12-4', text: 'Our friends are over their.', errors: [{ wordIndex: 5, text: 'their', explanation: 'Use: there (location)' }], points: 20 },
      { id: 'fte-m12-5', text: 'The team did good on there presentation.', errors: [{ wordIndex: 6, text: 'there', explanation: 'Use: their (possessive)' }], points: 20 }
    ]
  },
  // Medium - your/you're
  {
    id: 'fte-m13',
    title: 'Your/You\'re',
    description: 'Your vs you are',
    icon: '👤',
    difficulty: 'medium',
    exercises: [
      { id: 'fte-m13-1', text: 'Your going to love this movie.', errors: [{ wordIndex: 0, text: 'Your', explanation: 'Use: You\'re (you are)' }], points: 20 },
      { id: 'fte-m13-2', text: 'You\'re book is on my desk.', errors: [{ wordIndex: 0, text: 'You\'re', explanation: 'Use: Your (possessive)' }], points: 20 },
      { id: 'fte-m13-3', text: 'Your welcome to join us.', errors: [{ wordIndex: 0, text: 'Your', explanation: 'Use: You\'re (you are)' }], points: 20 },
      { id: 'fte-m13-4', text: 'This is your coat, you\'re forgot it.', errors: [{ wordIndex: 7, text: 'you\'re', explanation: 'Use: you (object pronoun)' }], points: 20 },
      { id: 'fte-m13-5', text: 'Your supposed to be there at 9.', errors: [{ wordIndex: 0, text: 'Your', explanation: 'Use: You\'re (you are)' }], points: 20 }
    ]
  },
  // Medium - its/it's
  {
    id: 'fte-m14',
    title: 'Its/It\'s',
    description: 'Its vs it is',
    icon: '🐱',
    difficulty: 'medium',
    exercises: [
      { id: 'fte-m14-1', text: 'The cat is in it\'s bed.', errors: [{ wordIndex: 5, text: 'it\'s', explanation: 'Use: its (possessive, no apostrophe)' }], points: 20 },
      { id: 'fte-m14-2', text: 'It\'s a beautiful day today.', errors: [{ wordIndex: 0, text: 'It\'s', explanation: 'Correct: It is' }], points: 20 },
      { id: 'fte-m14-3', text: 'The company changed its policy last year.', errors: [{ wordIndex: 3, text: 'its', explanation: 'Correct: its (possessive)' }], points: 20 },
      { id: 'fte-m14-4', text: 'Your right, it\'s raining outside.', errors: [{ wordIndex: 2, text: 'Your', explanation: 'Use: You\'re (you are)' }], points: 20 },
      { id: 'fte-m14-5', text: 'The dog wagged its tail, its very happy.', errors: [{ wordIndex: 6, text: 'its', explanation: 'Use: it\'s (it is)' }], points: 20 }
    ]
  },
  // Medium - Relative Pronouns
  {
    id: 'fte-m15',
    title: 'Relative Pronouns',
    description: 'Who, which, that, whose',
    icon: '🔗',
    difficulty: 'medium',
    exercises: [
      { id: 'fte-m15-1', text: 'The book which I bought it is interesting.', errors: [{ wordIndex: 4, text: 'which', explanation: 'Remove it: which I bought' }], points: 25 },
      { id: 'fte-m15-2', text: 'The person who I spoke to him was very helpful.', errors: [{ wordIndex: 4, text: 'who', explanation: 'Remove him: who I spoke to' }], points: 25 },
      { id: 'fte-m15-3', text: 'I met a girl which speaks three languages.', errors: [{ wordIndex: 4, text: 'which', explanation: 'Use who for people: who speaks' }], points: 25 },
      { id: 'fte-m15-4', text: 'The reason which I called you is important.', errors: [{ wordIndex: 4, text: 'which', explanation: 'That is often preferred for reasons' }], points: 25 },
      { id: 'fte-m15-5', text: 'This is the house who I told you about.', errors: [{ wordIndex: 5, text: 'who', explanation: 'Use that or which for things: that I told' }], points: 25 }
    ]
  },
  // Medium - Wish
  {
    id: 'fte-m16',
    title: 'Wish',
    description: 'Expressing wishes',
    icon: '💫',
    difficulty: 'medium',
    exercises: [
      { id: 'fte-m16-1', text: 'I wish I am taller.', errors: [{ wordIndex: 3, text: 'am', explanation: 'Use subjunctive: were (I wish I were)' }], points: 25 },
      { id: 'fte-m16-2', text: 'She wishes she have more time.', errors: [{ wordIndex: 4, text: 'have', explanation: 'Use had (subjunctive)' }], points: 25 },
      { id: 'fte-m16-3', text: 'I wish I can speak English fluently.', errors: [{ wordIndex: 4, text: 'can', explanation: 'Use could (subjunctive)' }], points: 25 },
      { id: 'fte-m16-4', text: 'He wishes he is here with us.', errors: [{ wordIndex: 4, text: 'is', explanation: 'Use were (subjunctive)' }], points: 25 },
      { id: 'fte-m16-5', text: 'I wish I will have more money.', errors: [{ wordIndex: 4, text: 'will', explanation: 'Use had (subjunctive)' }], points: 25 }
    ]
  },
  // Medium - Used to
  {
    id: 'fte-m17',
    title: 'Used to',
    description: 'Past habits and states',
    icon: '📜',
    difficulty: 'medium',
    exercises: [
      { id: 'fte-m17-1', text: 'She used to lives in London.', errors: [{ wordIndex: 3, text: 'lives', explanation: 'Use base form: live' }], points: 25 },
      { id: 'fte-m17-2', text: 'I didn\'t use to like coffee before.', errors: [{ wordIndex: 2, text: 'use', explanation: 'Correct: used to' }], points: 25 },
      { id: 'fte-m17-3', text: 'He used to going to the gym every day.', errors: [{ wordIndex: 3, text: 'going', explanation: 'Use base form: go' }], points: 25 },
      { id: 'fte-m17-4', text: 'Did you used to play soccer?', errors: [{ wordIndex: 2, text: 'used', explanation: 'Use: Did you use to play? (no d)' }], points: 25 },
      { id: 'fte-m17-5', text: 'I use to study at night.', errors: [{ wordIndex: 1, text: 'use', explanation: 'Use: used to study' }], points: 25 }
    ]
  },
  // Medium - Count/Uncount
  {
    id: 'fte-m18',
    title: 'Countable/Uncountable',
    description: 'Count and mass nouns',
    icon: '🧮',
    difficulty: 'medium',
    exercises: [
      { id: 'fte-m18-1', text: 'Can I have a advice?', errors: [{ wordIndex: 3, text: 'a advice', explanation: 'Advice is uncountable: some advice' }], points: 20 },
      { id: 'fte-m18-2', text: 'I need some informations about this.', errors: [{ wordIndex: 2, text: 'informations', explanation: 'Information is uncountable' }], points: 20 },
      { id: 'fte-m18-3', text: 'She bought many furniture for her new house.', errors: [{ wordIndex: 3, text: 'many', explanation: 'Furniture is uncountable: much furniture' }], points: 20 },
      { id: 'fte-m18-4', text: 'I have a good news for you.', errors: [{ wordIndex: 4, text: 'a good', explanation: 'News is uncountable: great news' }], points: 20 },
      { id: 'fte-m18-5', text: 'The luggage is very heavy.', errors: [{ wordIndex: 3, text: 'luggage', explanation: 'Luggage is uncountable (can use piece of luggage)' }], points: 20 }
    ]
  },
  // Hard - Subjunctive
  {
    id: 'fte-h4',
    title: 'Subjunctive',
    description: 'Mandative subjunctive',
    icon: '🎓',
    difficulty: 'hard',
    exercises: [
      { id: 'fte-h4-1', text: 'I suggest that he goes to the doctor.', errors: [{ wordIndex: 5, text: 'goes', explanation: 'Use subjunctive: go (not goes)' }], points: 35 },
      { id: 'fte-h4-2', text: 'It is important that she arrives on time.', errors: [{ wordIndex: 5, text: 'arrives', explanation: 'Use subjunctive: arrive' }], points: 35 },
      { id: 'fte-h4-3', text: 'I demand that he pays the bill.', errors: [{ wordIndex: 5, text: 'pays', explanation: 'Use subjunctive: pay' }], points: 35 },
      { id: 'fte-h4-4', text: 'It is essential that everyone is present.', errors: [{ wordIndex: 5, text: 'is', explanation: 'Use subjunctive: be' }], points: 35 },
      { id: 'fte-h4-5', text: 'The manager insists that he works overtime.', errors: [{ wordIndex: 6, text: 'works', explanation: 'Use subjunctive: work' }], points: 35 }
    ]
  },
  // Hard - Artigos Geográficos
  {
    id: 'fte-h5',
    title: 'Geographical Articles',
    description: 'The with countries and places',
    icon: '🌍',
    difficulty: 'hard',
    exercises: [
      { id: 'fte-h5-1', text: 'I visited the Brazil last summer.', errors: [{ wordIndex: 3, text: 'the Brazil', explanation: 'Most countries don\'t use the: Brazil' }], points: 30 },
      { id: 'fte-h5-2', text: 'She lives in the New York.', errors: [{ wordIndex: 4, text: 'the New York', explanation: 'Use: in New York (no the)' }], points: 30 },
      { id: 'fte-h5-3', text: 'The Philippines is a beautiful country.', errors: [{ wordIndex: 0, text: 'The', explanation: 'Use: Philippines (no the)' }], points: 30 },
      { id: 'fte-h5-4', text: 'I want to visit the United Kingdom.', errors: [{ wordIndex: 4, text: 'the', explanation: 'Use: United Kingdom (with the)' }], points: 30 },
      { id: 'fte-h5-5', text: 'The Argentina and the Brazil are neighbors.', errors: [{ wordIndex: 0, text: 'The', explanation: 'Neither uses the: Argentina and Brazil' }], points: 30 }
    ]
  },
  // Hard - Had better
  {
    id: 'fte-h6',
    title: 'Had better',
    description: 'Had better vs would better',
    icon: '⚠️',
    difficulty: 'hard',
    exercises: [
      { id: 'fte-h6-1', text: 'You had better to study for the exam.', errors: [{ wordIndex: 3, text: 'to study', explanation: 'Use base form: study' }], points: 35 },
      { id: 'fte-h6-2', text: 'You would better leave now.', errors: [{ wordIndex: 1, text: 'would', explanation: 'Use had: You had better' }], points: 35 },
      { id: 'fte-h6-3', text: 'She had better not to be late.', errors: [{ wordIndex: 4, text: 'to be', explanation: 'Use base form: be' }], points: 35 },
      { id: 'fte-h6-4', text: 'We had better to finish this project.', errors: [{ wordIndex: 3, text: 'to finish', explanation: 'Use base form: finish' }], points: 35 },
      { id: 'fte-h6-5', text: 'You better to call her now.', errors: [{ wordIndex: 1, text: 'better to', explanation: 'Use had: had better call' }], points: 35 }
    ]
  },
  // Hard - Passive Voice
  {
    id: 'fte-h7',
    title: 'Passive Voice',
    description: 'Complex passive structures',
    icon: '🔄',
    difficulty: 'hard',
    exercises: [
      { id: 'fte-h7-1', text: 'The letter was wrote by John yesterday.', errors: [{ wordIndex: 3, text: 'wrote', explanation: 'Past participle: written' }], points: 35 },
      { id: 'fte-h7-2', text: 'He was given a book for his birthday.', errors: [{ wordIndex: 2, text: 'given', explanation: 'Correct passive form' }], points: 35 },
      { id: 'fte-h7-3', text: 'The work has to be finish by Friday.', errors: [{ wordIndex: 6, text: 'finish', explanation: 'Past participle: finished' }], points: 35 },
      { id: 'fte-h7-4', text: 'She was knew by everyone in town.', errors: [{ wordIndex: 2, text: 'knew', explanation: 'Past participle: known' }], points: 35 },
      { id: 'fte-h7-5', text: 'The song was sang beautifully by the choir.', errors: [{ wordIndex: 3, text: 'sang', explanation: 'Past participle: sung' }], points: 35 }
    ]
  },
  // Hard - Reported Speech
  {
    id: 'fte-h8',
    title: 'Reported Speech',
    description: 'Tense changes in reported speech',
    icon: '🗣️',
    difficulty: 'hard',
    exercises: [
      { id: 'fte-h8-1', text: 'She said she was tired yesterday.', errors: [{ wordIndex: 4, text: 'was', explanation: 'If original still true, keep was' }], points: 35 },
      { id: 'fte-h8-2', text: 'He told me he will come tomorrow.', errors: [{ wordIndex: 4, text: 'will', explanation: 'Backshift: would' }], points: 35 },
      { id: 'fte-h8-3', text: 'They said they are coming to the party.', errors: [{ wordIndex: 4, text: 'are', explanation: 'Backshift: were' }], points: 35 },
      { id: 'fte-h8-4', text: 'I thought she knows the answer.', errors: [{ wordIndex: 4, text: 'knows', explanation: 'Backshift: knew' }], points: 35 },
      { id: 'fte-h8-5', text: 'She said she have finished the project.', errors: [{ wordIndex: 4, text: 'have', explanation: 'Backshift: had' }], points: 35 }
    ]
  },
  // Hard - Causative
  {
    id: 'fte-h9',
    title: 'Causative',
    description: 'Have/get something done',
    icon: '🎯',
    difficulty: 'hard',
    exercises: [
      { id: 'fte-h9-1', text: 'I had my hair cutting yesterday.', errors: [{ wordIndex: 3, text: 'cutting', explanation: 'Past participle: cut' }], points: 40 },
      { id: 'fte-h9-2', text: 'She got her car to repair last week.', errors: [{ wordIndex: 5, text: 'to repair', explanation: 'Use: repaired (no to)' }], points: 40 },
      { id: 'fte-h9-3', text: 'I had John fix my computer.', errors: [{ wordIndex: 2, text: 'John fix', explanation: 'Use: John fix (no to)' }], points: 40 },
      { id: 'fte-h9-4', text: 'They got the house painting next month.', errors: [{ wordIndex: 4, text: 'painting', explanation: 'Past participle: painted' }], points: 40 },
      { id: 'fte-h9-5', text: 'I will have you to send the email.', errors: [{ wordIndex: 4, text: 'to send', explanation: 'Use: send (no to)' }], points: 40 }
    ]
  },
  // Hard - Inversion
  {
    id: 'fte-h10',
    title: 'Inversion',
    description: 'Subject-verb inversion',
    icon: '⬆️',
    difficulty: 'hard',
    exercises: [
      { id: 'fte-h10-1', text: 'Not only he finished the work on time but also helped others.', errors: [{ wordIndex: 0, text: 'Not only he', explanation: 'Inversion: Not only did he' }], points: 40 },
      { id: 'fte-h10-2', text: 'Never I have seen such a beautiful sunset.', errors: [{ wordIndex: 0, text: 'Never I', explanation: 'Inversion: Never have I' }], points: 40 },
      { id: 'fte-h10-3', text: 'Rarely she goes to the movies.', errors: [{ wordIndex: 0, text: 'Rarely she', explanation: 'Inversion: Rarely does she' }], points: 40 },
      { id: 'fte-h10-4', text: 'Seldom we eat at that restaurant.', errors: [{ wordIndex: 0, text: 'Seldom we', explanation: 'Inversion: Seldom do we' }], points: 40 },
      { id: 'fte-h10-5', text: 'No sooner I arrived than it started raining.', errors: [{ wordIndex: 0, text: 'No sooner I', explanation: 'Inversion: No sooner did I' }], points: 40 }
    ]
  },
  // Hard - Double Negatives
  {
    id: 'fte-h11',
    title: 'Double Negatives',
    description: 'Avoid double negatives',
    icon: '⛔',
    difficulty: 'hard',
    exercises: [
      { id: 'fte-h11-1', text: 'I can\'t get no satisfaction.', errors: [{ wordIndex: 3, text: 'can\'t get no', explanation: 'Use: can\'t get any' }], points: 35 },
      { id: 'fte-h11-2', text: 'She doesn\'t have no money.', errors: [{ wordIndex: 3, text: 'doesn\'t have no', explanation: 'Use: doesn\'t have any' }], points: 35 },
      { id: 'fte-h11-3', text: 'We haven\'t got none left.', errors: [{ wordIndex: 4, text: 'got none', explanation: 'Use: any (not none)' }], points: 35 },
      { id: 'fte-h11-4', text: 'I don\'t know nothing about it.', errors: [{ wordIndex: 3, text: 'know nothing', explanation: 'Use: know anything' }], points: 35 },
      { id: 'fte-h11-5', text: 'He never told nobody the truth.', errors: [{ wordIndex: 3, text: 'told nobody', explanation: 'Use: told anybody' }], points: 35 }
    ]
  },
  // Hard - Conditional 3
  {
    id: 'fte-h12',
    title: 'Conditional 3',
    description: 'Third conditional',
    icon: '🔀',
    difficulty: 'hard',
    exercises: [
      { id: 'fte-h12-1', text: 'If I would have known, I would have helped.', errors: [{ wordIndex: 2, text: 'would have', explanation: 'Use past perfect: had known' }], points: 40 },
      { id: 'fte-h12-2', text: 'She would have gone if she would have been invited.', errors: [{ wordIndex: 5, text: 'would have been', explanation: 'Use past perfect: had been' }], points: 40 },
      { id: 'fte-h12-3', text: 'If he studied more, he would pass.', errors: [{ wordIndex: 2, text: 'studied', explanation: 'Use past perfect: had studied' }], points: 40 },
      { id: 'fte-h12-4', text: 'I would have been there if I had knew.', errors: [{ wordIndex: 6, text: 'knew', explanation: 'Use past participle: known' }], points: 40 },
      { id: 'fte-h12-5', text: 'They would have won if they trained harder.', errors: [{ wordIndex: 2, text: 'trained', explanation: 'Use past perfect: had trained' }], points: 40 }
    ]
  },
  // Hard - Modal Perfect
  {
    id: 'fte-h13',
    title: 'Modal Perfect',
    description: 'Modal + have + past participle',
    icon: '🔐',
    difficulty: 'hard',
    exercises: [
      { id: 'fte-h13-1', text: 'He must have went to the party.', errors: [{ wordIndex: 4, text: 'went', explanation: 'Past participle: gone' }], points: 40 },
      { id: 'fte-h13-2', text: 'She could have came earlier.', errors: [{ wordIndex: 4, text: 'came', explanation: 'Past participle: come' }], points: 40 },
      { id: 'fte-h13-3', text: 'You should have did your homework.', errors: [{ wordIndex: 4, text: 'did', explanation: 'Past participle: done' }], points: 40 },
      { id: 'fte-h13-4', text: 'They might have went home.', errors: [{ wordIndex: 4, text: 'went', explanation: 'Past participle: gone' }], points: 40 },
      { id: 'fte-h13-5', text: 'I would have came if I was invited.', errors: [{ wordIndex: 4, text: 'came', explanation: 'Past participle: come' }], points: 40 }
    ]
  },
  // Hard - Ellipsis
  {
    id: 'fte-h14',
    title: 'Ellipsis',
    description: 'Omission of verbs',
    icon: '...',
    difficulty: 'hard',
    exercises: [
      { id: 'fte-h14-1', text: 'I have got a car and she has got a car.', errors: [{ wordIndex: 6, text: 'has got', explanation: 'Use ellipsis: she has (one)' }], points: 35 },
      { id: 'fte-h14-2', text: 'He likes coffee and she likes coffee too.', errors: [{ wordIndex: 5, text: 'likes', explanation: 'Use ellipsis: she does too' }], points: 35 },
      { id: 'fte-h14-3', text: 'I am tall and she is tall too.', errors: [{ wordIndex: 5, text: 'is', explanation: 'Use ellipsis: she is too' }], points: 35 },
      { id: 'fte-h14-4', text: 'She can speak English and he can speak English.', errors: [{ wordIndex: 7, text: 'can speak', explanation: 'Use ellipsis: he can too' }], points: 35 },
      { id: 'fte-h14-5', text: 'I was at the party and they were at the party.', errors: [{ wordIndex: 6, text: 'were', explanation: 'Use ellipsis: they were too' }], points: 35 }
    ]
  },
  // Hard - Word Formation
  {
    id: 'fte-h15',
    title: 'Word Formation',
    description: 'Word class transformations',
    icon: '🔤',
    difficulty: 'hard',
    exercises: [
      { id: 'fte-h15-1', text: 'The situation is very importance.', errors: [{ wordIndex: 4, text: 'importance', explanation: 'Use adjective: important' }], points: 35 },
      { id: 'fte-h15-2', text: 'He is a very success business person.', errors: [{ wordIndex: 4, text: 'success', explanation: 'Use adjective: successful' }], points: 35 },
      { id: 'fte-h15-3', text: 'Her arrival was very significance.', errors: [{ wordIndex: 5, text: 'significance', explanation: 'Use adjective: significant' }], points: 35 },
      { id: 'fte-h15-4', text: 'The movie was very interest.', errors: [{ wordIndex: 4, text: 'interest', explanation: 'Use adjective: interesting' }], points: 35 },
      { id: 'fte-h15-5', text: 'He gave me a very wonder explanation.', errors: [{ wordIndex: 5, text: 'wonder', explanation: 'Use adjective: wonderful' }], points: 35 }
    ]
  },
  // Hard - Verb+Prep
  {
    id: 'fte-h16',
    title: 'Verb + Preposition',
    description: 'Common verb-preposition combinations',
    icon: '➕',
    difficulty: 'hard',
    exercises: [
      { id: 'fte-h16-1', text: 'I depend of my family for support.', errors: [{ wordIndex: 2, text: 'depend of', explanation: 'Use: depend on' }], points: 35 },
      { id: 'fte-h16-2', text: 'She consists three main points.', errors: [{ wordIndex: 2, text: 'consists', explanation: 'Use: consists of' }], points: 35 },
      { id: 'fte-h16-3', text: 'I agree to your proposal.', errors: [{ wordIndex: 2, text: 'agree to', explanation: 'Use: agree with' }], points: 35 },
      { id: 'fte-h16-4', text: 'He suffers with a headache.', errors: [{ wordIndex: 2, text: 'suffers with', explanation: 'Use: suffers from' }], points: 35 },
      { id: 'fte-h16-5', text: 'We must wait for the bus.', errors: [{ wordIndex: 3, text: 'wait for', explanation: 'Correct: wait for' }], points: 35 }
    ]
  },
  // Hard - Confused Words
  {
    id: 'fte-h17',
    title: 'Confused Words',
    description: 'Affect vs effect, etc',
    icon: '❓',
    difficulty: 'hard',
    exercises: [
      { id: 'fte-h17-1', text: 'The weather affected my mood.', errors: [{ wordIndex: 2, text: 'affected', explanation: 'Affect = verb (to influence). Effect = noun (result)' }], points: 35 },
      { id: 'fte-h17-2', text: 'The medicine had no affect.', errors: [{ wordIndex: 5, text: 'affect', explanation: 'Use: effect (noun)' }], points: 35 },
      { id: 'fte-h17-3', text: 'He gave me a piece of advice.', errors: [{ wordIndex: 6, text: 'advice', explanation: 'Advice (noun) not advise (verb)' }], points: 35 },
      { id: 'fte-h17-4', text: 'The news was very affecting.', errors: [{ wordIndex: 5, text: 'affecting', explanation: 'Use: affecting (touching emotionally)' }], points: 35 },
      { id: 'fte-h17-5', text: 'I advice you to go.', errors: [{ wordIndex: 1, text: 'advice', explanation: 'Use: advise (verb)' }], points: 35 }
    ]
  },
  // Native Writing - Run-on Sentences
  {
    id: 'fte-n1',
    title: 'Run-on Sentences',
    description: 'Avoid run-on sentences',
    icon: '📖',
    difficulty: 'hard',
    exercises: [
      { id: 'fte-n1-1', text: 'I love reading it is my favorite hobby.', errors: [{ wordIndex: 3, text: 'it', explanation: 'Use a period: I love reading. It is...' }], points: 30 },
      { id: 'fte-n1-2', text: 'She studied hard she passed the exam.', errors: [{ wordIndex: 3, text: 'she', explanation: 'Use a period or conjunction' }], points: 30 },
      { id: 'fte-n1-3', text: 'The weather was nice we went to the beach.', errors: [{ wordIndex: 4, text: 'we', explanation: 'Use a period or conjunction' }], points: 30 },
      { id: 'fte-n1-4', text: 'He is smart he gets good grades.', errors: [{ wordIndex: 3, text: 'he', explanation: 'Use a period or conjunction' }], points: 30 },
      { id: 'fte-n1-5', text: 'I like coffee I drink it every morning.', errors: [{ wordIndex: 3, text: 'I', explanation: 'Use a period or conjunction' }], points: 30 }
    ]
  },
  // Native Writing - Sentence Starters
  {
    id: 'fte-n2',
    title: 'Sentence Starters',
    description: 'Vary sentence beginnings',
    icon: '🎨',
    difficulty: 'hard',
    exercises: [
      { id: 'fte-n2-1', text: 'I went to the store. I bought some milk.', errors: [{ wordIndex: 0, text: 'I went', explanation: 'Start with prepositional phrase: At the store...' }], points: 30 },
      { id: 'fte-n2-2', text: 'The weather was nice. It was sunny and warm.', errors: [{ wordIndex: 2, text: 'It was', explanation: 'Use a transition: Fortunately...' }], points: 30 },
      { id: 'fte-n2-3', text: 'She studied all night. She passed the test.', errors: [{ wordIndex: 2, text: 'She', explanation: 'Use an absolute phrase: Exhausted...' }], points: 30 }
    ]
  },
  // Native Writing - Very Overuse
  {
    id: 'fte-n3',
    title: 'Very Overuse',
    description: 'Replace "very" with stronger words',
    icon: '💎',
    difficulty: 'hard',
    exercises: [
      { id: 'fte-n3-1', text: 'The movie was very interesting.', errors: [{ wordIndex: 4, text: 'very interesting', explanation: 'Use: fascinating, compelling' }], points: 25 },
      { id: 'fte-n3-2', text: 'The food was very delicious.', errors: [{ wordIndex: 4, text: 'very delicious', explanation: 'Use: exquisite, delectable' }], points: 25 },
      { id: 'fte-n3-3', text: 'She is very intelligent.', errors: [{ wordIndex: 3, text: 'very intelligent', explanation: 'Use: brilliant, astute' }], points: 25 },
      { id: 'fte-n3-4', text: 'The book was very important.', errors: [{ wordIndex: 4, text: 'very important', explanation: 'Use: crucial, vital' }], points: 25 }
    ]
  },
  // Native Writing - Really/Very
  {
    id: 'fte-n4',
    title: 'Really/Very Replacement',
    description: 'Use more precise adjectives',
    icon: '🎯',
    difficulty: 'hard',
    exercises: [
      { id: 'fte-n4-1', text: 'It was really hot outside.', errors: [{ wordIndex: 4, text: 'really hot', explanation: 'Use: scorching, sweltering' }], points: 25 },
      { id: 'fte-n4-2', text: 'The exam was really difficult.', errors: [{ wordIndex: 4, text: 'really difficult', explanation: 'Use: challenging, demanding' }], points: 25 },
      { id: 'fte-n4-3', text: 'She was really happy.', errors: [{ wordIndex: 4, text: 'really happy', explanation: 'Use: ecstatic, overjoyed' }], points: 25 }
    ]
  },
  // Native Writing - Filler Words
  {
    id: 'fte-n5',
    title: 'Filler Words',
    description: 'Remove unnecessary words',
    icon: '🧹',
    difficulty: 'hard',
    exercises: [
      { id: 'fte-n5-1', text: 'I personally think that basically this is basically good.', errors: [{ wordIndex: 1, text: 'personally', explanation: 'Remove filler: I think this is good.' }], points: 30 },
      { id: 'fte-n5-2', text: 'Actually, basically, I mean, basically we need to go.', errors: [{ wordIndex: 0, text: 'Actually', explanation: 'Remove fillers: We need to go.' }], points: 30 },
      { id: 'fte-n5-3', text: 'In my opinion, I think it is actually very good.', errors: [{ wordIndex: 6, text: 'think', explanation: 'Remove redundancy: I think or In my opinion' }], points: 30 }
    ]
  },
  // Native Writing - Passive Abuse
  {
    id: 'fte-n6',
    title: 'Passive Abuse',
    description: 'Prefer active voice',
    icon: '🔊',
    difficulty: 'hard',
    exercises: [
      { id: 'fte-n6-1', text: 'The ball was kicked by the boy.', errors: [{ wordIndex: 4, text: 'was kicked', explanation: 'Use active: The boy kicked the ball.' }], points: 30 },
      { id: 'fte-n6-2', text: 'The report was written by the team.', errors: [{ wordIndex: 4, text: 'was written', explanation: 'Use active: The team wrote the report.' }], points: 30 },
      { id: 'fte-n6-3', text: 'A new policy has been implemented by management.', errors: [{ wordIndex: 6, text: 'has been implemented', explanation: 'Use active: Management has implemented...' }], points: 30 }
    ]
  }
];