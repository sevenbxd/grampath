# GramPath - English Grammar Learning App

## Visão Geral

**GramPath** é uma plataforma de aprendizado de inglês focada em gramática para escrita, com gamificação estilo Duolingo. O diferencial está na produção de texto com feedback detalhado usando correção gramatical via IA.

O app inclui:
- **Walkthrough** - Caminho de aprendizado com 6 steps
- **Grammar Academy** - Cursos aprofundados de gramática com exercícios e provas
- **Daily Challenge** - Desafio diário
- **Memory Game** - Jogo da memória
- **Grammar Cards** - Flashcards
- **Find the Error** - Encontre erros gramaticais
- **Phrasal Verbs** - Verbos frasais com 3 modos
- **Chat Simulator** - Simulador de conversas
- **Gems Store** - Loja de personalização

---

## Stack Tecnológica

- **Next.js 16** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Estilização utility-first
- **Zustand** - Gerenciamento de estado com persistência localStorage
- **Framer Motion** - Animações e transições
- **canvas-confetti** - Efeitos de celebração
- **NextAuth.js** - Autenticação (preparado)
- **LanguageTool API** - Correção gramatical

---

## Estrutura do Projeto

```
grampath/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Home (walkthrough)
│   │   ├── layout.tsx          # Layout raiz com providers
│   │   ├── globals.css         # Estilos globais + variáveis CSS
│   │   ├── not-found.tsx      # Página 404 estilizada
│   │   ├── profile/           # Página de perfil
│   │   ├── achievements/      # Página de conquistas
│   │   ├── academy/           # Grammar Academy
│   │   ├── store/            # Gems Store
│   │   ├── find-the-error/    # Find the Error
│   │   ├── phrasal-verbs/     # Phrasal Verbs
│   │   ├── chat-simulator/    # Chat Simulator
│   │   ├── grammar-cards/     # Grammar Cards
│   │   ├── memory-game/       # Memory Game
│   │   ├── daily/             # Daily Challenge
│   │   ├── auth/signin/      # Login
│   │   ├── walkthrough/[stepId]/  # Skills do step
│   │   ├── skill/[stepId]/[skillId]/  # Exercícios
│   │   └── api/
│   │       ├── grammar/check/    # API de correção gramatical
│   │       └── auth/[...nextauth]/  # NextAuth
│   ├── components/
│   │   ├── ui/                # Button, Card, ProgressBar, SkillCard
│   │   ├── layout/             # Header, Footer
│   │   ├── path/              # Walkthrough, SkillList
│   │   ├── exercises/         # MultipleChoice, FillBlank, Writing
│   │   ├── effects/          # Celebration, AnimatedFeedback
│   │   ├── providers/         # AuthProvider
│   │   └── onboarding/        # Tutorial interativo
│   ├── data/
│   │   ├── curriculum/       # Definição de steps e skills
│   │   ├── courses/          # Exercise packs separados por curso
│   │   │   ├── foundation.ts
│   │   │   ├── presentTenses.ts
│   │   │   ├── pastTenses.ts
│   │   │   ├── futureTenses.ts
│   │   │   ├── prepositions.ts
│   │   │   └── advancedCourses.ts
│   │   ├── academy.ts        # Interfaces + dados dos cursos
│   │   ├── phrasalVerbs.ts  # Dados dos verbos frasais
│   │   ├── findTheError.ts # Dados dos exercícios
│   │   └── chats.ts        # Dados das conversas
│   ├── store/
│   │   └── progressStore.ts  # Estado global Zustand
│   ├── lib/
│   │   └── grammarChecker.ts # Serviço de grammar check
│   └── types/
│       └── index.ts           # Interfaces TypeScript
├── .env.example              # Variáveis de ambiente
├── package.json
└── README.md
```

---

## Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Home com walkthrough visual |
| `/walkthrough/[stepId]` | Lista de skills do step |
| `/skill/[stepId]/[skillId]` | Exercícios da skill |
| `/profile` | Perfil + estatísticas + customização |
| `/achievements` | Sistema de conquistas |
| `/academy` | Grammar Academy |
| `/store` | Loja de gems + customização |
| `/find-the-error` | Encontre erros gramaticais |
| `/phrasal-verbs` | Verbos frasais |
| `/chat-simulator` | Simulador de Chat |
| `/grammar-cards` | Flashcards de gramática |
| `/memory-game` | Jogo da memória |
| `/daily` | Desafio diário |
| `/auth/signin` | Login |
| `/not-found` | Página 404 |

---

## Caminho de Aprendizado (Walkthrough)

### Step 1: Foundation
- Subject-Verb Agreement
- Be Verb (am/is/are)
- Present Simple
- Articles (a/an/the)
- Sentence Writing

### Step 2: Present Tenses
- Present Simple
- Present Continuous
- Pronouns
- Adverbs

### Step 3: Past Tenses
- Past Simple
- Past Continuous
- Adjectives

### Step 4: Future & More
- Future (will)
- Future (going to)
- Prepositions
- Comparatives

### Step 5: Intermediate Grammar
- Conditionals
- Modal Verbs
- Have/Has

### Step 6: Advanced Writing
- Passive Voice
- Paragraph Writing
- Essay Writing

---

## Grammar Academy

### Cursos Disponíveis

Agora são **20 cursos** com exercícios separados em arquivos individuais:

| Curso | Arquivo | Exercise Packs |
|-------|---------|----------------|
| Foundation | `courses/foundation.ts` | 8 packs + quiz |
| Present Tenses | `courses/presentTenses.ts` | 7 packs + quiz |
| Past Tenses | `courses/pastTenses.ts` | 3 packs + quiz |
| Future & More | `courses/futureTenses.ts` | 3 packs + quiz |
| Prepositions | `courses/prepositions.ts` | 3 packs |
| Pronouns | `courses/prepositions.ts` | 2 packs |
| Conditional Sentences | `courses/prepositions.ts` | 2 packs |
| Modal Verbs | `courses/prepositions.ts` | 2 packs |
| Comparisons | `courses/prepositions.ts` | 2 packs |
| Passive Voice | `courses/advancedCourses.ts` | 2 packs |
| Reported Speech | `courses/advancedCourses.ts` | 2 packs |
| Complex Sentences | `courses/advancedCourses.ts` | 2 packs |
| Paragraph Writing | `courses/advancedCourses.ts` | 2 packs |
| Essay Writing | `courses/advancedCourses.ts` | 2 packs |
| Advanced Grammar | `courses/advancedCourses.ts` | 2 packs |
| Business Writing | `courses/advancedCourses.ts` | 2 packs |
| Creative Writing | `courses/advancedCourses.ts` | 2 packs |

### Sistema de Desbloqueio

- **Step 1** → Foundation (já desbloqueado)
- **Step 2** → Present Tenses (após completar step 1)
- **Step 3** → Future & More (após completar step 2)
- **Step 4** → Prepositions, Pronouns (após completar step 3)
- **Step 5** → Conditional, Modal Verbs (após completar step 4)
- **Step 6** → Todos os outros 14 cursos desbloqueiam juntos

### Exercise Packs

Cada curso possui múltiplos **Exercise Packs** com questões diferentes:
- **Filtro**: All / Incomplete / Complete
- **Progresso salvo no localStorage**
- **Pontos por exercício**
- **Checkmark quando pack completo**

### Tipos de Exercícios

1. **Multiple Choice** - Múltipla escolha
2. **Fill in the Blank** - Completar lacunas
3. **Ordering** - Organizar palavras
4. **Rewrite** - Reescrever frase

### Sistema de Quiz

- Timer configurável por curso
- Passing score (70%)
- Recompensas: XP + Gems
- Feedback detalhado por questão

---

## Find the Error

### Conceito

