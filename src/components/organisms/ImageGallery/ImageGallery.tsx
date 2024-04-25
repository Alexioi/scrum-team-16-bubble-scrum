'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { useAppSelector, useScreenSize } from '@/hooks';
import { selectRoom } from '@/store';
import { getImageURL } from '@/api';
import { Swiper } from '@/components/molecules';

import style from './style.module.scss';
import { Placeholder } from './Placeholder';
import { Skeleton } from './Skeleton';

const ImageGallery = () => {
  const room = useAppSelector(selectRoom);
  const initialState: string[] = [];
  const [images, setImages] = useState(initialState);
  const windowSize = useScreenSize();

  useEffect(() => {
    const imagePaths: string[] = [];
    room?.imageNames.map((item) =>
      getImageURL(`${item}.jpg`).then((value: string) =>
        imagePaths.push(value),
      ),
    );
    setImages(imagePaths);
  }, [room]);

  if (room === null) {
    return <Skeleton />;
  }

  if (images.length === 0) {
    return <Placeholder />;
  }

  if (windowSize[0] < 992) {
    return (
      <div className={style.wrapper}>
        <Swiper imageNames={room.imageNames} />
      </div>
    );
  }

  return (
    <div className={style.gallery}>
      <div className={style.column__big}>
        <div className={style.row}>
          <Image
            className={style.image}
            src={images[0]}
            alt="Room image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      </div>
      {images.length >= 3 && (
        <div className={style.column__small}>
          <div className={style.row__half}>
            <Image
              className={style.image}
              src={images[1]}
              alt="Room image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          <div className={style.row}>
            <Image
              className={style.image}
              src={images[2]}
              alt="Room image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
};

export { ImageGallery };
