import { FC } from 'react';
import Image from 'next/image';

import { Typography } from '@/components/atoms';

import style from './style.module.scss';
import { calcDate } from './helpers/calcTime';

type Props = {
  name: string;
  avaratUrl: string;
  date: string;
};

const UserReviewAvatar: FC<Props> = ({ avaratUrl, date, name }) => {
  return (
    <div className={style.user}>
      <Image
        className={style.avatar}
        src={avaratUrl}
        alt="Аватар"
        width={48}
        height={48}
      />
      <div>
        <div className={style.name}>
          <Typography tag="p">{name}</Typography>
        </div>
        <Typography tag="p">{calcDate(date)}</Typography>
      </div>
    </div>
  );
};

export { UserReviewAvatar };
