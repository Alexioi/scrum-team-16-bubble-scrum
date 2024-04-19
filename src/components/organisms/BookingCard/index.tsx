'use client';

import { Calendar, Typography, Dropdown, Button, RoomInfo } from '@/components';

import style from './style.module.scss';

const BookingCard = () => {
  const isLux = true;
  const price = 10;

  const roomNumber = 1000;
  const expensesItems = [
    {
      about: `${price.toLocaleString()}₽ х 4 суток`,
      value: `(${(price * 4).toLocaleString()}₽`,
      info: '',
    },
    { about: 'Скидка', value: '0', info: 'Тут что-то про скидку' },
    {
      about: 'Сбор за дополнительные услуги',
      value: '0',
      info: 'Тут что-то про доп. услуги',
    },
  ];

  return (
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
        <Calendar values={[null, null]} onChange={() => {}} />
      </div>
      <div className={style['dropdown-heading']}>
        <Typography tag="h3">Гости</Typography>
      </div>
      <Dropdown
        items={[
          { name: 'взрослые', counter: 0 },
          { name: 'дети', counter: 0 },
          { name: 'младенцы', counter: 0 },
        ]}
        placeholder="Сколько гостей"
        groups={[[0, 1], [2]]}
        onChange={() => {}}
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
            {(price * 4).toLocaleString()}
          </span>
        </div>
      </ul>
      <Button theme="long" onClick={() => {}} text="забронировать" />
    </form>
  );
};

export { BookingCard };
