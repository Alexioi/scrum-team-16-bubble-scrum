import { configureStore } from '@reduxjs/toolkit';

import { HotelListSliceActions, HotelListSliceReducer } from './HotelListSlice';
import { filterActions, filterReducer } from './FilterSlice';

const store = configureStore({
  reducer: {
    hotelList: HotelListSliceReducer,
    filter: filterReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const selectExpandableList = (state: RootState) => state.filter.expandableList;
const selectGuests = (state: RootState) => state.filter.guests;
const selectRooms = (state: RootState) => state.filter.rooms;
const selectRulesList = (state: RootState) => state.filter.rulesList;
const selectRangePrices = (state: RootState) => state.filter.rangePrices;
const selectAvailabilityList = (state: RootState) =>
  state.filter.availabilityList;

export type { RootState, AppDispatch };
export {
  store,
  HotelListSliceActions,
  filterActions,
  selectRooms,
  selectRulesList,
  selectAvailabilityList,
  selectRangePrices,
  selectExpandableList,
  selectGuests,
};
