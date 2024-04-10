import { FC } from 'react';
import clsx from 'clsx';

import style from './style.module.scss';

const HotelCardSkeleton: FC = () => {
  return (
    <div className={clsx(style.card, style.skeleton)}>
      <div className={style.skeleton_swiper} />

      <div className={style.body}>
        <div className={style.header}>
          <div className={clsx(style.number, style.skeleton_text)}>
            № 888 ЛЮКС
          </div>

          <div className={clsx(style.price, style.skeleton_text)}>
            9 990₽ в сутки
          </div>
        </div>

        <div className={style.line} />

        <div className={style.footer}>
          <div className={style.skeleton_text}>Рейтинг: пять звезд</div>
          <div className={clsx(style.reviews, style.skeleton_text)}>
            145 Отзывов
          </div>
        </div>
      </div>
    </div>
  );
};

export { HotelCardSkeleton };
