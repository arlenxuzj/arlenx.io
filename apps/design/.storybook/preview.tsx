import { DocsContainer } from '@storybook/addon-docs';
import { DecoratorFn } from '@storybook/react';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import { cssVariableTheme } from 'ui';

import { Box, BoxProps, CssBaseline, Stack } from '@mui/material';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  styled
} from '@mui/material/styles';
import type {} from '@mui/material/themeCssVarsAugmentation';

import '../src/styles/font.css';
import ThemeProvider from './ThemeProvider';

export const globalTypes = {
  display: {
    name: 'Display',
    title: 'Display',
    description: 'Change the display mode',
    defaultValue: 'single',
    toolbar: {
      icon: 'mirror',
      dynamicTitle: true,
      items: [
        {
          value: 'single',
          title: 'Single'
        },
        {
          value: 'side-by-side',
          title: 'Side by Side'
        }
      ]
    }
  }
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    sort: 'alpha',
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  darkMode: {
    current: 'dark'
  },
  backgrounds: {
    values: [
      {
        name: 'light',
        value: '#f9fafb'
      },
      {
        name: 'dark',
        value: '#16181d'
      }
    ]
  },
  docs: {
    // @ts-ignore
    container: ({ children, context }) => {
      const dark = useDarkMode();

      return (
        // @ts-ignore
        <DocsContainer
          context={{
            ...context,
            storyById: id => {
              const storyContext = context.storyById(id);
              return {
                ...storyContext,
                parameters: {
                  ...storyContext?.parameters,
                  docs: {
                    ...storyContext?.parameters?.docs,
                    theme: dark ? themes.dark : themes.light
                  }
                }
              };
            }
          }}
        >
          {children}
        </DocsContainer>
      );
    }
  }
};

interface ThemeBlockProps extends BoxProps {
  fill?: boolean;
}

export const ThemeBlock = styled(Box, {
  shouldForwardProp: prop => prop !== 'fill'
})<ThemeBlockProps>(({ fill, theme }) => ({
  backgroundColor: theme.vars.palette.background.default,
  display: fill ? 'block' : 'inline-block',
  height: '100%',
  width: fill ? '100%' : '50%',
  padding: theme.spacing(2)
}));

export const withMuiTheme: DecoratorFn = (Story, context) => {
  const displayMode = context.globals.display as string;
  const dark = useDarkMode();

  return (
    <CssVarsProvider
      theme={cssVariableTheme}
      modeStorageKey='mode'
      colorSchemeStorageKey='color-scheme'
      attribute='color-scheme'
    >
      <CssBaseline />

      {displayMode === 'single' ? (
        <ThemeProvider dark={dark}>
          <Box sx={theme => ({ padding: theme.spacing(2) })}>
            <Story />
          </Box>
        </ThemeProvider>
      ) : (
        <Stack
          direction='row'
          sx={{
            height: '100%'
          }}
        >
          <Box
            color-scheme='light'
            sx={theme => ({
              flexBasis: '50%',
              padding: theme.spacing(2),
              backgroundColor: theme.vars.palette.background.default
            })}
          >
            <Story />
          </Box>
          <Box
            color-scheme='dark'
            sx={theme => ({
              flexBasis: '50%',
              padding: theme.spacing(2),
              backgroundColor: theme.vars.palette.background.default
            })}
          >
            <Story />
          </Box>
        </Stack>
      )}
    </CssVarsProvider>
  );
};

export const decorators = [withMuiTheme];
