'use client';

import { useAppDispatch, useAppSelector } from '@/hooks';

import {
  paginationActions,
  selectCurrentPage,
  selectRoomListData,
} from '@/store';

import { Pagination } from '../Pagination';

const RoomListPagination = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(selectCurrentPage);
  const roomListData = useAppSelector(selectRoomListData);

  const makeHandleArrowButtonClick = (number: number) => {
    return () => {
      dispatch(paginationActions.change(number));
    };
  };

  return (
    <Pagination
      onClick={makeHandleArrowButtonClick}
      itemsCount={roomListData.length}
      activePage={currentPage}
      pagesCount={Math.ceil(roomListData.length / 12)}
    />
  );
};

export { RoomListPagination };
