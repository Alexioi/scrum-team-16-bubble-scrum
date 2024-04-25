import Image from 'next/image';
import React from 'react';

import img1 from '@/images/content/gallery-main.jpg';
import img2 from '@/images/content/gallery-sub-top.jpg';
import img3 from '@/images/content/gallery-sub-bottom.jpg';

import style from './style.module.scss';

const testImages = [img1, img2, img3];

const ImageGallery = () => {
  return (
    <div className={style.gallery}>
      <div>
        <Image className={style.image} src={testImages[0]} alt="Room image" />
      </div>
      <div className={style.column}>
        <div>
          <div>
            <Image
              className={style.image}
              src={testImages[1]}
              alt="Room image"
            />
          </div>
          <div>
            <Image
              className={style.image}
              src={testImages[2]}
              alt="Room image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { ImageGallery };
