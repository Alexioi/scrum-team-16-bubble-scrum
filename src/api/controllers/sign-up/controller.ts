import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

import { auth, db } from '../../initFirebase';

const createNewUser = async (
  name: string,
  surname: string,
  sex: string,
  birthday: string,
  email: string,
  password: string,
  isSubscribed: boolean,
) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  const { uid } = result.user;

  const usersInfoCollection = collection(db, 'users-info');

  addDoc(usersInfoCollection, {
    uid,
    name,
    surname,
    sex,
    birthday,
    isSubscribed,
  });

  return { uid };
};

export { createNewUser };
