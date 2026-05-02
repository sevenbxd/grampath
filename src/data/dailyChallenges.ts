import { skills } from './curriculum/walkthrough';

export interface DailyChallenge {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'writing' | 'memory-game';
  title: string;
  description: string;
  skill: string;
  xpReward: number;
  gemReward: number;
  difficulty: 'easy' | 'medium' | 'hard';
  expiresAt: string;
}

interface ChallengeData {
  questions: {
    question: string;
    options?: string[];
    answer: string;
    hint?: string;
    translation: string;
  }[];
}

const challengeData: Record<string, ChallengeData> = {
  'articles-a-an': {
    questions: [
      { question: 'Choose the correct article: ___ elephant', options: ['A', 'An', 'The'], answer: 'An', translation: 'Um elefante' },
      { question: 'Choose the correct article: ___ hour', options: ['A', 'An', 'The'], answer: 'An', translation: 'Uma hora' },
      { question: 'Choose the correct article: ___ university', options: ['A', 'An', 'The'], answer: 'A', translation: 'Uma universidade' },
      { question: 'Fill: She is ___ doctor', options: ['A', 'An', 'The'], answer: 'A', translation: 'Ela é médica' },
      { question: 'Fill: ___ sun is bright today', options: ['A', 'An', 'The'], answer: 'The', translation: 'O sol está brilhante hoje' },
    ],
  },
  'subject-verb': {
    questions: [
      { question: 'He ___ every morning.', options: ['run', 'runs', 'running'], answer: 'runs', translation: 'Ele corre toda manhã' },
      { question: 'They ___ soccer on weekends.', options: ['play', 'plays', 'playing'], answer: 'play', translation: 'Eles jogam futebol nos finais de semana' },
      { question: 'She ___ TV every night.', options: ['watch', 'watches', 'watching'], answer: 'watches', translation: 'Ela assiste TV toda noite' },
      { question: 'The dog ___ loudly.', options: ['bark', 'barks', 'barking'], answer: 'barks', translation: 'O cachorro late alto' },
      { question: 'I ___ to school every day.', options: ['walk', 'walks', 'walking'], answer: 'walk', translation: 'Eu caminho para a escola todo dia' },
    ],
  },
  'present-simple': {
    questions: [
      { question: 'She ___ English every day.', options: ['study', 'studies', 'studying'], answer: 'studies', translation: 'Ela estuda inglês todo dia' },
      { question: 'The earth ___ around the sun.', options: ['move', 'moves', 'moving'], answer: 'moves', translation: 'A terra gira em torno do sol' },
      { question: 'My mother ___ coffee every morning.', options: ['drink', 'drinks', 'drinking'], answer: 'drinks', translation: 'Minha mãe toma café toda manhã' },
      { question: 'Fill: He ___ in a big city.', options: ['live', 'lives', 'living'], answer: 'lives', translation: 'Ele mora em uma grande cidade' },
      { question: 'Fill: Water ___ at 100°C.', options: ['boil', 'boils', 'boiling'], answer: 'boils', translation: 'A água ferve a 100°C' },
    ],
  },
  'past-simple': {
    questions: [
      { question: 'Yesterday, I ___ to the cinema.', options: ['go', 'went', 'gone'], answer: 'went', translation: 'Ontem, fui ao cinema' },
      { question: 'She ___ her homework last night.', options: ['finish', 'finished', 'finishing'], answer: 'finished', translation: 'Ela terminou sua tarefa ontem à noite' },
      { question: 'They ___ in Paris last summer.', options: ['live', 'lived', 'living'], answer: 'lived', translation: 'Eles moraram em Paris no verão passado' },
      { question: 'Fill: He ___ a lot of books last year.', options: ['read', 'reads', 'reading'], answer: 'read', translation: 'Ele leu muitos livros no ano passado' },
      { question: 'Fill: The baby ___ all night.', options: ['cry', 'cried', 'crying'], answer: 'cried', translation: 'O bebê chorou a noite toda' },
    ],
  },
  'be-verb': {
    questions: [
      { question: 'I ___ happy today.', options: ['am', 'is', 'are'], answer: 'am', translation: 'Eu estou feliz hoje' },
      { question: 'She ___ a teacher.', options: ['am', 'is', 'are'], answer: 'is', translation: 'Ela é professora' },
      { question: 'They ___ from Brazil.', options: ['am', 'is', 'are'], answer: 'are', translation: 'Eles são do Brasil' },
      { question: 'Fill: We ___ students.', options: ['am', 'is', 'are'], answer: 'are', translation: 'Nós somos estudantes' },
      { question: 'Fill: He ___ tired.', options: ['am', 'is', 'are'], answer: 'is', translation: 'Ele está cansado' },
    ],
  },
  'prepositions': {
    questions: [
      { question: 'I was born ___ 1995.', options: ['in', 'on', 'at'], answer: 'in', translation: 'Eu nasci em 1995' },
      { question: 'She was born ___ March.', options: ['in', 'on', 'at'], answer: 'in', translation: 'Ela nasceu em março' },
      { question: 'The meeting is ___ Monday.', options: ['in', 'on', 'at'], answer: 'on', translation: 'A reunião é na segunda-feira' },
      { question: 'Fill: We arrived ___ 5 o\'clock.', options: ['in', 'on', 'at'], answer: 'at', translation: 'Chegamos às 5 horas' },
      { question: 'Fill: I study ___ the morning.', options: ['in', 'on', 'at'], answer: 'in', translation: 'Eu estudo de manhã' },
    ],
  },
  'pronouns': {
    questions: [
      { question: '___ is my best friend. (Maria)', options: ['She', 'Her', 'He'], answer: 'She', translation: 'Ela é minha melhor amiga' },
      { question: 'This is ___ book. (I)', options: ['my', 'me', 'mine'], answer: 'my', translation: 'Este é o meu livro' },
      { question: '___ went to the park together.', options: ['We', 'Us', 'Our'], answer: 'We', translation: 'Nós fomos ao parque juntos' },
      { question: 'Fill: Can you help ___? (I)', options: ['I', 'me', 'my'], answer: 'me', translation: 'Você pode me ajudar?' },
      { question: 'Fill: The house is ___. (they)', options: ['their', 'theirs', 'them'], answer: 'theirs', translation: 'A casa é deles' },
    ],
  },
  'conditionals': {
    questions: [
      { question: 'If it rains, I ___ stay home.', options: ['will', 'would', 'can'], answer: 'will', translation: 'Se chover, vou ficar em casa' },
      { question: 'If I ___ rich, I would travel the world.', options: ['am', 'was', 'were'], answer: 'were', translation: 'Se eu fosse rico, viajaria o mundo' },
      { question: 'If you heat ice, it ___.', options: ['melt', 'melts', 'melted'], answer: 'melts', translation: 'Se você esquenta gelo, ele derrete' },
      { question: 'Fill: If I see her, I ___ tell her.', options: ['will', 'would', 'can'], answer: 'will', translation: 'Se eu vê-la, vou contar para ela' },
      { question: 'Fill: If I had more time, I ___ learn another language.', options: ['will', 'would', 'can'], answer: 'would', translation: 'Se eu tivesse mais tempo, aprenderia outro idioma' },
    ],
  },
  'comparatives': {
    questions: [
      { question: 'A car is ___ than a bicycle.', options: ['fast', 'faster', 'fastest'], answer: 'faster', translation: 'Um carro é mais rápido que uma bicicleta' },
      { question: 'She is the ___ student in class.', options: ['good', 'better', 'best'], answer: 'best', translation: 'Ela é a melhor aluna da sala' },
      { question: 'This problem is ___ than that one.', options: ['difficult', 'more difficult', 'most difficult'], answer: 'more difficult', translation: 'Este problema é mais difícil que aquele' },
      { question: 'Fill: He is ___ than his brother.', options: ['tall', 'taller', 'tallest'], answer: 'taller', translation: 'Ele é mais alto que o irmão' },
      { question: 'Fill: This is the ___ movie I\'ve ever seen.', options: ['good', 'better', 'best'], answer: 'best', translation: 'Este é o melhor filme que já vi' },
    ],
  },
};

