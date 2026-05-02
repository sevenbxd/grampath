import { Skill } from './curriculum/walkthrough';

export type ContentType = 'grammar' | 'exercises' | 'quiz' | 'reading' | 'writing';

export interface GrammarSection {
  id: string;
  title: string;
  content: string;
  examples: {
    text: string;
    translation: string;
    explanation?: string;
  }[];
  tips: string[];
  relatedSkills: string[];
}

export interface Exercise {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'matching' | 'ordering' | 'rewrite' | 'correction';
  question: string;
  instruction?: string;
  options?: string[];
  correctAnswer: string | string[];
  translation: string;
  explanation?: string;
  points: number;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  grammarSections: GrammarSection[];
  exercises: Exercise[];
  estimatedMinutes: number;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Exercise[];
  passingScore: number;
  xpReward: number;
  gemReward: number;
  timeLimit?: number;
}

export interface StepContent {
  stepId: number;
  stepName: string;
  overview: string;
  lessons: Lesson[];
  quizzes: Quiz[];
  vocabulary: {
    word: string;
    translation: string;
    partOfSpeech: string;
    example: string;
  }[];
  commonMistakes: {
    incorrect: string;
    correct: string;
    explanation: string;
  }[];
}

export const stepContents: StepContent[] = [
  {
    stepId: 1,
    stepName: 'Foundation',
    overview: 'Master the building blocks of English grammar. Learn how to construct basic sentences, use articles correctly, and understand subject-verb agreement.',
    lessons: [
      {
        id: 'found-1',
        title: 'Subject-Verb Agreement',
        description: 'Learn how to match subjects with their verbs correctly',
        estimatedMinutes: 15,
        grammarSections: [
          {
            id: 'sv-1',
            title: 'The Basic Rule',
            content: 'In English, the verb must agree with its subject in number. Singular subjects take singular verbs, and plural subjects take plural verbs.',
            examples: [
              { text: 'The cat runs', translation: 'O gato corre', explanation: 'Singular subject (cat) + singular verb (runs)' },
              { text: 'The cats run', translation: 'Os gatos correm', explanation: 'Plural subject (cats) + plural verb (run)' },
            ],
            tips: [
              'Add -s or -es to verbs when the subject is he, she, or it',
              'Use the base form of the verb with I, you, we, and they',
              'Collective nouns (team, family) usually take singular verbs in American English',
            ],
            relatedSkills: ['subject-verb'],
          },
          {
            id: 'sv-2',
            title: 'Special Cases',
            content: 'Some subjects require special attention. Words like everyone, someone, nobody are always singular, even though they sound plural.',
            examples: [
              { text: 'Everyone is here', translation: 'Todos estão aqui', explanation: 'Everyone = singular' },
              { text: 'My family is big', translation: 'Minha família é grande', explanation: 'Collective noun, singular verb' },
              { text: 'There are five apples', translation: 'Há cinco maçãs', explanation: 'Inverted sentence, verb agrees with apples' },
            ],
            tips: [
              'Don\'t be confused by words that end in -body, -one, or -thing',
              'With "there is/are", the verb agrees with the noun that follows',
              'With "a number of" vs "the number of", the verb changes',
            ],
            relatedSkills: ['subject-verb'],
          },
        ],
        exercises: [
          {
            id: 'sv-ex1',
            type: 'multiple-choice',
            question: 'She ___ to school every day.',
            options: ['walk', 'walks', 'walking'],
            correctAnswer: 'walks',
            translation: 'Ela ___ para a escola todos os dias.',
            explanation: 'Third person singular (she) requires -s on the verb',
            points: 10,
          },
          {
            id: 'sv-ex2',
            type: 'fill-blank',
            question: 'The dogs ___ loudly in the park.',
            correctAnswer: 'bark',
            translation: 'Os cachorros ___ alto no parque.',
            explanation: 'Plural subject requires plural verb',
            points: 10,
          },
          {
            id: 'sv-ex3',
            type: 'multiple-choice',
            question: 'Everyone ___ happy today.',
            options: ['is', 'are', 'be'],
            correctAnswer: 'is',
            translation: 'Todos ___ felizes hoje.',
            explanation: 'Everyone is grammatically singular',
            points: 15,
          },
          {
            id: 'sv-ex4',
            type: 'rewrite',
            question: 'Rewrite using the plural form: The child plays in the garden.',
            correctAnswer: 'The children play in the garden',
            translation: 'Reescreva usando a forma plural',
            explanation: 'Children (plural) + play (plural verb)',
            points: 20,
          },
          {
            id: 'sv-ex5',
            type: 'correction',
            question: 'Find and correct: He don\'t like apples.',
            correctAnswer: 'He doesn\'t like apples',
            translation: 'Encontre e corrija',
            explanation: 'He/She/It needs doesn\'t (not don\'t)',
            points: 15,
          },
          {
            id: 'sv-ex6',
            type: 'fill-blank',
            question: 'There ___ many students in the class.',
            correctAnswer: 'are',
            translation: 'Há muitos estudantes na classe.',
            explanation: '"There are" agrees with the plural noun that follows',
            points: 10,
          },
          {
            id: 'sv-ex7',
            type: 'matching',
            question: 'Match the subjects with correct verb forms',
            options: ['He / run', 'They / runs', 'She / run'],
            correctAnswer: ['He runs', 'They run', 'She runs'],
            translation: 'Combine os sujeitos com as formas verbais corretas',
            points: 15,
          },
        ],
      },
      {
        id: 'found-2',
        title: 'Articles: A, An, The',
        description: 'Master the use of definite and indefinite articles',
        estimatedMinutes: 20,
        grammarSections: [
          {
            id: 'art-1',
            title: 'A vs An: The Sound Rule',
            content: 'Use "a" before consonant sounds and "an" before vowel sounds. This rule is about sounds, not letters!',
            examples: [
              { text: 'a book', translation: 'um livro', explanation: 'book starts with consonant sound /b/' },
              { text: 'an apple', translation: 'uma maçã', explanation: 'apple starts with vowel sound /æ/' },
              { text: 'an hour', translation: 'uma hora', explanation: 'hour starts with vowel sound /aʊ/' },
              { text: 'a university', translation: 'uma universidade', explanation: 'university starts with consonant sound /j/' },
            ],
            tips: [
              'Say the word aloud to determine if it starts with a vowel or consonant SOUND',
              'Acronyms follow the sound rule: an FBI agent, a NASA mission',
              'Single letters: an A, an F, a B, a M',
            ],
            relatedSkills: ['articles'],
          },
          {
            id: 'art-2',
            title: 'The Definite Article: The',
            content: 'Use "the" when talking about something specific, already mentioned, or unique.',
            examples: [
              { text: 'The book on the table is mine', translation: 'O livro na mesa é meu', explanation: 'Specific book, specific table' },
              { text: 'The sun is bright', translation: 'O sol está brilhante', explanation: 'Unique thing' },
              { text: 'I visited the museum yesterday', translation: 'Eu visitei o museu ontem', explanation: 'Already mentioned or known' },
            ],
            tips: [
              'The + superlative: the biggest, the best, the most beautiful',
              'The + unique things: the moon, the sky, the president',
              'The + nationalities (plural): the Brazilians, the Americans',
              'Musical instruments: play the piano, play the guitar',
            ],
            relatedSkills: ['articles'],
          },
          {
            id: 'art-3',
            title: 'Zero Article',
            content: 'No article is used with uncountable nouns in general statements, plural nouns, countries, languages, and more.',
            examples: [
              { text: 'I like music', translation: 'Eu gosto de música', explanation: 'General statement with uncountable noun' },
              { text: 'Students study hard', translation: 'Estudantes estudam muito', explanation: 'Plural noun in general' },
              { text: 'I speak English', translation: 'Eu falo inglês', explanation: 'Language name' },
              { text: 'Brazil is beautiful', translation: 'O Brasil é lindo', explanation: 'Most country names' },
            ],
            tips: [
              'No article: abstract ideas, general truths, meals',
              'No article: sports, games, academic subjects',
              'Exception: The United States, The Netherlands, The Philippines',
            ],
            relatedSkills: ['articles'],
          },
        ],
        exercises: [
          {
            id: 'art-ex1',
            type: 'multiple-choice',
            question: '___ elephant is a large animal.',
            options: ['A', 'An', 'The'],
            correctAnswer: 'An',
            translation: '___ elefante é um animal grande.',
            explanation: 'Elephant starts with vowel sound',
            points: 10,
          },
          {
            id: 'art-ex2',
            type: 'fill-blank',
            question: 'She is ___ doctor.',
            correctAnswer: 'a',
            translation: 'Ela é ___ médica.',
            explanation: 'Doctor starts with consonant sound /d/',
            points: 10,
          },
          {
            id: 'art-ex3',
            type: 'multiple-choice',
            question: '___ sun rises in the east.',
            options: ['A', 'An', 'The'],
            correctAnswer: 'The',
            translation: '___ sol nasce no leste.',
            explanation: 'Unique thing requires "the"',
            points: 10,
          },
          {
            id: 'art-ex4',
            type: 'correction',
            question: 'Find and correct: I speak a English very well.',
            correctAnswer: 'I speak English very well',
            translation: 'Encontre e corrija',
            explanation: 'Language names do not take articles',
            points: 15,
          },
          {
            id: 'art-ex5',
            type: 'matching',
            question: 'Choose the correct option: ___ hour',
            options: ['a', 'an'],
            correctAnswer: 'an',
            translation: '___ hora',
            explanation: 'Hour starts with vowel sound /aʊ/',
            points: 10,
          },
          {
            id: 'art-ex6',
            type: 'fill-blank',
            question: 'I saw ___ beautiful flower in ___ garden.',
            correctAnswer: ['a', 'the'],
            translation: 'Eu vi ___ flor bonita em ___ jardim.',
            explanation: 'First mention = a/an, specific = the',
            points: 15,
          },
        ],
      },
      {
        id: 'found-3',
        title: 'Sentence Writing Basics',
        description: 'Learn to construct proper English sentences',
        estimatedMinutes: 15,
        grammarSections: [
          {
            id: 'sent-1',
            title: 'Basic Word Order',
            content: 'English follows a strict word order: Subject + Verb + Object. Changing this order can make sentences confusing or incorrect.',
            examples: [
              { text: 'She reads books', translation: 'Ela lê livros', explanation: 'SVO: She (subject) + reads (verb) + books (object)' },
              { text: 'They play soccer', translation: 'Eles jogam futebol', explanation: 'SVO structure' },
              { text: 'I love coffee', translation: 'Eu amo café', explanation: 'SVO structure' },
            ],
            tips: [
              'Always identify the subject (who does the action) first',
              'The verb shows the action or state',
              'The object receives the action',
              'Questions often change word order: "Does she read books?"',
            ],
            relatedSkills: ['sentences'],
          },
          {
            id: 'sent-2',
            title: 'Types of Sentences',
            content: 'English has four types of sentences: declarative (statement), interrogative (question), imperative (command), and exclamatory.',
            examples: [
              { text: 'I am happy', translation: 'Eu estou feliz', explanation: 'Declarative: makes a statement' },
              { text: 'Are you happy?', translation: 'Você está feliz?', explanation: 'Interrogative: asks a question' },
              { text: 'Be quiet!', translation: 'Fique quieto!', explanation: 'Imperative: gives a command' },
              { text: 'What a beautiful day!', translation: 'Que dia lindo!', explanation: 'Exclamatory: expresses strong emotion' },
            ],
            tips: [
              'Declarative sentences end with a period',
              'Interrogative sentences end with a question mark',
              'Imperative sentences can end with period or exclamation',
              'Exclamatory sentences always end with exclamation mark',
            ],
            relatedSkills: ['sentences'],
          },
        ],
        exercises: [
          {
            id: 'sent-ex1',
            type: 'multiple-choice',
            question: 'Which is the correct word order?',
            options: ['Books reads she', 'She books reads', 'She reads books'],
            correctAnswer: 'She reads books',
            translation: 'Qual é a ordem correta das palavras?',
            explanation: 'Subject + Verb + Object',
            points: 10,
          },
          {
            id: 'sent-ex2',
            type: 'ordering',
            question: 'Put the words in correct order: every / We / morning / jog',
            correctAnswer: 'We jog every morning',
            translation: 'Coloque as palavras na ordem correta',
            points: 10,
          },
          {
            id: 'sent-ex3',
            type: 'rewrite',
            question: 'Change to interrogative: You speak Spanish.',
            correctAnswer: 'Do you speak Spanish?',
            translation: 'Mude para interrogativo',
            explanation: 'Add "Do" at the beginning for Present Simple questions',
            points: 15,
          },
          {
            id: 'sent-ex4',
            type: 'fill-blank',
            question: '___ is a professional. (doctor, she)',
            correctAnswer: 'She is a doctor',
            translation: 'Preencha com as palavras na ordem correta',
            explanation: 'Subject + be + complement',
            points: 10,
          },
        ],
      },
    ],
    quizzes: [
      {
        id: 'found-quiz-1',
        title: 'Foundation Quiz',
        description: 'Test your knowledge of basic grammar concepts',
        passingScore: 70,
        xpReward: 100,
        gemReward: 5,
        timeLimit: 300,
        questions: [
          {
            id: 'qz1-q1',
            type: 'multiple-choice',
            question: 'My brother ___ in London.',
            options: ['live', 'lives', 'living'],
            correctAnswer: 'lives',
            translation: 'Meu irmão ___ em Londres.',
            points: 10,
          },
          {
            id: 'qz1-q2',
            type: 'multiple-choice',
            question: '___ honest person.',
            options: ['A', 'An', 'The'],
            correctAnswer: 'An',
            translation: '___ pessoa honesta.',
            explanation: 'Honest starts with vowel sound',
            points: 10,
          },
          {
            id: 'qz1-q3',
            type: 'fill-blank',
            question: 'Everyone ___ to learn.',
            correctAnswer: 'wants',
            translation: 'Todos ___ aprender.',
            explanation: 'Everyone takes singular verb',
            points: 10,
          },
          {
            id: 'qz1-q4',
            type: 'multiple-choice',
            question: '___ United States is large.',
            options: ['A', 'An', 'The'],
            correctAnswer: 'The',
            translation: '___ Estados Unidos é grande.',
            explanation: 'Special country names use "the"',
            points: 10,
          },
          {
            id: 'qz1-q5',
            type: 'correction',
            question: 'Correct: She don\'t understand.',
            correctAnswer: 'She doesn\'t understand',
            translation: 'Corrija',
            explanation: 'She/He/It needs doesn\'t',
            points: 10,
          },
          {
            id: 'qz1-q6',
            type: 'multiple-choice',
            question: 'The children ___ TV.',
            options: ['watch', 'watches', 'watching'],
            correctAnswer: 'watch',
            translation: 'As crianças ___ TV.',
            explanation: 'Plural subject takes plural verb',
            points: 10,
          },
          {
            id: 'qz1-q7',
            type: 'fill-blank',
            question: 'I saw ___ interesting movie yesterday.',
            correctAnswer: 'an',
            translation: 'Eu vi ___ filme interessante ontem.',
            explanation: 'Interesting starts with vowel sound',
            points: 10,
          },
          {
            id: 'qz1-q8',
            type: 'rewrite',
            question: 'Make plural: A cat sleeps on the bed.',
            correctAnswer: 'Cats sleep on the bed',
            translation: 'Faça plural',
            points: 10,
          },
        ],
      },
    ],
    vocabulary: [
      { word: 'Subject', translation: 'Sujeito', partOfSpeech: 'noun', example: 'The subject of the sentence is "I"' },
      { word: 'Verb', translation: 'Verbo', partOfSpeech: 'noun', example: 'Run, eat, think are verbs' },
      { word: 'Object', translation: 'Objeto', partOfSpeech: 'noun', example: 'In "She eats fruit", fruit is the object' },
      { word: 'Article', translation: 'Artigo', partOfSpeech: 'noun', example: 'A, an, and the are articles' },
      { word: 'Sentence', translation: 'Frase', partOfSpeech: 'noun', example: 'A sentence expresses a complete thought' },
    ],
    commonMistakes: [
      { incorrect: 'He don\'t like pizza', correct: 'He doesn\'t like pizza', explanation: 'Use doesn\'t with he/she/it' },
      { incorrect: 'A hour', correct: 'An hour', explanation: 'Hour starts with vowel sound' },
      { incorrect: 'I am agree', correct: 'I agree', explanation: 'Agree doesn\'t need "am"' },
      { incorrect: 'She is teacher', correct: 'She is a teacher', explanation: 'Profession needs article "a"' },
      { incorrect: 'Books she reads', correct: 'She reads books', explanation: 'English word order is SVO' },
    ],
  },
  {
    stepId: 2,
    stepName: 'Present Tenses',
    overview: 'Learn to talk about daily routines, habits, and actions happening right now. Master the Present Simple and Present Continuous tenses.',
    lessons: [
      {
        id: 'pres-1',
        title: 'Present Simple Tense',
        description: 'Describe habits, routines, facts, and general truths',
        estimatedMinutes: 20,
        grammarSections: [
          {
            id: 'ps-1',
            title: 'Form and Usage',
            content: 'The Present Simple is used for habits, routines, facts, and general truths. For he/she/it, add -s or -es to the verb.',
            examples: [
              { text: 'I work every day', translation: 'Eu trabalho todos os dias', explanation: 'Base form for I/you/we/they' },
              { text: 'She works every day', translation: 'Ela trabalha todos os dias', explanation: '-s for she' },
              { text: 'He watches TV', translation: 'Ele assiste TV', explanation: '-es for words ending in -ch, -sh, -o' },
              { text: 'She studies English', translation: 'Ela estuda inglês', explanation: '-ies for words ending in consonant + y' },
            ],
            tips: [
              'Time expressions: always, usually, often, sometimes, never, every day',
              'States and habits: I like coffee, She lives in Brazil',
              'Facts: Water boils at 100°C',
            ],
            relatedSkills: ['present-simple'],
          },
          {
            id: 'ps-2',
            title: 'Spelling Rules for -s/-es',
            content: 'Different verb endings require different spelling changes when adding -s or -es.',
            examples: [
              { text: 'play → plays', translation: 'jogar', explanation: 'Add -s to most verbs' },
              { text: 'watch → watches', translation: 'assistir', explanation: 'Add -es to -ch, -sh, -x, -z, -o' },
              { text: 'study → studies', translation: 'estudar', explanation: 'Consonant + y → -ies' },
              { text: 'fly → flies', translation: 'voar', explanation: 'Consonant + y → -ies' },
            ],
            tips: [
              'Most verbs: just add -s (works, plays, reads)',
              'Verbs ending in s, sh, ch, x, z, o: add -es (watches, goes)',
              'Verbs ending in consonant + y: y → ies (studies, flies)',
              'Verbs ending in vowel + y: just add -s (plays, stays)',
            ],
            relatedSkills: ['present-simple'],
          },
        ],
        exercises: [
          {
            id: 'ps-ex1',
            type: 'fill-blank',
            question: 'She ___ (work) in a hospital.',
            correctAnswer: 'works',
            translation: 'Ela ___ em um hospital.',
            explanation: 'She + -s on verb',
            points: 10,
          },
          {
            id: 'ps-ex2',
            type: 'multiple-choice',
            question: 'He always ___ coffee in the morning.',
            options: ['drink', 'drinks', 'drinking'],
            correctAnswer: 'drinks',
            translation: 'Ele sempre ___ café de manhã.',
            explanation: 'Third person singular',
            points: 10,
          },
          {
            id: 'ps-ex3',
            type: 'fill-blank',
            question: 'They ___ (study) English every evening.',
            correctAnswer: 'study',
            translation: 'Eles ___ inglês toda noite.',
            explanation: 'They uses base form',
            points: 10,
          },
          {
            id: 'ps-ex4',
            type: 'rewrite',
            question: 'Change to negative: She works at home.',
            correctAnswer: 'She does not work at home',
            translation: 'Mude para negativo',
            explanation: 'She doesn\'t work',
            points: 15,
          },
          {
            id: 'ps-ex5',
            type: 'correction',
            question: 'Correct: He go to school by bus.',
            correctAnswer: 'He goes to school by bus',
            translation: 'Corrija',
            points: 15,
          },
        ],
      },
      {
        id: 'pres-2',
        title: 'Present Continuous Tense',
        description: 'Describe actions happening now or around this time',
        estimatedMinutes: 15,
        grammarSections: [
          {
            id: 'pc-1',
            title: 'Form and Usage',
            content: 'The Present Continuous is formed with be + verb-ing. Use it for actions happening now, at this moment, or around this time.',
            examples: [
              { text: 'I am reading a book', translation: 'Eu estou lendo um livro', explanation: 'Action happening now' },
              { text: 'She is studying at the moment', translation: 'Ela está estudando neste momento', explanation: 'At this moment' },
              { text: 'They are working on a project', translation: 'Eles estão trabalhando em um projeto', explanation: 'Around this time' },
            ],
            tips: [
              'Time markers: now, right now, at the moment, currently, these days',
              'Temporary situations: "I am staying with friends this week"',
              'Changing situations: "The weather is getting colder"',
            ],
            relatedSkills: ['present-continuous'],
          },
          {
            id: 'pc-2',
            title: 'Spelling -ing Forms',
            content: 'When adding -ing to verbs, spelling changes may be necessary.',
            examples: [
              { text: 'work → working', translation: 'trabalhar', explanation: 'Just add -ing' },
              { text: 'make → making', translation: 'fazer', explanation: 'Silent e before -ing' },
              { text: 'run → running', translation: 'correr', explanation: 'Double final consonant' },
              { text: 'sit → sitting', translation: 'sentar', explanation: 'Consonant-vowel-consonant pattern' },
            ],
            tips: [
              'Most verbs: working, playing, reading',
              'Verbs ending in -e: make → making, write → writing',
              'Short verbs (CVC): sit → sitting, run → running',
              'Verbs ending in -ie: lie → lying',
            ],
            relatedSkills: ['present-continuous'],
          },
        ],
        exercises: [
          {
            id: 'pc-ex1',
            type: 'fill-blank',
            question: 'Look! She ___ (sing) beautifully.',
            correctAnswer: 'is singing',
            translation: 'Olha! Ela ___ belamente.',
            explanation: 'Present Continuous - happening now',
            points: 10,
          },
          {
            id: 'pc-ex2',
            type: 'multiple-choice',
            question: 'Right now, I ___ my homework.',
            options: ['do', 'does', 'am doing'],
            correctAnswer: 'am doing',
            translation: 'Agora, eu ___ minha tarefa.',
            explanation: 'Present Continuous with I',
            points: 10,
          },
          {
            id: 'pc-ex3',
            type: 'ordering',
            question: 'Arrange: she / making / is / dinner',
            correctAnswer: 'She is making dinner',
            translation: 'Organize as palavras',
            points: 10,
          },
          {
            id: 'pc-ex4',
            type: 'fill-blank',
            question: 'They ___ (play) football now.',
            correctAnswer: 'are playing',
            translation: 'Eles ___ futebol agora.',
            explanation: 'They + are + -ing',
            points: 10,
          },
        ],
      },
    ],
    quizzes: [
      {
        id: 'pres-quiz-1',
        title: 'Present Tenses Quiz',
        description: 'Test your understanding of Present Simple and Present Continuous',
        passingScore: 70,
        xpReward: 100,
        gemReward: 5,
        timeLimit: 300,
        questions: [
          {
            id: 'prz-q1',
            type: 'multiple-choice',
            question: 'He ___ to music every day.',
            options: ['listen', 'listens', 'listening'],
            correctAnswer: 'listens',
            translation: 'Ele ___ música todo dia.',
            points: 10,
          },
          {
            id: 'prz-q2',
            type: 'fill-blank',
            question: 'She ___ (study) medicine at university.',
            correctAnswer: 'studies',
            translation: 'Ela ___ medicina na universidade.',
            points: 10,
          },
          {
            id: 'prz-q3',
            type: 'multiple-choice',
            question: 'Listen! Someone ___ at the door.',
            options: ['knock', 'knocks', 'is knocking'],
            correctAnswer: 'is knocking',
            translation: 'Ouça! Alguém ___ na porta.',
            points: 10,
          },
          {
            id: 'prz-q4',
            type: 'rewrite',
            question: 'Change to present continuous: He reads a book.',
            correctAnswer: 'He is reading a book',
            translation: 'Mude para Present Continuous',
            points: 15,
          },
          {
            id: 'prz-q5',
            type: 'fill-blank',
            question: 'My parents ___ (live) in São Paulo.',
            correctAnswer: 'live',
            translation: 'Meus pais ___ em São Paulo.',
            points: 10,
          },
        ],
      },
    ],
    vocabulary: [
      { word: 'Routine', translation: 'Rotina', partOfSpeech: 'noun', example: 'My daily routine starts at 7am' },
      { word: 'Habit', translation: 'Hábito', partOfSpeech: 'noun', example: 'Exercising is a good habit' },
      { word: 'Currently', translation: 'Atualmente', partOfSpeech: 'adverb', example: 'I am currently learning English' },
      { word: 'Moment', translation: 'Momento', partOfSpeech: 'noun', example: 'Wait a moment, please' },
    ],
    commonMistakes: [
      { incorrect: 'She is work', correct: 'She is working', explanation: 'Continuous tense needs verb-ing' },
      { incorrect: 'He goes to school every day', correct: 'He goes to school every day', explanation: 'Correct! Present Simple for routine' },
      { incorrect: 'I am usually watching TV', correct: 'I usually watch TV', explanation: 'Use Present Simple with "usually"' },
      { incorrect: 'She play tennis', correct: 'She plays tennis', explanation: 'Add -s for third person' },
    ],
  },
  {
    stepId: 3,
    stepName: 'Past Tenses',
    overview: 'Learn to talk about completed actions and events in the past. Master Past Simple and Past Continuous.',
    lessons: [
      {
        id: 'past-1',
        title: 'Past Simple Tense',
        description: 'Describe completed actions in the past',
        estimatedMinutes: 20,
        grammarSections: [
          {
            id: 'past-1a',
            title: 'Regular Verbs',
            content: 'Regular verbs form the past by adding -ed to the base form.',
            examples: [
              { text: 'walk → walked', translation: 'caminhar', explanation: 'Add -ed' },
              { text: 'play → played', translation: 'jogar', explanation: 'Add -ed' },
              { text: 'study → studied', translation: 'estudar', explanation: 'y → -ied' },
              { text: 'stop → stopped', translation: 'parar', explanation: 'Short vowel + consonant: double final letter' },
            ],
            tips: [
              'Most verbs: work → worked',
              'Verbs ending in e: like → liked',
              'Consonant + y: study → studied',
              'Short verb (CVC): stop → stopped',
            ],
            relatedSkills: ['past-simple'],
          },
          {
            id: 'past-1b',
            title: 'Irregular Verbs',
            content: 'Irregular verbs do not follow the -ed pattern. They have unique past forms that must be memorized.',
            examples: [
              { text: 'go → went', translation: 'ir', explanation: 'Completely different form' },
              { text: 'eat → ate', translation: 'comer', explanation: 'Vowel change' },
              { text: 'see → saw', translation: 'ver', explanation: 'Vowel change' },
              { text: 'have → had', translation: 'ter', explanation: 'Complete change' },
              { text: 'write → wrote', translation: 'escrever', explanation: ' vowel change + consonant' },
            ],
            tips: [
              'There is no rule - memorize common irregular verbs',
              'Make lists grouped by pattern when possible',
              'Practice regularly to remember',
              'Use the verb in sentences to reinforce memory',
            ],
            relatedSkills: ['past-simple'],
          },
        ],
        exercises: [
          {
            id: 'past-ex1',
            type: 'fill-blank',
            question: 'Yesterday, I ___ (visit) my grandmother.',
            correctAnswer: 'visited',
            translation: 'Ontem, eu ___ minha avó.',
            explanation: 'Regular verb: add -ed',
            points: 10,
          },
          {
            id: 'past-ex2',
            type: 'multiple-choice',
            question: 'She ___ to Paris last summer.',
            options: ['go', 'went', 'gone'],
            correctAnswer: 'went',
            translation: 'Ela ___ para Paris no verão passado.',
            explanation: 'Irregular verb: go → went',
            points: 10,
          },
          {
            id: 'past-ex3',
            type: 'fill-blank',
            question: 'We ___ (eat) pizza yesterday.',
            correctAnswer: 'ate',
            translation: 'Nós ___ pizza ontem.',
            explanation: 'Irregular: eat → ate',
            points: 10,
          },
          {
            id: 'past-ex4',
            type: 'rewrite',
            question: 'Change to negative: He played football.',
            correctAnswer: 'He did not play football',
            translation: 'Mude para negativo',
            explanation: 'Did not + base form',
            points: 15,
          },
          {
            id: 'past-ex5',
            type: 'correction',
            question: 'Correct: She goed to the store.',
            correctAnswer: 'She went to the store',
            translation: 'Corrija',
            explanation: 'go → went (irregular)',
            points: 15,
          },
        ],
      },
      {
        id: 'past-2',
        title: 'Past Continuous Tense',
        description: 'Describe actions in progress at a specific time in the past',
        estimatedMinutes: 15,
        grammarSections: [
          {
            id: 'pastc-1',
            title: 'Form and Usage',
            content: 'The Past Continuous is formed with was/were + verb-ing. Use it for actions in progress at a specific past time.',
            examples: [
              { text: 'I was sleeping at midnight', translation: 'Eu estava dormindo à meia-noite', explanation: 'At a specific time' },
              { text: 'She was reading when he called', translation: 'Ela estava lendo quando ele ligou', explanation: 'With Past Simple' },
              { text: 'They were cooking all afternoon', translation: 'Eles estavam cozinhando a tarde toda', explanation: 'Duration in past' },
            ],
            tips: [
              'was for I/he/she/it, were for you/we/they',
              'Often used with "when" or "while"',
              '"While" + Past Continuous, "when" + Past Simple',
              'Set the scene before describing main events',
            ],
            relatedSkills: ['past-continuous'],
          },
        ],
        exercises: [
          {
            id: 'pastc-ex1',
            type: 'fill-blank',
            question: 'At 8pm, I ___ (watch) TV.',
            correctAnswer: 'was watching',
            translation: 'Às 8pm, eu ___ TV.',
            explanation: 'Past Continuous with I → was',
            points: 10,
          },
          {
            id: 'pastc-ex2',
            type: 'multiple-choice',
            question: 'She ___ while I ___ breakfast.',
            options: ['worked / was making', 'was working / was making', 'was working / made'],
            correctAnswer: 'was working / was making',
            translation: 'Ela ___ enquanto eu ___ café da manhã.',
            explanation: 'While + Past Continuous',
            points: 15,
          },
        ],
      },
    ],
    quizzes: [
      {
        id: 'past-quiz-1',
        title: 'Past Tenses Quiz',
        description: 'Test your knowledge of Past Simple and Past Continuous',
        passingScore: 70,
        xpReward: 100,
        gemReward: 5,
        timeLimit: 300,
        questions: [
          {
            id: 'paq-q1',
            type: 'multiple-choice',
            question: 'Yesterday, I ___ my friends.',
            options: ['meet', 'met', 'meeting'],
            correctAnswer: 'met',
            translation: 'Ontem, eu ___ meus amigos.',
            points: 10,
          },
          {
            id: 'paq-q2',
            type: 'fill-blank',
            question: 'They ___ (play) when it started raining.',
            correctAnswer: 'were playing',
            translation: 'Eles ___ quando começou a chover.',
            points: 10,
          },
          {
            id: 'paq-q3',
            type: 'rewrite',
            question: 'Change to question: She worked late.',
            correctAnswer: 'Did she work late?',
            translation: 'Mude para pergunta',
            points: 15,
          },
        ],
      },
    ],
    vocabulary: [
      { word: 'Yesterday', translation: 'Ontem', partOfSpeech: 'adverb', example: 'I saw her yesterday' },
      { word: 'Last week', translation: 'Semana passada', partOfSpeech: 'phrase', example: 'Last week was busy' },
      { word: 'Ago', translation: ' atrás', partOfSpeech: 'adverb', example: 'Two years ago' },
    ],
    commonMistakes: [
      { incorrect: 'She goed home', correct: 'She went home', explanation: 'go → went (irregular)' },
      { incorrect: 'I was working yesterday', correct: 'I worked yesterday', explanation: 'Use Past Simple for completed actions' },
      { incorrect: 'While I was walking, I saw', correct: 'While I was walking, I saw', explanation: 'Correct - while + continuous' },
    ],
  },
  {
    stepId: 4,
    stepName: 'Future & More',
    overview: 'Learn to talk about future plans, predictions, and expand your grammar with prepositions and comparatives.',
    lessons: [
      {
        id: 'fut-1',
        title: 'Future with Will',
        description: 'Make predictions and spontaneous decisions',
        estimatedMinutes: 15,
        grammarSections: [
          {
            id: 'will-1',
            title: 'Form and Usage',
            content: 'Will is used for predictions, spontaneous decisions, promises, and offers. It is formed with will + base verb.',
            examples: [
              { text: 'It will rain tomorrow', translation: 'Vai chover amanhã', explanation: 'Prediction' },
              { text: 'I will help you', translation: 'Eu vou te ajudar', explanation: 'Spontaneous decision' },
              { text: 'I promise I will come', translation: 'Prometo que vou vir', explanation: 'Promise' },
              { text: 'Will you have some coffee?', translation: 'Você quer um café?', explanation: 'Offer' },
            ],
            tips: [
              'Will + not = won\'t',
              'I will = I\'ll (contraction)',
              'Use "I think/I don\'t think" + will for opinions',
              'For facts: "The sun will rise tomorrow"',
            ],
            relatedSkills: ['future-will'],
          },
        ],
        exercises: [
          {
            id: 'fut-ex1',
            type: 'fill-blank',
            question: 'I think it ___ (rain) later.',
            correctAnswer: 'will rain',
            translation: 'Eu acho que ___ (chover) mais tarde.',
            explanation: 'Prediction with will',
            points: 10,
          },
          {
            id: 'fut-ex2',
            type: 'multiple-choice',
            question: '___ you help me with this?',
            options: ['Will', 'Going to', 'Are'],
            correctAnswer: 'Will',
            translation: '___ você me ajudar com isso?',
            explanation: 'Offer or request',
            points: 10,
          },
        ],
      },
      {
        id: 'fut-2',
        title: 'Future with Going to',
        description: 'Express plans and intentions',
        estimatedMinutes: 15,
        grammarSections: [
          {
            id: 'going-1',
            title: 'Form and Usage',
            content: 'Going to is used for planned intentions and predictions based on evidence.',
            examples: [
              { text: 'I am going to study medicine', translation: 'Vou estudar medicina', explanation: 'Planned intention' },
              { text: 'Look! It is going to rain', translation: 'Olha! Vai chover', explanation: 'Prediction with evidence' },
              { text: 'We are going to visit them next week', translation: 'Vamos visitá-los semana que vem', explanation: 'Future plan' },
            ],
            tips: [
              'am/is/are + going to + verb',
              'Use for plans decided before speaking',
              'Use when you can see evidence of what will happen',
              'I\'m going to (contraction: I\'m gonna)',
            ],
            relatedSkills: ['future-going'],
          },
        ],
        exercises: [
          {
            id: 'going-ex1',
            type: 'fill-blank',
            question: 'She ___ (travel) to Europe next month. She bought the tickets.',
            correctAnswer: 'is going to travel',
            translation: 'Ela ___ para a Europa no próximo mês.',
            explanation: 'Planned intention with evidence',
            points: 10,
          },
        ],
      },
    ],
    quizzes: [
      {
        id: 'fut-quiz-1',
        title: 'Future Tenses Quiz',
        description: 'Test your knowledge of future forms',
        passingScore: 70,
        xpReward: 100,
        gemReward: 5,
        timeLimit: 300,
        questions: [
          {
            id: 'fq-q1',
            type: 'multiple-choice',
            question: 'I ___ start a new job next Monday.',
            options: ['will', 'am going to', 'both'],
            correctAnswer: 'both',
            translation: 'Eu ___ começar um novo trabalho na segunda-feira.',
            explanation: 'Both can be used for plans',
            points: 15,
          },
        ],
      },
    ],
    vocabulary: [
      { word: 'Tomorrow', translation: 'Amanhã', partOfSpeech: 'adverb', example: 'See you tomorrow' },
      { word: 'Plan', translation: 'Plano', partOfSpeech: 'noun', example: 'Do you have any plans?' },
      { word: 'Prediction', translation: 'Predição', partOfSpeech: 'noun', example: 'Weather prediction' },
    ],
    commonMistakes: [
      { incorrect: 'I will to go', correct: 'I will go', explanation: 'Will + base verb, no "to"' },
      { incorrect: 'I going to travel', correct: 'I am going to travel', explanation: 'Need "am" before "going"' },
    ],
  },
];

export const getStepContent = (stepId: number): StepContent | undefined => {
  return stepContents.find(content => content.stepId === stepId);
};

export const getLessonById = (stepId: number, lessonId: string): { lesson: Lesson; step: StepContent } | undefined => {
  const step = getStepContent(stepId);
  if (!step) return undefined;
  const lesson = step.lessons.find(l => l.id === lessonId);
  if (!lesson) return undefined;
  return { lesson, step };
};

export const getQuizById = (stepId: number, quizId: string): { quiz: Quiz; step: StepContent } | undefined => {
  const step = getStepContent(stepId);
  if (!step) return undefined;
  const quiz = step.quizzes.find(q => q.id === quizId);
  if (!quiz) return undefined;
  return { quiz, step };
};