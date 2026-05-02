'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, Button } from '@/components/ui';
import { getChatsByLevelAndLength, ChatScenario, ChatLevel, ChatLength, ChatAlternative } from '@/data/chats';
import { useProgressStore } from '@/store/progressStore';

type FeedbackType = 'nativa' | 'excelente' | 'boa' | null;

export default function ChatSimulatorPage() {
  const [selectedLevel, setSelectedLevel] = useState<ChatLevel | null>(null);
  const [selectedLength, setSelectedLength] = useState<ChatLength | null>(null);
  const [selectedScenario, setSelectedScenario] = useState<ChatScenario | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showAlternatives, setShowAlternatives] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackType>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const { addXP } = useProgressStore();

  const currentMessage = selectedScenario?.messages[currentIndex];
  const isUserTurn = currentMessage?.sender === 'user';
  const userMessagesCount = selectedScenario?.messages.filter(m => m.sender === 'user').length || 0;

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentIndex, isTyping]);

  useEffect(() => {
    if (!isTyping && currentIndex >= 0 && selectedScenario) {
      const msg = selectedScenario.messages[currentIndex];
      if (msg.sender === 'bot') {
        const timer = setTimeout(() => advanceToNext(), 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [isTyping, currentIndex, selectedScenario]);

  const handleSelectScenario = (scenario: ChatScenario) => {
    setSelectedScenario(scenario);
    setCurrentIndex(0);
    setScore({ correct: 0, total: 0 });
    setIsComplete(false);
    setUserInput('');
    setShowAlternatives(false);
    setFeedback(null);
    setShowFeedback(false);
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 600);
  };

const advanceToNext = () => {
    if (!selectedScenario) return;
    
    const nextIndex = currentIndex + 1;
    if (nextIndex >= selectedScenario.messages.length) {
      setIsComplete(true);
      addXP(selectedScenario.xpReward);
    } else {
      setCurrentIndex(nextIndex);
      setUserInput('');
      if (selectedScenario.messages[nextIndex].sender === 'bot') {
        setIsTyping(true);
        setTimeout(() => setIsTyping(false), 600);
      }
    }
  };

  const handleMediumAnswer = () => {
    if (!currentMessage || !isUserTurn || !userInput.trim()) return;
    
    const userAnswer = userInput.toLowerCase().trim().replace(/[,!?.]/g, '');
    const correctAnswer = currentMessage.answer?.toLowerCase().trim() || currentMessage.text.toLowerCase().trim().replace(/[,!?.]/g, '');
    
    const stopWords = ['i', 'a', 'an', 'the', 'and', 'or', 'but', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must', 'shall', 'can', 'please', 'you', 'your'];
    
    const keyWords = currentMessage.keywords && currentMessage.keywords.length > 0
      ? currentMessage.keywords.map(k => k.toLowerCase())
      : correctAnswer.split(' ').filter(w => !stopWords.includes(w));
    
    const hasKeyWord = keyWords.some(keyWord => userAnswer.includes(keyWord));
    
    const isCorrect = hasKeyWord;
    
    setScore(prev => ({ ...prev, correct: prev.correct + (isCorrect ? 1 : 0), total: prev.total + 1 }));
    advanceToNext();
  };

  const handleEasyAnswer = (alt: ChatAlternative) => {
    if (!isUserTurn) return;
    const isCorrect = alt.type === 'native' || alt.type === 'acceptable';
    setScore(prev => ({ ...prev, correct: prev.correct + (isCorrect ? 1 : 0), total: prev.total + 1 }));
    
    if (alt.type === 'wrong') {
      setFeedback('boa');
      setShowFeedback(true);
      setTimeout(() => {
        setShowFeedback(false);
        setFeedback(null);
        setUserInput('');
        advanceToNext();
      }, 1000);
    } else {
      setUserInput('');
      advanceToNext();
    }
  };

  const handleEasyAnswerDisplay = (alt: ChatAlternative) => {
    if (!isUserTurn) return;
    const isCorrect = alt.type === 'native' || alt.type === 'acceptable';
    setScore(prev => ({ ...prev, correct: prev.correct + (isCorrect ? 1 : 0), total: prev.total + 1 }));
    
    if (alt.type === 'wrong') {
      setFeedback('boa');
      setShowFeedback(true);
      setTimeout(() => {
        setShowFeedback(false);
        setFeedback(null);
        advanceToNext();
      }, 1000);
    } else {
      advanceToNext();
    }
  };

  const handleHardAnswer = () => {
    if (!currentMessage || !isUserTurn || !userInput.trim()) return;
    
    const userAnswer = userInput.toLowerCase().trim().replace(/[,!?.]/g, '');
    const correctAnswer = currentMessage.answer?.toLowerCase().trim().replace(/[,!?.]/g, '') || currentMessage.text.toLowerCase().trim().replace(/[,!?.]/g, '');
    
    const keyWords = currentMessage.keywords && currentMessage.keywords.length > 0
      ? currentMessage.keywords.map(k => k.toLowerCase())
      : correctAnswer.split(' ').filter(w => w.length > 2);
    
    const hasKeyWord = keyWords.some(keyWord => userAnswer.includes(keyWord));
    const isCorrect = hasKeyWord;
    
    setScore(prev => ({ ...prev, correct: prev.correct + (isCorrect ? 1 : 0), total: prev.total + 1 }));
    advanceToNext();
  };

  const checkAnswer = (answer: string, correctAnswer: string, alternatives?: ChatAlternative[]): FeedbackType => {
    const normalized = answer.toLowerCase().trim();
    const correctNorm = correctAnswer.toLowerCase().trim();
    
    if (normalized === correctNorm) return 'nativa';
    
    if (alternatives) {
      for (const alt of alternatives) {
        if (alt.type === 'acceptable' && alt.text.toLowerCase().trim() === normalized) {
          return 'excelente';
        }
      }
    }
    
    return 'boa';
  };

  const handleRestart = () => {
    setSelectedScenario(null);
    setSelectedLevel(null);
    setSelectedLength(null);
    setIsComplete(false);
    setScore({ correct: 0, total: 0 });
  };

  const getFeedbackStyle = (type: FeedbackType) => {
    switch (type) {
      case 'nativa': return 'bg-green-500 text-white';
      case 'excelente': return 'bg-blue-500 text-white';
      case 'boa': return 'bg-amber-500 text-white';
      default: return 'bg-slate-500 text-white';
    }
  };

  const getFeedbackEmoji = (type: FeedbackType) => {
    switch (type) {
      case 'nativa': return '✓';
      case 'excelente': return '★';
      case 'boa': return '•';
      default: return '';
    }
  };

  const getDifficultyLabel = (level: ChatLevel) => {
    switch (level) {
      case 'easy': return { label: 'Fácil', color: 'text-green-600 bg-green-50 border-green-200', emoji: '🎯' };
      case 'medium': return { label: 'Médio', color: 'text-amber-600 bg-amber-50 border-amber-200', emoji: '✏️' };
      case 'hard': return { label: 'Difícil', color: 'text-red-600 bg-red-50 border-red-200', emoji: '✍️' };
      default: return { label: level, color: 'text-slate-600 bg-slate-50 border-slate-200', emoji: '💬' };
    }
  };

  const getLengthLabel = (length: ChatLength) => {
    switch (length) {
      case 'quick': return { label: 'Rápida', icon: '⚡', desc: '~2 messages' };
      case 'short': return { label: 'Curta', icon: '📱', desc: '~4 messages' };
      case 'medium': return { label: 'Média', icon: '💬', desc: '~6 messages' };
      case 'long': return { label: 'Longa', icon: '📝', desc: '~10 messages' };
      case 'book': return { label: 'Livro', icon: '📚', desc: '~15 messages' };
      default: return { label: length, icon: '💬', desc: '' };
    }
  };

  const renderFillInBlank = (text: string, messageKeywords?: string[]) => {
    const words = text.replace(/[.,!?]/g, '').split(' ');
    const keywords = messageKeywords || [];
    const blankIndices: number[] = [];
    
    words.forEach((word, index) => {
      const cleanWord = word.toLowerCase().replace(/[.,!?]/g, '');
      if (keywords.some(k => k.toLowerCase() === cleanWord)) {
        blankIndices.push(index);
      }
    });
    
    return words.map((word, index) => {
      if (blankIndices.includes(index)) {
        return (
          <span key={index}>
            <span className="inline-block w-20 h-6 border-b-2 border-indigo-400 mx-1 align-bottom" />
            {' '}
          </span>
        );
      }
      return <span key={index}>{word} </span>;
    });
  };

  if (isComplete) {
    const percentage = Math.round((score.correct / score.total) * 100);
    const passed = percentage >= 60;
    
    return (
      <div className="min-h-screen pb-12">
        <div className="gradient-bg py-6 px-4">
          <div className="max-w-2xl mx-auto">
            <Link href="/app">
              <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
                ← Voltar
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-white">Conversa Completa!</h1>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto px-4 py-8">
          <Card className={`border-2 ${passed ? 'border-green-200 bg-green-50' : 'border-amber-200 bg-amber-50'}`}>
            <CardContent className="p-6 text-center space-y-4">
              <h2 className="text-2xl font-bold text-slate-800">
                {percentage >= 90 ? '🎉 Excelente!' : 
                 percentage >= 70 ? '👍 Muito Bom!' : 
                 percentage >= 60 ? '👍 Bom!' : 
                 '📚 Continue Praticando!'}
              </h2>
              <p className="text-4xl font-bold text-slate-800">{percentage}%</p>
              <p className="text-slate-600">
                {score.correct} de {score.total} respostas corretas
              </p>
              {passed && (
                <div className="flex justify-center gap-4 mt-4">
                  <span className="px-4 py-2 bg-yellow-100 rounded-full text-yellow-700 font-bold">
                    +{selectedScenario?.xpReward} XP
                  </span>
                  <span className="px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-bold">
                    +{selectedScenario?.gemReward} 💎
                  </span>
                </div>
              )}
              <div className="flex gap-2 justify-center mt-6">
                <Button onClick={handleRestart} className="bg-indigo-500">
                  Novo Chat
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (!selectedScenario) {
    return (
      <div className="min-h-screen pb-12">
        <div className="gradient-bg py-6 px-4">
          <div className="max-w-2xl mx-auto">
            <Link href="/app">
              <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
                ← Voltar
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-4xl">💬</span>
              <div>
                <h1 className="text-3xl font-bold text-white">Chat Simulator</h1>
                <p className="text-white/80 mt-1">
                  Pratique conversas em inglês
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">
          {!selectedLevel ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-xl font-bold text-slate-800 mb-4">Escolha o Nível</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {(['easy', 'medium', 'hard'] as ChatLevel[]).map((level) => {
                  const info = getDifficultyLabel(level);
                  return (
                    <Card 
                      key={level}
                      className={`cursor-pointer hover:scale-105 transition-transform border-2 ${info.color}`}
                      onClick={() => setSelectedLevel(level)}
                    >
                      <CardContent className="p-6 text-center">
                        <span className="text-4xl mb-2 block">{info.emoji}</span>
                        <h3 className="font-bold text-lg">{info.label}</h3>
                        <p className="text-sm text-slate-500 mt-2">
                          {level === 'easy' ? 'Escolha a resposta' : 
                           level === 'medium' ? 'Complete a frase' : 
                           'Escreva livremente'}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </motion.div>
          ) : !selectedLength ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-4 mb-4">
                <Button onClick={() => setSelectedLevel(null)} variant="ghost">
                  ← Voltar
                </Button>
                <span className={`px-3 py-1 rounded-full text-sm font-bold border ${getDifficultyLabel(selectedLevel).color}`}>
                  {getDifficultyLabel(selectedLevel).emoji} {getDifficultyLabel(selectedLevel).label}
                </span>
              </div>
              
              <h2 className="text-xl font-bold text-slate-800 mb-4">Escolha o Comprimento</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {(['quick', 'short', 'medium', 'long', 'book'] as ChatLength[]).map((length) => {
                  const info = getLengthLabel(length);
                  const chats = getChatsByLevelAndLength(selectedLevel, length);
                  return (
                    <Card 
                      key={length}
                      className="cursor-pointer hover:scale-105 transition-transform border-2 border-slate-200 hover:border-indigo-400"
                      onClick={() => setSelectedLength(length)}
                    >
                      <CardContent className="p-6 text-center">
                        <span className="text-4xl mb-2 block">{info.icon}</span>
                        <h3 className="font-bold text-lg">{info.label}</h3>
                        <p className="text-sm text-slate-500">{info.desc}</p>
                        <p className="text-xs text-slate-400 mt-2">{chats.length} conversas</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-4 mb-4">
                <Button onClick={() => setSelectedLength(null)} variant="ghost">
                  ← Voltar
                </Button>
                <span className={`px-3 py-1 rounded-full text-sm font-bold border ${getDifficultyLabel(selectedLevel).color}`}>
                  {getDifficultyLabel(selectedLevel).emoji}
                </span>
                <span className="text-slate-500 text-sm">{getLengthLabel(selectedLength).label}</span>
              </div>
              
              <h2 className="text-xl font-bold text-slate-800 mb-4">Escolha a Conversa</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {getChatsByLevelAndLength(selectedLevel, selectedLength).map((scenario) => (
                  <Card 
                    key={scenario.id}
                    className="cursor-pointer hover:scale-102 transition-transform border-2 border-slate-200 hover:border-indigo-400"
                    onClick={() => handleSelectScenario(scenario)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{scenario.icon}</span>
                        <div>
                          <h3 className="font-bold">{scenario.title}</h3>
                          <p className="text-sm text-slate-500">{scenario.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-12">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 py-4 px-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Button onClick={handleRestart} variant="ghost" className="text-white hover:bg-white/20">
            ← Menu
          </Button>
          <div className="text-white text-sm">
            {score.total} / {userMessagesCount}
          </div>
          <span className="px-3 py-1 rounded-full text-sm font-bold bg-white/20 text-white">
            {getDifficultyLabel(selectedLevel!).emoji}
          </span>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">{selectedScenario.icon}</span>
          <div>
            <h1 className="text-xl font-bold text-slate-800">{selectedScenario.title}</h1>
            <p className="text-sm text-slate-500">{selectedScenario.description}</p>
          </div>
        </div>

        <div className="space-y-4">
          {selectedScenario.messages.slice(0, currentIndex + 1)
            .filter(msg => {
              if (msg.sender === 'user' && msg.text) {
                if (currentMessage?.alternatives?.some(a => a.text === msg.text && a.type === 'native')) {
                  return false;
                }
                if (msg.text === currentMessage?.text) {
                  return false;
                }
              }
              return true;
            })
            .map((msg, idx) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx === currentIndex ? 0 : 0 }}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] ${msg.sender === 'user' ? 'order-2' : 'order-1'}`}>
                <div className={`rounded-2xl p-4 ${
                  msg.sender === 'bot' 
                    ? 'bg-slate-100 text-slate-800 rounded-tl-none' 
                    : 'bg-indigo-500 text-white rounded-tr-none'
                }`}>
<p className="font-medium">
                      {msg.sender === 'user' && !msg.text && currentIndex > selectedScenario.messages.findIndex(m => m.id === msg.id)
                        ? msg.answer 
                        : msg.text}
                    </p>
                    {(msg.text || (msg.sender === 'user' && currentIndex > selectedScenario.messages.findIndex(m => m.id === msg.id))) && (
                      <p className={`text-sm mt-1 ${msg.sender === 'bot' ? 'text-slate-500' : 'text-indigo-200'}`}>
                        {msg.translation}
                      </p>
                    )}
                </div>
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-slate-100 rounded-2xl rounded-tl-none p-4">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </motion.div>
          )}

          {showFeedback && feedback && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex justify-center"
            >
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${getFeedbackStyle(feedback)}`}>
                {getFeedbackEmoji(feedback)} {feedback.charAt(0).toUpperCase() + feedback.slice(1)}
              </span>
            </motion.div>
          )}

          {isUserTurn && !isTyping && !showFeedback && currentMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="order-2"
            >
              <Card className="border-2 border-indigo-200 bg-indigo-50">
                <CardContent className="p-4 space-y-3">
                  {selectedLevel === 'easy' && currentMessage.alternatives && (
                    <div className="grid grid-cols-1 gap-2">
                      {currentMessage.alternatives.map((alt, index) => (
                        <button
                          key={index}
                          onClick={() => handleEasyAnswer(alt)}
                          className="p-3 bg-white border-2 border-slate-200 rounded-lg text-left hover:border-indigo-400 hover:bg-indigo-100 transition-all text-base"
                        >
                          {alt.text}
                        </button>
                      ))}
                    </div>
                  )}

                  {selectedLevel === 'medium' && (
                    <div className="space-y-3">
                      <p className="text-xs text-slate-400 italic text-center">
                        Dica: {currentMessage.translation}
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        {renderFillInBlank(currentMessage.text, currentMessage.keywords)}
                      </p>
                      <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleMediumAnswer()}
                        placeholder="Type the complete sentence..."
                        className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-indigo-400"
                      />
                      <Button onClick={handleMediumAnswer} disabled={!userInput.trim()} className="bg-indigo-500 w-full">
                        OK
                      </Button>
                    </div>
                  )}

                  {selectedLevel === 'hard' && (
                    <div className="space-y-3">
                      {currentMessage.text && (
                        <p className="text-slate-600 leading-relaxed">
                          {renderFillInBlank(currentMessage.text, currentMessage.keywords)}
                        </p>
                      )}
                      <p className="text-xs text-slate-400 italic text-center">
                        Dica: {currentMessage.translation}
                      </p>
                      <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleHardAnswer()}
                        placeholder="Type your response..."
                        className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-indigo-400"
                      />
                      {currentMessage.alternatives && currentMessage.alternatives.length > 0 && (
                        <div className="text-center">
                          <button
                            onClick={() => setShowAlternatives(!showAlternatives)}
                            className="text-xs text-indigo-500 hover:text-indigo-700"
                          >
                            {showAlternatives ? 'hide' : 'show'} suggestions
                          </button>
                          {showAlternatives && (
                            <div className="mt-2 text-sm text-slate-500 bg-white p-2 rounded border">
                              {currentMessage.alternatives.map((alt, i) => (
                                <div key={i} className="py-1">{alt.text}</div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                      <Button onClick={handleHardAnswer} disabled={!userInput.trim()} className="bg-indigo-500 w-full">
                        OK
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
        <div ref={chatEndRef} />
      </div>
    </div>
  );
}