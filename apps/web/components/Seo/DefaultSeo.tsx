import { ArticleJsonLd, DefaultSeo } from 'next-seo';
import Head from 'next/head';

import siteMeta from '../../configs/siteMeta';

export type DefaultSEOProps = {
  title?: string;
};

const DefaultSEO = ({ title }: DefaultSEOProps) => {
  return (
    <>
      <DefaultSeo
        title={title}
        titleTemplate={`%s | ${siteMeta.title}`}
        defaultTitle={siteMeta.title}
        description={siteMeta.description}
        canonical={siteMeta.url}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: siteMeta.url,
          siteName: siteMeta.title,
          title: title ? `${title} | ${siteMeta.title}` : `${siteMeta.title}`,
          description: siteMeta.description
        }}
      />
      <Head>
        <meta name='googlebot' content='index,follow' />
      </Head>
      <ArticleJsonLd
        type='Blog'
        url={siteMeta.url}
        title={siteMeta.title}
        description={siteMeta.description}
        images={[]}
        datePublished={new Date().toISOString()}
        dateModified={new Date().toISOString()}
        authorName={siteMeta.author}
      />
    </>
  );
};

export default DefaultSEO;
