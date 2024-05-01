import { signOut } from 'firebase/auth';

import { auth } from '../../initFirebase';

const logout = async () => {
  signOut(auth);
};

export { logout };
