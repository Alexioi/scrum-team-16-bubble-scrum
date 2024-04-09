import { FC } from 'react';

import { HotelCardSkeleton } from '../HotelCard';
import style from './style.module.scss';

type Props = {
  count: number;
};

const HotelListSkeleton: FC<Props> = ({ count }) => {
  return (
    <div className={style.list}>
      {new Array(count)
        .fill(undefined)
        .map((_, i) => i)
        .map((item) => (
          <HotelCardSkeleton key={item} />
        ))}
    </div>
  );
};

export { HotelListSkeleton };
