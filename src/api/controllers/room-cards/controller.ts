import { collection, query, orderBy, getDocs, where } from 'firebase/firestore';

import { INCORRECT_DATA_ERROR } from '@/constants';
import { hotelScheme } from '@/schemes';

import { db } from '../../initFirebase';

const getRoomCards = async () => {
  const q = query(collection(db, 'room-cards'), orderBy('roomNumber'));

  const querySnapshot = await getDocs(q);

  const result = hotelScheme.array().safeParse(
    await Promise.all(
      querySnapshot.docs.map(async (el) => {
        const bookingQuery = query(
          collection(db, 'bookings'),
          where('roomId', '==', el.id),
        );

        const bookingQuerySnapshot = await getDocs(bookingQuery);

        const userUid = bookingQuerySnapshot.docs.map((subEl) => {
          return subEl.data().userUid;
        })[0];

        return {
          id: el.id,
          ...el.data(),
          bookingUserId: userUid,
        };
      }),
    ),
  );

  if (!result.success) {
    throw new Error(INCORRECT_DATA_ERROR);
  }

  return result.data;
};

export { getRoomCards };
