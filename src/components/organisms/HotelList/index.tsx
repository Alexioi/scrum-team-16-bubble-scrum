'use client';

import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  query,
  orderBy,
  getDocs,
  startAt,
  limit,
} from 'firebase/firestore';

import { HotelCard } from '../HotelCard';
import style from './style.module.scss';

const HotelList = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
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
    const page = 1;

    const q = query(
      collection(db, 'room-cards'),
      orderBy('roomNumber'),
      startAt((page - 1) * 12 + 1),
      limit(12),
    );

    async function getCities() {
      const querySnapshot = await getDocs(q);

      setData(
        querySnapshot.docs.map((el) => {
          return { id: el.id, ...el.data() };
        }),
      );
    }

    getCities();
  }, []);

  return (
    <div className={style.list}>
      {data.map((item) => (
        <HotelCard
          key={item.id}
          roomNumber={item.roomNumber}
          lux={item.lux}
          price={item.price}
          averageRating={item.averageRating}
          imageUrls={item.imageUrls}
        />
      ))}
    </div>
  );
};

export { HotelList };
