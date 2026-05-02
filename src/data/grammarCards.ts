export interface GrammarCard {
  id: string;
  title: string;
  rule: string;
  examples: {
    correct: string;
    incorrect?: string;
    translation: string;
  }[];
  tip: string;
  category: 'verbs' | 'tenses' | 'grammar' | 'writing' | 'articles';
}

export const grammarCards: GrammarCard[] = [
  {
    id: 'articles-a-an',
    title: 'A vs An',
    rule: 'Use "a" before consonant sounds and "an" before vowel sounds.',
    examples: [
      { correct: 'a book', incorrect: 'an book', translation: 'um livro' },
      { correct: 'an apple', incorrect: 'a apple', translation: 'uma maçã' },
      { correct: 'an hour', incorrect: 'a hour', translation: 'uma hora' },
      { correct: 'a university', incorrect: 'an university', translation: 'uma universidade' },
    ],
    tip: 'The rule is about SOUNDS, not letters! "Hour" starts with a vowel sound (/aʊ/), so it takes "an".',
    category: 'articles',
  },
  {
    id: 'articles-the',
    title: 'The Definite Article',
    rule: 'Use "the" when talking about something specific or already mentioned.',
    examples: [
      { correct: 'The book on the table', incorrect: 'Book on the table', translation: 'O livro na mesa' },
      { correct: 'The sun is bright', translation: 'O sol é brilhante' },
      { correct: 'I visited the museum', translation: 'Eu visitei o museu' },
    ],
    tip: 'Use "the" with unique things (the sun, the moon), countries with names (the United States), and superlatives.',
    category: 'articles',
  },
  {
    id: 'subject-verb-basic',
    title: 'Subject-Verb Agreement',
    rule: 'Singular subjects take singular verbs; plural subjects take plural verbs.',
    examples: [
      { correct: 'She runs every morning', incorrect: 'She run every morning', translation: 'Ela corre toda manhã' },
      { correct: 'They play soccer', incorrect: 'They plays soccer', translation: 'Eles jogam futebol' },
      { correct: 'The dog barks', translation: 'O cachorro late' },
    ],
    tip: 'Remember: "I" and "you" with present simple use base verbs (I walk, not I walks).',
    category: 'verbs',
  },
  {
    id: 'be-verb',
    title: 'Be Verb (am/is/are)',
    rule: 'Use am with I, is with he/she/it, and are with you/we/they.',
    examples: [
      { correct: 'I am happy', incorrect: 'I is happy', translation: 'Eu sou/estou feliz' },
      { correct: 'He is a teacher', incorrect: 'He are a teacher', translation: 'Ele é professor' },
      { correct: 'We are students', translation: 'Nós somos estudantes' },
    ],
    tip: '"Be" verb contractions: I\'m, he\'s, she\'s, it\'s, we\'re, they\'re, you\'re.',
    category: 'verbs',
  },
  {
    id: 'present-simple',
    title: 'Present Simple Tense',
    rule: 'Use for habits, routines, facts, and general truths. Add -s/-es for he/she/it.',
    examples: [
      { correct: 'She works every day', incorrect: 'She work every day', translation: 'Ela trabalha todos os dias' },
      { correct: 'He watches TV', incorrect: 'He watch TV', translation: 'Ele assiste TV' },
      { correct: 'Water boils at 100°C', translation: 'A água ferve a 100°C' },
    ],
    tip: 'Time markers: always, usually, often, sometimes, never, every day/week.',
    category: 'tenses',
  },
  {
    id: 'present-continuous',
    title: 'Present Continuous',
    rule: 'Use am/is/are + verb-ing for actions happening now or around this time.',
    examples: [
      { correct: 'She is studying now', incorrect: 'She studying now', translation: 'Ela está estudando agora' },
      { correct: 'They are playing outside', translation: 'Eles estão brincando lá fora' },
      { correct: 'I am working on a project', translation: 'Estou trabalhando em um projeto' },
    ],
    tip: 'Key words: now, right now, currently, at the moment, these days.',
    category: 'tenses',
  },
  {
    id: 'past-simple',
    title: 'Past Simple Tense',
    rule: 'Use for completed actions in the past. Add -ed for regular verbs.',
    examples: [
      { correct: 'She visited Paris', incorrect: 'She visit Paris', translation: 'Ela visitou Paris' },
      { correct: 'He played football yesterday', translation: 'Ele jogou futebol ontem' },
      { correct: 'They arrived early', translation: 'Eles chegaram cedo' },
    ],
    tip: 'Irregular verbs: go-went, see-saw, eat-ate, speak-spoke. Memorize them!',
    category: 'tenses',
  },
  {
    id: 'past-continuous',
    title: 'Past Continuous',
    rule: 'Use was/were + verb-ing for actions in progress at a specific past time.',
    examples: [
      { correct: 'I was sleeping at midnight', incorrect: 'I slept at midnight', translation: 'Eu estava dormindo à meia-noite' },
      { correct: 'She was reading when he called', translation: 'Ela estava lendo quando ele ligou' },
      { correct: 'They were cooking all afternoon', translation: 'Eles estavam cozinhando a tarde toda' },
    ],
    tip: 'Often used with Past Simple: "I was walking when I saw her."',
    category: 'tenses',
  },
  {
    id: 'future-will',
    title: 'Future with WILL',
    rule: 'Use will for predictions, spontaneous decisions, and promises.',
    examples: [
      { correct: 'It will rain tomorrow', incorrect: 'It shall rain tomorrow', translation: 'Vai chover amanhã' },
      { correct: 'I will help you', translation: 'Eu vou te ajudar' },
      { correct: 'The sky will be clear', translation: 'O céu estará limpo' },
    ],
    tip: '"Will" + not = won\'t. "I will" = I\'ll (contraction).',
    category: 'tenses',
  },
  {
    id: 'future-going-to',
    title: 'Future with GOING TO',
    rule: 'Use going to for planned intentions and predictions with evidence.',
    examples: [
      { correct: 'I am going to study medicine', incorrect: 'I will study medicine', translation: 'Vou estudar medicina' },
      { correct: 'Look at those clouds! It is going to rain', translation: 'Olha aquelas nuvens! Vai chover!' },
      { correct: 'She is going to start a new job', translation: 'Ela vai começar um novo trabalho' },
    ],
    tip: 'If there\'s a plan or evidence, use going to. For spontaneous decisions, use will.',
    category: 'tenses',
  },
  {
    id: 'pronouns-subject',
    title: 'Subject Pronouns',
    rule: 'Use subject pronouns as the sentence subject: I, you, he, she, it, we, they.',
    examples: [
      { correct: 'She is my sister', incorrect: 'Her is my sister', translation: 'Ela é minha irmã' },
      { correct: 'We love music', incorrect: 'Us love music', translation: 'Nós amamos música' },
      { correct: 'They are from Brazil', translation: 'Eles são do Brasil' },
    ],
    tip: 'After "to be": It\'s me (not I), It\'s her (not she) - informal but common.',
    category: 'grammar',
  },
  {
    id: 'pronouns-possessive',
    title: 'Possessive Pronouns',
    rule: 'Use possessive pronouns to show ownership: my, your, his, her, its, our, their.',
    examples: [
      { correct: 'This is my house', incorrect: 'This is mine house', translation: 'Esta é a minha casa' },
      { correct: 'Her bag is blue', translation: 'A bolsa dela é azul' },
      { correct: 'Our team won', translation: 'Nosso time venceu' },
    ],
    tip: 'my + noun = I have... ; mine = alone: This book is mine.',
    category: 'grammar',
  },
  {
    id: 'adjectives',
    title: 'Adjective Order',
    rule: 'Order adjectives: Opinion → Size → Age → Shape → Color → Origin → Material → Purpose.',
    examples: [
      { correct: 'A beautiful small old rectangular brown Italian wooden writing table', translation: 'Uma bela mesa de escrita pequena, velha, retangular, marrom, italiana, de madeira' },
      { correct: 'A lovely big new house', translation: 'Uma casa linda e grande nova' },
      { correct: 'Blue eyes', incorrect: 'Eyes blue', translation: 'Olhos azuis' },
    ],
    tip: 'Usually use 2-3 adjectives max. Opinion (beautiful, nice) comes first.',
    category: 'grammar',
  },
  {
    id: 'comparatives',
    title: 'Comparatives & Superlatives',
    rule: 'Comparatives compare 2 things (-er/more); superlatives say the most (-est/most).',
    examples: [
      { correct: 'She is taller than me', incorrect: 'She is more tall than me', translation: 'Ela é mais alta que eu' },
      { correct: 'He is the tallest in class', translation: 'Ele é o mais alto da sala' },
      { correct: 'This is more interesting than that', translation: 'Isso é mais interessante que aquilo' },
    ],
    tip: 'Short adjectives: -er/-est. Long adjectives: more/most. (taller vs more beautiful).',
    category: 'grammar',
  },
  {
    id: 'prepositions-time',
    title: 'Prepositions of Time',
    rule: 'in (months/years), on (days/dates), at (specific times).',
    examples: [
      { correct: 'in July', incorrect: 'on July', translation: 'em julho' },
      { correct: 'on Monday', incorrect: 'in Monday', translation: 'na segunda-feira' },
      { correct: 'at 3 o\'clock', incorrect: 'in 3 o\'clock', translation: 'às 3 horas' },
    ],
    tip: 'in the morning/afternoon/evening, but at night. On the weekend.',
    category: 'grammar',
  },
  {
    id: 'prepositions-place',
    title: 'Prepositions of Place',
    rule: 'in (containers), on (surfaces), at (points). Also: in front of, behind, next to.',
    examples: [
      { correct: 'The book is in the bag', incorrect: 'The book is on the bag', translation: 'O livro está na bolsa' },
      { correct: 'The picture is on the wall', translation: 'A foto está na parede' },
      { correct: 'She is at the bus stop', translation: 'Ela está no ponto de ônibus' },
    ],
    tip: 'in a city/country, at a specific address or event. "at the beach" but "in the sea".',
    category: 'grammar',
  },
  {
    id: 'conditionals-zero',
    title: 'Zero Conditional',
    rule: 'If + present simple, present simple. Used for facts and scientific truths.',
    examples: [
      { correct: 'If you heat water, it boils', incorrect: 'If you heat water, it will boil', translation: 'Se você esquenta água, ela ferve' },
      { correct: 'When ice gets hot, it melts', translation: 'Quando o gelo esquenta, derrete' },
      { correct: 'If you mix red and blue, you get purple', translation: 'Se você mistura vermelho e azul, fica roxo' },
    ],
    tip: 'Use when the result is ALWAYS true, not just possible.',
    category: 'grammar',
  },
  {
    id: 'conditionals-first',
    title: 'First Conditional',
    rule: 'If + present simple, will + verb. Used for real, likely future possibilities.',
    examples: [
      { correct: 'If it rains, I will stay home', incorrect: 'If it will rain, I stay home', translation: 'Se chover, vou ficar em casa' },
      { correct: 'She will pass if she studies', translation: 'Ela vai passar se ela estudar' },
      { correct: 'If you need help, call me', translation: 'Se você precisar de ajuda, me liga' },
    ],
    tip: 'Real and likely situations. "If I win the lottery, I will travel."',
    category: 'grammar',
  },
  {
    id: 'conditionals-second',
    title: 'Second Conditional',
    rule: 'If + past simple, would + verb. Used for unreal, imaginary situations.',
    examples: [
      { correct: 'If I had money, I would buy a car', incorrect: 'If I had money, I will buy a car', translation: 'Se eu tivesse dinheiro, compraria um carro' },
      { correct: 'If I were you, I would apologize', translation: 'Se eu fosse você, pediria desculpas' },
      { correct: 'She would travel more if she could', translation: 'Ela viajaria mais se pudesse' },
    ],
    tip: 'Present unreal: "If I had a million dollars..." (but I don\'t). Use were for all subjects.',
    category: 'grammar',
  },
  {
    id: 'modal-verbs',
    title: 'Modal Verbs',
    rule: 'Modal verbs: can/could (ability), must/have to (obligation), should (advice).',
    examples: [
      { correct: 'You should study more', incorrect: 'You should to study more', translation: 'Você deveria estudar mais' },
      { correct: 'I can speak three languages', translation: 'Eu consigo falar três idiomas' },
      { correct: 'You must be 18 to enter', translation: 'Você precisa ter 18 anos para entrar' },
    ],
    tip: 'Modal verbs don\'t add -s, -ed, or use "to": He can (not He cans).',
    category: 'grammar',
  },
  {
    id: 'passive-voice',
    title: 'Passive Voice',
    rule: 'Passive: Object + be + past participle. Focus on the action, not the doer.',
    examples: [
      { correct: 'The cake was eaten by the children', incorrect: 'The cake was eaten for the children', translation: 'O bolo foi comido pelas crianças' },
      { correct: 'Spanish is spoken in many countries', translation: 'Espanhol é falado em muitos países' },
      { correct: 'The letter was sent yesterday', translation: 'A carta foi enviada ontem' },
    ],
    tip: 'Use passive when the action is more important than who does it.',
    category: 'grammar',
  },
  {
    id: 'sentence-structure',
    title: 'Basic Sentence Structure',
    rule: 'English word order: Subject + Verb + Object. Never change order!',
    examples: [
      { correct: 'She reads a book', incorrect: 'Reads she a book', translation: 'Ela lê um livro' },
      { correct: 'They eat pizza every Friday', translation: 'Eles comem pizza toda sexta' },
      { correct: 'He loves his family', translation: 'Ele ama sua família' },
    ],
    tip: 'Questions move the verb: "She reads" → "Does she read?" Not "Reads she?"',
    category: 'writing',
  },
  {
    id: 'paragraph-structure',
    title: 'Paragraph Structure',
    rule: 'A paragraph has: topic sentence, supporting details, and concluding sentence.',
    examples: [
      { correct: 'Topic: My favorite city is... Supporting: It has... Conclusion: That\'s why...', translation: 'Tópico: Minha cidade favorita é... Detalhes: Ela tem... Conclusão: Por isso...' },
      { correct: 'First, second, finally...', translation: 'Primeiro, segundo, finalmente...' },
      { correct: 'In conclusion, to sum up...', translation: 'Em conclusão, resumindo...' },
    ],
    tip: 'Each paragraph = 3-5 sentences. One idea per paragraph.',
    category: 'writing',
  },
  // Tenses Cards
  {
    id: 'present-perfect',
    title: 'Present Perfect',
    rule: 'Use have/has + past participle for actions that happened at an unspecified time or continue to present.',
    examples: [
      { correct: 'I have visited Paris', translation: 'Eu visitei Paris' },
      { correct: 'She has lived here for 5 years', translation: 'Ela mora aqui há 5 anos' },
      { correct: 'They have finished the project', translation: 'Eles terminaram o projeto' },
    ],
    tip: 'Time markers: already, yet, ever, never, for, since.',
    category: 'tenses',
  },
  {
    id: 'present-perfect-continuous',
    title: 'Present Perfect Continuous',
    rule: 'Use have/has been + verb-ing to emphasize duration of an action.',
    examples: [
      { correct: 'I have been studying for 2 hours', translation: 'Eu estou estudando há 2 horas' },
      { correct: 'She has been working here since 2019', translation: 'Ela trabalha aqui desde 2019' },
    ],
    tip: 'Use for how long or since when.',
    category: 'tenses',
  },
  {
    id: 'past-perfect',
    title: 'Past Perfect',
    rule: 'Use had + past participle for actions completed before another past action.',
    examples: [
      { correct: 'I had finished my homework before dinner', translation: 'Eu terminei meu dever de casa antes do jantar' },
      { correct: 'She had left when I arrived', translation: 'Ela tinha saído quando eu chegou' },
    ],
    tip: 'Often used with: before, after, when, by the time.',
    category: 'tenses',
  },
  {
    id: 'future-continuous',
    title: 'Future Continuous',
    rule: 'Use will be + verb-ing for actions in progress at a specific future time.',
    examples: [
      { correct: 'I will be sleeping at 10 PM', translation: 'Eu estarei dormindo às 22h' },
      { correct: 'She will be working tomorrow at noon', translation: 'Ela estará trabalhando amanhã ao meio-dia' },
    ],
    tip: 'Used to say what will be happening at a specific time in the future.',
    category: 'tenses',
  },
  // Prepositions Cards
  {
    id: 'prepositions-movement',
    title: 'Prepositions of Movement',
    rule: 'Use to, towards, through, across to show direction of movement.',
    examples: [
      { correct: 'I went to the store', translation: 'Eu fui à loja' },
      { correct: 'She walked towards the door', translation: 'Ela caminhou em direção à porta' },
      { correct: 'They ran across the street', translation: 'Eles atravessaram a rua correndo' },
    ],
    tip: 'to = direction, towards = in the direction of, through = from one side to another.',
    category: 'grammar',
  },
  {
    id: 'prepositions-instrument',
    title: 'Prepositions of Instrument',
    rule: 'Use by for methods and with for tools/instruments.',
    examples: [
      { correct: 'I go to work by bus', translation: 'Eu vou ao trabalho de ônibus' },
      { correct: 'She wrote with a pen', translation: 'Ela escreveu com uma caneta' },
    ],
    tip: 'by + transportation (no article), by + method, with + tool.',
    category: 'grammar',
  },
  // Phrasal Verbs Cards
  {
    id: 'phrasal-verbs-come',
    title: 'Phrasal Verbs with COME',
    rule: 'Common: come across, come up with, come true, come apart.',
    examples: [
      { correct: 'I came across an old friend', translation: 'Encontrei um velho amigo' },
      { correct: 'She came up with a great idea', translation: 'Ela teve uma ótima ideia' },
      { correct: 'His dream came true', translation: 'Seu sonho se realizou' },
    ],
    tip: 'come across = find by chance, come up with = invent/think of.',
    category: 'grammar',
  },
  {
    id: 'phrasal-verbs-go',
    title: 'Phrasal Verbs with GO',
    rule: 'Common: go through, go over, go without, go ahead.',
    examples: [
      { correct: 'Let\'s go over the plan', translation: 'Vamos revisar o plano' },
      { correct: 'She went through a difficult time', translation: 'Ela passou por uma fase difícil' },
      { correct: 'Go ahead with your presentation', translation: 'Continue com sua apresentação' },
    ],
    tip: 'go through = experience, go over = review, go ahead = proceed.',
    category: 'grammar',
  },
  {
    id: 'phrasal-verbs-get',
    title: 'Phrasal Verbs with GET',
    rule: 'Common: get along, get over, get out of, get into.',
    examples: [
      { correct: 'We get along very well', translation: 'Nos damos muito bem' },
      { correct: 'She got over her fear', translation: 'Ela superou seu medo' },
      { correct: 'Get out of bed!', translation: 'Sai da cama!' },
    ],
    tip: 'get along = have good relationship, get over = recover from.',
    category: 'grammar',
  },
  {
    id: 'phrasal-verbs-make',
    title: 'Phrasal Verbs with MAKE',
    rule: 'Common: make up, make out, make over, make for.',
    examples: [
      { correct: 'She made up a story', translation: 'Ela inventou uma história' },
      { correct: 'They made out like nothing happened', translation: 'Fingiram que nada aconteceu' },
      { correct: 'The hotel makes for a great vacation', translation: 'O hotel é ótimo para férias' },
    ],
    tip: 'make up = invent/fabricate, make out = understand/succeed.',
    category: 'grammar',
  },
  // Modals Cards
  {
    id: 'modal-might-could',
    title: 'Might vs Could',
    rule: 'Might = less certain possibility, Could = ability or polite possibility.',
    examples: [
      { correct: 'It might rain later', translation: 'Pode chover mais tarde' },
      { correct: 'Could you help me?', translation: 'Você poderia me ajudar?' },
      { correct: 'She could speak three languages', translation: 'Ela conseguia falar três idiomas' },
    ],
    tip: 'Could is more polite than can. Might shows less certainty than may.',
    category: 'grammar',
  },
  {
    id: 'modal-must-have-to',
    title: 'Must vs Have to',
    rule: 'Must = personal obligation (internal), Have to = external obligation.',
    examples: [
      { correct: 'I must study harder', translation: 'Eu devo estudar mais (eu quero)' },
      { correct: 'I have to work on Saturdays', translation: 'Eu tenho que trabalhar aos sábados (obrigação externa)' },
    ],
    tip: 'Must is stronger, shows personal judgment. Have to shows external rules.',
    category: 'grammar',
  },
  {
    id: 'modal-should-ought',
    title: 'Should vs Ought to',
    rule: 'Both express advice. Should is more common, ought to is more formal.',
    examples: [
      { correct: 'You should see a doctor', translation: 'Você deveria ver um médico' },
      { correct: 'You ought to try this restaurant', translation: 'Você deveria experimentar este restaurante' },
      { correct: 'You shouldn\'t worry', translation: 'Você não deveria se preocupar' },
    ],
    tip: 'Should is more common in everyday English. Ought to sounds more formal.',
    category: 'grammar',
  },
  // Idioms Cards
  {
    id: 'idioms-time',
    title: 'Time Idioms',
    rule: 'Common idioms: at the eleventh hour, in the nick of time, once in a blue moon.',
    examples: [
      { correct: 'He arrived at the eleventh hour', translation: 'Ele chegou na última hora' },
      { correct: 'She saved us in the nick of time', translation: 'Ela nos salvou na hora exata' },
      { correct: 'I see my family once in a blue moon', translation: 'Eu vejo minha família raramente' },
    ],
    tip: 'At the eleventh hour = very late, in the nick of time = just in time.',
    category: 'grammar',
  },
  {
    id: 'idioms-money',
    title: 'Money Idioms',
    rule: 'Common: cost an arm and leg, break the bank, save for a rainy day.',
    examples: [
      { correct: 'This car cost an arm and a leg', translation: 'Este carro custou muito caro' },
      { correct: 'Let\'s not break the bank', translation: 'Vamos não gastar demais' },
      { correct: 'I\'m saving for a rainy day', translation: 'Estou economizando para emergências' },
    ],
    tip: 'Cost an arm and leg = very expensive, break the bank = spend too much.',
    category: 'grammar',
  },
  {
    id: 'idioms-weather',
    title: 'Weather Idioms',
    rule: 'Common: under the weather, weather the storm, rain on parade.',
    examples: [
      { correct: 'I\'m feeling under the weather today', translation: 'Eu estou me sentindo mal hoje' },
      { correct: 'We\'ll weather this storm together', translation: 'Vamos passar por essa tempestade juntos' },
      { correct: 'Don\'t rain on my parade!', translation: 'Não estrague minha festa!' },
    ],
    tip: 'Under the weather = sick, weather the storm = survive difficult time.',
    category: 'grammar',
  },
  // Vocabulary Cards
  {
    id: 'vocabulary-similar',
    title: 'Similar Meaning Words',
    rule: 'Words with similar meanings: happy/glad/pleased, big/large/huge.',
    examples: [
      { correct: 'I\'m happy to meet you', translation: 'Prazer em conhecê-lo' },
      { correct: 'I\'m glad to see you', translation: 'Fico feliz em ver você' },
      { correct: 'I\'m pleased to help', translation: 'Fico prazer em ajudar' },
    ],
    tip: 'Context matters! Happy = general, Glad = specific joy, Pleased = satisfaction.',
    category: 'grammar',
  },
  {
    id: 'vocabulary-confusing',
    title: 'Common Confusions',
    rule: 'Often confused: advise/advice, affect/effect, than/then.',
    examples: [
      { correct: 'I advise you to go', translation: 'Eu recomendo que você vá' },
      { correct: 'This advice is helpful', translation: 'Este conselho é útil' },
      { correct: 'The weather affected my mood', translation: 'O clima afetou meu humor' },
    ],
    tip: 'Advice (noun), Advise (verb). Affect (verb), Effect (noun).',
    category: 'grammar',
  },
  // Mistakes BR->US
  {
    id: 'mistakes-vocab-br-us',
    title: 'Vocabulario BR vs US',
    rule: 'Common differences: apartment/flat, elevator/lift, soccer/football.',
    examples: [
      { correct: 'I live in an apartment', translation: 'Eu moro em um apartamento' },
      { correct: 'The elevator is broken', translation: 'O elevador está quebrado' },
      { correct: 'I play soccer on weekends', translation: 'Eu jogo futebol nos fins de semana' },
    ],
    tip: 'American: apartment, elevator, soccer. British: flat, lift, football.',
    category: 'grammar',
  },
  {
    id: 'mistakes-spelling-br-us',
    title: 'Ortografia BR vs US',
    rule: 'Common: color/colour, favorite/favourite, center/centre.',
    examples: [
      { correct: 'What is your favorite color?', translation: 'Qual é sua cor favorita?' },
      { correct: 'The center of the city', translation: 'O centro da cidade' },
      { correct: 'I like the color blue', translation: 'Eu gosto da cor azul' },
    ],
    tip: 'American English: -or, -er. British English: -our, -re.',
    category: 'grammar',
  },
];

export const getGrammarCardById = (id: string): GrammarCard | undefined => {
  return grammarCards.find(card => card.id === id);
};

export const getGrammarCardsByCategory = (category: GrammarCard['category']): GrammarCard[] => {
  return grammarCards.filter(card => card.category === category);
};