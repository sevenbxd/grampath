'use client';

import { useState, useEffect } from 'react';
import { useProgressStore } from '@/store/progressStore';
import { Onboarding as OnboardingComponent } from './Onboarding';

export function OnboardingProvider() {
  const hasSeenOnboarding = useProgressStore((state) => state.hasSeenOnboarding);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || hasSeenOnboarding) return null;
  
  return <OnboardingComponent />;
}