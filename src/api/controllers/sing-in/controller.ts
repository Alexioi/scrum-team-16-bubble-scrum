import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';

import { auth, db } from '../../initFirebase';

const getUserData = async (email: string, password: string) => {
  const singInResult = await signInWithEmailAndPassword(auth, email, password);
  const { uid } = singInResult.user;

  const usersInfoCollection = collection(db, 'users-info');

  const q = query(usersInfoCollection, where('uid', '==', uid));

  const querySnapshot: any = await getDocs(q);

  const { name, surname, sex, birthday, isSubscribed } = querySnapshot.docs.map(
    (item: { data: () => any }) => {
      return { ...item.data() };
    },
  )[0];

  return { uid, name, surname, sex, birthday, isSubscribed };
};

export { getUserData };
