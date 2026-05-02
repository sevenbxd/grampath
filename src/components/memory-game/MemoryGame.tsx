'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { 
  MemoryGameMode, 
  getShuffledPairs, 
  getModeDescription,
  getModeColor 
} from '@/data/memoryGame';
import { useProgressStore } from '@/store/progressStore';
import { Card, CardContent, Button } from '@/components/ui';

interface MemoryTile {
  id: string;
  pairId: string;
  word: string;
  isFlipped: boolean;
  isMatched: boolean;
}

interface MemoryGameProps {
  mode?: MemoryGameMode;
  pairCount?: number;
  onComplete?: (score: number, time: number) => void;
  challengeId?: string;
  xpReward?: number;
  gemReward?: number;
}

export const MemoryGame: React.FC<MemoryGameProps> = ({
  mode: initialMode,
  pairCount = 6,
  onComplete,
  challengeId,
  xpReward = 50,
  gemReward = 2,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const challengeParam = searchParams?.get('challenge');
  
  const [selectedMode, setSelectedMode] = useState<MemoryGameMode>(initialMode || 'translation');
  const [gameStarted, setGameStarted] = useState(false);
  const [tiles, setTiles] = useState<MemoryTile[]>([]);
  const [selectedTile, setSelectedTile] = useState<MemoryTile | null>(null);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [gameTime, setGameTime] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  
  const { completeChallenge, addXP, completedChallenges } = useProgressStore();

  const modes: { mode: MemoryGameMode; icon: string; name: string }[] = [
    { mode: 'translation', icon: '🌍', name: 'Translation' },
    { mode: 'opposite', icon: '⚡', name: 'Opposites' },
    { mode: 'tense', icon: '⏰', name: 'Tenses' },
  ];

  const initGame = useCallback((mode: MemoryGameMode, count: number) => {
    const pairs = getShuffledPairs(mode, count);
    
    const gameTiles: MemoryTile[] = [];
    pairs.forEach((pair) => {
      gameTiles.push({
        id: `${pair.id}-word`,
        pairId: pair.id,
        word: pair.word,
        isFlipped: false,
        isMatched: false,
      });
      gameTiles.push({
        id: `${pair.id}-match`,
        pairId: pair.id,
        word: pair.match,
        isFlipped: false,
        isMatched: false,
      });
    });
    
    const shuffledTiles = gameTiles.sort(() => Math.random() - 0.5);
    setTiles(shuffledTiles);
    setSelectedTile(null);
    setMoves(0);
    setMatches(0);
    setGameTime(0);
    setGameComplete(false);
    setGameStarted(true);
  }, []);

  useEffect(() => {
    if (gameStarted && !gameComplete) {
      const timer = setInterval(() => {
        setGameTime((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [gameStarted, gameComplete]);

  useEffect(() => {
    if (gameComplete && onComplete) {
      onComplete(moves, gameTime);
    }
  }, [gameComplete]);

  const handleTileClick = (clickedTile: MemoryTile) => {
    if (clickedTile.isMatched || clickedTile.isFlipped) return;
    if (selectedTile && selectedTile.id === clickedTile.id) return;

    const newTiles = tiles.map((tile) =>
      tile.id === clickedTile.id ? { ...tile, isFlipped: true } : tile
    );
    setTiles(newTiles);

    if (!selectedTile) {
      setSelectedTile({ ...clickedTile, isFlipped: true });
    } else {
      setMoves((prev) => prev + 1);

      if (selectedTile.pairId === clickedTile.pairId) {
        setTimeout(() => {
          setTiles((prev) =>
            prev.map((tile) =>
              tile.pairId === selectedTile.pairId ? { ...tile, isMatched: true } : tile
            )
          );
          setMatches((prev) => {
            const newMatches = prev + 1;
            if (newMatches === pairCount) {
              setGameComplete(true);
              if (challengeId && !completedChallenges.includes(challengeId)) {
                completeChallenge(challengeId, xpReward, gemReward);
              } else {
                addXP(xpReward / 2);
              }
            }
            return newMatches;
          });
        }, 500);
        setSelectedTile(null);
      } else {
        setTimeout(() => {
          setTiles((prev) =>
            prev.map((tile) =>
              tile.id === selectedTile.id || tile.id === clickedTile.id
                ? { ...tile, isFlipped: false }
                : tile
            )
          );
          setSelectedTile(null);
        }, 1000);
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const calculateScore = () => {
    const baseScore = 1000;
    const movesPenalty = moves > pairCount * 2 ? (moves - pairCount * 2) * 10 : 0;
    const timePenalty = gameTime > 60 ? (gameTime - 60) * 2 : 0;
    return Math.max(0, baseScore - movesPenalty - timePenalty);
  };

  if (!gameStarted) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">🧠 Memory Match</h1>
          <p className="text-slate-500">Test your vocabulary with this classic game</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {modes.map(({ mode, icon, name }) => (
            <motion.div
              key={mode}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card
                hoverable
                onClick={() => setSelectedMode(mode)}
                className={`
                  cursor-pointer transition-all
                  ${selectedMode === mode ? 'ring-4 ring-green-500 border-green-500' : ''}
                `}
              >
                <CardContent className="text-center p-6">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${getModeColor(mode)} flex items-center justify-center text-3xl mb-4`}>
                    {icon}
                  </div>
                  <h3 className="font-bold text-slate-800">{name}</h3>
                  <p className="text-sm text-slate-500 mt-2">{getModeDescription(mode)}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          {[4, 6, 8].map((count) => (
            <Button
              key={count}
              onClick={() => initGame(selectedMode, count)}
              className={`
                px-6 py-3 font-bold
                ${pairCount === count ? 'bg-green-500' : 'bg-slate-200 hover:bg-slate-300 text-slate-700'}
              `}
            >
              {count} Pairs
            </Button>
          ))}
        </div>

        {(challengeParam || challengeId) && (
          <div className="mt-8 p-4 bg-amber-50 rounded-2xl border border-amber-200 text-center">
            <p className="text-amber-800 font-semibold">
              ⭐ Complete to earn {xpReward} XP + {gemReward} gems!
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <Button
          onClick={() => setGameStarted(false)}
          variant="ghost"
          className="text-slate-600"
        >
          ← Back
        </Button>
        
        <div className="flex items-center gap-6">
          <div className="text-center">
            <p className="text-sm text-slate-500">Time</p>
            <p className="font-bold text-xl text-slate-800">{formatTime(gameTime)}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-slate-500">Moves</p>
            <p className="font-bold text-xl text-slate-800">{moves}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-slate-500">Matches</p>
            <p className="font-bold text-xl text-slate-800">{matches}/{pairCount}</p>
          </div>
        </div>
      </div>

      <div className={`grid gap-3 ${pairCount <= 4 ? 'grid-cols-4' : pairCount <= 6 ? 'grid-cols-4 md:grid-cols-6' : 'grid-cols-4 md:grid-cols-6'}`}>
        {tiles.map((tile) => (
          <motion.div
            key={tile.id}
            whileHover={!tile.isMatched && !tile.isFlipped ? { scale: 1.05 } : {}}
            whileTap={!tile.isMatched && !tile.isFlipped ? { scale: 0.95 } : {}}
          >
            <Card
              onClick={() => handleTileClick(tile)}
              className={`
                aspect-square cursor-pointer transition-all duration-300
                ${tile.isMatched ? 'bg-green-100 border-green-300' : ''}
                ${tile.isFlipped && !tile.isMatched ? 'bg-white border-blue-300' : 'bg-slate-100'}
              `}
            >
              <CardContent className="h-full flex items-center justify-center p-2">
                <AnimatePresence mode="wait">
                  {tile.isFlipped || tile.isMatched ? (
                    <motion.div
                      key="front"
                      initial={{ rotateY: 90 }}
                      animate={{ rotateY: 0 }}
                      exit={{ rotateY: 90 }}
                      className="text-center"
                    >
                      <p className={`
                        font-bold text-sm md:text-base
                        ${tile.isMatched ? 'text-green-600' : 'text-slate-800'}
                      `}>
                        {tile.word}
                      </p>
                      {tile.isMatched && (
                        <motion.span 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="text-green-500 text-lg"
                        >
                          ✓
                        </motion.span>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="back"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-slate-400 text-2xl"
                    >
                      ?
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {gameComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-4xl mb-4"
              >
                🎉
              </motion.div>
              
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Congratulations!</h2>
              <p className="text-slate-500 mb-6">You completed the Memory Match!</p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <p className="text-2xl font-bold text-slate-800">{moves}</p>
                  <p className="text-sm text-slate-500">Moves</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <p className="text-2xl font-bold text-slate-800">{formatTime(gameTime)}</p>
                  <p className="text-sm text-slate-500">Time</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <p className="text-2xl font-bold text-amber-600">{calculateScore()}</p>
                  <p className="text-sm text-slate-500">Score</p>
                </div>
              </div>
              
              {(challengeParam || challengeId) && (
                <div className="p-4 bg-amber-50 rounded-xl mb-6">
                  <p className="text-amber-800 font-bold">
                    +{xpReward} XP 🎉 +{gemReward} gems 💎
                  </p>
                </div>
              )}
              
              <div className="flex gap-3">
                <Button
                  onClick={() => router.push('/app')}
                  variant="outline"
                  className="flex-1"
                >
                  Home
                </Button>
                <Button
                  onClick={() => initGame(selectedMode, pairCount)}
                  className="flex-1 bg-green-500 hover:bg-green-600"
                >
                  Play Again
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MemoryGame;