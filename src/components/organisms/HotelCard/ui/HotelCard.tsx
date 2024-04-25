import { FC } from 'react';
import Link from 'next/link';

import { Rating, Swiper, RoomInfo } from '@/components';
import { Hotel } from '@/types';
import { getPlural } from '@/helpers';

import style from './style.module.scss';

type Props = {
  hotel: Hotel;
};

const HotelCard: FC<Props> = ({
  hotel: { id, imageNames, isLux, roomNumber, price, averageRating, reviews },
}) => {
  return (
    <div className={style.card}>
      <div className={style.head}>
        <Swiper imageNames={imageNames} />
      </div>
      <Link className={style.link} href={`/rooms/${id}`}>
        <div className={style.body}>
          <RoomInfo isLux={isLux} roomNumber={roomNumber} price={price} />

          <div className={style.line} />

          <div className={style.footer}>
            <Rating rating={averageRating} />
            <div className={style.reviews}>
              {reviews}
              <span className={style.reviews_prefix}>
                {getPlural([' Отзыв', ' Отзыва', ' Отзывов'], reviews)}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export { HotelCard };
