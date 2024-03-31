import React, { FC } from 'react';

import ExpandMoreSVG from '@/images/decorative/expand-more.svg';
import { clsx } from 'clsx';

import style from './style.module.scss';

type Props = {
  flipped?: boolean;
};

const ExpandMoreIcon: FC<Props> = ({ flipped }) => {
  return (
    <svg
      width={12}
      height={8}
      className={clsx(style.icon, {
        [style.icon_flipped]: flipped,
      })}
    >
      <ExpandMoreSVG />
    </svg>
  );
};

export { ExpandMoreIcon };
