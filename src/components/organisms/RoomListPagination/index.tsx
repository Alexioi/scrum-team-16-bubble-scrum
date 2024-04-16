'use client';

import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks';

import {
  paginationActions,
  selectCountCardsOnPage,
  selectCurrentPage,
} from '@/store';

import { Pagination } from '../Pagination';

type Props = {
  onClick: () => void;
};

const RoomListPagination: FC<Props> = ({ onClick }) => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(selectCurrentPage);
  const countCards = useAppSelector(selectCountCardsOnPage);

  const makeHandleArrowButtonClick = (number: number) => {
    return () => {
      onClick();
      dispatch(paginationActions.change(number));
    };
  };

  return (
    <Pagination
      makeOnClick={makeHandleArrowButtonClick}
      itemsCount={countCards}
      activePage={currentPage}
      pagesCount={Math.ceil(countCards / 12)}
    />
  );
};

export { RoomListPagination };
