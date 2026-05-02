'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
  gradient?: boolean;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  onClick,
  hoverable = false,
  gradient = false,
  glow = false
}) => {
  return (
    <motion.div 
      className={`
        bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden
        ${hoverable ? 'cursor-pointer' : ''}
        ${glow ? 'card-glow' : ''}
        ${gradient ? 'gradient-border' : ''}
        ${className}
      `}
      onClick={onClick}
      whileHover={hoverable ? { y: -4, scale: 1.01 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '', gradient = false }) => (
  <div className={`
    p-5 border-b border-[#e2e8f0]
    ${gradient ? 'gradient-bg text-white' : ''}
    ${className}
  `}>
    {children}
  </div>
);

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const CardContent: React.FC<CardContentProps> = ({ children, className = '', padding = 'md' }) => {
  const paddingStyles = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-6'
  };
  
  return (
    <div className={`${paddingStyles[padding]} ${className}`}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => (
  <div className={`p-5 border-t border-[#e2e8f0] bg-[#f8fafc] ${className}`}>
    {children}
  </div>
);

interface SkillCardProps {
  title: string;
  description: string;
  icon: string;
  mastery: number;
  isActive?: boolean;
  isCompleted?: boolean;
  isLocked?: boolean;
  onClick?: () => void;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  title,
  description,
  icon,
  mastery,
  isActive = false,
  isCompleted = false,
  isLocked = false,
  onClick
}) => {
  return (
    <motion.div
      onClick={isLocked ? undefined : onClick}
      className={`
        relative p-5 rounded-2xl border-2 transition-all duration-300
        ${isLocked ? 'opacity-60 cursor-not-allowed border-dashed border-[#cbd5e1] bg-[#f8fafc]' : ''}
        ${isCompleted ? 'border-[#22c55e] bg-[#f0fdf4]' : ''}
        ${isActive ? 'border-[#f97316] bg-[#fff7ed] ring-4 ring-[#f97316]/20' : ''}
        ${!isCompleted && !isActive && !isLocked ? 'border-[#e2e8f0] hover:border-[#22c55e] hover:shadow-lg bg-white cursor-pointer' : ''}
      `}
      whileHover={isLocked ? {} : { scale: 1.02, y: -2 }}
      whileTap={isLocked ? {} : { scale: 0.98 }}
    >
      {isActive && (
        <span className="absolute -top-2 -right-2 px-2 py-1 text-xs font-bold bg-[#f97316] text-white rounded-full">
          ACTIVE
        </span>
      )}
      {isCompleted && (
        <span className="absolute -top-2 -right-2 text-2xl">✅</span>
      )}
      {isLocked && (
        <span className="absolute -top-2 -right-2 text-2xl">🔒</span>
      )}
      
      <div className="flex items-start gap-4">
        <div className={`
          w-14 h-14 rounded-xl flex items-center justify-center text-2xl
          ${isCompleted ? 'bg-[#22c55e]/20' : isActive ? 'bg-[#f97316]/20' : 'bg-[#e2e8f0]'}
        `}>
          {icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-[#1e293b] text-lg truncate">{title}</h3>
          <p className="text-sm text-[#64748b] mt-1 line-clamp-2">{description}</p>
          
          <div className="mt-3">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className={`
                    h-2 flex-1 rounded-full transition-all duration-300
                    ${mastery >= level * 20 
                      ? isCompleted 
                        ? 'bg-[#22c55e]' 
                        : 'bg-[#f97316]' 
                      : 'bg-[#e2e8f0]'
                    }
                  `}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <span className={`
                text-sm font-semibold
                ${isCompleted ? 'text-[#22c55e]' : isActive ? 'text-[#f97316]' : 'text-[#64748b]'}
              `}>
                {mastery}%
              </span>
              <span className="text-xs text-[#94a3b8]">
                {mastery >= 80 ? 'Mastered' : mastery >= 40 ? 'Learning' : 'Start'}
              </span>
            </div>
          </div>
        </div>
        
        {!isLocked && (
          <div className={`
            w-8 h-8 rounded-full flex items-center justify-center
            ${isCompleted ? 'bg-[#22c55e] text-white' : isActive ? 'bg-[#f97316] text-white' : 'bg-[#e2e8f0] text-[#64748b]'}
          `}>
            →
          </div>
        )}
      </div>
    </motion.div>
  );
};