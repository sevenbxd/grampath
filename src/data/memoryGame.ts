export type MemoryGameMode = 'translation' | 'opposite' | 'tense' | 'animals' | 'food' | 'actions' | 'emotions' | 'places' | 'weather' | 'colors' | 'numbers' | 'time' | 'school';

export interface MemoryPair {
  id: string;
  word: string;
  match: string;
  type: MemoryGameMode;
}

export const memoryPairs: Record<MemoryGameMode, MemoryPair[]> = {
  translation: [
    { id: 't1', word: 'Book', match: 'Livro', type: 'translation' },
    { id: 't2', word: 'House', match: 'Casa', type: 'translation' },
    { id: 't3', word: 'Water', match: 'Água', type: 'translation' },
    { id: 't4', word: 'Friend', match: 'Amigo', type: 'translation' },
    { id: 't5', word: 'Time', match: 'Tempo', type: 'translation' },
    { id: 't6', word: 'Day', match: 'Dia', type: 'translation' },
    { id: 't7', word: 'Year', match: 'Ano', type: 'translation' },
    { id: 't8', word: 'Work', match: 'Trabalho', type: 'translation' },
    { id: 't9', word: 'School', match: 'Escola', type: 'translation' },
    { id: 't10', word: 'Family', match: 'Família', type: 'translation' },
    { id: 't11', word: 'Money', match: 'Dinheiro', type: 'translation' },
    { id: 't12', word: 'Food', match: 'Comida', type: 'translation' },
    { id: 't13', word: 'Car', match: 'Carro', type: 'translation' },
    { id: 't14', word: 'City', match: 'Cidade', type: 'translation' },
    { id: 't15', word: 'Sun', match: 'Sol', type: 'translation' },
  ],
  opposite: [
    { id: 'o1', word: 'Good', match: 'Bad', type: 'opposite' },
    { id: 'o2', word: 'Big', match: 'Small', type: 'opposite' },
    { id: 'o3', word: 'Happy', match: 'Sad', type: 'opposite' },
    { id: 'o4', word: 'Hot', match: 'Cold', type: 'opposite' },
    { id: 'o5', word: 'Fast', match: 'Slow', type: 'opposite' },
    { id: 'o6', word: 'Strong', match: 'Weak', type: 'opposite' },
    { id: 'o7', word: 'Old', match: 'New', type: 'opposite' },
    { id: 'o8', word: 'Open', match: 'Closed', type: 'opposite' },
    { id: 'o9', word: 'Rich', match: 'Poor', type: 'opposite' },
    { id: 'o10', word: 'Young', match: 'Old', type: 'opposite' },
    { id: 'o11', word: 'Light', match: 'Dark', type: 'opposite' },
    { id: 'o12', word: 'Easy', match: 'Hard', type: 'opposite' },
    { id: 'o13', word: 'Clean', match: 'Dirty', type: 'opposite' },
    { id: 'o14', word: 'Full', match: 'Empty', type: 'opposite' },
    { id: 'o15', word: 'Loud', match: 'Quiet', type: 'opposite' },
  ],
  tense: [
    { id: 'te1', word: 'Buy', match: 'Buying', type: 'tense' },
    { id: 'te2', word: 'Have', match: 'Having', type: 'tense' },
    { id: 'te3', word: 'Write', match: 'Writing', type: 'tense' },
    { id: 'te4', word: 'Make', match: 'Making', type: 'tense' },
    { id: 'te5', word: 'Take', match: 'Taking', type: 'tense' },
    { id: 'te6', word: 'Come', match: 'Coming', type: 'tense' },
    { id: 'te7', word: 'Go', match: 'Going', type: 'tense' },
    { id: 'te8', word: 'See', match: 'Seeing', type: 'tense' },
    { id: 'te9', word: 'Speak', match: 'Speaking', type: 'tense' },
    { id: 'te10', word: 'Learn', match: 'Learning', type: 'tense' },
    { id: 'te11', word: 'Play', match: 'Playing', type: 'tense' },
    { id: 'te12', word: 'Run', match: 'Running', type: 'tense' },
    { id: 'te13', word: 'Eat', match: 'Eating', type: 'tense' },
    { id: 'te14', word: 'Sleep', match: 'Sleeping', type: 'tense' },
    { id: 'te15', word: 'Read', match: 'Reading', type: 'tense' },
  ],
  animals: [
    { id: 'a1', word: 'Dog', match: 'Cachorro', type: 'animals' },
    { id: 'a2', word: 'Cat', match: 'Gato', type: 'animals' },
    { id: 'a3', word: 'Bird', match: 'Pássaro', type: 'animals' },
    { id: 'a4', word: 'Fish', match: 'Peixe', type: 'animals' },
    { id: 'a5', word: 'Lion', match: 'Leão', type: 'animals' },
    { id: 'a6', word: 'Elephant', match: 'Elefante', type: 'animals' },
    { id: 'a7', word: 'Tiger', match: 'Tigre', type: 'animals' },
    { id: 'a8', word: 'Horse', match: 'Cavalo', type: 'animals' },
    { id: 'a9', word: 'Monkey', match: 'Macaco', type: 'animals' },
    { id: 'a10', word: 'Bear', match: 'Urso', type: 'animals' },
    { id: 'a11', word: 'Rabbit', match: 'Coelho', type: 'animals' },
    { id: 'a12', word: 'Snake', match: 'Cobra', type: 'animals' },
    { id: 'a13', word: 'Cow', match: 'Vaca', type: 'animals' },
    { id: 'a14', word: 'Pig', match: 'Porco', type: 'animals' },
    { id: 'a15', word: 'Duck', match: 'Pato', type: 'animals' },
  ],
  food: [
    { id: 'f1', word: 'Apple', match: 'Maçã', type: 'food' },
    { id: 'f2', word: 'Banana', match: 'Banana', type: 'food' },
    { id: 'f3', word: 'Orange', match: 'Laranja', type: 'food' },
    { id: 'f4', word: 'Bread', match: 'Pão', type: 'food' },
    { id: 'f5', word: 'Milk', match: 'Leite', type: 'food' },
    { id: 'f6', word: 'Cheese', match: 'Queijo', type: 'food' },
    { id: 'f7', word: 'Rice', match: 'Arroz', type: 'food' },
    { id: 'f8', word: 'Egg', match: 'Ovo', type: 'food' },
    { id: 'f9', word: 'Meat', match: 'Carne', type: 'food' },
    { id: 'f10', word: 'Chicken', match: 'Frango', type: 'food' },
    { id: 'f11', word: 'Fish', match: 'Peixe', type: 'food' },
    { id: 'f12', word: 'Salad', match: 'Salada', type: 'food' },
    { id: 'f13', word: 'Soup', match: 'Sopa', type: 'food' },
    { id: 'f14', word: 'Pizza', match: 'Pizza', type: 'food' },
    { id: 'f15', word: 'Coffee', match: 'Café', type: 'food' },
  ],
  actions: [
    { id: 'ac1', word: 'Run', match: 'Correr', type: 'actions' },
    { id: 'ac2', word: 'Walk', match: 'Caminhar', type: 'actions' },
    { id: 'ac3', word: 'Jump', match: 'Pular', type: 'actions' },
    { id: 'ac4', word: 'Swim', match: 'Nadar', type: 'actions' },
    { id: 'ac5', word: 'Dance', match: 'Dançar', type: 'actions' },
    { id: 'ac6', word: 'Sing', match: 'Cantar', type: 'actions' },
    { id: 'ac7', word: 'Read', match: 'Ler', type: 'actions' },
    { id: 'ac8', word: 'Write', match: 'Escrever', type: 'actions' },
    { id: 'ac9', word: 'Cook', match: 'Cozinhar', type: 'actions' },
    { id: 'ac10', word: 'Clean', match: 'Limpar', type: 'actions' },
    { id: 'ac11', word: 'Drive', match: 'Dirigir', type: 'actions' },
    { id: 'ac12', word: 'Sleep', match: 'Dormir', type: 'actions' },
    { id: 'ac13', word: 'Study', match: 'Estudar', type: 'actions' },
    { id: 'ac14', word: 'Play', match: 'Brincar', type: 'actions' },
    { id: 'ac15', word: 'Paint', match: 'Pintar', type: 'actions' },
  ],
  emotions: [
    { id: 'em1', word: 'Happy', match: 'Feliz', type: 'emotions' },
    { id: 'em2', word: 'Sad', match: 'Triste', type: 'emotions' },
    { id: 'em3', word: 'Angry', match: 'Irritado', type: 'emotions' },
    { id: 'em4', word: 'Scared', match: 'Com medo', type: 'emotions' },
    { id: 'em5', word: 'Excited', match: 'Animado', type: 'emotions' },
    { id: 'em6', word: 'Tired', match: 'Cansado', type: 'emotions' },
    { id: 'em7', word: 'Hungry', match: 'Com fome', type: 'emotions' },
    { id: 'em8', word: 'Thirsty', match: 'Com sede', type: 'emotions' },
    { id: 'em9', word: 'Sick', match: 'Doente', type: 'emotions' },
    { id: 'em10', word: 'Bored', match: 'Entediado', type: 'emotions' },
    { id: 'em11', word: 'Nervous', match: 'Nervoso', type: 'emotions' },
    { id: 'em12', word: 'Confused', match: 'Confuso', type: 'emotions' },
    { id: 'em13', word: 'Proud', match: 'Orgulhoso', type: 'emotions' },
    { id: 'em14', word: 'Jealous', match: 'Ciumento', type: 'emotions' },
    { id: 'em15', word: 'Shy', match: 'Tímido', type: 'emotions' },
  ],
  places: [
    { id: 'p1', word: 'Beach', match: 'Praia', type: 'places' },
    { id: 'p2', word: 'Mountain', match: 'Montanha', type: 'places' },
    { id: 'p3', word: 'Forest', match: 'Floresta', type: 'places' },
    { id: 'p4', word: 'City', match: 'Cidade', type: 'places' },
    { id: 'p5', word: 'Village', match: 'Vila', type: 'places' },
    { id: 'p6', word: 'Hospital', match: 'Hospital', type: 'places' },
    { id: 'p7', word: 'School', match: 'Escola', type: 'places' },
    { id: 'p8', word: 'Airport', match: 'Aeroporto', type: 'places' },
    { id: 'p9', word: 'Station', match: 'Estação', type: 'places' },
    { id: 'p10', word: 'Library', match: 'Biblioteca', type: 'places' },
    { id: 'p11', word: 'Museum', match: 'Museu', type: 'places' },
    { id: 'p12', word: 'Restaurant', match: 'Restaurante', type: 'places' },
    { id: 'p13', word: 'Hotel', match: 'Hotel', type: 'places' },
    { id: 'p14', word: 'Park', match: 'Parque', type: 'places' },
    { id: 'p15', word: 'Church', match: 'Igreja', type: 'places' },
  ],
  weather: [
    { id: 'w1', word: 'Sunny', match: 'Ensolarado', type: 'weather' },
    { id: 'w2', word: 'Rainy', match: 'Chuvoso', type: 'weather' },
    { id: 'w3', word: 'Cloudy', match: 'Nublado', type: 'weather' },
    { id: 'w4', word: 'Windy', match: 'Ventoso', type: 'weather' },
    { id: 'w5', word: 'Snowy', match: 'Nevado', type: 'weather' },
    { id: 'w6', word: 'Hot', match: 'Quente', type: 'weather' },
    { id: 'w7', word: 'Cold', match: 'Frio', type: 'weather' },
    { id: 'w8', word: 'Warm', match: 'Quente (morno)', type: 'weather' },
    { id: 'w9', word: 'Cool', match: 'Fresco', type: 'weather' },
    { id: 'w10', word: 'Stormy', match: 'Tempestuoso', type: 'weather' },
    { id: 'w11', word: 'Foggy', match: 'Neblina', type: 'weather' },
    { id: 'w12', word: 'Humid', match: 'Úmido', type: 'weather' },
    { id: 'w13', word: 'Dry', match: 'Seco', type: 'weather' },
    { id: 'w14', word: 'Rain', match: 'Chuva', type: 'weather' },
    { id: 'w15', word: 'Storm', match: 'Tempestade', type: 'weather' },
  ],
  colors: [
    { id: 'c1', word: 'Red', match: 'Vermelho', type: 'colors' },
    { id: 'c2', word: 'Blue', match: 'Azul', type: 'colors' },
    { id: 'c3', word: 'Green', match: 'Verde', type: 'colors' },
    { id: 'c4', word: 'Yellow', match: 'Amarelo', type: 'colors' },
    { id: 'c5', word: 'Orange', match: 'Laranja', type: 'colors' },
    { id: 'c6', word: 'Purple', match: 'Roxo', type: 'colors' },
    { id: 'c7', word: 'Pink', match: 'Rosa', type: 'colors' },
    { id: 'c8', word: 'Brown', match: 'Marrom', type: 'colors' },
    { id: 'c9', word: 'Black', match: 'Preto', type: 'colors' },
    { id: 'c10', word: 'White', match: 'Branco', type: 'colors' },
    { id: 'c11', word: 'Gray', match: 'Cinza', type: 'colors' },
    { id: 'c12', word: 'Gold', match: 'Dourado', type: 'colors' },
    { id: 'c13', word: 'Silver', match: 'Prata', type: 'colors' },
    { id: 'c14', word: 'Beige', match: 'Bege', type: 'colors' },
    { id: 'c15', word: 'Navy', match: 'Azul-marinho', type: 'colors' },
  ],
  numbers: [
    { id: 'n1', word: 'One', match: 'Um', type: 'numbers' },
    { id: 'n2', word: 'Two', match: 'Dois', type: 'numbers' },
    { id: 'n3', word: 'Three', match: 'Três', type: 'numbers' },
    { id: 'n4', word: 'Four', match: 'Quatro', type: 'numbers' },
    { id: 'n5', word: 'Five', match: 'Cinco', type: 'numbers' },
    { id: 'n6', word: 'Six', match: 'Seis', type: 'numbers' },
    { id: 'n7', word: 'Seven', match: 'Sete', type: 'numbers' },
    { id: 'n8', word: 'Eight', match: 'Oito', type: 'numbers' },
    { id: 'n9', word: 'Nine', match: 'Nove', type: 'numbers' },
    { id: 'n10', word: 'Ten', match: 'Dez', type: 'numbers' },
    { id: 'n11', word: 'Eleven', match: 'Onze', type: 'numbers' },
    { id: 'n12', word: 'Twelve', match: 'Doze', type: 'numbers' },
    { id: 'n13', word: 'Thirteen', match: 'Treze', type: 'numbers' },
    { id: 'n14', word: 'Fourteen', match: 'Quatorze', type: 'numbers' },
    { id: 'n15', word: 'Fifteen', match: 'Quinze', type: 'numbers' },
  ],
  time: [
    { id: 'ti1', word: 'Morning', match: 'Manhã', type: 'time' },
    { id: 'ti2', word: 'Afternoon', match: 'Tarde', type: 'time' },
    { id: 'ti3', word: 'Evening', match: 'Noite (início)', type: 'time' },
    { id: 'ti4', word: 'Night', match: 'Noite', type: 'time' },
    { id: 'ti5', word: 'Today', match: 'Hoje', type: 'time' },
    { id: 'ti6', word: 'Tomorrow', match: 'Amanhã', type: 'time' },
    { id: 'ti7', word: 'Yesterday', match: 'Ontem', type: 'time' },
    { id: 'ti8', word: 'Week', match: 'Semana', type: 'time' },
    { id: 'ti9', word: 'Month', match: 'Mês', type: 'time' },
    { id: 'ti10', word: 'Year', match: 'Ano', type: 'time' },
    { id: 'ti11', word: 'Hour', match: 'Hora', type: 'time' },
    { id: 'ti12', word: 'Minute', match: 'Minuto', type: 'time' },
    { id: 'ti13', word: 'Second', match: 'Segundo', type: 'time' },
    { id: 'ti14', word: 'Monday', match: 'Segunda', type: 'time' },
    { id: 'ti15', word: 'Friday', match: 'Sexta', type: 'time' },
  ],
  school: [
    { id: 'sc1', word: 'Teacher', match: 'Professor', type: 'school' },
    { id: 'sc2', word: 'Student', match: 'Estudante', type: 'school' },
    { id: 'sc3', word: 'Book', match: 'Livro', type: 'school' },
    { id: 'sc4', word: 'Pen', match: 'Caneta', type: 'school' },
    { id: 'sc5', word: 'Pencil', match: 'Lápis', type: 'school' },
    { id: 'sc6', word: 'Notebook', match: 'Caderno', type: 'school' },
    { id: 'sc7', word: 'Desk', match: 'Mesa', type: 'school' },
    { id: 'sc8', word: 'Chair', match: 'Cadeira', type: 'school' },
    { id: 'sc9', word: 'Classroom', match: 'Sala de aula', type: 'school' },
    { id: 'sc10', word: 'Exam', match: 'Prova', type: 'school' },
    { id: 'sc11', word: 'Homework', match: 'Dever de casa', type: 'school' },
    { id: 'sc12', word: 'Lesson', match: 'Aula', type: 'school' },
    { id: 'sc13', word: 'Subject', match: 'Matéria', type: 'school' },
    { id: 'sc14', word: 'Grade', match: 'Nota', type: 'school' },
    { id: 'sc15', word: 'School', match: 'Escola', type: 'school' },
  ],
};

