import { ExercisePack } from '../academy';

export const passiveVoiceExercisePacks: ExercisePack[] = [
  {
    id: 'passive-simple-1',
    title: 'Passive Voice Basics',
    description: 'Practice subject and object change',
    icon: '🔄',
    exercises: [
      { id: 'pass-ex1', sectionId: 'passive', type: 'multiple-choice', question: 'The cake ___ by Mary.', translation: 'The cake was made by Mary.', options: ['make', 'makes', 'made', 'making'], correctAnswer: 'made', points: 10 },
      { id: 'pass-ex2', sectionId: 'passive', type: 'multiple-choice', question: 'The letter ___ yesterday.', translation: 'The letter was written yesterday.', options: ['write', 'writes', 'wrote', 'written'], correctAnswer: 'written', points: 10 },
      { id: 'pass-ex3', sectionId: 'passive', type: 'fill-blank', question: 'The house ___ last year.', translation: 'The house was built last year.', correctAnswer: 'was built', explanation: 'Use was/were + past participle.', points: 15 }
    ]
  },
  {
    id: 'passive-complex-1',
    title: 'Passive with Modals',
    description: 'Practice can, should, must in passive',
    icon: '⚡',
    exercises: [
      { id: 'passm-ex1', sectionId: 'passive', type: 'multiple-choice', question: 'This rule ___ be followed.', translation: 'This rule must be followed.', options: ['can', 'should', 'must', 'will'], correctAnswer: 'must', points: 10 },
      { id: 'passm-ex2', sectionId: 'passive', type: 'multiple-choice', question: 'The work ___ be done today.', translation: 'The work should be done today.', options: ['can', 'should', 'must', 'will'], correctAnswer: 'should', points: 10 }
    ]
  },
  {
    id: 'passive-present-1',
    title: 'Passive Present Simple',
    description: 'Present simple passive voice',
    icon: '📚',
    exercises: [
      { id: 'pass-pres-1', sectionId: 'passive', type: 'multiple-choice', question: 'The books ___ on the table.', translation: 'The books are placed on the table.', options: ['are placed', 'is placed', 'were placed', 'are placing'], correctAnswer: 'are placed', points: 10 },
      { id: 'pass-pres-2', sectionId: 'passive', type: 'multiple-choice', question: 'The song ___ by everyone.', translation: 'The song is loved by everyone.', options: ['is loved', 'are loved', 'was loved', 'loves'], correctAnswer: 'is loved', points: 10 },
      { id: 'pass-pres-3', sectionId: 'passive', type: 'multiple-choice', question: 'The windows ___ every day.', translation: 'The windows are cleaned every day.', options: ['are cleaned', 'is cleaned', 'were cleaned', 'clean'], correctAnswer: 'are cleaned', points: 10 },
      { id: 'pass-pres-4', sectionId: 'passive', type: 'multiple-choice', question: 'Coffee ___ in Brazil.', translation: 'Coffee is grown in Brazil.', options: ['is grown', 'are grown', 'grows', 'grown'], correctAnswer: 'is grown', points: 10 },
      { id: 'pass-pres-5', sectionId: 'passive', type: 'multiple-choice', question: 'The bill ___ today.', translation: 'The bill is paid today.', options: ['is paid', 'are paid', 'was paid', 'pays'], correctAnswer: 'is paid', points: 10 },
      { id: 'pass-pres-6', sectionId: 'passive', type: 'multiple-choice', question: 'These rules ___ by everyone.', translation: 'These rules are followed by everyone.', options: ['are followed', 'is followed', 'were followed', 'follow'], correctAnswer: 'are followed', points: 10 },
      { id: 'pass-pres-7', sectionId: 'passive', type: 'multiple-choice', question: 'The website ___ daily.', translation: 'The website is updated daily.', options: ['is updated', 'are updated', 'was updated', 'updates'], correctAnswer: 'is updated', points: 10 },
      { id: 'pass-pres-8', sectionId: 'passive', type: 'multiple-choice', question: 'The food ___ in the kitchen.', translation: 'The food is prepared in the kitchen.', options: ['is prepared', 'are prepared', 'was prepared', 'prepares'], correctAnswer: 'is prepared', points: 10 },
      { id: 'pass-pres-9', sectionId: 'passive', type: 'multiple-choice', question: 'The letter ___ every morning.', translation: 'The letter is delivered every morning.', options: ['is delivered', 'are delivered', 'was delivered', 'delivers'], correctAnswer: 'is delivered', points: 10 },
      { id: 'pass-pres-10', sectionId: 'passive', type: 'multiple-choice', question: 'New products ___ every month.', translation: 'New products are launched every month.', options: ['are launched', 'is launched', 'were launched', 'launches'], correctAnswer: 'are launched', points: 10 }
    ]
  },
  {
    id: 'passive-past-1',
    title: 'Passive Past Simple',
    description: 'Past simple passive voice',
    icon: '📖',
    exercises: [
      { id: 'pass-past-1', sectionId: 'passive', type: 'multiple-choice', question: 'The house ___ last year.', translation: 'The house was built last year.', options: ['was built', 'were built', 'built', 'is built'], correctAnswer: 'was built', points: 10 },
      { id: 'pass-past-2', sectionId: 'passive', type: 'multiple-choice', question: 'The letter ___ by my father.', translation: 'The letter was written by my father.', options: ['was written', 'were written', 'wrote', 'is written'], correctAnswer: 'was written', points: 10 },
      { id: 'pass-past-3', sectionId: 'passive', type: 'multiple-choice', question: 'The students ___ by the teacher.', translation: 'The students were praised by the teacher.', options: ['were praised', 'was praised', 'praised', 'are praised'], correctAnswer: 'were praised', points: 10 },
      { id: 'pass-past-4', sectionId: 'passive', type: 'multiple-choice', question: 'The movie ___ in Hollywood.', translation: 'The movie was filmed in Hollywood.', options: ['was filmed', 'were filmed', 'filmed', 'is filmed'], correctAnswer: 'was filmed', points: 10 },
      { id: 'pass-past-5', sectionId: 'passive', type: 'multiple-choice', question: 'The windows ___ yesterday.', translation: 'The windows were broken yesterday.', options: ['were broken', 'was broken', 'broke', 'are broken'], correctAnswer: 'were broken', points: 10 },
      { id: 'pass-past-6', sectionId: 'passive', type: 'multiple-choice', question: 'The book ___ by a famous author.', translation: 'The book was written by a famous author.', options: ['was written', 'were written', 'wrote', 'is written'], correctAnswer: 'was written', points: 10 },
      { id: 'pass-past-7', sectionId: 'passive', type: 'multiple-choice', question: 'The car ___ last week.', translation: 'The car was repaired last week.', options: ['was repaired', 'were repaired', 'repaired', 'is repaired'], correctAnswer: 'was repaired', points: 10 },
      { id: 'pass-past-8', sectionId: 'passive', type: 'multiple-choice', question: 'The food ___ quickly.', translation: 'The food was eaten quickly.', options: ['was eaten', 'were eaten', 'ate', 'eats'], correctAnswer: 'was eaten', points: 10 },
      { id: 'pass-past-9', sectionId: 'passive', type: 'multiple-choice', question: 'The trees ___ in the storm.', translation: 'The trees were knocked down in the storm.', options: ['were knocked', 'was knocked', 'knocked', 'are knocked'], correctAnswer: 'were knocked', points: 10 },
      { id: 'pass-past-10', sectionId: 'passive', type: 'multiple-choice', question: 'The prize ___ to her.', translation: 'The prize was given to her.', options: ['was given', 'were given', 'gave', 'gives'], correctAnswer: 'was given', points: 10 }
    ]
  },
  {
    id: 'passive-future-1',
    title: 'Passive Future',
    description: 'Future passive voice',
    icon: '⏩',
    exercises: [
      { id: 'pass-fut-1', sectionId: 'passive', type: 'multiple-choice', question: 'The new stadium ___ next year.', translation: 'The new stadium will be built next year.', options: ['will be built', 'will built', 'is built', 'was built'], correctAnswer: 'will be built', points: 10 },
      { id: 'pass-fut-2', sectionId: 'passive', type: 'multiple-choice', question: 'The meeting ___ tomorrow.', translation: 'The meeting will be held tomorrow.', options: ['will be held', 'will hold', 'is held', 'was held'], correctAnswer: 'will be held', points: 10 },
      { id: 'pass-fut-3', sectionId: 'passive', type: 'multiple-choice', question: 'The work ___ next week.', translation: 'The work will be finished next week.', options: ['will be finished', 'will finish', 'is finished', 'was finished'], correctAnswer: 'will be finished', points: 10 },
      { id: 'pass-fut-4', sectionId: 'passive', type: 'multiple-choice', question: 'The decisions ___ soon.', translation: 'The decisions will be made soon.', options: ['will be made', 'will make', 'is made', 'were made'], correctAnswer: 'will be made', points: 10 },
      { id: 'pass-fut-5', sectionId: 'passive', type: 'multiple-choice', question: 'The problem ___ by experts.', translation: 'The problem will be solved by experts.', options: ['will be solved', 'will solve', 'is solved', 'was solved'], correctAnswer: 'will be solved', points: 10 },
      { id: 'pass-fut-6', sectionId: 'passive', type: 'multiple-choice', question: 'The house ___ next month.', translation: 'The house will be sold next month.', options: ['will be sold', 'will sell', 'is sold', 'was sold'], correctAnswer: 'will be sold', points: 10 },
      { id: 'pass-fut-7', sectionId: 'passive', type: 'multiple-choice', question: 'The results ___ tomorrow.', translation: 'The results will be announced tomorrow.', options: ['will be announced', 'will announce', 'is announced', 'was announced'], correctAnswer: 'will be announced', points: 10 },
      { id: 'pass-fut-8', sectionId: 'passive', type: 'multiple-choice', question: 'The book ___ next year.', translation: 'The book will be published next year.', options: ['will be published', 'will publish', 'is published', 'was published'], correctAnswer: 'will be published', points: 10 },
      { id: 'pass-fut-9', sectionId: 'passive', type: 'multiple-choice', question: 'The roads ___ next week.', translation: 'The roads will be closed next week.', options: ['will be closed', 'will close', 'is closed', 'was closed'], correctAnswer: 'will be closed', points: 10 },
      { id: 'pass-fut-10', sectionId: 'passive', type: 'multiple-choice', question: 'The guests ___ at the hotel.', translation: 'The guests will be welcomed at the hotel.', options: ['will be welcomed', 'will welcome', 'is welcomed', 'was welcomed'], correctAnswer: 'will be welcomed', points: 10 }
    ]
  },
  {
    id: 'passive-present-cont-1',
    title: 'Passive Present Continuous',
    description: 'Present continuous passive',
    icon: '🔄',
    exercises: [
      { id: 'pass-presc-1', sectionId: 'passive', type: 'multiple-choice', question: 'The house ___ now.', translation: 'The house is being painted now.', options: ['is being painted', 'are being painted', 'is painting', 'was being painted'], correctAnswer: 'is being painted', points: 10 },
      { id: 'pass-presc-2', sectionId: 'passive', type: 'multiple-choice', question: 'The food ___ now.', translation: 'The food is being cooked now.', options: ['is being cooked', 'are being cooked', 'is cooking', 'was being cooked'], correctAnswer: 'is being cooked', points: 10 },
      { id: 'pass-presc-3', sectionId: 'passive', type: 'multiple-choice', question: 'The report ___ by the team.', translation: 'The report is being prepared by the team.', options: ['is being prepared', 'are being prepared', 'is preparing', 'was being prepared'], correctAnswer: 'is being prepared', points: 10 },
      { id: 'pass-presc-4', sectionId: 'passive', type: 'multiple-choice', question: 'The car ___ now.', translation: 'The car is being fixed now.', options: ['is being fixed', 'are being fixed', 'is fixing', 'was being fixed'], correctAnswer: 'is being fixed', points: 10 },
      { id: 'pass-presc-5', sectionId: 'passive', type: 'multiple-choice', question: 'The guests ___ at the moment.', translation: 'The guests are being welcomed at the moment.', options: ['are being welcomed', 'is being welcomed', 'are welcoming', 'were being welcomed'], correctAnswer: 'are being welcomed', points: 10 },
      { id: 'pass-presc-6', sectionId: 'passive', type: 'multiple-choice', question: 'The lesson ___ now.', translation: 'The lesson is being taught now.', options: ['is being taught', 'are being taught', 'is teaching', 'was being taught'], correctAnswer: 'is being taught', points: 10 },
      { id: 'pass-presc-7', sectionId: 'passive', type: 'multiple-choice', question: 'The new rules ___ now.', translation: 'The new rules are being discussed now.', options: ['are being discussed', 'is being discussed', 'are discussing', 'were being discussed'], correctAnswer: 'are being discussed', points: 10 },
      { id: 'pass-presc-8', sectionId: 'passive', type: 'multiple-choice', question: 'The patient ___ by the doctor.', translation: 'The patient is being examined by the doctor.', options: ['is being examined', 'are being examined', 'is examining', 'was being examined'], correctAnswer: 'is being examined', points: 10 },
      { id: 'pass-presc-9', sectionId: 'passive', type: 'multiple-choice', question: 'The cake ___ right now.', translation: 'The cake is being decorated right now.', options: ['is being decorated', 'are being decorated', 'is decorating', 'was being decorated'], correctAnswer: 'is being decorated', points: 10 },
      { id: 'pass-presc-10', sectionId: 'passive', type: 'multiple-choice', question: 'The rooms ___ now.', translation: 'The rooms are being cleaned now.', options: ['are being cleaned', 'is being cleaned', 'are cleaning', 'was being cleaned'], correctAnswer: 'are being cleaned', points: 10 }
    ]
  },
  {
    id: 'passive-modal-1',
    title: 'Passive with Modal Verbs',
    description: 'Modal verbs in passive',
    icon: '🎯',
    exercises: [
      { id: 'pass-mod-1', sectionId: 'passive', type: 'multiple-choice', question: 'The rules ___ followed.', translation: 'The rules must be followed.', options: ['must be', 'can be', 'should be', 'all of them'], correctAnswer: 'must be', points: 10 },
      { id: 'pass-mod-2', sectionId: 'passive', type: 'multiple-choice', question: 'This book ___ by everyone.', translation: 'This book should be read by everyone.', options: ['should be read', 'can be read', 'must be read', 'all of them'], correctAnswer: 'should be read', points: 10 },
      { id: 'pass-mod-3', sectionId: 'passive', type: 'multiple-choice', question: 'The work ___ today.', translation: 'The work must be done today.', options: ['must be done', 'can be done', 'should be done', 'all of them'], correctAnswer: 'must be done', points: 10 },
      { id: 'pass-mod-4', sectionId: 'passive', type: 'multiple-choice', question: 'The room ___ before the meeting.', translation: 'The room should be prepared before the meeting.', options: ['should be prepared', 'can be prepared', 'must be prepared', 'all of them'], correctAnswer: 'should be prepared', points: 10 },
      { id: 'pass-mod-5', sectionId: 'passive', type: 'multiple-choice', question: 'Problems ___ quickly.', translation: 'Problems can be solved quickly.', options: ['can be solved', 'must be solved', 'should be solved', 'all of them'], correctAnswer: 'can be solved', points: 10 },
      { id: 'pass-mod-6', sectionId: 'passive', type: 'multiple-choice', question: 'This rule ___ at all times.', translation: 'This rule must be followed at all times.', options: ['must be followed', 'can be followed', 'should be followed', 'all of them'], correctAnswer: 'must be followed', points: 10 },
      { id: 'pass-mod-7', sectionId: 'passive', type: 'multiple-choice', question: 'The task ___ by tomorrow.', translation: 'The task should be completed by tomorrow.', options: ['should be completed', 'can be completed', 'must be completed', 'all of them'], correctAnswer: 'should be completed', points: 10 },
      { id: 'pass-mod-8', sectionId: 'passive', type: 'multiple-choice', question: 'Travelers ___ at the border.', translation: 'Travelers should be checked at the border.', options: ['should be checked', 'can be checked', 'must be checked', 'all of them'], correctAnswer: 'should be checked', points: 10 },
      { id: 'pass-mod-9', sectionId: 'passive', type: 'multiple-choice', question: 'The message ___ immediately.', translation: 'The message must be sent immediately.', options: ['must be sent', 'can be sent', 'should be sent', 'all of them'], correctAnswer: 'must be sent', points: 10 },
      { id: 'pass-mod-10', sectionId: 'passive', type: 'multiple-choice', question: 'The book ___ in all libraries.', translation: 'The book can be found in all libraries.', options: ['can be found', 'must be found', 'should be found', 'all of them'], correctAnswer: 'can be found', points: 10 }
    ]
  },
  {
    id: 'passive-by-1',
    title: 'Passive with By Phrase',
    description: 'Practice by + agent',
    icon: '👤',
    exercises: [
      { id: 'pass-by-1', sectionId: 'passive', type: 'multiple-choice', question: 'The book ___ Shakespeare.', translation: 'The book was written by Shakespeare.', options: ['was written by', 'was written with', 'wrote', 'writes'], correctAnswer: 'was written by', points: 10 },
      { id: 'pass-by-2', sectionId: 'passive', type: 'multiple-choice', question: 'The song ___ Beatles.', translation: 'The song was sung by Beatles.', options: ['was sung by', 'was sung with', 'sang', 'sings'], correctAnswer: 'was sung by', points: 10 },
      { id: 'pass-by-3', sectionId: 'passive', type: 'multiple-choice', question: 'The painting ___ Picasso.', translation: 'The painting was created by Picasso.', options: ['was created by', 'was created with', 'created', 'creates'], correctAnswer: 'was created by', points: 10 },
      { id: 'pass-by-4', sectionId: 'passive', type: 'multiple-choice', question: 'The discovery ___ Newton.', translation: 'The discovery was made by Newton.', options: ['was made by', 'was made with', 'made', 'makes'], correctAnswer: 'was made by', points: 10 },
      { id: 'pass-by-5', sectionId: 'passive', type: 'multiple-choice', question: 'The speech ___ the president.', translation: 'The speech was delivered by the president.', options: ['was delivered by', 'was delivered with', 'delivered', 'delivers'], correctAnswer: 'was delivered by', points: 10 },
      { id: 'pass-by-6', sectionId: 'passive', type: 'multiple-choice', question: 'The award ___ the actress.', translation: 'The award was given to the actress.', options: ['was given by', 'was given to', 'gave', 'gives'], correctAnswer: 'was given to', points: 10 },
      { id: 'pass-by-7', sectionId: 'passive', type: 'multiple-choice', question: 'The building ___ famous architect.', translation: 'The building was designed by a famous architect.', options: ['was designed by', 'was designed with', 'designed', 'designs'], correctAnswer: 'was designed by', points: 10 },
      { id: 'pass-by-8', sectionId: 'passive', type: 'multiple-choice', question: 'The letter ___ my mother.', translation: 'The letter was typed by my mother.', options: ['was typed by', 'was typed with', 'typed', 'types'], correctAnswer: 'was typed by', points: 10 },
      { id: 'pass-by-9', sectionId: 'passive', type: 'multiple-choice', question: 'The movie ___ Spielberg.', translation: 'The movie was directed by Spielberg.', options: ['was directed by', 'was directed with', 'directed', 'directs'], correctAnswer: 'was directed by', points: 10 },
      { id: 'pass-by-10', sectionId: 'passive', type: 'multiple-choice', question: 'The program ___ computer.', translation: 'The program was written by computer.', options: ['was written by', 'was written with', 'wrote', 'writes'], correctAnswer: 'was written by', points: 10 }
    ]
  },
  {
    id: 'passive-questions-1',
    title: 'Passive Questions',
    description: 'Questions in passive voice',
    icon: '❓',
    exercises: [
      { id: 'pass-q-1', sectionId: 'passive', type: 'multiple-choice', question: '___ the cake eaten?', translation: 'Was the cake eaten?', options: ['Was', 'Were', 'Did', 'Does'], correctAnswer: 'Was', points: 10 },
      { id: 'pass-q-2', sectionId: 'passive', type: 'multiple-choice', question: '___ the books delivered?', translation: 'Have the books been delivered?', options: ['Have', 'Has', 'Did', 'Do'], correctAnswer: 'Have', points: 10 },
      { id: 'pass-q-3', sectionId: 'passive', type: 'multiple-choice', question: 'Where ___ the car repaired?', translation: 'Where was the car repaired?', options: ['was', 'were', 'did', 'does'], correctAnswer: 'was', points: 10 },
      { id: 'pass-q-4', sectionId: 'passive', type: 'multiple-choice', question: 'When ___ the meeting scheduled?', translation: 'When was the meeting scheduled?', options: ['was', 'were', 'did', 'does'], correctAnswer: 'was', points: 10 },
      { id: 'pass-q-5', sectionId: 'passive', type: 'multiple-choice', question: 'Why ___ the program cancelled?', translation: 'Why was the program cancelled?', options: ['was', 'were', 'did', 'does'], correctAnswer: 'was', points: 10 },
      { id: 'pass-q-6', sectionId: 'passive', type: 'multiple-choice', question: 'Who ___ the prize given to?', translation: 'Who was the prize given to?', options: ['was', 'were', 'did', 'does'], correctAnswer: 'was', points: 10 },
      { id: 'pass-q-7', sectionId: 'passive', type: 'multiple-choice', question: '___ the work finished?', translation: 'Has the work been finished?', options: ['Has', 'Have', 'Did', 'Does'], correctAnswer: 'Has', points: 10 },
      { id: 'pass-q-8', sectionId: 'passive', type: 'multiple-choice', question: 'How ___ the message sent?', translation: 'How was the message sent?', options: ['was', 'were', 'did', 'does'], correctAnswer: 'was', points: 10 },
      { id: 'pass-q-9', sectionId: 'passive', type: 'multiple-choice', question: '___ the windows cleaned?', translation: 'Are the windows cleaned?', options: ['Are', 'Is', 'Did', 'Does'], correctAnswer: 'Are', points: 10 },
      { id: 'pass-q-10', sectionId: 'passive', type: 'multiple-choice', question: 'What ___ by the police?', translation: 'What was found by the police?', options: ['was', 'were', 'did', 'does'], correctAnswer: 'was', points: 10 }
    ]
  },
  {
    id: 'passive-negative-1',
    title: 'Passive Negative',
    description: 'Negative sentences in passive',
    icon: '❌',
    exercises: [
      { id: 'pass-neg-1', sectionId: 'passive', type: 'multiple-choice', question: 'The book ___ by anyone.', translation: 'The book was not read by anyone.', options: ['was not read', 'is not read', 'was not reading', 'not read'], correctAnswer: 'was not read', points: 10 },
      { id: 'pass-neg-2', sectionId: 'passive', type: 'multiple-choice', question: 'The work ___ yet.', translation: 'The work has not been finished yet.', options: ['has not been finished', 'has not finished', 'was not finished', 'is not finished'], correctAnswer: 'has not been finished', points: 10 },
      { id: 'pass-neg-3', sectionId: 'passive', type: 'multiple-choice', question: 'The rules ___ by everyone.', translation: 'The rules are not followed by everyone.', options: ['are not followed', 'is not followed', 'were not followed', 'not followed'], correctAnswer: 'are not followed', points: 10 },
      { id: 'pass-neg-4', sectionId: 'passive', type: 'multiple-choice', question: 'The letter ___ yesterday.', translation: 'The letter was not sent yesterday.', options: ['was not sent', 'was not send', 'is not sent', 'not sent'], correctAnswer: 'was not sent', points: 10 },
      { id: 'pass-neg-5', sectionId: 'passive', type: 'multiple-choice', question: 'The problem ___ yet.', translation: 'The problem has not been solved yet.', options: ['has not been solved', 'has not solved', 'was not solved', 'is not solved'], correctAnswer: 'has not been solved', points: 10 },
      { id: 'pass-neg-6', sectionId: 'passive', type: 'multiple-choice', question: 'The students ___ by the teacher.', translation: 'The students were not punished by the teacher.', options: ['were not punished', 'was not punished', 'are not punished', 'not punished'], correctAnswer: 'were not punished', points: 10 },
      { id: 'pass-neg-7', sectionId: 'passive', type: 'multiple-choice', question: 'This movie ___ for children.', translation: 'This movie is not recommended for children.', options: ['is not recommended', 'are not recommended', 'was not recommended', 'not recommended'], correctAnswer: 'is not recommended', points: 10 },
      { id: 'pass-neg-8', sectionId: 'passive', type: 'multiple-choice', question: 'The food ___ yet.', translation: 'The food has not been eaten yet.', options: ['has not been eaten', 'has not eaten', 'was not eaten', 'is not eaten'], correctAnswer: 'has not been eaten', points: 10 },
      { id: 'pass-neg-9', sectionId: 'passive', type: 'multiple-choice', question: 'The house ___ last week.', translation: 'The house was not built last week.', options: ['was not built', 'was not build', 'is not built', 'not built'], correctAnswer: 'was not built', points: 10 },
      { id: 'pass-neg-10', sectionId: 'passive', type: 'multiple-choice', question: 'The meeting ___ tomorrow.', translation: 'The meeting will not be held tomorrow.', options: ['will not be held', 'will not hold', 'is not held', 'not held'], correctAnswer: 'will not be held', points: 10 }
    ]
  }
];