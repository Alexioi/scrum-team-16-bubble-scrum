import { Montserrat } from 'next/font/google';
import type { Metadata } from 'next';

import {
  Footer,
  Header,
  StoreProvider,
  GetLocalStorageData,
} from '@/components';
import './globals.scss';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
  display: 'swap',
});

const metadata: Metadata = {
  title: 'Toxin Hotel',
  description: 'Toxin Hotel',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ru">
      <body className={montserrat.variable}>
        <StoreProvider>
          <GetLocalStorageData>
            <Header />
            {children}
            <Footer />
          </GetLocalStorageData>
        </StoreProvider>
      </body>
    </html>
  );
};

export { metadata };
export default RootLayout;
