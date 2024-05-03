import z from 'zod';

const hotelScheme = z.object({
  id: z.string(),
  roomNumber: z.number(),
  price: z.number(),
  averageRating: z.number(),
  isLux: z.boolean(),
  imageNames: z.array(z.string()),
  reviews: z.object({
    great: z.number(),
    good: z.number(),
    satisfactorily: z.number(),
    bad: z.number(),
  }),
  startDate: z.string(),
  endDate: z.string(),
  guestCount: z.number(),
  babyCount: z.number(),
  bedRoomCount: z.number(),
  bedCount: z.number(),
  bathroomCount: z.number(),
  availability: z.object({
    isWideCorridor: z.boolean(),
    isAssistant: z.boolean(),
  }),
  additionalAmenities: z.object({
    isBreakfast: z.boolean(),
    isDesk: z.boolean(),
    isHighChair: z.boolean(),
    isCrib: z.boolean(),
    isTv: z.boolean(),
    isShampoo: z.boolean(),
  }),
  rules: z.object({
    isSmoke: z.boolean(),
    isAnimals: z.boolean(),
    isLotOfGuests: z.boolean(),
  }),
  discount: z.number(),
  additionalServices: z.number(),
  bookingUserId: z.undefined().or(z.string()),
});

export { hotelScheme };
