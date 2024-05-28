// src/pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import { MyContextProvider } from '../context/MyContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyContextProvider>
      <Component {...pageProps} />
    </MyContextProvider>
  );
}

export default MyApp;
