import {
  collection,
  query,
  getCountFromServer,
  where,
} from 'firebase/firestore';

import { db } from '../../initFirebase';

const getRoomCardsCount = async () => {
  const q = query(collection(db, 'room-cards'), where('guestCount', '>=', 4));

  const snapshot = await getCountFromServer(q);

  return snapshot.data().count;
};

export { getRoomCardsCount };
