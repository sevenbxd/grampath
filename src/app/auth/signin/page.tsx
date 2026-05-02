'use client';

import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Card, CardContent, Button } from '@/components/ui';
import { useAuthStore } from '@/store/authStore';

export default function SignInPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { setUser, setGuest, setHasSeenWelcome } = useAuthStore();

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full gradient-bg animate-pulse mx-auto mb-4" />
          <p className="text-[#64748b]">Loading...</p>
        </div>
      </div>
    );
  }

  if (session?.user) {
    setUser({
      id: session.user.id || session.user.email || 'unknown',
      email: session.user.email || '',
      name: session.user.name || undefined,
      image: session.user.image || undefined,
    });
    setHasSeenWelcome(true);
    router.push('/app');
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-8">
          <motion.div 
            className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <span className="text-white font-bold text-3xl">GP</span>
          </motion.div>
          <h1 className="text-3xl font-extrabold gradient-text mb-2">GramPath</h1>
          <p className="text-[#64748b]">Master English Grammar Through Writing</p>
        </div>

        <Card className="p-8">
          <CardContent className="text-center">
            <h2 className="text-xl font-bold text-[#1e293b] mb-4">Welcome Back!</h2>
            <p className="text-[#64748b] mb-6">
              Sign in to save your progress and continue learning
            </p>

            <div className="space-y-3">
              <motion.button
                onClick={() => signIn('google', { callbackUrl: '/app' })}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border-2 border-[#e2e8f0] hover:bg-[#f8fafc] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="font-medium text-[#1e293b]">Continue with Google</span>
              </motion.button>

              <div className="relative flex py-4 items-center">
                <div className="flex-grow border-t border-[#e2e8f0]" />
                <span className="flex-shrink mx-4 text-[#94a3b8] text-sm">or</span>
                <div className="flex-grow border-t border-[#e2e8f0]" />
              </div>

              <p className="text-sm text-[#64748b]">
                You can also continue without signing in.
                Your progress will be saved locally.
              </p>

              <Button
                variant="outline"
                onClick={() => {
                  setGuest(true);
                  setHasSeenWelcome(true);
                  router.push('/app');
                }}
                className="w-full"
              >
                Continue as Guest
              </Button>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-[#94a3b8] mt-6">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </motion.div>
    </div>
  );
}