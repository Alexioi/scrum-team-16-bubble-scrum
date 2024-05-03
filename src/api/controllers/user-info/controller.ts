import { collection, query, where, getDocs } from 'firebase/firestore';

import { INCORRECT_DATA_ERROR } from '@/constants';
import { userInfoScheme } from '@/schemes';

import { auth, db } from '../../initFirebase';

const getUserInfo = async () => {
  const user = auth.currentUser;

  if (user === null || user.email === null) {
    return null;
  }

  const usersInfoCollection = collection(db, 'users-info');

  const q = query(usersInfoCollection, where('uid', '==', user.uid));

  const querySnapshot = await getDocs(q);

  const result = userInfoScheme.safeParse(
    querySnapshot.docs.map((el) => {
      return { ...el.data() };
    })[0],
  );

  if (!result.success) {
    throw new Error(INCORRECT_DATA_ERROR);
  }

  return { uid: user.uid, email: user.email, ...result.data };
};

export { getUserInfo };
