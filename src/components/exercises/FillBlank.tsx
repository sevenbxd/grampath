'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FillBlankExercise as FillBlankExerciseType } from '@/types';
import { showCorrectAnswerEffect } from '@/components/effects';

interface FillBlankProps {
  exercise: FillBlankExerciseType;
  onAnswer: (isCorrect: boolean) => void;
}

export const FillBlankExercise: React.FC<FillBlankProps> = ({
  exercise,
  onAnswer
}) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);

  const isAnswerCorrect = userAnswer.toLowerCase().trim() === exercise.answer.toLowerCase().trim();

  const handleSubmit = () => {
    if (!userAnswer.trim()) return;
    
    const isCorrect = isAnswerCorrect;
    setShowResult(true);
    
    if (isCorrect) {
      showCorrectAnswerEffect();
    }
    
    setTimeout(() => {
      onAnswer(isCorrect);
    }, 1500);
  };

  const parts = exercise.question.split('___');

  return (
    <div className="space-y-6">
      <motion.div 
        className="text-lg font-medium text-[#3c3c3c] leading-relaxed"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {parts[0]}
        <motion.input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          disabled={showResult}
          placeholder="type your answer"
          className={`
            mx-2 px-4 py-2 rounded-xl border-2 inline-block w-40 text-center font-medium
            transition-all duration-200
            ${showResult 
              ? isAnswerCorrect
                ? 'border-[#58cc02] bg-[#e8f5e8] text-[#58cc02]'
                : 'border-[#ff4b4b] bg-[#ffe8e8] text-[#ff4b4b]'
              : 'border-[#e5e5e5] focus:border-[#58cc02] focus:bg-[#f0fff0]'
            }
          `}
          whileFocus={{ scale: 1.05 }}
        />
        {parts[1]}
      </motion.div>
      
      {exercise.hint && (
        <motion.p 
          className="text-sm text-[#737373]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          💡 Hint: {exercise.hint}
        </motion.p>
      )}
      
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`
              p-4 rounded-xl border-l-4
              ${isAnswerCorrect
                ? 'bg-[#e8f5e8] border-[#58cc02]' 
                : 'bg-[#ffe8e8] border-[#ff4b4b]'
              }
            `}
          >
            <motion.h4 
              className={`font-bold mb-2 ${
                isAnswerCorrect 
                  ? 'text-[#58cc02]' : 'text-[#ff4b4b]'
              }`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              {isAnswerCorrect 
                ? '✓ Correct!' : '✗ The correct answer is: ' + exercise.answer}
            </motion.h4>
            <motion.p 
              className="text-[#3c3c3c]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {exercise.explanation}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        onClick={handleSubmit}
        disabled={!userAnswer.trim() || showResult}
        className={`
          w-full py-4 rounded-xl font-bold text-lg
          transition-all duration-200
          ${!userAnswer.trim() || showResult
            ? 'bg-[#e5e5e5] text-[#aaa] cursor-not-allowed'
            : 'bg-[#58cc02] text-white shadow-[0_4px_0_#46a302] hover:shadow-[0_2px_0_#46a302] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]'
          }
        `}
        whileHover={!userAnswer.trim() || showResult ? {} : { y: -2 }}
        whileTap={!userAnswer.trim() || showResult ? {} : { y: 2 }}
      >
        Check
      </motion.button>
    </div>
  );
};