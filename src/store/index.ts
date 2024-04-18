import { configureStore } from '@reduxjs/toolkit';

import { paginationActions, paginationReducer } from './paginationSlice';
import { filterActions, filterReducer } from './filterSlice';
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
const selectUID = (state: RootState) => state.auth.uid;
const selectName = (state: RootState) => state.auth.name;
const selectSurname = (state: RootState) => state.auth.surname;
const selectSex = (state: RootState) => state.auth.sex;
const selectBirthday = (state: RootState) => state.auth.birthday;
const selectIsSubscribes = (state: RootState) => state.auth.isSubscribed;

export type { RootState, AppDispatch };
export {
  store,
  paginationActions,
  filterActions,
  authActions,
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
  selectUID,
  selectName,
  selectSurname,
  selectSex,
  selectBirthday,
  selectIsSubscribes,
};
