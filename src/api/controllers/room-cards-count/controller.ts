import { collection, query, getCountFromServer } from 'firebase/firestore';

import { db } from '../../config';

const getRoomCardsCount = async () => {
  const q = query(collection(db, 'room-cards'));

  const snapshot = await getCountFromServer(q);

  return snapshot.data().count;
};

export { getRoomCardsCount };
