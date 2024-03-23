'use client';

import { useState, FC } from 'react';
import clsx from 'clsx';

import { ReactCalendar } from '@/libs';

import { Button } from '../../atoms';
import style from './style.module.scss';

type CalendarValue = Date | null | [Date | null, Date | null];

type Props = {
  isSingle: boolean;
};

const getFullStringDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const mouthString = String(month).length === 1 ? `0${month}` : month;

  return `${day}.${mouthString}.${year}`;
};

const getStringDate = (date: Date) => {
  const day = date.getDate();
  const month = date
    .toLocaleString('default', { month: 'short' })
    .substring(0, 3);

  return `${day} ${month}`;
};

const Calendar: FC<Props> = ({ isSingle }) => {
  const [calendarValue, setCalendarValue] = useState<CalendarValue>();
  const [isOpened, setIsOpened] = useState(false);
  const [firstInputValue, setFirstInputValue] = useState('');
  const [secondInputValue, setSecondInputValue] = useState('');

  const handleInputButtonClick = () => {
    setIsOpened(!isOpened);
  };

  const handleClearButtonClick = () => {
    setCalendarValue(null);
  };

  const handleApplyButtonClick = () => {
    if (!(calendarValue instanceof Array)) {
      return;
    }

    const [firstDate, secondDate] = calendarValue;

    if (firstDate === null || secondDate === null) {
      return;
    }

    if (isSingle) {
      setFirstInputValue(
        `${getStringDate(firstDate)}-${getStringDate(secondDate)}`,
      );
    } else {
      setFirstInputValue(getFullStringDate(firstDate));
      setSecondInputValue(getFullStringDate(secondDate));
    }

    setIsOpened(!isOpened);
  };

  return (
    <div>
      <input type="text" defaultValue={firstInputValue} />
      {isSingle || <input defaultValue={secondInputValue} type="text" />}
      <button onClick={handleInputButtonClick}>open</button>
      <div
        className={clsx(style.calendar, { [style.calendar_opened]: isOpened })}
      >
        <ReactCalendar value={calendarValue} onChange={setCalendarValue} />
        <div className={style['buttons-wrapper']}>
          <Button
            text="очистить"
            theme="link"
            type="button"
            onClick={handleClearButtonClick}
          />
          <Button
            text="применить"
            theme="link"
            type="button"
            onClick={handleApplyButtonClick}
          />
        </div>
      </div>
    </div>
  );
};

export { Calendar };
