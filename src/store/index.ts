import { configureStore } from '@reduxjs/toolkit';

import { helloToxinActions, helloToxinReducer } from './helloToxinSlice';
import { paginationActions, paginationReducer } from './paginationSlice';
import { filterActions, filterReducer } from './filterSlice';

const store = configureStore({
  reducer: {
    helloToxin: helloToxinReducer,
    pagination: paginationReducer,
    filter: filterReducer,
  },
});

const actions = {
  helloToxin: helloToxinActions,
  pagination: paginationActions,
  filter: filterActions,
};

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type { RootState, AppDispatch };
export { store, actions };
