import { FC } from 'react';

import { LikeButton, Typography } from '@/components/atoms';
import { UserCommentInfo } from '@/components/molecules';
import { Comment } from '@/types';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { commentListActions, selectUID } from '@/store';
import { likeComment } from '@/api';

import style from './style.module.scss';

type Props = {
  comment: Comment;
};

const CommentCard: FC<Props> = ({ comment }) => {
  const dispatch = useAppDispatch();
  const uid = useAppSelector(selectUID);

  const handleClickLikeButton = async () => {
    if (uid === null) {
      return;
    }

    await likeComment(comment, uid);
    dispatch(commentListActions.changeLike({ commentId: comment.id, uid }));
  };

  return (
    <div className={style.card}>
      <UserCommentInfo date={comment.date} uid={comment.userUid} />
      <div className={style.body}>
        <div className={style.like}>
          <LikeButton
            active={!!comment.likes.find((item) => item === uid)}
            countLikes={comment.likes.length}
            onClick={handleClickLikeButton}
            disabled={!uid}
          />
        </div>
        <Typography tag="p">{comment.content}</Typography>
      </div>
    </div>
  );
};

export { CommentCard };
