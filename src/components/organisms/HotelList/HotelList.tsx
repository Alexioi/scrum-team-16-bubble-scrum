'use client';

import { useEffect } from 'react';

import { getRoomCards } from '@/api';
import {
  roomListActions,
  selectAllFilters,
  selectCurrentPage,
  selectRoomListData,
  selectRoomListError,
  selectRoomListIsLoading,
} from '@/store';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { ErrorMessage } from '@/components/molecules';

import { HotelCard } from '../HotelCard';
import { HotelListSkeleton } from './HotelListSkeleton';
import style from './style.module.scss';

const HotelList = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(selectCurrentPage);
  const roomListData = useAppSelector(selectRoomListData);
  const roomListIsLoading = useAppSelector(selectRoomListIsLoading);
  const roomListError = useAppSelector(selectRoomListError);
  const filters = useAppSelector(selectAllFilters);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(roomListActions.changeError(''));
        dispatch(roomListActions.changeIsLoading(true));
        const roomCards = await getRoomCards(currentPage, filters);
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
  }, [currentPage, dispatch, filters]);

  if (roomListError !== '') {
    return (
      <ErrorMessage message="Произошла ошибка" description={roomListError} />
    );
  }

  if (roomListIsLoading) return <HotelListSkeleton />;

  if (roomListData.length === 0) {
    return (
      <ErrorMessage
        message="Ничего не найдено"
        description="Попробуйте изменить фильтры"
      />
    );
  }

  return (
    <div className={style.list}>
      {roomListData.map((item) => (
        <HotelCard
          key={item.id}
          roomNumber={item.roomNumber}
          isLux={item.isLux}
          price={item.price}
          averageRating={item.averageRating}
          imageNames={item.imageNames}
          reviews={item.reviews}
        />
      ))}
    </div>
  );
};

export { HotelList };
