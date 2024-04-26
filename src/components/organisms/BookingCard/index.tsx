'use client';

import { useState } from 'react';

import {
  Calendar,
  Typography,
  Dropdown,
  Button,
  RoomInfo,
  Card,
} from '@/components';
import { useAppSelector } from '@/hooks';
import { selectRoom, selectRoomIsLoading } from '@/store';

import { Skeleton } from './Skeleton';
import { calculateDays } from './helpers';
import style from './style.module.scss';

const BookingCard = () => {
  const room = useAppSelector(selectRoom);
  const roomIsLoading = useAppSelector(selectRoomIsLoading);
  const [dates, setDates] = useState<[null, null] | [string, string]>([
    null,
    null,
  ]);
  const [guests, setGuests] = useState([
    { name: 'взрослые', counter: 0 },
    { name: 'дети', counter: 0 },
    { name: 'младенцы', counter: 0 },
  ]);

  const price = room === null ? 0 : room.price;
  const roomNumber = room === null ? 0 : room.roomNumber;
  const isLux = room === null ? false : room.isLux;
  const discount = room === null ? 0 : room.discount;
  const additionalServices = room === null ? 0 : room.additionalServices;
  const day = dates[0] === null && dates[1] === null ? 0 : calculateDays(dates);
  const expensesItems = [
    {
      about: `${price.toLocaleString()}₽ х ${day} суток`,
      value: `${(price * day).toLocaleString()}₽`,
      info: '',
    },
    { about: 'Скидка', value: discount, info: 'Тут что-то про скидку' },
    {
      about: 'Сбор за дополнительные услуги',
      value: additionalServices,
      info: 'Тут что-то про доп. услуги',
    },
  ];

  const handleCalendarChange = (values: [null, null] | [string, string]) => {
    setDates(values);
  };

  const handleDropdownChange = (
    value: {
      name: string;
      counter: number;
    }[],
  ) => {
    setGuests(value);
  };

  if (roomIsLoading) {
    return <Skeleton />;
  }

  return (
    <Card>
      <form>
        <RoomInfo
          roomNumber={roomNumber}
          isLux={isLux}
          price={price}
          isBigRoomNumber
        />
        <div className={style.calendar}>
          <div className={style['calendar-heading']}>
            <Typography tag="h3">Прибытие</Typography>
            <Typography tag="h3">Выезд</Typography>
          </div>
          <Calendar values={dates} onChange={handleCalendarChange} />
        </div>
        <div className={style['dropdown-heading']}>
          <Typography tag="h3">Гости</Typography>
        </div>
        <Dropdown
          items={guests}
          placeholder="Сколько гостей"
          groups={[[0, 1], [2]]}
          onChange={handleDropdownChange}
          variants={[
            ['гость', 'гостя', 'гостей'],
            ['младенец', 'младенца', 'младенцев'],
          ]}
        />
        <ul className={style['expenses-list']}>
          {expensesItems.map((item) => {
            return (
              <li className={style['expenses-item']} key={item.about}>
                <div className={style['expenses-about']}>{item.about}</div>
                {item.info !== '' && (
                  <div
                    className={style['expenses-info']}
                    data-info={item.info}
                    tabIndex={0}
                  />
                )}
                <div className={style['expenses-value']}>{item.value}</div>
              </li>
            );
          })}
          <div className={style.total}>
            <span className={style['total-text']}>Итого</span>
            <span className={style['total-line']} />
            <span className={style['total-value']}>
              {day === 0
                ? 0
                : (
                    price * day -
                    discount +
                    additionalServices
                  ).toLocaleString()}
            </span>
          </div>
        </ul>
        <Button theme="long" onClick={() => {}} text="забронировать" />
      </form>
    </Card>
  );
};

export { BookingCard };
