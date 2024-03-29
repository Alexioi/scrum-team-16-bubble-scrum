const checkboxItems = [
  {
    id: '1',
    name: 'breakfast',
    text: 'Завтрак',
    disabled: false,
  },
  {
    id: '2',
    name: 'desk',
    text: 'Письменный стол',
    disabled: false,
  },
  {
    id: '3',
    name: 'feeding-chair',
    text: 'Стул для кормления',
    disabled: false,
  },
  {
    id: '4',
    name: 'crib',
    text: 'Кроватка',
    disabled: false,
  },
  {
    id: '5',
    name: 'tv',
    text: 'Телевизор',
    disabled: false,
  },
  {
    id: '6',
    name: 'shampoo',
    text: 'Шампунь',
    disabled: false,
  },
];

const guestData = [
  {
    name: 'взрослые',
    counter: 0,
  },
  {
    name: 'дети',
    counter: 0,
  },
  {
    name: 'младенцы',
    counter: 0,
  },
];

const guestVariants = [
  ['гость', 'гостя', 'гостей'],
  ['младенец', 'младенца', 'младенцев'],
];

const roomData = [
  {
    name: 'взрослые',
    counter: 0,
  },
  {
    name: 'дети',
    counter: 0,
  },
  {
    name: 'младенцы',
    counter: 0,
  },
];

const roomVariants = [
  ['гость', 'гостя', 'гостей'],
  ['младенец', 'младенца', 'младенцев'],
];

export { checkboxItems, roomData, roomVariants, guestData, guestVariants };
