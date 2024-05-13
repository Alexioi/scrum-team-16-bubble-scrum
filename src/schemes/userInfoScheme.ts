import z from 'zod';

const userInfoScheme = z.object({
  id: z.string(),
  name: z.string(),
  surname: z.string(),
  sex: z.string(),
  birthday: z.string(),
  isSubscribed: z.boolean(),
  phone: z.string().or(z.undefined()),
});

export { userInfoScheme };
