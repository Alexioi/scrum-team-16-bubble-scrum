import { configureStore } from '@reduxjs/toolkit';

import { paginationActions, paginationReducer } from './paginationSlice';
import { filterActions, filterReducer } from './filterSlice';
import { roomListActions, roomListReducer } from './roomListSlice';

const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    filter: filterReducer,
    roomList: roomListReducer,
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
const selectCurrentPage = (state: RootState) => state.pagination.currentPage;
const selectDates = (state: RootState) => state.filter.dates;
const selectRoomListData = (state: RootState) => state.roomList.data;
const selectRoomListIsLoading = (state: RootState) => state.roomList.isLoading;
const selectRoomListError = (state: RootState) => state.roomList.error;

export type { RootState, AppDispatch };
export {
  store,
  paginationActions,
  filterActions,
  selectDates,
  roomListActions,
  selectRooms,
  selectRulesList,
  selectAvailabilityList,
  selectRangePrices,
  selectExpandableList,
  selectGuests,
  selectCurrentPage,
  selectRoomListData,
  selectRoomListIsLoading,
  selectRoomListError,
};
