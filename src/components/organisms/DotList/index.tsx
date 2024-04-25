import { FC } from 'react';

import { useAppSelector } from '@/hooks';
import { selectRoom } from '@/store';

import { Skeleton } from './Skeleton';
import style from './style.module.scss';

type Props = {
  items: {
    data: string;
    trigger: 'isAnimals' | 'isLotOfGuests' | 'isSmoke' | null;
  }[];
};

const DotList: FC<Props> = ({ items }) => {
  const room = useAppSelector(selectRoom);

  if (room === null) {
    return <Skeleton />;
  }

  return (
    <ul className={style.list}>
      {items.map((item) => {
        return item.trigger === null || !room.rules[item.trigger] ? (
          <li className={style.item} key={item.data}>
            <span className={style.text}>{item.data}</span>
          </li>
        ) : null;
      })}
    </ul>
  );
};

export { DotList };
