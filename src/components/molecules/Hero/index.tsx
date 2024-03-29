import { AutoSlider } from '@/components/atoms';

import style from './style.module.scss';
import { images } from './data';

const Hero = () => {
  return (
    <div className={style.hero}>
      <AutoSlider imagesURLs={images} />
    </div>
  );
};

export { Hero };
