import { collection, query, getDocs } from 'firebase/firestore';

import { hotelsScheme } from '@/schemes';

import { db } from '../../initFirebase';

const getRoomCards = async () => {
  const q = query(collection(db, 'room-cards'));

  const querySnapshot = await getDocs(q);

  const result = hotelsScheme.safeParse(
    querySnapshot.docs.map((el) => {
      return { id: el.id, ...el.data() };
    }),
  );

  if (!result.success) {
    throw new Error('некорректные данные на сервере');
  }

  return result.data.sort((a, b) => {
    return a.roomNumber - b.roomNumber;
  });
};

export { getRoomCards };
