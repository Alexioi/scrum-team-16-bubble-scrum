import { createSlice } from '@reduxjs/toolkit';

import { DropdownValue, initialState } from './initialState';
import { changeChecked } from './helpers';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeExpandableListData: (state, { payload }: { payload: string }) => {
      state.expandableList = changeChecked(state.expandableList, payload);
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
      state.guests.items = payload;
    },
    changeRoomData: (
      state,
      {
        payload,
      }: {
        payload: DropdownValue[];
      },
    ) => {
      state.rooms.items = payload;
    },
    changeRulesList: (
      state,
      {
        payload,
      }: {
        payload: string;
      },
    ) => {
      state.rulesList = changeChecked(state.rulesList, payload);
    },
    changeAvailabilityList: (
      state,
      {
        payload,
      }: {
        payload: string;
      },
    ) => {
      state.availabilityList = changeChecked(state.availabilityList, payload);
    },
    changeRangePrices: (
      state,
      {
        payload,
      }: {
        payload: number[];
      },
    ) => {
      state.rangePrices = payload;
    },
  },
});

const filterActions = filterSlice.actions;
const filterReducer = filterSlice.reducer;

export { filterActions, filterReducer };