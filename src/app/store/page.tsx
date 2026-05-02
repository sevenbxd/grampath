'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useProgressStore } from '@/store/progressStore';
import { Card, CardContent, Button } from '@/components/ui';

interface StoreItem {
  id: string;
  name: string;
  icon: string;
  type: 'icon' | 'frame';
  price: number;
  description: string;
  color?: string;
  css?: string;
}

const iconItems: StoreItem[] = [
  { id: 'icon-alien', name: 'Alien', icon: '👽', type: 'icon', price: 50, description: 'Alien from space' },
  { id: 'icon-cat', name: 'Cat', icon: '🐱', type: 'icon', price: 50, description: 'Cute cat' },
  { id: 'icon-cat-king', name: 'Cat King', icon: '👑', type: 'icon', price: 100, description: 'King cat' },
  { id: 'icon-dragon', name: 'Dragon', icon: '🐲', type: 'icon', price: 100, description: 'Fire dragon' },
  { id: 'icon-robot', name: 'Robot', icon: '🤖', type: 'icon', price: 50, description: 'Cute robot' },
  { id: 'icon-ghost', name: 'Ghost', icon: '👻', type: 'icon', price: 50, description: 'Spooky ghost' },
  { id: 'icon-unicorn', name: 'Unicorn', icon: '🦄', type: 'icon', price: 75, description: 'Magic unicorn' },
  { id: 'icon-skull', name: 'Skull', icon: '💀', type: 'icon', price: 50, description: 'Cool skull' },
  { id: 'icon-pumpkin', name: 'Pumpkin', icon: '🎃', type: 'icon', price: 50, description: 'Halloween' },
  { id: 'icon-bat', name: 'Bat', icon: '🦇', type: 'icon', price: 50, description: 'Night bat' },
  { id: 'icon-spider', name: 'Spider', icon: '🕷️', type: 'icon', price: 50, description: 'Cool spider' },
  { id: 'icon-snake', name: 'Snake', icon: '🐍', type: 'icon', price: 75, description: 'Snake' },
  { id: 'icon-bear', name: 'Bear', icon: '🐻', type: 'icon', price: 75, description: 'Cute bear' },
  { id: 'icon-panda', name: 'Panda', icon: '🐼', type: 'icon', price: 75, description: 'Panda' },
  { id: 'icon-lion', name: 'Lion', icon: '🦁', type: 'icon', price: 100, description: 'King lion' },
  { id: 'icon-monkey', name: 'Monkey', icon: '🐵', type: 'icon', price: 50, description: 'Funny monkey' },
];

const frameItems: StoreItem[] = [
  { id: 'frame-blue', name: 'Blue', icon: '', type: 'frame', price: 50, description: 'Classic blue', color: 'blue' },
  { id: 'frame-green', name: 'Green', icon: '', type: 'frame', price: 50, description: 'Fresh green', color: 'green' },
  { id: 'frame-gold', name: 'Gold', icon: '', type: 'frame', price: 150, description: '👑 Royal gold', color: 'gold', css: 'gold' },
  { id: 'frame-diamond', name: 'Diamond', icon: '', type: 'frame', price: 200, description: '💎 Sparkle', color: 'diamond', css: 'diamond' },
  { id: 'frame-emerald', name: 'Emerald', icon: '', type: 'frame', price: 150, description: '💚 Rare emerald', color: 'emerald', css: 'emerald' },
  { id: 'frame-purple', name: 'Purple', icon: '', type: 'frame', price: 75, description: 'Royal purple', color: 'purple' },
  { id: 'frame-red', name: 'Red', icon: '', type: 'frame', price: 75, description: 'Passionate red', color: 'red' },
  { id: 'frame-pink', name: 'Pink', icon: '', type: 'frame', price: 75, description: 'Lovely pink', color: 'pink' },
  { id: 'frame-rainbow', name: 'Rainbow', icon: '', type: 'frame', price: 200, description: '🌈 Colorful', color: 'rainbow', css: 'rainbow' },
  { id: 'frame-fire', name: 'Fire', icon: '', type: 'frame', price: 150, description: '🔥 Animated', color: 'fire', css: 'fire' },
  { id: 'frame-ice', name: 'Ice', icon: '', type: 'frame', price: 150, description: '❄️ Frozen', color: 'ice', css: 'ice' },
  { id: 'frame-christmas', name: 'Christmas', icon: '', type: 'frame', price: 250, description: '🎄 Holiday', color: 'christmas', css: 'christmas' },
  { id: 'frame-halloween', name: 'Halloween', icon: '', type: 'frame', price: 200, description: '🎃 Spooky', color: 'halloween', css: 'halloween' },
];

