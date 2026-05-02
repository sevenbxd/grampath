'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, Button } from '@/components/ui';

type ExerciseType = 'multiple-choice' | 'fill-blank' | 'matching' | 'ordering' | 'rewrite' | 'correction' | 'multiple_choice' | 'fill_blank' | 'writing';

interface ExerciseData {
  id: string;
  type: ExerciseType;
  question: string;
  options?: string[];
  correct?: number;
  correctAnswer?: string | string[];
  answer?: string;
  translation?: string;
  explanation?: string;
  points?: number;
}

interface ExerciseRendererProps {
  exercise: ExerciseData;
  onComplete: (correct: boolean) => void;
  onAnswer?: (isCorrect: boolean) => void;
}

export const ExerciseRenderer: React.FC<ExerciseRendererProps> = ({
  exercise,
  onComplete,
  onAnswer
}) => {
  const handleComplete = (correct: boolean) => {
    if (onAnswer) onAnswer(correct);
    onComplete(correct);
  };

  switch (exercise.type) {
    case 'multiple-choice':
    case 'multiple_choice':
      return <MultipleChoiceView exercise={exercise} onComplete={handleComplete} />;
    case 'fill-blank':
    case 'fill_blank':
      return <FillBlankView exercise={exercise} onComplete={handleComplete} />;
    case 'ordering':
      return <OrderingView exercise={exercise} onComplete={handleComplete} />;
    case 'matching':
      return <MatchingView exercise={exercise} onComplete={handleComplete} />;
    case 'rewrite':
      return <RewriteView exercise={exercise} onComplete={handleComplete} />;
    case 'correction':
      return <CorrectionView exercise={exercise} onComplete={handleComplete} />;
    case 'writing':
      return <WritingView exercise={exercise} onComplete={handleComplete} />;
    default:
      return <div className="p-8 text-center text-slate-500">Exercise type not supported</div>;
  }
};

interface ExerciseViewProps {
  exercise: ExerciseData;
  onComplete: (correct: boolean) => void;
}

