import { Filter, Container, Typography } from '@/components';

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
            <Typography tag="h2">
              Номера, которые мы для вас подобрали
            </Typography>
            <div className={style['room-list-wrapper']}>room-list</div>
            <div className={style.pagination}>pagination</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchRoom;
