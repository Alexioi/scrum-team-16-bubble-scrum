'use client';

import { useEffect, useState } from 'react';

import { getRoomCards } from '@/api';
import { RootState } from '@/store';
import { useAppSelector } from '@/hooks';

import { HotelCard, Hotel } from '../HotelCard';
import style from './style.module.scss';

const HotelList = () => {
  const [data, setData] = useState<(Hotel & { id: string })[]>([]);
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
        // @ts-ignore
        setData(roomCards);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
          return;
        }
        setError('неизвестная ошибка');
      } finally {
        setIsLoading(false);
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
          isLux={item.isLux}
          price={item.price}
          averageRating={item.averageRating}
          imageNames={item.imageNames}
          reviews={item.reviews}
        />
      ))}
    </div>
  );
};

export { HotelList };
