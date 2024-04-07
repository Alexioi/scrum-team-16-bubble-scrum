import { createSlice } from '@reduxjs/toolkit';

import { DropdownValue, initialState } from './initialState';

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
    changeGuestData: (
      state,
      {
        payload,
      }: {
        payload: DropdownValue[];
      },
    ) => {
      state.guestsData.items = payload;
    },
    changeRoomData: (
      state,
      {
        payload,
      }: {
        payload: DropdownValue[];
      },
    ) => {
      state.roomData.items = payload;
    },
  },
});

const filterActions = filterSlice.actions;
const filterReducer = filterSlice.reducer;

export { filterActions, filterReducer };
