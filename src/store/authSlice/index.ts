import { createSlice } from '@reduxjs/toolkit';

type Sex = { value: string; text: string; isChecked: boolean };

type InitialState = {
  uid: string;
  name: string;
  surname: string;
  sex: Sex[];
  birthday: string;
  isSubscribed: boolean;
};

const initialState: InitialState = {
  uid: '',
  name: '',
  surname: '',
  sex: [
    { value: 'man', text: 'мужчина', isChecked: true },
    { value: 'woman', text: 'женщина', isChecked: false },
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
      state.sex = payload;
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
