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
      name: 'breakfast',
      text: 'Завтрак',
      checked: false,
      disabled: false,
    },
    {
      name: 'desk',
      text: 'Письменный стол',
      checked: false,
      disabled: false,
    },
    {
      name: 'feeding-chair',
      text: 'Стул для кормления',
      checked: false,
      disabled: false,
    },
    {
      name: 'crib',
      text: 'Кроватка',
      checked: false,
      disabled: false,
    },
    {
      name: 'tv',
      text: 'Телевизор',
      checked: false,
      disabled: false,
    },
    {
      name: 'shampoo',
      text: 'Шампунь',
      checked: false,
      disabled: false,
    },
  ],
  rulesList: [
    {
      name: 'smoking-allowed',
      text: 'Можно курить',
      checked: false,
      disabled: false,
    },
    {
      name: 'pets-allowed',
      text: 'Можно с питомцами',
      checked: false,
      disabled: false,
    },
    {
      name: 'party-allowed',
      text: 'Можно пригласить гостей (до 10 человек)',
      checked: false,
      disabled: false,
    },
  ],
  availabilityList: [
    {
      name: 'name1',
      text: 'Широкий коридор',
      description: 'Ширина коридоров в номере не менее 91 см.',
      checked: false,
      disabled: false,
    },
    {
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
