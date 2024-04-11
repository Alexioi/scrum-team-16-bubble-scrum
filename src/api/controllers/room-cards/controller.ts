import {
  collection,
  query,
  orderBy,
  getDocs,
  startAt,
  limit,
  where,
} from 'firebase/firestore';

import { ITEMS_PER_PAGE } from '@/constants';
import { hotelsScheme } from '@/schemes';
import { Filters } from '@/store';

import { db } from '../../initFirebase';
import { generateWhereFromCheckbox } from './helpers';

const getRoomCards = async (currentPage: number, filters: Filters) => {
  const q = query(
    collection(db, 'room-cards'),
    orderBy('roomNumber'),
    startAt((currentPage - 1) * ITEMS_PER_PAGE + 1),
    limit(ITEMS_PER_PAGE),
    where('price', '>=', filters.rangePrices[0]),
    where('price', '<=', filters.rangePrices[1]),
    where(
      'guestCount',
      '>=',
      filters.guests.items[0].counter + filters.guests.items[1].counter,
    ),
    where('babyCount', '>=', filters.guests.items[2].counter),
    where('price', '<=', filters.rangePrices[1]),
    ...generateWhereFromCheckbox('rules', filters.rulesList),
    ...generateWhereFromCheckbox('additionalAmenities', filters.expandableList),
    ...generateWhereFromCheckbox('availability', filters.availabilityList),
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
