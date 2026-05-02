import { ExercisePack, QuizPack } from '../academy';

export const futureTensesExercisePacks: ExercisePack[] = [
  {
    id: 'future-will-1',
    title: 'Future with WILL',
    description: 'Practice WILL for predictions',
    icon: '📝',
    exercises: [
      { id: 'fw-ex1', sectionId: 'fut-will', type: 'multiple-choice', question: 'I think it ___ tomorrow.', translation: 'I think it will rain tomorrow.', options: ['rain', 'rains', 'raining', 'rained'], correctAnswer: 'rain', points: 10 },
      { id: 'fw-ex2', sectionId: 'fut-will', type: 'multiple-choice', question: 'She ___ help you.', translation: 'She will help you.', options: ['will', 'wills', 'will to', 'willing'], correctAnswer: 'will', points: 10 },
      { id: 'fw-ex3', sectionId: 'fut-will', type: 'fill-blank', question: 'It ___ be fun.', translation: 'It will be fun.', correctAnswer: 'will', explanation: 'Use WILL for predictions.', points: 15 }
    ]
  },
  {
    id: 'future-going-to-1',
    title: 'Future with GOING TO',
    description: 'Practice GOING TO for plans',
    icon: '🔄',
    exercises: [
      { id: 'fg-ex1', sectionId: 'fut-going', type: 'multiple-choice', question: 'I ___ study medicine.', translation: 'I am going to study medicine.', options: ['am going to', 'will', 'going to', 'go to'], correctAnswer: 'am going to', points: 10 },
      { id: 'fg-ex2', sectionId: 'fut-going', type: 'multiple-choice', question: 'They ___ the party tonight.', translation: 'They are going to the party tonight.', options: ['will go', 'are going to', 'going to go', 'go to'], correctAnswer: 'are going to', points: 10 },
      { id: 'fg-ex3', sectionId: 'fut-going', type: 'fill-blank', question: 'She ___ a new car.', translation: 'She is going to buy a new car.', correctAnswer: 'is going to buy', explanation: 'Use GOING TO for plans.', points: 15 }
    ]
  },
  {
    id: 'future-present-simple',
    title: 'Present Simple for Future',
    description: 'Schedule and timetables',
    icon: '⚖️',
    exercises: [
      { id: 'fps-ex1', sectionId: 'fut-simple', type: 'multiple-choice', question: 'The train ___ at 3pm.', translation: 'The train leaves at 3pm.', options: ['leave', 'leaves', 'leaving', 'left'], correctAnswer: 'leaves', points: 10 },
      { id: 'fps-ex2', sectionId: 'fut-simple', type: 'multiple-choice', question: 'The movie ___ at 8pm.', translation: 'The movie starts at 8pm.', options: ['start', 'starts', 'starting', 'started'], correctAnswer: 'starts', points: 10 },
      { id: 'fps-ex3', sectionId: 'fut-simple', type: 'multiple-choice', question: 'The flight ___ at 10am.', translation: 'O voo decola às 10h.', options: ['take off', 'takes off', 'taking off', 'took off'], correctAnswer: 'takes off', points: 10 },
      { id: 'fps-ex4', sectionId: 'fut-simple', type: 'multiple-choice', question: 'The meeting ___ at 2pm.', translation: 'A reunião começa às 14h.', options: ['begin', 'begins', 'beginning', 'began'], correctAnswer: 'begins', points: 10 },
      { id: 'fps-ex5', sectionId: 'fut-simple', type: 'multiple-choice', question: 'The store ___ at 9am tomorrow.', translation: 'A loja abre às 9h amanhã.', options: ['open', 'opens', 'opening', 'opened'], correctAnswer: 'opens', points: 10 }
    ]
  },
  {
    id: 'future-continuous',
    title: 'Future Continuous',
    description: 'Will be + verb-ing',
    icon: '⏰',
    exercises: [
      { id: 'fc-ex1', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'At this time tomorrow, I ___ to the beach.', translation: 'At this time tomorrow, I will be going to the beach.', options: ['will go', 'will be going', 'am going', 'go'], correctAnswer: 'will be going', points: 10 },
      { id: 'fc-ex2', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'They ___ the project tomorrow.', translation: 'They will be working on the project tomorrow.', options: ['will work', 'will be working', 'are working', 'work'], correctAnswer: 'will be working', points: 10 },
      { id: 'fc-ex3', sectionId: 'fut-continuous', type: 'fill-blank', question: 'She ___ at 8pm tomorrow.', translation: 'Ela estará jantando às 20h amanhã.', correctAnswer: 'will be eating', explanation: 'Use Future Continuous for actions in progress at a specific future time.', points: 15 },
      { id: 'fc-ex4', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'This time next week, we ___ in Paris.', translation: 'Esta hora da próxima semana, estivemos em Paris.', options: ['will be', 'will be being', 'are', 'were'], correctAnswer: 'will be', points: 10 },
      { id: 'fc-ex5', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'I ___ for you at the station.', translation: 'Eu estarei te esperando na estação.', options: ['will wait', 'will be waiting', 'am waiting', 'wait'], correctAnswer: 'will be waiting', points: 10 },
      { id: 'fc-ex6', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'He ___ at the office.', translation: 'Ele estará no escritório.', options: ['will', 'will be', 'is', 'was'], correctAnswer: 'will be', points: 10 },
      { id: 'fc-ex7', sectionId: 'fut-continuous', type: 'fill-blank', question: 'They ___ the whole day.', translation: 'Eles estarão trabalhando o dia todo.', correctAnswer: 'will be working', explanation: 'Use Future Continuous for ongoing actions.', points: 15 },
      { id: 'fc-ex8', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'We ___ at the hotel.', translation: 'Nós estaremos inúmera no hotel.', options: ['will stay', 'will be staying', 'stay', 'staying'], correctAnswer: 'will be staying', points: 10 },
      { id: 'fc-ex9', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'I ___ during the meeting.', translation: 'Eu estarei apresentando durante a reunião.', options: ['present', 'will present', 'will be presenting', 'presenting'], correctAnswer: 'will be presenting', points: 10 },
      { id: 'fc-ex10', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'She ___ for the exam.', translation: 'Ela estará estudando para a prova.', options: ['will study', 'will be studying', 'studies', 'studying'], correctAnswer: 'will be studying', points: 10 }
    ]
  },
  {
    id: 'future-perfect',
    title: 'Future Perfect',
    description: 'Will have + past participle',
    icon: '✨',
    exercises: [
      { id: 'fp-ex1', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'By next year, I ___ this course.', translation: 'By next year, I will have finished this course.', options: ['finish', 'will finish', 'will have finished', 'finished'], correctAnswer: 'will have finished', points: 10 },
      { id: 'fp-ex2', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'She ___ the project by Friday.', translation: 'She will have completed the project by Friday.', options: ['complete', 'will complete', 'will have completed', 'completed'], correctAnswer: 'will have completed', points: 10 },
      { id: 'fp-ex3', sectionId: 'fut-perfect', type: 'fill-blank', question: 'By tomorrow, they ___ .', translation: 'Até amanhã, eles terão viajado.', correctAnswer: 'will have traveled', explanation: 'Use Future Perfect for actions completed before a future point.', points: 15 },
      { id: 'fp-ex4', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'I ___ 1000 pages by the end of the month.', translation: 'Eu terei lido 1000 páginas até o fim do mês.', options: ['read', 'will read', 'will have read', 'reading'], correctAnswer: 'will have read', points: 10 },
      { id: 'fp-ex5', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'They ___ here for five years.', translation: 'They will have been here for five years.', options: ['be', 'will be', 'will have been', 'been'], correctAnswer: 'will have been', points: 10 },
      { id: 'fp-ex6', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'By next month, he ___ the book.', translation: 'By next month, he will have written the book.', options: ['write', 'will write', 'will have written', 'wrote'], correctAnswer: 'will have written', points: 10 },
      { id: 'fp-ex7', sectionId: 'fut-perfect', type: 'fill-blank', question: 'We ___ all the work.', translation: 'Nós teremos feito todo o trabalho até sexta.', correctAnswer: 'will have done', explanation: 'Use Future Perfect with "by".', points: 15 },
      { id: 'fp-ex8', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'By evening, she ___ the report.', translation: 'By evening, she will have finished the report.', options: ['finish', 'will finish', 'will have finished', 'finished'], correctAnswer: 'will have finished', points: 10 },
      { id: 'fp-ex9', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'They ___ all the money.', translation: 'They will have spent all the money.', options: ['spend', 'will spend', 'will have spent', 'spent'], correctAnswer: 'will have spent', points: 10 },
      { id: 'fp-ex10', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'I ___ English for ten years.', translation: 'Eu terei estudado inglês por dez anos.', options: ['study', 'will study', 'will have studied', 'studied'], correctAnswer: 'will have studied', points: 10 }
    ]
  },
  {
    id: 'future-perfect-continuous',
    title: 'Future Perfect Continuous',
    description: 'Will have been + verb-ing',
    icon: '⏳',
    exercises: [
      { id: 'fpc-ex1', sectionId: 'fut-perfect-cont', type: 'multiple-choice', question: 'By next month, she ___ here for a year.', translation: 'By next month, she will have been working here for a year.', options: ['work', 'will work', 'will have been working', 'working'], correctAnswer: 'will have been working', points: 10 },
      { id: 'fpc-ex2', sectionId: 'fut-perfect-cont', type: 'multiple-choice', question: 'By the time we arrive, they ___ for hours.', translation: 'By the time we arrive, they will have been waiting for hours.', options: ['wait', 'will wait', 'will have been waiting', 'waiting'], correctAnswer: 'will have been waiting', points: 10 },
      { id: 'fpc-ex3', sectionId: 'fut-perfect-cont', type: 'fill-blank', question: 'By next year, I ___ here.', translation: 'Até o próximo ano, eu estarei trabalhando aqui.', correctAnswer: 'will have been working', explanation: 'Use Future Perfect Continuous for duration up to a point.', points: 15 },
      { id: 'fpc-ex4', sectionId: 'fut-perfect-cont', type: 'multiple-choice', question: 'By the end of the month, he ___ this project.', translation: 'By the end of the month, he will have been managing this project.', options: ['manage', 'will manage', 'will have been managing', 'managing'], correctAnswer: 'will have been managing', points: 10 },
      { id: 'fpc-ex5', sectionId: 'fut-perfect-cont', type: 'multiple-choice', question: 'By next week, we ___ here.', translation: 'By next week, we will have been staying here.', options: ['stay', 'will stay', 'will have been staying', 'staying'], correctAnswer: 'will have been staying', points: 10 },
      { id: 'fpc-ex6', sectionId: 'fut-perfect-cont', type: 'multiple-choice', question: 'By tomorrow, they ___ the problem.', translation: 'By tomorrow, they will have been analyzing the problem.', options: ['analyze', 'will analyze', 'will have been analyzing', 'analyzing'], correctAnswer: 'will have been analyzing', points: 10 },
      { id: 'fpc-ex7', sectionId: 'fut-perfect-cont', type: 'fill-blank', question: 'By the end of the year, we ___ this house.', translation: 'Até o fim do ano,我们会住在这个房子里。', correctAnswer: 'will have been living', explanation: 'Use Future Perfect Continuous for ongoing actions.', points: 15 },
      { id: 'fpc-ex8', sectionId: 'fut-perfect-cont', type: 'multiple-choice', question: 'By tonight, I ___ this book.', translation: 'By tonight, I will have been reading this book.', options: ['read', 'will read', 'will have been reading', 'reading'], correctAnswer: 'will have been reading', points: 10 },
      { id: 'fpc-ex9', sectionId: 'fut-perfect-cont', type: 'multiple-choice', question: 'By next summer, they ___ married.', translation: 'By next summer, they will have been married.', options: ['be', 'will be', 'will have been', 'been'], correctAnswer: 'will have been', points: 10 },
      { id: 'fpc-ex10', sectionId: 'fut-perfect-cont', type: 'multiple-choice', question: 'By the time the movie starts, we ___ .', translation: 'By the time the movie starts, we will have been waiting.', options: ['wait', 'will wait', 'will have been waiting', 'waiting'], correctAnswer: 'will have been waiting', points: 10 }
    ]
  },
  // More Future Tenses Packs
  {
    id: 'future-going-to-plans-1',
    title: 'Going to - Plans & Intentions',
    description: 'Plans and intentions with going to',
    icon: '📋',
    exercises: [
      { id: 'fgtp-1', sectionId: 'fut-going', type: 'multiple-choice', question: 'I ___ a new car next month.', translation: 'Eu vou comprar um novo carro no próximo mês.', options: ['am going to buy', 'will buy', 'buy', 'buying'], correctAnswer: 'am going to buy', points: 10 },
      { id: 'fgtp-2', sectionId: 'fut-going', type: 'multiple-choice', question: 'She ___ to university next year.', translation: 'Ela vai para a universidade no próximo ano.', options: ['is going', 'will go', 'goes', 'going'], correctAnswer: 'is going', points: 10 },
      { id: 'fgtp-3', sectionId: 'fut-going', type: 'multiple-choice', question: 'They ___ their wedding in June.', translation: 'Eles vão casar em junho.', options: ['are having', 'will have', 'have', 'having'], correctAnswer: 'are having', points: 10 },
      { id: 'fgtp-4', sectionId: 'fut-going', type: 'multiple-choice', question: 'We ___ the house next week.', translation: 'Vamos mudar para a casa semana que vem.', options: ['are moving', 'will move', 'move', 'moving'], correctAnswer: 'are moving', points: 10 },
      { id: 'fgtp-5', sectionId: 'fut-going', type: 'multiple-choice', question: 'He ___ a party for his birthday.', translation: 'Ele vai fazer uma festa de aniversário.', options: ['is having', 'will have', 'has', 'having'], correctAnswer: 'is having', points: 10 },
      { id: 'fgtp-6', sectionId: 'fut-going', type: 'multiple-choice', question: 'I ___ a new job soon.', translation: 'Eu vou procurar um novo emprego em breve.', options: ['am going to find', 'will find', 'find', 'finding'], correctAnswer: 'am going to find', points: 10 },
      { id: 'fgtp-7', sectionId: 'fut-going', type: 'multiple-choice', question: 'She ___ her English.', translation: 'Ela vai melhorar o inglês dela.', options: ['is going to improve', 'will improve', 'improve', 'improving'], correctAnswer: 'is going to improve', points: 10 },
      { id: 'fgtp-8', sectionId: 'fut-going', type: 'multiple-choice', question: 'They ___ their own business.', translation: 'Eles vão abrir o próprio negócio.', options: ['are going to start', 'will start', 'start', 'starting'], correctAnswer: 'are going to start', points: 10 },
      { id: 'fgtp-9', sectionId: 'fut-going', type: 'multiple-choice', question: 'We ___ more exercise.', translation: 'Vamos fazer mais exercício.', options: ['are going to do', 'will do', 'do', 'doing'], correctAnswer: 'are going to do', points: 10 },
      { id: 'fgtp-10', sectionId: 'fut-going', type: 'multiple-choice', question: 'I ___ less sugar.', translation: 'Eu vou comer menos açúcar.', options: ['am going to eat', 'will eat', 'eat', 'eating'], correctAnswer: 'am going to eat', points: 10 }
    ]
  },
  {
    id: 'future-going-to-predictions-1',
    title: 'Going to - Predictions',
    description: 'Predictions based on evidence',
    icon: '🔮',
    exercises: [
      { id: 'fgtpr-1', sectionId: 'fut-going', type: 'multiple-choice', question: 'Look at those clouds! It ___ rain.', translation: 'Olha aquelas nuvens! Vai chover.', options: ['is going to', 'will', 'is', 'does'], correctAnswer: 'is going to', points: 10 },
      { id: 'fgtpr-2', sectionId: 'fut-going', type: 'multiple-choice', question: 'She is studying hard. She ___ the exam.', translation: 'Ela está estudando muito. Ela vai passar na prova.', options: ['is going to pass', 'will pass', 'passes', 'passed'], correctAnswer: 'is going to pass', points: 10 },
      { id: 'fgtpr-3', sectionId: 'fut-going', type: 'multiple-choice', question: 'The team is practicing. They ___ the match.', translation: 'O time está treinando. Eles vão ganhar o jogo.', options: ['are going to win', 'will win', 'wins', 'won'], correctAnswer: 'are going to win', points: 10 },
      { id: 'fgtpr-4', sectionId: 'fut-going', type: 'multiple-choice', question: 'He is getting a promotion. He ___ more money.', translation: 'Ele está sendo promovido. Vai ganhar mais dinheiro.', options: ['is going to earn', 'will earn', 'earns', 'earned'], correctAnswer: 'is going to earn', points: 10 },
      { id: 'fgtpr-5', sectionId: 'fut-going', type: 'multiple-choice', question: 'The economy is improving. Things ___ better.', translation: 'A economia está melhorando. As coisas vão ficar melhores.', options: ['are going to get', 'will get', 'gets', 'got'], correctAnswer: 'are going to get', points: 10 },
      { id: 'fgtpr-6', sectionId: 'fut-going', type: 'multiple-choice', question: 'The roads are very busy. It ___ a long time to get home.', translation: 'As estradas estão muito movimentadas. Vai demorar muito para chegar em casa.', options: ['is going to take', 'will take', 'takes', 'took'], correctAnswer: 'is going to take', points: 10 },
      { id: 'fgtpr-7', sectionId: 'fut-going', type: 'multiple-choice', question: 'She is very talented. She ___ famous.', translation: 'Ela é muito talentosa. Ela vai ficar famosa.', options: ['is going to become', 'will become', 'becomes', 'became'], correctAnswer: 'is going to become', points: 10 },
      { id: 'fgtpr-8', sectionId: 'fut-going', type: 'multiple-choice', question: 'The price of gold is going up. It ___ more expensive.', translation: 'O preço do ouro está subindo. Vai ficar mais caro.', options: ['is going to get', 'will get', 'gets', 'got'], correctAnswer: 'is going to get', points: 10 },
      { id: 'fgtpr-9', sectionId: 'fut-going', type: 'multiple-choice', question: 'Technology is advancing. Everything ___ digital.', translation: 'A tecnologia está avançando. Tudo vai ficar digital.', options: ['is going to become', 'will become', 'becomes', 'became'], correctAnswer: 'is going to become', points: 10 },
      { id: 'fgtpr-10', sectionId: 'fut-going', type: 'multiple-choice', question: 'He is training every day. He ___ the competition.', translation: 'Ele está treinando todo dia. Vai vencer a competição.', options: ['is going to win', 'will win', 'wins', 'won'], correctAnswer: 'is going to win', points: 10 }
    ]
  },
  {
    id: 'will-predictions-1',
    title: 'WILL - Predictions',
    description: 'Predictions with will',
    icon: '🔮',
    exercises: [
      { id: 'fwp-1', sectionId: 'fut-will', type: 'multiple-choice', question: 'I think it ___ hot tomorrow.', translation: 'Acho que vai estar quente amanhã.', options: ['will be', 'is', 'was', 'will have'], correctAnswer: 'will be', points: 10 },
      { id: 'fwp-2', sectionId: 'fut-will', type: 'multiple-choice', question: 'People ___ robots in the future.', translation: 'As pessoas terão robôs no futuro.', options: ['will have', 'have', 'had', 'has'], correctAnswer: 'will have', points: 10 },
      { id: 'fwp-3', sectionId: 'fut-will', type: 'multiple-choice', question: 'The world ___ more peaceful.', translation: 'O mundo vai ficar mais pacífico.', options: ['will be', 'is', 'was', 'be'], correctAnswer: 'will be', points: 10 },
      { id: 'fwp-4', sectionId: 'fut-will', type: 'multiple-choice', question: 'There ___ more electric cars.', translation: 'Haverá mais carros elétricos.', options: ['will be', 'is', 'are', 'was'], correctAnswer: 'will be', points: 10 },
      { id: 'fwp-5', sectionId: 'fut-will', type: 'multiple-choice', question: 'I believe she ___ successful.', translation: 'Acredito que ela será bem-sucedida.', options: ['will be', 'is', 'was', 'are'], correctAnswer: 'will be', points: 10 },
      { id: 'fwp-6', sectionId: 'fut-will', type: 'multiple-choice', question: 'Technology ___ our lives easier.', translation: 'A tecnologia vai facilitar nossas vidas.', options: ['will make', 'makes', 'made', 'make'], correctAnswer: 'will make', points: 10 },
      { id: 'fwp-7', sectionId: 'fut-will', type: 'multiple-choice', question: 'In 2050, people ___ longer.', translation: 'Em 2050, as pessoas viverão mais.', options: ['will live', 'live', 'lived', 'living'], correctAnswer: 'will live', points: 10 },
      { id: 'fwp-8', sectionId: 'fut-will', type: 'multiple-choice', question: 'The weather ___ nice this weekend.', translation: 'O clima vai ficar agradável neste fim de semana.', options: ['will be', 'is', 'was', 'be'], correctAnswer: 'will be', points: 10 },
      { id: 'fwp-9', sectionId: 'fut-will', type: 'multiple-choice', question: 'I think the company ___ profit this year.', translation: 'Acho que a empresa terá lucro este ano.', options: ['will make', 'makes', 'made', 'making'], correctAnswer: 'will make', points: 10 },
      { id: 'fwp-10', sectionId: 'fut-will', type: 'multiple-choice', question: 'In the future, we ___ on other planets.', translation: 'No futuro, viveremos em outros planetas.', options: ['will live', 'live', 'lived', 'living'], correctAnswer: 'will live', points: 10 }
    ]
  },
  {
    id: 'will-spontaneous-1',
    title: 'WILL - Spontaneous Decisions',
    description: 'Decisions made at the moment',
    icon: '⚡',
    exercises: [
      { id: 'fws-1', sectionId: 'fut-will', type: 'multiple-choice', question: 'I ___ you a ride. Get in!', translation: 'Te dou uma carona. Entra!', options: ['will give', 'give', 'am going to give', 'give'], correctAnswer: 'will give', points: 10 },
      { id: 'fws-2', sectionId: 'fut-will', type: 'multiple-choice', question: 'Wait! I ___ you some money.', translation: 'Espere! Te dou um dinheiro.', options: ['will lend', 'lend', 'am going to lend', 'lending'], correctAnswer: 'will lend', points: 10 },
      { id: 'fws-3', sectionId: 'fut-will', type: 'multiple-choice', question: 'The phone is ringing. I ___ it.', translation: 'O telefone está tocando. Atendo.', options: ['will answer', 'answer', 'am going to answer', 'answering'], correctAnswer: 'will answer', points: 10 },
      { id: 'fws-4', sectionId: 'fut-will', type: 'multiple-choice', question: 'You look tired. I ___ you a coffee.', translation: 'Você parece cansado. Te pago um café.', options: ['will buy', 'buy', 'am going to buy', 'buying'], correctAnswer: 'will buy', points: 10 },
      { id: 'fws-5', sectionId: 'fut-will', type: 'multiple-choice', question: 'It\'s dark. I ___ the lights.', translation: 'Está escuro. Acendo as luzes.', options: ['will turn on', 'turn on', 'am going to turn on', 'turning on'], correctAnswer: 'will turn on', points: 10 },
      { id: 'fws-6', sectionId: 'fut-will', type: 'multiple-choice', question: 'I forgot my keys. I ___ back home.', translation: 'Esqueci as chaves. Volto para casa.', options: ['will go', 'go', 'am going to go', 'going'], correctAnswer: 'will go', points: 10 },
      { id: 'fws-7', sectionId: 'fut-will', type: 'multiple-choice', question: 'The dinner smells great! I ___ a bite.', translation: 'O jantar cheira ótimo! Provo um gole.', options: ['will take', 'take', 'am going to take', 'taking'], correctAnswer: 'will take', points: 10 },
      { id: 'fws-8', sectionId: 'fut-will', type: 'multiple-choice', question: 'I see you\'re struggling. I ___ you.', translation: 'Vejo que você está com dificuldade. Ajudo.', options: ['will help', 'help', 'am going to help', 'helping'], correctAnswer: 'will help', points: 10 },
      { id: 'fws-9', sectionId: 'fut-will', type: 'multiple-choice', question: 'You need a signature. I ___ it for you.', translation: 'Você precisa de uma assinatura. Assino para você.', options: ['will sign', 'sign', 'am going to sign', 'signing'], correctAnswer: 'will sign', points: 10 },
      { id: 'fws-10', sectionId: 'fut-will', type: 'multiple-choice', question: 'I\'m hungry. I ___ something to eat.', translation: 'Estou com fome. Pego algo para comer.', options: ['will get', 'get', 'am going to get', 'getting'], correctAnswer: 'will get', points: 10 }
    ]
  },
  {
    id: 'will-promises-1',
    title: 'WILL - Promises',
    description: 'Promises with will',
    icon: '🤝',
    exercises: [
      { id: 'fwprom-1', sectionId: 'fut-will', type: 'multiple-choice', question: 'I ___ always be there for you.', translation: 'Sempre estarei lá para você.', options: ['will', 'am going to', 'can', 'must'], correctAnswer: 'will', points: 10 },
      { id: 'fwprom-2', sectionId: 'fut-will', type: 'multiple-choice', question: 'I ___ call you tomorrow.', translation: 'Vou te ligar amanhã.', options: ['will', 'am going to', 'can', 'should'], correctAnswer: 'will', points: 10 },
      { id: 'fwprom-3', sectionId: 'fut-will', type: 'multiple-choice', question: 'We ___ never give up.', translation: 'Nunca desistiremos.', options: ['will', 'are going to', 'can', 'should'], correctAnswer: 'will', points: 10 },
      { id: 'fwprom-4', sectionId: 'fut-will', type: 'multiple-choice', question: 'I ___ do my best.', translation: 'Vou fazer o meu melhor.', options: ['will', 'am going to', 'can', 'should'], correctAnswer: 'will', points: 10 },
      { id: 'fwprom-5', sectionId: 'fut-will', type: 'multiple-choice', question: 'I ___ keep your secret.', translation: 'Vou manter seu segredo.', options: ['will', 'am going to', 'can', 'might'], correctAnswer: 'will', points: 10 },
      { id: 'fwprom-6', sectionId: 'fut-will', type: 'multiple-choice', question: 'We ___ always love you.', translation: 'Sempre vamos amar você.', options: ['will', 'are going to', 'can', 'must'], correctAnswer: 'will', points: 10 },
      { id: 'fwprom-7', sectionId: 'fut-will', type: 'multiple-choice', question: 'I ___ be on time.', translation: 'Vou chegar no horário.', options: ['will', 'am going to', 'can', 'should'], correctAnswer: 'will', points: 10 },
      { id: 'fwprom-8', sectionId: 'fut-will', type: 'multiple-choice', question: 'We ___ support you.', translation: 'Vamos apoiar você.', options: ['will', 'are going to', 'can', 'must'], correctAnswer: 'will', points: 10 },
      { id: 'fwprom-9', sectionId: 'fut-will', type: 'multiple-choice', question: 'I ___ never lie to you.', translation: 'Nunca vou mentir para você.', options: ['will', 'am going to', 'can', 'might'], correctAnswer: 'will', points: 10 },
      { id: 'fwprom-10', sectionId: 'fut-will', type: 'multiple-choice', question: 'I ___ remember this forever.', translation: 'Vou lembrar disso para sempre.', options: ['will', 'am going to', 'can', 'should'], correctAnswer: 'will', points: 10 }
    ]
  },
  {
    id: 'will-refusals-1',
    title: 'WILL - Refusals',
    description: 'Negative predictions and refusals',
    icon: '🚫',
    exercises: [
      { id: 'fwref-1', sectionId: 'fut-will', type: 'multiple-choice', question: 'I ___ help you if you ask nicely.', translation: 'Vou ajudar você se pedir educadamente.', options: ['will', 'won\'t', 'can', 'can\'t'], correctAnswer: 'will', points: 10 },
      { id: 'fwref-2', sectionId: 'fut-will', type: 'multiple-choice', question: 'She ___ wait any longer.', translation: 'Ela não vai esperar mais.', options: ['will', 'won\'t', 'can', 'can\'t'], correctAnswer: 'won\'t', points: 10 },
      { id: 'fwref-3', sectionId: 'fut-will', type: 'multiple-choice', question: 'It ___ happen again.', translation: 'Não vai acontecer de novo.', options: ['will', 'won\'t', 'can', 'can\'t'], correctAnswer: 'won\'t', points: 10 },
      { id: 'fwref-4', sectionId: 'fut-will', type: 'multiple-choice', question: 'I ___ let you down.', translation: 'Não vou decepcionar você.', options: ['will', 'won\'t', 'can', 'can\'t'], correctAnswer: 'won\'t', points: 10 },
      { id: 'fwref-5', sectionId: 'fut-will', type: 'multiple-choice', question: 'They ___ accept this.', translation: 'Não vão aceitar isso.', options: ['will', 'won\'t', 'can', 'can\'t'], correctAnswer: 'won\'t', points: 10 },
      { id: 'fwref-6', sectionId: 'fut-will', type: 'multiple-choice', question: 'He ___ change his mind.', translation: 'Ele não vai mudar de ideia.', options: ['will', 'won\'t', 'can', 'can\'t'], correctAnswer: 'won\'t', points: 10 },
      { id: 'fwref-7', sectionId: 'fut-will', type: 'multiple-choice', question: 'We ___ give up easily.', translation: 'Não vamos desistir facilmente.', options: ['will', 'won\'t', 'can', 'can\'t'], correctAnswer: 'won\'t', points: 10 },
      { id: 'fwref-8', sectionId: 'fut-will', type: 'multiple-choice', question: 'I ___ tell anyone.', translation: 'Não vou contar para ninguém.', options: ['will', 'won\'t', 'can', 'can\'t'], correctAnswer: 'won\'t', points: 10 },
      { id: 'fwref-9', sectionId: 'fut-will', type: 'multiple-choice', question: 'The car ___ start.', translation: 'O carro não vai pegar.', options: ['will', 'won\'t', 'can', 'can\'t'], correctAnswer: 'won\'t', points: 10 },
      { id: 'fwref-10', sectionId: 'fut-will', type: 'multiple-choice', question: 'She ___ agree to this.', translation: 'Ela não vai concordar com isso.', options: ['will', 'won\'t', 'can', 'can\'t'], correctAnswer: 'won\'t', points: 10 }
    ]
  },
  {
    id: 'future-simple-schedule-1',
    title: 'Present Simple - Scheduled Events',
    description: 'Timetables and schedules',
    icon: '📅',
    exercises: [
      { id: 'fss-1', sectionId: 'fut-simple', type: 'multiple-choice', question: 'The train ___ at 6pm.', translation: 'O trem parte às 18h.', options: ['leaves', 'will leave', 'is leaving', 'left'], correctAnswer: 'leaves', points: 10 },
      { id: 'fss-2', sectionId: 'fut-simple', type: 'multiple-choice', question: 'The movie ___ at 9pm.', translation: 'O filme começa às 21h.', options: ['starts', 'will start', 'is starting', 'started'], correctAnswer: 'starts', points: 10 },
      { id: 'fss-3', sectionId: 'fut-simple', type: 'multiple-choice', question: 'My flight ___ tomorrow at noon.', translation: 'Meu voo é amanhã ao meio-dia.', options: ['departs', 'will depart', 'is departing', 'departed'], correctAnswer: 'departs', points: 10 },
      { id: 'fss-4', sectionId: 'fut-simple', type: 'multiple-choice', question: 'The bank ___ at 5pm.', translation: 'O banco fecha às 17h.', options: ['closes', 'will close', 'is closing', 'closed'], correctAnswer: 'closes', points: 10 },
      { id: 'fss-5', sectionId: 'fut-simple', type: 'multiple-choice', question: 'The concert ___ next Friday.', translation: 'O show é na próxima sexta.', options: ['is', 'will be', 'is being', 'was'], correctAnswer: 'is', points: 10 },
      { id: 'fss-6', sectionId: 'fut-simple', type: 'multiple-choice', question: 'The plane ___ in 30 minutes.', translation: 'O avião decola em 30 minutos.', options: ['takes off', 'will take off', 'is taking off', 'took off'], correctAnswer: 'takes off', points: 10 },
      { id: 'fss-7', sectionId: 'fut-simple', type: 'multiple-choice', question: 'The meeting ___ at 3pm today.', translation: 'A reunião é às 15h hoje.', options: ['is', 'will be', 'is being', 'was'], correctAnswer: 'is', points: 10 },
      { id: 'fss-8', sectionId: 'fut-simple', type: 'multiple-choice', question: 'The bus ___ every hour.', translation: 'O ônibus sai a cada hora.', options: ['leaves', 'will leave', 'is leaving', 'left'], correctAnswer: 'leaves', points: 10 },
      { id: 'fss-9', sectionId: 'fut-simple', type: 'multiple-choice', question: 'The shop ___ at 8am.', translation: 'A loja abre às 8h.', options: ['opens', 'will open', 'is opening', 'opened'], correctAnswer: 'opens', points: 10 },
      { id: 'fss-10', sectionId: 'fut-simple', type: 'multiple-choice', question: 'The play ___ next month.', translation: 'A peça é no próximo mês.', options: ['is', 'will be', 'is being', 'was'], correctAnswer: 'is', points: 10 }
    ]
  },
  {
    id: 'future-questions-1',
    title: 'Future Tenses - Questions',
    description: 'Questions about the future',
    icon: '❓',
    exercises: [
      { id: 'fq-1', sectionId: 'fut-questions', type: 'multiple-choice', question: '___ you be there tomorrow?', translation: 'Você estará lá amanhã?', options: ['Will', 'Are', 'Were', 'Do'], correctAnswer: 'Will', points: 10 },
      { id: 'fq-2', sectionId: 'fut-questions', type: 'multiple-choice', question: 'What ___ you do this weekend?', translation: 'O que você vai fazer neste fim de semana?', options: ['will', 'are', 'do', 'did'], correctAnswer: 'will', points: 10 },
      { id: 'fq-3', sectionId: 'fut-questions', type: 'multiple-choice', question: 'When ___ the train arrive?', translation: 'Quando o trem vai chegar?', options: ['will', 'does', 'did', 'is'], correctAnswer: 'will', points: 10 },
      { id: 'fq-4', sectionId: 'fut-questions', type: 'multiple-choice', question: 'Where ___ she be next year?', translation: 'Onde ela estará no próximo ano?', options: ['will', 'is', 'was', 'does'], correctAnswer: 'will', points: 10 },
      { id: 'fq-5', sectionId: 'fut-questions', type: 'multiple-choice', question: 'Who ___ come to the party?', translation: 'Quem vai vir para a festa?', options: ['will', 'is', 'are', 'do'], correctAnswer: 'will', points: 10 },
      { id: 'fq-6', sectionId: 'fut-questions', type: 'multiple-choice', question: 'How long ___ it take to get there?', translation: 'Quanto tempo vai demorar para chegar lá?', options: ['will', 'does', 'did', 'is'], correctAnswer: 'will', points: 10 },
      { id: 'fq-7', sectionId: 'fut-questions', type: 'multiple-choice', question: 'What time ___ the meeting start?', translation: 'Que horas a reunião vai começar?', options: ['will', 'does', 'did', 'is'], correctAnswer: 'will', points: 10 },
      { id: 'fq-8', sectionId: 'fut-questions', type: 'multiple-choice', question: '___ we meet at the café?', translation: 'Nos encontramos no café?', options: ['Will', 'Are', 'Did', 'Do'], correctAnswer: 'Will', points: 10 },
      { id: 'fq-9', sectionId: 'fut-questions', type: 'multiple-choice', question: 'What ___ happen next?', translation: 'O que vai acontecer?', options: ['will', 'is', 'was', 'does'], correctAnswer: 'will', points: 10 },
      { id: 'fq-10', sectionId: 'fut-questions', type: 'multiple-choice', question: 'When ___ you be back?', translation: 'Quando você vai voltar?', options: ['will', 'are', 'did', 'do'], correctAnswer: 'will', points: 10 }
    ]
  },
  {
    id: 'future-negative-1',
    title: 'Future Tenses - Negative',
    description: 'Negative sentences',
    icon: '❌',
    exercises: [
      { id: 'fn-1', sectionId: 'fut-negative', type: 'multiple-choice', question: 'I ___ be there.', translation: 'Não estarei lá.', options: ['won\'t', 'will not', 'am not going to', 'am not'], correctAnswer: 'won\'t', points: 10 },
      { id: 'fn-2', sectionId: 'fut-negative', type: 'multiple-choice', question: 'She ___ come to the party.', translation: 'Ela não vai vir para a festa.', options: ['won\'t', 'will not', 'is not going to', 'does not'], correctAnswer: 'won\'t', points: 10 },
      { id: 'fn-3', sectionId: 'fut-negative', type: 'multiple-choice', question: 'They ___ be late.', translation: 'Não vão se atrasar.', options: ['won\'t', 'will not', 'are not going to', 'are not'], correctAnswer: 'won\'t', points: 10 },
      { id: 'fn-4', sectionId: 'fut-negative', type: 'multiple-choice', question: 'We ___ go there.', translation: 'Não vamos lá.', options: ['won\'t', 'will not', 'are not going to', 'do not'], correctAnswer: 'won\'t', points: 10 },
      { id: 'fn-5', sectionId: 'fut-negative', type: 'multiple-choice', question: 'He ___ be happy about this.', translation: 'Ele não vai ficar feliz com isso.', options: ['won\'t', 'will not', 'is not going to', 'does not'], correctAnswer: 'won\'t', points: 10 },
      { id: 'fn-6', sectionId: 'fut-negative', type: 'multiple-choice', question: 'It ___ rain tomorrow.', translation: 'Não vai chover amanhã.', options: ['won\'t', 'will not', 'is not going to', 'does not'], correctAnswer: 'won\'t', points: 10 },
      { id: 'fn-7', sectionId: 'fut-negative', type: 'multiple-choice', question: 'I ___ forget you.', translation: 'Não vou esquecer de você.', options: ['won\'t', 'will not', 'am not going to', 'am not'], correctAnswer: 'won\'t', points: 10 },
      { id: 'fn-8', sectionId: 'fut-negative', type: 'multiple-choice', question: 'We ___ be there.', translation: 'Não vamos estar lá.', options: ['won\'t', 'will not', 'are not going to', 'are not'], correctAnswer: 'won\'t', points: 10 },
      { id: 'fn-9', sectionId: 'fut-negative', type: 'multiple-choice', question: 'She ___ call you.', translation: 'Ela não vai te ligar.', options: ['won\'t', 'will not', 'is not going to', 'does not'], correctAnswer: 'won\'t', points: 10 },
      { id: 'fn-10', sectionId: 'fut-negative', type: 'multiple-choice', question: 'They ___ agree.', translation: 'Não vão concordar.', options: ['won\'t', 'will not', 'are not going to', 'do not'], correctAnswer: 'won\'t', points: 10 }
    ]
  },
  {
    id: 'future-be-going-to-neg-1',
    title: 'Going to - Negative',
    description: 'Negative going to',
    icon: '❌',
    exercises: [
      { id: 'fgn-1', sectionId: 'fut-going', type: 'multiple-choice', question: 'I ___ do that.', translation: 'Não vou fazer isso.', options: ['am not going to', 'won\'t', 'don\'t', 'not will'], correctAnswer: 'am not going to', points: 10 },
      { id: 'fgn-2', sectionId: 'fut-going', type: 'multiple-choice', question: 'She ___ come.', translation: 'Ela não vai vir.', options: ['is not going to', 'won\'t', 'doesn\'t', 'not will'], correctAnswer: 'is not going to', points: 10 },
      { id: 'fgn-3', sectionId: 'fut-going', type: 'multiple-choice', question: 'They ___ be there.', translation: 'Não vão estar lá.', options: ['are not going to', 'won\'t', 'don\'t', 'not will'], correctAnswer: 'are not going to', points: 10 },
      { id: 'fgn-4', sectionId: 'fut-going', type: 'multiple-choice', question: 'We ___ eat that.', translation: 'Não vamos comer isso.', options: ['are not going to', 'won\'t', 'don\'t', 'not will'], correctAnswer: 'are not going to', points: 10 },
      { id: 'fgn-5', sectionId: 'fut-going', type: 'multiple-choice', question: 'He ___ study medicine.', translation: 'Ele não vai estudar medicina.', options: ['is not going to', 'won\'t', 'doesn\'t', 'not will'], correctAnswer: 'is not going to', points: 10 },
      { id: 'fgn-6', sectionId: 'fut-going', type: 'multiple-choice', question: 'I ___ tell anyone.', translation: 'Não vou contar para ninguém.', options: ['am not going to', 'won\'t', 'don\'t', 'not will'], correctAnswer: 'am not going to', points: 10 },
      { id: 'fgn-7', sectionId: 'fut-going', type: 'multiple-choice', question: 'She ___ agree.', translation: 'Ela não vai concordar.', options: ['is not going to', 'won\'t', 'doesn\'t', 'not will'], correctAnswer: 'is not going to', points: 10 },
      { id: 'fgn-8', sectionId: 'fut-going', type: 'multiple-choice', question: 'They ___ forget this.', translation: 'Não vão esquecer disso.', options: ['are not going to', 'won\'t', 'don\'t', 'not will'], correctAnswer: 'are not going to', points: 10 },
      { id: 'fgn-9', sectionId: 'fut-going', type: 'multiple-choice', question: 'We ___ change.', translation: 'Não vamos mudar.', options: ['are not going to', 'won\'t', 'don\'t', 'not will'], correctAnswer: 'are not going to', points: 10 },
      { id: 'fgn-10', sectionId: 'fut-going', type: 'multiple-choice', question: 'He ___ leave early.', translation: 'Ele não vai sair cedo.', options: ['is not going to', 'won\'t', 'doesn\'t', 'not will'], correctAnswer: 'is not going to', points: 10 }
    ]
  },
  {
    id: 'future-time-expressions-1',
    title: 'Future - Time Expressions',
    description: 'Tomorrow, next week, soon',
    icon: '🕐',
    exercises: [
      { id: 'fte-1', sectionId: 'fut-time', type: 'multiple-choice', question: 'I will see you ___.', translation: 'Vou te ver amanhã.', options: ['tomorrow', 'yesterday', 'today', 'last night'], correctAnswer: 'tomorrow', points: 10 },
      { id: 'fte-2', sectionId: 'fut-time', type: 'multiple-choice', question: 'The meeting is ___ Monday.', translation: 'A reunião é na próxima segunda.', options: ['next', 'last', 'this', 'previous'], correctAnswer: 'next', points: 10 },
      { id: 'fte-3', sectionId: 'fut-time', type: 'multiple-choice', question: 'I will call you ___.', translation: 'Vou te ligar em breve.', options: ['soon', 'yesterday', 'before', 'later'], correctAnswer: 'soon', points: 10 },
      { id: 'fte-4', sectionId: 'fut-time', type: 'multiple-choice', question: 'She will be here ___ week.', translation: 'Ela vai estar aqui na próxima semana.', options: ['next', 'last', 'this', 'past'], correctAnswer: 'next', points: 10 },
      { id: 'fte-5', sectionId: 'fut-time', type: 'multiple-choice', question: 'I need it done ___.', translation: 'Preciso que seja feito logo.', options: ['as soon as possible', 'yesterday', 'last week', 'before'], correctAnswer: 'as soon as possible', points: 10 },
      { id: 'fte-6', sectionId: 'fut-time', type: 'multiple-choice', question: 'We will finish ___ year.', translation: 'Vamos terminar este ano.', options: ['this', 'next', 'last', 'previous'], correctAnswer: 'this', points: 10 },
      { id: 'fte-7', sectionId: 'fut-time', type: 'multiple-choice', question: 'I am leaving ___.', translation: 'Estou saindo agora mesmo.', options: ['right now', 'yesterday', 'before', 'then'], correctAnswer: 'right now', points: 10 },
      { id: 'fte-8', sectionId: 'fut-time', type: 'multiple-choice', question: 'They will arrive ___ the morning.', translation: 'Eles vão chegar pela manhã.', options: ['in', 'on', 'at', 'during'], correctAnswer: 'in', points: 10 },
      { id: 'fte-9', sectionId: 'fut-time', type: 'multiple-choice', question: 'We will see each other ___.', translation: 'Nos vemos em breve.', options: ['later', 'yesterday', 'before', 'after'], correctAnswer: 'later', points: 10 },
      { id: 'fte-10', sectionId: 'fut-time', type: 'multiple-choice', question: 'She will come back ___.', translation: 'Ela vai voltar em poucos dias.', options: ['in a few days', 'yesterday', 'last week', 'before'], correctAnswer: 'in a few days', points: 10 }
    ]
  },
  {
    id: 'future-will-questions-1',
    title: 'Future Will Questions',
    description: 'Questions with will',
    icon: '❓',
    exercises: [
      { id: 'fwq-1', sectionId: 'fut-will', type: 'multiple-choice', question: '___ you help me tomorrow?', translation: 'Você vai me ajudar amanhã?', options: ['Will', 'Are', 'Do', 'Does'], correctAnswer: 'Will', points: 10 },
      { id: 'fwq-2', sectionId: 'fut-will', type: 'multiple-choice', question: 'What ___ we do tonight?', translation: 'O que vamos fazer hoje à noite?', options: ['will', 'are', 'do', 'does'], correctAnswer: 'will', points: 10 },
      { id: 'fwq-3', sectionId: 'fut-will', type: 'multiple-choice', question: 'When ___ she arrive?', translation: 'Quando ela vai chegar?', options: ['will', 'is', 'does', 'are'], correctAnswer: 'will', points: 10 },
      { id: 'fwq-4', sectionId: 'fut-will', type: 'multiple-choice', question: 'Where ___ they be?', translation: 'Onde eles estarão?', options: ['will', 'are', 'do', 'does'], correctAnswer: 'will', points: 10 },
      { id: 'fwq-5', sectionId: 'fut-will', type: 'multiple-choice', question: 'Who ___ come to the party?', translation: 'Quem virá à festa?', options: ['will', 'is', 'are', 'do'], correctAnswer: 'will', points: 10 },
      { id: 'fwq-6', sectionId: 'fut-will', type: 'multiple-choice', question: 'How ___ we get there?', translation: 'Como vamos chegar lá?', options: ['will', 'are', 'do', 'does'], correctAnswer: 'will', points: 10 },
      { id: 'fwq-7', sectionId: 'fut-will', type: 'multiple-choice', question: 'What time ___ the movie start?', translation: 'Que horas o filme vai começar?', options: ['will', 'does', 'is', 'are'], correctAnswer: 'will', points: 10 },
      { id: 'fwq-8', sectionId: 'fut-will', type: 'multiple-choice', question: '___ it be sunny tomorrow?', translation: 'Estará ensolarado amanhã?', options: ['Will', 'Is', 'Are', 'Does'], correctAnswer: 'Will', points: 10 },
      { id: 'fwq-9', sectionId: 'fut-will', type: 'multiple-choice', question: 'Why ___ you be late?', translation: 'Por que você vai se atrasar?', options: ['will', 'are', 'do', 'does'], correctAnswer: 'will', points: 10 },
      { id: 'fwq-10', sectionId: 'fut-will', type: 'multiple-choice', question: 'How long ___ it take?', translation: 'Quanto tempo vai levar?', options: ['will', 'does', 'is', 'are'], correctAnswer: 'will', points: 10 }
    ]
  },
  {
    id: 'future-going-questions-1',
    title: 'Future Going To Questions',
    description: 'Questions with going to',
    icon: '❓',
    exercises: [
      { id: 'fgq-1', sectionId: 'fut-going', type: 'multiple-choice', question: '___ you going to study tonight?', translation: 'Você vai estudar hoje à noite?', options: ['Are', 'Will', 'Do', 'Does'], correctAnswer: 'Are', points: 10 },
      { id: 'fgq-2', sectionId: 'fut-going', type: 'multiple-choice', question: 'What ___ she going to wear?', translation: 'O que ela vai usar?', options: ['is', 'are', 'will', 'do'], correctAnswer: 'is', points: 10 },
      { id: 'fgq-3', sectionId: 'fut-going', type: 'multiple-choice', question: 'When ___ they going to arrive?', translation: 'Quando eles vão chegar?', options: ['are', 'is', 'will', 'do'], correctAnswer: 'are', points: 10 },
      { id: 'fgq-4', sectionId: 'fut-going', type: 'multiple-choice', question: 'What ___ we going to eat?', translation: 'O que vamos comer?', options: ['are', 'is', 'will', 'do'], correctAnswer: 'are', points: 10 },
      { id: 'fgq-5', sectionId: 'fut-going', type: 'multiple-choice', question: '___ he going to call us?', translation: 'Ele vai nos ligar?', options: ['Is', 'Are', 'Will', 'Does'], correctAnswer: 'Is', points: 10 },
      { id: 'fgq-6', sectionId: 'fut-going', type: 'multiple-choice', question: 'Where ___ she going to work?', translation: 'Onde ela vai trabalhar?', options: ['is', 'are', 'will', 'do'], correctAnswer: 'is', points: 10 },
      { id: 'fgq-7', sectionId: 'fut-going', type: 'multiple-choice', question: '___ you going to be there?', translation: 'Você vai estar lá?', options: ['Are', 'Will', 'Do', 'Does'], correctAnswer: 'Are', points: 10 },
      { id: 'fgq-8', sectionId: 'fut-going', type: 'multiple-choice', question: 'What ___ they going to build?', translation: 'O que eles vão construir?', options: ['are', 'is', 'will', 'do'], correctAnswer: 'are', points: 10 },
      { id: 'fgq-9', sectionId: 'fut-going', type: 'multiple-choice', question: '___ it going to rain?', translation: 'Vai chover?', options: ['Is', 'Will', 'Are', 'Does'], correctAnswer: 'Is', points: 10 },
      { id: 'fgq-10', sectionId: 'fut-going', type: 'multiple-choice', question: '___ you going to need help?', translation: 'Você vai precisar de ajuda?', options: ['Are', 'Will', 'Do', 'Does'], correctAnswer: 'Are', points: 10 }
    ]
  },
  {
    id: 'future-perfect-1',
    title: 'Future Perfect',
    description: 'Will have + past participle',
    icon: '✅',
    exercises: [
      { id: 'fperf-1', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'By tomorrow, I ___ the project.', translation: 'Até amanhã, eu terei terminado o projeto.', options: ['will have finished', 'have finished', 'finished', 'will finish'], correctAnswer: 'will have finished', points: 10 },
      { id: 'fperf-2', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'By next week, she ___ here.', translation: 'Até próxima semana, ela terá Chegado aqui.', options: ['will have arrived', 'has arrived', 'arrived', 'will arrive'], correctAnswer: 'will have arrived', points: 10 },
      { id: 'fperf-3', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'By the end of the year, we ___ a new house.', translation: 'Até o final do ano, teremos uma casa nova.', options: ['will have bought', 'have bought', 'bought', 'will buy'], correctAnswer: 'will have bought', points: 10 },
      { id: 'fperf-4', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'By Monday, he ___ his studies.', translation: 'Até segunda-feira, ele terá terminado seus estudos.', options: ['will have finished', 'has finished', 'finished', 'will finish'], correctAnswer: 'will have finished', points: 10 },
      { id: 'fperf-5', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'By evening, they ___ the work.', translation: 'Até a noite, eles terão terminado o trabalho.', options: ['will have done', 'have done', 'did', 'will do'], correctAnswer: 'will have done', points: 10 },
      { id: 'fperf-6', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'By then, I ___ the book.', translation: 'Até então, eu terei lido o livro.', options: ['will have read', 'have read', 'read', 'will read'], correctAnswer: 'will have read', points: 10 },
      { id: 'fperf-7', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'By next year, they ___ married.', translation: 'Até o próximo ano, eles serão casados.', options: ['will have been', 'have been', 'were', 'will be'], correctAnswer: 'will have been', points: 10 },
      { id: 'fperf-8', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'By the time you arrive, I ___ .', translation: 'Quando você chegar, eu terei terminado.', options: ['will have finished', 'have finished', 'finished', 'will finish'], correctAnswer: 'will have finished', points: 10 },
      { id: 'fperf-9', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'By this time next month, she ___ here.', translation: 'Neste tempo no próximo mês, ela terá chegado aqui.', options: ['will have arrived', 'has arrived', 'arrived', 'will arrive'], correctAnswer: 'will have arrived', points: 10 },
      { id: 'fperf-10', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'By the end of the day, we ___ everything.', translation: 'Até o final do dia,我们将完成一切.', options: ['will have done', 'have done', 'did', 'will do'], correctAnswer: 'will have done', points: 10 }
    ]
  },
  {
    id: 'future-continuous-1',
    title: 'Future Continuous',
    description: 'Will be + -ing',
    icon: '⏳',
    exercises: [
      { id: 'fcont-1', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'At 5pm, I ___ to the gym.', translation: 'Às 17h, estarei indo para a academia.', options: ['will be going', 'will go', 'go', 'going'], correctAnswer: 'will be going', points: 10 },
      { id: 'fcont-2', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'Tomorrow at noon, she ___ lunch.', translation: 'Amanhã ao meio-dia, ela estará almoçando.', options: ['will be having', 'will have', 'having', 'have'], correctAnswer: 'will be having', points: 10 },
      { id: 'fcont-3', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'At this time next week, we ___ on the beach.', translation: 'Neste tempo na próxima semana, estaremos na praia.', options: ['will be lying', 'will lie', 'lying', 'lie'], correctAnswer: 'will be lying', points: 10 },
      { id: 'fcont-4', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'Tomorrow, he ___ at the office.', translation: 'Amanhã, ele estará trabalhando no escritório.', options: ['will be working', 'will work', 'working', 'work'], correctAnswer: 'will be working', points: 10 },
      { id: 'fcont-5', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'At 8pm tonight, they ___ TV.', translation: 'Às 20h hoje, estarão assistindo TV.', options: ['will be watching', 'will watch', 'watching', 'watch'], correctAnswer: 'will be watching', points: 10 },
      { id: 'fcont-6', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'When you arrive, I ___ for you.', translation: 'Quando você chegar, estarei te esperando.', options: ['will be waiting', 'will wait', 'waiting', 'wait'], correctAnswer: 'will be waiting', points: 10 },
      { id: 'fcont-7', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'At midnight, the doctor ___ on the patient.', translation: 'À meia-noite, o médico estará operando o paciente.', options: ['will be operating', 'will operate', 'operating', 'operate'], correctAnswer: 'will be operating', points: 10 },
      { id: 'fcont-8', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'Next week, we ___ the project.', translation: 'Na próxima semana, estarão trabalhando no projeto.', options: ['will be working', 'will work', 'working', 'work'], correctAnswer: 'will be working', points: 10 },
      { id: 'fcont-9', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'Tomorrow at 3, she ___ a meeting.', translation: 'Amanhã às 3, ela estará tendo uma reunião.', options: ['will be having', 'will have', 'having', 'have'], correctAnswer: 'will be having', points: 10 },
      { id: 'fcont-10', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'At the party, everyone ___ .', translation: 'Na festa, todos estarão dançando.', options: ['will be dancing', 'will dance', 'dancing', 'dance'], correctAnswer: 'will be dancing', points: 10 }
    ]
  },
  {
    id: 'be-going-to-prediction-1',
    title: 'Going To - Predictions',
    description: 'Prediction with going to',
    icon: '🔮',
    exercises: [
      { id: 'gtpred-1', sectionId: 'fut-going', type: 'multiple-choice', question: 'Look at those clouds! It ___ rain.', translation: 'Veja aquelas nuvens! Vai chover.', options: ['is going to', 'will', 'is', 'does'], correctAnswer: 'is going to', points: 10 },
      { id: 'gtpred-2', sectionId: 'fut-going', type: 'multiple-choice', question: 'She is studying hard. She ___ pass.', translation: 'Ela está estudando duro. Ela vai passar.', options: ['is going to', 'will', 'is', 'does'], correctAnswer: 'is going to', points: 10 },
      { id: 'gtpred-3', sectionId: 'fut-going', type: 'multiple-choice', question: 'He is practicing every day. He ___ improve.', translation: 'Ele está praticando todos os dias. Ele vai melhorar.', options: ['is going to', 'will', 'is', 'does'], correctAnswer: 'is going to', points: 10 },
      { id: 'gtpred-4', sectionId: 'fut-going', type: 'multiple-choice', question: 'The team is training hard. They ___ win.', translation: 'O time está treinando duro. Eles vão vencer.', options: ['are going to', 'will', 'are', 'do'], correctAnswer: 'are going to', points: 10 },
      { id: 'gtpred-5', sectionId: 'fut-going', type: 'multiple-choice', question: 'The weather is getting colder. It ___ snow.', translation: 'O tempo está esfriando. Vai nevar.', options: ['is going to', 'will', 'is', 'does'], correctAnswer: 'is going to', points: 10 },
      { id: 'gtpred-6', sectionId: 'fut-going', type: 'multiple-choice', question: 'She has been studying. She ___ succeed.', translation: 'Ela tem estudado. Ela vai ter sucesso.', options: ['is going to', 'will', 'is', 'does'], correctAnswer: 'is going to', points: 10 },
      { id: 'gtpred-7', sectionId: 'fut-going', type: 'multiple-choice', question: 'They are late. They ___ miss the train.', translation: 'Estão atrasados. Eles vão perder o trem.', options: ['are going to', 'will', 'are', 'do'], correctAnswer: 'are going to', points: 10 },
      { id: 'gtpred-8', sectionId: 'fut-going', type: 'multiple-choice', question: 'The economy is improving. Things ___ get better.', translation: 'A economia está melhorando. As coisas vão melhorar.', options: ['are going to', 'will', 'are', 'do'], correctAnswer: 'are going to', points: 10 },
      { id: 'gtpred-9', sectionId: 'fut-going', type: 'multiple-choice', question: 'He is getting fat. He ___ gain weight.', translation: 'Ele está engordando. Ele vai ganhar peso.', options: ['is going to', 'will', 'is', 'does'], correctAnswer: 'is going to', points: 10 },
      { id: 'gtpred-10', sectionId: 'fut-going', type: 'multiple-choice', question: 'The company is growing. It ___ expand.', translation: 'A empresa está crescendo. Vai expandir.', options: ['is going to', 'will', 'is', 'does'], correctAnswer: 'is going to', points: 10 }
    ]
  },
  {
    id: 'future-negative-1',
    title: 'Future Negative',
    description: 'Negative in future tenses',
    icon: '❌',
    exercises: [
      { id: 'fneg-1', sectionId: 'fut-will', type: 'multiple-choice', question: 'I ___ there tomorrow.', translation: 'Eu não estarei lá amanhã.', options: ['will not be', 'am not', 'was not', 'do not be'], correctAnswer: 'will not be', points: 10 },
      { id: 'fneg-2', sectionId: 'fut-going', type: 'multiple-choice', question: 'She ___ to the party.', translation: 'Ela não vai à festa.', options: ['is not going', 'will not go', 'does not go', 'is not go'], correctAnswer: 'is not going', points: 10 },
      { id: 'fneg-3', sectionId: 'fut-will', type: 'multiple-choice', question: 'They ___ the work.', translation: 'They will not finish the work.', options: ['will not finish', 'are not finishing', 'do not finish', 'not finish'], correctAnswer: 'will not finish', points: 10 },
      { id: 'fneg-4', sectionId: 'fut-going', type: 'multiple-choice', question: 'We ___ that again.', translation: 'Não vamos fazer isso de novo.', options: ['are not going to do', 'will not do', 'do not do', 'are not doing'], correctAnswer: 'are not going to do', points: 10 },
      { id: 'fneg-5', sectionId: 'fut-will', type: 'multiple-choice', question: 'It ___ tomorrow.', translation: 'Não vai chover amanhã.', options: ['will not rain', 'is not raining', 'does not rain', 'not rain'], correctAnswer: 'will not rain', points: 10 },
      { id: 'fneg-6', sectionId: 'fut-going', type: 'multiple-choice', question: 'He ___ the exam.', translation: 'Ele não vai passar no exame.', options: ['is not going to pass', 'will not pass', 'does not pass', 'not pass'], correctAnswer: 'is not going to pass', points: 10 },
      { id: 'fneg-7', sectionId: 'fut-will', type: 'multiple-choice', question: 'I ___ you again.', translation: 'Não vou te ver de novo.', options: ['will not see', 'am not seeing', 'do not see', 'not see'], correctAnswer: 'will not see', points: 10 },
      { id: 'fneg-8', sectionId: 'fut-going', type: 'multiple-choice', question: 'They ___ us anymore.', translation: 'They are not going to help us anymore.', options: ['are not going to help', 'will not help', 'do not help', 'not help'], correctAnswer: 'are not going to help', points: 10 },
      { id: 'fneg-9', sectionId: 'fut-will', type: 'multiple-choice', question: 'She ___ this again.', translation: 'Ela não vai fazer isso de novo.', options: ['will not do', 'is not doing', 'does not do', 'not do'], correctAnswer: 'will not do', points: 10 },
      { id: 'fneg-10', sectionId: 'fut-going', type: 'multiple-choice', question: 'We ___ home late.', translation: 'Não vamos chegar em casa tarde.', options: ['are not going to come', 'will not come', 'do not come', 'not come'], correctAnswer: 'are not going to come', points: 10 }
    ]
  },
  {
    id: 'will-vs-going-1',
    title: 'Will vs Going To',
    description: 'Differences between will and going to',
    icon: '⚖️',
    exercises: [
      { id: 'wvg-1', sectionId: 'fut-will', type: 'multiple-choice', question: 'I think it ___ rain later.', translation: 'I think it will rain later. (prediction)', options: ['will', 'is going to'], correctAnswer: 'will', points: 10 },
      { id: 'wvg-2', sectionId: 'fut-going', type: 'multiple-choice', question: 'Look at those dark clouds. It ___ rain.', translation: 'Look at those dark clouds. It is going to rain. (evidence)', options: ['will', 'is going to'], correctAnswer: 'is going to', points: 10 },
      { id: 'wvg-3', sectionId: 'fut-will', type: 'multiple-choice', question: 'I will call you when I ___ home.', translation: 'I will call you when I get home. (future plan)', options: ['get', 'am going to get'], correctAnswer: 'get', points: 10 },
      { id: 'wvg-4', sectionId: 'fut-going', type: 'multiple-choice', question: 'I have bought a new car. I ___ use it tomorrow.', translation: 'I have bought a new car. I am going to use it tomorrow. (planned)', options: ['will use', 'am going to use'], correctAnswer: 'am going to use', points: 10 },
      { id: 'wvg-5', sectionId: 'fut-will', type: 'multiple-choice', question: '___ you ___ me a favor?', translation: 'Will you do me a favor? (offer)', options: ['Will', 'Are going to'], correctAnswer: 'Will', points: 10 },
      { id: 'wvg-6', sectionId: 'fut-going', type: 'multiple-choice', question: 'She is feeling sick. She ___ see a doctor.', translation: 'She is feeling sick. She is going to see a doctor. (decision)', options: ['will see', 'is going to see'], correctAnswer: 'is going to see', points: 10 },
      { id: 'wvg-7', sectionId: 'fut-will', type: 'multiple-choice', question: 'I believe you ___ win.', translation: 'I believe you will win. (belief)', options: ['will', 'are going to'], correctAnswer: 'will', points: 10 },
      { id: 'wvg-8', sectionId: 'fut-going', type: 'multiple-choice', question: 'The sky is clear. It ___ be a nice day.', translation: 'The sky is clear. It is going to be a nice day. (evidence)', options: ['will', 'is going to'], correctAnswer: 'is going to', points: 10 },
      { id: 'wvg-9', sectionId: 'fut-will', type: 'multiple-choice', question: 'I ___ help you. I promise.', translation: 'I will help you. I promise. (promise)', options: ['will', 'am going to'], correctAnswer: 'will', points: 10 },
      { id: 'wvg-10', sectionId: 'fut-going', type: 'multiple-choice', question: 'I have already packed. I ___ leave soon.', translation: 'I have already packed. I am going to leave soon. (planned)', options: ['will leave', 'am going to leave'], correctAnswer: 'am going to leave', points: 10 }
    ]
  },
  {
    id: 'future-time-expressions-1',
    title: 'Future Time Expressions',
    description: 'Time words for future',
    icon: '⏰',
    exercises: [
      { id: 'fte-1', sectionId: 'fut-will', type: 'multiple-choice', question: 'I will see her ___.', translation: 'Eu vou vê-la amanhã.', options: ['tomorrow', 'yesterday', 'last week', 'today'], correctAnswer: 'tomorrow', points: 10 },
      { id: 'fte-2', sectionId: 'fut-going', type: 'multiple-choice', question: 'We are going to the beach ___.', translation: 'Vamos à praia no próximo fim de semana.', options: ['next weekend', 'last weekend', 'every weekend', 'yesterday'], correctAnswer: 'next weekend', points: 10 },
      { id: 'fte-3', sectionId: 'fut-will', type: 'multiple-choice', question: 'She will call ___.', translation: 'Ela vai ligar em breve.', options: ['soon', 'yesterday', 'last week', 'ago'], correctAnswer: 'soon', points: 10 },
      { id: 'fte-4', sectionId: 'fut-going', type: 'multiple-choice', question: 'They are going to arrive ___.', translation: 'They are going to arrive in an hour.', options: ['in an hour', 'an hour ago', 'last hour', 'every hour'], correctAnswer: 'in an hour', points: 10 },
      { id: 'fte-5', sectionId: 'fut-will', type: 'multiple-choice', question: 'We will meet ___.', translation: 'Nos vemos semana que vem.', options: ['next week', 'last week', 'this week', 'every week'], correctAnswer: 'next week', points: 10 },
      { id: 'fte-6', sectionId: 'fut-going', type: 'multiple-choice', question: 'I am going to study ___.', translation: 'Vou estudar esta noite.', options: ['tonight', 'yesterday', 'last night', 'every night'], correctAnswer: 'tonight', points: 10 },
      { id: 'fte-7', sectionId: 'fut-will', type: 'multiple-choice', question: 'He will be back ___.', translation: 'Ele voltará daqui a pouco.', options: ['in a while', 'an hour ago', 'last hour', 'every while'], correctAnswer: 'in a while', points: 10 },
      { id: 'fte-8', sectionId: 'fut-going', type: 'multiple-choice', question: 'The concert is ___.', translation: 'O show é no próximo mês.', options: ['next month', 'last month', 'every month', 'this month'], correctAnswer: 'next month', points: 10 },
      { id: 'fte-9', sectionId: 'fut-will', type: 'multiple-choice', question: 'I will call you ___.', translation: 'Vou te ligar mais tarde.', options: ['later', 'yesterday', 'before', 'earlier'], correctAnswer: 'later', points: 10 },
      { id: 'fte-10', sectionId: 'fut-going', type: 'multiple-choice', question: 'She is going to start ___.', translation: 'Ela vai começar na segunda-feira.', options: ['on Monday', 'last Monday', 'every Monday', 'Monday ago'], correctAnswer: 'on Monday', points: 10 }
    ]
  },
  {
    id: 'future-going-to-plans-new-1',
    title: 'Going to Plans',
    description: 'Planned actions with going to',
    icon: '📋',
    exercises: [
      { id: 'fgtpn-1', sectionId: 'fut-going', type: 'multiple-choice', question: 'I ___ a new job next month.', translation: 'I am going to start a new job next month.', options: ['am going to start', 'will start', 'start', 'starting'], correctAnswer: 'am going to start', points: 10 },
      { id: 'fgtpn-2', sectionId: 'fut-going', type: 'multiple-choice', question: 'She ___ to Paris next summer.', translation: 'She is going to travel to Paris next summer.', options: ['is going to travel', 'will travel', 'travels', 'traveling'], correctAnswer: 'is going to travel', points: 10 },
      { id: 'fgtpn-3', sectionId: 'fut-going', type: 'multiple-choice', question: 'They ___ their house next year.', translation: 'They are going to sell their house next year.', options: ['are going to sell', 'will sell', 'sell', 'selling'], correctAnswer: 'are going to sell', points: 10 },
      { id: 'fgtpn-4', sectionId: 'fut-going', type: 'multiple-choice', question: 'We ___ a party this weekend.', translation: 'We are going to have a party this weekend.', options: ['are going to have', 'will have', 'have', 'having'], correctAnswer: 'are going to have', points: 10 },
      { id: 'fgtpn-5', sectionId: 'fut-going', type: 'multiple-choice', question: 'He ___ English next year.', translation: 'He is going to study English next year.', options: ['is going to study', 'will study', 'studies', 'studying'], correctAnswer: 'is going to study', points: 10 },
      { id: 'fgtpn-6', sectionId: 'fut-going', type: 'multiple-choice', question: 'I ___ a new computer.', translation: 'I am going to buy a new computer.', options: ['am going to buy', 'will buy', 'buy', 'buying'], correctAnswer: 'am going to buy', points: 10 },
      { id: 'fgtpn-7', sectionId: 'fut-going', type: 'multiple-choice', question: 'She ___ her birthday next week.', translation: 'She is going to celebrate her birthday next week.', options: ['is going to celebrate', 'will celebrate', 'celebrates', 'celebrating'], correctAnswer: 'is going to celebrate', points: 10 },
      { id: 'fgtpn-8', sectionId: 'fut-going', type: 'multiple-choice', question: 'They ___ to the beach tomorrow.', translation: 'They are going to go to the beach tomorrow.', options: ['are going to go', 'will go', 'go', 'going'], correctAnswer: 'are going to go', points: 10 },
      { id: 'fgtpn-9', sectionId: 'fut-going', type: 'multiple-choice', question: 'We ___ dinner at 7pm.', translation: 'We are going to have dinner at 7pm.', options: ['are going to have', 'will have', 'have', 'having'], correctAnswer: 'are going to have', points: 10 },
      { id: 'fgtpn-10', sectionId: 'fut-going', type: 'multiple-choice', question: 'I ___ the exam next month.', translation: 'I am going to take the exam next month.', options: ['am going to take', 'will take', 'take', 'taking'], correctAnswer: 'am going to take', points: 10 }
    ]
  },
  {
    id: 'will-predictions-new-1',
    title: 'Will Predictions',
    description: 'Predictions with will',
    icon: '🔮',
    exercises: [
      { id: 'fwpn-1', sectionId: 'fut-will', type: 'multiple-choice', question: 'I think it ___ snow tonight.', translation: 'I think it will snow tonight.', options: ['will', 'is going to', 'is', 'does'], correctAnswer: 'will', points: 10 },
      { id: 'fwpn-2', sectionId: 'fut-will', type: 'multiple-choice', question: 'The company ___ more jobs next year.', translation: 'The company will create more jobs next year.', options: ['will create', 'creates', 'is creating', 'created'], correctAnswer: 'will create', points: 10 },
      { id: 'fwpn-3', sectionId: 'fut-will', type: 'multiple-choice', question: 'Technology ___ a lot in the future.', translation: 'Technology will change a lot in the future.', options: ['will change', 'changes', 'is changing', 'changed'], correctAnswer: 'will change', points: 10 },
      { id: 'fwpn-4', sectionId: 'fut-will', type: 'multiple-choice', question: 'There ___ flying cars in 2050.', translation: 'There will be flying cars in 2050.', options: ['will be', 'are', 'were', 'is'], correctAnswer: 'will be', points: 10 },
      { id: 'fwpn-5', sectionId: 'fut-will', type: 'multiple-choice', question: 'People ___ on Mars one day.', translation: 'People will live on Mars one day.', options: ['will live', 'live', 'lived', 'living'], correctAnswer: 'will live', points: 10 },
      { id: 'fwpn-6', sectionId: 'fut-will', type: 'multiple-choice', question: 'The weather ___ nice this weekend.', translation: 'The weather will be nice this weekend.', options: ['will be', 'is', 'was', 'are'], correctAnswer: 'will be', points: 10 },
      { id: 'fwpn-7', sectionId: 'fut-will', type: 'multiple-choice', question: 'I believe she ___ the prize.', translation: 'I believe she will win the prize.', options: ['will win', 'wins', 'is winning', 'won'], correctAnswer: 'will win', points: 10 },
      { id: 'fwpn-8', sectionId: 'fut-will', type: 'multiple-choice', question: 'The world ___ more peaceful.', translation: 'The world will become more peaceful.', options: ['will become', 'becomes', 'is becoming', 'became'], correctAnswer: 'will become', points: 10 },
      { id: 'fwpn-9', sectionId: 'fut-will', type: 'multiple-choice', question: 'They ___ the project on time.', translation: 'They will finish the project on time.', options: ['will finish', 'finish', 'are finishing', 'finished'], correctAnswer: 'will finish', points: 10 },
      { id: 'fwpn-10', sectionId: 'fut-will', type: 'multiple-choice', question: 'Everything ___ different in 100 years.', translation: 'Everything will be different in 100 years.', options: ['will be', 'is', 'was', 'are'], correctAnswer: 'will be', points: 10 }
    ]
  },
  {
    id: 'will-spontaneous-new-1',
    title: 'Will Spontaneous',
    description: 'Spontaneous decisions with will',
    icon: '⚡',
    exercises: [
      { id: 'fwsn-1', sectionId: 'fut-will', type: 'multiple-choice', question: 'I ___ you a coffee. It is on me!', translation: 'I will buy you a coffee. It is on me!', options: ['will buy', 'buy', 'am going to buy', 'buying'], correctAnswer: 'will buy', points: 10 },
      { id: 'fwsn-2', sectionId: 'fut-will', type: 'multiple-choice', question: 'The door is locked. I ___ it for you.', translation: 'The door is locked. I will open it for you.', options: ['will open', 'open', 'am going to open', 'opening'], correctAnswer: 'will open', points: 10 },
      { id: 'fwsn-3', sectionId: 'fut-will', type: 'multiple-choice', question: 'You need a ride? I ___ you home.', translation: 'You need a ride? I will take you home.', options: ['will take', 'take', 'am going to take', 'taking'], correctAnswer: 'will take', points: 10 },
      { id: 'fwsn-4', sectionId: 'fut-will', type: 'multiple-choice', question: 'It is hot in here. I ___ on the AC.', translation: 'It is hot in here. I will turn on the AC.', options: ['will turn on', 'turn on', 'am going to turn on', 'turning on'], correctAnswer: 'will turn on', points: 10 },
      { id: 'fwsn-5', sectionId: 'fut-will', type: 'multiple-choice', question: 'I forgot your book. I ___ it tomorrow.', translation: 'I forgot your book. I will bring it tomorrow.', options: ['will bring', 'bring', 'am going to bring', 'bringing'], correctAnswer: 'will bring', points: 10 },
      { id: 'fwsn-6', sectionId: 'fut-will', type: 'multiple-choice', question: 'You look tired. I ___ the dinner tonight.', translation: 'You look tired. I will cook the dinner tonight.', options: ['will cook', 'cook', 'am going to cook', 'cooking'], correctAnswer: 'will cook', points: 10 },
      { id: 'fwsn-7', sectionId: 'fut-will', type: 'multiple-choice', question: 'The package is heavy. I ___ it for you.', translation: 'The package is heavy. I will carry it for you.', options: ['will carry', 'carry', 'am going to carry', 'carrying'], correctAnswer: 'will carry', points: 10 },
      { id: 'fwsn-8', sectionId: 'fut-will', type: 'multiple-choice', question: 'Let me check. I ___ the information.', translation: 'Let me check. I will find the information.', options: ['will find', 'find', 'am going to find', 'finding'], correctAnswer: 'will find', points: 10 },
      { id: 'fwsn-9', sectionId: 'fut-will', type: 'multiple-choice', question: 'I see you are struggling. I ___ you.', translation: 'I see you are struggling. I will help you.', options: ['will help', 'help', 'am going to help', 'helping'], correctAnswer: 'will help', points: 10 },
      { id: 'fwsn-10', sectionId: 'fut-will', type: 'multiple-choice', question: 'The light is off. I ___ it on.', translation: 'The light is off. I will turn it on.', options: ['will turn', 'turn', 'am going to turn', 'turning'], correctAnswer: 'will turn', points: 10 }
    ]
  },
  {
    id: 'will-promises-new-1',
    title: 'Will Promises',
    description: 'Promises with will',
    icon: '🤝',
    exercises: [
      { id: 'fwpromn-1', sectionId: 'fut-will', type: 'multiple-choice', question: 'I ___ always love you.', translation: 'I will always love you.', options: ['will', 'am going to', 'can', 'must'], correctAnswer: 'will', points: 10 },
      { id: 'fwpromn-2', sectionId: 'fut-will', type: 'multiple-choice', question: 'I ___ never forget this day.', translation: 'I will never forget this day.', options: ['will', 'am going to', 'can', 'might'], correctAnswer: 'will', points: 10 },
      { id: 'fwpromn-3', sectionId: 'fut-will', type: 'multiple-choice', question: 'We ___ always support you.', translation: 'We will always support you.', options: ['will', 'are going to', 'can', 'must'], correctAnswer: 'will', points: 10 },
      { id: 'fwpromn-4', sectionId: 'fut-will', type: 'multiple-choice', question: 'I ___ be there for you.', translation: 'I will be there for you.', options: ['will', 'am going to', 'can', 'should'], correctAnswer: 'will', points: 10 },
      { id: 'fwpromn-5', sectionId: 'fut-will', type: 'multiple-choice', question: 'I ___ never let you down.', translation: 'I will never let you down.', options: ['will', 'am going to', 'can', 'might'], correctAnswer: 'will', points: 10 },
      { id: 'fwpromn-6', sectionId: 'fut-will', type: 'multiple-choice', question: 'We ___ always be friends.', translation: 'We will always be friends.', options: ['will', 'are going to', 'can', 'must'], correctAnswer: 'will', points: 10 },
      { id: 'fwpromn-7', sectionId: 'fut-will', type: 'multiple-choice', question: 'I ___ keep this secret.', translation: 'I will keep this secret.', options: ['will', 'am going to', 'can', 'might'], correctAnswer: 'will', points: 10 },
      { id: 'fwpromn-8', sectionId: 'fut-will', type: 'multiple-choice', question: 'I ___ call you every day.', translation: 'I will call you every day.', options: ['will', 'am going to', 'can', 'should'], correctAnswer: 'will', points: 10 },
      { id: 'fwpromn-9', sectionId: 'fut-will', type: 'multiple-choice', question: 'We ___ never give up.', translation: 'We will never give up.', options: ['will', 'are going to', 'can', 'must'], correctAnswer: 'will', points: 10 },
      { id: 'fwpromn-10', sectionId: 'fut-will', type: 'multiple-choice', question: 'I ___ always be honest.', translation: 'I will always be honest.', options: ['will', 'am going to', 'can', 'should'], correctAnswer: 'will', points: 10 }
    ]
  },
  {
    id: 'will-refusals-new-1',
    title: 'Will Refusals',
    description: 'Negative and refusals with will',
    icon: '🚫',
    exercises: [
      { id: 'fwrefn-1', sectionId: 'fut-will', type: 'multiple-choice', question: 'I ___ do that again.', translation: 'I will not do that again.', options: ['will not', 'am not going to', 'cannot', 'do not'], correctAnswer: 'will not', points: 10 },
      { id: 'fwrefn-2', sectionId: 'fut-will', type: 'multiple-choice', question: 'She ___ wait any longer.', translation: 'She will not wait any longer.', options: ['will not', 'is not going to', 'cannot', 'does not'], correctAnswer: 'will not', points: 10 },
      { id: 'fwrefn-3', sectionId: 'fut-will', type: 'multiple-choice', question: 'They ___ accept this.', translation: 'They will not accept this.', options: ['will not', 'are not going to', 'cannot', 'do not'], correctAnswer: 'will not', points: 10 },
      { id: 'fwrefn-4', sectionId: 'fut-will', type: 'multiple-choice', question: 'He ___ change his mind.', translation: 'He will not change his mind.', options: ['will not', 'is not going to', 'cannot', 'does not'], correctAnswer: 'will not', points: 10 },
      { id: 'fwrefn-5', sectionId: 'fut-will', type: 'multiple-choice', question: 'We ___ give up.', translation: 'We will not give up.', options: ['will not', 'are not going to', 'cannot', 'do not'], correctAnswer: 'will not', points: 10 },
      { id: 'fwrefn-6', sectionId: 'fut-will', type: 'multiple-choice', question: 'I ___ tell anyone.', translation: 'I will not tell anyone.', options: ['will not', 'am not going to', 'cannot', 'do not'], correctAnswer: 'will not', points: 10 },
      { id: 'fwrefn-7', sectionId: 'fut-will', type: 'multiple-choice', question: 'It ___ happen.', translation: 'It will not happen.', options: ['will not', 'is not going to', 'cannot', 'does not'], correctAnswer: 'will not', points: 10 },
      { id: 'fwrefn-8', sectionId: 'fut-will', type: 'multiple-choice', question: 'She ___ agree to this.', translation: 'She will not agree to this.', options: ['will not', 'is not going to', 'cannot', 'does not'], correctAnswer: 'will not', points: 10 },
      { id: 'fwrefn-9', sectionId: 'fut-will', type: 'multiple-choice', question: 'They ___ forgive him.', translation: 'They will not forgive him.', options: ['will not', 'are not going to', 'cannot', 'do not'], correctAnswer: 'will not', points: 10 },
      { id: 'fwrefn-10', sectionId: 'fut-will', type: 'multiple-choice', question: 'I ___ forget this.', translation: 'I will not forget this.', options: ['will not', 'am not going to', 'cannot', 'do not'], correctAnswer: 'will not', points: 10 }
    ]
  },
  {
    id: 'future-simple-schedule-new-1',
    title: 'Present Simple Schedule',
    description: 'Timetables with present simple',
    icon: '📅',
    exercises: [
      { id: 'fssn-1', sectionId: 'fut-simple', type: 'multiple-choice', question: 'The train ___ at 5pm.', translation: 'The train leaves at 5pm.', options: ['leaves', 'will leave', 'is leaving', 'left'], correctAnswer: 'leaves', points: 10 },
      { id: 'fssn-2', sectionId: 'fut-simple', type: 'multiple-choice', question: 'The plane ___ at noon.', translation: 'The plane departs at noon.', options: ['departs', 'will depart', 'is departing', 'departed'], correctAnswer: 'departs', points: 10 },
      { id: 'fssn-3', sectionId: 'fut-simple', type: 'multiple-choice', question: 'The meeting ___ at 3pm today.', translation: 'The meeting is at 3pm today.', options: ['is', 'will be', 'is being', 'was'], correctAnswer: 'is', points: 10 },
      { id: 'fssn-4', sectionId: 'fut-simple', type: 'multiple-choice', question: 'The movie ___ at 8pm tonight.', translation: 'The movie starts at 8pm tonight.', options: ['starts', 'will start', 'is starting', 'started'], correctAnswer: 'starts', points: 10 },
      { id: 'fssn-5', sectionId: 'fut-simple', type: 'multiple-choice', question: 'The shop ___ at 9am tomorrow.', translation: 'The shop opens at 9am tomorrow.', options: ['opens', 'will open', 'is opening', 'opened'], correctAnswer: 'opens', points: 10 },
      { id: 'fssn-6', sectionId: 'fut-simple', type: 'multiple-choice', question: 'The flight ___ next Monday.', translation: 'The flight is next Monday.', options: ['is', 'will be', 'is being', 'was'], correctAnswer: 'is', points: 10 },
      { id: 'fssn-7', sectionId: 'fut-simple', type: 'multiple-choice', question: 'The concert ___ at 7pm.', translation: 'The concert starts at 7pm.', options: ['starts', 'will start', 'is starting', 'started'], correctAnswer: 'starts', points: 10 },
      { id: 'fssn-8', sectionId: 'fut-simple', type: 'multiple-choice', question: 'The bus ___ every hour.', translation: 'The bus leaves every hour.', options: ['leaves', 'will leave', 'is leaving', 'left'], correctAnswer: 'leaves', points: 10 },
      { id: 'fssn-9', sectionId: 'fut-simple', type: 'multiple-choice', question: 'The show ___ next Friday.', translation: 'The show is next Friday.', options: ['is', 'will be', 'is being', 'was'], correctAnswer: 'is', points: 10 },
      { id: 'fssn-10', sectionId: 'fut-simple', type: 'multiple-choice', question: 'The class ___ at 10am.', translation: 'The class begins at 10am.', options: ['begins', 'will begin', 'is beginning', 'began'], correctAnswer: 'begins', points: 10 }
    ]
  },
  {
    id: 'future-questions-new-1',
    title: 'Future Questions',
    description: 'Questions about the future',
    icon: '❓',
    exercises: [
      { id: 'fq-1', sectionId: 'fut-questions', type: 'multiple-choice', question: '___ you be there tomorrow?', translation: 'Will you be there tomorrow?', options: ['Will', 'Are', 'Did', 'Do'], correctAnswer: 'Will', points: 10 },
      { id: 'fq-2', sectionId: 'fut-questions', type: 'multiple-choice', question: 'What ___ you do this weekend?', translation: 'What will you do this weekend?', options: ['will', 'are', 'do', 'did'], correctAnswer: 'will', points: 10 },
      { id: 'fq-3', sectionId: 'fut-questions', type: 'multiple-choice', question: 'When ___ the train arrive?', translation: 'When will the train arrive?', options: ['will', 'does', 'did', 'is'], correctAnswer: 'will', points: 10 },
      { id: 'fq-4', sectionId: 'fut-questions', type: 'multiple-choice', question: 'Where ___ she be?', translation: 'Where will she be?', options: ['will', 'is', 'was', 'does'], correctAnswer: 'will', points: 10 },
      { id: 'fq-5', sectionId: 'fut-questions', type: 'multiple-choice', question: 'Who ___ help us?', translation: 'Who will help us?', options: ['will', 'is', 'are', 'does'], correctAnswer: 'will', points: 10 },
      { id: 'fq-6', sectionId: 'fut-questions', type: 'multiple-choice', question: 'How long ___ it take?', translation: 'How long will it take?', options: ['will', 'does', 'did', 'is'], correctAnswer: 'will', points: 10 },
      { id: 'fq-7', sectionId: 'fut-questions', type: 'multiple-choice', question: 'What time ___ the meeting start?', translation: 'What time will the meeting start?', options: ['will', 'does', 'did', 'is'], correctAnswer: 'will', points: 10 },
      { id: 'fq-8', sectionId: 'fut-questions', type: 'multiple-choice', question: '___ we meet tomorrow?', translation: 'Will we meet tomorrow?', options: ['Will', 'Are', 'Did', 'Do'], correctAnswer: 'Will', points: 10 },
      { id: 'fq-9', sectionId: 'fut-questions', type: 'multiple-choice', question: 'What ___ happen?', translation: 'What will happen?', options: ['will', 'is', 'was', 'does'], correctAnswer: 'will', points: 10 },
      { id: 'fq-10', sectionId: 'fut-questions', type: 'multiple-choice', question: 'When ___ you call?', translation: 'When will you call?', options: ['will', 'are', 'did', 'do'], correctAnswer: 'will', points: 10 }
    ]
  },
  {
    id: 'future-negative-new-1',
    title: 'Future Negative',
    description: 'Negative sentences in future',
    icon: '❌',
    exercises: [
      { id: 'fnn-1', sectionId: 'fut-negative', type: 'multiple-choice', question: 'I ___ be there.', translation: 'I will not be there.', options: ['will not', 'am not', 'was not', 'do not'], correctAnswer: 'will not', points: 10 },
      { id: 'fnn-2', sectionId: 'fut-negative', type: 'multiple-choice', question: 'She ___ come.', translation: 'She will not come.', options: ['will not', 'is not', 'does not', 'cannot'], correctAnswer: 'will not', points: 10 },
      { id: 'fnn-3', sectionId: 'fut-negative', type: 'multiple-choice', question: 'They ___ be late.', translation: 'They will not be late.', options: ['will not', 'are not', 'do not', 'cannot'], correctAnswer: 'will not', points: 10 },
      { id: 'fnn-4', sectionId: 'fut-negative', type: 'multiple-choice', question: 'We ___ go.', translation: 'We will not go.', options: ['will not', 'are not', 'do not', 'cannot'], correctAnswer: 'will not', points: 10 },
      { id: 'fnn-5', sectionId: 'fut-negative', type: 'multiple-choice', question: 'He ___ like it.', translation: 'He will not like it.', options: ['will not', 'is not', 'does not', 'cannot'], correctAnswer: 'will not', points: 10 },
      { id: 'fnn-6', sectionId: 'fut-negative', type: 'multiple-choice', question: 'It ___ work.', translation: 'It will not work.', options: ['will not', 'is not', 'does not', 'cannot'], correctAnswer: 'will not', points: 10 },
      { id: 'fnn-7', sectionId: 'fut-negative', type: 'multiple-choice', question: 'I ___ forget.', translation: 'I will not forget.', options: ['will not', 'am not', 'do not', 'cannot'], correctAnswer: 'will not', points: 10 },
      { id: 'fnn-8', sectionId: 'fut-negative', type: 'multiple-choice', question: 'We ___ be there.', translation: 'We will not be there.', options: ['will not', 'are not', 'do not', 'cannot'], correctAnswer: 'will not', points: 10 },
      { id: 'fnn-9', sectionId: 'fut-negative', type: 'multiple-choice', question: 'She ___ call.', translation: 'She will not call.', options: ['will not', 'is not', 'does not', 'cannot'], correctAnswer: 'will not', points: 10 },
      { id: 'fnn-10', sectionId: 'fut-negative', type: 'multiple-choice', question: 'They ___ agree.', translation: 'They will not agree.', options: ['will not', 'are not', 'do not', 'cannot'], correctAnswer: 'will not', points: 10 }
    ]
  },
  {
    id: 'going-to-negative-new-1',
    title: 'Going To Negative',
    description: 'Negative with going to',
    icon: '❌',
    exercises: [
      { id: 'fgnn-1', sectionId: 'fut-going', type: 'multiple-choice', question: 'I ___ do that.', translation: 'I am not going to do that.', options: ['am not going to', 'will not', 'do not', 'not will'], correctAnswer: 'am not going to', points: 10 },
      { id: 'fgnn-2', sectionId: 'fut-going', type: 'multiple-choice', question: 'She ___ come.', translation: 'She is not going to come.', options: ['is not going to', 'will not', 'does not', 'not will'], correctAnswer: 'is not going to', points: 10 },
      { id: 'fgnn-3', sectionId: 'fut-going', type: 'multiple-choice', question: 'They ___ be there.', translation: 'They are not going to be there.', options: ['are not going to', 'will not', 'do not', 'not will'], correctAnswer: 'are not going to', points: 10 },
      { id: 'fgnn-4', sectionId: 'fut-going', type: 'multiple-choice', question: 'We ___ eat that.', translation: 'We are not going to eat that.', options: ['are not going to', 'will not', 'do not', 'not will'], correctAnswer: 'are not going to', points: 10 },
      { id: 'fgnn-5', sectionId: 'fut-going', type: 'multiple-choice', question: 'He ___ study.', translation: 'He is not going to study.', options: ['is not going to', 'will not', 'does not', 'not will'], correctAnswer: 'is not going to', points: 10 },
      { id: 'fgnn-6', sectionId: 'fut-going', type: 'multiple-choice', question: 'I ___ tell anyone.', translation: 'I am not going to tell anyone.', options: ['am not going to', 'will not', 'do not', 'not will'], correctAnswer: 'am not going to', points: 10 },
      { id: 'fgnn-7', sectionId: 'fut-going', type: 'multiple-choice', question: 'She ___ agree.', translation: 'She is not going to agree.', options: ['is not going to', 'will not', 'does not', 'not will'], correctAnswer: 'is not going to', points: 10 },
      { id: 'fgnn-8', sectionId: 'fut-going', type: 'multiple-choice', question: 'They ___ wait.', translation: 'They are not going to wait.', options: ['are not going to', 'will not', 'do not', 'not will'], correctAnswer: 'are not going to', points: 10 },
      { id: 'fgnn-9', sectionId: 'fut-going', type: 'multiple-choice', question: 'We ___ change.', translation: 'We are not going to change.', options: ['are not going to', 'will not', 'do not', 'not will'], correctAnswer: 'are not going to', points: 10 },
      { id: 'fgnn-10', sectionId: 'fut-going', type: 'multiple-choice', question: 'He ___ leave.', translation: 'He is not going to leave.', options: ['is not going to', 'will not', 'does not', 'not will'], correctAnswer: 'is not going to', points: 10 }
    ]
  },
  {
    id: 'future-continuous-new-1',
    title: 'Future Continuous',
    description: 'Will be + verb-ing',
    icon: '⏳',
    exercises: [
      { id: 'fcn-1', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'At 5pm, I ___ work.', translation: 'At 5pm, I will be working.', options: ['will be working', 'will work', 'am working', 'work'], correctAnswer: 'will be working', points: 10 },
      { id: 'fcn-2', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'Tomorrow, she ___ to the beach.', translation: 'Tomorrow, she will be going to the beach.', options: ['will be going', 'will go', 'is going', 'go'], correctAnswer: 'will be going', points: 10 },
      { id: 'fcn-3', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'At noon, they ___ lunch.', translation: 'At noon, they will be having lunch.', options: ['will be having', 'will have', 'are having', 'have'], correctAnswer: 'will be having', points: 10 },
      { id: 'fcn-4', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'At 8pm, he ___ TV.', translation: 'At 8pm, he will be watching TV.', options: ['will be watching', 'will watch', 'is watching', 'watch'], correctAnswer: 'will be watching', points: 10 },
      { id: 'fcn-5', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'This time next week, I ___ in Paris.', translation: 'This time next week, I will be in Paris.', options: ['will be', 'am', 'was', 'will'], correctAnswer: 'will be', points: 10 },
      { id: 'fcn-6', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'When you arrive, I ___ for you.', translation: 'When you arrive, I will be waiting for you.', options: ['will be waiting', 'will wait', 'am waiting', 'wait'], correctAnswer: 'will be waiting', points: 10 },
      { id: 'fcn-7', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'Tomorrow, we ___ the project.', translation: 'Tomorrow, we will be working on the project.', options: ['will be working', 'will work', 'are working', 'work'], correctAnswer: 'will be working', points: 10 },
      { id: 'fcn-8', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'At 3pm, she ___ a meeting.', translation: 'At 3pm, she will be having a meeting.', options: ['will be having', 'will have', 'is having', 'have'], correctAnswer: 'will be having', points: 10 },
      { id: 'fcn-9', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'All day, they ___ on the problem.', translation: 'All day, they will be working on the problem.', options: ['will be working', 'will work', 'are working', 'work'], correctAnswer: 'will be working', points: 10 },
      { id: 'fcn-10', sectionId: 'fut-continuous', type: 'multiple-choice', question: 'At night, I ___ .', translation: 'At night, I will be sleeping.', options: ['will be sleeping', 'will sleep', 'am sleeping', 'sleep'], correctAnswer: 'will be sleeping', points: 10 }
    ]
  },
  {
    id: 'future-perfect-new-1',
    title: 'Future Perfect',
    description: 'Will have + past participle',
    icon: '✅',
    exercises: [
      { id: 'fpn-1', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'By tomorrow, I ___ the work.', translation: 'By tomorrow, I will have finished the work.', options: ['will have finished', 'will finish', 'have finished', 'finished'], correctAnswer: 'will have finished', points: 10 },
      { id: 'fpn-2', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'By next week, she ___ here.', translation: 'By next week, she will have arrived here.', options: ['will have arrived', 'will arrive', 'has arrived', 'arrived'], correctAnswer: 'will have arrived', points: 10 },
      { id: 'fpn-3', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'By the end of the year, we ___ the house.', translation: 'By the end of the year, we will have bought the house.', options: ['will have bought', 'will buy', 'have bought', 'bought'], correctAnswer: 'will have bought', points: 10 },
      { id: 'fpn-4', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'By Monday, he ___ his studies.', translation: 'By Monday, he will have finished his studies.', options: ['will have finished', 'will finish', 'has finished', 'finished'], correctAnswer: 'will have finished', points: 10 },
      { id: 'fpn-5', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'By evening, they ___ the project.', translation: 'By evening, they will have completed the project.', options: ['will have completed', 'will complete', 'have completed', 'completed'], correctAnswer: 'will have completed', points: 10 },
      { id: 'fpn-6', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'By then, I ___ the book.', translation: 'By then, I will have read the book.', options: ['will have read', 'will read', 'have read', 'read'], correctAnswer: 'will have read', points: 10 },
      { id: 'fpn-7', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'By next year, they ___ married.', translation: 'By next year, they will have been married.', options: ['will have been', 'will be', 'have been', 'were'], correctAnswer: 'will have been', points: 10 },
      { id: 'fpn-8', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'By the time you arrive, I ___ .', translation: 'By the time you arrive, I will have left.', options: ['will have left', 'will leave', 'have left', 'left'], correctAnswer: 'will have left', points: 10 },
      { id: 'fpn-9', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'By next month, we ___ five years here.', translation: 'By next month, we will have been here five years.', options: ['will have been', 'will be', 'have been', 'were'], correctAnswer: 'will have been', points: 10 },
      { id: 'fpn-10', sectionId: 'fut-perfect', type: 'multiple-choice', question: 'By the end of the day, I ___ everything.', translation: 'By the end of the day, I will have done everything.', options: ['will have done', 'will do', 'have done', 'did'], correctAnswer: 'will have done', points: 10 }
    ]
  },
  {
    id: 'future-perfect-continuous-new-1',
    title: 'Future Perfect Continuous',
    description: 'Will have been + verb-ing',
    icon: '⏱️',
    exercises: [
      { id: 'fpcn-1', sectionId: 'fut-perfect-cont', type: 'multiple-choice', question: 'By next year, she ___ here for 5 years.', translation: 'By next year, she will have been working here for 5 years.', options: ['will have been working', 'will work', 'will be working', 'working'], correctAnswer: 'will have been working', points: 10 },
      { id: 'fpcn-2', sectionId: 'fut-perfect-cont', type: 'multiple-choice', question: 'By the time we arrive, they ___ for hours.', translation: 'By the time we arrive, they will have been waiting for hours.', options: ['will have been waiting', 'will wait', 'will be waiting', 'waiting'], correctAnswer: 'will have been waiting', points: 10 },
      { id: 'fpcn-3', sectionId: 'fut-perfect-cont', type: 'multiple-choice', question: 'By next month, I ___ this project.', translation: 'By next month, I will have been managing this project.', options: ['will have been managing', 'will manage', 'will be managing', 'managing'], correctAnswer: 'will have been managing', points: 10 },
      { id: 'fpcn-4', sectionId: 'fut-perfect-cont', type: 'multiple-choice', question: 'By next summer, they ___ here.', translation: 'By next summer, they will have been living here.', options: ['will have been living', 'will live', 'will be living', 'living'], correctAnswer: 'will have been living', points: 10 },
      { id: 'fpcn-5', sectionId: 'fut-perfect-cont', type: 'multiple-choice', question: 'By tomorrow, I ___ for 24 hours.', translation: 'By tomorrow, I will have been driving for 24 hours.', options: ['will have been driving', 'will drive', 'will be driving', 'driving'], correctAnswer: 'will have been driving', points: 10 },
      { id: 'fpcn-6', sectionId: 'fut-perfect-cont', type: 'multiple-choice', question: 'By the end of the week, we ___ this.', translation: 'By the end of the week, we will have been studying this.', options: ['will have been studying', 'will study', 'will be studying', 'studying'], correctAnswer: 'will have been studying', points: 10 },
      { id: 'fpcn-7', sectionId: 'fut-perfect-cont', type: 'multiple-choice', question: 'By tonight, she ___ for 5 hours.', translation: 'By tonight, she will have been working for 5 hours.', options: ['will have been working', 'will work', 'will be working', 'working'], correctAnswer: 'will have been working', points: 10 },
      { id: 'fpcn-8', sectionId: 'fut-perfect-cont', type: 'multiple-choice', question: 'By next week, they ___ the problem.', translation: 'By next week, they will have been analyzing the problem.', options: ['will have been analyzing', 'will analyze', 'will be analyzing', 'analyzing'], correctAnswer: 'will have been analyzing', points: 10 },
      { id: 'fpcn-9', sectionId: 'fut-perfect-cont', type: 'multiple-choice', question: 'By the end of the year, I ___ here.', translation: 'By the end of the year, I will have been staying here.', options: ['will have been staying', 'will stay', 'will be staying', 'staying'], correctAnswer: 'will have been staying', points: 10 },
      { id: 'fpcn-10', sectionId: 'fut-perfect-cont', type: 'multiple-choice', question: 'By the time the movie starts, we ___ .', translation: 'By the time the movie starts, we will have been waiting.', options: ['will have been waiting', 'will wait', 'will be waiting', 'waiting'], correctAnswer: 'will have been waiting', points: 10 }
    ]
  }
];

