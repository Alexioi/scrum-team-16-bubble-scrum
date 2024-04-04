import { FC } from 'react';
import clsx from 'clsx';

import ArrowSVG from '@/images/decorative/arrow.svg';

import style from './style.module.scss';

type Direction = 'left' | 'right';

type Props = {
  direction: Direction;
  onClick(callback: (state: number) => number): void;
};

const ArrowButton: FC<Props> = ({ direction, onClick }) => {
  const directionPaginationMap = {
    left: (prevState: number) => prevState - 1,
    right: (prevState: number) => prevState + 1,
  };

  return (
    <li className={clsx(style.wrapper)}>
      <button
        onClick={() =>
          onClick((prevState) => directionPaginationMap[direction](prevState))
        }
        className={style.button}
        type="button"
      >
        <svg
          className={clsx(style.arrow, {
            [style.arrow_rotated]: direction === 'left',
          })}
        >
          <ArrowSVG />
        </svg>
      </button>
    </li>
  );
};

export { ArrowButton };
