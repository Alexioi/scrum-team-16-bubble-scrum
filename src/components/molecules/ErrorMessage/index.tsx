import React, { FC } from 'react';

import { Typography } from '@/components/atoms';

import style from './style.module.scss';

type Props = {
  message: string;
  description?: string;
};

const ErrorMessage: FC<Props> = ({ message, description = '' }) => {
  return (
    <div className={style.container}>
      <Typography tag="h2">{message}</Typography>
      {description ?? <Typography tag="p">{description}</Typography>}
    </div>
  );
};

export { ErrorMessage };
