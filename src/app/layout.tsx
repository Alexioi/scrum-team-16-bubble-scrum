import { Montserrat } from 'next/font/google';
import type { Metadata } from 'next';

import { StoreProvider, Header } from '@/components';

import './globals.css';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

const metadata: Metadata = {
  title: 'Toxin Hotel',
  description: 'Toxin Hotel',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <Header />
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
};

export { metadata };
export default RootLayout;
