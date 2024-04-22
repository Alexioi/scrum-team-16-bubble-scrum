import { FC } from 'react';

import { LikeButton, Typography } from '@/components/atoms';
import { UserCommentInfo } from '@/components/molecules';
import { Comment } from '@/types';
import { useAppSelector } from '@/hooks';
import { selectUID } from '@/store';

import style from './style.module.scss';

type Props = {
  comment: Comment;
};

const CommentCard: FC<Props> = ({ comment }) => {
  const uid = useAppSelector(selectUID);

  return (
    <div className={style.card}>
      <UserCommentInfo date={comment.date} userUid={comment.userUid} />
      <div className={style.body}>
        <div className={style.like}>
          <LikeButton
            active={!!comment.likes.find((item) => item === uid)}
            countLikes={comment.likes.length}
            onClick={() => {}}
            disabled={!uid}
          />
        </div>
        <Typography tag="p">{comment.content}</Typography>
      </div>
    </div>
  );
};

export { CommentCard };
