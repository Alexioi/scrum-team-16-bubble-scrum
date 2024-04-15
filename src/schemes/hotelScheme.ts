import z from 'zod';

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
    rules: z.object({
      isSmoke: z.boolean(),
      isAnimals: z.boolean(),
      isLotOfGuests: z.boolean(),
    }),
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
  }),
);

export { hotelsScheme };
