import { ExercisePack } from '../academy';

export const paragraphWritingExercisePacks: ExercisePack[] = [
  {
    id: 'topic-sentence-1',
    title: 'Topic Sentence',
    description: 'Practice writing topic sentences',
    icon: '📄',
    exercises: [
      { id: 'topic-ex1', sectionId: 'paragraph', type: 'multiple-choice', question: 'Which is the best topic sentence?', translation: 'Dogs make great pets because they are loyal.', options: ['Dogs are animals.', 'Dogs make great pets because they are loyal.', 'I like dogs.', 'Dogs need food.'], correctAnswer: 'Dogs make great pets because they are loyal.', points: 10 },
      { id: 'topic-ex2', sectionId: 'paragraph', type: 'multiple-choice', question: 'Which is the best topic sentence?', translation: 'Exercise is important for health.', options: ['Exercise is fun.', 'Exercise is important for health.', 'I exercise daily.', 'Health matters.'], correctAnswer: 'Exercise is important for health.', points: 10 }
    ]
  },
  {
    id: 'supporting-details-1',
    title: 'Supporting Details',
    description: 'Practice adding details',
    icon: '📋',
    exercises: [
      { id: 'supp-ex1', sectionId: 'paragraph', type: 'multiple-choice', question: 'Which sentence is a supporting detail?', translation: 'For example, my dog learns new tricks quickly.', options: ['My dog is smart.', 'For example, my dog learns new tricks quickly.', 'Dogs are smart.', 'I love my dog.'], correctAnswer: 'For example, my dog learns new tricks quickly.', points: 10 }
    ]
  },
  {
    id: 'paragraph-structure-1',
    title: 'Paragraph Structure',
    description: 'Topic, body, conclusion',
    icon: '🏗️',
    exercises: [
      { id: 'para-struct-1', sectionId: 'paragraph', type: 'multiple-choice', question: 'What are the three parts of a paragraph?', translation: 'Topic sentence, supporting details, and concluding sentence.', options: ['Introduction, body, conclusion', 'Topic sentence, supporting details, concluding sentence', 'Main idea, examples, summary', 'Hook, argument, ending'], correctAnswer: 'Topic sentence, supporting details, concluding sentence', points: 10 },
      { id: 'para-struct-2', sectionId: 'paragraph', type: 'multiple-choice', question: 'What is the main idea of a paragraph?', translation: 'The central point or message.', options: ['The first sentence', 'The central point or message', 'The examples', 'The conclusion'], correctAnswer: 'The central point or message', points: 10 },
      { id: 'para-struct-3', sectionId: 'paragraph', type: 'multiple-choice', question: 'Supporting details should:', translation: 'Support and explain the main idea.', options: ['Be unrelated to the topic', 'Support and explain the main idea', 'Be longer than the topic', 'Be at the beginning only'], correctAnswer: 'Support and explain the main idea', points: 10 },
      { id: 'para-struct-4', sectionId: 'paragraph', type: 'multiple-choice', question: 'The concluding sentence:', translation: 'Summarizes the paragraph.', options: ['Introduces new ideas', 'Summarizes the paragraph', 'Is always a question', 'Is the longest sentence'], correctAnswer: 'Summarizes the paragraph', points: 10 },
      { id: 'para-struct-5', sectionId: 'paragraph', type: 'multiple-choice', question: 'A paragraph usually has:', translation: '5-8 sentences.', options: ['1-2 sentences', '5-8 sentences', '15-20 sentences', 'No specific number'], correctAnswer: '5-8 sentences', points: 10 },
      { id: 'para-struct-6', sectionId: 'paragraph', type: 'multiple-choice', question: 'The topic sentence is usually:', translation: 'At the beginning of the paragraph.', options: ['At the end', 'In the middle', 'At the beginning', 'Nowhere'], correctAnswer: 'At the beginning', points: 10 },
      { id: 'para-struct-7', sectionId: 'paragraph', type: 'multiple-choice', question: 'Unity in a paragraph means:', translation: 'All sentences support one main idea.', options: ['Using many different ideas', 'All sentences support one main idea', 'Having long sentences', 'Using complex words'], correctAnswer: 'All sentences support one main idea', points: 10 },
      { id: 'para-struct-8', sectionId: 'paragraph', type: 'multiple-choice', question: 'Coherence in a paragraph means:', translation: 'Ideas flow logically.', options: ['Using difficult vocabulary', 'Ideas flow logically', 'Having many short sentences', 'Using only one type of sentence'], correctAnswer: 'Ideas flow logically', points: 10 },
      { id: 'para-struct-9', sectionId: 'paragraph', type: 'multiple-choice', question: 'Transition words help with:', translation: 'Flow and coherence.', options: ['Making sentences longer', 'Flow and coherence', 'Adding more ideas', 'Ending sentences'], correctAnswer: 'Flow and coherence', points: 10 },
      { id: 'para-struct-10', sectionId: 'paragraph', type: 'multiple-choice', question: 'A good paragraph should be:', translation: 'Focused on one main idea.', options: ['About many topics', 'Focused on one main idea', 'As long as possible', 'Full of quotes'], correctAnswer: 'Focused on one main idea', points: 10 }
    ]
  },
  {
    id: 'coherence-flow-1',
    title: 'Coherence and Flow',
    description: 'Logical progression of ideas',
    icon: '🌊',
    exercises: [
      { id: 'coh-1', sectionId: 'paragraph', type: 'multiple-choice', question: 'Which creates better flow?', translation: 'Using transition words.', options: ['Random sentence order', 'Using transition words', 'Long paragraphs', 'Many short sentences'], correctAnswer: 'Using transition words', points: 10 },
      { id: 'coh-2', sectionId: 'paragraph', type: 'multiple-choice', question: '"First, Second, Finally" shows:', translation: 'Sequence order.', options: ['Contrast', 'Sequence order', 'Cause and effect', 'Examples'], correctAnswer: 'Sequence order', points: 10 },
      { id: 'coh-3', sectionId: 'paragraph', type: 'multiple-choice', question: '"However" shows:', translation: 'Contrast.', options: ['Sequence', 'Contrast', 'Addition', 'Example'], correctAnswer: 'Contrast', points: 10 },
      { id: 'coh-4', sectionId: 'paragraph', type: 'multiple-choice', question: '"For example" shows:', translation: 'Example.', options: ['Sequence', 'Contrast', 'Example', 'Conclusion'], correctAnswer: 'Example', points: 10 },
      { id: 'coh-5', sectionId: 'paragraph', type: 'multiple-choice', question: '"As a result" shows:', translation: 'Cause and effect.', options: ['Sequence', 'Contrast', 'Cause and effect', 'Addition'], correctAnswer: 'Cause and effect', points: 10 },
      { id: 'coh-6', sectionId: 'paragraph', type: 'multiple-choice', question: 'Using consistent verb tense helps:', translation: 'Flow and clarity.', options: ['Add words', 'Flow and clarity', 'Make it longer', 'Use more adjectives'], correctAnswer: 'Flow and clarity', points: 10 },
      { id: 'coh-7', sectionId: 'paragraph', type: 'multiple-choice', question: 'Pronoun reference should be:', translation: 'Clear and consistent.', options: ['Always avoid pronouns', 'Clear and consistent', 'Use many pronouns', 'Change frequently'], correctAnswer: 'Clear and consistent', points: 10 },
      { id: 'coh-8', sectionId: 'paragraph', type: 'multiple-choice', question: '"Furthermore" shows:', translation: 'Addition.', options: ['Sequence', 'Contrast', 'Addition', 'Example'], correctAnswer: 'Addition', points: 10 },
      { id: 'coh-9', sectionId: 'paragraph', type: 'multiple-choice', question: '"In conclusion" shows:', translation: 'Conclusion.', options: ['Addition', 'Example', 'Conclusion', 'Sequence'], correctAnswer: 'Conclusion', points: 10 },
      { id: 'coh-10', sectionId: 'paragraph', type: 'multiple-choice', question: 'Logical order helps:', translation: 'Reader understanding.', options: ['Make writing longer', 'Reader understanding', 'Use more words', 'Add details only'], correctAnswer: 'Reader understanding', points: 10 }
    ]
  },
  {
    id: 'concluding-sentence-1',
    title: 'Concluding Sentences',
    description: 'How to end a paragraph',
    icon: '🏁',
    exercises: [
      { id: 'conc-1', sectionId: 'paragraph', type: 'multiple-choice', question: 'A concluding sentence should:', translation: 'Summarize the main idea.', options: ['Introduce a new topic', 'Summarize the main idea', 'Be the longest sentence', 'Be a question'], correctAnswer: 'Summarize the main idea', points: 10 },
      { id: 'conc-2', sectionId: 'paragraph', type: 'multiple-choice', question: 'Which is a good concluding sentence?', translation: 'Therefore, regular exercise is essential for good health.', options: ['Exercise is good.', 'Therefore, regular exercise is essential for good health.', 'I like exercise.', 'Health is important.'], correctAnswer: 'Therefore, regular exercise is essential for good health.', points: 10 },
      { id: 'conc-3', sectionId: 'paragraph', type: 'multiple-choice', question: 'Avoid in conclusions:', translation: 'Introducing new information.', options: ['Summarizing', 'Introducing new information', 'Restating main idea', 'Final thoughts'], correctAnswer: 'Introducing new information', points: 10 },
      { id: 'conc-4', sectionId: 'paragraph', type: 'multiple-choice', question: 'A concluding sentence can:', translation: 'Restate the topic sentence in different words.', options: ['Start a new paragraph', 'Restate the topic sentence in different words', 'Only be one word', 'Never restate'], correctAnswer: 'Restate the topic sentence in different words', points: 10 },
      { id: 'conc-5', sectionId: 'paragraph', type: 'multiple-choice', question: '"In summary" is used to:', translation: 'Signal conclusion.', options: ['Add more details', 'Signal conclusion', 'Give examples', 'Show contrast'], correctAnswer: 'Signal conclusion', points: 10 },
      { id: 'conc-6', sectionId: 'paragraph', type: 'multiple-choice', question: 'A concluding sentence often uses:', translation: 'Words like: finally, in short, thus.', options: ['First', 'Words like: finally, in short, thus', 'Maybe', 'Question marks'], correctAnswer: 'Words like: finally, in short, thus', points: 10 },
      { id: 'conc-7', sectionId: 'paragraph', type: 'multiple-choice', question: 'The concluding sentence should:', translation: 'Create a final impression.', options: ['Confuse the reader', 'Create a final impression', 'Be very long', 'Always be a question'], correctAnswer: 'Create a final impression', points: 10 },
      { id: 'conc-8', sectionId: 'paragraph', type: 'multiple-choice', question: 'Restating is not:', translation: 'Copying the topic sentence exactly.', options: ['Summarizing', 'Copying the topic sentence exactly', 'Paraphrasing', 'Revisiting the main idea'], correctAnswer: 'Copying the topic sentence exactly', points: 10 },
      { id: 'conc-9', sectionId: 'paragraph', type: 'multiple-choice', question: 'A strong conclusion:', translation: 'Leaves the reader satisfied.', options: ['Leaves questions unanswered', 'Leaves the reader satisfied', 'Adds new arguments', 'Is always short'], correctAnswer: 'Leaves the reader satisfied', points: 10 },
      { id: 'conc-10', sectionId: 'paragraph', type: 'multiple-choice', question: 'The concluding sentence connects:', translation: 'Back to the topic sentence.', options: ['To the introduction', 'Back to the topic sentence', 'To the next paragraph', 'To nothing'], correctAnswer: 'Back to the topic sentence', points: 10 }
    ]
  },
  {
    id: 'supporting-examples-1',
    title: 'Supporting Examples',
    description: 'Types of supporting details',
    icon: '📊',
    exercises: [
      { id: 'supp-ex-1', sectionId: 'paragraph', type: 'multiple-choice', question: 'Which is the best example?', translation: 'For instance, many people now work from home.', options: ['Many people work.', 'For instance, many people now work from home.', 'Working is good.', 'People work a lot.'], correctAnswer: 'For instance, many people now work from home.', points: 10 },
      { id: 'supp-ex-2', sectionId: 'paragraph', type: 'multiple-choice', question: 'Statistics are:', translation: 'Numbers and data.', options: ['Personal opinions', 'Numbers and data', 'Stories', 'Questions'], correctAnswer: 'Numbers and data', points: 10 },
      { id: 'supp-ex-3', sectionId: 'paragraph', type: 'multiple-choice', question: 'Anecdotes are:', translation: 'Short personal stories.', options: ['Facts and figures', 'Short personal stories', 'Definitions', 'Conclusions'], correctAnswer: 'Short personal stories', points: 10 },
      { id: 'supp-ex-4', sectionId: 'paragraph', type: 'multiple-choice', question: 'Quotes from experts:', translation: 'Add credibility.', options: ['Make writing longer', 'Add credibility', 'Are not helpful', 'Confuse readers'], correctAnswer: 'Add credibility', points: 10 },
      { id: 'supp-ex-5', sectionId: 'paragraph', type: 'multiple-choice', question: '"According to" is used to:', translation: 'Introduce expert opinions.', options: ['Give personal opinions', 'Introduce expert opinions', 'End paragraphs', 'Start sentences'], correctAnswer: 'Introduce expert opinions', points: 10 },
      { id: 'supp-ex-6', sectionId: 'paragraph', type: 'multiple-choice', question: 'Supporting details should be:', translation: 'Relevant and specific.', options: ['Random and general', 'Relevant and specific', 'Long and complicated', 'Full of errors'], correctAnswer: 'Relevant and specific', points: 10 },
      { id: 'supp-ex-7', sectionId: 'paragraph', type: 'multiple-choice', question: 'How many examples per paragraph?', translation: '2-3 strong examples.', options: ['10-15', '2-3 strong examples', 'Only one', 'None'], correctAnswer: '2-3 strong examples', points: 10 },
      { id: 'supp-ex-8', sectionId: 'paragraph', type: 'multiple-choice', question: 'Explanations:', translation: 'Explain how the example supports the point.', options: ['Are the main idea', 'Explain how the example supports the point', 'Are not needed', 'Replace the topic'], correctAnswer: 'Explain how the example supports the point', points: 10 },
      { id: 'supp-ex-9', sectionId: 'paragraph', type: 'multiple-choice', question: 'Vivid details help:', translation: 'Make writing more interesting.', options: ['Make writing shorter', 'Make writing more interesting', 'Are not important', 'Confuse readers'], correctAnswer: 'Make writing more interesting', points: 10 },
      { id: 'supp-ex-10', sectionId: 'paragraph', type: 'multiple-choice', question: 'The best supporting details:', translation: 'Clearly support the topic sentence.', options: ['Are the longest', 'Clearly support the topic sentence', 'Are quotes only', 'Are questions'], correctAnswer: 'Clearly support the topic sentence', points: 10 }
    ]
  },
  {
    id: 'paragraph-types-1',
    title: 'Types of Paragraphs',
    description: 'Narrative, descriptive, expository',
    icon: '📝',
    exercises: [
      { id: 'para-type-1', sectionId: 'paragraph', type: 'multiple-choice', question: 'A narrative paragraph:', translation: 'Tells a story.', options: ['Explains something', 'Tells a story', 'Describes a place', 'Argues a point'], correctAnswer: 'Tells a story', points: 10 },
      { id: 'para-type-2', sectionId: 'paragraph', type: 'multiple-choice', question: 'A descriptive paragraph:', translation: 'Describes a person, place, or thing.', options: ['Tells a story', 'Describes a person, place, or thing', 'Gives arguments', 'Asks questions'], correctAnswer: 'Describes a person, place, or thing', points: 10 },
      { id: 'para-type-3', sectionId: 'paragraph', type: 'multiple-choice', question: 'An expository paragraph:', translation: 'Explains or informs.', options: ['Tells a story', 'Describes something', 'Explains or informs', 'Argues a point'], correctAnswer: 'Explains or informs', points: 10 },
      { id: 'para-type-4', sectionId: 'paragraph', type: 'multiple-choice', question: 'A persuasive paragraph:', translation: 'Tries to convince the reader.', options: ['Describes a scene', 'Tries to convince the reader', 'Explains facts', 'Tells a story'], correctAnswer: 'Tries to convince the reader', points: 10 },
      { id: 'para-type-5', sectionId: 'paragraph', type: 'multiple-choice', question: 'Time order is common in:', translation: 'Narrative paragraphs.', options: ['Descriptive', 'Narrative', 'Explanatory', 'Argumentative'], correctAnswer: 'Narrative paragraphs', points: 10 },
      { id: 'para-type-6', sectionId: 'paragraph', type: 'multiple-choice', question: 'Spatial order is common in:', translation: 'Descriptive paragraphs.', options: ['Narrative', 'Descriptive', 'Expository', 'Persuasive'], correctAnswer: 'Descriptive paragraphs', points: 10 },
      { id: 'para-type-7', sectionId: 'paragraph', type: 'multiple-choice', question: 'Cause and effect is common in:', translation: 'Expository paragraphs.', options: ['Narrative', 'Descriptive', 'Expository', 'Persuasive'], correctAnswer: 'Expository paragraphs', points: 10 },
      { id: 'para-type-8', sectionId: 'paragraph', type: 'multiple-choice', question: 'Opinion words are common in:', translation: 'Persuasive paragraphs.', options: ['Descriptive', 'Narrative', 'Expository', 'Persuasive'], correctAnswer: 'Persuasive paragraphs', points: 10 },
      { id: 'para-type-9', sectionId: 'paragraph', type: 'multiple-choice', question: 'Sensory details are key in:', translation: 'Descriptive paragraphs.', options: ['Narrative', 'Descriptive', 'Expository', 'Persuasive'], correctAnswer: 'Descriptive paragraphs', points: 10 },
      { id: 'para-type-10', sectionId: 'paragraph', type: 'multiple-choice', question: 'A process paragraph explains:', translation: 'How to do something.', options: ['What happened', 'How to do something', 'What something looks like', 'Why something is true'], correctAnswer: 'How to do something', points: 10 }
    ]
  },
  {
    id: 'unity-coherence-1',
    title: 'Unity and Coherence Practice',
    description: 'Putting it all together',
    icon: '🎯',
    exercises: [
      { id: 'uac-1', sectionId: 'paragraph', type: 'multiple-choice', question: 'A unified paragraph has:', translation: 'All sentences about one topic.', options: ['Many different topics', 'All sentences about one topic', 'No clear topic', 'Long and complex sentences'], correctAnswer: 'All sentences about one topic', points: 10 },
      { id: 'uac-2', sectionId: 'paragraph', type: 'multiple-choice', question: 'To check unity, ask:', translation: 'Does each sentence support the main idea?', options: ['Is it long enough?', 'Does each sentence support the main idea?', 'Are there many quotes?', 'Is it interesting?'], correctAnswer: 'Does each sentence support the main idea?', points: 10 },
      { id: 'uac-3', sectionId: 'paragraph', type: 'multiple-choice', question: 'A coherent paragraph has:', translation: 'Clear connections between ideas.', options: ['Long sentences', 'Clear connections between ideas', 'Many different topics', 'No transitions'], correctAnswer: 'Clear connections between ideas', points: 10 },
      { id: 'uac-4', sectionId: 'paragraph', type: 'multiple-choice', question: 'To improve coherence, use:', translation: 'Transitions and logical order.', options: ['Longer sentences', 'Transitions and logical order', 'More quotes', 'Complex vocabulary'], correctAnswer: 'Transitions and logical order', points: 10 },
      { id: 'uac-5', sectionId: 'paragraph', type: 'multiple-choice', question: 'If a sentence does not fit:', translation: 'Remove or revise it.', options: ['Keep it anyway', 'Remove or revise it', 'Make it longer', 'Ignore it'], correctAnswer: 'Remove or revise it', points: 10 },
      { id: 'uac-6', sectionId: 'paragraph', type: 'multiple-choice', question: 'The topic sentence controls:', translation: 'The content of the paragraph.', options: ['Only the first sentence', 'The content of the paragraph', 'Nothing', 'The next paragraph'], correctAnswer: 'The content of the paragraph', points: 10 },
      { id: 'uac-7', sectionId: 'paragraph', type: 'multiple-choice', question: 'Strong paragraphs have:', translation: 'Clear purpose and organization.', options: ['As many sentences as possible', 'Clear purpose and organization', 'No topic sentence', 'Random ideas'], correctAnswer: 'Clear purpose and organization', points: 10 },
      { id: 'uac-8', sectionId: 'paragraph', type: 'multiple-choice', question: 'Repetition of key words:', translation: 'Helps with coherence.', options: ['Is always bad', 'Helps with coherence', 'Makes writing confusing', 'Is not allowed'], correctAnswer: 'Helps with coherence', points: 10 },
      { id: 'uac-9', sectionId: 'paragraph', type: 'multiple-choice', question: 'A good test of unity:', translation: 'Can you state the main idea in one sentence?', options: ['Is it 10 sentences?', 'Can you state the main idea in one sentence?', 'Are there quotes?', 'Is it interesting?'], correctAnswer: 'Can you state the main idea in one sentence?', points: 10 },
      { id: 'uac-10', sectionId: 'paragraph', type: 'multiple-choice', question: 'For coherence, sentences should:', translation: 'Build on each other.', options: ['Be independent', 'Build on each other', 'All be the same length', 'Have no connections'], correctAnswer: 'Build on each other', points: 10 }
    ]
  }
];