export const getShuffledPairs = (mode: MemoryGameMode, count: number = 6): MemoryPair[] => {
  const selected = memoryPairs[mode].slice(0, count);
  const shuffled = [...selected].sort(() => Math.random() - 0.5);
  return shuffled;
};

export const getModeDescription = (mode: MemoryGameMode): string => {
  switch (mode) {
    case 'translation': return 'Match English words with Portuguese translations';
    case 'opposite': return 'Match words with their opposites';
    case 'tense': return 'Match base verbs with their -ing forms';
    case 'animals': return 'Match English animals with Portuguese';
    case 'food': return 'Match food words with translations';
    case 'actions': return 'Match action verbs with translations';
    case 'emotions': return 'Match emotions with translations';
    case 'places': return 'Match places with translations';
    case 'weather': return 'Match weather words with translations';
    case 'colors': return 'Match colors with translations';
    case 'numbers': return 'Match numbers with translations';
    case 'time': return 'Match time words with translations';
    case 'school': return 'Match school vocabulary with translations';
  }
};

export const getModeIcon = (mode: MemoryGameMode): string => {
  switch (mode) {
    case 'translation': return '🌍';
    case 'opposite': return '⚡';
    case 'tense': return '⏰';
    case 'animals': return '🐾';
    case 'food': return '🍔';
    case 'actions': return '🏃';
    case 'emotions': return '😊';
    case 'places': return '📍';
    case 'weather': return '🌤️';
    case 'colors': return '🎨';
    case 'numbers': return '🔢';
    case 'time': return '🕐';
    case 'school': return '📚';
  }
};

export const getModeColor = (mode: MemoryGameMode): string => {
  switch (mode) {
    case 'translation': return 'from-blue-500 to-cyan-500';
    case 'opposite': return 'from-purple-500 to-pink-500';
    case 'tense': return 'from-amber-500 to-orange-500';
    case 'animals': return 'from-green-500 to-emerald-500';
    case 'food': return 'from-orange-500 to-red-500';
    case 'actions': return 'from-blue-500 to-indigo-500';
    case 'emotions': return 'from-yellow-500 to-amber-500';
    case 'places': return 'from-indigo-500 to-purple-500';
    case 'weather': return 'from-sky-500 to-blue-500';
    case 'colors': return 'from-rose-500 to-pink-500';
    case 'numbers': return 'from-teal-500 to-cyan-500';
    case 'time': return 'from-violet-500 to-purple-500';
    case 'school': return 'from-emerald-500 to-green-500';
  }
};