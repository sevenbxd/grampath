export type ChatLevel = 'easy' | 'medium' | 'hard';
export type ChatLength = 'quick' | 'short' | 'medium' | 'long' | 'book';

export interface ChatAlternative {
  text: string;
  type: 'native' | 'acceptable' | 'wrong';
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  translation: string;
  alternatives?: ChatAlternative[];
  answer?: string;
  keywords?: string[];
}

export interface ChatScenario {
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: ChatLength;
  messages: ChatMessage[];
  xpReward: number;
  gemReward: number;
}

// FÁCIL - Múltipla escolha com 1 correta + 2 erradas
export const easyQuickChats: ChatScenario[] = [
  {
    id: 'hi-easy-q',
    title: 'Saying Hi',
    description: 'A simple greeting',
    icon: '👋',
    difficulty: 'quick',
    xpReward: 30,
    gemReward: 1,
    messages: [
      { id: 'e1', sender: 'bot', text: 'Hello!', translation: 'Olá!' },
      { id: 'e2', sender: 'user', text: 'Hello!', translation: 'Olá!', alternatives: [
        { text: 'Hello!', type: 'native' },
        { text: 'Good morning!', type: 'wrong' },
        { text: 'Goodbye!', type: 'wrong' },
      ]},
      { id: 'e3', sender: 'bot', text: 'How are you?', translation: 'Como vai?' },
      { id: 'e4', sender: 'user', text: 'Good, thanks!', translation: 'Bem, obrigado!', alternatives: [
        { text: 'Good, thanks!', type: 'native' },
        { text: 'Bad!', type: 'wrong' },
        { text: 'I hate you!', type: 'wrong' },
      ]},
      { id: 'e5', sender: 'bot', text: 'See you!', translation: 'Até!' },
    ],
  },
  {
    id: 'name-easy-q',
    title: 'Your Name',
    description: 'Introduce yourself',
    icon: '📝',
    difficulty: 'quick',
    xpReward: 30,
    gemReward: 1,
    messages: [
      { id: 'n1', sender: 'bot', text: 'What\'s your name?', translation: 'Qual é o seu nome?' },
      { id: 'n2', sender: 'user', text: 'I\'m Alex.', translation: 'Sou o Alex.', alternatives: [
        { text: 'I\'m Alex.', type: 'native' },
        { text: 'My house is big.', type: 'wrong' },
        { text: 'I want pizza.', type: 'wrong' },
      ]},
      { id: 'n3', sender: 'bot', text: 'Nice to meet you!', translation: 'Prazer em conhecê-lo!' },
    ],
  },
  {
    id: 'thanks-easy-q',
    title: 'Saying Thanks',
    description: 'Thank someone',
    icon: '🙏',
    difficulty: 'quick',
    xpReward: 30,
    gemReward: 1,
    messages: [
      { id: 't1', sender: 'bot', text: 'Here you go!', translation: 'Aqui está!' },
      { id: 't2', sender: 'user', text: 'Thank you!', translation: 'Obrigado!', alternatives: [
        { text: 'Thank you!', type: 'native' },
        { text: 'Go away!', type: 'wrong' },
        { text: 'I don\'t want it.', type: 'wrong' },
      ]},
      { id: 't3', sender: 'bot', text: 'You\'re welcome!', translation: 'De nada!' },
    ],
  },
  // Greeting - Easy Quick
  {
    id: 'greeting-hello-easy-q',
    title: 'Hello',
    description: 'Say hello',
    icon: '👋',
    difficulty: 'quick',
    xpReward: 30,
    gemReward: 1,
    messages: [
      { id: 'gh1', sender: 'bot', text: 'Good morning!', translation: 'Bom dia!' },
      { id: 'gh2', sender: 'user', text: 'Good morning!', translation: 'Bom dia!', alternatives: [
        { text: 'Good morning!', type: 'native' },
        { text: 'Good night!', type: 'wrong' },
        { text: 'See you!', type: 'wrong' },
      ]},
      { id: 'gh3', sender: 'bot', text: 'How can I help you?', translation: 'Como posso ajudar?' },
    ],
  },
  {
    id: 'greeting-bye-easy-q',
    title: 'Goodbye',
    description: 'Say goodbye',
    icon: '👋',
    difficulty: 'quick',
    xpReward: 30,
    gemReward: 1,
    messages: [
      { id: 'gb1', sender: 'bot', text: 'Have a nice day!', translation: 'Tenha um bom dia!' },
      { id: 'gb2', sender: 'user', text: 'Goodbye!', translation: 'Tchau!', alternatives: [
        { text: 'Goodbye!', type: 'native' },
        { text: 'Hello!', type: 'wrong' },
        { text: 'Thanks!', type: 'wrong' },
      ]},
      { id: 'gb3', sender: 'bot', text: 'Bye!', translation: 'Tchau!' },
    ],
  },
  // Shopping Basic - Easy Quick
  {
    id: 'shopping-price-easy-q',
    title: 'Ask Price',
    description: 'Ask how much something costs',
    icon: '💲',
    difficulty: 'quick',
    xpReward: 30,
    gemReward: 1,
    messages: [
      { id: 'sp1', sender: 'bot', text: 'How much is this?', translation: 'Quanto custa isso?' },
      { id: 'sp2', sender: 'user', text: 'It\'s $10.', translation: 'É $10.', alternatives: [
        { text: 'It\'s $10.', type: 'native' },
        { text: 'I like it.', type: 'wrong' },
        { text: 'Too expensive!', type: 'wrong' },
      ]},
      { id: 'sp3', sender: 'bot', text: 'Great!', translation: 'Ótimo!' },
    ],
  },
  {
    id: 'shopping-size-easy-q',
    title: 'Ask Size',
    description: 'Ask for a different size',
    icon: '👕',
    difficulty: 'quick',
    xpReward: 30,
    gemReward: 1,
    messages: [
      { id: 'ss1', sender: 'bot', text: 'Do you need a different size?', translation: 'Você precisa de um tamanho diferente?' },
      { id: 'ss2', sender: 'user', text: 'Yes, a medium please.', translation: 'Sim, um médio por favor.', alternatives: [
        { text: 'Yes, a medium please.', type: 'native' },
        { text: 'No size.', type: 'wrong' },
        { text: 'I want big!', type: 'wrong' },
      ]},
      { id: 'ss3', sender: 'bot', text: 'Here you go!', translation: 'Aqui está!' },
    ],
  },
  // Directions - Easy Quick
  {
    id: 'directions-where-easy-q',
    title: 'Where is...',
    description: 'Ask for location',
    icon: '🗺️',
    difficulty: 'quick',
    xpReward: 30,
    gemReward: 1,
    messages: [
      { id: 'dw1', sender: 'bot', text: 'Excuse me, can I help you?', translation: 'Com licença, posso ajudar?' },
      { id: 'dw2', sender: 'user', text: 'Where is the bathroom?', translation: 'Onde fica o banheiro?', alternatives: [
        { text: 'Where is the bathroom?', type: 'native' },
        { text: 'I want food.', type: 'wrong' },
        { text: 'No thanks!', type: 'wrong' },
      ]},
      { id: 'dw3', sender: 'bot', text: 'It\'s over there.', translation: 'Fica ali.' },
    ],
  },
  {
    id: 'directions-left-right-easy-q',
    title: 'Left or Right',
    description: 'Ask which direction',
    icon: '➡️',
    difficulty: 'quick',
    xpReward: 30,
    gemReward: 1,
    messages: [
      { id: 'dlr1', sender: 'bot', text: 'Go left or right?', translation: 'Vai para esquerda ou direita?' },
      { id: 'dlr2', sender: 'user', text: 'Left, please.', translation: 'Esquerda, por favor.', alternatives: [
        { text: 'Left, please.', type: 'native' },
        { text: 'Up!', type: 'wrong' },
        { text: 'I don\'t know.', type: 'wrong' },
      ]},
      { id: 'dlr3', sender: 'bot', text: 'OK!', translation: 'OK!' },
    ],
  },
  // Weather - Easy Quick
  {
    id: 'weather-hot-easy-q',
    title: 'Hot Weather',
    description: 'Talk about hot weather',
    icon: '☀️',
    difficulty: 'quick',
    xpReward: 30,
    gemReward: 1,
    messages: [
      { id: 'wh1', sender: 'bot', text: 'It\'s very hot today!', translation: 'Está muito quente hoje!' },
      { id: 'wh2', sender: 'user', text: 'Yes, it is!', translation: 'Sim, está!', alternatives: [
        { text: 'Yes, it is!', type: 'native' },
        { text: 'I like snow!', type: 'wrong' },
        { text: 'It\'s cold!', type: 'wrong' },
      ]},
      { id: 'wh3', sender: 'bot', text: 'Let\'s get some water.', translation: 'Vamos pegar água.' },
    ],
  },
  {
    id: 'weather-rain-easy-q',
    title: 'Rainy Weather',
    description: 'Talk about rain',
    icon: '🌧️',
    difficulty: 'quick',
    xpReward: 30,
    gemReward: 1,
    messages: [
      { id: 'wr1', sender: 'bot', text: 'It\'s raining outside!', translation: 'Está chovendo lá fora!' },
      { id: 'wr2', sender: 'user', text: 'Yes, I see!', translation: 'Sim, eu vejo!', alternatives: [
        { text: 'Yes, I see!', type: 'native' },
        { text: 'I like sun!', type: 'wrong' },
        { text: 'No rain!', type: 'wrong' },
      ]},
      { id: 'wr3', sender: 'bot', text: 'Take an umbrella!', translation: 'Pegue um guarda-chuva!' },
    ],
  },
  {
    id: 'weather-easy-q-2',
    title: 'Weather Report',
    description: 'Talk about weather',
    icon: '🌤️',
    difficulty: 'quick',
    xpReward: 30,
    gemReward: 1,
    messages: [
      { id: 'w21', sender: 'bot', text: 'The sun is shining!', translation: 'O sol está brilhando!' },
      { id: 'w22', sender: 'user', text: 'Great!', translation: 'Ótimo!', alternatives: [
        { text: 'Great!', type: 'native' },
        { text: 'I hate sun!', type: 'wrong' },
        { text: 'It is dark.', type: 'wrong' },
      ]},
      { id: 'w23', sender: 'bot', text: 'Do you like summer?', translation: 'Você gosta do verão?' },
    ],
  },
  {
    id: 'food-easy-q-2',
    title: 'Food Order',
    description: 'Order food',
    icon: '🍕',
    difficulty: 'quick',
    xpReward: 30,
    gemReward: 1,
    messages: [
      { id: 'f21', sender: 'bot', text: 'What would you like?', translation: 'O que você gostaria?' },
      { id: 'f22', sender: 'user', text: 'I want pizza.', translation: 'Eu quero pizza.', alternatives: [
        { text: 'I want pizza.', type: 'native' },
        { text: 'I want a shoe.', type: 'wrong' },
        { text: 'Nothing!', type: 'wrong' },
      ]},
      { id: 'f23', sender: 'bot', text: 'Pepperoni or cheese?', translation: 'Pepperoni ou queijo?' },
    ],
  },
  {
    id: 'time-easy-q-2',
    title: 'What Time',
    description: 'Ask for time',
    icon: '⏰',
    difficulty: 'quick',
    xpReward: 30,
    gemReward: 1,
    messages: [
      { id: 't21', sender: 'bot', text: 'Excuse me, do you have the time?', translation: 'Com licença, você tem as horas?' },
      { id: 't22', sender: 'user', text: 'It is 3 oclock.', translation: 'São 3 horas.', alternatives: [
        { text: 'It is 3 oclock.', type: 'native' },
        { text: 'It is a cat.', type: 'wrong' },
        { text: 'Blue color.', type: 'wrong' },
      ]},
      { id: 't23', sender: 'bot', text: 'Thank you!', translation: 'Obrigado!' },
    ],
  },
  {
    id: 'shopping-easy-q-2',
    title: 'Shopping',
    description: 'Buy something',
    icon: '🛒',
    difficulty: 'quick',
    xpReward: 30,
    gemReward: 1,
    messages: [
      { id: 's21', sender: 'bot', text: 'Can I help you?', translation: 'Posso ajudar?' },
      { id: 's22', sender: 'user', text: 'Yes, a shirt.', translation: 'Sim, uma camisa.', alternatives: [
        { text: 'Yes, a shirt.', type: 'native' },
        { text: 'I want a car.', type: 'wrong' },
        { text: 'No, goodbye.', type: 'wrong' },
      ]},
      { id: 's23', sender: 'bot', text: 'What size?', translation: 'Qual tamanho?' },
    ],
  },
  {
    id: 'direction-easy-q-2',
    title: 'Directions',
    description: 'Ask for directions',
    icon: '🧭',
    difficulty: 'quick',
    xpReward: 30,
    gemReward: 1,
    messages: [
      { id: 'd21', sender: 'bot', text: 'Where is the station?', translation: 'Onde fica a estação?' },
      { id: 'd22', sender: 'user', text: 'Turn left.', translation: 'Vire à esquerda.', alternatives: [
        { text: 'Turn left.', type: 'native' },
        { text: 'Go up!', type: 'wrong' },
        { text: 'It is a book.', type: 'wrong' },
      ]},
      { id: 'd23', sender: 'bot', text: 'Thank you!', translation: 'Obrigado!' },
    ],
  },
  {
    id: 'hobby-easy-q-2',
    title: 'Hobbies',
    description: 'Talk about hobbies',
    icon: '🎸',
    difficulty: 'quick',
    xpReward: 30,
    gemReward: 1,
    messages: [
      { id: 'h21', sender: 'bot', text: 'What do you do for fun?', translation: 'O que você faz para se distrair?' },
      { id: 'h22', sender: 'user', text: 'I play soccer.', translation: 'Eu jogo futebol.', alternatives: [
        { text: 'I play soccer.', type: 'native' },
        { text: 'I eat homework.', type: 'wrong' },
        { text: 'I sleep work.', type: 'wrong' },
      ]},
      { id: 'h23', sender: 'bot', text: 'Cool!', translation: 'Legal!' },
    ],
  },
  {
    id: 'family-easy-q-2',
    title: 'Family',
    description: 'Talk about family',
    icon: '👨‍👩‍👧',
    difficulty: 'quick',
    xpReward: 30,
    gemReward: 1,
    messages: [
      { id: 'fa21', sender: 'bot', text: 'Do you have siblings?', translation: 'Você tem irmãos?' },
      { id: 'fa22', sender: 'user', text: 'Yes, a brother.', translation: 'Sim, um irmão.', alternatives: [
        { text: 'Yes, a brother.', type: 'native' },
        { text: 'I have a robot.', type: 'wrong' },
        { text: 'No eyes.', type: 'wrong' },
      ]},
      { id: 'fa23', sender: 'bot', text: 'Nice!', translation: 'Legal!' },
    ],
  },
  {
    id: 'pet-easy-q-2',
    title: 'Pets',
    description: 'Talk about pets',
    icon: '🐕',
    difficulty: 'quick',
    xpReward: 30,
    gemReward: 1,
    messages: [
      { id: 'p21', sender: 'bot', text: 'Do you have a pet?', translation: 'Você tem um animal de estimação?' },
      { id: 'p22', sender: 'user', text: 'Yes, a dog.', translation: 'Sim, um cachorro.', alternatives: [
        { text: 'Yes, a dog.', type: 'native' },
        { text: 'I have a rock.', type: 'wrong' },
        { text: 'No, I eat cats.', type: 'wrong' },
      ]},
      { id: 'p23', sender: 'bot', text: 'What is its name?', translation: 'Qual é o nome dele?' },
    ],
  },
  {
    id: 'color-easy-q-2',
    title: 'Colors',
    description: 'Talk about colors',
    icon: '🌈',
    difficulty: 'quick',
    xpReward: 30,
    gemReward: 1,
    messages: [
      { id: 'cl21', sender: 'bot', text: 'What is your favorite color?', translation: 'Qual é sua cor favorita?' },
      { id: 'cl22', sender: 'user', text: 'Blue.', translation: 'Azul.', alternatives: [
        { text: 'Blue.', type: 'native' },
        { text: 'I like clouds.', type: 'wrong' },
        { text: 'Music is red.', type: 'wrong' },
      ]},
      { id: 'cl23', sender: 'bot', text: 'Mine too!', translation: 'A minha também!' },
    ],
  },
  {
    id: 'day-easy-q-2',
    title: 'Today',
    description: 'Talk about the day',
    icon: '📅',
    difficulty: 'quick',
    xpReward: 30,
    gemReward: 1,
    messages: [
      { id: 'dy21', sender: 'bot', text: 'How is your day?', translation: 'Como está seu dia?' },
      { id: 'dy22', sender: 'user', text: 'It is good.', translation: 'Está bom.', alternatives: [
        { text: 'It is good.', type: 'native' },
        { text: 'My day is a car.', type: 'wrong' },
        { text: 'I am a book.', type: 'wrong' },
      ]},
      { id: 'dy23', sender: 'bot', text: 'That is great!', translation: 'Isso é ótimo!' },
    ],
  }
];

