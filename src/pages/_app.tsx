import Head from 'next/head';
import '../styles/style.css'
import '../styles/style2.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
