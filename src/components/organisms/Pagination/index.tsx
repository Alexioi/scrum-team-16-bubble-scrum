'use client';

import { FC, useState } from 'react';
import { nanoid } from 'nanoid';
import clsx from 'clsx';

import ArrowBackwardWhiteSVG from '@/images/decorative/arrow-backward-white.svg';
import ArrowForwardWhiteSVG from '@/images/decorative/arrow-forward-white.svg';

import style from './style.module.scss';

type Props = {
  pagesCount: number;
  totalPagesCount: number;
};

const Pagination: FC<Props> = ({ pagesCount, totalPagesCount }) => {
  const paginationLabelPagesCount =
    totalPagesCount <= 100 ? totalPagesCount : '100+';

  const [activePage, setActivePage] = useState(1);

  return (
    <div className={style.wrapper}>
      <ul className={style.list}>
        {activePage > 1 && (
          <li className={clsx(style.page, style.page_prev)}>
            <button
              onClick={() => setActivePage((prevState) => prevState - 1)}
              className={style['page-button']}
              type="button"
            >
              <svg className={style.arrow}>
                <ArrowBackwardWhiteSVG />
              </svg>
            </button>
          </li>
        )}
        {activePage <= 3 && (
          <>
            {Array(pagesCount)
              .fill(null)
              .slice(0, 3)
              .map((_page, index) => (
                <li
                  key={nanoid()}
                  className={clsx(style.page, {
                    [style.page_current]: activePage === index + 1,
                  })}
                >
                  <button
                    onClick={() => setActivePage(index + 1)}
                    className={style['page-button']}
                    type="button"
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            <li className={style.boundary}>...</li>
            <li className={style.page}>
              <button
                onClick={() => setActivePage(pagesCount)}
                className={style['page-button']}
                type="button"
              >
                {pagesCount}
              </button>
            </li>
          </>
        )}
        {activePage > 3 && activePage <= pagesCount - 3 && (
          <>
            <li className={style.page}>
              <button
                onClick={() => setActivePage(1)}
                className={style['page-button']}
                type="button"
              >
                1
              </button>
            </li>
            <li className={style.boundary}>...</li>
            <li className={style.page}>
              <button
                onClick={() => setActivePage(activePage - 1)}
                className={style['page-button']}
                type="button"
              >
                {activePage - 1}
              </button>
            </li>
            <li className={clsx(style.page, style.page_current)}>
              <button className={style['page-button']} type="button">
                {activePage}
              </button>
            </li>
            <li className={style.page}>
              <button
                onClick={() => setActivePage(activePage + 1)}
                className={style['page-button']}
                type="button"
              >
                {activePage + 1}
              </button>
            </li>
            <li className={style.boundary}>...</li>
            <li className={style.page}>
              <button
                onClick={() => setActivePage(pagesCount)}
                className={style['page-button']}
                type="button"
              >
                {pagesCount}
              </button>
            </li>
          </>
        )}
        {activePage > pagesCount - 3 && (
          <>
            <li className={style.page}>
              <button
                onClick={() => setActivePage(1)}
                className={style['page-button']}
                type="button"
              >
                1
              </button>
            </li>
            <li className={style.boundary}>...</li>
            {Array(pagesCount)
              .fill(null)
              .map((_item, index) => index + 1)
              .slice(pagesCount - 3)
              .map((page) => (
                <li
                  key={nanoid()}
                  className={clsx(style.page, {
                    [style.page_current]: activePage === page,
                  })}
                >
                  <button
                    onClick={() => setActivePage(page)}
                    className={style['page-button']}
                    type="button"
                  >
                    {page}
                  </button>
                </li>
              ))}
          </>
        )}
        {activePage < pagesCount && (
          <li className={clsx(style.page, style.page_next)}>
            <button
              onClick={() => setActivePage((prevState) => prevState + 1)}
              className={style['page-button']}
              type="button"
            >
              <svg className={style.arrow}>
                <ArrowForwardWhiteSVG />
              </svg>
            </button>
          </li>
        )}
      </ul>
      <div className={style.label}>
        <span className={style.text}>
          {`1 – ${pagesCount} из ${paginationLabelPagesCount} вариантов аренды`}
        </span>
      </div>
    </div>
  );
};

export { Pagination };
