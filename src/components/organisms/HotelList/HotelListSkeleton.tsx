import { FC, useId } from 'react';

import { HotelCardSkeleton } from '../HotelCard';
import style from './style.module.scss';

type Props = {
  count: number;
};

const HotelListSkeleton: FC<Props> = ({ count }) => {
  const id = useId();

  return (
    <div className={style.list}>
      {Array.from(Array(count)).map(() => (
        <HotelCardSkeleton key={id} />
      ))}
    </div>
  );
};

export { HotelListSkeleton };
