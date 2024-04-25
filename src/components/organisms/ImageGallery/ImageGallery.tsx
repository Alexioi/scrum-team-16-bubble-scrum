'use client';

import Image from 'next/image';
import React from 'react';

import useScreenSize from '@/hooks/useScreenSize';
import { Swiper } from '@/components/molecules';
import img1 from '@/images/content/gallery-main.jpg';
import img2 from '@/images/content/gallery-sub-top.jpg';
import img3 from '@/images/content/gallery-sub-bottom.jpg';

import style from './style.module.scss';
import { Placeholder } from './Placeholder';

const images = [img1, img2, img3];

const ImageGallery = () => {
  const windowSize = useScreenSize();

  if (images.length === 0) {
    return <Placeholder />;
  }

  if (windowSize[0] < 992) {
    return <Swiper imageNames={images.map((item) => item.src)} />;
  }

  console.log(images[0].src);

  return (
    <div className={style.gallery}>
      <div>
        <Image className={style.image} src={images[0]} alt="Room image" />
      </div>
      {images.length >= 3 && (
        <div className={style.column}>
          <div>
            <Image className={style.image} src={images[1]} alt="Room image" />
          </div>
          <div>
            <Image className={style.image} src={images[2]} alt="Room image" />
          </div>
        </div>
      )}
    </div>
  );
};

export { ImageGallery };
