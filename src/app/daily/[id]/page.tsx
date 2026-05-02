'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { getChallengeQuestions, getDailyChallenges } from '@/data/dailyChallenges';
import { useProgressStore } from '@/store/progressStore';
import { Card, CardContent, Button } from '@/components/ui';

interface Question {
  question: string;
  options?: string[];
  answer: string;
  hint?: string;
  translation: string;
}

export default function DailyChallengePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const challengeId = searchParams?.get('id') || '';
  
  const [challenges] = useState(() => getDailyChallenges());
  const [challenge, setChallenge] = useState(challenges[0]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const { completeChallenge, completedChallenges, addXP } = useProgressStore();

  useEffect(() => {
    const challengeData = challenges.find(c => c.id === challengeId) || challenges[0];
    setChallenge(challengeData);
    setQuestions(getChallengeQuestions(challengeData.skill));
  }, [challengeId, challenges]);

  const handleAnswer = (answer: string) => {
    if (showResult) return;
    
    setSelectedAnswer(answer);
    setShowResult(true);
    
    if (answer === questions[currentQuestion].answer) {
      setCorrectCount(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameComplete(true);
      if (challenge) {
        const xpPerQuestion = Math.round(challenge.xpReward / questions.length);
        const gemsPerQuestion = Math.round(challenge.gemReward / questions.length);
        const finalXP = xpPerQuestion * correctCount;
        const finalGems = (correctCount === questions.length ? gemsPerQuestion : 0);
        
        if (!completedChallenges.includes(challenge.id)) {
          completeChallenge(challenge.id, finalXP, finalGems);
        } else {
          addXP(Math.round(finalXP / 2));
        }
      }
    }
  };

  const getOptionStyle = (option: string) => {
    if (!showResult) {
      return 'bg-white hover:bg-green-50 border-slate-200 hover:border-green-300 cursor-pointer';
    }
    if (option === questions[currentQuestion].answer) {
      return 'bg-green-100 border-green-500 text-green-700';
    }
    if (option === selectedAnswer && option !== questions[currentQuestion].answer) {
      return 'bg-red-100 border-red-500 text-red-700';
    }
    return 'bg-slate-100 border-slate-200 opacity-50';
  };

  if (gameComplete) {
    const percentage = Math.round((correctCount / questions.length) * 100);
    const isPerfect = correctCount === questions.length;
    const isPassed = percentage >= 60;
    
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center text-4xl mb-6 ${
              isPerfect ? 'bg-gradient-to-br from-yellow-400 to-amber-500' :
              isPassed ? 'bg-gradient-to-br from-green-400 to-emerald-500' :
              'bg-gradient-to-br from-orange-400 to-red-500'
            }`}
          >
            {isPerfect ? '🏆' : isPassed ? '🎉' : '💪'}
          </motion.div>
          
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            {isPerfect ? 'Perfect Score!' : isPassed ? 'Challenge Complete!' : 'Keep Practicing!'}
          </h2>
          <p className="text-slate-500 mb-6">{challenge?.title}</p>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-slate-50 rounded-2xl">
              <p className="text-3xl font-bold text-slate-800">{correctCount}/{questions.length}</p>
              <p className="text-sm text-slate-500">Correct</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl">
              <p className="text-3xl font-bold text-green-600">{percentage}%</p>
              <p className="text-sm text-slate-500">Accuracy</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl">
              <p className="text-3xl font-bold text-amber-600">+{Math.round((challenge?.xpReward || 50) / questions.length) * correctCount}</p>
              <p className="text-sm text-slate-500">XP Earned</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button
              onClick={() => router.push('/daily')}
              variant="outline"
              className="flex-1"
            >
              Back to Daily
            </Button>
            <Button
              onClick={() => router.push('/app')}
              className="flex-1 bg-green-500 hover:bg-green-600"
            >
              Home
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-12">
      <div className="gradient-bg py-6 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            className="flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Button 
              onClick={() => router.push('/daily')}
              variant="ghost" 
              className="text-white hover:bg-white/20"
            >
              ← Back
            </Button>
            <div className="text-white text-sm font-semibold">
              {currentQuestion + 1} / {questions.length}
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-2xl font-bold text-white mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {challenge?.title}
          </motion.h1>
          
          <div className="mt-4 h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {questions[currentQuestion] && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-6"
            >
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <span className="text-4xl mb-4 block">📝</span>
                    <h2 className="text-xl font-bold text-slate-800">
                      {questions[currentQuestion].question}
                    </h2>
                    <p className="text-sm text-slate-500 mt-2">
                      {questions[currentQuestion].translation}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 gap-3">
                {questions[currentQuestion].options?.map((option, index) => (
                  <motion.div
                    key={option}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      hoverable={!showResult}
                      onClick={() => handleAnswer(option)}
                      className={`transition-all ${getOptionStyle(option)}`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className={`
                            w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                            ${showResult && option === questions[currentQuestion].answer ? 'bg-green-500 text-white' :
                              showResult && option === selectedAnswer ? 'bg-red-500 text-white' :
                              'bg-slate-200 text-slate-600'}
                          `}>
                            {showResult && option === questions[currentQuestion].answer ? '✓' :
                             showResult && option === selectedAnswer ? '✗' :
                             String.fromCharCode(65 + index)}
                          </div>
                          <span className="font-medium text-slate-700">{option}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`
                      p-4 rounded-2xl border-2
                      ${selectedAnswer === questions[currentQuestion].answer 
                        ? 'bg-green-50 border-green-300' 
                        : 'bg-red-50 border-red-300'}
                    `}
                  >
                    <p className={`font-bold text-lg ${
                      selectedAnswer === questions[currentQuestion].answer 
                        ? 'text-green-700' 
                        : 'text-red-700'
                    }`}>
                      {selectedAnswer === questions[currentQuestion].answer ? '✓ Correct!' : '✗ Incorrect'}
                    </p>
                    {!questions[currentQuestion].options && (
                      <p className="text-slate-600 mt-2">
                        Correct answer: <span className="font-bold">{questions[currentQuestion].answer}</span>
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {showResult && (
                <div className="flex justify-center">
                  <Button
                    onClick={handleNext}
                    className="bg-green-500 hover:bg-green-600 px-8 py-3"
                  >
                    {currentQuestion < questions.length - 1 ? 'Next Question →' : 'Finish Challenge'}
                  </Button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}