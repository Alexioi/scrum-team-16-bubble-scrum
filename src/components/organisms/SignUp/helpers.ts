import z from 'zod';

const validateInputs = (name: string, surname: string, password: string) => {
  const nameSchema = z
    .string()
    .min(2)
    .max(50)
    .regex(/^[A-ZА-Я][a-zа-я]+$/);
  const passwordSchema = z
    .string()
    .min(8)
    .max(20)
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/);

  const resultName = nameSchema.safeParse(name);

  if (!resultName.success) {
    throw new Error(
      'Имя должно начинаться с большой буквы и содержать только буквы',
    );
  }

  const resultSurname = nameSchema.safeParse(surname);

  if (!resultSurname.success) {
    throw new Error(
      'Фамилия должна начинаться с большой буквы и содержать только буквы',
    );
  }

  const resultPassword = passwordSchema.safeParse(password);

  if (!resultPassword.success) {
    throw new Error(
      `Длина пароля от 8 до 20 символов.
      Содержит как минимум одну цифру.
      Содержит как минимум одну строчную букву.
      Содержит как минимум одну заглавную букву.
      Содержит как минимум один из специальных символов: !@#$%^&*.`,
    );
  }
};

export { validateInputs };
