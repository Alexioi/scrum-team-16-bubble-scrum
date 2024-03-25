import { FC } from 'react';

import FillStar from '@/images/decorative/star.svg';
import OutlineStar from '@/images/decorative/outline-star.svg';

import style from './style.module.scss';

type Props = {
  rating: number;
};

const Rating: FC<Props> = ({ rating }) => {
  return (
    <div className={style.rating}>
      {[1, 2, 3, 4, 5].map((number) => {
        return number <= rating ? (
          <svg width="21" height="19" key={number} fill={`url('#gradient')`}>
            <FillStar />
            <defs>
              <linearGradient id="gradient">
                <stop stopColor="#BC9CFF" />
                <stop offset="1" stopColor="#8BA4F9" />
              </linearGradient>
            </defs>
          </svg>
        ) : (
          <svg width="21" height="19" key={number} fill="url('#gradient')">
            <OutlineStar />
            <defs>
              <linearGradient id="gradient">
                <stop stopColor="#BC9CFF" />
                <stop offset="1" stopColor="#8BA4F9" />
              </linearGradient>
            </defs>
          </svg>
        );
      })}
    </div>
  );
};

export { Rating };
