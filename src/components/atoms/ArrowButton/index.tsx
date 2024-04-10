'use client';

import { FC } from 'react';
import clsx from 'clsx';

import ArrowSVG from '@/images/decorative/arrow.svg';
import { paginationActions } from '@/store';
import { useAppDispatch } from '@/hooks';

import style from './style.module.scss';

type Direction = 'left' | 'right';

type Props = {
  direction: Direction;
  onClick(callback: (state: number) => number): void;
};

const ArrowButton: FC<Props> = ({ direction, onClick }) => {
  const dispatch = useAppDispatch();

  const directionPaginationMap = {
    left: (prevState: number) => prevState - 1,
    right: (prevState: number) => prevState + 1,
  };

  return (
    <li className={clsx(style.wrapper)}>
      <button
        onClick={() =>
          onClick((prevState) => {
            dispatch(
              paginationActions.change(
                directionPaginationMap[direction](prevState),
              ),
            );
            return directionPaginationMap[direction](prevState);
          })
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
