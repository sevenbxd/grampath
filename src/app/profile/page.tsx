'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useProgressStore } from '@/store/progressStore';
import { walkthroughPath } from '@/data/curriculum/walkthrough';
import { Card, CardContent, Button } from '@/components/ui';

export default function ProfilePage() {
  const router = useRouter();
  const { 
    streak, 
    totalXP, 
    gems, 
    getLevel, 
    getLevelProgress,
    getTotalSkillsMastered,
    getTotalStepsCompleted,
    getTodayStats,
    getWeeklyStats,
    achievements,
    resetProgress
  } = useProgressStore();

const [mounted, setMounted] = useState(false);
  const [equippedIcon, setEquippedIcon] = useState('👽');
  const [equippedFrame, setEquippedFrame] = useState('blue');
  
  useEffect(() => {
    setMounted(true);
    const savedIcon = localStorage.getItem('equipped-icon');
    if (savedIcon) setEquippedIcon(savedIcon);
    const savedFrame = localStorage.getItem('equipped-frame');
    if (savedFrame) setEquippedFrame(savedFrame);
    
    const handleAvatarChange = () => {
      const newIcon = localStorage.getItem('equipped-icon');
      const newFrame = localStorage.getItem('equipped-frame');
      if (newIcon) setEquippedIcon(newIcon);
      if (newFrame) setEquippedFrame(newFrame);
    };
    
    window.addEventListener('avatar-changed', handleAvatarChange);
    return () => window.removeEventListener('avatar-changed', handleAvatarChange);
  }, []);

  const level = getLevel();
  const levelProgress = getLevelProgress();
  const skillsMastered = getTotalSkillsMastered();
  const stepsCompleted = getTotalStepsCompleted();
  const todayStats = mounted ? getTodayStats() : { date: '', xpEarned: 0, exercisesCompleted: 0, timeSpentMinutes: 0 };
  const weeklyStats = mounted ? getWeeklyStats() : [];
  const totalWeeklyXP = weeklyStats.reduce((sum, day) => sum + (day?.xpEarned || 0), 0);

  const handleResetProgress = () => {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      resetProgress();
      router.push('/app');
    }
  };

  const frameCssMap: Record<string, string> = {
    'blue': '',
    'green': '',
    'gold': '',
    'purple': '',
    'red': '',
    'pink': '',
    'rainbow': 'rainbow',
    'fire': 'fire',
    'ice': 'ice',
    'christmas': 'christmas',
    'halloween': 'halloween',
  };

  const getFrameStyle = (color: string = 'blue', css: string = '') => {
    const baseStyles = 'border-4 rounded-full relative';
    
    if (css === 'rainbow') return `${baseStyles} frame-rainbow`;
    if (css === 'fire') return `${baseStyles} frame-fire`;
    if (css === 'ice') return `${baseStyles} frame-ice`;
    if (css === 'christmas') return `${baseStyles} frame-christmas`;
    if (css === 'halloween') return `${baseStyles} frame-halloween`;
    if (css === 'gold') return `${baseStyles} frame-gold`;
    if (css === 'diamond') return `${baseStyles} frame-diamond`;
    if (css === 'emerald') return `${baseStyles} frame-emerald`;
    
    if (color === 'blue') return `${baseStyles} border-blue-500 bg-blue-50`;
    if (color === 'green') return `${baseStyles} border-green-500 bg-green-50`;
    if (color === 'gold') return `${baseStyles} border-yellow-500 bg-yellow-50`;
    if (color === 'diamond') return `${baseStyles} border-cyan-300 bg-cyan-50`;
    if (color === 'emerald') return `${baseStyles} border-emerald-500 bg-emerald-50`;
    if (color === 'purple') return `${baseStyles} border-purple-500 bg-purple-50`;
    if (color === 'red') return `${baseStyles} border-red-500 bg-red-50`;
    if (color === 'pink') return `${baseStyles} border-pink-400 bg-pink-50`;
    
    return `${baseStyles} border-slate-300 bg-slate-50`;
  };

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
          
          <div className="flex items-center gap-4">
            <motion.div 
              className={`w-20 h-20 rounded-full flex items-center justify-center text-5xl ${getFrameStyle(equippedFrame, frameCssMap[equippedFrame])}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring' }}
            >
              {equippedIcon}
            </motion.div>
            
            <div>
              <h1 className="text-2xl font-bold text-white">Grammar Learner</h1>
              <p className="text-white/70">Level {level}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <div className="px-4 py-2 bg-white/20 rounded-xl text-center flex-1 min-w-[100px]">
              <div className="text-2xl font-bold text-white">{mounted ? streak : 0}</div>
              <div className="text-xs text-white/70">Day Streak 🔥</div>
            </div>
            <div className="px-4 py-2 bg-white/20 rounded-xl text-center flex-1 min-w-[100px]">
              <div className="text-2xl font-bold text-white">{mounted ? totalXP : 0}</div>
              <div className="text-xs text-white/70">Total XP ⭐</div>
            </div>
            <div className="px-4 py-2 bg-white/20 rounded-xl text-center flex-1 min-w-[100px]">
              <div className="text-2xl font-bold text-white">{mounted ? gems : 0}</div>
              <div className="text-xs text-white/70">Gems 💎</div>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-white/80">Level Progress</span>
              <span className="text-white font-bold">{levelProgress.current}/100 XP</span>
            </div>
            <div className="h-3 bg-white/20 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${mounted ? levelProgress.percentage : 0}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="text-center h-full">
              <CardContent className="p-4">
                <div className="text-4xl mb-2">📚</div>
                <div className="text-2xl font-bold text-[#22c55e]">{mounted ? skillsMastered : 0}</div>
                <div className="text-sm text-[#64748b]">Skills Mastered</div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <Card className="text-center h-full">
              <CardContent className="p-4">
                <div className="text-4xl mb-2">🛤️</div>
                <div className="text-2xl font-bold text-[#3b82f6]">{mounted ? stepsCompleted : 0}/{walkthroughPath.length}</div>
                <div className="text-sm text-[#64748b]">Steps Completed</div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="text-center h-full">
              <CardContent className="p-4">
                <div className="text-4xl mb-2">⭐</div>
                <div className="text-2xl font-bold text-[#f97316]">{mounted ? todayStats.xpEarned : 0}</div>
                <div className="text-sm text-[#64748b]">XP Today</div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <Card className="text-center h-full">
              <CardContent className="p-4">
                <div className="text-4xl mb-2">🎯</div>
                <div className="text-2xl font-bold text-[#8b5cf6]">{mounted ? todayStats.exercisesCompleted : 0}</div>
                <div className="text-sm text-[#64748b]">Exercises Today</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-[#1e293b]">🏆 Achievements</h2>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => router.push('/achievements')}
                >
                  View All →
                </Button>
              </div>
              
              {mounted && achievements.length > 0 ? (
                <div className="flex flex-wrap gap-3">
                  {achievements.slice(0, 6).map((achievement) => (
                    <motion.div
                      key={achievement.id}
                      className="flex items-center gap-2 px-3 py-2 bg-[#f0fdf4] rounded-xl border border-[#bbf7d0]"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-2xl">{achievement.icon}</span>
                      <div>
                        <div className="font-bold text-sm text-[#166534]">{achievement.name}</div>
                        <div className="text-xs text-[#64748b]">{achievement.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-[#64748b]">
                  <div className="text-4xl mb-2">🎖️</div>
                  <p>Complete lessons to unlock achievements!</p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardContent className="p-5">
              <h2 className="text-lg font-bold text-[#1e293b] mb-4">📊 Weekly Progress</h2>
              
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-[#22c55e]">{mounted && weeklyStats ? totalWeeklyXP : 0}</div>
                <div className="text-sm text-[#64748b]">XP earned this week</div>
              </div>
              
              <div className="flex justify-between items-end h-24 gap-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                  const dayData = mounted && weeklyStats[index] ? weeklyStats[index] : { xpEarned: 0 };
                  const validStats = weeklyStats.filter(Boolean);
                  const maxXP = validStats.length > 0 ? Math.max(...validStats.map(s => s?.xpEarned || 0), 100) : 100;
                  const height = maxXP > 0 ? ((dayData?.xpEarned || 0) / maxXP) * 100 : 0;
                  
                  return (
                    <div key={day} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-[#e2e8f0] rounded-t-lg relative" style={{ height: '80px' }}>
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 gradient-bg rounded-t-lg"
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: 0.1 * index }}
                        />
                      </div>
                      <span className="text-xs text-[#64748b]">{day}</span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="border-[#ef4444]/20">
            <CardContent className="p-5">
              <h2 className="text-lg font-bold text-[#ef4444] mb-4">⚠️ Danger Zone</h2>
              <p className="text-sm text-[#64748b] mb-4">
                Reset all your progress, achievements, and statistics. This action cannot be undone.
              </p>
              <Button 
                variant="outline"
                className="border-[#ef4444] text-[#ef4444] hover:bg-[#ef4444] hover:text-white"
                onClick={handleResetProgress}
              >
                Reset All Progress
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}