'use client';

import { actions } from '@/store';
import { useAppDispatch } from '@/hooks';
import {
  Filter,
  Container,
  Typography,
  HotelList,
  Pagination,
} from '@/components';

import style from './style.module.scss';

const SearchRoom = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={style['search-room']}>
      <Container>
        <div className={style.content}>
          <div className={style['filter-wrapper']}>
            <Filter />
          </div>
          <div className={style.column}>
            <Typography tag="h2">
              Номера, которые мы для вас подобрали
            </Typography>
            <div className={style['room-list-wrapper']}>
              <HotelList />
            </div>
            <div className={style.pagination}>
              {[1, 2, 3, 4, 5].map((item) => {
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
              <Pagination pagesCount={12} totalPagesCount={180} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchRoom;
