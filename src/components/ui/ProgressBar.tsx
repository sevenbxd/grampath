import React from 'react';

interface ProgressBarProps {
  value: number;
  max: number;
  color?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max,
  color = '#58cc02',
  showLabel = false,
  size = 'md'
}) => {
  const percentage = Math.min((value / max) * 100, 100);
  
  const heights = {
    sm: 'h-2',
    md: 'h-4',
    lg: 'h-6'
  };

  return (
    <div className="w-full">
      <div className={`w-full bg-[#e5e5e5] rounded-full overflow-hidden ${heights[size]}`}>
        <div 
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{ 
            width: `${percentage}%`,
            backgroundColor: color
          }}
        />
      </div>
      {showLabel && (
        <p className="text-sm text-[#737373] mt-1 text-right">
          {value}/{max} ({Math.round(percentage)}%)
        </p>
      )}
    </div>
  );
};

interface XPProgressProps {
  currentXP: number;
  nextLevelXP: number;
  level: number;
}

export const XPProgress: React.FC<XPProgressProps> = ({
  currentXP,
  nextLevelXP,
  level
}) => {
  const percentage = (currentXP / nextLevelXP) * 100;
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm font-semibold">
        <span className="text-[#3c3c3c]">Level {level}</span>
        <span className="text-[#737373]">{currentXP} / {nextLevelXP} XP</span>
      </div>
      <div className="w-32">
        <div className="w-full bg-[#e5e5e5] rounded-full overflow-hidden h-4">
          <div 
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{ 
              width: `${percentage}%`,
              backgroundColor: '#8e44ad'
            }}
          />
        </div>
      </div>
    </div>
  );
};