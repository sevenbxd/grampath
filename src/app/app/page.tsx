'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useProgressStore } from '@/store/progressStore';
import { useAuthStore } from '@/store/authStore';
import { walkthroughPath } from '@/data/curriculum/walkthrough';
import { Skill } from '@/types';
import { Card, CardContent, Button } from '@/components/ui';

const LEVEL_THRESHOLDS = [0, 100, 300, 600, 1000, 1500, 2100, 2800, 3600, 4500, 5500];

const getLevelTitle = (level: number): string => {
  const titles: Record<number, string> = {
    1: 'Beginner',
    2: 'Learner',
    3: 'Student',
    4: 'Scholar',
    5: 'Grammar Apprentice',
    6: 'Grammar Adept',
    7: 'Grammar Expert',
    8: 'Grammar Master',
    9: 'Grammar Champion',
    10: 'Grammar Legend',
  };
  return titles[Math.min(level, 10)] || 'Grammar Legend';
};

const getStepIcon = (stepId: number, isCompleted: boolean, isCurrent: boolean): string => {
  if (isCompleted) return '✅';
  if (isCurrent) return '🎯';
  return stepId.toString();
};

const STEP_THEMES = [
  { gradient: 'from-emerald-500 to-green-600', icon: '🏠', name: 'Foundation' },
  { gradient: 'from-blue-500 to-cyan-600', icon: '⚡', name: 'Present' },
  { gradient: 'from-purple-500 to-violet-600', icon: '⏪', name: 'Past' },
  { gradient: 'from-amber-500 to-orange-600', icon: '⏩', name: 'Future' },
  { gradient: 'from-pink-500 to-rose-600', icon: '🎓', name: 'Intermediate' },
  { gradient: 'from-red-500 to-crimson-600', icon: '🏆', name: 'Advanced' },
];

