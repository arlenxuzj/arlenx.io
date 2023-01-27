import { Stack } from '@mui/material';

import DefaultSEO from '../components/Seo/DefaultSeo';
import ContentWrapper from '../components/Wrapper/ContentWrapper';

export type DefaultLayoutProps = {
  headTitle?: string;
  children: React.ReactNode;
};

const DefaultLayout = ({ headTitle, children }: DefaultLayoutProps) => {
  return (
    <>
      <DefaultSEO title={headTitle} />
      <ContentWrapper main>
        <Stack gridColumn={2} alignItems='flex-start' rowGap={8}>
          {children}
        </Stack>
      </ContentWrapper>
    </>
  );
};

export default DefaultLayout;
