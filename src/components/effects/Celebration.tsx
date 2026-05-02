'use client';

import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export function showCelebration() {
  const duration = 3000;
  const end = Date.now() + duration;

  const colors = ['#58cc02', '#ff9600', '#1cb0f6', '#8e44ad'];

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors,
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

export function showCorrectAnswerEffect() {
  confetti({
    particleCount: 30,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#58cc02'],
  });
}

export function showLevelUpEffect() {
  const duration = 2000;
  const end = Date.now() + duration;

  const colors = ['#ffd700', '#ff9600', '#58cc02', '#1cb0f6'];

  (function frame() {
    confetti({
      particleCount: 8,
      angle: 60,
      spread: 80,
      origin: { x: 0 },
      colors,
    });
    confetti({
      particleCount: 8,
      angle: 120,
      spread: 80,
      origin: { x: 1 },
      colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

export function showSkillMasteredEffect() {
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0.8,
    decay: 0.94,
    startVelocity: 30,
    colors: ['#ffd700', '#ff9600', '#58cc02', '#1cb0f6', '#8e44ad'],
  };

  function shoot() {
    confetti({
      ...defaults,
      particleCount: 50,
      scalar: 1.2,
      shapes: ['star'],
    });
    confetti({
      ...defaults,
      particleCount: 30,
      scalar: 0.75,
      shapes: ['circle'],
    });
  }

  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
}

interface ConfettiEffectProps {
  type?: 'answer' | 'level' | 'mastered';
  trigger?: boolean;
}

export function ConfettiEffect({ type = 'answer', trigger = false }: ConfettiEffectProps) {
  useEffect(() => {
    if (trigger) {
      switch (type) {
        case 'answer':
          showCorrectAnswerEffect();
          break;
        case 'level':
          showLevelUpEffect();
          break;
        case 'mastered':
          showSkillMasteredEffect();
          break;
      }
    }
  }, [trigger, type]);

  return null;
}