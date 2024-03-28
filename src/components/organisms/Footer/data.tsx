import FacebookIcon from '@/images/decorative/facebook.svg';
import TwitterIcon from '@/images/decorative/twitter.svg';
import InstagramIcon from '@/images/decorative/instagram.svg';

const linksData = [
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

const socialData = [
  {
    icon: <TwitterIcon />,
    href: 'https://twitter.com/',
  },
  {
    icon: <FacebookIcon />,
    href: 'https://www.facebook.com/',
  },
  {
    icon: <InstagramIcon />,
    href: 'https://www.instagram.com/',
  },
];

export { socialData, linksData };
