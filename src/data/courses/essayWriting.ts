import { ExercisePack } from '../academy';

export const essayWritingExercisePacks: ExercisePack[] = [
  {
    id: 'essay-intro-1',
    title: 'Introduction',
    description: 'Practice writing introductions',
    icon: '📝',
    exercises: [
      { id: 'ess-int-ex1', sectionId: 'essay', type: 'multiple-choice', question: 'Which is the best introduction?', translation: 'Technology has changed how we communicate. This essay will discuss the benefits and drawbacks.', options: ['Technology is good.', 'Technology has changed how we communicate. This essay will discuss the benefits and drawbacks.', 'I use technology.', 'Technology is bad.'], correctAnswer: 'Technology has changed how we communicate. This essay will discuss the benefits and drawbacks.', points: 10 }
    ]
  },
  {
    id: 'essay-conclusion-1',
    title: 'Conclusion',
    description: 'Practice writing conclusions',
    icon: '📝',
    exercises: [
      { id: 'ess-conc-ex1', sectionId: 'essay', type: 'multiple-choice', question: 'Which is the best conclusion?', translation: 'In conclusion, technology greatly improves our lives.', options: ['Technology is useful.', 'In conclusion, technology greatly improves our lives.', 'I like technology.', 'Technology helps us.'], correctAnswer: 'In conclusion, technology greatly improves our lives.', points: 10 }
    ]
  },
  {
    id: 'essay-body-paragraphs-1',
    title: 'Body Paragraphs',
    description: 'Developing essay body',
    icon: '📖',
    exercises: [
      { id: 'ess-body-1', sectionId: 'essay', type: 'multiple-choice', question: 'How many body paragraphs are typical?', translation: '2-3 paragraphs.', options: ['1 paragraph', '2-3 paragraphs', '5-6 paragraphs', 'No limit'], correctAnswer: '2-3 paragraphs', points: 10 },
      { id: 'ess-body-2', sectionId: 'essay', type: 'multiple-choice', question: 'Each body paragraph should have:', translation: 'Topic sentence, supporting details, and transition.', options: ['Just examples', 'Topic sentence, supporting details, and transition', 'Only one idea', 'No structure'], correctAnswer: 'Topic sentence, supporting details, and transition', points: 10 },
      { id: 'ess-body-3', sectionId: 'essay', type: 'multiple-choice', question: 'The topic sentence of a body paragraph:', translation: 'Relates to the thesis statement.', options: ['Is always the same', 'Relates to the thesis statement', 'Is not important', 'Comes at the end'], correctAnswer: 'Relates to the thesis statement', points: 10 },
      { id: 'ess-body-4', sectionId: 'essay', type: 'multiple-choice', question: 'Evidence in body paragraphs can include:', translation: 'Examples, statistics, quotes, and anecdotes.', options: ['Only opinions', 'Examples, statistics, quotes, and anecdotes', 'Only personal stories', 'Nothing'], correctAnswer: 'Examples, statistics, quotes, and anecdotes', points: 10 },
      { id: 'ess-body-5', sectionId: 'essay', type: 'multiple-choice', question: 'Analysis should explain:', translation: 'How the evidence supports the point.', options: ['What others think', 'How the evidence supports the point', 'Nothing', 'Only what happened'], correctAnswer: 'How the evidence supports the point', points: 10 },
      { id: 'ess-body-6', sectionId: 'essay', type: 'multiple-choice', question: 'Paragraphs should be organized:', translation: 'Logically with clear transitions.', options: ['Randomly', 'Logically with clear transitions', 'Without order', 'In any way'], correctAnswer: 'Logically with clear transitions', points: 10 },
      { id: 'ess-body-7', sectionId: 'essay', type: 'multiple-choice', question: 'Counter-arguments should:', translation: 'Be addressed and rebutted.', options: ['Be ignored', 'Be addressed and rebutted', 'Only be mentioned', 'Not exist'], correctAnswer: 'Be addressed and rebutted', points: 10 },
      { id: 'ess-body-8', sectionId: 'essay', type: 'multiple-choice', question: 'Each body paragraph should focus on:', translation: 'One main idea.', options: ['Many different ideas', 'One main idea', 'Whatever comes to mind', 'The introduction'], correctAnswer: 'One main idea', points: 10 },
      { id: 'ess-body-9', sectionId: 'essay', type: 'multiple-choice', question: 'The best transitions are:', translation: 'Logical and smooth.', options: ['Random', 'Logical and smooth', 'Very long', 'Not needed'], correctAnswer: 'Logical and smooth', points: 10 },
      { id: 'ess-body-10', sectionId: 'essay', type: 'multiple-choice', question: 'A weak body paragraph lacks:', translation: 'Clear evidence and analysis.', options: ['Many quotes', 'Clear evidence and analysis', 'Long sentences', 'Questions'], correctAnswer: 'Clear evidence and analysis', points: 10 }
    ]
  },
  {
    id: 'thesis-statement-1',
    title: 'Thesis Statement',
    description: 'Creating strong thesis',
    icon: '💡',
    exercises: [
      { id: 'thesis-1', sectionId: 'essay', type: 'multiple-choice', question: 'A thesis statement should be:', translation: 'Specific and debatable.', options: ['Very short', 'Specific and debatable', 'A question', 'Very long'], correctAnswer: 'Specific and debatable', points: 10 },
      { id: 'thesis-2', sectionId: 'essay', type: 'multiple-choice', question: 'The thesis statement belongs in:', translation: 'The introduction paragraph.', options: ['The conclusion', 'The introduction paragraph', 'Any paragraph', 'The title'], correctAnswer: 'The introduction paragraph', points: 10 },
      { id: 'thesis-3', sectionId: 'essay', type: 'multiple-choice', question: 'A weak thesis is:', translation: 'Vague and general.', options: ['Clear and specific', 'Vague and general', 'Debatable', 'Well-supported'], correctAnswer: 'Vague and general', points: 10 },
      { id: 'thesis-4', sectionId: 'essay', type: 'multiple-choice', question: '"Technology is good" is:', translation: 'Too simple to be a thesis.', options: ['A good thesis', 'Too simple to be a thesis', 'Very specific', 'Argument enough'], correctAnswer: 'Too simple to be a thesis', points: 10 },
      { id: 'thesis-5', sectionId: 'essay', type: 'multiple-choice', question: 'A strong thesis includes:', translation: 'Your main arguments.', options: ['All details', 'Your main arguments', 'Nothing specific', 'Only questions'], correctAnswer: 'Your main arguments', points: 10 },
      { id: 'thesis-6', sectionId: 'essay', type: 'multiple-choice', question: 'The thesis guides:', translation: 'The entire essay.', options: ['Nothing', 'The entire essay', 'Just the introduction', 'Only the conclusion'], correctAnswer: 'The entire essay', points: 10 },
      { id: 'thesis-7', sectionId: 'essay', type: 'multiple-choice', question: 'A thesis can be revised:', translation: 'Throughout the writing process.', options: ['Never', 'Throughout the writing process', 'Only once', 'At the end only'], correctAnswer: 'Throughout the writing process', points: 10 },
      { id: 'thesis-8', sectionId: 'essay', type: 'multiple-choice', question: 'A good thesis is:', translation: 'Clear and focused.', options: ['Confusing', 'Clear and focused', 'Very long', 'A question'], correctAnswer: 'Clear and focused', points: 10 },
      { id: 'thesis-9', sectionId: 'essay', type: 'multiple-choice', question: 'The thesis statement controls:', translation: 'What you write in the essay.', options: ['Nothing', 'What you write in the essay', 'Only the title', 'Just the introduction'], correctAnswer: 'What you write in the essay', points: 10 },
      { id: 'thesis-10', sectionId: 'essay', type: 'multiple-choice', question: 'Avoid in a thesis:', translation: 'Vague language and facts.', options: ['Arguments', 'Vague language and facts', 'Specific claims', 'Debatable points'], correctAnswer: 'Vague language and facts', points: 10 }
    ]
  },
  {
    id: 'essay-types-1',
    title: 'Essay Types',
    description: 'Different essay formats',
    icon: '📚',
    exercises: [
      { id: 'ess-type-1', sectionId: 'essay', type: 'multiple-choice', question: 'An argumentative essay:', translation: 'Presents and argues a position.', options: ['Only describes', 'Presents and argues a position', 'Tells a story', 'Explains everything'], correctAnswer: 'Presents and argues a position', points: 10 },
      { id: 'ess-type-2', sectionId: 'essay', type: 'multiple-choice', question: 'An expository essay:', translation: 'Explains or informs.', options: ['Argues a point', 'Explains or informs', 'Tells fiction', 'Persuades'], correctAnswer: 'Explains or informs', points: 10 },
      { id: 'ess-type-3', sectionId: 'essay', type: 'multiple-choice', question: 'A narrative essay:', translation: 'Tells a story.', options: ['Explains facts', 'Tells a story', 'Argues a position', 'Compares things'], correctAnswer: 'Tells a story', points: 10 },
      { id: 'ess-type-4', sectionId: 'essay', type: 'multiple-choice', question: 'A compare and contrast essay:', translation: 'Shows similarities and differences.', options: ['Tells a story', 'Shows similarities and differences', 'Persuades readers', 'Explains a process'], correctAnswer: 'Shows similarities and differences', points: 10 },
      { id: 'ess-type-5', sectionId: 'essay', type: 'multiple-choice', question: 'A cause and effect essay:', translation: 'Explains reasons and results.', options: ['Only describes', 'Explains reasons and results', 'Compares two things', 'Tells a story'], correctAnswer: 'Explains reasons and results', points: 10 },
      { id: 'ess-type-6', sectionId: 'essay', type: 'multiple-choice', question: 'A persuasive essay aims to:', translation: 'Convince the reader.', options: ['Inform', 'Convince the reader', 'Entertain', 'Explain'], correctAnswer: 'Convince the reader', points: 10 },
      { id: 'ess-type-7', sectionId: 'essay', type: 'multiple-choice', question: 'For a process essay, use:', translation: 'Sequential order.', options: ['Random order', 'Sequential order', 'No order', 'Cause first'], correctAnswer: 'Sequential order', points: 10 },
      { id: 'ess-type-8', sectionId: 'essay', type: 'multiple-choice', question: 'A definition essay:', translation: 'Explains what something means.', options: ['Argues a point', 'Explains what something means', 'Compares things', 'Tells a story'], correctAnswer: 'Explains what something means', points: 10 },
      { id: 'ess-type-9', sectionId: 'essay', type: 'multiple-choice', question: 'The five-paragraph essay has:', translation: 'Introduction, 3 body paragraphs, conclusion.', options: ['Just introduction', 'Introduction, 3 body paragraphs, conclusion', 'No structure', 'Many paragraphs'], correctAnswer: 'Introduction, 3 body paragraphs, conclusion', points: 10 },
      { id: 'ess-type-10', sectionId: 'essay', type: 'multiple-choice', question: 'Critical essays:', translation: 'Analyze and evaluate.', options: ['Only describe', 'Analyze and evaluate', 'Copy others', 'Are not serious'], correctAnswer: 'Analyze and evaluate', points: 10 }
    ]
  },
  {
    id: 'essay-transitions-1',
    title: 'Essay Transitions',
    description: 'Connecting ideas smoothly',
    icon: '🔗',
    exercises: [
      { id: 'ess-trans-1', sectionId: 'essay', type: 'multiple-choice', question: 'First, Furthermore, Lastly are:', translation: 'Sequential transitions.', options: ['Contrast transitions', 'Sequential transitions', 'Cause-effect transitions', 'Conclusion transitions'], correctAnswer: 'Sequential transitions', points: 10 },
      { id: 'ess-trans-2', sectionId: 'essay', type: 'multiple-choice', question: 'However, Nevertheless, Although show:', translation: 'Contrast.', options: ['Sequence', 'Contrast', 'Addition', 'Cause'], correctAnswer: 'Contrast', points: 10 },
      { id: 'ess-trans-3', sectionId: 'essay', type: 'multiple-choice', question: 'Consequently, Therefore, Thus show:', translation: 'Cause and effect.', options: ['Contrast', 'Addition', 'Cause and effect', 'Sequence'], correctAnswer: 'Cause and effect', points: 10 },
      { id: 'ess-trans-4', sectionId: 'essay', type: 'multiple-choice', question: 'For example, Specifically, Such as show:', translation: 'Examples.', options: ['Contrast', 'Sequence', 'Examples', 'Conclusion'], correctAnswer: 'Examples', points: 10 },
      { id: 'ess-trans-5', sectionId: 'essay', type: 'multiple-choice', question: 'Transitions help with:', translation: 'Flow and coherence.', options: ['Making it longer', 'Flow and coherence', 'Adding more quotes', 'Using complex words'], correctAnswer: 'Flow and coherence', points: 10 },
      { id: 'ess-trans-6', sectionId: 'essay', type: 'multiple-choice', question: 'In addition, Moreover, Additionally show:', translation: 'Addition.', options: ['Contrast', 'Addition', 'Sequence', 'Cause'], correctAnswer: 'Addition', points: 10 },
      { id: 'ess-trans-7', sectionId: 'essay', type: 'multiple-choice', question: 'To conclude, In summary, Finally show:', translation: 'Conclusion.', options: ['Introduction', 'Addition', 'Conclusion', 'Comparison'], correctAnswer: 'Conclusion', points: 10 },
      { id: 'ess-trans-8', sectionId: 'essay', type: 'multiple-choice', question: 'Similarly, Likewise, Just as show:', translation: 'Similarity.', options: ['Contrast', 'Similarity', 'Difference', 'Cause'], correctAnswer: 'Similarity', points: 10 },
      { id: 'ess-trans-9', sectionId: 'essay', type: 'multiple-choice', question: 'Unlike, Whereas, While show:', translation: 'Difference.', options: ['Similarity', 'Difference', 'Addition', 'Sequence'], correctAnswer: 'Difference', points: 10 },
      { id: 'ess-trans-10', sectionId: 'essay', type: 'multiple-choice', question: 'Use transitions:', translation: 'At the start of paragraphs and sentences.', options: ['At the end only', 'At the start of paragraphs and sentences', 'Never', 'Only in conclusions'], correctAnswer: 'At the start of paragraphs and sentences', points: 10 }
    ]
  },
  {
    id: 'evidence-support-1',
    title: 'Evidence and Support',
    description: 'Using evidence effectively',
    icon: '📊',
    exercises: [
      { id: 'evid-1', sectionId: 'essay', type: 'multiple-choice', question: 'Strong evidence includes:', translation: 'Facts, statistics, and expert quotes.', options: ['Only opinions', 'Facts, statistics, and expert quotes', 'Personal feelings', 'Nothing'], correctAnswer: 'Facts, statistics, and expert quotes', points: 10 },
      { id: 'evid-2', sectionId: 'essay', type: 'multiple-choice', question: 'Always cite your sources to:', translation: 'Avoid plagiarism and add credibility.', options: ['Make it longer', 'Avoid plagiarism and add credibility', 'Confuse readers', 'Use more words'], correctAnswer: 'Avoid plagiarism and add credibility', points: 10 },
      { id: 'evid-3', sectionId: 'essay', type: 'multiple-choice', question: 'Explain evidence by:', translation: 'Connecting it to your argument.', options: ['Copying it exactly', 'Connecting it to your argument', 'Ignoring it', 'Making it shorter'], correctAnswer: 'Connecting it to your argument', points: 10 },
      { id: 'evid-4', sectionId: 'essay', type: 'multiple-choice', question: 'Anecdotes are:', translation: 'Short personal stories.', options: ['Facts and statistics', 'Short personal stories', 'Expert opinions', 'Nothing'], correctAnswer: 'Short personal stories', points: 10 },
      { id: 'evid-5', sectionId: 'essay', type: 'multiple-choice', question: 'Evidence should be:', translation: 'Relevant and reliable.', options: ['Random and any', 'Relevant and reliable', 'From random websites', 'Made up'], correctAnswer: 'Relevant and reliable', points: 10 },
      { id: 'evid-6', sectionId: 'essay', type: 'multiple-choice', question: 'Each claim needs:', translation: 'Evidence to support it.', options: ['No support', 'Evidence to support it', 'Just opinion', 'Long explanation only'], correctAnswer: 'Evidence to support it', points: 10 },
      { id: 'evid-7', sectionId: 'essay', type: 'multiple-choice', question: 'Paraphrasing is:', translation: 'Rewriting in your own words.', options: ['Copying word for word', 'Rewriting in your own words', 'Translating', 'Nothing'], correctAnswer: 'Rewriting in your own words', points: 10 },
      { id: 'evid-8', sectionId: 'essay', type: 'multiple-choice', question: 'When using quotes, keep them:', translation: 'Short and relevant.', options: ['Long and many', 'Short and relevant', 'As long as possible', 'Unrelated'], correctAnswer: 'Short and relevant', points: 10 },
      { id: 'evid-9', sectionId: 'essay', type: 'multiple-choice', question: 'Primary sources are:', translation: 'First-hand accounts and original documents.', options: ['Second-hand information', 'First-hand accounts and original documents', 'Wikipedia', 'Opinion pieces'], correctAnswer: 'First-hand accounts and original documents', points: 10 },
      { id: 'evid-10', sectionId: 'essay', type: 'multiple-choice', question: 'After presenting evidence, you should:', translation: 'Analyze and explain its significance.', options: ['Move on quickly', 'Analyze and explain its significance', 'Ignore it', 'Repeat it'], correctAnswer: 'Analyze and explain its significance', points: 10 }
    ]
  },
  {
    id: 'essay-revision-1',
    title: 'Essay Revision',
    description: 'Reviewing and improving',
    icon: '✏️',
    exercises: [
      { id: 'rev-1', sectionId: 'essay', type: 'multiple-choice', question: 'When revising, check for:', translation: 'Clarity, organization, and support.', options: ['Length only', 'Clarity, organization, and support', 'Nothing', 'Only spelling'], correctAnswer: 'Clarity, organization, and support', points: 10 },
      { id: 'rev-2', sectionId: 'essay', type: 'multiple-choice', question: 'Peer review helps:', translation: 'See your essay from a reader perspective.', options: ['Nothing', 'See your essay from a reader perspective', 'Add more words', 'Make it shorter'], correctAnswer: 'See your essay from a reader perspective', points: 10 },
      { id: 'rev-3', sectionId: 'essay', type: 'multiple-choice', question: 'Editing focuses on:', translation: 'Grammar, punctuation, and style.', options: ['Content only', 'Grammar, punctuation, and style', 'Nothing', 'Only length'], correctAnswer: 'Grammar, punctuation, and style', points: 10 },
      { id: 'rev-4', sectionId: 'essay', type: 'multiple-choice', question: 'A thesis can be changed if:', translation: 'The argument needs adjustment.', options: ['Never', 'The argument needs adjustment', 'Only at the start', 'Only at the end'], correctAnswer: 'The argument needs adjustment', points: 10 },
      { id: 'rev-5', sectionId: 'essay', type: 'multiple-choice', question: 'Remove paragraphs that:', translation: 'Do not support the thesis.', options: ['Are well-written', 'Do not support the thesis', 'Are short', 'Have quotes'], correctAnswer: 'Do not support the thesis', points: 10 },
      { id: 'rev-6', sectionId: 'essay', type: 'multiple-choice', question: 'A strong conclusion:', translation: 'Does not introduce new ideas.', options: ['Introduces new topics', 'Does not introduce new ideas', 'Is very long', 'Is a question'], correctAnswer: 'Does not introduce new ideas', points: 10 },
      { id: 'rev-7', sectionId: 'essay', type: 'multiple-choice', question: 'Read your essay aloud to check:', translation: 'Flow and clarity.', options: ['Nothing', 'Flow and clarity', 'Only length', 'Just spelling'], correctAnswer: 'Flow and clarity', points: 10 },
      { id: 'rev-8', sectionId: 'essay', type: 'multiple-choice', question: 'Check that your topic sentences:', translation: 'Support your thesis.', options: ['Are different from thesis', 'Support your thesis', 'Are questions', 'Are very long'], correctAnswer: 'Support your thesis', points: 10 },
      { id: 'rev-9', sectionId: 'essay', type: 'multiple-choice', question: 'The introduction should:', translation: 'Hook the reader and present thesis.', options: ['Be very long', 'Hook the reader and present thesis', 'Have no thesis', 'Be random'], correctAnswer: 'Hook the reader and present thesis', points: 10 },
      { id: 'rev-10', sectionId: 'essay', type: 'multiple-choice', question: 'Final proofreading checks:', translation: 'Spelling and formatting.', options: ['Nothing important', 'Spelling and formatting', 'Only the title', 'Only the introduction'], correctAnswer: 'Spelling and formatting', points: 10 }
    ]
  }
];