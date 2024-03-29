'use client';

import clsx from 'clsx';
import { FC, useState, MouseEvent } from 'react';
import Image from 'next/image';

import LeftArrow from '@/images/decorative/expand-more.svg';

import style from './style.module.scss';

type Props = {
  imageURLs: string[];
};

const Swiper: FC<Props> = ({ imageURLs }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextButtonClick = () => {
    setCurrentImage(
      currentImage + 1 >= imageURLs.length ? 0 : currentImage + 1,
    );
  };

  const handlePrevButtonClick = () => {
    setCurrentImage(
      currentImage - 1 < 0 ? imageURLs.length - 1 : currentImage - 1,
    );
  };

  const handlePaginationClick = (idx: number) => {
    return (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setCurrentImage(idx);
    };
  };
  return (
    <div className={style.swiper}>
      <Image
        src={imageURLs[currentImage]}
        className={style.img}
        fill
        alt="Фотография номера"
      />

      <button className={style.prev} onClick={handlePrevButtonClick}>
        <svg width={12} height={8}>
          <LeftArrow />
        </svg>
      </button>

      <button className={style.next} onClick={handleNextButtonClick}>
        <svg width={12} height={8}>
          <LeftArrow />
        </svg>
      </button>

      <div className={style.pagination}>
        {imageURLs.map((url, i) => (
          <button
            key={url}
            onClick={handlePaginationClick(i)}
            className={clsx(style.item, {
              [style.item_active]: i === currentImage,
            })}
          />
        ))}
      </div>
    </div>
  );
};

export { Swiper };
