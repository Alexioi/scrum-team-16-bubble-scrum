import { FC } from 'react';
import clsx from 'clsx';

import ArrowBackwardWhiteSVG from '@/images/decorative/arrow-backward-white.svg';
import ArrowForwardWhiteSVG from '@/images/decorative/arrow-forward-white.svg';
import { Direction } from '@/enums/direction.enum';

import style from './style.module.scss';

type Props = {
  direction: Direction;
  onClick(callback: (state: number) => number): void;
};

const ArrowButton: FC<Props> = ({ direction, onClick }) => {
  const directionPaginationMap = {
    [Direction.Left]: (prevState: number) => prevState - 1,
    [Direction.Right]: (prevState: number) => prevState + 1,
  };

  const directionIconMap = {
    [Direction.Left]: <ArrowBackwardWhiteSVG />,
    [Direction.Right]: <ArrowForwardWhiteSVG />,
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
        <svg className={style.arrow}>{directionIconMap[direction]}</svg>
      </button>
    </li>
  );
};

export { ArrowButton };
