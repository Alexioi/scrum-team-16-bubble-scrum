import { ReactNode, FC } from 'react';

import style from './style.module.scss';

type Props = {
  children: ReactNode;
};

const AuthBackground: FC<Props> = ({ children }) => {
  return (
    <div className={style.registration}>
      <div className={style.form}>{children}</div>
    </div>
  );
};

export { AuthBackground };
