import { FC } from 'react';

import { Rating, Swiper } from '@/components/atoms';

import { declensionReview } from '../lib/declensionReview';
import style from './style.module.scss';

type Props = {
  roomNumber: number;
  price: number;
  averageRating: number;
  isLux: boolean;
  imageUrls: string[];
  reviews: number;
};

// const hotelsScheme = z.array(
//   z.object({
//     id: z.string(),
//     roomNumber: z.number(),
//     price: z.number(),
//     averageRating: z.number(),
//     isLux: z.boolean(),
//     imageUrls: z.array(z.number()),
//   }),
// );

const HotelCard: FC<Props> = ({
  imageUrls,
  isLux,
  roomNumber,
  price,
  averageRating,
  reviews,
}) => {
  return (
    <div className={style.card}>
      <Swiper imageURLs={imageUrls} />
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
