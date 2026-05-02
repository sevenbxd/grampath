import { ExercisePack, QuizPack } from '../academy';

export const prepositionsExercisePacks: ExercisePack[] = [
  {
    id: 'prepositions-time-1',
    title: 'Prepositions of Time',
    description: 'Practice at, in, on for time',
    icon: '⏰',
    exercises: [
      { id: 'pret-ex1', sectionId: 'prep-time', type: 'multiple-choice', question: 'I was born ___ 1990.', translation: 'I was born in 1990.', options: ['at', 'in', 'on', 'to'], correctAnswer: 'in', points: 10 },
      { id: 'pret-ex2', sectionId: 'prep-time', type: 'multiple-choice', question: 'See you ___ Monday.', translation: 'See you on Monday.', options: ['at', 'in', 'on', 'to'], correctAnswer: 'on', points: 10 },
      { id: 'pret-ex3', sectionId: 'prep-time', type: 'multiple-choice', question: 'The meeting is ___ 3pm.', translation: 'The meeting is at 3pm.', options: ['at', 'in', 'on', 'to'], correctAnswer: 'at', points: 10 }
    ]
  },
  {
    id: 'prepositions-place-1',
    title: 'Prepositions of Place',
    description: 'Practice in, on, at for place',
    icon: '📍',
    exercises: [
      { id: 'prepl-ex1', sectionId: 'prep-place', type: 'multiple-choice', question: 'The book is ___ the table.', translation: 'The book is on the table.', options: ['in', 'on', 'at', 'to'], correctAnswer: 'on', points: 10 },
      { id: 'prepl-ex2', sectionId: 'prep-place', type: 'multiple-choice', question: 'She lives ___ Brazil.', translation: 'She lives in Brazil.', options: ['in', 'on', 'at', 'to'], correctAnswer: 'in', points: 10 },
      { id: 'prepl-ex3', sectionId: 'prep-place', type: 'multiple-choice', question: 'We met ___ the station.', translation: 'We met at the station.', options: ['in', 'on', 'at', 'to'], correctAnswer: 'at', points: 10 }
    ]
  },
  {
    id: 'prepositions-movement-1',
    title: 'Prepositions of Movement',
    description: 'Practice to, toward, through',
    icon: '➡️',
    exercises: [
      { id: 'prepm-ex1', sectionId: 'prep-movement', type: 'multiple-choice', question: 'She went ___ the door.', translation: 'She went to the door.', options: ['to', 'toward', 'through', 'into'], correctAnswer: 'to', points: 10 },
      { id: 'prepm-ex2', sectionId: 'prep-movement', type: 'multiple-choice', question: 'They walked ___ the park.', translation: 'They walked through the park.', options: ['to', 'toward', 'through', 'into'], correctAnswer: 'through', points: 10 }
    ]
  },
  {
    id: 'prepositions-at-1',
    title: 'Preposition AT',
    description: 'Specific points and places',
    icon: '📍',
    exercises: [
      { id: 'prepat-1', sectionId: 'prep-place', type: 'multiple-choice', question: 'I work ___ the bank.', translation: 'Eu trabalho no banco.', options: ['at', 'in', 'on', 'by'], correctAnswer: 'at', points: 10 },
      { id: 'prepat-2', sectionId: 'prep-place', type: 'multiple-choice', question: 'She is ___ the bus stop.', translation: 'Ela está no ponto de ônibus.', options: ['at', 'in', 'on', 'by'], correctAnswer: 'at', points: 10 },
      { id: 'prepat-3', sectionId: 'prep-place', type: 'multiple-choice', question: 'We met ___ the station.', translation: 'Nos encontramos na estação.', options: ['at', 'in', 'on', 'by'], correctAnswer: 'at', points: 10 },
      { id: 'prepat-4', sectionId: 'prep-place', type: 'multiple-choice', question: 'He is ___ home.', translation: 'Ele está em casa.', options: ['at', 'in', 'on', 'by'], correctAnswer: 'at', points: 10 },
      { id: 'prepat-5', sectionId: 'prep-place', type: 'multiple-choice', question: 'The car is ___ the traffic light.', translation: 'O carro está no semáforo.', options: ['at', 'in', 'on', 'by'], correctAnswer: 'at', points: 10 },
      { id: 'prepat-6', sectionId: 'prep-place', type: 'multiple-choice', question: 'I am ___ the door.', translation: 'Estou na porta.', options: ['at', 'in', 'on', 'by'], correctAnswer: 'at', points: 10 },
      { id: 'prepat-7', sectionId: 'prep-place', type: 'multiple-choice', question: 'She is ___ the airport.', translation: 'Ela está no aeroporto.', options: ['at', 'in', 'on', 'by'], correctAnswer: 'at', points: 10 },
      { id: 'prepat-8', sectionId: 'prep-place', type: 'multiple-choice', question: 'The meeting is ___ the office.', translation: 'A reunião é no escritório.', options: ['at', 'in', 'on', 'by'], correctAnswer: 'at', points: 10 },
      { id: 'prepat-9', sectionId: 'prep-place', type: 'multiple-choice', question: 'Wait ___ the corner.', translation: 'Espere na esquina.', options: ['at', 'in', 'on', 'by'], correctAnswer: 'at', points: 10 },
      { id: 'prepat-10', sectionId: 'prep-place', type: 'multiple-choice', question: 'She is ___ the hospital.', translation: 'Ela está no hospital.', options: ['at', 'in', 'on', 'by'], correctAnswer: 'at', points: 10 }
    ]
  },
  {
    id: 'prepositions-in-1',
    title: 'Preposition IN',
    description: 'Enclosed spaces and countries',
    icon: '🔲',
    exercises: [
      { id: 'prepin-1', sectionId: 'prep-place', type: 'multiple-choice', question: 'She lives ___ London.', translation: 'Ela mora em Londres.', options: ['at', 'in', 'on', 'to'], correctAnswer: 'in', points: 10 },
      { id: 'prepin-2', sectionId: 'prep-place', type: 'multiple-choice', question: 'The book is ___ the box.', translation: 'O livro está na caixa.', options: ['at', 'in', 'on', 'to'], correctAnswer: 'in', points: 10 },
      { id: 'prepin-3', sectionId: 'prep-place', type: 'multiple-choice', question: 'He is ___ the car.', translation: 'Ele está no carro.', options: ['at', 'in', 'on', 'to'], correctAnswer: 'in', points: 10 },
      { id: 'prepin-4', sectionId: 'prep-place', type: 'multiple-choice', question: 'We are ___ the room.', translation: 'Estamos no quarto.', options: ['at', 'in', 'on', 'to'], correctAnswer: 'in', points: 10 },
      { id: 'prepin-5', sectionId: 'prep-place', type: 'multiple-choice', question: 'I was born ___ Brazil.', translation: 'Eu nasci no Brasil.', options: ['at', 'in', 'on', 'to'], correctAnswer: 'in', points: 10 },
      { id: 'prepin-6', sectionId: 'prep-place', type: 'multiple-choice', question: 'The bird is ___ the cage.', translation: 'O pássaro está na gaiola.', options: ['at', 'in', 'on', 'to'], correctAnswer: 'in', points: 10 },
      { id: 'prepin-7', sectionId: 'prep-place', type: 'multiple-choice', question: 'She is ___ the pool.', translation: 'Ela está na piscina.', options: ['at', 'in', 'on', 'to'], correctAnswer: 'in', points: 10 },
      { id: 'prepin-8', sectionId: 'prep-place', type: 'multiple-choice', question: 'He works ___ the kitchen.', translation: 'Ele trabalha na cozinha.', options: ['at', 'in', 'on', 'to'], correctAnswer: 'in', points: 10 },
      { id: 'prepin-9', sectionId: 'prep-place', type: 'multiple-choice', question: 'The children are ___ the garden.', translation: 'As crianças estão no jardim.', options: ['at', 'in', 'on', 'to'], correctAnswer: 'in', points: 10 },
      { id: 'prepin-10', sectionId: 'prep-place', type: 'multiple-choice', question: 'I live ___ a small town.', translation: 'Eu moro em uma cidade pequena.', options: ['at', 'in', 'on', 'to'], correctAnswer: 'in', points: 10 }
    ]
  },
  {
    id: 'prepositions-on-1',
    title: 'Preposition ON',
    description: 'Surfaces',
    icon: '⬆️',
    exercises: [
      { id: 'prepon-1', sectionId: 'prep-place', type: 'multiple-choice', question: 'The book is ___ the table.', translation: 'O livro está na mesa.', options: ['at', 'in', 'on', 'to'], correctAnswer: 'on', points: 10 },
      { id: 'prepon-2', sectionId: 'prep-place', type: 'multiple-choice', question: 'She is sitting ___ the chair.', translation: 'Ela está sentada na cadeira.', options: ['at', 'in', 'on', 'to'], correctAnswer: 'on', points: 10 },
      { id: 'prepon-3', sectionId: 'prep-place', type: 'multiple-choice', question: 'The picture is ___ the wall.', translation: 'A foto está na parede.', options: ['at', 'in', 'on', 'to'], correctAnswer: 'on', points: 10 },
      { id: 'prepon-4', sectionId: 'prep-place', type: 'multiple-choice', question: 'There is a spot ___ the map.', translation: 'Há um ponto no mapa.', options: ['at', 'in', 'on', 'to'], correctAnswer: 'on', points: 10 },
      { id: 'prepon-5', sectionId: 'prep-place', type: 'multiple-choice', question: 'I write ___ paper.', translation: 'Eu escrevo no papel.', options: ['at', 'in', 'on', 'to'], correctAnswer: 'on', points: 10 },
      { id: 'prepon-6', sectionId: 'prep-place', type: 'multiple-choice', question: 'The dog is ___ the floor.', translation: 'O cachorro está no chão.', options: ['at', 'in', 'on', 'to'], correctAnswer: 'on', points: 10 },
      { id: 'prepon-7', sectionId: 'prep-place', type: 'multiple-choice', question: 'There is a stain ___ your shirt.', translation: 'Há uma mancha na sua camisa.', options: ['at', 'in', 'on', 'to'], correctAnswer: 'on', points: 10 },
      { id: 'prepon-8', sectionId: 'prep-place', type: 'multiple-choice', question: 'The key is ___ the door.', translation: 'A chave está na porta.', options: ['at', 'in', 'on', 'to'], correctAnswer: 'on', points: 10 },
      { id: 'prepon-9', sectionId: 'prep-place', type: 'multiple-choice', question: 'Write your name ___ the line.', translation: 'Escreva seu nome na linha.', options: ['at', 'in', 'on', 'to'], correctAnswer: 'on', points: 10 },
      { id: 'prepon-10', sectionId: 'prep-place', type: 'multiple-choice', question: 'The message is ___ the screen.', translation: 'A mensagem está na tela.', options: ['at', 'in', 'on', 'to'], correctAnswer: 'on', points: 10 }
    ]
  },
  {
    id: 'prepositions-time-in-1',
    title: 'IN - Time',
    description: 'In + months, years, seasons',
    icon: '📅',
    exercises: [
      { id: 'preptin-1', sectionId: 'prep-time', type: 'multiple-choice', question: 'The course starts ___ January.', translation: 'O curso começa em janeiro.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'in', points: 10 },
      { id: 'preptin-2', sectionId: 'prep-time', type: 'multiple-choice', question: 'She was born ___ 1995.', translation: 'Ela nasceu em 1995.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'in', points: 10 },
      { id: 'preptin-3', sectionId: 'prep-time', type: 'multiple-choice', question: 'We go on vacation ___ summer.', translation: 'Ficamos de férias no verão.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'in', points: 10 },
      { id: 'preptin-4', sectionId: 'prep-time', type: 'multiple-choice', question: 'It is cold ___ winter.', translation: 'Está frio no inverno.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'in', points: 10 },
      { id: 'preptin-5', sectionId: 'prep-time', type: 'multiple-choice', question: 'I will see you ___ the morning.', translation: 'Vou te ver de manhã.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'in', points: 10 },
      { id: 'preptin-6', sectionId: 'prep-time', type: 'multiple-choice', question: 'She works ___ the evening.', translation: 'Ela trabalha à noite.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'in', points: 10 },
      { id: 'preptin-7', sectionId: 'prep-time', type: 'multiple-choice', question: 'The movie is ___ 2024.', translation: 'O filme é de 2024.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'in', points: 10 },
      { id: 'preptin-8', sectionId: 'prep-time', type: 'multiple-choice', question: 'We will finish ___ a week.', translation: 'Terminaremos em uma semana.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'in', points: 10 },
      { id: 'preptin-9', sectionId: 'prep-time', type: 'multiple-choice', question: 'She will call ___ an hour.', translation: 'Ela vai ligar em uma hora.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'in', points: 10 },
      { id: 'preptin-10', sectionId: 'prep-time', type: 'multiple-choice', question: 'Everything changes ___ time.', translation: 'Tudo muda com o tempo.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'in', points: 10 }
    ]
  },
  {
    id: 'prepositions-time-on-1',
    title: 'ON - Time',
    description: 'On + days and dates',
    icon: '📆',
    exercises: [
      { id: 'prepton-1', sectionId: 'prep-time', type: 'multiple-choice', question: 'We meet ___ Monday.', translation: 'Nos encontramos na segunda.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'on', points: 10 },
      { id: 'prepton-2', sectionId: 'prep-time', type: 'multiple-choice', question: 'The exam is ___ Wednesday.', translation: 'A prova é na quarta.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'on', points: 10 },
      { id: 'prepton-3', sectionId: 'prep-time', type: 'multiple-choice', question: 'I have a meeting ___ Friday.', translation: 'Tenho uma reunião na sexta.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'on', points: 10 },
      { id: 'prepton-4', sectionId: 'prep-time', type: 'multiple-choice', question: 'She was born ___ January 5th.', translation: 'Ela nasceu em 5 de janeiro.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'on', points: 10 },
      { id: 'prepton-5', sectionId: 'prep-time', type: 'multiple-choice', question: 'We will travel ___ the weekend.', translation: 'Viajamos no fim de semana.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'on', points: 10 },
      { id: 'prepton-6', sectionId: 'prep-time', type: 'multiple-choice', question: 'The party is ___ Saturday night.', translation: 'A festa é no sábado à noite.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'on', points: 10 },
      { id: 'prepton-7', sectionId: 'prep-time', type: 'multiple-choice', question: 'He works ___ weekdays.', translation: 'Ele trabalha nos dias de semana.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'on', points: 10 },
      { id: 'prepton-8', sectionId: 'prep-time', type: 'multiple-choice', question: 'We go to church ___ Sunday.', translation: 'Vamos à igreja no domingo.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'on', points: 10 },
      { id: 'prepton-9', sectionId: 'prep-time', type: 'multiple-choice', question: 'The train arrives ___ Tuesday morning.', translation: 'O trem chega na terça de manhã.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'on', points: 10 },
      { id: 'prepton-10', sectionId: 'prep-time', type: 'multiple-choice', question: 'There is a holiday ___ December 25th.', translation: 'Há um feriado em 25 de dezembro.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'on', points: 10 }
    ]
  },
  {
    id: 'prepositions-time-at-1',
    title: 'AT - Time',
    description: 'At + specific times',
    icon: '🕐',
    exercises: [
      { id: 'preptat-1', sectionId: 'prep-time', type: 'multiple-choice', question: 'The meeting is ___ 3pm.', translation: 'A reunião é às 15h.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'at', points: 10 },
      { id: 'preptat-2', sectionId: 'prep-time', type: 'multiple-choice', question: 'I wake up ___ 6am.', translation: 'Eu acordo às 6h.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'at', points: 10 },
      { id: 'preptat-3', sectionId: 'prep-time', type: 'multiple-choice', question: 'She eats lunch ___ noon.', translation: 'Ela almoça ao meio-dia.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'at', points: 10 },
      { id: 'preptat-4', sectionId: 'prep-time', type: 'multiple-choice', question: 'The sun sets ___ sunset.', translation: 'O sol se põe no pôr do sol.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'at', points: 10 },
      { id: 'preptat-5', sectionId: 'prep-time', type: 'multiple-choice', question: 'We meet ___ midnight.', translation: 'Nos encontramos à meia-noite.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'at', points: 10 },
      { id: 'preptat-6', sectionId: 'prep-time', type: 'multiple-choice', question: 'The train leaves ___ 10:30.', translation: 'O trem sai às 10:30.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'at', points: 10 },
      { id: 'preptat-7', sectionId: 'prep-time', type: 'multiple-choice', question: 'I finish work ___ 5pm.', translation: 'Termino o trabalho às 17h.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'at', points: 10 },
      { id: 'preptat-8', sectionId: 'prep-time', type: 'multiple-choice', question: 'The concert starts ___ 8pm.', translation: 'O show começa às 20h.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'at', points: 10 },
      { id: 'preptat-9', sectionId: 'prep-time', type: 'multiple-choice', question: 'I have a class ___ 9am tomorrow.', translation: 'Tenho aula às 9h amanhã.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'at', points: 10 },
      { id: 'preptat-10', sectionId: 'prep-time', type: 'multiple-choice', question: 'The store closes ___ 9pm.', translation: 'A loja fecha às 21h.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'at', points: 10 }
    ]
  },
  {
    id: 'prepositions-for-1',
    title: 'Preposition FOR',
    description: 'Purpose and duration',
    icon: '🎯',
    exercises: [
      { id: 'prepf-1', sectionId: 'prep-other', type: 'multiple-choice', question: 'This is a gift ___ you.', translation: 'Este é um presente para você.', options: ['for', 'to', 'of', 'with'], correctAnswer: 'for', points: 10 },
      { id: 'prepf-2', sectionId: 'prep-other', type: 'multiple-choice', question: 'I need a cup ___ coffee.', translation: 'Preciso de uma xícara de café.', options: ['for', 'of', 'to', 'with'], correctAnswer: 'for', points: 10 },
      { id: 'prepf-3', sectionId: 'prep-other', type: 'multiple-choice', question: 'She waited ___ an hour.', translation: 'Ela esperou por uma hora.', options: ['for', 'to', 'at', 'in'], correctAnswer: 'for', points: 10 },
      { id: 'prepf-4', sectionId: 'prep-other', type: 'multiple-choice', question: 'This is the key ___ the door.', translation: 'Esta é a chave da porta.', options: ['for', 'to', 'of', 'with'], correctAnswer: 'for', points: 10 },
      { id: 'prepf-5', sectionId: 'prep-other', type: 'multiple-choice', question: 'I study ___ a doctor.', translation: 'Estudo para médico.', options: ['for', 'to', 'to be', 'as'], correctAnswer: 'for', points: 10 },
      { id: 'prepf-6', sectionId: 'prep-other', type: 'multiple-choice', question: 'Thank you ___ your help.', translation: 'Obrigado pela sua ajuda.', options: ['for', 'to', 'of', 'with'], correctAnswer: 'for', points: 10 },
      { id: 'prepf-7', sectionId: 'prep-other', type: 'multiple-choice', question: 'I have an appointment ___ 3pm.', translation: 'Tenho um compromisso às 15h.', options: ['for', 'at', 'in', 'to'], correctAnswer: 'at', points: 10 },
      { id: 'prepf-8', sectionId: 'prep-other', type: 'multiple-choice', question: 'She works ___ a big company.', translation: 'Ela trabalha para uma grande empresa.', options: ['for', 'to', 'at', 'in'], correctAnswer: 'for', points: 10 },
      { id: 'prepf-9', sectionId: 'prep-other', type: 'multiple-choice', question: 'This is a solution ___ the problem.', translation: 'Esta é uma solução para o problema.', options: ['for', 'to', 'of', 'with'], correctAnswer: 'for', points: 10 },
      { id: 'prepf-10', sectionId: 'prep-other', type: 'multiple-choice', question: 'I am looking ___ a job.', translation: 'Estou procurando um emprego.', options: ['for', 'to', 'at', 'in'], correctAnswer: 'for', points: 10 }
    ]
  },
  {
    id: 'prepositions-to-1',
    title: 'Preposition TO',
    description: 'Direction and movement',
    icon: '➡️',
    exercises: [
      { id: 'prept-1', sectionId: 'prep-movement', type: 'multiple-choice', question: 'I go ___ school every day.', translation: 'Eu vou para a escola todos os dias.', options: ['to', 'at', 'in', 'for'], correctAnswer: 'to', points: 10 },
      { id: 'prept-2', sectionId: 'prep-movement', type: 'multiple-choice', question: 'She listened ___ the music.', translation: 'Ela ouviu a música.', options: ['to', 'at', 'in', 'for'], correctAnswer: 'to', points: 10 },
      { id: 'prept-3', sectionId: 'prep-movement', type: 'multiple-choice', question: 'I need to talk ___ you.', translation: 'Preciso falar com você.', options: ['to', 'at', 'with', 'for'], correctAnswer: 'to', points: 10 },
      { id: 'prept-4', sectionId: 'prep-movement', type: 'multiple-choice', question: 'He belongs ___ this group.', translation: 'Ele pertence a este grupo.', options: ['to', 'at', 'in', 'with'], correctAnswer: 'to', points: 10 },
      { id: 'prept-5', sectionId: 'prep-movement', type: 'multiple-choice', question: 'We prefer coffee ___ tea.', translation: 'Preferimos café a chá.', options: ['to', 'than', 'as', 'like'], correctAnswer: 'to', points: 10 },
      { id: 'prept-6', sectionId: 'prep-movement', type: 'multiple-choice', question: 'I am used ___ getting up early.', translation: 'Estou acostumado a acordar cedo.', options: ['to', 'with', 'at', 'for'], correctAnswer: 'to', points: 10 },
      { id: 'prept-7', sectionId: 'prep-movement', type: 'multiple-choice', question: 'She looks forward ___ the party.', translation: 'Ela espera pela festa.', options: ['to', 'at', 'for', 'in'], correctAnswer: 'to', points: 10 },
      { id: 'prept-8', sectionId: 'prep-movement', type: 'multiple-choice', question: 'I am going ___ the store.', translation: 'Eu vou à loja.', options: ['to', 'at', 'in', 'for'], correctAnswer: 'to', points: 10 },
      { id: 'prept-9', sectionId: 'prep-movement', type: 'multiple-choice', question: 'She gave the book ___ me.', translation: 'Ela deu o livro para mim.', options: ['to', 'for', 'with', 'by'], correctAnswer: 'to', points: 10 },
      { id: 'prept-10', sectionId: 'prep-movement', type: 'multiple-choice', question: 'We arrived ___ the airport.', translation: 'Chegamos ao aeroporto.', options: ['to', 'at', 'in', 'for'], correctAnswer: 'at', points: 10 }
    ]
  },
  {
    id: 'prepositions-with-1',
    title: 'Preposition WITH',
    description: 'Accompaniment and tools',
    icon: '🤝',
    exercises: [
      { id: 'prepw-1', sectionId: 'prep-other', type: 'multiple-choice', question: 'I went to the party ___ my friends.', translation: 'Fui à festa com meus amigos.', options: ['with', 'by', 'to', 'for'], correctAnswer: 'with', points: 10 },
      { id: 'prepw-2', sectionId: 'prep-other', type: 'multiple-choice', question: 'She cut the paper ___ scissors.', translation: 'Ela cortou o papel com a tesoura.', options: ['with', 'by', 'in', 'on'], correctAnswer: 'with', points: 10 },
      { id: 'prepw-3', sectionId: 'prep-other', type: 'multiple-choice', question: 'I will help you ___ your homework.', translation: 'Vou ajudar você com a lição de casa.', options: ['with', 'to', 'for', 'at'], correctAnswer: 'with', points: 10 },
      { id: 'prepw-4', sectionId: 'prep-other', type: 'multiple-choice', question: 'He is angry ___ her.', translation: 'Ele está bravo com ela.', options: ['with', 'at', 'to', 'for'], correctAnswer: 'with', points: 10 },
      { id: 'prepw-5', sectionId: 'prep-other', type: 'multiple-choice', question: 'I agree ___ you.', translation: 'Eu concordo com você.', options: ['with', 'to', 'at', 'for'], correctAnswer: 'with', points: 10 },
      { id: 'prepw-6', sectionId: 'prep-other', type: 'multiple-choice', question: 'She filled the glass ___ water.', translation: 'Ela encheu o copo de água.', options: ['with', 'of', 'in', 'by'], correctAnswer: 'with', points: 10 },
      { id: 'prepw-7', sectionId: 'prep-other', type: 'multiple-choice', question: 'We are happy ___ the result.', translation: 'Estamos felizes com o resultado.', options: ['with', 'about', 'at', 'for'], correctAnswer: 'with', points: 10 },
      { id: 'prepw-8', sectionId: 'prep-other', type: 'multiple-choice', question: 'The boy is playing ___ his dog.', translation: 'O menino está brincando com seu cachorro.', options: ['with', 'to', 'at', 'for'], correctAnswer: 'with', points: 10 },
      { id: 'prepw-9', sectionId: 'prep-other', type: 'multiple-choice', question: 'I wrote the letter ___ a pen.', translation: 'Escrevi a carta com uma caneta.', options: ['with', 'by', 'in', 'on'], correctAnswer: 'with', points: 10 },
      { id: 'prepw-10', sectionId: 'prep-other', type: 'multiple-choice', question: 'She is married ___ John.', translation: 'Ela é casada com o João.', options: ['with', 'to', 'by', 'at'], correctAnswer: 'with', points: 10 }
    ]
  },
  {
    id: 'prepositions-between-1',
    title: 'Preposition BETWEEN',
    description: 'Between two things',
    icon: '↔️',
    exercises: [
      { id: 'prepbet-1', sectionId: 'prep-other', type: 'multiple-choice', question: 'The book is ___ the two chairs.', translation: 'O livro está entre as duas cadeiras.', options: ['between', 'among', 'with', 'at'], correctAnswer: 'between', points: 10 },
      { id: 'prepbet-2', sectionId: 'prep-other', type: 'multiple-choice', question: 'There is a difference ___ the two options.', translation: 'Há uma diferença entre as duas opções.', options: ['between', 'among', 'in', 'to'], correctAnswer: 'between', points: 10 },
      { id: 'prepbet-3', sectionId: 'prep-other', type: 'multiple-choice', question: 'I will choose ___ A and B.', translation: 'Vou escolher entre A e B.', options: ['between', 'among', 'from', 'to'], correctAnswer: 'between', points: 10 },
      { id: 'prepbet-4', sectionId: 'prep-other', type: 'multiple-choice', question: 'The meeting is ___ 2pm and 4pm.', translation: 'A reunião é entre 14h e 16h.', options: ['between', 'among', 'in', 'at'], correctAnswer: 'between', points: 10 },
      { id: 'prepbet-5', sectionId: 'prep-other', type: 'multiple-choice', question: 'Share the cake ___ the two of you.', translation: 'Dividam o bolo entre vocês dois.', options: ['between', 'among', 'with', 'for'], correctAnswer: 'between', points: 10 },
      { id: 'prepbet-6', sectionId: 'prep-other', type: 'multiple-choice', question: 'The bridge is ___ the two banks.', translation: 'A ponte está entre as duas margens.', options: ['between', 'among', 'on', 'at'], correctAnswer: 'between', points: 10 },
      { id: 'prepbet-7', sectionId: 'prep-other', type: 'multiple-choice', question: 'We need a compromise ___ them.', translation: 'Precisamos de um compromisso entre eles.', options: ['between', 'among', 'with', 'to'], correctAnswer: 'between', points: 10 },
      { id: 'prepbet-8', sectionId: 'prep-other', type: 'multiple-choice', question: 'The conversation was ___ us.', translation: 'A conversa foi entre nós.', options: ['between', 'among', 'with', 'in'], correctAnswer: 'between', points: 10 },
      { id: 'prepbet-9', sectionId: 'prep-other', type: 'multiple-choice', question: 'I will decide ___ acceptance and rejection.', translation: 'Decidirei entre aceitar e rejeitar.', options: ['between', 'among', 'from', 'to'], correctAnswer: 'between', points: 10 },
      { id: 'prepbet-10', sectionId: 'prep-other', type: 'multiple-choice', question: 'The choice is clear ___ right and wrong.', translation: 'A escolha é clara entre certo e errado.', options: ['between', 'among', 'in', 'on'], correctAnswer: 'between', points: 10 }
    ]
  },
  {
    id: 'prepositions-under-1',
    title: 'Preposition UNDER',
    description: 'Below and less than',
    icon: '⬇️',
    exercises: [
      { id: 'prepun-1', sectionId: 'prep-other', type: 'multiple-choice', question: 'The cat is ___ the table.', translation: 'O gato está embaixo da mesa.', options: ['under', 'below', 'beneath', 'over'], correctAnswer: 'under', points: 10 },
      { id: 'prepun-2', sectionId: 'prep-other', type: 'multiple-choice', question: 'The temperature is ___ zero.', translation: 'A temperatura está abaixo de zero.', options: ['under', 'below', 'above', 'over'], correctAnswer: 'below', points: 10 },
      { id: 'prepun-3', sectionId: 'prep-other', type: 'multiple-choice', question: 'The book is ___ the bed.', translation: 'O livro está embaixo da cama.', options: ['under', 'below', 'on', 'in'], correctAnswer: 'under', points: 10 },
      { id: 'prepun-4', sectionId: 'prep-other', type: 'multiple-choice', question: 'She is ___ 18 years old.', translation: 'Ela tem menos de 18 anos.', options: ['under', 'below', 'above', 'over'], correctAnswer: 'under', points: 10 },
      { id: 'prepun-5', sectionId: 'prep-other', type: 'multiple-choice', question: 'The car is ___ the bridge.', translation: 'O carro está embaixo da ponte.', options: ['under', 'below', 'on', 'at'], correctAnswer: 'under', points: 10 },
      { id: 'prepun-6', sectionId: 'prep-other', type: 'multiple-choice', question: 'The money is ___ the pillow.', translation: 'O dinheiro está embaixo do travesseiro.', options: ['under', 'below', 'on', 'in'], correctAnswer: 'under', points: 10 },
      { id: 'prepun-7', sectionId: 'prep-other', type: 'multiple-choice', question: 'We are ___ pressure.', translation: 'Estamos sob pressão.', options: ['under', 'below', 'in', 'on'], correctAnswer: 'under', points: 10 },
      { id: 'prepun-8', sectionId: 'prep-other', type: 'multiple-choice', question: 'The plan is ___ construction.', translation: 'O plano está em construção.', options: ['under', 'in', 'at', 'on'], correctAnswer: 'under', points: 10 },
      { id: 'prepun-9', sectionId: 'prep-other', type: 'multiple-choice', question: 'The child is ___ my supervision.', translation: 'A criança está sob minha supervisão.', options: ['under', 'with', 'by', 'in'], correctAnswer: 'under', points: 10 },
      { id: 'prepun-10', sectionId: 'prep-other', type: 'multiple-choice', question: 'The matter is ___ investigation.', translation: 'O asunto está sob investigação.', options: ['under', 'in', 'on', 'at'], correctAnswer: 'under', points: 10 }
    ]
  },
  {
    id: 'prepositions-over-1',
    title: 'Preposition OVER',
    description: 'Above and across',
    icon: '⬆️',
    exercises: [
      { id: 'prepo-1', sectionId: 'prep-other', type: 'multiple-choice', question: 'The bird flew ___ the tree.', translation: 'O pássaro voou sobre a árvore.', options: ['over', 'above', 'on', 'at'], correctAnswer: 'over', points: 10 },
      { id: 'prepo-2', sectionId: 'prep-other', type: 'multiple-choice', question: 'She has control ___ the situation.', translation: 'Ela tem controle sobre a situação.', options: ['over', 'of', 'on', 'at'], correctAnswer: 'over', points: 10 },
      { id: 'prepo-3', sectionId: 'prep-other', type: 'multiple-choice', question: 'We walked ___ the bridge.', translation: 'Caminhamos sobre a ponte.', options: ['over', 'through', 'across', 'on'], correctAnswer: 'over', points: 10 },
      { id: 'prepo-4', sectionId: 'prep-other', type: 'multiple-choice', question: 'The plane flew ___ the city.', translation: 'O avião voou sobre a cidade.', options: ['over', 'above', 'on', 'at'], correctAnswer: 'over', points: 10 },
      { id: 'prepo-5', sectionId: 'prep-other', type: 'multiple-choice', question: 'She is ___ 21 years old.', translation: 'Ela tem mais de 21 anos.', options: ['over', 'above', 'more than', 'on'], correctAnswer: 'over', points: 10 },
      { id: 'prepo-6', sectionId: 'prep-other', type: 'multiple-choice', question: 'The flag is ___ the building.', translation: 'A bandeira está sobre o prédio.', options: ['over', 'above', 'on', 'at'], correctAnswer: 'over', points: 10 },
      { id: 'prepo-7', sectionId: 'prep-other', type: 'multiple-choice', question: 'We discussed it ___ coffee.', translation: 'Discutimos isso tomando café.', options: ['over', 'during', 'with', 'at'], correctAnswer: 'over', points: 10 },
      { id: 'prepo-8', sectionId: 'prep-other', type: 'multiple-choice', question: 'He fell ___ the fence.', translation: 'Ele caiu sobre a cerca.', options: ['over', 'above', 'on', 'in'], correctAnswer: 'over', points: 10 },
      { id: 'prepo-9', sectionId: 'prep-other', type: 'multiple-choice', question: 'The path goes ___ the hill.', translation: 'O caminho passa sobre a colina.', options: ['over', 'through', 'across', 'on'], correctAnswer: 'over', points: 10 },
      { id: 'prepo-10', sectionId: 'prep-other', type: 'multiple-choice', question: 'Think ___ the problem.', translation: 'Pense sobre o problema.', options: ['over', 'about', 'of', 'on'], correctAnswer: 'over', points: 10 }
    ]
  },
  {
    id: 'prepositions-beside-1',
    title: 'Preposition BESIDE',
    description: 'Next to',
    icon: '👥',
    exercises: [
      { id: 'prepbes-1', sectionId: 'prep-other', type: 'multiple-choice', question: 'She is sitting ___ me.', translation: 'Ela está sentada ao meu lado.', options: ['beside', 'next to', 'near', 'by'], correctAnswer: 'beside', points: 10 },
      { id: 'prepbes-2', sectionId: 'prep-other', type: 'multiple-choice', question: 'The car is ___ the house.', translation: 'O carro está ao lado da casa.', options: ['beside', 'next to', 'near', 'at'], correctAnswer: 'beside', points: 10 },
      { id: 'prepbes-3', sectionId: 'prep-other', type: 'multiple-choice', question: 'I will wait ___ the door.', translation: 'Vou esperar ao lado da porta.', options: ['beside', 'near', 'at', 'by'], correctAnswer: 'beside', points: 10 },
      { id: 'prepbes-4', sectionId: 'prep-other', type: 'multiple-choice', question: 'He stands ___ the window.', translation: 'Ele fica ao lado da janela.', options: ['beside', 'near', 'at', 'by'], correctAnswer: 'beside', points: 10 },
      { id: 'prepbes-5', sectionId: 'prep-other', type: 'multiple-choice', question: 'Put the box ___ the desk.', translation: 'Coloque a caixa ao lado da mesa.', options: ['beside', 'next to', 'on', 'at'], correctAnswer: 'beside', points: 10 },
      { id: 'prepbes-6', sectionId: 'prep-other', type: 'multiple-choice', question: 'The dog is lying ___ the bed.', translation: 'O cachorro está deitado ao lado da cama.', options: ['beside', 'near', 'on', 'under'], correctAnswer: 'beside', points: 10 },
      { id: 'prepbes-7', sectionId: 'prep-other', type: 'multiple-choice', question: 'Sit ___ your sister.', translation: 'Sente ao lado da sua irmã.', options: ['beside', 'next to', 'with', 'by'], correctAnswer: 'beside', points: 10 },
      { id: 'prepbes-8', sectionId: 'prep-other', type: 'multiple-choice', question: 'The school is ___ the park.', translation: 'A escola está ao lado do parque.', options: ['beside', 'near', 'at', 'by'], correctAnswer: 'beside', points: 10 },
      { id: 'prepbes-9', sectionId: 'prep-other', type: 'multiple-choice', question: 'I placed the lamp ___ the couch.', translation: 'Coloquei a luminária ao lado do sofá.', options: ['beside', 'next to', 'on', 'at'], correctAnswer: 'beside', points: 10 },
      { id: 'prepbes-10', sectionId: 'prep-other', type: 'multiple-choice', question: 'She stood ___ the tree.', translation: 'Ela ficou ao lado da árvore.', options: ['beside', 'near', 'by', 'at'], correctAnswer: 'beside', points: 10 }
    ]
  },
  {
    id: 'prepositions-near-1',
    title: 'Preposition NEAR',
    description: 'Close to',
    icon: '📍',
    exercises: [
      { id: 'prepnea-1', sectionId: 'prep-other', type: 'multiple-choice', question: 'The house is ___ the lake.', translation: 'A casa está perto do lago.', options: ['near', 'close to', 'by', 'at'], correctAnswer: 'near', points: 10 },
      { id: 'prepnea-2', sectionId: 'prep-other', type: 'multiple-choice', question: 'She lives ___ the school.', translation: 'Ela mora perto da escola.', options: ['near', 'close to', 'from', 'at'], correctAnswer: 'near', points: 10 },
      { id: 'prepnea-3', sectionId: 'prep-other', type: 'multiple-choice', question: 'The store is ___ here.', translation: 'A loja está perto daqui.', options: ['near', 'close to', 'by', 'at'], correctAnswer: 'near', points: 10 },
      { id: 'prepnea-4', sectionId: 'prep-other', type: 'multiple-choice', question: 'We sat ___ the fireplace.', translation: 'Sentamos perto da lareira.', options: ['near', 'close to', 'by', 'at'], correctAnswer: 'near', points: 10 },
      { id: 'prepnea-5', sectionId: 'prep-other', type: 'multiple-choice', question: 'The bank is ___ the station.', translation: 'O banco está perto da estação.', options: ['near', 'close to', 'by', 'at'], correctAnswer: 'near', points: 10 },
      { id: 'prepnea-6', sectionId: 'prep-other', type: 'multiple-choice', question: 'I parked ___ the entrance.', translation: 'Estacionei perto da entrada.', options: ['near', 'close to', 'at', 'by'], correctAnswer: 'near', points: 10 },
      { id: 'prepnea-7', sectionId: 'prep-other', type: 'multiple-choice', question: 'The restaurant is ___ the beach.', translation: 'O restaurante está perto da praia.', options: ['near', 'close to', 'at', 'by'], correctAnswer: 'near', points: 10 },
      { id: 'prepnea-8', sectionId: 'prep-other', type: 'multiple-choice', question: 'He lives ___ the city center.', translation: 'Ele mora perto do centro.', options: ['near', 'close to', 'from', 'at'], correctAnswer: 'near', points: 10 },
      { id: 'prepnea-9', sectionId: 'prep-other', type: 'multiple-choice', question: 'We found a place ___ the river.', translation: 'Encontramos um lugar perto do rio.', options: ['near', 'close to', 'by', 'at'], correctAnswer: 'near', points: 10 },
      { id: 'prepnea-10', sectionId: 'prep-other', type: 'multiple-choice', question: 'The park is ___ the hospital.', translation: 'O parque está perto do hospital.', options: ['near', 'close to', 'from', 'at'], correctAnswer: 'near', points: 10 }
    ]
  },
  {
    id: 'prepositions-through-1',
    title: 'Preposition THROUGH',
    description: 'From one side to another',
    icon: '🚶',
    exercises: [
      { id: 'prepthr-1', sectionId: 'prep-movement', type: 'multiple-choice', question: 'We walked ___ the forest.', translation: 'Caminhamos pela floresta.', options: ['through', 'across', 'over', 'in'], correctAnswer: 'through', points: 10 },
      { id: 'prepthr-2', sectionId: 'prep-movement', type: 'multiple-choice', question: 'The train goes ___ the tunnel.', translation: 'O trem passa pelo túnel.', options: ['through', 'across', 'over', 'in'], correctAnswer: 'through', points: 10 },
      { id: 'prepthr-3', sectionId: 'prep-movement', type: 'multiple-choice', question: 'She looked ___ the window.', translation: 'Ela olhou pela janela.', options: ['through', 'across', 'at', 'in'], correctAnswer: 'through', points: 10 },
      { id: 'prepthr-4', sectionId: 'prep-movement', type: 'multiple-choice', question: 'We drove ___ the city.', translation: 'Dirigimos pela cidade.', options: ['through', 'across', 'over', 'in'], correctAnswer: 'through', points: 10 },
      { id: 'prepthr-5', sectionId: 'prep-movement', type: 'multiple-choice', question: 'The water flows ___ the pipe.', translation: 'A água flui pelo tubo.', options: ['through', 'across', 'in', 'on'], correctAnswer: 'through', points: 10 },
      { id: 'prepthr-6', sectionId: 'prep-movement', type: 'multiple-choice', question: 'We searched ___ the files.', translation: 'Procuramos nos arquivos.', options: ['through', 'across', 'in', 'on'], correctAnswer: 'through', points: 10 },
      { id: 'prepthr-7', sectionId: 'prep-movement', type: 'multiple-choice', question: 'He drove ___ the storm.', translation: 'Ele conduziu pela tempestade.', options: ['through', 'across', 'in', 'over'], correctAnswer: 'through', points: 10 },
      { id: 'prepthr-8', sectionId: 'prep-movement', type: 'multiple-choice', question: 'The light shines ___ the glass.', translation: 'A luz brilha pelo vidro.', options: ['through', 'across', 'in', 'on'], correctAnswer: 'through', points: 10 },
      { id: 'prepthr-9', sectionId: 'prep-movement', type: 'multiple-choice', question: 'I read ___ the book quickly.', translation: 'Li o livro rapidamente.', options: ['through', 'across', 'over', 'in'], correctAnswer: 'through', points: 10 },
      { id: 'prepthr-10', sectionId: 'prep-movement', type: 'multiple-choice', question: 'We passed ___ the checkpoint.', translation: 'Passamos pelo posto de controle.', options: ['through', 'across', 'over', 'at'], correctAnswer: 'through', points: 10 }
    ]
  },
  {
    id: 'prepositions-across-1',
    title: 'Preposition ACROSS',
    description: 'From one side to the other',
    icon: '🔀',
    exercises: [
      { id: 'prepac-1', sectionId: 'prep-movement', type: 'multiple-choice', question: 'She swam ___ the river.', translation: 'Ela atravessou o rio.', options: ['across', 'through', 'over', 'on'], correctAnswer: 'across', points: 10 },
      { id: 'prepac-2', sectionId: 'prep-movement', type: 'multiple-choice', question: 'We walked ___ the street.', translation: 'Atravessamos a rua.', options: ['across', 'through', 'on', 'at'], correctAnswer: 'across', points: 10 },
      { id: 'prepac-3', sectionId: 'prep-movement', type: 'multiple-choice', question: 'The bridge goes ___ the river.', translation: 'A ponte atravessa o rio.', options: ['across', 'through', 'over', 'on'], correctAnswer: 'across', points: 10 },
      { id: 'prepac-4', sectionId: 'prep-movement', type: 'multiple-choice', question: 'I looked ___ the room.', translation: 'Olhei pelo quarto.', options: ['across', 'through', 'in', 'at'], correctAnswer: 'across', points: 10 },
      { id: 'prepac-5', sectionId: 'prep-movement', type: 'multiple-choice', question: 'She spread the cloth ___ the table.', translation: 'Ela estendeu o pano sobre a mesa.', options: ['across', 'over', 'on', 'in'], correctAnswer: 'across', points: 10 },
      { id: 'prepac-6', sectionId: 'prep-movement', type: 'multiple-choice', question: 'The plane flew ___ the desert.', translation: 'O avião voou sobre o deserto.', options: ['across', 'over', 'above', 'through'], correctAnswer: 'across', points: 10 },
      { id: 'prepac-7', sectionId: 'prep-movement', type: 'multiple-choice', question: 'We traveled ___ the country.', translation: 'Viajamos pelo país.', options: ['across', 'through', 'over', 'in'], correctAnswer: 'across', points: 10 },
      { id: 'prepac-8', sectionId: 'prep-movement', type: 'multiple-choice', question: 'The path runs ___ the field.', translation: 'O caminho atravessa o campo.', options: ['across', 'through', 'over', 'on'], correctAnswer: 'across', points: 10 },
      { id: 'prepac-9', sectionId: 'prep-movement', type: 'multiple-choice', question: 'She walked ___ the bridge.', translation: 'Ela caminhou sobre a ponte.', options: ['across', 'over', 'on', 'through'], correctAnswer: 'across', points: 10 },
      { id: 'prepac-10', sectionId: 'prep-movement', type: 'multiple-choice', question: 'The message spread ___ the team.', translation: 'A mensagem se espalhou pela equipe.', options: ['across', 'through', 'among', 'between'], correctAnswer: 'across', points: 10 }
    ]
  },
  {
    id: 'prepositions-toward-1',
    title: 'Preposition TOWARD',
    description: 'In the direction of',
    icon: '🎯',
    exercises: [
      { id: 'preptow-1', sectionId: 'prep-movement', type: 'multiple-choice', question: 'She walked ___ the door.', translation: 'Ela caminhou em direção à porta.', options: ['toward', 'to', 'for', 'at'], correctAnswer: 'toward', points: 10 },
      { id: 'preptow-2', sectionId: 'prep-movement', type: 'multiple-choice', question: 'He moved ___ the window.', translation: 'Ele se moveu em direção à janela.', options: ['toward', 'to', 'for', 'on'], correctAnswer: 'toward', points: 10 },
      { id: 'preptow-3', sectionId: 'prep-movement', type: 'multiple-choice', question: 'We drove ___ the city.', translation: 'Dirigimos em direção à cidade.', options: ['toward', 'to', 'for', 'at'], correctAnswer: 'toward', points: 10 },
      { id: 'preptow-4', sectionId: 'prep-movement', type: 'multiple-choice', question: 'The dog ran ___ its owner.', translation: 'O cachorro correu em direção ao dono.', options: ['toward', 'to', 'for', 'at'], correctAnswer: 'toward', points: 10 },
      { id: 'preptow-5', sectionId: 'prep-movement', type: 'multiple-choice', question: 'She looked ___ the future.', translation: 'Ela olhou para o futuro.', options: ['toward', 'to', 'at', 'for'], correctAnswer: 'toward', points: 10 },
      { id: 'preptow-6', sectionId: 'prep-movement', type: 'multiple-choice', question: 'We are heading ___ the airport.', translation: 'Estamos nos dirigindo ao aeroporto.', options: ['toward', 'to', 'for', 'at'], correctAnswer: 'toward', points: 10 },
      { id: 'preptow-7', sectionId: 'prep-movement', type: 'multiple-choice', question: 'He stepped ___ the line.', translation: 'Ele deu um passo em direção à linha.', options: ['toward', 'to', 'on', 'at'], correctAnswer: 'toward', points: 10 },
      { id: 'preptow-8', sectionId: 'prep-movement', type: 'multiple-choice', question: 'The birds flew ___ the south.', translation: 'Os pássaros voaram em direção ao sul.', options: ['toward', 'to', 'for', 'at'], correctAnswer: 'toward', points: 10 },
      { id: 'preptow-9', sectionId: 'prep-movement', type: 'multiple-choice', question: 'She leaned ___ him.', translation: 'Ela se inclinou em direção a ele.', options: ['toward', 'to', 'at', 'on'], correctAnswer: 'toward', points: 10 },
      { id: 'preptow-10', sectionId: 'prep-movement', type: 'multiple-choice', question: 'We are moving ___ success.', translation: 'Estamos nos movendo em direção ao sucesso.', options: ['toward', 'to', 'for', 'at'], correctAnswer: 'toward', points: 10 }
    ]
  },
  {
    id: 'prepositions-behind-1',
    title: 'Preposition BEHIND',
    description: 'At the back of',
    icon: '🔙',
    exercises: [
      { id: 'prepbh-1', sectionId: 'prep-place', type: 'multiple-choice', question: 'The car is ___ the house.', translation: 'O carro está atrás da casa.', options: ['behind', 'back', 'after', 'at'], correctAnswer: 'behind', points: 10 },
      { id: 'prepbh-2', sectionId: 'prep-place', type: 'multiple-choice', question: 'She is standing ___ me.', translation: 'Ela está atrás de mim.', options: ['behind', 'back', 'after', 'at'], correctAnswer: 'behind', points: 10 },
      { id: 'prepbh-3', sectionId: 'prep-place', type: 'multiple-choice', question: 'The garden is ___ the building.', translation: 'O jardim fica atrás do prédio.', options: ['behind', 'back', 'at', 'in'], correctAnswer: 'behind', points: 10 },
      { id: 'prepbh-4', sectionId: 'prep-place', type: 'multiple-choice', question: 'He hid ___ the tree.', translation: 'Ele se escondeu atrás da árvore.', options: ['behind', 'back', 'under', 'at'], correctAnswer: 'behind', points: 10 },
      { id: 'prepbh-5', sectionId: 'prep-place', type: 'multiple-choice', question: 'The secret is ___ this door.', translation: 'O segredo está atrás desta porta.', options: ['behind', 'back', 'at', 'in'], correctAnswer: 'behind', points: 10 },
      { id: 'prepbh-6', sectionId: 'prep-place', type: 'multiple-choice', question: 'She walked ___ the group.', translation: 'Ela caminhou atrás do grupo.', options: ['behind', 'back', 'after', 'at'], correctAnswer: 'behind', points: 10 },
      { id: 'prepbh-7', sectionId: 'prep-place', type: 'multiple-choice', question: 'The keys are ___ the books.', translation: 'As chaves estão atrás dos livros.', options: ['behind', 'back', 'under', 'in'], correctAnswer: 'behind', points: 10 },
      { id: 'prepbh-8', sectionId: 'prep-place', type: 'multiple-choice', question: 'He is ___ schedule.', translation: 'Ele está atrasado.', options: ['behind', 'back', 'late', 'after'], correctAnswer: 'behind', points: 10 },
      { id: 'prepbh-9', sectionId: 'prep-place', type: 'multiple-choice', question: 'The sun is ___ the clouds.', translation: 'O sol está atrás das nuvens.', options: ['behind', 'under', 'below', 'at'], correctAnswer: 'behind', points: 10 },
      { id: 'prepbh-10', sectionId: 'prep-place', type: 'multiple-choice', question: 'I have doubts ___ this plan.', translation: 'Tenho dúvidas sobre este plano.', options: ['behind', 'about', 'in', 'on'], correctAnswer: 'behind', points: 10 }
    ]
  },
  {
    id: 'prepositions-in-front-1',
    title: 'Preposition IN FRONT OF',
    description: 'Before',
    icon: '🔜',
    exercises: [
      { id: 'prepif-1', sectionId: 'prep-place', type: 'multiple-choice', question: 'The car is ___ the house.', translation: 'O carro está na frente da casa.', options: ['in front of', 'in', 'at', 'on'], correctAnswer: 'in front of', points: 10 },
      { id: 'prepif-2', sectionId: 'prep-place', type: 'multiple-choice', question: 'She stood ___ me.', translation: 'Ela ficou na minha frente.', options: ['in front of', 'before', 'at', 'on'], correctAnswer: 'in front of', points: 10 },
      { id: 'prepif-3', sectionId: 'prep-place', type: 'multiple-choice', question: 'The tree is ___ the school.', translation: 'A árvore está na frente da escola.', options: ['in front of', 'before', 'at', 'on'], correctAnswer: 'in front of', points: 10 },
      { id: 'prepif-4', sectionId: 'prep-place', type: 'multiple-choice', question: 'He parked ___ the store.', translation: 'Ele estacionou na frente da loja.', options: ['in front of', 'before', 'at', 'on'], correctAnswer: 'in front of', points: 10 },
      { id: 'prepif-5', sectionId: 'prep-place', type: 'multiple-choice', question: 'The children are playing ___ the house.', translation: 'As crianças estão brincando na frente da casa.', options: ['in front of', 'at', 'on', 'by'], correctAnswer: 'in front of', points: 10 },
      { id: 'prepif-6', sectionId: 'prep-place', type: 'multiple-choice', question: 'I will wait ___ the cinema.', translation: 'Vou esperar na frente do cinema.', options: ['in front of', 'at', 'by', 'near'], correctAnswer: 'in front of', points: 10 },
      { id: 'prepif-7', sectionId: 'prep-place', type: 'multiple-choice', question: 'The bus stops ___ the hospital.', translation: 'O ônibus para na frente do hospital.', options: ['in front of', 'at', 'near', 'by'], correctAnswer: 'in front of', points: 10 },
      { id: 'prepif-8', sectionId: 'prep-place', type: 'multiple-choice', question: 'She sat ___ the TV.', translation: 'Ela sentou na frente da TV.', options: ['in front of', 'at', 'near', 'by'], correctAnswer: 'in front of', points: 10 },
      { id: 'prepif-9', sectionId: 'prep-place', type: 'multiple-choice', question: 'He stood ___ the mirror.', translation: 'Ele ficou na frente do espelho.', options: ['in front of', 'at', 'before', 'by'], correctAnswer: 'in front of', points: 10 },
      { id: 'prepif-10', sectionId: 'prep-place', type: 'multiple-choice', question: 'The picture is ___ the fireplace.', translation: 'A foto está na frente da lareira.', options: ['in front of', 'on', 'at', 'by'], correctAnswer: 'in front of', points: 10 }
    ]
  },
  {
    id: 'prepositions-inside-1',
    title: 'Preposition INSIDE',
    description: 'Within',
    icon: '🔳',
    exercises: [
      { id: 'prepins-1', sectionId: 'prep-place', type: 'multiple-choice', question: 'The dog is ___ the house.', translation: 'O cachorro está dentro de casa.', options: ['inside', 'in', 'into', 'at'], correctAnswer: 'inside', points: 10 },
      { id: 'prepins-2', sectionId: 'prep-place', type: 'multiple-choice', question: 'She is ___ the box.', translation: 'Ela está dentro da caixa.', options: ['inside', 'in', 'into', 'at'], correctAnswer: 'inside', points: 10 },
      { id: 'prepins-3', sectionId: 'prep-place', type: 'multiple-choice', question: 'The money is ___ the drawer.', translation: 'O dinheiro está dentro da gaveta.', options: ['inside', 'in', 'into', 'at'], correctAnswer: 'inside', points: 10 },
      { id: 'prepins-4', sectionId: 'prep-place', type: 'multiple-choice', question: 'We are ___ the building.', translation: 'Estamos dentro do prédio.', options: ['inside', 'in', 'at', 'on'], correctAnswer: 'inside', points: 10 },
      { id: 'prepins-5', sectionId: 'prep-place', type: 'multiple-choice', question: 'Look ___ the box.', translation: 'Olhe dentro da caixa.', options: ['inside', 'in', 'into', 'at'], correctAnswer: 'inside', points: 10 },
      { id: 'prepins-6', sectionId: 'prep-place', type: 'multiple-choice', question: 'He is ___ the car.', translation: 'Ele está dentro do carro.', options: ['inside', 'in', 'at', 'on'], correctAnswer: 'inside', points: 10 },
      { id: 'prepins-7', sectionId: 'prep-place', type: 'multiple-choice', question: 'The cat stayed ___ the room.', translation: 'O gato ficou dentro do quarto.', options: ['inside', 'in', 'at', 'on'], correctAnswer: 'inside', points: 10 },
      { id: 'prepins-8', sectionId: 'prep-place', type: 'multiple-choice', question: 'Everything is ___ the bag.', translation: 'Tudo está dentro da bolsa.', options: ['inside', 'in', 'into', 'at'], correctAnswer: 'inside', points: 10 },
      { id: 'prepins-9', sectionId: 'prep-place', type: 'multiple-choice', question: 'She went ___ the building.', translation: 'Ela entrou no prédio.', options: ['inside', 'in', 'into', 'to'], correctAnswer: 'inside', points: 10 },
      { id: 'prepins-10', sectionId: 'prep-place', type: 'multiple-choice', question: 'Let us go ___ the mall.', translation: 'Vamos entrar no shopping.', options: ['inside', 'in', 'into', 'to'], correctAnswer: 'inside', points: 10 }
    ]
  },
  {
    id: 'prepositions-outside-1',
    title: 'Preposition OUTSIDE',
    description: 'Not within',
    icon: '🔲',
    exercises: [
      { id: 'prepout-1', sectionId: 'prep-place', type: 'multiple-choice', question: 'The children are playing ___ the house.', translation: 'As crianças estão brincando fora de casa.', options: ['outside', 'out', 'from', 'at'], correctAnswer: 'outside', points: 10 },
      { id: 'prepout-2', sectionId: 'prep-place', type: 'multiple-choice', question: 'The car is parked ___ the garage.', translation: 'O carro está estacionado fora da garagem.', options: ['outside', 'out', 'from', 'at'], correctAnswer: 'outside', points: 10 },
      { id: 'prepout-3', sectionId: 'prep-place', type: 'multiple-choice', question: 'She is waiting ___ the door.', translation: 'Ela está esperando fora da porta.', options: ['outside', 'at', 'by', 'near'], correctAnswer: 'outside', points: 10 },
      { id: 'prepout-4', sectionId: 'prep-place', type: 'multiple-choice', question: 'The dog is ___ the fence.', translation: 'O cachorro está fora da cerca.', options: ['outside', 'out', 'from', 'over'], correctAnswer: 'outside', points: 10 },
      { id: 'prepout-5', sectionId: 'prep-place', type: 'multiple-choice', question: 'Let us go ___ and play.', translation: 'Vamos lá fora brincar.', options: ['outside', 'out', 'in', 'at'], correctAnswer: 'outside', points: 10 },
      { id: 'prepout-6', sectionId: 'prep-place', type: 'multiple-choice', question: 'It is cold ___ today.', translation: 'Está frio lá fora hoje.', options: ['outside', 'out', 'in', 'at'], correctAnswer: 'outside', points: 10 },
      { id: 'prepout-7', sectionId: 'prep-place', type: 'multiple-choice', question: 'The shoes are ___ the house.', translation: 'Os sapatos estão fora de casa.', options: ['outside', 'out', 'from', 'at'], correctAnswer: 'outside', points: 10 },
      { id: 'prepout-8', sectionId: 'prep-place', type: 'multiple-choice', question: 'Leave the bag ___ the room.', translation: 'Deixe a bolsa fora do quarto.', options: ['outside', 'out', 'from', 'in'], correctAnswer: 'outside', points: 10 },
      { id: 'prepout-9', sectionId: 'prep-place', type: 'multiple-choice', question: 'The flower is ___ the pot.', translation: 'A flor está fora do vaso.', options: ['outside', 'out', 'from', 'of'], correctAnswer: 'outside', points: 10 },
      { id: 'prepout-10', sectionId: 'prep-place', type: 'multiple-choice', question: 'He stood ___ watching.', translation: 'Ele ficou parado do lado de fora watching.', options: ['outside', 'out', 'at', 'by'], correctAnswer: 'outside', points: 10 }
    ]
  },
  {
    id: 'prepositions-up-1',
    title: 'Preposition UP',
    description: 'To a higher position',
    icon: '⬆️',
    exercises: [
      { id: 'prepup-1', sectionId: 'prep-movement', type: 'multiple-choice', question: 'The balloon went ___ into the sky.', translation: 'O balão subiu para o céu.', options: ['up', 'down', 'on', 'at'], correctAnswer: 'up', points: 10 },
      { id: 'prepup-2', sectionId: 'prep-movement', type: 'multiple-choice', question: 'We climbed ___ the mountain.', translation: 'Subimos a montanha.', options: ['up', 'down', 'on', 'at'], correctAnswer: 'up', points: 10 },
      { id: 'prepup-3', sectionId: 'prep-movement', type: 'multiple-choice', question: 'The price went ___', translation: 'O preço subiu.', options: ['up', 'down', 'on', 'in'], correctAnswer: 'up', points: 10 },
      { id: 'prepup-4', sectionId: 'prep-movement', type: 'multiple-choice', question: 'She looked ___ at the sky.', translation: 'Ela olhou para cima.', options: ['up', 'down', 'at', 'on'], correctAnswer: 'up', points: 10 },
      { id: 'prepup-5', sectionId: 'prep-movement', type: 'multiple-choice', question: 'The water level rose ___', translation: 'O nível da água subiu.', options: ['up', 'down', 'on', 'in'], correctAnswer: 'up', points: 10 },
      { id: 'prepup-6', sectionId: 'prep-movement', type: 'multiple-choice', question: 'He walked ___ the stairs.', translation: 'Ele subiu as escadas.', options: ['up', 'down', 'on', 'in'], correctAnswer: 'up', points: 10 },
      { id: 'prepup-7', sectionId: 'prep-movement', type: 'multiple-choice', question: 'The plane flew ___ into the clouds.', translation: 'O avião voou para cima.', options: ['up', 'down', 'into', 'through'], correctAnswer: 'up', points: 10 },
      { id: 'prepup-8', sectionId: 'prep-movement', type: 'multiple-choice', question: 'She turned ___ the volume.', translation: 'Ela aumentouno volume.', options: ['up', 'down', 'on', 'off'], correctAnswer: 'up', points: 10 },
      { id: 'prepup-9', sectionId: 'prep-movement', type: 'multiple-choice', question: 'He picked ___ the pen.', translation: 'Ele pegou a caneta.', options: ['up', 'down', 'on', 'in'], correctAnswer: 'up', points: 10 },
      { id: 'prepup-10', sectionId: 'prep-movement', type: 'multiple-choice', question: 'The sun came ___', translation: 'O sol nasceu.', options: ['up', 'down', 'out', 'in'], correctAnswer: 'up', points: 10 }
    ]
  },
  {
    id: 'prepositions-down-1',
    title: 'Preposition DOWN',
    description: 'To a lower position',
    icon: '⬇️',
    exercises: [
      { id: 'prepdn-1', sectionId: 'prep-movement', type: 'multiple-choice', question: 'The ball fell ___ to the ground.', translation: 'A bola caiu no chão.', options: ['down', 'up', 'on', 'at'], correctAnswer: 'down', points: 10 },
      { id: 'prepdn-2', sectionId: 'prep-movement', type: 'multiple-choice', question: 'We walked ___ the hill.', translation: 'Descemos a colina.', options: ['down', 'up', 'on', 'at'], correctAnswer: 'down', points: 10 },
      { id: 'prepdn-3', sectionId: 'prep-movement', type: 'multiple-choice', question: 'The temperature went ___', translation: 'A temperatura caiu.', options: ['down', 'up', 'on', 'in'], correctAnswer: 'down', points: 10 },
      { id: 'prepdn-4', sectionId: 'prep-movement', type: 'multiple-choice', question: 'She looked ___ at the floor.', translation: 'Ela olhou para baixo.', options: ['down', 'up', 'at', 'on'], correctAnswer: 'down', points: 10 },
      { id: 'prepdn-5', sectionId: 'prep-movement', type: 'multiple-choice', question: 'He sat ___ on the chair.', translation: 'Ele sentou na cadeira.', options: ['down', 'up', 'on', 'at'], correctAnswer: 'down', points: 10 },
      { id: 'prepdn-6', sectionId: 'prep-movement', type: 'multiple-choice', question: 'The bird flew ___ from the tree.', translation: 'O pássaro voou para baixo.', options: ['down', 'up', 'from', 'at'], correctAnswer: 'down', points: 10 },
      { id: 'prepdn-7', sectionId: 'prep-movement', type: 'multiple-choice', question: 'He turned ___ the lights.', translation: 'Ele abaixou as luzes.', options: ['down', 'up', 'off', 'on'], correctAnswer: 'down', points: 10 },
      { id: 'prepdn-8', sectionId: 'prep-movement', type: 'multiple-choice', question: 'Write your answer ___ here.', translation: 'Escreva sua resposta aqui embaixo.', options: ['down', 'up', 'here', 'there'], correctAnswer: 'down', points: 10 },
      { id: 'prepdn-9', sectionId: 'prep-movement', type: 'multiple-choice', question: 'The sun went ___', translation: 'O sol se pôr.', options: ['down', 'up', 'out', 'in'], correctAnswer: 'down', points: 10 },
      { id: 'prepdn-10', sectionId: 'prep-movement', type: 'multiple-choice', question: 'Let us sit ___ here.', translation: 'Vamos nos sentar aqui.', options: ['down', 'up', 'here', 'there'], correctAnswer: 'down', points: 10 }
    ]
  }
];

export const pronounsExercisePacks: ExercisePack[] = [
  {
    id: 'personal-pronouns-1',
    title: 'Personal Pronouns',
    description: 'Practice I, you, he, she, it, we, they',
    icon: '👤',
    exercises: [
      { id: 'prpex-ex1', sectionId: 'pronouns', type: 'multiple-choice', question: '___ is a teacher.', translation: 'She is a teacher.', options: ['I', 'He', 'She', 'It'], correctAnswer: 'She', points: 10 },
      { id: 'prpex-ex2', sectionId: 'pronouns', type: 'multiple-choice', question: '___ are students.', translation: 'We are students.', options: ['I', 'You', 'We', 'He'], correctAnswer: 'We', points: 10 },
      { id: 'prpex-ex3', sectionId: 'pronouns', type: 'multiple-choice', question: '___ is cute.', translation: 'It is cute.', options: ['I', 'You', 'We', 'It'], correctAnswer: 'It', points: 10 }
    ]
  },
  {
    id: 'possessive-pronouns-1',
    title: 'Possessive Pronouns',
    description: 'Practice my, your, his, her, our, their',
    icon: '🔑',
    exercises: [
      { id: 'poss-ex1', sectionId: 'pronouns', type: 'multiple-choice', question: 'This is ___ book.', translation: 'This is my book.', options: ['I', 'me', 'my', 'mine'], correctAnswer: 'my', points: 10 },
      { id: 'poss-ex2', sectionId: 'pronouns', type: 'multiple-choice', question: '___ car is new.', translation: 'His car is new.', options: ['He', 'His', 'Him', 'Himself'], correctAnswer: 'His', points: 10 },
      { id: 'poss-ex3', sectionId: 'pronouns', type: 'multiple-choice', question: '___ house is big.', translation: 'Our house is big.', options: ['We', 'Us', 'Our', 'Ours'], correctAnswer: 'Our', points: 10 }
    ]
  },
  {
    id: 'pronouns-subject-1',
    title: 'Subject Pronouns',
    description: 'I, you, he, she, it, we, they',
    icon: '👤',
    exercises: [
      { id: 'subjpron-1', sectionId: 'pronouns', type: 'multiple-choice', question: '___ is a doctor.', translation: 'He is a doctor.', options: ['I', 'He', 'She', 'It'], correctAnswer: 'He', points: 10 },
      { id: 'subjpron-2', sectionId: 'pronouns', type: 'multiple-choice', question: '___ are happy.', translation: 'We are happy.', options: ['I', 'We', 'They', 'You'], correctAnswer: 'We', points: 10 },
      { id: 'subjpron-3', sectionId: 'pronouns', type: 'multiple-choice', question: '___ is a cat.', translation: 'It is a cat.', options: ['He', 'She', 'It', 'They'], correctAnswer: 'It', points: 10 },
      { id: 'subjpron-4', sectionId: 'pronouns', type: 'multiple-choice', question: '___ am a student.', translation: 'I am a student.', options: ['I', 'You', 'We', 'He'], correctAnswer: 'I', points: 10 },
      { id: 'subjpron-5', sectionId: 'pronouns', type: 'multiple-choice', question: '___ are from Brazil.', translation: 'They are from Brazil.', options: ['We', 'You', 'They', 'He'], correctAnswer: 'They', points: 10 },
      { id: 'subjpron-6', sectionId: 'pronouns', type: 'multiple-choice', question: '___ is my mother.', translation: 'She is my mother.', options: ['He', 'She', 'It', 'They'], correctAnswer: 'She', points: 10 },
      { id: 'subjpron-7', sectionId: 'pronouns', type: 'multiple-choice', question: '___ am eating.', translation: 'I am eating.', options: ['I', 'Me', 'My', 'Mine'], correctAnswer: 'I', points: 10 },
      { id: 'subjpron-8', sectionId: 'pronouns', type: 'multiple-choice', question: '___ are playing.', translation: 'They are playing.', options: ['We', 'Them', 'They', 'Their'], correctAnswer: 'They', points: 10 },
      { id: 'subjpron-9', sectionId: 'pronouns', type: 'multiple-choice', question: '___ is working.', translation: 'He is working.', options: ['She', 'He', 'It', 'They'], correctAnswer: 'He', points: 10 },
      { id: 'subjpron-10', sectionId: 'pronouns', type: 'multiple-choice', question: '___ are friends.', translation: 'You are friends.', options: ['We', 'You', 'They', 'Them'], correctAnswer: 'You', points: 10 }
    ]
  },
  {
    id: 'pronouns-object-1',
    title: 'Object Pronouns',
    description: 'me, you, him, her, it, us, them',
    icon: '👥',
    exercises: [
      { id: 'objpron-1', sectionId: 'pronouns', type: 'multiple-choice', question: 'I see ___.', translation: 'I see him.', options: ['he', 'him', 'his', 'himself'], correctAnswer: 'him', points: 10 },
      { id: 'objpron-2', sectionId: 'pronouns', type: 'multiple-choice', question: 'She loves ___.', translation: 'She loves them.', options: ['they', 'them', 'their', 'theirs'], correctAnswer: 'them', points: 10 },
      { id: 'objpron-3', sectionId: 'pronouns', type: 'multiple-choice', question: 'Give it to ___.', translation: 'Give it to me.', options: ['I', 'me', 'my', 'mine'], correctAnswer: 'me', points: 10 },
      { id: 'objpron-4', sectionId: 'pronouns', type: 'multiple-choice', question: 'We called ___.', translation: 'We called her.', options: ['she', 'her', 'hers', 'him'], correctAnswer: 'her', points: 10 },
      { id: 'objpron-5', sectionId: 'pronouns', type: 'multiple-choice', question: 'They invited ___.', translation: 'They invited us.', options: ['we', 'us', 'our', 'ours'], correctAnswer: 'us', points: 10 },
      { id: 'objpron-6', sectionId: 'pronouns', type: 'multiple-choice', question: 'I told ___.', translation: 'I told you.', options: ['you', 'your', 'yours', 'u'], correctAnswer: 'you', points: 10 },
      { id: 'objpron-7', sectionId: 'pronouns', type: 'multiple-choice', question: 'The cat followed ___.', translation: 'The cat followed her.', options: ['she', 'her', 'hers', 'he'], correctAnswer: 'her', points: 10 },
      { id: 'objpron-8', sectionId: 'pronouns', type: 'multiple-choice', question: 'The teacher helps ___.', translation: 'The teacher helps us.', options: ['we', 'us', 'our', 'ours'], correctAnswer: 'us', points: 10 },
      { id: 'objpron-9', sectionId: 'pronouns', type: 'multiple-choice', question: 'I remember ___.', translation: 'I remember them.', options: ['they', 'them', 'their', 'theirs'], correctAnswer: 'them', points: 10 },
      { id: 'objpron-10', sectionId: 'pronouns', type: 'multiple-choice', question: 'Call ___.', translation: 'Call me.', options: ['I', 'me', 'my', 'mine'], correctAnswer: 'me', points: 10 }
    ]
  },
  {
    id: 'pronouns-reflexive-1',
    title: 'Reflexive Pronouns',
    description: 'myself, yourself, himself, herself, itself, ourselves, yourselves, themselves',
    icon: '🪞',
    exercises: [
      { id: 'reflex-1', sectionId: 'pronouns', type: 'multiple-choice', question: 'I taught ___ English.', translation: 'I taught myself English.', options: ['me', 'myself', 'my', 'I'], correctAnswer: 'myself', points: 10 },
      { id: 'reflex-2', sectionId: 'pronouns', type: 'multiple-choice', question: 'She hurt ___.', translation: 'She hurt herself.', options: ['her', 'herself', 'she', 'hers'], correctAnswer: 'herself', points: 10 },
      { id: 'reflex-3', sectionId: 'pronouns', type: 'multiple-choice', question: 'He introduced ___ to everyone.', translation: 'He introduced himself to everyone.', options: ['him', 'himself', 'his', 'he'], correctAnswer: 'himself', points: 10 },
      { id: 'reflex-4', sectionId: 'pronouns', type: 'multiple-choice', question: 'We enjoyed ___.', translation: 'We enjoyed ourselves.', options: ['us', 'ourselves', 'our', 'we'], correctAnswer: 'ourselves', points: 10 },
      { id: 'reflex-5', sectionId: 'pronouns', type: 'multiple-choice', question: 'They kept ___ busy.', translation: 'They kept themselves busy.', options: ['them', 'themselves', 'their', 'they'], correctAnswer: 'themselves', points: 10 },
      { id: 'reflex-6', sectionId: 'pronouns', type: 'multiple-choice', question: 'You should take care of ___.', translation: 'You should take care of yourself.', options: ['you', 'yourself', 'yours', 'your'], correctAnswer: 'yourself', points: 10 },
      { id: 'reflex-7', sectionId: 'pronouns', type: 'multiple-choice', question: 'The dog hurt ___.', translation: 'The dog hurt itself.', options: ['it', 'itself', 'its', 'it is'], correctAnswer: 'itself', points: 10 },
      { id: 'reflex-8', sectionId: 'pronouns', type: 'multiple-choice', question: 'Please help ___.', translation: 'Please help yourselves.', options: ['you', 'yourself', 'yourselves', 'your'], correctAnswer: 'yourselves', points: 10 },
      { id: 'reflex-9', sectionId: 'pronouns', type: 'multiple-choice', question: 'She bought ___ a gift.', translation: 'She bought herself a gift.', options: ['her', 'herself', 'she', 'hers'], correctAnswer: 'herself', points: 10 },
      { id: 'reflex-10', sectionId: 'pronouns', type: 'multiple-choice', question: 'He made ___ breakfast.', translation: 'He made himself breakfast.', options: ['him', 'himself', 'his', 'he'], correctAnswer: 'himself', points: 10 }
    ]
  },
  {
    id: 'pronouns-demonstrative-this-1',
    title: 'Demonstrative: THIS/THESE',
    description: 'This and these',
    icon: '✋',
    exercises: [
      { id: 'demothis-1', sectionId: 'pronouns', type: 'multiple-choice', question: '___ is my book.', translation: 'This is my book.', options: ['This', 'These', 'That', 'Those'], correctAnswer: 'This', points: 10 },
      { id: 'demothis-2', sectionId: 'pronouns', type: 'multiple-choice', question: '___ are my friends.', translation: 'These are my friends.', options: ['This', 'These', 'That', 'Those'], correctAnswer: 'These', points: 10 },
      { id: 'demothis-3', sectionId: 'pronouns', type: 'multiple-choice', question: '___ is a nice day.', translation: 'This is a nice day.', options: ['This', 'These', 'It', 'That'], correctAnswer: 'This', points: 10 },
      { id: 'demothis-4', sectionId: 'pronouns', type: 'multiple-choice', question: 'I like ___ shoes.', translation: 'I like these shoes.', options: ['this', 'these', 'that', 'those'], correctAnswer: 'these', points: 10 },
      { id: 'demothis-5', sectionId: 'pronouns', type: 'multiple-choice', question: '___ apples are fresh.', translation: 'These apples are fresh.', options: ['This', 'These', 'That', 'Those'], correctAnswer: 'These', points: 10 },
      { id: 'demothis-6', sectionId: 'pronouns', type: 'multiple-choice', question: 'Look at ___ picture.', translation: 'Look at this picture.', options: ['this', 'these', 'that', 'those'], correctAnswer: 'this', points: 10 },
      { id: 'demothis-7', sectionId: 'pronouns', type: 'multiple-choice', question: '___ flowers are beautiful.', translation: 'These flowers are beautiful.', options: ['This', 'These', 'Those', 'Those'], correctAnswer: 'These', points: 10 },
      { id: 'demothis-8', sectionId: 'pronouns', type: 'multiple-choice', question: '___ is my phone number.', translation: 'This is my phone number.', options: ['This', 'These', 'It', 'That'], correctAnswer: 'This', points: 10 },
      { id: 'demothis-9', sectionId: 'pronouns', type: 'multiple-choice', question: 'I prefer ___ one.', translation: 'I prefer this one.', options: ['this', 'these', 'that', 'those'], correctAnswer: 'this', points: 10 },
      { id: 'demothis-10', sectionId: 'pronouns', type: 'multiple-choice', question: '___ students are smart.', translation: 'These students are smart.', options: ['This', 'These', 'That', 'Those'], correctAnswer: 'These', points: 10 }
    ]
  },
  {
    id: 'pronouns-demonstrative-that-1',
    title: 'Demonstrative: THAT/THOSE',
    description: 'That and those',
    icon: '👉',
    exercises: [
      { id: 'demothat-1', sectionId: 'pronouns', type: 'multiple-choice', question: '___ is my house.', translation: 'That is my house.', options: ['This', 'That', 'These', 'Those'], correctAnswer: 'That', points: 10 },
      { id: 'demothat-2', sectionId: 'pronouns', type: 'multiple-choice', question: '___ are my keys.', translation: 'Those are my keys.', options: ['This', 'That', 'These', 'Those'], correctAnswer: 'Those', points: 10 },
      { id: 'demothat-3', sectionId: 'pronouns', type: 'multiple-choice', question: 'Look at ___ mountain.', translation: 'Look at that mountain.', options: ['this', 'that', 'these', 'those'], correctAnswer: 'that', points: 10 },
      { id: 'demothat-4', sectionId: 'pronouns', type: 'multiple-choice', question: '___ birds are flying.', translation: 'Those birds are flying.', options: ['This', 'That', 'These', 'Those'], correctAnswer: 'Those', points: 10 },
      { id: 'demothat-5', sectionId: 'pronouns', type: 'multiple-choice', question: 'I remember ___ day.', translation: 'I remember that day.', options: ['this', 'that', 'these', 'those'], correctAnswer: 'that', points: 10 },
      { id: 'demothat-6', sectionId: 'pronouns', type: 'multiple-choice', question: '___ books are old.', translation: 'Those books are old.', options: ['This', 'That', 'These', 'Those'], correctAnswer: 'Those', points: 10 },
      { id: 'demothat-7', sectionId: 'pronouns', type: 'multiple-choice', question: 'What is ___?', translation: 'What is that?', options: ['this', 'that', 'it', 'these'], correctAnswer: 'that', points: 10 },
      { id: 'demothat-8', sectionId: 'pronouns', type: 'multiple-choice', question: 'I like ___ song.', translation: 'I like that song.', options: ['this', 'that', 'these', 'those'], correctAnswer: 'that', points: 10 },
      { id: 'demothat-9', sectionId: 'pronouns', type: 'multiple-choice', question: '___ people are waiting.', translation: 'Those people are waiting.', options: ['This', 'That', 'These', 'Those'], correctAnswer: 'Those', points: 10 },
      { id: 'demothat-10', sectionId: 'pronouns', type: 'multiple-choice', question: 'She saw ___ movie.', translation: 'She saw that movie.', options: ['this', 'that', 'these', 'those'], correctAnswer: 'that', points: 10 }
    ]
  },
  {
    id: 'pronouns-indefinite-some-1',
    title: 'Indefinite: SOME/ANY',
    description: 'Some and any',
    icon: '🔢',
    exercises: [
      { id: 'indef-1', sectionId: 'pronouns', type: 'multiple-choice', question: 'I have ___ money.', translation: 'I have some money.', options: ['some', 'any', 'much', 'many'], correctAnswer: 'some', points: 10 },
      { id: 'indef-2', sectionId: 'pronouns', type: 'multiple-choice', question: 'Do you have ___ questions?', translation: 'Do you have any questions?', options: ['some', 'any', 'much', 'many'], correctAnswer: 'any', points: 10 },
      { id: 'indef-3', sectionId: 'pronouns', type: 'multiple-choice', question: 'There is ___ water.', translation: 'There is some water.', options: ['some', 'any', 'much', 'many'], correctAnswer: 'some', points: 10 },
      { id: 'indef-4', sectionId: 'pronouns', type: 'multiple-choice', question: 'Are there ___ cookies?', translation: 'Are there any cookies?', options: ['some', 'any', 'much', 'many'], correctAnswer: 'any', points: 10 },
      { id: 'indef-5', sectionId: 'pronouns', type: 'multiple-choice', question: 'I need ___ help.', translation: 'I need some help.', options: ['some', 'any', 'much', 'many'], correctAnswer: 'some', points: 10 },
      { id: 'indef-6', sectionId: 'pronouns', type: 'multiple-choice', question: 'She did not buy ___ fruit.', translation: 'She did not buy any fruit.', options: ['some', 'any', 'much', 'many'], correctAnswer: 'any', points: 10 },
      { id: 'indef-7', sectionId: 'pronouns', type: 'multiple-choice', question: 'We need ___ time.', translation: 'We need some time.', options: ['some', 'any', 'much', 'many'], correctAnswer: 'some', points: 10 },
      { id: 'indef-8', sectionId: 'pronouns', type: 'multiple-choice', question: 'Is there ___ milk?', translation: 'Is there any milk?', options: ['some', 'any', 'much', 'many'], correctAnswer: 'any', points: 10 },
      { id: 'indef-9', sectionId: 'pronouns', type: 'multiple-choice', question: 'He has ___ friends.', translation: 'He has some friends.', options: ['some', 'any', 'much', 'many'], correctAnswer: 'some', points: 10 },
      { id: 'indef-10', sectionId: 'pronouns', type: 'multiple-choice', question: 'I do not know ___ people.', translation: 'I do not know any people.', options: ['some', 'any', 'much', 'many'], correctAnswer: 'any', points: 10 }
    ]
  },
  {
    id: 'pronouns-indefinite-much-many-1',
    title: 'Indefinite: MUCH/MANY',
    description: 'Much and many',
    icon: '🔢',
    exercises: [
      { id: 'muchmany-1', sectionId: 'pronouns', type: 'multiple-choice', question: 'How ___ money do you have?', translation: 'How much money do you have?', options: ['much', 'many', 'some', 'any'], correctAnswer: 'much', points: 10 },
      { id: 'muchmany-2', sectionId: 'pronouns', type: 'multiple-choice', question: 'How ___ friends do you have?', translation: 'How many friends do you have?', options: ['much', 'many', 'some', 'any'], correctAnswer: 'many', points: 10 },
      { id: 'muchmany-3', sectionId: 'pronouns', type: 'multiple-choice', question: 'I do not have ___ time.', translation: 'I do not have much time.', options: ['much', 'many', 'some', 'any'], correctAnswer: 'much', points: 10 },
      { id: 'muchmany-4', sectionId: 'pronouns', type: 'multiple-choice', question: 'There are ___ cars.', translation: 'There are many cars.', options: ['much', 'many', 'some', 'any'], correctAnswer: 'many', points: 10 },
      { id: 'muchmany-5', sectionId: 'pronouns', type: 'multiple-choice', question: 'She does not eat ___ bread.', translation: 'She does not eat much bread.', options: ['much', 'many', 'some', 'any'], correctAnswer: 'much', points: 10 },
      { id: 'muchmany-6', sectionId: 'pronouns', type: 'multiple-choice', question: 'We need ___ information.', translation: 'We need much information.', options: ['much', 'many', 'some', 'any'], correctAnswer: 'much', points: 10 },
      { id: 'muchmany-7', sectionId: 'pronouns', type: 'multiple-choice', question: 'He has ___ problems.', translation: 'He has many problems.', options: ['much', 'many', 'some', 'any'], correctAnswer: 'many', points: 10 },
      { id: 'muchmany-8', sectionId: 'pronouns', type: 'multiple-choice', question: 'I do not drink ___ coffee.', translation: 'I do not drink much coffee.', options: ['much', 'many', 'some', 'any'], correctAnswer: 'much', points: 10 },
      { id: 'muchmany-9', sectionId: 'pronouns', type: 'multiple-choice', question: 'There are ___ options.', translation: 'There are many options.', options: ['much', 'many', 'some', 'any'], correctAnswer: 'many', points: 10 },
      { id: 'muchmany-10', sectionId: 'pronouns', type: 'multiple-choice', question: 'I have ___ work to do.', translation: 'I have much work to do.', options: ['much', 'many', 'some', 'any'], correctAnswer: 'much', points: 10 }
    ]
  },
  {
    id: 'pronouns-indefinite-little-few-1',
    title: 'Indefinite: LITTLE/FEW',
    description: 'Little and few',
    icon: '🔢',
    exercises: [
      { id: 'littlefew-1', sectionId: 'pronouns', type: 'multiple-choice', question: 'I have ___ money.', translation: 'I have a little money.', options: ['little', 'few', 'a little', 'a few'], correctAnswer: 'a little', points: 10 },
      { id: 'littlefew-2', sectionId: 'pronouns', type: 'multiple-choice', question: 'I have ___ friends.', translation: 'I have a few friends.', options: ['little', 'few', 'a little', 'a few'], correctAnswer: 'a few', points: 10 },
      { id: 'littlefew-3', sectionId: 'pronouns', type: 'multiple-choice', question: 'There is ___ hope.', translation: 'There is little hope.', options: ['little', 'few', 'a little', 'a few'], correctAnswer: 'little', points: 10 },
      { id: 'littlefew-4', sectionId: 'pronouns', type: 'multiple-choice', question: '___ people came.', translation: 'Few people came.', options: ['Little', 'Few', 'A little', 'A few'], correctAnswer: 'Few', points: 10 },
      { id: 'littlefew-5', sectionId: 'pronouns', type: 'multiple-choice', question: 'She knows ___ English.', translation: 'She knows a little English.', options: ['little', 'few', 'a little', 'a few'], correctAnswer: 'a little', points: 10 },
      { id: 'littlefew-6', sectionId: 'pronouns', type: 'multiple-choice', question: 'We have ___ minutes.', translation: 'We have a few minutes.', options: ['little', 'few', 'a little', 'a few'], correctAnswer: 'a few', points: 10 },
      { id: 'littlefew-7', sectionId: 'pronouns', type: 'multiple-choice', question: 'There is ___ traffic.', translation: 'There is little traffic.', options: ['little', 'few', 'a little', 'a few'], correctAnswer: 'little', points: 10 },
      { id: 'littlefew-8', sectionId: 'pronouns', type: 'multiple-choice', question: '___ students passed.', translation: 'Few students passed.', options: ['Little', 'Few', 'A little', 'A few'], correctAnswer: 'Few', points: 10 },
      { id: 'littlefew-9', sectionId: 'pronouns', type: 'multiple-choice', question: 'I have ___ patience.', translation: 'I have a little patience.', options: ['little', 'few', 'a little', 'a few'], correctAnswer: 'a little', points: 10 },
      { id: 'littlefew-10', sectionId: 'pronouns', type: 'multiple-choice', question: '___ words were spoken.', translation: 'Few words were spoken.', options: ['Little', 'Few', 'A little', 'A few'], correctAnswer: 'Few', points: 10 }
    ]
  },
  {
    id: 'pronouns-indefinite-one-1',
    title: 'Indefinite: ONE',
    description: 'One and ones',
    icon: '1️⃣',
    exercises: [
      { id: 'oneones-1', sectionId: 'pronouns', type: 'multiple-choice', question: 'I want the red ___.', translation: 'I want the red one.', options: ['one', 'ones', 'once', 'once'], correctAnswer: 'one', points: 10 },
      { id: 'oneones-2', sectionId: 'pronouns', type: 'multiple-choice', question: 'Which ___ do you prefer?', translation: 'Which ones do you prefer?', options: ['one', 'ones', 'once', 'thing'], correctAnswer: 'ones', points: 10 },
      { id: 'oneones-3', sectionId: 'pronouns', type: 'multiple-choice', question: 'This ___ is better.', translation: 'This one is better.', options: ['one', 'ones', 'thing', 'that'], correctAnswer: 'one', points: 10 },
      { id: 'oneones-4', sectionId: 'pronouns', type: 'multiple-choice', question: 'I will take these ___.', translation: 'I will take these ones.', options: ['one', 'ones', 'thing', 'that'], correctAnswer: 'ones', points: 10 },
      { id: 'oneones-5', sectionId: 'pronouns', type: 'multiple-choice', question: 'That ___ is hers.', translation: 'That one is hers.', options: ['one', 'ones', 'thing', 'it'], correctAnswer: 'one', points: 10 },
      { id: 'oneones-6', sectionId: 'pronouns', type: 'multiple-choice', question: 'The new ___ are better.', translation: 'The new ones are better.', options: ['one', 'ones', 'new', 'old'], correctAnswer: 'ones', points: 10 },
      { id: 'oneones-7', sectionId: 'pronouns', type: 'multiple-choice', question: 'Give me a big ___.', translation: 'Give me a big one.', options: ['one', 'ones', 'thing', 'any'], correctAnswer: 'one', points: 10 },
      { id: 'oneones-8', sectionId: 'pronouns', type: 'multiple-choice', question: 'Which ___ are yours?', translation: 'Which ones are yours?', options: ['one', 'ones', 'thing', 'these'], correctAnswer: 'ones', points: 10 },
      { id: 'oneones-9', sectionId: 'pronouns', type: 'multiple-choice', question: 'I prefer the blue ___.', translation: 'I prefer the blue one.', options: ['one', 'ones', 'it', 'that'], correctAnswer: 'one', points: 10 },
      { id: 'oneones-10', sectionId: 'pronouns', type: 'multiple-choice', question: 'The expensive ___ broke.', translation: 'The expensive ones broke.', options: ['one', 'ones', 'it', 'they'], correctAnswer: 'ones', points: 10 }
    ]
  },
  {
    id: 'pronouns-relative-who-1',
    title: 'Relative Pronouns: WHO',
    description: 'Who',
    icon: '❓',
    exercises: [
      { id: 'relwho-1', sectionId: 'pronouns', type: 'multiple-choice', question: 'The girl ___ is singing is my sister.', translation: 'The girl who is singing is my sister.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'who', points: 10 },
      { id: 'relwho-2', sectionId: 'pronouns', type: 'multiple-choice', question: 'The boy ___ helped me is tall.', translation: 'The boy who helped me is tall.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'who', points: 10 },
      { id: 'relwho-3', sectionId: 'pronouns', type: 'multiple-choice', question: 'People ___ study will pass.', translation: 'People who study will pass.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'who', points: 10 },
      { id: 'relwho-4', sectionId: 'pronouns', type: 'multiple-choice', question: 'The teacher ___ teaches English is kind.', translation: 'The teacher who teaches English is kind.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'who', points: 10 },
      { id: 'relwho-5', sectionId: 'pronouns', type: 'multiple-choice', question: 'Anyone ___ calls will be answered.', translation: 'Anyone who calls will be answered.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'who', points: 10 },
      { id: 'relwho-6', sectionId: 'pronouns', type: 'multiple-choice', question: 'The doctor ___ saved lives is famous.', translation: 'The doctor who saved lives is famous.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'who', points: 10 },
      { id: 'relwho-7', sectionId: 'pronouns', type: 'multiple-choice', question: 'I talked to the person ___ arrived first.', translation: 'I talked to the person who arrived first.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'who', points: 10 },
      { id: 'relwho-8', sectionId: 'pronouns', type: 'multiple-choice', question: 'The students ___ work hard get good grades.', translation: 'The students who work hard get good grades.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'who', points: 10 },
      { id: 'relwho-9', sectionId: 'pronouns', type: 'multiple-choice', question: 'The woman ___ lives next door is kind.', translation: 'The woman who lives next door is kind.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'who', points: 10 },
      { id: 'relwho-10', sectionId: 'pronouns', type: 'multiple-choice', question: 'Anyone ___ wants to join is welcome.', translation: 'Anyone who wants to join is welcome.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'who', points: 10 }
    ]
  },
  {
    id: 'pronouns-relative-which-1',
    title: 'Relative Pronouns: WHICH',
    description: 'Which',
    icon: '❓',
    exercises: [
      { id: 'relwhich-1', sectionId: 'pronouns', type: 'multiple-choice', question: 'The book ___ I read is interesting.', translation: 'The book which I read is interesting.', options: ['which', 'who', 'whom', 'whose'], correctAnswer: 'which', points: 10 },
      { id: 'relwhich-2', sectionId: 'pronouns', type: 'multiple-choice', question: 'The movie ___ we watched was good.', translation: 'The movie which we watched was good.', options: ['which', 'who', 'whom', 'that'], correctAnswer: 'which', points: 10 },
      { id: 'relwhich-3', sectionId: 'pronouns', type: 'multiple-choice', question: 'This is the reason ___ I came.', translation: 'This is the reason which I came.', options: ['which', 'who', 'whom', 'why'], correctAnswer: 'which', points: 10 },
      { id: 'relwhich-4', sectionId: 'pronouns', type: 'multiple-choice', question: 'The car ___ he bought is new.', translation: 'The car which he bought is new.', options: ['which', 'who', 'whom', 'that'], correctAnswer: 'which', points: 10 },
      { id: 'relwhich-5', sectionId: 'pronouns', type: 'multiple-choice', question: 'The chair ___ is broken needs repair.', translation: 'The chair which is broken needs repair.', options: ['which', 'who', 'whom', 'that'], correctAnswer: 'which', points: 10 },
      { id: 'relwhich-6', sectionId: 'pronouns', type: 'multiple-choice', question: 'I have something ___ you need.', translation: 'I have something which you need.', options: ['which', 'who', 'whom', 'that'], correctAnswer: 'which', points: 10 },
      { id: 'relwhich-7', sectionId: 'pronouns', type: 'multiple-choice', question: 'The problem ___ we have is serious.', translation: 'The problem which we have is serious.', options: ['which', 'who', 'whom', 'that'], correctAnswer: 'which', points: 10 },
      { id: 'relwhich-8', sectionId: 'pronouns', type: 'multiple-choice', question: 'The food ___ she cooked was delicious.', translation: 'The food which she cooked was delicious.', options: ['which', 'who', 'whom', 'that'], correctAnswer: 'which', points: 10 },
      { id: 'relwhich-9', sectionId: 'pronouns', type: 'multiple-choice', question: 'This is the house ___ was built in 1950.', translation: 'This is the house which was built in 1950.', options: ['which', 'who', 'whom', 'that'], correctAnswer: 'which', points: 10 },
      { id: 'relwhich-10', sectionId: 'pronouns', type: 'multiple-choice', question: 'The song ___ they played was popular.', translation: 'The song which they played was popular.', options: ['which', 'who', 'whom', 'that'], correctAnswer: 'which', points: 10 }
    ]
  },
  {
    id: 'pronouns-relative-whom-1',
    title: 'Relative Pronouns: WHOM',
    description: 'Whom',
    icon: '❓',
    exercises: [
      { id: 'relwhom-1', sectionId: 'pronouns', type: 'multiple-choice', question: 'The man ___ I spoke to is a professor.', translation: 'The man whom I spoke to is a professor.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'whom', points: 10 },
      { id: 'relwhom-2', sectionId: 'pronouns', type: 'multiple-choice', question: 'The woman ___ we met is a doctor.', translation: 'The woman whom we met is a doctor.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'whom', points: 10 },
      { id: 'relwhom-3', sectionId: 'pronouns', type: 'multiple-choice', question: 'The student ___ the teacher praised is smart.', translation: 'The student whom the teacher praised is smart.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'whom', points: 10 },
      { id: 'relwhom-4', sectionId: 'pronouns', type: 'multiple-choice', question: 'The guest ___ we invited arrived late.', translation: 'The guest whom we invited arrived late.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'whom', points: 10 },
      { id: 'relwhom-5', sectionId: 'pronouns', type: 'multiple-choice', question: 'The person ___ you called is not home.', translation: 'The person whom you called is not home.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'whom', points: 10 },
      { id: 'relwhom-6', sectionId: 'pronouns', type: 'multiple-choice', question: 'The employee ___ we hired is efficient.', translation: 'The employee whom we hired is efficient.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'whom', points: 10 },
      { id: 'relwhom-7', sectionId: 'pronouns', type: 'multiple-choice', question: 'The manager ___ the team respects is fair.', translation: 'The manager whom the team respects is fair.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'whom', points: 10 },
      { id: 'relwhom-8', sectionId: 'pronouns', type: 'multiple-choice', question: 'The author ___ I read about is famous.', translation: 'The author whom I read about is famous.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'whom', points: 10 },
      { id: 'relwhom-9', sectionId: 'pronouns', type: 'multiple-choice', question: 'The neighbor ___ we borrowed tools from is kind.', translation: 'The neighbor whom we borrowed tools from is kind.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'whom', points: 10 },
      { id: 'relwhom-10', sectionId: 'pronouns', type: 'multiple-choice', question: 'The guide ___ we followed was experienced.', translation: 'The guide whom we followed was experienced.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'whom', points: 10 }
    ]
  },
  {
    id: 'pronouns-relative-whose-1',
    title: 'Relative Pronouns: WHOSE',
    description: 'Whose',
    icon: '❓',
    exercises: [
      { id: 'relwhose-1', sectionId: 'pronouns', type: 'multiple-choice', question: 'The girl ___ mother is a teacher is my friend.', translation: 'The girl whose mother is a teacher is my friend.', options: ['whose', 'who', 'whom', 'which'], correctAnswer: 'whose', points: 10 },
      { id: 'relwhose-2', sectionId: 'pronouns', type: 'multiple-choice', question: 'The man ___ car broke down is my uncle.', translation: 'The man whose car broke down is my uncle.', options: ['whose', 'who', 'whom', 'which'], correctAnswer: 'whose', points: 10 },
      { id: 'relwhose-3', sectionId: 'pronouns', type: 'multiple-choice', question: 'The student ___ book was lost is sad.', translation: 'The student whose book was lost is sad.', options: ['whose', 'who', 'whom', 'which'], correctAnswer: 'whose', points: 10 },
      { id: 'relwhose-4', sectionId: 'pronouns', type: 'multiple-choice', question: 'The woman ___ house is big is rich.', translation: 'The woman whose house is big is rich.', options: ['whose', 'who', 'whom', 'which'], correctAnswer: 'whose', points: 10 },
      { id: 'relwhose-5', sectionId: 'pronouns', type: 'multiple-choice', question: 'The boy ___ father is a doctor works hard.', translation: 'The boy whose father is a doctor works hard.', options: ['whose', 'who', 'whom', 'which'], correctAnswer: 'whose', points: 10 },
      { id: 'relwhose-6', sectionId: 'pronouns', type: 'multiple-choice', question: 'The team ___ captain is famous won.', translation: 'The team whose captain is famous won.', options: ['whose', 'who', 'whom', 'which'], correctAnswer: 'whose', points: 10 },
      { id: 'relwhose-7', sectionId: 'pronouns', type: 'multiple-choice', question: 'The cat ___ tail is black is cute.', translation: 'The cat whose tail is black is cute.', options: ['whose', 'who', 'whom', 'which'], correctAnswer: 'whose', points: 10 },
      { id: 'relwhose-8', sectionId: 'pronouns', type: 'multiple-choice', question: 'The artist ___ paintings are beautiful is famous.', translation: 'The artist whose paintings are beautiful is famous.', options: ['whose', 'who', 'whom', 'which'], correctAnswer: 'whose', points: 10 },
      { id: 'relwhose-9', sectionId: 'pronouns', type: 'multiple-choice', question: 'The company ___ workers are happy is successful.', translation: 'The company whose workers are happy is successful.', options: ['whose', 'who', 'whom', 'which'], correctAnswer: 'whose', points: 10 },
      { id: 'relwhose-10', sectionId: 'pronouns', type: 'multiple-choice', question: 'The child ___ toys are new is happy.', translation: 'The child whose toys are new is happy.', options: ['whose', 'who', 'whom', 'which'], correctAnswer: 'whose', points: 10 }
    ]
  },
  {
    id: 'pronouns-interrogative-1',
    title: 'Interrogative Pronouns',
    description: 'Who, what, which, whose, whom',
    icon: '❓',
    exercises: [
      { id: 'intpron-1', sectionId: 'pronouns', type: 'multiple-choice', question: '___ is your name?', translation: 'What is your name?', options: ['Who', 'What', 'Which', 'Whose'], correctAnswer: 'What', points: 10 },
      { id: 'intpron-2', sectionId: 'pronouns', type: 'multiple-choice', question: '___ is that woman?', translation: 'Who is that woman?', options: ['Who', 'What', 'Which', 'Whose'], correctAnswer: 'Who', points: 10 },
      { id: 'intpron-3', sectionId: 'pronouns', type: 'multiple-choice', question: '___ color do you prefer?', translation: 'Which color do you prefer?', options: ['Who', 'What', 'Which', 'Whose'], correctAnswer: 'Which', points: 10 },
      { id: 'intpron-4', sectionId: 'pronouns', type: 'multiple-choice', question: '___ book is this?', translation: 'Whose book is this?', options: ['Who', 'What', 'Which', 'Whose'], correctAnswer: 'Whose', points: 10 },
      { id: 'intpron-5', sectionId: 'pronouns', type: 'multiple-choice', question: '___ did you see?', translation: 'Whom did you see?', options: ['Who', 'What', 'Which', 'Whom'], correctAnswer: 'Whom', points: 10 },
      { id: 'intpron-6', sectionId: 'pronouns', type: 'multiple-choice', question: '___ is this?', translation: 'What is this?', options: ['Who', 'What', 'Which', 'Whose'], correctAnswer: 'What', points: 10 },
      { id: 'intpron-7', sectionId: 'pronouns', type: 'multiple-choice', question: '___ are you waiting for?', translation: 'Who are you waiting for?', options: ['Who', 'What', 'Which', 'Whose'], correctAnswer: 'Who', points: 10 },
      { id: 'intpron-8', sectionId: 'pronouns', type: 'multiple-choice', question: '___ one do you want?', translation: 'Which one do you want?', options: ['Who', 'What', 'Which', 'Whose'], correctAnswer: 'Which', points: 10 },
      { id: 'intpron-9', sectionId: 'pronouns', type: 'multiple-choice', question: '___ happened?', translation: 'What happened?', options: ['Who', 'What', 'Which', 'Whose'], correctAnswer: 'What', points: 10 },
      { id: 'intpron-10', sectionId: 'pronouns', type: 'multiple-choice', question: '___ is this car?', translation: 'Whose is this car?', options: ['Who', 'What', 'Which', 'Whose'], correctAnswer: 'Whose', points: 10 }
    ]
  },
  {
    id: 'pronouns-each-every-1',
    title: 'EACH/EVERY',
    description: 'Each and every',
    icon: '🔢',
    exercises: [
      { id: 'eachev-1', sectionId: 'pronouns', type: 'multiple-choice', question: '___ student must bring a book.', translation: 'Every student must bring a book.', options: ['Each', 'Every', 'All', 'Both'], correctAnswer: 'Every', points: 10 },
      { id: 'eachev-2', sectionId: 'pronouns', type: 'multiple-choice', question: '___ of them has a different idea.', translation: 'Each of them has a different idea.', options: ['Each', 'Every', 'All', 'Both'], correctAnswer: 'Each', points: 10 },
      { id: 'eachev-3', sectionId: 'pronouns', type: 'multiple-choice', question: '___ day is a new opportunity.', translation: 'Every day is a new opportunity.', options: ['Each', 'Every', 'All', 'Both'], correctAnswer: 'Every', points: 10 },
      { id: 'eachev-4', sectionId: 'pronouns', type: 'multiple-choice', question: '___ person has strengths.', translation: 'Each person has strengths.', options: ['Each', 'Every', 'All', 'Both'], correctAnswer: 'Each', points: 10 },
      { id: 'eachev-5', sectionId: 'pronouns', type: 'multiple-choice', question: '___ house in this street is old.', translation: 'Every house in this street is old.', options: ['Each', 'Every', 'All', 'Both'], correctAnswer: 'Every', points: 10 },
      { id: 'eachev-6', sectionId: 'pronouns', type: 'multiple-choice', question: '___ one of us was invited.', translation: 'Each one of us was invited.', options: ['Each', 'Every', 'All', 'Both'], correctAnswer: 'Each', points: 10 },
      { id: 'eachev-7', sectionId: 'pronouns', type: 'multiple-choice', question: '___ student passed the exam.', translation: 'Every student passed the exam.', options: ['Each', 'Every', 'All', 'Both'], correctAnswer: 'Every', points: 10 },
      { id: 'eachev-8', sectionId: 'pronouns', type: 'multiple-choice', question: '___ apple in the basket is red.', translation: 'Every apple in the basket is red.', options: ['Each', 'Every', 'All', 'Both'], correctAnswer: 'Every', points: 10 },
      { id: 'eachev-9', sectionId: 'pronouns', type: 'multiple-choice', question: '___ team played well.', translation: 'Each team played well.', options: ['Each', 'Every', 'All', 'Both'], correctAnswer: 'Each', points: 10 },
      { id: 'eachev-10', sectionId: 'pronouns', type: 'multiple-choice', question: '___ problem has a solution.', translation: 'Every problem has a solution.', options: ['Each', 'Every', 'All', 'Both'], correctAnswer: 'Every', points: 10 }
    ]
  },
  {
    id: 'pronouns-both-either-neither-1',
    title: 'BOTH/EITHER/NEITHER',
    description: 'Both, either, neither',
    icon: '🔢',
    exercises: [
      { id: 'both-1', sectionId: 'pronouns', type: 'multiple-choice', question: '___ of them are good friends.', translation: 'Both of them are good friends.', options: ['Both', 'Either', 'Neither', 'All'], correctAnswer: 'Both', points: 10 },
      { id: 'both-2', sectionId: 'pronouns', type: 'multiple-choice', question: 'You can choose ___ red or blue.', translation: 'You can choose either red or blue.', options: ['Both', 'Either', 'Neither', 'All'], correctAnswer: 'Either', points: 10 },
      { id: 'both-3', sectionId: 'pronouns', type: 'multiple-choice', question: '___ of the options is correct.', translation: 'Neither of the options is correct.', options: ['Both', 'Either', 'Neither', 'All'], correctAnswer: 'Neither', points: 10 },
      { id: 'both-4', sectionId: 'pronouns', type: 'multiple-choice', question: '___ my parents are doctors.', translation: 'Both my parents are doctors.', options: ['Both', 'Either', 'Neither', 'All'], correctAnswer: 'Both', points: 10 },
      { id: 'both-5', sectionId: 'pronouns', type: 'multiple-choice', question: 'I do not like ___ movie.', translation: 'I do not like either movie.', options: ['Both', 'Either', 'Neither', 'All'], correctAnswer: 'Either', points: 10 },
      { id: 'both-6', sectionId: 'pronouns', type: 'multiple-choice', question: '___ answer is acceptable.', translation: 'Either answer is acceptable.', options: ['Both', 'Either', 'Neither', 'All'], correctAnswer: 'Either', points: 10 },
      { id: 'both-7', sectionId: 'pronouns', type: 'multiple-choice', question: '___ of us wanted to go.', translation: 'Neither of us wanted to go.', options: ['Both', 'Either', 'Neither', 'All'], correctAnswer: 'Neither', points: 10 },
      { id: 'both-8', sectionId: 'pronouns', type: 'multiple-choice', question: '___ doors are locked.', translation: 'Both doors are locked.', options: ['Both', 'Either', 'Neither', 'All'], correctAnswer: 'Both', points: 10 },
      { id: 'both-9', sectionId: 'pronouns', type: 'multiple-choice', question: '___ brother is tall.', translation: 'Either brother is tall.', options: ['Both', 'Either', 'Neither', 'All'], correctAnswer: 'Either', points: 10 },
      { id: 'both-10', sectionId: 'pronouns', type: 'multiple-choice', question: '___ proposal was accepted.', translation: 'Neither proposal was accepted.', options: ['Both', 'Either', 'Neither', 'All'], correctAnswer: 'Neither', points: 10 }
    ]
  },
  {
    id: 'pronouns-another-other-1',
    title: 'ANOTHER/OTHER',
    description: 'Another, others, the other',
    icon: '🔢',
    exercises: [
      { id: 'anoth-1', sectionId: 'pronouns', type: 'multiple-choice', question: 'Can I have ___ cup of coffee?', translation: 'Can I have another cup of coffee?', options: ['another', 'other', 'others', 'the other'], correctAnswer: 'another', points: 10 },
      { id: 'anoth-2', sectionId: 'pronouns', type: 'multiple-choice', question: 'Some students came, ___ left.', translation: 'Some students came, others left.', options: ['another', 'other', 'others', 'the other'], correctAnswer: 'others', points: 10 },
      { id: 'anoth-3', sectionId: 'pronouns', type: 'multiple-choice', question: 'I have two books: one is red, ___ is blue.', translation: 'I have two books: one is red, the other is blue.', options: ['another', 'other', 'others', 'the other'], correctAnswer: 'the other', points: 10 },
      { id: 'anoth-4', sectionId: 'pronouns', type: 'multiple-choice', question: 'Would you like ___ piece of cake?', translation: 'Would you like another piece of cake?', options: ['another', 'other', 'others', 'the other'], correctAnswer: 'another', points: 10 },
      { id: 'anoth-5', sectionId: 'pronouns', type: 'multiple-choice', question: 'Some people think one way, ___ think differently.', translation: 'Some people think one way, others think differently.', options: ['another', 'other', 'others', 'the other'], correctAnswer: 'others', points: 10 },
      { id: 'anoth-6', sectionId: 'pronouns', type: 'multiple-choice', question: 'I need ___ example.', translation: 'I need another example.', options: ['another', 'other', 'others', 'the other'], correctAnswer: 'another', points: 10 },
      { id: 'anoth-7', sectionId: 'pronouns', type: 'multiple-choice', question: 'There are ___ reasons to stay.', translation: 'There are other reasons to stay.', options: ['another', 'other', 'others', 'the other'], correctAnswer: 'other', points: 10 },
      { id: 'anoth-8', sectionId: 'pronouns', type: 'multiple-choice', question: '___ students arrived late.', translation: 'Other students arrived late.', options: ['another', 'other', 'others', 'the other'], correctAnswer: 'Other', points: 10 },
      { id: 'anoth-9', sectionId: 'pronouns', type: 'multiple-choice', question: 'She has ___ two cats.', translation: 'She has two other cats.', options: ['another', 'other', 'others', 'the other'], correctAnswer: 'other', points: 10 },
      { id: 'anoth-10', sectionId: 'pronouns', type: 'multiple-choice', question: 'I talked to the teacher and ___ students.', translation: 'I talked to the teacher and other students.', options: ['another', 'other', 'others', 'the other'], correctAnswer: 'other', points: 10 }
    ]
  },
  {
    id: 'pronouns-all-any-no-1',
    title: 'ALL/ANY/NO',
    description: 'All, any, no, none',
    icon: '🔢',
    exercises: [
      { id: 'allany-1', sectionId: 'pronouns', type: 'multiple-choice', question: '___ students are present.', translation: 'All students are present.', options: ['All', 'Any', 'No', 'None'], correctAnswer: 'All', points: 10 },
      { id: 'allany-2', sectionId: 'pronouns', type: 'multiple-choice', question: 'Is there ___ water left?', translation: 'Is there any water left?', options: ['All', 'Any', 'No', 'None'], correctAnswer: 'Any', points: 10 },
      { id: 'allany-3', sectionId: 'pronouns', type: 'multiple-choice', question: 'I have ___ money.', translation: 'I have no money.', options: ['All', 'Any', 'No', 'None'], correctAnswer: 'No', points: 10 },
      { id: 'allany-4', sectionId: 'pronouns', type: 'multiple-choice', question: '___ of them came to the party.', translation: 'None of them came to the party.', options: ['All', 'Any', 'No', 'None'], correctAnswer: 'None', points: 10 },
      { id: 'allany-5', sectionId: 'pronouns', type: 'multiple-choice', question: '___ the food was delicious.', translation: 'All the food was delicious.', options: ['All', 'Any', 'No', 'None'], correctAnswer: 'All', points: 10 },
      { id: 'allany-6', sectionId: 'pronouns', type: 'multiple-choice', question: 'Do you have ___ questions?', translation: 'Do you have any questions?', options: ['All', 'Any', 'No', 'None'], correctAnswer: 'Any', points: 10 },
      { id: 'allany-7', sectionId: 'pronouns', type: 'multiple-choice', question: 'There is ___ time left.', translation: 'There is no time left.', options: ['All', 'Any', 'No', 'None'], correctAnswer: 'No', points: 10 },
      { id: 'allany-8', sectionId: 'pronouns', type: 'multiple-choice', question: '___ of the answers are correct.', translation: 'None of the answers are correct.', options: ['All', 'Any', 'No', 'None'], correctAnswer: 'None', points: 10 },
      { id: 'allany-9', sectionId: 'pronouns', type: 'multiple-choice', question: '___ people were happy.', translation: 'All people were happy.', options: ['All', 'Any', 'No', 'None'], correctAnswer: 'All', points: 10 },
      { id: 'allany-10', sectionId: 'pronouns', type: 'multiple-choice', question: 'Is there ___ milk in the fridge?', translation: 'Is there any milk in the fridge?', options: ['All', 'Any', 'No', 'None'], correctAnswer: 'Any', points: 10 }
    ]
  },
  {
    id: 'pronouns-something-anything-1',
    title: 'Something/Anything/Nothing',
    description: 'Something, anything, nothing, something',
    icon: '🔢',
    exercises: [
      { id: 'somenoth-1', sectionId: 'pronouns', type: 'multiple-choice', question: 'I want ___ to eat.', translation: 'I want something to eat.', options: ['something', 'anything', 'nothing', 'everything'], correctAnswer: 'something', points: 10 },
      { id: 'somenoth-2', sectionId: 'pronouns', type: 'multiple-choice', question: 'Is there ___ I can do?', translation: 'Is there anything I can do?', options: ['something', 'anything', 'nothing', 'everything'], correctAnswer: 'anything', points: 10 },
      { id: 'somenoth-3', sectionId: 'pronouns', type: 'multiple-choice', question: 'There is ___ in the box.', translation: 'There is nothing in the box.', options: ['something', 'anything', 'nothing', 'everything'], correctAnswer: 'nothing', points: 10 },
      { id: 'somenoth-4', sectionId: 'pronouns', type: 'multiple-choice', question: '___ is possible.', translation: 'Everything is possible.', options: ['Something', 'Anything', 'Nothing', 'Everything'], correctAnswer: 'Everything', points: 10 },
      { id: 'somenoth-5', sectionId: 'pronouns', type: 'multiple-choice', question: 'She told me ___ important.', translation: 'She told me something important.', options: ['something', 'anything', 'nothing', 'everything'], correctAnswer: 'something', points: 10 },
      { id: 'somenoth-6', sectionId: 'pronouns', type: 'multiple-choice', question: 'Do not tell ___ to anyone.', translation: 'Do not tell anything to anyone.', options: ['something', 'anything', 'nothing', 'everything'], correctAnswer: 'anything', points: 10 },
      { id: 'somenoth-7', sectionId: 'pronouns', type: 'multiple-choice', question: 'I have ___ to say.', translation: 'I have nothing to say.', options: ['something', 'anything', 'nothing', 'everything'], correctAnswer: 'nothing', points: 10 },
      { id: 'somenoth-8', sectionId: 'pronouns', type: 'multiple-choice', question: '___ is ready for the meeting.', translation: 'Everything is ready for the meeting.', options: ['Something', 'Anything', 'Nothing', 'Everything'], correctAnswer: 'Everything', points: 10 },
      { id: 'somenoth-9', sectionId: 'pronouns', type: 'multiple-choice', question: 'Did you buy ___ for me?', translation: 'Did you buy anything for me?', options: ['something', 'anything', 'nothing', 'everything'], correctAnswer: 'anything', points: 10 },
      { id: 'somenoth-10', sectionId: 'pronouns', type: 'multiple-choice', question: 'There is ___ new here.', translation: 'There is nothing new here.', options: ['something', 'anything', 'nothing', 'everything'], correctAnswer: 'nothing', points: 10 }
    ]
  },
  {
    id: 'pronouns-someone-anyone-1',
    title: 'Someone/Anyone/Nobody',
    description: 'Someone, anyone, nobody, everyone',
    icon: '🔢',
    exercises: [
      { id: 'someany-1', sectionId: 'pronouns', type: 'multiple-choice', question: '___ called you yesterday.', translation: 'Someone called you yesterday.', options: ['Someone', 'Anyone', 'Nobody', 'Everyone'], correctAnswer: 'Someone', points: 10 },
      { id: 'someany-2', sectionId: 'pronouns', type: 'multiple-choice', question: 'Is ___ at home?', translation: 'Is anyone at home?', options: ['Someone', 'Anyone', 'Nobody', 'Everyone'], correctAnswer: 'Anyone', points: 10 },
      { id: 'someany-3', sectionId: 'pronouns', type: 'multiple-choice', question: '___ is in the garden.', translation: 'Nobody is in the garden.', options: ['Someone', 'Anyone', 'Nobody', 'Everyone'], correctAnswer: 'Nobody', points: 10 },
      { id: 'someany-4', sectionId: 'pronouns', type: 'multiple-choice', question: '___ knows the answer.', translation: 'Everyone knows the answer.', options: ['Someone', 'Anyone', 'Nobody', 'Everyone'], correctAnswer: 'Everyone', points: 10 },
      { id: 'someany-5', sectionId: 'pronouns', type: 'multiple-choice', question: 'I saw ___ at the store.', translation: 'I saw someone at the store.', options: ['Someone', 'Anyone', 'Nobody', 'Everyone'], correctAnswer: 'Someone', points: 10 },
      { id: 'someany-6', sectionId: 'pronouns', type: 'multiple-choice', question: 'Can ___ help me?', translation: 'Can anyone help me?', options: ['Someone', 'Anyone', 'Nobody', 'Everyone'], correctAnswer: 'Anyone', points: 10 },
      { id: 'someany-7', sectionId: 'pronouns', type: 'multiple-choice', question: '___ is home. The lights are off.', translation: 'Nobody is home. The lights are off.', options: ['Someone', 'Anyone', 'Nobody', 'Everyone'], correctAnswer: 'Nobody', points: 10 },
      { id: 'someany-8', sectionId: 'pronouns', type: 'multiple-choice', question: '___ is invited to the party.', translation: 'Everyone is invited to the party.', options: ['Someone', 'Anyone', 'Nobody', 'Everyone'], correctAnswer: 'Everyone', points: 10 },
      { id: 'someany-9', sectionId: 'pronouns', type: 'multiple-choice', question: 'Did ___ see my keys?', translation: 'Did anyone see my keys?', options: ['Someone', 'Anyone', 'Nobody', 'Everyone'], correctAnswer: 'Anyone', points: 10 },
      { id: 'someany-10', sectionId: 'pronouns', type: 'multiple-choice', question: '___ called while you were out.', translation: 'Someone called while you were out.', options: ['Someone', 'Anyone', 'Nobody', 'Everyone'], correctAnswer: 'Someone', points: 10 }
    ]
  },
  {
    id: 'pronouns-somewhere-anywhere-1',
    title: 'Somewhere/Anywhere/Nowhere',
    description: 'Somewhere, anywhere, nowhere, everywhere',
    icon: '🔢',
    exercises: [
      { id: 'somew-1', sectionId: 'pronouns', type: 'multiple-choice', question: 'I left my keys ___ .', translation: 'I left my keys somewhere.', options: ['somewhere', 'anywhere', 'nowhere', 'everywhere'], correctAnswer: 'somewhere', points: 10 },
      { id: 'somew-2', sectionId: 'pronouns', type: 'multiple-choice', question: 'Did you go ___ yesterday?', translation: 'Did you go anywhere yesterday?', options: ['somewhere', 'anywhere', 'nowhere', 'everywhere'], correctAnswer: 'anywhere', points: 10 },
      { id: 'somew-3', sectionId: 'pronouns', type: 'multiple-choice', question: 'The cat is ___ in the house.', translation: 'The cat is nowhere in the house.', options: ['somewhere', 'anywhere', 'nowhere', 'everywhere'], correctAnswer: 'nowhere', points: 10 },
      { id: 'somew-4', sectionId: 'pronouns', type: 'multiple-choice', question: 'You can find this ___ .', translation: 'You can find this everywhere.', options: ['somewhere', 'anywhere', 'nowhere', 'everywhere'], correctAnswer: 'everywhere', points: 10 },
      { id: 'somew-5', sectionId: 'pronouns', type: 'multiple-choice', question: 'Let us go ___ nice.', translation: 'Let us go somewhere nice.', options: ['somewhere', 'anywhere', 'nowhere', 'everywhere'], correctAnswer: 'somewhere', points: 10 },
      { id: 'somew-6', sectionId: 'pronouns', type: 'multiple-choice', question: 'Are you going ___ tonight?', translation: 'Are you going anywhere tonight?', options: ['somewhere', 'anywhere', 'nowhere', 'everywhere'], correctAnswer: 'anywhere', points: 10 },
      { id: 'somew-7', sectionId: 'pronouns', type: 'multiple-choice', question: 'There is ___ to sit here.', translation: 'There is nowhere to sit here.', options: ['somewhere', 'anywhere', 'nowhere', 'everywhere'], correctAnswer: 'nowhere', points: 10 },
      { id: 'somew-8', sectionId: 'pronouns', type: 'multiple-choice', question: 'Birds sing ___ in spring.', translation: 'Birds sing everywhere in spring.', options: ['somewhere', 'anywhere', 'nowhere', 'everywhere'], correctAnswer: 'everywhere', points: 10 },
      { id: 'somew-9', sectionId: 'pronouns', type: 'multiple-choice', question: 'Did you find your book ___?', translation: 'Did you find your book anywhere?', options: ['somewhere', 'anywhere', 'nowhere', 'everywhere'], correctAnswer: 'anywhere', points: 10 },
      { id: 'somew-10', sectionId: 'pronouns', type: 'multiple-choice', question: 'I will meet you ___ .', translation: 'I will meet you somewhere.', options: ['somewhere', 'anywhere', 'nowhere', 'everywhere'], correctAnswer: 'somewhere', points: 10 }
    ]
  },
  {
    id: 'pronouns-somehow-anyhow-1',
    title: 'Somehow/Anyway/However',
    description: 'Somehow, anyway, however',
    icon: '🔢',
    exercises: [
      { id: 'somehow-1', sectionId: 'pronouns', type: 'multiple-choice', question: 'I will finish ___ .', translation: 'I will finish somehow.', options: ['somehow', 'anyway', 'however', 'somewhere'], correctAnswer: 'somehow', points: 10 },
      { id: 'somehow-2', sectionId: 'pronouns', type: 'multiple-choice', question: '___ , I do not agree.', translation: 'However, I do not agree.', options: ['Somehow', 'Anyway', 'However', 'Anywhere'], correctAnswer: 'However', points: 10 },
      { id: 'somehow-3', sectionId: 'pronouns', type: 'multiple-choice', question: 'It does not matter ___.', translation: 'It does not matter anyway.', options: ['somehow', 'anyway', 'however', 'somewhere'], correctAnswer: 'anyway', points: 10 },
      { id: 'somehow-4', sectionId: 'pronouns', type: 'multiple-choice', question: '___ we need to try again.', translation: 'Somehow we need to try again.', options: ['Somehow', 'Anyway', 'However', 'Anywhere'], correctAnswer: 'Somehow', points: 10 },
      { id: 'somehow-5', sectionId: 'pronouns', type: 'multiple-choice', question: '___ I was late.', translation: 'Anyway I was late.', options: ['somehow', 'anyway', 'however', 'somewhere'], correctAnswer: 'anyway', points: 10 },
      { id: 'somehow-6', sectionId: 'pronouns', type: 'multiple-choice', question: '___ she is my friend.', translation: 'However she is my friend.', options: ['somehow', 'anyway', 'however', 'somewhere'], correctAnswer: 'however', points: 10 },
      { id: 'somehow-7', sectionId: 'pronouns', type: 'multiple-choice', question: 'We will survive ___.', translation: 'We will survive somehow.', options: ['somehow', 'anyway', 'however', 'somewhere'], correctAnswer: 'somehow', points: 10 },
      { id: 'somehow-8', sectionId: 'pronouns', type: 'multiple-choice', question: '___ it works now.', translation: 'Anyway it works now.', options: ['somehow', 'anyway', 'however', 'somewhere'], correctAnswer: 'anyway', points: 10 },
      { id: 'somehow-9', sectionId: 'pronouns', type: 'multiple-choice', question: '___ I cannot come.', translation: 'However I cannot come.', options: ['somehow', 'anyway', 'however', 'somewhere'], correctAnswer: 'however', points: 10 },
      { id: 'somehow-10', sectionId: 'pronouns', type: 'multiple-choice', question: 'We will find a way ___.', translation: 'We will find a way somehow.', options: ['somehow', 'anyway', 'however', 'somewhere'], correctAnswer: 'somehow', points: 10 }
    ]
  },
  {
    id: 'pronouns-what-which-1',
    title: 'WHAT vs WHICH',
    description: 'What and which differences',
    icon: '❓',
    exercises: [
      { id: 'whatwhich-1', sectionId: 'pronouns', type: 'multiple-choice', question: '___ is your favorite color?', translation: 'What is your favorite color?', options: ['What', 'Which', 'Who', 'Whose'], correctAnswer: 'What', points: 10 },
      { id: 'whatwhich-2', sectionId: 'pronouns', type: 'multiple-choice', question: '___ color do you prefer, red or blue?', translation: 'Which color do you prefer, red or blue?', options: ['What', 'Which', 'Who', 'Whose'], correctAnswer: 'Which', points: 10 },
      { id: 'whatwhich-3', sectionId: 'pronouns', type: 'multiple-choice', question: '___ is your name?', translation: 'What is your name?', options: ['What', 'Which', 'Who', 'Whose'], correctAnswer: 'What', points: 10 },
      { id: 'whatwhich-4', sectionId: 'pronouns', type: 'multiple-choice', question: '___ book did you buy?', translation: 'Which book did you buy?', options: ['What', 'Which', 'Who', 'Whose'], correctAnswer: 'Which', points: 10 },
      { id: 'whatwhich-5', sectionId: 'pronouns', type: 'multiple-choice', question: '___ happened?', translation: 'What happened?', options: ['What', 'Which', 'Who', 'Whose'], correctAnswer: 'What', points: 10 },
      { id: 'whatwhich-6', sectionId: 'pronouns', type: 'multiple-choice', question: '___ one is yours?', translation: 'Which one is yours?', options: ['What', 'Which', 'Who', 'Whose'], correctAnswer: 'Which', points: 10 },
      { id: 'whatwhich-7', sectionId: 'pronouns', type: 'multiple-choice', question: '___ time is it?', translation: 'What time is it?', options: ['What', 'Which', 'Who', 'Whose'], correctAnswer: 'What', points: 10 },
      { id: 'whatwhich-8', sectionId: 'pronouns', type: 'multiple-choice', question: '___ movie do you want to watch?', translation: 'Which movie do you want to watch?', options: ['What', 'Which', 'Who', 'Whose'], correctAnswer: 'Which', points: 10 },
      { id: 'whatwhich-9', sectionId: 'pronouns', type: 'multiple-choice', question: '___ is the problem?', translation: 'What is the problem?', options: ['What', 'Which', 'Who', 'Whose'], correctAnswer: 'What', points: 10 },
      { id: 'whatwhich-10', sectionId: 'pronouns', type: 'multiple-choice', question: '___ color is your car?', translation: 'What color is your car?', options: ['What', 'Which', 'Who', 'Whose'], correctAnswer: 'What', points: 10 }
    ]
  },
  {
    id: 'pronouns-whatever-whoever-1',
    title: 'WH-EVER Words',
    description: 'Whatever, whoever, wherever, whenever',
    icon: '❓',
    exercises: [
      { id: 'whatever-1', sectionId: 'pronouns', type: 'multiple-choice', question: '___ you need, call me.', translation: 'Whatever you need, call me.', options: ['Whatever', 'Whoever', 'Wherever', 'Whenever'], correctAnswer: 'Whatever', points: 10 },
      { id: 'whatever-2', sectionId: 'pronouns', type: 'multiple-choice', question: '___ calls, do not answer.', translation: 'Whoever calls, do not answer.', options: ['Whatever', 'Whoever', 'Wherever', 'Whenever'], correctAnswer: 'Whoever', points: 10 },
      { id: 'whatever-3', sectionId: 'pronouns', type: 'multiple-choice', question: 'Go ___ you want.', translation: 'Go wherever you want.', options: ['Whatever', 'Whoever', 'Wherever', 'Whenever'], correctAnswer: 'Wherever', points: 10 },
      { id: 'whatever-4', sectionId: 'pronouns', type: 'multiple-choice', question: '___ you are ready, start.', translation: 'Whenever you are ready, start.', options: ['Whatever', 'Whoever', 'Wherever', 'Whenever'], correctAnswer: 'Whenever', points: 10 },
      { id: 'whatever-5', sectionId: 'pronouns', type: 'multiple-choice', question: '___ she says, do not listen.', translation: 'Whatever she says, do not listen.', options: ['Whatever', 'Whoever', 'Wherever', 'Whenever'], correctAnswer: 'Whatever', points: 10 },
      { id: 'whatever-6', sectionId: 'pronouns', type: 'multiple-choice', question: '___ wants to join is welcome.', translation: 'Whoever wants to join is welcome.', options: ['Whatever', 'Whoever', 'Wherever', 'Whenever'], correctAnswer: 'Whoever', points: 10 },
      { id: 'whatever-7', sectionId: 'pronouns', type: 'multiple-choice', question: 'Sit ___ you like.', translation: 'Sit wherever you like.', options: ['Whatever', 'Whoever', 'Wherever', 'Whenever'], correctAnswer: 'Wherever', points: 10 },
      { id: 'whatever-8', sectionId: 'pronouns', type: 'multiple-choice', question: '___ you need help, ask.', translation: 'Whenever you need help, ask.', options: ['Whatever', 'Whoever', 'Wherever', 'Whenever'], correctAnswer: 'Whenever', points: 10 },
      { id: 'whatever-9', sectionId: 'pronouns', type: 'multiple-choice', question: '___ happens, stay calm.', translation: 'Whatever happens, stay calm.', options: ['Whatever', 'Whoever', 'Wherever', 'Whenever'], correctAnswer: 'Whatever', points: 10 },
      { id: 'whatever-10', sectionId: 'pronouns', type: 'multiple-choice', question: '___ you are, I will find you.', translation: 'Wherever you are, I will find you.', options: ['Whatever', 'Whoever', 'Wherever', 'Whenever'], correctAnswer: 'Wherever', points: 10 }
    ]
  },
  {
    id: 'pronouns-whatever-1',
    title: 'WHATEVER',
    description: 'Whatever, no matter what',
    icon: '🔢',
    exercises: [
      { id: 'pronwhatever-1', sectionId: 'pronouns', type: 'multiple-choice', question: '___ you say, I will not believe.', translation: 'Whatever you say, I will not believe.', options: ['Whatever', 'However', 'Whenever', 'Wherever'], correctAnswer: 'Whatever', points: 10 },
      { id: 'pronwhatever-2', sectionId: 'pronouns', type: 'multiple-choice', question: '___ happens, stay calm.', translation: 'Whatever happens, stay calm.', options: ['Whatever', 'However', 'Whenever', 'Wherever'], correctAnswer: 'Whatever', points: 10 },
      { id: 'pronwhatever-3', sectionId: 'pronouns', type: 'multiple-choice', question: '___ you need, I will help.', translation: 'Whatever you need, I will help.', options: ['Whatever', 'However', 'Whenever', 'Wherever'], correctAnswer: 'Whatever', points: 10 },
      { id: 'pronwhatever-4', sectionId: 'pronouns', type: 'multiple-choice', question: '___ they say, it is not true.', translation: 'Whatever they say, it is not true.', options: ['Whatever', 'However', 'Whenever', 'Wherever'], correctAnswer: 'Whatever', points: 10 },
      { id: 'pronwhatever-5', sectionId: 'pronouns', type: 'multiple-choice', question: '___ the reason, I will forgive.', translation: 'Whatever the reason, I will forgive.', options: ['Whatever', 'However', 'Whenever', 'Wherever'], correctAnswer: 'Whatever', points: 10 },
      { id: 'pronwhatever-6', sectionId: 'pronouns', type: 'multiple-choice', question: '___ you choose, it is okay.', translation: 'Whatever you choose, it is okay.', options: ['Whatever', 'However', 'Whenever', 'Wherever'], correctAnswer: 'Whatever', points: 10 },
      { id: 'pronwhatever-7', sectionId: 'pronouns', type: 'multiple-choice', question: '___ it costs, I will buy it.', translation: 'Whatever it costs, I will buy it.', options: ['Whatever', 'However', 'Whenever', 'Wherever'], correctAnswer: 'Whatever', points: 10 },
      { id: 'pronwhatever-8', sectionId: 'pronouns', type: 'multiple-choice', question: '___ she does, she does well.', translation: 'Whatever she does, she does well.', options: ['Whatever', 'However', 'Whenever', 'Wherever'], correctAnswer: 'Whatever', points: 10 },
      { id: 'pronwhatever-9', sectionId: 'pronouns', type: 'multiple-choice', question: '___ the weather, we will go.', translation: 'Whatever the weather, we will go.', options: ['Whatever', 'However', 'Whenever', 'Wherever'], correctAnswer: 'Whatever', points: 10 },
      { id: 'pronwhatever-10', sectionId: 'pronouns', type: 'multiple-choice', question: '___ they want, give them.', translation: 'Whatever they want, give them.', options: ['Whatever', 'However', 'Whenever', 'Wherever'], correctAnswer: 'Whatever', points: 10 }
    ]
  },
  {
    id: 'pronouns-whoever-1',
    title: 'WHOEVER',
    description: 'Whoever, whoever else',
    icon: '🔢',
    exercises: [
      { id: 'pronwhoever-1', sectionId: 'pronouns', type: 'multiple-choice', question: '___ calls, tell them to wait.', translation: 'Whoever calls, tell them to wait.', options: ['Whoever', 'Whomever', 'Whatever', 'Wherever'], correctAnswer: 'Whoever', points: 10 },
      { id: 'pronwhoever-2', sectionId: 'pronouns', type: 'multiple-choice', question: '___ wants to join can come.', translation: 'Whoever wants to join can come.', options: ['Whoever', 'Whomever', 'Whatever', 'Wherever'], correctAnswer: 'Whoever', points: 10 },
      { id: 'pronwhoever-3', sectionId: 'pronouns', type: 'multiple-choice', question: '___ is at home, answer the phone.', translation: 'Whoever is at home, answer the phone.', options: ['Whoever', 'Whomever', 'Whatever', 'Wherever'], correctAnswer: 'Whoever', points: 10 },
      { id: 'pronwhoever-4', sectionId: 'pronouns', type: 'multiple-choice', question: '___ arrives first, starts cooking.', translation: 'Whoever arrives first, starts cooking.', options: ['Whoever', 'Whomever', 'Whatever', 'Wherever'], correctAnswer: 'Whoever', points: 10 },
      { id: 'pronwhoever-5', sectionId: 'pronouns', type: 'multiple-choice', question: '___ finishes early wins.', translation: 'Whoever finishes early wins.', options: ['Whoever', 'Whomever', 'Whatever', 'Wherever'], correctAnswer: 'Whoever', points: 10 },
      { id: 'pronwhoever-6', sectionId: 'pronouns', type: 'multiple-choice', question: '___ you marry, be happy.', translation: 'Whoever you marry, be happy.', options: ['Whoever', 'Whomever', 'Whatever', 'Wherever'], correctAnswer: 'Whoever', points: 10 },
      { id: 'pronwhoever-7', sectionId: 'pronouns', type: 'multiple-choice', question: '___ is responsible, fix this.', translation: 'Whoever is responsible, fix this.', options: ['Whoever', 'Whomever', 'Whatever', 'Wherever'], correctAnswer: 'Whoever', points: 10 },
      { id: 'pronwhoever-8', sectionId: 'pronouns', type: 'multiple-choice', question: '___ wants more, raise your hand.', translation: 'Whoever wants more, raise your hand.', options: ['Whoever', 'Whomever', 'Whatever', 'Wherever'], correctAnswer: 'Whoever', points: 10 },
      { id: 'pronwhoever-9', sectionId: 'pronouns', type: 'multiple-choice', question: '___ is late, pay the fine.', translation: 'Whoever is late, pay the fine.', options: ['Whoever', 'Whomever', 'Whatever', 'Wherever'], correctAnswer: 'Whoever', points: 10 },
      { id: 'pronwhoever-10', sectionId: 'pronouns', type: 'multiple-choice', question: '___ you meet, be polite.', translation: 'Whoever you meet, be polite.', options: ['Whoever', 'Whomever', 'Whatever', 'Wherever'], correctAnswer: 'Whoever', points: 10 }
    ]
  },
  {
    id: 'pronouns-whichever-1',
    title: 'WHICHEVER',
    description: 'Whichever',
    icon: '🔢',
    exercises: [
      { id: 'pronwhichever-1', sectionId: 'pronouns', type: 'multiple-choice', question: '___ color you like, take it.', translation: 'Whichever color you like, take it.', options: ['Whichever', 'Whatever', 'Whenever', 'Wherever'], correctAnswer: 'Whichever', points: 10 },
      { id: 'pronwhichever-2', sectionId: 'pronouns', type: 'multiple-choice', question: '___ way you choose, it works.', translation: 'Whichever way you choose, it works.', options: ['Whichever', 'Whatever', 'Whenever', 'Wherever'], correctAnswer: 'Whichever', points: 10 },
      { id: 'pronwhichever-3', sectionId: 'pronouns', type: 'multiple-choice', question: '___ one you want, buy it.', translation: 'Whichever one you want, buy it.', options: ['Whichever', 'Whatever', 'Whenever', 'Wherever'], correctAnswer: 'Whichever', points: 10 },
      { id: 'pronwhichever-4', sectionId: 'pronouns', type: 'multiple-choice', question: '___ day is convenient, meet there.', translation: 'Whichever day is convenient, meet there.', options: ['Whichever', 'Whatever', 'Whenever', 'Wherever'], correctAnswer: 'Whichever', points: 10 },
      { id: 'pronwhichever-5', sectionId: 'pronouns', type: 'multiple-choice', question: '___ book you read, learn from it.', translation: 'Whichever book you read, learn from it.', options: ['Whichever', 'Whatever', 'Whenever', 'Wherever'], correctAnswer: 'Whichever', points: 10 },
      { id: 'pronwhichever-6', sectionId: 'pronouns', type: 'multiple-choice', question: '___ option you pick, it is fine.', translation: 'Whichever option you pick, it is fine.', options: ['Whichever', 'Whatever', 'Whenever', 'Wherever'], correctAnswer: 'Whichever', points: 10 },
      { id: 'pronwhichever-7', sectionId: 'pronouns', type: 'multiple-choice', question: '___ restaurant we go, it is good.', translation: 'Whichever restaurant we go, it is good.', options: ['Whichever', 'Whatever', 'Whenever', 'Wherever'], correctAnswer: 'Whichever', points: 10 },
      { id: 'pronwhichever-8', sectionId: 'pronouns', type: 'multiple-choice', question: '___ answer is correct, you win.', translation: 'Whichever answer is correct, you win.', options: ['Whichever', 'Whatever', 'Whenever', 'Wherever'], correctAnswer: 'Whichever', points: 10 },
      { id: 'pronwhichever-9', sectionId: 'pronouns', type: 'multiple-choice', question: '___ city you visit, enjoy it.', translation: 'Whichever city you visit, enjoy it.', options: ['Whichever', 'Whatever', 'Whenever', 'Wherever'], correctAnswer: 'Whichever', points: 10 },
      { id: 'pronwhichever-10', sectionId: 'pronouns', type: 'multiple-choice', question: '___ hotel you stay, it has service.', translation: 'Whichever hotel you stay, it has service.', options: ['Whichever', 'Whatever', 'Whenever', 'Wherever'], correctAnswer: 'Whichever', points: 10 }
    ]
  },
  {
    id: 'pronouns-wherever-1',
    title: 'WHEREVER',
    description: 'Wherever, no matter where',
    icon: '🔢',
    exercises: [
      { id: 'pronwherever-1', sectionId: 'pronouns', type: 'multiple-choice', question: 'Go ___ you want.', translation: 'Go wherever you want.', options: ['Wherever', 'Where', 'When', 'How'], correctAnswer: 'Wherever', points: 10 },
      { id: 'pronwherever-2', sectionId: 'pronouns', type: 'multiple-choice', question: 'Sit ___ you like.', translation: 'Sit wherever you like.', options: ['Wherever', 'Where', 'When', 'How'], correctAnswer: 'Wherever', points: 10 },
      { id: 'pronwherever-3', sectionId: 'pronouns', type: 'multiple-choice', question: '___ you are, I will find you.', translation: 'Wherever you are, I will find you.', options: ['Wherever', 'Where', 'When', 'How'], correctAnswer: 'Wherever', points: 10 },
      { id: 'pronwherever-4', sectionId: 'pronouns', type: 'multiple-choice', question: 'Travel ___ you wish.', translation: 'Travel wherever you wish.', options: ['Wherever', 'Where', 'When', 'How'], correctAnswer: 'Wherever', points: 10 },
      { id: 'pronwherever-5', sectionId: 'pronouns', type: 'multiple-choice', question: 'Stay ___ you want.', translation: 'Stay wherever you want.', options: ['Wherever', 'Where', 'When', 'How'], correctAnswer: 'Wherever', points: 10 },
      { id: 'pronwherever-6', sectionId: 'pronouns', type: 'multiple-choice', question: '___ you hide, I see you.', translation: 'Wherever you hide, I see you.', options: ['Wherever', 'Where', 'When', 'How'], correctAnswer: 'Wherever', points: 10 },
      { id: 'pronwherever-7', sectionId: 'pronouns', type: 'multiple-choice', question: 'Call me ___ you are.', translation: 'Call me wherever you are.', options: ['Wherever', 'Where', 'When', 'How'], correctAnswer: 'Wherever', points: 10 },
      { id: 'pronwherever-8', sectionId: 'pronouns', type: 'multiple-choice', question: 'Work ___ you can.', translation: 'Work wherever you can.', options: ['Wherever', 'Where', 'When', 'How'], correctAnswer: 'Wherever', points: 10 },
      { id: 'pronwherever-9', sectionId: 'pronouns', type: 'multiple-choice', question: '___ you go, be yourself.', translation: 'Wherever you go, be yourself.', options: ['Wherever', 'Where', 'When', 'How'], correctAnswer: 'Wherever', points: 10 },
      { id: 'pronwherever-10', sectionId: 'pronouns', type: 'multiple-choice', question: 'Study ___ it is quiet.', translation: 'Study wherever it is quiet.', options: ['Wherever', 'Where', 'When', 'How'], correctAnswer: 'Wherever', points: 10 }
    ]
  },
  {
    id: 'pronouns-whenever-1',
    title: 'WHENEVER',
    description: 'Whenever, no matter when',
    icon: '🔢',
    exercises: [
      { id: 'pronwhenever-1', sectionId: 'pronouns', type: 'multiple-choice', question: 'Call me ___ you need help.', translation: 'Call me whenever you need help.', options: ['Whenever', 'When', 'Where', 'How'], correctAnswer: 'Whenever', points: 10 },
      { id: 'pronwhenever-2', sectionId: 'pronouns', type: 'multiple-choice', question: '___ you are ready, start.', translation: 'Whenever you are ready, start.', options: ['Whenever', 'When', 'Where', 'How'], correctAnswer: 'Whenever', points: 10 },
      { id: 'pronwhenever-3', sectionId: 'pronouns', type: 'multiple-choice', question: 'Visit us ___ you come to town.', translation: 'Visit us whenever you come to town.', options: ['Whenever', 'When', 'Where', 'How'], correctAnswer: 'Whenever', points: 10 },
      { id: 'pronwhenever-4', sectionId: 'pronouns', type: 'multiple-choice', question: '___ she calls, answer.', translation: 'Whenever she calls, answer.', options: ['Whenever', 'When', 'Where', 'How'], correctAnswer: 'Whenever', points: 10 },
      { id: 'pronwhenever-5', sectionId: 'pronouns', type: 'multiple-choice', question: 'You can leave ___ you want.', translation: 'You can leave whenever you want.', options: ['Whenever', 'When', 'Where', 'How'], correctAnswer: 'Whenever', points: 10 },
      { id: 'pronwhenever-6', sectionId: 'pronouns', type: 'multiple-choice', question: '___ they need, we help.', translation: 'Whenever they need, we help.', options: ['Whenever', 'When', 'Where', 'How'], correctAnswer: 'Whenever', points: 10 },
      { id: 'pronwhenever-7', sectionId: 'pronouns', type: 'multiple-choice', question: 'Eat ___ you are hungry.', translation: 'Eat whenever you are hungry.', options: ['Whenever', 'When', 'Where', 'How'], correctAnswer: 'Whenever', points: 10 },
      { id: 'pronwhenever-8', sectionId: 'pronouns', type: 'multiple-choice', question: '___ it rains, we stay home.', translation: 'Whenever it rains, we stay home.', options: ['Whenever', 'When', 'Where', 'How'], correctAnswer: 'Whenever', points: 10 },
      { id: 'pronwhenever-9', sectionId: 'pronouns', type: 'multiple-choice', question: 'Think of me ___ you smile.', translation: 'Think of me whenever you smile.', options: ['Whenever', 'When', 'Where', 'How'], correctAnswer: 'Whenever', points: 10 },
      { id: 'pronwhenever-10', sectionId: 'pronouns', type: 'multiple-choice', question: 'I will help ___ I can.', translation: 'I will help whenever I can.', options: ['Whenever', 'When', 'Where', 'How'], correctAnswer: 'Whenever', points: 10 }
    ]
  },
  {
    id: 'pronouns-however-1',
    title: 'HOWEVER',
    description: 'However',
    icon: '🔢',
    exercises: [
      { id: 'pronhowever-1', sectionId: 'pronouns', type: 'multiple-choice', question: '___ you try, do not give up.', translation: 'However you try, do not give up.', options: ['However', 'How', 'Whatever', 'Whenever'], correctAnswer: 'However', points: 10 },
      { id: 'pronhowever-2', sectionId: 'pronouns', type: 'multiple-choice', question: '___ hard it is, finish it.', translation: 'However hard it is, finish it.', options: ['However', 'How', 'Whatever', 'Whenever'], correctAnswer: 'However', points: 10 },
      { id: 'pronhowever-3', sectionId: 'pronouns', type: 'multiple-choice', question: '___ much you earn, save some.', translation: 'However much you earn, save some.', options: ['However', 'How', 'Whatever', 'Whenever'], correctAnswer: 'However', points: 10 },
      { id: 'pronhowever-4', sectionId: 'pronouns', type: 'multiple-choice', question: '___ she tried, she failed.', translation: 'However she tried, she failed.', options: ['However', 'How', 'Whatever', 'Whenever'], correctAnswer: 'However', points: 10 },
      { id: 'pronhowever-5', sectionId: 'pronouns', type: 'multiple-choice', question: '___ old you are, stay young.', translation: 'However old you are, stay young.', options: ['However', 'How', 'Whatever', 'Whenever'], correctAnswer: 'However', points: 10 },
      { id: 'pronhowever-6', sectionId: 'pronouns', type: 'multiple-choice', question: '___ tired you are, keep going.', translation: 'However tired you are, keep going.', options: ['However', 'How', 'Whatever', 'Whenever'], correctAnswer: 'However', points: 10 },
      { id: 'pronhowever-7', sectionId: 'pronouns', type: 'multiple-choice', question: '___ difficult, never quit.', translation: 'However difficult, never quit.', options: ['However', 'How', 'Whatever', 'Whenever'], correctAnswer: 'However', points: 10 },
      { id: 'pronhowever-8', sectionId: 'pronouns', type: 'multiple-choice', question: '___ busy, find time.', translation: 'However busy, find time.', options: ['However', 'How', 'Whatever', 'Whenever'], correctAnswer: 'However', points: 10 },
      { id: 'pronhowever-9', sectionId: 'pronouns', type: 'multiple-choice', question: '___ long the wait, wait.', translation: 'However long the wait, wait.', options: ['However', 'How', 'Whatever', 'Whenever'], correctAnswer: 'However', points: 10 },
      { id: 'pronhowever-10', sectionId: 'pronouns', type: 'multiple-choice', question: '___ expensive, buy it.', translation: 'However expensive, buy it.', options: ['However', 'How', 'Whatever', 'Whenever'], correctAnswer: 'However', points: 10 }
    ]
  }
];

export const conditionalExercisePacks: ExercisePack[] = [
  {
    id: 'zero-conditional-1',
    title: 'Zero Conditional',
    description: 'General truths and facts',
    icon: '🔄',
    exercises: [
      { id: 'zc-ex1', sectionId: 'conditional', type: 'multiple-choice', question: 'If you ___ water, it boils.', translation: 'If you heat water, it boils.', options: ['heat', 'heats', 'heating', 'heated'], correctAnswer: 'heat', points: 10 },
      { id: 'zc-ex2', sectionId: 'conditional', type: 'multiple-choice', question: 'If plants ___ water, they die.', translation: 'If plants do not get water, they die.', options: ['get', 'gets', 'getting', 'got'], correctAnswer: 'get', points: 10 }
    ]
  },
  {
    id: 'first-conditional-1',
    title: 'First Conditional',
    description: 'Real possibilities',
    icon: '⚡',
    exercises: [
      { id: 'fc-ex1', sectionId: 'conditional', type: 'multiple-choice', question: 'If it ___ tomorrow, I will stay home.', translation: 'If it rains tomorrow, I will stay home.', options: ['rain', 'rains', 'raining', 'rained'], correctAnswer: 'rains', points: 10 },
      { id: 'fc-ex2', sectionId: 'conditional', type: 'multiple-choice', question: 'If she ___ late, we will leave.', translation: 'If she arrives late, we will leave.', options: ['arrive', 'arrives', 'arriving', 'arrived'], correctAnswer: 'arrives', points: 10 }
    ]
  },
  {
    id: 'second-conditional-1',
    title: 'Second Conditional',
    description: 'Imaginary situations',
    icon: '🌙',
    exercises: [
      { id: 'sc-ex1', sectionId: 'conditional', type: 'multiple-choice', question: 'If I ___ rich, I would travel.', translation: 'If I were rich, I would travel.', options: ['am', 'was', 'were', 'be'], correctAnswer: 'were', points: 10 },
      { id: 'sc-ex2', sectionId: 'conditional', type: 'multiple-choice', question: 'If she ___ here, she would help.', translation: 'If she were here, she would help.', options: ['is', 'was', 'were', 'be'], correctAnswer: 'were', points: 10 },
      { id: 'sc-ex3', sectionId: 'conditional', type: 'multiple-choice', question: 'If they ___ more, they would pass.', translation: 'If they studied more, they would pass.', options: ['study', 'studied', 'studies', 'studying'], correctAnswer: 'studied', points: 10 },
      { id: 'sc-ex4', sectionId: 'conditional', type: 'multiple-choice', question: 'If he ___ a car, he would drive.', translation: 'If he had a car, he would drive.', options: ['has', 'had', 'have', 'having'], correctAnswer: 'had', points: 10 },
      { id: 'sc-ex5', sectionId: 'conditional', type: 'multiple-choice', question: 'If we ___ time, we would go.', translation: 'If we had time, we would go.', options: ['have', 'had', 'has', 'having'], correctAnswer: 'had', points: 10 },
      { id: 'sc-ex6', sectionId: 'conditional', type: 'multiple-choice', question: 'If I ___ you, I would apologize.', translation: 'If I were you, I would apologize.', options: ['am', 'was', 'were', 'be'], correctAnswer: 'were', points: 10 },
      { id: 'sc-ex7', sectionId: 'conditional', type: 'multiple-choice', question: 'If she ___ the exam, she would be happy.', translation: 'If she passed the exam, she would be happy.', options: ['pass', 'passed', 'passes', 'passing'], correctAnswer: 'passed', points: 10 },
      { id: 'sc-ex8', sectionId: 'conditional', type: 'multiple-choice', question: 'If we ___ in London, we would visit Big Ben.', translation: 'If we lived in London, we would visit Big Ben.', options: ['live', 'lived', 'living', 'lives'], correctAnswer: 'lived', points: 10 },
      { id: 'sc-ex9', sectionId: 'conditional', type: 'multiple-choice', question: 'If he ___ speak English, he would work abroad.', translation: 'If he could speak English, he would work abroad.', options: ['can', 'could', 'cannot', 'could not'], correctAnswer: 'could', points: 10 },
      { id: 'sc-ex10', sectionId: 'conditional', type: 'multiple-choice', question: 'If I ___ my own business, I would be free.', translation: 'If I started my own business, I would be free.', options: ['start', 'started', 'starting', 'starts'], correctAnswer: 'started', points: 10 }
    ]
  },
  {
    id: 'third-conditional-1',
    title: 'Third Conditional',
    description: 'Past hypotheticals',
    icon: '📅',
    exercises: [
      { id: 'tc-ex1', sectionId: 'conditional', type: 'multiple-choice', question: 'If she ___ earlier, she would not have been late.', translation: 'If she had arrived earlier, she would not have been late.', options: ['arrived', 'had arrived', 'arrives', 'arriving'], correctAnswer: 'had arrived', points: 10 },
      { id: 'tc-ex2', sectionId: 'conditional', type: 'multiple-choice', question: 'If they ___ harder, they would have passed.', translation: 'If they had studied harder, they would have passed.', options: ['studied', 'had studied', 'study', 'studies'], correctAnswer: 'had studied', points: 10 },
      { id: 'tc-ex3', sectionId: 'conditional', type: 'multiple-choice', question: 'If he ___ the train, he would have been on time.', translation: 'If he had caught the train, he would have been on time.', options: ['caught', 'had caught', 'catches', 'catching'], correctAnswer: 'had caught', points: 10 },
      { id: 'tc-ex4', sectionId: 'conditional', type: 'multiple-choice', question: 'If we ___ more, we would have won.', translation: 'If we had trained more, we would have won.', options: ['trained', 'had trained', 'train', 'training'], correctAnswer: 'had trained', points: 10 },
      { id: 'tc-ex5', sectionId: 'conditional', type: 'multiple-choice', question: 'If I ___ about it, I would have helped.', translation: 'If I had known about it, I would have helped.', options: ['knew', 'had known', 'know', 'knowing'], correctAnswer: 'had known', points: 10 },
      { id: 'tc-ex6', sectionId: 'conditional', type: 'multiple-choice', question: 'If she ___ the job, she would have been happy.', translation: 'If she had gotten the job, she would have been happy.', options: ['got', 'had got', 'gets', 'getting'], correctAnswer: 'had got', points: 10 },
      { id: 'tc-ex7', sectionId: 'conditional', type: 'multiple-choice', question: 'If we ___ earlier, we would have caught the flight.', translation: 'If we had left earlier, we would have caught the flight.', options: ['left', 'had left', 'leave', 'leaving'], correctAnswer: 'had left', points: 10 },
      { id: 'tc-ex8', sectionId: 'conditional', type: 'multiple-choice', question: 'If he ___ his keys, he would have entered.', translation: 'If he had remembered his keys, he would have entered.', options: ['remembered', 'had remembered', 'remembers', 'remembering'], correctAnswer: 'had remembered', points: 10 },
      { id: 'tc-ex9', sectionId: 'conditional', type: 'multiple-choice', question: 'If they ___ us, we would have won.', translation: 'If they had helped us, we would have won.', options: ['helped', 'had helped', 'help', 'helping'], correctAnswer: 'had helped', points: 10 },
      { id: 'tc-ex10', sectionId: 'conditional', type: 'multiple-choice', question: 'If I ___ the letter, I would have replied.', translation: 'If I had received the letter, I would have replied.', options: ['received', 'had received', 'receives', 'receiving'], correctAnswer: 'had received', points: 10 }
    ]
  },
  {
    id: 'zero-conditional-advanced-1',
    title: 'Zero Conditional - Advanced',
    description: 'General truths and facts',
    icon: '🔄',
    exercises: [
      { id: 'zca-1', sectionId: 'conditional', type: 'multiple-choice', question: 'If you ___ water to 100°C, it boils.', translation: 'If you heat water to 100°C, it boils.', options: ['heat', 'heats', 'heated', 'heating'], correctAnswer: 'heat', points: 10 },
      { id: 'zca-2', sectionId: 'conditional', type: 'multiple-choice', question: 'If you ___ plants, they grow.', translation: 'If you water plants, they grow.', options: ['water', 'waters', 'watering', 'watered'], correctAnswer: 'water', points: 10 },
      { id: 'zca-3', sectionId: 'conditional', type: 'multiple-choice', question: 'If ice ___ , it becomes water.', translation: 'If ice melts, it becomes water.', options: ['melt', 'melts', 'melting', 'melted'], correctAnswer: 'melts', points: 10 },
      { id: 'zca-4', sectionId: 'conditional', type: 'multiple-choice', question: 'If you ___ hard, you succeed.', translation: 'If you work hard, you succeed.', options: ['work', 'works', 'working', 'worked'], correctAnswer: 'work', points: 10 },
      { id: 'zca-5', sectionId: 'conditional', type: 'multiple-choice', question: 'If she ___ late, everyone waits.', translation: 'If she arrives late, everyone waits.', options: ['arrive', 'arrives', 'arriving', 'arrived'], correctAnswer: 'arrives', points: 10 },
      { id: 'zca-6', sectionId: 'conditional', type: 'multiple-choice', question: 'If you ___ a liar, people do not trust you.', translation: 'If you are a liar, people do not trust you.', options: ['are', 'is', 'be', 'being'], correctAnswer: 'are', points: 10 },
      { id: 'zca-7', sectionId: 'conditional', type: 'multiple-choice', question: 'If the temperature ___ below 0, water freezes.', translation: 'If the temperature drops below 0, water freezes.', options: ['drop', 'drops', 'dropping', 'dropped'], correctAnswer: 'drops', points: 10 },
      { id: 'zca-8', sectionId: 'conditional', type: 'multiple-choice', question: 'If you ___ a cat, it says meow.', translation: 'If you pet a cat, it says meow.', options: ['pet', 'pets', 'petting', 'petting'], correctAnswer: 'pet', points: 10 },
      { id: 'zca-9', sectionId: 'conditional', type: 'multiple-choice', question: 'If he ___ enough sleep, he feels good.', translation: 'If he gets enough sleep, he feels good.', options: ['get', 'gets', 'getting', 'got'], correctAnswer: 'gets', points: 10 },
      { id: 'zca-10', sectionId: 'conditional', type: 'multiple-choice', question: 'If they ___ together, they win.', translation: 'If they play together, they win.', options: ['play', 'plays', 'playing', 'played'], correctAnswer: 'play', points: 10 }
    ]
  },
  {
    id: 'first-conditional-advanced-1',
    title: 'First Conditional - Advanced',
    description: 'Real possibilities',
    icon: '⚡',
    exercises: [
      { id: 'fca-1', sectionId: 'conditional', type: 'multiple-choice', question: 'If it ___ tomorrow, I will go to the beach.', translation: 'If it is sunny tomorrow, I will go to the beach.', options: ['is', 'will be', 'is going to be', 'be'], correctAnswer: 'is', points: 10 },
      { id: 'fca-2', sectionId: 'conditional', type: 'multiple-choice', question: 'If she ___ the job, she will celebrate.', translation: 'If she gets the job, she will celebrate.', options: ['get', 'gets', 'will get', 'getting'], correctAnswer: 'gets', points: 10 },
      { id: 'fca-3', sectionId: 'conditional', type: 'multiple-choice', question: 'If they ___ ready, we can leave.', translation: 'If they are ready, we can leave.', options: ['are', 'will be', 'were', 'be'], correctAnswer: 'are', points: 10 },
      { id: 'fca-4', sectionId: 'conditional', type: 'multiple-choice', question: 'If he ___ to the party, I will be happy.', translation: 'If he comes to the party, I will be happy.', options: ['come', 'comes', 'came', 'coming'], correctAnswer: 'comes', points: 10 },
      { id: 'fca-5', sectionId: 'conditional', type: 'multiple-choice', question: 'If we ___ early, we will avoid traffic.', translation: 'If we leave early, we will avoid traffic.', options: ['leave', 'leaves', 'left', 'leaving'], correctAnswer: 'leave', points: 10 },
      { id: 'fca-6', sectionId: 'conditional', type: 'multiple-choice', question: 'If you ___ me, I will help you.', translation: 'If you call me, I will help you.', options: ['call', 'calls', 'calling', 'called'], correctAnswer: 'call', points: 10 },
      { id: 'fca-7', sectionId: 'conditional', type: 'multiple-choice', question: 'If she ___ the exam, she will be relieved.', translation: 'If she passes the exam, she will be relieved.', options: ['pass', 'passes', 'passed', 'passing'], correctAnswer: 'passes', points: 10 },
      { id: 'fca-8', sectionId: 'conditional', type: 'multiple-choice', question: 'If it ___ , I will take an umbrella.', translation: 'If it rains, I will take an umbrella.', options: ['rain', 'rains', 'raining', 'rained'], correctAnswer: 'rains', points: 10 },
      { id: 'fca-9', sectionId: 'conditional', type: 'multiple-choice', question: 'If we ___ more, we will win.', translation: 'If we train more, we will win.', options: ['train', 'trains', 'training', 'trained'], correctAnswer: 'train', points: 10 },
      { id: 'fca-10', sectionId: 'conditional', type: 'multiple-choice', question: 'If he ___ here, he will fix it.', translation: 'If he comes here, he will fix it.', options: ['come', 'comes', 'came', 'coming'], correctAnswer: 'comes', points: 10 }
    ]
  },
  {
    id: 'conditional-if-clauses-1',
    title: 'If Clauses: I Wish / If Only',
    description: 'Wishes about present and past',
    icon: '💫',
    exercises: [
      { id: 'ifonly-1', sectionId: 'conditional', type: 'multiple-choice', question: 'I wish I ___ more money.', translation: 'I wish I had more money.', options: ['have', 'had', 'have had', 'had had'], correctAnswer: 'had', points: 10 },
      { id: 'ifonly-2', sectionId: 'conditional', type: 'multiple-choice', question: 'If only I ___ the answer.', translation: 'If only I knew the answer.', options: ['know', 'knew', 'had known', 'knowing'], correctAnswer: 'knew', points: 10 },
      { id: 'ifonly-3', sectionId: 'conditional', type: 'multiple-choice', question: 'I wish she ___ here.', translation: 'I wish she were here.', options: ['is', 'was', 'were', 'be'], correctAnswer: 'were', points: 10 },
      { id: 'ifonly-4', sectionId: 'conditional', type: 'multiple-choice', question: 'If only I ___ harder in school.', translation: 'If only I had worked harder in school.', options: ['worked', 'had worked', 'work', 'working'], correctAnswer: 'had worked', points: 10 },
      { id: 'ifonly-5', sectionId: 'conditional', type: 'multiple-choice', question: 'I wish I ___ how to cook.', translation: 'I wish I knew how to cook.', options: ['know', 'knew', 'had known', 'knowing'], correctAnswer: 'knew', points: 10 },
      { id: 'ifonly-6', sectionId: 'conditional', type: 'multiple-choice', question: 'If only they ___ us earlier.', translation: 'If only they had told us earlier.', options: ['tell', 'told', 'had told', 'telling'], correctAnswer: 'had told', points: 10 },
      { id: 'ifonly-7', sectionId: 'conditional', type: 'multiple-choice', question: 'I wish I ___ a car.', translation: 'I wish I had a car.', options: ['have', 'had', 'have had', 'having'], correctAnswer: 'had', points: 10 },
      { id: 'ifonly-8', sectionId: 'conditional', type: 'multiple-choice', question: 'If only she ___ to me.', translation: 'If only she had listened to me.', options: ['listen', 'listened', 'had listened', 'listening'], correctAnswer: 'had listened', points: 10 },
      { id: 'ifonly-9', sectionId: 'conditional', type: 'multiple-choice', question: 'I wish we ___ more time.', translation: 'I wish we had more time.', options: ['have', 'had', 'had had', 'having'], correctAnswer: 'had', points: 10 },
      { id: 'ifonly-10', sectionId: 'conditional', type: 'multiple-choice', question: 'If only he ___ the truth.', translation: 'If only he had told the truth.', options: ['tell', 'tells', 'told', 'had told'], correctAnswer: 'had told', points: 10 }
    ]
  },
  {
    id: 'conditional-unless-1',
    title: 'Conditional with UNLESS',
    description: 'If not',
    icon: '🚫',
    exercises: [
      { id: 'unless-1', sectionId: 'conditional', type: 'multiple-choice', question: 'I will go ___ it rains.', translation: 'I will go unless it rains.', options: ['unless', 'if', 'if not', 'when'], correctAnswer: 'unless', points: 10 },
      { id: 'unless-2', sectionId: 'conditional', type: 'multiple-choice', question: 'She will fail ___ she studies.', translation: 'She will fail unless she studies.', options: ['unless', 'if', 'if not', 'when'], correctAnswer: 'unless', points: 10 },
      { id: 'unless-3', sectionId: 'conditional', type: 'multiple-choice', question: 'We will be late ___ we hurry.', translation: 'We will be late unless we hurry.', options: ['unless', 'if', 'if not', 'when'], correctAnswer: 'unless', points: 10 },
      { id: 'unless-4', sectionId: 'conditional', type: 'multiple-choice', question: 'He cannot come ___ he finishes work.', translation: 'He cannot come unless he finishes work.', options: ['unless', 'if', 'if not', 'when'], correctAnswer: 'unless', points: 10 },
      { id: 'unless-5', sectionId: 'conditional', type: 'multiple-choice', question: 'I will not call ___ you ask me.', translation: 'I will not call unless you ask me.', options: ['unless', 'if', 'if not', 'when'], correctAnswer: 'unless', points: 10 },
      { id: 'unless-6', sectionId: 'conditional', type: 'multiple-choice', question: 'She is sad ___ she passes the exam.', translation: 'She is sad unless she passes the exam.', options: ['unless', 'if', 'if not', 'when'], correctAnswer: 'unless', points: 10 },
      { id: 'unless-7', sectionId: 'conditional', type: 'multiple-choice', question: 'We cannot eat ___ the food is ready.', translation: 'We cannot eat unless the food is ready.', options: ['unless', 'if', 'if not', 'when'], correctAnswer: 'unless', points: 10 },
      { id: 'unless-8', sectionId: 'conditional', type: 'multiple-choice', question: 'He will be fired ___ he improves.', translation: 'He will be fired unless he improves.', options: ['unless', 'if', 'if not', 'when'], correctAnswer: 'unless', points: 10 },
      { id: 'unless-9', sectionId: 'conditional', type: 'multiple-choice', question: 'I will wait ___ she arrives.', translation: 'I will wait unless she arrives.', options: ['unless', 'if', 'if not', 'till'], correctAnswer: 'unless', points: 10 },
      { id: 'unless-10', sectionId: 'conditional', type: 'multiple-choice', question: 'They will cancel the trip ___ there are enough people.', translation: 'They will cancel the trip unless there are enough people.', options: ['unless', 'if', 'if not', 'when'], correctAnswer: 'unless', points: 10 }
    ]
  },
  {
    id: 'conditional-mixed-1',
    title: 'Mixed Conditionals',
    description: 'Mixing time frames',
    icon: '🔀',
    exercises: [
      { id: 'mixcond-1', sectionId: 'conditional', type: 'multiple-choice', question: 'If she ___ earlier, she would be sleeping now.', translation: 'If she had slept earlier, she would be sleeping now.', options: ['slept', 'had slept', 'sleeps', 'sleep'], correctAnswer: 'had slept', points: 10 },
      { id: 'mixcond-2', sectionId: 'conditional', type: 'multiple-choice', question: 'If he ___ English, he would have gotten the job.', translation: 'If he spoke English, he would have gotten the job.', options: ['spoke', 'speaks', 'had spoken', 'speak'], correctAnswer: 'spoke', points: 10 },
      { id: 'mixcond-3', sectionId: 'conditional', type: 'multiple-choice', question: 'If they ___ harder, they would be winning now.', translation: 'If they had trained harder, they would be winning now.', options: ['trained', 'had trained', 'train', 'training'], correctAnswer: 'had trained', points: 10 },
      { id: 'mixcond-4', sectionId: 'conditional', type: 'multiple-choice', question: 'If I ___ rich, I would have bought a house.', translation: 'If I were rich, I would have bought a house.', options: ['am', 'was', 'were', 'been'], correctAnswer: 'were', points: 10 },
      { id: 'mixcond-5', sectionId: 'conditional', type: 'multiple-choice', question: 'If she ___ the bus, she would be home now.', translation: 'If she had caught the bus, she would be home now.', options: ['caught', 'had caught', 'catches', 'catch'], correctAnswer: 'had caught', points: 10 },
      { id: 'mixcond-6', sectionId: 'conditional', type: 'multiple-choice', question: 'If we ___ more, we would not be hungry now.', translation: 'If we ate more, we would not be hungry now.', options: ['ate', 'eat', 'had eaten', 'eating'], correctAnswer: 'ate', points: 10 },
      { id: 'mixcond-7', sectionId: 'conditional', type: 'multiple-choice', question: 'If he ___ studying, he would have passed.', translation: 'If he were studying, he would have passed.', options: ['was', 'were', 'had been', 'is'], correctAnswer: 'were', points: 10 },
      { id: 'mixcond-8', sectionId: 'conditional', type: 'multiple-choice', question: 'If I ___ the movie, I would be tired now.', translation: 'If I had watched the movie, I would be tired now.', options: ['watched', 'had watched', 'watch', 'watching'], correctAnswer: 'had watched', points: 10 },
      { id: 'mixcond-9', sectionId: 'conditional', type: 'multiple-choice', question: 'If they ___ careful, they would have succeeded.', translation: 'If they were careful, they would have succeeded.', options: ['were', 'are', 'had been', 'be'], correctAnswer: 'were', points: 10 },
      { id: 'mixcond-10', sectionId: 'conditional', type: 'multiple-choice', question: 'If we ___ earlier, we would be resting now.', translation: 'If we had left earlier, we would be resting now.', options: ['left', 'had left', 'leave', 'leaving'], correctAnswer: 'had left', points: 10 }
    ]
  },
  {
    id: 'conditional-result-clauses-1',
    title: 'Conditional Result Clauses',
    description: 'Would, could, might',
    icon: '📊',
    exercises: [
      { id: 'result-1', sectionId: 'conditional', type: 'multiple-choice', question: 'If you study, you ___ pass the exam.', translation: 'If you study, you might pass the exam.', options: ['would', 'could', 'might', 'will'], correctAnswer: 'might', points: 10 },
      { id: 'result-2', sectionId: 'conditional', type: 'multiple-choice', question: 'If he tries hard, he ___ succeed.', translation: 'If he tries hard, he could succeed.', options: ['would', 'could', 'might', 'will'], correctAnswer: 'could', points: 10 },
      { id: 'result-3', sectionId: 'conditional', type: 'multiple-choice', question: 'If we leave now, we ___ arrive on time.', translation: 'If we leave now, we would arrive on time.', options: ['would', 'could', 'might', 'will'], correctAnswer: 'would', points: 10 },
      { id: 'result-4', sectionId: 'conditional', type: 'multiple-choice', question: 'If she calls, she ___ leave a message.', translation: 'If she calls, she might leave a message.', options: ['would', 'could', 'might', 'will'], correctAnswer: 'might', points: 10 },
      { id: 'result-5', sectionId: 'conditional', type: 'multiple-choice', question: 'If they come, they ___ help us.', translation: 'If they come, they could help us.', options: ['would', 'could', 'might', 'will'], correctAnswer: 'could', points: 10 },
      { id: 'result-6', sectionId: 'conditional', type: 'multiple-choice', question: 'If it stops raining, we ___ go outside.', translation: 'If it stops raining, we would go outside.', options: ['would', 'could', 'might', 'will'], correctAnswer: 'would', points: 10 },
      { id: 'result-7', sectionId: 'conditional', type: 'multiple-choice', question: 'If you ask nicely, she ___ say yes.', translation: 'If you ask nicely, she might say yes.', options: ['would', 'could', 'might', 'will'], correctAnswer: 'might', points: 10 },
      { id: 'result-8', sectionId: 'conditional', type: 'multiple-choice', question: 'If we book early, we ___ get a discount.', translation: 'If we book early, we could get a discount.', options: ['would', 'could', 'might', 'will'], correctAnswer: 'could', points: 10 },
      { id: 'result-9', sectionId: 'conditional', type: 'multiple-choice', question: 'If he practices more, he ___ improve.', translation: 'If he practices more, he would improve.', options: ['would', 'could', 'might', 'will'], correctAnswer: 'would', points: 10 },
      { id: 'result-10', sectionId: 'conditional', type: 'multiple-choice', question: 'If she finishes early, she ___ go home.', translation: 'If she finishes early, she might go home.', options: ['would', 'could', 'might', 'will'], correctAnswer: 'might', points: 10 }
    ]
  },
  {
    id: 'conditional-time-expressions-1',
    title: 'Conditional with Time Expressions',
    description: 'When, as soon as, before, after',
    icon: '⏰',
    exercises: [
      { id: 'condtime-1', sectionId: 'conditional', type: 'multiple-choice', question: '___ I finish work, I will call you.', translation: 'When I finish work, I will call you.', options: ['When', 'If', 'Unless', 'Because'], correctAnswer: 'When', points: 10 },
      { id: 'condtime-2', sectionId: 'conditional', type: 'multiple-choice', question: '___ she arrives, we will start.', translation: 'As soon as she arrives, we will start.', options: ['When', 'As soon as', 'If', 'Unless'], correctAnswer: 'As soon as', points: 10 },
      { id: 'condtime-3', sectionId: 'conditional', type: 'multiple-choice', question: 'I will leave ___ the movie ends.', translation: 'I will leave when the movie ends.', options: ['when', 'if', 'unless', 'before'], correctAnswer: 'when', points: 10 },
      { id: 'condtime-4', sectionId: 'conditional', type: 'multiple-choice', question: '___ the train arrives, we will go.', translation: 'After the train arrives, we will go.', options: ['When', 'After', 'Before', 'If'], correctAnswer: 'After', points: 10 },
      { id: 'condtime-5', sectionId: 'conditional', type: 'multiple-choice', question: '___ you finish, let me know.', translation: 'When you finish, let me know.', options: ['When', 'If', 'Unless', 'Because'], correctAnswer: 'When', points: 10 },
      { id: 'condtime-6', sectionId: 'conditional', type: 'multiple-choice', question: 'He will call ___ he gets home.', translation: 'He will call as soon as he gets home.', options: ['when', 'as soon as', 'before', 'after'], correctAnswer: 'as soon as', points: 10 },
      { id: 'condtime-7', sectionId: 'conditional', type: 'multiple-choice', question: 'We will eat ___ the food is ready.', translation: 'We will eat when the food is ready.', options: ['when', 'if', 'unless', 'because'], correctAnswer: 'when', points: 10 },
      { id: 'condtime-8', sectionId: 'conditional', type: 'multiple-choice', question: '___ you arrive, call me.', translation: 'As soon as you arrive, call me.', options: ['When', 'As soon as', 'If', 'Unless'], correctAnswer: 'As soon as', points: 10 },
      { id: 'condtime-9', sectionId: 'conditional', type: 'multiple-choice', question: 'I will wait ___ she comes.', translation: 'I will wait until she comes.', options: ['when', 'until', 'before', 'after'], correctAnswer: 'until', points: 10 },
      { id: 'condtime-10', sectionId: 'conditional', type: 'multiple-choice', question: 'We will start ___ everyone is here.', translation: 'We will start when everyone is here.', options: ['when', 'if', 'unless', 'because'], correctAnswer: 'when', points: 10 }
    ]
  },
  {
    id: 'conditional-inversion-1',
    title: 'Conditional Inversion',
    description: 'Had/Were/Should I were...',
    icon: '🔄',
    exercises: [
      { id: 'inversion-1', sectionId: 'conditional', type: 'multiple-choice', question: '___ I were you, I would apologize.', translation: 'Were I you, I would apologize.', options: ['If', 'Had', 'Should', 'Were'], correctAnswer: 'Were', points: 10 },
      { id: 'inversion-2', sectionId: 'conditional', type: 'multiple-choice', question: '___ he studied, he would pass.', translation: 'Had he studied, he would pass.', options: ['If', 'Had', 'Should', 'Were'], correctAnswer: 'Had', points: 10 },
      { id: 'inversion-3', sectionId: 'conditional', type: 'multiple-choice', question: '___ it rain, we would cancel.', translation: 'Should it rain, we would cancel.', options: ['If', 'Had', 'Should', 'Were'], correctAnswer: 'Should', points: 10 },
      { id: 'inversion-4', sectionId: 'conditional', type: 'multiple-choice', question: '___ I known, I would have come.', translation: 'Had I known, I would have come.', options: ['If', 'Had', 'Should', 'Were'], correctAnswer: 'Had', points: 10 },
      { id: 'inversion-5', sectionId: 'conditional', type: 'multiple-choice', question: '___ you need help, call me.', translation: 'Should you need help, call me.', options: ['If', 'Had', 'Should', 'Were'], correctAnswer: 'Should', points: 10 },
      { id: 'inversion-6', sectionId: 'conditional', type: 'multiple-choice', question: '___ the boss here, he would be angry.', translation: 'Were the boss here, he would be angry.', options: ['If', 'Had', 'Should', 'Were'], correctAnswer: 'Were', points: 10 },
      { id: 'inversion-7', sectionId: 'conditional', type: 'multiple-choice', question: '___ they arrived, we would start.', translation: 'Had they arrived, we would start.', options: ['If', 'Had', 'Should', 'Were'], correctAnswer: 'Had', points: 10 },
      { id: 'inversion-8', sectionId: 'conditional', type: 'multiple-choice', question: '___ it be true, I would be shocked.', translation: 'Should it be true, I would be shocked.', options: ['If', 'Had', 'Should', 'Were'], correctAnswer: 'Should', points: 10 },
      { id: 'inversion-9', sectionId: 'conditional', type: 'multiple-choice', question: '___ I rich, I would buy a house.', translation: 'Were I rich, I would buy a house.', options: ['If', 'Had', 'Should', 'Were'], correctAnswer: 'Were', points: 10 },
      { id: 'inversion-10', sectionId: 'conditional', type: 'multiple-choice', question: '___ she called, tell her to wait.', translation: 'Should she call, tell her to wait.', options: ['If', 'Had', 'Should', 'Were'], correctAnswer: 'Should', points: 10 }
    ]
  },
  {
    id: 'conditional-past-perfect-1',
    title: 'Conditional with Past Perfect',
    description: 'If + past perfect',
    icon: '📅',
    exercises: [
      { id: 'pastperf-1', sectionId: 'conditional', type: 'multiple-choice', question: 'If I ___ the train, I would have been on time.', translation: 'If I had caught the train, I would have been on time.', options: ['catch', 'caught', 'had caught', 'have caught'], correctAnswer: 'had caught', points: 10 },
      { id: 'pastperf-2', sectionId: 'conditional', type: 'multiple-choice', question: 'If she ___ harder, she would have passed.', translation: 'If she had studied harder, she would have passed.', options: ['study', 'studied', 'had studied', 'have studied'], correctAnswer: 'had studied', points: 10 },
      { id: 'pastperf-3', sectionId: 'conditional', type: 'multiple-choice', question: 'If we ___ earlier, we would have missed it.', translation: 'If we had left earlier, we would have missed it.', options: ['leave', 'left', 'had left', 'have left'], correctAnswer: 'had left', points: 10 },
      { id: 'pastperf-4', sectionId: 'conditional', type: 'multiple-choice', question: 'If he ___ us, we would have won.', translation: 'If he had helped us, we would have won.', options: ['help', 'helped', 'had helped', 'have helped'], correctAnswer: 'had helped', points: 10 },
      { id: 'pastperf-5', sectionId: 'conditional', type: 'multiple-choice', question: 'If they ___ the truth, we would have believed.', translation: 'If they had told the truth, we would have believed.', options: ['tell', 'told', 'had told', 'have told'], correctAnswer: 'had told', points: 10 },
      { id: 'pastperf-6', sectionId: 'conditional', type: 'multiple-choice', question: 'If I ___ enough money, I would have traveled.', translation: 'If I had earned enough money, I would have traveled.', options: ['earn', 'earned', 'had earned', 'have earned'], correctAnswer: 'had earned', points: 10 },
      { id: 'pastperf-7', sectionId: 'conditional', type: 'multiple-choice', question: 'If she ___ earlier, she would have seen him.', translation: 'If she had arrived earlier, she would have seen him.', options: ['arrive', 'arrived', 'had arrived', 'have arrived'], correctAnswer: 'had arrived', points: 10 },
      { id: 'pastperf-8', sectionId: 'conditional', type: 'multiple-choice', question: 'If we ___ the hotel, we would have been comfortable.', translation: 'If we had booked the hotel, we would have been comfortable.', options: ['book', 'booked', 'had booked', 'have booked'], correctAnswer: 'had booked', points: 10 },
      { id: 'pastperf-9', sectionId: 'conditional', type: 'multiple-choice', question: 'If he ___ his keys, he would have entered.', translation: 'If he had remembered his keys, he would have entered.', options: ['remember', 'remembered', 'had remembered', 'have remembered'], correctAnswer: 'had remembered', points: 10 },
      { id: 'pastperf-10', sectionId: 'conditional', type: 'multiple-choice', question: 'If they ___ harder, they would have won.', translation: 'If they had tried harder, they would have won.', options: ['try', 'tried', 'had tried', 'have tried'], correctAnswer: 'had tried', points: 10 }
    ]
  },
  {
    id: 'conditional-wish-1',
    title: 'WISH + Past Simple',
    description: 'I wish I had...',
    icon: '💫',
    exercises: [
      { id: 'wish-1', sectionId: 'conditional', type: 'multiple-choice', question: 'I wish I ___ more money.', translation: 'I wish I had more money.', options: ['have', 'had', 'had had', 'have had'], correctAnswer: 'had', points: 10 },
      { id: 'wish-2', sectionId: 'conditional', type: 'multiple-choice', question: 'She wishes she ___ in Paris.', translation: 'She wishes she were in Paris.', options: ['is', 'was', 'were', 'be'], correctAnswer: 'were', points: 10 },
      { id: 'wish-3', sectionId: 'conditional', type: 'multiple-choice', question: 'I wish I ___ how to drive.', translation: 'I wish I knew how to drive.', options: ['know', 'knew', 'had known', 'knowing'], correctAnswer: 'knew', points: 10 },
      { id: 'wish-4', sectionId: 'conditional', type: 'multiple-choice', question: 'He wishes he ___ a better job.', translation: 'He wishes he had a better job.', options: ['have', 'had', 'has', 'having'], correctAnswer: 'had', points: 10 },
      { id: 'wish-5', sectionId: 'conditional', type: 'multiple-choice', question: 'They wish they ___ here now.', translation: 'They wish they were here now.', options: ['are', 'was', 'were', 'be'], correctAnswer: 'were', points: 10 },
      { id: 'wish-6', sectionId: 'conditional', type: 'multiple-choice', question: 'I wish I ___ younger.', translation: 'I wish I were younger.', options: ['am', 'was', 'were', 'be'], correctAnswer: 'were', points: 10 },
      { id: 'wish-7', sectionId: 'conditional', type: 'multiple-choice', question: 'She wishes she ___ the answer.', translation: 'She wishes she knew the answer.', options: ['know', 'knew', 'had known', 'knowing'], correctAnswer: 'knew', points: 10 },
      { id: 'wish-8', sectionId: 'conditional', type: 'multiple-choice', question: 'We wish we ___ more time.', translation: 'We wish we had more time.', options: ['have', 'had', 'had had', 'having'], correctAnswer: 'had', points: 10 },
      { id: 'wish-9', sectionId: 'conditional', type: 'multiple-choice', question: 'I wish I ___ fluent in English.', translation: 'I wish I were fluent in English.', options: ['am', 'was', 'were', 'be'], correctAnswer: 'were', points: 10 },
      { id: 'wish-10', sectionId: 'conditional', type: 'multiple-choice', question: 'They wish they ___ this before.', translation: 'They wish they knew this before.', options: ['know', 'knew', 'had known', 'knowing'], correctAnswer: 'knew', points: 10 }
    ]
  },
  {
    id: 'conditional-wish-past-1',
    title: 'WISH + Past Perfect',
    description: 'I wish I had...',
    icon: '💫',
    exercises: [
      { id: 'wishp-1', sectionId: 'conditional', type: 'multiple-choice', question: 'I wish I ___ studied harder.', translation: 'I wish I had studied harder.', options: ['studied', 'had studied', 'study', 'studying'], correctAnswer: 'had studied', points: 10 },
      { id: 'wishp-2', sectionId: 'conditional', type: 'multiple-choice', question: 'She wishes she ___ him.', translation: 'She wishes she had seen him.', options: ['see', 'saw', 'seen', 'had seen'], correctAnswer: 'had seen', points: 10 },
      { id: 'wishp-3', sectionId: 'conditional', type: 'multiple-choice', question: 'I wish I ___ that mistake.', translation: 'I wish I had made that mistake.', options: ['make', 'made', 'made', 'had made'], correctAnswer: 'had made', points: 10 },
      { id: 'wishp-4', sectionId: 'conditional', type: 'multiple-choice', question: 'He wishes he ___ her the truth.', translation: 'He wishes he had told her the truth.', options: ['tell', 'told', 'told', 'had told'], correctAnswer: 'had told', points: 10 },
      { id: 'wishp-5', sectionId: 'conditional', type: 'multiple-choice', question: 'They wish they ___ the party.', translation: 'They wish they had attended the party.', options: ['attend', 'attended', 'attended', 'had attended'], correctAnswer: 'had attended', points: 10 },
      { id: 'wishp-6', sectionId: 'conditional', type: 'multiple-choice', question: 'I wish I ___ that job.', translation: 'I wish I had taken that job.', options: ['take', 'took', 'taken', 'had taken'], correctAnswer: 'had taken', points: 10 },
      { id: 'wishp-7', sectionId: 'conditional', type: 'multiple-choice', question: 'She wishes she ___ more.', translation: 'She wishes she had tried more.', options: ['try', 'tried', 'tried', 'had tried'], correctAnswer: 'had tried', points: 10 },
      { id: 'wishp-8', sectionId: 'conditional', type: 'multiple-choice', question: 'We wish we ___ earlier.', translation: 'We wish we had woken up earlier.', options: ['wake', 'woke', 'woken', 'had woken'], correctAnswer: 'had woken', points: 10 },
      { id: 'wishp-9', sectionId: 'conditional', type: 'multiple-choice', question: 'I wish I ___ that book.', translation: 'I wish I had read that book.', options: ['read', 'read', 'read', 'had read'], correctAnswer: 'had read', points: 10 },
      { id: 'wishp-10', sectionId: 'conditional', type: 'multiple-choice', question: 'They wish they ___ us earlier.', translation: 'They wish they had told us earlier.', options: ['tell', 'told', 'told', 'had told'], correctAnswer: 'had told', points: 10 }
    ]
  },
  {
    id: 'conditional-suppose-1',
    title: 'SUPPOSED TO',
    description: 'Be supposed to',
    icon: '🤔',
    exercises: [
      { id: 'supp-1', sectionId: 'conditional', type: 'multiple-choice', question: 'He ___ be here at 9am.', translation: 'He is supposed to be here at 9am.', options: ['is supposed to', 'was supposed to', 'are supposed to', 'were supposed to'], correctAnswer: 'is supposed to', points: 10 },
      { id: 'supp-2', sectionId: 'conditional', type: 'multiple-choice', question: 'She ___ arrive yesterday.', translation: 'She was supposed to arrive yesterday.', options: ['is supposed to', 'was supposed to', 'are supposed to', 'were supposed to'], correctAnswer: 'was supposed to', points: 10 },
      { id: 'supp-3', sectionId: 'conditional', type: 'multiple-choice', question: 'They ___ help us.', translation: 'They are supposed to help us.', options: ['is supposed to', 'was supposed to', 'are supposed to', 'were supposed to'], correctAnswer: 'are supposed to', points: 10 },
      { id: 'supp-4', sectionId: 'conditional', type: 'multiple-choice', question: 'We ___ meet at 6pm.', translation: 'We were supposed to meet at 6pm.', options: ['is supposed to', 'was supposed to', 'are supposed to', 'were supposed to'], correctAnswer: 'were supposed to', points: 10 },
      { id: 'supp-5', sectionId: 'conditional', type: 'multiple-choice', question: 'You ___ study harder.', translation: 'You are supposed to study harder.', options: ['is supposed to', 'was supposed to', 'are supposed to', 'were supposed to'], correctAnswer: 'are supposed to', points: 10 },
      { id: 'supp-6', sectionId: 'conditional', type: 'multiple-choice', question: 'The train ___ come at 10am.', translation: 'The train was supposed to come at 10am.', options: ['is supposed to', 'was supposed to', 'are supposed to', 'were supposed to'], correctAnswer: 'was supposed to', points: 10 },
      { id: 'supp-7', sectionId: 'conditional', type: 'multiple-choice', question: 'I ___ be there.', translation: 'I am supposed to be there.', options: ['is supposed to', 'was supposed to', 'am supposed to', 'were supposed to'], correctAnswer: 'am supposed to', points: 10 },
      { id: 'supp-8', sectionId: 'conditional', type: 'multiple-choice', question: 'She ___ finish this today.', translation: 'She is supposed to finish this today.', options: ['is supposed to', 'was supposed to', 'are supposed to', 'were supposed to'], correctAnswer: 'is supposed to', points: 10 },
      { id: 'supp-9', sectionId: 'conditional', type: 'multiple-choice', question: 'We ___ submit the report.', translation: 'We were supposed to submit the report.', options: ['is supposed to', 'was supposed to', 'are supposed to', 'were supposed to'], correctAnswer: 'were supposed to', points: 10 },
      { id: 'supp-10', sectionId: 'conditional', type: 'multiple-choice', question: 'They ___ arrive tomorrow.', translation: 'They are supposed to arrive tomorrow.', options: ['is supposed to', 'was supposed to', 'are supposed to', 'were supposed to'], correctAnswer: 'are supposed to', points: 10 }
    ]
  },
  {
    id: 'conditional-would-rather-1',
    title: 'WOULD RATHER',
    description: 'Would rather',
    icon: '🤔',
    exercises: [
      { id: 'wouldrather-1', sectionId: 'conditional', type: 'multiple-choice', question: 'I ___ stay home than go out.', translation: 'I would rather stay home than go out.', options: ['would rather', 'would prefer', 'had better', 'would better'], correctAnswer: 'would rather', points: 10 },
      { id: 'wouldrather-2', sectionId: 'conditional', type: 'multiple-choice', question: 'She ___ coffee than tea.', translation: 'She would rather have coffee than tea.', options: ['would rather', 'would prefer', 'had better', 'would better'], correctAnswer: 'would rather', points: 10 },
      { id: 'wouldrather-3', sectionId: 'conditional', type: 'multiple-choice', question: 'He ___ work alone.', translation: 'He would rather work alone.', options: ['would rather', 'would prefer', 'had better', 'would better'], correctAnswer: 'would rather', points: 10 },
      { id: 'wouldrather-4', sectionId: 'conditional', type: 'multiple-choice', question: 'We ___ wait for later.', translation: 'We would rather wait for later.', options: ['would rather', 'would prefer', 'had better', 'would better'], correctAnswer: 'would rather', points: 10 },
      { id: 'wouldrather-5', sectionId: 'conditional', type: 'multiple-choice', question: 'They ___ stay silent.', translation: 'They would rather stay silent.', options: ['would rather', 'would prefer', 'had better', 'would better'], correctAnswer: 'would rather', points: 10 },
      { id: 'wouldrather-6', sectionId: 'conditional', type: 'multiple-choice', question: 'I ___ not say anything.', translation: 'I would rather not say anything.', options: ['would rather', 'would prefer', 'had better', 'would better'], correctAnswer: 'would rather', points: 10 },
      { id: 'wouldrather-7', sectionId: 'conditional', type: 'multiple-choice', question: 'You ___ come with us.', translation: 'You would rather come with us.', options: ['would rather', 'would prefer', 'had better', 'would better'], correctAnswer: 'would rather', points: 10 },
      { id: 'wouldrather-8', sectionId: 'conditional', type: 'multiple-choice', question: 'She ___ leave now.', translation: 'She would rather leave now.', options: ['would rather', 'would prefer', 'had better', 'would better'], correctAnswer: 'would rather', points: 10 },
      { id: 'wouldrather-9', sectionId: 'conditional', type: 'multiple-choice', question: 'We ___ try again.', translation: 'We would rather try again.', options: ['would rather', 'would prefer', 'had better', 'would better'], correctAnswer: 'would rather', points: 10 },
      { id: 'wouldrather-10', sectionId: 'conditional', type: 'multiple-choice', question: 'They ___ go home.', translation: 'They would rather go home.', options: ['would rather', 'would prefer', 'had better', 'would better'], correctAnswer: 'would rather', points: 10 }
    ]
  },
  {
    id: 'conditional-would-prefer-1',
    title: 'WOULD PREFER',
    description: 'Would prefer to',
    icon: '🤔',
    exercises: [
      { id: 'wouldpref-1', sectionId: 'conditional', type: 'multiple-choice', question: 'I ___ to stay home.', translation: 'I would prefer to stay home.', options: ['would prefer', 'would rather', 'had better', 'should'], correctAnswer: 'would prefer', points: 10 },
      { id: 'wouldpref-2', sectionId: 'conditional', type: 'multiple-choice', question: 'She ___ to work on Saturday.', translation: 'She would prefer to work on Saturday.', options: ['would prefer', 'would rather', 'had better', 'should'], correctAnswer: 'would prefer', points: 10 },
      { id: 'wouldpref-3', sectionId: 'conditional', type: 'multiple-choice', question: 'He ___ to travel by plane.', translation: 'He would prefer to travel by plane.', options: ['would prefer', 'would rather', 'had better', 'should'], correctAnswer: 'would prefer', points: 10 },
      { id: 'wouldpref-4', sectionId: 'conditional', type: 'multiple-choice', question: 'We ___ to meet early.', translation: 'We would prefer to meet early.', options: ['would prefer', 'would rather', 'had better', 'should'], correctAnswer: 'would prefer', points: 10 },
      { id: 'wouldpref-5', sectionId: 'conditional', type: 'multiple-choice', question: 'They ___ to eat out.', translation: 'They would prefer to eat out.', options: ['would prefer', 'would rather', 'had better', 'should'], correctAnswer: 'would prefer', points: 10 },
      { id: 'wouldpref-6', sectionId: 'conditional', type: 'multiple-choice', question: 'You ___ to study now.', translation: 'You would prefer to study now.', options: ['would prefer', 'would rather', 'had better', 'should'], correctAnswer: 'would prefer', points: 10 },
      { id: 'wouldpref-7', sectionId: 'conditional', type: 'multiple-choice', question: 'I ___ to read this book.', translation: 'I would prefer to read this book.', options: ['would prefer', 'would rather', 'had better', 'should'], correctAnswer: 'would prefer', points: 10 },
      { id: 'wouldpref-8', sectionId: 'conditional', type: 'multiple-choice', question: 'She ___ to call him.', translation: 'She would prefer to call him.', options: ['would prefer', 'would rather', 'had better', 'should'], correctAnswer: 'would prefer', points: 10 },
      { id: 'wouldpref-9', sectionId: 'conditional', type: 'multiple-choice', question: 'We ___ to wait here.', translation: 'We would prefer to wait here.', options: ['would prefer', 'would rather', 'had better', 'should'], correctAnswer: 'would prefer', points: 10 },
      { id: 'wouldpref-10', sectionId: 'conditional', type: 'multiple-choice', question: 'They ___ to join us.', translation: 'They would prefer to join us.', options: ['would prefer', 'would rather', 'had better', 'should'], correctAnswer: 'would prefer', points: 10 }
    ]
  },
  {
    id: 'conditional-had-better-1',
    title: 'HAD BETTER',
    description: 'Had better',
    icon: '⚠️',
    exercises: [
      { id: 'hadbett-1', sectionId: 'conditional', type: 'multiple-choice', question: 'You ___ go to the doctor.', translation: 'You had better go to the doctor.', options: ['had better', 'would better', 'should', 'ought to'], correctAnswer: 'had better', points: 10 },
      { id: 'hadbett-2', sectionId: 'conditional', type: 'multiple-choice', question: 'She ___ not be late.', translation: 'She had better not be late.', options: ['had better', 'would better', 'should', 'ought to'], correctAnswer: 'had better', points: 10 },
      { id: 'hadbett-3', sectionId: 'conditional', type: 'multiple-choice', question: 'We ___ leave now.', translation: 'We had better leave now.', options: ['had better', 'would better', 'should', 'ought to'], correctAnswer: 'had better', points: 10 },
      { id: 'hadbett-4', sectionId: 'conditional', type: 'multiple-choice', question: 'He ___ study harder.', translation: 'He had better study harder.', options: ['had better', 'would better', 'should', 'ought to'], correctAnswer: 'had better', points: 10 },
      { id: 'hadbett-5', sectionId: 'conditional', type: 'multiple-choice', question: 'I ___ be more careful.', translation: 'I had better be more careful.', options: ['had better', 'would better', 'should', 'ought to'], correctAnswer: 'had better', points: 10 },
      { id: 'hadbett-6', sectionId: 'conditional', type: 'multiple-choice', question: 'They ___ not forget.', translation: 'They had better not forget.', options: ['had better', 'would better', 'should', 'ought to'], correctAnswer: 'had better', points: 10 },
      { id: 'hadbett-7', sectionId: 'conditional', type: 'multiple-choice', question: 'You ___ call her.', translation: 'You had better call her.', options: ['had better', 'would better', 'should', 'ought to'], correctAnswer: 'had better', points: 10 },
      { id: 'hadbett-8', sectionId: 'conditional', type: 'multiple-choice', question: 'She ___ not go there.', translation: 'She had better not go there.', options: ['had better', 'would better', 'should', 'ought to'], correctAnswer: 'had better', points: 10 },
      { id: 'hadbett-9', sectionId: 'conditional', type: 'multiple-choice', question: 'We ___ prepare more.', translation: 'We had better prepare more.', options: ['had better', 'would better', 'should', 'ought to'], correctAnswer: 'had better', points: 10 },
      { id: 'hadbett-10', sectionId: 'conditional', type: 'multiple-choice', question: 'He ___ be on time.', translation: 'He had better be on time.', options: ['had better', 'would better', 'should', 'ought to'], correctAnswer: 'had better', points: 10 }
    ]
  },
  {
    id: 'conditional-unreal-1',
    title: 'Unreal Conditionals',
    description: 'Imaginary situations',
    icon: '🌙',
    exercises: [
      { id: 'unreal-1', sectionId: 'conditional', type: 'multiple-choice', question: 'If I ___ a bird, I would fly.', translation: 'If I were a bird, I would fly.', options: ['am', 'was', 'were', 'be'], correctAnswer: 'were', points: 10 },
      { id: 'unreal-2', sectionId: 'conditional', type: 'multiple-choice', question: 'If she ___ rich, she would buy a mansion.', translation: 'If she were rich, she would buy a mansion.', options: ['is', 'was', 'were', 'be'], correctAnswer: 'were', points: 10 },
      { id: 'unreal-3', sectionId: 'conditional', type: 'multiple-choice', question: 'If they ___ here, they would help.', translation: 'If they were here, they would help.', options: ['are', 'was', 'were', 'be'], correctAnswer: 'were', points: 10 },
      { id: 'unreal-4', sectionId: 'conditional', type: 'multiple-choice', question: 'If we ___ a car, we would travel more.', translation: 'If we had a car, we would travel more.', options: ['have', 'had', 'has', 'having'], correctAnswer: 'had', points: 10 },
      { id: 'unreal-5', sectionId: 'conditional', type: 'multiple-choice', question: 'If he ___ time, he would come.', translation: 'If he had time, he would come.', options: ['have', 'had', 'has', 'having'], correctAnswer: 'had', points: 10 },
      { id: 'unreal-6', sectionId: 'conditional', type: 'multiple-choice', question: 'If I ___ fluent, I would work abroad.', translation: 'If I were fluent, I would work abroad.', options: ['am', 'was', 'were', 'be'], correctAnswer: 'were', points: 10 },
      { id: 'unreal-7', sectionId: 'conditional', type: 'multiple-choice', question: 'If we ___ young again, we would dance.', translation: 'If we were young again, we would dance.', options: ['are', 'was', 'were', 'be'], correctAnswer: 'were', points: 10 },
      { id: 'unreal-8', sectionId: 'conditional', type: 'multiple-choice', question: 'If they ___ money, they would be happy.', translation: 'If they had money, they would be happy.', options: ['have', 'had', 'has', 'having'], correctAnswer: 'had', points: 10 },
      { id: 'unreal-9', sectionId: 'conditional', type: 'multiple-choice', question: 'If she ___ talent, she would be famous.', translation: 'If she had talent, she would be famous.', options: ['have', 'had', 'has', 'having'], correctAnswer: 'had', points: 10 },
      { id: 'unreal-10', sectionId: 'conditional', type: 'multiple-choice', question: 'If I ___ superpowers, I would save the world.', translation: 'If I had superpowers, I would save the world.', options: ['have', 'had', 'has', 'having'], correctAnswer: 'had', points: 10 }
    ]
  },
  {
    id: 'conditional-omission-1',
    title: 'IF Omission',
    description: 'Omitting if in conditionals',
    icon: '📝',
    exercises: [
      { id: 'omit-1', sectionId: 'conditional', type: 'multiple-choice', question: '___ were rich, I would travel.', translation: 'Were I rich, I would travel.', options: ['If', 'Were', 'Had', 'Should'], correctAnswer: 'Were', points: 10 },
      { id: 'omit-2', sectionId: 'conditional', type: 'multiple-choice', question: '___ had money, I would buy it.', translation: 'Had I money, I would buy it.', options: ['If', 'Were', 'Had', 'Should'], correctAnswer: 'Had', points: 10 },
      { id: 'omit-3', sectionId: 'conditional', type: 'multiple-choice', question: '___ should you need help, call me.', translation: 'Should you need help, call me.', options: ['If', 'Were', 'Had', 'Should'], correctAnswer: 'Should', points: 10 },
      { id: 'omit-4', sectionId: 'conditional', type: 'multiple-choice', question: '___ were you in my shoes, what would you do?', translation: 'Were you in my shoes, what would you do?', options: ['If', 'Were', 'Had', 'Should'], correctAnswer: 'Were', points: 10 },
      { id: 'omit-5', sectionId: 'conditional', type: 'multiple-choice', question: '___ had she seen him, she would have spoken.', translation: 'Had she seen him, she would have spoken.', options: ['If', 'Were', 'Had', 'Should'], correctAnswer: 'Had', points: 10 },
      { id: 'omit-6', sectionId: 'conditional', type: 'multiple-choice', question: '___ should they arrive, welcome them.', translation: 'Should they arrive, welcome them.', options: ['If', 'Were', 'Had', 'Should'], correctAnswer: 'Should', points: 10 },
      { id: 'omit-7', sectionId: 'conditional', type: 'multiple-choice', question: '___ were we to win, we would celebrate.', translation: 'Were we to win, we would celebrate.', options: ['If', 'Were', 'Had', 'Should'], correctAnswer: 'Were', points: 10 },
      { id: 'omit-8', sectionId: 'conditional', type: 'multiple-choice', question: '___ had it not rained, we would have gone.', translation: 'Had it not rained, we would have gone.', options: ['If', 'Were', 'Had', 'Should'], correctAnswer: 'Had', points: 10 },
      { id: 'omit-9', sectionId: 'conditional', type: 'multiple-choice', question: '___ should you be late, call me.', translation: 'Should you be late, call me.', options: ['If', 'Were', 'Had', 'Should'], correctAnswer: 'Should', points: 10 },
      { id: 'omit-10', sectionId: 'conditional', type: 'multiple-choice', question: '___ were she to agree, we would start.', translation: 'Were she to agree, we would start.', options: ['If', 'Were', 'Had', 'Should'], correctAnswer: 'Were', points: 10 }
    ]
  },
  {
    id: 'conditional-continuous-1',
    title: 'Conditional Continuous',
    description: 'Would be doing, would have been doing',
    icon: '⏳',
    exercises: [
      { id: 'condcont-1', sectionId: 'conditional', type: 'multiple-choice', question: 'If I were rich, I ___ a big house.', translation: 'If I were rich, I would be buying a big house.', options: ['buy', 'be buying', 'have bought', 'buying'], correctAnswer: 'be buying', points: 10 },
      { id: 'condcont-2', sectionId: 'conditional', type: 'multiple-choice', question: 'If she studied, she ___ now.', translation: 'If she studied, she would be sleeping now.', options: ['sleep', 'be sleeping', 'have slept', 'sleeping'], correctAnswer: 'be sleeping', points: 10 },
      { id: 'condcont-3', sectionId: 'conditional', type: 'multiple-choice', question: 'If they worked, they ___ today.', translation: 'If they worked, they would be working today.', options: ['work', 'be working', 'have worked', 'working'], correctAnswer: 'be working', points: 10 },
      { id: 'condcont-4', sectionId: 'conditional', type: 'multiple-choice', question: 'If he waited, he ___ for us.', translation: 'If he waited, he would be waiting for us.', options: ['wait', 'be waiting', 'have waited', 'waiting'], correctAnswer: 'be waiting', points: 10 },
      { id: 'condcont-5', sectionId: 'conditional', type: 'multiple-choice', question: 'If we left early, we ___ now.', translation: 'If we left early, we would be driving now.', options: ['drive', 'be driving', 'have driven', 'driving'], correctAnswer: 'be driving', points: 10 },
      { id: 'condcont-6', sectionId: 'conditional', type: 'multiple-choice', question: 'If she had tried, she ___ hard.', translation: 'If she had tried, she would have been trying hard.', options: ['try', 'be trying', 'have been trying', 'trying'], correctAnswer: 'have been trying', points: 10 },
      { id: 'condcont-7', sectionId: 'conditional', type: 'multiple-choice', question: 'If they had arrived, they ___ for us.', translation: 'If they had arrived, they would have been waiting for us.', options: ['wait', 'be waiting', 'have been waiting', 'waiting'], correctAnswer: 'have been waiting', points: 10 },
      { id: 'condcont-8', sectionId: 'conditional', type: 'multiple-choice', question: 'If we had trained, we ___ better.', translation: 'If we had trained, we would have been playing better.', options: ['play', 'be playing', 'have been playing', 'playing'], correctAnswer: 'have been playing', points: 10 },
      { id: 'condcont-9', sectionId: 'conditional', type: 'multiple-choice', question: 'If he had known, he ___ us.', translation: 'If he had known, he would have been helping us.', options: ['help', 'be helping', 'have been helping', 'helping'], correctAnswer: 'have been helping', points: 10 },
      { id: 'condcont-10', sectionId: 'conditional', type: 'multiple-choice', question: 'If she had stayed, she ___ here.', translation: 'If she had stayed, she would have been sitting here.', options: ['sit', 'be sitting', 'have been sitting', 'sitting'], correctAnswer: 'have been sitting', points: 10 }
    ]
  },
  {
    id: 'conditional-in-case-1',
    title: 'IN CASE vs IF',
    description: 'In case vs if',
    icon: '📋',
    exercises: [
      { id: 'incase-1', sectionId: 'conditional', type: 'multiple-choice', question: 'Take an umbrella ___ it rains.', translation: 'Take an umbrella in case it rains.', options: ['in case', 'if', 'unless', 'when'], correctAnswer: 'in case', points: 10 },
      { id: 'incase-2', sectionId: 'conditional', type: 'multiple-choice', question: 'I will call you ___ I am late.', translation: 'I will call you if I am late.', options: ['in case', 'if', 'unless', 'when'], correctAnswer: 'if', points: 10 },
      { id: 'incase-3', sectionId: 'conditional', type: 'multiple-choice', question: 'Study now ___ you fail.', translation: 'Study now in case you fail.', options: ['in case', 'if', 'unless', 'when'], correctAnswer: 'in case', points: 10 },
      { id: 'incase-4', sectionId: 'conditional', type: 'multiple-choice', question: 'Tell me ___ you need help.', translation: 'Tell me if you need help.', options: ['in case', 'if', 'unless', 'when'], correctAnswer: 'if', points: 10 },
      { id: 'incase-5', sectionId: 'conditional', type: 'multiple-choice', question: 'Bring a map ___ you get lost.', translation: 'Bring a map in case you get lost.', options: ['in case', 'if', 'unless', 'when'], correctAnswer: 'in case', points: 10 },
      { id: 'incase-6', sectionId: 'conditional', type: 'multiple-choice', question: 'Call me ___ you arrive.', translation: 'Call me when you arrive.', options: ['in case', 'if', 'unless', 'when'], correctAnswer: 'when', points: 10 },
      { id: 'incase-7', sectionId: 'conditional', type: 'multiple-choice', question: 'Save money ___ you need it.', translation: 'Save money in case you need it.', options: ['in case', 'if', 'unless', 'when'], correctAnswer: 'in case', points: 10 },
      { id: 'incase-8', sectionId: 'conditional', type: 'multiple-choice', question: 'I will come ___ you invite me.', translation: 'I will come if you invite me.', options: ['in case', 'if', 'unless', 'when'], correctAnswer: 'if', points: 10 },
      { id: 'incase-9', sectionId: 'conditional', type: 'multiple-choice', question: 'Pack warm clothes ___ it is cold.', translation: 'Pack warm clothes in case it is cold.', options: ['in case', 'if', 'unless', 'when'], correctAnswer: 'in case', points: 10 },
      { id: 'incase-10', sectionId: 'conditional', type: 'multiple-choice', question: 'We will play ___ it stops raining.', translation: 'We will play if it stops raining.', options: ['in case', 'if', 'unless', 'when'], correctAnswer: 'if', points: 10 }
    ]
  },
  {
    id: 'conditional-provided-1',
    title: 'PROVIDED THAT / AS LONG AS',
    description: 'Provided that, as long as',
    icon: '📋',
    exercises: [
      { id: 'provided-1', sectionId: 'conditional', type: 'multiple-choice', question: 'You can go ___ you finish work.', translation: 'You can go provided that you finish work.', options: ['provided that', 'as long as', 'in case', 'if'], correctAnswer: 'provided that', points: 10 },
      { id: 'provided-2', sectionId: 'conditional', type: 'multiple-choice', question: 'I will stay ___ you need me.', translation: 'I will stay as long as you need me.', options: ['provided that', 'as long as', 'in case', 'if'], correctAnswer: 'as long as', points: 10 },
      { id: 'provided-3', sectionId: 'conditional', type: 'multiple-choice', question: 'You may enter ___ you have a ticket.', translation: 'You may enter provided that you have a ticket.', options: ['provided that', 'as long as', 'in case', 'if'], correctAnswer: 'provided that', points: 10 },
      { id: 'provided-4', sectionId: 'conditional', type: 'multiple-choice', question: 'We will wait ___ you are ready.', translation: 'We will wait as long as you are ready.', options: ['provided that', 'as long as', 'in case', 'if'], correctAnswer: 'as long as', points: 10 },
      { id: 'provided-5', sectionId: 'conditional', type: 'multiple-choice', question: 'She can join ___ she behaves.', translation: 'She can join provided that she behaves.', options: ['provided that', 'as long as', 'in case', 'if'], correctAnswer: 'provided that', points: 10 },
      { id: 'provided-6', sectionId: 'conditional', type: 'multiple-choice', question: 'I will help ___ you try hard.', translation: 'I will help as long as you try hard.', options: ['provided that', 'as long as', 'in case', 'if'], correctAnswer: 'as long as', points: 10 },
      { id: 'provided-7', sectionId: 'conditional', type: 'multiple-choice', question: 'You can use my car ___ you drive carefully.', translation: 'You can use my car provided that you drive carefully.', options: ['provided that', 'as long as', 'in case', 'if'], correctAnswer: 'provided that', points: 10 },
      { id: 'provided-8', sectionId: 'conditional', type: 'multiple-choice', question: 'We are friends ___ we trust each other.', translation: 'We are friends as long as we trust each other.', options: ['provided that', 'as long as', 'in case', 'if'], correctAnswer: 'as long as', points: 10 },
      { id: 'provided-9', sectionId: 'conditional', type: 'multiple-choice', question: 'The deal works ___ both agree.', translation: 'The deal works provided that both agree.', options: ['provided that', 'as long as', 'in case', 'if'], correctAnswer: 'provided that', points: 10 },
      { id: 'provided-10', sectionId: 'conditional', type: 'multiple-choice', question: 'I will support you ___ you are honest.', translation: 'I will support you as long as you are honest.', options: ['provided that', 'as long as', 'in case', 'if'], correctAnswer: 'as long as', points: 10 }
    ]
  },
  {
    id: 'conditional-lest-1',
    title: 'LEST / FOR FEAR THAT',
    description: 'Lest, for fear that',
    icon: '😰',
    exercises: [
      { id: 'lest-1', sectionId: 'conditional', type: 'multiple-choice', question: 'She studied hard ___ she would fail.', translation: 'She studied hard lest she would fail.', options: ['lest', 'for fear that', 'unless', 'if'], correctAnswer: 'lest', points: 10 },
      { id: 'lest-2', sectionId: 'conditional', type: 'multiple-choice', question: 'He ran ___ he would be late.', translation: 'He ran for fear that he would be late.', options: ['lest', 'for fear that', 'unless', 'if'], correctAnswer: 'for fear that', points: 10 },
      { id: 'lest-3', sectionId: 'conditional', type: 'multiple-choice', question: 'They spoke quietly ___ they would be heard.', translation: 'They spoke quietly lest they would be heard.', options: ['lest', 'for fear that', 'unless', 'if'], correctAnswer: 'lest', points: 10 },
      { id: 'lest-4', sectionId: 'conditional', type: 'multiple-choice', question: 'She locked the door ___ someone would enter.', translation: 'She locked the door for fear that someone would enter.', options: ['lest', 'for fear that', 'unless', 'if'], correctAnswer: 'for fear that', points: 10 },
      { id: 'lest-5', sectionId: 'conditional', type: 'multiple-choice', question: 'He checked twice ___ he made a mistake.', translation: 'He checked twice lest he made a mistake.', options: ['lest', 'for fear that', 'unless', 'if'], correctAnswer: 'lest', points: 10 },
      { id: 'lest-6', sectionId: 'conditional', type: 'multiple-choice', question: 'They saved money ___ they would need it.', translation: 'They saved money for fear that they would need it.', options: ['lest', 'for fear that', 'unless', 'if'], correctAnswer: 'for fear that', points: 10 },
      { id: 'lest-7', sectionId: 'conditional', type: 'multiple-choice', question: 'She kept silent ___ she would say something wrong.', translation: 'She kept silent lest she would say something wrong.', options: ['lest', 'for fear that', 'unless', 'if'], correctAnswer: 'lest', points: 10 },
      { id: 'lest-8', sectionId: 'conditional', type: 'multiple-choice', question: 'He trained hard ___ he would lose.', translation: 'He trained hard for fear that he would lose.', options: ['lest', 'for fear that', 'unless', 'if'], correctAnswer: 'for fear that', points: 10 },
      { id: 'lest-9', sectionId: 'conditional', type: 'multiple-choice', question: 'They arrived early ___ they would be late.', translation: 'They arrived early lest they would be late.', options: ['lest', 'for fear that', 'unless', 'if'], correctAnswer: 'lest', points: 10 },
      { id: 'lest-10', sectionId: 'conditional', type: 'multiple-choice', question: 'She packed light ___ it would be heavy.', translation: 'She packed light for fear that it would be heavy.', options: ['lest', 'for fear that', 'unless', 'if'], correctAnswer: 'for fear that', points: 10 }
    ]
  },
  {
    id: 'conditional-without-1',
    title: 'WITHOUT / BUT FOR',
    description: 'Without, but for',
    icon: '❌',
    exercises: [
      { id: 'without-1', sectionId: 'conditional', type: 'multiple-choice', question: '___ your help, I would have failed.', translation: 'Without your help, I would have failed.', options: ['Without', 'But for', 'If not', 'Without the'], correctAnswer: 'Without', points: 10 },
      { id: 'without-2', sectionId: 'conditional', type: 'multiple-choice', question: '___ him, we would be lost.', translation: 'But for him, we would be lost.', options: ['Without', 'But for', 'If not', 'Without the'], correctAnswer: 'But for', points: 10 },
      { id: 'without-3', sectionId: 'conditional', type: 'multiple-choice', question: '___ her support, I would quit.', translation: 'Without her support, I would quit.', options: ['Without', 'But for', 'If not', 'Without the'], correctAnswer: 'Without', points: 10 },
      { id: 'without-4', sectionId: 'conditional', type: 'multiple-choice', question: '___ the rain, we would have gone.', translation: 'But for the rain, we would have gone.', options: ['Without', 'But for', 'If not', 'Without the'], correctAnswer: 'But for', points: 10 },
      { id: 'without-5', sectionId: 'conditional', type: 'multiple-choice', question: '___ money, we cannot travel.', translation: 'Without money, we cannot travel.', options: ['Without', 'But for', 'If not', 'Without the'], correctAnswer: 'Without', points: 10 },
      { id: 'without-6', sectionId: 'conditional', type: 'multiple-choice', question: '___ his advice, I would have made a mistake.', translation: 'Without his advice, I would have made a mistake.', options: ['Without', 'But for', 'If not', 'Without the'], correctAnswer: 'Without', points: 10 },
      { id: 'without-7', sectionId: 'conditional', type: 'multiple-choice', question: '___ luck, we would have lost.', translation: 'But for luck, we would have lost.', options: ['Without', 'But for', 'If not', 'Without the'], correctAnswer: 'But for', points: 10 },
      { id: 'without-8', sectionId: 'conditional', type: 'multiple-choice', question: '___ your support, we cannot win.', translation: 'Without your support, we cannot win.', options: ['Without', 'But for', 'If not', 'Without the'], correctAnswer: 'Without', points: 10 },
      { id: 'without-9', sectionId: 'conditional', type: 'multiple-choice', question: '___ the teacher, I would not learn.', translation: 'Without the teacher, I would not learn.', options: ['Without', 'But for', 'If not', 'Without the'], correctAnswer: 'Without', points: 10 },
      { id: 'without-10', sectionId: 'conditional', type: 'multiple-choice', question: '___ their help, we would have failed.', translation: 'But for their help, we would have failed.', options: ['Without', 'But for', 'If not', 'Without the'], correctAnswer: 'But for', points: 10 }
    ]
  },
  {
    id: 'conditional-were-to-1',
    title: 'WERE TO',
    description: 'Were to in conditionals',
    icon: '📝',
    exercises: [
      { id: 'wereto-1', sectionId: 'conditional', type: 'multiple-choice', question: '___ it to rain, we would cancel.', translation: 'Were it to rain, we would cancel.', options: ['If', 'Were', 'Should', 'Had'], correctAnswer: 'Were', points: 10 },
      { id: 'wereto-2', sectionId: 'conditional', type: 'multiple-choice', question: '___ he to call, tell him to wait.', translation: 'Were he to call, tell him to wait.', options: ['If', 'Were', 'Should', 'Had'], correctAnswer: 'Were', points: 10 },
      { id: 'wereto-3', sectionId: 'conditional', type: 'multiple-choice', question: '___ we to lose, we would try again.', translation: 'Were we to lose, we would try again.', options: ['If', 'Were', 'Should', 'Had'], correctAnswer: 'Were', points: 10 },
      { id: 'wereto-4', sectionId: 'conditional', type: 'multiple-choice', question: '___ she to fail, she would be sad.', translation: 'Were she to fail, she would be sad.', options: ['If', 'Were', 'Should', 'Had'], correctAnswer: 'Were', points: 10 },
      { id: 'wereto-5', sectionId: 'conditional', type: 'multiple-choice', question: '___ they to arrive, welcome them.', translation: 'Were they to arrive, welcome them.', options: ['If', 'Were', 'Should', 'Had'], correctAnswer: 'Were', points: 10 },
      { id: 'wereto-6', sectionId: 'conditional', type: 'multiple-choice', question: '___ it to be hot, we would go to the pool.', translation: 'Were it to be hot, we would go to the pool.', options: ['If', 'Were', 'Should', 'Had'], correctAnswer: 'Were', points: 10 },
      { id: 'wereto-7', sectionId: 'conditional', type: 'multiple-choice', question: '___ you to need help, call me.', translation: 'Were you to need help, call me.', options: ['If', 'Were', 'Should', 'Had'], correctAnswer: 'Were', points: 10 },
      { id: 'wereto-8', sectionId: 'conditional', type: 'multiple-choice', question: '___ he to be late, we would wait.', translation: 'Were he to be late, we would wait.', options: ['If', 'Were', 'Should', 'Had'], correctAnswer: 'Were', points: 10 },
      { id: 'wereto-9', sectionId: 'conditional', type: 'multiple-choice', question: '___ we to win, we would celebrate.', translation: 'Were we to win, we would celebrate.', options: ['If', 'Were', 'Should', 'Had'], correctAnswer: 'Were', points: 10 },
      { id: 'wereto-10', sectionId: 'conditional', type: 'multiple-choice', question: '___ it to snow, school would close.', translation: 'Were it to snow, school would close.', options: ['If', 'Were', 'Should', 'Had'], correctAnswer: 'Were', points: 10 }
    ]
  },
  {
    id: 'conditional-summary-1',
    title: 'Conditional Summary',
    description: 'Review all conditionals',
    icon: '📝',
    exercises: [
      { id: 'condsum-1', sectionId: 'conditional', type: 'multiple-choice', question: 'If water ___ , it freezes.', translation: 'If water freezes, it freezes.', options: ['freezes', 'froze', 'will freeze', 'freeze'], correctAnswer: 'freezes', points: 10 },
      { id: 'condsum-2', sectionId: 'conditional', type: 'multiple-choice', question: 'If I ___ rich, I would travel.', translation: 'If I were rich, I would travel.', options: ['am', 'was', 'were', 'be'], correctAnswer: 'were', points: 10 },
      { id: 'condsum-3', sectionId: 'conditional', type: 'multiple-choice', question: 'If she ___ harder, she would have passed.', translation: 'If she had studied harder, she would have passed.', options: ['studied', 'had studied', 'study', 'studies'], correctAnswer: 'had studied', points: 10 },
      { id: 'condsum-4', sectionId: 'conditional', type: 'multiple-choice', question: 'If it rains, I ___ stay home.', translation: 'If it rains, I will stay home.', options: ['will', 'would', 'can', 'should'], correctAnswer: 'will', points: 10 },
      { id: 'condsum-5', sectionId: 'conditional', type: 'multiple-choice', question: 'I wish I ___ more money.', translation: 'I wish I had more money.', options: ['have', 'had', 'have had', 'having'], correctAnswer: 'had', points: 10 },
      { id: 'condsum-6', sectionId: 'conditional', type: 'multiple-choice', question: '___ it rains, I will not go.', translation: 'Unless it rains, I will not go.', options: ['If', 'Unless', 'When', 'After'], correctAnswer: 'Unless', points: 10 },
      { id: 'condsum-7', sectionId: 'conditional', type: 'multiple-choice', question: 'If I ___ you, I would apologize.', translation: 'If I were you, I would apologize.', options: ['am', 'was', 'were', 'be'], correctAnswer: 'were', points: 10 },
      { id: 'condsum-8', sectionId: 'conditional', type: 'multiple-choice', question: 'If he ___ earlier, he would not be late.', translation: 'If he had woken earlier, he would not be late.', options: ['woke', 'had woken', 'wakes', 'wake'], correctAnswer: 'had woken', points: 10 },
      { id: 'condsum-9', sectionId: 'conditional', type: 'multiple-choice', question: '___ you need help, call me.', translation: 'Should you need help, call me.', options: ['If', 'Should', 'Had', 'Were'], correctAnswer: 'Should', points: 10 },
      { id: 'condsum-10', sectionId: 'conditional', type: 'multiple-choice', question: 'I would have come ___ I knew.', translation: 'I would have come if I had known.', options: ['if', 'unless', 'provided', 'because'], correctAnswer: 'if', points: 10 }
    ]
  }
];

export const modalVerbsExercisePacks: ExercisePack[] = [
  {
    id: 'can-could-1',
    title: 'Can and Could',
    description: 'Ability and possibility',
    icon: '💪',
    exercises: [
      { id: 'cc-ex1', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ swim very well.', translation: 'She can swim very well.', options: ['can', 'could', 'might', 'must'], correctAnswer: 'can', points: 10 },
      { id: 'cc-ex2', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ you help me?', translation: 'Could you help me?', options: ['Can', 'Could', 'Would', 'Should'], correctAnswer: 'Could', points: 10 }
    ]
  },
  {
    id: 'may-might-1',
    title: 'May and Might',
    description: 'Possibility',
    icon: '🔮',
    exercises: [
      { id: 'mm-ex1', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'It ___ rain later.', translation: 'It might rain later.', options: ['can', 'could', 'may', 'must'], correctAnswer: 'may', points: 10 },
      { id: 'mm-ex2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ be at home.', translation: 'She might be at home.', options: ['can', 'could', 'may', 'might'], correctAnswer: 'might', points: 10 }
    ]
  },
  {
    id: 'modal-ability-1',
    title: 'CAN - Ability',
    description: 'Ability in present',
    icon: '💪',
    exercises: [
      { id: 'mab-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ swim very well.', translation: 'She can swim very well.', options: ['can', 'could', 'may', 'might'], correctAnswer: 'can', points: 10 },
      { id: 'mab-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ speak three languages.', translation: 'He can speak three languages.', options: ['can', 'could', 'may', 'might'], correctAnswer: 'can', points: 10 },
      { id: 'mab-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ ride a bike.', translation: 'I can ride a bike.', options: ['can', 'could', 'may', 'might'], correctAnswer: 'can', points: 10 },
      { id: 'mab-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ play the piano.', translation: 'They can play the piano.', options: ['can', 'could', 'may', 'might'], correctAnswer: 'can', points: 10 },
      { id: 'mab-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ solve this problem.', translation: 'We can solve this problem.', options: ['can', 'could', 'may', 'might'], correctAnswer: 'can', points: 10 },
      { id: 'mab-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ type fast.', translation: 'She can type fast.', options: ['can', 'could', 'may', 'might'], correctAnswer: 'can', points: 10 },
      { id: 'mab-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ cook delicious meals.', translation: 'He can cook delicious meals.', options: ['can', 'could', 'may', 'might'], correctAnswer: 'can', points: 10 },
      { id: 'mab-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ understand Portuguese.', translation: 'I can understand Portuguese.', options: ['can', 'could', 'may', 'might'], correctAnswer: 'can', points: 10 },
      { id: 'mab-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ run fast.', translation: 'They can run fast.', options: ['can', 'could', 'may', 'might'], correctAnswer: 'can', points: 10 },
      { id: 'mab-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ do it yourself.', translation: 'You can do it yourself.', options: ['can', 'could', 'may', 'might'], correctAnswer: 'can', points: 10 }
    ]
  },
  {
    id: 'modal-past-ability-1',
    title: 'COULD - Past Ability',
    description: 'Ability in past',
    icon: '🔙',
    exercises: [
      { id: 'mpab-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ swim when she was 5.', translation: 'She could swim when she was 5.', options: ['can', 'could', 'might', 'must'], correctAnswer: 'could', points: 10 },
      { id: 'mpab-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ speak English fluently.', translation: 'He could speak English fluently.', options: ['can', 'could', 'might', 'must'], correctAnswer: 'could', points: 10 },
      { id: 'mpab-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ ride a horse before.', translation: 'I could ride a horse before.', options: ['can', 'could', 'might', 'must'], correctAnswer: 'could', points: 10 },
      { id: 'mpab-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ come to the party.', translation: 'They could come to the party.', options: ['can', 'could', 'might', 'must'], correctAnswer: 'could', points: 10 },
      { id: 'mpab-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ see the movie.', translation: 'We could see the movie.', options: ['can', 'could', 'might', 'must'], correctAnswer: 'could', points: 10 },
      { id: 'mpab-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ finish the work.', translation: 'She could finish the work.', options: ['can', 'could', 'might', 'must'], correctAnswer: 'could', points: 10 },
      { id: 'mpab-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ play tennis well.', translation: 'He could play tennis well.', options: ['can', 'could', 'might', 'must'], correctAnswer: 'could', points: 10 },
      { id: 'mpab-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ remember that day.', translation: 'I could remember that day.', options: ['can', 'could', 'might', 'must'], correctAnswer: 'could', points: 10 },
      { id: 'mpab-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ travel alone.', translation: 'They could travel alone.', options: ['can', 'could', 'might', 'must'], correctAnswer: 'could', points: 10 },
      { id: 'mpab-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ see the sunset.', translation: 'You could see the sunset.', options: ['can', 'could', 'might', 'must'], correctAnswer: 'could', points: 10 }
    ]
  },
  {
    id: 'modal-permission-1',
    title: 'CAN/COULD - Permission',
    description: 'Asking and giving permission',
    icon: '🙋',
    exercises: [
      { id: 'mp-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ I use your phone?', translation: 'Can I use your phone?', options: ['Can', 'Could', 'May', 'Should'], correctAnswer: 'Can', points: 10 },
      { id: 'mp-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ I open the window?', translation: 'May I open the window?', options: ['Can', 'Could', 'May', 'Should'], correctAnswer: 'May', points: 10 },
      { id: 'mp-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ you help me?', translation: 'Could you help me?', options: ['Can', 'Could', 'Would', 'Will'], correctAnswer: 'Could', points: 10 },
      { id: 'mp-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ come in.', translation: 'You can come in.', options: ['can', 'could', 'may', 'might'], correctAnswer: 'can', points: 10 },
      { id: 'mp-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ leave early.', translation: 'She may leave early.', options: ['can', 'could', 'may', 'might'], correctAnswer: 'may', points: 10 },
      { id: 'mp-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ I sit here?', translation: 'Could I sit here?', options: ['Can', 'Could', 'May', 'Should'], correctAnswer: 'Could', points: 10 },
      { id: 'mp-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ borrow my book.', translation: 'You could borrow my book.', options: ['can', 'could', 'may', 'might'], correctAnswer: 'could', points: 10 },
      { id: 'mp-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ we go now?', translation: 'May we go now?', options: ['Can', 'Could', 'May', 'Should'], correctAnswer: 'May', points: 10 },
      { id: 'mp-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ use my computer.', translation: 'He can use my computer.', options: ['can', 'could', 'may', 'might'], correctAnswer: 'can', points: 10 },
      { id: 'mp-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ I ask a question?', translation: 'May I ask a question?', options: ['Can', 'Could', 'May', 'Should'], correctAnswer: 'May', points: 10 }
    ]
  },
  {
    id: 'modal-possibility-1',
    title: 'MAY/MIGHT - Possibility',
    description: 'Expressing possibility',
    icon: '🔮',
    exercises: [
      { id: 'mpos-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'It ___ rain later.', translation: 'It might rain later.', options: ['may', 'might', 'can', 'could'], correctAnswer: 'might', points: 10 },
      { id: 'mpos-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ be at home.', translation: 'She may be at home.', options: ['may', 'might', 'can', 'could'], correctAnswer: 'may', points: 10 },
      { id: 'mpos-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ come to the party.', translation: 'He might come to the party.', options: ['may', 'might', 'can', 'could'], correctAnswer: 'might', points: 10 },
      { id: 'mpos-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ know the answer.', translation: 'They may know the answer.', options: ['may', 'might', 'can', 'could'], correctAnswer: 'may', points: 10 },
      { id: 'mpos-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'It ___ be true.', translation: 'It might be true.', options: ['may', 'might', 'can', 'could'], correctAnswer: 'might', points: 10 },
      { id: 'mpos-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ have forgotten.', translation: 'She may have forgotten.', options: ['may', 'might', 'can', 'could'], correctAnswer: 'may', points: 10 },
      { id: 'mpos-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ be working late.', translation: 'He might be working late.', options: ['may', 'might', 'can', 'could'], correctAnswer: 'might', points: 10 },
      { id: 'mpos-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'It ___ take time.', translation: 'It may take time.', options: ['may', 'might', 'can', 'could'], correctAnswer: 'may', points: 10 },
      { id: 'mpos-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ have left.', translation: 'They might have left.', options: ['may', 'might', 'can', 'could'], correctAnswer: 'might', points: 10 },
      { id: 'mpos-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ need help.', translation: 'We may need help.', options: ['may', 'might', 'can', 'could'], correctAnswer: 'may', points: 10 }
    ]
  },
  {
    id: 'modal-probability-1',
    title: 'MUST/HAVE TO - Probability',
    description: 'Strong probability',
    icon: '🎯',
    exercises: [
      { id: 'mprob-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ be at home. She is not answering.', translation: 'She must be at home. She is not answering.', options: ['must', 'may', 'might', 'can'], correctAnswer: 'must', points: 10 },
      { id: 'mprob-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ be tired. He is sleeping.', translation: 'He must be tired. He is sleeping.', options: ['must', 'may', 'might', 'can'], correctAnswer: 'must', points: 10 },
      { id: 'mprob-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'It ___ be late. The sun is setting.', translation: 'It must be late. The sun is setting.', options: ['must', 'may', 'might', 'can'], correctAnswer: 'must', points: 10 },
      { id: 'mprob-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ have money. They are traveling.', translation: 'They must have money. They are traveling.', options: ['must', 'may', 'might', 'can'], correctAnswer: 'must', points: 10 },
      { id: 'mprob-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ be joking!', translation: 'You must be joking!', options: ['must', 'may', 'might', 'can'], correctAnswer: 'must', points: 10 },
      { id: 'mprob-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ have a car. She drives every day.', translation: 'She has to have a car. She drives every day.', options: ['must', 'have to', 'should', 'could'], correctAnswer: 'have to', points: 10 },
      { id: 'mprob-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ work on Saturdays.', translation: 'He has to work on Saturdays.', options: ['must', 'have to', 'should', 'could'], correctAnswer: 'have to', points: 10 },
      { id: 'mprob-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ pay the bills.', translation: 'I have to pay the bills.', options: ['must', 'have to', 'should', 'could'], correctAnswer: 'have to', points: 10 },
      { id: 'mprob-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ study for the exam.', translation: 'We have to study for the exam.', options: ['must', 'have to', 'should', 'could'], correctAnswer: 'have to', points: 10 },
      { id: 'mprob-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ be at the meeting.', translation: 'They have to be at the meeting.', options: ['must', 'have to', 'should', 'could'], correctAnswer: 'have to', points: 10 }
    ]
  },
  {
    id: 'modal-obligation-1',
    title: 'MUST - Obligation',
    description: 'Strong obligation',
    icon: '⚠️',
    exercises: [
      { id: 'mobl-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ do your homework.', translation: 'You must do your homework.', options: ['must', 'should', 'could', 'would'], correctAnswer: 'must', points: 10 },
      { id: 'mobl-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ be on time.', translation: 'She must be on time.', options: ['must', 'should', 'could', 'would'], correctAnswer: 'must', points: 10 },
      { id: 'mobl-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ leave now.', translation: 'I must leave now.', options: ['must', 'should', 'could', 'would'], correctAnswer: 'must', points: 10 },
      { id: 'mobl-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ finish this today.', translation: 'We must finish this today.', options: ['must', 'should', 'could', 'would'], correctAnswer: 'must', points: 10 },
      { id: 'mobl-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ call his mother.', translation: 'He must call his mother.', options: ['must', 'should', 'could', 'would'], correctAnswer: 'must', points: 10 },
      { id: 'mobl-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ wear a suit.', translation: 'You must wear a suit.', options: ['must', 'should', 'could', 'would'], correctAnswer: 'must', points: 10 },
      { id: 'mobl-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ follow the rules.', translation: 'They must follow the rules.', options: ['must', 'should', 'could', 'would'], correctAnswer: 'must', points: 10 },
      { id: 'mobl-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ tell the truth.', translation: 'She must tell the truth.', options: ['must', 'should', 'could', 'would'], correctAnswer: 'must', points: 10 },
      { id: 'mobl-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ be careful.', translation: 'I must be careful.', options: ['must', 'should', 'could', 'would'], correctAnswer: 'must', points: 10 },
      { id: 'mobl-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ keep our promise.', translation: 'We must keep our promise.', options: ['must', 'should', 'could', 'would'], correctAnswer: 'must', points: 10 }
    ]
  },
  {
    id: 'modal-advice-1',
    title: 'SHOULD - Advice',
    description: 'Giving advice',
    icon: '💡',
    exercises: [
      { id: 'madv-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ see a doctor.', translation: 'You should see a doctor.', options: ['should', 'must', 'could', 'would'], correctAnswer: 'should', points: 10 },
      { id: 'madv-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ study more.', translation: 'She should study more.', options: ['should', 'must', 'could', 'would'], correctAnswer: 'should', points: 10 },
      { id: 'madv-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ apologize.', translation: 'He should apologize.', options: ['should', 'must', 'could', 'would'], correctAnswer: 'should', points: 10 },
      { id: 'madv-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ go to the gym.', translation: 'We should go to the gym.', options: ['should', 'must', 'could', 'would'], correctAnswer: 'should', points: 10 },
      { id: 'madv-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ eat more vegetables.', translation: 'I should eat more vegetables.', options: ['should', 'must', 'could', 'would'], correctAnswer: 'should', points: 10 },
      { id: 'madv-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ be more careful.', translation: 'They should be more careful.', options: ['should', 'must', 'could', 'would'], correctAnswer: 'should', points: 10 },
      { id: 'madv-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ ask for help.', translation: 'You should ask for help.', options: ['should', 'must', 'could', 'would'], correctAnswer: 'should', points: 10 },
      { id: 'madv-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ try again.', translation: 'She should try again.', options: ['should', 'must', 'could', 'would'], correctAnswer: 'should', points: 10 },
      { id: 'madv-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ save money.', translation: 'We should save money.', options: ['should', 'must', 'could', 'would'], correctAnswer: 'should', points: 10 },
      { id: 'madv-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ listen to his parents.', translation: 'He should listen to his parents.', options: ['should', 'must', 'could', 'would'], correctAnswer: 'should', points: 10 }
    ]
  },
  {
    id: 'modal-negative-1',
    title: 'MUST NOT / CAN NOT',
    description: 'Prohibition and impossibility',
    icon: '🚫',
    exercises: [
      { id: 'mneg-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ smoke here.', translation: 'You must not smoke here.', options: ['must not', 'can not', 'should not', 'would not'], correctAnswer: 'must not', points: 10 },
      { id: 'mneg-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ tell anyone.', translation: 'She must not tell anyone.', options: ['must not', 'can not', 'should not', 'would not'], correctAnswer: 'must not', points: 10 },
      { id: 'mneg-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ be late again.', translation: 'He must not be late again.', options: ['must not', 'can not', 'should not', 'would not'], correctAnswer: 'must not', points: 10 },
      { id: 'mneg-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ forget this.', translation: 'We must not forget this.', options: ['must not', 'can not', 'should not', 'would not'], correctAnswer: 'must not', points: 10 },
      { id: 'mneg-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ lose this.', translation: 'I must not lose this.', options: ['must not', 'can not', 'should not', 'would not'], correctAnswer: 'must not', points: 10 },
      { id: 'mneg-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ swim alone.', translation: 'You cannot swim alone.', options: ['must not', 'cannot', 'should not', 'would not'], correctAnswer: 'cannot', points: 10 },
      { id: 'mneg-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ understand this.', translation: 'She cannot understand this.', options: ['must not', 'cannot', 'should not', 'would not'], correctAnswer: 'cannot', points: 10 },
      { id: 'mneg-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ be in two places.', translation: 'They cannot be in two places.', options: ['must not', 'cannot', 'should not', 'would not'], correctAnswer: 'cannot', points: 10 },
      { id: 'mneg-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ finish this alone.', translation: 'He cannot finish this alone.', options: ['must not', 'cannot', 'should not', 'would not'], correctAnswer: 'cannot', points: 10 },
      { id: 'mneg-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ see the future.', translation: 'We cannot see the future.', options: ['must not', 'cannot', 'should not', 'would not'], correctAnswer: 'cannot', points: 10 }
    ]
  },
  {
    id: 'modal-would-1',
    title: 'WOULD - Willingness',
    description: 'Willingness and requests',
    icon: '🙏',
    exercises: [
      { id: 'mw-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ you like some coffee?', translation: 'Would you like some coffee?', options: ['Would', 'Could', 'Should', 'Might'], correctAnswer: 'Would', points: 10 },
      { id: 'mw-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ help if asked.', translation: 'She would help if asked.', options: ['would', 'could', 'should', 'might'], correctAnswer: 'would', points: 10 },
      { id: 'mw-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ love to come.', translation: 'I would love to come.', options: ['would', 'could', 'should', 'might'], correctAnswer: 'would', points: 10 },
      { id: 'mw-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ prefer tea.', translation: 'He would prefer tea.', options: ['would', 'could', 'should', 'might'], correctAnswer: 'would', points: 10 },
      { id: 'mw-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ you open the door?', translation: 'Would you open the door?', options: ['Would', 'Could', 'Should', 'Might'], correctAnswer: 'Would', points: 10 },
      { id: 'mw-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ agree with this.', translation: 'They would agree with this.', options: ['would', 'could', 'should', 'might'], correctAnswer: 'would', points: 10 },
      { id: 'mw-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ rather wait.', translation: 'We would rather wait.', options: ['would', 'could', 'should', 'might'], correctAnswer: 'would', points: 10 },
      { id: 'mw-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ she mind if I sit here?', translation: 'Would she mind if I sit here?', options: ['Would', 'Could', 'Should', 'Might'], correctAnswer: 'Would', points: 10 },
      { id: 'mw-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ be happy to assist.', translation: 'I would be happy to assist.', options: ['would', 'could', 'should', 'might'], correctAnswer: 'would', points: 10 },
      { id: 'mw-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ enjoy this movie.', translation: 'You would enjoy this movie.', options: ['would', 'could', 'should', 'might'], correctAnswer: 'would', points: 10 }
    ]
  },
  {
    id: 'modal-ought-1',
    title: 'OUGHT TO',
    description: 'Strong advice',
    icon: '💡',
    exercises: [
      { id: 'mo-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ see a doctor.', translation: 'You ought to see a doctor.', options: ['ought to', 'should', 'must', 'could'], correctAnswer: 'ought to', points: 10 },
      { id: 'mo-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ study harder.', translation: 'She ought to study harder.', options: ['ought to', 'should', 'must', 'could'], correctAnswer: 'ought to', points: 10 },
      { id: 'mo-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ apologize.', translation: 'He ought to apologize.', options: ['ought to', 'should', 'must', 'could'], correctAnswer: 'ought to', points: 10 },
      { id: 'mo-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ be more careful.', translation: 'We ought to be more careful.', options: ['ought to', 'should', 'must', 'could'], correctAnswer: 'ought to', points: 10 },
      { id: 'mo-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ call my mother.', translation: 'I ought to call my mother.', options: ['ought to', 'should', 'must', 'could'], correctAnswer: 'ought to', points: 10 },
      { id: 'mo-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ listen to advice.', translation: 'They ought to listen to advice.', options: ['ought to', 'should', 'must', 'could'], correctAnswer: 'ought to', points: 10 },
      { id: 'mo-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ try this.', translation: 'You ought to try this.', options: ['ought to', 'should', 'must', 'could'], correctAnswer: 'ought to', points: 10 },
      { id: 'mo-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ be more patient.', translation: 'She ought to be more patient.', options: ['ought to', 'should', 'must', 'could'], correctAnswer: 'ought to', points: 10 },
      { id: 'mo-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ save money.', translation: 'We ought to save money.', options: ['ought to', 'should', 'must', 'could'], correctAnswer: 'ought to', points: 10 },
      { id: 'mo-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ work harder.', translation: 'He ought to work harder.', options: ['ought to', 'should', 'must', 'could'], correctAnswer: 'ought to', points: 10 }
    ]
  },
  {
    id: 'modal-past-1',
    title: 'Modal Verbs in Past',
    description: 'could have, should have, would have',
    icon: '📅',
    exercises: [
      { id: 'mp-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ gone to the party.', translation: 'She could have gone to the party.', options: ['could have', 'should have', 'would have', 'must have'], correctAnswer: 'could have', points: 10 },
      { id: 'mp-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ studied more.', translation: 'You should have studied more.', options: ['could have', 'should have', 'would have', 'must have'], correctAnswer: 'should have', points: 10 },
      { id: 'mp-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ been there.', translation: 'He would have been there.', options: ['could have', 'should have', 'would have', 'must have'], correctAnswer: 'would have', points: 10 },
      { id: 'mp-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ helped us.', translation: 'They could have helped us.', options: ['could have', 'should have', 'would have', 'must have'], correctAnswer: 'could have', points: 10 },
      { id: 'mp-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ known the answer.', translation: 'I should have known the answer.', options: ['could have', 'should have', 'would have', 'must have'], correctAnswer: 'should have', points: 10 },
      { id: 'mp-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ come earlier.', translation: 'We could have come earlier.', options: ['could have', 'should have', 'would have', 'must have'], correctAnswer: 'could have', points: 10 },
      { id: 'mp-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ told the truth.', translation: 'She should have told the truth.', options: ['could have', 'should have', 'would have', 'must have'], correctAnswer: 'should have', points: 10 },
      { id: 'mp-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ joined us.', translation: 'He would have joined us.', options: ['could have', 'should have', 'would have', 'must have'], correctAnswer: 'would have', points: 10 },
      { id: 'mp-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ been more careful.', translation: 'They should have been more careful.', options: ['could have', 'should have', 'would have', 'must have'], correctAnswer: 'should have', points: 10 },
      { id: 'mp-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ done it differently.', translation: 'I would have done it differently.', options: ['could have', 'should have', 'would have', 'must have'], correctAnswer: 'would have', points: 10 }
    ]
  },
  {
    id: 'modal-shall-1',
    title: 'SHALL',
    description: 'Suggestions and offers',
    icon: '🤔',
    exercises: [
      { id: 'msh-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ we go to the beach?', translation: 'Shall we go to the beach?', options: ['Shall', 'Should', 'Would', 'Could'], correctAnswer: 'Shall', points: 10 },
      { id: 'msh-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'What ___ I do for you?', translation: 'What shall I do for you?', options: ['Shall', 'Should', 'Would', 'Could'], correctAnswer: 'Shall', points: 10 },
      { id: 'msh-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ we dance?', translation: 'Shall we dance?', options: ['Shall', 'Should', 'Would', 'Could'], correctAnswer: 'Shall', points: 10 },
      { id: 'msh-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ I help you with that?', translation: 'Shall I help you with that?', options: ['Shall', 'Should', 'Would', 'Could'], correctAnswer: 'Shall', points: 10 },
      { id: 'msh-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ we start the meeting?', translation: 'Shall we start the meeting?', options: ['Shall', 'Should', 'Would', 'Could'], correctAnswer: 'Shall', points: 10 },
      { id: 'msh-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'What ___ we do tonight?', translation: 'What shall we do tonight?', options: ['Shall', 'Should', 'Would', 'Could'], correctAnswer: 'Shall', points: 10 },
      { id: 'msh-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ I open the window?', translation: 'Shall I open the window?', options: ['Shall', 'Should', 'Would', 'Could'], correctAnswer: 'Shall', points: 10 },
      { id: 'msh-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ we wait for them?', translation: 'Shall we wait for them?', options: ['Shall', 'Should', 'Would', 'Could'], correctAnswer: 'Shall', points: 10 },
      { id: 'msh-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ we try again?', translation: 'Shall we try again?', options: ['Shall', 'Should', 'Would', 'Could'], correctAnswer: 'Shall', points: 10 },
      { id: 'msh-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ I carry that for you?', translation: 'Shall I carry that for you?', options: ['Shall', 'Should', 'Would', 'Could'], correctAnswer: 'Shall', points: 10 }
    ]
  },
  {
    id: 'modal-deduction-1',
    title: 'Modal Verbs for Deduction',
    description: "Must, might, can't for deduction",
    icon: '🔍',
    exercises: [
      { id: 'deduct-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He is not answering. He ___ be busy.', translation: 'He is not answering. He must be busy.', options: ['must', 'might', 'cannot', 'should'], correctAnswer: 'must', points: 10 },
      { id: 'deduct-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She is smiling. She ___ be happy.', translation: 'She is smiling. She might be happy.', options: ['must', 'might', 'cannot', 'should'], correctAnswer: 'might', points: 10 },
      { id: 'deduct-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'The ground is wet. It ___ rained.', translation: 'The ground is wet. It must have rained.', options: ['must have', 'might have', 'cannot have', 'should have'], correctAnswer: 'must have', points: 10 },
      { id: 'deduct-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She is not here. She ___ be sick.', translation: 'She is not here. She might be sick.', options: ['must', 'might', 'cannot', 'should'], correctAnswer: 'might', points: 10 },
      { id: 'deduct-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'This is impossible. You ___ be joking.', translation: 'This is impossible. You must be joking.', options: ['must', 'might', 'cannot', 'should'], correctAnswer: 'must', points: 10 },
      { id: 'deduct-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He has no money. He ___ be rich.', translation: 'He has no money. He cannot be rich.', options: ['must', 'might', 'cannot', 'should'], correctAnswer: 'cannot', points: 10 },
      { id: 'deduct-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She knows everything. She ___ have studied.', translation: 'She knows everything. She must have studied.', options: ['must have', 'might have', 'cannot have', 'should have'], correctAnswer: 'must have', points: 10 },
      { id: 'deduct-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He is smiling. He ___ have good news.', translation: 'He is smiling. He might have good news.', options: ['must have', 'might have', 'cannot have', 'should have'], correctAnswer: 'might have', points: 10 },
      { id: 'deduct-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'That cannot be true. It ___ be a mistake.', translation: 'That cannot be true. It must be a mistake.', options: ['must', 'might', 'cannot', 'should'], correctAnswer: 'must', points: 10 },
      { id: 'deduct-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He is absent. He ___ be traveling.', translation: 'He is absent. He might be traveling.', options: ['must', 'might', 'cannot', 'should'], correctAnswer: 'might', points: 10 }
    ]
  },
  {
    id: 'modal-passive-1',
    title: 'Modal Verbs in Passive',
    description: 'Must be, can be, should be',
    icon: '🔄',
    exercises: [
      { id: 'mpass-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'The work ___ done today.', translation: 'The work must be done today.', options: ['must be', 'can be', 'should be', 'may be'], correctAnswer: 'must be', points: 10 },
      { id: 'mpass-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'This ___ understood by everyone.', translation: 'This should be understood by everyone.', options: ['must be', 'can be', 'should be', 'may be'], correctAnswer: 'should be', points: 10 },
      { id: 'mpass-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'The rules ___ followed.', translation: 'The rules must be followed.', options: ['must be', 'can be', 'should be', 'may be'], correctAnswer: 'must be', points: 10 },
      { id: 'mpass-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'The book ___ found anywhere.', translation: 'The book can be found anywhere.', options: ['must be', 'can be', 'should be', 'may be'], correctAnswer: 'can be', points: 10 },
      { id: 'mpass-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'This ___ changed.', translation: 'This should be changed.', options: ['must be', 'can be', 'should be', 'may be'], correctAnswer: 'should be', points: 10 },
      { id: 'mpass-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'The problem ___ solved soon.', translation: 'The problem must be solved soon.', options: ['must be', 'can be', 'should be', 'may be'], correctAnswer: 'must be', points: 10 },
      { id: 'mpass-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'The food ___ eaten.', translation: 'The food can be eaten.', options: ['must be', 'can be', 'should be', 'may be'], correctAnswer: 'can be', points: 10 },
      { id: 'mpass-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'The meeting ___ postponed.', translation: 'The meeting may be postponed.', options: ['must be', 'can be', 'should be', 'may be'], correctAnswer: 'may be', points: 10 },
      { id: 'mpass-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'The bill ___ paid.', translation: 'The bill must be paid.', options: ['must be', 'can be', 'should be', 'may be'], correctAnswer: 'must be', points: 10 },
      { id: 'mpass-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'This ___ avoided.', translation: 'This should be avoided.', options: ['must be', 'can be', 'should be', 'may be'], correctAnswer: 'should be', points: 10 }
    ]
  },
  {
    id: 'modal-continuous-1',
    title: 'Modal + Continuous',
    description: 'Must be doing, might be doing',
    icon: '⏳',
    exercises: [
      { id: 'mcont-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ be sleeping. It is late.', translation: 'She must be sleeping. It is late.', options: ['must be', 'might be', 'should be', 'can be'], correctAnswer: 'must be', points: 10 },
      { id: 'mcont-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ be working now.', translation: 'He might be working now.', options: ['must be', 'might be', 'should be', 'can be'], correctAnswer: 'might be', points: 10 },
      { id: 'mcont-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ be waiting for us.', translation: 'They must be waiting for us.', options: ['must be', 'might be', 'should be', 'can be'], correctAnswer: 'must be', points: 10 },
      { id: 'mcont-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ be studying now.', translation: 'She might be studying now.', options: ['must be', 'might be', 'should be', 'can be'], correctAnswer: 'might be', points: 10 },
      { id: 'mcont-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'The kids ___ be playing outside.', translation: 'The kids must be playing outside.', options: ['must be', 'might be', 'should be', 'can be'], correctAnswer: 'must be', points: 10 },
      { id: 'mcont-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ be driving now.', translation: 'He might be driving now.', options: ['must be', 'might be', 'should be', 'can be'], correctAnswer: 'might be', points: 10 },
      { id: 'mcont-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ be thinking about this.', translation: 'We must be thinking about this.', options: ['must be', 'might be', 'should be', 'can be'], correctAnswer: 'must be', points: 10 },
      { id: 'mcont-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ be preparing dinner.', translation: 'She might be preparing dinner.', options: ['must be', 'might be', 'should be', 'can be'], correctAnswer: 'might be', points: 10 },
      { id: 'mcont-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ be discussing the plan.', translation: 'They must be discussing the plan.', options: ['must be', 'might be', 'should be', 'can be'], correctAnswer: 'must be', points: 10 },
      { id: 'mcont-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ be watching TV.', translation: 'He might be watching TV.', options: ['must be', 'might be', 'should be', 'can be'], correctAnswer: 'might be', points: 10 }
    ]
  },
  {
    id: 'modal-perfect-1',
    title: 'Modal Perfect - Possibility',
    description: 'Might have, could have, should have',
    icon: '📅',
    exercises: [
      { id: 'mpf-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ forgotten my birthday.', translation: 'She might have forgotten my birthday.', options: ['might have', 'must have', 'cannot have', 'should have'], correctAnswer: 'might have', points: 10 },
      { id: 'mpf-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ missed the bus.', translation: 'They could have missed the bus.', options: ['might have', 'could have', 'must have', 'cannot have'], correctAnswer: 'could have', points: 10 },
      { id: 'mpf-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ studied more.', translation: 'He should have studied more.', options: ['might have', 'could have', 'should have', 'would have'], correctAnswer: 'should have', points: 10 },
      { id: 'mpf-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'It ___ rained last night.', translation: 'It might have rained last night.', options: ['might have', 'must have', 'cannot have', 'should have'], correctAnswer: 'might have', points: 10 },
      { id: 'mpf-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ called me earlier.', translation: 'You could have called me earlier.', options: ['might have', 'could have', 'should have', 'would have'], correctAnswer: 'could have', points: 10 },
      { id: 'mpf-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ been at home.', translation: 'She might have been at home.', options: ['might have', 'must have', 'cannot have', 'should have'], correctAnswer: 'might have', points: 10 },
      { id: 'mpf-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ told us before.', translation: 'They should have told us before.', options: ['might have', 'could have', 'should have', 'would have'], correctAnswer: 'should have', points: 10 },
      { id: 'mpf-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ gone to the beach.', translation: 'We could have gone to the beach.', options: ['might have', 'could have', 'should have', 'would have'], correctAnswer: 'could have', points: 10 },
      { id: 'mpf-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ taken the job.', translation: 'He might have taken the job.', options: ['might have', 'must have', 'cannot have', 'should have'], correctAnswer: 'might have', points: 10 },
      { id: 'mpf-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ known this before.', translation: 'I should have known this before.', options: ['might have', 'could have', 'should have', 'would have'], correctAnswer: 'should have', points: 10 }
    ]
  },
  {
    id: 'modal-absence-1',
    title: 'ABSENCE of Modal',
    description: 'Need to, have to, ought to',
    icon: '🔄',
    exercises: [
      { id: 'absmod-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ go to the store.', translation: 'I need to go to the store.', options: ['need to', 'must', 'should', 'can'], correctAnswer: 'need to', points: 10 },
      { id: 'absmod-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ work on Saturdays.', translation: 'She has to work on Saturdays.', options: ['has to', 'must', 'should', 'can'], correctAnswer: 'has to', points: 10 },
      { id: 'absmod-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ be there early.', translation: 'We need to be there early.', options: ['need to', 'must', 'should', 'can'], correctAnswer: 'need to', points: 10 },
      { id: 'absmod-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ pay the bills.', translation: 'He has to pay the bills.', options: ['has to', 'must', 'should', 'can'], correctAnswer: 'has to', points: 10 },
      { id: 'absmod-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ try this.', translation: 'You ought to try this.', options: ['ought to', 'must', 'should', 'need to'], correctAnswer: 'ought to', points: 10 },
      { id: 'absmod-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ finish the project.', translation: 'They need to finish the project.', options: ['need to', 'must', 'should', 'can'], correctAnswer: 'need to', points: 10 },
      { id: 'absmod-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ study tonight.', translation: 'I have to study tonight.', options: ['have to', 'must', 'should', 'need to'], correctAnswer: 'have to', points: 10 },
      { id: 'absmod-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ apologize.', translation: 'She ought to apologize.', options: ['ought to', 'must', 'should', 'need to'], correctAnswer: 'ought to', points: 10 },
      { id: 'absmod-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ leave now.', translation: 'We need to leave now.', options: ['need to', 'must', 'should', 'have to'], correctAnswer: 'need to', points: 10 },
      { id: 'absmod-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ be careful.', translation: 'He ought to be careful.', options: ['ought to', 'must', 'should', 'need to'], correctAnswer: 'ought to', points: 10 }
    ]
  },
  {
    id: 'modal-would-have-1',
    title: 'WOULD HAVE - Past',
    description: 'Would have done',
    icon: '📅',
    exercises: [
      { id: 'wouldhave-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'If I knew, I ___ helped.', translation: 'If I knew, I would have helped.', options: ['would have', 'could have', 'should have', 'might have'], correctAnswer: 'would have', points: 10 },
      { id: 'wouldhave-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ come if she was free.', translation: 'She would have come if she was free.', options: ['would have', 'could have', 'should have', 'might have'], correctAnswer: 'would have', points: 10 },
      { id: 'wouldhave-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ won the game.', translation: 'They would have won the game.', options: ['would have', 'could have', 'should have', 'might have'], correctAnswer: 'would have', points: 10 },
      { id: 'wouldhave-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ passed if I studied.', translation: 'I would have passed if I studied.', options: ['would have', 'could have', 'should have', 'might have'], correctAnswer: 'would have', points: 10 },
      { id: 'wouldhave-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ been there earlier.', translation: 'He would have been there earlier.', options: ['would have', 'could have', 'should have', 'might have'], correctAnswer: 'would have', points: 10 },
      { id: 'wouldhave-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ invited her.', translation: 'We would have invited her.', options: ['would have', 'could have', 'should have', 'might have'], correctAnswer: 'would have', points: 10 },
      { id: 'wouldhave-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ enjoyed the movie.', translation: 'You would have enjoyed the movie.', options: ['would have', 'could have', 'should have', 'might have'], correctAnswer: 'would have', points: 10 },
      { id: 'wouldhave-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ understood.', translation: 'She would have understood.', options: ['would have', 'could have', 'should have', 'might have'], correctAnswer: 'would have', points: 10 },
      { id: 'wouldhave-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ agreed.', translation: 'They would have agreed.', options: ['would have', 'could have', 'should have', 'might have'], correctAnswer: 'would have', points: 10 },
      { id: 'wouldhave-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ known better.', translation: 'I would have known better.', options: ['would have', 'could have', 'should have', 'might have'], correctAnswer: 'would have', points: 10 }
    ]
  },
  {
    id: 'modal-reporting-1',
    title: 'Modal Verbs in Reported Speech',
    description: 'Changes in reported speech',
    icon: '🗣️',
    exercises: [
      { id: 'report-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She said she ___ come. (can)', translation: 'She said she could come.', options: ['can', 'could', 'will', 'would'], correctAnswer: 'could', points: 10 },
      { id: 'report-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He said he ___ help. (will)', translation: 'He said he would help.', options: ['can', 'could', 'will', 'would'], correctAnswer: 'would', points: 10 },
      { id: 'report-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They said they ___ be there. (may)', translation: 'They said they might be there.', options: ['may', 'might', 'can', 'could'], correctAnswer: 'might', points: 10 },
      { id: 'report-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She promised she ___ try. (will)', translation: 'She promised she would try.', options: ['can', 'could', 'will', 'would'], correctAnswer: 'would', points: 10 },
      { id: 'report-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He said he ___ swim. (can)', translation: 'He said he could swim.', options: ['can', 'could', 'will', 'would'], correctAnswer: 'could', points: 10 },
      { id: 'report-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They agreed they ___ help. (shall)', translation: 'They agreed they would help.', options: ['shall', 'should', 'will', 'would'], correctAnswer: 'would', points: 10 },
      { id: 'report-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She thought it ___ rain. (might)', translation: 'She thought it might rain.', options: ['may', 'might', 'can', 'could'], correctAnswer: 'might', points: 10 },
      { id: 'report-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He said he ___ leave. (must)', translation: 'He said he had to leave.', options: ['must', 'had to', 'must have', 'could'], correctAnswer: 'had to', points: 10 },
      { id: 'report-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They claimed they ___ win. (can)', translation: 'They claimed they could win.', options: ['can', 'could', 'will', 'would'], correctAnswer: 'could', points: 10 },
      { id: 'report-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She assured she ___ be there. (will)', translation: 'She assured she would be there.', options: ['can', 'could', 'will', 'would'], correctAnswer: 'would', points: 10 }
    ]
  },
  {
    id: 'modal-passive-advanced-1',
    title: 'Modal Passive - Advanced',
    description: 'Advanced passive forms',
    icon: '🔄',
    exercises: [
      { id: 'mpassa-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'The letter ___ sent yesterday.', translation: 'The letter should have been sent yesterday.', options: ['must be', 'should have been', 'might be', 'can be'], correctAnswer: 'should have been', points: 10 },
      { id: 'mpassa-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'The work ___ by now.', translation: 'The work must have been finished by now.', options: ['must be', 'must have been', 'should be', 'might be'], correctAnswer: 'must have been', points: 10 },
      { id: 'mpassa-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'The book ___ next week.', translation: 'The book might be published next week.', options: ['must be', 'might be', 'should be', 'could be'], correctAnswer: 'might be', points: 10 },
      { id: 'mpassa-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'The problem ___ immediately.', translation: 'The problem must be solved immediately.', options: ['must be', 'might be', 'should be', 'could be'], correctAnswer: 'must be', points: 10 },
      { id: 'mpassa-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'The decision ___ before.', translation: 'The decision should have been made before.', options: ['must be', 'should have been', 'might be', 'can be'], correctAnswer: 'should have been', points: 10 },
      { id: 'mpassa-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'The thief ___ by the police.', translation: 'The thief might have been caught by the police.', options: ['might have been', 'must have been', 'should have been', 'could be'], correctAnswer: 'might have been', points: 10 },
      { id: 'mpassa-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'The news ___ tomorrow.', translation: 'The news will be announced tomorrow.', options: ['must be', 'might be', 'will be', 'should be'], correctAnswer: 'will be', points: 10 },
      { id: 'mpassa-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'The results ___ last month.', translation: 'The results should have been published last month.', options: ['must be', 'should have been', 'might be', 'can be'], correctAnswer: 'should have been', points: 10 },
      { id: 'mpassa-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'The building ___ next year.', translation: 'The building might be built next year.', options: ['must be', 'might be', 'should be', 'will be'], correctAnswer: 'might be', points: 10 },
      { id: 'mpassa-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'The criminal ___ yet.', translation: 'The criminal must have been arrested yet.', options: ['must be', 'must have been', 'should be', 'might be'], correctAnswer: 'must have been', points: 10 }
    ]
  },
  {
    id: 'modal-questions-1',
    title: 'Modal Verbs in Questions',
    description: 'Questions with modals',
    icon: '❓',
    exercises: [
      { id: 'mq-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ I help you?', translation: 'Can I help you?', options: ['Can', 'Must', 'Should', 'Would'], correctAnswer: 'Can', points: 10 },
      { id: 'mq-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ we go now?', translation: 'Shall we go now?', options: ['Can', 'Must', 'Shall', 'Would'], correctAnswer: 'Shall', points: 10 },
      { id: 'mq-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ you like some coffee?', translation: 'Would you like some coffee?', options: ['Can', 'Must', 'Should', 'Would'], correctAnswer: 'Would', points: 10 },
      { id: 'mq-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ I open the window?', translation: 'May I open the window?', options: ['Can', 'May', 'Must', 'Should'], correctAnswer: 'May', points: 10 },
      { id: 'mq-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ we dance?', translation: 'Shall we dance?', options: ['Can', 'Must', 'Shall', 'Would'], correctAnswer: 'Shall', points: 10 },
      { id: 'mq-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ I borrow your pen?', translation: 'Could I borrow your pen?', options: ['Can', 'Could', 'Must', 'Should'], correctAnswer: 'Could', points: 10 },
      { id: 'mq-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ we meet tomorrow?', translation: 'Shall we meet tomorrow?', options: ['Can', 'Must', 'Shall', 'Would'], correctAnswer: 'Shall', points: 10 },
      { id: 'mq-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ I ask a question?', translation: 'May I ask a question?', options: ['Can', 'May', 'Must', 'Should'], correctAnswer: 'May', points: 10 },
      { id: 'mq-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ you pass the salt?', translation: 'Could you pass the salt?', options: ['Can', 'Could', 'Must', 'Should'], correctAnswer: 'Could', points: 10 },
      { id: 'mq-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ I be of assistance?', translation: 'May I be of assistance?', options: ['Can', 'May', 'Must', 'Should'], correctAnswer: 'May', points: 10 }
    ]
  },
  {
    id: 'modal-tags-1',
    title: 'Modal Verb Tags',
    description: 'Question tags with modals',
    icon: '❓',
    exercises: [
      { id: 'mtag-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You can swim, ___ you?', translation: 'You can swim, can you?', options: ['can you', 'cannot you', 'you can', 'you cannot'], correctAnswer: 'can you', points: 10 },
      { id: 'mtag-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She must be tired, ___ she?', translation: 'She must be tired, must not she?', options: ['must she', 'mustnt she', 'must not she', 'must she not'], correctAnswer: 'must she', points: 10 },
      { id: 'mtag-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You should study, ___ you?', translation: 'You should study, should you?', options: ['should you', 'shouldnt you', 'you should', 'you should not'], correctAnswer: 'should you', points: 10 },
      { id: 'mtag-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He could help, ___ he?', translation: 'He could help, could he?', options: ['could he', 'couldnt he', 'he could', 'he could not'], correctAnswer: 'could he', points: 10 },
      { id: 'mtag-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They would come, ___ they?', translation: 'They would come, would they?', options: ['would they', 'wouldnt they', 'they would', 'they would not'], correctAnswer: 'would they', points: 10 },
      { id: 'mtag-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She might be late, ___ she?', translation: 'She might be late, might she?', options: ['might she', 'mightnt she', 'she might', 'she might not'], correctAnswer: 'might she', points: 10 },
      { id: 'mtag-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We shall leave, ___ we?', translation: 'We shall leave, shall we?', options: ['shall we', 'shallnt we', 'we shall', 'we shall not'], correctAnswer: 'shall we', points: 10 },
      { id: 'mtag-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You may enter, ___ you?', translation: 'You may enter, may you?', options: ['may you', 'maynt you', 'you may', 'you may not'], correctAnswer: 'may you', points: 10 },
      { id: 'mtag-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He must know, ___ he?', translation: 'He must know, must he?', options: ['must he', 'mustnt he', 'he must', 'he must not'], correctAnswer: 'must he', points: 10 },
      { id: 'mtag-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We could try, ___ we?', translation: 'We could try, could we?', options: ['could we', 'couldnt we', 'we could', 'we could not'], correctAnswer: 'could we', points: 10 }
    ]
  },
  {
    id: 'modal-conclusion-1',
    title: 'Modal Verbs Summary',
    description: 'Review of all modals',
    icon: '📝',
    exercises: [
      { id: 'concl-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ drive if you have a license.', translation: 'You can drive if you have a license.', options: ['can', 'must', 'should', 'would'], correctAnswer: 'can', points: 10 },
      { id: 'concl-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ arrive on time.', translation: 'You must arrive on time.', options: ['can', 'must', 'should', 'would'], correctAnswer: 'must', points: 10 },
      { id: 'concl-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ see a doctor.', translation: 'You should see a doctor.', options: ['can', 'must', 'should', 'would'], correctAnswer: 'should', points: 10 },
      { id: 'concl-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'If I ___ you, I would apologize.', translation: 'If I were you, I would apologize.', options: ['am', 'was', 'were', 'be'], correctAnswer: 'were', points: 10 },
      { id: 'concl-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'It ___ rain later.', translation: 'It might rain later.', options: ['can', 'might', 'must', 'should'], correctAnswer: 'might', points: 10 },
      { id: 'concl-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ speak French.', translation: 'She could speak French.', options: ['can', 'could', 'might', 'should'], correctAnswer: 'could', points: 10 },
      { id: 'concl-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ not smoke here.', translation: 'You must not smoke here.', options: ['can not', 'must not', 'should not', 'would not'], correctAnswer: 'must not', points: 10 },
      { id: 'concl-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ we go to the park?', translation: 'Shall we go to the park?', options: ['Shall', 'Should', 'Must', 'Would'], correctAnswer: 'Shall', points: 10 },
      { id: 'concl-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ be more careful.', translation: 'You ought to be more careful.', options: ['can', 'must', 'ought to', 'would'], correctAnswer: 'ought to', points: 10 },
      { id: 'concl-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ have forgotten.', translation: 'He might have forgotten.', options: ['can have', 'might have', 'must have', 'should have'], correctAnswer: 'might have', points: 10 }
    ]
  },
  {
    id: 'modal-prohibition-1',
    title: 'Prohibition: MUST NOT / CANNOT',
    description: 'Must not vs cannot',
    icon: '🚫',
    exercises: [
      { id: 'prohib-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ smoke in here.', translation: 'You must not smoke in here.', options: ['cannot', 'must not', 'should not', 'would not'], correctAnswer: 'must not', points: 10 },
      { id: 'prohib-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ swim alone.', translation: 'You cannot swim alone.', options: ['cannot', 'must not', 'should not', 'would not'], correctAnswer: 'cannot', points: 10 },
      { id: 'prohib-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ tell anyone.', translation: 'She must not tell anyone.', options: ['cannot', 'must not', 'should not', 'would not'], correctAnswer: 'must not', points: 10 },
      { id: 'prohib-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ be late.', translation: 'He cannot be late.', options: ['cannot', 'must not', 'should not', 'would not'], correctAnswer: 'cannot', points: 10 },
      { id: 'prohib-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ forget this.', translation: 'We must not forget this.', options: ['cannot', 'must not', 'should not', 'would not'], correctAnswer: 'must not', points: 10 },
      { id: 'prohib-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ park here.', translation: 'You cannot park here.', options: ['cannot', 'must not', 'should not', 'would not'], correctAnswer: 'cannot', points: 10 },
      { id: 'prohib-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ leave early.', translation: 'They must not leave early.', options: ['cannot', 'must not', 'should not', 'would not'], correctAnswer: 'must not', points: 10 },
      { id: 'prohib-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ do that.', translation: 'I cannot do that.', options: ['cannot', 'must not', 'should not', 'would not'], correctAnswer: 'cannot', points: 10 },
      { id: 'prohib-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ be selfish.', translation: 'She must not be selfish.', options: ['cannot', 'must not', 'should not', 'would not'], correctAnswer: 'must not', points: 10 },
      { id: 'prohib-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ give up.', translation: 'We cannot give up.', options: ['cannot', 'must not', 'should not', 'would not'], correctAnswer: 'cannot', points: 10 }
    ]
  },
  {
    id: 'modal-willingness-1',
    title: 'WILLINGNESS',
    description: 'Will, would, would rather',
    icon: '👍',
    exercises: [
      { id: 'will-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ help if asked.', translation: 'He would help if asked.', options: ['will', 'would', 'shall', 'should'], correctAnswer: 'would', points: 10 },
      { id: 'will-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ marry him.', translation: 'She will marry him.', options: ['will', 'would', 'shall', 'should'], correctAnswer: 'will', points: 10 },
      { id: 'will-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ try again.', translation: 'I would try again.', options: ['will', 'would', 'shall', 'should'], correctAnswer: 'would', points: 10 },
      { id: 'will-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ cooperate.', translation: 'They will cooperate.', options: ['will', 'would', 'shall', 'should'], correctAnswer: 'will', points: 10 },
      { id: 'will-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ wait for you.', translation: 'We would wait for you.', options: ['will', 'would', 'shall', 'should'], correctAnswer: 'would', points: 10 },
      { id: 'will-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ not agree.', translation: 'He would not agree.', options: ['will', 'would', 'shall', 'should'], correctAnswer: 'would', points: 10 },
      { id: 'will-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ be happy to help.', translation: 'I would be happy to help.', options: ['will', 'would', 'shall', 'should'], correctAnswer: 'would', points: 10 },
      { id: 'will-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ love to come.', translation: 'She would love to come.', options: ['will', 'would', 'shall', 'should'], correctAnswer: 'would', points: 10 },
      { id: 'will-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ prefer tea.', translation: 'They would prefer tea.', options: ['will', 'would', 'shall', 'should'], correctAnswer: 'would', points: 10 },
      { id: 'will-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ not mind waiting.', translation: 'We would not mind waiting.', options: ['will', 'would', 'shall', 'should'], correctAnswer: 'would', points: 10 }
    ]
  },
  {
    id: 'modal-requests-1',
    title: 'REQUESTS: Can/Could/Would',
    description: 'Making requests',
    icon: '🙏',
    exercises: [
      { id: 'req-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ you pass the salt?', translation: 'Could you pass the salt?', options: ['Can', 'Could', 'Would', 'Will'], correctAnswer: 'Could', points: 10 },
      { id: 'req-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ I have some water?', translation: 'Can I have some water?', options: ['Can', 'Could', 'Would', 'Will'], correctAnswer: 'Can', points: 10 },
      { id: 'req-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ you help me?', translation: 'Would you help me?', options: ['Can', 'Could', 'Would', 'Will'], correctAnswer: 'Would', points: 10 },
      { id: 'req-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ I use your phone?', translation: 'May I use your phone?', options: ['Can', 'Could', 'May', 'Would'], correctAnswer: 'May', points: 10 },
      { id: 'req-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ you open the door?', translation: 'Could you open the door?', options: ['Can', 'Could', 'Would', 'Will'], correctAnswer: 'Could', points: 10 },
      { id: 'req-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ we leave now?', translation: 'Can we leave now?', options: ['Can', 'Could', 'Would', 'Will'], correctAnswer: 'Can', points: 10 },
      { id: 'req-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ you give me a call?', translation: 'Would you give me a call?', options: ['Can', 'Could', 'Would', 'Will'], correctAnswer: 'Would', points: 10 },
      { id: 'req-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ I sit here?', translation: 'May I sit here?', options: ['Can', 'Could', 'May', 'Would'], correctAnswer: 'May', points: 10 },
      { id: 'req-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ you mind waiting?', translation: 'Would you mind waiting?', options: ['Can', 'Could', 'Would', 'Will'], correctAnswer: 'Would', points: 10 },
      { id: 'req-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ I ask you something?', translation: 'May I ask you something?', options: ['Can', 'Could', 'May', 'Would'], correctAnswer: 'May', points: 10 }
    ]
  },
  {
    id: 'modal-offers-1',
    title: 'OFFERS: Can/Will/Shall',
    description: 'Making offers',
    icon: '🎁',
    exercises: [
      { id: 'off-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ I help you?', translation: 'Can I help you?', options: ['Can', 'Will', 'Shall', 'Would'], correctAnswer: 'Can', points: 10 },
      { id: 'off-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ carry that for you.', translation: 'I will carry that for you.', options: ['can', 'will', 'shall', 'would'], correctAnswer: 'will', points: 10 },
      { id: 'off-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ we get you something?', translation: 'Shall we get you something?', options: ['Can', 'Will', 'Shall', 'Would'], correctAnswer: 'Shall', points: 10 },
      { id: 'off-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ give you a ride.', translation: 'I can give you a ride.', options: ['can', 'will', 'shall', 'would'], correctAnswer: 'can', points: 10 },
      { id: 'off-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ I open the window?', translation: 'Shall I open the window?', options: ['Can', 'Will', 'Shall', 'Would'], correctAnswer: 'Shall', points: 10 },
      { id: 'off-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ drive you home.', translation: 'We will drive you home.', options: ['can', 'will', 'shall', 'would'], correctAnswer: 'will', points: 10 },
      { id: 'off-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ we help with dinner?', translation: 'Shall we help with dinner?', options: ['Can', 'Will', 'Shall', 'Would'], correctAnswer: 'Shall', points: 10 },
      { id: 'off-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ make some coffee.', translation: 'I can make some coffee.', options: ['can', 'will', 'shall', 'would'], correctAnswer: 'can', points: 10 },
      { id: 'off-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: '___ I get you a blanket?', translation: 'Shall I get you a blanket?', options: ['Can', 'Will', 'Shall', 'Would'], correctAnswer: 'Shall', points: 10 },
      { id: 'off-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ order pizza.', translation: 'We will order pizza.', options: ['can', 'will', 'shall', 'would'], correctAnswer: 'will', points: 10 }
    ]
  },
  {
    id: 'modal-prediction-1',
    title: 'PREDICTION: Will/May/Might',
    description: 'Future predictions',
    icon: '🔮',
    exercises: [
      { id: 'pred-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'It ___ rain tomorrow.', translation: 'It will rain tomorrow.', options: ['will', 'may', 'might', 'can'], correctAnswer: 'will', points: 10 },
      { id: 'pred-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ become famous.', translation: 'She might become famous.', options: ['will', 'may', 'might', 'can'], correctAnswer: 'might', points: 10 },
      { id: 'pred-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ win the championship.', translation: 'They may win the championship.', options: ['will', 'may', 'might', 'can'], correctAnswer: 'may', points: 10 },
      { id: 'pred-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'Technology ___ change everything.', translation: 'Technology will change everything.', options: ['will', 'may', 'might', 'can'], correctAnswer: 'will', points: 10 },
      { id: 'pred-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ be the next president.', translation: 'He might be the next president.', options: ['will', 'may', 'might', 'can'], correctAnswer: 'might', points: 10 },
      { id: 'pred-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'The company ___ expand.', translation: 'The company may expand.', options: ['will', 'may', 'might', 'can'], correctAnswer: 'may', points: 10 },
      { id: 'pred-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'There ___ be a war.', translation: 'There will be a war.', options: ['will', 'may', 'might', 'can'], correctAnswer: 'will', points: 10 },
      { id: 'pred-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'AI ___ replace many jobs.', translation: 'AI might replace many jobs.', options: ['will', 'may', 'might', 'can'], correctAnswer: 'might', points: 10 },
      { id: 'pred-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'The economy ___ improve.', translation: 'The economy may improve.', options: ['will', 'may', 'might', 'can'], correctAnswer: 'may', points: 10 },
      { id: 'pred-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ discover new planets.', translation: 'We will discover new planets.', options: ['will', 'may', 'might', 'can'], correctAnswer: 'will', points: 10 }
    ]
  },
  {
    id: 'modal-necessity-1',
    title: 'NECESSITY: Must/Have to/Need to',
    description: 'Expressing necessity',
    icon: '⚠️',
    exercises: [
      { id: 'neces-1', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ study to pass.', translation: 'You must study to pass.', options: ['must', 'should', 'can', 'might'], correctAnswer: 'must', points: 10 },
      { id: 'neces-2', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ go to work today.', translation: 'I have to go to work today.', options: ['must', 'have to', 'should', 'can'], correctAnswer: 'have to', points: 10 },
      { id: 'neces-3', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ pay her bills.', translation: 'She needs to pay her bills.', options: ['must', 'need to', 'should', 'can'], correctAnswer: 'need to', points: 10 },
      { id: 'neces-4', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ be there early.', translation: 'We must be there early.', options: ['must', 'should', 'can', 'might'], correctAnswer: 'must', points: 10 },
      { id: 'neces-5', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'He ___ finish this today.', translation: 'He has to finish this today.', options: ['must', 'have to', 'should', 'can'], correctAnswer: 'have to', points: 10 },
      { id: 'neces-6', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'You ___ wear a seatbelt.', translation: 'You must wear a seatbelt.', options: ['must', 'should', 'can', 'might'], correctAnswer: 'must', points: 10 },
      { id: 'neces-7', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'I ___ call my mother.', translation: 'I need to call my mother.', options: ['must', 'need to', 'should', 'can'], correctAnswer: 'need to', points: 10 },
      { id: 'neces-8', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'They ___ submit the report.', translation: 'They have to submit the report.', options: ['must', 'have to', 'should', 'can'], correctAnswer: 'have to', points: 10 },
      { id: 'neces-9', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'We ___ leave now.', translation: 'We must leave now.', options: ['must', 'should', 'can', 'might'], correctAnswer: 'must', points: 10 },
      { id: 'neces-10', sectionId: 'modal-verbs', type: 'multiple-choice', question: 'She ___ see a doctor.', translation: 'She needs to see a doctor.', options: ['must', 'need to', 'should', 'can'], correctAnswer: 'need to', points: 10 }
    ]
  },
  {
    id: 'verb-prep-listen-1',
    title: 'Verbs with Prepositions: Listen',
    description: 'Listen to, listen for, listen with',
    icon: '👂',
    exercises: [
      { id: 'vp-lis-1', sectionId: 'prepositions', type: 'multiple-choice', question: 'I like to ___ music.', translation: 'I like to listen to music.', options: ['listen to', 'listen for', 'listen in', 'listen at'], correctAnswer: 'listen to', points: 10 },
      { id: 'vp-lis-2', sectionId: 'prepositions', type: 'multiple-choice', question: 'She is ___ the warning.', translation: 'She is listening to the warning.', options: ['listening to', 'listening for', 'listening in', 'listening at'], correctAnswer: 'listening to', points: 10 },
      { id: 'vp-lis-3', sectionId: 'prepositions', type: 'multiple-choice', question: 'We need to ___ the instructions.', translation: 'We need to listen to the instructions.', options: ['listen to', 'listen for', 'listen in', 'listen at'], correctAnswer: 'listen to', points: 10 },
      { id: 'vp-lis-4', sectionId: 'prepositions', type: 'multiple-choice', question: 'He was ___ carefully.', translation: 'He was listening carefully.', options: ['listening to', 'listening for', 'listening in', 'listening at'], correctAnswer: 'listening to', points: 10 },
      { id: 'vp-lis-5', sectionId: 'prepositions', type: 'multiple-choice', question: 'They ___ the news yesterday.', translation: 'They listened to the news yesterday.', options: ['listened to', 'listened for', 'listened in', 'listened at'], correctAnswer: 'listened to', points: 10 },
      { id: 'vp-lis-6', sectionId: 'prepositions', type: 'multiple-choice', question: 'Can you ___ me?', translation: 'Can you listen to me?', options: ['listen to', 'listen for', 'listen in', 'listen at'], correctAnswer: 'listen to', points: 10 },
      { id: 'vp-lis-7', sectionId: 'prepositions', type: 'multiple-choice', question: 'I want to ___ the radio.', translation: 'I want to listen to the radio.', options: ['listen to', 'listen for', 'listen in', 'listen at'], correctAnswer: 'listen to', points: 10 },
      { id: 'vp-lis-8', sectionId: 'prepositions', type: 'multiple-choice', question: 'She is ___ to the podcast.', translation: 'She is listening to the podcast.', options: ['listening to', 'listening for', 'listening in', 'listening at'], correctAnswer: 'listening to', points: 10 },
      { id: 'vp-lis-9', sectionId: 'prepositions', type: 'multiple-choice', question: 'We should ___ our parents.', translation: 'We should listen to our parents.', options: ['listen to', 'listen for', 'listen in', 'listen at'], correctAnswer: 'listen to', points: 10 },
      { id: 'vp-lis-10', sectionId: 'prepositions', type: 'multiple-choice', question: 'They stopped ___ to the speech.', translation: 'They stopped listening to the speech.', options: ['listening to', 'listening for', 'listening in', 'listening at'], correctAnswer: 'listening to', points: 10 }
    ]
  },
  {
    id: 'verb-prep-wait-1',
    title: 'Verbs with Prepositions: Wait',
    description: 'Wait for, wait in, wait at, wait on',
    icon: '⏳',
    exercises: [
      { id: 'vp-wai-1', sectionId: 'prepositions', type: 'multiple-choice', question: 'I will ___ you at the station.', translation: 'I will wait for you at the station.', options: ['wait for', 'wait in', 'wait at', 'wait on'], correctAnswer: 'wait for', points: 10 },
      { id: 'vp-wai-2', sectionId: 'prepositions', type: 'multiple-choice', question: 'She is ___ the bus.', translation: 'She is waiting for the bus.', options: ['waiting for', 'waiting in', 'waiting at', 'waiting on'], correctAnswer: 'waiting for', points: 10 },
      { id: 'vp-wai-3', sectionId: 'prepositions', type: 'multiple-choice', question: 'We have been ___ for an hour.', translation: 'We have been waiting for an hour.', options: ['waiting for', 'waiting in', 'waiting at', 'waiting on'], correctAnswer: 'waiting for', points: 10 },
      { id: 'vp-wai-4', sectionId: 'prepositions', type: 'multiple-choice', question: 'They ___ the doctor.', translation: 'They are waiting for the doctor.', options: ['wait for', 'wait in', 'wait at', 'wait on'], correctAnswer: 'wait for', points: 10 },
      { id: 'vp-wai-5', sectionId: 'prepositions', type: 'multiple-choice', question: 'Please ___ a moment.', translation: 'Please wait for a moment.', options: ['wait for', 'wait in', 'wait at', 'wait on'], correctAnswer: 'wait for', points: 10 },
      { id: 'vp-wai-6', sectionId: 'prepositions', type: 'multiple-choice', question: 'He is ___ in the lobby.', translation: 'He is waiting in the lobby.', options: ['waiting for', 'waiting in', 'waiting at', 'waiting on'], correctAnswer: 'waiting in', points: 10 },
      { id: 'vp-wai-7', sectionId: 'prepositions', type: 'multiple-choice', question: 'We ___ the results.', translation: 'We wait for the results.', options: ['wait for', 'wait in', 'wait at', 'wait on'], correctAnswer: 'wait for', points: 10 },
      { id: 'vp-wai-8', sectionId: 'prepositions', type: 'multiple-choice', question: 'She is ___ on the table.', translation: 'She is waiting at the table.', options: ['waiting for', 'waiting in', 'waiting at', 'waiting on'], correctAnswer: 'waiting at', points: 10 },
      { id: 'vp-wai-9', sectionId: 'prepositions', type: 'multiple-choice', question: 'They will ___ you outside.', translation: 'They will wait for you outside.', options: ['wait for', 'wait in', 'wait at', 'wait on'], correctAnswer: 'wait for', points: 10 },
      { id: 'vp-wai-10', sectionId: 'prepositions', type: 'multiple-choice', question: 'The customer is ___ on the waiter.', translation: 'The customer is waiting on the waiter.', options: ['waiting for', 'waiting in', 'waiting at', 'waiting on'], correctAnswer: 'waiting on', points: 10 }
    ]
  },
  {
    id: 'verb-prep-look-1',
    title: 'Verbs with Prepositions: Look',
    description: 'Look at, look for, look after, look like',
    icon: '👀',
    exercises: [
      { id: 'vp-look-1', sectionId: 'prepositions', type: 'multiple-choice', question: 'Please ___ the picture.', translation: 'Please look at the picture.', options: ['look at', 'look for', 'look after', 'look like'], correctAnswer: 'look at', points: 10 },
      { id: 'vp-look-2', sectionId: 'prepositions', type: 'multiple-choice', question: 'I am ___ my keys.', translation: 'I am looking for my keys.', options: ['looking at', 'looking for', 'looking after', 'looking like'], correctAnswer: 'looking for', points: 10 },
      { id: 'vp-look-3', sectionId: 'prepositions', type: 'multiple-choice', question: 'She ___ the children.', translation: 'She looks after the children.', options: ['looks at', 'looks for', 'looks after', 'looks like'], correctAnswer: 'looks after', points: 10 },
      { id: 'vp-look-4', sectionId: 'prepositions', type: 'multiple-choice', question: 'He ___ his father.', translation: 'He looks like his father.', options: ['looks at', 'looks for', 'looks after', 'looks like'], correctAnswer: 'looks like', points: 10 },
      { id: 'vp-look-5', sectionId: 'prepositions', type: 'multiple-choice', question: 'They ___ the problem.', translation: 'They are looking at the problem.', options: ['look at', 'look for', 'look after', 'look like'], correctAnswer: 'look at', points: 10 },
      { id: 'vp-look-6', sectionId: 'prepositions', type: 'multiple-choice', question: 'Can you ___ my bag?', translation: 'Can you look after my bag?', options: ['look at', 'look for', 'look after', 'look like'], correctAnswer: 'look after', points: 10 },
      { id: 'vp-look-7', sectionId: 'prepositions', type: 'multiple-choice', question: 'The house ___ a castle.', translation: 'The house looks like a castle.', options: ['looks at', 'looks for', 'looks after', 'looks like'], correctAnswer: 'looks like', points: 10 },
      { id: 'vp-look-8', sectionId: 'prepositions', type: 'multiple-choice', question: 'We are ___ a solution.', translation: 'We are looking for a solution.', options: ['looking at', 'looking for', 'looking after', 'looking like'], correctAnswer: 'looking for', points: 10 },
      { id: 'vp-look-9', sectionId: 'prepositions', type: 'multiple-choice', question: 'She always ___ the bright side.', translation: 'She always looks at the bright side.', options: ['looks at', 'looks for', 'looks after', 'looks like'], correctAnswer: 'looks at', points: 10 },
      { id: 'vp-look-10', sectionId: 'prepositions', type: 'multiple-choice', question: 'He can ___ the baby tomorrow.', translation: 'He can look after the baby tomorrow.', options: ['look at', 'look for', 'look after', 'look like'], correctAnswer: 'look after', points: 10 }
    ]
  },
  {
    id: 'verb-prep-think-1',
    title: 'Verbs with Prepositions: Think',
    description: 'Think about, think of, think over',
    icon: '🧠',
    exercises: [
      { id: 'vp-thi-1', sectionId: 'prepositions', type: 'multiple-choice', question: 'I need to ___ this decision.', translation: 'I need to think about this decision.', options: ['think about', 'think of', 'think over', 'think to'], correctAnswer: 'think about', points: 10 },
      { id: 'vp-thi-2', sectionId: 'prepositions', type: 'multiple-choice', question: 'What do you ___ this idea?', translation: 'What do you think of this idea?', options: ['think about', 'think of', 'think over', 'think to'], correctAnswer: 'think of', points: 10 },
      { id: 'vp-thi-3', sectionId: 'prepositions', type: 'multiple-choice', question: 'Let me ___ it over.', translation: 'Let me think it over.', options: ['think about', 'think of', 'think over', 'think to'], correctAnswer: 'think over', points: 10 },
      { id: 'vp-thi-4', sectionId: 'prepositions', type: 'multiple-choice', question: 'She is ___ the future.', translation: 'She is thinking about the future.', options: ['thinking about', 'thinking of', 'thinking over', 'thinking to'], correctAnswer: 'thinking about', points: 10 },
      { id: 'vp-thi-5', sectionId: 'prepositions', type: 'multiple-choice', question: 'I ___ of a solution.', translation: 'I thought of a solution.', options: ['thought about', 'thought of', 'thought over', 'thought to'], correctAnswer: 'thought of', points: 10 },
      { id: 'vp-thi-6', sectionId: 'prepositions', type: 'multiple-choice', question: 'They need to ___ the offer.', translation: 'They need to think over the offer.', options: ['think about', 'think of', 'think over', 'think to'], correctAnswer: 'think over', points: 10 },
      { id: 'vp-thi-7', sectionId: 'prepositions', type: 'multiple-choice', question: 'What are you ___ ?', translation: 'What are you thinking about?', options: ['thinking about', 'thinking of', 'thinking over', 'thinking to'], correctAnswer: 'thinking about', points: 10 },
      { id: 'vp-thi-8', sectionId: 'prepositions', type: 'multiple-choice', question: 'I don\'t ___ much of him.', translation: 'I do not think much of him.', options: ['think about', 'think of', 'think over', 'think to'], correctAnswer: 'think of', points: 10 },
      { id: 'vp-thi-9', sectionId: 'prepositions', type: 'multiple-choice', question: 'He needs to ___ his options.', translation: 'He needs to think over his options.', options: ['think about', 'think of', 'think over', 'think to'], correctAnswer: 'think over', points: 10 },
      { id: 'vp-thi-10', sectionId: 'prepositions', type: 'multiple-choice', question: 'I have been ___ about moving.', translation: 'I have been thinking about moving.', options: ['thinking about', 'thinking of', 'thinking over', 'thinking to'], correctAnswer: 'thinking about', points: 10 }
    ]
  },
  {
    id: 'verb-prep-talk-1',
    title: 'Verbs with Prepositions: Talk',
    description: 'Talk to, talk about, talk with',
    icon: '💬',
    exercises: [
      { id: 'vp-talk-1', sectionId: 'prepositions', type: 'multiple-choice', question: 'I need to ___ my advisor.', translation: 'I need to talk to my advisor.', options: ['talk to', 'talk about', 'talk with', 'talk for'], correctAnswer: 'talk to', points: 10 },
      { id: 'vp-talk-2', sectionId: 'prepositions', type: 'multiple-choice', question: 'Let\'s ___ the project.', translation: 'Let\'s talk about the project.', options: ['talk to', 'talk about', 'talk with', 'talk for'], correctAnswer: 'talk about', points: 10 },
      { id: 'vp-talk-3', sectionId: 'prepositions', type: 'multiple-choice', question: 'She likes to ___ her friends.', translation: 'She likes to talk with her friends.', options: ['talk to', 'talk about', 'talk with', 'talk for'], correctAnswer: 'talk with', points: 10 },
      { id: 'vp-talk-4', sectionId: 'prepositions', type: 'multiple-choice', question: 'They ___ business.', translation: 'They talk about business.', options: ['talk to', 'talk about', 'talk with', 'talk for'], correctAnswer: 'talk about', points: 10 },
      { id: 'vp-talk-5', sectionId: 'prepositions', type: 'multiple-choice', question: 'Can I ___ to you privately?', translation: 'Can I talk to you privately?', options: ['talk to', 'talk about', 'talk with', 'talk for'], correctAnswer: 'talk to', points: 10 },
      { id: 'vp-talk-6', sectionId: 'prepositions', type: 'multiple-choice', question: 'We ___ about the trip.', translation: 'We talk about the trip.', options: ['talk to', 'talk about', 'talk with', 'talk for'], correctAnswer: 'talk about', points: 10 },
      { id: 'vp-talk-7', sectionId: 'prepositions', type: 'multiple-choice', question: 'She was ___ with her mother.', translation: 'She was talking with her mother.', options: ['talking to', 'talking about', 'talking with', 'talking for'], correctAnswer: 'talking with', points: 10 },
      { id: 'vp-talk-8', sectionId: 'prepositions', type: 'multiple-choice', question: 'They don\'t like to ___ politics.', translation: 'They do not like to talk about politics.', options: ['talk to', 'talk about', 'talk with', 'talk for'], correctAnswer: 'talk about', points: 10 },
      { id: 'vp-talk-9', sectionId: 'prepositions', type: 'multiple-choice', question: 'I need to ___ the manager.', translation: 'I need to talk to the manager.', options: ['talk to', 'talk about', 'talk with', 'talk for'], correctAnswer: 'talk to', points: 10 },
      { id: 'vp-talk-10', sectionId: 'prepositions', type: 'multiple-choice', question: 'They were ___ about their plans.', translation: 'They were talking about their plans.', options: ['talking to', 'talking about', 'talking with', 'talking for'], correctAnswer: 'talking about', points: 10 }
    ]
  },
  {
    id: 'verb-prep-work-1',
    title: 'Verbs with Prepositions: Work',
    description: 'Work on, work for, work in, work at',
    icon: '💼',
    exercises: [
      { id: 'vp-work-1', sectionId: 'prepositions', type: 'multiple-choice', question: 'I am ___ a new project.', translation: 'I am working on a new project.', options: ['working on', 'working for', 'working in', 'working at'], correctAnswer: 'working on', points: 10 },
      { id: 'vp-work-2', sectionId: 'prepositions', type: 'multiple-choice', question: 'She ___ a big company.', translation: 'She works for a big company.', options: ['works on', 'works for', 'works in', 'works at'], correctAnswer: 'works for', points: 10 },
      { id: 'vp-work-3', sectionId: 'prepositions', type: 'multiple-choice', question: 'He ___ the marketing department.', translation: 'He works in the marketing department.', options: ['works on', 'works for', 'works in', 'works at'], correctAnswer: 'works in', points: 10 },
      { id: 'vp-work-4', sectionId: 'prepositions', type: 'multiple-choice', question: 'They ___ this company for years.', translation: 'They work for this company for years.', options: ['work on', 'work for', 'work in', 'work at'], correctAnswer: 'work for', points: 10 },
      { id: 'vp-work-5', sectionId: 'prepositions', type: 'multiple-choice', question: 'We need to ___ the problem.', translation: 'We need to work on the problem.', options: ['work on', 'work for', 'work in', 'work at'], correctAnswer: 'work on', points: 10 },
      { id: 'vp-work-6', sectionId: 'prepositions', type: 'multiple-choice', question: 'She ___ the hospital.', translation: 'She works at the hospital.', options: ['works on', 'works for', 'works in', 'works at'], correctAnswer: 'works at', points: 10 },
      { id: 'vp-work-7', sectionId: 'prepositions', type: 'multiple-choice', question: 'I have been ___ this for weeks.', translation: 'I have been working on this for weeks.', options: ['working on', 'working for', 'working in', 'working at'], correctAnswer: 'working on', points: 10 },
      { id: 'vp-work-8', sectionId: 'prepositions', type: 'multiple-choice', question: 'They ___ education.', translation: 'They work in education.', options: ['work on', 'work for', 'work in', 'work at'], correctAnswer: 'work in', points: 10 },
      { id: 'vp-work-9', sectionId: 'prepositions', type: 'multiple-choice', question: 'He wants to ___ a better job.', translation: 'He wants to work for a better company.', options: ['work on', 'work for', 'work in', 'work at'], correctAnswer: 'work for', points: 10 },
      { id: 'vp-work-10', sectionId: 'prepositions', type: 'multiple-choice', question: 'She ___ from home.', translation: 'She works from home.', options: ['works on', 'works for', 'works in', 'works at'], correctAnswer: 'works in', points: 10 }
    ]
  },
  {
    id: 'adj-prep-tired-1',
    title: 'Adjectives with Prepositions: Tired',
    description: 'Tired of, tired from',
    icon: '😴',
    exercises: [
      { id: 'ap-tir-1', sectionId: 'prepositions', type: 'multiple-choice', question: 'I am ___ this work.', translation: 'I am tired of this work.', options: ['tired of', 'tired from', 'tired with', 'tired by'], correctAnswer: 'tired of', points: 10 },
      { id: 'ap-tir-2', sectionId: 'prepositions', type: 'multiple-choice', question: 'She is ___ studying.', translation: 'She is tired of studying.', options: ['tired of', 'tired from', 'tired with', 'tired by'], correctAnswer: 'tired of', points: 10 },
      { id: 'ap-tir-3', sectionId: 'prepositions', type: 'multiple-choice', question: 'He is ___ running.', translation: 'He is tired of running.', options: ['tired of', 'tired from', 'tired with', 'tired by'], correctAnswer: 'tired of', points: 10 },
      { id: 'ap-tir-4', sectionId: 'prepositions', type: 'multiple-choice', question: 'We are ___ waiting.', translation: 'We are tired of waiting.', options: ['tired of', 'tired from', 'tired with', 'tired by'], correctAnswer: 'tired of', points: 10 },
      { id: 'ap-tir-5', sectionId: 'prepositions', type: 'multiple-choice', question: 'They are ___ this situation.', translation: 'They are tired of this situation.', options: ['tired of', 'tired from', 'tired with', 'tired by'], correctAnswer: 'tired of', points: 10 },
      { id: 'ap-tir-6', sectionId: 'prepositions', type: 'multiple-choice', question: 'I am ___ the long drive.', translation: 'I am tired from the long drive.', options: ['tired of', 'tired from', 'tired with', 'tired by'], correctAnswer: 'tired from', points: 10 },
      { id: 'ap-tir-7', sectionId: 'prepositions', type: 'multiple-choice', question: 'She is ___ all the noise.', translation: 'She is tired from all the noise.', options: ['tired of', 'tired from', 'tired with', 'tired by'], correctAnswer: 'tired from', points: 10 },
      { id: 'ap-tir-8', sectionId: 'prepositions', type: 'multiple-choice', question: 'He is ___ the pressure.', translation: 'He is tired from the pressure.', options: ['tired of', 'tired from', 'tired with', 'tired by'], correctAnswer: 'tired from', points: 10 },
      { id: 'ap-tir-9', sectionId: 'prepositions', type: 'multiple-choice', question: 'We are ___ the complaints.', translation: 'We are tired from the complaints.', options: ['tired of', 'tired from', 'tired with', 'tired by'], correctAnswer: 'tired from', points: 10 },
      { id: 'ap-tir-10', sectionId: 'prepositions', type: 'multiple-choice', question: 'They are ___ the process.', translation: 'They are tired of the process.', options: ['tired of', 'tired from', 'tired with', 'tired by'], correctAnswer: 'tired of', points: 10 }
    ]
  },
  {
    id: 'adj-prep-good-1',
    title: 'Adjectives with Prepositions: Good',
    description: 'Good at, good with, good for',
    icon: '👍',
    exercises: [
      { id: 'ap-good-1', sectionId: 'prepositions', type: 'multiple-choice', question: 'She is ___ math.', translation: 'She is good at math.', options: ['good at', 'good in', 'good with', 'good for'], correctAnswer: 'good at', points: 10 },
      { id: 'ap-good-2', sectionId: 'prepositions', type: 'multiple-choice', question: 'He is ___ people.', translation: 'He is good with people.', options: ['good at', 'good in', 'good with', 'good for'], correctAnswer: 'good with', points: 10 },
      { id: 'ap-good-3', sectionId: 'prepositions', type: 'multiple-choice', question: 'This is ___ your health.', translation: 'This is good for your health.', options: ['good at', 'good in', 'good with', 'good for'], correctAnswer: 'good for', points: 10 },
      { id: 'ap-good-4', sectionId: 'prepositions', type: 'multiple-choice', question: 'They are ___ languages.', translation: 'They are good at languages.', options: ['good at', 'good in', 'good with', 'good for'], correctAnswer: 'good at', points: 10 },
      { id: 'ap-good-5', sectionId: 'prepositions', type: 'multiple-choice', question: 'You are ___ cooking.', translation: 'You are good at cooking.', options: ['good at', 'good in', 'good with', 'good for'], correctAnswer: 'good at', points: 10 },
      { id: 'ap-good-6', sectionId: 'prepositions', type: 'multiple-choice', question: 'She is ___ children.', translation: 'She is good with children.', options: ['good at', 'good in', 'good with', 'good for'], correctAnswer: 'good with', points: 10 },
      { id: 'ap-good-7', sectionId: 'prepositions', type: 'multiple-choice', question: 'This book is ___ learning.', translation: 'This book is good for learning.', options: ['good at', 'good in', 'good with', 'good for'], correctAnswer: 'good for', points: 10 },
      { id: 'ap-good-8', sectionId: 'prepositions', type: 'multiple-choice', question: 'He is ___ sports.', translation: 'He is good at sports.', options: ['good at', 'good in', 'good with', 'good for'], correctAnswer: 'good at', points: 10 },
      { id: 'ap-good-9', sectionId: 'prepositions', type: 'multiple-choice', question: 'They are ___ problem solving.', translation: 'They are good at problem solving.', options: ['good at', 'good in', 'good with', 'good for'], correctAnswer: 'good at', points: 10 },
      { id: 'ap-good-10', sectionId: 'prepositions', type: 'multiple-choice', question: 'Exercise is ___ you.', translation: 'Exercise is good for you.', options: ['good at', 'good in', 'good with', 'good for'], correctAnswer: 'good for', points: 10 }
    ]
  },
  {
    id: 'adj-prep-interested-1',
    title: 'Adjectives with Prepositions: Interested',
    description: 'Interested in',
    icon: '🤔',
    exercises: [
      { id: 'ap-int-1', sectionId: 'prepositions', type: 'multiple-choice', question: 'I am ___ learning English.', translation: 'I am interested in learning English.', options: ['interested in', 'interested at', 'interested by', 'interested on'], correctAnswer: 'interested in', points: 10 },
      { id: 'ap-int-2', sectionId: 'prepositions', type: 'multiple-choice', question: 'She is ___ art.', translation: 'She is interested in art.', options: ['interested in', 'interested at', 'interested by', 'interested on'], correctAnswer: 'interested in', points: 10 },
      { id: 'ap-int-3', sectionId: 'prepositions', type: 'multiple-choice', question: 'He is ___ the job.', translation: 'He is interested in the job.', options: ['interested in', 'interested at', 'interested by', 'interested on'], correctAnswer: 'interested in', points: 10 },
      { id: 'ap-int-4', sectionId: 'prepositions', type: 'multiple-choice', question: 'They are ___ this opportunity.', translation: 'They are interested in this opportunity.', options: ['interested in', 'interested at', 'interested by', 'interested on'], correctAnswer: 'interested in', points: 10 },
      { id: 'ap-int-5', sectionId: 'prepositions', type: 'multiple-choice', question: 'We are ___ the proposal.', translation: 'We are interested in the proposal.', options: ['interested in', 'interested at', 'interested by', 'interested on'], correctAnswer: 'interested in', points: 10 },
      { id: 'ap-int-6', sectionId: 'prepositions', type: 'multiple-choice', question: 'Are you ___ joining us?', translation: 'Are you interested in joining us?', options: ['interested in', 'interested at', 'interested by', 'interested on'], correctAnswer: 'interested in', points: 10 },
      { id: 'ap-int-7', sectionId: 'prepositions', type: 'multiple-choice', question: 'She was ___ the offer.', translation: 'She was interested in the offer.', options: ['interested in', 'interested at', 'interested by', 'interested on'], correctAnswer: 'interested in', points: 10 },
      { id: 'ap-int-8', sectionId: 'prepositions', type: 'multiple-choice', question: 'I became ___ this topic.', translation: 'I became interested in this topic.', options: ['interested in', 'interested at', 'interested by', 'interested on'], correctAnswer: 'interested in', points: 10 },
      { id: 'ap-int-9', sectionId: 'prepositions', type: 'multiple-choice', question: 'They seem ___ the plan.', translation: 'They seem interested in the plan.', options: ['interested in', 'interested at', 'interested by', 'interested on'], correctAnswer: 'interested in', points: 10 },
      { id: 'ap-int-10', sectionId: 'prepositions', type: 'multiple-choice', question: 'Are you ___ learning more?', translation: 'Are you interested in learning more?', options: ['interested in', 'interested at', 'interested by', 'interested on'], correctAnswer: 'interested in', points: 10 }
    ]
  },
  {
    id: 'adj-prep-scared-1',
    title: 'Adjectives with Prepositions: Scared',
    description: 'Scared of, scared by, scared to',
    icon: '😨',
    exercises: [
      { id: 'ap-sca-1', sectionId: 'prepositions', type: 'multiple-choice', question: 'I am ___ spiders.', translation: 'I am scared of spiders.', options: ['scared of', 'scared by', 'scared to', 'scared at'], correctAnswer: 'scared of', points: 10 },
      { id: 'ap-sca-2', sectionId: 'prepositions', type: 'multiple-choice', question: 'She is ___ the dark.', translation: 'She is scared of the dark.', options: ['scared of', 'scared by', 'scared to', 'scared at'], correctAnswer: 'scared of', points: 10 },
      { id: 'ap-sca-3', sectionId: 'prepositions', type: 'multiple-choice', question: 'He was ___ by the noise.', translation: 'He was scared by the noise.', options: ['scared of', 'scared by', 'scared to', 'scared at'], correctAnswer: 'scared by', points: 10 },
      { id: 'ap-sca-4', sectionId: 'prepositions', type: 'multiple-choice', question: 'They are ___ of heights.', translation: 'They are scared of heights.', options: ['scared of', 'scared by', 'scared to', 'scared at'], correctAnswer: 'scared of', points: 10 },
      { id: 'ap-sca-5', sectionId: 'prepositions', type: 'multiple-choice', question: 'We are ___ to fly.', translation: 'We are scared to fly.', options: ['scared of', 'scared by', 'scared to', 'scared at'], correctAnswer: 'scared to', points: 10 },
      { id: 'ap-sca-6', sectionId: 'prepositions', type: 'multiple-choice', question: 'The child is ___ of dogs.', translation: 'The child is scared of dogs.', options: ['scared of', 'scared by', 'scared to', 'scared at'], correctAnswer: 'scared of', points: 10 },
      { id: 'ap-sca-7', sectionId: 'prepositions', type: 'multiple-choice', question: 'She was ___ by the movie.', translation: 'She was scared by the movie.', options: ['scared of', 'scared by', 'scared to', 'scared at'], correctAnswer: 'scared by', points: 10 },
      { id: 'ap-sca-8', sectionId: 'prepositions', type: 'multiple-choice', question: 'I am ___ to go alone.', translation: 'I am scared to go alone.', options: ['scared of', 'scared by', 'scared to', 'scared at'], correctAnswer: 'scared to', points: 10 },
      { id: 'ap-sca-9', sectionId: 'prepositions', type: 'multiple-choice', question: 'They were ___ of the dark.', translation: 'They were scared of the dark.', options: ['scared of', 'scared by', 'scared to', 'scared at'], correctAnswer: 'scared of', points: 10 },
      { id: 'ap-sca-10', sectionId: 'prepositions', type: 'multiple-choice', question: 'He is ___ to try new things.', translation: 'He is scared to try new things.', options: ['scared of', 'scared by', 'scared to', 'scared at'], correctAnswer: 'scared to', points: 10 }
    ]
  },
  {
    id: 'adj-prep-similar-1',
    title: 'Adjectives with Prepositions: Similar',
    description: 'Similar to, similar in',
    icon: '🔄',
    exercises: [
      { id: 'ap-sim-1', sectionId: 'prepositions', type: 'multiple-choice', question: 'This is ___ that one.', translation: 'This is similar to that one.', options: ['similar to', 'similar in', 'similar with', 'similar as'], correctAnswer: 'similar to', points: 10 },
      { id: 'ap-sim-2', sectionId: 'prepositions', type: 'multiple-choice', question: 'Her style is ___ her mother\'s.', translation: 'Her style is similar to her mother\'s.', options: ['similar to', 'similar in', 'similar with', 'similar as'], correctAnswer: 'similar to', points: 10 },
      { id: 'ap-sim-3', sectionId: 'prepositions', type: 'multiple-choice', question: 'The two houses are ___ design.', translation: 'The two houses are similar in design.', options: ['similar to', 'similar in', 'similar with', 'similar as'], correctAnswer: 'similar in', points: 10 },
      { id: 'ap-sim-4', sectionId: 'prepositions', type: 'multiple-choice', question: 'Your opinion is ___ mine.', translation: 'Your opinion is similar to mine.', options: ['similar to', 'similar in', 'similar with', 'similar as'], correctAnswer: 'similar to', points: 10 },
      { id: 'ap-sim-5', sectionId: 'prepositions', type: 'multiple-choice', question: 'These problems are ___ those.', translation: 'These problems are similar to those.', options: ['similar to', 'similar in', 'similar with', 'similar as'], correctAnswer: 'similar to', points: 10 },
      { id: 'ap-sim-6', sectionId: 'prepositions', type: 'multiple-choice', question: 'The products are ___ price.', translation: 'The products are similar in price.', options: ['similar to', 'similar in', 'similar with', 'similar as'], correctAnswer: 'similar in', points: 10 },
      { id: 'ap-sim-7', sectionId: 'prepositions', type: 'multiple-choice', question: 'This is ___ the previous version.', translation: 'This is similar to the previous version.', options: ['similar to', 'similar in', 'similar with', 'similar as'], correctAnswer: 'similar to', points: 10 },
      { id: 'ap-sim-8', sectionId: 'prepositions', type: 'multiple-choice', question: 'Their answers were ___ each other.', translation: 'Their answers were similar to each other.', options: ['similar to', 'similar in', 'similar with', 'similar as'], correctAnswer: 'similar to', points: 10 },
      { id: 'ap-sim-9', sectionId: 'prepositions', type: 'multiple-choice', question: 'The situations are ___ nature.', translation: 'The situations are similar in nature.', options: ['similar to', 'similar in', 'similar with', 'similar as'], correctAnswer: 'similar in', points: 10 },
      { id: 'ap-sim-10', sectionId: 'prepositions', type: 'multiple-choice', question: 'His voice is ___ his brother\'s.', translation: 'His voice is similar to his brother\'s.', options: ['similar to', 'similar in', 'similar with', 'similar as'], correctAnswer: 'similar to', points: 10 }
    ]
  }
];

export const comparisonsExercisePacks: ExercisePack[] = [
  {
    id: 'comparatives-1',
    title: 'Comparatives',
    description: 'Practice -er than',
    icon: '⚖️',
    exercises: [
      { id: 'comp-ex1', sectionId: 'comparisons', type: 'multiple-choice', question: 'She is ___ than her sister.', translation: 'She is taller than her sister.', options: ['tall', 'taller', 'tallest', 'more tall'], correctAnswer: 'taller', points: 10 },
      { id: 'comp-ex2', sectionId: 'comparisons', type: 'multiple-choice', question: 'This book is ___ that one.', translation: 'This book is more interesting than that one.', options: ['interesting', 'more interesting', 'interestinger', 'most interesting'], correctAnswer: 'more interesting', points: 10 }
    ]
  },
  {
    id: 'superlatives-1',
    title: 'Superlatives',
    description: 'Practice -est and most',
    icon: '👑',
    exercises: [
      { id: 'sup-ex1', sectionId: 'comparisons', type: 'multiple-choice', question: 'She is the ___ student in the class.', translation: 'She is the best student in the class.', options: ['good', 'better', 'best', 'most good'], correctAnswer: 'best', points: 10 },
      { id: 'sup-ex2', sectionId: 'comparisons', type: 'multiple-choice', question: 'This is the ___ movie I have ever seen.', translation: 'This is the most interesting movie I have ever seen.', options: ['interesting', 'more interesting', 'most interesting', 'interestingest'], correctAnswer: 'most interesting', points: 10 }
    ]
  }
];