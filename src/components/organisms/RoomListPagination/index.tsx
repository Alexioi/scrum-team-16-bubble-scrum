'use client';

import { FC, RefObject } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks';

import {
  paginationActions,
  selectCountCardsOnPage,
  selectCurrentPage,
} from '@/store';

import { Pagination } from '../Pagination';

type Props = {
  listRef: RefObject<HTMLDivElement>;
};

const RoomListPagination: FC<Props> = ({ listRef }) => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(selectCurrentPage);
  const countCards = useAppSelector(selectCountCardsOnPage);

  const makeHandleArrowButtonClick = (number: number) => {
    return () => {
      if (listRef.current) {
        listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
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
