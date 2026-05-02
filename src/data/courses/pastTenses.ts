import { ExercisePack, QuizPack } from '../academy';

export const pastTensesExercisePacks: ExercisePack[] = [
  {
    id: 'past-simple-1',
    title: 'Past Simple Practice 1',
    description: 'Practice Past Simple tense',
    icon: '📝',
    exercises: [
      { id: 'pas-ex1', sectionId: 'past-simple', type: 'multiple-choice', question: 'She ___ a movie yesterday.', translation: 'She watched a movie yesterday.', options: ['watch', 'watches', 'watching', 'watched'], correctAnswer: 'watched', points: 10 },
      { id: 'pas-ex2', sectionId: 'past-simple', type: 'multiple-choice', question: 'They ___ to Paris last year.', translation: 'They traveled to Paris last year.', options: ['travel', 'travels', 'traveling', 'traveled'], correctAnswer: 'traveled', points: 10 },
      { id: 'pas-ex3', sectionId: 'past-simple', type: 'fill-blank', question: 'He ___ English when he was young.', translation: 'He studied English when he was young.', correctAnswer: 'studied', explanation: 'Use Past Simple for completed actions.', points: 15 }
    ]
  },
  {
    id: 'past-continuous-1',
    title: 'Past Continuous',
    description: 'Practice actions in progress in the past',
    icon: '🔄',
    exercises: [
      { id: 'pac-ex1', sectionId: 'past-continuous', type: 'multiple-choice', question: 'I ___ TV at 8pm yesterday.', translation: 'I was watching TV at 8pm yesterday.', options: ['watch', 'watches', 'was watching', 'watched'], correctAnswer: 'was watching', points: 10 },
      { id: 'pac-ex2', sectionId: 'past-continuous', type: 'multiple-choice', question: 'They ___ when it started to rain.', translation: 'They were playing when it started to rain.', options: ['play', 'plays', 'were playing', 'played'], correctAnswer: 'were playing', points: 10 },
      { id: 'pac-ex3', sectionId: 'past-continuous', type: 'fill-blank', question: 'We ___ dinner when the phone rang.', translation: 'We were having dinner when the phone rang.', correctAnswer: 'were having', explanation: 'Use Past Continuous for actions in progress.', points: 15 }
    ]
  },
  {
    id: 'past-simple-vs-continuous',
    title: 'Past Simple vs Continuous',
    description: 'When to use each tense',
    icon: '⚖️',
    exercises: [
      { id: 'pasc-ex1', sectionId: 'past-simple', type: 'multiple-choice', question: 'I ___ on my phone when he ___ .', translation: 'I was using my phone when he arrived.', options: ['use/arrived', 'was using/arrived', 'used/arrived', 'using/arrived'], correctAnswer: 'was using/arrived', points: 15 },
      { id: 'pasc-ex2', sectionId: 'past-simple', type: 'multiple-choice', question: 'While she ___ , I ___ a book.', translation: 'While she was sleeping, I read a book.', options: ['sleeps/read', 'was sleeping/read', 'slept/read', 'sleeping/read'], correctAnswer: 'was sleeping/read', points: 15 },
      { id: 'pasc-ex3', sectionId: 'past-continuous', type: 'multiple-choice', question: 'They ___ when I ___ them.', translation: 'They were eating when I saw them.', options: ['eat/saw', 'were eating/saw', 'ate/saw', 'eating/saw'], correctAnswer: 'were eating/saw', points: 15 },
      { id: 'pasc-ex4', sectionId: 'past-simple', type: 'multiple-choice', question: 'She ___ to the music while she ___ .', translation: 'She listened to the music while she studied.', options: ['listened/studied', 'was listening/studied', 'listening/studied', 'listens/studies'], correctAnswer: 'listened/studied', points: 15 },
      { id: 'pasc-ex5', sectionId: 'past-continuous', type: 'multiple-choice', question: 'The sun ___ while we ___ .', translation: 'The sun was setting while we were walking.', options: ['set/walked', 'was setting/were walking', 'sets/walks', 'setting/walking'], correctAnswer: 'was setting/were walking', points: 15 }
    ]
  },
  {
    id: 'past-perfect-1',
    title: 'Past Perfect',
    description: 'Had + past participle',
    icon: '⏮️',
    exercises: [
      { id: 'pap-ex1', sectionId: 'past-perfect', type: 'multiple-choice', question: 'By the time I ___ , she ___ already ___ .', translation: 'By the time I arrived, she had already left.', options: ['arrived/had/left', 'arrived/left', 'arrive/left', 'arriving/left'], correctAnswer: 'arrived/had/left', points: 15 },
      { id: 'pap-ex2', sectionId: 'past-perfect', type: 'multiple-choice', question: 'They ___ the project before the deadline.', translation: 'They had finished the project before the deadline.', options: ['finished', 'had finished', 'have finished', 'were finishing'], correctAnswer: 'had finished', points: 10 },
      { id: 'pap-ex3', sectionId: 'past-perfect', type: 'fill-blank', question: 'She ___ to school before she ___ .', translation: 'Ela tinha ido à escola antes de ficar doente.', correctAnswer: 'had gone', explanation: 'Use Past Perfect for earlier past actions.', points: 15 },
      { id: 'pap-ex4', sectionId: 'past-perfect', type: 'multiple-choice', question: 'I ___ the movie before. ', translation: 'Eu já tinha visto o filme.', options: ['saw', 'have seen', 'had seen', 'was seeing'], correctAnswer: 'had seen', points: 10 },
      { id: 'pap-ex5', sectionId: 'past-perfect', type: 'multiple-choice', question: 'He ___ the book before he ___ the movie.', translation: 'He had read the book before he saw the movie.', options: ['read/saw', 'had read/saw', 'reads/saw', 'reading/saw'], correctAnswer: 'had read/saw', points: 15 },
      { id: 'pap-ex6', sectionId: 'past-perfect', type: 'multiple-choice', question: 'We ___ all our food.', translation: 'Nós tínhamos comido toda a nossa comida.', options: ['ate', 'have eaten', 'had eaten', 'were eating'], correctAnswer: 'had eaten', points: 10 },
      { id: 'pap-ex7', sectionId: 'past-perfect', type: 'fill-blank', question: 'When I arrived, they ___ already ___.', translation: 'Quando eu arrivei, eles já tinham começado.', correctAnswer: 'had started', explanation: 'Use Past Perfect for action before another past action.', points: 15 },
      { id: 'pap-ex8', sectionId: 'past-perfect', type: 'multiple-choice', question: 'She ___ a lot of friends in her new city.', translation: 'Ela tinha feito muitos amigos na nova cidade.', options: ['made', 'has made', 'had made', 'makes'], correctAnswer: 'had made', points: 10 },
      { id: 'pap-ex9', sectionId: 'past-perfect', type: 'multiple-choice', question: 'They ___ the house before they moved.', translation: 'They had painted the house before they moved.', options: ['painted', 'have painted', 'had painted', 'painting'], correctAnswer: 'had painted', points: 10 },
      { id: 'pap-ex10', sectionId: 'past-perfect', type: 'multiple-choice', question: 'I ___ anything about it.', translation: 'Eu não tinha ouvido nada sobre isso.', options: ['heard', 'have heard', 'had heard', 'was hearing'], correctAnswer: 'had heard', points: 10 }
    ]
  },
  {
    id: 'past-perfect-continuous',
    title: 'Past Perfect Continuous',
    description: 'Had been + verb-ing',
    icon: '⏳',
    exercises: [
      { id: 'papc-ex1', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'She ___ for hours before she ___ .', translation: 'She had been studying for hours before she stopped.', options: ['studied/stopped', 'had been studying/stopped', 'was studying/stopped', 'studying/stopped'], correctAnswer: 'had been studying/stopped', points: 15 },
      { id: 'papc-ex2', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'They ___ the project for months.', translation: 'They had been working on the project for months.', options: ['worked', 'have been working', 'had been working', 'were working'], correctAnswer: 'had been working', points: 10 },
      { id: 'papc-ex3', sectionId: 'past-perfect-cont', type: 'fill-blank', question: 'He ___ before he ___.', translation: 'Ele estava dirigindo há horas antes de ter um acidente.', correctAnswer: 'had been driving', explanation: 'Use Past Perfect Continuous for duration.', points: 15 },
      { id: 'papc-ex4', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'I ___ when it started to rain.', translation: 'Eu estava correndo quando começou a chover.', options: ['was running', 'had been running', 'ran', 'running'], correctAnswer: 'had been running', points: 10 },
      { id: 'papc-ex5', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'We ___ all day.', translation: 'Nós tínhamos estado pintando o dia todo.', options: ['painted', 'were painting', 'had been painting', 'have been painting'], correctAnswer: 'had been painting', points: 10 },
      { id: 'papc-ex6', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'She ___ because she was tired.', translation: 'Ela tinha estado chorando porque estava cansada.', options: ['cried', 'was crying', 'had been crying', 'is crying'], correctAnswer: 'had been crying', points: 10 },
      { id: 'papc-ex7', sectionId: 'past-perfect-cont', type: 'fill-blank', question: 'They ___ for a long time.', translation: 'Eles tinham estado procurando um lugar para morar.', correctAnswer: 'had been looking', explanation: 'Use Past Perfect Continuous for duration.', points: 15 },
      { id: 'papc-ex8', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'He ___ before the accident.', translation: 'Ele tinha estado dirigindo antes do acidente.', options: ['drove', 'was driving', 'had been driving', 'driven'], correctAnswer: 'had been driving', points: 10 },
      { id: 'papc-ex9', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'I ___ all morning.', translation: 'Eu tinha estado escrevendo a manhã toda.', options: ['wrote', 'was writing', 'had been writing', 'written'], correctAnswer: 'had been writing', points: 10 },
      { id: 'papc-ex10', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'We ___ before we found the solution.', translation: 'Tínhamos estado tentando antes de encontrar a solução.', options: ['tried', 'were trying', 'had been trying', 'try'], correctAnswer: 'had been trying', points: 10 }
    ]
  },
  {
    id: 'irregular-verbs',
    title: 'Irregular Verbs',
    description: 'Common irregular verb patterns',
    icon: '📚',
    exercises: [
      { id: 'irreg-1', sectionId: 'past-simple', type: 'multiple-choice', question: 'She ___ to the store yesterday.', translation: 'Ela foi à loja ontem.', options: ['go', 'gone', 'went', 'going'], correctAnswer: 'went', points: 10 },
      { id: 'irreg-2', sectionId: 'past-simple', type: 'multiple-choice', question: 'They ___ a beautiful sunset.', translation: 'They saw a beautiful sunset.', options: ['see', 'saw', 'seen', 'seeing'], correctAnswer: 'saw', points: 10 },
      { id: 'irreg-3', sectionId: 'past-simple', type: 'multiple-choice', question: 'He ___ a lot of money.', translation: 'Ele ganhou muito dinheiro.', options: ['win', 'won', 'winning', 'won'], correctAnswer: 'won', points: 10 },
      { id: 'irreg-4', sectionId: 'past-simple', type: 'fill-blank', question: 'She ___ the letter yesterday.', translation: 'Ela escreveu a carta ontem.', correctAnswer: 'wrote', explanation: 'Write → Wrote → Written', points: 15 },
      { id: 'irreg-5', sectionId: 'past-simple', type: 'multiple-choice', question: 'We ___ early.', translation: 'We woke up early.', options: ['wake', 'woke', 'woken', 'waking'], correctAnswer: 'woke', points: 10 },
      { id: 'irreg-6', sectionId: 'past-simple', type: 'multiple-choice', question: 'They ___ the truth.', translation: 'They told the truth.', options: ['tell', 'told', 'told', 'telling'], correctAnswer: 'told', points: 10 },
      { id: 'irreg-7', sectionId: 'past-simple', type: 'fill-blank', question: 'He ___ the book last week.', translation: 'Ele comprou o livro semana passada.', correctAnswer: 'bought', explanation: 'Buy → Bought → Bought', points: 15 },
      { id: 'irreg-8', sectionId: 'past-simple', type: 'multiple-choice', question: 'I ___ my keys.', translation: 'Eu perdi minhas chaves.', options: ['lose', 'lost', 'losing', 'lost'], correctAnswer: 'lost', points: 10 },
      { id: 'irreg-9', sectionId: 'past-simple', type: 'multiple-choice', question: 'She ___ in love.', translation: 'Ela se apaixonou.', options: ['fall', 'fell', 'fallen', 'falling'], correctAnswer: 'fell', points: 10 },
      { id: 'irreg-10', sectionId: 'past-simple', type: 'multiple-choice', question: 'They ___ the test.', translation: 'They failed the test.', options: ['fail', 'failed', 'failed', 'failing'], correctAnswer: 'failed', points: 10 }
    ]
  },
  // More Past Tenses Packs
  {
    id: 'past-continuous-time-1',
    title: 'Past Continuous - Time Expressions',
    description: 'At, when, while with past continuous',
    icon: '🕐',
    exercises: [
      { id: 'pct-1', sectionId: 'past-continuous', type: 'multiple-choice', question: 'I was sleeping ___ midnight.', translation: 'Eu estava dormindo à meia-noite.', options: ['in', 'at', 'on', 'by'], correctAnswer: 'at', points: 10 },
      { id: 'pct-2', sectionId: 'past-continuous', type: 'multiple-choice', question: 'She was reading ___ 8pm yesterday.', translation: 'Ela estava lendo às 20h ontem.', options: ['in', 'at', 'on', 'by'], correctAnswer: 'at', points: 10 },
      { id: 'pct-3', sectionId: 'past-continuous', type: 'multiple-choice', question: 'They were playing ___ the weekend.', translation: 'Eles estavam brincando no fim de semana.', options: ['in', 'at', 'on', 'during'], correctAnswer: 'during', points: 10 },
      { id: 'pct-4', sectionId: 'past-continuous', type: 'multiple-choice', question: 'We were working ___ the afternoon.', translation: 'Estávamos trabalhando durante a tarde.', options: ['in', 'at', 'on', 'during'], correctAnswer: 'during', points: 10 },
      { id: 'pct-5', sectionId: 'past-continuous', type: 'multiple-choice', question: 'He was studying ___ last night.', translation: 'Ele estava estudando ontem à noite.', options: ['in', 'at', 'on', 'during'], correctAnswer: 'last night', points: 10 },
      { id: 'pct-6', sectionId: 'past-continuous', type: 'multiple-choice', question: 'I was waiting ___ the bus ___ 6am.', translation: 'Eu estava esperando o ônibus às 6h.', options: ['for/at', 'at/for', 'on/at', 'during/at'], correctAnswer: 'at', points: 10 },
      { id: 'pct-7', sectionId: 'past-continuous', type: 'multiple-choice', question: 'They were dancing ___ the party.', translation: 'Eles estavam dançando na festa.', options: ['in', 'at', 'on', 'during'], correctAnswer: 'at', points: 10 },
      { id: 'pct-8', sectionId: 'past-continuous', type: 'multiple-choice', question: 'She was cooking ___ yesterday evening.', translation: 'Ela estava cozinhando ontem à noite.', options: ['in', 'at', 'on', 'during'], correctAnswer: 'yesterday evening', points: 10 },
      { id: 'pct-9', sectionId: 'past-continuous', type: 'multiple-choice', question: 'We were driving ___ the rain.', translation: 'Estávamos dirigindo na chuva.', options: ['in', 'at', 'on', 'during'], correctAnswer: 'in', points: 10 },
      { id: 'pct-10', sectionId: 'past-continuous', type: 'multiple-choice', question: 'He was working ___ late night.', translation: 'Ele estava trabalhando até tarde da noite.', options: ['until', 'to', 'by', 'at'], correctAnswer: 'until', points: 10 }
    ]
  },
  {
    id: 'past-simple-regular-1',
    title: 'Past Simple - Regular Verbs',
    description: 'Regular verb patterns',
    icon: '📝',
    exercises: [
      { id: 'psr-1', sectionId: 'past-simple', type: 'multiple-choice', question: 'I ___ to the store yesterday.', translation: 'Eu fui à loja ontem.', options: ['walk', 'walked', 'walking', 'walks'], correctAnswer: 'walked', points: 10 },
      { id: 'psr-2', sectionId: 'past-simple', type: 'multiple-choice', question: 'She ___ a lot of money.', translation: 'Ela economizou muito dinheiro.', options: ['save', 'saved', 'saving', 'saves'], correctAnswer: 'saved', points: 10 },
      { id: 'psr-3', sectionId: 'past-simple', type: 'multiple-choice', question: 'They ___ the project on time.', translation: 'Eles terminaram o projeto no prazo.', options: ['finish', 'finished', 'finishing', 'finishes'], correctAnswer: 'finished', points: 10 },
      { id: 'psr-4', sectionId: 'past-simple', type: 'multiple-choice', question: 'He ___ the door.', translation: 'Ele abriu a porta.', options: ['open', 'opened', 'opening', 'opens'], correctAnswer: 'opened', points: 10 },
      { id: 'psr-5', sectionId: 'past-simple', type: 'multiple-choice', question: 'We ___ a good time.', translation: 'Nos divertimos muito.', options: ['enjoy', 'enjoyed', 'enjoying', 'enjoys'], correctAnswer: 'enjoyed', points: 10 },
      { id: 'psr-6', sectionId: 'past-simple', type: 'multiple-choice', question: 'I ___ the problem.', translation: 'Eu resolvi o problema.', options: ['solve', 'solved', 'solving', 'solves'], correctAnswer: 'solved', points: 10 },
      { id: 'psr-7', sectionId: 'past-simple', type: 'multiple-choice', question: 'She ___ carefully.', translation: 'Ela ouviu com cuidado.', options: ['listen', 'listened', 'listening', 'listens'], correctAnswer: 'listened', points: 10 },
      { id: 'psr-8', sectionId: 'past-simple', type: 'multiple-choice', question: 'They ___ the house.', translation: ' Eles pintaram a casa.', options: ['paint', 'painted', 'painting', 'paints'], correctAnswer: 'painted', points: 10 },
      { id: 'psr-9', sectionId: 'past-simple', type: 'multiple-choice', question: 'He ___ the guitar.', translation: 'Ele tocou o violão.', options: ['play', 'played', 'playing', 'plays'], correctAnswer: 'played', points: 10 },
      { id: 'psr-10', sectionId: 'past-simple', type: 'multiple-choice', question: 'We ___ our best.', translation: 'Fizemos o nosso melhor.', options: ['try', 'tried', 'trying', 'tries'], correctAnswer: 'tried', points: 10 }
    ]
  },
  {
    id: 'past-simple-irregular-1',
    title: 'Past Simple - Irregular Verbs 1',
    description: 'Common irregular verbs',
    icon: '🔴',
    exercises: [
      { id: 'psi-1', sectionId: 'past-simple', type: 'multiple-choice', question: 'I ___ a beautiful sunset.', translation: 'Eu vi um lindo pôr do sol.', options: ['see', 'saw', 'seen', 'seeing'], correctAnswer: 'saw', points: 10 },
      { id: 'psi-2', sectionId: 'past-simple', type: 'multiple-choice', question: 'She ___ to the radio.', translation: 'Ela ouviu o rádio.', options: ['hear', 'heard', 'heard', 'hearing'], correctAnswer: 'heard', points: 10 },
      { id: 'psi-3', sectionId: 'past-simple', type: 'multiple-choice', question: 'They ___ early.', translation: 'Eles acordaram cedo.', options: ['wake', 'woke', 'woken', 'waking'], correctAnswer: 'woke', points: 10 },
      { id: 'psi-4', sectionId: 'past-simple', type: 'multiple-choice', question: 'He ___ the truth.', translation: 'Ele disse a verdade.', options: ['say', 'said', 'said', 'saying'], correctAnswer: 'said', points: 10 },
      { id: 'psi-5', sectionId: 'past-simple', type: 'multiple-choice', question: 'We ___ home late.', translation: 'Chegamos em casa tarde.', options: ['come', 'came', 'come', 'coming'], correctAnswer: 'came', points: 10 },
      { id: 'psi-6', sectionId: 'past-simple', type: 'multiple-choice', question: 'I ___ my keys.', translation: 'Eu perdi minhas chaves.', options: ['lose', 'lost', 'lost', 'losing'], correctAnswer: 'lost', points: 10 },
      { id: 'psi-7', sectionId: 'past-simple', type: 'multiple-choice', question: 'She ___ the prize.', translation: 'Ela ganhou o prêmio.', options: ['win', 'won', 'won', 'winning'], correctAnswer: 'won', points: 10 },
      { id: 'psi-8', sectionId: 'past-simple', type: 'multiple-choice', question: 'They ___ in love.', translation: 'Se apaixonaram.', options: ['fall', 'fell', 'fallen', 'falling'], correctAnswer: 'fell', points: 10 },
      { id: 'psi-9', sectionId: 'past-simple', type: 'multiple-choice', question: 'He ___ a lot.', translation: 'Ele comeu muito.', options: ['eat', 'ate', 'eaten', 'eating'], correctAnswer: 'ate', points: 10 },
      { id: 'psi-10', sectionId: 'past-simple', type: 'multiple-choice', question: 'We ___ the meeting.', translation: 'Esquecemos a reunião.', options: ['forget', 'forgot', 'forgotten', 'forgetting'], correctAnswer: 'forgot', points: 10 }
    ]
  },
  {
    id: 'past-simple-irregular-2',
    title: 'Past Simple - Irregular Verbs 2',
    description: 'More irregular verbs',
    icon: '🔴',
    exercises: [
      { id: 'psi2-1', sectionId: 'past-simple', type: 'multiple-choice', question: 'I ___ to the gym.', translation: 'Eu fui à academia.', options: ['go', 'went', 'gone', 'going'], correctAnswer: 'went', points: 10 },
      { id: 'psi2-2', sectionId: 'past-simple', type: 'multiple-choice', question: 'She ___ me a gift.', translation: 'Ela me deu um presente.', options: ['give', 'gave', 'given', 'giving'], correctAnswer: 'gave', points: 10 },
      { id: 'psi2-3', sectionId: 'past-simple', type: 'multiple-choice', question: 'They ___ their homework.', translation: ' Eles fizeram a lição.', options: ['do', 'did', 'done', 'doing'], correctAnswer: 'did', points: 10 },
      { id: 'psi2-4', sectionId: 'past-simple', type: 'multiple-choice', question: 'He ___ a book.', translation: 'Ele escreveu um livro.', options: ['write', 'wrote', 'written', 'writing'], correctAnswer: 'wrote', points: 10 },
      { id: 'psi2-5', sectionId: 'past-simple', type: 'multiple-choice', question: 'We ___ the movie.', translation: 'Assistimos o filme.', options: ['watch', 'watched', 'watching', 'watches'], correctAnswer: 'watched', points: 10 },
      { id: 'psi2-6', sectionId: 'past-simple', type: 'multiple-choice', question: 'I ___ my flight.', translation: 'Eu perdi meu voo.', options: ['miss', 'missed', 'missing', 'misses'], correctAnswer: 'missed', points: 10 },
      { id: 'psi2-7', sectionId: 'past-simple', type: 'multiple-choice', question: 'She ___ the job.', translation: 'Ela conseguiu o emprego.', options: ['get', 'got', 'got', 'getting'], correctAnswer: 'got', points: 10 },
      { id: 'psi2-8', sectionId: 'past-simple', type: 'multiple-choice', question: 'They ___ the bridge.', translation: 'Cruzaram a ponte.', options: ['cross', 'crossed', 'crossing', 'crosses'], correctAnswer: 'crossed', points: 10 },
      { id: 'psi2-9', sectionId: 'past-simple', type: 'multiple-choice', question: 'He ___ the radio.', translation: 'Ele ligou o rádio.', options: ['turn on', 'turned on', 'turning on', 'turns on'], correctAnswer: 'turned on', points: 10 },
      { id: 'psi2-10', sectionId: 'past-simple', type: 'multiple-choice', question: 'We ___ a decision.', translation: 'Tomamos uma decisão.', options: ['make', 'made', 'made', 'making'], correctAnswer: 'made', points: 10 }
    ]
  },
  {
    id: 'past-perfect-sequencing-1',
    title: 'Past Perfect - Sequencing',
    description: 'Before, after, when, by the time',
    icon: '📅',
    exercises: [
      { id: 'pps-1', sectionId: 'past-perfect', type: 'multiple-choice', question: 'I ___ before he arrived.', translation: 'Eu tinha terminado antes dele chegar.', options: ['finished', 'had finished', 'have finished', 'was finishing'], correctAnswer: 'had finished', points: 10 },
      { id: 'pps-2', sectionId: 'past-perfect', type: 'multiple-choice', question: 'She left after she ___ the news.', translation: 'Ela saiu depois de ouvir as notícias.', options: ['heard', 'had heard', 'has heard', 'was hearing'], correctAnswer: 'had heard', points: 10 },
      { id: 'pps-3', sectionId: 'past-perfect', type: 'multiple-choice', question: 'By the time we ___ , the party was over.', translation: 'Quando chegamos, a festa tinha acabado.', options: ['arrived', 'had arrived', 'have arrived', 'were arriving'], correctAnswer: 'had arrived', points: 10 },
      { id: 'pps-4', sectionId: 'past-perfect', type: 'multiple-choice', question: 'They ___ before I called.', translation: 'Eles tinham saído antes de eu ligar.', options: ['left', 'had left', 'have left', 'were leaving'], correctAnswer: 'had left', points: 10 },
      { id: 'pps-5', sectionId: 'past-perfect', type: 'multiple-choice', question: 'He ___ after he ___ the letter.', translation: 'Ele respondeu depois de ler a carta.', options: ['answered/had read', 'had answered/read', 'answered/read', 'has answered/read'], correctAnswer: 'had answered/read', points: 15 },
      { id: 'pps-6', sectionId: 'past-perfect', type: 'multiple-choice', question: 'We ___ by the time the movie ___.', translation: 'Chegamos antes do filme começar.', options: ['arrived/had started', 'had arrived/started', 'arrived/started', 'had arrived/had started'], correctAnswer: 'had arrived/started', points: 15 },
      { id: 'pps-7', sectionId: 'past-perfect', type: 'multiple-choice', question: 'She ___ her work before she ___.', translation: 'Ela terminou o trabalho antes de ir para casa.', options: ['finished/went', 'had finished/went', 'finished/had gone', 'had finished/had gone'], correctAnswer: 'had finished/went', points: 15 },
      { id: 'pps-8', sectionId: 'past-perfect', type: 'multiple-choice', question: 'I ___ enough money before I ___.', translation: 'Eu tinha economizado dinheiro antes de viajar.', options: ['saved/traveled', 'had saved/traveled', 'saved/had traveled', 'had saved/had traveled'], correctAnswer: 'had saved/traveled', points: 15 },
      { id: 'pps-9', sectionId: 'past-perfect', type: 'multiple-choice', question: 'They ___ the place before we ___.', translation: ' Eles conheceram o lugar antes de nós.', options: ['knew/knew', 'had known/knew', 'knew/had known', 'had known/had known'], correctAnswer: 'had known/knew', points: 15 },
      { id: 'pps-10', sectionId: 'past-perfect', type: 'multiple-choice', question: 'The show ___ before he ___.', translation: 'O show tinha começado antes dele chegar.', options: ['started/came', 'had started/came', 'started/had come', 'had started/had come'], correctAnswer: 'had started/came', points: 15 }
    ]
  },
  {
    id: 'past-perfect-negative-1',
    title: 'Past Perfect - Negative',
    description: 'Negative forms',
    icon: '❌',
    exercises: [
      { id: 'ppn-1', sectionId: 'past-perfect', type: 'multiple-choice', question: 'She ___ the movie before.', translation: 'Ela não tinha visto o filme antes.', options: ['hadn\'t seen', 'didn\'t see', 'hasn\'t seen', 'doesn\'t see'], correctAnswer: 'hadn\'t seen', points: 10 },
      { id: 'ppn-2', sectionId: 'past-perfect', type: 'multiple-choice', question: 'They ___ here before.', translation: 'Eles não tinham estado aqui antes.', options: ['hadn\'t been', 'didn\'t go', 'haven\'t been', 'don\'t go'], correctAnswer: 'hadn\'t been', points: 10 },
      { id: 'ppn-3', sectionId: 'past-perfect', type: 'multiple-choice', question: 'He ___ English before.', translation: 'Ele não tinha estudado inglês antes.', options: ['hadn\'t studied', 'didn\'t study', 'hasn\'t studied', 'doesn\'t study'], correctAnswer: 'hadn\'t studied', points: 10 },
      { id: 'ppn-4', sectionId: 'past-perfect', type: 'multiple-choice', question: 'We ___ that before.', translation: 'Não tínhamos feito isso antes.', options: ['hadn\'t done', 'didn\'t do', 'haven\'t done', 'don\'t do'], correctAnswer: 'hadn\'t done', points: 10 },
      { id: 'ppn-5', sectionId: 'past-perfect', type: 'multiple-choice', question: 'I ___ the letter yet.', translation: 'Eu ainda não tinha escrito a carta.', options: ['hadn\'t written', 'didn\'t write', 'haven\'t written', 'don\'t write'], correctAnswer: 'hadn\'t written', points: 10 },
      { id: 'ppn-6', sectionId: 'past-perfect', type: 'multiple-choice', question: 'She ___ to the concert.', translation: 'Ela não tinha ido ao show.', options: ['hadn\'t gone', 'didn\'t go', 'hasn\'t gone', 'doesn\'t go'], correctAnswer: 'hadn\'t gone', points: 10 },
      { id: 'ppn-7', sectionId: 'past-perfect', type: 'multiple-choice', question: 'They ___ us yet.', translation: ' Eles ainda não tinhamnos contactado.', options: ['hadn\'t contacted', 'didn\'t contact', 'haven\'t contacted', 'don\'t contact'], correctAnswer: 'hadn\'t contacted', points: 10 },
      { id: 'ppn-8', sectionId: 'past-perfect', type: 'multiple-choice', question: 'He ___ the decision yet.', translation: 'Ele ainda não tinha tomado a decisão.', options: ['hadn\'t made', 'didn\'t make', 'hasn\'t made', 'doesn\'t make'], correctAnswer: 'hadn\'t made', points: 10 },
      { id: 'ppn-9', sectionId: 'past-perfect', type: 'multiple-choice', question: 'We ___ before we ___ this.', translation: 'Não tínhamos visto isso antes.', options: ['hadn\'t seen/saw', 'didn\'t see/saw', 'haven\'t seen/saw', 'don\'t see/saw'], correctAnswer: 'hadn\'t seen', points: 10 },
      { id: 'ppn-10', sectionId: 'past-perfect', type: 'multiple-choice', question: 'She ___ the test before.', translation: 'Ela não tinha feito a prova antes.', options: ['hadn\'t taken', 'didn\'t take', 'hasn\'t taken', 'doesn\'t take'], correctAnswer: 'hadn\'t taken', points: 10 }
    ]
  },
  {
    id: 'past-perfect-questions-1',
    title: 'Past Perfect - Questions',
    description: 'Question formation',
    icon: '❓',
    exercises: [
      { id: 'ppq-1', sectionId: 'past-perfect', type: 'multiple-choice', question: '___ you ___ the book before?', translation: 'Você tinha lido o livro antes?', options: ['Had/read', 'Did/read', 'Has/read', 'Do/read'], correctAnswer: 'Had/read', points: 10 },
      { id: 'ppq-2', sectionId: 'past-perfect', type: 'multiple-choice', question: '___ she ___ to Paris before?', translation: 'Ela tinha estado em Paris antes?', options: ['Had/been', 'Did/be', 'Has/been', 'Does/be'], correctAnswer: 'Had/been', points: 10 },
      { id: 'ppq-3', sectionId: 'past-perfect', type: 'multiple-choice', question: '___ they ___ the project?', translation: 'Eles tinham terminado o projeto?', options: ['Had/finished', 'Did/finish', 'Has/finished', 'Do/finish'], correctAnswer: 'Had/finished', points: 10 },
      { id: 'ppq-4', sectionId: 'past-perfect', type: 'multiple-choice', question: '___ he ___ his homework?', translation: 'Ele tinha feito a lição de casa?', options: ['Had/done', 'Did/do', 'Has/done', 'Does/do'], correctAnswer: 'Had/done', points: 10 },
      { id: 'ppq-5', sectionId: 'past-perfect', type: 'multiple-choice', question: '___ we ___ the test?', translation: 'Tínhamos feito o teste?', options: ['Had/done', 'Did/do', 'Has/done', 'Do/do'], correctAnswer: 'Had/done', points: 10 },
      { id: 'ppq-6', sectionId: 'past-perfect', type: 'multiple-choice', question: '___ it ___ before?', translation: 'Já tinha acontecido antes?', options: ['Had/happened', 'Did/happen', 'Has/happened', 'Does/happen'], correctAnswer: 'Had/happened', points: 10 },
      { id: 'ppq-7', sectionId: 'past-perfect', type: 'multiple-choice', question: '___ you ___ her before?', translation: 'Você tinha conhecido ela antes?', options: ['Had/met', 'Did/meet', 'Has/met', 'Does/meet'], correctAnswer: 'Had/met', points: 10 },
      { id: 'ppq-8', sectionId: 'past-perfect', type: 'multiple-choice', question: '___ she ___ the money?', translation: 'Ela tinha ganho o dinheiro?', options: ['Had/won', 'Did/win', 'Has/won', 'Does/win'], correctAnswer: 'Had/won', points: 10 },
      { id: 'ppq-9', sectionId: 'past-perfect', type: 'multiple-choice', question: '___ they ___ the meeting?', translation: 'Eles tinham参加 a reunião?', options: ['Had/attended', 'Did/attend', 'Has/attended', 'Does/attend'], correctAnswer: 'Had/attended', points: 10 },
      { id: 'ppq-10', sectionId: 'past-perfect', type: 'multiple-choice', question: '___ he ___ the news?', translation: 'Ele tinha ouvido as notícias?', options: ['Had/heard', 'Did/hear', 'Has/heard', 'Does/hear'], correctAnswer: 'Had/heard', points: 10 }
    ]
  },
  {
    id: 'past-perfect-continuous-1',
    title: 'Past Perfect Continuous - Duration',
    description: 'How long in the past',
    icon: '⏳',
    exercises: [
      { id: 'ppcd-1', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'She ___ for two hours before I arrived.', translation: 'Ela estava esperando há duas horas antes de eu chegar.', options: ['had been waiting', 'was waiting', 'had waited', 'was waited'], correctAnswer: 'had been waiting', points: 10 },
      { id: 'ppcd-2', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'They ___ for months before the project ended.', translation: 'Eles estavam trabalhando há meses antes do projeto acabar.', options: ['had been working', 'were working', 'had worked', 'was working'], correctAnswer: 'had been working', points: 10 },
      { id: 'ppcd-3', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'I ___ all day before the party started.', translation: 'Eu tinha estado limpando o dia todo antes da festa começar.', options: ['had been cleaning', 'was cleaning', 'had cleaned', 'was cleaned'], correctAnswer: 'had been cleaning', points: 10 },
      { id: 'ppcd-4', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'He ___ for an hour before we called the doctor.', translation: 'Ele estava doente há uma hora antes de chamarmos o médico.', options: ['had been sick', 'was sick', 'had sick', 'was ill'], correctAnswer: 'had been sick', points: 10 },
      { id: 'ppcd-5', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'We ___ for years before we met.', translation: 'Nos conhecíamos há anos antes de nos conhecer.', options: ['had been knowing', 'had known', 'were knowing', 'knew'], correctAnswer: 'had known', points: 10 },
      { id: 'ppcd-6', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'She ___ for the job for months.', translation: 'Ela estava procurando emprego há meses.', options: ['had been looking', 'was looking', 'had looked', 'was looked'], correctAnswer: 'had been looking', points: 10 },
      { id: 'ppcd-7', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'They ___ in the rain for hours.', translation: 'Eles estavam esperando na chuva por horas.', options: ['had been waiting', 'were waiting', 'had waited', 'was waiting'], correctAnswer: 'had been waiting', points: 10 },
      { id: 'ppcd-8', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'He ___ all night before the exam.', translation: 'Ele tinha estado estudando a noite toda antes da prova.', options: ['had been studying', 'was studying', 'had studied', 'was studied'], correctAnswer: 'had been studying', points: 10 },
      { id: 'ppcd-9', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'I ___ in this city for ten years.', translation: 'Eu morava nesta cidade há dez anos.', options: ['had been living', 'was living', 'had lived', 'was lived'], correctAnswer: 'had been living', points: 10 },
      { id: 'ppcd-10', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'We ___ all morning.', translation: 'Trabalhamos a manhã toda.', options: ['had been working', 'were working', 'had worked', 'was working'], correctAnswer: 'had been working', points: 10 }
    ]
  },
  {
    id: 'past-simple-questions-1',
    title: 'Past Simple - Questions',
    description: 'Question formation',
    icon: '❓',
    exercises: [
      { id: 'psq-1', sectionId: 'past-simple', type: 'multiple-choice', question: '___ you go to the party?', translation: 'Você foi à festa?', options: ['Did', 'Do', 'Does', 'Had'], correctAnswer: 'Did', points: 10 },
      { id: 'psq-2', sectionId: 'past-simple', type: 'multiple-choice', question: '___ she finish the work?', translation: 'Ela terminou o trabalho?', options: ['Did', 'Do', 'Does', 'Has'], correctAnswer: 'Did', points: 10 },
      { id: 'psq-3', sectionId: 'past-simple', type: 'multiple-choice', question: '___ they see the movie?', translation: 'Eles viram o filme?', options: ['Did', 'Do', 'Does', 'Has'], correctAnswer: 'Did', points: 10 },
      { id: 'psq-4', sectionId: 'past-simple', type: 'multiple-choice', question: '___ he call you?', translation: 'Ele te ligou?', options: ['Did', 'Do', 'Does', 'Has'], correctAnswer: 'Did', points: 10 },
      { id: 'psq-5', sectionId: 'past-simple', type: 'multiple-choice', question: '___ you eat breakfast?', translation: 'Você comeu café da manhã?', options: ['Did', 'Do', 'Does', 'Has'], correctAnswer: 'Did', points: 10 },
      { id: 'psq-6', sectionId: 'past-simple', type: 'multiple-choice', question: '___ she work here?', translation: 'Ela trabalhava aqui?', options: ['Did', 'Do', 'Does', 'Has'], correctAnswer: 'Did', points: 10 },
      { id: 'psq-7', sectionId: 'past-simple', type: 'multiple-choice', question: '___ they understand?', translation: 'Eles entenderam?', options: ['Did', 'Do', 'Does', 'Has'], correctAnswer: 'Did', points: 10 },
      { id: 'psq-8', sectionId: 'past-simple', type: 'multiple-choice', question: '___ it rain yesterday?', translation: 'Choveu ontem?', options: ['Did', 'Do', 'Does', 'Has'], correctAnswer: 'Did', points: 10 },
      { id: 'psq-9', sectionId: 'past-simple', type: 'multiple-choice', question: '___ you come home late?', translation: 'Você chegou em casa tarde?', options: ['Did', 'Do', 'Does', 'Has'], correctAnswer: 'Did', points: 10 },
      { id: 'psq-10', sectionId: 'past-simple', type: 'multiple-choice', question: '___ she leave early?', translation: 'Ela saiu cedo?', options: ['Did', 'Do', 'Does', 'Has'], correctAnswer: 'Did', points: 10 }
    ]
  },
  {
    id: 'past-continuous-questions-1',
    title: 'Past Continuous Questions',
    description: 'Questions in Past Continuous',
    icon: '❓',
    exercises: [
      { id: 'pcq-1', sectionId: 'past-continuous', type: 'multiple-choice', question: '___ you ___ when I called?', translation: 'Você estava dormindo quando eu liguei?', options: ['Were...sleeping', 'Was...sleeping', 'Did...sleep', 'Are...sleeping'], correctAnswer: 'Were...sleeping', points: 10 },
      { id: 'pcq-2', sectionId: 'past-continuous', type: 'multiple-choice', question: '___ she ___ when you arrived?', translation: 'Ela estava cozinha quando você chegou?', options: ['Was...cooking', 'Were...cooking', 'Did...cook', 'Is...cooking'], correctAnswer: 'Was...cooking', points: 10 },
      { id: 'pcq-3', sectionId: 'past-continuous', type: 'multiple-choice', question: '___ they ___ when the phone rang?', translation: 'Eles estavam jogando quando o telefone tocou?', options: ['Were...playing', 'Was...playing', 'Did...play', 'Are...playing'], correctAnswer: 'Were...playing', points: 10 },
      { id: 'pcq-4', sectionId: 'past-continuous', type: 'multiple-choice', question: '___ he ___ when you saw him?', translation: 'Ele estava correndo quando você o viu?', options: ['Was...running', 'Were...running', 'Did...run', 'Is...running'], correctAnswer: 'Was...running', points: 10 },
      { id: 'pcq-5', sectionId: 'past-continuous', type: 'multiple-choice', question: '___ we ___ when the door opened?', translation: 'Nós estávamos conversando quando a porta abriu?', options: ['Were...talking', 'Was...talking', 'Did...talk', 'Are...talking'], correctAnswer: 'Were...talking', points: 10 },
      { id: 'pcq-6', sectionId: 'past-continuous', type: 'multiple-choice', question: '___ it ___ when you went out?', translation: 'Estava chovendo quando você saiu?', options: ['Was...raining', 'Were...raining', 'Did...rain', 'Is...raining'], correctAnswer: 'Was...raining', points: 10 },
      { id: 'pcq-7', sectionId: 'past-continuous', type: 'multiple-choice', question: '___ she ___ when I came?', translation: 'Ela estava estudando quando eu vim?', options: ['Was...studying', 'Were...studying', 'Did...study', 'Is...studying'], correctAnswer: 'Was...studying', points: 10 },
      { id: 'pcq-8', sectionId: 'past-continuous', type: 'multiple-choice', question: '___ they ___ at that time?', translation: 'Eles estavam trabalhando naquele horário?', options: ['Were...working', 'Was...working', 'Did...work', 'Are...working'], correctAnswer: 'Were...working', points: 10 },
      { id: 'pcq-9', sectionId: 'past-continuous', type: 'multiple-choice', question: '___ he ___ in the garden?', translation: 'Ele estava no jardim?', options: ['Was...working', 'Were...working', 'Did...work', 'Is...working'], correctAnswer: 'Was...working', points: 10 },
      { id: 'pcq-10', sectionId: 'past-continuous', type: 'multiple-choice', question: '___ you ___ when I saw you?', translation: 'Você estava sorrindo quando eu te vi?', options: ['Were...smiling', 'Was...smiling', 'Did...smile', 'Are...smiling'], correctAnswer: 'Were...smiling', points: 10 }
    ]
  },
  {
    id: 'past-perfect-1',
    title: 'Past Perfect Simple',
    description: 'Had + past participle',
    icon: '✅',
    exercises: [
      { id: 'pp-1', sectionId: 'past-perfect', type: 'multiple-choice', question: 'By the time I arrived, she ___ .', translation: 'Quando eu chegou, ela já tinha partido.', options: ['had left', 'has left', 'left', 'was leaving'], correctAnswer: 'had left', points: 10 },
      { id: 'pp-2', sectionId: 'past-perfect', type: 'multiple-choice', question: 'They ___ the work before the deadline.', translation: 'Eles terminaram o trabalho antes do prazo.', options: ['had finished', 'have finished', 'finished', 'were finishing'], correctAnswer: 'had finished', points: 10 },
      { id: 'pp-3', sectionId: 'past-perfect', type: 'multiple-choice', question: 'He ___ the movie before.', translation: 'Ele já tinha assistido o filme antes.', options: ['had watched', 'has watched', 'watched', 'was watching'], correctAnswer: 'had watched', points: 10 },
      { id: 'pp-4', sectionId: 'past-perfect', type: 'multiple-choice', question: 'We ___ at the party.', translation: 'Já tínhamos nos conhecido na festa.', options: ['had met', 'have met', 'met', 'were meeting'], correctAnswer: 'had met', points: 10 },
      { id: 'pp-5', sectionId: 'past-perfect', type: 'multiple-choice', question: 'She ___ her promise.', translation: 'Ela tinha cumprido sua promessa.', options: ['had kept', 'has kept', 'kept', 'was keeping'], correctAnswer: 'had kept', points: 10 },
      { id: 'pp-6', sectionId: 'past-perfect', type: 'multiple-choice', question: 'I ___ the book before.', translation: 'Eu já tinha lido o livro antes.', options: ['had read', 'has read', 'read', 'was reading'], correctAnswer: 'had read', points: 10 },
      { id: 'pp-7', sectionId: 'past-perfect', type: 'multiple-choice', question: 'They ___ a decision.', translation: 'Já tinham tomado uma decisão.', options: ['had made', 'have made', 'made', 'were making'], correctAnswer: 'had made', points: 10 },
      { id: 'pp-8', sectionId: 'past-perfect', type: 'multiple-choice', question: 'He ___ the position.', translation: 'Ele tinha conquistado a posição.', options: ['had gotten', 'has gotten', 'got', 'was getting'], correctAnswer: 'had gotten', points: 10 },
      { id: 'pp-9', sectionId: 'past-perfect', type: 'multiple-choice', question: 'We ___ the truth.', translation: 'Já tínhamos ouvido a verdade.', options: ['had heard', 'has heard', 'heard', 'were hearing'], correctAnswer: 'had heard', points: 10 },
      { id: 'pp-10', sectionId: 'past-perfect', type: 'multiple-choice', question: 'She ___ enough money.', translation: 'Ela tinha economizado dinheiro suficiente.', options: ['had saved', 'has saved', 'saved', 'was saving'], correctAnswer: 'had saved', points: 10 }
    ]
  },
  {
    id: 'past-perfect-questions-1',
    title: 'Past Perfect Questions',
    description: 'Questions in Past Perfect',
    icon: '❓',
    exercises: [
      { id: 'ppq-1', sectionId: 'past-perfect', type: 'multiple-choice', question: '___ you ___ the test before?', translation: 'Você já tinha feito a prova antes?', options: ['Had...taken', 'Have...taken', 'Did...take', 'Was...taking'], correctAnswer: 'Had...taken', points: 10 },
      { id: 'ppq-2', sectionId: 'past-perfect', type: 'multiple-choice', question: '___ she ___ home before?', translation: 'Ela tinha chegado em casa antes?', options: ['Had...arrived', 'Have...arrived', 'Did...arrive', 'Was...arriving'], correctAnswer: 'Had...arrived', points: 10 },
      { id: 'ppq-3', sectionId: 'past-perfect', type: 'multiple-choice', question: '___ they ___ their work?', translation: 'Eles tinham terminado o trabalho?', options: ['Had...finished', 'Have...finished', 'Did...finish', 'Were...finishing'], correctAnswer: 'Had...finished', points: 10 },
      { id: 'ppq-4', sectionId: 'past-perfect', type: 'multiple-choice', question: '___ he ___ the news?', translation: 'Ele tinha ouvido as notícias?', options: ['Had...heard', 'Have...heard', 'Did...hear', 'Was...hearing'], correctAnswer: 'Had...heard', points: 10 },
      { id: 'ppq-5', sectionId: 'past-perfect', type: 'multiple-choice', question: '___ we ___ this before?', translation: 'Já tínhamos feito isso antes?', options: ['Had...done', 'Have...done', 'Did...do', 'Were...doing'], correctAnswer: 'Had...done', points: 10 },
      { id: 'ppq-6', sectionId: 'past-perfect', type: 'multiple-choice', question: '___ you ___ her before?', translation: 'Você já tinha a visto antes?', options: ['Had...seen', 'Have...seen', 'Did...see', 'Was...seeing'], correctAnswer: 'Had...seen', points: 10 },
      { id: 'ppq-7', sectionId: 'past-perfect', type: 'multiple-choice', question: '___ it ___ before the event?', translation: 'Tinha acontecido antes do evento?', options: ['Had...happened', 'Have...happened', 'Did...happen', 'Was...happening'], correctAnswer: 'Had...happened', points: 10 },
      { id: 'ppq-8', sectionId: 'past-perfect', type: 'multiple-choice', question: '___ she ___ the book?', translation: 'Ela tinha escritas o livro?', options: ['Had...written', 'Have...written', 'Did...write', 'Was...writing'], correctAnswer: 'Had...written', points: 10 },
      { id: 'ppq-9', sectionId: 'past-perfect', type: 'multiple-choice', question: '___ they ___ their decision?', translation: 'Eles tinham tomada sua decisão?', options: ['Had...made', 'Have...made', 'Did...make', 'Were...making'], correctAnswer: 'Had...made', points: 10 },
      { id: 'ppq-10', sectionId: 'past-perfect', type: 'multiple-choice', question: '___ he ___ the job?', translation: 'Ele tinha gotten o emprego?', options: ['Had...got', 'Have...got', 'Did...get', 'Was...getting'], correctAnswer: 'Had...got', points: 10 }
    ]
  },
  {
    id: 'past-perfect-continuous-1',
    title: 'Past Perfect Continuous',
    description: 'Had been + -ing',
    icon: '⏳',
    exercises: [
      { id: 'ppc-1', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'I ___ for hours when he arrived.', translation: 'Eu estava esperando há horas quando ele chegou.', options: ['had been waiting', 'was waiting', 'were waiting', 'waited'], correctAnswer: 'had been waiting', points: 10 },
      { id: 'ppc-2', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'She ___ before she got sick.', translation: 'Ela estava trabalhando antes de ficar doente.', options: ['had been working', 'was working', 'were working', 'worked'], correctAnswer: 'had been working', points: 10 },
      { id: 'ppc-3', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'They ___ for hours before the game.', translation: 'Eles estavam treinando por horas antes do jogo.', options: ['had been practicing', 'were practicing', 'practiced', 'was practicing'], correctAnswer: 'had been practicing', points: 10 },
      { id: 'ppc-4', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'He ___ all day when he finally slept.', translation: 'Ele estava lendo o dia todo quando finalmente dormiu.', options: ['had been reading', 'was reading', 'were reading', 'read'], correctAnswer: 'had been reading', points: 10 },
      { id: 'ppc-5', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'We ___ for an hour when she called.', translation: 'Estávamos esperando por uma hora quando ela ligou.', options: ['had been waiting', 'were waiting', 'waited', 'was waiting'], correctAnswer: 'had been waiting', points: 10 },
      { id: 'ppc-6', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'She ___ for weeks before the wedding.', translation: 'Ela estava planejando por semanas antes do casamento.', options: ['had been planning', 'was planning', 'were planning', 'planned'], correctAnswer: 'had been planning', points: 10 },
      { id: 'ppc-7', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'The workers ___ for months before finishing.', translation: 'Os trabalhadores estavam construindo por meses antes de terminar.', options: ['had been building', 'were building', 'built', 'was building'], correctAnswer: 'had been building', points: 10 },
      { id: 'ppc-8', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'I ___ before I found the answer.', translation: 'Eu estava procurando antes de encontrar a resposta.', options: ['had been searching', 'was searching', 'were searching', 'searched'], correctAnswer: 'had been searching', points: 10 },
      { id: 'ppc-9', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'They ___ all night when the sun rose.', translation: 'Eles estavam dançando a noite toda quando o sol nasceu.', options: ['had been dancing', 'were dancing', 'danced', 'was dancing'], correctAnswer: 'had been dancing', points: 10 },
      { id: 'ppc-10', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'She ___ for years before she became famous.', translation: 'Ela estava estudando por anos antes de se tornar famosa.', options: ['had been studying', 'was studying', 'were studying', 'studied'], correctAnswer: 'had been studying', points: 10 }
    ]
  },
  {
    id: 'past-perfect-vs-simple-1',
    title: 'Past Perfect vs Past Simple',
    description: 'Differences between tenses',
    icon: '⚖️',
    exercises: [
      { id: 'ppvs-1', sectionId: 'past-perfect', type: 'multiple-choice', question: 'When I arrived, the movie ___.', translation: 'Quando eu cheguei, o filme já tinha começado.', options: ['started', 'had started', 'was starting', 'starts'], correctAnswer: 'had started', points: 10 },
      { id: 'ppvs-2', sectionId: 'past-simple', type: 'multiple-choice', question: 'When I arrived, the movie ___.', translation: 'Quando eu cheguei, o filme começou.', options: ['started', 'had started', 'was starting', 'starts'], correctAnswer: 'started', points: 10 },
      { id: 'ppvs-3', sectionId: 'past-perfect', type: 'multiple-choice', question: 'She ___ before she met him.', translation: 'Ela já tinha conhecidos antes de conhecê-lo.', options: ['knew', 'had known', 'know', 'was knowing'], correctAnswer: 'had known', points: 10 },
      { id: 'ppvs-4', sectionId: 'past-simple', type: 'multiple-choice', question: 'She ___ him at the party.', translation: 'Ela conheceu ele na festa.', options: ['knew', 'had known', 'met', 'was meeting'], correctAnswer: 'met', points: 10 },
      { id: 'ppvs-5', sectionId: 'past-perfect', type: 'multiple-choice', question: 'We ___ before the guests arrived.', translation: 'Já tínhamos comido antes dos convidados chegarem.', options: ['ate', 'had eaten', 'were eating', 'eat'], correctAnswer: 'had eaten', points: 10 },
      { id: 'ppvs-6', sectionId: 'past-simple', type: 'multiple-choice', question: 'We ___ when the guests arrived.', translation: 'Comemos quando os convidados chegaram.', options: ['ate', 'had eaten', 'were eating', 'eat'], correctAnswer: 'ate', points: 10 },
      { id: 'ppvs-7', sectionId: 'past-perfect', type: 'multiple-choice', question: 'He ___ before the interview.', translation: 'Ele tinha se preparou antes da entrevista.', options: ['prepared', 'had prepared', 'was preparing', 'prepares'], correctAnswer: 'had prepared', points: 10 },
      { id: 'ppvs-8', sectionId: 'past-simple', type: 'multiple-choice', question: 'He ___ before the interview.', translation: 'Ele se preparou antes da entrevista.', options: ['prepared', 'had prepared', 'was preparing', 'prepares'], correctAnswer: 'prepared', points: 10 },
      { id: 'ppvs-9', sectionId: 'past-perfect', type: 'multiple-choice', question: 'By the time I ___ , she had already left.', translation: 'Quando eu ligação, ela já tinha saído.', options: ['called', 'had called', 'was calling', 'calls'], correctAnswer: 'called', points: 10 },
      { id: 'ppvs-10', sectionId: 'past-perfect', type: 'multiple-choice', question: 'I ___ the letter when I saw her.', translation: 'Eu tinha escrito a carta quando a vi.', options: ['wrote', 'had written', 'was writing', 'writes'], correctAnswer: 'had written', points: 10 }
    ]
  },
  {
    id: 'past-simple-irregular-1',
    title: 'Past Simple - Irregular Verbs',
    description: 'Common irregular verbs',
    icon: '📝',
    exercises: [
      { id: 'irreg-1', sectionId: 'past-simple', type: 'multiple-choice', question: 'She ___ to the store yesterday.', translation: 'Ela foi à loja ontem.', options: ['go', 'went', 'gone', 'going'], correctAnswer: 'went', points: 10 },
      { id: 'irreg-2', sectionId: 'past-simple', type: 'multiple-choice', question: 'They ___ the movie last night.', translation: 'Eles assistiram o filme ontem à noite.', options: ['see', 'saw', 'seen', 'seeing'], correctAnswer: 'saw', points: 10 },
      { id: 'irreg-3', sectionId: 'past-simple', type: 'multiple-choice', question: 'He ___ a lot of money last year.', translation: 'Ele ganhou muito dinheiro no ano passado.', options: ['win', 'won', 'won', 'winning'], correctAnswer: 'won', points: 10 },
      { id: 'irreg-4', sectionId: 'past-simple', type: 'multiple-choice', question: 'I ___ you last week.', translation: 'Eu te vi semana passada.', options: ['see', 'saw', 'seen', 'seeing'], correctAnswer: 'saw', points: 10 },
      { id: 'irreg-5', sectionId: 'past-simple', type: 'multiple-choice', question: 'She ___ home very late.', translation: 'Ela chegou em casa muito tarde.', options: ['come', 'came', 'come', 'coming'], correctAnswer: 'came', points: 10 },
      { id: 'irreg-6', sectionId: 'past-simple', type: 'multiple-choice', question: 'They ___ the truth.', translation: 'Eles disseram a verdade.', options: ['say', 'said', 'say', 'saying'], correctAnswer: 'said', points: 10 },
      { id: 'irreg-7', sectionId: 'past-simple', type: 'multiple-choice', question: 'He ___ his key somewhere.', translation: 'Ele perdeu sua chave em algum lugar.', options: ['lose', 'lost', 'lost', 'losing'], correctAnswer: 'lost', points: 10 },
      { id: 'irreg-8', sectionId: 'past-simple', type: 'multiple-choice', question: 'We ___ a nice dinner.', translation: 'Fizemos um jantar bonito.', options: ['make', 'made', 'made', 'making'], correctAnswer: 'made', points: 10 },
      { id: 'irreg-9', sectionId: 'past-simple', type: 'multiple-choice', question: 'She ___ in love with him.', translation: 'Ela se apaixonou por ele.', options: ['fall', 'fell', 'fallen', 'falling'], correctAnswer: 'fell', points: 10 },
      { id: 'irreg-10', sectionId: 'past-simple', type: 'multiple-choice', question: 'They ___ their best.', translation: 'Eles fizeram o seu melhor.', options: ['do', 'did', 'done', 'doing'], correctAnswer: 'did', points: 10 }
    ]
  },
  {
    id: 'past-simple-negative-1',
    title: 'Past Simple Negative',
    description: 'Negative in Past Simple',
    icon: '❌',
    exercises: [
      { id: 'psn-1', sectionId: 'past-simple', type: 'multiple-choice', question: 'I ___ to the party last night.', translation: 'Eu não fui à festa ontem à noite.', options: ['did not go', 'do not go', 'does not go', 'was not going'], correctAnswer: 'did not go', points: 10 },
      { id: 'psn-2', sectionId: 'past-simple', type: 'multiple-choice', question: 'She ___ the test yesterday.', translation: 'Ela não fez a prova ontem.', options: ['did not do', 'do not do', 'does not do', 'was not doing'], correctAnswer: 'did not do', points: 10 },
      { id: 'psn-3', sectionId: 'past-simple', type: 'multiple-choice', question: 'They ___ anything about it.', translation: 'Eles não souberam nada sobre isso.', options: ['did not know', 'do not know', 'does not know', 'was not knowing'], correctAnswer: 'did not know', points: 10 },
      { id: 'psn-4', sectionId: 'past-simple', type: 'multiple-choice', question: 'He ___ me yesterday.', translation: 'Ele não me ligou ontem.', options: ['did not call', 'do not call', 'does not call', 'was not calling'], correctAnswer: 'did not call', points: 10 },
      { id: 'psn-5', sectionId: 'past-simple', type: 'multiple-choice', question: 'We ___ home early.', translation: 'Não voltamos para casa cedo.', options: ['did not come', 'do not come', 'does not come', 'were not coming'], correctAnswer: 'did not come', points: 10 },
      { id: 'psn-6', sectionId: 'past-simple', type: 'multiple-choice', question: 'She ___ the truth.', translation: 'Ela não disse a verdade.', options: ['did not say', 'do not say', 'does not say', 'was not saying'], correctAnswer: 'did not say', points: 10 },
      { id: 'psn-7', sectionId: 'past-simple', type: 'multiple-choice', question: 'They ___ very happy.', translation: 'Eles não ficaram muito felizes.', options: ['did not become', 'do not become', 'does not become', 'were not becoming'], correctAnswer: 'did not become', points: 10 },
      { id: 'psn-8', sectionId: 'past-simple', type: 'multiple-choice', question: 'I ___ that before.', translation: 'Eu não vi isso antes.', options: ['did not see', 'do not see', 'does not see', 'was not seeing'], correctAnswer: 'did not see', points: 10 },
      { id: 'psn-9', sectionId: 'past-simple', type: 'multiple-choice', question: 'He ___ the book.', translation: 'Ele não leu o livro.', options: ['did not read', 'do not read', 'does not read', 'was not reading'], correctAnswer: 'did not read', points: 10 },
      { id: 'psn-10', sectionId: 'past-simple', type: 'multiple-choice', question: 'We ___ anything.', translation: 'Não fizemos nada.', options: ['did not do', 'do not do', 'does not do', 'were not doing'], correctAnswer: 'did not do', points: 10 }
    ]
  },
  {
    id: 'time-expressions-past-1',
    title: 'Time Expressions - Past',
    description: 'Time words for past tenses',
    icon: '⏰',
    exercises: [
      { id: 'tep-1', sectionId: 'past-simple', type: 'multiple-choice', question: 'I saw her ___.', translation: 'Eu a vi ontem.', options: ['yesterday', 'today', 'tomorrow', 'every day'], correctAnswer: 'yesterday', points: 10 },
      { id: 'tep-2', sectionId: 'past-simple', type: 'multiple-choice', question: 'They came ___.', translation: 'Eles vieram semana passada.', options: ['last week', 'next week', 'every week', 'this week'], correctAnswer: 'last week', points: 10 },
      { id: 'tep-3', sectionId: 'past-simple', type: 'multiple-choice', question: 'She was born ___.', translation: 'Ela nasceu em 1990.', options: ['in 1990', 'at 1990', 'on 1990', 'since 1990'], correctAnswer: 'in 1990', points: 10 },
      { id: 'tep-4', sectionId: 'past-simple', type: 'multiple-choice', question: 'We went to the beach ___.', translation: 'Fomos à praia no verão passado.', options: ['last summer', 'next summer', 'every summer', 'this summer'], correctAnswer: 'last summer', points: 10 },
      { id: 'tep-5', sectionId: 'past-continuous', type: 'multiple-choice', question: 'I was sleeping ___.', translation: 'Eu estava dormindo quando você ligou.', options: ['when you called', 'every night', 'always', 'usually'], correctAnswer: 'when you called', points: 10 },
      { id: 'tep-6', sectionId: 'past-simple', type: 'multiple-choice', question: 'He arrived ___.', translation: 'Ele chegou há dois dias.', options: ['two days ago', 'every day', 'usually', 'sometimes'], correctAnswer: 'two days ago', points: 10 },
      { id: 'tep-7', sectionId: 'past-simple', type: 'multiple-choice', question: 'We met ___ night.', translation: 'Nos encontramos ontem à noite.', options: ['last', 'every', 'next', 'this'], correctAnswer: 'last', points: 10 },
      { id: 'tep-8', sectionId: 'past-continuous', type: 'multiple-choice', question: 'They were playing ___.', translation: 'They were playing at 5pm.', options: ['at 5pm', 'every day', 'yesterday', 'last week'], correctAnswer: 'at 5pm', points: 10 },
      { id: 'tep-9', sectionId: 'past-simple', type: 'multiple-choice', question: 'I was born ___.', translation: 'Nasci em março.', options: ['in March', 'at March', 'on March', 'since March'], correctAnswer: 'in March', points: 10 },
      { id: 'tep-10', sectionId: 'past-simple', type: 'multiple-choice', question: 'She left ___.', translation: 'Ela partiu na segunda-feira.', options: ['on Monday', 'in Monday', 'at Monday', 'since Monday'], correctAnswer: 'on Monday', points: 10 }
    ]
  },
  {
    id: 'past-continuous-negative-1',
    title: 'Past Continuous Negative',
    description: 'Negative in Past Continuous',
    icon: '❌',
    exercises: [
      { id: 'pcn-1', sectionId: 'past-continuous', type: 'multiple-choice', question: 'I ___ when you called.', translation: 'Eu não estava dormindo quando você ligou.', options: ['was not sleeping', 'were not sleeping', 'did not sleep', 'am not sleeping'], correctAnswer: 'was not sleeping', points: 10 },
      { id: 'pcn-2', sectionId: 'past-continuous', type: 'multiple-choice', question: 'She ___ when I arrived.', translation: 'Ela não estava cozinha quando eu arrivei.', options: ['was not cooking', 'were not cooking', 'did not cook', 'is not cooking'], correctAnswer: 'was not cooking', points: 10 },
      { id: 'pcn-3', sectionId: 'past-continuous', type: 'multiple-choice', question: 'They ___ when the phone rang.', translation: 'They were not playing when the phone rang.', options: ['were not playing', 'was not playing', 'did not play', 'are not playing'], correctAnswer: 'were not playing', points: 10 },
      { id: 'pcn-4', sectionId: 'past-continuous', type: 'multiple-choice', question: 'He ___ when I saw him.', translation: 'Ele não estava correndo quando eu o vi.', options: ['was not running', 'were not running', 'did not run', 'is not running'], correctAnswer: 'was not running', points: 10 },
      { id: 'pcn-5', sectionId: 'past-continuous', type: 'multiple-choice', question: 'We ___ at that time.', translation: 'Não estávamos trabalhando naquele horário.', options: ['were not working', 'was not working', 'did not work', 'are not working'], correctAnswer: 'were not working', points: 10 },
      { id: 'pcn-6', sectionId: 'past-continuous', type: 'multiple-choice', question: 'It ___ when we left.', translation: 'Não estava chovendo quando saímos.', options: ['was not raining', 'were not raining', 'did not rain', 'is not raining'], correctAnswer: 'was not raining', points: 10 },
      { id: 'pcn-7', sectionId: 'past-continuous', type: 'multiple-choice', question: 'She ___ while I was there.', translation: 'Ela não estava estudando enquanto eu estava lá.', options: ['was not studying', 'were not studying', 'did not study', 'is not studying'], correctAnswer: 'was not studying', points: 10 },
      { id: 'pcn-8', sectionId: 'past-continuous', type: 'multiple-choice', question: 'They ___ at the party.', translation: 'Não estavam dançando na festa.', options: ['were not dancing', 'was not dancing', 'did not dance', 'are not dancing'], correctAnswer: 'were not dancing', points: 10 },
      { id: 'pcn-9', sectionId: 'past-continuous', type: 'multiple-choice', question: 'He ___ when I entered.', translation: 'Ele não estava trabalhando quando eu entrei.', options: ['was not working', 'were not working', 'did not work', 'is not working'], correctAnswer: 'was not working', points: 10 },
      { id: 'pcn-10', sectionId: 'past-continuous', type: 'multiple-choice', question: 'We ___ anything.', translation: 'Não estávamos fazendo nada.', options: ['were not doing', 'was not doing', 'did not do', 'are not doing'], correctAnswer: 'were not doing', points: 10 }
    ]
  },
  {
    id: 'past-continuous-vs-simple-1',
    title: 'Past Continuous vs Simple',
    description: 'Duration vs moment in past',
    icon: '⚖️',
    exercises: [
      { id: 'pcs-1', sectionId: 'past-continuous', type: 'multiple-choice', question: 'I ___ TV when he called.', translation: 'Eu estava assistindo TV quando ele ligou.', options: ['was watching', 'watched', 'were watching', 'watch'], correctAnswer: 'was watching', points: 10 },
      { id: 'pcs-2', sectionId: 'past-simple', type: 'multiple-choice', question: 'He ___ three books last week.', translation: 'Ele leu três livros semana passada.', options: ['read', 'was reading', 'were reading', 'reads'], correctAnswer: 'read', points: 10 },
      { id: 'pcs-3', sectionId: 'past-continuous', type: 'multiple-choice', question: 'They ___ all day yesterday.', translation: 'They were working all day yesterday.', options: ['were working', 'worked', 'was working', 'work'], correctAnswer: 'were working', points: 10 },
      { id: 'pcs-4', sectionId: 'past-simple', type: 'multiple-choice', question: 'She ___ the letter quickly.', translation: 'Ela escreveu a carta rapidamente.', options: ['wrote', 'was writing', 'were writing', 'writes'], correctAnswer: 'wrote', points: 10 },
      { id: 'pcs-5', sectionId: 'past-continuous', type: 'multiple-choice', question: 'We ___ for an hour.', translation: 'Estávamos esperando por uma hora.', options: ['were waiting', 'waited', 'was waiting', 'wait'], correctAnswer: 'were waiting', points: 10 },
      { id: 'pcs-6', sectionId: 'past-simple', type: 'multiple-choice', question: 'He ___ the race in 10 minutes.', translation: 'Ele completou a corrida em 10 minutos.', options: ['finished', 'was finishing', 'were finishing', 'finishes'], correctAnswer: 'finished', points: 10 },
      { id: 'pcs-7', sectionId: 'past-continuous', type: 'multiple-choice', question: 'The phone ___ while I ___ .', translation: 'O telefone tocou enquanto eu estava banho.', options: ['rang...was taking', 'rings...was taking', 'ringed...was taking', 'rings...took'], correctAnswer: 'rang...was taking', points: 10 },
      { id: 'pcs-8', sectionId: 'past-simple', type: 'multiple-choice', question: 'She ___ at 5pm.', translation: 'Ela saiu às 17h.', options: ['left', 'was leaving', 'were leaving', 'leaves'], correctAnswer: 'left', points: 10 },
      { id: 'pcs-9', sectionId: 'past-continuous', type: 'multiple-choice', question: 'They ___ when the accident happened.', translation: 'They were driving when the accident happened.', options: ['were driving', 'drove', 'was driving', 'drive'], correctAnswer: 'were driving', points: 10 },
      { id: 'pcs-10', sectionId: 'past-simple', type: 'multiple-choice', question: 'The car ___ suddenly.', translation: 'O carro parou de repente.', options: ['stopped', 'was stopping', 'were stopping', 'stops'], correctAnswer: 'stopped', points: 10 }
    ]
  },
  {
    id: 'past-simple-regular-1',
    title: 'Past Simple Regular Verbs',
    description: 'Practice regular verb endings',
    icon: '📝',
    exercises: [
      { id: 'psr-1', sectionId: 'past-simple', type: 'multiple-choice', question: 'Yesterday, I ___ to the store.', translation: 'Yesterday, I walked to the store.', options: ['walk', 'walked', 'walking', 'walks'], correctAnswer: 'walked', points: 10 },
      { id: 'psr-2', sectionId: 'past-simple', type: 'multiple-choice', question: 'She ___ the book yesterday.', translation: 'She finished the book yesterday.', options: ['finish', 'finished', 'finishing', 'finishes'], correctAnswer: 'finished', points: 10 },
      { id: 'psr-3', sectionId: 'past-simple', type: 'multiple-choice', question: 'They ___ English last year.', translation: 'They studied English last year.', options: ['study', 'studied', 'studying', 'studies'], correctAnswer: 'studied', points: 10 },
      { id: 'psr-4', sectionId: 'past-simple', type: 'multiple-choice', question: 'He ___ home late.', translation: 'He arrived home late.', options: ['arrive', 'arrived', 'arriving', 'arrives'], correctAnswer: 'arrived', points: 10 },
      { id: 'psr-5', sectionId: 'past-simple', type: 'multiple-choice', question: 'We ___ a lot of money.', translation: 'We earned a lot of money.', options: ['earn', 'earned', 'earning', 'earns'], correctAnswer: 'earned', points: 10 },
      { id: 'psr-6', sectionId: 'past-simple', type: 'multiple-choice', question: 'She ___ the puzzle.', translation: 'She solved the puzzle.', options: ['solve', 'solved', 'solving', 'solves'], correctAnswer: 'solved', points: 10 },
      { id: 'psr-7', sectionId: 'past-simple', type: 'multiple-choice', question: 'They ___ the project on time.', translation: 'They completed the project on time.', options: ['complete', 'completed', 'completing', 'completes'], correctAnswer: 'completed', points: 10 },
      { id: 'psr-8', sectionId: 'past-simple', type: 'multiple-choice', question: 'I ___ my homework.', translation: 'I forgot my homework.', options: ['forget', 'forgot', 'forgetting', 'forgets'], correctAnswer: 'forgot', points: 10 },
      { id: 'psr-9', sectionId: 'past-simple', type: 'multiple-choice', question: 'He ___ the news.', translation: 'He shared the news.', options: ['share', 'shared', 'sharing', 'shares'], correctAnswer: 'shared', points: 10 },
      { id: 'psr-10', sectionId: 'past-simple', type: 'multiple-choice', question: 'We ___ a decision.', translation: 'We made a decision.', options: ['make', 'made', 'making', 'makes'], correctAnswer: 'made', points: 10 }
    ]
  },
  {
    id: 'past-simple-irregular-1',
    title: 'Past Simple Irregular Verbs',
    description: 'Common irregular verbs',
    icon: '🔴',
    exercises: [
      { id: 'psi-1', sectionId: 'past-simple', type: 'multiple-choice', question: 'I ___ to the party last night.', translation: 'I went to the party last night.', options: ['go', 'went', 'gone', 'going'], correctAnswer: 'went', points: 10 },
      { id: 'psi-2', sectionId: 'past-simple', type: 'multiple-choice', question: 'She ___ a beautiful dress.', translation: 'She bought a beautiful dress.', options: ['buy', 'bought', 'buying', 'buys'], correctAnswer: 'bought', points: 10 },
      { id: 'psi-3', sectionId: 'past-simple', type: 'multiple-choice', question: 'They ___ the truth.', translation: 'They knew the truth.', options: ['know', 'knew', 'known', 'knowing'], correctAnswer: 'knew', points: 10 },
      { id: 'psi-4', sectionId: 'past-simple', type: 'multiple-choice', question: 'He ___ a lot of food.', translation: 'He ate a lot of food.', options: ['eat', 'ate', 'eaten', 'eating'], correctAnswer: 'ate', points: 10 },
      { id: 'psi-5', sectionId: 'past-simple', type: 'multiple-choice', question: 'We ___ early.', translation: 'We woke up early.', options: ['wake', 'woke', 'woken', 'waking'], correctAnswer: 'woke', points: 10 },
      { id: 'psi-6', sectionId: 'past-simple', type: 'multiple-choice', question: 'She ___ the letter.', translation: 'She wrote the letter.', options: ['write', 'wrote', 'written', 'writing'], correctAnswer: 'wrote', points: 10 },
      { id: 'psi-7', sectionId: 'past-simple', type: 'multiple-choice', question: 'They ___ the game.', translation: 'They won the game.', options: ['win', 'won', 'winning', 'wins'], correctAnswer: 'won', points: 10 },
      { id: 'psi-8', sectionId: 'past-simple', type: 'multiple-choice', question: 'I ___ my keys.', translation: 'I lost my keys.', options: ['lose', 'lost', 'losing', 'loses'], correctAnswer: 'lost', points: 10 },
      { id: 'psi-9', sectionId: 'past-simple', type: 'multiple-choice', question: 'He ___ the truth.', translation: 'He told the truth.', options: ['tell', 'told', 'telling', 'tells'], correctAnswer: 'told', points: 10 },
      { id: 'psi-10', sectionId: 'past-simple', type: 'multiple-choice', question: 'We ___ a great time.', translation: 'We had a great time.', options: ['have', 'had', 'having', 'has'], correctAnswer: 'had', points: 10 }
    ]
  },
  {
    id: 'past-continuous-1',
    title: 'Past Continuous Duration',
    description: 'Actions in progress in past',
    icon: '⏳',
    exercises: [
      { id: 'pcd-1', sectionId: 'past-continuous', type: 'multiple-choice', question: 'I ___ when the phone rang.', translation: 'I was sleeping when the phone rang.', options: ['was sleeping', 'slept', 'were sleeping', 'sleep'], correctAnswer: 'was sleeping', points: 10 },
      { id: 'pcd-2', sectionId: 'past-continuous', type: 'multiple-choice', question: 'They ___ when I arrived.', translation: 'They were eating when I arrived.', options: ['were eating', 'ate', 'were ate', 'eating'], correctAnswer: 'were eating', points: 10 },
      { id: 'pcd-3', sectionId: 'past-continuous', type: 'multiple-choice', question: 'She ___ all morning.', translation: 'She was working all morning.', options: ['was working', 'worked', 'were working', 'work'], correctAnswer: 'was working', points: 10 },
      { id: 'pcd-4', sectionId: 'past-continuous', type: 'multiple-choice', question: 'We ___ for an hour.', translation: 'We were waiting for an hour.', options: ['were waiting', 'waited', 'was waiting', 'wait'], correctAnswer: 'were waiting', points: 10 },
      { id: 'pcd-5', sectionId: 'past-continuous', type: 'multiple-choice', question: 'He ___ TV at midnight.', translation: 'He was watching TV at midnight.', options: ['was watching', 'watched', 'were watching', 'watch'], correctAnswer: 'was watching', points: 10 },
      { id: 'pcd-6', sectionId: 'past-continuous', type: 'multiple-choice', question: 'The children ___ outside.', translation: 'The children were playing outside.', options: ['were playing', 'played', 'was playing', 'play'], correctAnswer: 'were playing', points: 10 },
      { id: 'pcd-7', sectionId: 'past-continuous', type: 'multiple-choice', question: 'I ___ my homework.', translation: 'I was doing my homework.', options: ['was doing', 'did', 'were doing', 'do'], correctAnswer: 'was doing', points: 10 },
      { id: 'pcd-8', sectionId: 'past-continuous', type: 'multiple-choice', question: 'She ___ to music.', translation: 'She was listening to music.', options: ['was listening', 'listened', 'were listening', 'listen'], correctAnswer: 'was listening', points: 10 },
      { id: 'pcd-9', sectionId: 'past-continuous', type: 'multiple-choice', question: 'They ___ in the garden.', translation: 'They were planting in the garden.', options: ['were planting', 'planted', 'was planting', 'plant'], correctAnswer: 'were planting', points: 10 },
      { id: 'pcd-10', sectionId: 'past-continuous', type: 'multiple-choice', question: 'We ___ for the bus.', translation: 'We were waiting for the bus.', options: ['were waiting', 'waited', 'was waiting', 'wait'], correctAnswer: 'were waiting', points: 10 }
    ]
  },
  {
    id: 'past-perfect-1',
    title: 'Past Perfect',
    description: 'Completed action before past',
    icon: '✅',
    exercises: [
      { id: 'pp-1', sectionId: 'past-perfect', type: 'multiple-choice', question: 'By the time I arrived, she ___ .', translation: 'By the time I arrived, she had left.', options: ['left', 'has left', 'had left', 'leaves'], correctAnswer: 'had left', points: 10 },
      { id: 'pp-2', sectionId: 'past-perfect', type: 'multiple-choice', question: 'They ___ before we came.', translation: 'They had finished before we came.', options: ['finished', 'have finished', 'had finished', 'finishing'], correctAnswer: 'had finished', points: 10 },
      { id: 'pp-3', sectionId: 'past-perfect', type: 'multiple-choice', question: 'She ___ the movie before.', translation: 'She had seen the movie before.', options: ['saw', 'seen', 'had seen', 'see'], correctAnswer: 'had seen', points: 10 },
      { id: 'pp-4', sectionId: 'past-perfect', type: 'multiple-choice', question: 'He ___ to London twice.', translation: 'He had been to London twice.', options: ['went', 'been', 'had been', 'was'], correctAnswer: 'had been', points: 10 },
      { id: 'pp-5', sectionId: 'past-perfect', type: 'multiple-choice', question: 'We ___ the work before noon.', translation: 'We had done the work before noon.', options: ['did', 'done', 'had done', 'doing'], correctAnswer: 'had done', points: 10 },
      { id: 'pp-6', sectionId: 'past-perfect', type: 'multiple-choice', question: 'I ___ him before.', translation: 'I had met him before.', options: ['met', 'meet', 'had met', 'meeting'], correctAnswer: 'had met', points: 10 },
      { id: 'pp-7', sectionId: 'past-perfect', type: 'multiple-choice', question: 'The train ___ before we got there.', translation: 'The train had left before we got there.', options: ['left', 'leave', 'had left', 'leaving'], correctAnswer: 'had left', points: 10 },
      { id: 'pp-8', sectionId: 'past-perfect', type: 'multiple-choice', question: 'She ___ all her money.', translation: 'She had spent all her money.', options: ['spent', 'spend', 'had spent', 'spending'], correctAnswer: 'had spent', points: 10 },
      { id: 'pp-9', sectionId: 'past-perfect', type: 'multiple-choice', question: 'They ___ the book.', translation: 'They had written the book.', options: ['wrote', 'written', 'had written', 'writing'], correctAnswer: 'had written', points: 10 },
      { id: 'pp-10', sectionId: 'past-perfect', type: 'multiple-choice', question: 'I ___ the truth.', translation: 'I had known the truth.', options: ['knew', 'known', 'had known', 'knowing'], correctAnswer: 'had known', points: 10 }
    ]
  },
  {
    id: 'past-perfect-continuous-1',
    title: 'Past Perfect Continuous',
    description: 'Duration before past action',
    icon: '⏱️',
    exercises: [
      { id: 'ppc-1', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'She ___ for hours before she stopped.', translation: 'She had been working for hours before she stopped.', options: ['was working', 'had been working', 'worked', 'working'], correctAnswer: 'had been working', points: 10 },
      { id: 'ppc-2', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'They ___ for two hours.', translation: 'They had been waiting for two hours.', options: ['were waiting', 'had been waiting', 'waited', 'waiting'], correctAnswer: 'had been waiting', points: 10 },
      { id: 'ppc-3', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'He ___ all day.', translation: 'He had been studying all day.', options: ['was studying', 'had been studying', 'studied', 'studying'], correctAnswer: 'had been studying', points: 10 },
      { id: 'ppc-4', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'We ___ for months.', translation: 'We had been planning for months.', options: ['were planning', 'had been planning', 'planned', 'planning'], correctAnswer: 'had been planning', points: 10 },
      { id: 'ppc-5', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'I ___ before the accident.', translation: 'I had been driving before the accident.', options: ['was driving', 'had been driving', 'drove', 'driving'], correctAnswer: 'had been driving', points: 10 },
      { id: 'ppc-6', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'She ___ before she called.', translation: 'She had been crying before she called.', options: ['was crying', 'had been crying', 'cried', 'crying'], correctAnswer: 'had been crying', points: 10 },
      { id: 'ppc-7', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'They ___ before the meeting.', translation: 'They had been discussing before the meeting.', options: ['were discussing', 'had been discussing', 'discussed', 'discussing'], correctAnswer: 'had been discussing', points: 10 },
      { id: 'ppc-8', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'He ___ for a year.', translation: 'He had been living here for a year.', options: ['was living', 'had been living', 'lived', 'living'], correctAnswer: 'had been living', points: 10 },
      { id: 'ppc-9', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'We ___ all morning.', translation: 'We had been painting all morning.', options: ['were painting', 'had been painting', 'painted', 'painting'], correctAnswer: 'had been painting', points: 10 },
      { id: 'ppc-10', sectionId: 'past-perfect-cont', type: 'multiple-choice', question: 'They ___ for weeks.', translation: 'They had been arguing for weeks.', options: ['were arguing', 'had been arguing', 'argued', 'arguing'], correctAnswer: 'had been arguing', points: 10 }
    ]
  },
  {
    id: 'past-simple-questions-1',
    title: 'Past Simple Questions',
    description: 'Questions in past simple',
    icon: '❓',
    exercises: [
      { id: 'psq-1', sectionId: 'past-simple', type: 'multiple-choice', question: '___ you ___ to school yesterday?', translation: 'Did you go to school yesterday?', options: ['Did...go', 'Do...went', 'Does...go', 'Was...going'], correctAnswer: 'Did...go', points: 10 },
      { id: 'psq-2', sectionId: 'past-simple', type: 'multiple-choice', question: 'What ___ she ___ last night?', translation: 'What did she do last night?', options: ['did...do', 'does...did', 'was...doing', 'were...doing'], correctAnswer: 'did...do', points: 10 },
      { id: 'psq-3', sectionId: 'past-simple', type: 'multiple-choice', question: 'When ___ they ___ ?', translation: 'When did they arrive?', options: ['did...arrive', 'does...arrive', 'was...arriving', 'were...arriving'], correctAnswer: 'did...arrive', points: 10 },
      { id: 'psq-4', sectionId: 'past-simple', type: 'multiple-choice', question: 'Where ___ he ___ yesterday?', translation: 'Where did he go yesterday?', options: ['did...go', 'does...go', 'was...going', 'were...going'], correctAnswer: 'did...go', points: 10 },
      { id: 'psq-5', sectionId: 'past-simple', type: 'multiple-choice', question: 'Why ___ you ___ ?', translation: 'Why did you call?', options: ['did...call', 'does...call', 'was...calling', 'were...calling'], correctAnswer: 'did...call', points: 10 },
      { id: 'psq-6', sectionId: 'past-simple', type: 'multiple-choice', question: 'Who ___ you ___ ?', translation: 'Who did you see?', options: ['did...see', 'does...see', 'was...seeing', 'were...seeing'], correctAnswer: 'did...see', points: 10 },
      { id: 'psq-7', sectionId: 'past-simple', type: 'multiple-choice', question: 'How ___ the movie ___ ?', translation: 'How did the movie end?', options: ['did...end', 'does...end', 'was...ending', 'were...ending'], correctAnswer: 'did...end', points: 10 },
      { id: 'psq-8', sectionId: 'past-simple', type: 'multiple-choice', question: 'What time ___ she ___ ?', translation: 'What time did she leave?', options: ['did...leave', 'does...leave', 'was...leaving', 'were...leaving'], correctAnswer: 'did...leave', points: 10 },
      { id: 'psq-9', sectionId: 'past-simple', type: 'multiple-choice', question: '___ he ___ the truth?', translation: 'Did he tell the truth?', options: ['Did', 'Does', 'Was', 'Were'], correctAnswer: 'Did', points: 10 },
      { id: 'psq-10', sectionId: 'past-simple', type: 'multiple-choice', question: 'Where ___ they ___ last summer?', translation: 'Where did they travel last summer?', options: ['did...travel', 'does...travel', 'was...traveling', 'were...traveling'], correctAnswer: 'did...travel', points: 10 }
    ]
  },
  {
    id: 'past-simple-negative-1',
    title: 'Past Simple Negative',
    description: 'Negative sentences in past simple',
    icon: '❌',
    exercises: [
      { id: 'psn-1', sectionId: 'past-simple', type: 'multiple-choice', question: 'She ___ to the party.', translation: 'She did not go to the party.', options: ['did not go', 'does not go', 'not go', 'no go'], correctAnswer: 'did not go', points: 10 },
      { id: 'psn-2', sectionId: 'past-simple', type: 'multiple-choice', question: 'They ___ the movie.', translation: 'They did not watch the movie.', options: ['did not watch', 'does not watch', 'not watch', 'no watch'], correctAnswer: 'did not watch', points: 10 },
      { id: 'psn-3', sectionId: 'past-simple', type: 'multiple-choice', question: 'He ___ early.', translation: 'He did not wake up early.', options: ['did not wake', 'does not wake', 'not wake', 'no wake'], correctAnswer: 'did not wake', points: 10 },
      { id: 'psn-4', sectionId: 'past-simple', type: 'multiple-choice', question: 'We ___ the test.', translation: 'We did not pass the test.', options: ['did not pass', 'does not pass', 'not pass', 'no pass'], correctAnswer: 'did not pass', points: 10 },
      { id: 'psn-5', sectionId: 'past-simple', type: 'multiple-choice', question: 'I ___ coffee.', translation: 'I did not drink coffee.', options: ['did not drink', 'does not drink', 'not drink', 'no drink'], correctAnswer: 'did not drink', points: 10 },
      { id: 'psn-6', sectionId: 'past-simple', type: 'multiple-choice', question: 'She ___ the book.', translation: 'She did not finish the book.', options: ['did not finish', 'does not finish', 'not finish', 'no finish'], correctAnswer: 'did not finish', points: 10 },
      { id: 'psn-7', sectionId: 'past-simple', type: 'multiple-choice', question: 'They ___ home.', translation: 'They did not come home.', options: ['did not come', 'does not come', 'not come', 'no come'], correctAnswer: 'did not come', points: 10 },
      { id: 'psn-8', sectionId: 'past-simple', type: 'multiple-choice', question: 'He ___ the work.', translation: 'He did not do the work.', options: ['did not do', 'does not do', 'not do', 'no do'], correctAnswer: 'did not do', points: 10 },
      { id: 'psn-9', sectionId: 'past-simple', type: 'multiple-choice', question: 'We ___ happy.', translation: 'We were not happy.', options: ['was not', 'were not', 'did not', 'does not'], correctAnswer: 'were not', points: 10 },
      { id: 'psn-10', sectionId: 'past-simple', type: 'multiple-choice', question: 'She ___ busy.', translation: 'She was not busy.', options: ['was not', 'were not', 'did not', 'does not'], correctAnswer: 'was not', points: 10 }
    ]
  },
  {
    id: 'past-continuous-questions-1',
    title: 'Past Continuous Questions',
    description: 'Questions in past continuous',
    icon: '❓',
    exercises: [
      { id: 'pcq-1', sectionId: 'past-continuous', type: 'multiple-choice', question: 'What ___ you ___ when I called?', translation: 'What were you doing when I called?', options: ['were...doing', 'was...doing', 'did...do', 'does...do'], correctAnswer: 'were...doing', points: 10 },
      { id: 'pcq-2', sectionId: 'past-continuous', type: 'multiple-choice', question: 'Where ___ she ___ ?', translation: 'Where was she going?', options: ['was...going', 'were...going', 'did...go', 'does...go'], correctAnswer: 'was...going', points: 10 },
      { id: 'pcq-3', sectionId: 'past-continuous', type: 'multiple-choice', question: 'Who ___ they ___ with?', translation: 'Who were they talking with?', options: ['were...talking', 'was...talking', 'did...talk', 'does...talk'], correctAnswer: 'were...talking', points: 10 },
      { id: 'pcq-4', sectionId: 'past-continuous', type: 'multiple-choice', question: 'Why ___ he ___ ?', translation: 'Why was he crying?', options: ['was...crying', 'were...crying', 'did...cry', 'does...cry'], correctAnswer: 'was...crying', points: 10 },
      { id: 'pcq-5', sectionId: 'past-continuous', type: 'multiple-choice', question: 'What ___ they ___ ?', translation: 'What were they eating?', options: ['were...eating', 'was...eating', 'did...eat', 'does...eat'], correctAnswer: 'were...eating', points: 10 },
      { id: 'pcq-6', sectionId: 'past-continuous', type: 'multiple-choice', question: 'When ___ we ___ ?', translation: 'When were we waiting?', options: ['were...waiting', 'was...waiting', 'did...wait', 'does...wait'], correctAnswer: 'were...waiting', points: 10 },
      { id: 'pcq-7', sectionId: 'past-continuous', type: 'multiple-choice', question: 'How ___ it ___ ?', translation: 'How was it going?', options: ['was...going', 'were...going', 'did...go', 'does...go'], correctAnswer: 'was...going', points: 10 },
      { id: 'pcq-8', sectionId: 'past-continuous', type: 'multiple-choice', question: 'Why ___ you ___ ?', translation: 'Why were you laughing?', options: ['were...laughing', 'was...laughing', 'did...laugh', 'does...laugh'], correctAnswer: 'were...laughing', points: 10 },
      { id: 'pcq-9', sectionId: 'past-continuous', type: 'multiple-choice', question: 'Where ___ they ___ ?', translation: 'Where were they staying?', options: ['were...staying', 'was...staying', 'did...stay', 'does...stay'], correctAnswer: 'were...staying', points: 10 },
      { id: 'pcq-10', sectionId: 'past-continuous', type: 'multiple-choice', question: 'What ___ she ___ ?', translation: 'What was she cooking?', options: ['was...cooking', 'were...cooking', 'did...cook', 'does...cook'], correctAnswer: 'was...cooking', points: 10 }
    ]
  },
  {
    id: 'past-continuous-negative-1',
    title: 'Past Continuous Negative',
    description: 'Negative in past continuous',
    icon: '❌',
    exercises: [
      { id: 'pcn-1', sectionId: 'past-continuous', type: 'multiple-choice', question: 'She ___ now.', translation: 'She was not sleeping now.', options: ['was not sleeping', 'not was sleeping', 'were not sleeping', 'not were sleeping'], correctAnswer: 'was not sleeping', points: 10 },
      { id: 'pcn-2', sectionId: 'past-continuous', type: 'multiple-choice', question: 'They ___ at that time.', translation: 'They were not working at that time.', options: ['were not working', 'not were working', 'was not working', 'not was working'], correctAnswer: 'were not working', points: 10 },
      { id: 'pcn-3', sectionId: 'past-continuous', type: 'multiple-choice', question: 'I ___ at 5pm.', translation: 'I was not studying at 5pm.', options: ['was not studying', 'not was studying', 'were not studying', 'not were studying'], correctAnswer: 'was not studying', points: 10 },
      { id: 'pcn-4', sectionId: 'past-continuous', type: 'multiple-choice', question: 'He ___ then.', translation: 'He was not driving then.', options: ['was not driving', 'not was driving', 'were not driving', 'not were driving'], correctAnswer: 'was not driving', points: 10 },
      { id: 'pcn-5', sectionId: 'past-continuous', type: 'multiple-choice', question: 'We ___ yesterday.', translation: 'We were not traveling yesterday.', options: ['were not traveling', 'not were traveling', 'was not traveling', 'not was traveling'], correctAnswer: 'were not traveling', points: 10 },
      { id: 'pcn-6', sectionId: 'past-continuous', type: 'multiple-choice', question: 'She ___ then.', translation: 'She was not waiting then.', options: ['was not waiting', 'not was waiting', 'were not waiting', 'not were waiting'], correctAnswer: 'was not waiting', points: 10 },
      { id: 'pcn-7', sectionId: 'past-continuous', type: 'multiple-choice', question: 'They ___ in the garden.', translation: 'They were not playing in the garden.', options: ['were not playing', 'not were playing', 'was not playing', 'not was playing'], correctAnswer: 'were not playing', points: 10 },
      { id: 'pcn-8', sectionId: 'past-continuous', type: 'multiple-choice', question: 'I ___ at that moment.', translation: 'I was not eating at that moment.', options: ['was not eating', 'not was eating', 'were not eating', 'not were eating'], correctAnswer: 'was not eating', points: 10 },
      { id: 'pcn-9', sectionId: 'past-continuous', type: 'multiple-choice', question: 'He ___ on the phone.', translation: 'He was not talking on the phone.', options: ['was not talking', 'not was talking', 'were not talking', 'not were talking'], correctAnswer: 'was not talking', points: 10 },
      { id: 'pcn-10', sectionId: 'past-continuous', type: 'multiple-choice', question: 'We ___ to music.', translation: 'We were not listening to music.', options: ['were not listening', 'not were listening', 'was not listening', 'not was listening'], correctAnswer: 'were not listening', points: 10 }
    ]
  },
  {
    id: 'time-expressions-past-1',
    title: 'Time Expressions Past',
    description: 'Time markers for past tenses',
    icon: '⏰',
    exercises: [
      { id: 'tep-1', sectionId: 'past-simple', type: 'multiple-choice', question: 'I saw her ___.', translation: 'I saw her yesterday.', options: ['yesterday', 'today', 'tomorrow', 'now'], correctAnswer: 'yesterday', points: 10 },
      { id: 'tep-2', sectionId: 'past-continuous', type: 'multiple-choice', question: 'They were working ___ afternoon.', translation: 'They were working all afternoon.', options: ['all the', 'tomorrow', 'today', 'next week'], correctAnswer: 'all the', points: 10 },
      { id: 'tep-3', sectionId: 'past-simple', type: 'multiple-choice', question: 'She came here ___ week.', translation: 'She came here last week.', options: ['last', 'next', 'this', 'every'], correctAnswer: 'last', points: 10 },
      { id: 'tep-4', sectionId: 'past-continuous', type: 'multiple-choice', question: 'He was reading ___ .', translation: 'He was reading when I came.', options: ['when I came', 'yesterday', 'last week', 'every day'], correctAnswer: 'when I came', points: 10 },
      { id: 'tep-5', sectionId: 'past-simple', type: 'multiple-choice', question: 'We went to the beach ___.', translation: 'We went to the beach last summer.', options: ['last summer', 'next summer', 'every summer', 'this summer'], correctAnswer: 'last summer', points: 10 },
      { id: 'tep-6', sectionId: 'past-continuous', type: 'multiple-choice', question: 'I was waiting ___ .', translation: 'I was waiting for an hour.', options: ['for an hour', 'yesterday', 'last week', 'always'], correctAnswer: 'for an hour', points: 10 },
      { id: 'tep-7', sectionId: 'past-simple', type: 'multiple-choice', question: 'He called me ___.', translation: 'He called me last night.', options: ['last night', 'tonight', 'today', 'tomorrow'], correctAnswer: 'last night', points: 10 },
      { id: 'tep-8', sectionId: 'past-continuous', type: 'multiple-choice', question: 'They were ___ the party.', translation: 'They were preparing for the party.', options: ['preparing for', 'yesterday', 'last week', 'always'], correctAnswer: 'preparing for', points: 10 },
      { id: 'tep-9', sectionId: 'past-simple', type: 'multiple-choice', question: 'I studied ___.', translation: 'I studied last night.', options: ['last night', 'tonight', 'tomorrow', 'now'], correctAnswer: 'last night', points: 10 },
      { id: 'tep-10', sectionId: 'past-continuous', type: 'multiple-choice', question: 'She was reading ___ .', translation: 'She was reading at midnight.', options: ['at midnight', 'yesterday', 'last week', 'every day'], correctAnswer: 'at midnight', points: 10 }
    ]
  }
];

