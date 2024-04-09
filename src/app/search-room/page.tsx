'use client';

import { useEffect, useState } from 'react';
import { actions } from '@/store';
import { useAppDispatch } from '@/hooks';
import {
  Filter,
  Container,
  Typography,
  HotelList,
  Pagination,
} from '@/components';
import { getRoomCardsCount } from '@/api';

import style from './style.module.scss';

const SearchRoom = () => {
  const dispatch = useAppDispatch();
  const [roomCardsCount, setRoomCardsCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const count = await getRoomCardsCount();
      setRoomCardsCount(count);
    };

    fetchData();
  }, []);

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
            <div className={style['room-list-wrapper']}>
              <HotelList />
            </div>
            <div className={style.pagination}>
              {new Array(Math.ceil(roomCardsCount / 12))
                .fill(undefined)
                .map((_, i) => {
                  return i + 1;
                })
                .map((item) => {
                  return (
                    <button
                      key={item}
                      onClick={() => {
                        dispatch(actions.pagination.change(item));
                      }}
                    >
                      {item}
                    </button>
                  );
                })}
              <Pagination maxItemsCountPerPage={12} itemsCount={189} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchRoom;
