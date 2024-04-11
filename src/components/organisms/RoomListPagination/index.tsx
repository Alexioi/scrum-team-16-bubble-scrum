'use client';

import { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { getRoomCardsCount } from '@/api';
import { paginationActions, selectCurrentPage } from '@/store';

import { Pagination } from '../Pagination';

const RoomListPagination = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(selectCurrentPage);
  const [pagesCount, setPagesCount] = useState(0);
  const [itemsCount, setItemCount] = useState(0);

  const makeHandleArrowButtonClick = (number: number) => {
    return () => {
      dispatch(paginationActions.change(number));
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
      activePage={currentPage}
      pagesCount={pagesCount}
    />
  );
};

export { RoomListPagination };
