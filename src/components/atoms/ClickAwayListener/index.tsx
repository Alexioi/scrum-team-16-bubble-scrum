'use client';

import { FC, ReactElement, useEffect, useRef } from 'react';

type Props = {
  children: ReactElement;
  onClose(): void;
};

const ClickAwayListener: FC<Props> = ({ children, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideItemClick = ({ target }: Event) => {
      if (!(target instanceof HTMLElement)) {
        return;
      }

      if (!(ref.current instanceof HTMLDivElement)) {
        return;
      }

      if (!ref.current.contains(target)) {
        onClose();
      }
    };

    document.addEventListener('click', handleOutsideItemClick);
    return () => {
      document.removeEventListener('click', handleOutsideItemClick);
    };
  }, [onClose]);

  return <div ref={ref}>{children}</div>;
};

export { ClickAwayListener };
