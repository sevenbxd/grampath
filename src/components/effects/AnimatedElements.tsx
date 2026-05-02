'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  delay?: number;
  hoverScale?: number;
  disabled?: boolean;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  onClick,
  className = '',
  delay = 0,
  hoverScale = 1.02,
  disabled = false,
}) => {
  return (
    <motion.div
      className={className}
      onClick={disabled ? undefined : onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      whileHover={disabled ? {} : { scale: hoverScale, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  disabled?: boolean;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  disabled = false,
}) => {
  const variants = {
    primary: 'bg-[#58cc02] hover:bg-[#46a302] shadow-[0_4px_0_#46a302]',
    secondary: 'bg-[#1cb0f6] hover:bg-[#0d9de0] shadow-[0_4px_0_#0d9de0]',
    success: 'bg-[#58cc02] hover:bg-[#46a302] shadow-[0_4px_0_#46a302]',
    danger: 'bg-[#ff4b4b] hover:bg-[#e63939] shadow-[0_4px_0_#e63939]',
  };

  return (
    <motion.button
      onClick={disabled ? undefined : onClick}
      className={`
        px-6 py-3 rounded-xl font-bold text-lg text-white
        transition-all duration-200
        ${disabled ? 'bg-[#e5e5e5] text-[#aaa] cursor-not-allowed shadow-none' : variants[variant]}
        ${!disabled ? variants[variant] : ''}
        ${className}
      `}
      whileHover={disabled ? {} : { y: -2 }}
      whileTap={disabled ? {} : { y: 2, boxShadow: '0 0 0 #000' }}
    >
      {children}
    </motion.button>
  );
};

interface PulseAnimationProps {
  children: ReactNode;
  className?: string;
  active?: boolean;
}

export const PulseAnimation: React.FC<PulseAnimationProps> = ({
  children,
  className = '',
  active = true,
}) => {
  return (
    <motion.div
      className={className}
      animate={active ? {
        scale: [1, 1.05, 1],
        opacity: [1, 0.8, 1],
      } : {}}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
};

interface BounceAnimationProps {
  children: ReactNode;
  className?: string;
  trigger?: boolean;
}

export const BounceAnimation: React.FC<BounceAnimationProps> = ({
  children,
  className = '',
  trigger = false,
}) => {
  return (
    <motion.div
      className={className}
      animate={trigger ? {
        y: [0, -20, 0],
      } : {}}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
};