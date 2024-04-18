import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';

import { userInfoScheme } from '@/schemes';

import { auth, db } from '../../initFirebase';

const getUserData = async (email: string, password: string) => {
  const SignInResult = await signInWithEmailAndPassword(auth, email, password);
  const { uid } = SignInResult.user;

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

export { getUserData };