export const easyShortChats: ChatScenario[] = [
  {
    id: 'coffee-easy-s',
    title: 'Order Coffee',
    description: 'Get a coffee',
    icon: '☕',
    difficulty: 'short',
    xpReward: 40,
    gemReward: 2,
    messages: [
      { id: 'c1', sender: 'bot', text: 'Hi! What do you want?', translation: 'Oi! O que você quer?' },
      { id: 'c2', sender: 'user', text: 'A coffee, please.', translation: 'Um café, por favor.', alternatives: [
        { text: 'A coffee, please.', type: 'native' },
        { text: 'I want nothing.', type: 'wrong' },
        { text: 'Give me money.', type: 'wrong' },
      ]},
      { id: 'c3', sender: 'bot', text: 'Hot or cold?', translation: 'Quente ou gelado?' },
      { id: 'c4', sender: 'user', text: 'Hot, please.', translation: 'Quente, por favor.', alternatives: [
        { text: 'Hot, please.', type: 'native' },
        { text: 'I want ice.', type: 'wrong' },
        { text: 'Cold soup.', type: 'wrong' },
      ]},
      { id: 'c5', sender: 'bot', text: 'Here! $3.', translation: 'Aqui! $3.' },
      { id: 'c6', sender: 'user', text: 'Thanks!', translation: 'Obrigado!', alternatives: [
        { text: 'Thanks!', type: 'native' },
        { text: 'No thanks!', type: 'wrong' },
        { text: 'Too expensive!', type: 'wrong' },
      ]},
    ],
  },
  {
    id: 'time-easy-s',
    title: 'What Time',
    description: 'Ask for the time',
    icon: '🕐',
    difficulty: 'short',
    xpReward: 40,
    gemReward: 2,
    messages: [
      { id: 'ti1', sender: 'bot', text: 'Excuse me! What time is it?', translation: 'Com licença! Que horas são?' },
      { id: 'ti2', sender: 'user', text: 'It\'s 3 o\'clock.', translation: 'São 3 horas.', alternatives: [
        { text: 'It\'s 3 o\'clock.', type: 'native' },
        { text: 'It\'s Tuesday.', type: 'wrong' },
        { text: 'I don\'t know.', type: 'wrong' },
      ]},
      { id: 'ti3', sender: 'bot', text: 'Thanks!', translation: 'Obrigado!' },
    ],
  },
  {
    id: 'how-easy-s',
    title: 'How Are You',
    description: 'Ask how someone is',
    icon: '💭',
    difficulty: 'short',
    xpReward: 40,
    gemReward: 2,
    messages: [
      { id: 'h1', sender: 'bot', text: 'Hey! How are you?', translation: 'Oi! Como vai?' },
      { id: 'h2', sender: 'user', text: 'I\'m fine! And you?', translation: 'Estou bem! E você?', alternatives: [
        { text: 'I\'m fine! And you?', type: 'native' },
        { text: 'I\'m dead.', type: 'wrong' },
        { text: 'Go away!', type: 'wrong' },
      ]},
      { id: 'h3', sender: 'bot', text: 'I\'m great!', translation: 'Estou ótimo!' },
      { id: 'h4', sender: 'user', text: 'Nice!', translation: 'Legal!', alternatives: [
        { text: 'Nice!', type: 'native' },
        { text: 'Terrible!', type: 'wrong' },
        { text: 'I\'m angry!', type: 'wrong' },
      ]},
    ],
  },
  {
    id: 'restaurant-easy-s',
    title: 'Restaurant',
    description: 'Order at a restaurant',
    icon: '🍴',
    difficulty: 'short',
    xpReward: 40,
    gemReward: 2,
    messages: [
      { id: 're1', sender: 'bot', text: 'Welcome! Table for two?', translation: 'Bem-vindos! Mesa para dois?' },
      { id: 're2', sender: 'user', text: 'Yes, please.', translation: 'Sim, por favor.', alternatives: [
        { text: 'Yes, please.', type: 'native' },
        { text: 'No thanks.', type: 'wrong' },
        { text: 'I want a car.', type: 'wrong' },
      ]},
      { id: 're3', sender: 'bot', text: 'Here are the menus.', translation: 'Aqui estão os menus.' },
      { id: 're4', sender: 'user', text: 'I will have the steak.', translation: 'Eu quero o bife.', alternatives: [
        { text: 'I will have the steak.', type: 'native' },
        { text: 'Water only.', type: 'wrong' },
        { text: 'I do not eat.', type: 'wrong' },
      ]},
    ],
  },
  {
    id: 'doctor-easy-s',
    title: 'Doctor Visit',
    description: 'Visit the doctor',
    icon: '👨‍⚕️',
    difficulty: 'short',
    xpReward: 40,
    gemReward: 2,
    messages: [
      { id: 'doc1', sender: 'bot', text: 'What brings you in today?', translation: 'O que traz você aqui hoje?' },
      { id: 'doc2', sender: 'user', text: 'I have a headache.', translation: 'Eu tenho dor de cabeça.', alternatives: [
        { text: 'I have a headache.', type: 'native' },
        { text: 'I am happy.', type: 'wrong' },
        { text: 'I want pizza.', type: 'wrong' },
      ]},
      { id: 'doc3', sender: 'bot', text: 'How long has this been?', translation: 'Há quanto tempo isso está acontecendo?' },
      { id: 'doc4', sender: 'user', text: 'Since yesterday.', translation: 'Desde ontem.', alternatives: [
        { text: 'Since yesterday.', type: 'native' },
        { text: 'One year.', type: 'wrong' },
        { text: 'Never.', type: 'wrong' },
      ]},
    ],
  },
  {
    id: 'hotel-easy-s',
    title: 'Hotel Check-in',
    description: 'Check in at a hotel',
    icon: '🏨',
    difficulty: 'short',
    xpReward: 40,
    gemReward: 2,
    messages: [
      { id: 'ht1', sender: 'bot', text: 'Welcome to Grand Hotel! Do you have a reservation?', translation: 'Bem-vindo ao Grand Hotel! Você tem reserva?' },
      { id: 'ht2', sender: 'user', text: 'Yes, under Smith.', translation: 'Sim, no nome de Smith.', alternatives: [
        { text: 'Yes, under Smith.', type: 'native' },
        { text: 'I live here.', type: 'wrong' },
        { text: 'No money.', type: 'wrong' },
      ]},
      { id: 'ht3', sender: 'bot', text: 'Here is your key. Room 305.', translation: 'Aqui está sua chave. Quarto 305.' },
      { id: 'ht4', sender: 'user', text: 'Thank you!', translation: 'Obrigado!', alternatives: [
        { text: 'Thank you!', type: 'native' },
        { text: 'Go away!', type: 'wrong' },
        { text: 'This is bad!', type: 'wrong' },
      ]},
    ],
  }
];

