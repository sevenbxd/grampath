'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { walkthroughPath, WalkthroughStep, Skill } from '@/data/curriculum/walkthrough';
import { useProgressStore } from '@/store/progressStore';
import { Card, CardContent } from '@/components/ui';

interface WalkthroughViewerProps {
  currentStepId: number;
  onStepSelect?: (stepId: number) => void;
}

export const WalkthroughViewer: React.FC<WalkthroughViewerProps> = ({
  currentStepId,
  onStepSelect
}) => {
  const { getWalkthroughProgress } = useProgressStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isStepUnlocked = (stepId: number): boolean => {
    if (stepId === 1) return true;
    const previousStepId = stepId - 1;
    const previousProgress = getWalkthroughProgress(previousStepId);
    return previousProgress >= 80;
  };

  const isStepCompleted = (stepId: number): boolean => {
    const progress = getWalkthroughProgress(stepId);
    return progress >= 80;
  };

  return (
    <div className="space-y-3">
      {walkthroughPath.map((step) => {
        const isUnlocked = isStepUnlocked(step.id);
        const isCompleted = isStepCompleted(step.id);
        const isCurrent = step.id === currentStepId;
        const progress = mounted ? getWalkthroughProgress(step.id) : 0;

        return (
          <Link
            key={step.id}
            href={isUnlocked ? `/walkthrough/${step.id}` : '#'}
            onClick={(e) => {
              if (!isUnlocked) {
                e.preventDefault();
                onStepSelect?.(step.id);
              }
            }}
            className={`
              block transition-all duration-200
              ${isUnlocked ? 'cursor-pointer hover:translate-x-2' : 'cursor-not-allowed opacity-60'}
            `}
          >
            <Card 
              className={`
                ${isCurrent ? 'ring-4 ring-[#58cc02] ring-opacity-50' : ''}
                ${isCompleted ? 'border-[#58cc02] bg-[#f0fff0]' : ''}
                ${!isUnlocked ? 'border-dashed' : ''}
              `}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold
                    ${isCompleted ? 'bg-[#58cc02] text-white' : 
                      isCurrent ? 'bg-[#ff9600] text-white animate-pulse' :
                      isUnlocked ? 'bg-[#e5e5e5] text-[#3c3c3c]' : 'bg-[#f0f0f0] text-[#ccc]'}
                  `} suppressHydrationWarning>
                    {isCompleted ? '✓' : step.id}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#3c3c3c]">{step.name}</h3>
                    <p className="text-sm text-[#737373]">{step.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mt-2">
                      {step.skills.slice(0, 4).map((skill: Skill) => (
                        <span 
                          key={skill.id}
                          className="px-2 py-0.5 bg-[#e5e5e5] rounded text-xs font-medium text-[#737373]"
                        >
                          {skill.name}
                        </span>
                      ))}
                      {step.skills.length > 4 && (
                        <span className="px-2 py-0.5 text-xs text-[#737373]">
                          +{step.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-right" suppressHydrationWarning>
                    <div className="text-2xl font-bold text-[#58cc02]">{progress}%</div>
                    <div className="text-xs text-[#737373]">complete</div>
                  </div>
                </div>
                
                <div className="mt-3 h-2 bg-[#e5e5e5] rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-500 ${
                      isCompleted ? 'bg-[#58cc02]' : 'bg-[#ff9600]'
                    }`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

interface SkillListProps {
  step: WalkthroughStep;
  stepId: number;
}

export const SkillList: React.FC<SkillListProps> = ({ step, stepId }) => {
  const { getSkillMastery } = useProgressStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="grid gap-3">
      {step.skills.map((skill: Skill) => {
        const mastery = mounted ? getSkillMastery(skill.id, stepId) : 0;
        
        return (
          <div
            key={skill.id}
            className="bg-white rounded-xl border-2 border-[#e5e5e5] p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#e8f5ff] flex items-center justify-center text-lg">
                  {getSkillIcon(skill.category)}
                </div>
                <div>
                  <h4 className="font-bold text-[#3c3c3c]">{skill.name}</h4>
                  <p className="text-xs text-[#737373]">{skill.description}</p>
                </div>
              </div>
              
              <div className="text-right" suppressHydrationWarning>
                <span className={`text-lg font-bold ${
                  mastery >= 80 ? 'text-[#58cc02]' : 
                  mastery > 0 ? 'text-[#ff9600]' : 'text-[#ccc]'
                }`}>
                  {mastery}%
                </span>
              </div>
            </div>
            
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(level => (
                <div 
                  key={level}
                  className={`flex-1 h-2 rounded-full ${
                    mastery >= level * 20 ? 'bg-[#58cc02]' : 'bg-[#e5e5e5]'
                  }`}
                />
              ))}
            </div>
            
            <div className="flex justify-between mt-2 text-xs text-[#737373]">
              <span>{getLevelLabel(mastery)}</span>
              <span>5 levels</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

function getSkillIcon(category: Skill['category']): string {
  switch (category) {
    case 'verbs': return '🔴';
    case 'tenses': return '⏰';
    case 'grammar': return '📖';
    case 'writing': return '✍️';
    default: return '📚';
  }
}

function getLevelLabel(mastery: number): string {
  if (mastery >= 80) return 'Mastered';
  if (mastery >= 60) return 'Advanced';
  if (mastery >= 40) return 'Intermediate';
  if (mastery >= 20) return 'Elementary';
  if (mastery > 0) return 'Beginner';
  return 'Not Started';
}