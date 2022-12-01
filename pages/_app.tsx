import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Exo_2 } from '@next/font/google';
import { Goldman } from '@next/font/google';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Layout from '../components/layout/Layout';
import { SessionProvider } from 'next-auth/react';

const exo2 = Exo_2();
const goldman = Goldman({ weight: "400" });

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <main className={exo2.className}>
            <Component {...pageProps} />
          </main>
        </Layout>
      </SessionProvider>
    </Provider>
  )
}

export default MyApp
