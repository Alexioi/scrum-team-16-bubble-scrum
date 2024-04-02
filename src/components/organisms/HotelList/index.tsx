'use client';

import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from 'firebase/database';

import { getAllHotels } from '@/store/HotelListSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { HotelCard } from '../HotelCard';
import style from './style.module.scss';

const firebaseConfig = {
  apiKey: 'AIzaSyBka4nZbcAKM_if00V5UwDCmNSWAmldueY',
  authDomain: 'bubble-scrum.firebaseapp.com',
  databaseURL: 'https://bubble-scrum.europe-west1.firebaseio.com',
  projectId: 'bubble-scrum',
  storageBucket: 'bubble-scrum.appspot.com',
  messagingSenderId: '525026535335',
  appId: '1:525026535335:web:cb05321bfd1b41f9107882',
  measurementId: 'G-1Y4V34D1YP',
};

const app = initializeApp(firebaseConfig);

const HotelList = () => {
  const { data } = useAppSelector((state) => state.hotelList);
  const dispatch = useAppDispatch();

  const dbRef = ref(getDatabase(app));

  const x = async () => {
    await get(child(dbRef, 'test'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  x();

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
