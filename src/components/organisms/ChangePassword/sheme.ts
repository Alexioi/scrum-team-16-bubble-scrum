import { z } from 'zod';

const formScheme = z.object({
  oldPassrord: z.string(),
  newPassrord: z.string(),
  repeatPassword: z.string(),
});

export { formScheme };
