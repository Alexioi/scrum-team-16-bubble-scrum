import {
  Filter,
  Container,
  Typography,
  Pagination,
  HotelListSkeleton,
} from '@/components';

import style from './style.module.scss';

const SearchRoom = () => {
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
              <HotelListSkeleton />
            </div>
            <div className={style.pagination}>
              <Pagination maxItemsCountPerPage={12} itemsCount={189} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchRoom;
