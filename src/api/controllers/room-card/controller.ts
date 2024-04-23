import { getDoc, doc } from 'firebase/firestore';

import { hotelScheme } from '@/schemes';

import { db } from '../../initFirebase';

const getRoomCard = async (id: string) => {
  const docRef = doc(db, 'room-cards', id);
  const querySnapshot = await getDoc(docRef);

  const result = hotelScheme.safeParse({
    id: querySnapshot.id,
    ...querySnapshot.data(),
  });

  if (!result.success) {
    throw new Error('некорректные данные на сервере');
  }

  return result.data;
};

export { getRoomCard };
