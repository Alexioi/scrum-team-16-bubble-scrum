type DropdownValue = {
  name: string;
  counter: number;
};

type CheckboxItem = {
  name: string;
  text: string;
  checked: boolean;
  disabled: boolean;
  description?: string;
};

type Filters = {
  expandableList: CheckboxItem[];
  rulesList: CheckboxItem[];
  availabilityList: CheckboxItem[];
  dates: string[] | null[];
  guests: {
    items: DropdownValue[];
    groups: number[][];
  };
  rooms: {
    items: DropdownValue[];
    groups: number[][];
  };
  rangePrices: number[];
};

const initialState: Filters = {
  expandableList: [
    {
      name: 'isBreakfast',
      text: 'Завтрак',
      checked: false,
      disabled: false,
    },
    {
      name: 'isDesk',
      text: 'Письменный стол',
      checked: false,
      disabled: false,
    },
    {
      name: 'isFeedingChhair',
      text: 'Стул для кормления',
      checked: false,
      disabled: false,
    },
    {
      name: 'isCrib',
      text: 'Кроватка',
      checked: false,
      disabled: false,
    },
    {
      name: 'isTv',
      text: 'Телевизор',
      checked: false,
      disabled: false,
    },
    {
      name: 'isShampoo',
      text: 'Шампунь',
      checked: false,
      disabled: false,
    },
  ],
  rulesList: [
    {
      name: 'isSmoke',
      text: 'Можно курить',
      checked: false,
      disabled: false,
    },
    {
      name: 'isAnimals',
      text: 'Можно с питомцами',
      checked: false,
      disabled: false,
    },
    {
      name: 'isLotOfGuests',
      text: 'Можно пригласить гостей (до 10 человек)',
      checked: false,
      disabled: false,
    },
  ],
  availabilityList: [
    {
      name: 'isWideCorridor',
      text: 'Широкий коридор',
      description: 'Ширина коридоров в номере не менее 91 см.',
      checked: false,
      disabled: false,
    },
    {
      name: 'isAssistant',
      text: 'Помощник для инвалидов',
      description: 'На 1 этаже вас встретит специалист и проводит до номера.',
      checked: false,
      disabled: false,
    },
  ],
  dates: [null, null],
  guests: {
    items: [
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
    ],
    groups: [[0, 1], [2]],
  },
  rooms: {
    items: [
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
    ],
    groups: [[0], [1], [2]],
  },
  rangePrices: [2000, 8000],
};

export type { DropdownValue, Filters };
export { initialState };
