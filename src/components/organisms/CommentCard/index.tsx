import { FC } from 'react';

import muradImage from '@/images/content/murad.jpg';
import { LikeButton, Typography } from '@/components/atoms';
import { UserCommentInfo } from '@/components/molecules';
import { Comment } from '@/types';

import style from './style.module.scss';

type Props = {
  comment: Comment;
};

const CommentCard: FC<Props> = ({ comment }) => {
  return (
    <div className={style.card}>
      <UserCommentInfo
        avatarUrl={muradImage.src}
        date={comment.date}
        name="Мурад Сарафанов"
      />
      <div className={style.body}>
        <div className={style.like}>
          <LikeButton
            active={false}
            countLikes={comment.likes.length}
            onClick={() => {}}
          />
        </div>
        <Typography tag="p">{comment.content}</Typography>
      </div>
    </div>
  );
};

export { CommentCard };