// MÉDIO - Fill-in-the-blank com keywords específicas
export const mediumQuickChats: ChatScenario[] = [
  {
    id: 'order-med-q',
    title: 'Order Food',
    description: 'Order at a restaurant',
    icon: '🍽️',
    difficulty: 'quick',
    xpReward: 50,
    gemReward: 2,
    messages: [
      { id: 'o1', sender: 'bot', text: 'Good evening! What would you like?', translation: 'Boa noite! O que você gostaria?' },
      { id: 'o2', sender: 'user', text: 'I would like the pasta, please.', translation: 'Eu gostaria da massa, por favor.', answer: 'I would like the pasta, please.', keywords: ['like', 'pasta'] },
      { id: 'o3', sender: 'bot', text: 'Would you like something to drink?', translation: 'Quer algo para beber?' },
      { id: 'o4', sender: 'user', text: 'Yes, water, please.', translation: 'Sim, água, por favor.', answer: 'Yes, water, please.', keywords: ['water'] },
      { id: 'o5', sender: 'bot', text: 'Here you go!', translation: 'Aqui está!' },
    ],
  },
  {
    id: 'help-med-q',
    title: 'Ask Help',
    description: 'Request assistance',
    icon: '🆘',
    difficulty: 'quick',
    xpReward: 50,
    gemReward: 2,
    messages: [
      { id: 'hp1', sender: 'bot', text: 'Can I help you?', translation: 'Posso ajudá-lo?' },
      { id: 'hp2', sender: 'user', text: 'Yes, I need some help.', translation: 'Sim, eu preciso de ajuda.', answer: 'Yes, I need some help.', keywords: ['help'] },
      { id: 'hp3', sender: 'bot', text: 'Of course! What do you need?', translation: 'Claro! O que você precisa?' },
    ],
  },
  {
    id: 'where-med-q',
    title: 'Find Place',
    description: 'Ask where something is',
    icon: '📍',
    difficulty: 'quick',
    xpReward: 50,
    gemReward: 2,
    messages: [
      { id: 'w1', sender: 'bot', text: 'Excuse me! Where is the bathroom?', translation: 'Com licença! Onde fica o banheiro?' },
      { id: 'w2', sender: 'user', text: 'It\'s over there.', translation: 'É ali.', answer: 'It\'s over there.', keywords: ['there'] },
      { id: 'w3', sender: 'bot', text: 'Thanks!', translation: 'Obrigado!' },
    ],
  },
  {
    id: 'weather-med-q',
    title: 'Weather Chat',
    description: 'Discuss weather',
    icon: '🌤️',
    difficulty: 'quick',
    xpReward: 50,
    gemReward: 2,
    messages: [
      { id: 'wm1', sender: 'bot', text: 'It is a beautiful day today!', translation: 'Está um lindo dia hoje!' },
      { id: 'wm2', sender: 'user', text: 'Yes, it is sunny and warm.', translation: 'Sim, está ensolarado e quente.', answer: 'Yes, it is sunny and warm.', keywords: ['sunny', 'warm'] },
      { id: 'wm3', sender: 'bot', text: 'I love this weather!', translation: 'Eu adoro esse clima!' },
    ],
  },
  {
    id: 'hobby-med-q',
    title: 'Hobbies',
    description: 'Talk about free time',
    icon: '🎨',
    difficulty: 'quick',
    xpReward: 50,
    gemReward: 2,
    messages: [
      { id: 'hb1', sender: 'bot', text: 'What do you like to do in your free time?', translation: 'O que você gosta de fazer no seu tempo livre?' },
      { id: 'hb2', sender: 'user', text: 'I like reading books and listening to music.', translation: 'Eu gosto de ler livros e ouvir música.', answer: 'I like reading books and listening to music.', keywords: ['reading', 'music'] },
      { id: 'hb3', sender: 'bot', text: 'That sounds relaxing!', translation: 'Isso parece relaxante!' },
    ],
  },
  {
    id: 'travel-med-q',
    title: 'Travel Plans',
    description: 'Talk about travel',
    icon: '✈️',
    difficulty: 'quick',
    xpReward: 50,
    gemReward: 2,
    messages: [
      { id: 'tv1', sender: 'bot', text: 'Have you traveled anywhere interesting?', translation: 'Você viajou para algum lugar interessante?' },
      { id: 'tv2', sender: 'user', text: 'Yes, I visited Paris last summer.', translation: 'Sim, visitei Paris no verão passado.', answer: 'Yes, I visited Paris last summer.', keywords: ['Paris', 'visited'] },
      { id: 'tv3', sender: 'bot', text: 'How was it?', translation: 'Como foi?' },
    ],
  },
  {
    id: 'food-med-q',
    title: 'Food Preferences',
    description: 'Discuss favorite foods',
    icon: '🍜',
    difficulty: 'quick',
    xpReward: 50,
    gemReward: 2,
    messages: [
      { id: 'fd1', sender: 'bot', text: 'What is your favorite food?', translation: 'Qual é sua comida favorita?' },
      { id: 'fd2', sender: 'user', text: 'I love Italian food, especially pizza.', translation: 'Eu amo comida italiana, especialmente pizza.', answer: 'I love Italian food, especially pizza.', keywords: ['Italian', 'pizza'] },
      { id: 'fd3', sender: 'bot', text: 'Me too!', translation: 'Eu também!' },
    ],
  },
  {
    id: 'work-med-q',
    title: 'Work Talk',
    description: 'Talk about job',
    icon: '💼',
    difficulty: 'quick',
    xpReward: 50,
    gemReward: 2,
    messages: [
      { id: 'wk1', sender: 'bot', text: 'Where do you work?', translation: 'Onde você trabalha?' },
      { id: 'wk2', sender: 'user', text: 'I work at a technology company.', translation: 'Eu trabalho em uma empresa de tecnologia.', answer: 'I work at a technology company.', keywords: ['technology', 'company'] },
      { id: 'wk3', sender: 'bot', text: 'That sounds interesting!', translation: 'Isso parece interessante!' },
    ],
  },
  {
    id: 'study-med-q',
    title: 'Study Chat',
    description: 'Talk about education',
    icon: '📚',
    difficulty: 'quick',
    xpReward: 50,
    gemReward: 2,
    messages: [
      { id: 'st1', sender: 'bot', text: 'Are you currently studying?', translation: 'Você está estudando atualmente?' },
      { id: 'st2', sender: 'user', text: 'Yes, I am studying English and Spanish.', translation: 'Sim, estou estudando inglês e espanhol.', answer: 'Yes, I am studying English and Spanish.', keywords: ['English', 'Spanish'] },
      { id: 'st3', sender: 'bot', text: 'That is great! Keep it up!', translation: 'Isso é ótimo! Continue assim!' },
    ],
  },
  {
    id: 'weekend-med-q',
    title: 'Weekend Plans',
    description: 'Talk about weekend',
    icon: '🎉',
    difficulty: 'quick',
    xpReward: 50,
    gemReward: 2,
    messages: [
      { id: 'we1', sender: 'bot', text: 'Any plans for the weekend?', translation: 'Algum plano para o fim de semana?' },
      { id: 'we2', sender: 'user', text: 'I am going to visit my family.', translation: 'Vou visitar minha família.', answer: 'I am going to visit my family.', keywords: ['visit', 'family'] },
      { id: 'we3', sender: 'bot', text: 'That is wonderful!', translation: 'Isso é maravihoso!' },
    ],
  },
  {
    id: 'movie-med-q',
    title: 'Movies',
    description: 'Talk about films',
    icon: '🎬',
    difficulty: 'quick',
    xpReward: 50,
    gemReward: 2,
    messages: [
      { id: 'mv1', sender: 'bot', text: 'Did you see any good movies recently?', translation: 'Você viu algum bom filme recentemente?' },
      { id: 'mv2', sender: 'user', text: 'Yes, I watched an amazing action movie.', translation: 'Sim, assisti um filme de ação incrível.', answer: 'Yes, I watched an amazing action movie.', keywords: ['watched', 'action'] },
      { id: 'mv3', sender: 'bot', text: 'Was it good?', translation: 'Foi bom?' },
    ],
  },
  {
    id: 'sport-med-q',
    title: 'Sports',
    description: 'Talk about sports',
    icon: '⚽',
    difficulty: 'quick',
    xpReward: 50,
    gemReward: 2,
    messages: [
      { id: 'sp1', sender: 'bot', text: 'Do you like sports?', translation: 'Você gosta de esportes?' },
      { id: 'sp2', sender: 'user', text: 'Yes, I play tennis every weekend.', translation: 'Sim, jogo ténis todos os fins de semana.', answer: 'Yes, I play tennis every weekend.', keywords: ['play', 'tennis'] },
      { id: 'sp3', sender: 'bot', text: 'Tennis is a great sport!', translation: 'Ténis é um ótimo esporte!' },
    ],
  },
  {
    id: 'music-med-q',
    title: 'Music',
    description: 'Discuss music preferences',
    icon: '🎵',
    difficulty: 'quick',
    xpReward: 50,
    gemReward: 2,
    messages: [
      { id: 'mu1', sender: 'bot', text: 'What kind of music do you listen to?', translation: 'Que tipo de música você ouve?' },
      { id: 'mu2', sender: 'user', text: 'I enjoy listening to jazz and classical music.', translation: 'Eu gosto de ouvir jazz e música clássica.', answer: 'I enjoy listening to jazz and classical music.', keywords: ['jazz', 'classical'] },
      { id: 'mu3', sender: 'bot', text: 'Excellent taste!', translation: 'Excelente gosto!' },
    ],
  }
];

