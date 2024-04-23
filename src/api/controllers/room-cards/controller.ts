import { collection, query, orderBy, getDocs } from 'firebase/firestore';

import { hotelScheme } from '@/schemes';

import { db } from '../../initFirebase';

const getRoomCards = async () => {
  const q = query(collection(db, 'room-cards'), orderBy('roomNumber'));

  const querySnapshot = await getDocs(q);

  const result = hotelScheme.array().safeParse(
    querySnapshot.docs.map((el) => {
      return { id: el.id, ...el.data() };
    }),
  );

  if (!result.success) {
    throw new Error('некорректные данные на сервере');
  }

  return result.data;
};

export { getRoomCards };
