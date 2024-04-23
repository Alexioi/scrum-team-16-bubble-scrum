'use client';

import { FC, useEffect, useState } from 'react';
import Image from 'next/image';

import { getImageURL } from '@/api';

import style from './style.module.scss';
import { AvatarSkeleton } from './AvatarSkeleton';

type Props = {
  avatarName: string;
};

const Avatar: FC<Props> = ({ avatarName }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    getImageURL(`${avatarName}.jpg`).then((value: string) => {
      setImageUrl(value);
    });
  }, [avatarName]);

  if (imageUrl !== '') {
    return (
      <Image
        className={style.avatar}
        src={imageUrl}
        alt="Аватар"
        width={48}
        height={48}
      />
    );
  }

  return <AvatarSkeleton />;
};

export { Avatar };
