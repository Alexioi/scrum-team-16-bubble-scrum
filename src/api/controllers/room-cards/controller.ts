import {
  collection,
  query,
  orderBy,
  getDocs,
  startAt,
  limit,
} from 'firebase/firestore';
import z from 'zod';

import { db } from '../../initDB';

const hotelsScheme = z.array(
  z.object({
    id: z.string(),
    roomNumber: z.number(),
    price: z.number(),
    averageRating: z.number(),
    isLux: z.boolean(),
    imageNames: z.array(z.string()),
    reviews: z.number(),
    startDate: z.string(),
    endDate: z.string(),
    rules: z.array(z.string()),
    guestCount: z.number(),
    babyCount: z.number(),
    bedRoomCount: z.number(),
    bedCount: z.number(),
    bathroomCount: z.number(),
    availability: z.array(z.string()),
    additionalAmenities: z.array(z.string()),
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
