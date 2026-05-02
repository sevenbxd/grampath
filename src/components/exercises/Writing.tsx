'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WritingExercise as WritingExerciseType } from '@/types';
import { checkGrammar, GrammarError, getScoreColor, getScoreMessage } from '@/lib/grammarChecker';
import { showCorrectAnswerEffect } from '@/components/effects';

interface WritingExerciseProps {
  exercise: WritingExerciseType;
  onAnswer: (isCorrect: boolean) => void;
}

export const WritingExercise: React.FC<WritingExerciseProps> = ({
  exercise,
  onAnswer
}) => {
  const [text, setText] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [grammarResult, setGrammarResult] = useState<{
    errors: GrammarError[];
    matches: number;
  } | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const isValid = wordCount >= exercise.minWords && wordCount <= exercise.maxWords;

  const handleCheckGrammar = async () => {
    if (!text.trim()) return;
    
    setIsChecking(true);
    setShowSuggestions(true);
    
    const result = await checkGrammar(text);
    setGrammarResult(result);
    setIsChecking(false);
  };

  const handleSubmit = () => {
    if (!isValid) return;
    
    if (grammarResult && grammarResult.matches === 0) {
      showCorrectAnswerEffect();
    }
    
    setShowResult(true);
    
    setTimeout(() => {
      onAnswer(grammarResult ? grammarResult.matches <= 2 : false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#e8f4ff] border-l-4 border-[#1cb0f6] p-4 rounded-r-xl">
        <h4 className="font-bold text-[#1cb0f6] mb-2">📝 Writing Task</h4>
        <p className="text-[#3c3c3c] whitespace-pre-line">{exercise.prompt}</p>
        
        {exercise.grammarFocus.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {exercise.grammarFocus.map((focus, i) => (
              <span 
                key={i} 
                className="px-2 py-1 bg-white rounded-lg text-xs font-medium text-[#1cb0f6]"
              >
                {focus}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div>
        <div className="relative">
          <textarea
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setGrammarResult(null);
            }}
            disabled={showResult}
            placeholder="Start writing here..."
            className="w-full min-h-[250px] p-4 rounded-xl border-2 border-[#e5e5e5] text-[#3c3c3c] 
              focus:border-[#58cc02] focus:bg-[#f0fff0] resize-y font-medium leading-relaxed"
          />
          
          <AnimatePresence>
            {showSuggestions && grammarResult && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-2 right-2"
              >
                <div className={`px-3 py-1 rounded-full text-sm font-bold ${getScoreColor(grammarResult.matches)} bg-white shadow-md`}>
                  {getScoreMessage(grammarResult.matches)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="flex justify-between items-center mt-2">
          <span className={`text-sm font-medium ${
            wordCount < exercise.minWords 
              ? 'text-[#ff4b4b]' 
              : wordCount > exercise.maxWords 
                ? 'text-[#ff9600]' 
                : 'text-[#58cc02]'
          }`}>
            {wordCount} / {exercise.minWords} - {exercise.maxWords} words
          </span>
          
          {wordCount < exercise.minWords && (
            <span className="text-sm text-[#737373]">
              Write at least {exercise.minWords - wordCount} more words
            </span>
          )}
        </div>
      </div>

      {showSuggestions && grammarResult && grammarResult.errors.length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-[#fff9e6] border-l-4 border-[#ff9600] p-4 rounded-r-xl max-h-48 overflow-y-auto"
        >
          <h4 className="font-bold text-[#ff9600] mb-3">🔍 Suggestions</h4>
          <div className="space-y-2">
            {grammarResult.errors.slice(0, 5).map((error, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="text-sm"
              >
                <span className="text-[#ff4b4b] font-medium">• {error.message}</span>
                {error.replacements.length > 0 && (
                  <span className="text-[#58cc02] ml-2">
                    → Try: &quot;{error.replacements[0]}&quot;
                  </span>
                )}
              </motion.div>
            ))}
            {grammarResult.errors.length > 5 && (
              <p className="text-sm text-[#737373]">
                +{grammarResult.errors.length - 5} more suggestions...
              </p>
            )}
          </div>
        </motion.div>
      )}
      
      <div className="flex gap-3">
        <button
          onClick={handleCheckGrammar}
          disabled={!text.trim() || isChecking || showResult}
          className={`
            flex-1 py-4 rounded-xl font-bold text-lg
            transition-all duration-200
            ${!text.trim() || isChecking || showResult
              ? 'bg-[#e5e5e5] text-[#aaa] cursor-not-allowed'
              : 'bg-[#1cb0f6] text-white shadow-[0_4px_0_#0d9de0] hover:shadow-[0_2px_0_#0d9de0] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]'
            }
          `}
        >
          {isChecking ? 'Checking...' : 'Check Grammar'}
        </button>
        
        <button
          onClick={handleSubmit}
          disabled={!isValid || showResult}
          className={`
            flex-1 py-4 rounded-xl font-bold text-lg
            transition-all duration-200
            ${!isValid || showResult
              ? 'bg-[#e5e5e5] text-[#aaa] cursor-not-allowed'
              : 'bg-[#58cc02] text-white shadow-[0_4px_0_#46a302] hover:shadow-[0_2px_0_#46a302] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]'
            }
          `}
        >
          Submit
        </button>
      </div>
      
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`border-l-4 p-4 rounded-r-xl ${
              grammarResult && grammarResult.matches <= 2
                ? 'bg-[#e8f5e8] border-[#58cc02]'
                : 'bg-[#ffe8e8] border-[#ff4b4b]'
            }`}
          >
            <h4 className={`font-bold mb-2 ${
              grammarResult && grammarResult.matches <= 2
                ? 'text-[#58cc02]'
                : 'text-[#ff4b4b]'
            }`}>
              {grammarResult && grammarResult.matches <= 2
                ? '✓ Great Work!'
                : 'Good Attempt!'}
            </h4>
            <p className="text-[#3c3c3c]">{exercise.explanation}</p>
            
            {grammarResult && (
              <div className="mt-3 text-sm text-[#737373]">
                Grammar check: {grammarResult.matches === 0 
                  ? 'No issues found' 
                  : `${grammarResult.matches} suggestion${grammarResult.matches > 1 ? 's' : ''} found`}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};