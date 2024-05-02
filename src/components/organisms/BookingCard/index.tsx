'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import {
  Calendar,
  Typography,
  Dropdown,
  Button,
  RoomInfo,
  Card,
  DangerErrorMessage,
} from '@/components';
import { useAppSelector } from '@/hooks';
import { selectRoom, selectUID } from '@/store';
import { createBooking, getBooking } from '@/api';
import { getPlural } from '@/helpers';

import { Skeleton } from './Skeleton';
import { calculateDays } from './helpers';
import style from './style.module.scss';

const BookingCard = () => {
  const router = useRouter();
  const uid = useAppSelector(selectUID);
  const room = useAppSelector(selectRoom);
  const [from, setFrom] = useState<string | null>(null);
  const [to, setTo] = useState<string | null>(null);
  const [isBooking, setIsBooking] = useState(false);
  const [guestCount, setGuestCount] = useState(0);
  const [babyCount, setBabyCount] = useState(0);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
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
  const day = calculateDays({ from, to });
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

  const handleCalendarChange = (values: {
    from: string | null;
    to: string | null;
  }) => {
    setFrom(values.from);
    setTo(values.to);
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (uid === null || uid === '') {
      router.push('/sign-in');
      return;
    }

    setError('');
    if (
      room === null ||
      from === null ||
      to === null ||
      guests[0].counter + guests[1].counter + guests[2].counter === 0
    ) {
      setError('Гости или даты не выбраны.');
      return;
    }

    try {
      await createBooking(
        uid,
        room.id,
        price * day - discount + additionalServices,
        guests[0].counter + guests[1].counter,
        guests[2].counter,
        from,
        to,
      );
      setGuestCount(guests[0].counter + guests[1].counter);
      setBabyCount(guests[2].counter);
      setIsBooking(true);
    } catch (err) {
      setError('Что то пошло не так, попробуйте забронировать еще раз.');
    }
  };

  const handleDropdownChange = (
    value: {
      name: string;
      counter: number;
    }[],
  ) => {
    setGuests(value);
  };

  useEffect(() => {
    if (room === null) {
      return;
    }

    const fetchData = async () => {
      const result = await getBooking(room.id);

      if (result === null) {
        setIsLoading(false);
        return;
      }

      setIsBooking(true);
      setGuestCount(result.guestCount);
      setBabyCount(result.babyCount);
      setFrom(result.startDate);
      setTo(result.endDate);
      setIsLoading(false);
    };

    fetchData();
  }, [room]);

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <Card>
      <form onSubmit={handleFormSubmit}>
        <RoomInfo
          roomNumber={roomNumber}
          isLux={isLux}
          price={price}
          isBigRoomNumber
        />
        {isBooking && (
          <div>
            <Typography tag="span">
              {guestCount} {getPlural(['гость', 'гостя', 'гостей'], guestCount)}
            </Typography>
            ,
            <Typography tag="span">
              {babyCount}{' '}
              {getPlural(['младенец', 'младенца', 'младенцев'], babyCount)}
            </Typography>
          </div>
        )}
        {!isBooking && (
          <div className={style.calendar}>
            <div className={style['calendar-heading']}>
              <Typography tag="h3">Прибытие</Typography>
              <Typography tag="h3">Выезд</Typography>
            </div>
            <Calendar values={{ from, to }} onChange={handleCalendarChange} />
          </div>
        )}
        {!isBooking && (
          <>
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
          </>
        )}
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
        <DangerErrorMessage>{error}</DangerErrorMessage>
        {!isBooking && (
          <Button theme="long" type="submit" text="забронировать" />
        )}
        {isBooking && <div className={style.text}>Забронировано</div>}
      </form>
    </Card>
  );
};

export { BookingCard };
