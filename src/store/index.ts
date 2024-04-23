import { configureStore } from '@reduxjs/toolkit';

import { paginationActions, paginationReducer } from './paginationSlice';
import { filterActions, filterReducer, Filters } from './filterSlice';
import { roomListActions, roomListReducer } from './roomListSlice';
import { authReducer, authActions } from './authSlice';

const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    filter: filterReducer,
    roomList: roomListReducer,
    auth: authReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const selectAllFilters = (state: RootState) => state.filter;
const selectExpandableList = (state: RootState) => state.filter.expandableList;
const selectGuests = (state: RootState) => state.filter.guests;
const selectRooms = (state: RootState) => state.filter.rooms;
const selectRulesList = (state: RootState) => state.filter.rulesList;
const selectRangePrices = (state: RootState) => state.filter.rangePrices;
const selectAvailabilityList = (state: RootState) =>
  state.filter.availabilityList;
const selectCurrentPage = (state: RootState) => state.pagination.currentPage;
const selectCountCardsOnPage = (state: RootState) =>
  state.pagination.countCardsOnPage;
const selectRoomListData = (state: RootState) => state.roomList.data;
const selectRoomListIsLoading = (state: RootState) => state.roomList.isLoading;
const selectRoomListError = (state: RootState) => state.roomList.error;
const selectUID = (state: RootState) => state.auth.uid;
const selectName = (state: RootState) => state.auth.name;
const selectSurname = (state: RootState) => state.auth.surname;
const selectSexes = (state: RootState) => state.auth.sexes;
const selectBirthday = (state: RootState) => state.auth.birthday;
const selectIsSubscribes = (state: RootState) => state.auth.isSubscribed;
const selectDates = (state: RootState) => state.filter.dates;

export type { RootState, AppDispatch, Filters };
export {
  store,
  paginationActions,
  filterActions,
  authActions,
  selectDates,
  roomListActions,
  selectAllFilters,
  selectRooms,
  selectRulesList,
  selectAvailabilityList,
  selectRangePrices,
  selectExpandableList,
  selectGuests,
  selectCurrentPage,
  selectCountCardsOnPage,
  selectRoomListData,
  selectRoomListIsLoading,
  selectRoomListError,
  selectUID,
  selectName,
  selectSurname,
  selectSexes,
  selectBirthday,
  selectIsSubscribes,
};
