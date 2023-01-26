import Head from 'next/head';

import { Stack } from '@mui/material';

import ContentWrapper from '../components/Wrapper/ContentWrapper';
import siteMeta from '../configs/siteMeta';

export type DefaultLayoutProps = {
  headTitle?: string;
  children: React.ReactNode;
};

const DefaultLayout = ({ headTitle, children }: DefaultLayoutProps) => {
  return (
    <>
      <Head>
        <title>
          {headTitle ? `${headTitle} | ${siteMeta.title}` : siteMeta.title}
        </title>
      </Head>
      <ContentWrapper main>
        <Stack gridColumn={2} alignItems='flex-start' rowGap={8}>
          {children}
        </Stack>
      </ContentWrapper>
    </>
  );
};

export default DefaultLayout;
