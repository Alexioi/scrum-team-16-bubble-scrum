import z from 'zod';

const featureScheme = z.object({
  userUid: z.string(),
  roomId: z.string(),
  name: z.enum(['smile', 'flame', 'house']),
  title: z.string(),
  text: z.string(),
});

export { featureScheme };
