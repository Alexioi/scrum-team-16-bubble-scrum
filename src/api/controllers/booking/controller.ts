import {
  collection,
  getDocs,
  query,
  where,
  doc,
  deleteDoc,
} from 'firebase/firestore';

import { db } from '@/api/initFirebase';
import { bookingScheme } from '@/schemes';

const getBooking = async (id: string) => {
  const q = query(collection(db, 'bookings'), where('roomId', '==', id));

  const querySnapshot = await getDocs(q);

  const result = bookingScheme.safeParse(
    querySnapshot.docs.map((el) => {
      return { id: el.id, ...el.data() };
    })[0],
  );

  if (!result.success) {
    return null;
  }

  return result.data;
};

const deleteBooking = async (id: string) => {
  await deleteDoc(doc(db, 'bookings', id));
};

export { getBooking, deleteBooking };
