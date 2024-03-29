'use client';

import { FC } from 'react';

import style from './style.module.scss';

type Props = {
  value: number;
  name: string;
  changeValue(number: -1 | 1): void;
};

const Counter: FC<Props> = ({ name, value, changeValue }) => {
  const handleDecrementButtonClick = () => {
    changeValue(-1);
  };

  const handleIncrementButtonClick = () => {
    changeValue(1);
  };

  return (
    <li className={style.item}>
      <span className={style['item-name']}>{name}</span>
      <button
        disabled={value === 0}
        className={style['counter-button']}
        onClick={handleDecrementButtonClick}
      >
        -
      </button>
      <span className={style.counter}>{value}</span>
      <button
        className={style['counter-button']}
        onClick={handleIncrementButtonClick}
      >
        +
      </button>
    </li>
  );
};

export { Counter };
