'use client';

import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  getDocs,
  collection,
  // addDoc,
} from 'firebase/firestore/lite';

// import { getAllHotels } from '@/store/HotelListSlice';
// import { useAppDispatch, useAppSelector } from '@/hooks';

import { Hotel, HotelCard } from '../HotelCard';
import style from './style.module.scss';

const HotelList = () => {
  const [data, setData] = useState<Hotel[]>([]);
  // const { data } = useAppSelector((state) => state.hotelList);
  // const dispatch = useAppDispatch();

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
    // const citiesRef = collection(db, 'test');
    // const q = query(citiesRef, where('rrr', '==', 'www'));

    async function getCities() {
      const citiesCol = collection(db, 'room-cards');

      // await addDoc(citiesCol, {
      //   averageRating: 4.4,
      //   imageUrls: ['iurl1'],
      //   lux: true,
      //   price: 1000,
      //   reviews: 100,
      //   roomNumber: 1,
      // });

      const citySnapshot = await getDocs(citiesCol);
      const cityList = citySnapshot.docs.map((doc) => doc.data());
      console.log(cityList);

      // @ts-ignore
      setData(cityList);
      // console.log(cityList);
      // return cityList;
    }

    getCities();
  }, []);

  return (
    <div className={style.list}>
      {data.map((item) => (
        <HotelCard
          roomNumber={item.roomNumber}
          lux={item.lux}
          price={item.price}
          averageRating={item.averageRating}
          imageUrls={item.imageUrls}
          key={item.roomNumber}
        />
      ))}
    </div>
  );
};

export { HotelList };
