import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  currentPage: number;
  countCardsOnPage: number;
};

const initialState: InitialState = {
  currentPage: 1,
  countCardsOnPage: 0,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    change: (state, { payload }: { payload: number }) => {
      state.currentPage = payload;
    },
    setCountCards: (state, { payload }: { payload: number }) => {
      state.countCardsOnPage = payload;
    },
  },
});

const paginationActions = paginationSlice.actions;
const paginationReducer = paginationSlice.reducer;

export { paginationActions, paginationReducer };
