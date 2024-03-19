import { configureStore } from "@reduxjs/toolkit";

import { helloToxinActions, helloToxinReducer } from "./helloToxinSlice";

const store = configureStore({
  reducer: {
    helloToxin: helloToxinReducer,
  },
});

const actions = {
  helloToxin: helloToxinActions,
};

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type { RootState, AppDispatch };
export { store, actions };
