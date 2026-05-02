'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <motion.div
          className="text-9xl mb-6"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          📚
        </motion.div>
        
        <h1 className="text-4xl font-bold text-[#1e293b] mb-4">
          Page Not Found
        </h1>
        
        <p className="text-[#64748b] mb-8 max-w-md mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track with your grammar practice!
        </p>
        
        <div className="flex gap-4 justify-center">
          <Button
            onClick={() => router.push('/app')}
            className="px-8"
          >
            Go Home
          </Button>
        </div>
      </motion.div>
    </div>
  );
}