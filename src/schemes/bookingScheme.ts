import z from 'zod';

const bookingScheme = z.object({
  id: z.string(),
  roomId: z.string(),
  userUid: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  babyCount: z.number(),
  guestCount: z.number(),
  price: z.number(),
});

export { bookingScheme };
