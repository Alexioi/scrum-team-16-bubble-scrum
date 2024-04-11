'use client';

import { useEffect } from 'react';

import { getRoomCards } from '@/api';
import {
  paginationActions,
  roomListActions,
  selectAllFilters,
  selectCurrentPage,
  selectRoomListData,
  selectRoomListError,
  selectRoomListIsLoading,
} from '@/store';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { ErrorMessage } from '@/components/molecules';
import { ITEMS_PER_PAGE } from '@/constants';

import { HotelCard } from '../HotelCard';
import { HotelListSkeleton } from './HotelListSkeleton';
import style from './style.module.scss';
import { useFilter } from './hooks';

const HotelList = () => {
  const dispatch = useAppDispatch();
  const roomListData = useAppSelector(selectRoomListData);
  const roomListIsLoading = useAppSelector(selectRoomListIsLoading);
  const roomListError = useAppSelector(selectRoomListError);
  const currentPage = useAppSelector(selectCurrentPage);
  const filters = useAppSelector(selectAllFilters);

  const filterRoomListData = useFilter(filters, roomListData);

  useEffect(() => {
    dispatch(paginationActions.setCountCards(filterRoomListData.length));
    dispatch(paginationActions.change(1));
  }, [filterRoomListData, dispatch]);

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
    return (
      <ErrorMessage message="Произошла ошибка" description={roomListError} />
    );
  }

  if (roomListIsLoading) return <HotelListSkeleton />;

  if (filterRoomListData.length === 0) {
    return (
      <ErrorMessage
        message="Ничего не найдено"
        description="Попробуйте изменить фильтры"
      />
    );
  }

  return (
    <div className={style.list}>
      {filterRoomListData
        .slice(
          (currentPage - 1) * ITEMS_PER_PAGE,
          (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
        )
        .map((item) => {
          return <HotelCard key={item.id} hotel={item} />;
        })}
    </div>
  );
};

export { HotelList };
