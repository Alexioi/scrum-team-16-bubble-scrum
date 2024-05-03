import { signOut as firebaseSingOut } from 'firebase/auth';

import { auth } from '../../initFirebase';

const signOut = async () => {
  firebaseSingOut(auth);
};

export { signOut };
