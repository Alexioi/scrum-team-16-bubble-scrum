import React from 'react';
import clsx from 'clsx';

import style from './style.module.scss';

const SwiperSkeleton = () => {
  return <div className={clsx(style.swiper, style.skeleton)} />;
};

export { SwiperSkeleton };
