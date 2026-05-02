'use client';

import React from 'react';

export function useHydration<T>(value: T): T {
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  return mounted ? value : value;
}

export function useHydrationValue<T>(value: T, defaultValue: T): T {
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  return mounted ? value : defaultValue;
}