export const pastTensesQuizPacks: QuizPack[] = [
  {
    id: 'past-quiz',
    title: 'Past Tenses Quiz',
    description: 'Test your past tense knowledge',
    icon: '🎯',
    quiz: {
      id: 'past-quiz',
      title: 'Past Tenses Quiz',
      description: 'Test your knowledge of Past Simple and Continuous',
      passingScore: 70,
      xpReward: 50,
      gemReward: 3,
      timeLimit: 300,
      questions: [
        { id: 'pq-1', sectionId: 'past-simple', type: 'multiple-choice', question: 'He ___ to the store yesterday.', translation: 'He went to the store yesterday.', options: ['go', 'goes', 'going', 'went'], correctAnswer: 'went', points: 10 },
        { id: 'pq-2', sectionId: 'past-continuous', type: 'multiple-choice', question: 'At 6pm, I ___ dinner.', translation: 'At 6pm, I was making dinner.', options: ['make', 'makes', 'was making', 'made'], correctAnswer: 'was making', points: 10 },
        { id: 'pq-3', sectionId: 'past-simple', type: 'multiple-choice', question: 'They ___ the exam last week.', translation: 'They passed the exam last week.', options: ['pass', 'passes', 'passing', 'passed'], correctAnswer: 'passed', points: 10 },
        { id: 'pq-4', sectionId: 'past-continuous', type: 'multiple-choice', question: 'She ___ when I saw her.', translation: 'She was crying when I saw her.', options: ['cry', 'cries', 'was crying', 'cried'], correctAnswer: 'was crying', points: 10 }
      ]
    }
  }
];