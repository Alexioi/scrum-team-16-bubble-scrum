import { Filter, Container, Typography, ErrorMessage } from '@/components';

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
            <ErrorMessage
              message="Ничего не найдено"
              description="Попробуйте изменить параметры поиска"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchRoom;
