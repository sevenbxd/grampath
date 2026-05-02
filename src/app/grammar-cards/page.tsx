'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GrammarCardList } from '@/components/grammar';
import { Button } from '@/components/ui';

export default function GrammarCardsPage() {
  return (
    <div className="min-h-screen pb-12">
      <div className="gradient-bg py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/app">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                ← Back
              </Button>
            </Link>
          </div>
          <motion.h1 
            className="text-3xl font-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            📖 Grammar Cards
          </motion.h1>
          <motion.p 
            className="text-white/80 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Quick reference guides for English grammar rules
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <GrammarCardList />
      </div>
    </div>
  );
}