function MultipleChoiceView({ exercise, onComplete }: ExerciseViewProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const options = exercise.options || [];
  const correctIndex = exercise.correct ?? 
    (typeof exercise.correctAnswer === 'string' ? options.indexOf(exercise.correctAnswer) : -1);
  
  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelected(index);
    setShowResult(true);
    const isCorrect = index === correctIndex;
    setTimeout(() => onComplete(isCorrect), 1500);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-3">
        {options.map((option, index) => {
          let style = 'bg-white border-slate-200 hover:border-green-300 hover:bg-green-50 cursor-pointer';
          if (showResult) {
            if (index === correctIndex) {
              style = 'bg-green-100 border-green-500 text-green-700';
            } else if (index === selected) {
              style = 'bg-red-100 border-red-500 text-red-700';
            } else {
              style = 'bg-slate-100 border-slate-200 opacity-50';
            }
          }
          
          return (
            <Card
              key={index}
              onClick={() => handleSelect(index)}
              className={`transition-all ${style}`}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                    ${showResult && index === correctIndex ? 'bg-green-500 text-white' :
                      showResult && index === selected ? 'bg-red-500 text-white' :
                      'bg-slate-200 text-slate-600'}
                  `}>
                    {showResult && index === correctIndex ? '✓' :
                     showResult && index === selected ? '✗' :
                     String.fromCharCode(65 + index)}
                  </div>
                  <span className="font-medium text-slate-700">{option}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      {showResult && exercise.explanation && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`
            p-4 rounded-xl border-2
            ${selected === correctIndex ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}
          `}
        >
          <p className={`font-bold ${selected === correctIndex ? 'text-green-700' : 'text-red-700'}`}>
            {selected === correctIndex ? '✓ Correct!' : '✗ Incorrect'}
          </p>
          <p className="text-slate-600 text-sm mt-2">{exercise.explanation}</p>
        </motion.div>
      )}
    </div>
  );
}

function FillBlankView({ exercise, onComplete }: ExerciseViewProps) {
  const [answer, setAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const correctAnswer = exercise.answer || exercise.correctAnswer || '';
  const correctAnswerStr = Array.isArray(correctAnswer) ? correctAnswer[0] : correctAnswer;

  const handleCheck = () => {
    const correct = answer.toLowerCase().trim() === correctAnswerStr.toLowerCase().trim();
    setIsCorrect(correct);
    setShowResult(true);
    setTimeout(() => onComplete(correct), 1500);
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !showResult && handleCheck()}
            disabled={showResult}
            placeholder="Type your answer..."
            className={`
              w-full p-4 border-2 rounded-xl focus:outline-none text-lg
              ${showResult
                ? isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
                : 'border-slate-200 focus:border-green-400'
              }
            `}
          />
        </CardContent>
      </Card>
      
      {!showResult && (
        <Button onClick={handleCheck} disabled={!answer.trim()} className="w-full bg-green-500">
          Check Answer
        </Button>
      )}
      
      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`
            p-4 rounded-xl border-2
            ${isCorrect ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}
          `}
        >
          <p className={`font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
            {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
          </p>
          {!isCorrect && (
            <p className="text-slate-600 text-sm mt-2">
              Correct answer: <span className="font-bold">{correctAnswerStr}</span>
            </p>
          )}
          {exercise.explanation && (
            <p className="text-slate-600 text-sm mt-2">{exercise.explanation}</p>
          )}
        </motion.div>
      )}
    </div>
  );
}

function OrderingView({ exercise, onComplete }: ExerciseViewProps) {
  const [order, setOrder] = useState<string[]>([]);
  const words = exercise.question.split(' / ');

  const handleSelect = (word: string) => {
    if (order.includes(word)) return;
    setOrder([...order, word]);
  };

  const handleRemove = (index: number) => {
    setOrder(order.filter((_, i) => i !== index));
  };

  const handleCheck = () => {
    const correctAnswer = Array.isArray(exercise.correctAnswer) 
      ? exercise.correctAnswer.join(' ')
      : exercise.correctAnswer || '';
    const correct = order.join(' ') === correctAnswer;
    setTimeout(() => onComplete(correct), 1000);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 p-4 bg-slate-50 rounded-xl min-h-16">
        {order.length === 0 ? (
          <p className="text-slate-400 text-sm">Click words to build the sentence...</p>
        ) : (
          order.map((word, index) => (
            <motion.span
              key={index}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              onClick={() => handleRemove(index)}
              className="px-3 py-1 bg-green-100 text-green-700 rounded-full cursor-pointer font-medium"
            >
              {word}
            </motion.span>
          ))
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {words.map((word, index) => (
          <button
            key={index}
            onClick={() => handleSelect(word)}
            disabled={order.includes(word)}
            className={`
              px-3 py-1 rounded-full font-medium transition-all
              ${order.includes(word)
                ? 'bg-slate-100 text-slate-400'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300 cursor-pointer'
              }
            `}
          >
            {word}
          </button>
        ))}
      </div>
      
      {order.length > 0 && (
        <Button onClick={handleCheck} className="w-full bg-green-500">
          Check Answer
        </Button>
      )}
      
      {exercise.translation && (
        <p className="text-sm text-slate-500 text-center">{exercise.translation}</p>
      )}
    </div>
  );
}

function MatchingView({ exercise, onComplete }: ExerciseViewProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const options = exercise.options || [];
  const correctAnswer = Array.isArray(exercise.correctAnswer) 
    ? exercise.correctAnswer[0] 
    : exercise.correctAnswer || '';

  const handleSelectOption = (option: string) => {
    if (matches[exercise.question] || showResult) return;
    setSelected(option);
  };

  const handleSelectAnswer = (answer: string) => {
    if (!selected || matches[exercise.question] || showResult) return;
    
    const newMatches = { ...matches, [exercise.question]: answer };
    setMatches(newMatches);
    setSelected(null);

    const correct = selected === correctAnswer;
    setShowResult(true);
    setTimeout(() => {
      setShowResult(false);
      onComplete(correct);
    }, 1500);
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4 text-center">
          <p className="text-lg font-bold text-slate-800">{exercise.question}</p>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-slate-500">Options</p>
          {options.map((option, index) => (
            <Card
              key={index}
              onClick={() => handleSelectOption(option)}
              className={`
                cursor-pointer transition-all
                ${selected === option ? 'border-green-400 bg-green-50' : 'border-slate-200'}
                ${matches[exercise.question] ? 'opacity-50' : ''}
              `}
            >
              <CardContent className="p-3 text-center">
                <span className="font-medium text-slate-700">{option}</span>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="space-y-2">
          <p className="text-sm font-semibold text-slate-500">Match with:</p>
          <Card
            onClick={() => handleSelectAnswer(correctAnswer)}
            className={`
              cursor-pointer transition-all
              ${matches[exercise.question] === correctAnswer
                ? 'border-green-400 bg-green-50'
                : matches[exercise.question] && matches[exercise.question] !== correctAnswer
                ? 'border-red-400 bg-red-50'
                : 'border-slate-200 hover:border-green-300'
              }
              ${selected ? '' : 'opacity-50'}
            `}
          >
            <CardContent className="p-3 text-center">
              <span className="font-medium text-slate-700">
                {matches[exercise.question] || correctAnswer}
              </span>
              {showResult && (
                <span className="ml-2">
                  {matches[exercise.question] === correctAnswer ? '✓' : '✗'}
                </span>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      
      {showResult && exercise.explanation && (
        <p className="text-slate-600 text-sm text-center">{exercise.explanation}</p>
      )}
    </div>
  );
}

function RewriteView({ exercise, onComplete }: ExerciseViewProps) {
  const [answer, setAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const correctAnswer = Array.isArray(exercise.correctAnswer) 
    ? exercise.correctAnswer[0] 
    : exercise.correctAnswer || '';

  const handleCheck = () => {
    const correct = answer.toLowerCase().includes(correctAnswer.toLowerCase());
    setIsCorrect(correct);
    setShowResult(true);
    setTimeout(() => onComplete(correct), 2000);
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4">
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={showResult}
            placeholder="Write your rewritten sentence here..."
            className={`
              w-full p-4 border-2 rounded-xl focus:outline-none min-h-32 resize-none
              ${showResult
                ? isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
                : 'border-slate-200 focus:border-green-400'
              }
            `}
          />
        </CardContent>
      </Card>
      
      {exercise.translation && (
        <p className="text-sm text-slate-500">{exercise.translation}</p>
      )}
      
      {!showResult && (
        <Button onClick={handleCheck} disabled={!answer.trim()} className="w-full bg-green-500">
          Check Answer
        </Button>
      )}
      
      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`
            p-4 rounded-xl border-2
            ${isCorrect ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}
          `}
        >
          <p className={`font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
            {isCorrect ? '✓ Good job!' : '✗ Not quite right'}
          </p>
          {!isCorrect && (
            <p className="text-slate-600 text-sm mt-2">
              Suggested answer: <span className="font-bold">{correctAnswer}</span>
            </p>
          )}
          {exercise.explanation && (
            <p className="text-slate-600 text-sm mt-2">{exercise.explanation}</p>
          )}
        </motion.div>
      )}
    </div>
  );
}

function CorrectionView({ exercise, onComplete }: ExerciseViewProps) {
  const [answer, setAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const correctAnswer = Array.isArray(exercise.correctAnswer) 
    ? exercise.correctAnswer[0] 
    : exercise.correctAnswer || '';

  const handleCheck = () => {
    const correct = answer.toLowerCase().includes(correctAnswer.toLowerCase());
    setIsCorrect(correct);
    setShowResult(true);
    setTimeout(() => onComplete(correct), 2000);
  };

  return (
    <div className="space-y-4">
      <Card className="bg-red-50 border-red-200">
        <CardContent className="p-4">
          <p className="text-slate-700 line-through">{exercise.question}</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4">
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={showResult}
            placeholder="Write the corrected sentence..."
            className={`
              w-full p-4 border-2 rounded-xl focus:outline-none min-h-24 resize-none
              ${showResult
                ? isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
                : 'border-slate-200 focus:border-green-400'
              }
            `}
          />
        </CardContent>
      </Card>
      
      {exercise.translation && (
        <p className="text-sm text-slate-500">{exercise.translation}</p>
      )}
      
      {!showResult && (
        <Button onClick={handleCheck} disabled={!answer.trim()} className="w-full bg-green-500">
          Check Answer
        </Button>
      )}
      
      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`
            p-4 rounded-xl border-2
            ${isCorrect ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}
          `}
        >
          <p className={`font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
            {isCorrect ? '✓ Correct!' : '✗ Try again'}
          </p>
          {!isCorrect && (
            <p className="text-slate-600 text-sm mt-2">
              Correct answer: <span className="font-bold">{correctAnswer}</span>
            </p>
          )}
          {exercise.explanation && (
            <p className="text-slate-600 text-sm mt-2">{exercise.explanation}</p>
          )}
        </motion.div>
      )}
    </div>
  );
}

function WritingView({ exercise, onComplete }: ExerciseViewProps) {
  const [answer, setAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    setShowResult(true);
    const words = answer.trim().split(/\s+/).length;
    const minWords = exercise.options?.[0] ? parseInt(exercise.options[0]) : 30;
    const isValid = words >= minWords;
    setTimeout(() => onComplete(isValid), 1500);
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4">
          <p className="text-slate-600 mb-4">{exercise.explanation}</p>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={showResult}
            placeholder="Write your response here..."
            className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-green-400 focus:outline-none min-h-48 resize-none"
          />
        </CardContent>
      </Card>
      
      <div className="flex justify-between text-sm text-slate-500">
        <span>Words: {answer.trim().split(/\s+/).filter(w => w).length}</span>
        {exercise.options?.[0] && (
          <span>Minimum: {exercise.options[0]} words</span>
        )}
      </div>
      
      {!showResult && (
        <Button onClick={handleSubmit} disabled={!answer.trim()} className="w-full bg-green-500">
          Submit
        </Button>
      )}
    </div>
  );
}

export default ExerciseRenderer;