'use client';

import { FC } from 'react';
import clsx from 'clsx';

import style from './style.module.scss';

type Props = {
  pageNumber: number;
  activePage: number;
  onClick(number: number): void;
};

const PaginationButton: FC<Props> = ({ pageNumber, activePage, onClick }) => {
  return (
    <li
      className={clsx(style.page, {
        [style.page_current]: activePage === pageNumber,
      })}
    >
      <button
        onClick={() => onClick(pageNumber)}
        className={style['page-button']}
        type="button"
      >
        {pageNumber}
      </button>
    </li>
  );
};

export { PaginationButton };
