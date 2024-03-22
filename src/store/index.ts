import { configureStore } from '@reduxjs/toolkit';

import { helloToxinActions, helloToxinReducer } from './helloToxinSlice';
import { HotelListSliceActions, HotelListSliceReducer } from './HotelListSlice';

const store = configureStore({
  reducer: {
    helloToxin: helloToxinReducer,
    hotelList: HotelListSliceReducer,
  },
});

const actions = {
  helloToxin: helloToxinActions,
  hotelList: HotelListSliceActions,
};

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type { RootState, AppDispatch };
export { store, actions };
