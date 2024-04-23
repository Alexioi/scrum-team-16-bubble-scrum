import clsx from 'clsx';

import { Typography } from '@/components/atoms';

import style from './style.module.scss';
import { CommentCardSkeleton } from '../CommentCard';

const CommentListSkeleton = () => {
  return (
    <div>
      <div className={style.head}>
        <Typography tag="h2">Отзывы посетителей номера</Typography>
        <div className={clsx(style.count, style.skeleton)}>10 отзывов</div>
      </div>
      <div className={style.body}>
        <CommentCardSkeleton />
        <CommentCardSkeleton />
        <CommentCardSkeleton />
      </div>
    </div>
  );
};

export { CommentListSkeleton };
