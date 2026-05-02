import { ExercisePack } from '../academy';

export const reportedSpeechExercisePacks: ExercisePack[] = [
  {
    id: 'reported-speech-1',
    title: 'Reported Speech Basics',
    description: 'Practice said and told',
    icon: '🗣️',
    exercises: [
      { id: 'rep-ex1', sectionId: 'reported', type: 'multiple-choice', question: 'She ___ she was tired.', translation: 'She said she was tired.', options: ['said', 'told', 'said to', 'tell'], correctAnswer: 'said', points: 10 },
      { id: 'rep-ex2', sectionId: 'reported', type: 'multiple-choice', question: 'He ___ me the truth.', translation: 'He told me the truth.', options: ['said', 'told', 'say', 'tell'], correctAnswer: 'told', points: 10 }
    ]
  },
  {
    id: 'reported-questions-1',
    title: 'Reported Questions',
    description: 'Practice question reporting',
    icon: '❓',
    exercises: [
      { id: 'repq-ex1', sectionId: 'reported', type: 'multiple-choice', question: 'He asked where ___.', translation: 'He asked where I lived.', options: ['I live', 'did I live', 'do I live', 'living'], correctAnswer: 'I lived', points: 10 },
      { id: 'repq-ex2', sectionId: 'reported', type: 'multiple-choice', question: 'She wanted to know when ___.', translation: 'She wanted to know when the movie started.', options: ['the movie starts', 'the movie started', 'did the movie start', 'starting'], correctAnswer: 'the movie started', points: 10 }
    ]
  },
  {
    id: 'reported-statements-1',
    title: 'Reported Statements',
    description: 'Practice reporting statements',
    icon: '📝',
    exercises: [
      { id: 'rep-stat-1', sectionId: 'reported', type: 'multiple-choice', question: '"I love coffee," she said → She said ___ coffee.', translation: '"I love coffee," she said → She said she loved coffee.', options: ['she loves', 'she loved', 'she love', 'loving'], correctAnswer: 'she loved', points: 10 },
      { id: 'rep-stat-2', sectionId: 'reported', type: 'multiple-choice', question: '"I am studying," he said → He said ___ .', translation: '"I am studying," he said → He said he was studying.', options: ['he is studying', 'he was studying', 'he studies', 'studying'], correctAnswer: 'he was studying', points: 10 },
      { id: 'rep-stat-3', sectionId: 'reported', type: 'multiple-choice', question: '"I will come," they said → They said ___ .', translation: '"I will come," they said → They said they would come.', options: ['they will come', 'they would come', 'they come', 'coming'], correctAnswer: 'they would come', points: 10 },
      { id: 'rep-stat-4', sectionId: 'reported', type: 'multiple-choice', question: '"I have finished," she said → She said ___ .', translation: '"I have finished," she said → She said she had finished.', options: ['she has finished', 'she had finished', 'she finished', 'finishing'], correctAnswer: 'she had finished', points: 10 },
      { id: 'rep-stat-5', sectionId: 'reported', type: 'multiple-choice', question: '"I saw a movie," he said → He said ___ a movie.', translation: '"I saw a movie," he said → He said he had seen a movie.', options: ['he saw', 'he had seen', 'he sees', 'seeing'], correctAnswer: 'he had seen', points: 10 },
      { id: 'rep-stat-6', sectionId: 'reported', type: 'multiple-choice', question: '"I can swim," she said → She said ___ .', translation: '"I can swim," she said → She said she could swim.', options: ['she can swim', 'she could swim', 'she swimming', 'swim'], correctAnswer: 'she could swim', points: 10 },
      { id: 'rep-stat-7', sectionId: 'reported', type: 'multiple-choice', question: '"I must go," they said → They said ___ .', translation: '"I must go," they said → They said they had to go.', options: ['they must go', 'they had to go', 'they go', 'going'], correctAnswer: 'they had to go', points: 10 },
      { id: 'rep-stat-8', sectionId: 'reported', type: 'multiple-choice', question: '"I was busy," he said → He said ___ .', translation: '"I was busy," he said → He said he was busy.', options: ['he is busy', 'he was busy', 'he busy', 'being busy'], correctAnswer: 'he was busy', points: 10 },
      { id: 'rep-stat-9', sectionId: 'reported', type: 'multiple-choice', question: "\"I don't like it,\" she said → She said ___ .", translation: "\"I don't like it,\" she said → She said she did not like it.", options: ['she not like', 'she does not like', 'she did not like', 'not liking'], correctAnswer: 'she did not like', points: 10 },
      { id: 'rep-stat-10', sectionId: 'reported', type: 'multiple-choice', question: '"I want to leave," they said → They said ___ .', translation: '"I want to leave," they said → They said they wanted to leave.', options: ['they want to leave', 'they wanted to leave', 'they wanting', 'want leave'], correctAnswer: 'they wanted to leave', points: 10 }
    ]
  },
  {
    id: 'reported-commands-1',
    title: 'Reported Commands',
    description: 'Practice reporting commands',
    icon: '📢',
    exercises: [
      { id: 'rep-cmd-1', sectionId: 'reported', type: 'multiple-choice', question: '"Close the door," he said → He told me ___ the door.', translation: '"Close the door," he said → He told me to close the door.', options: ['close', 'to close', 'closing', 'closed'], correctAnswer: 'to close', points: 10 },
      { id: 'rep-cmd-2', sectionId: 'reported', type: 'multiple-choice', question: `"Don't talk," she said → She told us ___ .`, translation: `"Don't talk," she said → She told us not to talk.`, options: ['not talk', 'to not talk', 'not to talk', 'no talk'], correctAnswer: 'not to talk', points: 10 },
      { id: 'rep-cmd-3', sectionId: 'reported', type: 'multiple-choice', question: '"Call me later," they said → They asked me ___ later.', translation: '"Call me later," they said → They asked me to call later.', options: ['call', 'to call', 'calling', 'called'], correctAnswer: 'to call', points: 10 },
      { id: 'rep-cmd-4', sectionId: 'reported', type: 'multiple-choice', question: '"Be careful," she said → She warned me ___ .', translation: '"Be careful," she said → She warned me to be careful.', options: ['be', 'to be', 'being', 'been'], correctAnswer: 'to be', points: 10 },
      { id: 'rep-cmd-5', sectionId: 'reported', type: 'multiple-choice', question: `"Don't worry," he said → He told me ___ .`, translation: `"Don't worry," he said → He told me not to worry.`, options: ['not worry', 'to not worry', 'not to worry', 'no worry'], correctAnswer: 'not to worry', points: 10 },
      { id: 'rep-cmd-6', sectionId: 'reported', type: 'multiple-choice', question: '"Read the book," they said → They told me ___ the book.', translation: '"Read the book," they said → They told me to read the book.', options: ['read', 'to read', 'reading', 'readed'], correctAnswer: 'to read', points: 10 },
      { id: 'rep-cmd-7', sectionId: 'reported', type: 'multiple-choice', question: `"Don't be late," she said → She told us ___ .`, translation: `"Don't be late," she said → She told us not to be late.`, options: ['not be late', 'to not be late', 'not to be late', 'no be late'], correctAnswer: 'not to be late', points: 10 },
      { id: 'rep-cmd-8', sectionId: 'reported', type: 'multiple-choice', question: '"Help me," he said → He asked me ___ .', translation: '"Help me," he said → He asked me to help him.', options: ['help', 'to help', 'helping', 'helped'], correctAnswer: 'to help', points: 10 },
      { id: 'rep-cmd-9', sectionId: 'reported', type: 'multiple-choice', question: `"Don't forget it," they said → They reminded me ___ .`, translation: `"Don't forget it," they said → They reminded me not to forget it.`, options: ['not forget', 'to not forget', 'not to forget', 'no forget'], correctAnswer: 'not to forget', points: 10 },
      { id: 'rep-cmd-10', sectionId: 'reported', type: 'multiple-choice', question: '"Wait here," she said → She told me ___ .', translation: '"Wait here," she said → She told me to wait here.', options: ['wait', 'to wait', 'waiting', 'waited'], correctAnswer: 'to wait', points: 10 }
    ]
  },
  {
    id: 'reported-time-1',
    title: 'Reported Time Changes',
    description: 'Practice time expression changes',
    icon: '⏰',
    exercises: [
      { id: 'rep-time-1', sectionId: 'reported', type: 'multiple-choice', question: '"I saw her today," he said → He said he saw her ___.', translation: '"I saw her today," he said → He said he saw her that day.', options: ['today', 'that day', 'yesterday', 'tomorrow'], correctAnswer: 'that day', points: 10 },
      { id: 'rep-time-2', sectionId: 'reported', type: 'multiple-choice', question: '"I will come tomorrow," she said → She said she would come ___.', translation: '"I will come tomorrow," she said → She said she would come the next day.', options: ['tomorrow', 'the next day', 'today', 'next day'], correctAnswer: 'the next day', points: 10 },
      { id: 'rep-time-3', sectionId: 'reported', type: 'multiple-choice', question: '"I am here now," they said → They said they were there ___.', translation: '"I am here now," they said → They said they were there then.', options: ['now', 'then', 'today', 'already'], correctAnswer: 'then', points: 10 },
      { id: 'rep-time-4', sectionId: 'reported', type: 'multiple-choice', question: '"I came yesterday," he said → He said he had come ___.', translation: '"I came yesterday," he said → He said he had come the day before.', options: ['yesterday', 'the day before', 'last day', 'ago'], correctAnswer: 'the day before', points: 10 },
      { id: 'rep-time-5', sectionId: 'reported', type: 'multiple-choice', question: `"I'll see you next week," she said → She said she would see me ___.`, translation: `"I'll see you next week," she said → She said she would see me the following week.`, options: ['next week', 'the following week', 'this week', 'week after'], correctAnswer: 'the following week', points: 10 },
      { id: 'rep-time-6', sectionId: 'reported', type: 'multiple-choice', question: '"I was here last month," they said → They said they ___ there ___.', translation: '"I was here last month," they said → They said they had been there the previous month.', options: ['were...last month', 'had been...the previous month', 'was...last month', 'are...then'], correctAnswer: 'had been...the previous month', points: 10 },
      { id: 'rep-time-7', sectionId: 'reported', type: 'multiple-choice', question: '"Call me tonight," he said → He told me to call him ___.', translation: '"Call me tonight," he said → He told me to call him that night.', options: ['tonight', 'that night', 'now', 'later'], correctAnswer: 'that night', points: 10 },
      { id: 'rep-time-8', sectionId: 'reported', type: 'multiple-choice', question: '"She arrived this morning," she said → She said she ___ ___ that morning.', translation: '"She arrived this morning," she said → She said she had arrived that morning.', options: ['arrived...this morning', 'had arrived...that morning', 'arrives...morning', 'arriving...'], correctAnswer: 'had arrived...that morning', points: 10 },
      { id: 'rep-time-9', sectionId: 'reported', type: 'multiple-choice', question: `"I'll be back in three days," he said → He said he would be back ___.`, translation: `"I'll be back in three days," he said → He said he would be back in three days.`, options: ['in three days', 'after three days', 'three days later', 'in three days time'], correctAnswer: 'in three days', points: 10 },
      { id: 'rep-time-10', sectionId: 'reported', type: 'multiple-choice', question: '"This is my last week," she said → She said that was ___.', translation: '"This is my last week," she said → She said that was her last week.', options: ['this week', 'that week', 'the last week', 'next week'], correctAnswer: 'that week', points: 10 }
    ]
  },
  {
    id: 'reported-tense-backshift-1',
    title: 'Tense Backshift',
    description: 'Tense changes in reported speech',
    icon: '🔄',
    exercises: [
      { id: 'rep-back-1', sectionId: 'reported', type: 'multiple-choice', question: 'She said "I am busy" → She said ___ busy.', translation: 'She said "I am busy" → She said she was busy.', options: ['she is', 'she was', 'she am', 'being'], correctAnswer: 'she was', points: 10 },
      { id: 'rep-back-2', sectionId: 'reported', type: 'multiple-choice', question: 'He said "I work here" → He said he ___ here.', translation: 'He said "I work here" → He said he worked here.', options: ['work', 'works', 'worked', 'working'], correctAnswer: 'worked', points: 10 },
      { id: 'rep-back-3', sectionId: 'reported', type: 'multiple-choice', question: 'They said "We know the answer" → They said they ___ the answer.', translation: 'They said "We know the answer" → They said they knew the answer.', options: ['know', 'knew', 'known', 'knowing'], correctAnswer: 'knew', points: 10 },
      { id: 'rep-back-4', sectionId: 'reported', type: 'multiple-choice', question: 'She said "I saw him" → She said she ___ him.', translation: 'She said "I saw him" → She said she had seen him.', options: ['saw', 'seen', 'had seen', 'see'], correctAnswer: 'had seen', points: 10 },
      { id: 'rep-back-5', sectionId: 'reported', type: 'multiple-choice', question: 'He said "I will call" → He said he ___ call.', translation: 'He said "I will call" → He said he would call.', options: ['will', 'would', 'shall', 'can'], correctAnswer: 'would', points: 10 },
      { id: 'rep-back-6', sectionId: 'reported', type: 'multiple-choice', question: 'They said "We can help" → They said they ___ help.', translation: 'They said "We can help" → They said they could help.', options: ['can', 'could', 'will', 'would'], correctAnswer: 'could', points: 10 },
      { id: 'rep-back-7', sectionId: 'reported', type: 'multiple-choice', question: 'She said "I must go" → She said she ___ go.', translation: 'She said "I must go" → She said she had to go.', options: ['must', 'had to', 'should', 'could'], correctAnswer: 'had to', points: 10 },
      { id: 'rep-back-8', sectionId: 'reported', type: 'multiple-choice', question: 'He said "I may come" → He said he ___ come.', translation: 'He said "I may come" → He said he might come.', options: ['may', 'might', 'can', 'could'], correctAnswer: 'might', points: 10 },
      { id: 'rep-back-9', sectionId: 'reported', type: 'multiple-choice', question: 'They said "We should wait" → They said they ___ wait.', translation: 'They said "We should wait" → They said they should wait.', options: ['should', 'would', 'must', 'could'], correctAnswer: 'should', points: 10 },
      { id: 'rep-back-10', sectionId: 'reported', type: 'multiple-choice', question: 'She said "I need it" → She said she ___ it.', translation: 'She said "I need it" → She said she needed it.', options: ['need', 'needed', 'needing', 'had need'], correctAnswer: 'needed', points: 10 }
    ]
  },
  {
    id: 'reported-wh-1',
    title: 'Reported WH Questions',
    description: 'Practice reporting wh-questions',
    icon: '🔍',
    exercises: [
      { id: 'rep-wh-1', sectionId: 'reported', type: 'multiple-choice', question: '"Where do you live?" he asked → He asked where ___.', translation: '"Where do you live?" he asked → He asked where I lived.', options: ['I live', 'I lived', 'do I live', 'did I live'], correctAnswer: 'I lived', points: 10 },
      { id: 'rep-wh-2', sectionId: 'reported', type: 'multiple-choice', question: '"What is your name?" she asked → She asked what ___.', translation: '"What is your name?" she asked → She asked what my name was.', options: ['my name is', 'my name was', 'is my name', 'was my name'], correctAnswer: 'my name was', points: 10 },
      { id: 'rep-wh-3', sectionId: 'reported', type: 'multiple-choice', question: '"When will she arrive?" they asked → They asked when ___.', translation: '"When will she arrive?" they asked → They asked when she would arrive.', options: ['she will arrive', 'she would arrive', 'will she arrive', 'arrives she'], correctAnswer: 'she would arrive', points: 10 },
      { id: 'rep-wh-4', sectionId: 'reported', type: 'multiple-choice', question: '"Why are you crying?" he asked → He asked why ___.', translation: '"Why are you crying?" he asked → He asked why I was crying.', options: ['I am crying', 'I was crying', 'am I crying', 'was I crying'], correctAnswer: 'I was crying', points: 10 },
      { id: 'rep-wh-5', sectionId: 'reported', type: 'multiple-choice', question: '"How did she get here?" they asked → They asked how ___.', translation: '"How did she get here?" they asked → They asked how she had got there.', options: ['she got here', 'she had got there', 'did she get', 'gets she'], correctAnswer: 'she had got there', points: 10 },
      { id: 'rep-wh-6', sectionId: 'reported', type: 'multiple-choice', question: '"Who called?" she asked → She asked who ___.', translation: '"Who called?" she asked → She asked who had called.', options: ['called', 'calls', 'had called', 'calling'], correctAnswer: 'had called', points: 10 },
      { id: 'rep-wh-7', sectionId: 'reported', type: 'multiple-choice', question: '"Which one do you want?" he asked → He asked which one ___.', translation: '"Which one do you want?" he asked → He asked which one I wanted.', options: ['I want', 'I wanted', 'do I want', 'want I'], correctAnswer: 'I wanted', points: 10 },
      { id: 'rep-wh-8', sectionId: 'reported', type: 'multiple-choice', question: '"What time is it?" they asked → They asked what time ___.', translation: '"What time is it?" they asked → They asked what time it was.', options: ['it is', 'it was', 'is it', 'was it'], correctAnswer: 'it was', points: 10 },
      { id: 'rep-wh-9', sectionId: 'reported', type: 'multiple-choice', question: '"How long will it take?" she asked → She asked how long ___.', translation: '"How long will it take?" she asked → She asked how long it would take.', options: ['it will take', 'it would take', 'will it take', 'takes it'], correctAnswer: 'it would take', points: 10 },
      { id: 'rep-wh-10', sectionId: 'reported', type: 'multiple-choice', question: '"Where have you been?" he asked → He asked where ___.', translation: '"Where have you been?" he asked → He asked where I had been.', options: ['I have been', 'I had been', 'have I been', 'been I'], correctAnswer: 'I had been', points: 10 }
    ]
  },
  {
    id: 'reported-yes-no-1',
    title: 'Reported Yes/No Questions',
    description: 'Practice reporting yes/no questions',
    icon: '✅',
    exercises: [
      { id: 'rep-yn-1', sectionId: 'reported', type: 'multiple-choice', question: '"Do you like coffee?" he asked → He asked if I ___ coffee.', translation: '"Do you like coffee?" he asked → He asked if I liked coffee.', options: ['like', 'liked', 'likes', 'liking'], correctAnswer: 'liked', points: 10 },
      { id: 'rep-yn-2', sectionId: 'reported', type: 'multiple-choice', question: '"Is she coming?" they asked → They asked if she ___.', translation: '"Is she coming?" they asked → They asked if she was coming.', options: ['is coming', 'was coming', 'comes', 'coming'], correctAnswer: 'was coming', points: 10 },
      { id: 'rep-yn-3', sectionId: 'reported', type: 'multiple-choice', question: '"Did you finish?" she asked → She asked if I ___.', translation: '"Did you finish?" she asked → She asked if I had finished.', options: ['finished', 'finish', 'had finished', 'was finished'], correctAnswer: 'had finished', points: 10 },
      { id: 'rep-yn-4', sectionId: 'reported', type: 'multiple-choice', question: '"Can you help?" he asked → He asked if I ___ help.', translation: '"Can you help?" he asked → He asked if I could help.', options: ['can', 'could', 'will', 'would'], correctAnswer: 'could', points: 10 },
      { id: 'rep-yn-5', sectionId: 'reported', type: 'multiple-choice', question: '"Will they come?" she asked → She asked if they ___.', translation: '"Will they come?" she asked → She asked if they would come.', options: ['will come', 'would come', 'come', 'coming'], correctAnswer: 'would come', points: 10 },
      { id: 'rep-yn-6', sectionId: 'reported', type: 'multiple-choice', question: '"Have you been here?" they asked → They asked if I ___ here.', translation: '"Have you been here?" they asked → They asked if I had been there.', options: ['have been', 'had been', 'was', 'were'], correctAnswer: 'had been', points: 10 },
      { id: 'rep-yn-7', sectionId: 'reported', type: 'multiple-choice', question: '"Does he know?" she asked → She asked if he ___.', translation: '"Does he know?" she asked → She asked if he knew.', options: ['knows', 'knew', 'know', 'known'], correctAnswer: 'knew', points: 10 },
      { id: 'rep-yn-8', sectionId: 'reported', type: 'multiple-choice', question: '"Was she there?" he asked → He asked if she ___.', translation: '"Was she there?" he asked → He asked if she had been there.', options: ['was there', 'had been there', 'is there', 'were there'], correctAnswer: 'had been there', points: 10 },
      { id: 'rep-yn-9', sectionId: 'reported', type: 'multiple-choice', question: '"Are you ready?" they asked → They asked if I ___.', translation: '"Are you ready?" they asked → They asked if I was ready.', options: ['am ready', 'was ready', 'are ready', 'were ready'], correctAnswer: 'was ready', points: 10 },
      { id: 'rep-yn-10', sectionId: 'reported', type: 'multiple-choice', question: '"Did they agree?" she asked → She asked if they ___.', translation: '"Did they agree?" she asked → She asked if they had agreed.', options: ['agree', 'agreed', 'had agreed', 'were agreed'], correctAnswer: 'had agreed', points: 10 }
    ]
  },
  {
    id: 'reported-said-told-1',
    title: 'Said vs Told',
    description: 'Practice said and told differences',
    icon: '📣',
    exercises: [
      { id: 'rep-sd-1', sectionId: 'reported', type: 'multiple-choice', question: 'He said ___ he was leaving.', translation: 'He said (that) he was leaving.', options: ['that', 'to', 'for', 'at'], correctAnswer: 'that', points: 10 },
      { id: 'rep-sd-2', sectionId: 'reported', type: 'multiple-choice', question: 'He told me ___ was leaving.', translation: 'He told me (that) he was leaving.', options: ['he', 'that he', 'to he', 'him'], correctAnswer: 'that he', points: 10 },
      { id: 'rep-sd-3', sectionId: 'reported', type: 'multiple-choice', question: 'She said ___ going now.', translation: 'She said she was going now.', options: ['she was', 'her was', 'to she', 'that she'], correctAnswer: 'she was', points: 10 },
      { id: 'rep-sd-4', sectionId: 'reported', type: 'multiple-choice', question: 'She told me ___ going now.', translation: 'She told me she was going now.', options: ['she was', 'her was', 'to', 'about'], correctAnswer: 'she was', points: 10 },
      { id: 'rep-sd-5', sectionId: 'reported', type: 'multiple-choice', question: 'They said ___ finished.', translation: 'They said (that) they had finished.', options: ['that', 'to', 'for', 'they'], correctAnswer: 'that', points: 10 },
      { id: 'rep-sd-6', sectionId: 'reported', type: 'multiple-choice', question: 'They told us ___ finished.', translation: 'They told us (that) they had finished.', options: ['that they', 'they', 'to them', 'for them'], correctAnswer: 'that they', points: 10 },
      { id: 'rep-sd-7', sectionId: 'reported', type: 'multiple-choice', question: 'He said nothing.', translation: 'He said nothing.', options: ['said', 'told', 'spoken', 'talked'], correctAnswer: 'said', points: 10 },
      { id: 'rep-sd-8', sectionId: 'reported', type: 'multiple-choice', question: 'He told me the truth.', translation: 'He told me the truth.', options: ['said', 'told', 'spoke', 'talked'], correctAnswer: 'told', points: 10 },
      { id: 'rep-sd-9', sectionId: 'reported', type: 'multiple-choice', question: 'She said hello to everyone.', translation: 'She said hello to everyone.', options: ['said', 'told', 'spoke', 'talked'], correctAnswer: 'said', points: 10 },
      { id: 'rep-sd-10', sectionId: 'reported', type: 'multiple-choice', question: 'She told everyone the news.', translation: 'She told everyone the news.', options: ['said', 'told', 'spoke', 'talked'], correctAnswer: 'told', points: 10 }
    ]
  },
  {
    id: 'reported-tense-backshift-advanced-1',
    title: 'Reported Speech Advanced',
    description: 'Complex tense backshift',
    icon: '🔄',
    exercises: [
      { id: 'rts-1', sectionId: 'reported', type: 'multiple-choice', question: '"I am happy," she said. → She said ___ happy.', translation: '"I am happy," she said. → She said (that) she was happy.', options: ['she is', 'she was', 'I am', 'I was'], correctAnswer: 'she was', points: 10 },
      { id: 'rts-2', sectionId: 'reported', type: 'multiple-choice', question: '"I work here," he said. → He said ___ here.', translation: '"I work here," he said. → He said (that) he worked here.', options: ['he works', 'he worked', 'I work', 'I worked'], correctAnswer: 'he worked', points: 10 },
      { id: 'rts-3', sectionId: 'reported', type: 'multiple-choice', question: '"I saw her," they said. → They said ___ her.', translation: '"I saw her," they said. → They said (that) they had seen her.', options: ['they saw', 'they had seen', 'I saw', 'we saw'], correctAnswer: 'they had seen', points: 10 },
      { id: 'rts-4', sectionId: 'reported', type: 'multiple-choice', question: '"I will come," she said. → She said ___ .', translation: '"I will come," she said. → She said (that) she would come.', options: ['she will', 'she would', 'I will', 'I would'], correctAnswer: 'she would', points: 10 },
      { id: 'rts-5', sectionId: 'reported', type: 'multiple-choice', question: '"I can help," he said. → He said ___ help.', translation: '"I can help," he said. → He said (that) he could help.', options: ['he can', 'he could', 'I can', 'I could'], correctAnswer: 'he could', points: 10 },
      { id: 'rts-6', sectionId: 'reported', type: 'multiple-choice', question: '"I must go," she said. → She said ___ .', translation: '"I must go," she said. → She said (that) she had to go.', options: ['she must', 'she had to', 'I must', 'I had to'], correctAnswer: 'she had to', points: 10 },
      { id: 'rts-7', sectionId: 'reported', type: 'multiple-choice', question: '"I might come," they said. → They said ___ .', translation: '"I might come," they said. → They said (that) they might come.', options: ['they might', 'they may', 'I might', 'I may'], correctAnswer: 'they might', points: 10 },
      { id: 'rts-8', sectionId: 'reported', type: 'multiple-choice', question: '"I should study," he said. → He said ___ .', translation: '"I should study," he said. → He said (that) he should study.', options: ['he should', 'he would', 'I should', 'I would'], correctAnswer: 'he should', points: 10 },
      { id: 'rts-9', sectionId: 'reported', type: 'multiple-choice', question: '"I have a car," she said. → She said ___ a car.', translation: '"I have a car," she said. → She said (that) she had a car.', options: ['she has', 'she had', 'I have', 'I had'], correctAnswer: 'she had', points: 10 },
      { id: 'rts-10', sectionId: 'reported', type: 'multiple-choice', question: '"I was there," they said. → They said ___ there.', translation: '"I was there," they said. → They said (that) they had been there.', options: ['they were', 'they had been', 'I was', 'we were'], correctAnswer: 'they had been', points: 10 }
    ]
  },
  {
    id: 'reported-questions-advanced-1',
    title: 'Reported Questions Advanced',
    description: 'Complex question reporting',
    icon: '❓',
    exercises: [
      { id: 'rq-1', sectionId: 'reported', type: 'multiple-choice', question: '"Where are you?" he asked. → He asked where ___ .', translation: '"Where are you?" he asked. → He asked where I was.', options: ['you are', 'I am', 'you were', 'I was'], correctAnswer: 'I was', points: 10 },
      { id: 'rq-2', sectionId: 'reported', type: 'multiple-choice', question: '"What do you want?" she asked. → She asked what ___ .', translation: '"What do you want?" she asked. → She asked what I wanted.', options: ['you want', 'I want', 'you wanted', 'I wanted'], correctAnswer: 'I wanted', points: 10 },
      { id: 'rq-3', sectionId: 'reported', type: 'multiple-choice', question: '"When will she arrive?" they asked. → They asked when ___ arrive.', translation: '"When will she arrive?" they asked. → They asked when she would arrive.', options: ['she will', 'she would', 'you will', 'you would'], correctAnswer: 'she would', points: 10 },
      { id: 'rq-4', sectionId: 'reported', type: 'multiple-choice', question: '"Why did he leave?" I asked. → I asked why ___ .', translation: '"Why did he leave?" I asked. → I asked why he had left.', options: ['he did', 'he had', 'you did', 'we did'], correctAnswer: 'he had', points: 10 },
      { id: 'rq-5', sectionId: 'reported', type: 'multiple-choice', question: '"How does it work?" she asked. → She asked how ___ .', translation: '"How does it work?" she asked. → She asked how it worked.', options: ['it does', 'it worked', 'you do', 'we do'], correctAnswer: 'it worked', points: 10 },
      { id: 'rq-6', sectionId: 'reported', type: 'multiple-choice', question: '"Who was there?" they asked. → They asked who ___ there.', translation: '"Who was there?" they asked. → They asked who had been there.', options: ['was', 'were', 'had been', 'is'], correctAnswer: 'had been', points: 10 },
      { id: 'rq-7', sectionId: 'reported', type: 'multiple-choice', question: '"Which one did you choose?" he asked. → He asked which one ___ .', translation: '"Which one did you choose?" he asked. → He asked which one I had chosen.', options: ['you chose', 'I chose', 'you had chosen', 'I had chosen'], correctAnswer: 'I had chosen', points: 10 },
      { id: 'rq-8', sectionId: 'reported', type: 'multiple-choice', question: '"Where have you been?" she asked. → She asked where ___ .', translation: '"Where have you been?" she asked. → She asked where I had been.', options: ['you have been', 'I have been', 'you had been', 'I had been'], correctAnswer: 'I had been', points: 10 },
      { id: 'rq-9', sectionId: 'reported', type: 'multiple-choice', question: '"What are you doing?" they asked. → They asked what ___ .', translation: '"What are you doing?" they asked. → They asked what I was doing.', options: ['you are doing', 'I am doing', 'you were doing', 'I was doing'], correctAnswer: 'I was doing', points: 10 },
      { id: 'rq-10', sectionId: 'reported', type: 'multiple-choice', question: '"Why are you late?" he asked. → He asked why ___ late.', translation: '"Why are you late?" he asked. → He asked why I was late.', options: ['you are', 'I am', 'you were', 'I was'], correctAnswer: 'I was', points: 10 }
    ]
  },
  {
    id: 'reported-commands-advanced-1',
    title: 'Reported Commands Advanced',
    description: 'Complex command reporting',
    icon: '📢',
    exercises: [
      { id: 'rc-1', sectionId: 'reported', type: 'multiple-choice', question: '"Close the door," he said. → He told me ___ the door.', translation: '"Close the door," he said. → He told me to close the door.', options: ['close', 'to close', 'closing', 'closed'], correctAnswer: 'to close', points: 10 },
      { id: 'rc-2', sectionId: 'reported', type: 'multiple-choice', question: '"Don`t be late," she said. → She told me ___ late.', translation: '"Don`t be late," she said. → She told me not to be late.', options: ['be not', 'not to be', 'to be not', 'not be'], correctAnswer: 'not to be', points: 10 },
      { id: 'rc-3', sectionId: 'reported', type: 'multiple-choice', question: '"Call me tomorrow," they said. → They told me ___ tomorrow.', translation: '"Call me tomorrow," they said. → They told me to call them tomorrow.', options: ['call', 'to call', 'calling', 'called'], correctAnswer: 'to call', points: 10 },
      { id: 'rc-4', sectionId: 'reported', type: 'multiple-choice', question: '"Don`t forget your keys," he said. → He told me ___ my keys.', translation: '"Don`t forget your keys," he said. → He told me not to forget my keys.', options: ['forget', 'not to forget', 'to forget', 'forgetting'], correctAnswer: 'not to forget', points: 10 },
      { id: 'rc-5', sectionId: 'reported', type: 'multiple-choice', question: '"Please help me," she said. → She asked me ___ her.', translation: '"Please help me," she said. → She asked me to help her.', options: ['help', 'to help', 'helping', 'helped'], correctAnswer: 'to help', points: 10 },
      { id: 'rc-6', sectionId: 'reported', type: 'multiple-choice', question: '"Don`t worry," they said. → They told me ___ .', translation: '"Don`t worry," they said. → They told me not to worry.', options: ['worry', 'not to worry', 'to worry', 'worrying'], correctAnswer: 'not to worry', points: 10 },
      { id: 'rc-7', sectionId: 'reported', type: 'multiple-choice', question: '"Finish your work," he said. → He told me ___ my work.', translation: '"Finish your work," he said. → He told me to finish my work.', options: ['finish', 'to finish', 'finishing', 'finished'], correctAnswer: 'to finish', points: 10 },
      { id: 'rc-8', sectionId: 'reported', type: 'multiple-choice', question: '"Don`t touch that," she said. → She told me ___ that.', translation: '"Don`t touch that," she said. → She told me not to touch that.', options: ['touch', 'not to touch', 'to touch', 'touching'], correctAnswer: 'not to touch', points: 10 },
      { id: 'rc-9', sectionId: 'reported', type: 'multiple-choice', question: '"Wait for me," they said. → They told me ___ for them.', translation: '"Wait for me," they said. → They told me to wait for them.', options: ['wait', 'to wait', 'waiting', 'waited'], correctAnswer: 'to wait', points: 10 },
      { id: 'rc-10', sectionId: 'reported', type: 'multiple-choice', question: '"Don`t drive fast," he said. → He told me ___ fast.', translation: '"Don`t drive fast," he said. → He told me not to drive fast.', options: ['drive', 'not to drive', 'to drive', 'driving'], correctAnswer: 'not to drive', points: 10 }
    ]
  },
  {
    id: 'reported-statements-advanced-1',
    title: 'Reported Statements Advanced',
    description: 'Complex statement reporting',
    icon: '💬',
    exercises: [
      { id: 'rs-1', sectionId: 'reported', type: 'multiple-choice', question: '"The weather is nice," she said. → She said ___ nice.', translation: '"The weather is nice," she said. → She said (that) the weather was nice.', options: ['the weather is', 'the weather was', 'it is', 'it was'], correctAnswer: 'the weather was', points: 10 },
      { id: 'rs-2', sectionId: 'reported', type: 'multiple-choice', question: '"I love music," he said. → He said ___ music.', translation: '"I love music," he said. → He said (that) he loved music.', options: ['he loves', 'he loved', 'I love', 'I loved'], correctAnswer: 'he loved', points: 10 },
      { id: 'rs-3', sectionId: 'reported', type: 'multiple-choice', question: '"They are coming," she said. → She said ___ .', translation: '"They are coming," she said. → She said (that) they were coming.', options: ['they are', 'they were', 'we are', 'we were'], correctAnswer: 'they were', points: 10 },
      { id: 'rs-4', sectionId: 'reported', type: 'multiple-choice', question: '"I was at home," they said. → They said ___ at home.', translation: '"I was at home," they said. → They said (that) they had been at home.', options: ['they were', 'they had been', 'I was', 'we were'], correctAnswer: 'they had been', points: 10 },
      { id: 'rs-5', sectionId: 'reported', type: 'multiple-choice', question: '"She will call," he said. → He said ___ .', translation: '"She will call," he said. → He said (that) she would call.', options: ['she will', 'she would', 'you will', 'you would'], correctAnswer: 'she would', points: 10 },
      { id: 'rs-6', sectionId: 'reported', type: 'multiple-choice', question: '"I can swim," she said. → She said ___ .', translation: '"I can swim," she said. → She said (that) she could swim.', options: ['she can', 'she could', 'I can', 'I could'], correctAnswer: 'she could', points: 10 },
      { id: 'rs-7', sectionId: 'reported', type: 'multiple-choice', question: '"We have finished," they said. → They said ___ .', translation: '"We have finished," they said. → They said (that) they had finished.', options: ['we have', 'we had', 'they have', 'they had'], correctAnswer: 'they had', points: 10 },
      { id: 'rs-8', sectionId: 'reported', type: 'multiple-choice', question: '"He should study," she said. → She said ___ .', translation: '"He should study," she said. → She said (that) he should study.', options: ['he should', 'he would', 'you should', 'you would'], correctAnswer: 'he should', points: 10 },
      { id: 'rs-9', sectionId: 'reported', type: 'multiple-choice', question: '"I might be late," he said. → He said ___ .', translation: '"I might be late," he said. → He said (that) he might be late.', options: ['he might', 'he may', 'I might', 'I may'], correctAnswer: 'he might', points: 10 },
      { id: 'rs-10', sectionId: 'reported', type: 'multiple-choice', question: '"They must leave," she said. → She said ___ .', translation: '"They must leave," she said. → She said (that) they had to leave.', options: ['they must', 'they had to', 'we must', 'we had to'], correctAnswer: 'they had to', points: 10 }
    ]
  },
  {
    id: 'reported-time-advanced-1',
    title: 'Reported Time Advanced',
    description: 'Time expression changes',
    icon: '⏰',
    exercises: [
      { id: 'rt-1', sectionId: 'reported', type: 'multiple-choice', question: '"I will come today," he said. → He said he would come ___.', translation: '"I will come today," he said. → He said he would come that day.', options: ['today', 'that day', 'the same day', 'yesterday'], correctAnswer: 'that day', points: 10 },
      { id: 'rt-2', sectionId: 'reported', type: 'multiple-choice', question: '"I saw her yesterday," she said. → She said she had seen her ___.', translation: '"I saw her yesterday," she said. → She said she had seen her the day before.', options: ['yesterday', 'the day before', 'last day', 'before'], correctAnswer: 'the day before', points: 10 },
      { id: 'rt-3', sectionId: 'reported', type: 'multiple-choice', question: '"I will call tomorrow," they said. → They said they would call ___.', translation: '"I will call tomorrow," they said. → They said they would call the next day.', options: ['tomorrow', 'the next day', 'the following day', 'soon'], correctAnswer: 'the next day', points: 10 },
      { id: 'rt-4', sectionId: 'reported', type: 'multiple-choice', question: '"She came last week," he said. → He said she had come ___.', translation: '"She came last week," he said. → He said she had come the week before.', options: ['last week', 'the week before', 'previous week', 'before'], correctAnswer: 'the week before', points: 10 },
      { id: 'rt-5', sectionId: 'reported', type: 'multiple-choice', question: '"I will be there now," she said. → She said she would be there ___.', translation: '"I will be there now," she said. → She said she would be there then.', options: ['now', 'then', 'at that time', 'soon'], correctAnswer: 'then', points: 10 },
      { id: 'rt-6', sectionId: 'reported', type: 'multiple-choice', question: '"I arrived this morning," they said. → They said they had arrived ___.', translation: '"I arrived this morning," they said. → They said they had arrived that morning.', options: ['this morning', 'that morning', 'in the morning', 'morning'], correctAnswer: 'that morning', points: 10 },
      { id: 'rt-7', sectionId: 'reported', type: 'multiple-choice', question: '"I met her tonight," he said. → He said he had met her ___.', translation: '"I met her tonight," he said. → He said he had met her that night.', options: ['tonight', 'that night', 'the night', 'at night'], correctAnswer: 'that night', points: 10 },
      { id: 'rt-8', sectionId: 'reported', type: 'multiple-choice', question: '"I will see you next week," she said. → She said she would see you ___.', translation: '"I will see you next week," she said. → She said she would see you the following week.', options: ['next week', 'the following week', 'the week after', 'soon'], correctAnswer: 'the following week', points: 10 },
      { id: 'rt-9', sectionId: 'reported', type: 'multiple-choice', question: '"It happened last month," they said. → They said it had happened ___.', translation: '"It happened last month," they said. → They said it had happened the month before.', options: ['last month', 'the month before', 'previous month', 'before'], correctAnswer: 'the month before', points: 10 },
      { id: 'rt-10', sectionId: 'reported', type: 'multiple-choice', question: '"Come here today," he said. → He told me to come here ___.', translation: '"Come here today," he said. → He told me to come there that day.', options: ['today', 'that day', 'the same day', 'now'], correctAnswer: 'that day', points: 10 }
    ]
  },
  {
    id: 'reported-place-advanced-1',
    title: 'Reported Place Advanced',
    description: 'Place expression changes',
    icon: '📍',
    exercises: [
      { id: 'rp-1', sectionId: 'reported', type: 'multiple-choice', question: '"I am here," she said. → She said ___ .', translation: '"I am here," she said. → She said she was there.', options: ['she is here', 'she was there', 'I am here', 'I was there'], correctAnswer: 'she was there', points: 10 },
      { id: 'rp-2', sectionId: 'reported', type: 'multiple-choice', question: '"Go there," he said. → He told me ___ .', translation: '"Go there," he said. → He told me to go there.', options: ['go here', 'go there', 'to go here', 'to go'], correctAnswer: 'go there', points: 10 },
      { id: 'rp-3', sectionId: 'reported', type: 'multiple-choice', question: '"I live here," they said. → They said ___ .', translation: '"I live here," they said. → They said they lived there.', options: ['they live here', 'they lived there', 'we live here', 'we lived there'], correctAnswer: 'they lived there', points: 10 },
      { id: 'rp-4', sectionId: 'reported', type: 'multiple-choice', question: '"Meet me here," she said. → She told me to meet her ___.', translation: '"Meet me here," she said. → She told me to meet her there.', options: ['here', 'there', 'where', 'wherever'], correctAnswer: 'there', points: 10 },
      { id: 'rp-5', sectionId: 'reported', type: 'multiple-choice', question: '"I was at home," he said. → He said he ___ at home.', translation: '"I was at home," he said. → He said he had been at home.', options: ['was', 'is', 'had been', 'were'], correctAnswer: 'had been', points: 10 },
      { id: 'rp-6', sectionId: 'reported', type: 'multiple-choice', question: '"Bring it here," they said. → They told me to bring it ___.', translation: '"Bring it here," they said. → They told me to bring it there.', options: ['here', 'there', 'to here', 'to there'], correctAnswer: 'there', points: 10 },
      { id: 'rp-7', sectionId: 'reported', type: 'multiple-choice', question: '"I work here," she said. → She said she ___ there.', translation: '"I work here," she said. → She said she worked there.', options: ['works', 'worked', 'work', 'is working'], correctAnswer: 'worked', points: 10 },
      { id: 'rp-8', sectionId: 'reported', type: 'multiple-choice', question: '"Wait here," he said. → He told me to wait ___.', translation: '"Wait here," he said. → He told me to wait there.', options: ['here', 'there', 'where', 'anywhere'], correctAnswer: 'there', points: 10 },
      { id: 'rp-9', sectionId: 'reported', type: 'multiple-choice', question: '"I will be there tomorrow," she said. → She said she ___ there the next day.', translation: '"I will be there tomorrow," she said. → She said she would be there the next day.', options: ['will be', 'would be', 'is', 'was'], correctAnswer: 'would be', points: 10 },
      { id: 'rp-10', sectionId: 'reported', type: 'multiple-choice', question: '"Come from there," they said. → They told me to come from ___.', translation: '"Come from there," they said. → They told me to come from there.', options: ['here', 'there', 'somewhere', 'anywhere'], correctAnswer: 'there', points: 10 }
    ]
  },
  {
    id: 'reported-modals-advanced-1',
    title: 'Reported Modal Verbs',
    description: 'Modal changes in reported speech',
    icon: '🎯',
    exercises: [
      { id: 'rmod-1', sectionId: 'reported', type: 'multiple-choice', question: '"I can help," he said. → He said he ___ help.', translation: '"I can help," he said. → He said he could help.', options: ['can', 'could', 'will can', 'would can'], correctAnswer: 'could', points: 10 },
      { id: 'rmod-2', sectionId: 'reported', type: 'multiple-choice', question: '"I may come," she said. → She said she ___ come.', translation: '"I may come," she said. → She said she might come.', options: ['may', 'might', 'can', 'could'], correctAnswer: 'might', points: 10 },
      { id: 'rmod-3', sectionId: 'reported', type: 'multiple-choice', question: '"I must study," they said. → They said they ___ study.', translation: '"I must study," they said. → They said they had to study.', options: ['must', 'had to', 'should', 'would'], correctAnswer: 'had to', points: 10 },
      { id: 'rmod-4', sectionId: 'reported', type: 'multiple-choice', question: '"I should try," he said. → He said he ___ try.', translation: '"I should try," he said. → He said he should try.', options: ['should', 'would', 'must', 'could'], correctAnswer: 'should', points: 10 },
      { id: 'rmod-5', sectionId: 'reported', type: 'multiple-choice', question: '"I will go," she said. → She said she ___ go.', translation: '"I will go," she said. → She said she would go.', options: ['will', 'would', 'shall', 'should'], correctAnswer: 'would', points: 10 },
      { id: 'rmod-6', sectionId: 'reported', type: 'multiple-choice', question: '"I ought to try," they said. → They said they ___ try.', translation: '"I ought to try," they said. → They said they ought to try.', options: ['ought to', 'should', 'must', 'would'], correctAnswer: 'ought to', points: 10 },
      { id: 'rmod-7', sectionId: 'reported', type: 'multiple-choice', question: '"I would help," he said. → He said he ___ help.', translation: '"I would help," he said. → He said he would help.', options: ['would', 'will', 'could', 'should'], correctAnswer: 'would', points: 10 },
      { id: 'rmod-8', sectionId: 'reported', type: 'multiple-choice', question: '"You should wait," she said. → She said I ___ wait.', translation: '"You should wait," she said. → She said I should wait.', options: ['should', 'must', 'could', 'would'], correctAnswer: 'should', points: 10 },
      { id: 'rmod-9', sectionId: 'reported', type: 'multiple-choice', question: '"You must be quiet," they said. → They said I ___ be quiet.', translation: '"You must be quiet," they said. → They said I had to be quiet.', options: ['must', 'had to', 'should', 'would'], correctAnswer: 'had to', points: 10 },
      { id: 'rmod-10', sectionId: 'reported', type: 'multiple-choice', question: '"You can leave," he said. → He said I ___ leave.', translation: '"You can leave," he said. → He said I could leave.', options: ['can', 'could', 'will', 'would'], correctAnswer: 'could', points: 10 }
    ]
  },
  {
    id: 'reported-verbs-advanced-1',
    title: 'Reporting Verbs Advanced',
    description: 'Various reporting verbs',
    icon: '📣',
    exercises: [
      { id: 'rv-1', sectionId: 'reported', type: 'multiple-choice', question: '"I am tired," she said. → She admitted ___ tired.', translation: '"I am tired," she said. → She admitted being tired.', options: ['to be', 'being', 'be', 'was'], correctAnswer: 'being', points: 10 },
      { id: 'rv-2', sectionId: 'reported', type: 'multiple-choice', question: '"I did it," he said. → He denied ___ it.', translation: '"I did it," he said. → He denied doing it.', options: ['to do', 'doing', 'did', 'does'], correctAnswer: 'doing', points: 10 },
      { id: 'rv-3', sectionId: 'reported', type: 'multiple-choice', question: '"I will help," they said. → They promised ___ .', translation: '"I will help," they said. → They promised to help.', options: ['helping', 'to help', 'help', 'helped'], correctAnswer: 'to help', points: 10 },
      { id: 'rv-4', sectionId: 'reported', type: 'multiple-choice', question: '"Let me help," she said. → She offered ___ .', translation: '"Let me help," she said. → She offered to help.', options: ['helping', 'to help', 'help', 'helped'], correctAnswer: 'to help', points: 10 },
      { id: 'rv-5', sectionId: 'reported', type: 'multiple-choice', question: '"You are right," he said. → He agreed ___ right.', translation: '"You are right," he said. → He agreed to be right.', options: ['to be', 'being', 'be', 'was'], correctAnswer: 'to be', points: 10 },
      { id: 'rv-6', sectionId: 'reported', type: 'multiple-choice', question: '"I do not know," they said. → They admitted ___ .', translation: '"I do not know," they said. → They admitted not knowing.', options: ['not to know', 'not knowing', 'to not know', 'know not'], correctAnswer: 'not knowing', points: 10 },
      { id: 'rv-7', sectionId: 'reported', type: 'multiple-choice', question: '"It was me," she said. → She confessed ___ it was her.', translation: '"It was me," she said. → She confessed that it was her.', options: ['that', 'to', 'for', 'of'], correctAnswer: 'that', points: 10 },
      { id: 'rv-8', sectionId: 'reported', type: 'multiple-choice', question: '"I will be there," he said. → He threatened ___ there.', translation: '"I will be there," he said. → He threatened to be there.', options: ['to be', 'being', 'be', 'was'], correctAnswer: 'to be', points: 10 },
      { id: 'rv-9', sectionId: 'reported', type: 'multiple-choice', question: '"You should try," they said. → They advised me ___ .', translation: '"You should try," they said. → They advised me to try.', options: ['trying', 'to try', 'try', 'tried'], correctAnswer: 'to try', points: 10 },
      { id: 'rv-10', sectionId: 'reported', type: 'multiple-choice', question: '"Do not worry," she said. → She warned me ___ .', translation: '"Do not worry," she said. → She warned me not to worry.', options: ['worrying', 'to worry', 'not to worry', 'worry'], correctAnswer: 'not to worry', points: 10 }
    ]
  },
  {
    id: 'reported-mixed-1',
    title: 'Reported Speech Mixed',
    description: 'Mixed reported speech practice',
    icon: '🔀',
    exercises: [
      { id: 'rmix-1', sectionId: 'reported', type: 'multiple-choice', question: '"Where are you going?" she asked. → She asked where ___ going.', translation: '"Where are you going?" she asked. → She asked where I was going.', options: ['you are', 'I am', 'you were', 'I was'], correctAnswer: 'I was', points: 10 },
      { id: 'rmix-2', sectionId: 'reported', type: 'multiple-choice', question: '"Call me tonight," he said. → He told me ___ tonight.', translation: '"Call me tonight," he said. → He told me to call him that night.', options: ['call', 'to call', 'calling', 'called'], correctAnswer: 'to call', points: 10 },
      { id: 'rmix-3', sectionId: 'reported', type: 'multiple-choice', question: '"I was there yesterday," they said. → They said ___ there the day before.', translation: '"I was there yesterday," they said. → They said they had been there the day before.', options: ['we were', 'they were', 'we had been', 'they had been'], correctAnswer: 'they had been', points: 10 },
      { id: 'rmix-4', sectionId: 'reported', type: 'multiple-choice', question: '"Do not be late," she said. → She warned me ___ late.', translation: '"Do not be late," she said. → She warned me not to be late.', options: ['be', 'not to be', 'to be', 'being'], correctAnswer: 'not to be', points: 10 },
      { id: 'rmix-5', sectionId: 'reported', type: 'multiple-choice', question: '"I can help tomorrow," he said. → He said he ___ help the next day.', translation: '"I can help tomorrow," he said. → He said he could help the next day.', options: ['can', 'could', 'will can', 'would can'], correctAnswer: 'could', points: 10 },
      { id: 'rmix-6', sectionId: 'reported', type: 'multiple-choice', question: '"Why did you come?" she asked. → She asked why ___ .', translation: '"Why did you come?" she asked. → She asked why I had come.', options: ['you came', 'I came', 'you had come', 'I had come'], correctAnswer: 'I had come', points: 10 },
      { id: 'rmix-7', sectionId: 'reported', type: 'multiple-choice', question: '"I will call you now," they said. → They said they ___ me then.', translation: '"I will call you now," they said. → They said they would call me then.', options: ['will call', 'would call', 'call', 'called'], correctAnswer: 'would call', points: 10 },
      { id: 'rmix-8', sectionId: 'reported', type: 'multiple-choice', question: '"What are you doing?" he asked. → He asked what ___ .', translation: '"What are you doing?" he asked. → He asked what I was doing.', options: ['you are doing', 'I am doing', 'you were doing', 'I was doing'], correctAnswer: 'I was doing', points: 10 },
      { id: 'rmix-9', sectionId: 'reported', type: 'multiple-choice', question: '"I must leave now," she said. → She said she ___ leave then.', translation: '"I must leave now," she said. → She said she had to leave then.', options: ['must', 'had to', 'should', 'would'], correctAnswer: 'had to', points: 10 },
      { id: 'rmix-10', sectionId: 'reported', type: 'multiple-choice', question: '"Do not forget this," they said. → They told me ___ this.', translation: '"Do not forget this," they said. → They told me not to forget this.', options: ['forget', 'not to forget', 'to forget', 'forgetting'], correctAnswer: 'not to forget', points: 10 }
    ]
  },
  {
    id: 'reported-narrative-1',
    title: 'Reported Speech Narrative',
    description: 'Story narration with reported speech',
    icon: '📖',
    exercises: [
      { id: 'rn-1', sectionId: 'reported', type: 'multiple-choice', question: 'He said that he ___ the day before.', translation: 'He said that he had worked the day before.', options: ['worked', 'works', 'had worked', 'was working'], correctAnswer: 'had worked', points: 10 },
      { id: 'rn-2', sectionId: 'reported', type: 'multiple-choice', question: 'She told me that she ___ the next day.', translation: 'She told me that she would come the next day.', options: ['will come', 'would come', 'comes', 'came'], correctAnswer: 'would come', points: 10 },
      { id: 'rn-3', sectionId: 'reported', type: 'multiple-choice', question: 'They said they ___ the book already.', translation: 'They said they had read the book already.', options: ['read', 'had read', 'were reading', 'would read'], correctAnswer: 'had read', points: 10 },
      { id: 'rn-4', sectionId: 'reported', type: 'multiple-choice', question: 'He asked me if I ___ the day before.', translation: 'He asked me if I had seen the movie the day before.', options: ['saw', 'see', 'had seen', 'was seeing'], correctAnswer: 'had seen', points: 10 },
      { id: 'rn-5', sectionId: 'reported', type: 'multiple-choice', question: 'She wondered where they ___ the next week.', translation: 'She wondered where they would be the next week.', options: ['are', 'were', 'will be', 'would be'], correctAnswer: 'would be', points: 10 },
      { id: 'rn-6', sectionId: 'reported', type: 'multiple-choice', question: 'They told us that the test ___ the following day.', translation: 'They told us that the test would be the following day.', options: ['is', 'was', 'will be', 'would be'], correctAnswer: 'would be', points: 10 },
      { id: 'rn-7', sectionId: 'reported', type: 'multiple-choice', question: 'He said that he ___ there since morning.', translation: 'He said that he had been there since morning.', options: ['was', 'is', 'had been', 'was been'], correctAnswer: 'had been', points: 10 },
      { id: 'rn-8', sectionId: 'reported', type: 'multiple-choice', question: 'She asked if I ___ help the next day.', translation: 'She asked if I could help the next day.', options: ['can', 'could', 'will can', 'would can'], correctAnswer: 'could', points: 10 },
      { id: 'rn-9', sectionId: 'reported', type: 'multiple-choice', question: 'They promised they ___ on time.', translation: 'They promised they would be on time.', options: ['are', 'were', 'will be', 'would be'], correctAnswer: 'would be', points: 10 },
      { id: 'rn-10', sectionId: 'reported', type: 'multiple-choice', question: 'He warned me not ___ there alone.', translation: 'He warned me not to go there alone.', options: ['go', 'to go', 'going', 'gone'], correctAnswer: 'to go', points: 10 }
    ]
  },
  {
    id: 'reported-indirect-1',
    title: 'Indirect Speech Advanced',
    description: 'Advanced indirect speech',
    icon: '🔄',
    exercises: [
      { id: 'ris-1', sectionId: 'reported', type: 'multiple-choice', question: 'According to him, the story ___ true.', translation: 'According to him, the story was true.', options: ['is', 'was', 'were', 'be'], correctAnswer: 'was', points: 10 },
      { id: 'ris-2', sectionId: 'reported', type: 'multiple-choice', question: 'She claimed ___ the best.', translation: 'She claimed to be the best.', options: ['to be', 'being', 'be', 'was'], correctAnswer: 'to be', points: 10 },
      { id: 'ris-3', sectionId: 'reported', type: 'multiple-choice', question: 'He announced ___ soon.', translation: 'He announced he would return soon.', options: ['to return', 'returning', 'return', 'returned'], correctAnswer: 'to return', points: 10 },
      { id: 'ris-4', sectionId: 'reported', type: 'multiple-choice', question: 'They confirmed ___ the meeting.', translation: 'They confirmed attending the meeting.', options: ['attending', 'to attend', 'attend', 'attended'], correctAnswer: 'attending', points: 10 },
      { id: 'ris-5', sectionId: 'reported', type: 'multiple-choice', question: 'She boasted ___ fluent.', translation: 'She boasted about being fluent.', options: ['to be', 'being', 'be', 'was'], correctAnswer: 'being', points: 10 },
      { id: 'ris-6', sectionId: 'reported', type: 'multiple-choice', question: 'He warned ___ the danger.', translation: 'He warned about the danger.', options: ['about', 'of', 'to', 'for'], correctAnswer: 'about', points: 10 },
      { id: 'ris-7', sectionId: 'reported', type: 'multiple-choice', question: 'They reminded me ___ the deadline.', translation: 'They reminded me about the deadline.', options: ['about', 'of', 'to', 'for'], correctAnswer: 'about', points: 10 },
      { id: 'ris-8', sectionId: 'reported', type: 'multiple-choice', question: 'She complained ___ the weather.', translation: 'She complained about the weather.', options: ['about', 'of', 'to', 'for'], correctAnswer: 'about', points: 10 },
      { id: 'ris-9', sectionId: 'reported', type: 'multiple-choice', question: 'He apologized ___ late.', translation: 'He apologized for being late.', options: ['for', 'about', 'to', 'of'], correctAnswer: 'for', points: 10 },
      { id: 'ris-10', sectionId: 'reported', type: 'multiple-choice', question: 'They insisted ___ the plan.', translation: 'They insisted on following the plan.', options: ['on', 'about', 'to', 'for'], correctAnswer: 'on', points: 10 }
    ]
  }
];