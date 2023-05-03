import Head from 'next/head';

import { PageProps } from './types';

export const Page = ({ title, children }: PageProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};
