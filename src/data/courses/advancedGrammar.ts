import { ExercisePack } from '../academy';

export const advancedGrammarExercisePacks: ExercisePack[] = [
  {
    id: 'inverted-1',
    title: 'Inverted Sentences',
    description: 'Practice inversion',
    icon: '🔄',
    exercises: [
      { id: 'inv-ex1', sectionId: 'advanced', type: 'multiple-choice', question: '___ had I known, I would have come.', translation: 'Had I known, I would have come.', options: ['If', 'When', 'Had', 'Would'], correctAnswer: 'Had', points: 10 },
      { id: 'inv-ex2', sectionId: 'advanced', type: 'multiple-choice', question: '___ no one called, I would have left.', translation: 'Had no one called, I would have left.', options: ['If', 'Had', 'When', 'Would'], correctAnswer: 'Had', points: 10 }
    ]
  },
  {
    id: 'mixed-conditionals-1',
    title: 'Mixed Conditionals',
    description: 'Practice different tense combinations',
    icon: '⚡',
    exercises: [
      { id: 'mc-ex1', sectionId: 'advanced', type: 'multiple-choice', question: 'If I ___ rich, I would have bought a house.', translation: 'If I were rich, I would have bought a house.', options: ['am', 'was', 'were', 'be'], correctAnswer: 'were', points: 10 }
    ]
  },
  {
    id: 'emphatic-inversion-1',
    title: 'Emphatic Inversion',
    description: 'Emphatic structures with inversion',
    icon: '🎯',
    exercises: [
      { id: 'emph-1', sectionId: 'advanced', type: 'multiple-choice', question: '___ did I realize the danger.', translation: 'Never did I realize the danger.', options: ['Ever', 'Never', 'Sometimes', 'Often'], correctAnswer: 'Never', points: 10 },
      { id: 'emph-2', sectionId: 'advanced', type: 'multiple-choice', question: '___ did she complain about the work.', translation: 'Rarely did she complain about the work.', options: ['Usually', 'Rarely', 'Always', 'Sometimes'], correctAnswer: 'Rarely', points: 10 },
      { id: 'emph-3', sectionId: 'advanced', type: 'multiple-choice', question: '___ have I been so tired.', translation: 'Seldom have I been so tired.', options: ['Often', 'Seldom', 'Usually', 'Always'], correctAnswer: 'Seldom', points: 10 },
      { id: 'emph-4', sectionId: 'advanced', type: 'multiple-choice', question: '___ did they understand the problem.', translation: 'Little did they understand the problem.', options: ['Much', 'Little', 'Something', 'Anything'], correctAnswer: 'Little', points: 10 },
      { id: 'emph-5', sectionId: 'advanced', type: 'multiple-choice', question: '___ will I trust him again.', translation: 'Never will I trust him again.', options: ['Sometimes', 'Never', 'Often', 'Usually'], correctAnswer: 'Never', points: 10 },
      { id: 'emph-6', sectionId: 'advanced', type: 'multiple-choice', question: '___ do I doubt her abilities.', translation: 'Rarely do I doubt her abilities.', options: ['Often', 'Rarely', 'Always', 'Usually'], correctAnswer: 'Rarely', points: 10 },
      { id: 'emph-7', sectionId: 'advanced', type: 'multiple-choice', question: '___ has the situation improved.', translation: 'Seldom has the situation improved.', options: ['Often', 'Seldom', 'Sometimes', 'Always'], correctAnswer: 'Seldom', points: 10 },
      { id: 'emph-8', sectionId: 'advanced', type: 'multiple-choice', question: '___ do we see such talent.', translation: 'Rarely do we see such talent.', options: ['Often', 'Rarely', 'Always', 'Usually'], correctAnswer: 'Rarely', points: 10 },
      { id: 'emph-9', sectionId: 'advanced', type: 'multiple-choice', question: '___ was I more surprised.', translation: 'Never was I more surprised.', options: ['Sometimes', 'Never', 'Often', 'Usually'], correctAnswer: 'Never', points: 10 },
      { id: 'emph-10', sectionId: 'advanced', type: 'multiple-choice', question: '___ have I seen such beauty.', translation: 'Rarely have I seen such beauty.', options: ['Often', 'Rarely', 'Always', 'Sometimes'], correctAnswer: 'Rarely', points: 10 }
    ]
  },
  {
    id: 'subjunctive-1',
    title: 'Subjunctive Mood',
    description: 'Practice subjunctive verbs',
    icon: '🎭',
    exercises: [
      { id: 'subj-1', sectionId: 'advanced', type: 'multiple-choice', question: 'It is essential that he ___ on time.', translation: 'It is essential that he be on time.', options: ['is', 'be', 'was', 'were'], correctAnswer: 'be', points: 10 },
      { id: 'subj-2', sectionId: 'advanced', type: 'multiple-choice', question: 'I wish I ___ richer.', translation: 'I wish I were richer.', options: ['am', 'was', 'were', 'be'], correctAnswer: 'were', points: 10 },
      { id: 'subj-3', sectionId: 'advanced', type: 'multiple-choice', question: 'She demanded that he ___ immediately.', translation: 'She demanded that he leave immediately.', options: ['leaves', 'leave', 'left', 'leaving'], correctAnswer: 'leave', points: 10 },
      { id: 'subj-4', sectionId: 'advanced', type: 'multiple-choice', question: 'If only I ___ better.', translation: 'If only I were better.', options: ['am', 'was', 'were', 'be'], correctAnswer: 'were', points: 10 },
      { id: 'subj-5', sectionId: 'advanced', type: 'multiple-choice', question: 'It is important that she ___ present.', translation: 'It is important that she be present.', options: ['is', 'be', 'was', 'are'], correctAnswer: 'be', points: 10 },
      { id: 'subj-6', sectionId: 'advanced', type: 'multiple-choice', question: 'They insisted that he ___ the job.', translation: 'They insisted that he take the job.', options: ['takes', 'take', 'took', 'taking'], correctAnswer: 'take', points: 10 },
      { id: 'subj-7', sectionId: 'advanced', type: 'multiple-choice', question: 'I would rather he ___ away.', translation: 'I would rather he were away.', options: ['is', 'was', 'were', 'be'], correctAnswer: 'were', points: 10 },
      { id: 'subj-8', sectionId: 'advanced', type: 'multiple-choice', question: 'It is crucial that we ___ now.', translation: 'It is crucial that we leave now.', options: ['leave', 'leaves', 'left', 'leaving'], correctAnswer: 'leave', points: 10 },
      { id: 'subj-9', sectionId: 'advanced', type: 'multiple-choice', question: 'She acts as if she ___ the owner.', translation: 'She acts as if she were the owner.', options: ['is', 'was', 'were', 'be'], correctAnswer: 'were', points: 10 },
      { id: 'subj-10', sectionId: 'advanced', type: 'multiple-choice', question: 'It is necessary that everyone ___ on time.', translation: 'It is necessary that everyone be on time.', options: ['is', 'be', 'are', 'were'], correctAnswer: 'be', points: 10 }
    ]
  },
  {
    id: 'conditional-mixed-1',
    title: 'Mixed Conditionals',
    description: 'Mixing different conditional types',
    icon: '🔀',
    exercises: [
      { id: 'mix-cond-1', sectionId: 'advanced', type: 'multiple-choice', question: 'If I had studied, I ___ the exam.', translation: 'If I had studied, I would have passed the exam.', options: ['pass', 'passed', 'would pass', 'would have passed'], correctAnswer: 'would have passed', points: 10 },
      { id: 'mix-cond-2', sectionId: 'advanced', type: 'multiple-choice', question: 'If she were here, she ___ us.', translation: 'If she were here, she would help us.', options: ['helps', 'helped', 'would help', 'will help'], correctAnswer: 'would help', points: 10 },
      { id: 'mix-cond-3', sectionId: 'advanced', type: 'multiple-choice', question: 'If he had money, he ___ travel.', translation: 'If he had money, he would travel more.', options: ['travels', 'traveled', 'would travel', 'will travel'], correctAnswer: 'would travel', points: 10 },
      { id: 'mix-cond-4', sectionId: 'advanced', type: 'multiple-choice', question: 'If I knew the answer, I ___ you.', translation: 'If I knew the answer, I would tell you.', options: ['tell', 'told', 'would tell', 'will tell'], correctAnswer: 'would tell', points: 10 },
      { id: 'mix-cond-5', sectionId: 'advanced', type: 'multiple-choice', question: 'If they worked harder, they ___ success.', translation: 'If they worked harder, they would achieve success.', options: ['achieve', 'achieved', 'would achieve', 'will achieve'], correctAnswer: 'would achieve', points: 10 },
      { id: 'mix-cond-6', sectionId: 'advanced', type: 'multiple-choice', question: 'If I had seen her, I ___ her.', translation: 'If I had seen her, I would have told her.', options: ['tell', 'told', 'would tell', 'would have told'], correctAnswer: 'would have told', points: 10 },
      { id: 'mix-cond-7', sectionId: 'advanced', type: 'multiple-choice', question: 'If he were more careful, he ___ mistakes.', translation: 'If he were more careful, he would not make mistakes.', options: ['makes', 'made', 'would make', 'would have made'], correctAnswer: 'would make', points: 10 },
      { id: 'mix-cond-8', sectionId: 'advanced', type: 'multiple-choice', question: 'If we had left earlier, we ___ the train.', translation: 'If we had left earlier, we would have caught the train.', options: ['catch', 'caught', 'would catch', 'would have caught'], correctAnswer: 'would have caught', points: 10 },
      { id: 'mix-cond-9', sectionId: 'advanced', type: 'multiple-choice', question: 'If you tried harder, you ___ it.', translation: 'If you tried harder, you could do it.', options: ['do', 'did', 'can do', 'could do'], correctAnswer: 'could do', points: 10 },
      { id: 'mix-cond-10', sectionId: 'advanced', type: 'multiple-choice', question: 'If she had been careful, she ___ the vase.', translation: 'If she had been careful, she would not have broken the vase.', options: ['breaks', 'broke', 'would break', 'would have broken'], correctAnswer: 'would have broken', points: 10 }
    ]
  },
  {
    id: 'advanced-modals-1',
    title: 'Advanced Modal Concepts',
    description: 'Advanced modal verb usage',
    icon: '🔧',
    exercises: [
      { id: 'adv-mod-1', sectionId: 'advanced', type: 'multiple-choice', question: 'She ___ have gone to the party.', translation: 'She might have gone to the party.', options: ['might', 'must', 'will', 'can'], correctAnswer: 'might', points: 10 },
      { id: 'adv-mod-2', sectionId: 'advanced', type: 'multiple-choice', question: 'He ___ have studied more.', translation: 'He should have studied more.', options: ['might', 'should', 'can', 'will'], correctAnswer: 'should', points: 10 },
      { id: 'adv-mod-3', sectionId: 'advanced', type: 'multiple-choice', question: 'They ___ have finished by now.', translation: 'They must have finished by now.', options: ['must', 'might', 'can', 'would'], correctAnswer: 'must', points: 10 },
      { id: 'adv-mod-4', sectionId: 'advanced', type: 'multiple-choice', question: 'You ___ have told me earlier.', translation: 'You could have told me earlier.', options: ['could', 'must', 'will', 'shall'], correctAnswer: 'could', points: 10 },
      { id: 'adv-mod-5', sectionId: 'advanced', type: 'multiple-choice', question: 'She ___ have been at home.', translation: 'She might have been at home.', options: ['might', 'must', 'will', 'can'], correctAnswer: 'might', points: 10 },
      { id: 'adv-mod-6', sectionId: 'advanced', type: 'multiple-choice', question: 'It ___ have been him.', translation: 'It could have been him.', options: ['could', 'must', 'will', 'should'], correctAnswer: 'could', points: 10 },
      { id: 'adv-mod-7', sectionId: 'advanced', type: 'multiple-choice', question: 'They ___ have won the game.', translation: 'They should have won the game.', options: ['should', 'might', 'will', 'can'], correctAnswer: 'should', points: 10 },
      { id: 'adv-mod-8', sectionId: 'advanced', type: 'multiple-choice', question: 'He ___ have known about it.', translation: 'He must have known about it.', options: ['must', 'might', 'can', 'would'], correctAnswer: 'must', points: 10 },
      { id: 'adv-mod-9', sectionId: 'advanced', type: 'multiple-choice', question: 'You ___ have tried harder.', translation: 'You ought to have tried harder.', options: ['ought to', 'can', 'will', 'shall'], correctAnswer: 'ought to', points: 10 },
      { id: 'adv-mod-10', sectionId: 'advanced', type: 'multiple-choice', question: 'It ___ have been raining.', translation: 'It must have been raining.', options: ['must', 'might', 'can', 'could'], correctAnswer: 'must', points: 10 }
    ]
  },
  {
    id: ' cleft-sentences-1',
    title: 'Cleft Sentences',
    description: 'Emphasis with cleft sentences',
    icon: '✂️',
    exercises: [
      { id: 'cleft-1', sectionId: 'advanced', type: 'multiple-choice', question: 'It was John ___ broke the window.', translation: 'It was John who broke the window.', options: ['who', 'which', 'that', 'what'], correctAnswer: 'who', points: 10 },
      { id: 'cleft-2', sectionId: 'advanced', type: 'multiple-choice', question: '___ I need is some rest.', translation: 'What I need is some rest.', options: ['Who', 'What', 'Which', 'That'], correctAnswer: 'What', points: 10 },
      { id: 'cleft-3', sectionId: 'advanced', type: 'multiple-choice', question: 'It was in London ___ we met.', translation: 'It was in London that we met.', options: ['who', 'where', 'that', 'which'], correctAnswer: 'that', points: 10 },
      { id: 'cleft-4', sectionId: 'advanced', type: 'multiple-choice', question: 'It was yesterday ___ she called.', translation: 'It was yesterday that she called.', options: ['who', 'where', 'when', 'that'], correctAnswer: 'that', points: 10 },
      { id: 'cleft-5', sectionId: 'advanced', type: 'multiple-choice', question: '___ made me happy was the news.', translation: 'What made me happy was the news.', options: ['Who', 'What', 'Which', 'That'], correctAnswer: 'What', points: 10 },
      { id: 'cleft-6', sectionId: 'advanced', type: 'multiple-choice', question: 'It was Mary ___ helped us.', translation: 'It was Mary who helped us.', options: ['who', 'which', 'that', 'whom'], correctAnswer: 'who', points: 10 },
      { id: 'cleft-7', sectionId: 'advanced', type: 'multiple-choice', question: 'It was the weather ___ ruined the trip.', translation: 'It was the weather that ruined the trip.', options: ['who', 'which', 'that', 'where'], correctAnswer: 'that', points: 10 },
      { id: 'cleft-8', sectionId: 'advanced', type: 'multiple-choice', question: 'It was because of her ___ we succeeded.', translation: 'It was because of her that we succeeded.', options: ['who', 'which', 'that', 'what'], correctAnswer: 'that', points: 10 },
      { id: 'cleft-9', sectionId: 'advanced', type: 'multiple-choice', question: '___ surprised me was her attitude.', translation: 'What surprised me was her attitude.', options: ['Who', 'What', 'Which', 'That'], correctAnswer: 'What', points: 10 },
      { id: 'cleft-10', sectionId: 'advanced', type: 'multiple-choice', question: 'It was with great difficulty ___ he succeeded.', translation: 'It was with great difficulty that he succeeded.', options: ['who', 'which', 'that', 'where'], correctAnswer: 'that', points: 10 }
    ]
  },
  {
    id: 'advanced-tense-mix-1',
    title: 'Advanced Tense Practice',
    description: 'Complex tense combinations',
    icon: '⏱️',
    exercises: [
      { id: 'adv-tense-1', sectionId: 'advanced', type: 'multiple-choice', question: 'By next year, she ___ here for five years.', translation: 'By next year, she will have been here for five years.', options: ['will be', 'will have been', 'has been', 'is'], correctAnswer: 'will have been', points: 10 },
      { id: 'adv-tense-2', sectionId: 'advanced', type: 'multiple-choice', question: 'She ___ working when I arrived.', translation: 'She had been working when I arrived.', options: ['was', 'had been', 'is', 'will be'], correctAnswer: 'had been', points: 10 },
      { id: 'adv-tense-3', sectionId: 'advanced', type: 'multiple-choice', question: 'They ___ the project by Friday.', translation: 'They will have finished the project by Friday.', options: ['finish', 'finished', 'will finish', 'will have finished'], correctAnswer: 'will have finished', points: 10 },
      { id: 'adv-tense-4', sectionId: 'advanced', type: 'multiple-choice', question: 'At 5pm, I ___ for two hours.', translation: 'At 5pm, I had been waiting for two hours.', options: ['waited', 'was waiting', 'had been waiting', 'will wait'], correctAnswer: 'had been waiting', points: 10 },
      { id: 'adv-tense-5', sectionId: 'advanced', type: 'multiple-choice', question: 'He ___ English since childhood.', translation: 'He has been learning English since childhood.', options: ['learns', 'learned', 'has learned', 'has been learning'], correctAnswer: 'has been learning', points: 10 },
      { id: 'adv-tense-6', sectionId: 'advanced', type: 'multiple-choice', question: 'By the time we ___ , the movie started.', translation: 'By the time we arrived, the movie started.', options: ['arrive', 'arrived', 'had arrived', 'arrive'], correctAnswer: 'arrived', points: 10 },
      { id: 'adv-tense-7', sectionId: 'advanced', type: 'multiple-choice', question: 'I ___ for her when she called.', translation: 'I was waiting for her when she called.', options: ['waited', 'was waiting', 'had waited', 'will wait'], correctAnswer: 'was waiting', points: 10 },
      { id: 'adv-tense-8', sectionId: 'advanced', type: 'multiple-choice', question: 'She ___ to everyone by tomorrow.', translation: 'She will have spoken to everyone by tomorrow.', options: ['speaks', 'spoke', 'will speak', 'will have spoken'], correctAnswer: 'will have spoken', points: 10 },
      { id: 'adv-tense-9', sectionId: 'advanced', type: 'multiple-choice', question: 'The train ___ before we arrived.', translation: 'The train had left before we arrived.', options: ['left', 'leaves', 'had left', 'was leaving'], correctAnswer: 'had left', points: 10 },
      { id: 'adv-tense-10', sectionId: 'advanced', type: 'multiple-choice', question: 'He ___ home since morning.', translation: 'He has been at home since morning.', options: ['is', 'was', 'has been', 'was been'], correctAnswer: 'has been', points: 10 }
    ]
  },
  {
    id: 'advanced-connectors-1',
    title: 'Advanced Connectors',
    description: 'Sophisticated linking words',
    icon: '🔗',
    exercises: [
      { id: 'adv-conn-1', sectionId: 'advanced', type: 'multiple-choice', question: 'She was tired; ___, she kept working.', translation: 'She was tired; nevertheless, she kept working.', options: ['therefore', 'nevertheless', 'however', 'so'], correctAnswer: 'nevertheless', points: 10 },
      { id: 'adv-conn-2', sectionId: 'advanced', type: 'multiple-choice', question: 'The project was difficult; ___, it was completed.', translation: 'The project was difficult; consequently, it was completed.', options: ['however', 'consequently', 'but', 'and'], correctAnswer: 'consequently', points: 10 },
      { id: 'adv-conn-3', sectionId: 'advanced', type: 'multiple-choice', question: 'He studied hard; ___ , he passed.', translation: 'He studied hard; as a result, he passed.', options: ['but', 'as a result', 'although', 'yet'], correctAnswer: 'as a result', points: 10 },
      { id: 'adv-conn-4', sectionId: 'advanced', type: 'multiple-choice', question: 'It was raining; ___ we stayed inside.', translation: 'It was raining; therefore, we stayed inside.', options: ['but', 'therefore', 'although', 'yet'], correctAnswer: 'therefore', points: 10 },
      { id: 'adv-conn-5', sectionId: 'advanced', type: 'multiple-choice', question: 'She was ill; ___ she missed the exam.', translation: 'She was ill; consequently, she missed the exam.', options: ['but', 'consequently', 'however', 'and'], correctAnswer: 'consequently', points: 10 },
      { id: 'adv-conn-6', sectionId: 'advanced', type: 'multiple-choice', question: 'It was expensive; ___ we did not buy it.', translation: 'It was expensive; therefore, we did not buy it.', options: ['but', 'therefore', 'although', 'so'], correctAnswer: 'therefore', points: 10 },
      { id: 'adv-conn-7', sectionId: 'advanced', type: 'multiple-choice', question: 'He was late; ___ he missed the train.', translation: 'He was late; consequently, he missed the train.', options: ['but', 'consequently', 'however', 'and'], correctAnswer: 'consequently', points: 10 },
      { id: 'adv-conn-8', sectionId: 'advanced', type: 'multiple-choice', question: 'The weather was bad; ___ we cancelled.', translation: 'The weather was bad; therefore, we cancelled.', options: ['but', 'therefore', 'although', 'yet'], correctAnswer: 'therefore', points: 10 },
      { id: 'adv-conn-9', sectionId: 'advanced', type: 'multiple-choice', question: 'She was talented; ___ she got the job.', translation: 'She was talented; consequently, she got the job.', options: ['but', 'consequently', 'however', 'and'], correctAnswer: 'consequently', points: 10 },
      { id: 'adv-conn-10', sectionId: 'advanced', type: 'multiple-choice', question: 'They worked hard; ___ they succeeded.', translation: 'They worked hard; as a result, they succeeded.', options: ['but', 'as a result', 'although', 'yet'], correctAnswer: 'as a result', points: 10 }
    ]
  },
  {
    id: 'advanced-inversion-1',
    title: 'Advanced Inversion',
    description: 'Inversion in formal English',
    icon: '🔄',
    exercises: [
      { id: 'advinv-1', sectionId: 'advanced', type: 'multiple-choice', question: '___ only did I understand, I also agreed.', translation: 'Not only did I understand, I also agreed.', options: ['Not', 'Only', 'Ever', 'Never'], correctAnswer: 'Not', points: 10 },
      { id: 'advinv-2', sectionId: 'advanced', type: 'multiple-choice', question: '___ should we give up.', translation: 'At no time should we give up.', options: ['At times', 'At no time', 'Sometimes', 'Often'], correctAnswer: 'At no time', points: 10 },
      { id: 'advinv-3', sectionId: 'advanced', type: 'multiple-choice', question: '___ had he arrived when it started.', translation: 'Scarcely had he arrived when it started.', options: ['Already', 'Scarcely', 'Always', 'Never'], correctAnswer: 'Scarcely', points: 10 },
      { id: 'advinv-4', sectionId: 'advanced', type: 'multiple-choice', question: '___ do we complain about service.', translation: 'Rarely do we complain about service.', options: ['Often', 'Rarely', 'Always', 'Sometimes'], correctAnswer: 'Rarely', points: 10 },
      { id: 'advinv-5', sectionId: 'advanced', type: 'multiple-choice', question: '___ will she change her mind.', translation: 'Under no circumstances will she change her mind.', options: ['Sometimes', 'Under no circumstances', 'Often', 'Always'], correctAnswer: 'Under no circumstances', points: 10 },
      { id: 'advinv-6', sectionId: 'advanced', type: 'multiple-choice', question: '___ did he realize his mistake.', translation: 'Only then did he realize his mistake.', options: ['Before', 'After', 'Then', 'Only'], correctAnswer: 'Only', points: 10 },
      { id: 'advinv-7', sectionId: 'advanced', type: 'multiple-choice', question: '___ have I been more proud.', translation: 'Never have I been more proud.', options: ['Sometimes', 'Often', 'Never', 'Always'], correctAnswer: 'Never', points: 10 },
      { id: 'advinv-8', sectionId: 'advanced', type: 'multiple-choice', question: '___ would she forgive him.', translation: 'Not for a moment would she forgive him.', options: ['Always', 'Sometimes', 'Not for a moment', 'Often'], correctAnswer: 'Not for a moment', points: 10 },
      { id: 'advinv-9', sectionId: 'advanced', type: 'multiple-choice', question: '___ did we see such beauty.', translation: 'Rarely did we see such beauty.', options: ['Often', 'Rarely', 'Always', 'Sometimes'], correctAnswer: 'Rarely', points: 10 },
      { id: 'advinv-10', sectionId: 'advanced', type: 'multiple-choice', question: '___ is it true that he left.', translation: 'No longer is it true that he left.', options: ['Still', 'No longer', 'Already', 'Yet'], correctAnswer: 'No longer', points: 10 }
    ]
  },
  {
    id: 'advanced-subjunctive-1',
    title: 'Advanced Subjunctive',
    description: 'Subjunctive in complex sentences',
    icon: '🎭',
    exercises: [
      { id: 'advsubj-1', sectionId: 'advanced', type: 'multiple-choice', question: 'It is crucial that she ___ present.', translation: 'It is crucial that she be present.', options: ['is', 'be', 'was', 'are'], correctAnswer: 'be', points: 10 },
      { id: 'advsubj-2', sectionId: 'advanced', type: 'multiple-choice', question: 'I wish I ___ a million dollars.', translation: 'I wish I had a million dollars.', options: ['have', 'had', 'has', 'having'], correctAnswer: 'had', points: 10 },
      { id: 'advsubj-3', sectionId: 'advanced', type: 'multiple-choice', question: 'If only he ___ more time.', translation: 'If only he had more time.', options: ['has', 'had', 'have', 'having'], correctAnswer: 'had', points: 10 },
      { id: 'advsubj-4', sectionId: 'advanced', type: 'multiple-choice', question: 'They insisted that he ___ immediately.', translation: 'They insisted that he leave immediately.', options: ['leaves', 'leave', 'left', 'leaving'], correctAnswer: 'leave', points: 10 },
      { id: 'advsubj-5', sectionId: 'advanced', type: 'multiple-choice', question: 'It is essential that everyone ___ on time.', translation: 'It is essential that everyone be on time.', options: ['is', 'be', 'are', 'was'], correctAnswer: 'be', points: 10 },
      { id: 'advsubj-6', sectionId: 'advanced', type: 'multiple-choice', question: 'I would rather you ___ home.', translation: 'I would rather you were home.', options: ['are', 'was', 'were', 'be'], correctAnswer: 'were', points: 10 },
      { id: 'advsubj-7', sectionId: 'advanced', type: 'multiple-choice', question: 'She acts as if she ___ the owner.', translation: 'She acts as if she were the owner.', options: ['is', 'was', 'were', 'be'], correctAnswer: 'were', points: 10 },
      { id: 'advsubj-8', sectionId: 'advanced', type: 'multiple-choice', question: 'It is advisable that he ___ now.', translation: 'It is advisable that he leave now.', options: ['leave', 'leaves', 'left', 'leaving'], correctAnswer: 'leave', points: 10 },
      { id: 'advsubj-9', sectionId: 'advanced', type: 'multiple-choice', question: 'Suppose he ___ tomorrow.', translation: 'Suppose he came tomorrow.', options: ['comes', 'came', 'come', 'coming'], correctAnswer: 'came', points: 10 },
      { id: 'advsubj-10', sectionId: 'advanced', type: 'multiple-choice', question: 'He speaks as though he ___ everything.', translation: 'He speaks as though he knew everything.', options: ['knows', 'knew', 'know', 'knowing'], correctAnswer: 'knew', points: 10 }
    ]
  },
  {
    id: 'advanced-conditionals-1',
    title: 'Advanced Conditionals',
    description: 'Complex conditional structures',
    icon: '🔀',
    exercises: [
      { id: 'advcond-1', sectionId: 'advanced', type: 'multiple-choice', question: 'If I ___ you, I would have helped.', translation: 'If I were you, I would have helped.', options: ['am', 'was', 'were', 'be'], correctAnswer: 'were', points: 10 },
      { id: 'advcond-2', sectionId: 'advanced', type: 'multiple-choice', question: 'Had I known, I ___ you.', translation: 'Had I known, I would have told you.', options: ['tell', 'told', 'would tell', 'would have told'], correctAnswer: 'would have told', points: 10 },
      { id: 'advcond-3', sectionId: 'advanced', type: 'multiple-choice', question: 'If she had studied, she ___ the exam.', translation: 'If she had studied, she would have passed the exam.', options: ['passes', 'passed', 'would pass', 'would have passed'], correctAnswer: 'would have passed', points: 10 },
      { id: 'advcond-4', sectionId: 'advanced', type: 'multiple-choice', question: 'Should you need help, ___ me.', translation: 'Should you need help, call me.', options: ['call', 'calls', 'called', 'calling'], correctAnswer: 'call', points: 10 },
      { id: 'advcond-5', sectionId: 'advanced', type: 'multiple-choice', question: 'Were he here, he ___ us.', translation: 'Were he here, he would help us.', options: ['helps', 'helped', 'would help', 'will help'], correctAnswer: 'would help', points: 10 },
      { id: 'advcond-6', sectionId: 'advanced', type: 'multiple-choice', question: 'But for your help, I ___ .', translation: 'But for your help, I would have failed.', options: ['fail', 'failed', 'would fail', 'would have failed'], correctAnswer: 'would have failed', points: 10 },
      { id: 'advcond-7', sectionId: 'advanced', type: 'multiple-choice', question: 'If only I ___ that before.', translation: 'If only I had known that before.', options: ['knew', 'know', 'had known', 'known'], correctAnswer: 'had known', points: 10 },
      { id: 'advcond-8', sectionId: 'advanced', type: 'multiple-choice', question: 'Unless you ___ hard, you will fail.', translation: 'Unless you work hard, you will fail.', options: ['work', 'worked', 'working', 'works'], correctAnswer: 'work', points: 10 },
      { id: 'advcond-9', sectionId: 'advanced', type: 'multiple-choice', question: 'Provided that she ___, I will help.', translation: 'Provided that she agrees, I will help.', options: ['agrees', 'agreed', 'agree', 'agreeing'], correctAnswer: 'agrees', points: 10 },
      { id: 'advcond-10', sectionId: 'advanced', type: 'multiple-choice', question: 'In case you ___ me, call this number.', translation: 'In case you need me, call this number.', options: ['need', 'needed', 'needing', 'needs'], correctAnswer: 'need', points: 10 }
    ]
  },
  {
    id: 'advanced-nominalization-1',
    title: 'Advanced Nominalization',
    description: 'Turning verbs into nouns',
    icon: '📝',
    exercises: [
      { id: 'nom-1', sectionId: 'advanced', type: 'multiple-choice', question: 'He made a decision.', translation: 'He made a decision.', options: ['decision', 'decided', 'deciding', 'decides'], correctAnswer: 'decision', points: 10 },
      { id: 'nom-2', sectionId: 'advanced', type: 'multiple-choice', question: 'She arrived at a conclusion.', translation: 'She arrived at a conclusion.', options: ['conclusion', 'concluded', 'concluding', 'concludes'], correctAnswer: 'conclusion', points: 10 },
      { id: 'nom-3', sectionId: 'advanced', type: 'multiple-choice', question: 'They made an attempt.', translation: 'They made an attempt.', options: ['attempt', 'attempted', 'attempting', 'attempts'], correctAnswer: 'attempt', points: 10 },
      { id: 'nom-4', sectionId: 'advanced', type: 'multiple-choice', question: 'We had a discussion.', translation: 'We had a discussion.', options: ['discussion', 'discussed', 'discussing', 'discusses'], correctAnswer: 'discussion', points: 10 },
      { id: 'nom-5', sectionId: 'advanced', type: 'multiple-choice', question: 'He gave an explanation.', translation: 'He gave an explanation.', options: ['explanation', 'explained', 'explaining', 'explains'], correctAnswer: 'explanation', points: 10 },
      { id: 'nom-6', sectionId: 'advanced', type: 'multiple-choice', question: 'They made a contribution.', translation: 'They made a contribution.', options: ['contribution', 'contributed', 'contributing', 'contributes'], correctAnswer: 'contribution', points: 10 },
      { id: 'nom-7', sectionId: 'advanced', type: 'multiple-choice', question: 'She had a dream.', translation: 'She had a dream.', options: ['dream', 'dreamed', 'dreaming', 'dreams'], correctAnswer: 'dream', points: 10 },
      { id: 'nom-8', sectionId: 'advanced', type: 'multiple-choice', question: 'We came to an agreement.', translation: 'We came to an agreement.', options: ['agreement', 'agreed', 'agreeing', 'agrees'], correctAnswer: 'agreement', points: 10 },
      { id: 'nom-9', sectionId: 'advanced', type: 'multiple-choice', question: 'He expressed appreciation.', translation: 'He expressed appreciation.', options: ['appreciation', 'appreciated', 'appreciating', 'appreciates'], correctAnswer: 'appreciation', points: 10 },
      { id: 'nom-10', sectionId: 'advanced', type: 'multiple-choice', question: 'They made an observation.', translation: 'They made an observation.', options: ['observation', 'observed', 'observing', 'observes'], correctAnswer: 'observation', points: 10 }
    ]
  },
  {
    id: 'advanced-passive-advanced-1',
    title: 'Advanced Passive Structures',
    description: 'Complex passive constructions',
    icon: '🔄',
    exercises: [
      { id: 'advpass-1', sectionId: 'advanced', type: 'multiple-choice', question: 'It is said that he ___ a genius.', translation: 'It is said that he is a genius.', options: ['is', 'was', 'be', 'been'], correctAnswer: 'is', points: 10 },
      { id: 'advpass-2', sectionId: 'advanced', type: 'multiple-choice', question: 'She is believed ___ the truth.', translation: 'She is believed to know the truth.', options: ['to know', 'knows', 'knew', 'knowing'], correctAnswer: 'to know', points: 10 },
      { id: 'advpass-3', sectionId: 'advanced', type: 'multiple-choice', question: 'He is known ___ a good leader.', translation: 'He is known to be a good leader.', options: ['to be', 'is', 'was', 'being'], correctAnswer: 'to be', points: 10 },
      { id: 'advpass-4', sectionId: 'advanced', type: 'multiple-choice', question: 'The problem needs ___ urgently.', translation: 'The problem needs to be addressed urgently.', options: ['to be addressed', 'be addressed', 'addressing', 'addressed'], correctAnswer: 'to be addressed', points: 10 },
      { id: 'advpass-5', sectionId: 'advanced', type: 'multiple-choice', question: 'He is supposed ___ the best.', translation: 'He is supposed to be the best.', options: ['to be', 'be', 'is', 'was'], correctAnswer: 'to be', points: 10 },
      { id: 'advpass-6', sectionId: 'advanced', type: 'multiple-choice', question: 'The book is said ___ excellent.', translation: 'The book is said to be excellent.', options: ['to be', 'be', 'is', 'was'], correctAnswer: 'to be', points: 10 },
      { id: 'advpass-7', sectionId: 'advanced', type: 'multiple-choice', question: 'She appears ___ satisfied.', translation: 'She appears to be satisfied.', options: ['to be', 'be', 'is', 'was'], correctAnswer: 'to be', points: 10 },
      { id: 'advpass-8', sectionId: 'advanced', type: 'multiple-choice', question: 'They are considered ___ experts.', translation: 'They are considered to be experts.', options: ['to be', 'be', 'are', 'were'], correctAnswer: 'to be', points: 10 },
      { id: 'advpass-9', sectionId: 'advanced', type: 'multiple-choice', question: 'The work is expected ___ soon.', translation: 'The work is expected to be finished soon.', options: ['to be finished', 'be finished', 'to finish', 'finishing'], correctAnswer: 'to be finished', points: 10 },
      { id: 'advpass-10', sectionId: 'advanced', type: 'multiple-choice', question: 'He is known ___ many languages.', translation: 'He is known to speak many languages.', options: ['to speak', 'speaks', 'speaking', 'spoke'], correctAnswer: 'to speak', points: 10 }
    ]
  },
  {
    id: 'advanced-article-usage-1',
    title: 'Advanced Article Usage',
    description: 'Definite and indefinite articles in context',
    icon: '📖',
    exercises: [
      { id: 'art-1', sectionId: 'advanced', type: 'multiple-choice', question: 'She is ___ teacher.', translation: 'She is a teacher.', options: ['a', 'the', 'an', '-'], correctAnswer: 'a', points: 10 },
      { id: 'art-2', sectionId: 'advanced', type: 'multiple-choice', question: ' ___ sun is bright today.', translation: 'The sun is bright today.', options: ['A', 'The', 'An', '-'], correctAnswer: 'The', points: 10 },
      { id: 'art-3', sectionId: 'advanced', type: 'multiple-choice', question: 'I need ___ water.', translation: 'I need some water.', options: ['a', 'the', 'some', '-'], correctAnswer: 'some', points: 10 },
      { id: 'art-4', sectionId: 'advanced', type: 'multiple-choice', question: 'He lives in ___ United States.', translation: 'He lives in the United States.', options: ['a', 'the', 'an', '-'], correctAnswer: 'the', points: 10 },
      { id: 'art-5', sectionId: 'advanced', type: 'multiple-choice', question: 'She is ___ most intelligent.', translation: 'She is the most intelligent.', options: ['a', 'the', 'an', '-'], correctAnswer: 'the', points: 10 },
      { id: 'art-6', sectionId: 'advanced', type: 'multiple-choice', question: 'I saw ___ interesting movie.', translation: 'I saw an interesting movie.', options: ['a', 'the', 'an', '-'], correctAnswer: 'an', points: 10 },
      { id: 'art-7', sectionId: 'advanced', type: 'multiple-choice', question: '___ honesty is important.', translation: 'Honesty is important.', options: ['A', 'The', 'An', '-'], correctAnswer: '-', points: 10 },
      { id: 'art-8', sectionId: 'advanced', type: 'multiple-choice', question: 'This is ___ unique situation.', translation: 'This is a unique situation.', options: ['a', 'the', 'an', '-'], correctAnswer: 'a', points: 10 },
      { id: 'art-9', sectionId: 'advanced', type: 'multiple-choice', question: 'He plays ___ piano.', translation: 'He plays the piano.', options: ['a', 'the', 'an', '-'], correctAnswer: 'the', points: 10 },
      { id: 'art-10', sectionId: 'advanced', type: 'multiple-choice', question: 'We went to ___ church.', translation: 'We went to church.', options: ['a', 'the', 'an', '-'], correctAnswer: '-', points: 10 }
    ]
  },
  {
    id: 'advanced-verb-patterns-1',
    title: 'Advanced Verb Patterns',
    description: 'Gerunds and infinitives',
    icon: '🎯',
    exercises: [
      { id: 'vbp-1', sectionId: 'advanced', type: 'multiple-choice', question: 'I enjoy ___ .', translation: 'I enjoy reading.', options: ['read', 'reading', 'to read', 'readed'], correctAnswer: 'reading', points: 10 },
      { id: 'vbp-2', sectionId: 'advanced', type: 'multiple-choice', question: 'He decided ___ .', translation: 'He decided to leave.', options: ['leave', 'leaving', 'to leave', 'left'], correctAnswer: 'to leave', points: 10 },
      { id: 'vbp-3', sectionId: 'advanced', type: 'multiple-choice', question: 'She suggested ___ out.', translation: 'She suggested going out.', options: ['go', 'going', 'to go', 'went'], correctAnswer: 'going', points: 10 },
      { id: 'vbp-4', sectionId: 'advanced', type: 'multiple-choice', question: 'I stopped ___ smoking.', translation: 'I stopped smoking.', options: ['to smoke', 'smoke', 'smoking', 'smoked'], correctAnswer: 'smoking', points: 10 },
      { id: 'vbp-5', sectionId: 'advanced', type: 'multiple-choice', question: 'They continued ___ .', translation: 'They continued working.', options: ['work', 'working', 'to work', 'worked'], correctAnswer: 'working', points: 10 },
      { id: 'vbp-6', sectionId: 'advanced', type: 'multiple-choice', question: 'She likes ___ to music.', translation: 'She likes listening to music.', options: ['listen', 'listening', 'to listen', 'listened'], correctAnswer: 'listening', points: 10 },
      { id: 'vbp-7', sectionId: 'advanced', type: 'multiple-choice', question: 'I want ___ the truth.', translation: 'I want to know the truth.', options: ['know', 'knowing', 'to know', 'knew'], correctAnswer: 'to know', points: 10 },
      { id: 'vbp-8', sectionId: 'advanced', type: 'multiple-choice', question: 'He regrets ___ that.', translation: 'He regrets saying that.', options: ['say', 'saying', 'to say', 'said'], correctAnswer: 'saying', points: 10 },
      { id: 'vbp-9', sectionId: 'advanced', type: 'multiple-choice', question: 'She expects ___ the job.', translation: 'She expects to get the job.', options: ['get', 'getting', 'to get', 'got'], correctAnswer: 'to get', points: 10 },
      { id: 'vbp-10', sectionId: 'advanced', type: 'multiple-choice', question: 'They postponed ___ the meeting.', translation: 'They postponed having the meeting.', options: ['have', 'having', 'to have', 'had'], correctAnswer: 'having', points: 10 }
    ]
  },
  {
    id: 'advanced-relative-clauses-1',
    title: 'Advanced Relative Clauses',
    description: 'Complex relative structures',
    icon: '🔗',
    exercises: [
      { id: 'rel-1', sectionId: 'advanced', type: 'multiple-choice', question: 'The person ___ called is my brother.', translation: 'The person who called is my brother.', options: ['who', 'which', 'that', 'whom'], correctAnswer: 'who', points: 10 },
      { id: 'rel-2', sectionId: 'advanced', type: 'multiple-choice', question: 'The book ___ I bought is interesting.', translation: 'The book which I bought is interesting.', options: ['who', 'which', 'that', 'whom'], correctAnswer: 'which', points: 10 },
      { id: 'rel-3', sectionId: 'advanced', type: 'multiple-choice', question: 'The woman ___ you met is my mother.', translation: 'The woman whom you met is my mother.', options: ['who', 'which', 'that', 'whom'], correctAnswer: 'whom', points: 10 },
      { id: 'rel-4', sectionId: 'advanced', type: 'multiple-choice', question: 'The place ___ we met was beautiful.', translation: 'The place where we met was beautiful.', options: ['which', 'where', 'when', 'that'], correctAnswer: 'where', points: 10 },
      { id: 'rel-5', sectionId: 'advanced', type: 'multiple-choice', question: 'The reason ___ she left is unclear.', translation: 'The reason why she left is unclear.', options: ['which', 'why', 'how', 'that'], correctAnswer: 'why', points: 10 },
      { id: 'rel-6', sectionId: 'advanced', type: 'multiple-choice', question: 'He is the one ___ can help us.', translation: 'He is the one who can help us.', options: ['who', 'which', 'that', 'whom'], correctAnswer: 'who', points: 10 },
      { id: 'rel-7', sectionId: 'advanced', type: 'multiple-choice', question: 'The house ___ we bought is new.', translation: 'The house that we bought is new.', options: ['who', 'which', 'that', 'whom'], correctAnswer: 'that', points: 10 },
      { id: 'rel-8', sectionId: 'advanced', type: 'multiple-choice', question: 'Everything ___ happened was unexpected.', translation: 'Everything that happened was unexpected.', options: ['who', 'which', 'that', 'what'], correctAnswer: 'that', points: 10 },
      { id: 'rel-9', sectionId: 'advanced', type: 'multiple-choice', question: 'The day ___ I arrived was Monday.', translation: 'The day when I arrived was Monday.', options: ['which', 'when', 'where', 'that'], correctAnswer: 'when', points: 10 },
      { id: 'rel-10', sectionId: 'advanced', type: 'multiple-choice', question: 'The person ___ car was stolen called police.', translation: 'The person whose car was stolen called police.', options: ['who', 'which', 'whose', 'whom'], correctAnswer: 'whose', points: 10 }
    ]
  },
  {
    id: 'advanced-discourse-markers-1',
    title: 'Advanced Discourse Markers',
    description: 'Linking ideas smoothly',
    icon: '🔗',
    exercises: [
      { id: 'dm-1', sectionId: 'advanced', type: 'multiple-choice', question: '___ the weather was bad, we went out.', translation: 'Although the weather was bad, we went out.', options: ['Although', 'Because', 'Since', 'While'], correctAnswer: 'Although', points: 10 },
      { id: 'dm-2', sectionId: 'advanced', type: 'multiple-choice', question: '___ I was tired, I kept working.', translation: 'Despite being tired, I kept working.', options: ['Despite', 'Because', 'Although', 'Since'], correctAnswer: 'Despite', points: 10 },
      { id: 'dm-3', sectionId: 'advanced', type: 'multiple-choice', question: 'She was late; ___ , she missed the train.', translation: 'She was late; consequently, she missed the train.', options: ['however', 'consequently', 'nevertheless', 'therefore'], correctAnswer: 'consequently', points: 10 },
      { id: 'dm-4', sectionId: 'advanced', type: 'multiple-choice', question: 'He studied hard; ___ , he passed the exam.', translation: 'He studied hard; as a result, he passed the exam.', options: ['but', 'as a result', 'although', 'yet'], correctAnswer: 'as a result', points: 10 },
      { id: 'dm-5', sectionId: 'advanced', type: 'multiple-choice', question: 'It was raining; ___ , we stayed inside.', translation: 'It was raining; therefore, we stayed inside.', options: ['but', 'therefore', 'however', 'so'], correctAnswer: 'therefore', points: 10 },
      { id: 'dm-6', sectionId: 'advanced', type: 'multiple-choice', question: 'She was tired; ___ she continued working.', translation: 'She was tired; nevertheless she continued working.', options: ['so', 'but', 'nevertheless', 'because'], correctAnswer: 'nevertheless', points: 10 },
      { id: 'dm-7', sectionId: 'advanced', type: 'multiple-choice', question: 'I like her; ___ , we are friends.', translation: 'I like her; therefore, we are friends.', options: ['but', 'however', 'therefore', 'although'], correctAnswer: 'therefore', points: 10 },
      { id: 'dm-8', sectionId: 'advanced', type: 'multiple-choice', question: 'He was busy; ___ , he could not come.', translation: 'He was busy; consequently, he could not come.', options: ['but', 'consequently', 'however', 'so'], correctAnswer: 'consequently', points: 10 },
      { id: 'dm-9', sectionId: 'advanced', type: 'multiple-choice', question: 'The test was difficult; ___ , most passed.', translation: 'The test was difficult; nevertheless, most passed.', options: ['so', 'but', 'nevertheless', 'because'], correctAnswer: 'nevertheless', points: 10 },
      { id: 'dm-10', sectionId: 'advanced', type: 'multiple-choice', question: 'It was late; ___ we went home.', translation: 'It was late; therefore we went home.', options: ['but', 'however', 'therefore', 'although'], correctAnswer: 'therefore', points: 10 }
    ]
  },
  {
    id: 'advanced-rephrasing-1',
    title: 'Advanced Sentence Rephrasing',
    description: 'Transforming sentences',
    icon: '🔄',
    exercises: [
      { id: 'reph-1', sectionId: 'advanced', type: 'multiple-choice', question: 'He is too tired to work.', translation: 'He is too tired to work.', options: ['He cannot work because he is tired', 'He works because he is tired', 'He is tired and works', 'He works and is tired'], correctAnswer: 'He cannot work because he is tired', points: 10 },
      { id: 'reph-2', sectionId: 'advanced', type: 'multiple-choice', question: 'She is worth listening to.', translation: 'She is worth listening to.', options: ['She is good to listen', 'Listening to her is valuable', 'She listens well', 'We should listen to her'], correctAnswer: 'Listening to her is valuable', points: 10 },
      { id: 'reph-3', sectionId: 'advanced', type: 'multiple-choice', question: 'It is likely that he will come.', translation: 'It is likely that he will come.', options: ['He will probably come', 'He must come', 'He cannot come', 'He should come'], correctAnswer: 'He will probably come', points: 10 },
      { id: 'reph-4', sectionId: 'advanced', type: 'multiple-choice', question: 'Had I known, I would have helped.', translation: 'Had I known, I would have helped.', options: ['If I had known, I would have helped', 'I did not know but helped', 'I knew and helped', 'I did not know and did not help'], correctAnswer: 'If I had known, I would have helped', points: 10 },
      { id: 'reph-5', sectionId: 'advanced', type: 'multiple-choice', question: 'Not only is she smart but also kind.', translation: 'Not only is she smart but also kind.', options: ['She is smart and kind', 'She is only smart', 'She is kind but not smart', 'She is either smart or kind'], correctAnswer: 'She is smart and kind', points: 10 },
      { id: 'reph-6', sectionId: 'advanced', type: 'multiple-choice', question: 'It is essential that he be present.', translation: 'It is essential that he be present.', options: ['He must be present', 'He can be present', 'He should not be present', 'He may be present'], correctAnswer: 'He must be present', points: 10 },
      { id: 'reph-7', sectionId: 'advanced', type: 'multiple-choice', question: 'I would rather stay home.', translation: 'I would rather stay home.', options: ['I prefer to stay home', 'I must stay home', 'I cannot stay home', 'I will stay home'], correctAnswer: 'I prefer to stay home', points: 10 },
      { id: 'reph-8', sectionId: 'advanced', type: 'multiple-choice', question: 'She acts as if she were the boss.', translation: 'She acts as if she were the boss.', options: ['She behaves like the boss', 'She is the boss', 'She is not the boss', 'She wants to be the boss'], correctAnswer: 'She behaves like the boss', points: 10 },
      { id: 'reph-9', sectionId: 'advanced', type: 'multiple-choice', question: 'He is said to be honest.', translation: 'He is said to be honest.', options: ['People say he is honest', 'He says he is honest', 'He is honest', 'He was honest'], correctAnswer: 'People say he is honest', points: 10 },
      { id: 'reph-10', sectionId: 'advanced', type: 'multiple-choice', question: 'If it were not for the rain, we would go out.', translation: 'If it were not for the rain, we would go out.', options: ['We would go out if it did not rain', 'We go out because of the rain', 'We do not go out', 'We go out in the rain'], correctAnswer: 'We would go out if it did not rain', points: 10 }
    ]
  },
  {
    id: 'advanced-cleft-1',
    title: 'Advanced Cleft Sentences',
    description: 'Emphasis with cleft structures',
    icon: '✂️',
    exercises: [
      { id: 'clft-1', sectionId: 'advanced', type: 'multiple-choice', question: 'It was John ___ broke the window.', translation: 'It was John who broke the window.', options: ['who', 'which', 'that', 'what'], correctAnswer: 'who', points: 10 },
      { id: 'clft-2', sectionId: 'advanced', type: 'multiple-choice', question: '___ I need is some rest.', translation: 'What I need is some rest.', options: ['Who', 'What', 'Which', 'That'], correctAnswer: 'What', points: 10 },
      { id: 'clft-3', sectionId: 'advanced', type: 'multiple-choice', question: 'It was in London ___ we met.', translation: 'It was in London that we met.', options: ['who', 'where', 'that', 'which'], correctAnswer: 'that', points: 10 },
      { id: 'clft-4', sectionId: 'advanced', type: 'multiple-choice', question: 'It was yesterday ___ she called.', translation: 'It was yesterday that she called.', options: ['who', 'where', 'when', 'that'], correctAnswer: 'that', points: 10 },
      { id: 'clft-5', sectionId: 'advanced', type: 'multiple-choice', question: '___ made me happy was the news.', translation: 'What made me happy was the news.', options: ['Who', 'What', 'Which', 'That'], correctAnswer: 'What', points: 10 },
      { id: 'clft-6', sectionId: 'advanced', type: 'multiple-choice', question: 'It was Mary ___ helped us.', translation: 'It was Mary who helped us.', options: ['who', 'which', 'that', 'whom'], correctAnswer: 'who', points: 10 },
      { id: 'clft-7', sectionId: 'advanced', type: 'multiple-choice', question: 'It was the weather ___ ruined the trip.', translation: 'It was the weather that ruined the trip.', options: ['who', 'which', 'that', 'where'], correctAnswer: 'that', points: 10 },
      { id: 'clft-8', sectionId: 'advanced', type: 'multiple-choice', question: 'It was because of her ___ we succeeded.', translation: 'It was because of her that we succeeded.', options: ['who', 'which', 'that', 'what'], correctAnswer: 'that', points: 10 },
      { id: 'clft-9', sectionId: 'advanced', type: 'multiple-choice', question: '___ surprised me was her attitude.', translation: 'What surprised me was her attitude.', options: ['Who', 'What', 'Which', 'That'], correctAnswer: 'What', points: 10 },
      { id: 'clft-10', sectionId: 'advanced', type: 'multiple-choice', question: 'It was with great difficulty ___ he succeeded.', translation: 'It was with great difficulty that he succeeded.', options: ['who', 'which', 'that', 'where'], correctAnswer: 'that', points: 10 }
    ]
  }
];