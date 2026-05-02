'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { grammarCards, GrammarCard } from '@/data/grammarCards';
import { Card, CardContent } from '@/components/ui';

interface GrammarCardViewProps {
  card: GrammarCard;
  onClose: () => void;
}

const GrammarCardView: React.FC<GrammarCardViewProps> = ({ card, onClose }) => {
  const [showTip, setShowTip] = useState(false);

  const categoryColors: Record<GrammarCard['category'], string> = {
    verbs: 'bg-red-100 text-red-700 border-red-200',
    tenses: 'bg-blue-100 text-blue-700 border-blue-200',
    grammar: 'bg-purple-100 text-purple-700 border-purple-200',
    writing: 'bg-green-100 text-green-700 border-green-200',
    articles: 'bg-amber-100 text-amber-700 border-amber-200',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        <div className="gradient-bg p-6">
          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${categoryColors[card.category]}`}>
              {card.category.toUpperCase()}
            </span>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              ✕
            </button>
          </div>
          <h2 className="text-2xl font-bold text-white mt-3">{card.title}</h2>
        </div>

        <CardContent className="p-6 space-y-6">
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-2">Rule</h3>
            <p className="text-lg text-slate-800 font-medium">{card.rule}</p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-3">Examples</h3>
            <div className="space-y-3">
              {card.examples.map((example, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-800 font-medium">{example.correct}</p>
                    {example.incorrect && (
                      <p className="text-sm text-red-500 line-through">✗ {example.incorrect}</p>
                    )}
                    <p className="text-sm text-slate-500 italic">{example.translation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowTip(!showTip)}
            className="w-full p-4 rounded-2xl bg-amber-50 border-2 border-amber-200 text-left hover:bg-amber-100 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">💡</span>
              <div>
                <p className="font-bold text-amber-800">Pro Tip</p>
                <p className={`text-amber-700 text-sm ${showTip ? '' : 'blur-sm'} transition-all`}>
                  {card.tip}
                </p>
              </div>
            </div>
          </button>
        </CardContent>
      </motion.div>
    </motion.div>
  );
};

interface GrammarCardListProps {
  onSelectCard?: (card: GrammarCard) => void;
}

export const GrammarCardList: React.FC<GrammarCardListProps> = ({ onSelectCard }) => {
  const [selectedCard, setSelectedCard] = useState<GrammarCard | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<GrammarCard['category'] | 'all'>('all');

  const categories: (GrammarCard['category'] | 'all')[] = ['all', 'articles', 'verbs', 'tenses', 'grammar', 'writing'];

  const filteredCards = grammarCards.filter(card => {
    const matchesSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          card.rule.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || card.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categoryIcons: Record<string, string> = {
    all: '📚',
    articles: '📰',
    verbs: '🔴',
    tenses: '⏰',
    grammar: '📖',
    writing: '✍️',
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search grammar cards..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-4 pl-12 rounded-2xl border-2 border-slate-200 focus:border-green-500 focus:outline-none transition-colors"
        />
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              px-4 py-2 rounded-full whitespace-nowrap font-semibold transition-all
              ${activeCategory === cat 
                ? 'bg-green-500 text-white shadow-lg' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}
            `}
          >
            {categoryIcons[cat]} {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredCards.map((card) => (
          <Card
            key={card.id}
            hoverable
            onClick={() => onSelectCard ? onSelectCard(card) : setSelectedCard(card)}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold ${
                  card.category === 'verbs' ? 'bg-red-100 text-red-600' :
                  card.category === 'tenses' ? 'bg-blue-100 text-blue-600' :
                  card.category === 'grammar' ? 'bg-purple-100 text-purple-600' :
                  card.category === 'writing' ? 'bg-green-100 text-green-600' :
                  'bg-amber-100 text-amber-600'
                }`}>
                  {categoryIcons[card.category]}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-800">{card.title}</h3>
                  <p className="text-sm text-slate-500 line-clamp-2 mt-1">{card.rule}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCards.length === 0 && (
        <div className="text-center py-12 text-slate-400">
          <span className="text-4xl">🔍</span>
          <p className="mt-2">No cards found matching your search</p>
        </div>
      )}

      <AnimatePresence>
        {selectedCard && (
          <GrammarCardView card={selectedCard} onClose={() => setSelectedCard(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default GrammarCardList;