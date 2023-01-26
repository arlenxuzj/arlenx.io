import { useEffect } from 'react';

import { useColorScheme } from '@mui/material';
import type {} from '@mui/material/themeCssVarsAugmentation';

export type ThemeProviderProps = {
  dark: boolean;
  children: React.ReactNode;
};

const ThemeProvider = ({ dark, children }: ThemeProviderProps) => {
  const { mode, setMode } = useColorScheme();

  useEffect(() => {
    if (dark) {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, [dark]);

  return <>{children}</>;
};

export default ThemeProvider;
