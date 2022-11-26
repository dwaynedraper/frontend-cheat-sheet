import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Exo_2 } from '@next/font/google';
import { Cinzel } from '@next/font/google';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Layout from '../components/layout/Layout';

const exo2 = Exo_2();
const cinzel = Cinzel();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <main className={cinzel.className}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </Provider>
  )
}

export default MyApp
