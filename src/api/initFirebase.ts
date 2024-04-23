import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBka4nZbcAKM_if00V5UwDCmNSWAmldueY',
  authDomain: 'bubble-scrum.firebaseapp.com',
  projectId: 'bubble-scrum',
  storageBucket: 'bubble-scrum.appspot.com',
  messagingSenderId: '525026535335',
  appId: '1:525026535335:web:cb05321bfd1b41f9107882',
  measurementId: 'G-1Y4V34D1YP',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };
