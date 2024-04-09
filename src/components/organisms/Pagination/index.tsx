'use client';

import { useState, useEffect } from 'react';

import { ArrowButton, PaginationButton } from '@/components/atoms';
import { getRoomCardsCount } from '@/api';

import style from './style.module.scss';

const maxItemsCountPerPage = 12;

const Pagination = () => {
  const [activePage, setActivePage] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);
  const [itemsCount, setItemCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const count = await getRoomCardsCount();

      setItemCount(count);
      setPagesCount(Math.ceil(count / 12));
    };

    fetchData();
  }, []);

  const paginationLabelText = `${(activePage - 1) * maxItemsCountPerPage + 1} – ${activePage === pagesCount ? itemsCount : activePage * maxItemsCountPerPage} из ${itemsCount <= 100 ? itemsCount : '100+'} вариантов аренды`;
  if (pagesCount === 0) {
    return null;
  }

  if (pagesCount > 1 && pagesCount <= 7) {
    return (
      <div className={style.wrapper}>
        <ul className={style.list}>
          {activePage > 1 && (
            <ArrowButton direction="left" onClick={setActivePage} />
          )}
          {Array(pagesCount)
            .fill(null)
            .map((_item, index) => index + 1)
            .map((page) => (
              <PaginationButton
                key={page}
                pageNumber={page}
                activePage={activePage}
                onClick={setActivePage}
              />
            ))}
          {activePage < pagesCount && (
            <ArrowButton direction="right" onClick={setActivePage} />
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
          <ArrowButton direction="left" onClick={setActivePage} />
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
              .map((_item, index) => index + 1)
              .slice(0, activePage + 1)
              .map((page) => (
                <PaginationButton
                  key={page}
                  pageNumber={page}
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
                  key={page}
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
                  key={page}
                  pageNumber={page}
                  activePage={activePage}
                  onClick={setActivePage}
                />
              ))}
          </>
        )}
        {activePage < pagesCount && (
          <ArrowButton direction="right" onClick={setActivePage} />
        )}
      </ul>
      <div className={style.label}>
        <span className={style.text}>{paginationLabelText}</span>
      </div>
    </div>
  );
};

export { Pagination };
