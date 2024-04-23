import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';

import { userInfoScheme } from '@/schemes';

import { auth, db } from '../../initFirebase';

const getUserInfo = async (uid: string) => {
  const usersInfoCollection = collection(db, 'users-info');

  const q = query(usersInfoCollection, where('uid', '==', uid));

  const querySnapshot = await getDocs(q);

  const result = userInfoScheme.safeParse(
    querySnapshot.docs.map((el) => {
      return { ...el.data() };
    })[0],
  );

  if (!result.success) {
    throw new Error('некорректные данные на сервере');
  }

  return { uid, ...result.data };
};

const login = async (email: string, password: string) => {
  const signInResult = await signInWithEmailAndPassword(auth, email, password);
  const { uid } = signInResult.user;

  const result = await getUserInfo(uid);

  return result;
};

export { getUserInfo, login };