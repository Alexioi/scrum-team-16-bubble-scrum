import { FC, MouseEvent, ReactNode } from 'react';
import clsx from 'clsx';

import style from './style.module.scss';
import { Card } from '../Card';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose(): void;
};

const Modal: FC<Props> = ({ children, isOpen, onClose }) => {
  return (
    <div
      className={clsx(style.modal, { [style.modal_open]: isOpen })}
      onClick={onClose}
    >
      <div
        className={style.body}
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <Card>
          <button className={style.close} onClick={onClose} />
          {children}
        </Card>
      </div>
    </div>
  );
};

export { Modal };
