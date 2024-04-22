import { createSlice } from '@reduxjs/toolkit';

import { Comment } from '@/types';
import { changeStringInArray } from '@/helpers';

type InitialState = {
  error: string;
  isLoading: boolean;
  data: Comment[];
};

const initialState: InitialState = {
  data: [],
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
    changeLike: (
      state,
      { payload }: { payload: { commentId: string; uid: string } },
    ) => {
      state.data = state.data.map((item) => {
        if (item.id !== payload.commentId) return item;

        item.likes = changeStringInArray(item.likes, payload.uid);

        return item;
      });
    },
  },
});

const commentListActions = commentListSlice.actions;
const commentListReducer = commentListSlice.reducer;

export { commentListReducer, commentListActions };
