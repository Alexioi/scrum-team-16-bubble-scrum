import { ReactNode, FC } from 'react';

import style from './style.module.scss';

type Props = {
  children: ReactNode;
};

const ErrorMassage: FC<Props> = ({ children }) => {
  return <div className={style['error-massage']}>{children}</div>;
};

export { ErrorMassage };
