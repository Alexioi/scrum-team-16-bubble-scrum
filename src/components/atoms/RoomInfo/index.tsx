import { FC } from 'react';
import clsx from 'clsx';

import style from './style.module.scss';

type Props = {
  roomNumber: number;
  isLux: boolean;
  price: number;
  isBigRoomNumber?: boolean;
};

const RoomInfo: FC<Props> = ({
  roomNumber,
  isLux,
  price,
  isBigRoomNumber = false,
}) => {
  return (
    <div className={style.header}>
      <div className={style.number}>
        <span className={style.number_icon}>№ </span>
        <span
          className={clsx({
            [style.number_size_big]: isBigRoomNumber,
          })}
        >
          {roomNumber}
        </span>

        {isLux && <span className={style.luxury}>ЛЮКС</span>}
      </div>

      <div className={style.price}>
        {price.toLocaleString('ru')}₽
        <span className={style.price_prefix}> в сутки</span>
      </div>
    </div>
  );
};

export { RoomInfo };
