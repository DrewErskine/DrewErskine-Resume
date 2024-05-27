import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Drew Erskine - Portfolio',
  description: 'A portfolio showcasing my skills and experience in software development.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content='A portfolio showcasing my skills and experience in software development.' />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-deep-space text-white`}>
        {children}
      </body>
    </html>
  );
}
