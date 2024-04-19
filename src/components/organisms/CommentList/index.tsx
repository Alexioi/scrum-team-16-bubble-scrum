'use client';

import { useAppSelector } from '@/hooks';
import { selectComments } from '@/store';

import { CommentCard } from '../CommentCard';
import style from './style.module.scss';

const CommentList = () => {
  const comments = useAppSelector(selectComments);

  return (
    <div className={style.list}>
      {comments.map((i) => (
        <CommentCard key={i.id} comment={i} />
      ))}
    </div>
  );
};

export { CommentList };
