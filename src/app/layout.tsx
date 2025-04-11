// src/app/layout.tsx
import { ReactNode } from 'react';
import { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Drew Erskine Resume',
  description: 'Personal portfolio and resume for Drew Erskine',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
