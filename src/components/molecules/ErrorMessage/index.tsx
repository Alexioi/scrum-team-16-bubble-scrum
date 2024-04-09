import React, { FC } from 'react';

import { Typography } from '@/components/atoms';

import style from './style.module.scss';

type Props = {
  message: string;
};

const ErrorMessage: FC<Props> = ({ message }) => {
  return (
    <div className={style.container}>
      <Typography tag="p">{message}</Typography>
    </div>
  );
};

export { ErrorMessage };
