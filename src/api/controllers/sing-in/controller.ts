import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../initFirebase';

const login = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export { login };
