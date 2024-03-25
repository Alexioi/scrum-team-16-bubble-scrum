import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import { StoreProvider, Header } from '@/components';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'Toxin Hotel',
  description: 'Toxin Hotel',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
};

export { metadata };
export default RootLayout;
