'use client';

import { getPlural } from '@/helpers';
import { useAppSelector } from '@/hooks';
import { selectComments } from '@/store';
import { Typography } from '@/components/atoms';

import { CommentCard } from '../CommentCard';
import style from './style.module.scss';

const CommentList = () => {
  const comments = useAppSelector(selectComments);

  return (
    <div>
      <div className={style.head}>
        <Typography tag="h2">Отзывы посетителей номера</Typography>
        <div className={style.count}>
          2 {getPlural(['отзыв', 'отзыва', 'отзывов'], 2)}
        </div>
      </div>
      <div className={style.body}>
        {comments.map((item) => (
          <CommentCard key={item.id} comment={item} />
        ))}
      </div>
    </div>
  );
};

export { CommentList };
