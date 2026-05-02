'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useProgressStore } from '@/store/progressStore';
import { Card, CardContent, Button } from '@/components/ui';

const ALL_ACHIEVEMENTS: Array<{
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: number;
  type: 'streak' | 'xp' | 'lessons' | 'perfect' | 'steps';
}> = [
  { id: 'first_step', name: 'First Steps', description: 'Complete your first step', icon: '👣', requirement: 1, type: 'steps' },
  { id: 'streak_3', name: 'On Fire', description: '3 day streak', icon: '🔥', requirement: 3, type: 'streak' },
  { id: 'streak_7', name: 'Week Warrior', description: '7 day streak', icon: '💪', requirement: 7, type: 'streak' },
  { id: 'streak_30', name: 'Monthly Master', description: '30 day streak', icon: '🏆', requirement: 30, type: 'streak' },
  { id: 'xp_100', name: 'Getting Started', description: 'Earn 100 XP', icon: '⭐', requirement: 100, type: 'xp' },
  { id: 'xp_500', name: 'XP Hunter', description: 'Earn 500 XP', icon: '🌟', requirement: 500, type: 'xp' },
  { id: 'xp_1000', name: 'XP Champion', description: 'Earn 1000 XP', icon: '💫', requirement: 1000, type: 'xp' },
  { id: 'xp_5000', name: 'XP Legend', description: 'Earn 5000 XP', icon: '👑', requirement: 5000, type: 'xp' },
  { id: 'lessons_5', name: 'Quick Learner', description: 'Master 5 skills', icon: '📚', requirement: 5, type: 'lessons' },
  { id: 'lessons_10', name: 'Dedicated Student', description: 'Master 10 skills', icon: '🎓', requirement: 10, type: 'lessons' },
  { id: 'lessons_20', name: 'Grammar Expert', description: 'Master 20 skills', icon: '🧠', requirement: 20, type: 'lessons' },
  { id: 'perfect_1', name: 'Perfectionist', description: 'Get perfect score on a level', icon: '✨', requirement: 1, type: 'perfect' },
  { id: 'all_steps', name: 'Path Walker', description: 'Complete all 6 steps', icon: '🛤️', requirement: 6, type: 'steps' },
];

export default function AchievementsPage() {
  const router = useRouter();
  const { achievements, streak, totalXP, getTotalSkillsMastered, getTotalStepsCompleted } = useProgressStore();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const skillsMastered = mounted ? getTotalSkillsMastered() : 0;
  const stepsCompleted = mounted ? getTotalStepsCompleted() : 0;

  const getProgress = (achievement: typeof ALL_ACHIEVEMENTS[0]) => {
    switch (achievement.type) {
      case 'streak':
        return { current: mounted ? streak : 0, target: achievement.requirement };
      case 'xp':
        return { current: mounted ? totalXP : 0, target: achievement.requirement };
      case 'lessons':
        return { current: skillsMastered, target: achievement.requirement };
      case 'steps':
        return { current: stepsCompleted, target: achievement.requirement };
      case 'perfect':
        return { current: skillsMastered, target: achievement.requirement };
      default:
        return { current: 0, target: achievement.requirement };
    }
  };

  const unlockedCount = achievements.length;
  const totalCount = ALL_ACHIEVEMENTS.length;

  const categories = [
    { key: 'streak', name: 'Streak', icon: '🔥' },
    { key: 'xp', name: 'XP Milestones', icon: '⭐' },
    { key: 'lessons', name: 'Skills', icon: '📚' },
    { key: 'steps', name: 'Progress', icon: '🛤️' },
    { key: 'perfect', name: 'Special', icon: '✨' },
  ] as const;

  return (
    <div className="min-h-screen pb-12">
      <div className="gradient-bg py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => router.push('/app')}
            className="text-white/80 hover:text-white flex items-center gap-2 mb-4"
          >
            ← Back
          </button>
          
          <div className="text-center">
            <motion.div 
              className="text-6xl mb-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🏆
            </motion.div>
            <h1 className="text-3xl font-bold text-white mb-2">Achievements</h1>
            <p className="text-white/70">
              {mounted ? unlockedCount : 0} of {totalCount} unlocked
            </p>
            
            <div className="mt-4 h-3 bg-white/20 rounded-full overflow-hidden max-w-xs mx-auto">
              <motion.div 
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${mounted ? (unlockedCount / totalCount) * 100 : 0}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {categories.map((category, catIndex) => {
          const categoryAchievements = ALL_ACHIEVEMENTS.filter(a => a.type === category.key as any);
          
          return (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{category.icon}</span>
                <h2 className="text-lg font-bold text-[#1e293b]">{category.name}</h2>
              </div>
              
              <div className="grid gap-3">
                {categoryAchievements.map((achievement) => {
                  const isUnlocked = achievements.some((a) => a.id === achievement.id);
                  const progress = getProgress(achievement);
                  const progressPercent = Math.min((progress.current / progress.target) * 100, 100);
                  
                  return (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: catIndex * 0.1 + 0.05 }}
                    >
                      <Card className={`
                        transition-all duration-300
                        ${isUnlocked 
                          ? 'border-[#22c55e] bg-[#f0fdf4]' 
                          : 'opacity-60'
                        }
                      `}>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4">
                            <motion.div 
                              className={`
                                w-14 h-14 rounded-xl flex items-center justify-center text-3xl
                                ${isUnlocked ? 'bg-[#22c55e]/20' : 'bg-[#e2e8f0]'}
                              `}
                              animate={isUnlocked ? { scale: [1, 1.1, 1] } : {}}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              {isUnlocked ? achievement.icon : '❓'}
                            </motion.div>
                            
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h3 className={`font-bold ${isUnlocked ? 'text-[#166534]' : 'text-[#64748b]'}`}>
                                  {achievement.name}
                                </h3>
                                {isUnlocked && <span className="text-xs bg-[#22c55e] text-white px-2 py-0.5 rounded-full">UNLOCKED</span>}
                              </div>
                              <p className="text-sm text-[#64748b]">{achievement.description}</p>
                              
                              {!isUnlocked && (
                                <div className="mt-2">
                                  <div className="flex justify-between text-xs text-[#94a3b8] mb-1">
                                    <span>{progress.current} / {progress.target}</span>
                                    <span>{Math.round(progressPercent)}%</span>
                                  </div>
                                  <div className="h-2 bg-[#e2e8f0] rounded-full overflow-hidden">
                                    <motion.div 
                                      className="h-full bg-[#f97316] rounded-full"
                                      initial={{ width: 0 }}
                                      animate={{ width: `${progressPercent}%` }}
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                            
                            {isUnlocked && (
                              <div className="text-[#22c55e] text-2xl">✓</div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}