const checkboxItems = [
  {
    id: '1',
    name: 'breakfast',
    text: 'Завтрак',
    checked: false,
    disabled: false,
  },
  {
    id: '2',
    name: 'desk',
    text: 'Письменный стол',
    checked: false,
    disabled: false,
  },
  {
    id: '3',
    name: 'feeding-chair',
    text: 'Стул для кормления',
    checked: false,
    disabled: false,
  },
  {
    id: '4',
    name: 'crib',
    text: 'Кроватка',
    checked: false,
    disabled: false,
  },
  {
    id: '5',
    name: 'tv',
    text: 'Телевизор',
    checked: false,
    disabled: false,
  },
  {
    id: '6',
    name: 'shampoo',
    text: 'Шампунь',
    checked: false,
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
    name: 'спальни',
    counter: 0,
  },
  {
    name: 'кровати',
    counter: 0,
  },
  {
    name: 'ванные комнаты',
    counter: 0,
  },
];

const roomVariants = [
  ['спальня', 'спальни', 'спален'],
  ['кровать', 'кровати', 'кроватей'],
  ['ванная комната', 'ванные комнаты', 'ванных комнат'],
];

export { checkboxItems, roomData, roomVariants, guestData, guestVariants };
