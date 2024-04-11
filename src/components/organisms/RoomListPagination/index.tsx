'use client';

import { useState, useEffect } from 'react';

import { useAppDispatch } from '@/hooks';
import { getRoomCardsCount } from '@/api';
import { paginationActions } from '@/store';

import { Pagination } from '../Pagination';

const RoomListPagination = () => {
  const dispatch = useAppDispatch();
  const [activePage, setActivePage] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);
  const [itemsCount, setItemCount] = useState(0);

  const makeHandleArrowButtonClick = (number: -1 | 1) => {
    return () => {
      dispatch(paginationActions.change(number));
      setActivePage(activePage + number);
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      const count = await getRoomCardsCount();

      setItemCount(count);
      setPagesCount(Math.ceil(count / 12));
    };

    fetchData();
  }, []);

  return (
    <Pagination
      onClick={makeHandleArrowButtonClick}
      itemsCount={itemsCount}
      activePage={activePage}
      pagesCount={pagesCount}
    />
  );
};

export { RoomListPagination };
