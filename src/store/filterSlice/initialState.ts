type DropdownValue = {
  name: string;
  counter: number;
};

type InitialState = {
  expandableListData: {
    id: string;
    name: string;
    text: string;
    checked: boolean;
    disabled: boolean;
  }[];
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
