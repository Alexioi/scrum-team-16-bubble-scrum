import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '@/api/initFirebase';
import { bookingScheme } from '@/schemes';
import { INCORRECT_DATA_ERROR } from '@/constants';

const getBooking = async (id: string) => {
  const q = query(collection(db, 'bookings'), where('roomId', '==', id));

  const querySnapshot = await getDocs(q);

  const result = bookingScheme.safeParse(
    querySnapshot.docs.map((el) => {
      return el.data();
    })[0],
  );

  if (!result.success) {
    throw new Error(INCORRECT_DATA_ERROR);
  }

  return result.data;
};

export { getBooking };
