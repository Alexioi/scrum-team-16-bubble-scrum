'use client';

import { useState } from 'react';
import Image from 'next/image';

import { LeftArrow } from '../icons';
import style from './style.module.scss';

interface Props {
  images: string[];
  className?: string;
}

const Swiper = ({ images, className = '' }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);

  const onNextImage = () =>
    setCurrentImage(currentImage + 1 >= images.length ? 0 : currentImage + 1);

  const onPrevImage = () =>
    setCurrentImage(
      currentImage - 1 < 0 ? images.length - 1 : currentImage - 1,
    );

  const onPaginationClick =
    (idx: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setCurrentImage(idx);
    };

  return (
    <div className={`${style.swiper} ${className}`}>
      <Image
        src={images[currentImage]}
        className={style.img}
        fill
        alt="Фотография номера"
      />

      <button className={style.prev} onClick={onPrevImage}>
        <LeftArrow />
      </button>

      <button className={style.next} onClick={onNextImage}>
        <LeftArrow />
      </button>

      <div className={style.pagination}>
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={onPaginationClick(idx)}
            className={`${style.pagination__item} ${
              idx === currentImage ? style.pagination__item_active : ''
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export { Swiper };
