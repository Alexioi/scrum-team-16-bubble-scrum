'use client';

import { FC } from 'react';
import clsx from 'clsx';

import style from './style.module.scss';

type Props = {
  pageNumber: number;
  activePage: number;
};

const PaginationButton: FC<Props> = ({ pageNumber, activePage }) => {
  return (
    <li
      className={clsx(style.page, {
        [style.page_current]: activePage === pageNumber,
      })}
    >
      <span className={style['page-button']}>{pageNumber}</span>
    </li>
  );
};

export { PaginationButton };