export default function StorePage() {
  const { gems, addGems } = useProgressStore();
  const [mounted, setMounted] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'icons' | 'frames'>('icons');
  const [ownedItems, setOwnedItems] = useState<string[]>([]);
  const [equippedIcon, setEquippedIcon] = useState('👽');
  const [equippedFrame, setEquippedFrame] = useState('blue');
  const [showPurchaseSuccess, setShowPurchaseSuccess] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const savedOwned = localStorage.getItem('store-owned');
    if (savedOwned) {
      try {
        setOwnedItems(JSON.parse(savedOwned));
      } catch (e) {}
    } else {
      setOwnedItems([
        'icon-alien', 'icon-cat', 'icon-cat-king', 'icon-dragon', 'icon-robot', 'icon-ghost',
        'icon-unicorn', 'icon-skull', 'icon-pumpkin', 'icon-bat', 'icon-spider', 'icon-snake',
        'icon-bear', 'icon-panda', 'icon-lion', 'icon-monkey',
        'frame-blue', 'frame-green', 'frame-gold', 'frame-diamond', 'frame-emerald',
        'frame-purple', 'frame-red', 'frame-pink',
        'frame-rainbow', 'frame-fire', 'frame-ice', 'frame-christmas', 'frame-halloween'
      ]);
    }
const savedIcon = localStorage.getItem('equipped-icon');
    if (savedIcon) setEquippedIcon(savedIcon);
    const savedFrame = localStorage.getItem('equipped-frame');
    if (savedFrame) setEquippedFrame(savedFrame);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('store-owned', JSON.stringify(ownedItems));
    }
  }, [ownedItems, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('equipped-icon', equippedIcon);
      localStorage.setItem('equipped-frame', equippedFrame);
      window.dispatchEvent(new Event('avatar-changed'));
    }
  }, [equippedIcon, equippedFrame, mounted]);

  const handleBuy = (item: StoreItem) => {
    if (gems < item.price) return;
    if (ownedItems.includes(item.id)) return;
    
    addGems(-item.price);
    setOwnedItems(prev => [...prev, item.id]);
    setShowPurchaseSuccess(item.id);
    setTimeout(() => setShowPurchaseSuccess(null), 1500);
  };