export const mediumShortChats: ChatScenario[] = [
  {
    id: 'plans-med-s',
    title: 'Make Plans',
    description: 'Plan something together',
    icon: '📅',
    difficulty: 'short',
    xpReward: 60,
    gemReward: 3,
    messages: [
      { id: 'pl1', sender: 'bot', text: 'Hey! What are you doing tomorrow?', translation: 'Oi! O que você vai fazer amanhã?' },
      { id: 'pl2', sender: 'user', text: 'I\'m going to the gym.', translation: 'Vou à academia.', answer: 'I\'m going to the gym.', keywords: ['gym'] },
      { id: 'pl3', sender: 'bot', text: 'That\'s great! I\'m playing soccer.', translation: 'Ótimo! Eu vou jogar futebol.' },
      { id: 'pl4', sender: 'user', text: 'Sounds fun! See you later!', translation: 'Parece divertido! Nos vemos!', answer: 'Sounds fun! See you later!', keywords: ['later'] },
    ],
  },
  {
    id: 'job-med-s',
    title: 'Job Talk',
    description: 'Talk about work',
    icon: '💼',
    difficulty: 'short',
    xpReward: 60,
    gemReward: 3,
    messages: [
      { id: 'jt1', sender: 'bot', text: 'What do you do?', translation: 'O que você faz?' },
      { id: 'jt2', sender: 'user', text: 'I work at a restaurant.', translation: 'Eu trabalho em um restaurante.', answer: 'I work at a restaurant.', keywords: ['restaurant'] },
      { id: 'jt3', sender: 'bot', text: 'That\'s interesting! I\'m a teacher.', translation: 'Interessante! Eu sou professor.' },
    ],
  },
  {
    id: 'weekend-med-s',
    title: 'Weekend Plans',
    description: 'Talk about weekend',
    icon: '🎉',
    difficulty: 'short',
    xpReward: 60,
    gemReward: 3,
    messages: [
      { id: 'we1', sender: 'bot', text: 'What did you do last weekend?', translation: 'O que você fez no fim de semana passado?' },
      { id: 'we2', sender: 'user', text: 'I went to the beach.', translation: 'Eu fui à praia.', answer: 'I went to the beach.', keywords: ['to'] },
      { id: 'we3', sender: 'bot', text: 'That\'s nice! I watched movies.', translation: 'Legal! Eu assisti filmes.' },
      { id: 'we4', sender: 'user', text: 'That sounds relaxing!', translation: 'Parece relaxante!', answer: 'That sounds relaxing!', keywords: ['relaxing'] },
    ],
  },
];

