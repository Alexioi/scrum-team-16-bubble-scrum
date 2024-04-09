import { configureStore } from '@reduxjs/toolkit';

import { helloToxinReducer } from './helloToxinSlice';
import { HotelListSliceActions, HotelListSliceReducer } from './HotelListSlice';
import { filterActions, filterReducer } from './filterSlice';

const store = configureStore({
  reducer: {
    helloToxin: helloToxinReducer,
    hotelList: HotelListSliceReducer,
    filter: filterReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type { RootState, AppDispatch };
export { store, HotelListSliceActions, filterActions };
