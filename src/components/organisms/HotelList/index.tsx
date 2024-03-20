'use client';
import { useEffect } from 'react';

import { getAllHotels } from '@/store/HotelListSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { HotelCard } from '../HotelCard';

import style from './style.module.scss';

const HotelList = () => {
  const { data } = useAppSelector((state) => state.hotelList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllHotels());
  }, []);

  return (
    <div className={style.list}>
      {data.map((hotel) => (
        <HotelCard hotel={hotel} key={hotel.id} />
      ))}
    </div>
  );
};

export default HotelList;
