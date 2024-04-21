import { db } from '@/api/initFirebase';

import { commentsScheme } from '@/schemes';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';

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
    throw new Error('некорректные данные на сервере');
  }

  return result.data;
};

export { getCommentsByRoomId };