// DIFÍCIL - Escrita livre
export const hardQuickChats: ChatScenario[] = [
  {
    id: 'advice-hard-q',
    title: 'Ask Advice',
    description: 'Get some advice',
    icon: '💡',
    difficulty: 'quick',
    xpReward: 75,
    gemReward: 4,
    messages: [
      { id: 'ad1', sender: 'bot', text: 'You look worried. What\'s up?', translation: 'Você parece preocupado. O que houve?' },
{ id: 'ad2', sender: 'user', text: '', answer: "I'm stressed about work.", translation: 'Estou estressado com o trabalho.', keywords: ['stressed', 'work'], alternatives: [
        { text: "I'm stressed about work.", type: 'native' },
        { text: "Nothing is wrong.", type: 'acceptable' },
      ]},
      { id: 'ad3', sender: 'bot', text: 'That\'s completely normal. Everyone feels that way at first.', translation: 'É completamente normal. Todo mundo sente isso no começo.' },
      { id: 'ad4', sender: 'user', text: '', answer: "Thanks for the advice!", translation: 'Obrigado pelo conselho!', keywords: ['thanks', 'advice'], alternatives: [
        { text: "Thanks for the advice!", type: 'native' },
        { text: "I feel better now.", type: 'acceptable' },
      ]},
      { id: 'ad3', sender: 'bot', text: 'That\'s completely normal. Everyone feels that way at first.', translation: 'É completamente normal. Todo mundo sente isso no comienzo.' },
{ id: 'ad4', sender: 'user', text: '', answer: "Thanks for the advice!", translation: 'Obrigado pelo conselho!', keywords: ['thanks', 'advice'], alternatives: [
        { text: "Thanks for the advice!", type: 'native' },
        { text: "I feel better now.", type: 'acceptable' },
      ]},
      { id: 'ad5', sender: 'bot', text: 'You\'ll do great! Just be yourself.', translation: 'Você vai se sair bem! Apenas seja você mesmo.' },
    ],
  },
  {
    id: 'news-hard-q',
    title: 'Discuss News',
    description: 'Talk about current events',
    icon: '📰',
    difficulty: 'quick',
    xpReward: 75,
    gemReward: 4,
    messages: [
      { id: 'nw1', sender: 'bot', text: 'Did you hear about the new policy?', translation: 'Você ouviu sobre a nova política?' },
{ id: 'nw2', sender: 'user', text: '', answer: "Yes, I think it's interesting.", translation: 'Sim, acho interessante.', keywords: ['interesting', 'policy'], alternatives: [
        { text: "Yes, I think it's interesting.", type: 'native' },
        { text: "No, what happened?", type: 'acceptable' },
      ]},
      { id: 'nw3', sender: 'bot', text: 'It\'s been pretty controversial. What do you think about it?', translation: 'Tem sido bem controverso. O que você acha?' },
      { id: 'nw4', sender: 'user', text: '', answer: "I think there are pros and cons.", translation: 'Acho que tem prós e contras.', keywords: ['pros', 'cons'], alternatives: [
        { text: "I think there are pros and cons.", type: 'native' },
        { text: "I agree with you.", type: 'acceptable' },
      ]},
      { id: 'nw3', sender: 'bot', text: 'It\'s been pretty controversial. What do you think about it?', translation: 'Tem sido bem controverso. O que você acha?' },
      { id: 'nw4', sender: 'user', text: '', translation: 'Dê sua opinião', keywords: ['pros', 'cons'], alternatives: [
        { text: 'I think there are pros and cons.', type: 'native' },
        { text: 'I agree with you.', type: 'acceptable' },
      ]},
      { id: 'nw5', sender: 'bot', text: 'I see your point. Let\'s see how it develops.', translation: 'Entendo seu ponto. Vamos ver como vai desenvolver.' },
    ],
  },
  {
    id: 'travel-hard-q',
    title: 'Travel Plans',
    description: 'Plan a trip',
    icon: '✈️',
    difficulty: 'quick',
    xpReward: 75,
    gemReward: 4,
    messages: [
      { id: 'tr1', sender: 'bot', text: 'I\'m thinking about traveling to Europe next summer.', translation: 'Estou pensando em viajar para a Europa no próximo verão.' },
{ id: 'tr2', sender: 'user', text: '', answer: "That sounds amazing! Where do you want to go?", translation: 'Parece incrível! Onde você quer ir?', keywords: ['amazing', 'where'], alternatives: [
        { text: "That sounds amazing! Where do you want to go?", type: 'native' },
        { text: "Nice! I've been there.", type: 'acceptable' },
      ]},
      { id: 'tr3', sender: 'bot', text: 'I went to Paris last year. It was absolutely amazing!', translation: 'Eu fui a Paris no ano passado. Foi incrível!' },
      { id: 'tr4', sender: 'user', text: '', answer: "I want to visit Paris too!", translation: 'Eu também quero visitar Paris!', keywords: ['paris', 'visit'], alternatives: [
        { text: "I want to visit Paris too!", type: 'native' },
        { text: "Lucky you!", type: 'acceptable' },
      ]},
      { id: 'tr3', sender: 'bot', text: 'I went to Paris last year. It was absolutely amazing!', translation: 'Eu fui a Paris no ano passado. Foi incrível!' },
      { id: 'tr4', sender: 'user', text: '', translation: 'Expresse interesse em Paris', keywords: ['paris', 'visit'], alternatives: [
        { text: 'I want to visit Paris too!', type: 'native' },
        { text: 'Lucky you!', type: 'acceptable' },
      ]},
      { id: 'tr5', sender: 'bot', text: 'You should definitely visit the Louvre!', translation: 'Você definitivamente deveria visitar o Louvre!' },
    ],
  },
  {
    id: 'philosophy-hard-q',
    title: 'Philosophy Discussion',
    description: 'Discuss philosophical ideas',
    icon: '🤔',
    difficulty: 'quick',
    xpReward: 100,
    gemReward: 5,
    messages: [
      { id: 'ph1', sender: 'bot', text: 'What do you think is the meaning of life?', translation: 'Qual você acha que é o sentido da vida?' },
      { id: 'ph2', sender: 'user', text: '', translation: 'Express your philosophy', keywords: ['meaning', 'purpose'], alternatives: [
        { text: 'I believe it is to learn and grow as much as possible.', type: 'native' },
        { text: 'To be happy.', type: 'acceptable' },
      ]},
      { id: 'ph3', sender: 'bot', text: 'That is a beautiful perspective!', translation: 'Essa é uma perspectiva beautiful!' },
    ],
  },
  {
    id: 'culture-hard-q',
    title: 'Cultural Topics',
    description: 'Discuss cultural differences',
    icon: '🌍',
    difficulty: 'quick',
    xpReward: 100,
    gemReward: 5,
    messages: [
      { id: 'cu1', sender: 'bot', text: 'How do cultural differences affect communication?', translation: 'Como as diferenças culturais afetam a comunicação?' },
      { id: 'cu2', sender: 'user', text: '', translation: 'Discuss cultural impact', keywords: ['culture', 'communication'], alternatives: [
        { text: 'They can lead to misunderstandings, but also to beautiful exchanges of ideas.', type: 'native' },
        { text: 'It is important to be respectful.', type: 'acceptable' },
      ]},
      { id: 'cu3', sender: 'bot', text: 'Absolutely!', translation: 'Com certeza!' },
    ],
  },
  {
    id: 'technology-hard-q',
    title: 'Technology Future',
    description: 'Discuss technological advances',
    icon: '💻',
    difficulty: 'quick',
    xpReward: 100,
    gemReward: 5,
    messages: [
      { id: 'tc1', sender: 'bot', text: 'How do you think AI will change our future?', translation: 'Como você acha que a IA vai mudar nosso futuro?' },
      { id: 'tc2', sender: 'user', text: '', translation: 'Share your thoughts on AI', keywords: ['AI', 'future'], alternatives: [
        { text: 'It will transform every industry, from healthcare to education.', type: 'native' },
        { text: 'It will make our lives easier.', type: 'acceptable' },
      ]},
      { id: 'tc3', sender: 'bot', text: 'Fascinating point!', translation: 'Ponto fascinante!' },
    ],
  },
  {
    id: 'environment-hard-q',
    title: 'Environmental Issues',
    description: 'Discuss environmental challenges',
    icon: '🌱',
    difficulty: 'quick',
    xpReward: 100,
    gemReward: 5,
    messages: [
      { id: 'en1', sender: 'bot', text: 'What do you think is the biggest environmental challenge?', translation: 'Qual você acha que é o maior desafio ambiental?' },
      { id: 'en2', sender: 'user', text: '', translation: 'Express environmental views', keywords: ['environment', 'climate'], alternatives: [
        { text: 'Climate change is definitely the most pressing issue we face today.', type: 'native' },
        { text: 'Pollution and waste management.', type: 'acceptable' },
      ]},
      { id: 'en3', sender: 'bot', text: 'We all need to do our part!', translation: 'Todos precisamos fazer a nossa parte!' },
    ],
  },
  {
    id: 'education-hard-q',
    title: 'Education System',
    description: 'Discuss modern education',
    icon: '🎓',
    difficulty: 'quick',
    xpReward: 100,
    gemReward: 5,
    messages: [
      { id: 'ed1', sender: 'bot', text: 'How has online learning changed education?', translation: 'Como o aprendizado online mudou a educação?' },
      { id: 'ed2', sender: 'user', text: '', translation: 'Share educational opinions', keywords: ['learning', 'education'], alternatives: [
        { text: 'It has made education more accessible to people worldwide.', type: 'native' },
        { text: 'It lacks the personal interaction of traditional classrooms.', type: 'acceptable' },
      ]},
      { id: 'ed3', sender: 'bot', text: 'That is a valid observation!', translation: 'Essa é uma observação válida!' },
    ],
  },
  {
    id: 'economy-hard-q',
    title: 'Economy Discussion',
    description: 'Talk about economic topics',
    icon: '📈',
    difficulty: 'quick',
    xpReward: 100,
    gemReward: 5,
    messages: [
      { id: 'ec1', sender: 'bot', text: 'What impact do you think globalization has on local economies?', translation: 'Que impacto você acha que a globalização tem nas economias locais?' },
      { id: 'ec2', sender: 'user', text: '', translation: 'Discuss economic impact', keywords: ['globalization', 'economy'], alternatives: [
        { text: 'It creates both opportunities and challenges for local businesses.', type: 'native' },
        { text: 'It leads to job creation but also competition.', type: 'acceptable' },
      ]},
      { id: 'ec3', sender: 'bot', text: 'Interesting perspective!', translation: 'Perspectiva interessante!' },
    ],
  },
  {
    id: 'advice-med-s',
    title: 'Ask Advice',
    description: 'Ask for advice about career',
    icon: '💡',
    difficulty: 'short',
    xpReward: 60,
    gemReward: 3,
    messages: [
      { id: 'adv1', sender: 'bot', text: 'You look worried. Is everything okay?', translation: 'Você parece preocupado. Tudo bem?' },
      { id: 'adv2', sender: 'user', text: 'I am not sure about my career choices.', translation: 'Não tenho certeza sobre minhas escolhas de carreira.', answer: 'I am not sure about my career choices.', keywords: ['career', 'choices'] },
      { id: 'adv3', sender: 'bot', text: 'What aspects are you uncertain about?', translation: 'Quais aspectos você está incerto?' },
      { id: 'adv4', sender: 'user', text: 'Whether to stay in my current job or look for something new.', translation: 'Se devo continuar no meu emprego atual ou procurar algo novo.', answer: 'Whether to stay in my current job or look for something new.', keywords: ['stay', 'new'] },
    ],
  },
  {
    id: 'feedback-med-s',
    title: 'Give Feedback',
    description: 'Give feedback about a service',
    icon: '⭐',
    difficulty: 'short',
    xpReward: 60,
    gemReward: 3,
    messages: [
      { id: 'fb1', sender: 'bot', text: 'How was your experience at our restaurant?', translation: 'Como foi sua experiência no nosso restaurante?' },
      { id: 'fb2', sender: 'user', text: 'The food was excellent, but the service was slow.', translation: 'A comida era excelente, mas o serviço foi lento.', answer: 'The food was excellent, but the service was slow.', keywords: ['food', 'service'] },
      { id: 'fb3', sender: 'bot', text: 'Thank you for your feedback. We will improve.', translation: 'Obrigado pelo seu feedback. Vamos melhorar.' },
      { id: 'fb4', sender: 'user', text: 'Overall, I would recommend this place.', translation: 'No geral, eu recomendaria este lugar.', answer: 'Overall, I would recommend this place.', keywords: ['recommend', 'place'] },
    ],
  },
  {
    id: 'interview-med-s',
    title: 'Practice Interview',
    description: 'Practice job interview questions',
    icon: '🎤',
    difficulty: 'short',
    xpReward: 60,
    gemReward: 3,
    messages: [
      { id: 'int1', sender: 'bot', text: 'Tell me about your strengths.', translation: 'Fale sobre seus pontos fortes.' },
      { id: 'int2', sender: 'user', text: 'I am well-organized and a good communicator.', translation: 'Sou bem organizado e um bom comunicador.', answer: 'I am well-organized and a good communicator.', keywords: ['organized', 'communicator'] },
      { id: 'int3', sender: 'bot', text: 'And what about your weaknesses?', translation: 'E quais são suas fraquezas?' },
      { id: 'int4', sender: 'user', text: 'Sometimes I take on too many tasks at once.', translation: 'Às vezes aceito muitas tarefas de uma vez.', answer: 'Sometimes I take on too many tasks at once.', keywords: ['tasks', 'once'] },
    ],
  }
];

