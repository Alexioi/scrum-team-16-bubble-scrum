import { auth } from '@/api/initFirebase';
import { updatePassword as updateFirebasePassword } from 'firebase/auth';

import { login } from '../sing-in';

const updatePassword = async (oldPassword: string, newPassword: string) => {
  const user = auth.currentUser;
  if (user !== null) {
    try {
      await login(user.email || '', oldPassword);
    } catch {
      throw new Error('Пароль введён неверно');
    }

    try {
      await updateFirebasePassword(user, newPassword);
    } catch {
      throw new Error('Произошла ошибка при изменении пароля');
    }
  }
};

export { updatePassword };
