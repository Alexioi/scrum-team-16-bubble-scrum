import {
  collection,
  query,
  orderBy,
  getDocs,
  limit,
  startAfter,
} from 'firebase/firestore';

import { ITEMS_PER_PAGE } from '@/constants';
import { hotelsScheme } from '@/schemes';
import { Filters } from '@/store';

import { db } from '../../initFirebase';
import { generateFilters } from './helpers';

const getRoomCards = async (
  direction: 'back' | 'next',
  firstOrLastItemIndex: number,
  filters: Filters,
) => {
  const q = query(
    collection(db, 'room-cards'),
    orderBy('roomNumber', direction === 'next' ? 'asc' : 'desc'),
    ...generateFilters(filters),
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
