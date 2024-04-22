import React from 'react';
import clsx from 'clsx';

import style from './style.module.scss';

const SwiperImageSkeleton = () => {
  return <div className={clsx(style.skeleton)} />;
};

export { SwiperImageSkeleton };
