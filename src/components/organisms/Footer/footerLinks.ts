import style from './style.module.scss';

const footerLinks = [
  {
    title: 'навигация',
    className: '',
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
    className: style.up__about,
    links: [
      { name: 'О сервисе', href: '/change-me' },
      { name: 'Наша команда', href: '/change-me' },
      { name: 'Вакансии', href: '/change-me' },
      { name: 'Инвесторы', href: '/change-me' },
    ],
  },
  {
    title: 'служба поддержки',
    className: style.up__support,
    links: [
      { name: 'Соглашения', href: '/change-me' },
      { name: 'Сообщества', href: '/change-me' },
      { name: 'Связь с нами', href: '/change-me' },
    ],
  },
];

export { footerLinks };
