'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuthStore } from '@/store/authStore';
import { useProgressStore } from '@/store/progressStore';

export default function LandingPage() {
  const router = useRouter();
  const { isAuthenticated, isGuest, initializeAuth, setHasSeenWelcome } = useAuthStore();
  const { initializeProgress } = useProgressStore();
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    initializeAuth();
    initializeProgress();
    setMounted(true);
    
    const savedDarkMode = localStorage.getItem('landing-dark-mode');
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, [initializeAuth, initializeProgress]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('landing-dark-mode', JSON.stringify(newMode));
  };

  const handleGetStarted = () => {
    router.push('/auth/signin');
  };

  const handleLogin = () => {
    router.push('/auth/signin');
  };

  const handleSeeHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent"></div>
      </div>
    );
  }

  const isDark = darkMode;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-900' : 'bg-[#f8fafc]'}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-0 left-0 w-full h-full ${isDark ? 'opacity-30' : 'opacity-100'}`}>
          <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-40 -right-20 w-[500px] h-[500px] bg-gradient-to-l from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-gradient-to-t from-cyan-400/10 to-transparent rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => window.location.href = '/'}
          >
            <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <span className="text-white font-bold text-xl">GP</span>
            </div>
            <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'gradient-text'}`}>GramPath</span>
          </motion.div>
          
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className={`p-3 rounded-xl transition-colors ${isDark ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-white text-slate-700 hover:bg-slate-100'} shadow-sm`}
            >
              {isDark ? '☀️' : '🌙'}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogin}
              className={`px-6 py-2.5 rounded-xl border transition-colors font-medium ${
                isDark 
                  ? 'border-slate-600 text-slate-300 hover:text-white hover:border-slate-500' 
                  : 'border-[#e2e8f0] text-[#64748b] hover:text-[#1e293b] hover:bg-white'
              }`}
            >
              Sign In
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGetStarted}
              className="px-6 py-2.5 rounded-xl gradient-bg text-white font-semibold shadow-lg shadow-emerald-500/25"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
                isDark ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-emerald-50 border border-emerald-100'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-emerald-600 text-sm font-medium">🎯 Learn at your own pace</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className={`text-5xl lg:text-7xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-[#1e293b]'}`}
            >
              Master English
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500">
                Grammar
              </span>
              <span className={`block text-3xl lg:text-4xl mt-2 ${isDark ? 'text-slate-400' : 'text-[#64748b]'}`}>
                Through Writing
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={`text-xl mb-8 max-w-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-[#64748b]'}`}
            >
              Learn to write correctly with interactive exercises, real-time feedback, and a personalized learning path designed just for you.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(34, 197, 94, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetStarted}
                className="px-8 py-4 rounded-2xl gradient-bg text-white font-bold text-lg shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-3"
              >
                Start Learning Free
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSeeHowItWorks}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all ${
                  isDark 
                    ? 'bg-slate-800 border border-slate-700 text-white hover:bg-slate-700' 
                    : 'bg-white border border-[#e2e8f0] text-[#1e293b] hover:bg-slate-50'
                }`}
              >
                See How It Works
              </motion.button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-8"
            >
              <div className="flex -space-x-3">
                {['👨', '👩', '👴', '👵', '🧑'].map((emoji, i) => (
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg border-2 ${isDark ? 'bg-slate-800 border-slate-900' : 'bg-white border-[#f8fafc]'}`}>
                    {emoji}
                  </div>
                ))}
              </div>
              <div>
                <div className={`font-bold ${isDark ? 'text-white' : 'text-[#1e293b]'}`}>10,000+ learners</div>
                <div className={`text-sm ${isDark ? 'text-slate-500' : 'text-[#94a3b8]'}`}>from around the world</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className={`rounded-3xl p-6 shadow-2xl ${
                  isDark ? 'bg-slate-800/90 backdrop-blur-xl border border-slate-700/50' : 'bg-white/90 backdrop-blur-xl border border-[#e2e8f0]'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                      <span className="text-white font-bold">GP</span>
                    </div>
                    <div>
                      <div className={`font-bold ${isDark ? 'text-white' : 'text-[#1e293b]'}`}>Daily Challenge</div>
                      <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-[#64748b]'}`}>5 exercises remaining</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">Day 7</div>
                </div>
                
                <div className={`rounded-2xl p-4 mb-4 ${isDark ? 'bg-slate-900/50' : 'bg-[#f8fafc]'}`}>
                  <div className={`text-sm mb-2 ${isDark ? 'text-slate-400' : 'text-[#64748b]'}`}>Fill in the blank:</div>
                  <div className={`text-lg ${isDark ? 'text-white' : 'text-[#1e293b]'}`}>
                    "She ___ to the store yesterday."
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {['go', 'went', 'gone', 'going'].map((word) => (
                    <motion.button
                      key={word}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`py-3 rounded-xl font-medium transition-all ${
                        word === 'went' 
                          ? 'gradient-bg text-white' 
                          : isDark 
                            ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' 
                            : 'bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0]'
                      }`}
                    >
                      {word}
                    </motion.button>
                  ))}
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-medium">+10 XP</span>
                    <span className="text-amber-500">+5 💎</span>
                  </div>
                  <div className={`h-2 w-32 rounded-full overflow-hidden ${isDark ? 'bg-slate-700' : 'bg-[#e2e8f0]'}`}>
                    <motion.div 
                      className="h-full gradient-bg rounded-full"
                      initial={{ width: '30%' }}
                      animate={{ width: '75%' }}
                      transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className={`absolute -top-6 -right-8 rounded-2xl p-4 shadow-xl ${
                  isDark ? 'bg-slate-800/90 backdrop-blur-lg border border-slate-700/50' : 'bg-white border border-[#e2e8f0]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl">🔥</div>
                  <div>
                    <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-[#1e293b]'}`}>7</div>
                    <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-[#64748b]'}`}>Day Streak</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className={`absolute -bottom-4 -left-6 rounded-2xl p-4 shadow-xl ${
                  isDark ? 'bg-slate-800/90 backdrop-blur-lg border border-slate-700/50' : 'bg-white border border-[#e2e8f0]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl">📚</div>
                  <div>
                    <div className={`text-lg font-bold ${isDark ? 'text-white' : 'text-[#1e293b]'}`}>2,450</div>
                    <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-[#64748b]'}`}>Exercises Done</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* How It Works */}
        <motion.div
          id="how-it-works"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 lg:mt-32"
        >
          <div className="text-center mb-12">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#1e293b]'}`}>How It Works</h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-[#64748b]'}`}>
              Start improving your English grammar in just 3 simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-center"
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
                1️⃣
              </div>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-[#1e293b]'}`}>Create Your Account</h3>
              <p className={isDark ? 'text-slate-400' : 'text-[#64748b]'}>Sign up for free in seconds. Continue as a guest or link your Google account to save progress.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
                2️⃣
              </div>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-[#1e293b]'}`}>Start Learning</h3>
              <p className={isDark ? 'text-slate-400' : 'text-[#64748b]'}>Choose your level and begin with grammar exercises, chat simulations, or daily challenges.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-center"
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 ${isDark ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
                3️⃣
              </div>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-[#1e293b]'}`}>Track Progress</h3>
              <p className={isDark ? 'text-slate-400' : 'text-[#64748b]'}>Earn XP, maintain your streak, unlock achievements, and watch your English improve every day.</p>
            </motion.div>
          </div>

          <div className={`mt-12 p-6 rounded-2xl ${isDark ? 'bg-slate-800/50' : 'bg-emerald-50'}`}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="text-3xl">✨</div>
                <div>
                  <div className={`font-bold ${isDark ? 'text-white' : 'text-[#1e293b]'}`}>What makes GramPath different?</div>
                  <p className={isDark ? 'text-slate-400 text-sm' : 'text-[#64748b] text-sm'}>We focus on writing grammar, not just multiple choice. Practice real sentences and get instant feedback.</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetStarted}
                className="px-6 py-3 rounded-xl gradient-bg text-white font-semibold whitespace-nowrap"
              >
                Try It Now
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Features Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 lg:mt-32"
        >
          <div className="text-center mb-12">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#1e293b]'}`}>Everything You Need</h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-[#64748b]'}`}>
              A complete learning system designed to help you master English grammar
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📚', title: 'Grammar Academy', desc: '3000+ exercises', color: 'from-emerald-500 to-green-600' },
              { icon: '💬', title: 'Chat Simulator', desc: 'Real conversations', color: 'from-blue-500 to-cyan-600' },
              { icon: '🎯', title: 'Daily Goals', desc: 'Stay consistent', color: 'from-amber-500 to-orange-600' },
              { icon: '🏆', title: 'Achievements', desc: 'Earn rewards', color: 'from-purple-500 to-violet-600' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`rounded-2xl p-6 border transition-all cursor-pointer group ${
                  isDark 
                    ? 'bg-slate-800/40 border-slate-700/30 hover:border-slate-600/50' 
                    : 'bg-white/50 border-[#e2e8f0]/50 hover:border-[#cbd5e1]'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-3xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-[#1e293b]'}`}>{feature.title}</h3>
                <p className={isDark ? 'text-slate-400' : 'text-[#64748b]'}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* App Screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-24 lg:mt-32"
        >
          <div className="text-center mb-12">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#1e293b]'}`}>See The App In Action</h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-[#64748b]'}`}>
              Explore our features designed to make learning English grammar engaging and effective
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className={`rounded-2xl overflow-hidden border ${isDark ? 'border-slate-700' : 'border-[#e2e8f0]'}`}
            >
              <div className={`p-6 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                <div className="text-4xl mb-4">📚</div>
                <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-[#1e293b]'}`}>Grammar Academy</h3>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-[#64748b]'}`}>3000+ exercises organized by topic and difficulty</p>
                <div className={`mt-4 h-32 rounded-xl flex items-center justify-center ${isDark ? 'bg-slate-700' : 'bg-[#f8fafc]'}`}>
                  <div className="grid grid-cols-4 gap-2 p-2">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${
                        i < 5 ? 'gradient-bg text-white' : (isDark ? 'bg-slate-600' : 'bg-[#e2e8f0]')
                      }`}>
                        {i < 5 ? '✓' : '🔒'}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className={`rounded-2xl overflow-hidden border ${isDark ? 'border-slate-700' : 'border-[#e2e8f0]'}`}
            >
              <div className={`p-6 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                <div className="text-4xl mb-4">💬</div>
                <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-[#1e293b]'}`}>Chat Simulator</h3>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-[#64748b]'}`}>Practice real conversations in different scenarios</p>
                <div className={`mt-4 h-32 rounded-xl p-3 ${isDark ? 'bg-slate-700' : 'bg-[#f8fafc]'}`}>
                  <div className="flex flex-col gap-2">
                    <div className={`p-2 rounded-lg rounded-tl-none text-sm ${isDark ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'}`}>
                      Hi! How can I help you today?
                    </div>
                    <div className={`p-2 rounded-lg rounded-tr-none text-sm ml-auto ${isDark ? 'bg-emerald-600 text-white' : 'bg-emerald-100 text-emerald-800'}`}>
                      I'd like to order a coffee, please.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className={`rounded-2xl overflow-hidden border ${isDark ? 'border-slate-700' : 'border-[#e2e8f0]'}`}
            >
              <div className={`p-6 ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                <div className="text-4xl mb-4">🎯</div>
                <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-[#1e293b]'}`}>Daily Goals</h3>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-[#64748b]'}`}>Track your progress and maintain your streak</p>
                <div className={`mt-4 h-32 rounded-xl p-4 ${isDark ? 'bg-slate-700' : 'bg-[#f8fafc]'}`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-[#1e293b]'}`}>Daily Progress</span>
                    <span className="text-emerald-600 font-bold">75%</span>
                  </div>
                  <div className={`h-3 rounded-full overflow-hidden ${isDark ? 'bg-slate-600' : 'bg-[#e2e8f0]'}`}>
                    <div className="h-full w-3/4 gradient-bg rounded-full"></div>
                  </div>
                  <div className="flex justify-between mt-3">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                      <div key={day} className="flex flex-col items-center gap-1">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                          i < 6 ? 'gradient-bg text-white' : (isDark ? 'bg-slate-600 text-slate-400' : 'bg-[#e2e8f0] text-[#94a3b8]')
                        }`}>
                          {i < 6 ? '✓' : '-'}
                        </div>
                        <span className={`text-[10px] ${isDark ? 'text-slate-500' : 'text-[#94a3b8]'}`}>{day.slice(0,1)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-24 lg:mt-32 text-center"
        >
          <div className="relative">
            <div className="absolute inset-0 gradient-bg rounded-3xl blur-2xl opacity-20"></div>
            <div className={`relative rounded-3xl p-12 lg:p-16 border ${
              isDark 
                ? 'bg-slate-800/80 backdrop-blur-xl border-slate-700/50' 
                : 'bg-white/80 backdrop-blur-xl border-[#e2e8f0]'
            }`}>
              <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#1e293b]'}`}>Start Your Journey Today</h2>
              <p className={`text-lg mb-8 max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-[#64748b]'}`}>
                Join thousands of learners and transform your English grammar skills
              </p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(34, 197, 94, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetStarted}
                className="px-12 py-5 rounded-2xl gradient-bg text-white font-bold text-xl shadow-xl shadow-emerald-500/20"
              >
                Get Started Free
              </motion.button>
              <p className={`text-sm mt-4 ${isDark ? 'text-slate-500' : 'text-[#94a3b8]'}`}>No credit card required • Start in 30 seconds</p>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className={`relative z-10 border-t py-10 mt-20 ${
        isDark ? 'border-slate-800' : 'border-[#e2e8f0]'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <span className="text-white font-bold text-sm">GP</span>
            </div>
            <span className={isDark ? 'text-slate-500' : 'text-[#94a3b8]'}>© 2024 GramPath. All rights reserved.</span>
          </div>
          <div className={`flex items-center gap-8 ${isDark ? 'text-slate-400' : 'text-[#64748b]'}`}>
            <button className={`hover:text-emerald-500 transition-colors ${isDark ? 'hover:text-white' : 'hover:text-[#1e293b]'}`}>Privacy</button>
            <button className={`hover:text-emerald-500 transition-colors ${isDark ? 'hover:text-white' : 'hover:text-[#1e293b]'}`}>Terms</button>
            <button className={`hover:text-emerald-500 transition-colors ${isDark ? 'hover:text-white' : 'hover:text-[#1e293b]'}`}>Contact</button>
            <button className={`hover:text-emerald-500 transition-colors ${isDark ? 'hover:text-white' : 'hover:text-[#1e293b]'}`}>Help</button>
          </div>
        </div>
      </footer>
    </div>
  );
}