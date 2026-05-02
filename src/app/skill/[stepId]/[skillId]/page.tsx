'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { walkthroughPath, Skill, WalkthroughStep } from '@/data/curriculum/walkthrough';
import { useProgressStore } from '@/store/progressStore';
import { Card, CardContent, Button } from '@/components/ui';
import { ExerciseRenderer } from '@/components/exercises';
import { showLevelUpEffect, showSkillMasteredEffect } from '@/components/effects';

interface Exercise {
  id: string;
  type: 'multiple_choice' | 'fill_blank' | 'writing';
  question: string;
  options?: string[];
  correct?: number;
  answer?: string;
  prompt?: string;
  minWords?: number;
  maxWords?: number;
  explanation: string;
}

interface LevelData {
  level: number;
  levelName: string;
  exercises: Exercise[];
}

const levelColors: Record<string, { bg: string; text: string; border: string }> = {
  1: { bg: 'bg-[#22c55e]/10', text: 'text-[#22c55e]', border: 'border-[#22c55e]' },
  2: { bg: 'bg-[#3b82f6]/10', text: 'text-[#3b82f6]', border: 'border-[#3b82f6]' },
  3: { bg: 'bg-[#f97316]/10', text: 'text-[#f97316]', border: 'border-[#f97316]' },
  4: { bg: 'bg-[#8b5cf6]/10', text: 'text-[#8b5cf6]', border: 'border-[#8b5cf6]' },
  5: { bg: 'bg-[#ec4899]/10', text: 'text-[#ec4899]', border: 'border-[#ec4899]' },
};

