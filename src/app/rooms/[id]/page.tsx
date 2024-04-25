'use client';

import { FC } from 'react';

import {
  BookingCard,
  GetRoomCardData,
  Container,
  CommentList,
  RoomFeatures,
  Typography,
} from '@/components';

import style from './style.module.scss';

type Props = { params: { id: string } };

const RoomPage: FC<Props> = ({ params }) => {
  return (
    <GetRoomCardData id={params.id}>
      <div className={style['room-details']}>
        Галерея
        <Container>
          <div className={style['content-block']}>
            <div className={style['content-column']}>
              <div className={style['room-statistic']}>
                <section className={style['icon-text-list']}>
                  <RoomFeatures />
                </section>
                <section className={style['pie-chart']}>pie-chart</section>
              </div>
              <CommentList />
              <div className={style.rules}>
                <section className={style['bullet-list']}>rules</section>
                <section className={style.reset}>
                  <Typography tag="h2">Отмена</Typography>
                  <div className={style.text}>
                    Бесплатная отмена в течение 48 ч. После этого при отмене не
                    позднее чем за 5 дн. до прибытия вы получите полный возврат
                    за вычетом сбора за услуги.
                  </div>
                </section>
              </div>
            </div>

            <div className={style['room-booking']}>
              <BookingCard />
            </div>
          </div>
        </Container>
      </div>
    </GetRoomCardData>
  );
};

export default RoomPage;
