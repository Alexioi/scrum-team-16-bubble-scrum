import z from 'zod';

const commentScheme = z.object({
  id: z.string(),
  userUid: z.string(),
  roomId: z.string(),
  content: z.string(),
  date: z.object({
    seconds: z.number(),
    nanoseconds: z.number(),
  }),
  likes: z.array(z.string()),
});

const commentsScheme = z.array(commentScheme);

export { commentScheme, commentsScheme };
