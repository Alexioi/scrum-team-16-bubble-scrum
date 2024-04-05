'use client';

import { useEffect, useState } from 'react';

import { getRoomCards } from '@/api';
import { RootState } from '@/store';
import { useAppSelector } from '@/hooks';

import { HotelCard } from '../HotelCard';
import style from './style.module.scss';

const HotelList = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const currentPage = useAppSelector(
    (state: RootState) => state.pagination.currentPage,
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError('');
        setIsLoading(true);
        const roomCards = await getRoomCards(currentPage);
        setData(roomCards);
        setIsLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
        setError('неизвестная ошибка');
      }
    };

    fetchData();
  }, [currentPage]);

  if (error !== '') {
    return <span>{error}</span>;
  }

  if (isLoading) {
    return 'Загрузка...';
  }

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
