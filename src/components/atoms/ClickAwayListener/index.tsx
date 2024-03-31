'use client';

import { FC, ReactElement, useEffect, useRef } from 'react';

type Props = {
  children: ReactElement;
  close(): void;
};

const ClickAwayListener: FC<Props> = ({ children, close }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutsideCalendar = ({ target }: Event) => {
      if (!(target instanceof HTMLElement)) {
        return;
      }

      if (!(ref.current instanceof HTMLDivElement)) {
        return;
      }

      if (!ref.current.contains(target)) {
        close();
      }
    };

    document.addEventListener('click', handleClickOutsideCalendar);
    return () => {
      document.removeEventListener('click', handleClickOutsideCalendar);
    };
  }, [close]);

  return <div ref={ref}>{children}</div>;
};

export { ClickAwayListener };
