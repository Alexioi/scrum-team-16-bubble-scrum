import {
  collection,
  query,
  orderBy,
  getDocs,
  startAt,
  limit,
} from 'firebase/firestore';

import { db } from '../../config';

const getRoomCards = async () => {
  const page = 1;

  const q = query(
    collection(db, 'room-cards'),
    orderBy('roomNumber'),
    startAt((page - 1) * 12 + 1),
    limit(12),
  );

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((el) => {
    return { id: el.id, ...el.data() };
  });
};

export { getRoomCards };
