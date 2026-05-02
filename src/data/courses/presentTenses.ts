import { ExercisePack, QuizPack } from '../academy';

export const presentTensesExercisePacks: ExercisePack[] = [
  {
    id: 'present-simple-1',
    title: 'Present Simple Practice',
    description: 'Practice Present Simple tense',
    icon: '📝',
    exercises: [
      { id: 'ps-ex1', sectionId: 'pres-simple', type: 'multiple-choice', question: 'She ___ to music every day.', translation: 'Ela ouve música todos os dias.', options: ['listen', 'listens', 'listening', 'listened'], correctAnswer: 'listens', points: 10 },
      { id: 'ps-ex2', sectionId: 'pres-simple', type: 'multiple-choice', question: 'They ___ in a big house.', translation: 'Eles moram em uma casa grande.', options: ['live', 'lives', 'living', 'lived'], correctAnswer: 'live', points: 10 },
      { id: 'ps-ex3', sectionId: 'pres-simple', type: 'fill-blank', question: 'He ___ English very well.', translation: 'Ele fala inglês muito bem.', correctAnswer: 'speaks', explanation: 'Use "speaks" for third person singular.', points: 15 }
    ]
  },
  {
    id: 'present-continuous-1',
    title: 'Present Continuous',
    description: 'Practice actions happening now',
    icon: '🔄',
    exercises: [
      { id: 'pc-ex1', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'Look! She ___ a book.', translation: 'Olhe! Ela está lendo um livro.', options: ['read', 'reads', 'is reading', 'readed'], correctAnswer: 'is reading', points: 10 },
      { id: 'pc-ex2', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'They are ___ soccer right now.', translation: 'Eles estão jogando futebol agora.', options: ['play', 'plays', 'playing', 'played'], correctAnswer: 'playing', points: 10 },
      { id: 'pc-ex3', sectionId: 'pres-continuous', type: 'fill-blank', question: 'I ___ my homework at the moment.', translation: 'Eu estou fazendo minha tarefa neste momento.', correctAnswer: 'doing', explanation: 'Use "doing" with Present Continuous.', points: 15 }
    ]
  },
  {
    id: 'present-vs-continuous',
    title: 'Present Simple vs Continuous',
    description: 'When to use each tense',
    icon: '⚖️',
    exercises: [
      { id: 'pvc-ex1', sectionId: 'pres-simple', type: 'multiple-choice', question: 'I ___ to the gym every day. (habit)', translation: 'Eu vou na academia todos os dias. (hábito)', options: ['go', 'am going', 'going', 'went'], correctAnswer: 'go', points: 15 },
      { id: 'pvc-ex2', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'Listen! Someone ___ at the door.', translation: 'Escute! Alguém está batendo na porta.', options: ['knock', 'knocks', 'is knocking', 'knocked'], correctAnswer: 'is knocking', points: 15 },
      { id: 'pvc-ex3', sectionId: 'pres-simple', type: 'multiple-choice', question: 'The sun ___ in the east.', translation: 'O sol nasce no leste.', options: ['rise', 'rises', 'is rising', 'rose'], correctAnswer: 'rises', points: 15 }
    ]
  },
  {
    id: 'time-expressions',
    title: 'Time Expressions',
    description: 'Words that signal tenses',
    icon: '⏰',
    exercises: [
      { id: 'te-ex1', sectionId: 'pres-simple', type: 'multiple-choice', question: 'We play tennis ___ Saturdays.', translation: 'Nós jogamos tênis aos sábados.', options: ['now', 'every', 'at the moment', 'right now'], correctAnswer: 'every', points: 10 },
      { id: 'te-ex2', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'She is reading ___ .', translation: 'Ela está lendo agora.', options: ['always', 'usually', 'right now', 'often'], correctAnswer: 'right now', points: 10 },
      { id: 'te-ex3', sectionId: 'pres-simple', type: 'fill-blank', question: 'He ___ travels for work. (usually)', translation: 'Ele geralmente viaja a trabalho.', correctAnswer: 'usually', explanation: 'Use frequency adverbs with Present Simple.', points: 10 }
    ]
  },
  {
    id: 'present-simple-2',
    title: 'Present Simple Practice 2',
    description: 'More Present Simple exercises',
    icon: '📝',
    exercises: [
      { id: 'ps2-1', sectionId: 'pres-simple', type: 'multiple-choice', question: 'My mother ___ coffee.', translation: 'Minha mãe bebe café.', options: ['drink', 'drinks', 'drinking', 'drank'], correctAnswer: 'drinks', points: 10 },
      { id: 'ps2-2', sectionId: 'pres-simple', type: 'multiple-choice', question: 'The teacher ___ students.', translation: 'O professor ensina alunos.', options: ['teach', 'teaches', 'teaching', 'taught'], correctAnswer: 'teaches', points: 10 },
      { id: 'ps2-3', sectionId: 'pres-simple', type: 'fill-blank', question: 'She ___ French well.', translation: 'Ela fala francês bem.', correctAnswer: 'speaks', explanation: 'Use "speaks" for languages.', points: 15 }
    ]
  },
{
    id: 'present-continuous-2',
    title: 'Present Continuous 2',
    description: 'More continuous practice',
    icon: '🔄',
    exercises: [
      { id: 'pc2-1', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'I am ___ a movie now.', translation: 'Eu estou assistindo um filme agora.', options: ['watch', 'watches', 'watching', 'watched'], correctAnswer: 'watching', points: 10 },
      { id: 'pc2-2', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'They are ___ for the test.', translation: 'Eles estão estudando para o teste.', options: ['study', 'studies', 'studying', 'studied'], correctAnswer: 'studying', points: 10 },
      { id: 'pc2-3', sectionId: 'pres-continuous', type: 'fill-blank', question: 'We ___ dinner now.', translation: 'Nós estamos jantando agora.', correctAnswer: 'are having', explanation: 'Use Present Continuous for actions happening now.', points: 15 }
    ]
  },
  {
    id: 'present-simple-3',
    title: 'Present Simple Practice 3',
    description: 'More Present Simple exercises',
    icon: '📝',
    exercises: [
      { id: 'ps3-1', sectionId: 'pres-simple', type: 'multiple-choice', question: 'My father ___ breakfast at 7am.', translation: 'Meu pai toma café da manhã às 7h.', options: ['have', 'has', 'having', 'had'], correctAnswer: 'has', points: 10 },
      { id: 'ps3-2', sectionId: 'pres-simple', type: 'multiple-choice', question: 'The cat ___ under the bed.', translation: 'O gato fica embaixo da cama.', options: ['sleep', 'sleeps', 'sleeping', 'slept'], correctAnswer: 'sleeps', points: 10 },
      { id: 'ps3-3', sectionId: 'pres-simple', type: 'fill-blank', question: 'She ___ Spanish very well.', translation: 'Ela fala espanhol muito bem.', correctAnswer: 'speaks', explanation: 'Use "speaks" for languages.', points: 15 },
      { id: 'ps3-4', sectionId: 'pres-simple', type: 'multiple-choice', question: 'My sister ___ in London.', translation: 'Minha irmã mora em Londres.', options: ['live', 'lives', 'living', 'lived'], correctAnswer: 'lives', points: 10 },
      { id: 'ps3-5', sectionId: 'pres-simple', type: 'multiple-choice', question: 'The company ___ many employees.', translation: 'A empresa emprega muitos funcionários.', options: ['employ', 'employs', 'employing', 'employed'], correctAnswer: 'employs', points: 10 },
      { id: 'ps3-6', sectionId: 'pres-simple', type: 'multiple-choice', question: 'Water ___ at 100°C.', translation: 'A água ferve a 100°C.', options: ['boil', 'boils', 'boiling', 'boiled'], correctAnswer: 'boils', points: 10 },
      { id: 'ps3-7', sectionId: 'pres-simple', type: 'fill-blank', question: 'She ___ her teeth twice a day.', translation: 'Ela escova os dentes duas vezes ao dia.', correctAnswer: 'brushes', explanation: 'Use "brushes" for third person.', points: 15 },
      { id: 'ps3-8', sectionId: 'pres-simple', type: 'multiple-choice', question: 'He ___ to the gym three times a week.', translation: 'Ele vai à academia três vezes por semana.', options: ['go', 'goes', 'going', 'went'], correctAnswer: 'goes', points: 10 },
      { id: 'ps3-9', sectionId: 'pres-simple', type: 'multiple-choice', question: 'The store ___ at 9am.', translation: 'A loja abre às 9h.', options: ['open', 'opens', 'opening', 'opened'], correctAnswer: 'opens', points: 10 },
      { id: 'ps3-10', sectionId: 'pres-simple', type: 'multiple-choice', question: 'She ___ the truth.', translation: 'Ela sempre diz a verdade.', options: ['say', 'says', 'saying', 'said'], correctAnswer: 'says', points: 10 }
    ]
  },
  {
    id: 'present-perfect-1',
    title: 'Present Perfect',
    description: 'Have/has + past participle',
    icon: '✨',
    exercises: [
      { id: 'pp-ex1', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'I ___ to Paris twice.', translation: 'Eu fui a Paris duas vezes.', options: ['have been', 'have gone', 'has been', 'went'], correctAnswer: 'have been', points: 10 },
      { id: 'pp-ex2', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'She ___ her homework.', translation: 'Ela terminou sua lição de casa.', options: ['has finish', 'has finished', 'have finished', 'finished'], correctAnswer: 'has finished', points: 10 },
      { id: 'pp-ex3', sectionId: 'pres-perfect', type: 'fill-blank', question: 'They ___ here for five years.', translation: 'Eles moram aqui há cinco anos.', correctAnswer: 'have lived', explanation: 'Use Present Perfect with "for".', points: 15 },
      { id: 'pp-ex4', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'We ___ the movie yet.', translation: 'Nós ainda não assistimos o filme.', options: ['have seen', 'haven\'t seen', 'has seen', 'didn\'t see'], correctAnswer: 'haven\'t seen', points: 10 },
      { id: 'pp-ex5', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'He ___ English since 2010.', translation: 'Ele estuda inglês desde 2010.', options: ['studies', 'has studied', 'have studied', 'studied'], correctAnswer: 'has studied', points: 10 },
      { id: 'pp-ex6', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'She ___ breakfast already.', translation: 'Ela já tomou café da manhã.', options: ['has had', 'have had', 'had', 'was having'], correctAnswer: 'has had', points: 10 },
      { id: 'pp-ex7', sectionId: 'pres-perfect', type: 'fill-blank', question: 'I ___ this book before.', translation: 'Eu li este livro antes.', correctAnswer: 'have read', explanation: 'Use past participle "read".', points: 15 },
      { id: 'pp-ex8', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'They ___ a new house.', translation: ' Eles compraram uma casa nova.', options: ['have bought', 'has bought', 'bought', 'buy'], correctAnswer: 'have bought', points: 10 },
      { id: 'pp-ex9', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'He ___ a lot of friends.', translation: 'Ele fez muitos amigos.', options: ['made', 'has made', 'have made', 'makes'], correctAnswer: 'has made', points: 10 },
      { id: 'pp-ex10', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'We ___ the project.', translation: 'Nós concluímos o projeto.', options: ['has finished', 'have finished', 'finished', 'finish'], correctAnswer: 'have finished', points: 10 }
    ]
  },
  {
    id: 'present-perfect-vs-simple',
    title: 'Present Perfect vs Past Simple',
    description: 'When to use each',
    icon: '🔀',
    exercises: [
      { id: 'ppvs-ex1', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'I ___ to Rome last year.', translation: 'Eu fui a Roma ano passado.', options: ['have been', 'was', 'went', 'have gone'], correctAnswer: 'went', points: 10 },
      { id: 'ppvs-ex2', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'I ___ to Rome several times.', translation: 'Eu fui a Roma várias vezes.', options: ['have been', 'was', 'went', 'gone'], correctAnswer: 'have been', points: 10 },
      { id: 'ppvs-ex3', sectionId: 'pres-simple', type: 'multiple-choice', question: 'She ___ the letter yesterday.', translation: 'Ela escreveu a carta ontem.', options: ['wrote', 'has written', 'have written', 'writes'], correctAnswer: 'wrote', points: 10 },
      { id: 'ppvs-ex4', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'She ___ many letters this week.', translation: 'Ela escreveu muitas cartas esta semana.', options: ['wrote', 'has written', 'have written', 'writes'], correctAnswer: 'has written', points: 10 },
      { id: 'ppvs-ex5', sectionId: 'pres-simple', type: 'multiple-choice', question: 'They ___ to the beach last summer.', translation: 'Eles foram à praia no verão passado.', options: ['have gone', 'went', 'go', 'gone'], correctAnswer: 'went', points: 10 },
      { id: 'ppvs-ex6', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'They ___ to the beach many times.', translation: 'Eles foram à praia muitas vezes.', options: ['have gone', 'went', 'go', 'gone'], correctAnswer: 'have gone', points: 10 },
      { id: 'ppvs-ex7', sectionId: 'pres-simple', type: 'fill-blank', question: 'He ___ in 2010.', translation: 'Ele nasceu em 2010.', correctAnswer: 'was born', explanation: 'Use Past Simple for specific dates.', points: 15 },
      { id: 'ppvs-ex8', sectionId: 'pres-perfect', type: 'fill-blank', question: 'He ___ many awards.', translation: 'Ele ganhou muitos prêmios.', correctAnswer: 'has won', explanation: 'Use Present Perfect for achievements.', points: 15 },
      { id: 'ppvs-ex9', sectionId: 'pres-simple', type: 'multiple-choice', question: 'I ___ my keys.', translation: 'Eu perdi minhas chaves.', options: ['lost', 'have lost', 'lose', 'losing'], correctAnswer: 'lost', points: 10 },
      { id: 'ppvs-ex10', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'I ___ my keys.', translation: 'Eu perdi minhas chaves (recentemente).', options: ['lost', 'have lost', 'lose', 'losing'], correctAnswer: 'have lost', points: 10 }
    ]
  },
  {
    id: 'present-continuous-long',
    title: 'Present Continuous for Future',
    description: 'Plans and arrangements',
    icon: '📅',
    exercises: [
      { id: 'pcf-ex1', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'I ___ a party next weekend.', translation: 'Eu estou organizando uma festa para o próximo fim de semana.', options: ['am having', 'have', 'having', 'has'], correctAnswer: 'am having', points: 10 },
      { id: 'pcf-ex2', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'She ___ to London tomorrow.', translation: 'Ela está viajando para Londres amanhã.', options: ['flies', 'is flying', 'fly', 'flying'], correctAnswer: 'is flying', points: 10 },
      { id: 'pcf-ex3', sectionId: 'pres-continuous', type: 'fill-blank', question: 'They ___ the wedding in June.', translation: 'Eles estão casando em junho.', correctAnswer: 'are getting married', explanation: 'Use Present Continuous for planned events.', points: 15 },
      { id: 'pcf-ex4', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'We ___ dinner at 8pm.', translation: 'Nós vamos jantar às 20h.', options: ['have', 'are having', 'having', 'has'], correctAnswer: 'are having', points: 10 },
      { id: 'pcf-ex5', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'He ___ a meeting at 3pm.', translation: 'Ele tem uma reunião às 15h.', options: ['has', 'is having', 'have', 'having'], correctAnswer: 'is having', points: 10 },
      { id: 'pcf-ex6', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'I ___ to the doctor tomorrow.', translation: 'Eu vou ao médico amanhã.', options: ['go', 'am going', 'going', 'was going'], correctAnswer: 'am going', points: 10 },
      { id: 'pcf-ex7', sectionId: 'pres-continuous', type: 'fill-blank', question: 'She ___ her sister next week.', translation: 'Ela está visitando a irmã semana que vem.', correctAnswer: 'is visiting', explanation: 'Use Present Continuous for arranged plans.', points: 15 },
      { id: 'pcf-ex8', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'They ___ the new house next month.', translation: 'Eles estão cambiando para a casa nova mês que vem.', options: ['move', 'moves', 'are moving', 'moving'], correctAnswer: 'are moving', points: 10 },
      { id: 'pcf-ex9', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'We ___ at the hotel tonight.', translation: 'Nós vamos ficar no hotel hoje à noite.', options: ['stay', 'stays', 'staying', 'are staying'], correctAnswer: 'are staying', points: 10 },
      { id: 'pcf-ex10', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'He ___ the interview next Monday.', translation: 'Ele está fazendo a entrevista na próxima segunda.', options: ['has', 'is having', 'have', 'having'], correctAnswer: 'is having', points: 10 }
    ]
  },
  {
    id: 'stative-verbs',
    title: 'State Verbs',
    description: 'Verbs not used in continuous',
    icon: '🧠',
    exercises: [
      { id: 'st-ex1', sectionId: 'pres-simple', type: 'multiple-choice', question: 'I ___ this book.', translation: 'Eu amo este livro.', options: ['am loving', 'love', 'loving', 'loved'], correctAnswer: 'love', points: 10 },
      { id: 'st-ex2', sectionId: 'pres-simple', type: 'multiple-choice', question: 'She ___ the answer.', translation: 'Ela sabe a resposta.', options: ['is knowing', 'knows', 'knowing', 'knew'], correctAnswer: 'knows', points: 10 },
      { id: 'st-ex3', sectionId: 'pres-simple', type: 'multiple-choice', question: 'I ___ this song.', translation: 'Eu conheço esta música.', options: ['am knowing', 'know', 'knowing', 'knew'], correctAnswer: 'know', points: 10 },
      { id: 'st-ex4', sectionId: 'pres-simple', type: 'multiple-choice', question: 'He ___ rich.', translation: 'Ele é rico.', options: ['is being', 'is', 'being', 'be'], correctAnswer: 'is', points: 10 },
      { id: 'st-ex5', sectionId: 'pres-simple', type: 'multiple-choice', question: 'We ___ the truth.', translation: 'Nós acreditamos na verdade.', options: ['are believing', 'believe', 'believing', 'believed'], correctAnswer: 'believe', points: 10 },
      { id: 'st-ex6', sectionId: 'pres-simple', type: 'multiple-choice', question: 'I ___ his name.', translation: 'Eu esqueci o nome dele.', options: ['am forgetting', 'forget', 'forgets', 'forgot'], correctAnswer: 'forget', points: 10 },
      { id: 'st-ex7', sectionId: 'pres-simple', type: 'multiple-choice', question: 'She ___ intelligent.', translation: 'Ela parece inteligente.', options: ['is seeming', 'seems', 'seeming', 'seemed'], correctAnswer: 'seems', points: 10 },
      { id: 'st-ex8', sectionId: 'pres-simple', type: 'multiple-choice', question: 'I ___ this food.', translation: 'Eu gosto desta comida.', options: ['am liking', 'like', 'likes', 'liking'], correctAnswer: 'like', points: 10 },
      { id: 'st-ex9', sectionId: 'pres-simple', type: 'multiple-choice', question: 'He ___ a good person.', translation: 'Ele admira uma boa pessoa.', options: ['is respecting', 'respects', 'respecting', 'respected'], correctAnswer: 'respects', points: 10 },
      { id: 'st-ex10', sectionId: 'pres-simple', type: 'multiple-choice', question: 'We ___ the plan.', translation: 'Nós entendemos o plano.', options: ['are understanding', 'understand', 'understanding', 'understood'], correctAnswer: 'understand', points: 10 }
    ]
  },
  {
    id: 'present-perfect-continuous',
    title: 'Present Perfect Continuous',
    description: 'Have been + verb-ing',
    icon: '⏳',
    exercises: [
      { id: 'ppc-ex1', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'I ___ for two hours.', translation: 'Eu estou estudando há duas horas.', options: ['am studying', 'have been studying', 'have studying', 'studying'], correctAnswer: 'have been studying', points: 10 },
      { id: 'ppc-ex2', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'She ___ all day.', translation: 'Ela está trabalhando o dia todo.', options: ['has worked', 'has been working', 'working', 'worked'], correctAnswer: 'has been working', points: 10 },
      { id: 'ppc-ex3', sectionId: 'pres-perfect-cont', type: 'fill-blank', question: 'They ___ for months.', translation: 'Eles estão procurando emprego há meses.', correctAnswer: 'have been looking', explanation: 'Use Present Perfect Continuous for duration.', points: 15 },
      { id: 'ppc-ex4', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'He ___ English for five years.', translation: 'Ele está aprendendo inglês há cinco anos.', options: ['has learn', 'has been learning', 'learns', 'learning'], correctAnswer: 'has been learning', points: 10 },
      { id: 'ppc-ex5', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'We ___ this project since Monday.', translation: 'Nós estamos trabalhando neste projeto desde segunda.', options: ['work', 'are working', 'have been working', 'worked'], correctAnswer: 'have been working', points: 10 },
      { id: 'ppc-ex6', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'I ___ tired.', translation: 'Eu estou cansado de esperar.', options: ['am being', 'have been', 'have been being', 'being'], correctAnswer: 'have been', points: 10 },
      { id: 'ppc-ex7', sectionId: 'pres-perfect-cont', type: 'fill-blank', question: 'She ___ in the garden.', translation: 'Ela está trabalhando no jardim.', correctAnswer: 'has been working', explanation: 'Use for ongoing actions with result.', points: 15 },
      { id: 'ppc-ex8', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'They ___ for a solution.', translation: 'Eles estão procurando uma solução.', options: ['have looked', 'have been looking', 'are looking', 'looking'], correctAnswer: 'have been looking', points: 10 },
      { id: 'ppc-ex9', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'He ___ a lot lately.', translation: 'Ele tem trabalhado muito ultimamente.', options: ['has worked', 'has been working', 'worked', 'works'], correctAnswer: 'has been working', points: 10 },
      { id: 'ppc-ex10', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'I ___ this problem for days.', translation: 'Eu estou analisando este problema há dias.', options: ['am analyzing', 'have analyzed', 'have been analyzing', 'analyzed'], correctAnswer: 'have been analyzing', points: 10 }
    ]
  },
  // More Present Tenses Packs
  {
    id: 'present-perfect-experience-1',
    title: 'Present Perfect - Experience',
    description: 'Have you ever...?',
    icon: '🎯',
    exercises: [
      { id: 'ppe-1', sectionId: 'pres-perfect-exp', type: 'multiple-choice', question: 'Have you ever ___ to Paris?', translation: 'Você já foi a Paris?', options: ['been', 'gone', 'went', 'going'], correctAnswer: 'been', points: 10 },
      { id: 'ppe-2', sectionId: 'pres-perfect-exp', type: 'multiple-choice', question: 'She has never ___ a plane.', translation: 'Ela nunca entrou em um avião.', options: ['been on', 'gone on', 'got on', 'gone'], correctAnswer: 'been on', points: 10 },
      { id: 'ppe-3', sectionId: 'pres-perfect-exp', type: 'multiple-choice', question: 'I have ___ sushi before.', translation: 'Eu já comi sushi antes.', options: ['eat', 'ate', 'eaten', 'eating'], correctAnswer: 'eaten', points: 10 },
      { id: 'ppe-4', sectionId: 'pres-perfect-exp', type: 'multiple-choice', question: 'They have ___ here before.', translation: 'Eles já ficaram aqui antes.', options: ['stay', 'stayed', 'staying', 'stays'], correctAnswer: 'stayed', points: 10 },
      { id: 'ppe-5', sectionId: 'pres-perfect-exp', type: 'multiple-choice', question: 'Have you ever ___ a tattoo?', translation: 'Você já fez uma tatuagem?', options: ['have', 'had', 'having', 'has'], correctAnswer: 'had', points: 10 },
      { id: 'ppe-6', sectionId: 'pres-perfect-exp', type: 'multiple-choice', question: 'He has never ___ to another country.', translation: 'Ele nunca viajou para outro país.', options: ['go', 'went', 'gone', 'been'], correctAnswer: 'been', points: 10 },
      { id: 'ppe-7', sectionId: 'pres-perfect-exp', type: 'multiple-choice', question: 'We have ___ this before.', translation: 'Já fizemos isso antes.', options: ['do', 'did', 'done', 'doing'], correctAnswer: 'done', points: 10 },
      { id: 'ppe-8', sectionId: 'pres-perfect-exp', type: 'multiple-choice', question: 'Have you ever ___ skydiving?', translation: 'Você já fez paracaidismo?', options: ['try', 'tried', 'trying', 'tries'], correctAnswer: 'tried', points: 10 },
      { id: 'ppe-9', sectionId: 'pres-perfect-exp', type: 'multiple-choice', question: 'She has ___ snow before.', translation: 'Ela já viu neve antes.', options: ['see', 'saw', 'seen', 'seeing'], correctAnswer: 'seen', points: 10 },
      { id: 'ppe-10', sectionId: 'pres-perfect-exp', type: 'multiple-choice', question: 'I have never ___ a job.', translation: 'Eu nunca perdi um emprego.', options: ['lose', 'lost', 'losing', 'looses'], correctAnswer: 'lost', points: 10 }
    ]
  },
  {
    id: 'present-perfect-recent-1',
    title: 'Present Perfect - Recent Actions',
    description: 'Just, already, yet',
    icon: '🕐',
    exercises: [
      { id: 'ppr-1', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'I have ___ finished my homework.', translation: 'Acabei de terminar minha lição.', options: ['just', 'already', 'yet', 'ever'], correctAnswer: 'just', points: 10 },
      { id: 'ppr-2', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'She has ___ left the office.', translation: 'Ela já saiu do escritório.', options: ['just', 'already', 'yet', 'never'], correctAnswer: 'already', points: 10 },
      { id: 'ppr-3', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'Have you ___ seen the movie?', translation: 'Você já viu o filme?', options: ['just', 'already', 'yet', 'never'], correctAnswer: 'already', points: 10 },
      { id: 'ppr-4', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'They haven\'t ___ arrived.', translation: 'Eles ainda não chegaram.', options: ['just', 'already', 'yet', 'ever'], correctAnswer: 'yet', points: 10 },
      { id: 'ppr-5', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'I have ___ called the doctor.', translation: 'Acabei de ligar para o médico.', options: ['just', 'already', 'yet', 'never'], correctAnswer: 'just', points: 10 },
      { id: 'ppr-6', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'We have ___ done the shopping.', translation: 'Já fizemos as compras.', options: ['just', 'already', 'yet', 'never'], correctAnswer: 'already', points: 10 },
      { id: 'ppr-7', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'Has he ___ finished the report?', translation: 'Ele já terminou o relatório?', options: ['just', 'already', 'yet', 'ever'], correctAnswer: 'already', points: 10 },
      { id: 'ppr-8', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'I haven\'t ___ eaten breakfast.', translation: 'Eu ainda não comi café da manhã.', options: ['just', 'already', 'yet', 'never'], correctAnswer: 'yet', points: 10 },
      { id: 'ppr-9', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'She has ___ cleaned the house.', translation: 'Ela já limpou a casa.', options: ['just', 'already', 'yet', 'never'], correctAnswer: 'already', points: 10 },
      { id: 'ppr-10', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'Have you ___ spoken to him?', translation: 'Você já falou com ele?', options: ['just', 'already', 'yet', 'never'], correctAnswer: 'already', points: 10 }
    ]
  },
  {
    id: 'present-perfect-since-for-1',
    title: 'Present Perfect - Since & For',
    description: 'Duration with since and for',
    icon: '⏰',
    exercises: [
      { id: 'ppsf-1', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'I have lived here ___ 5 years.', translation: 'Eu moro aqui há 5 anos.', options: ['since', 'for', 'in', 'on'], correctAnswer: 'for', points: 10 },
      { id: 'ppsf-2', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'She has worked here ___ 2019.', translation: 'Ela trabalha aqui desde 2019.', options: ['since', 'for', 'in', 'on'], correctAnswer: 'since', points: 10 },
      { id: 'ppsf-3', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'They have been waiting ___ hours.', translation: 'Eles estão esperando há horas.', options: ['since', 'for', 'in', 'on'], correctAnswer: 'for', points: 10 },
      { id: 'ppsf-4', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'We have known each other ___ a long time.', translation: 'Nos conhecemos há muito tempo.', options: ['since', 'for', 'in', 'on'], correctAnswer: 'for', points: 10 },
      { id: 'ppsf-5', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'He has been sick ___ Monday.', translation: 'Ele está doente desde segunda-feira.', options: ['since', 'for', 'in', 'on'], correctAnswer: 'since', points: 10 },
      { id: 'ppsf-6', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'I have been learning English ___ 3 years.', translation: 'Estou aprendendo inglês há 3 anos.', options: ['since', 'for', 'in', 'on'], correctAnswer: 'for', points: 10 },
      { id: 'ppsf-7', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'She has been here ___ this morning.', translation: 'Ela está aqui desde esta manhã.', options: ['since', 'for', 'in', 'on'], correctAnswer: 'since', points: 10 },
      { id: 'ppsf-8', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'They have been married ___ 10 years.', translation: 'Casados há 10 anos.', options: ['since', 'for', 'in', 'on'], correctAnswer: 'for', points: 10 },
      { id: 'ppsf-9', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'I have been waiting ___ 8 o\'clock.', translation: 'Estou esperando desde as 8h.', options: ['since', 'for', 'in', 'on'], correctAnswer: 'since', points: 10 },
      { id: 'ppsf-10', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'We have been friends ___ childhood.', translation: 'Somos amigos desde a infância.', options: ['since', 'for', 'in', 'on'], correctAnswer: 'since', points: 10 }
    ]
  },
  {
    id: 'present-continuous-sensations-1',
    title: 'Present Continuous - Sensations',
    description: 'Feelings and sensations',
    icon: '👂',
    exercises: [
      { id: 'pcsens-1', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'I ___ great today!', translation: 'Eu estou me sentindo ótimo hoje!', options: ['feel', 'feeling', 'am feeling', 'feels'], correctAnswer: 'am feeling', points: 10 },
      { id: 'pcsens-2', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'The food ___ delicious.', translation: 'A comida está cheirando deliciosa.', options: ['smell', 'smells', 'smelling', 'is smelling'], correctAnswer: 'smells', points: 10 },
      { id: 'pcsens-3', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'This ___ weird.', translation: 'Isso está parecendo estranho.', options: ['seem', 'seems', 'seeming', 'is seeming'], correctAnswer: 'seems', points: 10 },
      { id: 'pcsens-4', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'I ___ tired lately.', translation: 'Estou me sentindo cansado ultimamente.', options: ['feel', 'feeling', 'am feeling', 'feels'], correctAnswer: 'am feeling', points: 10 },
      { id: 'pcsens-5', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'The weather ___ nicer.', translation: 'O clima está ficar mais agradável.', options: ['get', 'gets', 'getting', 'is getting'], correctAnswer: 'is getting', points: 10 },
      { id: 'pcsens-6', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'Everything ___ fine.', translation: 'Tudo está parecer bem.', options: ['look', 'looks', 'looking', 'is looking'], correctAnswer: 'looks', points: 10 },
      { id: 'pcsens-7', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'I ___ better now.', translation: 'Estou me sentindo melhor agora.', options: ['feel', 'feeling', 'am feeling', 'feels'], correctAnswer: 'am feeling', points: 10 },
      { id: 'pcsens-8', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'The music ___ loud.', translation: 'A música está ficar alta.', options: ['sound', 'sounds', 'sounding', 'is sounding'], correctAnswer: 'sounds', points: 10 },
      { id: 'pcsens-9', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'She ___ excited.', translation: 'Ela está parecer animada.', options: ['seem', 'seems', 'seeming', 'is seeming'], correctAnswer: 'seems', points: 10 },
      { id: 'pcsens-10', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'The situation ___ complicated.', translation: 'A situação está ficar complicateda.', options: ['get', 'gets', 'getting', 'is getting'], correctAnswer: 'is getting', points: 10 }
    ]
  },
  {
    id: 'present-simple-third-person-1',
    title: 'Present Simple - Third Person',
    description: 'He/She/It verbs',
    icon: '👤',
    exercises: [
      { id: 'pstp-1', sectionId: 'pres-simple', type: 'multiple-choice', question: 'He ___ to the gym every day.', translation: 'Ele vai para a academia todos os dias.', options: ['go', 'goes', 'going', 'went'], correctAnswer: 'goes', points: 10 },
      { id: 'pstp-2', sectionId: 'pres-simple', type: 'multiple-choice', question: 'She ___ a book every week.', translation: 'Ela lê um livro por semana.', options: ['read', 'reads', 'reading', 'readed'], correctAnswer: 'reads', points: 10 },
      { id: 'pstp-3', sectionId: 'pres-simple', type: 'multiple-choice', question: 'It ___ every night.', translation: 'Chove todas as noites.', options: ['rain', 'rains', 'raining', 'rained'], correctAnswer: 'rains', points: 10 },
      { id: 'pstp-4', sectionId: 'pres-simple', type: 'multiple-choice', question: 'He ___ coffee every morning.', translation: 'Ele toma café toda manhã.', options: ['have', 'has', 'having', 'had'], correctAnswer: 'has', points: 10 },
      { id: 'pstp-5', sectionId: 'pres-simple', type: 'multiple-choice', question: 'She ___ very fast.', translation: 'Ela conduz muito rápido.', options: ['drive', 'drives', 'driving', 'drove'], correctAnswer: 'drives', points: 10 },
      { id: 'pstp-6', sectionId: 'pres-simple', type: 'multiple-choice', question: 'The sun ___ in the west.', translation: 'O sol se põe no oeste.', options: ['set', 'sets', 'setting', 'setted'], correctAnswer: 'sets', points: 10 },
      { id: 'pstp-7', sectionId: 'pres-simple', type: 'multiple-choice', question: 'He ___ the truth.', translation: 'Ele sempre diz a verdade.', options: ['say', 'says', 'saying', 'said'], correctAnswer: 'says', points: 10 },
      { id: 'pstp-8', sectionId: 'pres-simple', type: 'multiple-choice', question: 'She ___ a doctor.', translation: 'Ela trabalha como médica.', options: ['work', 'works', 'working', 'worked'], correctAnswer: 'works', points: 10 },
      { id: 'pstp-9', sectionId: 'pres-simple', type: 'multiple-choice', question: 'It ___ a lot of money.', translation: 'Custa muito dinheiro.', options: ['cost', 'costs', 'costing', 'costed'], correctAnswer: 'costs', points: 10 },
      { id: 'pstp-10', sectionId: 'pres-simple', type: 'multiple-choice', question: 'He ___ his promises.', translation: 'Ele mantém suas promessas.', options: ['keep', 'keeps', 'keeping', 'kept'], correctAnswer: 'keeps', points: 10 }
    ]
  },
  {
    id: 'present-simple-negative-1',
    title: 'Present Simple - Negative',
    description: 'Negative sentences',
    icon: '❌',
    exercises: [
      { id: 'psn-1', sectionId: 'pres-simple', type: 'multiple-choice', question: 'She ___ coffee.', translation: 'Ela não bebe café.', options: ['doesn\'t drink', 'don\'t drink', 'not drink', 'no drink'], correctAnswer: 'doesn\'t drink', points: 10 },
      { id: 'psn-2', sectionId: 'pres-simple', type: 'multiple-choice', question: 'He ___ to the party.', translation: 'Ele não vai para a festa.', options: ['doesn\'t go', 'don\'t go', 'not go', 'no go'], correctAnswer: 'doesn\'t go', points: 10 },
      { id: 'psn-3', sectionId: 'pres-simple', type: 'multiple-choice', question: 'They ___ English.', translation: 'Eles não falam inglês.', options: ['don\'t speak', 'doesn\'t speak', 'not speak', 'no speak'], correctAnswer: 'don\'t speak', points: 10 },
      { id: 'psn-4', sectionId: 'pres-simple', type: 'multiple-choice', question: 'It ___ here.', translation: 'Não pertence aqui.', options: ['doesn\'t belong', 'don\'t belong', 'not belong', 'no belong'], correctAnswer: 'doesn\'t belong', points: 10 },
      { id: 'psn-5', sectionId: 'pres-simple', type: 'multiple-choice', question: 'She ___ meat.', translation: 'Ela não come carne.', options: ['doesn\'t eat', 'don\'t eat', 'not eat', 'no eat'], correctAnswer: 'doesn\'t eat', points: 10 },
      { id: 'psn-6', sectionId: 'pres-simple', type: 'multiple-choice', question: 'He ___ this movie.', translation: 'Ele não gosta deste filme.', options: ['doesn\'t like', 'don\'t like', 'not like', 'no like'], correctAnswer: 'doesn\'t like', points: 10 },
      { id: 'psn-7', sectionId: 'pres-simple', type: 'multiple-choice', question: 'They ___ here anymore.', translation: 'Não moram mais aqui.', options: ['don\'t live', 'doesn\'t live', 'not live', 'no live'], correctAnswer: 'don\'t live', points: 10 },
      { id: 'psn-8', sectionId: 'pres-simple', type: 'multiple-choice', question: 'It ___ sense.', translation: 'Não faz sentido.', options: ['doesn\'t make', 'don\'t make', 'not make', 'no make'], correctAnswer: 'doesn\'t make', points: 10 },
      { id: 'psn-9', sectionId: 'pres-simple', type: 'multiple-choice', question: 'She ___ on Sundays.', translation: 'Ela não trabalha aos domingos.', options: ['doesn\'t work', 'don\'t work', 'not work', 'no work'], correctAnswer: 'doesn\'t work', points: 10 },
      { id: 'psn-10', sectionId: 'pres-simple', type: 'multiple-choice', question: 'He ___ his homework.', translation: 'Ele não faz a lição de casa.', options: ['doesn\'t do', 'don\'t do', 'not do', 'no do'], correctAnswer: 'doesn\'t do', points: 10 }
    ]
  },
  {
    id: 'present-simple-questions-1',
    title: 'Present Simple - Questions',
    description: 'Question formation',
    icon: '❓',
    exercises: [
      { id: 'psq-1', sectionId: 'pres-simple', type: 'multiple-choice', question: '___ she like coffee?', translation: 'Ela gosta de café?', options: ['Do', 'Does', 'Is', 'Can'], correctAnswer: 'Does', points: 10 },
      { id: 'psq-2', sectionId: 'pres-simple', type: 'multiple-choice', question: '___ he work here?', translation: 'Ele trabalha aqui?', options: ['Do', 'Does', 'Is', 'Can'], correctAnswer: 'Does', points: 10 },
      { id: 'psq-3', sectionId: 'pres-simple', type: 'multiple-choice', question: '___ they live in London?', translation: 'Eles moram em Londres?', options: ['Do', 'Does', 'Is', 'Can'], correctAnswer: 'Do', points: 10 },
      { id: 'psq-4', sectionId: 'pres-simple', type: 'multiple-choice', question: '___ it rain a lot here?', translation: 'Chove muito aqui?', options: ['Do', 'Does', 'Is', 'Can'], correctAnswer: 'Does', points: 10 },
      { id: 'psq-5', sectionId: 'pres-simple', type: 'multiple-choice', question: '___ you speak English?', translation: 'Você fala inglês?', options: ['Do', 'Does', 'Is', 'Can'], correctAnswer: 'Do', points: 10 },
      { id: 'psq-6', sectionId: 'pres-simple', type: 'multiple-choice', question: '___ she have a car?', translation: 'Ela tem um carro?', options: ['Do', 'Does', 'Has', 'Is'], correctAnswer: 'Does', points: 10 },
      { id: 'psq-7', sectionId: 'pres-simple', type: 'multiple-choice', question: '___ they want to come?', translation: 'Eles querem vir?', options: ['Do', 'Does', 'Is', 'Can'], correctAnswer: 'Do', points: 10 },
      { id: 'psq-8', sectionId: 'pres-simple', type: 'multiple-choice', question: '___ it cost much?', translation: 'Custa muito?', options: ['Do', 'Does', 'Is', 'Can'], correctAnswer: 'Does', points: 10 },
      { id: 'psq-9', sectionId: 'pres-simple', type: 'multiple-choice', question: '___ you need help?', translation: 'Você precisa de ajuda?', options: ['Do', 'Does', 'Is', 'Can'], correctAnswer: 'Do', points: 10 },
      { id: 'psq-10', sectionId: 'pres-simple', type: 'multiple-choice', question: '___ she play piano?', translation: 'Ela toca piano?', options: ['Do', 'Does', 'Is', 'Can'], correctAnswer: 'Does', points: 10 }
    ]
  },
  {
    id: 'present-continuous-change-1',
    title: 'Present Continuous - Changes',
    description: 'Verbs describing changes',
    icon: '🔄',
    exercises: [
      { id: 'pccc-1', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'The weather ___ colder.', translation: 'O clima está ficar mais frio.', options: ['get', 'gets', 'getting', 'is getting'], correctAnswer: 'is getting', points: 10 },
      { id: 'pccc-2', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'The company ___ bigger.', translation: 'A empresa está ficar maior.', options: ['become', 'becomes', 'becoming', 'is becoming'], correctAnswer: 'is becoming', points: 10 },
      { id: 'pccc-3', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'Things ___ better.', translation: 'As coisas estão melhorando.', options: ['get', 'gets', 'getting', 'are getting'], correctAnswer: 'are getting', points: 10 },
      { id: 'pccc-4', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'The city ___ more crowded.', translation: 'A cidade está ficar mais lotada.', options: ['grow', 'grows', 'growing', 'is growing'], correctAnswer: 'is growing', points: 10 },
      { id: 'pccc-5', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'Your English ___ better.', translation: 'Seu inglês está melhorar.', options: ['improve', 'improves', 'improving', 'is improving'], correctAnswer: 'is improving', points: 10 },
      { id: 'pccc-6', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'The situation ___ worse.', translation: 'A situação está piorar.', options: ['get', 'gets', 'getting', 'is getting'], correctAnswer: 'is getting', points: 10 },
      { id: 'pccc-7', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'Everything ___ different.', translation: 'Tudo está ficar diferente.', options: ['seem', 'seems', 'seeming', 'is seeming'], correctAnswer: 'seems', points: 10 },
      { id: 'pccc-8', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'The world ___ more digital.', translation: 'O mundo está ficar mais digital.', options: ['become', 'becomes', 'becoming', 'is becoming'], correctAnswer: 'is becoming', points: 10 },
      { id: 'pccc-9', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'She ___ more confident.', translation: 'Ela está ficar mais confiante.', options: ['become', 'becomes', 'becoming', 'is becoming'], correctAnswer: 'is becoming', points: 10 },
      { id: 'pccc-10', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'Things ___ more expensive.', translation: 'As coisas estão ficar mais caras.', options: ['get', 'gets', 'getting', 'are getting'], correctAnswer: 'are getting', points: 10 }
    ]
  },
  {
    id: 'present-perfect-questions-1',
    title: 'Present Perfect - Questions',
    description: 'Questions with Present Perfect',
    icon: '❓',
    exercises: [
      { id: 'ppq-1', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ you ever been to Japan?', translation: 'Você já foi ao Japão?', options: ['Have', 'Has', 'Do', 'Does'], correctAnswer: 'Have', points: 10 },
      { id: 'ppq-2', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ she finished her work?', translation: 'Ela terminou o trabalho?', options: ['Have', 'Has', 'Do', 'Does'], correctAnswer: 'Has', points: 10 },
      { id: 'ppq-3', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ they arrived yet?', translation: 'Eles já chegaram?', options: ['Have', 'Has', 'Do', 'Does'], correctAnswer: 'Have', points: 10 },
      { id: 'ppq-4', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ he called you?', translation: 'Ele te ligou?', options: ['Have', 'Has', 'Did', 'Does'], correctAnswer: 'Has', points: 10 },
      { id: 'ppq-5', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ you seen the news?', translation: 'Você viu as notícias?', options: ['Have', 'Has', 'Did', 'Does'], correctAnswer: 'Have', points: 10 },
      { id: 'ppq-6', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ it stopped raining?', translation: 'Parou de chover?', options: ['Has', 'Have', 'Did', 'Does'], correctAnswer: 'Has', points: 10 },
      { id: 'ppq-7', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ they made a decision?', translation: 'Eles tomaram uma decisão?', options: ['Have', 'Has', 'Did', 'Do'], correctAnswer: 'Have', points: 10 },
      { id: 'ppq-8', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ he left the company?', translation: 'Ele deixou a empresa?', options: ['Has', 'Have', 'Did', 'Does'], correctAnswer: 'Has', points: 10 },
      { id: 'ppq-9', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ you spoken to your manager?', translation: 'Você falou com seu gerente?', options: ['Have', 'Has', 'Did', 'Does'], correctAnswer: 'Have', points: 10 },
      { id: 'ppq-10', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ she recovered from the illness?', translation: 'Ela se recuperou da doença?', options: ['Has', 'Have', 'Did', 'Does'], correctAnswer: 'Has', points: 10 }
    ]
  },
  {
    id: 'present-perfect-cont-duration-1',
    title: 'Present Perfect Continuous - Duration',
    description: 'How long questions',
    icon: '⏳',
    exercises: [
      { id: 'ppcd-1', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'How long ___ learning English?', translation: 'Há quanto tempo você está aprendendo inglês?', options: ['have you been', 'has she been', 'are you', 'do you'], correctAnswer: 'have you been', points: 10 },
      { id: 'ppcd-2', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'How long ___ working here?', translation: 'Há quanto tempo ela trabalha aqui?', options: ['have you been', 'has she been', 'is she', 'does she'], correctAnswer: 'has she been', points: 10 },
      { id: 'ppcd-3', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'How long ___ waiting?', translation: 'Há quanto tempo vocês estão esperando?', options: ['have they been', 'has it been', 'are they', 'do they'], correctAnswer: 'have they been', points: 10 },
      { id: 'ppcd-4', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'How long ___ driving?', translation: 'Há quanto tempo ele está dirigindo?', options: ['has he been', 'have they been', 'is he', 'does he'], correctAnswer: 'has he been', points: 10 },
      { id: 'ppcd-5', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'How long ___ living here?', translation: 'Há quanto tempo você mora aqui?', options: ['have you been', 'has she been', 'are you', 'do you'], correctAnswer: 'have you been', points: 10 },
      { id: 'ppcd-6', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'How long ___ studying?', translation: 'Há quanto tempo nós estamos estudando?', options: ['have we been', 'has it been', 'are we', 'do we'], correctAnswer: 'have we been', points: 10 },
      { id: 'ppcd-7', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'How long ___ looking for a job?', translation: 'Há quanto tempo ela está procurando emprego?', options: ['has she been', 'have you been', 'is she', 'does she'], correctAnswer: 'has she been', points: 10 },
      { id: 'ppcd-8', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'How long ___ working on this project?', translation: 'Há quanto tempo vocês estão trabalhando neste projeto?', options: ['have they been', 'has it been', 'are they', 'do they'], correctAnswer: 'have they been', points: 10 },
      { id: 'ppcd-9', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'How long ___ raining?', translation: 'Há quanto tempo está chovendo?', options: ['has it been', 'have they been', 'is it', 'does it'], correctAnswer: 'has it been', points: 10 },
      { id: 'ppcd-10', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'How long ___ waiting for me?', translation: 'Há quanto tempo você está me esperando?', options: ['have you been', 'has she been', 'are you', 'do you'], correctAnswer: 'have you been', points: 10 }
    ]
  },
  {
    id: 'present-perfect-cont-result-1',
    title: 'Present Perfect Continuous - Result',
    description: 'Actions with visible results',
    icon: '🎯',
    exercises: [
      { id: 'ppcr-1', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'I ___ working. That\'s why I\'m tired.', translation: 'Eu estive trabalhando. É por isso que estou cansado.', options: ['have been', 'has been', 'am', 'was'], correctAnswer: 'have been', points: 10 },
      { id: 'ppcr-2', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'She ___ all day. She looks exhausted.', translation: 'Ela ficou o dia todo trabalhando. Ela parece exausta.', options: ['has been working', 'have been working', 'is working', 'was working'], correctAnswer: 'has been working', points: 10 },
      { id: 'ppcr-3', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'They ___ for hours. That\'s why they\'re hungry.', translation: 'Eles ficaram esperando por horas. É por isso que estão com fome.', options: ['have been waiting', 'has been waiting', 'are waiting', 'were waiting'], correctAnswer: 'have been waiting', points: 10 },
      { id: 'ppcr-4', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'We ___ the whole afternoon. We need a break.', translation: 'Passamos a tarde toda limpando. Precisamos de uma pausa.', options: ['have been cleaning', 'has been cleaning', 'are cleaning', 'were cleaning'], correctAnswer: 'have been cleaning', points: 10 },
      { id: 'ppcr-5', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'He ___ for days. He looks pale.', translation: 'Ele está doente há dias. Ele parece pálido.', options: ['has been sick', 'have been sick', 'is sick', 'was sick'], correctAnswer: 'has been sick', points: 10 },
      { id: 'ppcr-6', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'I ___ this book. My eyes hurt.', translation: 'Eu estive lendo este livro. Meus olhos doem.', options: ['have been reading', 'has been reading', 'am reading', 'was reading'], correctAnswer: 'have been reading', points: 10 },
      { id: 'ppcr-7', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'The children ___ outside. They are dirty.', translation: 'As crianças ficaram lá fora. Elas estão sujas.', options: ['have been playing', 'has been playing', 'are playing', 'were playing'], correctAnswer: 'have been playing', points: 10 },
      { id: 'ppcr-8', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'She ___ in the sun. She is red.', translation: 'Ela ficou no sol. Ela está vermelha.', options: ['has been sitting', 'have been sitting', 'is sitting', 'was sitting'], correctAnswer: 'has been sitting', points: 10 },
      { id: 'ppcr-9', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'We ___ all morning. Let\'s take a break.', translation: 'Trabalhamos a manhã toda. Vamos fazer uma pausa.', options: ['have been working', 'has been working', 'are working', 'were working'], correctAnswer: 'have been working', points: 10 },
      { id: 'ppcr-10', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'He ___ for the exam. He looks stressed.', translation: 'Ele está estudando para a prova. Ele parece estressado.', options: ['has been studying', 'have been studying', 'is studying', 'was studying'], correctAnswer: 'has been studying', points: 10 }
    ]
  },
  {
    id: 'present-simple-questions-1',
    title: 'Present Simple Questions',
    description: 'Questions in Present Simple',
    icon: '❓',
    exercises: [
      { id: 'psq-1', sectionId: 'pres-simple', type: 'multiple-choice', question: '___ she ___ English?', translation: 'Ela fala inglês?', options: ['Do...speak', 'Does...speak', 'Is...speaking', 'Did...speak'], correctAnswer: 'Does...speak', points: 10 },
      { id: 'psq-2', sectionId: 'pres-simple', type: 'multiple-choice', question: '___ they ___ to the gym?', translation: 'Eles vão à academia?', options: ['Do...go', 'Does...go', 'Are...going', 'Did...go'], correctAnswer: 'Do...go', points: 10 },
      { id: 'psq-3', sectionId: 'pres-simple', type: 'multiple-choice', question: '___ he ___ coffee every morning?', translation: 'Ele bebe café todas as manhãs?', options: ['Do...drink', 'Does...drink', 'Is...drinking', 'Did...drink'], correctAnswer: 'Does...drink', points: 10 },
      { id: 'psq-4', sectionId: 'pres-simple', type: 'multiple-choice', question: '___ she ___ at home?', translation: 'Ela trabalha em casa?', options: ['Do...work', 'Does...work', 'Is...working', 'Did...work'], correctAnswer: 'Does...work', points: 10 },
      { id: 'psq-5', sectionId: 'pres-simple', type: 'multiple-choice', question: '___ you ___ Portuguese?', translation: 'Você fala português?', options: ['Do...speak', 'Does...speak', 'Is...speaking', 'Did...speak'], correctAnswer: 'Do...speak', points: 10 },
      { id: 'psq-6', sectionId: 'pres-simple', type: 'multiple-choice', question: '___ he ___ soccer on weekends?', translation: 'Ele joga futebol nos fins de semana?', options: ['Do...play', 'Does...play', 'Is...playing', 'Did...play'], correctAnswer: 'Does...play', points: 10 },
      { id: 'psq-7', sectionId: 'pres-simple', type: 'multiple-choice', question: '___ they ___ in London?', translation: 'Eles moram em Londres?', options: ['Do...live', 'Does...live', 'Are...living', 'Did...live'], correctAnswer: 'Do...live', points: 10 },
      { id: 'psq-8', sectionId: 'pres-simple', type: 'multiple-choice', question: '___ she ___ the piano?', translation: 'Ela toca piano?', options: ['Do...play', 'Does...play', 'Is...playing', 'Did...play'], correctAnswer: 'Does...play', points: 10 },
      { id: 'psq-9', sectionId: 'pres-simple', type: 'multiple-choice', question: '___ you ___ breakfast at 7am?', translation: 'Você toma café da manhã às 7h?', options: ['Do...have', 'Does...have', 'Is...having', 'Did...have'], correctAnswer: 'Do...have', points: 10 },
      { id: 'psq-10', sectionId: 'pres-simple', type: 'multiple-choice', question: '___ he ___ the news?', translation: 'Ele lê as notícias?', options: ['Do...read', 'Does...read', 'Is...reading', 'Did...read'], correctAnswer: 'Does...read', points: 10 }
    ]
  },
  {
    id: 'present-continuous-questions-1',
    title: 'Present Continuous Questions',
    description: 'Questions in Present Continuous',
    icon: '❓',
    exercises: [
      { id: 'pcq-1', sectionId: 'pres-continuous', type: 'multiple-choice', question: '___ you ___ right now?', translation: 'Você está trabalhando agora?', options: ['Are...working', 'Do...work', 'Is...working', 'Were...working'], correctAnswer: 'Are...working', points: 10 },
      { id: 'pcq-2', sectionId: 'pres-continuous', type: 'multiple-choice', question: '___ she ___ a book?', translation: 'Ela está lendo um livro?', options: ['Is...reading', 'Are...reading', 'Does...read', 'Did...read'], correctAnswer: 'Is...reading', points: 10 },
      { id: 'pcq-3', sectionId: 'pres-continuous', type: 'multiple-choice', question: '___ they ___ outside?', translation: 'Eles estão jogando lá fora?', options: ['Are...playing', 'Do...play', 'Is...playing', 'Were...playing'], correctAnswer: 'Are...playing', points: 10 },
      { id: 'pcq-4', sectionId: 'pres-continuous', type: 'multiple-choice', question: '___ he ___ to music?', translation: 'Ele está ouvindo música?', options: ['Is...listening', 'Are...listening', 'Does...listen', 'Did...listen'], correctAnswer: 'Is...listening', points: 10 },
      { id: 'pcq-5', sectionId: 'pres-continuous', type: 'multiple-choice', question: '___ we ___ the right thing?', translation: 'Estamos fazendo a coisa certa?', options: ['Are...doing', 'Do...do', 'Is...doing', 'Were...doing'], correctAnswer: 'Are...doing', points: 10 },
      { id: 'pcq-6', sectionId: 'pres-continuous', type: 'multiple-choice', question: '___ it ___ outside?', translation: 'Está chovendo lá fora?', options: ['Is...raining', 'Are...raining', 'Does...rain', 'Did...rain'], correctAnswer: 'Is...raining', points: 10 },
      { id: 'pcq-7', sectionId: 'pres-continuous', type: 'multiple-choice', question: '___ she ___ dinner?', translation: 'Ela está preparando o jantar?', options: ['Is...cooking', 'Are...cooking', 'Does...cook', 'Did...cook'], correctAnswer: 'Is...cooking', points: 10 },
      { id: 'pcq-8', sectionId: 'pres-continuous', type: 'multiple-choice', question: '___ they ___ for the test?', translation: 'Eles estão estudando para a prova?', options: ['Are...studying', 'Do...study', 'Is...studying', 'Were...studying'], correctAnswer: 'Are...studying', points: 10 },
      { id: 'pcq-9', sectionId: 'pres-continuous', type: 'multiple-choice', question: '___ he ___ his homework?', translation: 'Ele está fazendo sua lição?', options: ['Is...doing', 'Are...doing', 'Does...do', 'Did...do'], correctAnswer: 'Is...doing', points: 10 },
      { id: 'pcq-10', sectionId: 'pres-continuous', type: 'multiple-choice', question: '___ you ___ anything?', translation: 'Você está fazendo algo?', options: ['Are...doing', 'Do...do', 'Is...doing', 'Did...do'], correctAnswer: 'Are...doing', points: 10 }
    ]
  },
  {
    id: 'present-perfect-simple-1',
    title: 'Present Perfect Simple',
    description: 'Have/has + past participle',
    icon: '✅',
    exercises: [
      { id: 'pps-1', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'I ___ to Paris twice.', translation: 'Eu fui a Paris duas vezes.', options: ['have been', 'has been', 'am', 'was'], correctAnswer: 'have been', points: 10 },
      { id: 'pps-2', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'She ___ her homework.', translation: 'Ela fez sua lição.', options: ['has done', 'have done', 'did', 'is doing'], correctAnswer: 'has done', points: 10 },
      { id: 'pps-3', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'They ___ a lot of money.', translation: 'Eles ganharam muito dinheiro.', options: ['have earned', 'has earned', 'earned', 'are earning'], correctAnswer: 'have earned', points: 10 },
      { id: 'pps-4', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'He ___ a new car.', translation: 'Ele comprou um carro novo.', options: ['has bought', 'have bought', 'bought', 'is buying'], correctAnswer: 'has bought', points: 10 },
      { id: 'pps-5', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'We ___ this before.', translation: 'Já fizemos isso antes.', options: ['have done', 'has done', 'did', 'are doing'], correctAnswer: 'have done', points: 10 },
      { id: 'pps-6', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'She ___ a lot of books.', translation: 'Ela leu muitos livros.', options: ['has read', 'have read', 'read', 'is reading'], correctAnswer: 'has read', points: 10 },
      { id: 'pps-7', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'I ___ the movie yet.', translation: 'Eu ainda não assisti o filme.', options: ['have not seen', 'has not seen', 'did not see', 'am not seeing'], correctAnswer: 'have not seen', points: 10 },
      { id: 'pps-8', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'They ___ to this city before.', translation: 'Eles nunca vieram a esta cidade antes.', options: ['have come', 'has come', 'came', 'are coming'], correctAnswer: 'have come', points: 10 },
      { id: 'pps-9', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'He ___ his job recently.', translation: 'Ele mudou de emprego recentemente.', options: ['has changed', 'have changed', 'changed', 'is changing'], correctAnswer: 'has changed', points: 10 },
      { id: 'pps-10', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'We ___ a great time.', translation: 'Nos divertimos muito.', options: ['have had', 'has had', 'had', 'are having'], correctAnswer: 'have had', points: 10 }
    ]
  },
  {
    id: 'present-perfect-questions-1',
    title: 'Present Perfect Questions',
    description: 'Questions in Present Perfect',
    icon: '❓',
    exercises: [
      { id: 'ppq-1', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ you ___ to London?', translation: 'Você foi a Londres?', options: ['Have...been', 'Has...been', 'Did...go', 'Are...going'], correctAnswer: 'Have...been', points: 10 },
      { id: 'ppq-2', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ she ___ the test?', translation: 'Ela já fez a prova?', options: ['Has...taken', 'Have...taken', 'Did...take', 'Is...taking'], correctAnswer: 'Has...taken', points: 10 },
      { id: 'ppq-3', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ they ___ their work?', translation: 'Eles terminaram o trabalho?', options: ['Have...finished', 'Has...finished', 'Did...finish', 'Are...finishing'], correctAnswer: 'Have...finished', points: 10 },
      { id: 'ppq-4', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ he ___ the letter?', translation: 'Ele escreveu a carta?', options: ['Has...written', 'Have...written', 'Did...write', 'Is...writing'], correctAnswer: 'Has...written', points: 10 },
      { id: 'ppq-5', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ we ___ this before?', translation: 'Já fizemos isso antes?', options: ['Have...done', 'Has...done', 'Did...do', 'Are...doing'], correctAnswer: 'Have...done', points: 10 },
      { id: 'ppq-6', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ you ___ to the doctor?', translation: 'Você foi ao médico?', options: ['Have...been', 'Has...been', 'Did...go', 'Are...going'], correctAnswer: 'Have...been', points: 10 },
      { id: 'ppq-7', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ she ___ home?', translation: 'Ela já chegou em casa?', options: ['Has...arrived', 'Have...arrived', 'Did...arrive', 'Is...arriving'], correctAnswer: 'Has...arrived', points: 10 },
      { id: 'ppq-8', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ they ___ the news?', translation: 'Eles ouviram as notícias?', options: ['Have...heard', 'Has...heard', 'Did...hear', 'Are...hearing'], correctAnswer: 'Have...heard', points: 10 },
      { id: 'ppq-9', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ it ___ in the morning?', translation: 'Choveu de manhã?', options: ['Has...rained', 'Have...rained', 'Did...rain', 'Is...raining'], correctAnswer: 'Has...rained', points: 10 },
      { id: 'ppq-10', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ you ___ the book?', translation: 'Você leu o livro?', options: ['Have...read', 'Has...read', 'Did...read', 'Are...reading'], correctAnswer: 'Have...read', points: 10 }
    ]
  },
  {
    id: 'present-perfect-yes-no-1',
    title: 'Present Perfect Yes/No',
    description: 'Yes/No questions in Present Perfect',
    icon: '✅',
    exercises: [
      { id: 'ppyes-1', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ you ever ___ sushi?', translation: 'Você já comeu sushi?', options: ['Have...eaten', 'Has...eaten', 'Did...eat', 'Do...eat'], correctAnswer: 'Have...eaten', points: 10 },
      { id: 'ppyes-2', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ she ___ her keys?', translation: 'Ela encontrou as chaves?', options: ['Has...found', 'Have...found', 'Did...find', 'Does...find'], correctAnswer: 'Has...found', points: 10 },
      { id: 'ppyes-3', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ they ___ abroad?', translation: ' eles já viajaram para o exterior?', options: ['Have...traveled', 'Has...traveled', 'Did...travel', 'Do...travel'], correctAnswer: 'Have...traveled', points: 10 },
      { id: 'ppyes-4', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ he ___ the truth?', translation: 'Ele disse a verdade?', options: ['Has...told', 'Have...told', 'Did...tell', 'Does...tell'], correctAnswer: 'Has...told', points: 10 },
      { id: 'ppyes-5', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ we ___ all the tasks?', translation: 'Completamos todas as tarefas?', options: ['Have...completed', 'Has...completed', 'Did...complete', 'Are...completing'], correctAnswer: 'Have...completed', points: 10 },
      { id: 'ppyes-6', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ you ever ___ a horse?', translation: 'Você já montou em um cavalo?', options: ['Have...ridden', 'Has...ridden', 'Did...ride', 'Do...ride'], correctAnswer: 'Have...ridden', points: 10 },
      { id: 'ppyes-7', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ it ___ yet?', translation: 'Já parou de chover?', options: ['Has...stopped', 'Have...stopped', 'Did...stop', 'Is...stopping'], correctAnswer: 'Has...stopped', points: 10 },
      { id: 'ppyes-8', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ she ___ the position?', translation: 'Ela conseguiu o cargo?', options: ['Has...got', 'Have...got', 'Did...get', 'Does...get'], correctAnswer: 'Has...got', points: 10 },
      { id: 'ppyes-9', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ you ___ your passport?', translation: 'Você encontrou seu passaporte?', options: ['Have...found', 'Has...found', 'Did...find', 'Do...find'], correctAnswer: 'Have...found', points: 10 },
      { id: 'ppyes-10', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ they ___ home?', translation: 'Eles chegaram em casa?', options: ['Have...arrived', 'Has...arrived', 'Did...arrive', 'Are...arriving'], correctAnswer: 'Have...arrived', points: 10 }
    ]
  },
  {
    id: 'present-perfect-since-for-1',
    title: 'Present Perfect: SINCE/FOR',
    description: 'Since and for with Present Perfect',
    icon: '⏰',
    exercises: [
      { id: 'ppsf-1', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'I have lived here ___ 2010.', translation: 'Moro aqui desde 2010.', options: ['since', 'for', 'during', 'in'], correctAnswer: 'since', points: 10 },
      { id: 'ppsf-2', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'She has worked here ___ five years.', translation: 'Ela trabalha aqui há cinco anos.', options: ['since', 'for', 'during', 'in'], correctAnswer: 'for', points: 10 },
      { id: 'ppsf-3', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'They have been waiting ___ 2 hours.', translation: 'Eles estão esperando há 2 horas.', options: ['since', 'for', 'during', 'in'], correctAnswer: 'for', points: 10 },
      { id: 'ppsf-4', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'He has been sick ___ Monday.', translation: 'Ele está doente desde segunda-feira.', options: ['since', 'for', 'during', 'in'], correctAnswer: 'since', points: 10 },
      { id: 'ppsf-5', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'We have known each other ___ years.', translation: 'Nos conhecemos há anos.', options: ['since', 'for', 'during', 'in'], correctAnswer: 'for', points: 10 },
      { id: 'ppsf-6', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'She has been a teacher ___ 2015.', translation: 'Ela é professora desde 2015.', options: ['since', 'for', 'during', 'in'], correctAnswer: 'since', points: 10 },
      { id: 'ppsf-7', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'I have been waiting ___ 3pm.', translation: 'Estou esperando desde as 15h.', options: ['since', 'for', 'during', 'in'], correctAnswer: 'since', points: 10 },
      { id: 'ppsf-8', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'They have lived here ___ a long time.', translation: 'Eles moram aqui há muito tempo.', options: ['since', 'for', 'during', 'in'], correctAnswer: 'for', points: 10 },
      { id: 'ppsf-9', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'He has been working here ___ a month.', translation: 'Ele trabalha aqui há um mês.', options: ['since', 'for', 'during', 'in'], correctAnswer: 'for', points: 10 },
      { id: 'ppsf-10', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'We have been friends ___ school.', translation: 'Somos amigos desde a escola.', options: ['since', 'for', 'during', 'in'], correctAnswer: 'since', points: 10 }
    ]
  },
  {
    id: 'present-perfect-negative-1',
    title: 'Present Perfect Negative',
    description: 'Negative in Present Perfect',
    icon: '❌',
    exercises: [
      { id: 'ppn-1', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'I ___ the book yet.', translation: 'Eu ainda não li o livro.', options: ['have not read', 'has not read', 'did not read', 'am not reading'], correctAnswer: 'have not read', points: 10 },
      { id: 'ppn-2', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'She ___ anything about it.', translation: 'Ela não sabe nada sobre isso.', options: ['has not heard', 'have not heard', 'did not hear', 'is not hearing'], correctAnswer: 'has not heard', points: 10 },
      { id: 'ppn-3', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'They ___ here before.', translation: 'Eles nunca esteve aqui antes.', options: ['have not been', 'has not been', 'did not go', 'are not going'], correctAnswer: 'have not been', points: 10 },
      { id: 'ppn-4', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'He ___ a new job yet.', translation: 'Ele ainda não encontrou um novo emprego.', options: ['has not found', 'have not found', 'did not find', 'is not finding'], correctAnswer: 'has not found', points: 10 },
      { id: 'ppn-5', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'We ___ any decisions yet.', translation: 'Ainda não tomamos nenhuma decisão.', options: ['have not made', 'has not made', 'did not make', 'are not making'], correctAnswer: 'have not made', points: 10 },
      { id: 'ppn-6', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'I ___ him since then.', translation: 'Eu não o vejo desde então.', options: ['have not seen', 'has not seen', 'did not see', 'am not seeing'], correctAnswer: 'have not seen', points: 10 },
      { id: 'ppn-7', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'She ___ anything in weeks.', translation: 'Ela não comprou nada em semanas.', options: ['has not bought', 'have not bought', 'did not buy', 'is not buying'], correctAnswer: 'has not bought', points: 10 },
      { id: 'ppn-8', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'They ___ to me about it.', translation: 'Eles não falaram comigo sobre isso.', options: ['have not spoken', 'has not spoken', 'did not speak', 'are not speaking'], correctAnswer: 'have not spoken', points: 10 },
      { id: 'ppn-9', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'He ___ his promise.', translation: 'Ele não cumpriu sua promessa.', options: ['has not kept', 'have not kept', 'did not keep', 'is not keeping'], correctAnswer: 'has not kept', points: 10 },
      { id: 'ppn-10', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'We ___ any problems so far.', translation: 'Não temos nenhum problema até agora.', options: ['have not had', 'has not had', 'did not have', 'are not having'], correctAnswer: 'have not had', points: 10 }
    ]
  },
  {
    id: 'present-perfect-vs-past-1',
    title: 'Present Perfect vs Past Simple',
    description: 'Differences between tenses',
    icon: '⚖️',
    exercises: [
      { id: 'ppvs-1', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'I ___ to Paris last year. (past)', translation: 'Eu fui a Paris no ano passado.', options: ['went', 'have gone', 'go', 'am going'], correctAnswer: 'went', points: 10 },
      { id: 'ppvs-2', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'I ___ to Paris twice. (experience)', translation: 'Eu fui a Paris duas vezes.', options: ['went', 'have been', 'go', 'am going'], correctAnswer: 'have been', points: 10 },
      { id: 'ppvs-3', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'She ___ yesterday. (specific time)', translation: 'Ela veio ontem.', options: ['came', 'has come', 'comes', 'is coming'], correctAnswer: 'came', points: 10 },
      { id: 'ppvs-4', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'She ___ several times. (experience)', translation: 'Ela veio várias vezes.', options: ['came', 'has come', 'comes', 'is coming'], correctAnswer: 'has come', points: 10 },
      { id: 'ppvs-5', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'They ___ the test last week.', translation: 'Eles fizeram a prova semana passada.', options: ['took', 'have taken', 'take', 'are taking'], correctAnswer: 'took', points: 10 },
      { id: 'ppvs-6', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'They ___ the test before.', translation: 'Eles já fizeram a prova antes.', options: ['took', 'have taken', 'take', 'are taking'], correctAnswer: 'have taken', points: 10 },
      { id: 'ppvs-7', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'He ___ home at 5pm. (specific time)', translation: 'Ele chegou em casa às 17h.', options: ['arrived', 'has arrived', 'arrives', 'is arriving'], correctAnswer: 'arrived', points: 10 },
      { id: 'ppvs-8', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'He ___ home yet. (experience)', translation: 'Ele já chegou em casa?', options: ['arrived', 'has arrived', 'arrives', 'is arriving'], correctAnswer: 'has arrived', points: 10 },
      { id: 'ppvs-9', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'We ___ the movie last month.', translation: 'Assistimos o filme no mês passado.', options: ['watched', 'have watched', 'watch', 'are watching'], correctAnswer: 'watched', points: 10 },
      { id: 'ppvs-10', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'We ___ this movie. (experience)', translation: 'Já assistimos este filme.', options: ['watched', 'have watched', 'watch', 'are watching'], correctAnswer: 'have watched', points: 10 }
    ]
  },
  {
    id: 'present-perfect-cont-questions-1',
    title: 'Present Perfect Continuous Questions',
    description: 'Questions in Present Perfect Continuous',
    icon: '❓',
    exercises: [
      { id: 'ppcq-1', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: '___ you ___ for long?', translation: 'Você está esperando há muito tempo?', options: ['Have...been waiting', 'Has...been waiting', 'Are...waiting', 'Did...wait'], correctAnswer: 'Have...been waiting', points: 10 },
      { id: 'ppcq-2', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: '___ she ___ on this project?', translation: 'Ela está trabalhando neste projeto há quanto tempo?', options: ['Has...been working', 'Have...been working', 'Is...working', 'Did...work'], correctAnswer: 'Has...been working', points: 10 },
      { id: 'ppcq-3', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: '___ they ___ for hours?', translation: 'They have been practicing for hours?', options: ['Have...been practicing', 'Has...been practicing', 'Are...practicing', 'Did...practice'], correctAnswer: 'Have...been practicing', points: 10 },
      { id: 'ppcq-4', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: '___ he ___ recently?', translation: 'Ele tem estudado recentemente?', options: ['Has...been studying', 'Have...been studying', 'Is...studying', 'Did...study'], correctAnswer: 'Has...been studying', points: 10 },
      { id: 'ppcq-5', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: '___ we ___ enough?', translation: "We have been working enough?", options: ['Have...been working', 'Has...been working', 'Are...working', 'Did...work'], correctAnswer: 'Have...been working', points: 10 },
      { id: 'ppcq-6', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: '___ you ___ all day?', translation: 'Você está lendo o dia todo?', options: ['Have...been reading', 'Has...been reading', 'Are...reading', 'Did...read'], correctAnswer: 'Have...been reading', points: 10 },
      { id: 'ppcq-7', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: '___ she ___ hard?', translation: 'Ela tem trabalhado duro?', options: ['Has...been working', 'Have...been working', 'Is...working', 'Did...work'], correctAnswer: 'Has...been working', points: 10 },
      { id: 'ppcq-8', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: '___ they ___ recently?', translation: 'They have been traveling recently?', options: ['Have...been traveling', 'Has...been traveling', 'Are...traveling', 'Did...travel'], correctAnswer: 'Have...been traveling', points: 10 },
      { id: 'ppcq-9', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: '___ it ___ all day?', translation: 'Está chovendo o dia todo?', options: ['Has...been raining', 'Have...been raining', 'Is...raining', 'Did...rain'], correctAnswer: 'Has...been raining', points: 10 },
      { id: 'ppcq-10', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: '___ he ___ recently?', translation: 'He has been exercising recently?', options: ['Has...been exercising', 'Have...been exercising', 'Is...exercising', 'Did...exercise'], correctAnswer: 'Has...been exercising', points: 10 }
    ]
  },
  {
    id: 'present-simple-questions-1',
    title: 'Present Simple Questions',
    description: 'Forming questions in present simple',
    icon: '❓',
    exercises: [
      { id: 'psq-1', sectionId: 'pres-simple', type: 'multiple-choice', question: '___ she ___ English?', translation: 'Does she speak English?', options: ['Does...speak', 'Do...speak', 'Is...speaking', 'Can...speak'], correctAnswer: 'Does...speak', points: 10 },
      { id: 'psq-2', sectionId: 'pres-simple', type: 'multiple-choice', question: 'Where ___ he ___ ?', translation: 'Where does he live?', options: ['does...live', 'do...live', 'is...living', 'are...living'], correctAnswer: 'does...live', points: 10 },
      { id: 'psq-3', sectionId: 'pres-simple', type: 'multiple-choice', question: 'What time ___ the train ___ ?', translation: 'What time does the train leave?', options: ['does...leave', 'do...leave', 'is...leaving', 'are...leaving'], correctAnswer: 'does...leave', points: 10 },
      { id: 'psq-4', sectionId: 'pres-simple', type: 'multiple-choice', question: 'Who ___ you ___ ?', translation: 'Who do you see?', options: ['do...see', 'does...see', 'is...seeing', 'are...seeing'], correctAnswer: 'do...see', points: 10 },
      { id: 'psq-5', sectionId: 'pres-simple', type: 'multiple-choice', question: 'How often ___ she ___ to the gym?', translation: 'How often does she go to the gym?', options: ['does...go', 'do...go', 'is...going', 'are...going'], correctAnswer: 'does...go', points: 10 },
      { id: 'psq-6', sectionId: 'pres-simple', type: 'multiple-choice', question: 'Why ___ they ___ late?', translation: 'Why are they always late?', options: ['are...being', 'do...are', 'is...being', 'are...do'], correctAnswer: 'are...being', points: 10 },
      { id: 'psq-7', sectionId: 'pres-simple', type: 'multiple-choice', question: 'When ___ the museum ___ ?', translation: 'When does the museum open?', options: ['does...open', 'do...open', 'is...opening', 'are...opening'], correctAnswer: 'does...open', points: 10 },
      { id: 'psq-8', sectionId: 'pres-simple', type: 'multiple-choice', question: 'What ___ you ___ for breakfast?', translation: 'What do you usually eat for breakfast?', options: ['do...eat', 'does...eat', 'are...eating', 'is...eating'], correctAnswer: 'do...eat', points: 10 },
      { id: 'psq-9', sectionId: 'pres-simple', type: 'multiple-choice', question: 'Where ___ your parents ___ ?', translation: 'Where do your parents live?', options: ['do...live', 'does...live', 'is...living', 'are...living'], correctAnswer: 'do...live', points: 10 },
      { id: 'psq-10', sectionId: 'pres-simple', type: 'multiple-choice', question: 'How ___ the movie ___ ?', translation: 'How does the movie end?', options: ['does...end', 'do...end', 'is...ending', 'are...ending'], correctAnswer: 'does...end', points: 10 }
    ]
  },
  {
    id: 'present-simple-negative-1',
    title: 'Present Simple Negative',
    description: 'Negative sentences in present simple',
    icon: '❌',
    exercises: [
      { id: 'psn-1', sectionId: 'pres-simple', type: 'multiple-choice', question: 'She ___ coffee.', translation: 'She does not drink coffee.', options: ['does not drink', 'do not drink', 'does not drinks', 'drink not'], correctAnswer: 'does not drink', points: 10 },
      { id: 'psn-2', sectionId: 'pres-simple', type: 'multiple-choice', question: 'They ___ meat.', translation: 'They do not eat meat.', options: ['does not eat', 'do not eat', 'does not eats', 'eat not'], correctAnswer: 'do not eat', points: 10 },
      { id: 'psn-3', sectionId: 'pres-simple', type: 'multiple-choice', question: 'He ___ early.', translation: 'He does not wake up early.', options: ['does not wake', 'do not wake', 'does not wakes', 'wake not'], correctAnswer: 'does not wake', points: 10 },
      { id: 'psn-4', sectionId: 'pres-simple', type: 'multiple-choice', question: 'We ___ the news.', translation: 'We do not watch the news.', options: ['does not watch', 'do not watch', 'does not watches', 'watch not'], correctAnswer: 'do not watch', points: 10 },
      { id: 'psn-5', sectionId: 'pres-simple', type: 'multiple-choice', question: 'She ___ Spanish.', translation: 'She does not speak Spanish.', options: ['does not speak', 'do not speak', 'does not speaks', 'speak not'], correctAnswer: 'does not speak', points: 10 },
      { id: 'psn-6', sectionId: 'pres-simple', type: 'multiple-choice', question: 'I ___ to work.', translation: 'I do not drive to work.', options: ['does not drive', 'do not drive', 'does not drives', 'drive not'], correctAnswer: 'do not drive', points: 10 },
      { id: 'psn-7', sectionId: 'pres-simple', type: 'multiple-choice', question: 'They ___ pizza.', translation: 'They do not like pizza.', options: ['does not like', 'do not like', 'does not likes', 'like not'], correctAnswer: 'do not like', points: 10 },
      { id: 'psn-8', sectionId: 'pres-simple', type: 'multiple-choice', question: 'He ___ the internet.', translation: 'He does not use the internet.', options: ['does not use', 'do not use', 'does not uses', 'use not'], correctAnswer: 'does not use', points: 10 },
      { id: 'psn-9', sectionId: 'pres-simple', type: 'multiple-choice', question: 'We ___ the project.', translation: 'We do not need the project.', options: ['does not need', 'do not need', 'does not needs', 'need not'], correctAnswer: 'do not need', points: 10 },
      { id: 'psn-10', sectionId: 'pres-simple', type: 'multiple-choice', question: 'She ___ late.', translation: 'She does not arrive late.', options: ['does not arrive', 'do not arrive', 'does not arrives', 'arrive not'], correctAnswer: 'does not arrive', points: 10 }
    ]
  },
  {
    id: 'present-continuous-uses-1',
    title: 'Present Continuous Uses',
    description: 'Temporary actions, changing situations',
    icon: '🔄',
    exercises: [
      { id: 'pcuse-1', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'I ___ a new language this year.', translation: 'I am learning a new language this year.', options: ['am learning', 'learn', 'am learn', 'learning'], correctAnswer: 'am learning', points: 10 },
      { id: 'pcuse-2', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'The weather ___ colder.', translation: 'The weather is getting colder.', options: ['is getting', 'gets', 'get', 'is get'], correctAnswer: 'is getting', points: 10 },
      { id: 'pcuse-3', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'She ___ a new job.', translation: 'She is starting a new job.', options: ['is starting', 'starts', 'start', 'starting'], correctAnswer: 'is starting', points: 10 },
      { id: 'pcuse-4', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'Things ___ quickly these days.', translation: 'Things are changing quickly these days.', options: ['are changing', 'change', 'changes', 'changing'], correctAnswer: 'are changing', points: 10 },
      { id: 'pcuse-5', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'I ___ at a hotel for now.', translation: 'I am staying at a hotel for now.', options: ['am staying', 'stay', 'staying', 'stays'], correctAnswer: 'am staying', points: 10 },
      { id: 'pcuse-6', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'He ___ taller.', translation: 'He is growing taller.', options: ['is growing', 'grows', 'grow', 'growing'], correctAnswer: 'is growing', points: 10 },
      { id: 'pcuse-7', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'The city ___ more crowded.', translation: 'The city is becoming more crowded.', options: ['is becoming', 'becomes', 'become', 'becoming'], correctAnswer: 'is becoming', points: 10 },
      { id: 'pcuse-8', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'They ___ the house this week.', translation: 'They are painting the house this week.', options: ['are painting', 'paint', 'paints', 'painting'], correctAnswer: 'are painting', points: 10 },
      { id: 'pcuse-9', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'I ___ a lot these days.', translation: 'I am working a lot these days.', options: ['am working', 'work', 'works', 'working'], correctAnswer: 'am working', points: 10 },
      { id: 'pcuse-10', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'She ___ in a new apartment.', translation: 'She is living in a new apartment.', options: ['is living', 'lives', 'live', 'living'], correctAnswer: 'is living', points: 10 }
    ]
  },
  {
    id: 'present-perfect-experience-1',
    title: 'Present Perfect Experience',
    description: 'Ever, never, already, yet',
    icon: '⭐',
    exercises: [
      { id: 'ppe-1', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'Have you ___ to Paris?', translation: 'Have you ever been to Paris?', options: ['ever been', 'never been', 'already been', 'yet been'], correctAnswer: 'ever been', points: 10 },
      { id: 'ppe-2', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'She has ___ tried sushi.', translation: 'She has never tried sushi.', options: ['ever', 'never', 'already', 'yet'], correctAnswer: 'never', points: 10 },
      { id: 'ppe-3', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'I have ___ finished my homework.', translation: 'I have already finished my homework.', options: ['ever', 'never', 'already', 'yet'], correctAnswer: 'already', points: 10 },
      { id: 'ppe-4', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'Have they ___ arrived?', translation: 'Have they arrived yet?', options: ['ever', 'never', 'already', 'yet'], correctAnswer: 'yet', points: 10 },
      { id: 'ppe-5', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'He has ___ seen that movie.', translation: 'He has already seen that movie.', options: ['ever', 'never', 'already', 'yet'], correctAnswer: 'already', points: 10 },
      { id: 'ppe-6', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'Have you ___ been to Japan?', translation: 'Have you ever been to Japan?', options: ['ever', 'never', 'already', 'yet'], correctAnswer: 'ever', points: 10 },
      { id: 'ppe-7', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'They have ___ visited us.', translation: 'They have never visited us.', options: ['ever', 'never', 'already', 'yet'], correctAnswer: 'never', points: 10 },
      { id: 'ppe-8', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'We have ___ eaten at that restaurant.', translation: 'We have already eaten at that restaurant.', options: ['ever', 'never', 'already', 'yet'], correctAnswer: 'already', points: 10 },
      { id: 'ppe-9', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'Has she ___ called you back?', translation: 'Has she called you back yet?', options: ['ever', 'never', 'already', 'yet'], correctAnswer: 'yet', points: 10 },
      { id: 'ppe-10', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'I have ___ been to Africa.', translation: 'I have never been to Africa.', options: ['ever', 'never', 'already', 'yet'], correctAnswer: 'never', points: 10 }
    ]
  },
  {
    id: 'present-perfect-result-1',
    title: 'Present Perfect Result',
    description: 'Present results of past actions',
    icon: '📊',
    exercises: [
      { id: 'ppr-1', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'I have lost my keys, so I ___ get in.', translation: 'I have lost my keys, so I cannot get in.', options: ['cannot', 'can', 'could', 'will'], correctAnswer: 'cannot', points: 10 },
      { id: 'ppr-2', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'She has studied hard, so she ___ pass.', translation: 'She has studied hard, so she will pass.', options: ['will', 'can', 'could', 'may'], correctAnswer: 'will', points: 10 },
      { id: 'ppr-3', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'It has rained, so the ground is ___.', translation: 'It has rained, so the ground is wet.', options: ['wet', 'dry', 'clean', 'hot'], correctAnswer: 'wet', points: 10 },
      { id: 'ppr-4', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'He has broken his leg, so he ___ walk.', translation: 'He has broken his leg, so he cannot walk.', options: ['cannot', 'can', 'could', 'will'], correctAnswer: 'cannot', points: 10 },
      { id: 'ppr-5', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'We have practiced a lot, so we are ___.', translation: 'We have practiced a lot, so we are ready.', options: ['ready', 'tired', 'sad', 'worried'], correctAnswer: 'ready', points: 10 },
      { id: 'ppr-6', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'She has baked a cake, so there is ___ to eat.', translation: 'She has baked a cake, so there is something to eat.', options: ['something', 'nothing', 'everything', 'anything'], correctAnswer: 'something', points: 10 },
      { id: 'ppr-7', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'I have finished my work, so I am ___.', translation: 'I have finished my work, so I am free.', options: ['free', 'busy', 'tired', 'happy'], correctAnswer: 'free', points: 10 },
      { id: 'ppr-8', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'They have cleaned the house, so it looks ___.', translation: 'They have cleaned the house, so it looks clean.', options: ['clean', 'dirty', 'old', 'new'], correctAnswer: 'clean', points: 10 },
      { id: 'ppr-9', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'He has eaten all the food, so he is ___.', translation: 'He has eaten all the food, so he is full.', options: ['full', 'hungry', 'thirsty', 'tired'], correctAnswer: 'full', points: 10 },
      { id: 'ppr-10', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'The rain has stopped, so the sky is ___.', translation: 'The rain has stopped, so the sky is clear.', options: ['clear', 'dark', 'cloudy', 'rainy'], correctAnswer: 'clear', points: 10 }
    ]
  },
  {
    id: 'present-perfect-continuous-1',
    title: 'Present Perfect Continuous Duration',
    description: 'How long with present perfect continuous',
    icon: '⏱️',
    exercises: [
      { id: 'ppcd-1', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'I ___ for 2 hours.', translation: 'I have been waiting for 2 hours.', options: ['have waited', 'have been waiting', 'am waiting', 'wait'], correctAnswer: 'have been waiting', points: 10 },
      { id: 'ppcd-2', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'She ___ English since 2019.', translation: 'She has been studying English since 2019.', options: ['studied', 'has studied', 'has been studying', 'is studying'], correctAnswer: 'has been studying', points: 10 },
      { id: 'ppcd-3', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'They ___ for hours.', translation: 'They have been working for hours.', options: ['worked', 'have worked', 'have been working', 'are working'], correctAnswer: 'have been working', points: 10 },
      { id: 'ppcd-4', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'He ___ on this project for weeks.', translation: 'He has been working on this project for weeks.', options: ['worked', 'has worked', 'has been working', 'is working'], correctAnswer: 'has been working', points: 10 },
      { id: 'ppcd-5', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'We ___ here since morning.', translation: 'We have been waiting here since morning.', options: ['waited', 'have waited', 'have been waiting', 'are waiting'], correctAnswer: 'have been waiting', points: 10 },
      { id: 'ppcd-6', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'She ___ for 30 minutes.', translation: 'She has been running for 30 minutes.', options: ['ran', 'has run', 'has been running', 'is running'], correctAnswer: 'has been running', points: 10 },
      { id: 'ppcd-7', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'I ___ this book for a month.', translation: 'I have been reading this book for a month.', options: ['read', 'have read', 'have been reading', 'am reading'], correctAnswer: 'have been reading', points: 10 },
      { id: 'ppcd-8', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'They ___ all day.', translation: 'They have been playing all day.', options: ['played', 'have played', 'have been playing', 'are playing'], correctAnswer: 'have been playing', points: 10 },
      { id: 'ppcd-9', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'He ___ for her since noon.', translation: 'He has been waiting for her since noon.', options: ['waited', 'has waited', 'has been waiting', 'is waiting'], correctAnswer: 'has been waiting', points: 10 },
      { id: 'ppcd-10', sectionId: 'pres-perfect-cont', type: 'multiple-choice', question: 'We ___ to finish this.', translation: 'We have been trying to finish this.', options: ['tried', 'have tried', 'have been trying', 'are trying'], correctAnswer: 'have been trying', points: 10 }
    ]
  },
  {
    id: 'present-simple-vs-continuous-1',
    title: 'Present Simple vs Continuous',
    description: 'When to use each',
    icon: '🔀',
    exercises: [
      { id: 'psvc-1', sectionId: 'pres-simple', type: 'multiple-choice', question: 'I ___ coffee every morning.', translation: 'I drink coffee every morning.', options: ['drink', 'am drinking', 'drinks', 'drinking'], correctAnswer: 'drink', points: 10 },
      { id: 'psvc-2', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'Look! She ___ a new dress.', translation: 'Look! She is wearing a new dress.', options: ['wears', 'is wearing', 'wore', 'wearing'], correctAnswer: 'is wearing', points: 10 },
      { id: 'psvc-3', sectionId: 'pres-simple', type: 'multiple-choice', question: 'Water ___ at 100°C.', translation: 'Water boils at 100°C.', options: ['boil', 'boils', 'is boiling', 'boiling'], correctAnswer: 'boils', points: 10 },
      { id: 'psvc-4', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'Right now, I ___ for a call.', translation: 'Right now, I am waiting for a call.', options: ['wait', 'am waiting', 'waits', 'waiting'], correctAnswer: 'am waiting', points: 10 },
      { id: 'psvc-5', sectionId: 'pres-simple', type: 'multiple-choice', question: 'She ___ three languages.', translation: 'She speaks three languages.', options: ['speak', 'speaks', 'is speaking', 'speaking'], correctAnswer: 'speaks', points: 10 },
      { id: 'psvc-6', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'Listen! Someone ___ in the next room.', translation: 'Listen! Someone is singing in the next room.', options: ['sings', 'is singing', 'sang', 'singing'], correctAnswer: 'is singing', points: 10 },
      { id: 'psvc-7', sectionId: 'pres-simple', type: 'multiple-choice', question: 'The sun ___ in the east.', translation: 'The sun rises in the east.', options: ['rise', 'rises', 'is rising', 'rising'], correctAnswer: 'rises', points: 10 },
      { id: 'psvc-8', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'This week, I ___ with my parents.', translation: 'This week, I am staying with my parents.', options: ['stay', 'am staying', 'stays', 'staying'], correctAnswer: 'am staying', points: 10 },
      { id: 'psvc-9', sectionId: 'pres-simple', type: 'multiple-choice', question: 'Birds ___ south in winter.', translation: 'Birds fly south in winter.', options: ['fly', 'flies', 'are flying', 'flying'], correctAnswer: 'fly', points: 10 },
      { id: 'psvc-10', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'The children ___ in the garden.', translation: 'The children are playing in the garden.', options: ['play', 'plays', 'are playing', 'playing'], correctAnswer: 'are playing', points: 10 }
    ]
  },
  {
    id: 'present-perfect-negative-1',
    title: 'Present Perfect Negative',
    description: 'Negative sentences in present perfect',
    icon: '❌',
    exercises: [
      { id: 'ppn-1', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'I have ___ seen the movie.', translation: 'I have not seen the movie.', options: ['never', 'not', 'no', 'none'], correctAnswer: 'not', points: 10 },
      { id: 'ppn-2', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'She has ___ been to London.', translation: 'She has never been to London.', options: ['ever', 'never', 'already', 'yet'], correctAnswer: 'never', points: 10 },
      { id: 'ppn-3', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'We have ___ finished our work.', translation: 'We have not finished our work yet.', options: ['already', 'still', 'not', 'ever'], correctAnswer: 'not', points: 10 },
      { id: 'ppn-4', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'They have ___ called me.', translation: 'They have never called me.', options: ['ever', 'never', 'already', 'yet'], correctAnswer: 'never', points: 10 },
      { id: 'ppn-5', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'He has ___ eaten breakfast.', translation: 'He has not eaten breakfast.', options: ['never', 'not', 'ever', 'already'], correctAnswer: 'not', points: 10 },
      { id: 'ppn-6', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'I have ___ been to Japan.', translation: 'I have never been to Japan.', options: ['ever', 'never', 'already', 'yet'], correctAnswer: 'never', points: 10 },
      { id: 'ppn-7', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'She has ___ decided yet.', translation: 'She has not decided yet.', options: ['already', 'still', 'not', 'ever'], correctAnswer: 'not', points: 10 },
      { id: 'ppn-8', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'They have ___ found a solution.', translation: 'They have not found a solution yet.', options: ['already', 'still', 'not', 'ever'], correctAnswer: 'not', points: 10 },
      { id: 'ppn-9', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'We have ___ visited them.', translation: 'We have never visited them.', options: ['ever', 'never', 'already', 'yet'], correctAnswer: 'never', points: 10 },
      { id: 'ppn-10', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'He has ___ understood the lesson.', translation: 'He has not understood the lesson.', options: ['never', 'not', 'ever', 'already'], correctAnswer: 'not', points: 10 }
    ]
  },
  {
    id: 'present-perfect-questions-1',
    title: 'Present Perfect Questions',
    description: 'Questions in present perfect',
    icon: '❓',
    exercises: [
      { id: 'ppq-1', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ you ___ to Paris?', translation: 'Have you ever been to Paris?', options: ['Have...been', 'Do...go', 'Are...going', 'Will...go'], correctAnswer: 'Have...been', points: 10 },
      { id: 'ppq-2', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'What ___ she ___ ?', translation: 'What has she done?', options: ['has...done', 'does...do', 'is...doing', 'did...do'], correctAnswer: 'has...done', points: 10 },
      { id: 'ppq-3', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'Where ___ they ___ ?', translation: 'Where have they been?', options: ['have...been', 'did...go', 'are...going', 'will...go'], correctAnswer: 'have...been', points: 10 },
      { id: 'ppq-4', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'How many times ___ you ___ here?', translation: 'How many times have you been here?', options: ['have...been', 'did...go', 'are...going', 'will...come'], correctAnswer: 'have...been', points: 10 },
      { id: 'ppq-5', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ he finished the work?', translation: 'Has he finished the work?', options: ['Has', 'Does', 'Is', 'Will'], correctAnswer: 'Has', points: 10 },
      { id: 'ppq-6', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'Why ___ you ___ ?', translation: 'Why have you come?', options: ['have', 'did', 'are', 'will'], correctAnswer: 'have', points: 10 },
      { id: 'ppq-7', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ they arrived yet?', translation: 'Have they arrived yet?', options: ['Have', 'Did', 'Are', 'Will'], correctAnswer: 'Have', points: 10 },
      { id: 'ppq-8', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'What ___ you ___ recently?', translation: 'What have you done recently?', options: ['have...done', 'did...do', 'are...doing', 'will...do'], correctAnswer: 'have...done', points: 10 },
      { id: 'ppq-9', sectionId: 'pres-perfect', type: 'multiple-choice', question: '___ she called you?', translation: 'Has she called you?', options: ['Has', 'Does', 'Is', 'Did'], correctAnswer: 'Has', points: 10 },
      { id: 'ppq-10', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'How long ___ you ___ here?', translation: 'How long have you been here?', options: ['have...been', 'did...stay', 'are...staying', 'will...stay'], correctAnswer: 'have...been', points: 10 }
    ]
  },
  {
    id: 'present-perfect-vs-simple-1',
    title: 'Present Perfect vs Simple Past',
    description: 'Time expressions with each tense',
    icon: '⚖️',
    exercises: [
      { id: 'ppvss-1', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'I ___ to London last year.', translation: 'I went to London last year.', options: ['went', 'have gone', 'have been', 'go'], correctAnswer: 'went', points: 10 },
      { id: 'ppvss-2', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'I ___ to London many times.', translation: 'I have been to London many times.', options: ['went', 'have gone', 'have been', 'go'], correctAnswer: 'have been', points: 10 },
      { id: 'ppvss-3', sectionId: 'pres-simple', type: 'multiple-choice', question: 'She ___ the book yesterday.', translation: 'She bought the book yesterday.', options: ['bought', 'has bought', 'have bought', 'buy'], correctAnswer: 'bought', points: 10 },
      { id: 'ppvss-4', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'She ___ many books this year.', translation: 'She has bought many books this year.', options: ['bought', 'has bought', 'have bought', 'buy'], correctAnswer: 'has bought', points: 10 },
      { id: 'ppvss-5', sectionId: 'pres-simple', type: 'multiple-choice', question: 'They ___ the test last week.', translation: 'They took the test last week.', options: ['took', 'have taken', 'take', 'taking'], correctAnswer: 'took', points: 10 },
      { id: 'ppvss-6', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'They ___ several tests this month.', translation: 'They have taken several tests this month.', options: ['took', 'have taken', 'take', 'taking'], correctAnswer: 'have taken', points: 10 },
      { id: 'ppvss-7', sectionId: 'pres-simple', type: 'multiple-choice', question: 'He ___ home at 5pm.', translation: 'He arrived home at 5pm.', options: ['arrived', 'has arrived', 'have arrived', 'arrive'], correctAnswer: 'arrived', points: 10 },
      { id: 'ppvss-8', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'He ___ home three times this week.', translation: 'He has arrived home three times this week.', options: ['arrived', 'has arrived', 'have arrived', 'arrive'], correctAnswer: 'has arrived', points: 10 },
      { id: 'ppvss-9', sectionId: 'pres-simple', type: 'multiple-choice', question: 'We ___ the movie last month.', translation: 'We watched the movie last month.', options: ['watched', 'have watched', 'watch', 'are watching'], correctAnswer: 'watched', points: 10 },
      { id: 'ppvss-10', sectionId: 'pres-perfect', type: 'multiple-choice', question: 'We ___ many movies this year.', translation: 'We have watched many movies this year.', options: ['watched', 'have watched', 'watch', 'are watching'], correctAnswer: 'have watched', points: 10 }
    ]
  },
  {
    id: 'present-continuous-negative-1',
    title: 'Present Continuous Negative',
    description: 'Negative in present continuous',
    icon: '❌',
    exercises: [
      { id: 'pcn-1', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'She ___ now.', translation: 'She is not sleeping now.', options: ['is not sleeping', 'not is sleeping', 'is sleeping not', 'not sleeping'], correctAnswer: 'is not sleeping', points: 10 },
      { id: 'pcn-2', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'They ___ today.', translation: 'They are not working today.', options: ['are not working', 'not are working', 'are working not', 'not working'], correctAnswer: 'are not working', points: 10 },
      { id: 'pcn-3', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'I ___ at the moment.', translation: 'I am not studying at the moment.', options: ['am not studying', 'not am studying', 'am studying not', 'not study'], correctAnswer: 'am not studying', points: 10 },
      { id: 'pcn-4', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'He ___ right now.', translation: 'He is not driving right now.', options: ['is not driving', 'not is driving', 'is driving not', 'not drive'], correctAnswer: 'is not driving', points: 10 },
      { id: 'pcn-5', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'We ___ this week.', translation: 'We are not traveling this week.', options: ['are not traveling', 'not are traveling', 'are traveling not', 'not travel'], correctAnswer: 'are not traveling', points: 10 },
      { id: 'pcn-6', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'She ___ at home.', translation: 'She is not staying at home.', options: ['is not staying', 'not is staying', 'is staying not', 'not stay'], correctAnswer: 'is not staying', points: 10 },
      { id: 'pcn-7', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'They ___ in the garden.', translation: 'They are not playing in the garden.', options: ['are not playing', 'not are playing', 'are playing not', 'not play'], correctAnswer: 'are not playing', points: 10 },
      { id: 'pcn-8', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'I ___ lunch now.', translation: 'I am not eating lunch now.', options: ['am not eating', 'not am eating', 'am eating not', 'not eat'], correctAnswer: 'am not eating', points: 10 },
      { id: 'pcn-9', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'He ___ on the phone.', translation: 'He is not talking on the phone.', options: ['is not talking', 'not is talking', 'is talking not', 'not talk'], correctAnswer: 'is not talking', points: 10 },
      { id: 'pcn-10', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'We ___ to music.', translation: 'We are not listening to music.', options: ['are not listening', 'not are listening', 'are listening not', 'not listen'], correctAnswer: 'are not listening', points: 10 }
    ]
  }
];

export const presentTensesQuizPacks: QuizPack[] = [
  {
    id: 'present-quiz',
    title: 'Present Tenses Quiz',
    description: 'Test your present tense knowledge',
    icon: '🎯',
    quiz: {
      id: 'pres-quiz',
      title: 'Present Tenses Quiz',
      description: 'Test your knowledge of Present Simple and Continuous',
      passingScore: 70,
      xpReward: 50,
      gemReward: 3,
      timeLimit: 300,
      questions: [
        { id: 'pq-1', sectionId: 'pres-simple', type: 'multiple-choice', question: 'He ___ to school by bus.', translation: 'Ele vai para a escola de ônibus.', options: ['go', 'goes', 'going', 'went'], correctAnswer: 'goes', points: 10 },
        { id: 'pq-2', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'Right now, she ___ her favorite song.', translation: 'Agora mesmo, ela está cantando sua música favorita.', options: ['sing', 'sings', 'is singing', 'sang'], correctAnswer: 'is singing', points: 10 },
        { id: 'pq-3', sectionId: 'pres-simple', type: 'multiple-choice', question: 'My friends ___ basketball on Sundays.', translation: 'Meus amigos jogam basquete aos domingos.', options: ['play', 'plays', 'playing', 'played'], correctAnswer: 'play', points: 10 },
        { id: 'pq-4', sectionId: 'pres-continuous', type: 'multiple-choice', question: 'The baby ___ right now.', translation: 'O bebê está dormindo agora.', options: ['sleep', 'sleeps', 'is sleeping', 'slept'], correctAnswer: 'is sleeping', points: 10 }
      ]
    }
  }
];