const generateDailyChallenges = (): DailyChallenge[] => {
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  const expiresAt = today.toISOString();

  const seedSkills = ['articles-a-an', 'subject-verb', 'present-simple', 'past-simple', 'be-verb', 'prepositions', 'pronouns', 'conditionals', 'comparatives'];
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  
  const selectedSkills = [
    seedSkills[dayOfYear % seedSkills.length],
    seedSkills[(dayOfYear + 2) % seedSkills.length],
    seedSkills[(dayOfYear + 4) % seedSkills.length],
  ];

  return [
    {
      id: `daily-mc-${dayOfYear}`,
      type: 'multiple-choice',
      title: 'Quick Grammar Check',
      description: 'Answer 5 grammar questions',
      skill: selectedSkills[0],
      xpReward: 50,
      gemReward: 2,
      difficulty: 'easy',
      expiresAt,
    },
    {
      id: `daily-fill-${dayOfYear}`,
      type: 'fill-blank',
      title: 'Fill in the Gap',
      description: 'Complete the sentences correctly',
      skill: selectedSkills[1],
      xpReward: 75,
      gemReward: 3,
      difficulty: 'medium',
      expiresAt,
    },
    {
      id: `daily-memory-${dayOfYear}`,
      type: 'memory-game',
      title: 'Memory Match',
      description: 'Match English words with translations',
      skill: selectedSkills[2],
      xpReward: 100,
      gemReward: 5,
      difficulty: 'hard',
      expiresAt,
    },
  ];
};

export const getDailyChallenges = (): DailyChallenge[] => {
  return generateDailyChallenges();
};

export const getChallengeQuestions = (skillId: string): ChallengeData['questions'] => {
  return challengeData[skillId]?.questions || challengeData['subject-verb'].questions;
};

export const getChallengeById = (id: string, todayChallenges: DailyChallenge[]): DailyChallenge | undefined => {
  return todayChallenges.find(c => c.id === id);
};