export default function SkillPage() {
  const params = useParams();
  const router = useRouter();
  const stepId = parseInt(params.stepId as string);
  const skillId = params.skillId as string;
  
  const { getSkillMastery, updateSkillMastery } = useProgressStore();
  
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isLevelComplete, setIsLevelComplete] = useState(false);

  const step = walkthroughPath.find((s: WalkthroughStep) => s.id === stepId);
  const skill = step?.skills.find((s: Skill) => s.id === skillId);

  const levels: LevelData[] = [
    { level: 1, levelName: 'Beginner', exercises: getBeginnerExercises(skillId) },
    { level: 2, levelName: 'Elementary', exercises: getElementaryExercises(skillId) },
    { level: 3, levelName: 'Intermediate', exercises: getIntermediateExercises(skillId) },
    { level: 4, levelName: 'Upper Intermediate', exercises: getUpperIntermediateExercises(skillId) },
    { level: 5, levelName: 'Advanced', exercises: getAdvancedExercises(skillId) },
  ];

  const currentExercise = levels[currentLevel]?.exercises[currentExerciseIndex];
  const progress = ((currentExerciseIndex + 1) / levels[currentLevel].exercises.length) * 100;
  const levelStyle = levelColors[String(currentLevel + 1)] || levelColors['1'];

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentExerciseIndex < levels[currentLevel].exercises.length - 1) {
        setCurrentExerciseIndex(prev => prev + 1);
      } else {
        setIsLevelComplete(true);
        if (currentLevel < 4) {
          showLevelUpEffect();
        } else {
          showSkillMasteredEffect();
        }
      }
    }, 1500);
  };

  const handleLevelComplete = () => {
    const masteryGained = Math.round((correctAnswers / levels[currentLevel].exercises.length) * 20);
    const currentMastery = getSkillMastery(skillId, stepId);
    const newMastery = Math.min(100, currentMastery + masteryGained);
    
    updateSkillMastery(skillId, stepId, newMastery);
    
    setTimeout(() => {
      if (currentLevel < 4) {
        setCurrentLevel(prev => prev + 1);
        setCurrentExerciseIndex(0);
        setCorrectAnswers(0);
        setIsLevelComplete(false);
      }
    }, 500);
  };

  if (!step || !skill) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-2xl font-bold text-[#1e293b] mb-2">Skill Not Found</h1>
        <Button onClick={() => router.push('/app')}>Go Back</Button>
      </div>
    );
  }

  if (isLevelComplete) {
    return (
      <motion.div
        className="max-w-2xl mx-auto px-4 py-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Card className="overflow-hidden">
          <AnimatePresence mode="wait">
            {currentLevel < 4 ? (
              <motion.div
                key="level"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="gradient-bg p-8 text-center text-white"
              >
                <motion.div
                  className="text-6xl mb-4"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', damping: 10 }}
                >
                  ⭐
                </motion.div>
                <h1 className="text-2xl font-bold mb-2">
                  {levels[currentLevel].levelName} Complete!
                </h1>
                <p className="text-white/80 mb-4">
                  You passed the {levels[currentLevel].levelName} level!
                </p>
                <div className="flex flex-col items-center gap-4">
                  <div className="px-4 py-2 bg-white/20 rounded-full">
                    <span className="font-bold">+{Math.round((correctAnswers / levels[currentLevel].exercises.length) * 20)} Mastery</span>
                  </div>
                  <Button 
                    onClick={handleLevelComplete}
                    className="bg-white text-[#22c55e] hover:bg-white/90"
                    size="lg"
                  >
                    Next Level: {levels[currentLevel + 1].levelName} →
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="mastered"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gradient-to-br from-[#22c55e] to-[#3b82f6] p-8 text-center text-white"
              >
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  🏆
                </motion.div>
                <h1 className="text-2xl font-bold mb-2">
                  Skill Mastered!
                </h1>
                <p className="text-white/80 mb-6">
                  Congratulations! You completed all levels for {skill.name}.
                </p>
                <div className="mb-6">
                  <span className="text-3xl font-bold">🔥</span>
                  <p className="text-lg">Perfect Score: {correctAnswers}/{levels[currentLevel].exercises.length}</p>
                </div>
                <Button 
                  onClick={() => router.push(`/walkthrough/${stepId}`)}
                  className="bg-white text-[#22c55e] hover:bg-white/90"
                  size="lg"
                >
                  Back to Step →
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen pb-12">
      <div className="gradient-bg py-6 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.button 
            onClick={() => router.push(`/walkthrough/${stepId}`)}
            className="text-white/80 hover:text-white flex items-center gap-2 mb-4"
            whileHover={{ x: -4 }}
          >
            ← Back to {step.name}
          </motion.button>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-bold text-white/70">
                Step {stepId}: {step.name}
              </span>
              <h1 className="text-2xl font-bold text-white mt-1">{skill.name}</h1>
            </div>
            <div className={`px-4 py-2 rounded-full bg-white/20 ${levelStyle.bg}`}>
              <span className="font-bold text-white">{levels[currentLevel].levelName}</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((level) => (
                <motion.div
                  key={level}
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                    ${level <= currentLevel 
                      ? 'bg-white text-[#22c55e]' 
                      : level === currentLevel + 1
                        ? 'bg-[#f97316] text-white'
                        : 'bg-white/30 text-white/70'}
                  `}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: level * 0.05 }}
                >
                  {level}
                </motion.div>
              ))}
            </div>
            <span className="text-white/70 text-sm">
              Exercise {currentExerciseIndex + 1} of {levels[currentLevel].exercises.length}
            </span>
          </div>

          <div className="mt-3 h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className={`border-t-4 ${levelStyle.border}`}>
            <CardContent className="p-6">
              {currentExercise && (
                <ExerciseRenderer
                  exercise={currentExercise as never}
                  onComplete={handleAnswer}
                />
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

function getBeginnerExercises(_skillId: string): Exercise[] {
  return [
    {
      id: 'b1-1', type: 'multiple_choice', question: 'I ___ English every day.',
      options: ['write', 'writes', 'writed', 'writing'], correct: 0,
      explanation: 'With "I", we use the base form of the verb (without s).'
    },
    {
      id: 'b1-2', type: 'fill_blank', question: 'She ___ (study) medicine.',
      answer: 'studies', explanation: 'With "she/he/it", we add "s" to the verb.'
    },
    {
      id: 'b1-3', type: 'multiple_choice', question: 'They ___ to school.',
      options: ['go', 'goes', 'going', 'went'], correct: 0,
      explanation: 'With "they", we use the base form of the verb.'
    }
  ];
}

function getElementaryExercises(_skillId: string): Exercise[] {
  return [
    {
      id: 'e1-1', type: 'multiple_choice', question: 'She ___ (study) now.',
      options: ['studies', 'is studying', 'study', 'studied'], correct: 1,
      explanation: 'Present Continuous: am/is/are + verb-ing'
    },
    {
      id: 'e1-2', type: 'fill_blank', question: 'They ___ (play) football.',
      answer: 'are playing', explanation: 'They + are + playing'
    },
    {
      id: 'e1-3', type: 'multiple_choice', question: 'Look! The bird ___',
      options: ['flies', 'is flying', 'flew', 'fly'], correct: 1,
      explanation: 'Use Present Continuous for actions happening now.'
    }
  ];
}

function getIntermediateExercises(_skillId: string): Exercise[] {
  return [
    {
      id: 'i1-1', type: 'multiple_choice', question: 'By the time I arrived, they ___',
      options: ['left', 'had left', 'have left', 'were leaving'], correct: 1,
      explanation: 'Past Perfect: had + past participle'
    },
    {
      id: 'i1-2', type: 'fill_blank', question: 'She ___ (work) here for 5 years.',
      answer: 'has worked', explanation: 'Present Perfect: has/have + past participle'
    },
    {
      id: 'i1-3', type: 'multiple_choice', question: 'If I ___ money, I would travel.',
      options: ['have', 'had', 'will have', 'would have'], correct: 1,
      explanation: 'Second conditional: If + past simple, would + verb'
    }
  ];
}

function getUpperIntermediateExercises(_skillId: string): Exercise[] {
  return [
    {
      id: 'u1-1', type: 'multiple_choice', question: 'The letter ___ tomorrow.',
      options: ['will send', 'will be sent', 'is sending', 'sent'], correct: 1,
      explanation: 'Passive voice: will + be + past participle'
    },
    {
      id: 'u1-2', type: 'fill_blank', question: 'The work ___ by the team.',
      answer: 'is being done', explanation: 'Present continuous passive: is being + past participle'
    },
    {
      id: 'u1-3', type: 'multiple_choice', question: 'I wish I ___ more money.',
      options: ['have', 'had', 'would have', 'could have'], correct: 1,
      explanation: 'I wish + past simple (unreal present)'
    }
  ];
}

function getAdvancedExercises(_skillId: string): Exercise[] {
  return [
    {
      id: 'a1-1', type: 'multiple_choice', question: 'No sooner ___ arrived than it started raining.',
      options: ['he had', 'had he', 'he has', 'he was'], correct: 1,
      explanation: 'Inversion with "no sooner": No sooner had + subject + past participle'
    },
    {
      id: 'a1-2', type: 'fill_blank', question: '___ the manager arrived, the meeting started.',
      answer: 'As soon as', explanation: 'Time conjunction: As soon as + subject + verb'
    },
    {
      id: 'a1-3', type: 'multiple_choice', question: 'Had I known, I ___ earlier.',
      options: ['would come', 'would have come', 'will come', 'come'], correct: 1,
      explanation: 'Third conditional: If + past perfect, would have + past participle'
    }
  ];
}