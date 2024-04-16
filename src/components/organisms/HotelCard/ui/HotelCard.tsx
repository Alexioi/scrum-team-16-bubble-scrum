import { FC } from 'react';
import Link from 'next/link';

import { Rating, Swiper } from '@/components/atoms';
import { Hotel } from '@/types';

import { declensionReview } from '../lib/declensionReview';
import style from './style.module.scss';

type Props = {
  hotel: Hotel;
};

const HotelCard: FC<Props> = ({
  hotel: { imageNames, isLux, roomNumber, price, averageRating, reviews },
}) => {
  return (
    <div className={style.card}>
      <Swiper imageNames={imageNames} />
      <Link className={style.link} href={`/rooms/${roomNumber}`}>
        <div className={style.body}>
          <div className={style.header}>
            <div className={style.number}>
              <span className={style.number_icon}>№ </span>
              {roomNumber}
              {isLux && <span className={style.luxury}>ЛЮКС</span>}
            </div>

            <div className={style.price}>
              {price.toLocaleString('ru')}₽
              <span className={style.price_prefix}> в сутки</span>
            </div>
          </div>

          <div className={style.line} />

          <div className={style.footer}>
            <Rating rating={averageRating} />
            <div className={style.reviews}>
              {reviews}
              <span className={style.reviews_prefix}>
                {declensionReview(reviews)}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export { HotelCard };
export type { Hotel };
