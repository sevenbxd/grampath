'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useProgressStore } from '@/store/progressStore';
import { Card, CardContent, Button } from '@/components/ui';
import { wordSwapperPacks, contextualMirrorPacks, socialGaugePacks, type WordSwapperPack, type ContextualMirrorPack, type SocialGaugePack, type WordSwapperExercise, type ContextualMirrorExercise, type SocialGaugeExercise } from '@/data/phrasalVerbs';

type Mode = 'word-swapper' | 'contextual-mirror' | 'social-gauge';

const modeConfig: Record<Mode, { title: string; icon: string; xp: number }> = {
  'word-swapper': { title: 'Word Swapper', icon: '🔀', xp: 15 },
  'contextual-mirror': { title: 'Contextual Mirror', icon: '🪞', xp: 20 },
  'social-gauge': { title: 'Social Gauge', icon: '📊', xp: 25 },
};

export default function PhrasalVerbsPage() {
  const { addXP, addGems } = useProgressStore();
  const [selectedMode, setSelectedMode] = useState<Mode | null>(null);
  const [selectedPack, setSelectedPack] = useState<WordSwapperPack | ContextualMirrorPack | SocialGaugePack | null>(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [completedPacks, setCompletedPacks] = useState<Record<string, number>>({});
  const [showPackComplete, setShowPackComplete] = useState(false);
  const [wordSwapAnswer, setWordSwapAnswer] = useState<number[]>([]);
  const [contextAnswer, setContextAnswer] = useState<string | null>(null);
  const [scenarioAnswer, setScenarioAnswer] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('phrasal-verbs-progress');
    if (saved) {
      try {
        setCompletedPacks(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('phrasal-verbs-progress', JSON.stringify(completedPacks));
    }
  }, [completedPacks, mounted]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-slate-600">Loading...</div>
      </div>
    );
  }

  const getCurrentExercise = () => {
    if (!selectedPack) return null;
    return selectedPack.exercises[currentExerciseIndex];
  };

  const currentExercise = getCurrentExercise();
  const isLastExercise = selectedPack && currentExerciseIndex >= selectedPack.exercises.length - 1;

  const getPackProgress = (packId: string) => completedPacks[packId] || 0;
  const getPackMaxPoints = (pack: WordSwapperPack | ContextualMirrorPack | SocialGaugePack) => pack.exercises.length * modeConfig[selectedMode!].xp;
  const isPackCompleted = (pack: WordSwapperPack | ContextualMirrorPack | SocialGaugePack) => getPackProgress(pack.id) >= getPackMaxPoints(pack);

  const handleSelectMode = (mode: Mode) => {
    setSelectedMode(mode);
    setSelectedPack(null);
    setCurrentExerciseIndex(0);
    setShowResult(false);
    setScore(0);
  };

  const handleSelectPack = (pack: WordSwapperPack | ContextualMirrorPack | SocialGaugePack) => {
    setSelectedPack(pack);
    setCurrentExerciseIndex(0);
    setShowResult(false);
    setScore(0);
    setWordSwapAnswer([]);
    setContextAnswer(null);
    setScenarioAnswer(null);
  };

  const handleWordSwap = (index: number) => {
    if (showResult) return;
    setWordSwapAnswer(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleContextSelect = (word: string) => {
    if (showResult) return;
    setContextAnswer(word);
  };

  const handleScenarioSelect = (answer: string) => {
    if (showResult) return;
    setScenarioAnswer(answer);
  };

  const handleVerify = () => {
    if (!currentExercise || !selectedMode) return;

    let correct = false;
    let points = 0;
    const xpPerExercise = modeConfig[selectedMode].xp;

    if (selectedMode === 'word-swapper' && wordSwapAnswer.length > 0) {
      const exercise = currentExercise as WordSwapperExercise;
      correct = wordSwapAnswer.every((idx, i) => exercise.correctOrder[i] === idx);
      if (correct) {
        points = xpPerExercise;
        setScore(prev => prev + points);
        addXP(points);
      }
    } else if (selectedMode === 'contextual-mirror' && contextAnswer) {
      const exercise = currentExercise as ContextualMirrorExercise;
      const option = exercise.options.find(o => o.word === contextAnswer);
      correct = option?.correct || false;
      if (correct) {
        points = xpPerExercise;
        setScore(prev => prev + points);
        addXP(points);
      }
    } else if (selectedMode === 'social-gauge' && scenarioAnswer) {
      const exercise = currentExercise as SocialGaugeExercise;
      correct = exercise.scenarios[0].correctAnswer === scenarioAnswer;
      if (correct) {
        points = xpPerExercise;
        setScore(prev => prev + points);
        addXP(points);
      }
    }

    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleNext = () => {
    if (!selectedPack || !currentExercise || !selectedMode) return;

    const xpPerExercise = modeConfig[selectedMode].xp;
    const earnedPoints = isCorrect ? xpPerExercise : 0;
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
      setIsCorrect(false);
      setWordSwapAnswer([]);
      setContextAnswer(null);
      setScenarioAnswer(null);
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

  const handleBack = () => {
    if (selectedPack) {
      setSelectedPack(null);
      setCurrentExerciseIndex(0);
      setShowResult(false);
      setScore(0);
    } else if (selectedMode) {
      setSelectedMode(null);
    }
  };

  // Mode Selection View
  if (!selectedMode) {
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
                <span className="text-4xl">📝</span>
                <div>
                  <h1 className="text-3xl font-bold text-white">Phrasal Verbs</h1>
                  <p className="text-white/80 mt-1">
                    Master English phrasal verbs with interactive exercises
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Choose a Mode</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(Object.keys(modeConfig) as Mode[]).map(mode => (
              <motion.div key={mode} whileHover={{ scale: 1.02 }}>
                <Card
                  hoverable
                  onClick={() => handleSelectMode(mode)}
                  className="cursor-pointer border-2 border-slate-200 bg-white hover:border-blue-400"
                >
                  <CardContent className="p-6 text-center">
                    <span className="text-4xl block mb-3">{modeConfig[mode].icon}</span>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{modeConfig[mode].title}</h3>
                    <p className="text-sm text-slate-500 mb-2">
                      {mode === 'word-swapper' ? 'Arrange words in order' :
                       mode === 'contextual-mirror' ? 'Choose correct verb' :
                       'Formal vs casual'}
                    </p>
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-bold">
                      +{modeConfig[mode].xp} XP
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Pack Selection View
  if (!selectedPack) {
    const currentPacks = selectedMode === 'word-swapper' ? wordSwapperPacks :
                        selectedMode === 'contextual-mirror' ? contextualMirrorPacks :
                        socialGaugePacks;

    return (
      <div className="min-h-screen pb-12">
        <div className="gradient-bg py-6 px-4">
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="ghost" 
              onClick={handleBack}
              className="text-white hover:bg-white/20 mb-4"
            >
              ← Back
            </Button>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-3">
                <span className="text-4xl">{modeConfig[selectedMode].icon}</span>
                <div>
                  <h1 className="text-3xl font-bold text-white">{modeConfig[selectedMode].title}</h1>
                  <p className="text-white/80 mt-1">
                    {selectedMode === 'word-swapper' ? 'Arrange words in the correct order' :
                     selectedMode === 'contextual-mirror' ? 'Choose the correct phrasal verb' :
                     'Choose formal or casual expression'}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Choose a Pack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentPacks.map(pack => {
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

  // Pack Complete View
  if (showPackComplete) {
    return (
      <div className="min-h-screen pb-12">
        <div className="gradient-bg py-6 px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/app">
              <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
                ← Back
              </Button>
            </Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-8xl mb-4"
          >
            {selectedPack.icon}
          </motion.div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            🎉 Pack Complete!
          </h2>
          <p className="text-xl text-slate-600 mb-2">
            You completed <span className="font-bold">{selectedPack.title}</span>
          </p>
          <p className="text-2xl font-bold text-blue-600 mb-6">
            Score: {score}
          </p>
          
          <Button onClick={handleFinishPack} className="bg-green-500 hover:bg-green-600 text-lg px-8 py-3">
            Collect 10 💎
          </Button>
        </div>
      </div>
    );
  }

  // Exercise View
  const xpPerExercise = modeConfig[selectedMode].xp;

  return (
    <div className="min-h-screen pb-12">
      <div className="gradient-bg py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={handleBack}
              className="text-white hover:bg-white/20"
            >
              ← Packs
            </Button>
            <div className="text-right">
              <p className="text-sm text-white/80">Score: <span className="font-bold text-white">{score}</span></p>
              <p className="text-xs text-white/60">+{xpPerExercise} XP each</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{selectedPack.icon}</span>
            <div>
              <h2 className="text-xl font-bold text-slate-800">{selectedPack.title}</h2>
              <p className="text-sm text-slate-500">Exercise {currentExerciseIndex + 1} of {selectedPack.exercises.length}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setCurrentExerciseIndex(prev => Math.max(0, prev - 1))}
              disabled={currentExerciseIndex === 0}
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 disabled:opacity-50 flex items-center justify-center"
            >
              ←
            </button>
            <button 
              onClick={() => setCurrentExerciseIndex(prev => Math.min(selectedPack.exercises.length - 1, prev + 1))}
              disabled={currentExerciseIndex === selectedPack.exercises.length - 1}
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 disabled:opacity-50 flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>

        {/* Word Swapper Exercise */}
        {selectedMode === 'word-swapper' && currentExercise && (
          <Card>
            <CardContent className="p-6">
              <p className="text-slate-600 text-sm mb-2">Arrange the words in the correct order:</p>
              
              <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-700 text-lg font-medium mb-2">
                  {(currentExercise as WordSwapperExercise).sentence}
                </p>
              </div>
              
              <p className="text-slate-600 text-sm mb-3">Tap words in order:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {(currentExercise as WordSwapperExercise).words.map((word, index) => {
                  const isSelected = wordSwapAnswer.includes(index);
                  return (
                    <button
                      key={index}
                      onClick={() => handleWordSwap(index)}
                      disabled={showResult}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        isSelected 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {word}
                    </button>
                  );
                })}
              </div>

              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg mb-4 ${
                    isCorrect ? 'bg-green-50 border border-green-300' : 'bg-red-50 border border-red-300'
                  }`}
                >
                  <p className={`font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                    {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
                  </p>
{!isCorrect && (
                    <div className="mt-2">
                      <p className="text-slate-600 text-sm">Correct: {(currentExercise as WordSwapperExercise).words.map((_, i) => (currentExercise as WordSwapperExercise).words[(currentExercise as WordSwapperExercise).correctOrder[i]]).join(' ')}</p>
                      <p className="text-blue-600 text-sm mt-1">{(currentExercise as WordSwapperExercise).translation}</p>
                    </div>
                  )}
                </motion.div>
              )}

              <div className="flex justify-center">
                {!showResult ? (
                  <Button 
                    onClick={handleVerify}
                    disabled={wordSwapAnswer.length === 0}
                    className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50"
                  >
                    Check
                  </Button>
                ) : (
                  <Button onClick={handleNext} className="bg-green-500 hover:bg-green-600">
                    {isLastExercise ? 'Finish' : 'Next'}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}

{/* Contextual Mirror Exercise */}
        {selectedMode === 'contextual-mirror' && currentExercise && (
          <Card>
            <CardContent className="p-6">
              <p className="text-ble-600 text-sm mb-2">Choose the correct phrasal verb:</p>
              
              <div className="mb-4 p-4 bg-bue-50 rounded-lg border border-blue-200">
                <p className="text-lg text-slate-800 italic">{(currentExercise as ContextualMirrorExercise).sentence}</p>
                <p className="text-slate-600 text-sm mt-1">
                  <span className="font-bold text-ble-600">Hint:</span> {(currentExercise as ContextualMirrorExercise).translation}
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-3 mb-6">
                {(currentExercise as ContextualMirrorExercise).options.map((option, index) => {
                  const isSelected = contextAnswer === option.word;
                  const showCorrect = showResult && option.correct;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => handleContextSelect(option.word)}
                      disabled={showResult}
                      className={`px-4 py-3 rounded-lg font-medium text-left transition-all ${
                        isSelected 
                          ? 'bg-blue-500 text-white' 
                          : showCorrect
                            ? 'bg-green-100 border-2 border-green-500'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {option.word}
                    </button>
                  );
                })}
              </div>

              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg mb-4 ${
                    isCorrect ? 'bg-green-50 border border-green-300' : 'bg-red-50 border border-red-300'
                  }`}
                >
                  <p className={`font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                    {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
                  </p>
                  {!isCorrect && (
                    <p className="text-slate-600 text-sm mt-2">
                      The correct answer is: {(currentExercise as ContextualMirrorExercise).options.find(o => o.correct)?.word}
                    </p>
                  )}
                </motion.div>
              )}

              <div className="flex justify-center">
                {!showResult ? (
                  <Button onClick={handleVerify} disabled={!contextAnswer} className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50">
                    Check
                  </Button>
                ) : (
                  <Button onClick={handleNext} className="bg-green-500 hover:bg-green-600">
                    {isLastExercise ? 'Finish' : 'Next'}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Social Gauge Exercise */}
        {selectedMode === 'social-gauge' && currentExercise && (
          <Card>
            <CardContent className="p-6">
              <p className="text-slate-600 text-sm mb-2">Choose the appropriate expression:</p>
              
              <div className="mb-6">
                <p className="text-lg text-slate-800 mb-3">
                  📧 <span className="font-bold">{(currentExercise as SocialGaugeExercise).scenarios[0].context}</span>: 
                  "{(currentExercise as SocialGaugeExercise).scenarios[0].sentence}"
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleScenarioSelect((currentExercise as SocialGaugeExercise).phrasalVerb)}
                    disabled={showResult}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      showResult && (currentExercise as SocialGaugeExercise).scenarios[0].correctAnswer === (currentExercise as SocialGaugeExercise).phrasalVerb
                        ? 'bg-green-500 text-white'
                        : scenarioAnswer === (currentExercise as SocialGaugeExercise).phrasalVerb && showResult
                          ? 'bg-red-500 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {(currentExercise as SocialGaugeExercise).phrasalVerb}
                  </button>
                  <button
                    onClick={() => handleScenarioSelect((currentExercise as SocialGaugeExercise).formalVerb)}
                    disabled={showResult}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      showResult && (currentExercise as SocialGaugeExercise).scenarios[0].correctAnswer === (currentExercise as SocialGaugeExercise).formalVerb
                        ? 'bg-green-500 text-white'
                        : scenarioAnswer === (currentExercise as SocialGaugeExercise).formalVerb && showResult
                          ? 'bg-red-500 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {(currentExercise as SocialGaugeExercise).formalVerb}
                  </button>
                </div>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg mt-4 ${
                      isCorrect ? 'bg-green-50 border border-green-300' : 'bg-red-50 border border-red-300'
                    }`}
                  >
                    <p className={`font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                      {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
                    </p>
                  </motion.div>
                )}
              </div>

              <div className="flex justify-center">
                {!showResult ? (
                  <Button 
                    onClick={handleVerify}
                    disabled={!scenarioAnswer}
                    className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50"
                  >
                    Check
                  </Button>
                ) : (
                  <Button onClick={handleNext} className="bg-green-500 hover:bg-green-600">
                    {isLastExercise ? 'Finish' : 'Next'}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}