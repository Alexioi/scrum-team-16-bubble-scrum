import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  expandableListData: {
    id: string;
    name: string;
    text: string;
    checked: boolean;
    disabled: boolean;
  }[];
  dates: string[] | null[];
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
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeExpandableListData: (state, { payload }: { payload: string }) => {
      state.expandableListData = state.expandableListData.map((item) => {
        if (payload === item.name) {
          return { ...item, checked: !item.checked };
        }

        return item;
      });
    },
    changeDates: (state, { payload }: { payload: string[] | null[] }) => {
      if (!(payload.length === 2)) {
        return;
      }

      state.dates = payload;
    },
  },
});

const filterActions = filterSlice.actions;
const filterReducer = filterSlice.reducer;

export { filterActions, filterReducer };
