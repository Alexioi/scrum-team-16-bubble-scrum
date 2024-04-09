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

export { hotelsScheme };
