'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MultipleChoiceExercise as MultipleChoiceExerciseType } from '@/types';
import { showCorrectAnswerEffect } from '@/components/effects';

interface MultipleChoiceProps {
  exercise: MultipleChoiceExerciseType;
  onAnswer: (isCorrect: boolean) => void;
}

export const MultipleChoiceExercise: React.FC<MultipleChoiceProps> = ({
  exercise,
  onAnswer,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelectedIndex(index);
  };

  const handleSubmit = () => {
    if (selectedIndex === null) return;
    
    const isCorrect = selectedIndex === exercise.correct;
    setShowResult(true);
    
    if (isCorrect) {
      showCorrectAnswerEffect();
    }
    
    setTimeout(() => {
      onAnswer(isCorrect);
    }, 1500);
  };

  const getOptionStyle = (index: number) => {
    if (!showResult) {
      return selectedIndex === index 
        ? 'border-[#58cc02] bg-[#e8f5e8]' 
        : 'border-[#e5e5e5] hover:border-[#58cc02] hover:bg-[#f0fff0]';
    }
    
    if (index === exercise.correct) {
      return 'border-[#58cc02] bg-[#e8f5e8]';
    }
    
    if (index === selectedIndex && selectedIndex !== exercise.correct) {
      return 'border-[#ff4b4b] bg-[#ffe8e8]';
    }
    
    return 'border-[#e5e5e5] opacity-50';
  };

  return (
    <div className="space-y-6">
      <motion.div 
        className="text-lg font-medium text-[#3c3c3c] leading-relaxed"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {exercise.question}
      </motion.div>
      
      <div className="space-y-3">
        {exercise.options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => handleSelect(index)}
            disabled={showResult}
            className={`
              w-full p-4 rounded-xl border-2 text-left font-medium
              transition-all duration-200
              ${getOptionStyle(index)}
            `}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            whileHover={showResult ? {} : { scale: 1.01 }}
            whileTap={showResult ? {} : { scale: 0.99 }}
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#e5e5e5] text-sm mr-3 font-bold">
              {String.fromCharCode(65 + index)}
            </span>
            {option}
          </motion.button>
        ))}
      </div>
      
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`
              p-4 rounded-xl border-l-4
              ${selectedIndex === exercise.correct 
                ? 'bg-[#e8f5e8] border-[#58cc02]' 
                : 'bg-[#ffe8e8] border-[#ff4b4b]'
              }
            `}
          >
            <motion.h4 
              className={`font-bold mb-2 ${
                selectedIndex === exercise.correct ? 'text-[#58cc02]' : 'text-[#ff4b4b]'
              }`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              {selectedIndex === exercise.correct ? '✓ Correct!' : '✗ Not quite'}
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
        disabled={selectedIndex === null || showResult}
        className={`
          w-full py-4 rounded-xl font-bold text-lg
          transition-all duration-200
          ${selectedIndex === null || showResult
            ? 'bg-[#e5e5e5] text-[#aaa] cursor-not-allowed'
            : 'bg-[#58cc02] text-white shadow-[0_4px_0_#46a302] hover:shadow-[0_2px_0_#46a302] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]'
          }
        `}
        whileHover={selectedIndex === null || showResult ? {} : { y: -2 }}
        whileTap={selectedIndex === null || showResult ? {} : { y: 2 }}
      >
        Check
      </motion.button>
    </div>
  );
};