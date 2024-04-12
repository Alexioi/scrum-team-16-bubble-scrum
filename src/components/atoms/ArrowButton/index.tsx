'use client';

import { FC } from 'react';
import clsx from 'clsx';

import ArrowSVG from '@/images/decorative/arrow.svg';

import style from './style.module.scss';

type Props = {
  direction: 'left' | 'right';
  onClick(): void;
};

const ArrowButton: FC<Props> = ({ direction, onClick }) => {
  return (
    <li className={clsx(style.wrapper)}>
      <button onClick={onClick} className={style.button} type="button">
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
