'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { useAppSelector, useScreenSize } from '@/hooks';
import { selectRoom } from '@/store';
import { getImageURL } from '@/api';
import { Swiper } from '@/components/molecules';

import style from './style.module.scss';
import { Skeleton } from './Skeleton';

const ImageGallery = () => {
  const room = useAppSelector(selectRoom);
  const initialState: string[] = [];
  const [images, setImages] = useState(initialState);
  const windowSize = useScreenSize();

  useEffect(() => {
    if (room === null) {
      return;
    }
    const getImageURLs = async () => {
      const imagePaths = await Promise.all(
        room.imageNames.map(async (item) => {
          const path = await getImageURL(`${item}.jpg`);
          return path;
        }),
      );

      setImages(imagePaths);
    };

    getImageURLs();
  }, [room]);

  if (room === null) {
    return <Skeleton />;
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
        <div className={style.item1}>
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
          <div className={style.item2}>
            <Image
              className={style.image}
              src={images[1]}
              alt="Room image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          <div className={style.item3}>
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
