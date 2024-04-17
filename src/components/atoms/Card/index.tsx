import { FC, ReactNode } from 'react';

import style from './style.module.scss';

type Props = {
  children: ReactNode;
};

const Card: FC<Props> = ({ children }) => {
  return <div className={style.card}>{children}</div>;
};

export { Card };
