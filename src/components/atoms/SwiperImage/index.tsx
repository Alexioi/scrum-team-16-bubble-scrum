'use client';

import Image from 'next/image';
import { FC, useState, useEffect } from 'react';

import { getImageURL } from '@/api';

import style from './style.module.scss';

type Props = { imageName: string };

const SwiperImage: FC<Props> = ({ imageName }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    getImageURL(`${imageName}.jpg`).then((value: string) => {
      setImageUrl(value);
    });
  }, [imageName]);

  return (
    <div className={style.container}>
      {imageUrl === '' ? (
        'Загрузка'
      ) : (
        <Image
          src={imageUrl}
          className={style.img}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          alt="Фотография номера"
        />
      )}
    </div>
  );
};

export { SwiperImage };
