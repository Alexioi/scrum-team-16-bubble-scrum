import { configureStore } from '@reduxjs/toolkit';

import { helloToxinActions, helloToxinReducer } from './helloToxinSlice';
import { paginationActions, paginationReducer } from './paginationSlice';

const store = configureStore({
  reducer: {
    helloToxin: helloToxinReducer,
    pagination: paginationReducer,
  },
});

const actions = {
  helloToxin: helloToxinActions,
  pagination: paginationActions,
};

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type { RootState, AppDispatch };
export { store, actions };
