import {
  collection,
  getDocs,
  query,
  where,
  getDoc,
  doc,
} from 'firebase/firestore';

import { db } from '@/api/initFirebase';
import { bookingScheme, hotelScheme } from '@/schemes';
import { INCORRECT_DATA_ERROR } from '@/constants';

const getBookings = async (id: string) => {
  const q = query(collection(db, 'bookings'), where('userUid', '==', id));

  const querySnapshot = await getDocs(q);

  const result = bookingScheme
    .and(hotelScheme)
    .array()
    .safeParse(
      await Promise.all(
        querySnapshot.docs.map(async (el) => {
          const ref = doc(db, 'room-cards', el.data().roomId);

          const roomQuerySnapshot = await getDoc(ref);

          return { ...roomQuerySnapshot.data(), id: el.id, ...el.data() };
        }),
      ),
    );

  if (!result.success) {
    throw new Error(INCORRECT_DATA_ERROR);
  }

  return result.data;
};

export { getBookings };
