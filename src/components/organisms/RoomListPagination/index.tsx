'use client';

import { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { getRoomCardsCount, getRoomCards } from '@/api';
import { roomListActions, selectRoomListData } from '@/store';

import { Pagination } from '../Pagination';

const RoomListPagination = () => {
  const dispatch = useAppDispatch();
  const roomListData = useAppSelector(selectRoomListData);
  const [activePage, setActivePage] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);
  const [itemsCount, setItemCount] = useState(0);

  const makeHandleArrowButtonClick = (
    number: -1 | 1,
    direction: 'next' | 'back',
  ) => {
    return () => {
      // dispatch(paginationActions.change(number));
      setActivePage(activePage + number);
      const firstOrLastItemIndex =
        direction === 'next'
          ? roomListData[roomListData.length - 1].roomNumber
          : roomListData[0].roomNumber;

      const getRoomCard = async () => {
        const roomCards = await getRoomCards(direction, firstOrLastItemIndex);
        dispatch(roomListActions.changeData(roomCards));
      };

      getRoomCard();
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
      onClickBack={makeHandleArrowButtonClick(-1, 'back')}
      onClickNext={makeHandleArrowButtonClick(1, 'next')}
      itemsCount={itemsCount}
      activePage={activePage}
      pagesCount={pagesCount}
    />
  );
};

export { RoomListPagination };
