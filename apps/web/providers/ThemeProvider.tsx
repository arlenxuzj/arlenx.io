import React, { createContext, useEffect, useState } from 'react';

import { useColorScheme, useMediaQuery } from '@mui/material';

export type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext<{
  toggleTheme: () => void;
}>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {}
});

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const links =
        document.querySelectorAll<HTMLLinkElement>('link[rel="icon"]');
      console.log(links);
      if (prefersDarkMode) {
        setMode('dark');
        links.forEach(link => {
          link.href = '/logo-dark.png';
        });
      } else {
        setMode('light');
        links.forEach(link => {
          link.href = '/logo-light.png';
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersDarkMode]);

  const toggleTheme = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
