'use client';

import { FC, useId } from 'react';
import clsx from 'clsx';

import FavoriteFillSVG from '@/images/decorative/favorite.svg';
import FavoriteBorderSVG from '@/images/decorative/favorite-border.svg';

import style from './style.module.scss';
import { Gradient } from '../Gradient';

type Props = {
  countLikes: number;
  active: boolean;
  onClick(): void;
};

const LikeButton: FC<Props> = ({ countLikes, active, onClick }) => {
  const gradientId = useId();

  return (
    <button
      className={clsx(style.button, {
        [style.button__active]: active,
        [style.button__less10]: countLikes < 10,
      })}
      onClick={onClick}
    >
      <svg height={8} width={10}>
        <g fill={`url(#${gradientId})`} className={style['favorite-fill']}>
          <Gradient id={gradientId} startColor="#BC9CFF" endColor="#8BA4F9" />
          <FavoriteFillSVG />
        </g>
        <g className={style['favorite-border']}>
          <FavoriteBorderSVG />
        </g>
      </svg>
      <span>{countLikes}</span>
    </button>
  );
};

export { LikeButton };
