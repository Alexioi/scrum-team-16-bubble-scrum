import { ReactNode, FC } from 'react';

import style from './style.module.scss';

type Props = {
  children: ReactNode;
};

const DangerErrorMessage: FC<Props> = ({ children }) => {
  return <div className={style['error-message']}>{children}</div>;
};

export { DangerErrorMessage };
