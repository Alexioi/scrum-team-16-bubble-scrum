import {
  collection,
  query,
  orderBy,
  getDocs,
  startAt,
  limit,
} from 'firebase/firestore';
import z from 'zod';

import { db } from '../../config';

const hotelsScheme = z.array(
  z.object({
    id: z.string(),
    roomNumber: z.number(),
    price: z.number(),
    averageRating: z.number(),
    isLux: z.boolean(),
    imageUrls: z.array(z.number()),
    reviews: z.number(),
  }),
);

const ITEMS_ON_PAGE = 12;

const getRoomCards = async (currentPage: number) => {
  const q = query(
    collection(db, 'room-cards'),
    orderBy('roomNumber'),
    startAt((currentPage - 1) * ITEMS_ON_PAGE + 1),
    limit(ITEMS_ON_PAGE),
  );

  const querySnapshot = await getDocs(q);

  const result = hotelsScheme.safeParse(
    querySnapshot.docs.map((el) => {
      return { id: el.id, ...el.data() };
    }),
  );

  if (!result.success) {
    throw new Error('некорректные данные на сервере');
  }

  return result.data;
};

export { getRoomCards };
