'use client';

import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { getAllHotels } from '@/store/HotelListSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { HotelCard } from '../HotelCard';
import style from './style.module.scss';

const HotelList = () => {
  const { data } = useAppSelector((state) => state.hotelList);
  const dispatch = useAppDispatch();

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

    async function getCities() {
      const citiesCol = collection(db, 'test');
      const citySnapshot = await getDocs(citiesCol);
      const cityList = citySnapshot.docs.map((doc) => doc.data());
      console.log(cityList);
      return cityList;
    }

    getCities();
  }, []);

  useEffect(() => {
    dispatch(getAllHotels());
  }, [dispatch]);

  return (
    <div className={style.list}>
      {data.map((hotel) => (
        <HotelCard hotel={hotel} key={hotel.id} />
      ))}
    </div>
  );
};

export { HotelList };