export const hardShortChats: ChatScenario[] = [
  {
    id: 'interview-hard-s',
    title: 'Job Interview',
    description: 'Interview for a job',
    icon: '🎯',
    difficulty: 'short',
    xpReward: 100,
    gemReward: 5,
    messages: [
{ id: 'iv1', sender: 'bot', text: 'Thank you for coming in today. Can you tell me about yourself?', translation: 'Obrigado por vir hoje. Pode mefalar sobre você?' },
      { id: 'iv2', sender: 'user', text: '', answer: "Of course! I'm a software engineer with 5 years of experience.", translation: 'Claro! Sou engenheiro de software com 5 anos de experiência.', keywords: ['engineer', 'experience'], alternatives: [
        { text: "Of course! I'm a software engineer with 5 years of experience.", type: 'native' },
        { text: "I'm 25 years old.", type: 'acceptable' },
      ]},
      { id: 'iv3', sender: 'bot', text: 'That\'s interesting! What are your greatest strengths?', translation: 'Interessante! Quais são suas maiores forças?' },
      { id: 'iv4', sender: 'user', text: '', answer: "I'm very organized and a great team player.", translation: 'Sou muito organizado e trabalho bem em equipe.', keywords: ['organized', 'team'], alternatives: [
        { text: "I'm very organized and a great team player.", type: 'native' },
        { text: "I can eat a lot.", type: 'acceptable' },
      ]},
      { id: 'iv5', sender: 'bot', text: 'And what would you say is your biggest weakness?', translation: 'E qual seria sua maior fraqueza?' },
      { id: 'iv6', sender: 'user', text: '', answer: "Sometimes I work too much, but I'm learning to balance.", translation: 'Às vezes trabalho demais, mas estou aprendendo a equilibrar.', keywords: ['work', 'balance'], alternatives: [
        { text: "Sometimes I work too much, but I'm learning to balance.", type: 'native' },
        { text: "I don't have any weaknesses.", type: 'acceptable' },
      ]},
      { id: 'iv7', sender: 'bot', text: 'Thank you! We\'ll be in touch soon.', translation: 'Obrigado! Entraremos em contato em breve.' },
    ],
  },
  {
    id: 'discuss-hard-s',
    title: 'Discuss Opinion',
    description: 'Share opinions',
    icon: '💬',
    difficulty: 'short',
    xpReward: 100,
    gemReward: 5,
    messages: [
{ id: 'dc1', sender: 'bot', text: 'What do you think about remote work?', translation: 'O que você acha do trabalho remoto?' },
      { id: 'dc2', sender: 'user', text: '', answer: "I love it! It gives me more flexibility.", translation: 'Adoro! Me dá mais flexibilidade.', keywords: ['love', 'flexibility'], alternatives: [
        { text: "I love it! It gives me more flexibility.", type: 'native' },
        { text: "I prefer working in the office.", type: 'acceptable' },
      ]},
      { id: 'dc3', sender: 'bot', text: 'That\'s a valid point. But I think there are some challenges too.', translation: 'É um ponto válido. Mas também há alguns desafios.' },
      { id: 'dc4', sender: 'user', text: '', answer: "Definitely. It requires good discipline and communication.", translation: 'Com certeza. Requer boa disciplina e comunicação.', keywords: ['definitely', 'discipline'], alternatives: [
        { text: "Definitely. It requires good discipline and communication.", type: 'native' },
        { text: "Yes, I agree.", type: 'acceptable' },
      ]},
      { id: 'dc5', sender: 'bot', text: 'Well said! Balance is key.', translation: 'Bem dito! Equilíbrio é a chave.' },
    ],
  },
  {
    id: 'story-hard-s',
    title: 'Share Story',
    description: 'Tell a story',
    icon: '📖',
    difficulty: 'short',
    xpReward: 100,
    gemReward: 5,
    messages: [
      { id: 'sy1', sender: 'bot', text: 'I heard you went skydiving last month. How was it?', translation: 'Ouvi que você fez paracaidismo no mês passado. Como foi?' },
      { id: 'sy2', sender: 'user', text: '', answer: "It was incredible! I was scared at first, but it was amazing!", translation: 'Foi incrível! Fiquei com medo no início, mas foi incrível!', keywords: ['incredible', 'scared'], alternatives: [
        { text: "It was incredible! I was scared at first, but it was amazing!", type: 'native' },
        { text: "It was scary but fun!", type: 'acceptable' },
      ]},
      { id: 'sy3', sender: 'bot', text: 'That sounds incredible! Were you scared at all?', translation: 'Parece incrível! Você ficou com medo?' },
      { id: 'sy4', sender: 'user', text: '', answer: "Yes, very! But the adrenaline was worth it.", translation: 'Sim, muito! Mas a adrenalina valeu a pena.', keywords: ['adrenaline', 'bit'], alternatives: [
        { text: "Yes, very! But the adrenaline was worth it.", type: 'native' },
        { text: "A little bit, yes.", type: 'acceptable' },
      ]},
      { id: 'sy5', sender: 'bot', text: "That's amazing! I could never do that!", translation: 'É incrível! Eu nunca poderia fazer isso!' },
    ],
  },
  {
    id: 'ethical-hard-s',
    title: 'Ethical Dilemma',
    description: 'Discuss ethical workplace issues',
    icon: '⚖️',
    difficulty: 'short',
    xpReward: 100,
    gemReward: 5,
    messages: [
      { id: 'eth1', sender: 'bot', text: 'What would you do if you witnessed a colleague cheating?', translation: 'O que você faria se visse um colega trapaceando?' },
      { id: 'eth2', sender: 'user', text: '', answer: 'I would report it to my supervisor immediately.', translation: 'Eu reportaria ao meu supervisor imediatamente.', keywords: ['report', 'supervisor'], alternatives: [
        { text: 'I would report it to my supervisor immediately.', type: 'native' },
        { text: 'I would ignore it to avoid conflict.', type: 'acceptable' },
      ]},
      { id: 'eth3', sender: 'bot', text: 'That shows integrity. Was it difficult to make that choice?', translation: 'Isso mostra integridade. Foi difícil fazer essa escolha?' },
      { id: 'eth4', sender: 'user', text: '', answer: 'Yes, but doing the right thing is always important.', translation: 'Sim, mas fazer a coisa certa é sempre importante.', keywords: ['right', 'important'], alternatives: [
        { text: 'Yes, but doing the right thing is always important.', type: 'native' },
        { text: 'It was actually quite easy.', type: 'acceptable' },
      ]},
    ],
  },
  {
    id: 'negotiation-hard-s',
    title: 'Salary Negotiation',
    description: 'Discuss salary negotiation',
    icon: '💰',
    difficulty: 'short',
    xpReward: 100,
    gemReward: 5,
    messages: [
      { id: 'neg1', sender: 'bot', text: 'How do you approach salary negotiations?', translation: 'Como você aborda negociações de salário?' },
      { id: 'neg2', sender: 'user', text: '', answer: 'I research market rates and prepare my achievements.', translation: 'Eu pesquiso as taxas de mercado e preparo minhas conquistas.', keywords: ['research', 'achievements'], alternatives: [
        { text: 'I research market rates and prepare my achievements.', type: 'native' },
        { text: 'I just ask for what I want.', type: 'acceptable' },
      ]},
      { id: 'neg3', sender: 'bot', text: 'That is smart. What if they say no?', translation: 'Isso é inteligente. E se eles disserem não?' },
      { id: 'neg4', sender: 'user', text: '', answer: 'I would explain my value and be ready to negotiate or walk away.', translation: 'Eu explicaria meu valor e estaria pronto para negociar ou sair.', keywords: ['negotiate', 'value'], alternatives: [
        { text: 'I would explain my value and be ready to negotiate or walk away.', type: 'native' },
        { text: 'I would accept whatever they offer.', type: 'acceptable' },
      ]},
    ],
  },
  {
    id: 'leadership-hard-s',
    title: 'Leadership Style',
    description: 'Discuss leadership approaches',
    icon: '👔',
    difficulty: 'short',
    xpReward: 100,
    gemReward: 5,
    messages: [
      { id: 'lead1', sender: 'bot', text: 'What is your leadership style?', translation: 'Qual é seu estilo de liderança?' },
      { id: 'lead2', sender: 'user', text: '', answer: 'I prefer a collaborative approach where everyone has a voice.', translation: 'Prefiro uma abordagem colaborativa onde todos têm voz.', keywords: ['collaborative', 'voice'], alternatives: [
        { text: 'I prefer a collaborative approach where everyone has a voice.', type: 'native' },
        { text: 'I am very directive and hands-on.', type: 'acceptable' },
      ]},
      { id: 'lead3', sender: 'bot', text: 'That encourages team growth. What challenges do you face?', translation: 'Isso incentiva o crescimento da equipe. Quais desafios você enfrenta?' },
      { id: 'lead4', sender: 'user', text: '', answer: 'Sometimes it is hard to balance being supportive while meeting deadlines.', translation: 'Às vezes é difícil equilibrar ser apoiador enquanto cumpro prazos.', keywords: ['supportive', 'deadlines'], alternatives: [
        { text: 'Sometimes it is hard to balance being supportive while meeting deadlines.', type: 'native' },
        { text: 'No challenges, it is easy.', type: 'acceptable' },
      ]},
    ],
  }
];

// LONGO - 10 mensagens
export const easyLongChats: ChatScenario[] = [
  {
    id: 'restaurant-easy-l',
    title: 'At Restaurant',
    description: 'Order a full meal',
    icon: '🍴',
    difficulty: 'long',
    xpReward: 80,
    gemReward: 4,
    messages: [
      { id: 'rl1', sender: 'bot', text: 'Good evening! Welcome to Pasta Palace!', translation: 'Boa noite! Bem-vindo ao Pasta Palace!' },
      { id: 'rl2', sender: 'user', text: 'Good evening!', translation: 'Boa noite!', alternatives: [
        { text: 'Good evening!', type: 'native' },
        { text: 'Hello there!', type: 'wrong' },
        { text: 'Go away!', type: 'wrong' },
      ]},
      { id: 'rl3', sender: 'bot', text: 'Here is your menu. Can I get you something to drink?', translation: 'Aqui está seu menu. Posso trazer algo para beber?' },
      { id: 'rl4', sender: 'user', text: 'Water, please.', translation: 'Água, por favor.', alternatives: [
        { text: 'Water, please.', type: 'native' },
        { text: 'I want food.', type: 'wrong' },
        { text: 'Nothing!', type: 'wrong' },
      ]},
      { id: 'rl5', sender: 'bot', text: 'Of course! And are you ready to order?', translation: 'Claro! E está pronto para pedir?' },
      { id: 'rl6', sender: 'user', text: 'Yes, I want the spaghetti.', translation: 'Sim, quero o espaguete.', alternatives: [
        { text: 'Yes, I want the spaghetti.', type: 'native' },
        { text: 'I am not hungry.', type: 'wrong' },
        { text: 'Give me everything.', type: 'wrong' },
      ]},
      { id: 'rl7', sender: 'bot', text: 'Excellent choice! How would you like your pasta?', translation: 'Excelente escolha! Como você gostaria do seu macarrão?' },
      { id: 'rl8', sender: 'user', text: 'Well done, please.', translation: 'Bem passado, por favor.', alternatives: [
        { text: 'Well done, please.', type: 'native' },
        { text: 'I do not know.', type: 'wrong' },
        { text: 'Raw!', type: 'wrong' },
      ]},
      { id: 'rl9', sender: 'bot', text: 'Here is your pasta! Enjoy your meal!', translation: 'Aqui está seu macarrão! Bom apetite!' },
      { id: 'rl10', sender: 'user', text: 'Thank you!', translation: 'Obrigado!', alternatives: [
        { text: 'Thank you!', type: 'native' },
        { text: 'Bad food!', type: 'wrong' },
        { text: 'I hate it!', type: 'wrong' },
      ]},
    ],
  },
];