Encontre erros gramaticais nas frases. Selecione as palavras incorretas e ganhe XP.

### Estrutura

- **9 packs** com 30 exercícios cada
- **Filtros de dificuldade**: Easy / Medium / Hard
- **Seleção múltipla** de palavras erradas
- **Progresso salvo** no localStorage
- **Recompensas**: XP + 10 gems por pack completo

### Packs Disponíveis

| Pack | Dificuldade | Erros |
|------|------------|-------|
| Basic Mistakes | Easy | Artigos, verbos simples |
| Subject-Verb | Easy | Concordância |
| Tense Errors | Medium | Tempos verbais |
| Prepositions | Medium | Preposições |
| Word Order | Medium | Ordem das palavras |
| Articles | Medium | Artigos |
| Complex Errors | Hard | Orações relativas |
| Advanced Mistakes | Hard | Voz passiva |
| Expert Level | Hard | Estruturas complexas |

---

## Phrasal Verbs

### Conceito

Aprenda verbos frasais em inglês com 3 modos diferentes.

### Estrutura

**Modo → Packs → Exercícios**

Cada modo tem múltiplos packs com verbos frasais diferentes.

### Modos Disponíveis

#### Word Swapper (🔀 +15 XP)
Arraste/selecione as palavras na ordem correta.

| Pack | Dificuldade | Verbos |
|------|------------|-------|
| Basic Actions | Easy | Turn on/off, Put out, Look at |
| Care & Support | Easy | Look after, Pick up |
| Work & Business | Medium | Set up, Go over, Find out |
| Social & Meeting | Hard | Hang out, Come across, Run into |
| Travel & Movement | Medium | Take off, Pick up |

#### Contextual Mirror (🪞 +20 XP)
Escolha o verbo frasal correto para o contexto.

| Pack | Dificuldade | Verbos |
|------|------------|-------|
| Basic Actions | Easy | Turn on/off, Put out, Look at |
| Work & Business | Medium | Set up, Go over, Find out |
| Social & Emotions | Hard | Get over, Hang out, Come across |
| Travel & Movement | Medium | Take off, Pick up, Drop off |

#### Social Gauge (📊 +25 XP)
Escolha entre expressão formal ou casual.

| Pack | Dificuldade | Verbos |
|------|------------|-------|
| Email Communication | Easy | Go over, Turn off, Put off |
| WhatsApp Chat | Easy | Expressões casuais |
| Meeting Context | Medium | Contexto profissional |
| Informal Chat | Hard | Expressões muito casuais |

### Funcionalidades

- **Progresso salvo** no localStorage
- **XP variável** por modo (+15 a +25)
- **Recompensa**: 10 gems por pack completo
- **Animações** de feedback

---

## Gems Store

### Conceito

Compre customizações para seu perfil usando gems ganhas no app.

### Itens Disponíveis

#### Ícones de Perfil (16 emojis)

Emojis para usar como avatar: 😀 😎 🤓 😍 🥳 😇 😎 😏 🤩 😺 🦊 🐱 🐶 🦁 🐼 🐨

#### Frames Animados (13)

Frames com animações CSS e emojis:
- 🌈 **Rainbow** - Arco-íris
- 🔥 **Fire** - Fogo
- ❄️ **Ice** - Gelo
- ⚡ **Lightning** - Relâmpago
- 🌟 **Star** - Estrela
- 🎄 **Christmas** - 🎁🎄 Natal
- 🎃 **Halloween** - 🕯️🕷️ Halloween
- 🎆 **Fireworks** - Fogos de artifício
- 💎 **Diamond** - Diamante
- 💚 **Emerald** - Esmeralda
- 🟡 **Gold** - Ouro
- 🔷 **Sapphire** - Safira
- 💜 **Amethyst** - Ametista

### Sistema

- Todos os itens começam **desbloqueados** para teste
- **Sync** automático entre Header, Profile e Store
- Evento customizado `avatar-changed` para atualização em tempo real

