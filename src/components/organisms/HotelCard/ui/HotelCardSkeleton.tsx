import { FC } from 'react';
import clsx from 'clsx';

import { SwiperImageSkeleton } from '@/components/atoms';

import style from './style.module.scss';

const HotelCardSkeleton: FC = () => {
  return (
    <div className={clsx(style.card, style.skeleton)}>
      <div className={style.head}>
        <SwiperImageSkeleton />
      </div>

      <div className={style.body}>
        <div className={style.header}>
          <div className={clsx(style.number, style.skeleton_text)}>№ 888</div>

          <div className={clsx(style.price, style.skeleton_text)}>
            9 990₽ в сутки
          </div>
        </div>

        <div className={style.line} />

        <div className={style.footer}>
          <div className={style.skeleton_text}>Рейтинг: отлично</div>
          <div className={clsx(style.reviews, style.skeleton_text)}>
            145 Отзывов
          </div>
        </div>
      </div>
    </div>
  );
};

export { HotelCardSkeleton };
