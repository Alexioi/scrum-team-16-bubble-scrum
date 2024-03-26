'use client';

import { useState, useEffect, FC, useRef } from 'react';
import clsx from 'clsx';

import { ReactCalendar } from '@/libs';

import { Button } from '../../atoms';
import { ButtonInput } from '../ButtonInput';
import { getFullStringDate, getStringDate } from './helpers';
import style from './style.module.scss';

type CalendarValue = Date | null | [Date | null, Date | null];

type Props = {
  isSingle: boolean;
};

const Calendar: FC<Props> = ({ isSingle }) => {
  const [calendarValue, setCalendarValue] = useState<CalendarValue>(null);
  const [isOpened, setIsOpened] = useState(false);
  const [firstInputValue, setFirstInputValue] = useState('');
  const [secondInputValue, setSecondInputValue] = useState('');
  const calendarRef = useRef(null);

  const handleInputButtonClick = () => {
    setIsOpened(!isOpened);
  };

  const handleClearButtonClick = () => {
    setFirstInputValue('');
    setSecondInputValue('');
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

  const handleClickOutsideCalendar = ({ target }: Event) => {
    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (target.contains(calendarRef.current)) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideCalendar);
    return () => {
      document.removeEventListener('click', handleClickOutsideCalendar);
    };
  }, []);

  return (
    <div className="calendar">
      <div className={style.inputs}>
        <ButtonInput
          type="text"
          defaultValue={firstInputValue}
          icon={<div>1</div>}
          onClick={handleInputButtonClick}
        />
        {isSingle || (
          <ButtonInput
            type="text"
            defaultValue={secondInputValue}
            icon={<div>1</div>}
            onClick={handleInputButtonClick}
          />
        )}
      </div>

      <div
        ref={calendarRef}
        className={clsx(style['calendar-menu'], {
          [style['calendar-menu_opened']]: isOpened,
        })}
      >
        <ReactCalendar value={calendarValue} onChange={setCalendarValue} />
        <div className={style['buttons-wrapper']}>
          <Button
            text="очистить"
            theme="link"
            type="button"
            size="default"
            onClick={handleClearButtonClick}
          />
          <Button
            text="применить"
            theme="link"
            type="button"
            size="default"
            onClick={handleApplyButtonClick}
          />
        </div>
      </div>
    </div>
  );
};

export { Calendar };
