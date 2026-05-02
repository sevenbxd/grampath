'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { academyCourses, AcademyCourse, AcademySection, AcademyExercise, ExercisePack, QuizPack } from '@/data/academy';
import { useProgressStore } from '@/store/progressStore';
import { Card, CardContent, Button } from '@/components/ui';

export const AcademyPage: React.FC = () => {
  const router = useRouter();
  const [selectedCourse, setSelectedCourse] = useState<AcademyCourse | null>(null);
  const { getStepCompletionPercentage, isStepUnlocked, addXP: addXPFn } = useProgressStore();
  const addXP = addXPFn || ((amount: number) => {});

  const isCourseUnlocked = (course: AcademyCourse): boolean => {
    if (course.unlockRequirement === 'unlocked') return true;
    return typeof course.unlockRequirement === 'number' && isStepUnlocked(course.unlockRequirement);
  };

  const getCourseProgress = (course: AcademyCourse): number => {
    return getStepCompletionPercentage(course.stepId);
  };

  if (selectedCourse) {
    return (
      <CourseView
        course={selectedCourse}
        onBack={() => setSelectedCourse(null)}
        onComplete={() => addXP(20)}
        addXPToFn={addXP}
      />
    );
  }

  return (
    <div className="min-h-screen pb-12">
      <div className="gradient-bg py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/app">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
              ← Back
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl">🎓</span>
              <div>
                <h1 className="text-3xl font-bold text-white">Grammar Academy</h1>
                <p className="text-white/80 mt-1">
                  Deep dive into grammar with comprehensive lessons and practice
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl">📚</span>
          <div>
            <h2 className="text-xl font-bold text-slate-800">Available Courses</h2>
            <p className="text-slate-500 text-sm">Complete lessons to unlock more courses</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {academyCourses.map((course, index) => {
            const unlocked = isCourseUnlocked(course);
            const progress = getCourseProgress(course);
            
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  hoverable={unlocked}
                  onClick={() => unlocked && setSelectedCourse(course)}
                  className={`
                    overflow-hidden transition-all duration-300
                    ${!unlocked ? 'opacity-60' : ''}
                  `}
                >
                  <div className={`h-3 bg-gradient-to-r ${course.gradient}`} />
                  
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className={`
                        w-16 h-16 rounded-2xl flex items-center justify-center text-3xl
                        ${unlocked ? `bg-gradient-to-br ${course.gradient} text-white` : 'bg-slate-200 text-slate-400'}
                      `}>
                        {unlocked ? course.icon : '🔒'}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-800">{course.name}</h3>
                        <p className="text-sm text-slate-500 mt-1">{course.description}</p>
                        
                        <div className="flex items-center gap-4 mt-3 text-sm text-slate-400">
                          <span>⏱️ {course.estimatedHours}h</span>
                          <span>📝 {course.totalExercises} exercises</span>
                          <span>📖 {course.sections.length} sections</span>
                        </div>
                        
                        {unlocked && progress > 0 && (
                          <div className="mt-3">
                            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full bg-gradient-to-r ${course.gradient} rounded-full`}
                                style={{ width: `${progress}%` }}
                              />
                            </div>
                            <p className="text-xs text-slate-400 mt-1">{progress}% complete</p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {!unlocked && (
                      <div className="mt-4 p-3 bg-slate-50 rounded-xl text-center">
                        <p className="text-sm text-slate-500">
                          🔒 Complete Step {course.unlockRequirement} to unlock
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

interface CourseViewProps {
  course: AcademyCourse;
  onBack: () => void;
  onComplete: () => void;
  addXPToFn?: (amount: number) => void;
}

function CourseView({ course, onBack, onComplete, addXPToFn }: CourseViewProps) {
  const addXP = addXPToFn || ((amount: number) => {});
  const [activeSection, setActiveSection] = useState(0);
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());
  const [showExercises, setShowExercises] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [exerciseAnswers, setExerciseAnswers] = useState<Record<string, string>>({});
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizScore, setQuizScore] = useState(0);
  const [activeTab, setActiveTab] = useState<'section' | 'exercises' | 'quiz'>('section');
  const [selectedExercisePack, setSelectedExercisePack] = useState<ExercisePack | null>(null);
  const [selectedQuizPack, setSelectedQuizPack] = useState<QuizPack | null>(null);
  const [completedExercises, setCompletedExercises] = useState<Record<string, number>>({});

  useEffect(() => {
    const saved = localStorage.getItem(`academy-${course.id}-exercises`);
    if (saved) {
      try {
        setCompletedExercises(JSON.parse(saved));
      } catch (e) {}
    }
  }, [course.id]);

  useEffect(() => {
    localStorage.setItem(`academy-${course.id}-exercises`, JSON.stringify(completedExercises));
  }, [completedExercises, course.id]);

  const section = course.sections[activeSection];
  const isSectionCompleted = completedSections.has(section.id);
  const hasExercises = course.exercisePacks.length > 0;

  const handleSectionComplete = () => {
    setCompletedSections(prev => new Set([...prev, section.id]));
    onComplete();
    
    if (activeSection < course.sections.length - 1) {
      setTimeout(() => setActiveSection(prev => prev + 1), 1500);
    }
  };

  const handleExerciseComplete = () => {
    setShowExercises(false);
    handleSectionComplete();
  };

  return (
    <div className="min-h-screen pb-12">
      <div className={`py-6 px-4 bg-gradient-to-r ${course.gradient}`}>
        <div className="max-w-4xl mx-auto">
          <Button onClick={onBack} variant="ghost" className="text-white hover:bg-white/20 mb-4">
            ← Back to Courses
          </Button>
          
          <div className="flex items-center gap-4">
            <span className="text-4xl">{course.icon}</span>
            <div>
              <h1 className="text-2xl font-bold text-white">{course.name}</h1>
              <p className="text-white/80">{course.description}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => { setActiveTab('section'); setActiveSection(0); }}
              className={`
                px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all
                ${activeTab === 'section' ? 'bg-white text-slate-800' : 'bg-white/20 text-white hover:bg-white/30'}
              `}
            >
              📖 Lessons
            </button>
            <button
              onClick={() => setActiveTab('exercises')}
              className={`
                px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all
                ${activeTab === 'exercises' ? 'bg-white text-slate-800' : 'bg-white/20 text-white hover:bg-white/30'}
              `}
            >
              ✏️ Exercises
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className={`
                px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all
                ${activeTab === 'quiz' ? 'bg-white text-slate-800' : 'bg-white/20 text-white hover:bg-white/30'}
              `}
            >
              🎯 Quiz
            </button>
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto">
            {activeTab === 'section' && course.sections.map((s, index) => (
              <button
                key={s.id}
                onClick={() => setActiveSection(index)}
                className={`
                  px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all
                  ${index === activeSection ? 'bg-white text-slate-800' : 'bg-white/20 text-white hover:bg-white/30'}
                  ${completedSections.has(s.id) ? 'ring-2 ring-yellow-400' : ''}
                `}
              >
                {completedSections.has(s.id) && '✓ '}
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            {activeTab === 'section' && (
              <>
                <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                  <span className="text-3xl">
                    {section.type === 'grammar' ? '📖' : section.type === 'practice' ? '✏️' : '📝'}
                  </span>
                  {section.title}
                </h2>

                <div className="space-y-4">
                  {section.content.map((content) => (
                    <AcademyContentCard key={content.id} content={content} />
                  ))}
                </div>

                {section.type !== 'practice' && (
                  <Card className="border-2 border-green-200 bg-green-50">
                    <CardContent className="p-6 text-center">
                      <p className="text-slate-600 mb-4">
                        Finished reading? Mark this section as done!
                      </p>
                      <Button onClick={handleSectionComplete} className="bg-green-500">
                        Mark as Complete ✓
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </>
            )}

            {activeTab === 'exercises' && course.exercisePacks.length > 0 && !selectedExercisePack && (
              <PackSelectionView<ExercisePack>
                packs={course.exercisePacks}
                title="Exercises"
                onSelect={setSelectedExercisePack}
                completedExercises={completedExercises}
              />
            )}

            {activeTab === 'exercises' && selectedExercisePack && (
              <PackExercisesView
                pack={selectedExercisePack}
                exerciseAnswers={exerciseAnswers}
                setExerciseAnswers={setExerciseAnswers}
                currentExercise={currentExercise}
                setCurrentExercise={setCurrentExercise}
                addXP={addXP}
                onBack={() => setSelectedExercisePack(null)}
                completedExercises={completedExercises}
                setCompletedExercises={setCompletedExercises}
              />
            )}

            {activeTab === 'quiz' && course.quizPacks.length > 0 && !selectedQuizPack && (
              <PackSelectionView<QuizPack>
                packs={course.quizPacks}
                title="Quiz"
                onSelect={setSelectedQuizPack}
              />
            )}

            {activeTab === 'quiz' && selectedQuizPack && (
              <QuizView
                quiz={selectedQuizPack.quiz}
                addXP={addXP}
                onComplete={(score: number) => {
                  setQuizScore(score);
                  setSelectedQuizPack(null);
                }}
                onBack={() => setSelectedQuizPack(null)}
              />
            )}

            {activeTab === 'quiz' && course.quizPacks.length === 0 && !selectedQuizPack && (
              <Card className="border-2 border-slate-200">
                <CardContent className="p-6 text-center">
                  <p className="text-slate-500">No quiz available for this course yet.</p>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

interface AcademyContentCardProps {
  content: {
    id: string;
    title: string;
    subtitle?: string;
    text?: string;
    translation?: string;
    examples?: { en: string; pt: string; note?: string }[];
    rules?: { rule: string; example?: string }[];
    notes?: string[];
    visual?: {
      type: 'table' | 'list' | 'diagram' | 'chart';
      data: Record<string, string | number>[];
      columns: string[];
    };
  };
}

function AcademyContentCard({ content }: AcademyContentCardProps) {
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-slate-800">{content.title}</h3>
          {content.subtitle && (
            <p className="text-sm text-green-600 font-medium mt-1">{content.subtitle}</p>
          )}
        </div>

        {content.text && (
          <p className="text-slate-600 leading-relaxed">{content.text}</p>
        )}

        {content.translation && (
          <p className="text-sm text-slate-400 italic">→ {content.translation}</p>
        )}

        {content.examples && content.examples.length > 0 && (
          <div className="bg-slate-50 rounded-xl p-4 space-y-3">
            <h4 className="font-bold text-slate-700">Examples / Exemplos:</h4>
            {content.examples.map((ex, index) => (
              <div key={index} className="border-l-4 border-green-400 pl-3">
                <p className="text-slate-800">✓ {ex.en}</p>
                <p className="text-sm text-slate-500">{ex.pt}</p>
                {ex.note && (
                  <p className="text-xs text-green-600 mt-1">{ex.note}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {content.rules && content.rules.length > 0 && (
          <div className="bg-blue-50 rounded-xl p-4 space-y-2">
            <h4 className="font-bold text-blue-700">Rules:</h4>
            {content.rules.map((rule, index) => (
              <div key={index}>
                <p className="text-slate-700">
                  <span className="font-semibold">•</span> {rule.rule}
                </p>
                {rule.example && (
                  <p className="text-sm text-slate-500 ml-4">{rule.example}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {content.visual && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  {content.visual?.columns.map((col, index) => (
                    <th key={index} className="p-3 text-left font-bold text-slate-700 border-b">
                      {col.charAt(0).toUpperCase() + col.slice(1)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.visual?.data.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-slate-50">
                    {content.visual?.columns.map((col, colIndex) => (
                      <td key={colIndex} className="p-3 text-slate-600">
                        {String(row[col] || '—')}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {content.notes && content.notes.length > 0 && (
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
            <h4 className="font-bold text-amber-700 flex items-center gap-2 mb-2">
              💡 Important Notes
            </h4>
            <ul className="space-y-1">
              {content.notes.map((note, index) => (
                <li key={index} className="text-amber-700 text-sm flex items-start gap-2">
                  <span>•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

interface ExerciseViewProps {
  exercises: AcademyExercise[];
  answers: Record<string, string>;
  setAnswers: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  currentExercise: number;
  setCurrentExercise: React.Dispatch<React.SetStateAction<number>>;
  addXP: (amount: number) => void;
  onComplete: () => void;
  onNext?: () => void;
}

function ExerciseView({ exercises, answers, setAnswers, currentExercise, setCurrentExercise, addXP, onComplete, onNext }: ExerciseViewProps) {
  const exercise = exercises[currentExercise];
  const isCorrect = answers[exercise.id] === exercise.correctAnswer;
  const isAnswered = !!answers[exercise.id];

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({ ...prev, [exercise.id]: answer }));
  };

  const handleNext = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
    } else {
      if (onNext) onNext();
      onComplete();
    }
  };

  const handleTryAgain = () => {
    setAnswers(prev => ({ ...prev, [exercise.id]: '' }));
  };

  return (
    <Card className="border-2 border-blue-200">
      <CardContent className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-slate-500">
            Exercise {currentExercise + 1} of {exercises.length}
          </span>
          <span className="text-sm font-bold text-blue-600">{exercise.points} pts</span>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-800">{exercise.question}</h3>
          {exercise.translation && (
            <p className="text-sm text-slate-500 mt-1">{exercise.translation}</p>
          )}
        </div>

        {exercise.type === 'multiple-choice' && exercise.options && (
          <div className="grid grid-cols-1 gap-2">
            {exercise.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                disabled={isAnswered}
                className={`
                  p-3 rounded-lg text-left transition-all
                  ${answers[exercise.id] === option 
                    ? (option === exercise.correctAnswer ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500')
                    : 'bg-slate-50 border-slate-200 hover:border-blue-400'}
                  border-2
                `}
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {exercise.type === 'fill-blank' && (
          <div className="space-y-3">
            <input
              type="text"
              value={answers[exercise.id] || ''}
              onChange={(e) => handleAnswer(e.target.value)}
              disabled={isAnswered}
              placeholder="Type your answer..."
              className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-blue-500"
            />
            {!isAnswered && (
              <Button onClick={() => handleAnswer(answers[exercise.id] || '')} className="bg-blue-500">
                Check Answer
              </Button>
            )}
          </div>
        )}

        {isAnswered && (
          <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} border`}>
            <p className={`font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
              {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
            </p>
            {!isCorrect && (
              <p className="text-slate-600 mt-2">
                Correct answer: <span className="font-bold">{exercise.correctAnswer}</span>
              </p>
            )}
            {exercise.explanation && (
              <p className="text-sm text-slate-500 mt-2">💡 {exercise.explanation}</p>
            )}
          </div>
        )}

        {isAnswered && (
          <div className="flex gap-2">
            {currentExercise < exercises.length - 1 ? (
              <Button onClick={handleNext} className="bg-blue-500">
                Next Exercise →
              </Button>
            ) : (
              <Button onClick={onComplete} className="bg-green-500">
                Finish Exercises ✓
              </Button>
            )}
            {!isCorrect && (
              <Button onClick={handleTryAgain} variant="outline">
                Try Again
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

interface QuizViewProps {
  quiz: {
    id: string;
    title: string;
    description: string;
    passingScore: number;
    xpReward: number;
    gemReward: number;
    timeLimit: number;
    questions: AcademyExercise[];
  };
  addXP: (amount: number) => void;
  onComplete: (score: number) => void;
  onBack: () => void;
}

function QuizView({ quiz, addXP, onComplete, onBack }: QuizViewProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(quiz.timeLimit);

  const question = quiz.questions[currentQuestion];

  React.useEffect(() => {
    if (timeLeft <= 0 || showResult) return;
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, showResult]);

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({ ...prev, [question.id]: answer }));
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    quiz.questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) correct++;
    });
    return Math.round((correct / quiz.questions.length) * 100);
  };

  if (showResult) {
    const score = calculateScore();
    const passed = score >= quiz.passingScore;
    
    return (
      <Card className={`border-2 ${passed ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
        <CardContent className="p-6 text-center space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">
            {passed ? '🎉 Congratulations!' : '📚 Keep Practicing!'}
          </h2>
          <p className="text-4xl font-bold text-slate-800">{score}%</p>
          <p className="text-slate-600">
            You got {Math.round((score / 100) * quiz.questions.length)} of {quiz.questions.length} questions correct.
          </p>
          {passed && (
            <>
              <div className="flex justify-center gap-4 mt-4">
                <span className="px-4 py-2 bg-yellow-100 rounded-full text-yellow-700 font-bold">
                  +{quiz.xpReward} XP
                </span>
                <span className="px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-bold">
                  +{quiz.gemReward} 💎
                </span>
              </div>
              <Button onClick={() => { addXP(quiz.xpReward); onComplete(score); }} className="bg-green-500">
                Continue
              </Button>
            </>
          )}
          {!passed && (
            <Button onClick={() => onComplete(score)} className="bg-blue-500">
              Continue
            </Button>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 border-purple-200">
      <CardContent className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-slate-500">
            Question {currentQuestion + 1} of {quiz.questions.length}
          </span>
          <span className={`text-sm font-bold ${timeLeft < 60 ? 'text-red-500' : 'text-slate-500'}`}>
            ⏱️ {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </span>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-800">{question.question}</h3>
          {question.translation && (
            <p className="text-sm text-slate-500 mt-1">{question.translation}</p>
          )}
        </div>

        {question.type === 'multiple-choice' && question.options && (
          <div className="grid grid-cols-1 gap-2">
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={`
                  p-3 rounded-lg text-left transition-all border-2
                  ${answers[question.id] === option 
                    ? 'bg-blue-100 border-blue-500' 
                    : 'bg-slate-50 border-slate-200 hover:border-purple-400'}
                `}
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {question.type === 'fill-blank' && (
          <input
            type="text"
            value={answers[question.id] || ''}
            onChange={(e) => handleAnswer(e.target.value)}
            placeholder="Type your answer..."
            className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-purple-500"
          />
        )}

        {question.type === 'rewrite' && (
          <input
            type="text"
            value={answers[question.id] || ''}
            onChange={(e) => handleAnswer(e.target.value)}
            placeholder="Rewrite the sentence..."
            className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-purple-500"
          />
        )}

        {question.type === 'ordering' && (
          <input
            type="text"
            value={answers[question.id] || ''}
            onChange={(e) => handleAnswer(e.target.value)}
            placeholder="Arrange the words..."
            className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-purple-500"
          />
        )}

        {answers[question.id] && (
          <Button onClick={handleNext} className="bg-purple-500">
            {currentQuestion < quiz.questions.length - 1 ? 'Next Question →' : 'Finish Quiz'}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

interface QuizSectionViewProps {
  quiz: {
    id: string;
    title: string;
    description: string;
    passingScore: number;
    xpReward: number;
    gemReward: number;
    timeLimit: number;
    questions: AcademyExercise[];
  };
  addXP: (amount: number) => void;
  onComplete: () => void;
  onBack: () => void;
}

function QuizSectionView({ quiz, addXP, onComplete, onBack }: QuizSectionViewProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(quiz.timeLimit);

  const question = quiz.questions[currentQuestion];

  React.useEffect(() => {
    if (timeLeft <= 0 || showResult) return;
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, showResult]);

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({ ...prev, [question.id]: answer }));
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    quiz.questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) correct++;
    });
    return Math.round((correct / quiz.questions.length) * 100);
  };

  if (showResult) {
    const score = calculateScore();
    const passed = score >= quiz.passingScore;
    
    return (
      <Card className={`border-2 ${passed ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
        <CardContent className="p-6 text-center space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">
            {passed ? '🎉 Congratulations!' : '📚 Keep Practicing!'}
          </h2>
          <p className="text-4xl font-bold text-slate-800">{score}%</p>
          <p className="text-slate-600">
            You got {Math.round((score / 100) * quiz.questions.length)} of {quiz.questions.length} questions correct.
          </p>
          {passed && (
            <>
              <div className="flex justify-center gap-4 mt-4">
                <span className="px-4 py-2 bg-yellow-100 rounded-full text-yellow-700 font-bold">
                  +{quiz.xpReward} XP
                </span>
                <span className="px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-bold">
                  +{quiz.gemReward} 💎
                </span>
              </div>
              <Button onClick={() => { addXP(quiz.xpReward); onComplete(); }} className="bg-green-500">
                Continue
              </Button>
            </>
          )}
          {!passed && (
            <Button onClick={onComplete} className="bg-blue-500">
              Continue
            </Button>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 border-purple-200">
      <CardContent className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-slate-500">
            Question {currentQuestion + 1} of {quiz.questions.length}
          </span>
          <span className={`text-sm font-bold ${timeLeft < 60 ? 'text-red-500' : 'text-slate-500'}`}>
            ⏱️ {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </span>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-800">{question.question}</h3>
          {question.translation && (
            <p className="text-sm text-slate-500 mt-1">{question.translation}</p>
          )}
        </div>

        {question.type === 'multiple-choice' && question.options && (
          <div className="grid grid-cols-1 gap-2">
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={`
                  p-3 rounded-lg text-left transition-all border-2
                  ${answers[question.id] === option 
                    ? 'bg-blue-100 border-blue-500' 
                    : 'bg-slate-50 border-slate-200 hover:border-purple-400'}
                `}
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {question.type === 'fill-blank' && (
          <input
            type="text"
            value={answers[question.id] || ''}
            onChange={(e) => handleAnswer(e.target.value)}
            placeholder="Type your answer..."
            className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-purple-500"
          />
        )}

        {question.type === 'rewrite' && (
          <input
            type="text"
            value={answers[question.id] || ''}
            onChange={(e) => handleAnswer(e.target.value)}
            placeholder="Rewrite the sentence..."
            className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-purple-500"
          />
        )}

        {answers[question.id] && (
          <Button onClick={handleNext} className="bg-purple-500">
            {currentQuestion < quiz.questions.length - 1 ? 'Next Question →' : 'Finish Quiz'}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

interface PackSelectionViewProps<T> {
  packs: T[];
  title: string;
  onSelect: (pack: T) => void;
  completedExercises?: Record<string, number>;
}

function PackSelectionView<T extends ExercisePack | QuizPack>({ packs, title, onSelect, completedExercises }: PackSelectionViewProps<T>) {
  const [filter, setFilter] = useState<'all' | 'incomplete' | 'complete'>('all');
  const getPackTotalPoints = (pack: ExercisePack) => pack.exercises.reduce((acc, ex) => acc + (completedExercises?.[ex.id] || 0), 0);
  const getPackMaxPoints = (pack: ExercisePack) => pack.exercises.reduce((acc, ex) => acc + ex.points, 0);
  const isPackCompleted = (pack: ExercisePack) => getPackTotalPoints(pack) === getPackMaxPoints(pack);

  const filteredPacks = packs.filter(pack => {
    if (!('exercises' in pack)) return true;
    const completed = isPackCompleted(pack as ExercisePack);
    if (filter === 'incomplete') return !completed;
    if (filter === 'complete') return completed;
    return true;
  });

  if (packs.length === 0) {
    return (
      <Card className="border-2 border-slate-200">
        <CardContent className="p-6 text-center">
          <p className="text-slate-500">No {title.toLowerCase()} packs available yet.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">Choose a {title} Pack</h2>
      <div className="flex gap-2 mb-4">
        <Button
          onClick={() => setFilter('all')}
          className={filter === 'all' ? 'bg-blue-500' : 'bg-slate-200 text-slate-700'}
        >
          All
        </Button>
        <Button
          onClick={() => setFilter('incomplete')}
          className={filter === 'incomplete' ? 'bg-blue-500' : 'bg-slate-200 text-slate-700'}
        >
          Incomplete
        </Button>
        <Button
          onClick={() => setFilter('complete')}
          className={filter === 'complete' ? 'bg-blue-500' : 'bg-slate-200 text-slate-700'}
        >
          Complete
        </Button>
      </div>
      {filteredPacks.length === 0 ? (
        <Card className="border-2 border-slate-200">
          <CardContent className="p-6 text-center">
            <p className="text-slate-500">No {title.toLowerCase()} packs found with this filter.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPacks.map((pack) => {
          const total = 'exercises' in pack ? getPackTotalPoints(pack as ExercisePack) : 0;
          const max = 'exercises' in pack ? getPackMaxPoints(pack as ExercisePack) : 0;
          const completed = 'exercises' in pack ? isPackCompleted(pack as ExercisePack) : false;
          
          return (
            <Card
              key={pack.id}
              hoverable
              onClick={() => onSelect(pack)}
              className={`cursor-pointer border-2 hover:border-blue-400 ${completed ? 'border-green-300 bg-green-50' : 'border-slate-200'}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{pack.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800">{pack.title}{completed && ' ✓'}</h3>
                    <p className="text-sm text-slate-500">{pack.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <span>✏️ {'exercises' in pack ? (pack as ExercisePack).exercises.length : (pack as QuizPack).quiz.questions.length} questions</span>
                  <span className={completed ? 'text-green-600 font-medium' : ''}>
                    {'exercises' in pack ? `${total}/${max}` : `${(pack as QuizPack).quiz.xpReward} XP`}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      )}
    </div>
  );
}

interface PackExercisesViewProps {
  pack: ExercisePack;
  exerciseAnswers: Record<string, string>;
  setExerciseAnswers: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  currentExercise: number;
  setCurrentExercise: React.Dispatch<React.SetStateAction<number>>;
  addXP: (amount: number) => void;
  onBack: () => void;
  completedExercises: Record<string, number>;
  setCompletedExercises: React.Dispatch<React.SetStateAction<Record<string, number>>>;
}

function PackExercisesView({ pack, exerciseAnswers, setExerciseAnswers, currentExercise, setCurrentExercise, addXP, onBack, completedExercises, setCompletedExercises }: PackExercisesViewProps) {
  const currentEx = pack.exercises[currentExercise];
  const isAnswered = !!exerciseAnswers[currentEx?.id];
  const isCorrect = exerciseAnswers[currentEx?.id] === currentEx?.correctAnswer;
  const isCompleted = completedExercises[currentEx?.id] === currentEx?.points;

  const handleAnswer = (answer: string) => {
    setExerciseAnswers(prev => ({ ...prev, [currentEx.id]: answer }));
    if (answer === currentEx?.correctAnswer) {
      setCompletedExercises(prev => ({
        ...prev,
        [currentEx.id]: currentEx.points
      }));
    }
  };

  const handleNext = () => {
    let nextIndex = currentExercise + 1;
    while (nextIndex < pack.exercises.length && completedExercises[pack.exercises[nextIndex].id] === pack.exercises[nextIndex].points) {
      nextIndex++;
    }
    if (nextIndex < pack.exercises.length) {
      setCurrentExercise(nextIndex);
    }
  };

  const getPackTotalPoints = () => pack.exercises.reduce((acc, ex) => acc + (completedExercises[ex.id] || 0), 0);
  const getPackMaxPoints = () => pack.exercises.reduce((acc, ex) => acc + ex.points, 0);
  const isPackCompleted = getPackTotalPoints() === getPackMaxPoints();

  const handleFinish = () => {
    const earned = pack.exercises.reduce((acc, ex) => acc + (exerciseAnswers[ex.id] === ex.correctAnswer ? ex.points : 0), 0);
    addXP(Math.floor(earned / 2));
    setCurrentExercise(0);
    setExerciseAnswers({});
    onBack();
  };

  const handleTryAgain = () => {
    setExerciseAnswers(prev => ({ ...prev, [currentEx.id]: '' }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="text-slate-500 hover:text-slate-700">←</button>
          <span className="text-2xl">{pack.icon}</span>
          <h2 className="text-2xl font-bold text-slate-800">{pack.title}</h2>
          {isPackCompleted && <span className="text-green-600 text-xl">✓</span>}
        </div>
        <div className="text-right">
          <span className={`text-sm font-medium ${isPackCompleted ? 'text-green-600' : 'text-slate-500'}`}>
            {getPackTotalPoints()} / {getPackMaxPoints()}
          </span>
        </div>
      </div>

      <Card className="border-2 border-blue-200">
        <CardContent className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500">
                {pack.exercises[currentExercise]?.sectionId?.replace(/-/g, ' ')}
              </span>
              <span className="text-sm font-bold text-blue-600">{currentEx?.points} pts</span>
            </div>

          <div>
            <h3 className="text-lg font-bold text-slate-800">{currentEx?.question}</h3>
            {currentEx?.translation && (
              <p className="text-sm text-slate-500 mt-1">{currentEx.translation}</p>
            )}
          </div>

          {currentEx?.type === 'multiple-choice' && currentEx.options && (
            <div className="grid grid-cols-1 gap-2">
              {currentEx.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  disabled={isAnswered}
                  className={`
                    p-3 rounded-lg text-left transition-all border-2
                    ${exerciseAnswers[currentEx.id] === option 
                      ? (option === currentEx.correctAnswer ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500')
                      : isAnswered && option === currentEx.correctAnswer 
                        ? 'bg-green-100 border-green-500'
                        : 'bg-slate-50 border-slate-200 hover:border-blue-400'}
                  `}
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          {currentEx?.type === 'fill-blank' && (
            <input
              type="text"
              value={exerciseAnswers[currentEx.id] || ''}
              onChange={(e) => handleAnswer(e.target.value)}
              disabled={isAnswered}
              placeholder="Type your answer..."
              className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-blue-500"
            />
          )}

          {isAnswered && (
            <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} border`}>
              <p className={`font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
              </p>
              {!isCorrect && (
                <p className="text-slate-600 mt-2">
                  Correct answer: <span className="font-bold">{currentEx.correctAnswer}</span>
                </p>
              )}
              {currentEx.explanation && (
                <p className="text-sm text-slate-500 mt-2">💡 {currentEx.explanation}</p>
              )}
            </div>
          )}

          {isAnswered && (
            <div className="flex gap-2">
              {currentExercise < pack.exercises.length - 1 ? (
                <Button onClick={handleNext} className="bg-blue-500">
                  Next Exercise →
                </Button>
              ) : (
                <Button onClick={handleFinish} className="bg-green-500">
                  Return to Packs
                </Button>
              )}
              {!isCorrect && (
                <Button onClick={handleTryAgain} variant="outline">
                  Try Again
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}