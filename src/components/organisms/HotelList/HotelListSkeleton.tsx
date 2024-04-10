import { FC } from 'react';

import { ITEMS_PER_PAGE } from '@/constants';

import { HotelCardSkeleton } from '../HotelCard';
import style from './style.module.scss';

const HotelListSkeleton: FC = () => {
  return (
    <div className={style.list}>
      {new Array(ITEMS_PER_PAGE)
        .fill(undefined)
        .map((_, i) => i)
        .map((item) => (
          <HotelCardSkeleton key={item} />
        ))}
    </div>
  );
};

export { HotelListSkeleton };
