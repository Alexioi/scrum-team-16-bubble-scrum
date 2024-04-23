import { FC } from 'react';
import Image from 'next/image';

import style from './style.module.scss';

type Props = {
  avatarUrl: string;
};

const Avatar: FC<Props> = ({ avatarUrl }) => {
  return (
    <Image
      className={style.avatar}
      src={avatarUrl}
      alt="Аватар"
      width={48}
      height={48}
    />
  );
};

export { Avatar };
