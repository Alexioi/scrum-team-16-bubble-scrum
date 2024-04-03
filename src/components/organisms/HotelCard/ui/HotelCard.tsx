import { FC } from 'react';

import { Rating, Swiper } from '@/components/atoms';

import { declensionReview } from '../lib/declensionReview';
import style from './style.module.scss';

type Props = {
  roomNumber: string;
  price: number;
  averageRating: number;
  lux: boolean;
  imageUrls: string[];
};

const HotelCard: FC<Props> = ({
  imageUrls,
  lux,
  roomNumber,
  price,
  averageRating,
}) => {
  return (
    <div className={style.card}>
      <Swiper imageURLs={imageUrls} />

      <div className={style.body}>
        <div className={style.header}>
          <div className={style.number}>
            <span className={style.number_icon}>№ </span>
            {roomNumber}
            {lux && <span className={style.luxury}>ЛЮКС</span>}
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
            145
            <span className={style.reviews_prefix}>
              {declensionReview(145)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HotelCard };
export type { Props as Hotel };