export const mediumLongChats: ChatScenario[] = [
  {
    id: 'plans-med-l',
    title: 'Weekend Plans',
    description: 'Plan a fun weekend',
    icon: '📆',
    difficulty: 'long',
    xpReward: 100,
    gemReward: 5,
    messages: [
      { id: 'pll1', sender: 'bot', text: 'Hey! What are you doing this weekend?', translation: 'Oi! O que você vai fazer neste fim de semana?' },
      { id: 'pll2', sender: 'user', text: 'I am going to the park.', translation: 'Eu vou ao parque.', answer: 'I am going to the park.', keywords: ['park'] },
      { id: 'pll3', sender: 'bot', text: 'That sounds nice! Who are you going with?', translation: 'Parece legal! Com quem você vai?' },
      { id: 'pll4', sender: 'user', text: 'I am going with my friends.', translation: 'Eu vou com meus amigos.', answer: 'I am going with my friends.', keywords: ['friends'] },
      { id: 'pll5', sender: 'bot', text: 'Great! What will you do there?', translation: 'Ótimo! O que vocês vão fazer lá?' },
      { id: 'pll6', sender: 'user', text: 'We are going to play soccer.', translation: 'Vamos jogar futebol.', answer: 'We are going to play soccer.', keywords: ['soccer'] },
      { id: 'pll7', sender: 'bot', text: 'Sounds fun! Do you need anything?', translation: 'Parece divertido! Precisa de alguma coisa?' },
      { id: 'pll8', sender: 'user', text: 'Yes, I need my soccer shoes.', translation: 'Sim, preciso das chuteiras.', answer: 'Yes, I need my soccer shoes.', keywords: ['shoes'] },
      { id: 'pll9', sender: 'bot', text: 'Good! Have a great time!', translation: 'Ótimo! Divirta-se!' },
      { id: 'pll10', sender: 'user', text: 'Thanks! See you later!', translation: 'Obrigado! Até depois!', answer: 'Thanks! See you later!', keywords: ['later'] },
    ],
  },
];

export const hardLongChats: ChatScenario[] = [
  {
    id: 'event-hard-l',
    title: 'Event Planning',
    description: 'Plan a party together',
    icon: '🎉',
    difficulty: 'long',
    xpReward: 150,
    gemReward: 8,
    messages: [
      { id: 'ev1', sender: 'bot', text: 'I am thinking about throwing a party next month. What do you think?', translation: 'Estou pensando em dar uma festa no próximo mês. O que você acha?' },
      { id: 'ev2', sender: 'user', text: '', answer: "That's a great idea! Where are you planning to have it?", translation: 'É uma ótima ideia! Onde você está planejando fazer?', keywords: ['great', 'where'] },
      { id: 'ev3', sender: 'bot', text: 'I was thinking about having it at my apartment. It is not too big, but it should work.', translation: 'Estava pensando em fazer no meu apartamento. Não é muito grande, mas deve funcionar.' },
      { id: 'ev4', sender: 'user', text: '', answer: "That sounds perfect! How many people are you inviting?", translation: 'Parece perfeito! Quantas pessoas você vai convidar?', keywords: ['perfect', 'many'] },
      { id: 'ev5', sender: 'bot', text: 'I am thinking about twenty people. But I am worried about the food.', translation: 'Estou pensando em vinte pessoas. Mas estou preocupado com a comida.' },
      { id: 'ev6', sender: 'user', text: '', answer: "Don't worry! I can help you with the food. I make excellent appetizers.", translation: 'Não se preocupe! Posso ajudar com a comida. Façoaperitivos excelentes.', keywords: ['worry', 'excellent'] },
      { id: 'ev7', sender: 'bot', text: 'That would be amazing! What kind of appetizers do you make?', translation: 'Seria incrível! Que tipo de aperitivos você faz?' },
      { id: 'ev8', sender: 'user', text: '', answer: "I usually make bruschetta, cheese cubes, and mini sandwiches. Everyone loves them!", translation: 'Normalmente faço bruschetta, cubos de queijo e mini sanduíches. Todos adoram!', keywords: ['usually', 'everyone'] },
      { id: 'ev9', sender: 'bot', text: 'Perfect! And what about drinks? Should we get some wine and juice?', translation: 'Perfeito! E quanto às bebidas? Devemos pegar vinho e suco?' },
      { id: 'ev10', sender: 'user', text: '', answer: "Yes, that would be great! A mix of drinks ensures everyone has options.", translation: 'Sim, seria ótimo! Uma combinação de bebidas garante que todos tenham opções.', keywords: ['mix', 'everyone'] },
    ],
  },
];

// LIVRO - 20 mensagens
export const easyBookChats: ChatScenario[] = [
  {
    id: 'hotel-easy-b',
    title: 'Hotel Check-in',
    description: 'Full hotel experience',
    icon: '🏨',
    difficulty: 'book',
    xpReward: 120,
    gemReward: 6,
    messages: [
      { id: 'hb1', sender: 'bot', text: 'Good afternoon! Welcome to Grand Hotel. How can I help you?', translation: 'Boa tarde! Bem-vindo ao Grand Hotel. Como posso ajudar?' },
      { id: 'hb2', sender: 'user', text: 'Good afternoon! I have a reservation.', translation: 'Boa tarde! Eu tenho uma reserva.', alternatives: [
        { text: 'Good afternoon! I have a reservation.', type: 'native' },
        { text: 'I want a room.', type: 'wrong' },
        { text: 'Go away!', type: 'wrong' },
      ]},
      { id: 'hb3', sender: 'bot', text: 'Perfect! May I have your name, please?', translation: 'Perfeito! Posso ter seu nome, por favor?' },
      { id: 'hb4', sender: 'user', text: 'It is Alex Smith.', translation: 'É Alex Smith.', alternatives: [
        { text: 'It is Alex Smith.', type: 'native' },
        { text: 'My name is wrong.', type: 'wrong' },
        { text: 'I forget my name.', type: 'wrong' },
      ]},
      { id: 'hb5', sender: 'bot', text: 'Let me check... Yes, here it is! Room 305. How many nights will you stay?', translation: 'Deixe-me verificar... Sim, aqui está! Quarto 305. Quantas noites você vai ficar?' },
      { id: 'hb6', sender: 'user', text: 'Three nights.', translation: 'Três noites.', alternatives: [
        { text: 'Three nights.', type: 'native' },
        { text: 'I do not know.', type: 'wrong' },
        { text: 'Forever!', type: 'wrong' },
      ]},
      { id: 'hb7', sender: 'bot', text: 'Great! Here is your room key. Your room is on the third floor.', translation: 'Ótimo! Aqui está sua chave. Seu quarto fica no terceiro andar.' },
      { id: 'hb8', sender: 'user', text: 'Thank you! Where is the elevator?', translation: 'Obrigado! Onde fica o elevador?', alternatives: [
        { text: 'Thank you! Where is the elevator?', type: 'native' },
        { text: 'I hate this hotel.', type: 'wrong' },
        { text: 'Give me money.', type: 'wrong' },
      ]},
      { id: 'hb9', sender: 'bot', text: 'The elevator is on your left. Would you like breakfast included?', translation: 'O elevador está à sua esquerda. Gostaria de café da manhã incluso?' },
      { id: 'hb10', sender: 'user', text: 'Yes, please.', translation: 'Sim, por favor.', alternatives: [
        { text: 'Yes, please.', type: 'native' },
        { text: 'No, I eat rocks.', type: 'wrong' },
        { text: 'I do not eat.', type: 'wrong' },
      ]},
      { id: 'hb11', sender: 'bot', text: 'Perfect! Breakfast is served from 7 to 10 AM. Enjoy your stay!', translation: 'Perfeito! O café da manhã é servido das 7 às 10. Aproveite sua estadia!' },
      { id: 'hb12', sender: 'user', text: 'Thank you very much!', translation: 'Muito obrigado!', alternatives: [
        { text: 'Thank you very much!', type: 'native' },
        { text: 'Bad service!', type: 'wrong' },
        { text: 'I want a refund!', type: 'wrong' },
      ]},
      { id: 'hb13', sender: 'bot', text: 'You are welcome! Is there anything else you need?', translation: 'De nada! Precisa de mais alguma coisa?' },
      { id: 'hb14', sender: 'user', text: 'Yes, where is the gym?', translation: 'Sim, onde fica a academia?', alternatives: [
        { text: 'Yes, where is the gym?', type: 'native' },
        { text: 'I do not exercise.', type: 'wrong' },
        { text: 'I am lazy!', type: 'wrong' },
      ]},
      { id: 'hb15', sender: 'bot', text: 'The gym is on the second floor. It is open 24 hours.', translation: 'A academia fica no segundo andar. Funciona 24 horas.' },
      { id: 'hb16', sender: 'user', text: 'Great! Thanks!', translation: 'Ótimo! Obrigado!', alternatives: [
        { text: 'Great! Thanks!', type: 'native' },
        { text: 'Boring hotel!', type: 'wrong' },
        { text: 'I hate it!', type: 'wrong' },
      ]},
      { id: 'hb17', sender: 'bot', text: 'Have a wonderful stay! Call us if you need anything.', translation: 'Tenha uma ótima estadia! Ligue se precisar de algo.' },
      { id: 'hb18', sender: 'user', text: 'I will. Bye!', translation: 'Vou ligar. Tchau!', alternatives: [
        { text: 'I will. Bye!', type: 'native' },
        { text: 'See you never!', type: 'wrong' },
        { text: 'I am angry!', type: 'wrong' },
      ]},
      { id: 'hb19', sender: 'bot', text: 'Goodbye!', translation: 'Adeus!' },
      { id: 'hb20', sender: 'user', text: 'Goodbye!', translation: 'Adeus!', alternatives: [
        { text: 'Goodbye!', type: 'native' },
        { text: 'Good riddance!', type: 'wrong' },
        { text: 'Finally!', type: 'wrong' },
      ]},
    ],
  },
];

