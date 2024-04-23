import { createSlice } from '@reduxjs/toolkit';

import { Comment } from '@/types';
import { commentsData } from './data';

type InitialState = {
  error: string;
  isLoading: boolean;
  data: Comment[];
};

const initialState: InitialState = {
  data: commentsData,
  error: '',
  isLoading: false,
};

const commentListSlice = createSlice({
  name: 'commentList',
  initialState,
  reducers: {
    changeData: (state, { payload }: { payload: Comment[] }) => {
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

const commentListActions = commentListSlice.actions;
const commentListReducer = commentListSlice.reducer;

export { commentListReducer, commentListActions };
