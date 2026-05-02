'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { getStepContent, Lesson, Quiz } from '@/data/stepContent';
import { walkthroughPath } from '@/data/curriculum/walkthrough';
import { useProgressStore } from '@/store/progressStore';
import { Card, CardContent, Button } from '@/components/ui';
import ExerciseRenderer from '@/components/exercises/ExerciseRenderer';

type TabType = 'overview' | 'lessons' | 'vocabulary' | 'mistakes' | 'quiz';

export default function StepPage() {
  const params = useParams();
  const stepId = parseInt(params.stepId as string) || 1;
  
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [exerciseComplete, setExerciseComplete] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (showConfetti) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [showConfetti]);

  const stepContent = getStepContent(stepId);
  const stepInfo = walkthroughPath.find(s => s.id === stepId);
  const { 
    addXP, 
    addGems, 
    completeLesson, 
    completeQuiz,
    isLessonCompleted,
    isQuizCompleted,
    getStepCompletionPercentage,
  } = useProgressStore();

  if (!stepContent || !stepInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Content not found</p>
      </div>
    );
  }

  const lessonProgress = getStepCompletionPercentage(stepId);

  const handleExerciseComplete = (score: number) => {
    setExerciseComplete(true);
    if (score >= 80) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }
    if (activeLesson && !activeQuiz) {
      completeLesson(stepId, activeLesson.id, score);
      addXP(Math.round(score * 0.5));
    }
  };

  const handleQuizSubmit = () => {
    if (!activeQuiz) return;
    
    let correct = 0;
    activeQuiz.questions.forEach(q => {
      const answer = quizAnswers[q.id];
      if (Array.isArray(q.correctAnswer)) {
        if (JSON.stringify(answer) === JSON.stringify(q.correctAnswer)) correct++;
      } else {
        if (answer?.toLowerCase() === q.correctAnswer.toLowerCase()) correct++;
      }
    });

    const score = Math.round((correct / activeQuiz.questions.length) * 100);
    const passed = score >= activeQuiz.passingScore;

    setQuizSubmitted(true);
    
    if (passed) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
      addXP(activeQuiz.xpReward);
      addGems(activeQuiz.gemReward);
      completeQuiz(stepId, activeQuiz.id, score);
    }
  };

  const calculateQuizScore = () => {
    if (!activeQuiz) return { score: 0, correct: 0 };
    let correct = 0;
    activeQuiz.questions.forEach(q => {
      const answer = quizAnswers[q.id];
      if (Array.isArray(q.correctAnswer)) {
        if (JSON.stringify(answer) === JSON.stringify(q.correctAnswer)) correct++;
      } else {
        if (answer?.toLowerCase() === q.correctAnswer.toLowerCase()) correct++;
      }
    });
    return {
      score: Math.round((correct / activeQuiz.questions.length) * 100),
      correct,
    };
  };

  const resetLesson = () => {
    setExerciseComplete(false);
    setActiveLesson(null);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setActiveQuiz(null);
  };

  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'overview', label: 'Overview', icon: '📖' },
    { id: 'lessons', label: 'Lessons', icon: '📚' },
    { id: 'vocabulary', label: 'Vocabulary', icon: '📝' },
    { id: 'mistakes', label: 'Mistakes', icon: '⚠️' },
    { id: 'quiz', label: 'Quiz', icon: '🎯' },
  ];

  return (
    <div className="min-h-screen pb-12">
      <div className="gradient-bg py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/app">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
              ← Back to Path
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-white/60 text-sm">Step {stepId}</span>
            <h1 className="text-3xl font-bold text-white mt-1">{stepContent.stepName}</h1>
            <p className="text-white/80 mt-2">{stepContent.overview}</p>
          </motion.div>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-yellow-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${lessonProgress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <span className="text-white font-bold">{lessonProgress}%</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto py-4 -mx-4 px-4">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setActiveLesson(null);
                setActiveQuiz(null);
                setQuizStarted(false);
                setQuizAnswers({});
                setQuizSubmitted(false);
              }}
              className={`
                flex-shrink-0 font-semibold transition-all
                ${activeTab === tab.id
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}
              `}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </Button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeLesson && !exerciseComplete ? (
            <LessonView
              lesson={activeLesson}
              stepId={stepId}
              onComplete={handleExerciseComplete}
              onBack={resetLesson}
            />
          ) : activeQuiz && quizStarted ? (
            <QuizView
              quiz={activeQuiz}
              answers={quizAnswers}
              setAnswers={setQuizAnswers}
              submitted={quizSubmitted}
              onSubmit={handleQuizSubmit}
              onBack={resetQuiz}
              score={calculateQuizScore()}
            />
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold text-slate-800 mb-4">📚 What You&apos;ll Learn</h2>
                      <ul className="space-y-2">
                        {stepContent.lessons.map((lesson) => (
                          <li key={lesson.id} className="flex items-center gap-2 text-slate-700">
                            <span className="text-green-500">✓</span>
                            {lesson.title}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold text-slate-800 mb-4">⏱️ Estimated Time</h2>
                      <p className="text-slate-600">
                        {stepContent.lessons.reduce((acc, l) => acc + l.estimatedMinutes, 0)} minutes
                        across {stepContent.lessons.length} lessons
                      </p>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-6 text-center">
                        <p className="text-3xl font-bold text-green-600">{stepContent.vocabulary.length}</p>
                        <p className="text-slate-500">Words to Learn</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6 text-center">
                        <p className="text-3xl font-bold text-amber-600">{stepContent.lessons.length}</p>
                        <p className="text-slate-500">Lessons</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {activeTab === 'lessons' && (
                <div className="space-y-4">
                  {stepContent.lessons.map((lesson) => (
                    <Card key={lesson.id} hoverable onClick={() => setActiveLesson(lesson)}>
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-slate-800">{lesson.title}</h3>
                            <p className="text-sm text-slate-500 mt-1">{lesson.description}</p>
                            <div className="flex items-center gap-4 mt-3">
                              <span className="text-sm text-slate-400">⏱️ {lesson.estimatedMinutes} min</span>
                              <span className="text-sm text-slate-400">📖 {lesson.grammarSections.length} sections</span>
                              <span className="text-sm text-slate-400">✏️ {lesson.exercises.length} exercises</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <div className={`
                              w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold
                              ${isLessonCompleted(stepId, lesson.id)
                                ? 'bg-green-100 text-green-600'
                                : 'bg-slate-100 text-slate-500'}
                            `}>
                              {isLessonCompleted(stepId, lesson.id) ? '✓' : '→'}
                            </div>
                            <span className="text-xs text-slate-400">
                              {isLessonCompleted(stepId, lesson.id) ? 'Complete' : 'Start'}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {activeTab === 'vocabulary' && (
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold text-slate-800 mb-4">📝 Step Vocabulary</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {stepContent.vocabulary.map((word, index) => (
                          <div key={index} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-lg text-slate-800">{word.word}</span>
                              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                                {word.partOfSpeech}
                              </span>
                            </div>
                            <p className="text-slate-600 mt-1">{word.translation}</p>
                            <p className="text-sm text-slate-400 mt-2 italic">"{word.example}"</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeTab === 'mistakes' && (
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold text-slate-800 mb-4">⚠️ Common Mistakes</h2>
                      <div className="space-y-4">
                        {stepContent.commonMistakes.map((mistake, index) => (
                          <div key={index} className="p-4 bg-red-50 rounded-xl border border-red-200">
                            <div className="flex items-start gap-4">
                              <span className="text-2xl">❌</span>
                              <div className="flex-1">
                                <p className="text-red-600 font-semibold line-through">{mistake.incorrect}</p>
                                <p className="text-green-600 font-semibold mt-1">✓ {mistake.correct}</p>
                                <p className="text-slate-600 text-sm mt-2">{mistake.explanation}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeTab === 'quiz' && (
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold text-slate-800 mb-4">🎯 Available Quizzes</h2>
                      <div className="space-y-4">
                        {stepContent.quizzes.map((quiz) => {
                          const completed = isQuizCompleted(stepId, quiz.id);
                          return (
                            <div
                              key={quiz.id}
                              className={`
                                p-4 rounded-xl border-2 cursor-pointer transition-all
                                ${completed
                                  ? 'border-green-200 bg-green-50'
                                  : 'border-slate-200 hover:border-green-300'}
                              `}
                              onClick={() => {
                                setActiveQuiz(quiz);
                                setQuizStarted(true);
                                setQuizAnswers({});
                                setQuizSubmitted(false);
                              }}
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <h3 className="font-bold text-slate-800">{quiz.title}</h3>
                                  <p className="text-sm text-slate-500">{quiz.description}</p>
                                  <div className="flex items-center gap-4 mt-2">
                                    <span className="text-sm text-amber-600">⭐ {quiz.xpReward} XP</span>
                                    <span className="text-sm text-purple-600">💎 {quiz.gemReward}</span>
                                    <span className="text-sm text-slate-400">⏱️ {Math.ceil(quiz.timeLimit! / 60)} min</span>
                                  </div>
                                </div>
                                <div className="text-center">
                                  <p className="text-2xl font-bold text-slate-600">
                                    {completed ? '✓' : '→'}
                                  </p>
                                  <p className="text-xs text-slate-400">
                                    {completed ? 'Passed' : `${quiz.passingScore}% to pass`}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

interface LessonViewProps {
  lesson: Lesson;
  stepId: number;
  onComplete: (score: number) => void;
  onBack: () => void;
}

function LessonView({ lesson, stepId, onComplete, onBack }: LessonViewProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [showExercises, setShowExercises] = useState(false);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [exerciseScore, setExerciseScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [lessonComplete, setLessonComplete] = useState(false);

  const { completeLesson, addXP } = useProgressStore();

  const section = lesson.grammarSections[currentSection];

  const handleExerciseResult = (correct: boolean) => {
    if (correct) {
      setCorrectAnswers(prev => prev + 1);
      setExerciseScore(prev => prev + lesson.exercises[exerciseIndex].points);
    }

    if (exerciseIndex < lesson.exercises.length - 1) {
      setTimeout(() => setExerciseIndex(prev => prev + 1), 1000);
    } else {
      const score = Math.round((correctAnswers + (correct ? 1 : 0)) / lesson.exercises.length * 100);
      setLessonComplete(true);
      completeLesson(stepId, lesson.id, score);
      addXP(Math.round(score * 0.5));
      onComplete(score);
    }
  };

  if (lessonComplete) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center text-4xl mb-4">
          🎉
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Lesson Complete!</h2>
        <p className="text-slate-500 mt-2">{lesson.title}</p>
        <Button onClick={onBack} className="mt-6 bg-green-500">
          Continue
        </Button>
      </motion.div>
    );
  }

  if (!showExercises) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Button onClick={onBack} variant="ghost">← Back</Button>
          <span className="text-sm text-slate-500">
            {currentSection + 1} / {lesson.grammarSections.length}
          </span>
        </div>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-slate-800 mb-4">{section.title}</h2>
            <p className="text-slate-600 mb-6">{section.content}</p>

            <h3 className="font-bold text-slate-700 mb-3">Examples:</h3>
            <div className="space-y-3 mb-6">
              {section.examples.map((ex, i) => (
                <div key={i} className="p-3 bg-slate-50 rounded-xl">
                  <p className="font-medium text-slate-800">✓ {ex.text}</p>
                  <p className="text-sm text-slate-500">{ex.translation}</p>
                  {ex.explanation && (
                    <p className="text-xs text-green-600 mt-1">{ex.explanation}</p>
                  )}
                </div>
              ))}
            </div>

            <h3 className="font-bold text-slate-700 mb-3">💡 Tips:</h3>
            <div className="space-y-2">
              {section.tips.map((tip, i) => (
                <div key={i} className="flex items-start gap-2 text-slate-600">
                  <span>•</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-3">
          {currentSection > 0 && (
            <Button onClick={() => setCurrentSection(prev => prev - 1)} className="flex-1">
              ← Previous
            </Button>
          )}
          {currentSection < lesson.grammarSections.length - 1 ? (
            <Button onClick={() => setCurrentSection(prev => prev + 1)} className="flex-1 bg-green-500">
              Next →
            </Button>
          ) : (
            <Button onClick={() => setShowExercises(true)} className="flex-1 bg-green-500">
              Start Exercises →
            </Button>
          )}
        </div>
      </div>
    );
  }

  const currentExercise = lesson.exercises[exerciseIndex];
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button onClick={() => setShowExercises(false)} variant="ghost">← Back</Button>
        <span className="text-sm text-slate-500">
          Exercise {exerciseIndex + 1} / {lesson.exercises.length}
        </span>
      </div>

      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-300"
          style={{ width: `${((exerciseIndex + 1) / lesson.exercises.length) * 100}%` }}
        />
      </div>

      <Card>
        <CardContent className="p-6">
          {currentExercise.instruction && (
            <p className="text-sm text-slate-500 mb-2">{currentExercise.instruction}</p>
          )}
          <h3 className="text-xl font-bold text-slate-800 mb-4">{currentExercise.question}</h3>
          <p className="text-sm text-slate-500 mb-4">{currentExercise.translation}</p>
        </CardContent>
      </Card>

      <ExerciseRenderer
        exercise={{
          id: currentExercise.id,
          type: currentExercise.type,
          question: currentExercise.question,
          options: currentExercise.options,
          correctAnswer: currentExercise.correctAnswer,
          translation: currentExercise.translation,
          explanation: currentExercise.explanation,
          points: currentExercise.points,
        }}
        onComplete={handleExerciseResult}
      />
    </div>
  );
}

interface QuizViewProps {
  quiz: Quiz;
  answers: Record<string, string>;
  setAnswers: (answers: Record<string, string>) => void;
  submitted: boolean;
  onSubmit: () => void;
  onBack: () => void;
  score: { score: number; correct: number };
}

function QuizView({ quiz, answers, setAnswers, submitted, onSubmit, onBack, score }: QuizViewProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const passed = score.score >= quiz.passingScore;

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className={`
          w-24 h-24 mx-auto rounded-full flex items-center justify-center text-4xl mb-4
          ${passed ? 'bg-green-100' : 'bg-orange-100'}
        `}>
          {passed ? '🏆' : '💪'}
        </div>
        <h2 className="text-2xl font-bold text-slate-800">
          {passed ? 'Quiz Passed!' : 'Keep Practicing!'}
        </h2>
        <p className="text-slate-500 mt-2">{quiz.title}</p>

        <div className="flex justify-center gap-8 mt-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-slate-800">{score.correct}/{quiz.questions.length}</p>
            <p className="text-sm text-slate-500">Correct</p>
          </div>
          <div className="text-center">
            <p className={`text-3xl font-bold ${passed ? 'text-green-600' : 'text-orange-600'}`}>
              {score.score}%
            </p>
            <p className="text-sm text-slate-500">Score</p>
          </div>
        </div>

        <div className="flex gap-4 justify-center mt-8">
          <Button onClick={onBack} variant="outline">Back to Quizzes</Button>
          {!passed && (
            <Button
              onClick={() => {
                setAnswers({});
                onBack();
              }}
              className="bg-green-500"
            >
              Try Again
            </Button>
          )}
        </div>
      </motion.div>
    );
  }

  const question = quiz.questions[currentQuestion];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button onClick={onBack} variant="ghost">← Exit Quiz</Button>
        <span className="text-sm text-slate-500">
          Question {currentQuestion + 1} / {quiz.questions.length}
        </span>
      </div>

      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
        />
      </div>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-slate-800 mb-4">{question.question}</h3>
          <p className="text-sm text-slate-500">{question.translation}</p>
        </CardContent>
      </Card>

      {question.type === 'multiple-choice' && question.options && (
        <div className="grid grid-cols-1 gap-3">
          {question.options.map((option) => (
            <Card
              key={option}
              hoverable
              onClick={() => setAnswers({ ...answers, [question.id]: option })}
              className={`
                cursor-pointer transition-all
                ${answers[question.id] === option
                  ? 'border-green-400 bg-green-50'
                  : 'border-slate-200'}
              `}
            >
              <CardContent className="p-4">
                <p className="font-medium text-slate-700">{option}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {question.type === 'fill-blank' && (
        <Card>
          <CardContent className="p-4">
            <input
              type="text"
              value={answers[question.id] || ''}
              onChange={(e) => setAnswers({ ...answers, [question.id]: e.target.value })}
              placeholder="Type your answer..."
              className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-green-400 focus:outline-none"
            />
          </CardContent>
        </Card>
      )}

      {question.type === 'rewrite' && (
        <Card>
          <CardContent className="p-4">
            <textarea
              value={answers[question.id] || ''}
              onChange={(e) => setAnswers({ ...answers, [question.id]: e.target.value })}
              placeholder="Rewrite the sentence..."
              className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-green-400 focus:outline-none min-h-24"
            />
          </CardContent>
        </Card>
      )}

      {question.type === 'correction' && (
        <Card>
          <CardContent className="p-4">
            <textarea
              value={answers[question.id] || ''}
              onChange={(e) => setAnswers({ ...answers, [question.id]: e.target.value })}
              placeholder="Write the corrected version..."
              className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-green-400 focus:outline-none min-h-24"
            />
          </CardContent>
        </Card>
      )}

      <div className="flex gap-3">
        {currentQuestion > 0 && (
          <Button onClick={() => setCurrentQuestion(prev => prev - 1)} className="flex-1">
            ← Previous
          </Button>
        )}
        {currentQuestion < quiz.questions.length - 1 ? (
          <Button
            onClick={() => setCurrentQuestion(prev => prev + 1)}
            disabled={!answers[question.id]}
            className="flex-1 bg-green-500"
          >
            Next →
          </Button>
        ) : (
          <Button
            onClick={onSubmit}
            disabled={Object.keys(answers).length < quiz.questions.length}
            className="flex-1 bg-green-500"
          >
            Submit Quiz
          </Button>
        )}
      </div>
    </div>
  );
}