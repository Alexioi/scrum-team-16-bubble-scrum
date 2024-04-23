import z from 'zod';

const userInfoScheme = z.object({
  name: z.string(),
  surname: z.string(),
  sex: z.string(),
  birthday: z.string(),
  isSubscribed: z.boolean(),
});

export { userInfoScheme };
