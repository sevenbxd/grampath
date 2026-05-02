'use client';

import React from 'react';

interface LevelSelectorProps {
  levels: { id: number; title: string; description: string }[];
  currentLevel: number;
  onLevelChange: (levelId: number) => void;
}

export const LevelSelector: React.FC<LevelSelectorProps> = ({
  levels,
  currentLevel,
  onLevelChange
}) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
      {levels.map((level) => (
        <button
          key={level.id}
          onClick={() => onLevelChange(level.id)}
          className={`
            flex-shrink-0 px-4 py-2 rounded-xl font-bold text-sm
            transition-all duration-200
            ${currentLevel === level.id 
              ? 'bg-[#8e44ad] text-white shadow-[0_4px_0_#6c3483]' 
              : 'bg-white border-2 border-[#e5e5e5] text-[#737373] hover:border-[#8e44ad]'
            }
          `}
        >
          {level.title}
        </button>
      ))}
    </div>
  );
};