---

## Chat Simulator

### Conceito

Pratique conversas em inglês de forma interativa através de um chat simulado.

### Níveis de Dificuldade

| Nível | Tipo | Descrição |
|-------|------|----------|
| Fácil | Múltipla escolha | Escolha entre 3 opções de resposta |
| Médio | Fill in blank | Complete a frase com a palavra inicial |
| Difícil | Escrita livre | Escreva a resposta completa |

### Comprimentos de Conversa

| Comprimento | Mensagens | Descrição |
|------------|----------|----------|
| Quick | ~3 | Conversa rápida |
| Short | ~5 | Conversa curta |
| Medium | ~8 | Conversa média |
| Long | ~10 | Conversa longa |
| Book | ~15 | Conversa muito longa |

### Funcionalidades

- Keywords únicos por mensagem (não global)
- Resposta em português no nível difícil
- Animações "typing..." para imersão
- Sistema de hints no nível difícil
- Alternativas aceitas ocultas
- Feedback visual: native vs acceptable
- Recompensas: XP + Gems

---

## Sistema de Gamificação

### Conquistas (13 achievements)

| ID | Nome | Descrição | Requisito | Tipo |
|----|------|-----------|------------|------|
| first_step | First Steps | Complete your first step | 1 | steps |
| streak_3 | On Fire | 3 day streak | 3 | streak |
| streak_7 | Week Warrior | 7 day streak | 7 | streak |
| streak_30 | Monthly Master | 30 day streak | 30 | streak |
| xp_100 | Getting Started | Earn 100 XP | 100 | xp |
| xp_500 | XP Hunter | Earn 500 XP | 500 | xp |
| xp_1000 | XP Champion | Earn 1000 XP | 1000 | xp |
| xp_5000 | XP Legend | Earn 5000 XP | 5000 | xp |
| lessons_5 | Quick Learner | Master 5 skills | 5 | lessons |
| lessons_10 | Dedicated Student | Master 10 skills | 10 | lessons |
| lessons_20 | Grammar Expert | Master 20 skills | 20 | lessons |
| perfect_1 | Perfectionist | Get perfect score | 1 | perfect |
| all_steps | Path Walker | Complete all 6 steps | 6 | steps |

### Estado Global (Zustand Store)

O `progressStore` gerencia:
- `streak` - Dias consecutivos de prática
- `totalXP` - XP total acumulado
- `gems` - Joias (moeda do app)
- `currentWalkthroughStep` - Step atual
- `walkthroughProgress` - Progresso por step
- `skillMastery` - Domínio por skill (0-100%)
- `achievements` - Conquistas desbloqueadas
- `dailyStats` - Estatísticas diárias
- `hasSeenOnboarding` - Flag para tutorial
- `equippedIcon` - Ícone do perfil
- `equippedFrame` - Frame do perfil

---

## Correção Gramatical

### API LanguageTool

**Endpoint:** `/api/grammar/check`

**Método:** POST

**Body:**
```json
{
  "text": "She go to school yesterday.",
  "language": "en-US"
}
```

**Response:**
```json
{
  "text": "She go to school yesterday.",
  "errors": [
    {
      "message": "Possible grammar error",
      "shortMessage": "Grammar error",
      "offset": 4,
      "length": 2,
      "replacements": ["goes"],
      "type": "grammar",
      "rule": { "id": "AGREEMENT", "category": "AGREEMENT" }
    }
  ],
  "matches": 1
}
```

---

## Design Visual

### Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Verde Primário | `#22c55e` | Success, primary actions |
| Laranja | `#f97316` | Active, warning, streak |
| Azul | `#3b82f6` | Accent, secondary |
| Roxo | `#8b5cf6` | Upper Intermediate |
| Rosa | `#ec4899` | Advanced |
| Cinza Escuro | `#1e293b` | Texto primário |
| Cinza | `#64748b` | Texto secundário |
| Cinza Claro | `#e2e8f0` | Bordas, backgrounds |

