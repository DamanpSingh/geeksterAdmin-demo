import '../styles/globals.css';
import '../styles/icons.css';
import React from 'react';
import type { AppProps } from 'next/app';
import Layout from '../components/PageLayout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Paths } from '../utils/pages';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const path = router.pathname;

  const pageDetails = Paths[path];

  return (
    <React.Fragment>
      <Head>
        <title>{pageDetails?.title || 'Geekster'}</title>
        <meta name="description" content={pageDetails?.content || 'Geekster'} />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=optional"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout
          pagetitle = {pageDetails?.content || 'Geekster'}
        >
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
}
export default MyApp;
