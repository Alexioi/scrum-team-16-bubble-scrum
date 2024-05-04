'use client';

import { useEffect, useState } from 'react';

import { Card, ErrorMessage, HotelCardSkeleton } from '@/components';
import { useAppSelector } from '@/hooks';
import { selectUID } from '@/store';
import { getBookings } from '@/api';
import { Booking, Hotel } from '@/types';

import { BookingCard } from './BookingCard';
import style from './style.module.scss';

const BookingList = () => {
  const uid = useAppSelector(selectUID);
  const [data, setData] = useState<(Booking & Hotel)[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const handleBookingCardCancelClick = (id: string) => {
    setData(
      data.filter((item) => {
        return item.id !== id;
      }),
    );
  };

  useEffect(() => {
    const getData = async () => {
      if (uid === null) {
        return;
      }

      try {
        setIsLoading(true);
        setError('');
        const result = await getBookings(uid);

        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [uid]);

  if (uid === null) {
    return null;
  }

  if (isLoading) {
    return (
      <Card>
        <div className={style.list}>
          {new Array(5)
            .fill(undefined)
            .map((_, i) => i)
            .map((item) => (
              <HotelCardSkeleton key={item} />
            ))}
        </div>
      </Card>
    );
  }

  if (error !== '') {
    return (
      <Card>
        <ErrorMessage message="Произошла ошибка" description={error} />
      </Card>
    );
  }

  if (data.length === 0) {
    return (
      <Card>
        <ErrorMessage
          message="Пока что тут пусто"
          description="Забронируйте хотя бы один номер"
        />
      </Card>
    );
  }

  return (
    <Card>
      <div className={style.list}>
        {data.map((item) => {
          return (
            <BookingCard
              key={item.roomId}
              id={item.id}
              roomId={item.roomId}
              startDate={item.startDate}
              endDate={item.endDate}
              guestCount={item.guestCount}
              babyCount={item.babyCount}
              price={item.price}
              roomNumber={item.roomNumber}
              imageNames={item.imageNames}
              onClickCancel={handleBookingCardCancelClick}
            />
          );
        })}
      </div>
    </Card>
  );
};

export { BookingList };
