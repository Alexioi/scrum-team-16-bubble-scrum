'use client';

import Link from 'next/link';
import { MouseEvent, FC } from 'react';

import { Card, Button, Swiper } from '@/components';
import { deleteBooking } from '@/api';

import style from './style.module.scss';

type Props = {
  id: string;
  roomId: string;
  startDate: string;
  endDate: string;
  guestCount: number;
  babyCount: number;
  price: number;
  roomNumber: number;
  imageNames: string[];
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
  roomNumber,
  imageNames,
  onClickCancel,
}) => {
  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteBooking(id);
    onClickCancel(id);
  };

  return (
    <div className={style.item}>
      <Card>
        <div className={style.swiper}>
          <Swiper imageNames={imageNames} />
        </div>
        <Link href={`/rooms/${roomId}`} className={style.link}>
          <div>№ {roomNumber}</div>
          <div>
            c {startDate} по {endDate}
          </div>
          <div>
            Гостей: {guestCount} Детей: {babyCount}
          </div>
          <div>
            Стоимость: {price}
            <Button theme="link" text="Отменить" onClick={handleButtonClick} />
          </div>
        </Link>
      </Card>
    </div>
  );
};

export { BookingCard };
