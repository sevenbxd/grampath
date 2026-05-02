'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { walkthroughPath, Skill } from '@/data/curriculum/walkthrough';
import { useProgressStore } from '@/store/progressStore';
import { Card, CardContent, Button, SkillCard } from '@/components/ui';

export default function WalkthroughStepPage() {
  const params = useParams();
  const router = useRouter();
  const stepId = parseInt(params.stepId as string);
  
  const { 
    getSkillMastery, 
    updateWalkthroughProgress,
    currentWalkthroughStep,
    setCurrentWalkthroughStep
  } = useProgressStore();

  const step = walkthroughPath.find(s => s.id === stepId);
  
  if (!step) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-2xl font-bold text-[#1e293b] mb-2">Step Not Found</h1>
        <Button onClick={() => router.push('/app')}>Go Back</Button>
      </div>
    );
  }

  const handleSkillClick = (skill: Skill) => {
    router.push(`/skill/${stepId}/${skill.id}`);
  };

  const handleComplete = () => {
    const totalMastery = step.skills.reduce((sum: number, skill: Skill) => sum + getSkillMastery(skill.id, stepId), 0);
    const avgMastery = Math.round(totalMastery / step.skills.length);
    updateWalkthroughProgress(stepId, avgMastery);
    
    if (stepId < walkthroughPath.length) {
      setCurrentWalkthroughStep(stepId + 1);
    }
    router.push('/app');
  };

  const getOverallProgress = () => {
    const total = step.skills.reduce((sum: number, skill: Skill) => sum + getSkillMastery(skill.id, stepId), 0);
    return Math.round(total / step.skills.length);
  };

  const getSkillIcon = (category: Skill['category']) => {
    switch (category) {
      case 'verbs': return '🔴';
      case 'tenses': return '⏰';
      case 'grammar': return '📖';
      case 'writing': return '✍️';
      default: return '📚';
    }
  };

  const isAllMastered = step.skills.every((s: Skill) => getSkillMastery(s.id, stepId) >= 80);
  const progress = getOverallProgress();

  return (
    <div className="min-h-screen pb-12">
      <div className="gradient-bg py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.button 
            onClick={() => router.push('/app')}
            className="text-white/80 hover:text-white flex items-center gap-2 mb-4 transition-colors"
            whileHover={{ x: -4 }}
          >
            ← Back to path
          </motion.button>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
              <span className="text-3xl font-bold text-white">{step.id}</span>
            </div>
            <div>
              <span className="text-sm font-bold text-white/70 uppercase tracking-wide">
                Step {step.id} of {walkthroughPath.length}
              </span>
              <h1 className="text-3xl font-bold text-white mt-1">{step.name}</h1>
              <p className="text-white/70 mt-1">{step.description}</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium text-white/90">Overall Progress</span>
              <span className="font-bold text-white">{progress}%</span>
            </div>
            <div className="h-3 bg-white/20 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-[#1e293b] mb-6">Skills to Master</h2>
        
        <div className="grid gap-4">
          {step.skills.map((skill: Skill, index: number) => {
            const mastery = getSkillMastery(skill.id, stepId);
            const isCompleted = mastery >= 80;
            const isActive = !isCompleted && mastery > 0;
            
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <SkillCard
                  title={skill.name}
                  description={skill.description}
                  icon={getSkillIcon(skill.category)}
                  mastery={mastery}
                  isCompleted={isCompleted}
                  isActive={isActive}
                  onClick={() => handleSkillClick(skill)}
                />
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {isAllMastered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="mt-8"
            >
              <Card className="overflow-hidden" glow>
                <div className="gradient-bg p-6 text-center text-white">
                  <motion.div 
                    className="text-5xl mb-4"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🎉
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Step Complete!</h3>
                  <p className="text-white/80 mb-4">
                    You have mastered all skills in this step. Ready to move on?
                  </p>
                  <Button 
                    onClick={handleComplete}
                    className="bg-white text-[#22c55e] hover:bg-white/90"
                    size="lg"
                  >
                    Continue to Next Step →
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between mt-8 pt-8 border-t border-[#e2e8f0]">
          {stepId > 1 ? (
            <Button 
              variant="outline"
              onClick={() => router.push(`/walkthrough/${stepId - 1}`)}
            >
              ← Previous Step
            </Button>
          ) : (
            <div />
          )}
          {stepId < walkthroughPath.length && isAllMastered && (
            <Button onClick={handleComplete}>
              Next Step →
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}