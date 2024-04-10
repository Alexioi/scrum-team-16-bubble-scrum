'use client';

import { FC } from 'react';
import clsx from 'clsx';

import { paginationActions } from '@/store';
import { useAppDispatch } from '@/hooks';

import style from './style.module.scss';

type Props = {
  pageNumber: number;
  activePage: number;
  onClick(state: number): void;
};

const PaginationButton: FC<Props> = ({ pageNumber, activePage, onClick }) => {
  const dispatch = useAppDispatch();

  return (
    <li
      className={clsx(style.page, {
        [style.page_current]: activePage === pageNumber,
      })}
    >
      <button
        onClick={() => {
          onClick(pageNumber);
          dispatch(paginationActions.change(pageNumber));
        }}
        className={style['page-button']}
        type="button"
      >
        {pageNumber}
      </button>
    </li>
  );
};

export { PaginationButton };
