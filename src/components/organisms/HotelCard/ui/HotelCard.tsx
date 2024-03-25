import { FC } from 'react';

import { Rating, Swiper } from '@/components/atoms';

import { Hotel } from '../type';
import { declensionReview } from '../lib/declensionReview';

import style from './style.module.scss';

type Props = {
  hotel: Hotel;
};

const HotelCard: FC<Props> = ({ hotel }) => {
  return (
    <div className={style.card}>
      <Swiper imageURLs={hotel.images} />

      <div className={style.body}>
        <div className={style.header}>
          <div className={style.number}>
            <span className={style.number__icon}>№</span> {hotel.number}
            {hotel.isLuxury && <span className={style.luxury}>ЛЮКС</span>}
          </div>

          <div className={style.price}>
            {hotel.price.toLocaleString('ru')}₽{' '}
            <span className={style.price__prefix}>в сутки</span>
          </div>
        </div>

        <div className={style.line}></div>

        <div className={style.footer}>
          <Rating rating={hotel.rating} />
          <div className={style.reviews}>
            145{' '}
            <span className={style.reviews__prefix}>
              {declensionReview(145)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HotelCard };
