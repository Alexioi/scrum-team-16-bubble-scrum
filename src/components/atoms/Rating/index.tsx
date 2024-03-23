import { FC } from 'react';
import { FillStar } from '../icons';
import { OutlineStar } from '../icons';

import style from './style.module.scss';

type Props = {
  rating: number;
};

const Rating: FC<Props> = ({ rating }) => {
  return (
    <div className={style.rating}>
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
