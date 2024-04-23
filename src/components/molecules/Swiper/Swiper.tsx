'use client';

import clsx from 'clsx';
import { FC, useState, MouseEvent } from 'react';

import LeftArrowSVG from '@/images/decorative/expand-more.svg';
import { SwiperImage } from '@/components/atoms';

import style from './style.module.scss';

type Props = {
  imageNames: string[];
};

const Swiper: FC<Props> = ({ imageNames }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextButtonClick = () => {
    setCurrentImage(
      currentImage + 1 >= imageNames.length ? 0 : currentImage + 1,
    );
  };

  const handlePrevButtonClick = () => {
    setCurrentImage(
      currentImage - 1 < 0 ? imageNames.length - 1 : currentImage - 1,
    );
  };

  const handlePaginationClick = (i: number) => {
    return (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setCurrentImage(i);
    };
  };

  return (
    <div className={style.swiper}>
      <SwiperImage imageName={imageNames[currentImage]} />

      <button className={style.prev} onClick={handlePrevButtonClick}>
        <svg width={12} height={8}>
          <LeftArrowSVG />
        </svg>
      </button>

      <button className={style.next} onClick={handleNextButtonClick}>
        <svg width={12} height={8}>
          <LeftArrowSVG />
        </svg>
      </button>

      <div className={style.pagination}>
        {imageNames.map((item, i) => (
          <button
            key={item}
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
