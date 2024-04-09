import {
  collection,
  query,
  orderBy,
  getDocs,
  startAt,
  limit,
} from 'firebase/firestore';

import { ITEMS_PER_PAGE } from '@/constants';
import { hotelsScheme } from '@/schemes';

import { db } from '../../initFirebase';

const getRoomCards = async (currentPage: number) => {
  const q = query(
    collection(db, 'room-cards'),
    orderBy('roomNumber'),
    startAt((currentPage - 1) * ITEMS_PER_PAGE + 1),
    limit(ITEMS_PER_PAGE),
  );

  const querySnapshot = await getDocs(q);

  const result = hotelsScheme.safeParse(
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
