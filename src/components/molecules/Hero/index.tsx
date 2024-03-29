import { AutoSlider } from '@/components/atoms';

import style from './style.module.scss';

const Hero = () => {
  return (
    <div className={style.hero}>
      <AutoSlider />
    </div>
  );
};

export { Hero };
