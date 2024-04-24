'use client';

import { ReactNode, FC, useEffect } from 'react';

import { useAppDispatch } from '@/hooks';
import { authActions } from '@/store';
import { getUserInfo } from '@/api';

type Props = {
  children: ReactNode;
};

const GetLocalStorageData: FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getUserData = async (uid: string) => {
      const { name, surname, sex, birthday, isSubscribed } =
        await getUserInfo(uid);

      dispatch(authActions.changeUID(uid));
      dispatch(authActions.changeName(name));
      dispatch(authActions.changeSurname(surname));
      dispatch(authActions.changeSexByName(sex));
      dispatch(authActions.changeBirthday(birthday));
      dispatch(authActions.changeIsSubscribed(isSubscribed));
    };

    const uid = localStorage.getItem('uid');

    if (typeof uid === 'string') {
      localStorage.setItem('uid', uid);
      getUserData(uid);
    } else {
      dispatch(authActions.changeUID(''));
    }
  }, [dispatch]);

  return children;
};

export { GetLocalStorageData };
