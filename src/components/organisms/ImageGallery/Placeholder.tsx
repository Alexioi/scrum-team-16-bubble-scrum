import React from 'react';

import { Typography } from '@/components/atoms';
import style from './style.module.scss';

const Placeholder = () => {
  return (
    <div className={style.placeholder}>
      <Typography tag="p">Изображений для этого номера ещё нет</Typography>
    </div>
  );
};

export { Placeholder };
