import { FC } from 'react';
import Image from 'next/image';

import style from './style.module.scss';

type Props = {
  imagesURLs: string[];
};

const AutoSlider: FC<Props> = ({ imagesURLs }) => {
  return (
    <div className={style.slider}>
      {imagesURLs.map((url) => (
        <Image
          key={url}
          className={style.slide}
          fill
          src={url}
          alt="Номер отеля"
        />
      ))}

      <div className={style.desc}>
        <div className={style.text}>
          Лучшие номера для вашей работы, отдыха и просто вдохновения
        </div>
      </div>
    </div>
  );
};

export { AutoSlider };
