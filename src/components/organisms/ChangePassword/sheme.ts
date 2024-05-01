import { passwordScheme } from '@/schemes';
import { ZodFormattedError, z } from 'zod';

const formScheme = z.object({
  oldPassword: z
    .string()
    .min(1, { message: 'Это поле обязательно для заполнения' }),
  newPassword: passwordScheme,
  repeatPassword: passwordScheme,
});

type FormErrors = ZodFormattedError<
  {
    oldPassword: string;
    newPassword: string;
    repeatPassword: string;
  },
  string
>;

export { formScheme };
export type { FormErrors };
