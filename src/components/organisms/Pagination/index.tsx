'use client';

import { FC, useState } from 'react';
import { nanoid } from 'nanoid';

import { ArrowButton, PaginationButton } from '@/components/atoms';
import { Direction } from '@/enums/direction.enum';

import style from './style.module.scss';

type Props = {
  pagesCount: number;
  totalPagesCount: number;
};

const Pagination: FC<Props> = ({ pagesCount, totalPagesCount }) => {
  const paginationLabelPagesCount =
    totalPagesCount <= 100 ? totalPagesCount : '100+';

  const [activePage, setActivePage] = useState(1);

  if (pagesCount > 0 && pagesCount <= 7) {
    return (
      <div className={style.wrapper}>
        <ul className={style.list}>
          {activePage > 1 && (
            <ArrowButton direction={Direction.Left} onClick={setActivePage} />
          )}
          {Array(pagesCount)
            .fill(null)
            .map((_page, index) => (
              <PaginationButton
                key={nanoid()}
                pageNumber={index + 1}
                activePage={activePage}
                onClick={setActivePage}
              />
            ))}
          {activePage < pagesCount && (
            <ArrowButton direction={Direction.Right} onClick={setActivePage} />
          )}
        </ul>
      </div>
    );
  }

  if (pagesCount > 7) {
    return (
      <div className={style.wrapper}>
        <ul className={style.list}>
          {activePage > 1 && (
            <ArrowButton direction={Direction.Left} onClick={setActivePage} />
          )}
          {activePage < 3 && (
            <>
              {Array(pagesCount)
                .fill(null)
                .slice(0, 3)
                .map((_page, index) => (
                  <PaginationButton
                    key={nanoid()}
                    pageNumber={index + 1}
                    activePage={activePage}
                    onClick={setActivePage}
                  />
                ))}
              <li className={style.boundary}>...</li>
              <PaginationButton
                pageNumber={pagesCount}
                activePage={activePage}
                onClick={setActivePage}
              />
            </>
          )}
          {(activePage === 3 || activePage === 4) && (
            <>
              {Array(pagesCount)
                .fill(null)
                .slice(0, activePage + 1)
                .map((_page, index) => (
                  <PaginationButton
                    key={nanoid()}
                    pageNumber={index + 1}
                    activePage={activePage}
                    onClick={setActivePage}
                  />
                ))}
              <li className={style.boundary}>...</li>
              <PaginationButton
                key={nanoid()}
                pageNumber={pagesCount}
                activePage={activePage}
                onClick={setActivePage}
              />
            </>
          )}
          {activePage > 4 && activePage <= pagesCount - 4 && (
            <>
              <PaginationButton
                pageNumber={1}
                activePage={activePage}
                onClick={setActivePage}
              />
              <li className={style.boundary}>...</li>
              <PaginationButton
                pageNumber={activePage - 1}
                activePage={activePage}
                onClick={setActivePage}
              />
              <PaginationButton
                pageNumber={activePage}
                activePage={activePage}
                onClick={setActivePage}
              />
              <PaginationButton
                pageNumber={activePage + 1}
                activePage={activePage}
                onClick={setActivePage}
              />
              <li className={style.boundary}>...</li>
              <PaginationButton
                pageNumber={pagesCount}
                activePage={activePage}
                onClick={setActivePage}
              />
            </>
          )}
          {activePage >= pagesCount - 3 && activePage <= pagesCount - 1 && (
            <>
              <PaginationButton
                pageNumber={1}
                activePage={activePage}
                onClick={setActivePage}
              />
              <li className={style.boundary}>...</li>
              <PaginationButton
                pageNumber={activePage - 1}
                activePage={activePage}
                onClick={setActivePage}
              />
              {Array(pagesCount)
                .fill(null)
                .map((_item, index) => index + 1)
                .slice(activePage - 1)
                .map((page) => (
                  <PaginationButton
                    key={nanoid()}
                    pageNumber={page}
                    activePage={activePage}
                    onClick={setActivePage}
                  />
                ))}
            </>
          )}
          {activePage === pagesCount && (
            <>
              <PaginationButton
                pageNumber={1}
                activePage={activePage}
                onClick={setActivePage}
              />
              <li className={style.boundary}>...</li>
              <PaginationButton
                pageNumber={activePage - 2}
                activePage={activePage}
                onClick={setActivePage}
              />
              <PaginationButton
                pageNumber={activePage - 1}
                activePage={activePage}
                onClick={setActivePage}
              />
              {Array(pagesCount)
                .fill(null)
                .map((_item, index) => index + 1)
                .slice(activePage - 1)
                .map((page) => (
                  <PaginationButton
                    key={nanoid()}
                    pageNumber={page}
                    activePage={activePage}
                    onClick={setActivePage}
                  />
                ))}
            </>
          )}
          {activePage < pagesCount && (
            <ArrowButton direction={Direction.Right} onClick={setActivePage} />
          )}
        </ul>
        <div className={style.label}>
          <span className={style.text}>
            {`1 – ${pagesCount} из ${paginationLabelPagesCount} вариантов аренды`}
          </span>
        </div>
      </div>
    );
  }

  return null;
};

export { Pagination };
