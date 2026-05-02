'use client';

import { useEffect, useState } from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    const applyDarkMode = () => {
      const savedDarkMode = localStorage.getItem('app-dark-mode');
      const isDark = savedDarkMode ? JSON.parse(savedDarkMode) : false;
      setDarkMode(isDark);
    };

    applyDarkMode();

    const handleStorageChange = () => applyDarkMode();
    const handleDarkModeChange = () => applyDarkMode();

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('dark-mode-changed', handleDarkModeChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('dark-mode-changed', handleDarkModeChange);
    };
  }, []);

  if (darkMode === null) {
    return (
      <div className="min-h-full flex flex-col bg-[#f8fafc]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={`min-h-full flex flex-col ${darkMode ? 'bg-slate-900' : 'bg-[#f8fafc]'}`}>
      <Header darkMode={darkMode} />
      <main className="flex-1">{children}</main>
      <Footer darkMode={darkMode} />
    </div>
  );
}