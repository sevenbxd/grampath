'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const MemoryGame = dynamic(
  () => import('@/components/memory-game/MemoryGame'),
  { ssr: false }
);

export default function MemoryGamePage() {
  return <MemoryGame />;
}