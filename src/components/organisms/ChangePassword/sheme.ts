import { ZodFormattedError, z } from 'zod';

const formScheme = z.object({
  oldPassword: z
    .string()
    .min(1, { message: 'Это поле обязательно для заполнения' })
    .min(8, { message: 'Минимальная длина пароля 8 символов' }),
  newPassword: z
    .string()
    .min(1, { message: 'Это поле обязательно для заполнения' })
    .min(8, { message: 'Минимальная длина пароля 8 символов' }),
  repeatPassword: z
    .string()
    .min(1, { message: 'Это поле обязательно для заполнения' })
    .min(8, { message: 'Минимальная длина пароля 8 символов' }),
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
