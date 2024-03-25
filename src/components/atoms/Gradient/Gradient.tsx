import { FC } from 'react';

import style from './style.module.scss';

type Props = {
  id: string;
  startColor: string;
  endColor: string;
};

const Gradient: FC<Props> = ({ id, startColor, endColor }) => {
  return (
    <svg className={style.gradient} aria-hidden="true" focusable="false">
      <linearGradient
        id={id}
        x1="12"
        y1="0"
        x2="12"
        y2="24"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stop-color={startColor} />
        <stop offset="100%" stop-color={endColor} />
      </linearGradient>
    </svg>
  );
};

export { Gradient };
