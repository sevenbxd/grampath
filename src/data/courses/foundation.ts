import { ExercisePack, QuizPack } from '../academy';

export const foundationExercisePacks: ExercisePack[] = [
  {
    id: 'articles-1',
    title: 'Articles Practice 1',
    description: 'Practice A, An, The',
    icon: '📝',
    exercises: [
      { id: 'art1-1', sectionId: 'found-articles', type: 'multiple-choice', question: 'I saw ___ beautiful sunset yesterday.', translation: 'Eu vi ___ pôr do sol bonito ontem.', options: ['a', 'an', 'the', 'no article'], correctAnswer: 'a', points: 10 },
      { id: 'art1-2', sectionId: 'found-articles', type: 'multiple-choice', question: 'She is ___ engineer.', translation: 'Ela é ___ engenheira.', options: ['a', 'an', 'the', 'no article'], correctAnswer: 'an', points: 10 },
      { id: 'art1-3', sectionId: 'found-articles', type: 'multiple-choice', question: 'The sun rises in ___ east.', translation: 'O sol nasce no ___ leste.', options: ['a', 'an', 'the', 'no article'], correctAnswer: 'the', points: 10 },
      { id: 'art1-4', sectionId: 'found-articles', type: 'multiple-choice', question: 'I love ___ music.', translation: 'Eu amo ___ música.', options: ['a', 'an', 'the', 'no article'], correctAnswer: 'no article', points: 10 }
    ]
  },
  {
    id: 'articles-2',
    title: 'Articles Practice 2',
    description: 'More article practice',
    icon: '📚',
    exercises: [
      { id: 'art2-1', sectionId: 'found-articles', type: 'multiple-choice', question: 'He needs ___ umbrella.', translation: 'Ele precisa de ___ guarda-chuva.', options: ['a', 'an', 'the', 'no article'], correctAnswer: 'an', points: 10 },
      { id: 'art2-2', sectionId: 'found-articles', type: 'multiple-choice', question: '___ Amazon is a big river.', translation: '___ Amazonas é um rio grande.', options: ['A', 'An', 'The', 'No article'], correctAnswer: 'The', points: 10 },
      { id: 'art2-3', sectionId: 'found-articles', type: 'multiple-choice', question: 'She speaks ___ English well.', translation: 'Ela fala ___ inglês bem.', options: ['a', 'an', 'the', 'no article'], correctAnswer: 'no article', points: 10 },
      { id: 'art2-4', sectionId: 'found-articles', type: 'multiple-choice', question: 'I have ___ idea!', translation: 'Eu tenho ___ ideia!', options: ['a', 'an', 'the', 'no article'], correctAnswer: 'an', points: 10 }
    ]
  },
  {
    id: 'articles-3',
    title: 'Articles Practice 3',
    description: 'Advanced articles',
    icon: '🎯',
    exercises: [
      { id: 'art3-1', sectionId: 'found-articles', type: 'multiple-choice', question: 'Please close ___ door.', translation: 'Por favor, feche ___ porta.', options: ['a', 'an', 'the', 'no article'], correctAnswer: 'the', points: 10 },
      { id: 'art3-2', sectionId: 'found-articles', type: 'multiple-choice', question: '___ Earth is round.', translation: '___ Terra é redonda.', options: ['A', 'An', 'The', 'No article'], correctAnswer: 'The', points: 10 },
      { id: 'art3-3', sectionId: 'found-articles', type: 'multiple-choice', question: '___ cats are cute.', translation: '___ gatos são fofos.', options: ['a', 'an', 'the', 'no article'], correctAnswer: 'no article', points: 10 },
      { id: 'art3-4', sectionId: 'found-articles', type: 'multiple-choice', question: 'We go to ___ school every day.', translation: 'Nós vamos para ___ escola todos os dias.', options: ['a', 'an', 'the', 'no article'], correctAnswer: 'no article', points: 10 }
    ]
  },
  {
    id: 'articles-4',
    title: 'Articles Practice 4',
    description: 'More article exercises',
    icon: '📖',
    exercises: [
      { id: 'art4-1', sectionId: 'found-articles', type: 'multiple-choice', question: 'My brother is ___ doctor.', translation: 'Meu irmão é ___ médico.', options: ['a', 'an', 'the', 'no article'], correctAnswer: 'a', points: 10 },
      { id: 'art4-2', sectionId: 'found-articles', type: 'multiple-choice', question: '___ sun is bright today.', translation: 'O sol está brilhante hoje.', options: ['A', 'An', 'The', 'No article'], correctAnswer: 'The', points: 10 },
      { id: 'art4-3', sectionId: 'found-articles', type: 'multiple-choice', question: 'I need to go to ___ hospital.', translation: 'Eu preciso ir ao hospital.', options: ['a', 'an', 'the', 'no article'], correctAnswer: 'the', points: 10 },
      { id: 'art4-4', sectionId: 'found-articles', type: 'multiple-choice', question: 'She is studying ___ medicine.', translation: 'Ela está estudando medicina.', options: ['a', 'an', 'the', 'no article'], correctAnswer: 'no article', points: 10 }
    ]
  },
  {
    id: 'sentence-writing-1',
    title: 'Sentence Writing',
    description: 'Write complete sentences',
    icon: '✍️',
    exercises: [
      { id: 'sw-ex1', sectionId: 'found-sentence', type: 'fill-blank', question: '___ cat is sleeping on the couch.', translation: 'O gato está dormindo no sofá.', correctAnswer: 'The', explanation: 'Use "The" when referring to a specific noun.', points: 15 },
      { id: 'sw-ex2', sectionId: 'found-sentence', type: 'fill-blank', question: 'She ___ breakfast every morning.', translation: 'Ela come café da manhã todas as manhãs.', correctAnswer: 'eats', explanation: 'Use Present Simple for habits.', points: 15 }
    ]
  },
  {
    id: 'sentence-writing-2',
    title: 'Sentence Writing 2',
    description: 'More sentence practice',
    icon: '✍️',
    exercises: [
      { id: 'sw2-1', sectionId: 'found-sentence', type: 'fill-blank', question: 'The ___ is sleeping.', translation: 'O gato está dormindo.', correctAnswer: 'cat', explanation: 'Use a noun after "The".', points: 15 },
      { id: 'sw2-2', sectionId: 'found-sentence', type: 'fill-blank', question: 'They ___ to school.', translation: 'Eles vão para a escola.', correctAnswer: 'walk', explanation: 'Use Present Simple for routine.', points: 15 }
    ]
  },
  {
    id: 'subject-verb-1',
    title: 'Subject-Verb Agreement',
    description: 'Match subjects with verbs',
    icon: '🔗',
    exercises: [
      { id: 'svp-ex1', sectionId: 'found-subject-verb', type: 'multiple-choice', question: 'The boys ___ playing in the park.', translation: 'Os meninos estão brincando no parque.', options: ['is', 'are', 'am', 'be'], correctAnswer: 'are', points: 10 },
      { id: 'svp-ex2', sectionId: 'found-subject-verb', type: 'multiple-choice', question: 'She ___ TV every night.', translation: 'Ela assiste TV todas as noites.', options: ['watch', 'watches', 'watching', 'watched'], correctAnswer: 'watches', points: 10 },
      { id: 'svp-ex3', sectionId: 'found-subject-verb', type: 'multiple-choice', question: 'We ___ friends.', translation: 'Nós somos amigos.', options: ['is', 'are', 'am', 'be'], correctAnswer: 'are', points: 10 }
    ]
  },
  {
    id: 'subject-verb-2',
    title: 'Subject-Verb Agreement 2',
    description: 'More agreement practice',
    icon: '🔗',
    exercises: [
      { id: 'sv2-1', sectionId: 'found-subject-verb', type: 'multiple-choice', question: 'My family ___ living in Brazil.', translation: 'Minha família mora no Brasil.', options: ['is', 'are', 'am', 'be'], correctAnswer: 'are', points: 10 },
      { id: 'sv2-2', sectionId: 'found-subject-verb', type: 'multiple-choice', question: 'He ___ tennis every weekend.', translation: 'Ele joga ténis todos os finais de semana.', options: ['play', 'plays', 'playing', 'played'], correctAnswer: 'plays', points: 10 },
      { id: 'sv2-3', sectionId: 'found-subject-verb', type: 'multiple-choice', question: 'The news ___ good.', translation: 'As notícias são boas.', options: ['is', 'are', 'am', 'be'], correctAnswer: 'are', points: 10 },
      { id: 'sv2-4', sectionId: 'found-subject-verb', type: 'multiple-choice', question: 'The teacher ___ English.', translation: 'O professor ensina inglês.', options: ['teach', 'teaches', 'teaching', 'taught'], correctAnswer: 'teaches', points: 10 },
      { id: 'sv2-5', sectionId: 'found-subject-verb', type: 'multiple-choice', question: 'The children ___ in the garden.', translation: 'As crianças estão brincando no jardim.', options: ['play', 'plays', 'playing', 'played'], correctAnswer: 'playing', points: 10 },
      { id: 'sv2-6', sectionId: 'found-subject-verb', type: 'multiple-choice', question: 'My mother ___ coffee every morning.', translation: 'Minha mãe toma café toda manhã.', options: ['drink', 'drinks', 'drinking', 'drank'], correctAnswer: 'drinks', points: 10 },
      { id: 'sv2-7', sectionId: 'found-subject-verb', type: 'multiple-choice', question: 'They ___ to the gym.', translation: 'Eles vão para a academia.', options: ['go', 'goes', 'going', 'went'], correctAnswer: 'go', points: 10 },
      { id: 'sv2-8', sectionId: 'found-subject-verb', type: 'multiple-choice', question: 'She ___ her homework.', translation: 'Ela faz sua lição de casa.', options: ['do', 'does', 'doing', 'did'], correctAnswer: 'does', points: 10 },
      { id: 'sv2-9', sectionId: 'found-subject-verb', type: 'multiple-choice', question: 'I ___ my friends.', translation: 'Eu amo meus amigos.', options: ['love', 'loves', 'loving', 'loved'], correctAnswer: 'love', points: 10 },
      { id: 'sv2-10', sectionId: 'found-subject-verb', type: 'multiple-choice', question: 'The book ___ on the table.', translation: 'O livro está na mesa.', options: ['is', 'are', 'am', 'be'], correctAnswer: 'is', points: 10 }
    ]
  },
  {
    id: 'pronouns-1',
    title: 'Pronouns Practice',
    description: 'Subject and Object Pronouns',
    icon: '👤',
    exercises: [
      { id: 'pron-1', sectionId: 'found-pronouns', type: 'multiple-choice', question: '___ is a good student.', translation: 'Ele é um bom aluno.', options: ['He', 'Him', 'His', 'Himself'], correctAnswer: 'He', points: 10 },
      { id: 'pron-2', sectionId: 'found-pronouns', type: 'multiple-choice', question: 'I saw ___ at the party.', translation: 'Eu vi ela na festa.', options: ['she', 'her', 'hers', 'herself'], correctAnswer: 'her', points: 10 },
      { id: 'pron-3', sectionId: 'found-pronouns', type: 'multiple-choice', question: '___ gave me a gift.', translation: 'Ela me deu um presente.', options: ['She', 'Her', 'Hers', 'Herself'], correctAnswer: 'She', points: 10 },
      { id: 'pron-4', sectionId: 'found-pronouns', type: 'multiple-choice', question: 'This book is ___.', translation: 'Este livro é meu.', options: ['me', 'my', 'mine', 'myself'], correctAnswer: 'mine', points: 10 },
      { id: 'pron-5', sectionId: 'found-pronouns', type: 'multiple-choice', question: 'We did it ___.', translation: 'Nós fizemos isso sozinhos.', options: ['ours', 'our', 'ourselves', 'ourself'], correctAnswer: 'ourselves', points: 10 },
      { id: 'pron-6', sectionId: 'found-pronouns', type: 'multiple-choice', question: 'Give it to ___.', translation: 'Dê para mim.', options: ['I', 'me', 'my', 'mine'], correctAnswer: 'me', points: 10 },
      { id: 'pron-7', sectionId: 'found-pronouns', type: 'multiple-choice', question: '___ is interested in the project.', translation: 'Eles estão interessados no projeto.', options: ['They', 'Them', 'Their', 'Theirs'], correctAnswer: 'They', points: 10 },
      { id: 'pron-8', sectionId: 'found-pronouns', type: 'multiple-choice', question: 'The dog bit ___.', translation: 'O cachorro mordeu ele.', options: ['he', 'him', 'his', 'himself'], correctAnswer: 'him', points: 10 },
      { id: 'pron-9', sectionId: 'found-pronouns', type: 'multiple-choice', question: 'She hurt ___.', translation: 'Ela se machucou.', options: ['her', 'hers', 'herself', 'she'], correctAnswer: 'herself', points: 10 },
      { id: 'pron-10', sectionId: 'found-pronouns', type: 'multiple-choice', question: 'This is ___ house.', translation: 'Esta é a casa deles.', options: ['they', 'them', 'their', 'theirs'], correctAnswer: 'their', points: 10 },
      { id: 'pron-11', sectionId: 'found-pronouns', type: 'multiple-choice', question: '___ likes ice cream.', translation: 'Crianças adoram sorvete.', options: ['Child', 'Children', 'Childrens', 'Childs'], correctAnswer: 'Children', points: 10 },
      { id: 'pron-12', sectionId: 'found-pronouns', type: 'multiple-choice', question: '___ is on the table.', translation: 'Algo está na mesa.', options: ['Something', 'Someone', 'Some', 'Any'], correctAnswer: 'Something', points: 10 }
    ]
  },
  {
    id: 'possessives-1',
    title: 'Possessive Adjectives',
    description: 'My, your, his, her, etc.',
    icon: '🏠',
    exercises: [
      { id: 'pos-1', sectionId: 'found-pronouns', type: 'multiple-choice', question: '___ name is John.', translation: 'Meu nome é João.', options: ['My', 'Mine', 'I', 'Me'], correctAnswer: 'My', points: 10 },
      { id: 'pos-2', sectionId: 'found-pronouns', type: 'multiple-choice', question: '___ car is new.', translation: 'O carro dela é novo.', options: ['Her', 'She', 'Hers', 'She\'s'], correctAnswer: 'Her', points: 10 },
      { id: 'pos-3', sectionId: 'found-pronouns', type: 'multiple-choice', question: '___ house is big.', translation: 'A casa deles é grande.', options: ['Their', 'Them', 'They', 'Theirs'], correctAnswer: 'Their', points: 10 },
      { id: 'pos-4', sectionId: 'found-pronouns', type: 'multiple-choice', question: '___ book is interesting.', translation: 'O livro dele é interessante.', options: ['His', 'He', 'Him', 'He\'s'], correctAnswer: 'His', points: 10 },
      { id: 'pos-5', sectionId: 'found-pronouns', type: 'multiple-choice', question: '___ friends are nice.', translation: 'Nossos amigos são legais.', options: ['Our', 'We', 'Ours', 'Us'], correctAnswer: 'Our', points: 10 },
      { id: 'pos-6', sectionId: 'found-pronouns', type: 'multiple-choice', question: '___ phone is broken.', translation: 'O seu telefone está quebrado.', options: ['Your', 'You', 'Yours', 'Yourself'], correctAnswer: 'Your', points: 10 },
      { id: 'pos-7', sectionId: 'found-pronouns', type: 'multiple-choice', question: '___ dog is cute.', translation: 'O cachorro é fofo.', options: ['It', 'Its', 'It\'s', 'Itself'], correctAnswer: 'Its', points: 10 },
      { id: 'pos-8', sectionId: 'found-pronouns', type: 'multiple-choice', question: 'This is ___ idea.', translation: 'Esta é a ideia deles.', options: ['their', 'them', 'they', 'theirs'], correctAnswer: 'their', points: 10 },
      { id: 'pos-9', sectionId: 'found-pronouns', type: 'multiple-choice', question: '___ father is a doctor.', translation: 'O pai dela é médico.', options: ['She', 'Her', 'Hers', 'His'], correctAnswer: 'Her', points: 10 },
      { id: 'pos-10', sectionId: 'found-pronouns', type: 'multiple-choice', question: '___ mother is a teacher.', translation: 'A mãe dele é professora.', options: ['He', 'His', 'Him', 'He\'s'], correctAnswer: 'His', points: 10 }
    ]
  },
  {
    id: 'adjectives-1',
    title: 'Adjective Order',
    description: 'Order of adjectives',
    icon: '📋',
    exercises: [
      { id: 'adj-1', sectionId: 'found-adjectives', type: 'multiple-choice', question: 'She has a ___ dress.', translation: 'Ela tem um vestido bonito.', options: ['beautiful old French', 'old beautiful French', 'French old beautiful', 'beautiful French old'], correctAnswer: 'beautiful old French', points: 15 },
      { id: 'adj-2', sectionId: 'found-adjectives', type: 'multiple-choice', question: 'It was a ___ day.', translation: 'Foi um dia bonito.', options: ['beautiful summer', 'summer beautiful', 'summerly beautiful', 'beautifully summer'], correctAnswer: 'beautiful summer', points: 15 },
      { id: 'adj-3', sectionId: 'found-adjectives', type: 'multiple-choice', question: 'He lives in a ___ house.', translation: 'Ele mora em uma casa grande de madeira.', options: ['large wooden old', 'old large wooden', 'wooden old large', 'large old wooden'], correctAnswer: 'large old wooden', points: 15 },
      { id: 'adj-4', sectionId: 'found-adjectives', type: 'multiple-choice', question: 'I bought a ___ car.', translation: 'Eu comprei um carro vermelho esportivo novo.', options: ['new red sports', 'red new sports', 'sports new red', 'new sports red'], correctAnswer: 'new red sports', points: 15 },
      { id: 'adj-5', sectionId: 'found-adjectives', type: 'multiple-choice', question: 'It was a ___ dinner.', translation: 'Foi um jantar italiano adorável.', options: ['adorable Italian', 'Italian adorable', 'adorably Italian', 'Italianly adorable'], correctAnswer: 'adorable Italian', points: 15 },
      { id: 'adj-6', sectionId: 'found-adjectives', type: 'multiple-choice', question: 'We visited a ___ church.', translation: 'Visitamos uma igreja antiga francesa.', options: ['old French', 'French old', 'oldly French', 'Frenchly old'], correctAnswer: 'old French', points: 15 },
      { id: 'adj-7', sectionId: 'found-adjectives', type: 'multiple-choice', question: 'She has ___ eyes.', translation: 'Ela tem olhos castanhos grandes.', options: ['big brown', 'brown big', 'bigly brown', 'brownly big'], correctAnswer: 'big brown', points: 15 },
      { id: 'adj-8', sectionId: 'found-adjectives', type: 'multiple-choice', question: 'It was a ___ evening.', translation: 'Foi uma noite fria de inverno.', options: ['cold winter', 'winter cold', 'coldly winter', 'winterly cold'], correctAnswer: 'cold winter', points: 15 },
      { id: 'adj-9', sectionId: 'found-adjectives', type: 'multiple-choice', question: 'He is a ___ man.', translation: 'Ele é um homem americano alto.', options: ['tall American', 'American tall', 'tally American', 'Americanly tall'], correctAnswer: 'tall American', points: 15 },
      { id: 'adj-10', sectionId: 'found-adjectives', type: 'multiple-choice', question: 'It was a ___ party.', translation: 'Foi uma festa grande divertida.', options: ['big fun', 'fun big', 'bigly fun', 'funly big'], correctAnswer: 'big fun', points: 15 }
    ]
  },
  {
    id: 'comparatives-1',
    title: 'Comparatives',
    description: 'Comparisons with -er and more',
    icon: '⚖️',
    exercises: [
      { id: 'comp-1', sectionId: 'found-adjectives', type: 'multiple-choice', question: 'This book is ___ than that one.', translation: 'Este livro é mais interessante que aquele.', options: ['interesting', 'more interesting', 'most interesting', 'most most interesting'], correctAnswer: 'more interesting', points: 10 },
      { id: 'comp-2', sectionId: 'found-adjectives', type: 'multiple-choice', question: 'She is ___ than her sister.', translation: 'Ela é mais alta que a irmã.', options: ['tall', 'taller', 'tallest', 'more tall'], correctAnswer: 'taller', points: 10 },
      { id: 'comp-3', sectionId: 'found-adjectives', type: 'multiple-choice', question: 'This is ___ movie I have ever seen.', translation: 'Este é o melhor filme que eu já vi.', options: ['good', 'better', 'best', 'most good'], correctAnswer: 'best', points: 10 },
      { id: 'comp-4', sectionId: 'found-adjectives', type: 'multiple-choice', question: 'He runs ___ than me.', translation: 'Ele corre mais rápido que eu.', options: ['fast', 'faster', 'fastest', 'more fast'], correctAnswer: 'faster', points: 10 },
      { id: 'comp-5', sectionId: 'found-adjectives', type: 'multiple-choice', question: 'Today is ___ than yesterday.', translation: 'Hoje está mais quente que ontem.', options: ['hot', 'hotter', 'hottest', 'more hot'], correctAnswer: 'hotter', points: 10 },
      { id: 'comp-6', sectionId: 'found-adjectives', type: 'multiple-choice', question: 'She is ___ in the class.', translation: 'Ela é a mais inteligente da turma.', options: ['intelligent', 'more intelligent', 'most intelligent', 'smartest'], correctAnswer: 'most intelligent', points: 10 },
      { id: 'comp-7', sectionId: 'found-adjectives', type: 'multiple-choice', question: 'This is ___ than that.', translation: 'Isto é mais fácil que aquilo.', options: ['easy', 'easier', 'easiest', 'most easy'], correctAnswer: 'easier', points: 10 },
      { id: 'comp-8', sectionId: 'found-adjectives', type: 'multiple-choice', question: 'He is ___ than his brother.', translation: 'Ele é mais velho que o irmão.', options: ['old', 'older', 'oldest', 'more old'], correctAnswer: 'older', points: 10 },
      { id: 'comp-9', sectionId: 'found-adjectives', type: 'multiple-choice', question: 'The weather is ___ today.', translation: 'O clima está mais ruim hoje.', options: ['bad', 'worse', 'worst', 'most bad'], correctAnswer: 'worse', points: 10 },
      { id: 'comp-10', sectionId: 'found-adjectives', type: 'multiple-choice', question: 'This is ___ decision.', translation: 'Esta é a pior decisão.', options: ['bad', 'worse', 'worst', 'baddest'], correctAnswer: 'worst', points: 10 }
    ]
  },
  {
    id: 'adverbs-1',
    title: 'Adverbs of Frequency',
    description: 'Always, usually, sometimes, etc.',
    icon: '🔄',
    exercises: [
      { id: 'adv-1', sectionId: 'found-adverbs', type: 'multiple-choice', question: 'She ___ goes to the gym.', translation: 'Ela sempre vai para a academia.', options: ['always', 'never', 'sometimes', 'rarely'], correctAnswer: 'always', points: 10 },
      { id: 'adv-2', sectionId: 'found-adverbs', type: 'multiple-choice', question: 'He ___ watches TV.', translation: 'Ele raramente assiste TV.', options: ['always', 'never', 'sometimes', 'rarely'], correctAnswer: 'rarely', points: 10 },
      { id: 'adv-3', sectionId: 'found-adverbs', type: 'multiple-choice', question: 'I ___ eat breakfast.', translation: 'Eu às vezes tomo café da manhã.', options: ['always', 'never', 'sometimes', 'rarely'], correctAnswer: 'sometimes', points: 10 },
      { id: 'adv-4', sectionId: 'found-adverbs', type: 'multiple-choice', question: 'They ___ arrive on time.', translation: ' eles nunca chegam no horário.', options: ['always', 'never', 'sometimes', 'usually'], correctAnswer: 'never', points: 10 },
      { id: 'adv-5', sectionId: 'found-adverbs', type: 'multiple-choice', question: 'We ___ study on weekends.', translation: 'Nós geralmente estudamos nos fins de semana.', options: ['always', 'never', 'sometimes', 'usually'], correctAnswer: 'usually', points: 10 },
      { id: 'adv-6', sectionId: 'found-adverbs', type: 'multiple-choice', question: 'She ___ visits her parents.', translation: 'Ela visita os pais ocasionalmente.', options: ['always', 'never', 'occasionally', 'rarely'], correctAnswer: 'occasionally', points: 10 },
      { id: 'adv-7', sectionId: 'found-adverbs', type: 'multiple-choice', question: 'He ___ gets angry.', translation: 'Ele quase sempre fica com raiva.', options: ['always', 'never', 'often', 'seldom'], correctAnswer: 'often', points: 10 },
      { id: 'adv-8', sectionId: 'found-adverbs', type: 'multiple-choice', question: 'I ___ forget my keys.', translation: 'Eu raramente esqueço minhas chaves.', options: ['always', 'never', 'sometimes', 'seldom'], correctAnswer: 'seldom', points: 10 },
      { id: 'adv-9', sectionId: 'found-adverbs', type: 'multiple-choice', question: 'They ___ go to the beach.', translation: 'eles frequentemente vão à praia.', options: ['always', 'never', 'frequently', 'rarely'], correctAnswer: 'frequently', points: 10 },
      { id: 'adv-10', sectionId: 'found-adverbs', type: 'multiple-choice', question: 'The sun ___ rises in the east.', translation: 'O sol sempre nasce no leste.', options: ['always', 'never', 'sometimes', 'often'], correctAnswer: 'always', points: 10 }
    ]
  },
  {
    id: 'prepositions-place-1',
    title: 'Prepositions of Place',
    description: 'In, on, at',
    icon: '📍',
    exercises: [
      { id: 'prep-1', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'The book is ___ the table.', translation: 'O livro está na mesa.', options: ['in', 'on', 'at', 'to'], correctAnswer: 'on', points: 10 },
      { id: 'prep-2', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'She is ___ the kitchen.', translation: 'Ela está na cozinha.', options: ['in', 'on', 'at', 'to'], correctAnswer: 'in', points: 10 },
      { id: 'prep-3', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'We are ___ the bus stop.', translation: 'Nós estamos no ponto de ônibus.', options: ['in', 'on', 'at', 'to'], correctAnswer: 'at', points: 10 },
      { id: 'prep-4', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'The cat is ___ the bed.', translation: 'O gato está na cama.', options: ['in', 'on', 'at', 'to'], correctAnswer: 'on', points: 10 },
      { id: 'prep-5', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'He is ___ school.', translation: 'Ele está na escola.', options: ['in', 'on', 'at', 'to'], correctAnswer: 'at', points: 10 },
      { id: 'prep-6', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'The movie is ___ the cinema.', translation: 'O filme está no cinema.', options: ['in', 'on', 'at', 'to'], correctAnswer: 'in', points: 10 },
      { id: 'prep-7', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'She is sitting ___ the chair.', translation: 'Ela está sentada na cadeira.', options: ['in', 'on', 'at', 'to'], correctAnswer: 'on', points: 10 },
      { id: 'prep-8', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'They are ___ Brazil.', translation: ' Eles estão no Brasil.', options: ['in', 'on', 'at', 'to'], correctAnswer: 'in', points: 10 },
      { id: 'prep-9', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'I am ___ home.', translation: 'Eu estou em casa.', options: ['in', 'on', 'at', 'to'], correctAnswer: 'at', points: 10 },
      { id: 'prep-10', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'The train is ___ the station.', translation: 'O trem está na estação.', options: ['in', 'on', 'at', 'to'], correctAnswer: 'at', points: 10 }
    ]
  },
  // Additional Foundation Packs to reach 30+
  {
    id: 'verb-be-1',
    title: 'Verb BE - Present',
    description: 'Am, Is, Are practice',
    icon: '🔵',
    exercises: [
      { id: 'vb-1', sectionId: 'found-verb-be', type: 'multiple-choice', question: 'I ___ a student.', translation: 'Eu sou um estudante.', options: ['am', 'is', 'are', 'be'], correctAnswer: 'am', points: 10 },
      { id: 'vb-2', sectionId: 'found-verb-be', type: 'multiple-choice', question: 'She ___ a teacher.', translation: 'Ela é professora.', options: ['am', 'is', 'are', 'be'], correctAnswer: 'is', points: 10 },
      { id: 'vb-3', sectionId: 'found-verb-be', type: 'multiple-choice', question: 'They ___ happy.', translation: 'Eles estão felizes.', options: ['am', 'is', 'are', 'be'], correctAnswer: 'are', points: 10 },
      { id: 'vb-4', sectionId: 'found-verb-be', type: 'multiple-choice', question: 'He ___ at home.', translation: 'Ele está em casa.', options: ['am', 'is', 'are', 'be'], correctAnswer: 'is', points: 10 },
      { id: 'vb-5', sectionId: 'found-verb-be', type: 'multiple-choice', question: 'We ___ friends.', translation: 'Nós somos amigos.', options: ['am', 'is', 'are', 'be'], correctAnswer: 'are', points: 10 },
      { id: 'vb-6', sectionId: 'found-verb-be', type: 'multiple-choice', question: 'The book ___ on the table.', translation: 'O livro está na mesa.', options: ['am', 'is', 'are', 'be'], correctAnswer: 'is', points: 10 },
      { id: 'vb-7', sectionId: 'found-verb-be', type: 'multiple-choice', question: 'You ___ right.', translation: 'Você está certo.', options: ['am', 'is', 'are', 'be'], correctAnswer: 'are', points: 10 },
      { id: 'vb-8', sectionId: 'found-verb-be', type: 'multiple-choice', question: 'It ___ a nice day.', translation: 'É um bom dia.', options: ['am', 'is', 'are', 'be'], correctAnswer: 'is', points: 10 },
      { id: 'vb-9', sectionId: 'found-verb-be', type: 'multiple-choice', question: 'The children ___ in the park.', translation: 'As crianças estão no parque.', options: ['am', 'is', 'are', 'be'], correctAnswer: 'are', points: 10 },
      { id: 'vb-10', sectionId: 'found-verb-be', type: 'multiple-choice', question: 'I ___ tired.', translation: 'Eu estou cansado.', options: ['am', 'is', 'are', 'be'], correctAnswer: 'am', points: 10 }
    ]
  },
  {
    id: 'verb-be-negative-1',
    title: 'Verb BE - Negative',
    description: 'Negative forms of BE',
    icon: '❌',
    exercises: [
      { id: 'vbn-1', sectionId: 'found-verb-be', type: 'multiple-choice', question: 'I ___ a doctor.', translation: 'Eu não sou médico.', options: ['am not', 'is not', 'are not', 'don\'t'], correctAnswer: 'am not', points: 10 },
      { id: 'vbn-2', sectionId: 'found-verb-be', type: 'multiple-choice', question: 'She ___ happy today.', translation: 'Ela não está feliz hoje.', options: ['am not', 'is not', 'are not', 'not'], correctAnswer: 'is not', points: 10 },
      { id: 'vbn-3', sectionId: 'found-verb-be', type: 'multiple-choice', question: 'They ___ here.', translation: 'Eles não estão aqui.', options: ['am not', 'is not', 'are not', 'not'], correctAnswer: 'are not', points: 10 },
      { id: 'vbn-4', sectionId: 'found-verb-be', type: 'multiple-choice', question: 'He ___ at work.', translation: 'Ele não está no trabalho.', options: ['isn\'t', 'aren\'t', 'am not', 'not'], correctAnswer: 'isn\'t', points: 10 },
      { id: 'vbn-5', sectionId: 'found-verb-be', type: 'multiple-choice', question: 'We ___ ready.', translation: 'Não estamos prontos.', options: ['aren\'t', 'isn\'t', 'am not', 'not'], correctAnswer: 'aren\'t', points: 10 },
      { id: 'vbn-6', sectionId: 'found-verb-be', type: 'multiple-choice', question: 'It ___ cold.', translation: 'Não está frio.', options: ['isn\'t', 'aren\'t', 'am not', 'not'], correctAnswer: 'isn\'t', points: 10 },
      { id: 'vbn-7', sectionId: 'found-verb-be', type: 'multiple-choice', question: 'You ___ late.', translation: 'Você não está atrasado.', options: ['aren\'t', 'isn\'t', 'am not', 'not'], correctAnswer: 'aren\'t', points: 10 },
      { id: 'vbn-8', sectionId: 'found-verb-be', type: 'multiple-choice', question: 'The movie ___ interesting.', translation: 'O filme não é interessante.', options: ['isn\'t', 'aren\'t', 'am not', 'not'], correctAnswer: 'isn\'t', points: 10 },
      { id: 'vbn-9', sectionId: 'found-verb-be', type: 'multiple-choice', question: 'I ___ busy.', translation: 'Não estou ocupado.', options: ['am not', 'is not', 'are not', 'not'], correctAnswer: 'am not', points: 10 },
      { id: 'vbn-10', sectionId: 'found-verb-be', type: 'multiple-choice', question: 'They ___ students.', translation: 'Não são estudantes.', options: ['aren\'t', 'isn\'t', 'am not', 'not'], correctAnswer: 'aren\'t', points: 10 }
    ]
  },
  {
    id: 'verb-be-questions-1',
    title: 'Verb BE - Questions',
    description: 'Questions with BE verb',
    icon: '❓',
    exercises: [
      { id: 'vbq-1', sectionId: 'found-verb-be', type: 'multiple-choice', question: '___ you a student?', translation: 'Você é estudante?', options: ['Am', 'Is', 'Are', 'Do'], correctAnswer: 'Are', points: 10 },
      { id: 'vbq-2', sectionId: 'found-verb-be', type: 'multiple-choice', question: '___ she at home?', translation: 'Ela está em casa?', options: ['Am', 'Is', 'Are', 'Do'], correctAnswer: 'Is', points: 10 },
      { id: 'vbq-3', sectionId: 'found-verb-be', type: 'multiple-choice', question: '___ they ready?', translation: 'Eles estão prontos?', options: ['Am', 'Is', 'Are', 'Do'], correctAnswer: 'Are', points: 10 },
      { id: 'vbq-4', sectionId: 'found-verb-be', type: 'multiple-choice', question: '___ he your friend?', translation: 'Ele é seu amigo?', options: ['Am', 'Is', 'Are', 'Does'], correctAnswer: 'Is', points: 10 },
      { id: 'vbq-5', sectionId: 'found-verb-be', type: 'multiple-choice', question: '___ we late?', translation: 'Estamos atrasados?', options: ['Am', 'Is', 'Are', 'Do'], correctAnswer: 'Are', points: 10 },
      { id: 'vbq-6', sectionId: 'found-verb-be', type: 'multiple-choice', question: '___ it raining?', translation: 'Está chovendo?', options: ['Am', 'Is', 'Are', 'Do'], correctAnswer: 'Is', points: 10 },
      { id: 'vbq-7', sectionId: 'found-verb-be', type: 'multiple-choice', question: '___ you hungry?', translation: 'Você está com fome?', options: ['Am', 'Is', 'Are', 'Do'], correctAnswer: 'Are', points: 10 },
      { id: 'vbq-8', sectionId: 'found-verb-be', type: 'multiple-choice', question: '___ the store open?', translation: 'A loja está aberta?', options: ['Am', 'Is', 'Are', 'Do'], correctAnswer: 'Is', points: 10 },
      { id: 'vbq-9', sectionId: 'found-verb-be', type: 'multiple-choice', question: '___ I correct?', translation: 'Estou correto?', options: ['Am', 'Is', 'Are', 'Do'], correctAnswer: 'Am', points: 10 },
      { id: 'vbq-10', sectionId: 'found-verb-be', type: 'multiple-choice', question: '___ they teachers?', translation: 'São professores?', options: ['Am', 'Is', 'Are', 'Do'], correctAnswer: 'Are', points: 10 }
    ]
  },
  {
    id: 'there-is-there-are-1',
    title: 'There IS / There ARE',
    description: 'Use there is and there are',
    icon: '📍',
    exercises: [
      { id: 'tir-1', sectionId: 'found-there', type: 'multiple-choice', question: '___ a book on the table.', translation: 'Há um livro na mesa.', options: ['There is', 'There are', 'There isn\'t', 'There aren\'t'], correctAnswer: 'There is', points: 10 },
      { id: 'tir-2', sectionId: 'found-there', type: 'multiple-choice', question: '___ many students in class.', translation: 'Há muitos estudantes na aula.', options: ['There is', 'There are', 'There isn\'t', 'There aren\'t'], correctAnswer: 'There are', points: 10 },
      { id: 'tir-3', sectionId: 'found-there', type: 'multiple-choice', question: '___ a cat in the house.', translation: 'Há um gato na casa.', options: ['There is', 'There are', 'It is', 'It is'], correctAnswer: 'There is', points: 10 },
      { id: 'tir-4', sectionId: 'found-there', type: 'multiple-choice', question: '___ some apples in the basket.', translation: 'Há algumas maçãs na cesta.', options: ['There is', 'There are', 'There isn\'t', 'There aren\'t'], correctAnswer: 'There are', points: 10 },
      { id: 'tir-5', sectionId: 'found-there', type: 'multiple-choice', question: '___ a problem with the computer.', translation: 'Há um problema com o computador.', options: ['There is', 'There are', 'It is', 'This is'], correctAnswer: 'There is', points: 10 },
      { id: 'tir-6', sectionId: 'found-there', type: 'multiple-choice', question: '___ several options available.', translation: 'Há várias opções disponíveis.', options: ['There is', 'There are', 'It is', 'This is'], correctAnswer: 'There are', points: 10 },
      { id: 'tir-7', sectionId: 'found-there', type: 'multiple-choice', question: '___ an email for you.', translation: 'Há um email para você.', options: ['There is', 'There are', 'It is', 'This is'], correctAnswer: 'There is', points: 10 },
      { id: 'tir-8', sectionId: 'found-there', type: 'multiple-choice', question: '___ two reasons for this.', translation: 'Há dois motivos para isso.', options: ['There is', 'There are', 'It is', 'This is'], correctAnswer: 'There are', points: 10 },
      { id: 'tir-9', sectionId: 'found-there', type: 'multiple-choice', question: '___ a meeting tomorrow.', translation: 'Há uma reunião amanhã.', options: ['There is', 'There are', 'It is', 'This is'], correctAnswer: 'There is', points: 10 },
      { id: 'tir-10', sectionId: 'found-there', type: 'multiple-choice', question: '___ many people at the party.', translation: 'Há muitas pessoas na festa.', options: ['There is', 'There are', 'It is', 'This is'], correctAnswer: 'There are', points: 10 }
    ]
  },
  {
    id: 'questions-wh-1',
    title: 'Wh- Questions',
    description: 'What, Where, When, Why, How',
    icon: '❔',
    exercises: [
      { id: 'wh-1', sectionId: 'found-questions', type: 'multiple-choice', question: '___ is your name?', translation: 'Qual é o seu nome?', options: ['What', 'Where', 'When', 'Why'], correctAnswer: 'What', points: 10 },
      { id: 'wh-2', sectionId: 'found-questions', type: 'multiple-choice', question: '___ do you live?', translation: 'Onde você mora?', options: ['What', 'Where', 'When', 'Why'], correctAnswer: 'Where', points: 10 },
      { id: 'wh-3', sectionId: 'found-questions', type: 'multiple-choice', question: '___ is your birthday?', translation: 'Quando é seu aniversário?', options: ['What', 'Where', 'When', 'Why'], correctAnswer: 'When', points: 10 },
      { id: 'wh-4', sectionId: 'found-questions', type: 'multiple-choice', question: '___ are you late?', translation: 'Por que você está atrasado?', options: ['What', 'Where', 'When', 'Why'], correctAnswer: 'Why', points: 10 },
      { id: 'wh-5', sectionId: 'found-questions', type: 'multiple-choice', question: '___ is the weather?', translation: 'Como está o tempo?', options: ['What', 'Where', 'When', 'How'], correctAnswer: 'How', points: 10 },
      { id: 'wh-6', sectionId: 'found-questions', type: 'multiple-choice', question: '___ is that?', translation: 'O que é isso?', options: ['What', 'Where', 'When', 'Why'], correctAnswer: 'What', points: 10 },
      { id: 'wh-7', sectionId: 'found-questions', type: 'multiple-choice', question: '___ does she work?', translation: 'Onde ela trabalha?', options: ['What', 'Where', 'When', 'Why'], correctAnswer: 'Where', points: 10 },
      { id: 'wh-8', sectionId: 'found-questions', type: 'multiple-choice', question: '___ time is it?', translation: 'Que horas são?', options: ['What', 'Where', 'When', 'What'], correctAnswer: 'What', points: 10 },
      { id: 'wh-9', sectionId: 'found-questions', type: 'multiple-choice', question: '___ did it happen?', translation: 'Como isso aconteceu?', options: ['What', 'Where', 'When', 'How'], correctAnswer: 'How', points: 10 },
      { id: 'wh-10', sectionId: 'found-questions', type: 'multiple-choice', question: '___ is your phone number?', translation: 'Qual é o seu número de telefone?', options: ['What', 'Where', 'When', 'Why'], correctAnswer: 'What', points: 10 }
    ]
  },
  {
    id: 'present-simple-habits-1',
    title: 'Present Simple - Habits',
    description: 'Daily routines and habits',
    icon: '📅',
    exercises: [
      { id: 'psh-1', sectionId: 'found-present-simple', type: 'multiple-choice', question: 'I ___ at 6am every day.', translation: 'Eu acordo às 6h todos os dias.', options: ['wake up', 'wakes up', 'waking up', 'woke up'], correctAnswer: 'wake up', points: 10 },
      { id: 'psh-2', sectionId: 'found-present-simple', type: 'multiple-choice', question: 'She ___ breakfast at 7am.', translation: 'Ela toma café da manhã às 7h.', options: ['have', 'has', 'having', 'had'], correctAnswer: 'has', points: 10 },
      { id: 'psh-3', sectionId: 'found-present-simple', type: 'multiple-choice', question: 'They ___ to work by bus.', translation: 'Eles vão para o trabalho de ônibus.', options: ['go', 'goes', 'going', 'went'], correctAnswer: 'go', points: 10 },
      { id: 'psh-4', sectionId: 'found-present-simple', type: 'multiple-choice', question: 'He ___ English every day.', translation: 'Ele estuda inglês todos os dias.', options: ['study', 'studies', 'studying', 'studied'], correctAnswer: 'studies', points: 10 },
      { id: 'psh-5', sectionId: 'found-present-simple', type: 'multiple-choice', question: 'We ___ dinner at 8pm.', translation: 'Nós jantamos às 20h.', options: ['have', 'has', 'having', 'had'], correctAnswer: 'have', points: 10 },
      { id: 'psh-6', sectionId: 'found-present-simple', type: 'multiple-choice', question: 'The store ___ at 9am.', translation: 'A loja abre às 9h.', options: ['open', 'opens', 'opening', 'opened'], correctAnswer: 'opens', points: 10 },
      { id: 'psh-7', sectionId: 'found-present-simple', type: 'multiple-choice', question: 'She ___ to music.', translation: 'Ela ouve música.', options: ['listen', 'listens', 'listening', 'listened'], correctAnswer: 'listens', points: 10 },
      { id: 'psh-8', sectionId: 'found-present-simple', type: 'multiple-choice', question: 'I ___ the news every morning.', translation: 'Eu leio as notícias toda manhã.', options: ['read', 'reads', 'reading', 'read'], correctAnswer: 'read', points: 10 },
      { id: 'psh-9', sectionId: 'found-present-simple', type: 'multiple-choice', question: 'He ___ coffee without sugar.', translation: 'Ele toma café sem açúcar.', options: ['drink', 'drinks', 'drinking', 'drank'], correctAnswer: 'drinks', points: 10 },
      { id: 'psh-10', sectionId: 'found-present-simple', type: 'multiple-choice', question: 'They ___ exercise three times a week.', translation: 'Eles se exercitam três vezes por semana.', options: ['do', 'does', 'doing', 'did'], correctAnswer: 'do', points: 10 }
    ]
  },
  {
    id: 'present-continuous-now-1',
    title: 'Present Continuous - Now',
    description: 'Actions happening now',
    icon: '🔴',
    exercises: [
      { id: 'pcn-1', sectionId: 'found-present-continuous', type: 'multiple-choice', question: 'I ___ a movie right now.', translation: 'Eu estou assistindo um filme agora.', options: ['watch', 'watches', 'watching', 'watched'], correctAnswer: 'watching', points: 10 },
      { id: 'pcn-2', sectionId: 'found-present-continuous', type: 'multiple-choice', question: 'She ___ on her phone.', translation: 'Ela está usando o telefone.', options: ['use', 'uses', 'using', 'used'], correctAnswer: 'using', points: 10 },
      { id: 'pcn-3', sectionId: 'found-present-continuous', type: 'multiple-choice', question: 'They ___ in the garden.', translation: 'Eles estão jogando no jardim.', options: ['play', 'plays', 'playing', 'played'], correctAnswer: 'playing', points: 10 },
      { id: 'pcn-4', sectionId: 'found-present-continuous', type: 'multiple-choice', question: 'He ___ a book.', translation: 'Ele está lendo um livro.', options: ['read', 'reads', 'reading', 'read'], correctAnswer: 'reading', points: 10 },
      { id: 'pcn-5', sectionId: 'found-present-continuous', type: 'multiple-choice', question: 'We ___ dinner.', translation: 'Estamos jantando.', options: ['have', 'has', 'having', 'had'], correctAnswer: 'having', points: 10 },
      { id: 'pcn-6', sectionId: 'found-present-continuous', type: 'multiple-choice', question: 'The baby ___ .', translation: 'O Bebê está dormindo.', options: ['sleep', 'sleeps', 'sleeping', 'slept'], correctAnswer: 'sleeping', points: 10 },
      { id: 'pcn-7', sectionId: 'found-present-continuous', type: 'multiple-choice', question: 'I ___ for the bus.', translation: 'Estou esperando o ônibus.', options: ['wait', 'waits', 'waiting', 'waited'], correctAnswer: 'waiting', points: 10 },
      { id: 'pcn-8', sectionId: 'found-present-continuous', type: 'multiple-choice', question: 'She ___ a letter.', translation: 'Ela está escrevendo uma carta.', options: ['write', 'writes', 'writing', 'wrote'], correctAnswer: 'writing', points: 10 },
      { id: 'pcn-9', sectionId: 'found-present-continuous', type: 'multiple-choice', question: 'We ___ to music.', translation: 'Estamos ouvindo música.', options: ['listen', 'listens', 'listening', 'listened'], correctAnswer: 'listening', points: 10 },
      { id: 'pcn-10', sectionId: 'found-present-continuous', type: 'multiple-choice', question: 'They ___ on the project.', translation: 'Eles estão trabalhando no projeto.', options: ['work', 'works', 'working', 'worked'], correctAnswer: 'working', points: 10 }
    ]
  },
  {
    id: 'can-ability-1',
    title: 'CAN - Ability',
    description: 'Can for ability',
    icon: '👍',
    exercises: [
      { id: 'can-1', sectionId: 'found-modals', type: 'multiple-choice', question: 'I ___ swim.', translation: 'Eu sei nadar.', options: ['can', 'could', 'may', 'might'], correctAnswer: 'can', points: 10 },
      { id: 'can-2', sectionId: 'found-modals', type: 'multiple-choice', question: 'She ___ speak three languages.', translation: 'Ela pode falar três idiomas.', options: ['can', 'could', 'may', 'might'], correctAnswer: 'can', points: 10 },
      { id: 'can-3', sectionId: 'found-modals', type: 'multiple-choice', question: 'They ___ play the guitar.', translation: 'Eles sabem tocar violão.', options: ['can', 'could', 'may', 'might'], correctAnswer: 'can', points: 10 },
      { id: 'can-4', sectionId: 'found-modals', type: 'multiple-choice', question: 'He ___ drive a car.', translation: 'Ele sabe dirigir.', options: ['can', 'could', 'may', 'might'], correctAnswer: 'can', points: 10 },
      { id: 'can-5', sectionId: 'found-modals', type: 'multiple-choice', question: 'We ___ cook well.', translation: 'Nós sabemos cozinhar bem.', options: ['can', 'could', 'may', 'might'], correctAnswer: 'can', points: 10 },
      { id: 'can-6', sectionId: 'found-modals', type: 'multiple-choice', question: 'You ___ use a computer.', translation: 'Você sabe usar um computador.', options: ['can', 'could', 'may', 'might'], correctAnswer: 'can', points: 10 },
      { id: 'can-7', sectionId: 'found-modals', type: 'multiple-choice', question: 'She ___ dance.', translation: 'Ela sabe dançar.', options: ['can', 'could', 'may', 'might'], correctAnswer: 'can', points: 10 },
      { id: 'can-8', sectionId: 'found-modals', type: 'multiple-choice', question: 'I ___ speak English well.', translation: 'Eu consigo falar inglês bem.', options: ['can', 'could', 'may', 'might'], correctAnswer: 'can', points: 10 },
      { id: 'can-9', sectionId: 'found-modals', type: 'multiple-choice', question: 'They ___ solve this problem.', translation: 'Eles conseguem resolver este problema.', options: ['can', 'could', 'may', 'might'], correctAnswer: 'can', points: 10 },
      { id: 'can-10', sectionId: 'found-modals', type: 'multiple-choice', question: 'He ___ fix the car.', translation: 'Ele consegue consertar o carro.', options: ['can', 'could', 'may', 'might'], correctAnswer: 'can', points: 10 }
    ]
  },
  {
    id: 'have-to-1',
    title: 'HAVE TO - Obligation',
    description: 'Have to for obligation',
    icon: '⚠️',
    exercises: [
      { id: 'ht-1', sectionId: 'found-modals', type: 'multiple-choice', question: 'I ___ go to school.', translation: 'Eu tenho que ir para a escola.', options: ['have to', 'has to', 'must', 'should'], correctAnswer: 'have to', points: 10 },
      { id: 'ht-2', sectionId: 'found-modals', type: 'multiple-choice', question: 'She ___ work on Saturdays.', translation: 'Ela tem que trabalhar aos sábados.', options: ['have to', 'has to', 'must', 'should'], correctAnswer: 'has to', points: 10 },
      { id: 'ht-3', sectionId: 'found-modals', type: 'multiple-choice', question: 'They ___ pay the bills.', translation: 'Eles têm que pagar as contas.', options: ['have to', 'has to', 'must', 'should'], correctAnswer: 'have to', points: 10 },
      { id: 'ht-4', sectionId: 'found-modals', type: 'multiple-choice', question: 'He ___ study for the exam.', translation: 'Ele tem que estudar para a prova.', options: ['have to', 'has to', 'must', 'should'], correctAnswer: 'has to', points: 10 },
      { id: 'ht-5', sectionId: 'found-modals', type: 'multiple-choice', question: 'We ___ finish this project.', translation: 'Temos que terminar este projeto.', options: ['have to', 'has to', 'must', 'should'], correctAnswer: 'have to', points: 10 },
      { id: 'ht-6', sectionId: 'found-modals', type: 'multiple-choice', question: 'I ___ wake up early tomorrow.', translation: 'Tenho que acordar cedo amanhã.', options: ['have to', 'has to', 'must', 'should'], correctAnswer: 'have to', points: 10 },
      { id: 'ht-7', sectionId: 'found-modals', type: 'multiple-choice', question: 'She ___ visit her mother.', translation: 'Ela tem que visitar a mãe.', options: ['have to', 'has to', 'must', 'should'], correctAnswer: 'has to', points: 10 },
      { id: 'ht-8', sectionId: 'found-modals', type: 'multiple-choice', question: 'They ___ be there at 9am.', translation: 'Eles têm que estar lá às 9h.', options: ['have to', 'has to', 'must', 'should'], correctAnswer: 'have to', points: 10 },
      { id: 'ht-9', sectionId: 'found-modals', type: 'multiple-choice', question: 'He ___ clean his room.', translation: 'Ele tem que limpar o quarto.', options: ['have to', 'has to', 'must', 'should'], correctAnswer: 'has to', points: 10 },
      { id: 'ht-10', sectionId: 'found-modals', type: 'multiple-choice', question: 'We ___ submit the report.', translation: 'Temos que enviar o relatório.', options: ['have to', 'has to', 'must', 'should'], correctAnswer: 'have to', points: 10 }
    ]
  },
  {
    id: 'should-advice-1',
    title: 'SHOULD - Advice',
    description: 'Should for advice',
    icon: '💡',
    exercises: [
      { id: 'sh-1', sectionId: 'found-modals', type: 'multiple-choice', question: 'You ___ see a doctor.', translation: 'Você deveria ver um médico.', options: ['should', 'could', 'might', 'must'], correctAnswer: 'should', points: 10 },
      { id: 'sh-2', sectionId: 'found-modals', type: 'multiple-choice', question: 'She ___ study more.', translation: 'Ela deveria estudar mais.', options: ['should', 'could', 'might', 'must'], correctAnswer: 'should', points: 10 },
      { id: 'sh-3', sectionId: 'found-modals', type: 'multiple-choice', question: 'They ___ try this restaurant.', translation: 'Eles deveriam experimentar este restaurante.', options: ['should', 'could', 'might', 'must'], correctAnswer: 'should', points: 10 },
      { id: 'sh-4', sectionId: 'found-modals', type: 'multiple-choice', question: 'He ___ be more careful.', translation: 'Ele deveria ser mais cuidadoso.', options: ['should', 'could', 'might', 'must'], correctAnswer: 'should', points: 10 },
      { id: 'sh-5', sectionId: 'found-modals', type: 'multiple-choice', question: 'We ___ talk about it.', translation: 'Deveríamos falar sobre isso.', options: ['should', 'could', 'might', 'must'], correctAnswer: 'should', points: 10 },
      { id: 'sh-6', sectionId: 'found-modals', type: 'multiple-choice', question: 'You ___ ask for help.', translation: 'Você deveria pedir ajuda.', options: ['should', 'could', 'might', 'must'], correctAnswer: 'should', points: 10 },
      { id: 'sh-7', sectionId: 'found-modals', type: 'multiple-choice', question: 'She ___ relax more.', translation: 'Ela deveria relaxar mais.', options: ['should', 'could', 'might', 'must'], correctAnswer: 'should', points: 10 },
      { id: 'sh-8', sectionId: 'found-modals', type: 'multiple-choice', question: 'They ___ save money.', translation: 'Deveriam economizar dinheiro.', options: ['should', 'could', 'might', 'must'], correctAnswer: 'should', points: 10 },
      { id: 'sh-9', sectionId: 'found-modals', type: 'multiple-choice', question: 'He ___ listen to music.', translation: 'Ele deveria ouvir música.', options: ['should', 'could', 'might', 'must'], correctAnswer: 'should', points: 10 },
      { id: 'sh-10', sectionId: 'found-modals', type: 'multiple-choice', question: 'We ___ exercise daily.', translation: 'Deveríamos nos exercitar diariamente.', options: ['should', 'could', 'might', 'must'], correctAnswer: 'should', points: 10 }
    ]
  },
  {
    id: 'imperatives-1',
    title: 'Imperatives',
    description: 'Commands and instructions',
    icon: '📢',
    exercises: [
      { id: 'imp-1', sectionId: 'found-imperative', type: 'multiple-choice', question: '___ the door, please.', translation: 'Feche a porta, por favor.', options: ['Close', 'Closing', 'Closed', 'To close'], correctAnswer: 'Close', points: 10 },
      { id: 'imp-2', sectionId: 'found-imperative', type: 'multiple-choice', question: '___ your homework.', translation: 'Faça sua lição de casa.', options: ['Do', 'Doing', 'Done', 'To do'], correctAnswer: 'Do', points: 10 },
      { id: 'imp-3', sectionId: 'found-imperative', type: 'multiple-choice', question: '___ here!', translation: 'Venha aqui!', options: ['Come', 'Coming', 'Came', 'To come'], correctAnswer: 'Come', points: 10 },
      { id: 'imp-4', sectionId: 'found-imperative', type: 'multiple-choice', question: '___ the lights.', translation: 'Acenda as luzes.', options: ['Turn on', 'Turning on', 'Turned on', 'To turn on'], correctAnswer: 'Turn on', points: 10 },
      { id: 'imp-5', sectionId: 'found-imperative', type: 'multiple-choice', question: '___ to school.', translation: 'Vá para a escola.', options: ['Go', 'Going', 'Went', 'To go'], correctAnswer: 'Go', points: 10 },
      { id: 'imp-6', sectionId: 'found-imperative', type: 'multiple-choice', question: '___ carefully.', translation: 'Tenha cuidado.', options: ['Be', 'Being', 'Been', 'To be'], correctAnswer: 'Be', points: 10 },
      { id: 'imp-7', sectionId: 'found-imperative', type: 'multiple-choice', question: '___ your phone.', translation: 'Desligue o telefone.', options: ['Turn off', 'Turning off', 'Turned off', 'To turn off'], correctAnswer: 'Turn off', points: 10 },
      { id: 'imp-8', sectionId: 'found-imperative', type: 'multiple-choice', question: '___ me a call.', translation: 'Me liga.', options: ['Call', 'Calling', 'Called', 'To call'], correctAnswer: 'Call', points: 10 },
      { id: 'imp-9', sectionId: 'found-imperative', type: 'multiple-choice', question: '___ wait here.', translation: 'Espere aqui.', options: ['Wait', 'Waiting', 'Waited', 'To wait'], correctAnswer: 'Wait', points: 10 },
      { id: 'imp-10', sectionId: 'found-imperative', type: 'multiple-choice', question: '___ positive.', translation: 'Seja positivo.', options: ['Stay', 'Staying', 'Stayed', 'To stay'], correctAnswer: 'Stay', points: 10 }
    ]
  },
  {
    id: 'conjunctions-1',
    title: 'Conjunctions',
    description: 'And, But, Or, Because',
    icon: '🔗',
    exercises: [
      { id: 'conj-1', sectionId: 'found-conjunctions', type: 'multiple-choice', question: 'I like coffee ___ tea.', translation: 'Eu gosto de café e chá.', options: ['and', 'but', 'or', 'because'], correctAnswer: 'and', points: 10 },
      { id: 'conj-2', sectionId: 'found-conjunctions', type: 'multiple-choice', question: 'She is smart ___ lazy.', translation: 'Ela é esperta mas preguiçosa.', options: ['and', 'but', 'or', 'because'], correctAnswer: 'but', points: 10 },
      { id: 'conj-3', sectionId: 'found-conjunctions', type: 'multiple-choice', question: 'Do you want coffee ___ tea?', translation: 'Você quer café ou chá?', options: ['and', 'but', 'or', 'because'], correctAnswer: 'or', points: 10 },
      { id: 'conj-4', sectionId: 'found-conjunctions', type: 'multiple-choice', question: 'I stayed home ___ I was sick.', translation: 'Fiquei em casa porque estava doente.', options: ['and', 'but', 'or', 'because'], correctAnswer: 'because', points: 10 },
      { id: 'conj-5', sectionId: 'found-conjunctions', type: 'multiple-choice', question: 'He is tall ___ has blue eyes.', translation: 'Ele é alto e tem olhos azuis.', options: ['and', 'but', 'or', 'because'], correctAnswer: 'and', points: 10 },
      { id: 'conj-6', sectionId: 'found-conjunctions', type: 'multiple-choice', question: 'We can go to the park ___ stay home.', translation: 'Podemos ir ao parque ou ficar em casa.', options: ['and', 'but', 'or', 'because'], correctAnswer: 'or', points: 10 },
      { id: 'conj-7', sectionId: 'found-conjunctions', type: 'multiple-choice', question: 'I am tired ___ I can\'t sleep.', translation: 'Estou cansado mas não consigo dormir.', options: ['and', 'but', 'or', 'because'], correctAnswer: 'but', points: 10 },
      { id: 'conj-8', sectionId: 'found-conjunctions', type: 'multiple-choice', question: 'She failed the test ___ she didn\'t study.', translation: 'Ela reprovou porque não estudou.', options: ['and', 'but', 'or', 'because'], correctAnswer: 'because', points: 10 },
      { id: 'conj-9', sectionId: 'found-conjunctions', type: 'multiple-choice', question: 'He runs ___ plays soccer.', translation: 'Ele corre e joga futebol.', options: ['and', 'but', 'or', 'because'], correctAnswer: 'and', points: 10 },
      { id: 'conj-10', sectionId: 'found-conjunctions', type: 'multiple-choice', question: 'Is it raining ___ sunny?', translation: 'Está chovendo ou fazendo sol?', options: ['and', 'but', 'or', 'because'], correctAnswer: 'or', points: 10 }
    ]
  },
  {
    id: 'question-tags-1',
    title: 'Question Tags',
    description: 'Short questions at end of statements',
    icon: '❓',
    exercises: [
      { id: 'qt-1', sectionId: 'found-questions', type: 'multiple-choice', question: 'You are a student, ___?', translation: 'Você é estudante, não é?', options: ['aren\'t you', 'isn\'t it', 'don\'t you', 'won\'t you'], correctAnswer: 'aren\'t you', points: 10 },
      { id: 'qt-2', sectionId: 'found-questions', type: 'multiple-choice', question: 'She is a teacher, ___?', translation: 'Ela é professora, não é?', options: ['aren\'t she', 'isn\'t she', 'doesn\'t she', 'won\'t she'], correctAnswer: 'isn\'t she', points: 10 },
      { id: 'qt-3', sectionId: 'found-questions', type: 'multiple-choice', question: 'They are here, ___?', translation: 'Eles estão aqui, não é?', options: ['aren\'t they', 'isn\'t it', 'don\'t they', 'won\'t they'], correctAnswer: 'aren\'t they', points: 10 },
      { id: 'qt-4', sectionId: 'found-questions', type: 'multiple-choice', question: 'You can swim, ___?', translation: 'Você sabe nadar, não é?', options: ['can\'t you', 'couldn\'t you', 'shouldn\'t you', 'wouldn\'t you'], correctAnswer: 'can\'t you', points: 10 },
      { id: 'qt-5', sectionId: 'found-questions', type: 'multiple-choice', question: 'He has a car, ___?', translation: 'Ele tem um carro, não é?', options: ['hasn\'t he', 'doesn\'t he', 'isn\'t it', 'won\'t he'], correctAnswer: 'doesn\'t he', points: 10 },
      { id: 'qt-6', sectionId: 'found-questions', type: 'multiple-choice', question: 'It\'s a nice day, ___?', translation: 'Está um dia bom, não é?', options: ['isn\'t it', 'aren\'t it', 'wasn\'t it', 'won\'t it'], correctAnswer: 'isn\'t it', points: 10 },
      { id: 'qt-7', sectionId: 'found-questions', type: 'multiple-choice', question: 'You like coffee, ___?', translation: 'Você gosta de café, não é?', options: ['don\'t you', 'didn\'t you', 'won\'t you', 'can\'t you'], correctAnswer: 'don\'t you', points: 10 },
      { id: 'qt-8', sectionId: 'found-questions', type: 'multiple-choice', question: 'We were at the party, ___?', translation: 'Nós estávamos na festa, não é?', options: ['weren\'t we', 'aren\'t we', 'wasn\'t we', 'didn\'t we'], correctAnswer: 'weren\'t we', points: 10 },
      { id: 'qt-9', sectionId: 'found-questions', type: 'multiple-choice', question: 'She will come, ___?', translation: 'Ela vai vir, não é?', options: ['won\'t she', 'isn\'t she', 'doesn\'t she', 'can\'t she'], correctAnswer: 'won\'t she', points: 10 },
      { id: 'qt-10', sectionId: 'found-questions', type: 'multiple-choice', question: 'They know the answer, ___?', translation: 'Eles sabem a resposta, não é?', options: ['don\'t they', 'didn\'t they', 'aren\'t they', 'won\'t they'], correctAnswer: 'don\'t they', points: 10 }
    ]
  },
  {
    id: 'determiners-1',
    title: 'Determiners',
    description: 'This, That, These, Those',
    icon: '📏',
    exercises: [
      { id: 'det-1', sectionId: 'found-determiners', type: 'multiple-choice', question: '___ book is mine.', translation: 'Este livro é meu.', options: ['This', 'These', 'Those', 'That'], correctAnswer: 'This', points: 10 },
      { id: 'det-2', sectionId: 'found-determiners', type: 'multiple-choice', question: '___ books are on the table.', translation: 'Estes livros estão na mesa.', options: ['This', 'These', 'Those', 'That'], correctAnswer: 'These', points: 10 },
      { id: 'det-3', sectionId: 'found-determiners', type: 'multiple-choice', question: '___ is my friend.', translation: 'Aquele é meu amigo.', options: ['This', 'These', 'Those', 'That'], correctAnswer: 'That', points: 10 },
      { id: 'det-4', sectionId: 'found-determiners', type: 'multiple-choice', question: '___ are my friends.', translation: 'Aqueles são meus amigos.', options: ['This', 'These', 'Those', 'That'], correctAnswer: 'Those', points: 10 },
      { id: 'det-5', sectionId: 'found-determiners', type: 'multiple-choice', question: 'I like ___ song.', translation: 'Eu gosto desta música.', options: ['this', 'these', 'those', 'that'], correctAnswer: 'this', points: 10 },
      { id: 'det-6', sectionId: 'found-determiners', type: 'multiple-choice', question: 'Look at ___ birds!', translation: 'Olha aqueles pássaros!', options: ['this', 'these', 'those', 'that'], correctAnswer: 'those', points: 10 },
      { id: 'det-7', sectionId: 'found-determiners', type: 'multiple-choice', question: '___ house is big.', translation: 'Aquela casa é grande.', options: ['This', 'These', 'Those', 'That'], correctAnswer: 'That', points: 10 },
      { id: 'det-8', sectionId: 'found-determiners', type: 'multiple-choice', question: '___ are my favorite cookies.', translation: 'Estes são meus biscoitos favoritos.', options: ['This', 'These', 'Those', 'That'], correctAnswer: 'These', points: 10 },
      { id: 'det-9', sectionId: 'found-determiners', type: 'multiple-choice', question: 'Give me ___ pen.', translation: 'Me dê esta caneta.', options: ['this', 'these', 'those', 'that'], correctAnswer: 'this', points: 10 },
      { id: 'det-10', sectionId: 'found-determiners', type: 'multiple-choice', question: 'I prefer ___ one.', translation: 'Eu prefiro aquele.', options: ['this', 'these', 'those', 'that'], correctAnswer: 'that', points: 10 }
    ]
  },
  {
    id: 'quantifiers-1',
    title: 'Quantifiers',
    description: 'Much, Many, Some, Any, Few, Little',
    icon: '🔢',
    exercises: [
      { id: 'quan-1', sectionId: 'found-quantifiers', type: 'multiple-choice', question: 'There is ___ water in the glass.', translation: 'Há pouca água no copo.', options: ['much', 'many', 'few', 'little'], correctAnswer: 'little', points: 10 },
      { id: 'quan-2', sectionId: 'found-quantifiers', type: 'multiple-choice', question: 'There are ___ books on the shelf.', translation: 'Há muitos livros na prateleira.', options: ['much', 'many', 'few', 'little'], correctAnswer: 'many', points: 10 },
      { id: 'quan-3', sectionId: 'found-quantifiers', type: 'multiple-choice', question: 'I have ___ friends.', translation: 'Tenho alguns amigos.', options: ['some', 'any', 'much', 'many'], correctAnswer: 'some', points: 10 },
      { id: 'quan-4', sectionId: 'found-quantifiers', type: 'multiple-choice', question: 'Do you have ___ questions?', translation: 'Você tem alguma pergunta?', options: ['some', 'any', 'much', 'many'], correctAnswer: 'any', points: 10 },
      { id: 'quan-5', sectionId: 'found-quantifiers', type: 'multiple-choice', question: 'There are ___ apples.', translation: 'Há poucas maçãs.', options: ['much', 'many', 'few', 'little'], correctAnswer: 'few', points: 10 },
      { id: 'quan-6', sectionId: 'found-quantifiers', type: 'multiple-choice', question: 'I don\'t have ___ time.', translation: 'Não tenho muito tempo.', options: ['much', 'many', 'few', 'little'], correctAnswer: 'much', points: 10 },
      { id: 'quan-7', sectionId: 'found-quantifiers', type: 'multiple-choice', question: 'Would you like ___ coffee?', translation: 'Você gostaria de um pouco de café?', options: ['some', 'any', 'much', 'many'], correctAnswer: 'some', points: 10 },
      { id: 'quan-8', sectionId: 'found-quantifiers', type: 'multiple-choice', question: 'There are ___ people at the party.', translation: 'Há poucas pessoas na festa.', options: ['much', 'many', 'few', 'little'], correctAnswer: 'few', points: 10 },
      { id: 'quan-9', sectionId: 'found-quantifiers', type: 'multiple-choice', question: 'I need ___ information.', translation: 'Preciso de algumas informações.', options: ['some', 'any', 'much', 'many'], correctAnswer: 'some', points: 10 },
      { id: 'quan-10', sectionId: 'found-quantifiers', type: 'multiple-choice', question: 'There isn\'t ___ milk left.', translation: 'Não restou muito leite.', options: ['much', 'many', 'few', 'little'], correctAnswer: 'much', points: 10 }
    ]
  },
  {
    id: 'words-order-1',
    title: 'Word Order',
    description: 'Basic sentence word order',
    icon: '📝',
    exercises: [
      { id: 'wo-1', sectionId: 'found-word-order', type: 'multiple-choice', question: '___ I love you.', translation: 'Eu te amo.', options: ['I', 'Love', 'You', 'You love'], correctAnswer: 'I', points: 10 },
      { id: 'wo-2', sectionId: 'found-word-order', type: 'multiple-choice', question: 'She ___ to school.', translation: 'Ela vai para a escola.', options: ['goes', 'go', 'going', 'to go'], correctAnswer: 'goes', points: 10 },
      { id: 'wo-3', sectionId: 'found-word-order', type: 'multiple-choice', question: 'They ___ happy.', translation: 'Eles estão felizes.', options: ['are', 'is', 'be', 'been'], correctAnswer: 'are', points: 10 },
      { id: 'wo-4', sectionId: 'found-word-order', type: 'multiple-choice', question: 'We ___ English.', translation: 'Nós estudamos inglês.', options: ['study', 'studies', 'studying', 'studied'], correctAnswer: 'study', points: 10 },
      { id: 'wo-5', sectionId: 'found-word-order', type: 'multiple-choice', question: 'He ___ coffee.', translation: 'Ele bebe café.', options: ['drink', 'drinks', 'drinking', 'drank'], correctAnswer: 'drinks', points: 10 },
      { id: 'wo-6', sectionId: 'found-word-order', type: 'multiple-choice', question: 'The cat ___ .', translation: 'O gato dorme.', options: ['sleep', 'sleeps', 'sleeping', 'slept'], correctAnswer: 'sleeps', points: 10 },
      { id: 'wo-7', sectionId: 'found-word-order', type: 'multiple-choice', question: 'My mother ___ dinner.', translation: 'Minha mãe faz o jantar.', options: ['make', 'makes', 'making', 'made'], correctAnswer: 'makes', points: 10 },
      { id: 'wo-8', sectionId: 'found-word-order', type: 'multiple-choice', question: 'The sun ___ in the east.', translation: 'O sol nasce no leste.', options: ['rise', 'rises', 'rising', 'rose'], correctAnswer: 'rises', points: 10 },
      { id: 'wo-9', sectionId: 'found-word-order', type: 'multiple-choice', question: 'Birds ___ .', translation: 'Pássaros voam.', options: ['fly', 'flies', 'flying', 'flew'], correctAnswer: 'fly', points: 10 },
      { id: 'wo-10', sectionId: 'found-word-order', type: 'multiple-choice', question: 'She ___ very well.', translation: 'Ela canta muito bem.', options: ['sing', 'sings', 'singing', 'sang'], correctAnswer: 'sings', points: 10 }
    ]
  },
  {
    id: 'there-their-theyre-1',
    title: 'There/Their/They\'re',
    description: 'Distinguishing confusing words',
    icon: '🔤',
    exercises: [
      { id: 'ttt-1', sectionId: 'found-spelling', type: 'multiple-choice', question: '___ books are on the table.', translation: 'Os livros deles estão na mesa.', options: ['There', 'Their', 'They\'re', 'They'], correctAnswer: 'Their', points: 10 },
      { id: 'ttt-2', sectionId: 'found-spelling', type: 'multiple-choice', question: '___ is a cat in the garden.', translation: 'Há um gato no jardim.', options: ['There', 'Their', 'They\'re', 'Thier'], correctAnswer: 'There', points: 10 },
      { id: 'ttt-3', sectionId: 'found-spelling', type: 'multiple-choice', question: '___ going to the store.', translation: 'Eles estão indo à loja.', options: ['There', 'Their', 'They\'re', 'Thier'], correctAnswer: 'They\'re', points: 10 },
      { id: 'ttt-4', sectionId: 'found-spelling', type: 'multiple-choice', question: '___ house is big.', translation: 'A casa deles é grande.', options: ['There', 'Their', 'They\'re', 'Thier'], correctAnswer: 'Their', points: 10 },
      { id: 'ttt-5', sectionId: 'found-spelling', type: 'multiple-choice', question: '___ are many options.', translation: 'Há muitas opções.', options: ['There', 'Their', 'They\'re', 'Thier'], correctAnswer: 'There', points: 10 },
      { id: 'ttt-6', sectionId: 'found-spelling', type: 'multiple-choice', question: '___ happy with the result.', translation: 'Eles estão felizes com o resultado.', options: ['There', 'Their', 'They\'re', 'Thier'], correctAnswer: 'They\'re', points: 10 },
      { id: 'ttt-7', sectionId: 'found-spelling', type: 'multiple-choice', question: 'I saw ___ dog.', translation: 'Eu vi o cão deles.', options: ['There', 'Their', 'They\'re', 'Thier'], correctAnswer: 'Their', points: 10 },
      { id: 'ttt-8', sectionId: 'found-spelling', type: 'multiple-choice', question: '___ is nothing here.', translation: 'Não há nada aqui.', options: ['There', 'Their', 'They\'re', 'Thier'], correctAnswer: 'There', points: 10 },
      { id: 'ttt-9', sectionId: 'found-spelling', type: 'multiple-choice', question: '___ friends arrived.', translation: 'Os amigos deles chegaram.', options: ['There', 'Their', 'They\'re', 'Thier'], correctAnswer: 'Their', points: 10 },
      { id: 'ttt-10', sectionId: 'found-spelling', type: 'multiple-choice', question: '___ ready to go.', translation: 'Eles estão prontos para ir.', options: ['There', 'Their', 'They\'re', 'Thier'], correctAnswer: 'They\'re', points: 10 }
    ]
  },
  {
    id: 'your-youre-1',
    title: 'Your/You\'re',
    description: 'Your vs You\'re',
    icon: '🔤',
    exercises: [
      { id: 'yyr-1', sectionId: 'found-spelling', type: 'multiple-choice', question: '___ book is interesting.', translation: 'O seu livro é interessante.', options: ['Your', 'You\'re', 'Yore', 'You'], correctAnswer: 'Your', points: 10 },
      { id: 'yyr-2', sectionId: 'found-spelling', type: 'multiple-choice', question: '___ going to love this.', translation: 'Você vai adorar isso.', options: ['Your', 'You\'re', 'Yore', 'You'], correctAnswer: 'You\'re', points: 10 },
      { id: 'yyr-3', sectionId: 'found-spelling', type: 'multiple-choice', question: '___ mother is kind.', translation: 'A sua mãe é gentil.', options: ['Your', 'You\'re', 'Yore', 'You'], correctAnswer: 'Your', points: 10 },
      { id: 'yyr-4', sectionId: 'found-spelling', type: 'multiple-choice', question: '___ right about this.', translation: 'Você está certo sobre isso.', options: ['Your', 'You\'re', 'Yore', 'You'], correctAnswer: 'You\'re', points: 10 },
      { id: 'yyr-5', sectionId: 'found-spelling', type: 'multiple-choice', question: '___ house looks nice.', translation: 'A sua casa parece nice.', options: ['Your', 'You\'re', 'Yore', 'You'], correctAnswer: 'Your', points: 10 },
      { id: 'yyr-6', sectionId: 'found-spelling', type: 'multiple-choice', question: '___ a good student.', translation: 'Você é um bom aluno.', options: ['Your', 'You\'re', 'Yore', 'You'], correctAnswer: 'You\'re', points: 10 },
      { id: 'yyr-7', sectionId: 'found-spelling', type: 'multiple-choice', question: '___ idea is good.', translation: 'A sua ideia é boa.', options: ['Your', 'You\'re', 'Yore', 'You'], correctAnswer: 'Your', points: 10 },
      { id: 'yyr-8', sectionId: 'found-spelling', type: 'multiple-choice', question: '___ amazing at this.', translation: 'Você é incrível nisso.', options: ['Your', 'You\'re', 'Yore', 'You'], correctAnswer: 'You\'re', points: 10 },
      { id: 'yyr-9', sectionId: 'found-spelling', type: 'multiple-choice', question: '___ car is new.', translation: 'O seu carro é novo.', options: ['Your', 'You\'re', 'Yore', 'You'], correctAnswer: 'Your', points: 10 },
      { id: 'yyr-10', sectionId: 'found-spelling', type: 'multiple-choice', question: '___ late again.', translation: 'Você está atrasado de novo.', options: ['Your', 'You\'re', 'Yore', 'You'], correctAnswer: 'You\'re', points: 10 }
    ]
  },
  {
    id: 'its-its-1',
    title: 'It\'s/Its',
    description: 'It\'s vs Its',
    icon: '🔤',
    exercises: [
      { id: 'iti-1', sectionId: 'found-spelling', type: 'multiple-choice', question: '___ a beautiful day.', translation: 'É um lindo dia.', options: ['It\'s', 'Its', 'Its\'', 'It'], correctAnswer: 'It\'s', points: 10 },
      { id: 'iti-2', sectionId: 'found-spelling', type: 'multiple-choice', question: 'The cat is in ___ bed.', translation: 'O gato está na cama dele.', options: ['It\'s', 'Its', 'Its\'', 'It'], correctAnswer: 'Its', points: 10 },
      { id: 'iti-3', sectionId: 'found-spelling', type: 'multiple-choice', question: '___ going to rain.', translation: 'Vai chover.', options: ['It\'s', 'Its', 'Its\'', 'It'], correctAnswer: 'It\'s', points: 10 },
      { id: 'iti-4', sectionId: 'found-spelling', type: 'multiple-choice', question: '___ fur is soft.', translation: 'O pelo dele é macio.', options: ['It\'s', 'Its', 'Its\'', 'It'], correctAnswer: 'Its', points: 10 },
      { id: 'iti-5', sectionId: 'found-spelling', type: 'multiple-choice', question: '___ time to go.', translation: 'É hora de ir.', options: ['It\'s', 'Its', 'Its\'', 'It'], correctAnswer: 'It\'s', points: 10 },
      { id: 'iti-6', sectionId: 'found-spelling', type: 'multiple-choice', question: 'The company changed ___ policy.', translation: 'A empresa mudou a política dela.', options: ['It\'s', 'Its', 'Its\'', 'It'], correctAnswer: 'Its', points: 10 },
      { id: 'iti-7', sectionId: 'found-spelling', type: 'multiple-choice', question: '___ not easy.', translation: 'Não é fácil.', options: ['It\'s', 'Its', 'Its\'', 'It'], correctAnswer: 'It\'s', points: 10 },
      { id: 'iti-8', sectionId: 'found-spelling', type: 'multiple-choice', question: 'The dog wagged ___ tail.', translation: 'O cachorro abanou o rabo.', options: ['It\'s', 'Its', 'Its\'', 'It'], correctAnswer: 'Its', points: 10 },
      { id: 'iti-9', sectionId: 'found-spelling', type: 'multiple-choice', question: '___ always been my dream.', translation: 'Sempre foi o meu sonho.', options: ['It\'s', 'Its', 'Its\'', 'It'], correctAnswer: 'It\'s', points: 10 },
      { id: 'iti-10', sectionId: 'found-spelling', type: 'multiple-choice', question: 'The book has ___ own chapter.', translation: 'O livro tem o seu próprio capítulo.', options: ['It\'s', 'Its', 'Its\'', 'It'], correctAnswer: 'Its', points: 10 }
    ]
  },
  {
    id: 'contractions-1',
    title: 'Common Contractions',
    description: 'Mastering English contractions',
    icon: '📝',
    exercises: [
      { id: 'cont-1', sectionId: 'found-contractions', type: 'multiple-choice', question: 'I ___ going to come.', translation: 'Eu não vou conseguir.', options: ['am not', '\'m not', 'not am', 'no not'], correctAnswer: '\'m not', points: 10 },
      { id: 'cont-2', sectionId: 'found-contractions', type: 'multiple-choice', question: 'She ___ like coffee.', translation: 'Ela não gosta de café.', options: ['does not', 'doesn\'t', 'don\'t', 'not does'], correctAnswer: 'doesn\'t', points: 10 },
      { id: 'cont-3', sectionId: 'found-contractions', type: 'multiple-choice', question: 'They ___ coming tonight.', translation: 'Eles não vêm hoje à noite.', options: ['are not', 'aren\'t', 'not are', 'no are'], correctAnswer: 'aren\'t', points: 10 },
      { id: 'cont-4', sectionId: 'found-contractions', type: 'multiple-choice', question: 'He ___ ready yet.', translation: 'Ele ainda não está pronto.', options: ['is not', 'isn\'t', 'not is', 'no is'], correctAnswer: 'isn\'t', points: 10 },
      { id: 'cont-5', sectionId: 'found-contractions', type: 'multiple-choice', question: 'We ___ finished yet.', translation: 'Ainda não terminamos.', options: ['have not', 'haven\'t', 'not have', 'no have'], correctAnswer: 'haven\'t', points: 10 },
      { id: 'cont-6', sectionId: 'found-contractions', type: 'multiple-choice', question: 'She ___ been there before.', translation: 'Ela nunca esteve lá antes.', options: ['has not', 'hasn\'t', 'not has', 'no has'], correctAnswer: 'hasn\'t', points: 10 },
      { id: 'cont-7', sectionId: 'found-contractions', type: 'multiple-choice', question: 'I ___ do that.', translation: 'Eu não faria isso.', options: ['would not', 'wouldn\'t', 'not would', 'no would'], correctAnswer: 'wouldn\'t', points: 10 },
      { id: 'cont-8', sectionId: 'found-contractions', type: 'multiple-choice', question: 'You ___ should go.', translation: 'Você não deveria ir.', options: ['should not', 'shouldn\'t', 'not should', 'no should'], correctAnswer: 'shouldn\'t', points: 10 },
      { id: 'cont-9', sectionId: 'found-contractions', type: 'multiple-choice', question: 'It ___ be true.', translation: 'Não pode ser verdade.', options: ['cannot', 'can\'t', 'cannot be', 'no can'], correctAnswer: 'can\'t', points: 10 },
      { id: 'cont-10', sectionId: 'found-contractions', type: 'multiple-choice', question: 'They ___ have known.', translation: 'Eles deveriam saber.', options: ['should have', 'should\'ve', 'should of', 'should had'], correctAnswer: 'should\'ve', points: 10 }
    ]
  },
  {
    id: 'question-words-1',
    title: 'Question Words',
    description: 'Who, what, where, when, why, how',
    icon: '❓',
    exercises: [
      { id: 'qw-1', sectionId: 'found-questions', type: 'multiple-choice', question: '___ is that woman?', translation: 'Quem é aquela mulher?', options: ['Who', 'What', 'Where', 'When'], correctAnswer: 'Who', points: 10 },
      { id: 'qw-2', sectionId: 'found-questions', type: 'multiple-choice', question: '___ time is it?', translation: 'Que horas são?', options: ['What', 'Who', 'Where', 'When'], correctAnswer: 'What', points: 10 },
      { id: 'qw-3', sectionId: 'found-questions', type: 'multiple-choice', question: '___ does she live?', translation: 'Onde ela mora?', options: ['Where', 'Who', 'What', 'Why'], correctAnswer: 'Where', points: 10 },
      { id: 'qw-4', sectionId: 'found-questions', type: 'multiple-choice', question: '___ did the movie start?', translation: 'Quando o filme começou?', options: ['When', 'Where', 'What', 'How'], correctAnswer: 'When', points: 10 },
      { id: 'qw-5', sectionId: 'found-questions', type: 'multiple-choice', question: '___ are you late?', translation: 'Por que você está atrasado?', options: ['Why', 'How', 'What', 'Where'], correctAnswer: 'Why', points: 10 },
      { id: 'qw-6', sectionId: 'found-questions', type: 'multiple-choice', question: '___ is the weather?', translation: 'Como está o tempo?', options: ['How', 'What', 'Why', 'When'], correctAnswer: 'How', points: 10 },
      { id: 'qw-7', sectionId: 'found-questions', type: 'multiple-choice', question: '___ did you buy?', translation: 'O que você comprou?', options: ['What', 'Who', 'Where', 'Why'], correctAnswer: 'What', points: 10 },
      { id: 'qw-8', sectionId: 'found-questions', type: 'multiple-choice', question: '___ came to the party?', translation: 'Quem veio à festa?', options: ['Who', 'What', 'Where', 'When'], correctAnswer: 'Who', points: 10 },
      { id: 'qw-9', sectionId: 'found-questions', type: 'multiple-choice', question: '___ is the nearest hospital?', translation: 'Onde está o hospital mais próximo?', options: ['Where', 'What', 'Who', 'How'], correctAnswer: 'Where', points: 10 },
      { id: 'qw-10', sectionId: 'found-questions', type: 'multiple-choice', question: '___ old are you?', translation: 'Quantos anos você tem?', options: ['How', 'What', 'Which', 'Where'], correctAnswer: 'How', points: 10 }
    ]
  },
  {
    id: 'prepositions-place-1',
    title: 'Prepositions of Place',
    description: 'In, on, at, under, between',
    icon: '📍',
    exercises: [
      { id: 'pp-1', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'The book is ___ the table.', translation: 'O livro está sobre a mesa.', options: ['in', 'on', 'at', 'under'], correctAnswer: 'on', points: 10 },
      { id: 'pp-2', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'The cat is ___ the bed.', translation: 'O gato está embaixo da cama.', options: ['in', 'on', 'at', 'under'], correctAnswer: 'under', points: 10 },
      { id: 'pp-3', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'She lives ___ London.', translation: 'Ela mora em Londres.', options: ['in', 'on', 'at', 'to'], correctAnswer: 'in', points: 10 },
      { id: 'pp-4', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'The meeting is ___ 3pm.', translation: 'A reunião é às 15h.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'at', points: 10 },
      { id: 'pp-5', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'The book is ___ the shelf.', translation: 'O livro está na prateleira.', options: ['in', 'on', 'at', 'under'], correctAnswer: 'on', points: 10 },
      { id: 'pp-6', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'He is sitting ___ the two chairs.', translation: 'Ele está sentado entre as duas cadeiras.', options: ['between', 'among', 'in', 'on'], correctAnswer: 'between', points: 10 },
      { id: 'pp-7', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'The picture is ___ the wall.', translation: 'A foto está na parede.', options: ['in', 'on', 'at', 'to'], correctAnswer: 'on', points: 10 },
      { id: 'pp-8', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'She works ___ a hospital.', translation: 'Ela trabalha em um hospital.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'at', points: 10 },
      { id: 'pp-9', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'The keys are ___ the drawer.', translation: 'As chaves estão na gaveta.', options: ['in', 'on', 'at', 'into'], correctAnswer: 'in', points: 10 },
      { id: 'pp-10', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'The ball is ___ the box.', translation: 'A bola está dentro da caixa.', options: ['in', 'on', 'at', 'under'], correctAnswer: 'in', points: 10 }
    ]
  },
  {
    id: 'prepositions-time-1',
    title: 'Prepositions of Time',
    description: 'In, on, at for time',
    icon: '⏰',
    exercises: [
      { id: 'pt-1', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'I was born ___ 1995.', translation: 'Eu nasci em 1995.', options: ['in', 'on', 'at', 'since'], correctAnswer: 'in', points: 10 },
      { id: 'pt-2', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'The meeting is ___ Monday.', translation: 'A reunião é na segunda-feira.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'on', points: 10 },
      { id: 'pt-3', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'She wakes up ___ 6am.', translation: 'Ela acorda às 6h.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'at', points: 10 },
      { id: 'pt-4', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'I will see you ___ summer.', translation: 'Vou te ver no verão.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'in', points: 10 },
      { id: 'pt-5', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'The store closes ___ night.', translation: 'A loja fecha à noite.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'at', points: 10 },
      { id: 'pt-6', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'We go to church ___ Sunday.', translation: 'Vamos à igreja no domingo.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'on', points: 10 },
      { id: 'pt-7', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'The course starts ___ January.', translation: 'O curso começa em janeiro.', options: ['in', 'on', 'at', 'since'], correctAnswer: 'in', points: 10 },
      { id: 'pt-8', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'Call me ___ lunchtime.', translation: 'Me liga na hora do almoço.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'at', points: 10 },
      { id: 'pt-9', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'She will be here ___ next week.', translation: 'Ela estará aqui na próxima semana.', options: ['in', 'on', 'at', 'by'], correctAnswer: 'by', points: 10 },
      { id: 'pt-10', sectionId: 'found-prepositions', type: 'multiple-choice', question: 'I have been here ___ three hours.', translation: 'Estou aqui há três horas.', options: ['in', 'on', 'at', 'for'], correctAnswer: 'for', points: 10 }
    ]
  },
  {
    id: 'possessive-nouns-1',
    title: 'Possessive Nouns',
    description: 'Using \'s for possession',
    icon: '🏠',
    exercises: [
      { id: 'pos-1', sectionId: 'found-possessives', type: 'multiple-choice', question: '___ car is new.', translation: 'O carro dela é novo.', options: ['She', 'Her', 'Hers', 'She\'s'], correctAnswer: 'Her', points: 10 },
      { id: 'pos-2', sectionId: 'found-possessives', type: 'multiple-choice', question: 'That is ___ book.', translation: 'Esse é o livro dele.', options: ['he', 'him', 'his', 'he\'s'], correctAnswer: 'his', points: 10 },
      { id: 'pos-3', sectionId: 'found-possessives', type: 'multiple-choice', question: '___ house is big.', translation: 'A casa deles é grande.', options: ['Them', 'Their', 'Theirs', 'They\'re'], correctAnswer: 'Their', points: 10 },
      { id: 'pos-4', sectionId: 'found-possessives', type: 'multiple-choice', question: 'I need ___ help.', translation: 'Eu preciso da ajuda dela.', options: ['she', 'her', 'hers', 'she\'s'], correctAnswer: 'her', points: 10 },
      { id: 'pos-5', sectionId: 'found-possessives', type: 'multiple-choice', question: 'This is ___ dog.', translation: 'Este é o cachorro deles.', options: ['they', 'them', 'their', 'theirs'], correctAnswer: 'their', points: 10 },
      { id: 'pos-6', sectionId: 'found-possessives', type: 'multiple-choice', question: 'John ___ sister is a doctor.', translation: 'A irmã do John é médica.', options: ['and', 'but', 'or', 'so'], correctAnswer: 'and', points: 10 },
      { id: 'pos-7', sectionId: 'found-possessives', type: 'multiple-choice', question: 'The teacher ___ name is Mr. Smith.', translation: 'O nome do professor é senhor Smith.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'whose', points: 10 },
      { id: 'pos-8', sectionId: 'found-possessives', type: 'multiple-choice', question: 'The car ___ color is red.', translation: 'A cor do carro é vermelha.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'whose', points: 10 },
      { id: 'pos-9', sectionId: 'found-possessives', type: 'multiple-choice', question: '___ is this bag?', translation: 'De quem é esta bolsa?', options: ['Who', 'Whose', 'Who\'s', 'Whom'], correctAnswer: 'Whose', points: 10 },
      { id: 'pos-10', sectionId: 'found-possessives', type: 'multiple-choice', question: 'This is a friend ___ mother works here.', translation: 'Este é um amigo cuja mãe trabalha aqui.', options: ['who', 'whom', 'whose', 'which'], correctAnswer: 'whose', points: 10 }
    ]
  },
  {
    id: 'demonstratives-1',
    title: 'Demonstratives',
    description: 'This, that, these, those',
    icon: '👆',
    exercises: [
      { id: 'dem-1', sectionId: 'found-demonstratives', type: 'multiple-choice', question: '___ is my book.', translation: 'Este é o meu livro.', options: ['This', 'That', 'These', 'Those'], correctAnswer: 'This', points: 10 },
      { id: 'dem-2', sectionId: 'found-demonstratives', type: 'multiple-choice', question: '___ are my friends.', translation: 'Estes são os meus amigos.', options: ['This', 'That', 'These', 'Those'], correctAnswer: 'These', points: 10 },
      { id: 'dem-3', sectionId: 'found-demonstratives', type: 'multiple-choice', question: '___ is far away.', translation: 'Aquilo está longe.', options: ['This', 'That', 'These', 'Those'], correctAnswer: 'That', points: 10 },
      { id: 'dem-4', sectionId: 'found-demonstratives', type: 'multiple-choice', question: '___ are old houses.', translation: 'Aquelas são casas velhas.', options: ['This', 'That', 'These', 'Those'], correctAnswer: 'Those', points: 10 },
      { id: 'dem-5', sectionId: 'found-demonstratives', type: 'multiple-choice', question: 'Do you like ___ one?', translation: 'Você gosta deste aqui?', options: ['this', 'that', 'these', 'those'], correctAnswer: 'this', points: 10 },
      { id: 'dem-6', sectionId: 'found-demonstratives', type: 'multiple-choice', question: 'Look at ___ birds!', translation: 'Olha aqueles pássaros!', options: ['this', 'that', 'these', 'those'], correctAnswer: 'those', points: 10 },
      { id: 'dem-7', sectionId: 'found-demonstratives', type: 'multiple-choice', question: '___ pencil is mine.', translation: 'Este lápis é meu.', options: ['This', 'That', 'These', 'Those'], correctAnswer: 'This', points: 10 },
      { id: 'dem-8', sectionId: 'found-demonstratives', type: 'multiple-choice', question: 'I prefer ___ to these.', translation: 'Eu prefiro aquilo a estes.', options: ['this', 'that', 'these', 'those'], correctAnswer: 'that', points: 10 },
      { id: 'dem-9', sectionId: 'found-demonstratives', type: 'multiple-choice', question: '___ books are interesting.', translation: 'Estes livros são interessantes.', options: ['This', 'That', 'These', 'Those'], correctAnswer: 'These', points: 10 },
      { id: 'dem-10', sectionId: 'found-demonstratives', type: 'multiple-choice', question: 'Are ___ apples good?', translation: 'Aquelas maçãs são boas?', options: ['this', 'that', 'these', 'those'], correctAnswer: 'those', points: 10 }
    ]
  },
  {
    id: 'basic-sentences-1',
    title: 'Basic Sentence Types',
    description: 'Statement, question, exclamation',
    icon: '📖',
    exercises: [
      { id: 'bst-1', sectionId: 'found-sentences', type: 'multiple-choice', question: 'Which is a statement?', translation: 'Which is a statement?', options: ['What a beautiful day!', 'I love this movie.', 'Are you coming?', 'Close the door!'], correctAnswer: 'I love this movie.', points: 10 },
      { id: 'bst-2', sectionId: 'found-sentences', type: 'multiple-choice', question: 'Which is a question?', translation: 'Which is a question?', options: ['She is a teacher.', 'Do you like coffee?', 'It is raining.', 'They went home.'], correctAnswer: 'Do you like coffee?', points: 10 },
      { id: 'bst-3', sectionId: 'found-sentences', type: 'multiple-choice', question: 'Which is an exclamation?', translation: 'Which is an exclamation?', options: ['He is my friend.', 'What a surprise!', 'She can swim.', 'We eat dinner.'], correctAnswer: 'What a surprise!', points: 10 },
      { id: 'bst-4', sectionId: 'found-sentences', type: 'multiple-choice', question: 'Which is a negative statement?', translation: 'Which is a negative statement?', options: ['I am happy.', 'She does not agree.', 'They are here.', 'We love music.'], correctAnswer: 'She does not agree.', points: 10 },
      { id: 'bst-5', sectionId: 'found-sentences', type: 'multiple-choice', question: 'Which is a command?', translation: 'Which is a command?', options: ['Please sit down.', 'He is tall.', 'She eats lunch.', 'They are friends.'], correctAnswer: 'Please sit down.', points: 10 },
      { id: 'bst-6', sectionId: 'found-sentences', type: 'multiple-choice', question: 'Which is a yes/no question?', translation: 'Which is a yes/no question?', options: ['Where are you going?', 'Are you tired?', 'What time is it?', 'Who called?'], correctAnswer: 'Are you tired?', points: 10 },
      { id: 'bst-7', sectionId: 'found-sentences', type: 'multiple-choice', question: 'Which is an affirmative statement?', translation: 'Which is an affirmative statement?', options: ['I do not know.', 'They are traveling.', 'She cannot come.', 'We never eat here.'], correctAnswer: 'They are traveling.', points: 10 },
      { id: 'bst-8', sectionId: 'found-sentences', type: 'multiple-choice', question: 'Which ends with a period?', translation: 'Which ends with a period?', options: ['What a day!', 'Please help me.', 'It is beautiful.', 'Are you okay?'], correctAnswer: 'It is beautiful.', points: 10 },
      { id: 'bst-9', sectionId: 'found-sentences', type: 'multiple-choice', question: 'Which ends with a question mark?', translation: 'Which ends with a question mark?', options: ['We are ready.', 'How are you?', 'It is done.', 'Go now!'], correctAnswer: 'How are you?', points: 10 },
      { id: 'bst-10', sectionId: 'found-sentences', type: 'multiple-choice', question: 'Which is an imperative?', translation: 'Which is an imperative?', options: ['I am studying.', 'Please open the window.', 'She runs fast.', 'They are eating.'], correctAnswer: 'Please open the window.', points: 10 }
    ]
  }
];

export const foundationQuizPacks: QuizPack[] = [
  {
    id: 'foundation-quiz',
    title: 'Foundation Quiz',
    description: 'Test your foundation knowledge',
    icon: '🎯',
    quiz: {
      id: 'found-quiz',
      title: 'Foundation Grammar Quiz',
      description: 'Test your knowledge of basic grammar',
      passingScore: 70,
      xpReward: 50,
      gemReward: 3,
      timeLimit: 300,
      questions: [
        { id: 'fq-1', sectionId: 'found-articles', type: 'multiple-choice', question: 'I need ___ umbrella.', translation: 'Eu preciso de guarda-chuva.', options: ['a', 'an', 'the', 'no article'], correctAnswer: 'an', points: 10 },
        { id: 'fq-2', sectionId: 'found-subject-verb', type: 'multiple-choice', question: 'They ___ football every weekend.', translation: 'Eles jogam futebol todos os finais de semana.', options: ['play', 'plays', 'playing', 'played'], correctAnswer: 'play', points: 10 },
        { id: 'fq-3', sectionId: 'found-articles', type: 'multiple-choice', question: '___ Amazon is a big river.', translation: 'O Amazonas é um rio grande.', options: ['A', 'An', 'The', 'No article'], correctAnswer: 'The', points: 10 },
        { id: 'fq-4', sectionId: 'found-subject-verb', type: 'multiple-choice', question: 'He ___ coffee every morning.', translation: 'Ele bebe café todas as manhãs.', options: ['drink', 'drinks', 'drinking', 'drank'], correctAnswer: 'drinks', points: 10 }
      ]
    }
  }
];