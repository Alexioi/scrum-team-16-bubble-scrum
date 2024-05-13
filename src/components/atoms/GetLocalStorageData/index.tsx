'use client';

import { ReactNode, FC, useEffect } from 'react';

import { useAppDispatch } from '@/hooks';
import { authActions } from '@/store';
import { getUserInfo, auth } from '@/api';

type Props = {
  children: ReactNode;
};

const GetLocalStorageData: FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async () => {
      const result = await getUserInfo();

      if (result == null) {
        dispatch(authActions.changeUID(''));
        return;
      }

      const {
        uid,
        name,
        surname,
        sex,
        birthday,
        isSubscribed,
        email,
        phone,
        id,
      } = result;

      dispatch(authActions.changeUID(uid));
      dispatch(authActions.changeName(name));
      dispatch(authActions.changeSurname(surname));
      dispatch(authActions.changeSexByName(sex));
      dispatch(authActions.changeBirthday(birthday));
      dispatch(authActions.changeIsSubscribed(isSubscribed));
      dispatch(authActions.changeEmail(email));
      dispatch(authActions.changePhone(phone === undefined ? '' : phone));
      dispatch(authActions.changeID(id));
    });
  }, [dispatch]);

  return children;
};

export { GetLocalStorageData };
