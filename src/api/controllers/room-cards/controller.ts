import { collection, query, orderBy, getDocs } from 'firebase/firestore';

import { hotelsScheme } from '@/schemes';
import { INCORRECT_DATA_ERROR } from '@/constants';

import { db } from '../../initFirebase';

const getRoomCards = async () => {
  const q = query(collection(db, 'room-cards'), orderBy('roomNumber'));

  const querySnapshot = await getDocs(q);

  const result = hotelsScheme.safeParse(
    querySnapshot.docs.map((el) => {
      return { id: el.id, ...el.data() };
    }),
  );

  if (!result.success) {
    throw new Error(INCORRECT_DATA_ERROR);
  }

  return result.data;
};

export { getRoomCards };
