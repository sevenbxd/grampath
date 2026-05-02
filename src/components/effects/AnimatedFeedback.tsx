'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedFeedbackProps {
  isCorrect: boolean;
  visible: boolean;
  explanation: string;
  onContinue: () => void;
}

export const AnimatedFeedback: React.FC<AnimatedFeedbackProps> = ({
  isCorrect,
  visible,
  explanation,
  onContinue,
}) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={onContinue}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ type: 'spring', damping: 15, stiffness: 300 }}
            className={`
              bg-white rounded-3xl p-8 text-center max-w-sm mx-4
              ${isCorrect ? 'border-4 border-[#58cc02]' : 'border-4 border-[#ff4b4b]'}
            `}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2, damping: 10 }}
              className={`
                w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4
                ${isCorrect ? 'bg-[#58cc02]' : 'bg-[#ff4b4b]'}
              `}
            >
              <span className="text-5xl text-white">
                {isCorrect ? '✓' : '✗'}
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`text-2xl font-bold mb-2 ${
                isCorrect ? 'text-[#58cc02]' : 'text-[#ff4b4b]'
              }`}
            >
              {isCorrect ? 'Correct!' : 'Not quite!'}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[#3c3c3c] mb-4"
            >
              {explanation}
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={(e) => {
                e.stopPropagation();
                onContinue();
              }}
              className={`
                px-8 py-3 rounded-xl font-bold text-white shadow-lg
                transition-all duration-200
                hover:scale-105 active:scale-95
                ${isCorrect ? 'bg-[#58cc02] hover:bg-[#46a302]' : 'bg-[#ff4b4b] hover:bg-[#e63939]'}
              `}
            >
              Continue
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};