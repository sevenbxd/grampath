'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useProgressStore } from '@/store/progressStore';
import { Card, CardContent, Button } from '@/components/ui';

interface OnboardingStep {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const STEPS: OnboardingStep[] = [
  {
    title: 'Welcome to GramPath!',
    description: 'Your journey to mastering English grammar starts here.',
    icon: '🎓',
    features: [
      'Learn grammar through writing practice',
      'Get instant feedback on your work',
      'Track your progress day by day',
    ],
  },
  {
    title: 'Follow Your Learning Path',
    description: 'A structured path from beginner to advanced.',
    icon: '🛤️',
    features: [
      '6 steps covering all grammar topics',
      'Skills organized by difficulty',
      'Progress through levels (Beginner → Advanced)',
    ],
  },
  {
    title: 'Practice with Exercises',
    description: 'Multiple types of exercises to master each skill.',
    icon: '✍️',
    features: [
      'Multiple choice questions',
      'Fill in the blanks',
      'Writing tasks with grammar feedback',
    ],
  },
  {
    title: 'Earn Rewards',
    description: 'Stay motivated with XP, streaks, and achievements!',
    icon: '🏆',
    features: [
      'Earn XP for each exercise',
      'Build your daily streak',
      'Unlock achievements',
    ],
  },
];

export function Onboarding() {
  const router = useRouter();
  const completeOnboarding = useProgressStore((state) => state.completeOnboarding);
  const hasSeenOnboarding = useProgressStore((state) => state.hasSeenOnboarding);
  const [currentStep, setCurrentStep] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      completeOnboarding();
      router.push('/app');
    }
  };

  const handleSkip = () => {
    completeOnboarding();
    router.push('/app');
  };

  if (!mounted || hasSeenOnboarding) return null;

  const step = STEPS[currentStep];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 gradient-bg">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg"
      >
        <Card className="shadow-2xl">
          <div className="h-2 bg-[#e2e8f0] rounded-t-2xl overflow-hidden">
            <motion.div 
              className="h-full gradient-bg"
              initial={{ width: '0%' }}
              animate={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          <CardContent className="p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <motion.div 
                    className="text-7xl mb-6"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {step.icon}
                  </motion.div>
                  
                  <h2 className="text-2xl font-bold text-[#1e293b] mb-2">
                    {step.title}
                  </h2>
                  <p className="text-[#64748b]">
                    {step.description}
                  </p>
                </div>
                
                <div className="space-y-3 mb-8">
                  {step.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center gap-3 p-3 bg-[#f8fafc] rounded-xl"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#22c55e]/20 flex items-center justify-center">
                        <span className="text-[#22c55e] text-sm">✓</span>
                      </div>
                      <span className="text-[#475569]">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center gap-2 mb-6">
              {STEPS.map((_, index) => (
                <div
                  key={index}
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${index === currentStep ? 'w-8 bg-[#22c55e]' : 'bg-[#e2e8f0]'}
                  `}
                />
              ))}
            </div>
            
            <div className="flex gap-3">
              <Button
                variant="ghost"
                onClick={handleSkip}
                className="flex-1"
              >
                Skip
              </Button>
              <Button
                onClick={handleNext}
                className="flex-1"
              >
                {currentStep === STEPS.length - 1 ? "Let's Go! 🚀" : 'Next →'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}