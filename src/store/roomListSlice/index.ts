import { createSlice } from '@reduxjs/toolkit';

import { Hotel } from '@/types';

type InitialState = {
  data: Hotel[];
  isLoading: boolean;
  error: string;
};

const initialState: InitialState = {
  data: [],
  isLoading: true,
  error: '',
};

const roomListSlice = createSlice({
  name: 'roomList',
  initialState,
  reducers: {
    changeData: (state, { payload }: { payload: Hotel[] }) => {
      state.data = payload;
    },
    changeIsLoading: (state, { payload }: { payload: boolean }) => {
      state.isLoading = payload;
    },
    changeError: (state, { payload }: { payload: string }) => {
      state.error = payload;
    },
  },
});

const roomListActions = roomListSlice.actions;
const roomListReducer = roomListSlice.reducer;

export { roomListActions, roomListReducer };
