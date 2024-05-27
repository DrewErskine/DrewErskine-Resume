// src/pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MyContextProvider } from '../context/MyContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyContextProvider>
      <Component {...pageProps} />
    </MyContextProvider>
  );
}

export default MyApp;
