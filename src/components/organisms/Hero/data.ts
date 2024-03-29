import bg1 from '@/images/content/landing-page-background.jpg';
import bg2 from '@/images/content/landing-page-background2.jpg';
import bg3 from '@/images/content/landing-page-background3.jpg';

const images: string[] = [bg1.src, bg2.src, bg3.src];

const guestVariants = [
  ['взрослый', 'взрослых', 'взрослых'],
  ['ребенок', 'ребенка', 'детей'],
  ['младенец', 'младенца', 'младенцев'],
];

const guestItems = [
  {
    name: 'Взрослые',
    counter: 0,
  },
  { name: 'Дети', counter: 0 },
  { name: 'Младенцы', counter: 0 },
];

const guestGroups = [[0], [1], [2]];

export { images, guestVariants, guestItems, guestGroups };
