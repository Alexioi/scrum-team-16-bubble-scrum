import { Rating } from '@/components/atoms/Rating';
import { Swiper } from '@/components/atoms/Swiper';

import { Hotel } from '../type';
import { declensionReview } from '../lib/declensionReview';

import style from './style.module.scss';

interface Props {
  hotel: Hotel;
}

const HotelCard = ({ hotel }: Props) => {
  return (
    <div className={style.card}>
      <Swiper images={hotel.images} className={style.swiper} />

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

export default HotelCard;
