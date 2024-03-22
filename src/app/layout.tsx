import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import { StoreProvider, Header } from '@/components';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'Toxin Hotel',
  description: 'Toxin Hotel',
};

const headerData = {
  navItems: [
    { link: '/change-mi', text: 'О нас' },
    {
      text: 'Услуги',
      list: [
        { link: '/change-mi', text: 'sample 1' },
        { link: '/change-mi', text: 'sample 2' },
      ],
    },
    { link: '/change-mi', text: 'Вакансии' },
    { link: '/change-mi', text: 'Новости' },
    {
      text: 'Соглашения',
      list: [
        { link: '/change-mi', text: 'sample 1' },
        { link: '/change-mi', text: 'sample 2' },
      ],
    },
  ],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <StoreProvider>
          <Header navItems={headerData.navItems} />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
};

export { metadata };
export default RootLayout;
