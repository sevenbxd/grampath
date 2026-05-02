'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useProgressStore } from '@/store/progressStore';
import { Card, CardContent, Button } from '@/components/ui';
import { findTheErrorPacks, type FindTheErrorPack } from '@/data/findTheError';

export default function FindTheErrorPage() {
  const { addXP, addGems } = useProgressStore();
  const [selectedPack, setSelectedPack] = useState<FindTheErrorPack | null>(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedErrors, setSelectedErrors] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [completedPacks, setCompletedPacks] = useState<Record<string, number>>({});
  const [showPackComplete, setShowPackComplete] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('find-the-error-progress');
    if (saved) {
      try {
        setCompletedPacks(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('find-the-error-progress', JSON.stringify(completedPacks));
    }
  }, [completedPacks, mounted]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-slate-600">Loading...</div>
      </div>
    );
  }

  const currentExercise = selectedPack?.exercises[currentExerciseIndex];
  const isLastExercise = selectedPack && currentExerciseIndex >= selectedPack.exercises.length - 1;

  const getPackProgress = (packId: string) => completedPacks[packId] || 0;
  const getPackMaxPoints = (pack: FindTheErrorPack) => pack.exercises.reduce((acc, ex) => acc + ex.points, 0);
  const isPackCompleted = (pack: FindTheErrorPack) => getPackProgress(pack.id) >= getPackMaxPoints(pack);

  const handleSelectPack = (pack: FindTheErrorPack) => {
    setSelectedPack(pack);
    setCurrentExerciseIndex(0);
    setShowResult(false);
    setScore(0);
    setSelectedErrors([]);
  };

  const toggleWordSelection = (wordIndex: number) => {
    if (showResult) return;
    setSelectedErrors(prev => 
      prev.includes(wordIndex) 
        ? prev.filter(i => i !== wordIndex)
        : [...prev, wordIndex]
    );
  };

  const handleVerify = () => {
    if (!currentExercise || selectedErrors.length === 0) return;

    const errorIndices = currentExercise.errors.map(e => e.wordIndex);
    
    const correctSelections = selectedErrors.filter(i => errorIndices.includes(i));
    const wrongSelections = selectedErrors.filter(i => !errorIndices.includes(i));
    
    if (correctSelections.length === errorIndices.length && wrongSelections.length === 0) {
      setScore(prev => prev + currentExercise.points);
      addXP(currentExercise.points);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    if (!selectedPack || !currentExercise) return;

    const errorIndices = currentExercise.errors.map(e => e.wordIndex);
    const correctSelections = selectedErrors.filter(i => errorIndices.includes(i));
    const wrongSelections = selectedErrors.filter(i => !errorIndices.includes(i));
    const earnedPoints = correctSelections.length === errorIndices.length && wrongSelections.length === 0 ? currentExercise.points : 0;
    const newScore = score + earnedPoints;

    setCompletedPacks(prev => ({
      ...prev,
      [selectedPack.id]: newScore
    }));

    if (isLastExercise) {
      setShowPackComplete(true);
    } else {
      setCurrentExerciseIndex(prev => prev + 1);
      setShowResult(false);
      setSelectedErrors([]);
    }
  };

  const handleFinishPack = () => {
    addGems(10);
    setShowPackComplete(false);
    setSelectedPack(null);
    setCurrentExerciseIndex(0);
    setShowResult(false);
    setScore(0);
  };

  // Pack Selection View
  if (!selectedPack) {
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
                <span className="text-4xl">🔍</span>
                <div>
                  <h1 className="text-3xl font-bold text-white">Find the Error</h1>
                  <p className="text-white/80 mt-1">
                    Find the grammatical errors in the sentences
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Choose a Pack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {findTheErrorPacks.map(pack => {
              const progress = getPackProgress(pack.id);
              const maxPoints = getPackMaxPoints(pack);
              const completed = isPackCompleted(pack);

              return (
                <motion.div key={pack.id} whileHover={{ scale: 1.02 }}>
                  <Card
                    hoverable
                    onClick={() => handleSelectPack(pack)}
                    className={`cursor-pointer border-2 ${
                      completed 
                        ? 'border-green-400 bg-green-50' 
                        : 'border-slate-200 bg-white hover:border-blue-400'
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{pack.icon}</span>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-slate-800">
                            {pack.title}{completed && ' ✓'}
                          </h3>
                          <p className="text-sm text-slate-500">{pack.description}</p>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-bold ${
                          pack.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                          pack.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {pack.difficulty}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span>✏️ {pack.exercises.length} exercises</span>
                        <span className={completed ? 'text-green-600 font-medium' : ''}>
                          {progress}/{maxPoints} pts
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Pack Complete Modal
  if (showPackComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Pack Complete!</h2>
          <p className="text-xl text-green-600 mb-2">+{score} XP</p>
          <p className="text-yellow-600 mb-6">+10 💎</p>
          <Button onClick={handleFinishPack} className="bg-green-500 hover:bg-green-600 px-8 py-3">
            Continue
          </Button>
        </motion.div>
      </div>
    );
  }

  // Exercise View
  const textWords = currentExercise?.text.split(' ') || [];
  const errorIndices = currentExercise?.errors.map(e => e.wordIndex) || [];

  return (
    <div className="min-h-screen pb-12">
      <div className="gradient-bg py-6 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={() => setSelectedPack(null)} 
              className="text-white hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
            >
              ← Back
            </button>
            <div className="text-center">
              <h2 className="text-white font-bold">{selectedPack.title}</h2>
              <p className="text-white/70 text-sm">Exercise {currentExerciseIndex + 1}/{selectedPack.exercises.length}</p>
            </div>
            <div className="text-green-400 font-bold">{score} pts</div>
          </div>

          {/* Exercise Card */}
          {currentExercise && (
            <motion.div
              key={currentExercise.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card className="bg-white border-slate-200">
                <CardContent className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {textWords.map((word, wordIndex) => {
                      const isSelected = selectedErrors.includes(wordIndex);
                      const isError = errorIndices.includes(wordIndex);
                      
                      let bgColor = 'bg-transparent';
                      if (showResult) {
                        if (isError && isSelected) bgColor = 'bg-green-500';
                        else if (isError) bgColor = 'bg-red-500 text-white';
                        else if (isSelected) bgColor = 'bg-red-300';
                      } else if (isSelected) {
                        bgColor = 'bg-yellow-400 text-slate-900';
                      }

                      return (
                        <button
                          key={wordIndex}
                          onClick={() => toggleWordSelection(wordIndex)}
                          disabled={showResult}
                          className={`px-2 py-1 rounded-lg font-medium transition-all ${bgColor} ${
                            showResult ? 'cursor-default' : 'hover:bg-slate-200'
                          }`}
                        >
                          {word}
                        </button>
                      );
                    })}
                  </div>

                  <p className="text-slate-600 text-sm mb-4">
                    Click on the words with errors (you can select multiple)
                  </p>

                  {showResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-4 p-4 rounded-lg ${
                        selectedErrors.every(i => errorIndices.includes(i)) && 
                        selectedErrors.length === errorIndices.length
                          ? 'bg-green-50 border border-green-300'
                          : 'bg-red-50 border border-red-300'
                      }`}
                    >
                      <p className={`font-bold text-lg ${
                        selectedErrors.every(i => errorIndices.includes(i)) && 
                        selectedErrors.length === errorIndices.length
                          ? 'text-green-700'
                          : 'text-red-700'
                      }`}>
                        {selectedErrors.every(i => errorIndices.includes(i)) && 
                        selectedErrors.length === errorIndices.length
                          ? '✓ Correct!'
                          : '✗ Not quite right'}
                      </p>
                      {currentExercise.errors.map((err, i) => (
                        <p key={i} className="text-slate-700 text-sm mt-2">
                          • <span className="font-bold">{err.text}</span>: {err.explanation}
                        </p>
                      ))}
                    </motion.div>
                  )}

                  <div className="mt-6 flex justify-center gap-3">
                    {!showResult ? (
                      <Button 
                        onClick={handleVerify} 
                        disabled={selectedErrors.length === 0}
                        className="bg-blue-500 hover:bg-blue-600 px-8 disabled:opacity-50"
                      >
                        Check
                      </Button>
                    ) : (
                      <Button onClick={handleNext} className="bg-green-500 hover:bg-green-600 px-8">
                        {isLastExercise ? 'Finish Pack' : 'Next'}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}