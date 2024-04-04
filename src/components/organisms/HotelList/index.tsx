'use client';

// import { useEffect, useState } from 'react';

import { getRoomCards } from '@/api';
import { useFetch } from '@/hooks';

import { HotelCard } from '../HotelCard';
import style from './style.module.scss';

const HotelList = () => {
  // const [data, setData] = useState<any[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState('');
  // @ts-ignore
  const { isLoading, error, response } = useFetch<any[]>([], async () => {
    const result = await getRoomCards();
    return result;
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setError('');
  //       setIsLoading(true);
  //       const x = await getRoomCards();
  //       setData(x);
  //       setIsLoading(false);
  //     } catch (err) {
  //       if (err instanceof Error) {
  //         setError(err.message);
  //       }
  //       setError('неизвестная ошибка');
  //     }
  //   };

  //   fetchData();
  // }, []);

  if (error !== '') {
    return { error };
  }

  if (isLoading) {
    return 'Загрузка...';
  }

  console.log(response);

  return (
    <div className={style.list}>
      {response.map((item) => (
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
