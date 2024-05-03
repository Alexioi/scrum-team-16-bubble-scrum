import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '@/api/initFirebase';
import { bookingScheme } from '@/schemes';
import { INCORRECT_DATA_ERROR } from '@/constants';

const getBookings = async (id: string) => {
  const q = query(collection(db, 'bookings'), where('userUid', '==', id));

  const querySnapshot = await getDocs(q);

  const result = bookingScheme.array().safeParse(
    querySnapshot.docs.map((el) => {
      return { id: el.id, ...el.data() };
    }),
  );

  if (!result.success) {
    throw new Error(INCORRECT_DATA_ERROR);
  }

  return result.data;
};

export { getBookings };
