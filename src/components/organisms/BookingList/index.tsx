'use client';

import Link from 'next/link';
import { useEffect, useState, MouseEvent, FC } from 'react';

import { Card, Button } from '@/components';
import { useAppSelector } from '@/hooks';
import { selectUID } from '@/store';
import { deleteBooking, getBookings } from '@/api';
import { Booking } from '@/types';

type Props = {
  id: string;
  roomId: string;
  startDate: string;
  endDate: string;
  guestCount: number;
  babyCount: number;
  price: number;
  onClickCancel(id: string): void;
};

const BookingCard: FC<Props> = ({
  id,
  roomId,
  startDate,
  endDate,
  guestCount,
  babyCount,
  price,
  onClickCancel,
}) => {
  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteBooking(id);
    onClickCancel(id);
  };

  return (
    <Link href={`/rooms/${roomId}`}>
      <Card>
        <div>
          c {startDate} по {endDate}
        </div>
        <div>
          Гостей: {guestCount} Детей: {babyCount}
        </div>
        <div>
          Стоимость: {price}
          <Button text="Отменить" onClick={handleButtonClick} />
        </div>
      </Card>
    </Link>
  );
};

const BookingList = () => {
  const uid = useAppSelector(selectUID);
  const [data, setData] = useState<Booking[]>([]);
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
    return 'loading';
  }

  if (error !== '') {
    return error;
  }

  return (
    <Card>
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
            onClickCancel={handleBookingCardCancelClick}
          />
        );
      })}
    </Card>
  );
};

export { BookingList };
