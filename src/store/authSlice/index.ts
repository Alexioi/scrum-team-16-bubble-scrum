import { createSlice } from '@reduxjs/toolkit';

type Sex = { value: string; text: string; checked: boolean };

type InitialState = {
  id: string;
  uid: string | null;
  name: string;
  surname: string;
  sexes: Sex[];
  birthday: string;
  isSubscribed: boolean;
  email: string;
  phone: string;
  avatarUrl: string;
};

const initialState: InitialState = {
  id: '',
  uid: null,
  name: '',
  surname: '',
  sexes: [
    { value: 'man', text: 'мужчина', checked: true },
    { value: 'woman', text: 'женщина', checked: false },
  ],
  birthday: '',
  isSubscribed: true,
  email: '',
  phone: '',
  avatarUrl: '',
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
    changeEmail: (state, { payload }: { payload: string }) => {
      state.email = payload;
    },
    changePhone: (state, { payload }: { payload: string }) => {
      state.phone = payload;
    },
    changeID: (state, { payload }: { payload: string }) => {
      state.id = payload;
    },
    changeAvatarUrl: (state, { payload }: { payload: string }) => {
      state.avatarUrl = payload;
    },
    reset: (state) => {
      state.uid = null;
      state.name = '';
      state.surname = '';
      state.sexes = [
        { value: 'man', text: 'мужчина', checked: true },
        { value: 'woman', text: 'женщина', checked: false },
      ];
      state.birthday = '';
      state.isSubscribed = true;
      state.email = '';
      state.phone = '';
      state.avatarUrl = '';
    },
  },
});

const authActions = authSlice.actions;
const authReducer = authSlice.reducer;

export { authActions, authReducer };
