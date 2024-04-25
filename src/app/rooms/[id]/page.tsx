'use client';

import { FC } from 'react';

import {
  BookingCard,
  GetRoomCardData,
  Container,
  CommentList,
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
                  icon-text-list
                </section>
                <section className={style['pie-chart']}>pie-chart</section>
              </div>
              <CommentList />
            </div>
          </div>
          <div className={style['room-booking']}>
            <BookingCard />
          </div>
        </Container>
      </div>
    </GetRoomCardData>
  );
};

export default RoomPage;
