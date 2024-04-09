import { configureStore } from '@reduxjs/toolkit';

import { helloToxinActions, helloToxinReducer } from './helloToxinSlice';
import { HotelListSliceActions, HotelListSliceReducer } from './HotelListSlice';
import { filterActions, filterReducer } from './filterSlice';

const store = configureStore({
  reducer: {
    helloToxin: helloToxinReducer,
    hotelList: HotelListSliceReducer,
    filter: filterReducer,
  },
});

const actions = {
  helloToxin: helloToxinActions,
  hotelList: HotelListSliceActions,
  filter: filterActions,
};

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type { RootState, AppDispatch };
export { store, actions };
