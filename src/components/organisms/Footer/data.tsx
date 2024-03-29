import { ReactNode } from 'react';

import FacebookSVG from '@/images/decorative/facebook.svg';
import TwitterSVG from '@/images/decorative/twitter.svg';
import InstagramSVG from '@/images/decorative/instagram.svg';

type LinksData = {
  title: string;
  links: { name: string; href: string }[];
};

type SocialData = {
  icon: ReactNode;
  href: string;
};

const linksData: LinksData[] = [
  {
    title: 'навигация',
    links: [
      {
        name: 'О нас',
        href: '/change-me',
      },
      { name: 'Новости', href: '/change-me' },
      { name: 'Служба поддержки', href: '/change-me' },
      { name: 'Услуги', href: '/change-me' },
    ],
  },
  {
    title: 'о нас',
    links: [
      { name: 'О сервисе', href: '/change-me' },
      { name: 'Наша команда', href: '/change-me' },
      { name: 'Вакансии', href: '/change-me' },
      { name: 'Инвесторы', href: '/change-me' },
    ],
  },
  {
    title: 'служба поддержки',
    links: [
      { name: 'Соглашения', href: '/change-me' },
      { name: 'Сообщества', href: '/change-me' },
      { name: 'Связь с нами', href: '/change-me' },
    ],
  },
];

const socialData: SocialData[] = [
  {
    icon: <TwitterSVG />,
    href: 'https://twitter.com/',
  },
  {
    icon: <FacebookSVG />,
    href: 'https://www.facebook.com/',
  },
  {
    icon: <InstagramSVG />,
    href: 'https://www.instagram.com/',
  },
];

export { socialData, linksData };
