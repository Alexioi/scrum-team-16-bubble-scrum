'use client';

import { useRef } from 'react';

import {
  Filter,
  Container,
  Typography,
  HotelList,
  RoomListPagination,
} from '@/components';

import style from './style.module.scss';

const SearchRoom = () => {
  const listRef = useRef<HTMLDivElement>(null);

  const handlePaginationButtonClick = () => {
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={style['search-room']}>
      <Container>
        <div className={style.content}>
          <div className={style['filter-wrapper']}>
            <Filter />
          </div>
          <div className={style.column}>
            <Typography tag="h1">
              Номера, которые мы для вас подобрали
            </Typography>
            <div className={style['room-list-wrapper']} ref={listRef}>
              <HotelList />
            </div>
            <div className={style.pagination}>
              <RoomListPagination onClick={handlePaginationButtonClick} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchRoom;
