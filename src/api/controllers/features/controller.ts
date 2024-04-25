import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '@/api/initFirebase';
import { INCORRECT_DATA_ERROR } from '@/constants';
import { featureScheme } from '@/schemes';

const getFeaturesByRoomId = async (id: string) => {
  const q = query(collection(db, 'features'), where('roomId', '==', id));

  const querySnapshot = await getDocs(q);

  const result = featureScheme.array().safeParse(
    querySnapshot.docs.map((el) => {
      return { id: el.id, ...el.data() };
    }),
  );

  if (!result.success) {
    throw new Error(INCORRECT_DATA_ERROR);
  }

  return result.data;
};

export { getFeaturesByRoomId };
