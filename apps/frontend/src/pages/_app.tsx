import '@/styles/globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';

import { Header } from '@/components/Header';

const queryClient = new QueryClient();

const font = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={`h-full w-full ${font.className}`}>
        <Header />
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}