export default function Home() {
  const router = useRouter();
  const { 
    initializeProgress, 
    updateStreak, 
    currentWalkthroughStep,
    setCurrentWalkthroughStep,
    totalXP,
    gems,
    streak,
    getLevel,
    getTodayStats,
    getStepCompletionPercentage,
    isStepUnlocked,
  } = useProgressStore();
  const { isGuest, isAuthenticated, hasSeenWelcome, initializeAuth } = useAuthStore();
  
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    initializeAuth();
    initializeProgress();
    updateStreak();
    setMounted(true);
  }, [initializeAuth, initializeProgress, updateStreak]);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent"></div>
      </div>
    );
  }

  const currentLevel = getLevel();
  const todayStats = getTodayStats();
  const userTitle = getLevelTitle(currentLevel);

  const handleStepSelect = (stepId: number) => {
    if (isStepUnlocked(stepId)) {
      setCurrentWalkthroughStep(stepId);
      router.push(`/step/${stepId}`);
    }
  };

  const getStepProgress = (stepId: number) => {
    return getStepCompletionPercentage(stepId);
  };

  const getSkillIcon = (category: Skill['category']): string => {
    switch (category) {
      case 'verbs': return '🔴';
      case 'tenses': return '⏰';
      case 'grammar': return '📖';
      case 'writing': return '✍️';
      default: return '📚';
    }
  };

  return (
    <div className="min-h-screen pb-12">
      <div className="gradient-bg py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚔️</span>
                <h1 className="text-2xl font-extrabold text-white">GramPath</h1>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="px-2 py-0.5 bg-white/20 rounded-full text-white text-sm font-semibold">
                  Level {currentLevel} {userTitle}
                </span>
                {streak > 0 && (
                  <span className="px-2 py-0.5 bg-orange-500 rounded-full text-white text-sm font-semibold flex items-center gap-1">
                    🔥 {streak}
                  </span>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-white/80 text-xs">XP Today</p>
                <p className="text-white font-bold">{todayStats.xpEarned}</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <span className="text-2xl">💎</span>
                <span className="text-white font-bold ml-1">{gems}</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex justify-between text-white/80 text-xs mb-1">
              <span>{totalXP} XP</span>
              <span>{LEVEL_THRESHOLDS[currentLevel] || 5500}+ XP</span>
            </div>
            <div className="h-3 bg-white/20 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-yellow-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min((totalXP % 100), 100)}%` }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-3 mt-6 overflow-x-auto pb-2 -mx-4 px-4"
        >
          <Button 
            onClick={() => router.push('/daily')}
            className="flex-shrink-0 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-lg"
          >
            <span className="text-xl mr-2">⭐</span>
            Daily
          </Button>
          <Button 
            onClick={() => router.push('/academy')}
            className="flex-shrink-0 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg"
          >
            <span className="text-xl mr-2">🎓</span>
            Academy
          </Button>
          <Button 
            onClick={() => router.push('/memory-game')}
            className="flex-shrink-0 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg"
          >
            <span className="text-xl mr-2">🧠</span>
            Memory
          </Button>
          <Button 
            onClick={() => router.push('/grammar-cards')}
            className="flex-shrink-0 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg"
          >
            <span className="text-xl mr-2">📖</span>
            Cards
          </Button>
          <Button
            onClick={() => router.push('/chat-simulator')}
            className="flex-shrink-0 bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600 shadow-lg"
          >
            <span className="text-xl mr-2">💬</span>
            Chat
          </Button>
<Button
            onClick={() => router.push('/find-the-error')}
            className="flex-shrink-0 bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 shadow-lg"
          >
            <span className="text-xl mr-2">🔍</span>
            Find the Error
          </Button>
          <Button
            onClick={() => router.push('/phrasal-verbs')}
            className="flex-shrink-0 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 shadow-lg"
          >
            <span className="text-xl mr-2">📝</span>
            Phrasal Verbs
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-800">⚔️ Quest Path</h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-blue-500 to-purple-500 rounded-full" />
            
            <div className="space-y-4">
              {walkthroughPath.map((step, index) => {
                const isUnlocked = isStepUnlocked(step.id);
                const isCompleted = getStepProgress(step.id) >= 80;
                const isCurrent = step.id === currentWalkthroughStep && !isCompleted;
                const progress = mounted ? getStepProgress(step.id) : 0;
                const theme = STEP_THEMES[step.id - 1] || STEP_THEMES[0];
                
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Card 
                      hoverable={isUnlocked}
                      onClick={() => isUnlocked && handleStepSelect(step.id)}
                      className={`
                        relative overflow-hidden transition-all duration-300 ml-4
                        ${isCurrent ? 'ring-4 ring-orange-400 shadow-xl shadow-orange-200' : ''}
                        ${isCompleted ? 'border-green-400' : ''}
                        ${!isUnlocked ? 'opacity-60' : ''}
                      `}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} opacity-10`} />
                      
                      <CardContent className="relative pl-16 pr-4 py-4">
                        <motion.div 
                          className={`
                            absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-xl
                            flex items-center justify-center text-2xl font-bold shadow-lg
                            ${isCompleted ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white' : 
                              isCurrent ? 'bg-gradient-to-br from-orange-400 to-amber-500 text-white animate-pulse' : 
                              isUnlocked ? `bg-gradient-to-br ${theme.gradient} text-white` : 
                              'bg-slate-300 text-slate-500'}
                          `}
                          animate={isCurrent ? { scale: [1, 1.1, 1] } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {getStepIcon(step.id, isCompleted, isCurrent)}
                        </motion.div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-2xl">{theme.icon}</span>
                              <h3 className="text-lg font-bold text-slate-800">{step.name}</h3>
                            </div>
                            <p className="text-sm text-slate-500 mt-1">{step.description}</p>
                            
                            <div className="flex items-center gap-2 mt-2">
                              {step.skills.slice(0, 3).map((skill: Skill) => (
                                <span 
                                  key={skill.id}
                                  className="px-2 py-0.5 bg-slate-100 rounded-full text-xs text-slate-600 flex items-center gap-1"
                                >
                                  {getSkillIcon(skill.category)} {skill.name}
                                </span>
                              ))}
                              {step.skills.length > 3 && (
                                <span className="px-2 py-0.5 text-xs text-slate-400">
                                  +{step.skills.length - 3}
                                </span>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex flex-col items-end">
                            <div className={`
                              text-2xl font-bold
                              ${isCompleted ? 'text-green-500' : 'text-slate-600'}
                            `}>
                              {progress}%
                            </div>
                            <div className="w-20 h-2 bg-slate-200 rounded-full overflow-hidden">
                              <motion.div 
                                className={`h-full rounded-full ${isCompleted ? 'bg-green-500' : isCurrent ? 'bg-orange-400' : 'bg-slate-400'}`}
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.5, delay: 0.2 * index }}
                              />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}