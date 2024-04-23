import { createSlice } from '@reduxjs/toolkit';

import { Hotel } from '@/types';

type InitialState = {
  data: Hotel | null;
  isLoading: boolean;
  error: string;
};

const initialState: InitialState = {
  data: null,
  isLoading: true,
  error: '',
};

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    changeData: (state, { payload }: { payload: Hotel }) => {
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

const roomActions = roomSlice.actions;
const roomReducer = roomSlice.reducer;

export { roomActions, roomReducer };
