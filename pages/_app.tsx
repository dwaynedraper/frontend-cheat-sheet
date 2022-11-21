import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Exo_2 } from '@next/font/google';
import { Cinzel } from '@next/font/google';

const exo2 = Exo_2();
const cinzel = Cinzel();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={cinzel.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
