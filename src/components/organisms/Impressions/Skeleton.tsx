import React from 'react';
import clsx from 'clsx';

import style from './style.module.scss';

const Skeleton = () => {
  return (
    <div className={clsx(style.container, style.skeleton)}>
      <div className={style['chart-wrapper']}>
        <div className={style['chart-skeleton']} />
      </div>
      <div className={style.legend}>
        <ul
          className={clsx(style['legend-list'], style['legend-list-skeleton'])}
        >
          <li className={style['legend-list-skeleton_item']}>
            удовлетворительно
          </li>
          <li className={style['legend-list-skeleton_item']}>
            удовлетворительно
          </li>
          <li className={style['legend-list-skeleton_item']}>
            удовлетворительно
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Skeleton };
