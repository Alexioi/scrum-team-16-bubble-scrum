'use client';

import { useAppDispatch, useAppSelector } from '@/hooks';

import {
  paginationActions,
  selectCountCardsOnPage,
  selectCurrentPage,
} from '@/store';

import { Pagination } from '../Pagination';

const RoomListPagination = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(selectCurrentPage);
  const countCards = useAppSelector(selectCountCardsOnPage);

  const makeHandleArrowButtonClick = (number: number) => {
    return () => {
      dispatch(paginationActions.change(number));
    };
  };

  return (
    <Pagination
      onClick={makeHandleArrowButtonClick}
      itemsCount={countCards}
      activePage={currentPage}
      pagesCount={Math.ceil(countCards / 12)}
    />
  );
};

export { RoomListPagination };
