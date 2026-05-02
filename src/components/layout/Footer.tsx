'use client';

import React from 'react';

interface FooterProps {
  darkMode?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode = false }) => {
  return (
    <footer className={`${darkMode ? 'bg-slate-900' : 'bg-white'} border-t-2 ${darkMode ? 'border-slate-700' : 'border-[#e5e5e5]'} mt-auto`}>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className={`text-xl font-extrabold ${darkMode ? 'text-emerald-400' : 'text-[#58cc02]'}`}>GramPath</span>
            <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-[#737373]'}`}>© 2026</span>
          </div>
          
          <div className={`flex items-center gap-6 text-sm ${darkMode ? 'text-slate-400' : 'text-[#737373]'}`}>
            <a href="#" className={`hover:${darkMode ? 'text-white' : 'text-[#3c3c3c]'} transition-colors`}>About</a>
            <a href="#" className={`hover:${darkMode ? 'text-white' : 'text-[#3c3c3c]'} transition-colors`}>Privacy</a>
            <a href="#" className={`hover:${darkMode ? 'text-white' : 'text-[#3c3c3c]'} transition-colors`}>Terms</a>
            <a href="#" className={`hover:${darkMode ? 'text-white' : 'text-[#3c3c3c]'} transition-colors`}>Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};