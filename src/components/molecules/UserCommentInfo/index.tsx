import { FC } from 'react';

import { Avatar, Typography } from '@/components/atoms';
import { Timestamp } from '@/types';

import style from './style.module.scss';
import { calcDate } from './helpers/calcTime';

type Props = {
  name: string;
  avatarUrl: string;
  date: Timestamp;
};

const UserCommentInfo: FC<Props> = ({ avatarUrl, date, name }) => {
  return (
    <div className={style.user}>
      <Avatar avatarUrl={avatarUrl} />
      <div>
        <div className={style.name}>
          <Typography tag="p">{name}</Typography>
        </div>
        <Typography tag="p">{calcDate(date)}</Typography>
      </div>
    </div>
  );
};

export { UserCommentInfo };
