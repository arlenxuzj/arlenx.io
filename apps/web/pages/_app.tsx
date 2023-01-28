import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { cssVariableTheme } from 'ui/themes';

import type { EmotionCache } from '@emotion/react';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import type {} from '@mui/material/themeCssVarsAugmentation';

import Analytics from '../components/Analytics';
// import '../lib/prism/treeview.css';
import DefaultSeo from '../components/Seo/DefaultSeo';
import LayoutWrapper from '../components/Wrapper/LayoutWrapper';
import { ThemeProvider } from '../providers/ThemeProvider';
import '../styles/font.css';
import '../styles/global.css';
import '../styles/twemoji.css';
import createEmotionCache from '../utils/emotion';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  showHeaderProgressBar?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const App = (props: AppPropsWithLayout) => {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  const getLayout = Component.getLayout ?? (page => page);
  const showHeaderProgressBar = Component.showHeaderProgressBar ?? false;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <DefaultSeo />
      <Analytics />
      <CssVarsProvider
        theme={cssVariableTheme}
        defaultMode='dark'
        modeStorageKey='mode'
        colorSchemeStorageKey='color-scheme'
        attribute='color-scheme'
      >
        <CssBaseline />
        <ThemeProvider>
          <LayoutWrapper showHeaderProgressBar={showHeaderProgressBar}>
            {getLayout(<Component {...pageProps} />)}
          </LayoutWrapper>
        </ThemeProvider>
      </CssVarsProvider>
    </CacheProvider>
  );
};

export default App;
