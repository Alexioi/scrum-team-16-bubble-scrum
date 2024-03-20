import { FC } from 'react';

import { FillStar } from '../icons';
import { OutlineStar } from '../icons';

import st from './Rating.module.scss';

interface RatingProps {
  rating: number;
  className?: string;
}

const Rating: FC<RatingProps> = ({ rating, className = '' }) => {
  return (
    <div className={`${st.rating} ${className}`}>
      {[1, 2, 3, 4, 5].map((number) =>
        number <= rating ? (
          <FillStar key={number} />
        ) : (
          <OutlineStar key={number} />
        )
      )}
    </div>
  );
};

export { Rating };
