'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { getDailyChallenges, DailyChallenge } from '@/data/dailyChallenges';
import { useProgressStore } from '@/store/progressStore';
import { Card, CardContent, Button } from '@/components/ui';

interface DailyChallengesProps {
  onComplete?: () => void;
}

export const DailyChallenges: React.FC<DailyChallengesProps> = () => {
  const router = useRouter();
  const [challenges, setChallenges] = useState<DailyChallenge[]>([]);
  const [mounted, setMounted] = useState(false);
  
  const { completedChallenges } = useProgressStore();

  useEffect(() => {
    setChallenges(getDailyChallenges());
    setMounted(true);
  }, []);

  const completedCount = challenges.filter(c => completedChallenges.includes(c.id)).length;
  const allCompleted = challenges.length > 0 && completedCount === challenges.length;

  const getDifficultyColor = (difficulty: DailyChallenge['difficulty']) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-amber-600 bg-amber-100';
      case 'hard': return 'text-red-600 bg-red-100';
    }
  };

  const getTypeIcon = (type: DailyChallenge['type']) => {
    switch (type) {
      case 'multiple-choice': return '📝';
      case 'fill-blank': return '✏️';
      case 'writing': return '📄';
      case 'memory-game': return '🧠';
    }
  };

  const handleStartChallenge = (challenge: DailyChallenge) => {
    if (completedChallenges.includes(challenge.id)) return;
    
    switch (challenge.type) {
      case 'multiple-choice':
      case 'fill-blank':
        router.push(`/daily/${challenge.id}`);
        break;
      case 'memory-game':
        router.push(`/memory-game?challenge=${challenge.id}`);
        break;
      case 'writing':
        router.push(`/skill/writing/writing-${challenge.id}`);
        break;
    }
  };

  const getTimeRemaining = (expiresAt: string): string => {
    const now = new Date();
    const expires = new Date(expiresAt);
    const diff = expires.getTime() - now.getTime();
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  if (!mounted) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-32 bg-slate-100 animate-pulse rounded-2xl" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Daily Challenges</h2>
          <p className="text-slate-500">{completedCount}/{challenges.length} completed</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">⏰</span>
          <span className="font-bold text-slate-600">{getTimeRemaining(challenges[0]?.expiresAt)}</span>
        </div>
      </div>

      {allCompleted && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="p-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl text-white text-center"
        >
          <span className="text-4xl">🎉</span>
          <p className="font-bold text-lg mt-2">All Daily Challenges Complete!</p>
          <p className="text-white/80">Come back tomorrow for new challenges</p>
        </motion.div>
      )}

      <div className="grid gap-4">
        {challenges.map((challenge, index) => {
          const isCompleted = completedChallenges.includes(challenge.id);
          
          return (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                hoverable={!isCompleted}
                onClick={() => handleStartChallenge(challenge)}
                className={`
                  transition-all duration-300
                  ${isCompleted ? 'border-green-200 bg-green-50' : ''}
                `}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className={`
                      w-14 h-14 rounded-2xl flex items-center justify-center text-2xl
                      ${isCompleted ? 'bg-green-500 text-white' : 'bg-slate-100'}
                    `}>
                      {isCompleted ? '✓' : getTypeIcon(challenge.type)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-slate-800">{challenge.title}</h3>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getDifficultyColor(challenge.difficulty)}`}>
                          {challenge.difficulty}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500">{challenge.description}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-sm text-amber-600 font-semibold">⭐ {challenge.xpReward} XP</span>
                        <span className="text-sm text-purple-600 font-semibold">💎 {challenge.gemReward}</span>
                      </div>
                    </div>
                    
                    {isCompleted ? (
                      <div className="flex items-center gap-2 text-green-600 font-bold">
                        <span>Done!</span>
                        <span className="text-2xl">🏆</span>
                      </div>
                    ) : (
                      <Button className="bg-green-500 hover:bg-green-600">
                        Start →
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="p-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-lg">Daily Bonus</p>
            <p className="text-white/80 text-sm">Complete all challenges</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">+50 XP</p>
            <p className="text-white/80 text-sm">+3 💎</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyChallenges;