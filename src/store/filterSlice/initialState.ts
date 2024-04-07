type DropdownValue = {
  name: string;
  counter: number;
};

type CheckboxItem = {
  id: string;
  name: string;
  text: string;
  checked: boolean;
  disabled: boolean;
  description?: string;
};

type InitialState = {
  expandableListData: CheckboxItem[];
  rulesList: CheckboxItem[];
  availabilityList: CheckboxItem[];
  dates: string[] | null[];
  guestsData: {
    items: DropdownValue[];
    groups: number[][];
  };
  roomData: {
    items: DropdownValue[];
    groups: number[][];
  };
};

const initialState: InitialState = {
  expandableListData: [
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
  ],
  rulesList: [
    {
      id: '7',
      name: 'smoking-allowed',
      text: 'Можно курить',
      checked: false,
      disabled: false,
    },
    {
      id: '8',
      name: 'pets-allowed',
      text: 'Можно с питомцами',
      checked: false,
      disabled: false,
    },
    {
      id: '9',
      name: 'party-allowed',
      text: 'Можно пригласить гостей (до 10 человек)',
      checked: false,
      disabled: false,
    },
  ],
  availabilityList: [
    {
      id: '10',
      name: 'name1',
      text: 'Широкий коридор',
      description: 'Ширина коридоров в номере не менее 91 см.',
      checked: false,
      disabled: false,
    },
    {
      id: '11',
      name: 'name2',
      text: 'Помощник для инвалидов',
      description: 'На 1 этаже вас встретит специалист и проводит до номера.',
      checked: false,
      disabled: false,
    },
  ],
  dates: [null, null],
  guestsData: {
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
  roomData: {
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
};

export type { DropdownValue };
export { initialState };
