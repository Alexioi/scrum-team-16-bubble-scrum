import { createSlice } from '@reduxjs/toolkit';

const initialState: { data: string } = {
  data: '',
};

const helloToxinSlice = createSlice({
  name: 'helloToxin',
  initialState,
  reducers: {
    change: (state, { payload }: { payload: string }) => {
      state.data = payload;
    },
  },
});

const helloToxinActions = helloToxinSlice.actions;
const helloToxinReducer = helloToxinSlice.reducer;

export { helloToxinActions, helloToxinReducer };
