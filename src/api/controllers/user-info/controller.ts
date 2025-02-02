import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from 'firebase/firestore';

import { INCORRECT_DATA_ERROR } from '@/constants';
import { userInfoScheme } from '@/schemes';

import { auth, db } from '../../initFirebase';

const getOtherUserInfo = async (uid: string) => {
  const usersInfoCollection = collection(db, 'users-info');

  const q = query(usersInfoCollection, where('uid', '==', uid));

  const querySnapshot = await getDocs(q);

  const result = userInfoScheme.safeParse(
    querySnapshot.docs.map((el) => {
      return { id: el.id, ...el.data() };
    })[0],
  );

  if (!result.success) {
    throw new Error(INCORRECT_DATA_ERROR);
  }

  return { uid, ...result.data };
};

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
      return { id: el.id, ...el.data() };
    })[0],
  );

  if (!result.success) {
    throw new Error(INCORRECT_DATA_ERROR);
  }

  return { uid: user.uid, email: user.email, ...result.data };
};

const changePhone = async (id: string, phone: string) => {
  await updateDoc(doc(db, 'users-info', id), { phone });
};

const changeAvatar = async (id: string, avatarUrl: string) => {
  const docRef = doc(db, 'users-info', id);

  await updateDoc(docRef, {
    avatarUrl,
  });
};

export { getUserInfo, changePhone, changeAvatar, getOtherUserInfo };
