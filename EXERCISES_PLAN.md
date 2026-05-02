# GramPath - Plano de Expansão de Exercícios v4
## Visão Geral
O GramPath possui uma **estrutura completa** para aprendizado de inglês. O objetivo é **adicionar milhares de exercícios** aos módulos existentes.
### Módulos Existentes
| Módulo | Estrutura | Atual | Meta |
|--------|----------|-------|------|
| Find the Error | Packs → Exercises | Expandir |
| Phrasal Verbs | Modos → Packs → Exercises | Expandir |
| Grammar Academy | Cursos → Packs → Exercises | Expandir |
| **Chat Simulator** | Cenarios → Messages → Alternatives | Expandir |
| Grammar Cards | Cards por categoria | Expandir |
| Memory Game | Packs | Expandir |
---# 1. Estruturas Existentes
### Find the Error
```typescript
interface FindTheErrorPack {
  id: string; title: string; description: string; icon: string; difficulty: 'easy' | 'medium' | 'hard'; exercises: FindTheErrorExercise[];
}
interface FindTheErrorExercise {
  id: string; sentence: string; words: string[];
  errors: { wordIndex: number; word: string; correction: string; explanation: string }[];
  points: number;
}
```### Phrasal Verbs
```typescript
interface WordSwapperPack { id: string; title: string; description: string; icon: string; difficulty: 'easy' | 'medium' | 'hard'; verbs: string[]; exercises: WordSwapperExercise[]; }
interface WordSwapperExercise { id: string; sentence: string; words: string[]; correctOrder: number[]; translation: string; }
// Mesma estrutura para contextualMirrorPack e socialGaugePack
```### Grammar Academy
```typescript
interface AcademyPack { id: string; title: string; icon: string; difficulty: 'easy' | 'medium' | 'hard'; exercises: Exercise[]; }
interface Exercise { id: string; type: 'multiple-choice' | 'fill-blank' | 'ordering' | 'rewrite' | 'error'; question: string; options?: string[]; correctAnswer: string; points: number; }
```
### Chat Simulator
```typescript
interface ChatScenario { id: string; title: string; description: string; icon: string; difficulty: 'quick' | 'short' | 'medium' | 'long' | 'book'; messages: ChatMessage[]; xpReward: number; gemReward: number; }
interface ChatMessage { id: string; sender: 'bot' | 'user'; text: string; translation: string; alternatives?: ChatAlternative[]; answer?: string; keywords?: string[]; }
interface ChatAlternative { text: string; type: 'native' | 'acceptable' | 'wrong'; }
// Dificuldades: quick (~3), short (~5), medium (~8), long (~10), book (~15)
// Níveis: easy (múltipla escolha), medium (primeira palavra), hard (escrita livre)
```### Grammar Cards
```typescript
interface GrammarCard { id: string; front: string; back: string; category: 'tenses' | 'prepositions' | 'phrasal-verbs' | 'modals'; }
```### Memory Game
```typescript
interface MemoryPack { id: string; title: string; icon: string; difficulty: 'easy' | 'medium' | 'hard'; pairs: { word: string; image: string; }[]; }
```---# 2. Find the Error - Expansão
**Meta:** 9 packs → 50 packs (+41 × ~30 = ~1.230 exercícios)
### Estrutura
```typescript
// src/data/findTheError..ts
export const findTheErrorPacks: FindTheErrorPack[] = [ ... ];
```
### Pacotes a Adicionar
#### Easy - 5 packs
| ID | Título | Descrição | Exemplo |
|----|-------|----------|--------|
| FTE-E1 | Verb Be - AM | I **am** | student | | FTE-E2 | Verb Be - IS/ARE | He **is** / They **are** |
| FTE-E3 | Do/Does | She **doesn\'t** play |
| FTE-E4 | Verb Tenses | Yesterday I **go** → **went** |
| FTE-E5 | Question Words | **What** you think? |
#### Medium - 15 packs
| ID | Título | Descrição |
|----|-------|----------|-------|
| FTE-M1 | Past Irregular | go → went |
| FTE-M2 | Past Perfect | I **had seen** |
| FTE-M3 | Present Perfect | I **have done** |
| FTE-M4 | Prepositions Time | **on** Monday |
| FTE-M5 | Prepositions Place | **at** school |
| FTE-M6 | Gerund/Infinitive | enjoy **swimming** |
| FTE-M7 | Much/Many | **many** friends |
| FTE-M8 | Adj/Adv | runs **well** |
| FTE-M9 | there/their/they're | **there** book |
| FTE-M10 | your/you're | **you're** welcome |
| FTE-M11 | its/it's | **it's** a problem |
| FTE-M12 | Relative Pronouns | The book **that** |
| FTE-M13 | Wish | I wish I **were** |
| FTE-M14 | Used to | I **used to** |
| FTE-M15 | Count/Uncount | **information** |
#### Hard - 15 packs
| ID | Título | Descrição |
|----|-------|----------|-------|
| FTE-H1 | Subjuntivo | I suggest he **go** |
| FTE-H2 | Artigos Geográficos | New York (sem the) |
| FTE-H3 | Had better | You **had better** |
| FTE-H4 | Passive Voice | **John was killed** |
| FTE-H5 | Reported Speech | he **was** |
| FTE-H6 | Causative | **made him go** |
| FTE-H7 | Inversion | **Not only did he** |
| FTE-H8 | Double Negatives | **none of** |
| FTE-H9 | Conditional 3 | **would have gone** |
| FTE-H10 | Modal Perfect | **can have gone** |
| FTE-H11 | Ellipsis | **have got** |
| FTE-H12 | Word Formation | **important** |
| FTE-H13 | Verb+Prep | depend **on** |
| FTE-H14 | Confused Words | affect/effect |
| FTE-H15 | Omissão de that | (opcional) |
#### Native Writing - 6 packs
| ID | Título | Descrição |
|----|-------|----------|-------|
| FTE-N1 | Run-on Sentences | "I love it. It's great." |
| FTE-N2 | Sentence Starters | Variar |
| FTE-N3 | Very Overuse | "crucial" |
| FTE-N4 | Really/Very | "extremely" |
| FTE-N5 | Filler Words | Remover |
| FTE-N6 | Passive Abuse | Voz ativa |
---# 3. Phrasal Verbs - Expansão
**Meta:** 13 packs → 30 packs (+17 × ~15 = ~255)
### A. Word Swapper - 5 packs novos
| ID | Título | Verbos | Exercícios |
|----|-------|-------|-----------| |
| WS-06 | MORE Actions | blow up, burn down, bring up, carry out | 15 |
| WS-07 | Movement | stand up, sit down, lie down, fall over | 15 |
| WS-08 | Communication | talk back, speak up, tell off, cut in | 15 |
| WS-09 | Money | pay off, pay back, chip in, save up | 15 |
| WS-10 | Daily Life | wake up, lie in, sleep in, pass out | 15 |
### B. Contextual Mirror - 6 packs novos
| ID | Título | Verbos | Exercícios |
|----|-------|-------|-----------| |
| CM-05 | Travel | check in, check out, pick up, drop off | 15 |
| CM-06 | Shopping | try on, pick out, put back, take back | 15 |
| CM-07 | Food | pick up, throw out, eat in, order in | 15 |
| CM-08 | Money | pay off, pay back, chip in, fork out | 15 |
| CM-09 | Tech | log in, log out, back up, sign up | 15 |
| CM-10 | Emotions | cheer up, calm down, freak out, break down | 15 |
### C. Social Gauge - 6 packs novos
| ID | Título | Phrasal | Formal | Exercícios |
|----|-------|---------|--------|-----------| |
| SG-05 | Messaging | text back | respond | 10 |
| SG-06 | Tasks | fill out | complete | 10 |
| SG-07 | Cancel | call off | cancel | 10 |
| SG-08 | Mentions | bring up | mention | 10 |
| SG-09 | Notes | point out | note | 10 |
| SG-10 | Follow-up | follow up | pursue | 10 |
---# 4. Chat Simulator - Expansão
**Meta:** ~20 cenários → 100 cenários (+80 × ~8 mensagens = ~640 mensagens)
### Estrutura
```typescript
// src/data/chats..ts
export const easyQuickChats: ChatScenario[] = [ ... ]; // ~20 existentes
// NOVO: easyShortChats, easyMediumChats, easyLongChats
// NOVO: mediumQuickChats, mediumShortChats, ...
// NOVO: hardQuickChats, hardShortChats, ...
```
### Cenários Existentes
| Categoria | Qtd | Dificuldade | Mensagens |
|-----------|-----|------------|----------|  | hi-*, intro-* | ~8 | quick | ~3 |
| restaurant-* | ~5 | quick/short | ~3-5 |
| store-* | ~4 | quick/short | ~3-5 |
| meeting-* | ~3 | short/medium | ~5-8 |
### Cenários a Adicionar
#### Easy - Quick (~20)
| ID | Título | Mensagens | Tipo |
|----|-------|----------|------|  | greeting-* | 5 | easy |
| shopping-basic-* | 5 | easy |
| directions-* | 5 | easy |
| weather-* | 5 | easy |
#### Easy - Short (~15)
| ID | Título | Mensagens | Tipo |
|----|-------|----------|------|  | cafe-* | 8 | easy |
| pharmacy-* | 8 | easy |
| park-* | 8 | easy |
#### Medium - Quick (~15)
| ID | Título | Mensagens | Tipo |
|----|-------|----------|------|  | business-* | 5 | medium |
| date-* | 5 | medium |
| interview-* | 5 | medium |
#### Medium - Short (~10)
| ID | Título | Mensagens | Tipo |
|----|-------|----------|------|  | negotiation-* | 8 | medium |
| travel-booking-* | 8 | medium |
| complaint-* | 8 | medium |
#### Hard - Quick (~10)
| ID | Título | Mensagens | Tipo |
|----|-------|----------|------|  | debate-* | 5 | hard |
| sensitive-* | 5 | hard |
| technical-* | 5 | hard |
#### Hard - Short (~10)
| ID | Título | Mensagens | Tipo |
|----|-------|----------|------|  | legal-* | 8 | hard |
| financial-* | 8 | hard |
| medical-* | 8 | hard |
### Exemplo de Cenário Novo
```typescript
{ id: 'restaurant-reserve', title: 'Restaurant Reservation', description: 'Reserve a table', icon: '🍽️', difficulty: 'quick', xpReward: 30, gemReward: 1, messages: [ { id: 'r1', sender: 'bot', text: 'Hello, how can I help you?', translation: 'Olá, como posso ajudar?' }, { id: 'r2', sender: 'user', text: 'I\'d like to reserve a table for two, please.', translation: 'Gostaria de reservar uma mesa para dois.', alternatives: [ { text: 'I\'d like to reserve a table for two, please.', type: 'native' }, { text: 'I want reserve one table.', type: 'wrong' }, { text: 'Table for two, please.', type: 'acceptable' } ] }, { id: 'r3', sender: 'bot', text: 'Of course! What time would you like?', translation: 'Claro! Qual horário?' }, { id: 'r4', sender: 'user', text: '8 PM, please.', translation: 'Às 20h, por favor.', answer: '8 PM', keywords: ['8', 'PM', 'eight', 'pm', '8pm', '8pm'] }, { id: 'r5', sender: 'bot', text: 'Perfect! Your table is reserved for two at 8 PM. See you then!', translation: 'Perfeito! Sua mesa está reservada para dois às 20h. Até lá!' } ]}
```### Exemplo de Mensagem Hard (escrita livre)
```typescript
{ id: 'h1', sender: 'bot', text: 'I\'m sorry, but I\'m not sure I understand your concern. Could you explain it in more detail?', translation: '...', answer: '...', keywords: ['explain', 'detail', 'understand', 'concern', 'sorry']}
```---# 5. Grammar Academy - Expansão
**Meta:** ~50 exercícios/pack → ~100 exercícios/pack (+~2.000)
### Estrutura (courses/)
```typescript
// src/data/courses/foundation. ts
export const foundationPacks: FoundationPack[] = [ ... ];
```### Expansão
| Curso | Packs | Atual/pack | Meta/pack | Adicionar |
|-------|-------|-----------|----------|-----------|  | Foundation | 8 | ~20 | ~50 | ~240 |
| Present Tenses | 7 | ~20 | ~50 | ~210 |
| Past Tenses | 3 | ~20 | ~50 | ~90 |
| Future | 3 | ~20 | ~50 | ~90 |
| Prepositions | 3 | ~20 | ~50 | ~90 |
| Pronouns | 2 | ~20 | ~50 | ~60 |
| Conditionals | 2 | ~20 | ~50 | ~60 |
| Modal Verbs | 2 | ~20 | ~50 | ~60 |
| Passive Voice | 2 | ~20 | ~50 | ~60 |
### Integrar Idioms e Natural nos Cursos
```typescript
// Academy Course - Exercise tipo 'idiom'
{ id: 'f-01-30', type: 'multiple-choice', category: 'idiom', question: 'What does "piece of cake" mean?', options: ['A food item', 'Something easy', 'A cake slice', 'Nothing'], correctAnswer: 'Something easy', explanation: '...', points: 15 }
```---# 6. Grammar Cards - Expansão
**Meta:** ~50 → ~300 cards (+250)
### Estrutura
```typescript
interface GrammarCard { id: string; front: string; back: string; category: 'tenses' | 'prepositions' | 'phrasal-verbs' | 'modals' | 'idioms' | 'vocabulary' | 'mistakes'; }
```### Expansão
| Categoria | Atual | Meta | Adicionar |
|-----------|-------|------|----------|  | Tenses | ~15 | ~50 | +35 |
| Prepositions | ~10 | ~30 | +20 |
| Phrasal Verbs | ~10 | ~50 | +40 |
| Modals | ~5 | ~20 | +15 |
| Idioms | 0 | ~50 | +50 |
| Vocabulary | 0 | ~50 | +50 |
| Mistakes BR→US | 0 | ~30 | +30 |
---# 7. Memory Game - Expansão
**Meta:** ~5 packs → ~15 packs (+10)
### Estrutura
```typescript
interface MemoryPack { id: string; title: string; icon: string; difficulty: 'easy' | 'medium' | 'hard'; pairs: { word: string; image: string; }[]; }
```### Packs a Adicionar
| ID | Título | Pares | Dificuldade |
|----|-------|------|------------|----------|  | MG-06 | Animals | 20 | Easy |
| MG-07 | Food | 20 | Easy |
| MG-08 | Actions | 20 | Medium |
| MG-09 | Emotions | 20 | Medium |
| MG-10 | Places | 20 | Easy |
| MG-11 | Weather | 20 | Easy |
| MG-12 | Colors | 20 | Easy |
| MG-13 | Numbers | 20 | Easy |
| MG-14 | Time | 20 | Medium |
| MG-15 | School | 20 | Medium |
---# 8. Ordem de Implementação
### Fase 1: Find the Error (2 semanas)  - [ ] 41 novos packs- [ ] ~1.230 exercícios
### Fase 2: Phrasal Verbs (2 semanas)  - [ ] 17 novos packs
- [ ] ~255 exercícios
### Fase 3: Chat Simulator (3 semanas)  - [ ] 80 novos cenários
- [ ] ~640 mensagens
### Fase 4: Grammar Academy (3 semanas)  - [ ] ~2.000 exercícios novos
### Fase 5: Grammar Cards (2 semanas)  - [ ] 250 novos cards
### Fase 6: Memory Game (1 semana)  - [ ] 10 novos packs
---# 9. Resumo Total
| Módulo | Atual | Meta | Adicionar |
|--------|-------|------|----------|  | Find the Error | 9 | 50 | +1.230 |
| Phrasal Verbs | 13 | 30 | +255 |
| Chat Simulator | ~20 | ~100 | +640 |
| Grammar Academy | ~120 | ~120 | +2.000 |
| Grammar Cards | ~50 | ~300 | +250 |
| Memory Game | ~5 | ~15 | +200 |
| **TOTAL** | **~220** | **~610** | **~4.575** |
---# 10. Formato de Dados
### Find the Error
```typescript
{ id: 'fte-m1-01', sentence: 'Yesterday I **goed** to the store.', words: ['Yesterday', 'I', 'goed', 'to', 'the', 'store'], errors: [{ wordIndex: 2, word: 'goed', correction: 'went', explanation: 'Past tense of "go" is "went".' }], points: 10 }
```
### Phrasal Verbs
```typescript
{ id: 'ws-06-01', sentence: 'Vou pegar você na estação', words: ['I', 'will', 'pick', 'you', 'up', 'at', 'the', 'station'], correctOrder: [0, 1, 2, 3, 4, 5, 6, 7], translation: 'I will pick you up at the station' }
```
### Chat Simulator
```typescript
{ id: 'restaurant-reserve', title: 'Restaurant Reservation', icon: '🍽️', difficulty: 'quick', messages: [{ id: 'r1', sender: 'bot', text: 'Hello!', translation: 'Olá!' }, { id: 'r2', sender: 'user', text: 'Table for two, please.', translation: '...', alternatives: [{ text: 'Table for two, please.', type: 'native' }] }], xpReward: 30, gemReward: 1 }
```---# 11. Prioridades
1. **Alta**: Find the Error (+41 packs)
2. **Alta**: Phrasal Verbs (+17 packs)
3. **Alta**: Chat Simulator (+80 cenários)
4. **Alta**: Grammar Academy (+2.000)5. **Média**: Grammar Cards (+250)
6. **Baixa**: Memory Game (+10)
---*Documento: GramPath Exercises Plan v4*