### Componentes UI

- **Card** - Com hover, glow effect, gradient border
- **SkillCard** - Especializado para skills com mastery
- **Button** - Primary, Secondary, Outline, Ghost
- **ProgressBar** - Barra de progresso animadas

### Efeitos Visuais

- Gradientes em backgrounds e botões
- Cards com glow effect
- Animações framer-motion
- Confetti para celebração
- Feedback modal animado

---

## Autenticação (Preparado)

### Configuração

1. Criar projeto no [Supabase](https://supabase.com)
2. Criar credenciais no [Google Cloud Console](https://console.cloud.google.com)
3. Preencher `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
GOOGLE_CLIENT_ID=your_id
GOOGLE_CLIENT_SECRET=your_secret
NEXTAUTH_SECRET=your_secret
```

4. Executar SQL do `.env.example` no Supabase

---

## Como Rodar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build

# Rodar produção
npm start
```

Acesse: http://localhost:3000

---

## Funcionalidades Implementadas

- [x] Walkthrough visual com 6 steps
- [x] Sistema de skills por step
- [x] Exercícios (multiple choice, fill blank, writing)
- [x] Correção gramatical via LanguageTool API
- [x] Sistema de XP e níveis
- [x] Sistema de streak diário
- [x] Sistema de gems
- [x] 13 conquistas achievements
- [x] Perfil com estatísticas
- [x] Progresso semanal visualizado
- [x] Tutorial/onboarding interativo
- [x] Página 404 estilizada
- [x] Animações framer-motion
- [x] Efeitos confetti
- [x] Design responsivo
- [x] Header com navegação
- [x] Preparado para NextAuth
- [x] Grammar Academy (20 cursos)
- [x] Exercise packs separados por arquivo
- [x] Exercícios por seção nos cursos Academy
- [x] Quiz/Prova final por curso com timer e recompensas
- [x] Sistema de exercícios: multiple-choice, fill-blank, ordering, rewrite
- [x] Filtro All/Incomplete/Complete nos packs
- [x] Progresso salvo no localStorage
- [x] Chat Simulator com 5 níveis de dificuldade
- [x] Keywords únicos por mensagem
- [x] Find the Error com 9 packs
- [x] Phrasal Verbs com 3 modos
- [x] Packs dentro de cada modo Phrasal Verbs
- [x] Gems Store com customização
- [x] Perfis de emoji (16)
- [x] Frames animados (13)
- [x] Sync entre Profile, Header e Store

---

## Adicionar Novos Exercícios

Para adicionar exercícios a um curso, edite o arquivo correspondente em `src/data/courses/`:

```typescript
// Exemplo:Adicionar novo pack ao foundation.ts
{
  id: 'new-pack',
  title: 'New Pack Title',
  description: 'Description',
  icon: '📝',
  exercises: [
    { id: 'ex-1', sectionId: '...', type: 'multiple-choice', question: '...', options: [...], correctAnswer: '...', points: 10 }
  ]
}
```

Para Phrasal Verbs, edite `src/data/phrasalVerbs.ts`:

```typescript
export const wordSwapperPacks: WordSwapperPack[] = [
  {
    id: 'ws-new',
    title: 'New Pack',
    description: 'Description',
    icon: '🔥',
    difficulty: 'medium',
    verbs: ['Verb1', 'Verb2'],
    exercises: [
      { id: 'ws-1', sentence: '...', words: [...], correctOrder: [...], translation: '...' }
    ]
  }
];
```

---

## Próximos Passos

1. **Mais exercícios** - Continuar adicionando mais exercise packs
2. **Ativar autenticação** - Configurar Supabase para salvar progresso na nuvem
3. **Mais features** - Sistema de leaderboard, sons
4. **Melhorias UX** - Tooltips, tutorial mais interativo

---

## Licença

MIT