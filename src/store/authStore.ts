'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  name?: string;
  image?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  isGuest: boolean;
  hasSeenWelcome: boolean;
  user: User | null;
  cloudSynced: boolean;
  lastSyncTime: number | null;
  
  setUser: (user: User | null) => void;
  setGuest: (isGuest: boolean) => void;
  setHasSeenWelcome: (seen: boolean) => void;
  logout: () => void;
  setCloudSynced: (synced: boolean) => void;
  setLastSyncTime: (time: number) => void;
  initializeAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      isGuest: false,
      hasSeenWelcome: false,
      user: null,
      cloudSynced: false,
      lastSyncTime: null,

      setUser: (user) => set({ 
        isAuthenticated: !!user, 
        isGuest: false, 
        user 
      }),

      setGuest: (isGuest) => set({ 
        isGuest, 
        isAuthenticated: false, 
        user: null 
      }),

      setHasSeenWelcome: (hasSeenWelcome) => set({ hasSeenWelcome }),

      logout: () => set({ 
        isAuthenticated: false, 
        isGuest: false, 
        user: null,
        cloudSynced: false,
        lastSyncTime: null,
        hasSeenWelcome: false
      }),

      setCloudSynced: (synced) => set({ cloudSynced: synced }),
      
      setLastSyncTime: (time) => set({ lastSyncTime: time }),

      initializeAuth: () => {
        const state = get();
        if (!state.isAuthenticated && !state.isGuest) {
          set({ isGuest: true });
        }
      },
    }),
    {
      name: 'grampath-auth',
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        isGuest: state.isGuest,
        hasSeenWelcome: state.hasSeenWelcome,
        user: state.user,
        cloudSynced: state.cloudSynced,
        lastSyncTime: state.lastSyncTime,
      }),
    }
  )
);