import type { AppProps } from 'next/app';
import { MyProvider } from '../context/MyContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyProvider>
      <Component {...pageProps} />
    </MyProvider>
  );
}

export default MyApp;