export const futureTensesQuizPacks: QuizPack[] = [
  {
    id: 'future-quiz',
    title: 'Future Tenses Quiz',
    description: 'Test your future tense knowledge',
    icon: '🎯',
    quiz: {
      id: 'future-quiz',
      title: 'Future Tenses Quiz',
      description: 'Test your knowledge of future forms',
      passingScore: 70,
      xpReward: 50,
      gemReward: 3,
      timeLimit: 300,
      questions: [
        { id: 'fq-1', sectionId: 'fut-will', type: 'multiple-choice', question: 'I think it ___ hot today.', translation: 'I think it will be hot today.', options: ['be', 'is', 'are', 'being'], correctAnswer: 'be', points: 10 },
        { id: 'fq-2', sectionId: 'fut-going', type: 'multiple-choice', question: 'She ___ to the doctor tomorrow.', translation: 'She is going to the doctor tomorrow.', options: ['go', 'will go', 'is going to', 'going to go'], correctAnswer: 'is going to', points: 10 },
        { id: 'fq-3', sectionId: 'fut-will', type: 'multiple-choice', question: '___ you marry me?', translation: 'Will you marry me?', options: ['Do', 'Does', 'Will', 'Are'], correctAnswer: 'Will', points: 10 },
        { id: 'fq-4', sectionId: 'fut-going', type: 'multiple-choice', question: 'They ___ the project next week.', translation: 'They are going to finish the project next week.', options: ['finish', 'finishes', 'are going to finish', 'finishing'], correctAnswer: 'are going to finish', points: 10 }
      ]
    }
  }
];