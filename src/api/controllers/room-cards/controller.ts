import {
  collection,
  query,
  orderBy,
  getDocs,
  where,
  limit,
  startAfter,
} from 'firebase/firestore';

import { ITEMS_PER_PAGE } from '@/constants';
import { hotelsScheme } from '@/schemes';

import { db } from '../../initFirebase';

const getRoomCards = async (
  direction: 'back' | 'next',
  firstOrLastItemIndex: number,
) => {
  const q = query(
    collection(db, 'room-cards'),
    orderBy('roomNumber', direction === 'next' ? 'asc' : 'desc'),
    where('guestCount', '>=', 4),
    startAfter(firstOrLastItemIndex),
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

  return result.data.sort((a, b) => {
    return a.roomNumber - b.roomNumber;
  });
};

export { getRoomCards };
