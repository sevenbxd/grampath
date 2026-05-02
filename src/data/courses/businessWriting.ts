import { ExercisePack } from '../academy';

export const businessWritingExercisePacks: ExercisePack[] = [
  {
    id: 'email-formal-1',
    title: 'Formal Emails',
    description: 'Practice writing formal emails',
    icon: '📧',
    exercises: [
      { id: 'biz-em-ex1', sectionId: 'business', type: 'multiple-choice', question: 'Which is the best opening?', translation: 'Dear Mr. Smith,', options: ['Hi', 'Hello', 'Dear Mr. Smith', 'Hey'], correctAnswer: 'Dear Mr. Smith', points: 10 },
      { id: 'biz-em-ex2', sectionId: 'business', type: 'multiple-choice', question: 'Which is the best closing?', translation: 'Best regards,', options: ['Thanks', 'Best regards', 'Bye', 'Talk to you later'], correctAnswer: 'Best regards', points: 10 }
    ]
  },
  {
    id: 'letter-formal-1',
    title: 'Formal Letters',
    description: 'Practice business letters',
    icon: '✉️',
    exercises: [
      { id: 'biz-let-ex1', sectionId: 'business', type: 'multiple-choice', question: 'Which is more formal?', translation: 'I am writing to inquire about...', options: ['I want to know about...', 'I am writing to inquire about...', 'Can you tell me about...', 'Tell me about...'], correctAnswer: 'I am writing to inquire about...', points: 10 }
    ]
  },
  {
    id: 'business-vocabulary-1',
    title: 'Business Vocabulary',
    description: 'Formal business expressions',
    icon: '💼',
    exercises: [
      { id: 'biz-voc-1', sectionId: 'business', type: 'multiple-choice', question: 'I am writing to ___ your services.', translation: 'I am writing to inquire about your services.', options: ['ask', 'inquire about', 'know about', 'question'], correctAnswer: 'inquire about', points: 10 },
      { id: 'biz-voc-2', sectionId: 'business', type: 'multiple-choice', question: 'Please find ___ the requested information.', translation: 'Please find attached the requested information.', options: ['attached', 'enclosed', 'included', 'here'], correctAnswer: 'attached', points: 10 },
      { id: 'biz-voc-3', sectionId: 'business', type: 'multiple-choice', question: 'I would appreciate your ___ reply.', translation: 'I would appreciate your prompt reply.', options: ['quick', 'prompt', 'fast', 'rapid'], correctAnswer: 'prompt', points: 10 },
      { id: 'biz-voc-4', sectionId: 'business', type: 'multiple-choice', question: 'Thank you for your ___ inquiry.', translation: 'Thank you for your recent inquiry.', options: ['late', 'recent', 'old', 'new'], correctAnswer: 'recent', points: 10 },
      { id: 'biz-voc-5', sectionId: 'business', type: 'multiple-choice', question: 'Please do not ___ to contact us.', translation: 'Please do not hesitate to contact us.', options: ['wait', 'hesitate', 'fear', 'stop'], correctAnswer: 'hesitate', points: 10 },
      { id: 'biz-voc-6', sectionId: 'business', type: 'multiple-choice', question: 'We look ___ to hearing from you.', translation: 'We look forward to hearing from you.', options: ['forward', 'ahead', 'to', 'for'], correctAnswer: 'forward', points: 10 },
      { id: 'biz-voc-7', sectionId: 'business', type: 'multiple-choice', question: 'Please ___ to the attached document.', translation: 'Please refer to the attached document.', options: ['see', 'refer', 'look', 'check'], correctAnswer: 'refer', points: 10 },
      { id: 'biz-voc-8', sectionId: 'business', type: 'multiple-choice', question: 'I am writing in ___ to your letter.', translation: 'I am writing in response to your letter.', options: ['reply', 'response', 'answer', 'return'], correctAnswer: 'response', points: 10 },
      { id: 'biz-voc-9', sectionId: 'business', type: 'multiple-choice', question: 'We are pleased to ___ that...', translation: 'We are pleased to inform that...', options: ['say', 'inform', 'tell', 'speak'], correctAnswer: 'inform', points: 10 },
      { id: 'biz-voc-10', sectionId: 'business', type: 'multiple-choice', question: 'Should you need ___ assistance...', translation: 'Should you need further assistance...', options: ['more', 'further', 'additional', 'extra'], correctAnswer: 'further', points: 10 }
    ]
  },
  {
    id: 'meeting-minutes-1',
    title: 'Meeting Minutes',
    description: 'Writing meeting documentation',
    icon: '📋',
    exercises: [
      { id: 'meet-1', sectionId: 'business', type: 'multiple-choice', question: 'Meeting minutes should include:', translation: 'Date, attendees, and decisions.', options: ['Only names', 'Date, attendees, and decisions', 'Just the agenda', 'Nothing important'], correctAnswer: 'Date, attendees, and decisions', points: 10 },
      { id: 'meet-2', sectionId: 'business', type: 'multiple-choice', question: 'The agenda is:', translation: 'The list of topics to discuss.', options: ['The decisions made', 'The list of topics to discuss', 'The attendees', 'The time'], correctAnswer: 'The list of topics to discuss', points: 10 },
      { id: 'meet-3', sectionId: 'business', type: 'multiple-choice', question: 'Action items are:', translation: 'Tasks assigned to people.', options: ['Discussion topics', 'Tasks assigned to people', 'Decisions made', 'Questions asked'], correctAnswer: 'Tasks assigned to people', points: 10 },
      { id: 'meet-4', sectionId: 'business', type: 'multiple-choice', question: 'Minutes should be ___ distributed.', translation: 'Minutes should be promptly distributed.', options: ['slowly', 'promptly', 'never', 'rarely'], correctAnswer: 'promptly', points: 10 },
      { id: 'meet-5', sectionId: 'business', type: 'multiple-choice', question: 'The chair leads:', translation: 'The meeting.', options: ['The notes', 'The meeting', 'The decisions', 'The agenda'], correctAnswer: 'The meeting', points: 10 },
      { id: 'meet-6', sectionId: 'business', type: 'multiple-choice', question: 'The secretary records:', translation: 'The minutes.', options: ['The attendees', 'The minutes', 'The food', 'Nothing'], correctAnswer: 'The minutes', points: 10 },
      { id: 'meet-7', sectionId: 'business', type: 'multiple-choice', question: 'The quorum is:', translation: 'Minimum number needed.', options: ['The chair', 'Minimum number needed', 'The agenda', 'The time'], correctAnswer: 'Minimum number needed', points: 10 },
      { id: 'meet-8', sectionId: 'business', type: 'multiple-choice', question: 'The previous minutes are:', translation: 'Reviewed and approved.', options: ['Thrown away', 'Reviewed and approved', 'Ignored', 'Changed'], correctAnswer: 'Reviewed and approved', points: 10 },
      { id: 'meet-9', sectionId: 'business', type: 'multiple-choice', question: 'A motion is:', translation: 'A proposal to be voted on.', options: ['The agenda', 'A proposal to be voted on', 'The minutes', 'The attendees'], correctAnswer: 'A proposal to be voted on', points: 10 },
      { id: 'meet-10', sectionId: 'business', type: 'multiple-choice', question: 'The next steps are:', translation: 'Action items for the future.', options: ['The agenda', 'Action items for the future', 'The past', 'Nothing'], correctAnswer: 'Action items for the future', points: 10 }
    ]
  },
  {
    id: 'business-proposals-1',
    title: 'Business Proposals',
    description: 'Writing effective proposals',
    icon: '📑',
    exercises: [
      { id: 'prop-1', sectionId: 'business', type: 'multiple-choice', question: 'A proposal should include:', translation: 'Problem, solution, and cost.', options: ['Just the price', 'Problem, solution, and cost', 'Only the title', 'Nothing important'], correctAnswer: 'Problem, solution, and cost', points: 10 },
      { id: 'prop-2', sectionId: 'business', type: 'multiple-choice', question: 'The executive summary:', translation: 'Brief overview of the proposal.', options: ['The entire proposal', 'Brief overview of the proposal', 'The conclusion only', 'Nothing'], correctAnswer: 'Brief overview of the proposal', points: 10 },
      { id: 'prop-3', sectionId: 'business', type: 'multiple-choice', question: 'The budget section shows:', translation: 'Costs and financial details.', options: ['Nothing important', 'Costs and financial details', 'Just the title', 'The team'], correctAnswer: 'Costs and financial details', points: 10 },
      { id: 'prop-4', sectionId: 'business', type: 'multiple-choice', question: 'A timeline shows:', translation: 'When things will happen.', options: ['Who will pay', 'When things will happen', 'The cost only', 'Nothing'], correctAnswer: 'When things will happen', points: 10 },
      { id: 'prop-5', sectionId: 'business', type: 'multiple-choice', question: 'The problem statement explains:', translation: 'What needs to be solved.', options: ['The solution', 'What needs to be solved', 'The budget', 'The team'], correctAnswer: 'What needs to be solved', points: 10 },
      { id: 'prop-6', sectionId: 'business', type: 'multiple-choice', question: 'The methodology describes:', translation: 'How the work will be done.', options: ['Who will pay', 'How the work will be done', 'The problem', 'Nothing'], correctAnswer: 'How the work will be done', points: 10 },
      { id: 'prop-7', sectionId: 'business', type: 'multiple-choice', question: 'Expected outcomes should be:', translation: 'Specific and measurable.', options: ['Vague', 'Specific and measurable', 'General', 'Unimportant'], correctAnswer: 'Specific and measurable', points: 10 },
      { id: 'prop-8', sectionId: 'business', type: 'multiple-choice', question: 'The scope defines:', translation: 'What is included and excluded.', options: ['The budget only', 'What is included and excluded', 'The team', 'Nothing'], correctAnswer: 'What is included and excluded', points: 10 },
      { id: 'prop-9', sectionId: 'business', type: 'multiple-choice', question: 'A strong proposal is:', translation: 'Clear and persuasive.', options: ['Very long', 'Clear and persuasive', 'Confusing', 'Unprofessional'], correctAnswer: 'Clear and persuasive', points: 10 },
      { id: 'prop-10', sectionId: 'business', type: 'multiple-choice', question: 'The target audience is:', translation: 'Who the proposal is for.', options: ['Everyone', 'Who the proposal is for', 'No one', 'The writer'], correctAnswer: 'Who the proposal is for', points: 10 }
    ]
  },
  {
    id: 'report-writing-1',
    title: 'Report Writing',
    description: 'Business report structure',
    icon: '📊',
    exercises: [
      { id: 'rep-1', sectionId: 'business', type: 'multiple-choice', question: 'A business report has:', translation: 'Executive summary, findings, recommendations.', options: ['No structure', 'Executive summary, findings, recommendations', 'Just text', 'Many pictures'], correctAnswer: 'Executive summary, findings, recommendations', points: 10 },
      { id: 'rep-2', sectionId: 'business', type: 'multiple-choice', question: 'The executive summary:', translation: 'Gives the main points quickly.', options: ['Has all details', 'Gives the main points quickly', 'Is very long', 'Is not needed'], correctAnswer: 'Gives the main points quickly', points: 10 },
      { id: 'rep-3', sectionId: 'business', type: 'multiple-choice', question: 'Findings are:', translation: 'What the research discovered.', options: ['What we recommend', 'What the research discovered', 'The introduction', 'Nothing'], correctAnswer: 'What the research discovered', points: 10 },
      { id: 'rep-4', sectionId: 'business', type: 'multiple-choice', question: 'Recommendations suggest:', translation: 'What should be done next.', options: ['What was found', 'What should be done next', 'Who participated', 'Nothing'], correctAnswer: 'What should be done next', points: 10 },
      { id: 'rep-5', sectionId: 'business', type: 'multiple-choice', question: 'Data should be:', translation: 'Accurate and well-presented.', options: ['Made up', 'Accurate and well-presented', 'Hidden', 'Unimportant'], correctAnswer: 'Accurate and well-presented', points: 10 },
      { id: 'rep-6', sectionId: 'business', type: 'multiple-choice', question: 'Tables and charts help:', translation: 'Present data clearly.', options: ['Make it longer', 'Present data clearly', 'Confuse readers', 'Add opinions'], correctAnswer: 'Present data clearly', points: 10 },
      { id: 'rep-7', sectionId: 'business', type: 'multiple-choice', question: 'The conclusion:', translation: 'Summarizes the report.', options: ['Introduces new topics', 'Summarizes the report', 'Has no purpose', 'Is very long'], correctAnswer: 'Summarizes the report', points: 10 },
      { id: 'rep-8', sectionId: 'business', type: 'multiple-choice', question: 'Sources should be:', translation: 'Reliable and cited.', options: ['Random', 'Reliable and cited', 'Made up', 'Unimportant'], correctAnswer: 'Reliable and cited', points: 10 },
      { id: 'rep-9', sectionId: 'business', type: 'multiple-choice', question: 'The introduction explains:', translation: 'Purpose and scope.', options: ['All findings', 'Purpose and scope', 'The conclusion', 'Nothing'], correctAnswer: 'Purpose and scope', points: 10 },
      { id: 'rep-10', sectionId: 'business', type: 'multiple-choice', question: 'Business reports should be:', translation: 'Clear and professional.', options: ['Very casual', 'Clear and professional', 'Full of errors', 'Informal'], correctAnswer: 'Clear and professional', points: 10 }
    ]
  },
  {
    id: 'job-applications-1',
    title: 'Job Applications',
    description: 'Cover letters and applications',
    icon: '💼',
    exercises: [
      { id: 'job-1', sectionId: 'business', type: 'multiple-choice', question: 'A cover letter should:', translation: 'Introduce you and explain interest.', options: ['Be very long', 'Introduce you and explain interest', 'Repeat your resume', 'Be generic'], correctAnswer: 'Introduce you and explain interest', points: 10 },
      { id: 'job-2', sectionId: 'business', type: 'multiple-choice', question: 'Address the letter to:', translation: 'A specific person when possible.', options: ['To Whom It May Concern always', 'A specific person when possible', 'No one', 'Random name'], correctAnswer: 'A specific person when possible', points: 10 },
      { id: 'job-3', sectionId: 'business', type: 'multiple-choice', question: 'In the opening, mention:', translation: 'The position you are applying for.', options: ['Your salary', 'The position you are applying for', 'Nothing', 'Your age'], correctAnswer: 'The position you are applying for', points: 10 },
      { id: 'job-4', sectionId: 'business', type: 'multiple-choice', question: 'Show how your skills match:', translation: 'The job requirements.', options: ['Your preferences', 'The job requirements', 'Nothing', 'Your salary'], correctAnswer: 'The job requirements', points: 10 },
      { id: 'job-5', sectionId: 'business', type: 'multiple-choice', question: 'Use ___ language.', translation: 'Professional.', options: ['Casual', 'Professional', 'Slang', 'Informal'], correctAnswer: 'Professional', points: 10 },
      { id: 'job-6', sectionId: 'business', type: 'multiple-choice', question: 'Close by:', translation: 'Requesting an interview.', options: ['Saying goodbye', 'Requesting an interview', 'Nothing', 'Being negative'], correctAnswer: 'Requesting an interview', points: 10 },
      { id: 'job-7', sectionId: 'business', type: 'multiple-choice', question: 'Proofread for:', translation: 'Errors and consistency.', options: ['Length only', 'Errors and consistency', 'Nothing', 'Just the title'], correctAnswer: 'Errors and consistency', points: 10 },
      { id: 'job-8', sectionId: 'business', type: 'multiple-choice', question: 'Keep it ___ pages.', translation: 'One.', options: ['Five', 'One', 'Ten', 'Many'], correctAnswer: 'One', points: 10 },
      { id: 'job-9', sectionId: 'business', type: 'multiple-choice', question: 'Tailor each letter to:', translation: 'The specific job.', options: ['All jobs', 'The specific job', 'No job', 'Random jobs'], correctAnswer: 'The specific job', points: 10 },
      { id: 'job-10', sectionId: 'business', type: 'multiple-choice', question: 'Include relevant:', translation: 'Skills and experience.', options: ['Personal info', 'Skills and experience', 'Hobbies', 'Family'], correctAnswer: 'Skills and experience', points: 10 }
    ]
  },
  {
    id: 'presentation-skills-1',
    title: 'Presentation Skills',
    description: 'Business presentations',
    icon: '🎤',
    exercises: [
      { id: 'pres-1', sectionId: 'business', type: 'multiple-choice', question: 'Begin with:', translation: 'A clear introduction.', options: ['Questions only', 'A clear introduction', 'Long apology', 'Nothing'], correctAnswer: 'A clear introduction', points: 10 },
      { id: 'pres-2', sectionId: 'business', type: 'multiple-choice', question: 'Know your:', translation: 'Audience.', options: ['Own opinions', 'Audience', 'Nothing', 'Just the topic'], correctAnswer: 'Audience', points: 10 },
      { id: 'pres-3', sectionId: 'business', type: 'multiple-choice', question: 'Use visuals:', translation: 'To support your points.', options: ['To confuse', 'To support your points', 'Instead of talking', 'For decoration'], correctAnswer: 'To support your points', points: 10 },
      { id: 'pres-4', sectionId: 'business', type: 'multiple-choice', question: 'Maintain eye contact:', translation: 'With all attendees.', options: ['The floor', 'With all attendees', 'Your notes', 'Nothing'], correctAnswer: 'With all attendees', points: 10 },
      { id: 'pres-5', sectionId: 'business', type: 'multiple-choice', question: 'Speak:', translation: 'Clearly and with confidence.', options: ['Very quietly', 'Clearly and with confidence', 'Fast', 'Mumbling'], correctAnswer: 'Clearly and with confidence', points: 10 },
      { id: 'pres-6', sectionId: 'business', type: 'multiple-choice', question: 'Engage the audience by:', translation: 'Asking questions.', options: ['Reading slides', 'Asking questions', 'Ignoring them', 'Being boring'], correctAnswer: 'Asking questions', points: 10 },
      { id: 'pres-7', sectionId: 'business', type: 'multiple-choice', question: 'Keep slides:', translation: 'Simple and visual.', options: ['Full of text', 'Simple and visual', 'Very long', 'Complicated'], correctAnswer: 'Simple and visual', points: 10 },
      { id: 'pres-8', sectionId: 'business', type: 'multiple-choice', question: 'Conclude with:', translation: 'A clear summary and next steps.', options: ['Thank you only', 'A clear summary and next steps', 'Nothing', 'An apology'], correctAnswer: 'A clear summary and next steps', points: 10 },
      { id: 'pres-9', sectionId: 'business', type: 'multiple-choice', question: 'Practice:', translation: 'Before presenting.', options: ['During', 'Before presenting', 'After', 'Never'], correctAnswer: 'Before presenting', points: 10 },
      { id: 'pres-10', sectionId: 'business', type: 'multiple-choice', question: 'Handle questions:', translation: 'Professionally and briefly.', options: ['Ignore them', 'Professionally and briefly', 'Argue', 'Get angry'], correctAnswer: 'Professionally and briefly', points: 10 }
    ]
  }
];