export const mediumBookChats: ChatScenario[] = [
  {
    id: 'trip-med-b',
    title: 'Trip Planning',
    description: 'Plan a complete trip',
    icon: '✈️',
    difficulty: 'book',
    xpReward: 150,
    gemReward: 8,
    messages: [
      { id: 'tpb1', sender: 'bot', text: 'I am planning a trip to Tokyo. Have you ever been there?', translation: 'Estou planejando uma viagem a Tóquio. Você já esteve lá?' },
      { id: 'tpb2', sender: 'user', text: 'No, I have never been to Japan.', translation: 'Não, nunca estive no Japão.', answer: 'No, I have never been to Japan.', keywords: ['never', 'japan'] },
      { id: 'tpb3', sender: 'bot', text: 'It is an amazing country! When are you thinking about going?', translation: 'É um país incrível! Quando você está pensando em ir?' },
      { id: 'tpb4', sender: 'user', text: 'I am thinking about going in March.', translation: 'Estou pensando em ir em março.', answer: 'I am thinking about going in March.', keywords: ['march'] },
      { id: 'tpb5', sender: 'bot', text: 'March is perfect! The weather is nice. How long will you stay?', translation: 'Março é perfeito! O clima é agradável. Quanto tempo você vai ficar?' },
      { id: 'tpb6', sender: 'user', text: 'I am planning to stay for two weeks.', translation: 'Planejo ficar por duas semanas.', answer: 'I am planning to stay for two weeks.', keywords: ['two', 'weeks'] },
      { id: 'tpb7', sender: 'bot', text: 'That is a good amount of time! Have you booked your flight yet?', translation: 'É tempo suficiente! Já reservou seu voo?' },
      { id: 'tpb8', sender: 'user', text: 'Yes, I have booked my flight already.', translation: 'Sim, já reservei meu voo.', answer: 'Yes, I have booked my flight already.', keywords: ['booked'] },
      { id: 'tpb9', sender: 'bot', text: 'Great! What about accommodation? Have you found a hotel?', translation: 'Ótimo! E a acomodação? Encontrou um hotel?' },
      { id: 'tpb10', sender: 'user', text: 'I am still looking for a hotel.', translation: 'Ainda estou procurando um hotel.', answer: 'I am still looking for a hotel.', keywords: ['looking'] },
      { id: 'tpb11', sender: 'bot', text: 'I can recommend a few areas. Shinjuku is very central.', translation: 'Posso recomendar algumas áreas. Shinjuku é bem central.' },
      { id: 'tpb12', sender: 'user', text: 'I will check Shinjuku first.', translation: 'Vou verificar Shinjuku primeiro.', answer: 'I will check Shinjuku first.', keywords: ['check'] },
      { id: 'tpb13', sender: 'bot', text: 'Good choice! What places do you want to visit?', translation: 'Boa escolha! Que lugares você quer visitar?' },
      { id: 'tpb14', sender: 'user', text: 'I want to visit the Senso-ji temple.', translation: 'Quero visitar o templo Senso-ji.', answer: 'I want to visit the Senso-ji temple.', keywords: ['senso'] },
      { id: 'tpb15', sender: 'bot', text: 'It is beautiful! You will love it. Do you like sushi?', translation: 'É lindo! Você vai adorar. Gosta de sushi?' },
      { id: 'tpb16', sender: 'user', text: 'Yes, I love Japanese food!', translation: 'Sim, adoro comida japonesa!', answer: 'Yes, I love Japanese food!', keywords: ['love'] },
      { id: 'tpb17', sender: 'bot', text: 'Perfect! Tokyo has the best sushi in the world!', translation: 'Perfeito! Tóquio tem o melhor sushi do mundo!' },
      { id: 'tpb18', sender: 'user', text: 'I cannot wait to try it!', translation: 'Mal posso esperar para experimentar!', answer: 'I cannot wait to try it!', keywords: ['wait'] },
      { id: 'tpb19', sender: 'bot', text: 'You will have an amazing time! Let me know when you go!', translation: 'Você vai ter um tempo incrível! Me avise quando for!' },
      { id: 'tpb20', sender: 'user', text: 'I will! Thanks for the tips!', translation: 'Vou! Obrigado pelas dicas!', answer: 'I will! Thanks for the tips!', keywords: ['tips'] },
    ],
  },
];

export const hardBookChats: ChatScenario[] = [
  {
    id: 'project-hard-b',
    title: 'Work Project',
    description: 'Discuss a complete project',
    icon: '💼',
    difficulty: 'book',
    xpReward: 200,
    gemReward: 10,
    messages: [
      { id: 'prj1', sender: 'bot', text: 'I wanted to discuss the new marketing project. Do you have a moment?', translation: 'Queria discutir o novo projeto de marketing. Você tem um momento?' },
      { id: 'prj2', sender: 'user', text: '', answer: "Of course! I have been working on the market analysis and I think we have some great opportunities.", translation: 'Claro! Estive trabalhando na análise de mercado e acho que temos grandes oportunidades.', keywords: ['working', 'great'] },
      { id: 'prj3', sender: 'bot', text: 'That sounds promising! What specific opportunities are you referring to?', translation: 'Parece promissor! A que oportunidades específicas você está se referindo?' },
      { id: 'prj4', sender: 'user', text: '', answer: "Based on my research, the 18-25 demographic is underserved in our current strategy.", translation: 'Com base na minha pesquisa, o público de 18-25 anos não é bem atendidas em nossa estratégia atual.', keywords: ['research', 'demographic'] },
      { id: 'prj5', sender: 'bot', text: 'Interesting point! How do you suggest we reach this demographic?', translation: 'Ponto interessante! Como você sugere que alcancemos esse público?' },
      { id: 'prj6', sender: 'user', text: '', answer: "I believe social media campaigns combined with influencer partnerships would be most effective.", translation: 'Acredito que campanhas em redes sociais combinadas com parcerias com influenciadores seriam mais eficazes.', keywords: ['believe', 'influencer'] },
      { id: 'prj7', sender: 'bot', text: 'That aligns with what I was thinking. What is your budget estimate for this?', translation: 'Isso está alinhado com o que eu pensava. Qual é sua estimativa de orçamento para isso?' },
      { id: 'prj8', sender: 'user', text: '', answer: "I estimate around 50,000 dollars for a three-month campaign with moderate influencer engagement.", translation: 'Estimo cerca de 50.000 dólares para uma campanha de três meses com engajamento moderado de influenciadores.', keywords: ['estimate', 'dollars'] },
      { id: 'prj9', sender: 'bot', text: 'That is reasonable. Do you have any specific influencers in mind?', translation: 'Isso é razoável. Você tem influenciadores específicos em mente?' },
      { id: 'prj10', sender: 'user', text: '', answer: "Yes, I have researched several micro-influencers in the lifestyle and tech niches who have authentic audiences.", translation: 'Sim, pesquisei vários micro-influenciadores nos nichos de estilo de vida e tecnologia que têm públicos autênticos.', keywords: ['researched', 'authentic'] },
      { id: 'prj11', sender: 'bot', text: 'Authenticity is key nowadays. How would you measure the success of this campaign?', translation: 'Autenticidade é fundamental hoje em dia. Como você mediria o sucesso desta campanha?' },
      { id: 'prj12', sender: 'user', text: '', answer: "I would track engagement rate, conversion rate, and brand awareness metrics through surveys.", translation: 'Rastrearia taxa de engajamento, taxa de conversão e métricas de awareness da marca através de pesquisas.', keywords: ['track', 'metrics'] },
      { id: 'prj13', sender: 'bot', text: 'Very thorough! What is the timeline for launching this project?', translation: 'Muito completo! Qual é o cronograma para lançar este projeto?' },
      { id: 'prj14', sender: 'user', text: '', answer: "I propose starting with a soft launch in two weeks, followed by a full rollout in a month.", translation: 'Proponho começar com um lançamento suave em duas semanas, seguido de uma implementação completa em um mês.', keywords: ['propose', 'launch'] },
      { id: 'prj15', sender: 'bot', text: 'That gives us enough time for preparation. Are there any risks we should consider?', translation: 'Isso nos dá tempo suficiente para preparação. Existem riscos que devemos considerar?' },
      { id: 'prj16', sender: 'user', text: '', answer: "The main risks would be influencer availability conflicts and potential negative publicity if not managed carefully.", translation: 'Os principais riscos seriam conflitos de disponibilidade de influenciadores e potencial publicidade negativa se não for gerenciado cuidadosamente.', keywords: ['main', 'negative'] },
      { id: 'prj17', sender: 'bot', text: 'Good points. How would you mitigate these risks?', translation: 'Bons pontos. Como você mitigaria esses riscos?' },
      { id: 'prj18', sender: 'user', text: '', answer: "I would have backup influencers ready and implement a crisis management plan with clear communication protocols.", translation: 'Eu teria influenciadores de backup prontos e implementaria um plano de gestão de crise com protocolos claros de comunicação.', keywords: ['backup', 'protocols'] },
      { id: 'prj19', sender: 'bot', text: 'Excellent preparation! I am impressed with your thorough analysis. Let us schedule a meeting with the team.', translation: 'Excelente preparação! Estou impressionado com sua análise completa. Vamos agendar uma reunião com a equipe.' },
      { id: 'prj20', sender: 'user', text: '', answer: "I agree! I will send out calendar invitations for Thursday at 2 PM. Looking forward to presenting this to the team.", translation: 'Concordo! Vou enviar convites de calendário para quinta-feira às 14h. Ansioso para apresentar isso à equipe.', keywords: ['agree', 'presenting'] },
    ],
  },
];

export const getChatsByLevelAndLength = (level: ChatLevel, length: ChatLength): ChatScenario[] => {
  switch (level) {
    case 'easy':
      if (length === 'quick') return easyQuickChats;
      if (length === 'short') return easyShortChats;
      if (length === 'long') return easyLongChats;
      if (length === 'book') return easyBookChats;
      return easyQuickChats;
    case 'medium':
      if (length === 'quick') return mediumQuickChats;
      if (length === 'short') return mediumShortChats;
      if (length === 'long') return mediumLongChats;
      if (length === 'book') return mediumBookChats;
      return mediumQuickChats;
    case 'hard':
      if (length === 'quick') return hardQuickChats;
      if (length === 'short') return hardShortChats;
      if (length === 'long') return hardLongChats;
      if (length === 'book') return hardBookChats;
      return hardQuickChats;
    default:
      return easyQuickChats;
  }
};