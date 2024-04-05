import {
  collection,
  query,
  orderBy,
  getDocs,
  startAt,
  limit,
} from 'firebase/firestore';

import { db } from '../../config';

const ITEMS_ON_PAGE = 12;

const getRoomCards = async (currentPage: number) => {
  const q = query(
    collection(db, 'room-cards'),
    orderBy('roomNumber'),
    startAt((currentPage - 1) * ITEMS_ON_PAGE + 1),
    limit(ITEMS_ON_PAGE),
  );

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((el) => {
    return { id: el.id, ...el.data() };
  });
};

export { getRoomCards };
