import { Post, allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { GetStaticProps } from 'next';

import Description from '../components/Home/Description';
import RecentlyPosts from '../components/Home/RecentlyPosts';
import DefaultLayout from '../layouts/DefaultLayout';
import { NextPageWithLayout } from './_app';

export type IndexPageProps = {
  posts: Post[];
};

const IndexPage: NextPageWithLayout<IndexPageProps> = ({ posts }) => {
  return (
    <>
      <Description />
      <RecentlyPosts posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt))
  );

  return {
    props: {
      posts
    }
  };
};

IndexPage.getLayout = page => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default IndexPage;
