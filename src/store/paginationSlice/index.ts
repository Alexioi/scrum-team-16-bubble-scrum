import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  currentPage: number;
};

const initialState: InitialState = {
  currentPage: 1,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    change: (state, { payload }: { payload: number }) => {
      state.currentPage += payload;
    },
  },
});

const paginationActions = paginationSlice.actions;
const paginationReducer = paginationSlice.reducer;

export { paginationActions, paginationReducer };
