'use client';

import { FC } from 'react';

import { ArrowButton, PaginationButton } from '@/components/atoms';
import { ITEMS_PER_PAGE } from '@/constants';

import style from './style.module.scss';

type Props = {
  pagesCount: number;
  activePage: number;
  itemsCount: number;
  onClick(number: number): () => void;
};

const Pagination: FC<Props> = ({
  pagesCount,
  activePage,
  itemsCount,
  onClick,
}) => {
  const paginationLabelText = `${(activePage - 1) * ITEMS_PER_PAGE + 1} – ${activePage === pagesCount ? itemsCount : activePage * ITEMS_PER_PAGE} из ${itemsCount <= 100 ? itemsCount : '100+'} вариантов аренды`;

  if (pagesCount <= 1) {
    return null;
  }

  if (pagesCount > 1 && pagesCount <= 7) {
    return (
      <div className={style.wrapper}>
        <ul className={style.list}>
          {activePage > 1 && (
            <ArrowButton direction="left" onClick={onClick(activePage - 1)} />
          )}
          {Array(pagesCount)
            .fill(null)
            .map((_item, index) => index + 1)
            .map((page) => (
              <PaginationButton
                key={page}
                pageNumber={page}
                activePage={activePage}
                onClick={onClick(page)}
              />
            ))}
          {activePage < pagesCount && (
            <ArrowButton direction="right" onClick={onClick(activePage + 1)} />
          )}
        </ul>
        <div className={style.label}>
          <span className={style.text}>{paginationLabelText}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={style.wrapper}>
      <ul className={style.list}>
        {activePage > 1 && (
          <ArrowButton direction="left" onClick={onClick(activePage - 1)} />
        )}
        {activePage < 3 && (
          <>
            {Array(pagesCount)
              .fill(null)
              .map((_item, index) => index + 1)
              .slice(0, 3)
              .map((page) => (
                <PaginationButton
                  key={page}
                  pageNumber={page}
                  activePage={activePage}
                  onClick={onClick(page)}
                />
              ))}
            <li className={style.boundary}>...</li>
            <PaginationButton
              pageNumber={pagesCount}
              activePage={activePage}
              onClick={onClick(pagesCount)}
            />
          </>
        )}
        {(activePage === 3 || activePage === 4) && (
          <>
            {Array(pagesCount)
              .fill(null)
              .map((_item, index) => index + 1)
              .slice(0, activePage + 1)
              .map((page) => (
                <PaginationButton
                  key={page}
                  pageNumber={page}
                  activePage={activePage}
                  onClick={onClick(page)}
                />
              ))}
            <li className={style.boundary}>...</li>
            <PaginationButton
              pageNumber={pagesCount}
              activePage={activePage}
              onClick={onClick(pagesCount)}
            />
          </>
        )}
        {activePage > 4 && activePage <= pagesCount - 4 && (
          <>
            <PaginationButton
              pageNumber={1}
              activePage={activePage}
              onClick={onClick(1)}
            />
            <li className={style.boundary}>...</li>
            <PaginationButton
              pageNumber={activePage - 1}
              activePage={activePage}
              onClick={onClick(activePage - 1)}
            />
            <PaginationButton
              pageNumber={activePage}
              activePage={activePage}
              onClick={onClick(activePage)}
            />
            <PaginationButton
              pageNumber={activePage + 1}
              activePage={activePage}
              onClick={onClick(activePage + 1)}
            />
            <li className={style.boundary}>...</li>
            <PaginationButton
              pageNumber={pagesCount}
              activePage={activePage}
              onClick={onClick(pagesCount)}
            />
          </>
        )}
        {activePage >= pagesCount - 3 && activePage <= pagesCount - 1 && (
          <>
            <PaginationButton
              pageNumber={1}
              activePage={activePage}
              onClick={onClick(1)}
            />
            <li className={style.boundary}>...</li>
            <PaginationButton
              pageNumber={activePage - 1}
              activePage={activePage}
              onClick={onClick(activePage - 1)}
            />
            {Array(pagesCount)
              .fill(null)
              .map((_item, index) => index + 1)
              .slice(activePage - 1)
              .map((page) => (
                <PaginationButton
                  key={page}
                  pageNumber={page}
                  activePage={activePage}
                  onClick={onClick(page)}
                />
              ))}
          </>
        )}
        {activePage === pagesCount && (
          <>
            <PaginationButton
              pageNumber={1}
              activePage={activePage}
              onClick={onClick(1)}
            />
            <li className={style.boundary}>...</li>
            <PaginationButton
              pageNumber={activePage - 2}
              activePage={activePage}
              onClick={onClick(activePage - 2)}
            />
            <PaginationButton
              pageNumber={activePage - 1}
              activePage={activePage}
              onClick={onClick(activePage - 1)}
            />
            {Array(pagesCount)
              .fill(null)
              .map((_item, index) => index + 1)
              .slice(activePage - 1)
              .map((page) => (
                <PaginationButton
                  key={page}
                  pageNumber={page}
                  activePage={activePage}
                  onClick={onClick(page)}
                />
              ))}
          </>
        )}
        {activePage < pagesCount && (
          <ArrowButton direction="right" onClick={onClick(activePage + 1)} />
        )}
      </ul>
      <div className={style.label}>
        <span className={style.text}>{paginationLabelText}</span>
      </div>
    </div>
  );
};

export { Pagination };
