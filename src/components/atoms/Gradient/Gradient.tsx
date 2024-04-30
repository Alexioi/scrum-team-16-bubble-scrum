import { FC } from 'react';

import style from './style.module.scss';

type Props = {
  id: string;
  startColor: string;
  endColor: string;
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
};

const Gradient: FC<Props> = ({
  id,
  startColor,
  endColor,
  x1 = 12,
  y1 = 0,
  x2 = 12,
  y2 = 24,
}) => {
  return (
    <svg className={style.gradient} aria-hidden="true" focusable="false">
      <linearGradient
        id={id}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor={startColor} />
        <stop offset="100%" stopColor={endColor} />
      </linearGradient>
    </svg>
  );
};

export { Gradient };
