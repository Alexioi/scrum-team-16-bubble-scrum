'use client';

import { useEffect } from 'react';

import { getRoomCards } from '@/api';
import {
  roomListActions,
  selectRoomListData,
  selectRoomListError,
  selectRoomListIsLoading,
  selectCurrentPage,
} from '@/store';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { ITEMS_PER_PAGE } from '@/constants';

import { Hotel, HotelCard } from '../HotelCard';
import style from './style.module.scss';

const HotelList = () => {
  const dispatch = useAppDispatch();
  const roomListData = useAppSelector(selectRoomListData);
  const roomListIsLoading = useAppSelector(selectRoomListIsLoading);
  const roomListError = useAppSelector(selectRoomListError);
  const currentPage = useAppSelector(selectCurrentPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(roomListActions.changeError(''));
        dispatch(roomListActions.changeIsLoading(true));
        const roomCards = await getRoomCards();
        dispatch(roomListActions.changeData(roomCards));
      } catch (err) {
        if (err instanceof Error) {
          dispatch(roomListActions.changeError(err.message));
          return;
        }
        dispatch(roomListActions.changeError('неизвестная ошибка'));
      } finally {
        dispatch(roomListActions.changeIsLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);

  if (roomListError !== '') {
    return <span>{roomListError}</span>;
  }

  if (roomListIsLoading) {
    return 'Загрузка...';
  }

  return (
    <div className={style.list}>
      {roomListData
        .reduce<(Hotel & { id: string })[]>((acc, item, i) => {
          if (
            i >= (currentPage - 1) * ITEMS_PER_PAGE &&
            i < (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
          ) {
            return [...acc, item];
          }

          return [...acc];
        }, [])
        .map((item) => {
          return (
            <HotelCard
              key={item.id}
              roomNumber={item.roomNumber}
              isLux={item.isLux}
              price={item.price}
              averageRating={item.averageRating}
              imageNames={item.imageNames}
              reviews={item.reviews}
            />
          );
        })}
    </div>
  );
};

export { HotelList };
