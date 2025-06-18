"use client";

import { ReactNode, useEffect } from 'react';

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: 'dark';
};

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
}: ThemeProviderProps) {
  useEffect(() => {
    document.documentElement.className = defaultTheme;
  }, [defaultTheme]);

  return <>{children}</>;
}

export const useTheme = () => {
  return {
    theme: 'dark' as const,
    setTheme: () => {},
  };
};