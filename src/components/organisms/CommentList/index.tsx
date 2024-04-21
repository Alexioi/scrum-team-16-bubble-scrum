'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';

import { getPlural } from '@/helpers';
import { useAppDispatch, useAppSelector } from '@/hooks';
import {
  commentListActions,
  selectComments,
  selectCommentsError,
} from '@/store';
import { Typography } from '@/components/atoms';
import { getCommentsByRoomId } from '@/api';

import { CommentCard } from '../CommentCard';
import style from './style.module.scss';

const CommentList = () => {
  const comments = useAppSelector(selectComments);
  const commentsError = useAppSelector(selectCommentsError);
  const dispatch = useAppDispatch();
  const roomId = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(commentListActions.changeError(''));
        dispatch(commentListActions.changeIsLoading(true));
        const roomComments = await getCommentsByRoomId(roomId.id);
        dispatch(commentListActions.changeData(roomComments));
      } catch (err) {
        if (err instanceof Error) {
          dispatch(commentListActions.changeError(err.message));
          return;
        }
        dispatch(commentListActions.changeError('неизвестная ошибка'));
      } finally {
        dispatch(commentListActions.changeIsLoading(false));
      }
    };

    fetchData();
  }, [dispatch, roomId]);

  return (
    <div>
      <div className={style.head}>
        <Typography tag="h2">Отзывы посетителей номера</Typography>
        <div className={style.count}>
          {comments.length}
          {getPlural([' отзыв', ' отзыва', ' отзывов'], comments.length)}
        </div>
      </div>
      <div className={style.body}>
        {comments.map((item) => (
          <CommentCard key={item.id} comment={item} />
        ))}
      </div>
      <div>{commentsError}</div>
    </div>
  );
};

export { CommentList };
