'use client';

import { FC, useEffect, useState } from 'react';
import { z } from 'zod';

import { getOtherUserInfo } from '@/api';
import { Avatar, Typography } from '@/components/atoms';
import { Timestamp } from '@/types';
import { userInfoScheme } from '@/schemes';

import style from './style.module.scss';
import { calcDate } from './helpers/calcTime';
import { UserCommentInfoSkeleton } from './UserCommentInfoSkeleton';

type Props = {
  date: Timestamp;
  uid: string;
};

const UserCommentInfo: FC<Props> = ({ date, uid }) => {
  const [user, setUser] = useState<z.infer<typeof userInfoScheme> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const userInfo = await getOtherUserInfo(uid);
      setUser(userInfo);
    };

    fetchData();
  }, [uid]);

  if (user) {
    return (
      <div className={style.user}>
        <Avatar avatarName={user.sex} />
        <div>
          <div className={style.name}>
            <Typography tag="p">
              {user.name} {user.surname}
            </Typography>
          </div>
          <Typography tag="p">{calcDate(date)}</Typography>
        </div>
      </div>
    );
  }

  return <UserCommentInfoSkeleton />;
};

export { UserCommentInfo };
