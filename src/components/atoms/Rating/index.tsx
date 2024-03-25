import { FC, useId } from 'react';

import FillStar from '@/images/decorative/star.svg';
import OutlineStar from '@/images/decorative/outline-star.svg';

import style from './style.module.scss';
import { Gradient } from '../Gradient';

type Props = {
  rating: number;
};

const Rating: FC<Props> = ({ rating }) => {
  const id = useId();
  return (
    <div className={style.rating}>
      {[1, 2, 3, 4, 5].map((number) => {
        return number <= rating ? (
          <svg
            width="21"
            height="19"
            key={number}
            fill={`url('#${id}${number}')`}
          >
            <FillStar />
            <Gradient
              id={`${id}${number}`}
              startColor="#BC9CFF"
              endColor="#8BA4F9"
            />
          </svg>
        ) : (
          <svg
            width="21"
            height="19"
            key={number}
            fill={`url('#${id}${number}')`}
          >
            <OutlineStar />
            <Gradient
              id={`${id}${number}`}
              startColor="#BC9CFF"
              endColor="#8BA4F9"
            />
          </svg>
        );
      })}
    </div>
  );
};

export { Rating };
