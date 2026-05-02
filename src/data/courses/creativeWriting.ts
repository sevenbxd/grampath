import { ExercisePack } from '../academy';

export const creativeWritingExercisePacks: ExercisePack[] = [
  {
    id: 'story-openings-1',
    title: 'Story Openings',
    description: 'Practice engaging beginnings',
    icon: '📖',
    exercises: [
      { id: 'stor-ex1', sectionId: 'creative', type: 'multiple-choice', question: 'Which is the best story opening?', translation: 'It was a dark and stormy night.', options: ['It was a dark and stormy night.', 'I woke up.', 'One day, I went out.', 'The end.'], correctAnswer: 'It was a dark and stormy night.', points: 10 }
    ]
  },
  {
    id: 'descriptive-1',
    title: 'Descriptive Writing',
    description: 'Practice vivid descriptions',
    icon: '🎨',
    exercises: [
      { id: 'desc-ex1', sectionId: 'creative', type: 'multiple-choice', question: 'Which is more descriptive?', translation: 'The old house creaked in the wind.', options: ['The house was old.', 'The old house creaked in the wind.', 'The house was big.', 'There was a house.'], correctAnswer: 'The old house creaked in the wind.', points: 10 }
    ]
  },
  {
    id: 'character-development-1',
    title: 'Character Development',
    description: 'Creating memorable characters',
    icon: '👤',
    exercises: [
      { id: 'char-1', sectionId: 'creative', type: 'multiple-choice', question: 'A character needs:', translation: 'Goals, flaws, and motivations.', options: ['A name only', 'Goals, flaws, and motivations', 'Nothing', 'Physical description only'], correctAnswer: 'Goals, flaws, and motivations', points: 10 },
      { id: 'char-2', sectionId: 'creative', type: 'multiple-choice', question: 'Show character through:', translation: 'Actions and dialogue.', options: ['Telling only', 'Actions and dialogue', 'Nothing', 'Appearance only'], correctAnswer: 'Actions and dialogue', points: 10 },
      { id: 'char-3', sectionId: 'creative', type: 'multiple-choice', question: 'A dynamic character:', translation: 'Changes during the story.', options: ['Never changes', 'Changes during the story', 'Is static', 'Is unimportant'], correctAnswer: 'Changes during the story', points: 10 },
      { id: 'char-4', sectionId: 'creative', type: 'multiple-choice', question: 'A flat character:', translation: 'Lacks depth and complexity.', options: ['Has much depth', 'Lacks depth and complexity', 'Changes a lot', 'Is the hero'], correctAnswer: 'Lacks depth and complexity', points: 10 },
      { id: 'char-5', sectionId: 'creative', type: 'multiple-choice', question: 'Characters should be:', translation: 'Believable and relatable.', options: ['Perfect', 'Believable and relatable', 'Unrealistic', 'Confusing'], correctAnswer: 'Believable and relatable', points: 10 },
      { id: 'char-6', sectionId: 'creative', type: 'multiple-choice', question: 'Backstory is:', translation: 'The characters history.', options: ['Not important', 'The characters history', 'The plot only', 'Nothing'], correctAnswer: 'The characters history', points: 10 },
      { id: 'char-7', sectionId: 'creative', type: 'multiple-choice', question: 'Give characters:', translation: 'Unique voices and traits.', options: ['The same voice', 'Unique voices and traits', 'No traits', 'Generic qualities'], correctAnswer: 'Unique voices and traits', points: 10 },
      { id: 'char-8', sectionId: 'creative', type: 'multiple-choice', question: 'The protagonist is:', translation: 'The main character.', options: ['The villain', 'The main character', 'The sidekick', 'No one important'], correctAnswer: 'The main character', points: 10 },
      { id: 'char-9', sectionId: 'creative', type: 'multiple-choice', question: 'Antagonist:', translation: 'Opposes the protagonist.', options: ['Helps the hero', 'Opposes the protagonist', 'Is not in the story', 'Is unimportant'], correctAnswer: 'Opposes the protagonist', points: 10 },
      { id: 'char-10', sectionId: 'creative', type: 'multiple-choice', question: 'Character arc shows:', translation: 'How the character changes.', options: ['Where they live', 'How the character changes', 'Nothing', 'Just their name'], correctAnswer: 'How the character changes', points: 10 }
    ]
  },
  {
    id: 'dialogue-writing-1',
    title: 'Dialogue Writing',
    description: 'Writing effective dialogue',
    icon: '💬',
    exercises: [
      { id: 'diag-1', sectionId: 'creative', type: 'multiple-choice', question: 'Good dialogue:', translation: 'Sounds natural and reveals character.', options: ['Is formal', 'Sounds natural and reveals character', 'Is very long', 'Has no purpose'], correctAnswer: 'Sounds natural and reveals character', points: 10 },
      { id: 'diag-2', sectionId: 'creative', type: 'multiple-choice', question: 'Use dialogue to:', translation: 'Advance plot and reveal character.', options: ['Fill space', 'Advance plot and reveal character', 'Confuse readers', 'Be boring'], correctAnswer: 'Advance plot and reveal character', points: 10 },
      { id: 'diag-3', sectionId: 'creative', type: 'multiple-choice', question: 'Use ___ instead of "said" sometimes.', translation: 'Better verbs.', options: ['The same words', 'Better verbs', 'Nothing', 'Long descriptions'], correctAnswer: 'Better verbs', points: 10 },
      { id: 'diag-4', sectionId: 'creative', type: 'multiple-choice', question: 'Subtext is:', translation: 'What is not said directly.', options: ['What is spoken', 'What is not said directly', 'Nothing', 'The main topic'], correctAnswer: 'What is not said directly', points: 10 },
      { id: 'diag-5', sectionId: 'creative', type: 'multiple-choice', question: 'Avoid:', translation: 'Explanations in dialogue.', options: ['Conversation', 'Explanations in dialogue', 'Questions', 'Character voice'], correctAnswer: 'Explanations in dialogue', points: 10 },
      { id: 'diag-6', sectionId: 'creative', type: 'multiple-choice', question: 'Each character should:', translation: 'Have a distinct voice.', options: ['Sound the same', 'Have a distinct voice', 'Not speak', 'Be confusing'], correctAnswer: 'Have a distinct voice', points: 10 },
      { id: 'diag-7', sectionId: 'creative', type: 'multiple-choice', question: 'Punctuation in dialogue:', translation: 'Use quotation marks correctly.', options: ['Ignore it', 'Use quotation marks correctly', 'Make up rules', 'Skip it'], correctAnswer: 'Use quotation marks correctly', points: 10 },
      { id: 'diag-8', sectionId: 'creative', type: 'multiple-choice', question: 'Pause in dialogue:', translation: 'Use ellipses or dashes.', options: ['Use long sentences', 'Use ellipses or dashes', 'Nothing', 'Keep talking'], correctAnswer: 'Use ellipses or dashes', points: 10 },
      { id: 'diag-9', sectionId: 'creative', type: 'multiple-choice', question: 'Dialogue tags:', translation: 'Use "said" sparingly.', options: ['Use always', 'Use sparingly', 'Never use', 'Replace with actions'], correctAnswer: 'Use sparingly', points: 10 },
      { id: 'diag-10', sectionId: 'creative', type: 'multiple-choice', question: 'Interruptions use:', translation: 'Em dashes.', options: ['Commas', 'Em dashes', 'Nothing', 'Exclamation marks'], correctAnswer: 'Em dashes', points: 10 }
    ]
  },
  {
    id: 'setting-description-1',
    title: 'Setting Description',
    description: 'Creating vivid settings',
    icon: '🏰',
    exercises: [
      { id: 'set-1', sectionId: 'creative', type: 'multiple-choice', question: 'Setting includes:', translation: 'Time, place, and atmosphere.', options: ['Only the place', 'Time, place, and atmosphere', 'Nothing', 'Just the time'], correctAnswer: 'Time, place, and atmosphere', points: 10 },
      { id: 'set-2', sectionId: 'creative', type: 'multiple-choice', question: 'Sensory details include:', translation: 'Sight, sound, smell, taste, touch.', options: ['Only sight', 'Sight, sound, smell, taste, touch', 'Nothing', 'Just smell'], correctAnswer: 'Sight, sound, smell, taste, touch', points: 10 },
      { id: 'set-3', sectionId: 'creative', type: 'multiple-choice', question: 'The setting affects:', translation: 'The mood and story.', options: ['Nothing', 'The mood and story', 'Only the characters', 'Just the title'], correctAnswer: 'The mood and story', points: 10 },
      { id: 'set-4', sectionId: 'creative', type: 'multiple-choice', question: 'Show setting through:', translation: 'Description and details.', options: ['Telling only', 'Description and details', 'Nothing', 'Long explanations'], correctAnswer: 'Description and details', points: 10 },
      { id: 'set-5', sectionId: 'creative', type: 'multiple-choice', question: 'The setting can:', translation: 'Reflect themes.', options: ['Be ignored', 'Reflect themes', 'Be random', 'Have no meaning'], correctAnswer: 'Reflect themes', points: 10 },
      { id: 'set-6', sectionId: 'creative', type: 'multiple-choice', question: 'Historical setting needs:', translation: 'Accurate research.', options: ['No research', 'Accurate research', 'Guessing', 'Nothing'], correctAnswer: 'Accurate research', points: 10 },
      { id: 'set-7', sectionId: 'creative', type: 'multiple-choice', question: 'The atmosphere creates:', translation: 'Emotion and tension.', options: ['Confusion', 'Emotion and tension', 'Nothing', 'Just facts'], correctAnswer: 'Emotion and tension', points: 10 },
      { id: 'set-8', sectionId: 'creative', type: 'multiple-choice', question: 'Use setting to:', translation: 'Support the plot.', options: ['Slow down story', 'Support the plot', 'Confuse readers', 'Be decorative only'], correctAnswer: 'Support the plot', points: 10 },
      { id: 'set-9', sectionId: 'creative', type: 'multiple-choice', question: 'A vivid setting makes readers:', translation: 'Feel immersed.', options: ['Leave', 'Feel immersed', 'Be confused', 'Stop reading'], correctAnswer: 'Feel immersed', points: 10 },
      { id: 'set-10', sectionId: 'creative', type: 'multiple-choice', question: 'The setting can reveal:', translation: 'Character and theme.', options: ['Nothing', 'Character and theme', 'Just location', 'No importance'], correctAnswer: 'Character and theme', points: 10 }
    ]
  },
  {
    id: 'plot-structure-1',
    title: 'Plot Structure',
    description: 'Building the story arc',
    icon: '📈',
    exercises: [
      { id: 'plot-1', sectionId: 'creative', type: 'multiple-choice', question: 'The rising action:', translation: 'Builds tension toward climax.', options: ['Is the end', 'Builds tension toward climax', 'Is the beginning', 'Is not important'], correctAnswer: 'Builds tension toward climax', points: 10 },
      { id: 'plot-2', sectionId: 'creative', type: 'multiple-choice', question: 'The climax is:', translation: 'The highest point of tension.', options: ['The beginning', 'The highest point of tension', 'The ending', 'Nothing important'], correctAnswer: 'The highest point of tension', points: 10 },
      { id: 'plot-3', sectionId: 'creative', type: 'multiple-choice', question: 'The falling action:', translation: 'Resolves after the climax.', options: ['Creates more tension', 'Resolves after the climax', 'Is the climax', 'Does not exist'], correctAnswer: 'Resolves after the climax', points: 10 },
      { id: 'plot-4', sectionId: 'creative', type: 'multiple-choice', question: 'The inciting incident:', translation: 'Starts the main conflict.', options: ['Ends the story', 'Starts the main conflict', 'Is not important', 'Comes at the end'], correctAnswer: 'Starts the main conflict', points: 10 },
      { id: 'plot-5', sectionId: 'creative', type: 'multiple-choice', question: 'Exposition:', translation: 'Introduces characters and setting.', options: ['Is the climax', 'Introduces characters and setting', 'Is the ending', 'Does not exist'], correctAnswer: 'Introduces characters and setting', points: 10 },
      { id: 'plot-6', sectionId: 'creative', type: 'multiple-choice', question: 'The resolution:', translation: 'Concludes the story.', options: ['Starts the conflict', 'Concludes the story', 'Confuses readers', 'Is not needed'], correctAnswer: 'Concludes the story', points: 10 },
      { id: 'plot-7', sectionId: 'creative', type: 'multiple-choice', question: 'A subplot:', translation: 'Supports the main story.', options: ['Replaces main plot', 'Supports the main story', 'Is unrelated', 'Confuses readers'], correctAnswer: 'Supports the main story', points: 10 },
      { id: 'plot-8', sectionId: 'creative', type: 'multiple-choice', question: 'Use conflict to:', translation: 'Drive the story forward.', options: ['Stop the story', 'Drive the story forward', 'Bore readers', 'End quickly'], correctAnswer: 'Drive the story forward', points: 10 },
      { id: 'plot-9', sectionId: 'creative', type: 'multiple-choice', question: 'Turning points:', translation: 'Change the story direction.', options: ['Are not important', 'Change the story direction', 'Keep same direction', 'Are the ending'], correctAnswer: 'Change the story direction', points: 10 },
      { id: 'plot-10', sectionId: 'creative', type: 'multiple-choice', question: 'A story needs:', translation: 'Conflict and resolution.', options: ['Nothing', 'Conflict and resolution', 'Just characters', 'No plot'], correctAnswer: 'Conflict and resolution', points: 10 }
    ]
  },
  {
    id: 'point-of-view-1',
    title: 'Point of View',
    description: 'Choosing perspective',
    icon: '👁️',
    exercises: [
      { id: 'pov-1', sectionId: 'creative', type: 'multiple-choice', question: 'First person uses:', translation: 'I and tells through one character.', options: ['He or she', 'I and tells through one character', 'They', 'None'], correctAnswer: 'I and tells through one character', points: 10 },
      { id: 'pov-2', sectionId: 'creative', type: 'multiple-choice', question: 'Third person limited:', translation: 'One character thoughts are shown.', options: ['All thoughts', 'One character thoughts are shown', 'No thoughts', 'Everything'], correctAnswer: 'One character thoughts are shown', points: 10 },
      { id: 'pov-3', sectionId: 'creative', type: 'multiple-choice', question: 'Third person omniscient:', translation: 'Knows everything about all characters.', options: ['Knows only one', 'Knows everything about all characters', 'Knows nothing', 'Is limited'], correctAnswer: 'Knows everything about all characters', points: 10 },
      { id: 'pov-4', sectionId: 'creative', type: 'multiple-choice', question: 'Second person uses:', translation: 'You as the protagonist.', options: ['I', 'You as the protagonist', 'He or she', 'It'], correctAnswer: 'You as the protagonist', points: 10 },
      { id: 'pov-5', sectionId: 'creative', type: 'multiple-choice', question: 'Stay consistent with:', translation: 'Your chosen POV.', options: ['Multiple', 'Your chosen POV', 'Nothing', 'Random'], correctAnswer: 'Your chosen POV', points: 10 },
      { id: 'pov-6', sectionId: 'creative', type: 'multiple-choice', question: 'Head-hopping means:', translation: 'Changing POV in one scene.', options: ['Keeping same POV', 'Changing POV in one scene', 'Nothing', 'Using dialogue'], correctAnswer: 'Changing POV in one scene', points: 10 },
      { id: 'pov-7', sectionId: 'creative', type: 'multiple-choice', question: 'First person creates:', translation: 'Intimate connection.', options: ['Distance', 'Intimate connection', 'Confusion', 'Nothing'], correctAnswer: 'Intimate connection', points: 10 },
      { id: 'pov-8', sectionId: 'creative', type: 'multiple-choice', question: 'Third person creates:', translation: 'Some distance from characters.', options: ['Full knowledge always', 'Some distance from characters', 'No perspective', 'Confusion'], correctAnswer: 'Some distance from characters', points: 10 },
      { id: 'pov-9', sectionId: 'creative', type: 'multiple-choice', question: 'The POV limits:', translation: 'What the reader can know.', options: ['Everything', 'What the reader can know', 'Nothing', 'All knowledge'], correctAnswer: 'What the reader can know', points: 10 },
      { id: 'pov-10', sectionId: 'creative', type: 'multiple-choice', question: 'Choose POV based on:', translation: 'Story needs.', options: ['Randomly', 'Story needs', 'What is hardest', 'Nothing'], correctAnswer: 'Story needs', points: 10 }
    ]
  },
  {
    id: 'show-dont-tell-1',
    title: 'Show, Do Not Tell',
    description: 'Demonstrating instead of stating',
    icon: '🎬',
    exercises: [
      { id: 'sdt-1', sectionId: 'creative', type: 'multiple-choice', question: '"She was angry" is:', translation: 'Telling.', options: ['Showing', 'Telling', 'Nothing', 'Describing'], correctAnswer: 'Telling', points: 10 },
      { id: 'sdt-2', sectionId: 'creative', type: 'multiple-choice', question: '"She slammed the door" is:', translation: 'Showing.', options: ['Telling', 'Showing', 'Nothing', 'Boring'], correctAnswer: 'Showing', points: 10 },
      { id: 'sdt-3', sectionId: 'creative', type: 'multiple-choice', question: 'Show through:', translation: 'Actions, dialogue, and senses.', options: ['Direct statements', 'Actions, dialogue, and senses', 'Just telling', 'Nothing'], correctAnswer: 'Actions, dialogue, and senses', points: 10 },
      { id: 'sdt-4', sectionId: 'creative', type: 'multiple-choice', question: '"He was happy" becomes:', translation: '"He smiled broadly."', options: ['Keep same', '"He smiled broadly."', '"He was happy"', '"He felt good"'], correctAnswer: '"He smiled broadly."', points: 10 },
      { id: 'sdt-5', sectionId: 'creative', type: 'multiple-choice', question: 'Emotions shown through:', translation: 'Physical reactions.', options: ['Direct telling', 'Physical reactions', 'Nothing', 'Just saying'], correctAnswer: 'Physical reactions', points: 10 },
      { id: 'sdt-6', sectionId: 'creative', type: 'multiple-choice', question: 'Use sensory details to:', translation: 'Make scenes vivid.', options: ['Make longer', 'Make scenes vivid', 'Confuse readers', 'Be vague'], correctAnswer: 'Make scenes vivid', points: 10 },
      { id: 'sdt-7', sectionId: 'creative', type: 'multiple-choice', question: 'Show instead of telling:', translation: 'Engages the reader.', options: ['Bores the reader', 'Engages the reader', 'Does nothing', 'Is the same'], correctAnswer: 'Engages the reader', points: 10 },
      { id: 'sdt-8', sectionId: 'creative', type: 'multiple-choice', question: 'Instead of "The room was scary":', translation: 'Describe specific scary details.', options: ['Keep same', 'Describe specific scary details', 'Say it is scary', 'Nothing'], correctAnswer: 'Describe specific scary details', points: 10 },
      { id: 'sdt-9', sectionId: 'creative', type: 'multiple-choice', question: 'Show the setting through:', translation: 'What characters experience.', options: ['Long explanations', 'What characters experience', 'Just facts', 'Nothing'], correctAnswer: 'What characters experience', points: 10 },
      { id: 'sdt-10', sectionId: 'creative', type: 'multiple-choice', question: 'Finding the balance means:', translation: 'Show important, tell less important.', options: ['Always show', 'Show important, tell less important', 'Never show', 'Show nothing'], correctAnswer: 'Show important, tell less important', points: 10 }
    ]
  },
  {
    id: 'story-endings-1',
    title: 'Story Endings',
    description: 'Creating satisfying conclusions',
    icon: '🏁',
    exercises: [
      { id: 'end-1', sectionId: 'creative', type: 'multiple-choice', question: 'A good ending:', translation: 'Resolves the main conflict.', options: ['Creates new problems', 'Resolves the main conflict', 'Is confusing', 'Has no relation'], correctAnswer: 'Resolves the main conflict', points: 10 },
      { id: 'end-2', sectionId: 'creative', type: 'multiple-choice', question: 'The ending should feel:', translation: 'Inevitable yet surprising.', options: ['Random', 'Inevitable yet surprising', 'Forced', 'Unfinished'], correctAnswer: 'Inevitable yet surprising', points: 10 },
      { id: 'end-3', sectionId: 'creative', type: 'multiple-choice', question: 'Avoid:', translation: 'Deus ex machina endings.', options: ['Good endings', 'Deus ex machina endings', 'Logical endings', 'Satisfying endings'], correctAnswer: 'Deus ex machina endings', points: 10 },
      { id: 'end-4', sectionId: 'creative', type: 'multiple-choice', question: 'Open endings:', translation: 'Leave some questions unanswered.', options: ['Answer everything', 'Leave some questions unanswered', 'Are not valid', 'Confuse readers'], correctAnswer: 'Leave some questions unanswered', points: 10 },
      { id: 'end-5', sectionId: 'creative', type: 'multiple-choice', question: 'The ending should reflect:', translation: 'The themes of the story.', options: ['Nothing', 'The themes of the story', 'Something random', 'Just the title'], correctAnswer: 'The themes of the story', points: 10 },
      { id: 'end-6', sectionId: 'creative', type: 'multiple-choice', question: 'Character changes should be:', translation: 'Reflected in the ending.', options: ['Ignored', 'Reflected in the ending', 'Unimportant', 'Reversed'], correctAnswer: 'Reflected in the ending', points: 10 },
      { id: 'end-7', sectionId: 'creative', type: 'multiple-choice', question: 'A twist ending:', translation: 'Surprises the reader.', options: ['Is expected', 'Surprises the reader', 'Is not effective', 'Has no purpose'], correctAnswer: 'Surprises the reader', points: 10 },
      { id: 'end-8', sectionId: 'creative', type: 'multiple-choice', question: 'The final image should be:', translation: 'Memorable.', options: ['Forgettable', 'Memorable', 'Long', 'Unimportant'], correctAnswer: 'Memorable', points: 10 },
      { id: 'end-9', sectionId: 'creative', type: 'multiple-choice', question: 'Avoid info dumps in:', translation: 'The ending.', options: ['The beginning', 'The ending', 'The middle', 'Everywhere'], correctAnswer: 'The ending', points: 10 },
      { id: 'end-10', sectionId: 'creative', type: 'multiple-choice', question: 'The ending can look forward by:', translation: 'Suggesting future possibilities.', options: ['Closing everything', 'Suggesting future possibilities', 'Being final', 'Having no meaning'], correctAnswer: 'Suggesting future possibilities', points: 10 }
    ]
  }
];