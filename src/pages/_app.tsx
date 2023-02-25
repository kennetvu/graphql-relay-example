import { environment } from '@/relay';
import '@/styles/globals.css';
import { ChakraProvider, Spinner } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Suspense } from 'react';
import { RelayEnvironmentProvider } from 'react-relay';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Car register app</title>
        <meta name="description" content="Car register app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <RelayEnvironmentProvider environment={environment}>
          <Suspense fallback={<Spinner />}>
            <Component {...pageProps} />
          </Suspense>
        </RelayEnvironmentProvider>
      </ChakraProvider>
    </>
  );
}
