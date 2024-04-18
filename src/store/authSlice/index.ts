import { createSlice } from '@reduxjs/toolkit';

type Sex = { value: string; text: string; checked: boolean };

type InitialState = {
  uid: string;
  name: string;
  surname: string;
  sexes: Sex[];
  birthday: string;
  isSubscribed: boolean;
};

const initialState: InitialState = {
  uid: '',
  name: '',
  surname: '',
  sexes: [
    { value: 'man', text: 'мужчина', checked: true },
    { value: 'woman', text: 'женщина', checked: false },
  ],
  birthday: '',
  isSubscribed: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeUID: (state, { payload }: { payload: string }) => {
      state.uid = payload;
    },
    changeName: (state, { payload }: { payload: string }) => {
      state.name = payload;
    },
    changeSurname: (state, { payload }: { payload: string }) => {
      state.surname = payload;
    },
    changeSex: (state, { payload }: { payload: Sex[] }) => {
      state.sexes = payload;
    },
    changeSexByName: (state, { payload }: { payload: string }) => {
      state.sexes.map((item) => {
        if (item.value === payload) {
          return { ...item, isChecked: true };
        }
        return { ...item, isChecked: false };
      });
    },
    changeBirthday: (state, { payload }: { payload: string }) => {
      state.birthday = payload;
    },
    changeIsSubscribed: (state, { payload }: { payload: boolean }) => {
      state.isSubscribed = payload;
    },
  },
});

const authActions = authSlice.actions;
const authReducer = authSlice.reducer;

export { authActions, authReducer };
