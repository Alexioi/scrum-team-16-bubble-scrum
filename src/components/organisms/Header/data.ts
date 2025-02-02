import { List } from '../../atoms';

type Data = {
  navItems: {
    text: string;
    link?: string;
    list?: List;
  }[];
};

const data: Data = {
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

export { data };
