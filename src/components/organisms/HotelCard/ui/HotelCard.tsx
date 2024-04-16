import { FC } from 'react';
import { useRouter } from 'next/navigation';

import { Rating, Swiper } from '@/components/atoms';

import { declensionReview } from '../lib/declensionReview';
import style from './style.module.scss';

type Props = {
  id: string;
  roomNumber: number;
  price: number;
  averageRating: number;
  isLux: boolean;
  imageNames: string[];
  reviews: number;
};

const HotelCard: FC<Props> = ({
  id,
  imageNames,
  isLux,
  roomNumber,
  price,
  averageRating,
  reviews,
}) => {
  const router = useRouter();

  const handleRoomButtonClick = (roomId: string) =>
    router.push(`/search-room/${roomId}`);

  return (
    <div className={style.card}>
      <Swiper imageNames={imageNames} />
      <button className={style.body} onClick={() => handleRoomButtonClick(id)}>
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
      </button>
    </div>
  );
};

export { HotelCard };
export type { Props as Hotel };