const handleEquip = (item: StoreItem) => {
    if (!ownedItems.includes(item.id)) return;
    
    if (item.type === 'icon') {
      setEquippedIcon(item.icon);
    } else {
      setEquippedFrame(item.color || 'blue');
    }
  };

  const icons = iconItems;

  const frameCssMap: Record<string, string> = {
    'blue': '',
    'green': '',
    'gold': '',
    'purple': '',
    'red': '',
    'pink': '',
    'rainbow': 'rainbow',
    'fire': 'fire',
    'ice': 'ice',
    'christmas': 'christmas',
    'halloween': 'halloween',
  };
  const frames = frameItems;

  const getFrameStyle = (color: string = 'blue', css: string = '') => {
    const baseStyles = 'border-4 rounded-full relative';
    
    if (css === 'rainbow') return `${baseStyles} frame-rainbow`;
    if (css === 'fire') return `${baseStyles} frame-fire`;
    if (css === 'ice') return `${baseStyles} frame-ice`;
    if (css === 'christmas') return `${baseStyles} frame-christmas`;
    if (css === 'halloween') return `${baseStyles} frame-halloween`;
    if (css === 'gold') return `${baseStyles} frame-gold`;
    if (css === 'diamond') return `${baseStyles} frame-diamond`;
    if (css === 'emerald') return `${baseStyles} frame-emerald`;
    
    if (color === 'blue') return `${baseStyles} border-blue-500 bg-blue-50`;
    if (color === 'green') return `${baseStyles} border-green-500 bg-green-50`;
    if (color === 'gold') return `${baseStyles} border-yellow-500 bg-yellow-50`;
    if (color === 'diamond') return `${baseStyles} border-cyan-300 bg-cyan-50`;
    if (color === 'emerald') return `${baseStyles} border-emerald-500 bg-emerald-50`;
    if (color === 'purple') return `${baseStyles} border-purple-500 bg-purple-50`;
    if (color === 'red') return `${baseStyles} border-red-500 bg-red-50`;
    if (color === 'pink') return `${baseStyles} border-pink-400 bg-pink-50`;
    
    return `${baseStyles} border-slate-300 bg-slate-50`;
  };

  return (
    <div className="min-h-screen pb-12">
      <div className="gradient-bg py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/app">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
              ← Back
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl">💎</span>
              <div>
                <h1 className="text-3xl font-bold text-white">Gems Store</h1>
                <p className="text-white/80 mt-1">
                  Customize your profile with avatars and frames
                </p>
              </div>
            </div>
          </motion.div>

          <div className="mt-4 flex items-center gap-3">
            <div className="px-4 py-2 bg-white/20 rounded-xl flex items-center gap-2">
              <span className="text-2xl">💎</span>
              <span className="text-white font-bold text-xl">{mounted ? gems : 0}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex justify-center mb-6">
          <div className={`w-24 h-24 rounded-full flex items-center justify-center border-4 text-6xl ${getFrameStyle(equippedFrame, frameCssMap[equippedFrame])}`}>
            {equippedIcon}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setSelectedTab('icons')}
            className={`px-4 py-2 rounded-lg font-medium ${
              selectedTab === 'icons' 
                ? 'bg-blue-500 text-white' 
                : 'bg-slate-100 text-slate-600'
            }`}
          >
            Avatars ({iconItems.length})
          </button>
          <button
            onClick={() => setSelectedTab('frames')}
            className={`px-4 py-2 rounded-lg font-medium ${
              selectedTab === 'frames' 
                ? 'bg-blue-500 text-white' 
                : 'bg-slate-100 text-slate-600'
            }`}
          >
            Frames ({frameItems.length})
          </button>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(selectedTab === 'icons' ? iconItems : frameItems).map((item) => {
            const owned = ownedItems.includes(item.id);
            const equipped = item.type === 'icon' 
              ? equippedIcon === item.icon 
              : equippedFrame === item.color;
            const canAfford = gems >= item.price;

            return (
              <motion.div key={item.id} whileHover={{ scale: 1.02 }}>
                <Card
                  hoverable
                  onClick={() => owned && handleEquip(item)}
                  className={`cursor-pointer border-2 ${
                    equipped 
                      ? 'border-blue-500 bg-blue-50' 
                      : owned 
                        ? 'border-green-400 bg-green-50'
                        : 'border-slate-200 bg-white'
                  }`}
                >
                  <CardContent className="p-4 text-center">
                    {item.type === 'icon' ? (
                      <div className="text-5xl mb-2">{item.icon}</div>
                    ) : (
                      <div className={`w-12 h-12 mx-auto mb-2 rounded-full bg-white border-4 ${getFrameStyle(item.color || 'blue', item.css || '')} flex items-center justify-center`}>
                        <span className="text-xs">▼</span>
                      </div>
                    )}
                    
                    <h3 className="font-bold text-slate-800 text-sm">{item.name}</h3>
                    <p className="text-xs text-slate-500 mb-2">{item.description}</p>
                    
                    {owned ? (
                      equipped ? (
                        <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Equipped</span>
                      ) : (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEquip(item);
                          }}
                          className="text-xs bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                        >
                          Equip
                        </button>
                      )
                    ) : (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBuy(item);
                        }}
                        disabled={!canAfford}
                        className={`text-xs px-2 py-1 rounded flex items-center justify-center gap-1 ${
                          canAfford 
                            ? 'bg-yellow-400 text-white hover:bg-yellow-500' 
                            : 'bg-slate-200 text-slate-400'
                        }`}
                      >
                        <span>💎</span>
                        <span>{item.price}</span>
                      </button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Purchase Success Animation */}
      {showPurchaseSuccess && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="bg-green-500 text-white px-8 py-4 rounded-xl text-2xl font-bold">
            ✓ Purchased!
          </div>
        </motion.div>
      )}
    </div>
  );
}