'use client';

import { FC, useState } from 'react';
import st from './Swiper.module.scss';
import { LeftArrow } from '../icons';
import Image from 'next/image';

interface SwiperProps {
  images: string[];
  className?: string;
}

const Swiper: FC<SwiperProps> = ({ images, className = '' }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const onNextImage = () =>
    setCurrentImage(currentImage + 1 >= images.length ? 0 : currentImage + 1);

  const onPrevImage = () =>
    setCurrentImage(currentImage - 1 < 0 ? 3 : currentImage - 1);

  const onPaginationClick =
    (idx: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setCurrentImage(idx);
    };

  return (
    <div className={`${st.swiper} ${className}`}>
      <Image
        src={images[currentImage]}
        className={st.img}
        fill
        alt="Фотография номера"
      />

      <button className={st.prev} onClick={onPrevImage}>
        <LeftArrow />
      </button>

      <button className={st.next} onClick={onNextImage}>
        <LeftArrow />
      </button>

      <div className={st.pagination}>
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={onPaginationClick(idx)}
            className={`${st.pagination__item} ${
              idx === currentImage ? st.pagination__item_active : ''
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Swiper;
