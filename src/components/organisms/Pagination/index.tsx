'use client';

import { FC } from 'react';

import { ArrowButton, PaginationButton } from '@/components/atoms';
import { ITEMS_PER_PAGE } from '@/constants';

import style from './style.module.scss';

type Props = {
  onClick(number: -1 | 1): () => void;
  pagesCount: number;
  activePage: number;
  itemsCount: number;
};

const Pagination: FC<Props> = ({
  onClick,
  pagesCount,
  activePage,
  itemsCount,
}) => {
  const paginationLabelText = `${(activePage - 1) * ITEMS_PER_PAGE + 1} – ${activePage === pagesCount ? itemsCount : activePage * ITEMS_PER_PAGE} из ${itemsCount <= 100 ? itemsCount : '100+'} вариантов аренды`;

  if (pagesCount === 0) {
    return null;
  }

  if (pagesCount > 1 && pagesCount <= 7) {
    return (
      <div className={style.wrapper}>
        <ul className={style.list}>
          {activePage > 1 && (
            <ArrowButton direction="left" onClick={onClick(-1)} />
          )}
          {Array(pagesCount)
            .fill(null)
            .map((_item, index) => index + 1)
            .map((page) => (
              <PaginationButton
                key={page}
                pageNumber={page}
                activePage={activePage}
              />
            ))}
          {activePage < pagesCount && (
            <ArrowButton direction="right" onClick={onClick(1)} />
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
          <ArrowButton direction="left" onClick={onClick(-1)} />
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
                />
              ))}
            <li className={style.boundary}>...</li>
            <PaginationButton pageNumber={pagesCount} activePage={activePage} />
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
                />
              ))}
            <li className={style.boundary}>...</li>
            <PaginationButton pageNumber={pagesCount} activePage={activePage} />
          </>
        )}
        {activePage > 4 && activePage <= pagesCount - 4 && (
          <>
            <PaginationButton pageNumber={1} activePage={activePage} />
            <li className={style.boundary}>...</li>
            <PaginationButton
              pageNumber={activePage - 1}
              activePage={activePage}
            />
            <PaginationButton pageNumber={activePage} activePage={activePage} />
            <PaginationButton
              pageNumber={activePage + 1}
              activePage={activePage}
            />
            <li className={style.boundary}>...</li>
            <PaginationButton pageNumber={pagesCount} activePage={activePage} />
          </>
        )}
        {activePage >= pagesCount - 3 && activePage <= pagesCount - 1 && (
          <>
            <PaginationButton pageNumber={1} activePage={activePage} />
            <li className={style.boundary}>...</li>
            <PaginationButton
              pageNumber={activePage - 1}
              activePage={activePage}
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
                />
              ))}
          </>
        )}
        {activePage === pagesCount && (
          <>
            <PaginationButton pageNumber={1} activePage={activePage} />
            <li className={style.boundary}>...</li>
            <PaginationButton
              pageNumber={activePage - 2}
              activePage={activePage}
            />
            <PaginationButton
              pageNumber={activePage - 1}
              activePage={activePage}
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
                />
              ))}
          </>
        )}
        {activePage < pagesCount && (
          <ArrowButton direction="right" onClick={onClick(1)} />
        )}
      </ul>
      <div className={style.label}>
        <span className={style.text}>{paginationLabelText}</span>
      </div>
    </div>
  );
};

export { Pagination };
