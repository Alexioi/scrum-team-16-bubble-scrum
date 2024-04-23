import z from 'zod';

const commentScheme = z.object({
  id: z.string(),
  userUid: z.string(),
  roomId: z.string(),
  content: z.string(),
  date: z.string(),
  likes: z.array(z.string()),
});

export { commentScheme };
