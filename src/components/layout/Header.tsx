'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useProgressStore } from '@/store/progressStore';

interface HeaderProps {
  darkMode?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ darkMode = false }) => {
  const { totalXP, gems, streak } = useProgressStore();
  const [showMenu, setShowMenu] = useState(false);
  const [equippedIcon, setEquippedIcon] = useState('👽');
  const [equippedFrame, setEquippedFrame] = useState('blue');
  
  useEffect(() => {
    const savedIcon = localStorage.getItem('equipped-icon');
    if (savedIcon) setEquippedIcon(savedIcon);
    const savedFrame = localStorage.getItem('equipped-frame');
    if (savedFrame) setEquippedFrame(savedFrame);
    
    const handleAvatarChange = () => {
      const newIcon = localStorage.getItem('equipped-icon');
      const newFrame = localStorage.getItem('equipped-frame');
      if (newIcon) setEquippedIcon(newIcon);
      if (newFrame) setEquippedFrame(newFrame);
    };
    
    window.addEventListener('avatar-changed', handleAvatarChange);
    return () => window.removeEventListener('avatar-changed', handleAvatarChange);
  }, []);
  
  const calculateLevel = (xp: number) => Math.floor(xp / 100) + 1;
  const level = calculateLevel(totalXP);
  const xpProgress = totalXP % 100;

  const getFrameStyle = (color: string = 'blue', css: string = '') => {
    const baseStyles = 'rounded-full relative';
    
    if (css === 'rainbow') return `${baseStyles} frame-rainbow`;
    if (css === 'fire') return `${baseStyles} frame-fire`;
    if (css === 'ice') return `${baseStyles} frame-ice`;
    if (css === 'christmas') return `${baseStyles} frame-christmas`;
    if (css === 'halloween') return `${baseStyles} frame-halloween`;
    if (css === 'gold') return `${baseStyles} frame-gold`;
    if (css === 'diamond') return `${baseStyles} frame-diamond`;
    if (css === 'emerald') return `${baseStyles} frame-emerald`;
    
    if (color === 'blue') return `${baseStyles} border-blue-500`;
    if (color === 'green') return `${baseStyles} border-green-500`;
    if (color === 'gold') return `${baseStyles} border-yellow-500`;
    if (color === 'diamond') return `${baseStyles} border-cyan-300`;
    if (color === 'emerald') return `${baseStyles} border-emerald-500`;
    if (color === 'purple') return `${baseStyles} border-purple-500`;
    if (color === 'red') return `${baseStyles} border-red-500`;
    if (color === 'pink') return `${baseStyles} border-pink-400`;
    
    return `${baseStyles} border-slate-300`;
  };

  const frameCssMap: Record<string, string> = {
    'blue': '',
    'green': '',
    'gold': 'gold',
    'diamond': 'diamond',
    'emerald': 'emerald',
    'purple': '',
    'red': '',
    'pink': '',
    'rainbow': 'rainbow',
    'fire': 'fire',
    'ice': 'ice',
    'christmas': 'christmas',
    'halloween': 'halloween',
  };

  return (
    <header className={`${darkMode ? 'bg-slate-900/80' : 'bg-white/80'} backdrop-blur-lg border-b ${darkMode ? 'border-slate-700' : 'border-[#e2e8f0]'} sticky top-0 z-50`}>
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/app" className="flex items-center gap-2 group">
          <motion.div 
            className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <span className="text-white font-bold text-lg">GP</span>
          </motion.div>
          <span className="text-xl font-extrabold gradient-text hidden sm:block">
            GramPath
          </span>
        </Link>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <Link href="/profile">
              <motion.div
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-[#f1f5f9] transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-lg">👤</span>
                <span className="text-sm font-medium text-[#64748b]">Profile</span>
              </motion.div>
            </Link>

            <Link href="/achievements">
              <motion.div
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-[#f1f5f9] transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-lg">🏆</span>
                <span className="text-sm font-medium text-[#64748b]">Achievements</span>
              </motion.div>
            </Link>

            <Link href="/store">
              <motion.div
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-[#f1f5f9] transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-lg">💎</span>
                <span className="text-sm font-medium text-[#64748b]">Store</span>
              </motion.div>
            </Link>

            
          </div>

          <div className="flex items-center gap-2">
            <motion.div 
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#fff7ed] border border-[#fed7aa]"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-lg">🔥</span>
              <div className="flex flex-col">
                <span className="font-bold text-[#ea580c] text-sm">{streak}</span>
                <span className="text-[10px] text-[#f97316]/70">streak</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#f0f9ff] border border-[#bae6fd]"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-lg">💎</span>
              <div className="flex flex-col">
                <span className="font-bold text-[#0284c7] text-sm">{gems}</span>
                <span className="text-[10px] text-[#0ea5e9]/70">gems</span>
              </div>
            </motion.div>
          </div>
          
          <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0]">
            <Link href="/profile">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-2xl border-2 ${getFrameStyle(equippedFrame, frameCssMap[equippedFrame])}`}>
                {equippedIcon}
              </div>
            </Link>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#166534]">Level {level}</span>
                <span className="text-xs text-[#64748b]">{xpProgress}/100 XP</span>
              </div>
              <div className="w-24 h-1.5 bg-[#e2e8f0] rounded-full overflow-hidden mt-1">
                <motion.div 
                  className="h-full gradient-bg rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${xpProgress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>

          <Link href="/settings">
            <motion.div
              className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-[#f1f5f9] transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-lg">⚙️</span>
              <span className="text-sm font-medium text-[#64748b] hidden lg:inline">Settings</span>
            </motion.div>
          </Link>

          <button 
            className="md:hidden p-2 rounded-xl hover:bg-[#f1f5f9]"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg className="w-6 h-6 text-[#64748b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[#e2e8f0] bg-white"
          >
            <div className="p-4 space-y-2">
              <Link href="/profile">
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#f1f5f9]">
                  <span className="text-xl">👤</span>
                  <span className="font-medium text-[#1e293b]">Profile</span>
                </div>
              </Link>
              <Link href="/achievements">
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#f1f5f9]">
                  <span className="text-xl">🏆</span>
                  <span className="font-medium text-[#1e293b]">Achievements</span>
                </div>
              </Link>
              <Link href="/store">
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#f1f5f9]">
                  <span className="text-xl">💎</span>
                  <span className="font-medium text-[#1e293b]">Store</span>
                </div>
              </Link>
              <Link href="/academy">
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#f1f5f9]">
                  <span className="text-xl">🎓</span>
                  <span className="font-medium text-[#1e293b]">Academy</span>
                </div>
              </Link>
              
              <Link href="/chat-simulator">
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#f1f5f9]">
                  <span className="text-xl">💬</span>
                  <span className="font-medium text-[#1e293b]">Chat Simulator</span>
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};