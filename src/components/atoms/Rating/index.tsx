import { FC } from 'react';

import { FillStar } from '../icons';
import { OutlineStar } from '../icons';

import style from './Rating.module.scss';

interface Props {
  rating: number;
  className?: string;
}

const Rating: FC<Props> = ({ rating, className = '' }) => {
  return (
    <div className={`${style.rating} ${className}`}>
      {[1, 2, 3, 4, 5].map((number) =>
        number <= rating ? (
          <FillStar key={number} />
        ) : (
          <OutlineStar key={number} />
        ),
      )}
    </div>
  );
};

export { Rating };
