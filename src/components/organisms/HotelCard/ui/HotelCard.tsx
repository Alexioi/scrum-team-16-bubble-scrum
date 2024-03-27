import { FC } from 'react';

import { Rating, Swiper } from '@/components/atoms';

import { declensionReview } from '../lib/declensionReview';
import style from './style.module.scss';

type Hotel = {
  id: number;
  number: string;
  price: number;
  rating: number;
  isLuxury: boolean;
  images: string[];
};

type Props = {
  hotel: Hotel;
};

const HotelCard: FC<Props> = ({
  hotel: { images, isLuxury, number, price, rating },
}) => {
  return (
    <div className={style.card}>
      <Swiper imageURLs={images} />

      <div className={style.body}>
        <div className={style.header}>
          <div className={style.number}>
            <span className={style.number__icon}>№ </span>
            {number}
            {isLuxury && <span className={style.luxury}>ЛЮКС</span>}
          </div>

          <div className={style.price}>
            {price.toLocaleString('ru')}₽
            <span className={style.price__prefix}> в сутки</span>
          </div>
        </div>

        <div className={style.line} />

        <div className={style.footer}>
          <Rating rating={rating} />
          <div className={style.reviews}>
            145
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
export type { Hotel };
