import { collection, addDoc } from 'firebase/firestore';

import { db } from '../../initFirebase';

const createBooking = async (
  userUid: string,
  roomId: string,
  price: number,
  guestCount: number,
  babyCount: number,
  startDate: string,
  endDate: string,
) => {
  const usersInfoCollection = collection(db, 'bookings');

  addDoc(usersInfoCollection, {
    userUid,
    roomId,
    price,
    guestCount,
    babyCount,
    startDate,
    endDate,
  });
};

export { createBooking };
