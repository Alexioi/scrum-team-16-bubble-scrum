import Image from 'next/image';

import bg1 from '@/images/content/landing-page-background.jpg';
import bg2 from '@/images/content/landing-page-background2.jpg';
import bg3 from '@/images/content/landing-page-background3.jpg';

import style from './style.module.scss';

const AutoSlider = () => {
  return (
    <div className={style.slider}>
      <Image className={style.slide} fill src={bg1} alt="Номер отеля" />
      <Image className={style.slide} fill src={bg2} alt="Номер отеля" />
      <Image className={style.slide} fill src={bg3} alt="Номер отеля" />
      <div className={style.desc}>
        <div className={style.text}>
          Лучшие номера для вашей работы, отдыха и просто вдохновения
        </div>
      </div>
    </div>
  );
};

export { AutoSlider };
