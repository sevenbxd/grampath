import { ExercisePack } from '../academy';

export const complexSentencesExercisePacks: ExercisePack[] = [
  {
    id: 'subordinating-1',
    title: 'Subordinating Conjunctions',
    description: 'Practice because, although, if, when',
    icon: '🔗',
    exercises: [
      { id: 'sub-ex1', sectionId: 'complex', type: 'multiple-choice', question: '___ it rained, we went out.', translation: 'Although it rained, we went out.', options: ['Because', 'Although', 'If', 'When'], correctAnswer: 'Although', points: 10 },
      { id: 'sub-ex2', sectionId: 'complex', type: 'multiple-choice', question: 'I stayed home ___ I was sick.', translation: 'I stayed home because I was sick.', options: ['although', 'because', 'if', 'when'], correctAnswer: 'because', points: 10 }
    ]
  },
  {
    id: 'relative-clauses-1',
    title: 'Relative Clauses',
    description: 'Practice who, which, that',
    icon: '📝',
    exercises: [
      { id: 'rel-ex1', sectionId: 'complex', type: 'multiple-choice', question: 'The person ___ called is my friend.', translation: 'The person who called is my friend.', options: ['who', 'which', 'that', 'what'], correctAnswer: 'who', points: 10 },
      { id: 'rel-ex2', sectionId: 'complex', type: 'multiple-choice', question: 'The book ___ I bought is interesting.', translation: 'The book which I bought is interesting.', options: ['who', 'which', 'that', 'where'], correctAnswer: 'which', points: 10 }
    ]
  },
  {
    id: 'coordinating-conjunctions-1',
    title: 'Coordinating Conjunctions',
    description: 'Practice and, but, or, so',
    icon: '🔗',
    exercises: [
      { id: 'coord-1', sectionId: 'complex', type: 'multiple-choice', question: 'I wanted to go ___ I was too tired.', translation: 'I wanted to go but I was too tired.', options: ['and', 'but', 'or', 'so'], correctAnswer: 'but', points: 10 },
      { id: 'coord-2', sectionId: 'complex', type: 'multiple-choice', question: 'She studied ___ she passed the exam.', translation: 'She studied so she passed the exam.', options: ['and', 'but', 'or', 'so'], correctAnswer: 'so', points: 10 },
      { id: 'coord-3', sectionId: 'complex', type: 'multiple-choice', question: 'Do you want tea ___ coffee?', translation: 'Do you want tea or coffee?', options: ['and', 'but', 'or', 'so'], correctAnswer: 'or', points: 10 },
      { id: 'coord-4', sectionId: 'complex', type: 'multiple-choice', question: 'He was late ___ missed the bus.', translation: 'He was late and missed the bus.', options: ['and', 'but', 'or', 'so'], correctAnswer: 'and', points: 10 },
      { id: 'coord-5', sectionId: 'complex', type: 'multiple-choice', question: 'We can go to the park ___ stay home.', translation: 'We can go to the park or stay home.', options: ['and', 'but', 'or', 'so'], correctAnswer: 'or', points: 10 },
      { id: 'coord-6', sectionId: 'complex', type: 'multiple-choice', question: 'It was raining ___ we stayed inside.', translation: 'It was raining so we stayed inside.', options: ['and', 'but', 'or', 'so'], correctAnswer: 'so', points: 10 },
      { id: 'coord-7', sectionId: 'complex', type: 'multiple-choice', question: 'I like reading ___ my sister likes sports.', translation: 'I like reading and my sister likes sports.', options: ['and', 'but', 'or', 'so'], correctAnswer: 'and', points: 10 },
      { id: 'coord-8', sectionId: 'complex', type: 'multiple-choice', question: 'She is smart ___ she is also kind.', translation: 'She is smart but she is also kind.', options: ['and', 'but', 'or', 'so'], correctAnswer: 'but', points: 10 },
      { id: 'coord-9', sectionId: 'complex', type: 'multiple-choice', question: 'You can call me ___ send an email.', translation: 'You can call me or send an email.', options: ['and', 'but', 'or', 'so'], correctAnswer: 'or', points: 10 },
      { id: 'coord-10', sectionId: 'complex', type: 'multiple-choice', question: 'The weather was bad ___ we cancelled the trip.', translation: 'The weather was bad so we cancelled the trip.', options: ['and', 'but', 'or', 'so'], correctAnswer: 'so', points: 10 }
    ]
  },
  {
    id: 'relative-pronouns-1',
    title: 'Relative Pronouns',
    description: 'Practice who, whom, whose, which, that',
    icon: '❓',
    exercises: [
      { id: 'rel-pro-1', sectionId: 'complex', type: 'multiple-choice', question: 'The person ___ I spoke to is my teacher.', translation: 'The person whom I spoke to is my teacher.', options: ['who', 'whom', 'which', 'that'], correctAnswer: 'whom', points: 10 },
      { id: 'rel-pro-2', sectionId: 'complex', type: 'multiple-choice', question: 'The man ___ car was stolen called the police.', translation: 'The man whose car was stolen called the police.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'whose', points: 10 },
      { id: 'rel-pro-3', sectionId: 'complex', type: 'multiple-choice', question: 'The book ___ is on the table is mine.', translation: 'The book which is on the table is mine.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'which', points: 10 },
      { id: 'rel-pro-4', sectionId: 'complex', type: 'multiple-choice', question: 'The students ___ passed are happy.', translation: 'The students who passed are happy.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'who', points: 10 },
      { id: 'rel-pro-5', sectionId: 'complex', type: 'multiple-choice', question: 'The city ___ we visited was beautiful.', translation: 'The city which we visited was beautiful.', options: ['who', 'whom', 'which', 'that'], correctAnswer: 'which', points: 10 },
      { id: 'rel-pro-6', sectionId: 'complex', type: 'multiple-choice', question: 'I know the person ___ owns this house.', translation: 'I know the person who owns this house.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'who', points: 10 },
      { id: 'rel-pro-7', sectionId: 'complex', type: 'multiple-choice', question: 'The woman ___ son is a doctor is proud.', translation: 'The woman whose son is a doctor is proud.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'whose', points: 10 },
      { id: 'rel-pro-8', sectionId: 'complex', type: 'multiple-choice', question: 'The reason ___ she left is unknown.', translation: 'The reason why she left is unknown.', options: ['who', 'whom', 'which', 'why'], correctAnswer: 'why', points: 10 },
      { id: 'rel-pro-9', sectionId: 'complex', type: 'multiple-choice', question: 'The place ___ we met was special.', translation: 'The place where we met was special.', options: ['who', 'whom', 'which', 'where'], correctAnswer: 'where', points: 10 },
      { id: 'rel-pro-10', sectionId: 'complex', type: 'multiple-choice', question: 'I remember the day ___ we first met.', translation: 'I remember the day when we first met.', options: ['who', 'whom', 'which', 'when'], correctAnswer: 'when', points: 10 }
    ]
  },
  {
    id: 'relative-defining-1',
    title: 'Defining Relative Clauses',
    description: 'Essential information clauses',
    icon: '🎯',
    exercises: [
      { id: 'rel-def-1', sectionId: 'complex', type: 'multiple-choice', question: 'The man ___ helped me was kind.', translation: 'The man who helped me was kind.', options: ['who', 'which', 'where', 'when'], correctAnswer: 'who', points: 10 },
      { id: 'rel-def-2', sectionId: 'complex', type: 'multiple-choice', question: 'The book ___ I read was interesting.', translation: 'The book which I read was interesting.', options: ['who', 'which', 'where', 'when'], correctAnswer: 'which', points: 10 },
      { id: 'rel-def-3', sectionId: 'complex', type: 'multiple-choice', question: 'She lives in a house ___ has a garden.', translation: 'She lives in a house that has a garden.', options: ['who', 'which', 'where', 'that'], correctAnswer: 'that', points: 10 },
      { id: 'rel-def-4', sectionId: 'complex', type: 'multiple-choice', question: 'The students ___ study hard will pass.', translation: 'The students who study hard will pass.', options: ['who', 'which', 'where', 'when'], correctAnswer: 'who', points: 10 },
      { id: 'rel-def-5', sectionId: 'complex', type: 'multiple-choice', question: 'I have a dog ___ is very playful.', translation: 'I have a dog that is very playful.', options: ['who', 'which', 'where', 'that'], correctAnswer: 'that', points: 10 },
      { id: 'rel-def-6', sectionId: 'complex', type: 'multiple-choice', question: 'The movie ___ we watched was boring.', translation: 'The movie which we watched was boring.', options: ['who', 'which', 'where', 'when'], correctAnswer: 'which', points: 10 },
      { id: 'rel-def-7', sectionId: 'complex', type: 'multiple-choice', question: 'The lady ___ works here is my aunt.', translation: 'The lady who works here is my aunt.', options: ['who', 'which', 'where', 'that'], correctAnswer: 'who', points: 10 },
      { id: 'rel-def-8', sectionId: 'complex', type: 'multiple-choice', question: 'The shop ___ sells books is closed.', translation: 'The shop which sells books is closed.', options: ['who', 'which', 'where', 'that'], correctAnswer: 'which', points: 10 },
      { id: 'rel-def-9', sectionId: 'complex', type: 'multiple-choice', question: 'People ___ smoke should quit.', translation: 'People who smoke should quit.', options: ['who', 'which', 'where', 'that'], correctAnswer: 'who', points: 10 },
      { id: 'rel-def-10', sectionId: 'complex', type: 'multiple-choice', question: 'I need a person ___ can help me.', translation: 'I need a person who can help me.', options: ['who', 'which', 'where', 'that'], correctAnswer: 'who', points: 10 }
    ]
  },
  {
    id: 'relative-non-defining-1',
    title: 'Non-Defining Relative Clauses',
    description: 'Extra information clauses',
    icon: 'ℹ️',
    exercises: [
      { id: 'rel-nd-1', sectionId: 'complex', type: 'multiple-choice', question: 'My brother, ___ lives in London, is visiting.', translation: 'My brother, who lives in London, is visiting.', options: ['who', 'which', 'where', 'when'], correctAnswer: 'who', points: 10 },
      { id: 'rel-nd-2', sectionId: 'complex', type: 'multiple-choice', question: 'Paris, ___ is the capital of France, is beautiful.', translation: 'Paris, which is the capital of France, is beautiful.', options: ['who', 'which', 'where', 'when'], correctAnswer: 'which', points: 10 },
      { id: 'rel-nd-3', sectionId: 'complex', type: 'multiple-choice', question: 'The book, ___ was written by Shakespeare, is famous.', translation: 'The book, which was written by Shakespeare, is famous.', options: ['who', 'which', 'where', 'when'], correctAnswer: 'which', points: 10 },
      { id: 'rel-nd-4', sectionId: 'complex', type: 'multiple-choice', question: 'My mother, ___ is a doctor, works at the hospital.', translation: 'My mother, who is a doctor, works at the hospital.', options: ['who', 'which', 'where', 'when'], correctAnswer: 'who', points: 10 },
      { id: 'rel-nd-5', sectionId: 'complex', type: 'multiple-choice', question: 'The car, ___ was expensive, broke down.', translation: 'The car, which was expensive, broke down.', options: ['who', 'which', 'where', 'that'], correctAnswer: 'which', points: 10 },
      { id: 'rel-nd-6', sectionId: 'complex', type: 'multiple-choice', question: 'We visited Rome, ___ we spent a week.', translation: 'We visited Rome, where we spent a week.', options: ['who', 'which', 'where', 'when'], correctAnswer: 'where', points: 10 },
      { id: 'rel-nd-7', sectionId: 'complex', type: 'multiple-choice', question: 'The teacher, ___ I respect, is retiring.', translation: 'The teacher, whom I respect, is retiring.', options: ['who', 'whom', 'which', 'where'], correctAnswer: 'whom', points: 10 },
      { id: 'rel-nd-8', sectionId: 'complex', type: 'multiple-choice', question: 'Last year, ___ I graduated, was memorable.', translation: 'Last year, when I graduated, was memorable.', options: ['who', 'which', 'where', 'when'], correctAnswer: 'when', points: 10 },
      { id: 'rel-nd-9', sectionId: 'complex', type: 'multiple-choice', question: 'Her house, ___ is on the hill, is visible.', translation: 'Her house, which is on the hill, is visible.', options: ['who', 'which', 'where', 'that'], correctAnswer: 'which', points: 10 },
      { id: 'rel-nd-10', sectionId: 'complex', type: 'multiple-choice', question: 'The students, ___ worked hard, passed.', translation: 'The students, who worked hard, passed.', options: ['who', 'which', 'where', 'that'], correctAnswer: 'who', points: 10 }
    ]
  },
  {
    id: 'conjunctive-adverbs-1',
    title: 'Conjunctive Adverbs',
    description: 'Practice however, therefore, moreover',
    icon: '➡️',
    exercises: [
      { id: 'conj-adv-1', sectionId: 'complex', type: 'multiple-choice', question: 'It was raining; ___, we stayed inside.', translation: 'It was raining; therefore, we stayed inside.', options: ['however', 'therefore', 'moreover', 'however'], correctAnswer: 'therefore', points: 10 },
      { id: 'conj-adv-2', sectionId: 'complex', type: 'multiple-choice', question: 'She was tired; ___, she kept working.', translation: 'She was tired; however, she kept working.', options: ['however', 'therefore', 'moreover', 'so'], correctAnswer: 'however', points: 10 },
      { id: 'conj-adv-3', sectionId: 'complex', type: 'multiple-choice', question: 'The project was difficult; ___, it was completed.', translation: 'The project was difficult; moreover, it was completed.', options: ['however', 'therefore', 'moreover', 'but'], correctAnswer: 'moreover', points: 10 },
      { id: 'conj-adv-4', sectionId: 'complex', type: 'multiple-choice', question: 'He studied hard; ___, he got an A.', translation: 'He studied hard; consequently, he got an A.', options: ['however', 'therefore', 'consequently', 'moreover'], correctAnswer: 'consequently', points: 10 },
      { id: 'conj-adv-5', sectionId: 'complex', type: 'multiple-choice', question: 'It was cold; ___, we stayed home.', translation: 'It was cold; therefore, we stayed home.', options: ['however', 'therefore', 'moreover', 'consequently'], correctAnswer: 'therefore', points: 10 },
      { id: 'conj-adv-6', sectionId: 'complex', type: 'multiple-choice', question: 'The food was good; ___, the service was poor.', translation: 'The food was good; however, the service was poor.', options: ['however', 'therefore', 'moreover', 'consequently'], correctAnswer: 'however', points: 10 },
      { id: 'conj-adv-7', sectionId: 'complex', type: 'multiple-choice', question: 'She is talented; ___, she works hard.', translation: 'She is talented; moreover, she works hard.', options: ['however', 'therefore', 'moreover', 'consequently'], correctAnswer: 'moreover', points: 10 },
      { id: 'conj-adv-8', sectionId: 'complex', type: 'multiple-choice', question: 'It rained a lot; ___, the crops grew.', translation: 'It rained a lot; consequently, the crops grew.', options: ['however', 'therefore', 'moreover', 'consequently'], correctAnswer: 'consequently', points: 10 },
      { id: 'conj-adv-9', sectionId: 'complex', type: 'multiple-choice', question: 'He was late; ___, he missed the train.', translation: 'He was late; therefore, he missed the train.', options: ['however', 'therefore', 'moreover', 'consequently'], correctAnswer: 'therefore', points: 10 },
      { id: 'conj-adv-10', sectionId: 'complex', type: 'multiple-choice', question: 'The weather was bad; ___, we cancelled.', translation: 'The weather was bad; consequently, we cancelled.', options: ['however', 'therefore', 'moreover', 'consequently'], correctAnswer: 'consequently', points: 10 }
    ]
  },
  {
    id: 'conditionals-time-1',
    title: 'Conditionals with Time',
    description: 'When, as soon as, until',
    icon: '⏰',
    exercises: [
      { id: 'cond-time-1', sectionId: 'complex', type: 'multiple-choice', question: 'I will call you ___ I arrive.', translation: 'I will call you when I arrive.', options: ['when', 'if', 'unless', 'because'], correctAnswer: 'when', points: 10 },
      { id: 'cond-time-2', sectionId: 'complex', type: 'multiple-choice', question: 'Call me ___ you need help.', translation: 'Call me if you need help.', options: ['when', 'if', 'until', 'as soon as'], correctAnswer: 'if', points: 10 },
      { id: 'cond-time-3', sectionId: 'complex', type: 'multiple-choice', question: 'Wait here ___ I come back.', translation: 'Wait here until I come back.', options: ['when', 'if', 'until', 'as soon as'], correctAnswer: 'until', points: 10 },
      { id: 'cond-time-4', sectionId: 'complex', type: 'multiple-choice', question: 'I will tell you ___ I know.', translation: 'I will tell you as soon as I know.', options: ['when', 'if', 'until', 'as soon as'], correctAnswer: 'as soon as', points: 10 },
      { id: 'cond-time-5', sectionId: 'complex', type: 'multiple-choice', question: 'You can go ___ you finish.', translation: 'You can go when you finish.', options: ['when', 'if', 'unless', 'until'], correctAnswer: 'when', points: 10 },
      { id: 'cond-time-6', sectionId: 'complex', type: 'multiple-choice', question: "I won't leave ___ she arrives.", translation: "I won't leave until she arrives.", options: ['when', 'if', 'until', 'as soon as'], correctAnswer: 'until', points: 10 },
      { id: 'cond-time-7', sectionId: 'complex', type: 'multiple-choice', question: 'Tell me ___ you have news.', translation: 'Tell me as soon as you have news.', options: ['when', 'if', 'until', 'as soon as'], correctAnswer: 'as soon as', points: 10 },
      { id: 'cond-time-8', sectionId: 'complex', type: 'multiple-choice', question: 'I will help you ___ you ask.', translation: 'I will help you if you ask.', options: ['when', 'if', 'until', 'as soon as'], correctAnswer: 'if', points: 10 },
      { id: 'cond-time-9', sectionId: 'complex', type: 'multiple-choice', question: 'Stay ___ I say so.', translation: 'Stay until I say so.', options: ['when', 'if', 'until', 'as soon as'], correctAnswer: 'until', points: 10 },
      { id: 'cond-time-10', sectionId: 'complex', type: 'multiple-choice', question: 'We will leave ___ the sun sets.', translation: 'We will leave when the sun sets.', options: ['when', 'if', 'until', 'as soon as'], correctAnswer: 'when', points: 10 }
    ]
  },
  {
    id: 'complex-sentences-mix-1',
    title: 'Complex Sentences Mixed',
    description: 'Mixed complex sentence practice',
    icon: '🎲',
    exercises: [
      { id: 'comp-mix-1', sectionId: 'complex', type: 'multiple-choice', question: '___ she was ill, she went to work.', translation: 'Although she was ill, she went to work.', options: ['Because', 'Although', 'If', 'When'], correctAnswer: 'Although', points: 10 },
      { id: 'comp-mix-2', sectionId: 'complex', type: 'multiple-choice', question: 'The reason ___ I came is to help.', translation: 'The reason why I came is to help.', options: ['who', 'which', 'why', 'where'], correctAnswer: 'why', points: 10 },
      { id: 'comp-mix-3', sectionId: 'complex', type: 'multiple-choice', question: 'I will call you ___ I get home.', translation: 'I will call you when I get home.', options: ['if', 'unless', 'when', 'because'], correctAnswer: 'when', points: 10 },
      { id: 'comp-mix-4', sectionId: 'complex', type: 'multiple-choice', question: 'The person ___ called is here.', translation: 'The person who called is here.', options: ['who', 'which', 'where', 'when'], correctAnswer: 'who', points: 10 },
      { id: 'comp-mix-5', sectionId: 'complex', type: 'multiple-choice', question: '___ it rains, I will stay home.', translation: 'If it rains, I will stay home.', options: ['When', 'If', 'Although', 'Because'], correctAnswer: 'If', points: 10 },
      { id: 'comp-mix-6', sectionId: 'complex', type: 'multiple-choice', question: 'The place ___ we met was nice.', translation: 'The place where we met was nice.', options: ['who', 'which', 'where', 'when'], correctAnswer: 'where', points: 10 },
      { id: 'comp-mix-7', sectionId: 'complex', type: 'multiple-choice', question: 'She is the one ___ I love.', translation: 'She is the one who I love.', options: ['who', 'which', 'where', 'when'], correctAnswer: 'who', points: 10 },
      { id: 'comp-mix-8', sectionId: 'complex', type: 'multiple-choice', question: 'I work ___ I can support my family.', translation: 'I work so I can support my family.', options: ['because', 'so', 'although', 'if'], correctAnswer: 'so', points: 10 },
      { id: 'comp-mix-9', sectionId: 'complex', type: 'multiple-choice', question: 'The day ___ we met was special.', translation: 'The day when we met was special.', options: ['who', 'which', 'where', 'when'], correctAnswer: 'when', points: 10 },
      { id: 'comp-mix-10', sectionId: 'complex', type: 'multiple-choice', question: 'I will go ___ you come with me.', translation: 'I will go if you come with me.', options: ['when', 'if', 'unless', 'because'], correctAnswer: 'if', points: 10 }
    ]
  },
  {
    id: 'subordinating-advanced-1',
    title: 'Subordinating Conjunctions Advanced',
    description: 'Complex subordinate clauses',
    icon: '🔗',
    exercises: [
      { id: 'sub-1', sectionId: 'complex', type: 'multiple-choice', question: 'I will wait ___ she arrives.', translation: 'I will wait until she arrives.', options: ['while', 'until', 'since', 'during'], correctAnswer: 'until', points: 10 },
      { id: 'sub-2', sectionId: 'complex', type: 'multiple-choice', question: 'She works ___ she can afford it.', translation: 'She works so that she can afford it.', options: ['so', 'because', 'although', 'when'], correctAnswer: 'so', points: 10 },
      { id: 'sub-3', sectionId: 'complex', type: 'multiple-choice', question: '___ the weather is good, we will go out.', translation: 'Provided that the weather is good, we will go out.', options: ['If', 'Provided that', 'Unless', 'Because'], correctAnswer: 'Provided that', points: 10 },
      { id: 'sub-4', sectionId: 'complex', type: 'multiple-choice', question: 'He failed ___ he studied hard.', translation: 'He failed even though he studied hard.', options: ['although', 'even though', 'because', 'if'], correctAnswer: 'even though', points: 10 },
      { id: 'sub-5', sectionId: 'complex', type: 'multiple-choice', question: '___ you study, you will pass.', translation: 'As long as you study, you will pass.', options: ['If', 'As long as', 'Unless', 'Because'], correctAnswer: 'As long as', points: 10 },
      { id: 'sub-6', sectionId: 'complex', type: 'multiple-choice', question: 'She left ___ I arrived.', translation: 'She left before I arrived.', options: ['after', 'before', 'when', 'while'], correctAnswer: 'before', points: 10 },
      { id: 'sub-7', sectionId: 'complex', type: 'multiple-choice', question: '___ it stopped raining, we went out.', translation: 'As soon as it stopped raining, we went out.', options: ['When', 'As soon as', 'While', 'Since'], correctAnswer: 'As soon as', points: 10 },
      { id: 'sub-8', sectionId: 'complex', type: 'multiple-choice', question: 'He called ___ he got home.', translation: 'He called as soon as he got home.', options: ['when', 'as soon as', 'before', 'after'], correctAnswer: 'as soon as', points: 10 },
      { id: 'sub-9', sectionId: 'complex', type: 'multiple-choice', question: 'I was reading ___ he was sleeping.', translation: 'I was reading while he was sleeping.', options: ['when', 'while', 'during', 'as'], correctAnswer: 'while', points: 10 },
      { id: 'sub-10', sectionId: 'complex', type: 'multiple-choice', question: 'She did not come ___ she was tired.', translation: 'She did not come because she was tired.', options: ['because', 'although', 'unless', 'if'], correctAnswer: 'because', points: 10 }
    ]
  },
  {
    id: 'relative-clauses-advanced-1',
    title: 'Relative Clauses Advanced',
    description: 'Advanced relative clause structures',
    icon: '🔗',
    exercises: [
      { id: 'rel-1', sectionId: 'complex', type: 'multiple-choice', question: 'The book ___ is on the table is mine.', translation: 'The book which is on the table is mine.', options: ['who', 'which', 'where', 'when'], correctAnswer: 'which', points: 10 },
      { id: 'rel-2', sectionId: 'complex', type: 'multiple-choice', question: 'The woman ___ lives next door is a doctor.', translation: 'The woman who lives next door is a doctor.', options: ['who', 'which', 'whom', 'whose'], correctAnswer: 'who', points: 10 },
      { id: 'rel-3', sectionId: 'complex', type: 'multiple-choice', question: 'The reason ___ he left is unclear.', translation: 'The reason why he left is unclear.', options: ['who', 'which', 'why', 'where'], correctAnswer: 'why', points: 10 },
      { id: 'rel-4', sectionId: 'complex', type: 'multiple-choice', question: 'The place ___ we met was beautiful.', translation: 'The place where we met was beautiful.', options: ['who', 'which', 'where', 'when'], correctAnswer: 'where', points: 10 },
      { id: 'rel-5', sectionId: 'complex', type: 'multiple-choice', question: 'I know the person ___ car was stolen.', translation: 'I know the person whose car was stolen.', options: ['who', 'which', 'whose', 'whom'], correctAnswer: 'whose', points: 10 },
      { id: 'rel-6', sectionId: 'complex', type: 'multiple-choice', question: 'The day ___ I arrived was Monday.', translation: 'The day when I arrived was Monday.', options: ['who', 'which', 'where', 'when'], correctAnswer: 'when', points: 10 },
      { id: 'rel-7', sectionId: 'complex', type: 'multiple-choice', question: 'He is the only person ___ can help.', translation: 'He is the only person who can help.', options: ['who', 'which', 'whom', 'whose'], correctAnswer: 'who', points: 10 },
      { id: 'rel-8', sectionId: 'complex', type: 'multiple-choice', question: 'Everything ___ happens has a reason.', translation: 'Everything that happens has a reason.', options: ['who', 'which', 'that', 'what'], correctAnswer: 'that', points: 10 },
      { id: 'rel-9', sectionId: 'complex', type: 'multiple-choice', question: 'The person ___ I spoke to was friendly.', translation: 'The person whom I spoke to was friendly.', options: ['who', 'which', 'whom', 'whose'], correctAnswer: 'whom', points: 10 },
      { id: 'rel-10', sectionId: 'complex', type: 'multiple-choice', question: 'The restaurant ___ we ate was expensive.', translation: 'The restaurant where we ate was expensive.', options: ['who', 'which', 'where', 'when'], correctAnswer: 'where', points: 10 }
    ]
  },
  {
    id: 'coordinating-advanced-1',
    title: 'Coordinating Conjunctions Advanced',
    description: 'Complex compound sentences',
    icon: '⚖️',
    exercises: [
      { id: 'coord-1', sectionId: 'complex', type: 'multiple-choice', question: 'She was tired, ___ she kept working.', translation: 'She was tired, but she kept working.', options: ['and', 'but', 'or', 'so'], correctAnswer: 'but', points: 10 },
      { id: 'coord-2', sectionId: 'complex', type: 'multiple-choice', question: 'Either you come ___ you call me.', translation: 'Either you come or you call me.', options: ['and', 'but', 'or', 'so'], correctAnswer: 'or', points: 10 },
      { id: 'coord-3', sectionId: 'complex', type: 'multiple-choice', question: 'It was raining, ___ we stayed inside.', translation: 'It was raining, so we stayed inside.', options: ['and', 'but', 'or', 'so'], correctAnswer: 'so', points: 10 },
      { id: 'coord-4', sectionId: 'complex', type: 'multiple-choice', question: 'He is smart ___ also kind.', translation: 'He is smart and also kind.', options: ['but', 'and', 'or', 'so'], correctAnswer: 'and', points: 10 },
      { id: 'coord-5', sectionId: 'complex', type: 'multiple-choice', question: 'Neither do I ___ does she.', translation: 'Neither do I nor does she.', options: ['and', 'but', 'nor', 'or'], correctAnswer: 'nor', points: 10 },
      { id: 'coord-6', sectionId: 'complex', type: 'multiple-choice', question: 'You can study ___ you can play.', translation: 'You can study or you can play.', options: ['and', 'but', 'or', 'so'], correctAnswer: 'or', points: 10 },
      { id: 'coord-7', sectionId: 'complex', type: 'multiple-choice', question: 'It was cold, ___ we lit a fire.', translation: 'It was cold, so we lit a fire.', options: ['and', 'but', 'or', 'so'], correctAnswer: 'so', points: 10 },
      { id: 'coord-8', sectionId: 'complex', type: 'multiple-choice', question: 'He studied hard, ___ he passed.', translation: 'He studied hard, and he passed.', options: ['but', 'and', 'or', 'so'], correctAnswer: 'and', points: 10 },
      { id: 'coord-9', sectionId: 'complex', type: 'multiple-choice', question: 'I want to go, ___ I cannot.', translation: 'I want to go, but I cannot.', options: ['and', 'but', 'or', 'so'], correctAnswer: 'but', points: 10 },
      { id: 'coord-10', sectionId: 'complex', type: 'multiple-choice', question: 'We can wait ___ leave now.', translation: 'We can wait or leave now.', options: ['and', 'but', 'or', 'so'], correctAnswer: 'or', points: 10 }
    ]
  },
  {
    id: 'conditionals-complex-1',
    title: 'Complex Conditionals',
    description: 'Advanced conditional structures',
    icon: '🔀',
    exercises: [
      { id: 'cond-1', sectionId: 'complex', type: 'multiple-choice', question: 'If it ___ tomorrow, we will cancel.', translation: 'If it rains tomorrow, we will cancel.', options: ['rain', 'rains', 'rained', 'raining'], correctAnswer: 'rains', points: 10 },
      { id: 'cond-2', sectionId: 'complex', type: 'multiple-choice', question: 'If I ___ more money, I would travel.', translation: 'If I had more money, I would travel.', options: ['have', 'had', 'had had', 'would have'], correctAnswer: 'had', points: 10 },
      { id: 'cond-3', sectionId: 'complex', type: 'multiple-choice', question: 'Had I known, I ___ you.', translation: 'Had I known, I would have told you.', options: ['tell', 'told', 'would tell', 'would have told'], correctAnswer: 'would have told', points: 10 },
      { id: 'cond-4', sectionId: 'complex', type: 'multiple-choice', question: 'If she ___ harder, she would succeed.', translation: 'If she worked harder, she would succeed.', options: ['works', 'worked', 'working', 'work'], correctAnswer: 'worked', points: 10 },
      { id: 'cond-5', sectionId: 'complex', type: 'multiple-choice', question: 'Unless you ___ hard, you will fail.', translation: 'Unless you work hard, you will fail.', options: ['work', 'worked', 'working', 'works'], correctAnswer: 'work', points: 10 },
      { id: 'cond-6', sectionId: 'complex', type: 'multiple-choice', question: 'If they ___ here, we would start.', translation: 'If they were here, we would start.', options: ['are', 'were', 'had been', 'will be'], correctAnswer: 'were', points: 10 },
      { id: 'cond-7', sectionId: 'complex', type: 'multiple-choice', question: 'Should you need help, ___ me.', translation: 'Should you need help, call me.', options: ['call', 'call me', 'to call', 'calling'], correctAnswer: 'call me', points: 10 },
      { id: 'cond-8', sectionId: 'complex', type: 'multiple-choice', question: 'If he ___ tomorrow, I will help.', translation: 'If he comes tomorrow, I will help.', options: ['come', 'comes', 'came', 'coming'], correctAnswer: 'comes', points: 10 },
      { id: 'cond-9', sectionId: 'complex', type: 'multiple-choice', question: 'But for your help, I ___ .', translation: 'But for your help, I would have failed.', options: ['fail', 'failed', 'would fail', 'would have failed'], correctAnswer: 'would have failed', points: 10 },
      { id: 'cond-10', sectionId: 'complex', type: 'multiple-choice', question: 'If only I ___ that before.', translation: 'If only I had known that before.', options: ['knew', 'know', 'had known', 'known'], correctAnswer: 'had known', points: 10 }
    ]
  },
  {
    id: 'conjunctive-adverbs-advanced-1',
    title: 'Conjunctive Adverbs Advanced',
    description: 'Advanced linking with conjunctive adverbs',
    icon: '🔗',
    exercises: [
      { id: 'conj-1', sectionId: 'complex', type: 'multiple-choice', question: 'He was late; ___ he missed the train.', translation: 'He was late; consequently he missed the train.', options: ['however', 'consequently', 'nevertheless', 'therefore'], correctAnswer: 'consequently', points: 10 },
      { id: 'conj-2', sectionId: 'complex', type: 'multiple-choice', question: 'She was tired; ___ she continued.', translation: 'She was tired; nevertheless she continued.', options: ['so', 'but', 'nevertheless', 'therefore'], correctAnswer: 'nevertheless', points: 10 },
      { id: 'conj-3', sectionId: 'complex', type: 'multiple-choice', question: 'It was raining; ___ we stayed inside.', translation: 'It was raining; therefore we stayed inside.', options: ['but', 'however', 'therefore', 'so'], correctAnswer: 'therefore', points: 10 },
      { id: 'conj-4', sectionId: 'complex', type: 'multiple-choice', question: 'He studied hard; ___ he passed.', translation: 'He studied hard; as a result he passed.', options: ['but', 'as a result', 'however', 'so'], correctAnswer: 'as a result', points: 10 },
      { id: 'conj-5', sectionId: 'complex', type: 'multiple-choice', question: 'She was ill; ___ she missed work.', translation: 'She was ill; consequently she missed work.', options: ['but', 'consequently', 'however', 'so'], correctAnswer: 'consequently', points: 10 },
      { id: 'conj-6', sectionId: 'complex', type: 'multiple-choice', question: 'It was expensive; ___ we did not buy.', translation: 'It was expensive; therefore we did not buy.', options: ['but', 'therefore', 'although', 'so'], correctAnswer: 'therefore', points: 10 },
      { id: 'conj-7', sectionId: 'complex', type: 'multiple-choice', question: 'He was late; ___ we started without him.', translation: 'He was late; consequently we started without him.', options: ['but', 'consequently', 'however', 'so'], correctAnswer: 'consequently', points: 10 },
      { id: 'conj-8', sectionId: 'complex', type: 'multiple-choice', question: 'The weather was bad; ___ we cancelled.', translation: 'The weather was bad; therefore we cancelled.', options: ['but', 'however', 'therefore', 'so'], correctAnswer: 'therefore', points: 10 },
      { id: 'conj-9', sectionId: 'complex', type: 'multiple-choice', question: 'She was talented; ___ she got the job.', translation: 'She was talented; consequently she got the job.', options: ['but', 'consequently', 'however', 'so'], correctAnswer: 'consequently', points: 10 },
      { id: 'conj-10', sectionId: 'complex', type: 'multiple-choice', question: 'They worked hard; ___ they succeeded.', translation: 'They worked hard; as a result they succeeded.', options: ['but', 'as a result', 'however', 'so'], correctAnswer: 'as a result', points: 10 }
    ]
  },
  {
    id: 'participial-phrases-1',
    title: 'Participial Phrases',
    description: 'Using participial phrases',
    icon: '📝',
    exercises: [
      { id: 'part-1', sectionId: 'complex', type: 'multiple-choice', question: '___ the door, I entered the room.', translation: 'Opening the door, I entered the room.', options: ['Open', 'Opening', 'Opened', 'To open'], correctAnswer: 'Opening', points: 10 },
      { id: 'part-2', sectionId: 'complex', type: 'multiple-choice', question: '___ by the teacher, the students were happy.', translation: 'Praised by the teacher, the students were happy.', options: ['Praising', 'Praised', 'To praise', 'Praise'], correctAnswer: 'Praised', points: 10 },
      { id: 'part-3', sectionId: 'complex', type: 'multiple-choice', question: 'She sat by the window, ___ a book.', translation: 'She sat by the window, reading a book.', options: ['read', 'reading', 'to read', 'reads'], correctAnswer: 'reading', points: 10 },
      { id: 'part-4', sectionId: 'complex', type: 'multiple-choice', question: '___ the work, he went home.', translation: 'Finishing the work, he went home.', options: ['Finish', 'Finishing', 'Finished', 'To finish'], correctAnswer: 'Finishing', points: 10 },
      { id: 'part-5', sectionId: 'complex', type: 'multiple-choice', question: '___ from the university, she got a job.', translation: 'Graduating from the university, she got a job.', options: ['Graduate', 'Graduating', 'Graduated', 'To graduate'], correctAnswer: 'Graduating', points: 10 },
      { id: 'part-6', sectionId: 'complex', type: 'multiple-choice', question: 'The ___ car needs repair.', translation: 'The broken car needs repair.', options: ['break', 'breaking', 'broken', 'breaks'], correctAnswer: 'broken', points: 10 },
      { id: 'part-7', sectionId: 'complex', type: 'multiple-choice', question: 'He walked down the street, ___ to himself.', translation: 'He walked down the street, talking to himself.', options: ['talk', 'talking', 'talked', 'talks'], correctAnswer: 'talking', points: 10 },
      { id: 'part-8', sectionId: 'complex', type: 'multiple-choice', question: '___ the news, she cried.', translation: 'Hearing the news, she cried.', options: ['Hear', 'Hearing', 'Heard', 'To hear'], correctAnswer: 'Hearing', points: 10 },
      { id: 'part-9', sectionId: 'complex', type: 'multiple-choice', question: 'The ___ window was cold.', translation: 'The open window was cold.', options: ['open', 'opening', 'opened', 'opens'], correctAnswer: 'open', points: 10 },
      { id: 'part-10', sectionId: 'complex', type: 'multiple-choice', question: '___ all night, he was tired.', translation: 'Working all night, he was tired.', options: ['Work', 'Working', 'Worked', 'To work'], correctAnswer: 'Working', points: 10 }
    ]
  },
  {
    id: 'infinitive-clauses-1',
    title: 'Infinitive Clauses',
    description: 'Using infinitive clauses',
    icon: '🔄',
    exercises: [
      { id: 'inf-1', sectionId: 'complex', type: 'multiple-choice', question: 'I wanted ___ the movie.', translation: 'I wanted to see the movie.', options: ['see', 'to see', 'seeing', 'seen'], correctAnswer: 'to see', points: 10 },
      { id: 'inf-2', sectionId: 'complex', type: 'multiple-choice', question: 'She told me ___ here.', translation: 'She told me to wait here.', options: ['wait', 'to wait', 'waiting', 'waited'], correctAnswer: 'to wait', points: 10 },
      { id: 'inf-3', sectionId: 'complex', type: 'multiple-choice', question: 'He decided ___ home.', translation: 'He decided to go home.', options: ['go', 'to go', 'going', 'went'], correctAnswer: 'to go', points: 10 },
      { id: 'inf-4', sectionId: 'complex', type: 'multiple-choice', question: 'It is important ___ on time.', translation: 'It is important to be on time.', options: ['be', 'to be', 'being', 'been'], correctAnswer: 'to be', points: 10 },
      { id: 'inf-5', sectionId: 'complex', type: 'multiple-choice', question: 'She seems ___ happy.', translation: 'She seems to be happy.', options: ['be', 'to be', 'being', 'been'], correctAnswer: 'to be', points: 10 },
      { id: 'inf-6', sectionId: 'complex', type: 'multiple-choice', question: 'I was surprised ___ that.', translation: 'I was surprised to hear that.', options: ['hear', 'to hear', 'hearing', 'heard'], correctAnswer: 'to hear', points: 10 },
      { id: 'inf-7', sectionId: 'complex', type: 'multiple-choice', question: 'He is easy ___ .', translation: 'He is easy to please.', options: ['please', 'to please', 'pleasing', 'pleased'], correctAnswer: 'to please', points: 10 },
      { id: 'inf-8', sectionId: 'complex', type: 'multiple-choice', question: 'She has a lot ___ .', translation: 'She has a lot to do.', options: ['do', 'to do', 'doing', 'done'], correctAnswer: 'to do', points: 10 },
      { id: 'inf-9', sectionId: 'complex', type: 'multiple-choice', question: 'The best way ___ is to practice.', translation: 'The best way to learn is to practice.', options: ['learn', 'to learn', 'learning', 'learned'], correctAnswer: 'to learn', points: 10 },
      { id: 'inf-10', sectionId: 'complex', type: 'multiple-choice', question: 'I have nothing ___ .', translation: 'I have nothing to say.', options: ['say', 'to say', 'saying', 'said'], correctAnswer: 'to say', points: 10 }
    ]
  },
  {
    id: 'gerund-phrases-1',
    title: 'Gerund Phrases',
    description: 'Using gerunds as subjects and objects',
    icon: '📝',
    exercises: [
      { id: 'ger-1', sectionId: 'complex', type: 'multiple-choice', question: '___ is my favorite hobby.', translation: 'Reading is my favorite hobby.', options: ['Read', 'Reading', 'To read', 'Reads'], correctAnswer: 'Reading', points: 10 },
      { id: 'ger-2', sectionId: 'complex', type: 'multiple-choice', question: 'I enjoy ___ .', translation: 'I enjoy swimming.', options: ['swim', 'swimming', 'to swim', 'swum'], correctAnswer: 'swimming', points: 10 },
      { id: 'ger-3', sectionId: 'complex', type: 'multiple-choice', question: 'She suggested ___ out.', translation: 'She suggested going out.', options: ['go', 'going', 'to go', 'went'], correctAnswer: 'going', points: 10 },
      { id: 'ger-4', sectionId: 'complex', type: 'multiple-choice', question: 'His job is ___ people.', translation: 'His job is helping people.', options: ['help', 'helping', 'to help', 'helps'], correctAnswer: 'helping', points: 10 },
      { id: 'ger-5', sectionId: 'complex', type: 'multiple-choice', question: 'I look forward to ___ you.', translation: 'I look forward to seeing you.', options: ['see', 'seeing', 'to see', 'seen'], correctAnswer: 'seeing', points: 10 },
      { id: 'ger-6', sectionId: 'complex', type: 'multiple-choice', question: 'She is good at ___ .', translation: 'She is good at singing.', options: ['sing', 'singing', 'to sing', 'sings'], correctAnswer: 'singing', points: 10 },
      { id: 'ger-7', sectionId: 'complex', type: 'multiple-choice', question: 'He avoids ___ late.', translation: 'He avoids being late.', options: ['be', 'being', 'to be', 'been'], correctAnswer: 'being', points: 10 },
      { id: 'ger-8', sectionId: 'complex', type: 'multiple-choice', question: 'I stopped ___ smoking.', translation: 'I stopped smoking.', options: ['to smoke', 'smoking', 'smoke', 'smoked'], correctAnswer: 'smoking', points: 10 },
      { id: 'ger-9', sectionId: 'complex', type: 'multiple-choice', question: '___ English is important.', translation: 'Learning English is important.', options: ['Learn', 'Learning', 'To learn', 'Learns'], correctAnswer: 'Learning', points: 10 },
      { id: 'ger-10', sectionId: 'complex', type: 'multiple-choice', question: 'She admitted ___ the truth.', translation: 'She admitted telling the truth.', options: ['tell', 'telling', 'to tell', 'told'], correctAnswer: 'telling', points: 10 }
    ]
  },
  {
    id: 'noun-clauses-1',
    title: 'Noun Clauses',
    description: 'Noun clauses as subjects and objects',
    icon: '📝',
    exercises: [
      { id: 'noun-1', sectionId: 'complex', type: 'multiple-choice', question: '___ she came was a surprise.', translation: 'That she came was a surprise.', options: ['What', 'That', 'When', 'If'], correctAnswer: 'That', points: 10 },
      { id: 'noun-2', sectionId: 'complex', type: 'multiple-choice', question: 'I know ___ he is coming.', translation: 'I know that he is coming.', options: ['what', 'that', 'when', 'if'], correctAnswer: 'that', points: 10 },
      { id: 'noun-3', sectionId: 'complex', type: 'multiple-choice', question: '___ you need is patience.', translation: 'What you need is patience.', options: ['That', 'What', 'When', 'How'], correctAnswer: 'What', points: 10 },
      { id: 'noun-4', sectionId: 'complex', type: 'multiple-choice', question: 'I wonder ___ she is.', translation: 'I wonder who she is.', options: ['what', 'who', 'where', 'when'], correctAnswer: 'who', points: 10 },
      { id: 'noun-5', sectionId: 'complex', type: 'multiple-choice', question: 'Tell me ___ you want.', translation: 'Tell me what you want.', options: ['who', 'what', 'where', 'when'], correctAnswer: 'what', points: 10 },
      { id: 'noun-6', sectionId: 'complex', type: 'multiple-choice', question: 'The question is ___ we can go.', translation: 'The question is whether we can go.', options: ['that', 'if', 'whether', 'what'], correctAnswer: 'whether', points: 10 },
      { id: 'noun-7', sectionId: 'complex', type: 'multiple-choice', question: 'I am not sure ___ she will come.', translation: 'I am not sure if she will come.', options: ['that', 'if', 'whether', 'what'], correctAnswer: 'if', points: 10 },
      { id: 'noun-8', sectionId: 'complex', type: 'multiple-choice', question: '___ he said was true.', translation: 'What he said was true.', options: ['That', 'What', 'When', 'Why'], correctAnswer: 'What', points: 10 },
      { id: 'noun-9', sectionId: 'complex', type: 'multiple-choice', question: 'She told me ___ the book was good.', translation: 'She told me that the book was good.', options: ['what', 'that', 'which', 'who'], correctAnswer: 'that', points: 10 },
      { id: 'noun-10', sectionId: 'complex', type: 'multiple-choice', question: '___ matters is your attitude.', translation: 'What matters is your attitude.', options: ['That', 'What', 'Which', 'Who'], correctAnswer: 'What', points: 10 }
    ]
  },
  {
    id: 'adverbial-clauses-1',
    title: 'Adverbial Clauses',
    description: 'Adverbial clauses of time, cause, purpose',
    icon: '⏰',
    exercises: [
      { id: 'advcl-1', sectionId: 'complex', type: 'multiple-choice', question: 'I will call you ___ I arrive.', translation: 'I will call you when I arrive.', options: ['if', 'when', 'unless', 'because'], correctAnswer: 'when', points: 10 },
      { id: 'advcl-2', sectionId: 'complex', type: 'multiple-choice', question: 'She is happy ___ she passed.', translation: 'She is happy because she passed.', options: ['if', 'when', 'because', 'although'], correctAnswer: 'because', points: 10 },
      { id: 'advcl-3', sectionId: 'complex', type: 'multiple-choice', question: 'He works hard ___ he can succeed.', translation: 'He works hard so that he can succeed.', options: ['because', 'so that', 'although', 'if'], correctAnswer: 'so that', points: 10 },
      { id: 'advcl-4', sectionId: 'complex', type: 'multiple-choice', question: '___ it rains, we will stay home.', translation: 'If it rains, we will stay home.', options: ['When', 'If', 'Although', 'Because'], correctAnswer: 'If', points: 10 },
      { id: 'advcl-5', sectionId: 'complex', type: 'multiple-choice', question: 'She left ___ she was tired.', translation: 'She left because she was tired.', options: ['although', 'because', 'if', 'when'], correctAnswer: 'because', points: 10 },
      { id: 'advcl-6', sectionId: 'complex', type: 'multiple-choice', question: 'I waited ___ she came.', translation: 'I waited until she came.', options: ['when', 'until', 'since', 'during'], correctAnswer: 'until', points: 10 },
      { id: 'advcl-7', sectionId: 'complex', type: 'multiple-choice', question: '___ he was ill, he went to work.', translation: 'Although he was ill, he went to work.', options: ['Because', 'Although', 'If', 'When'], correctAnswer: 'Although', points: 10 },
      { id: 'advcl-8', sectionId: 'complex', type: 'multiple-choice', question: 'He called ___ he got home.', translation: 'He called as soon as he got home.', options: ['when', 'as soon as', 'before', 'after'], correctAnswer: 'as soon as', points: 10 },
      { id: 'advcl-9', sectionId: 'complex', type: 'multiple-choice', question: 'She works ___ she can support family.', translation: 'She works so that she can support family.', options: ['because', 'so that', 'although', 'if'], correctAnswer: 'so that', points: 10 },
      { id: 'advcl-10', sectionId: 'complex', type: 'multiple-choice', question: 'You can go ___ you finish.', translation: 'You can go when you finish.', options: ['if', 'when', 'unless', 'because'], correctAnswer: 'when', points: 10 }
    ]
  },
  {
    id: 'reduced-clauses-1',
    title: 'Reduced Clauses',
    description: 'Reducing clauses to phrases',
    icon: '📝',
    exercises: [
      { id: 'red-1', sectionId: 'complex', type: 'multiple-choice', question: 'The man ___ is tall.', translation: 'The man who is tall.', options: ['who', 'whom', 'whose', '-'], correctAnswer: 'who is', points: 10 },
      { id: 'red-2', sectionId: 'complex', type: 'multiple-choice', question: 'The book ___ is interesting.', translation: 'The book that is interesting.', options: ['which', 'who', 'whom', '-'], correctAnswer: 'that is', points: 10 },
      { id: 'red-3', sectionId: 'complex', type: 'multiple-choice', question: 'The girl ___ by the window.', translation: 'The girl sitting by the window.', options: ['who sits', 'sitting', 'who is sitting', 'sit'], correctAnswer: 'sitting', points: 10 },
      { id: 'red-4', sectionId: 'complex', type: 'multiple-choice', question: 'The car ___ is new.', translation: 'The car that was bought is new.', options: ['bought', 'buying', 'who bought', 'to buy'], correctAnswer: 'bought', points: 10 },
      { id: 'red-5', sectionId: 'complex', type: 'multiple-choice', question: 'The letter ___ was handwritten.', translation: 'The letter written was handwritten.', options: ['writing', 'written', 'who writes', 'to write'], correctAnswer: 'written', points: 10 },
      { id: 'red-6', sectionId: 'complex', type: 'multiple-choice', question: 'The people ___ are friendly.', translation: 'The people waiting are friendly.', options: ['who wait', 'waiting', 'wait', 'to wait'], correctAnswer: 'waiting', points: 10 },
      { id: 'red-7', sectionId: 'complex', type: 'multiple-choice', question: 'The student ___ passed.', translation: 'The student studying passed.', options: ['who studies', 'studying', 'studies', 'to study'], correctAnswer: 'studying', points: 10 },
      { id: 'red-8', sectionId: 'complex', type: 'multiple-choice', question: 'The food ___ was cold.', translation: 'The food cooked was cold.', options: ['cooking', 'cooked', 'who cooks', 'to cook'], correctAnswer: 'cooked', points: 10 },
      { id: 'red-9', sectionId: 'complex', type: 'multiple-choice', question: 'The man ___ is kind.', translation: 'The man met is kind.', options: ['meeting', 'met', 'who meets', 'to meet'], correctAnswer: 'met', points: 10 },
      { id: 'red-10', sectionId: 'complex', type: 'multiple-choice', question: 'The book ___ is valuable.', translation: 'The book written is valuable.', options: ['writing', 'written', 'who writes', 'to write'], correctAnswer: 'written', points: 10 }
    ]
  }
];