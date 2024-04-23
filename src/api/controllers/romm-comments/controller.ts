import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';

import { db } from '@/api/initFirebase';
import { INCORRECT_DATA_ERROR } from '@/constants';
import { commentsScheme } from '@/schemes';

const getCommentsByRoomId = async (id: string) => {
  const q = query(
    collection(db, 'room-comments'),
    orderBy('date', 'desc'),
    where('roomId', '==', id),
  );

  const querySnapshot = await getDocs(q);

  const result = commentsScheme.safeParse(
    querySnapshot.docs.map((el) => {
      return { id: el.id, ...el.data() };
    }),
  );

  if (!result.success) {
    throw new Error(INCORRECT_DATA_ERROR);
  }

  return result.data;
};

export { getCommentsByRoomId };
