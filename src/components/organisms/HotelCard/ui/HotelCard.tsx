import React, { FC } from 'react';

import { Rating } from '@/components/atoms/Rating';
import { Swiper } from '@/components/atoms/Swiper';

import st from './HotelCard.module.scss';
import { declensionReview } from '../lib/declensionReview';
import { IHotel } from '../type';

interface HotelCardProps {
  hotel: IHotel;
}

const HotelCard: FC<HotelCardProps> = ({ hotel }) => {
  return (
    <div className={st.card}>
      <Swiper images={hotel.images} className={st.swiper} />

      <div className={st.body}>
        <div className={st.header}>
          <div className={st.number}>
            <span className={st.number__icon}>№</span> {hotel.number}
            {hotel.isLuxury && <span className={st.luxury}>ЛЮКС</span>}
          </div>

          <div className={st.price}>
            {hotel.price.toLocaleString('ru')}₽{' '}
            <span className={st.price__prefix}>в сутки</span>
          </div>
        </div>

        <div className={st.footer}>
          <Rating rating={hotel.rating} />
          <div className={st.reviews}>
            145{' '}
            <span className={st.reviews__prefix}>{declensionReview(145)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
