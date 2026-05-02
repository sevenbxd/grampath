import { useState, useEffect } from 'react';

export function useAvatarSync() {
  const [equippedIcon, setEquippedIcon] = useState('👽');
  const [equippedFrame, setEquippedFrame] = useState('blue');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedIcon = localStorage.getItem('equipped-icon');
    if (savedIcon) setEquippedIcon(savedIcon);
    const savedFrame = localStorage.getItem('equipped-frame');
    if (savedFrame) setEquippedFrame(savedFrame);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('equipped-icon', equippedIcon);
    localStorage.setItem('equipped-frame', equippedFrame);
    window.dispatchEvent(new Event('avatar-changed'));
  }, [equippedIcon, equippedFrame, mounted]);

  return { equippedIcon, equippedFrame, setEquippedIcon, setEquippedFrame };
}