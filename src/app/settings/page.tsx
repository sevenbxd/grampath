'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { motion } from 'framer-motion';
import { useAuthStore } from '@/store/authStore';
import { useProgressStore } from '@/store/progressStore';
import { Card, CardContent, Button } from '@/components/ui';

export default function SettingsPage() {
  const router = useRouter();
  const { 
    isAuthenticated, 
    isGuest, 
    user, 
    cloudSynced, 
    lastSyncTime,
    logout, 
    setGuest,
    setCloudSynced,
    setLastSyncTime
  } = useAuthStore();
  const { initializeProgress, syncToCloud } = useProgressStore();
  const [mounted, setMounted] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedDarkMode = localStorage.getItem('app-dark-mode');
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  const handleToggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('app-dark-mode', JSON.stringify(newMode));
    document.documentElement.classList.toggle('dark', newMode);
    window.dispatchEvent(new Event('dark-mode-changed'));
  };

  const handleLogout = async () => {
    if (isAuthenticated) {
      await signOut({ callbackUrl: '/auth/signin' });
    }
    logout();
    setGuest(true);
    initializeProgress();
    router.push('/app');
  };

  const handleSyncToCloud = async () => {
    setSyncing(true);
    try {
      await syncToCloud();
      setCloudSynced(true);
      setLastSyncTime(Date.now());
    } catch (error) {
      console.error('Sync failed:', error);
    }
    setSyncing(false);
  };

  const handleContinueAsGuest = () => {
    setGuest(true);
    router.push('/app');
  };

  const handleLinkAccount = () => {
    router.push('/auth/signin');
  };

  const formatLastSync = (timestamp: number | null) => {
    if (!timestamp) return 'Never';
    const date = new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={() => router.push('/app')}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <h1 className="text-xl font-bold text-slate-800">Settings</h1>
          <div className="w-16"></div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        {/* Account Section */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <span>👤</span> Account
            </h2>
            
            {isAuthenticated && user ? (
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-2xl">
                    {user.image ? (
                      <img src={user.image} alt={user.name || ''} className="w-full h-full rounded-full" />
                    ) : (
                      '👤'
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-800">{user.name || 'User'}</p>
                    <p className="text-sm text-slate-500">{user.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600">☁️</span>
                    <span className="text-slate-700">Cloud Sync</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${cloudSynced ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                    {cloudSynced ? 'Active' : 'Inactive'}
                  </span>
                </div>

                {lastSyncTime && (
                  <p className="text-sm text-slate-500 text-center">
                    Last synced: {formatLastSync(lastSyncTime)}
                  </p>
                )}

                <div className="space-y-2">
                  <Button
                    onClick={handleSyncToCloud}
                    disabled={syncing}
                    className="w-full"
                  >
                    {syncing ? 'Syncing...' : cloudSynced ? 'Sync Now' : 'Enable Cloud Sync'}
                  </Button>
                  
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="w-full text-red-600 border-red-200 hover:bg-red-50"
                  >
                    Log Out
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 bg-amber-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-amber-600">👤</span>
                    <span className="font-medium text-amber-800">Guest Account</span>
                  </div>
                  <p className="text-sm text-amber-700">
                    Your progress is saved locally. Link an account to sync across devices.
                  </p>
                </div>

                <Button
                  onClick={handleLinkAccount}
                  className="w-full"
                >
                  Link Account
                </Button>

                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="w-full text-red-600 border-red-200 hover:bg-red-50"
                >
                  Log Out from Guest
                </Button>

                {isGuest && (
                  <p className="text-xs text-center text-slate-500">
                    Already playing as guest. Your data is saved locally.
                  </p>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Appearance */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <span>🎨</span> Appearance
            </h2>
            
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="text-2xl">{darkMode ? '🌙' : '☀️'}</div>
                <div>
                  <p className="font-medium text-slate-700">Dark Mode</p>
                  <p className="text-sm text-slate-500">Switch between light and dark theme</p>
                </div>
              </div>
              <button
                onClick={handleToggleDarkMode}
                className={`relative w-14 h-8 rounded-full transition-colors ${
                  darkMode ? 'bg-emerald-500' : 'bg-slate-300'
                }`}
              >
                <motion.div
                  className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
                  animate={{ left: darkMode ? '26px' : '4px' }}
                  transition={{ duration: 0.2 }}
                />
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <span>💾</span> Data Management
            </h2>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                <div>
                  <p className="font-medium text-slate-700">Local Storage</p>
                  <p className="text-sm text-slate-500">Progress saved on this device</p>
                </div>
                <span className="text-emerald-600">✓</span>
              </div>

              {cloudSynced && (
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <div>
                    <p className="font-medium text-slate-700">Cloud Storage</p>
                    <p className="text-sm text-slate-500">Synced with account</p>
                  </div>
                  <span className="text-emerald-600">✓</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* About */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <span>ℹ️</span> About
            </h2>
            
            <div className="space-y-2 text-sm text-slate-600">
              <p><strong>GramPath</strong> v1.0.0</p>
              <p>Learn English Through Writing</p>
            </div>
          </CardContent>
        </Card>

        {/* Home Button */}
        <Button
          onClick={() => router.push('/app')}
          variant="outline"
          className="w-full"
        >
          ← Back to Home
        </Button>
      </main>
    </div>
  );
}