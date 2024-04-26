'use client';

import { useState, FC } from 'react';
import clsx from 'clsx';

import { ReactCalendar } from '@/libs';

import { Button, ClickAwayListener } from '../../atoms';
import { DropdownInput } from '../DropdownInput';
import {
  getFullStringDate,
  getStringDate,
  getFirstInputValue,
  getInitCalendarDates,
} from './helpers';
import style from './style.module.scss';

type CalendarValue = null | Date | [null | Date, null | Date];

type Props = {
  onChange(value: { from: string | null; to: string | null }): void;
  values: { from: string | null; to: string | null };
  isSingle?: boolean;
};

const Calendar: FC<Props> = ({ isSingle = false, values, onChange }) => {
  const [calendarValue, setCalendarValue] = useState<CalendarValue>(
    getInitCalendarDates(values),
  );
  const [isOpened, setIsOpened] = useState(false);
  const [firstInputValue, setFirstInputValue] = useState(
    getFirstInputValue(values, isSingle),
  );
  const [secondInputValue, setSecondInputValue] = useState(
    values.from === null ? '' : values.from,
  );

  const handleInputButtonClick = () => {
    setIsOpened(!isOpened);
  };

  const handleClearButtonClick = () => {
    setFirstInputValue('');
    setSecondInputValue('');
    setCalendarValue(null);
    onChange({ from: null, to: null });
  };

  const handleApplyButtonClick = () => {
    if (!(calendarValue instanceof Array)) {
      return;
    }

    const [firstDate, secondDate] = calendarValue;

    if (firstDate === null || secondDate === null) {
      return;
    }

    setIsOpened(false);

    const firstFullStringDate = getFullStringDate(firstDate);
    const secondFullStringDate = getFullStringDate(secondDate);

    if (isSingle) {
      setFirstInputValue(
        `${getStringDate(firstDate)} - ${getStringDate(secondDate)}`,
      );
      onChange({ from: firstFullStringDate, to: secondFullStringDate });
      return;
    }

    setFirstInputValue(firstFullStringDate);
    setSecondInputValue(secondFullStringDate);
    onChange({ from: firstFullStringDate, to: secondFullStringDate });
  };

  return (
    <ClickAwayListener
      onClose={() => {
        handleApplyButtonClick();
        setIsOpened(false);
      }}
    >
      <div className="calendar">
        <div className={style.inputs}>
          <DropdownInput
            type="text"
            value={firstInputValue}
            expanded={isOpened}
            onClick={handleInputButtonClick}
            placeholder={isSingle ? 'ДД.ММ.ГГГГ - ДД.ММ.ГГГГ' : 'ДД.ММ.ГГГГ'}
            readOnly
          />
          {!isSingle && (
            <DropdownInput
              type="text"
              value={secondInputValue}
              expanded={isOpened}
              onClick={handleInputButtonClick}
              placeholder="ДД.ММ.ГГГГ"
              readOnly
            />
          )}
        </div>
        <div
          className={clsx(style['calendar-menu'], {
            [style['calendar-menu_opened']]: isOpened,
          })}
        >
          <ReactCalendar value={calendarValue} onChange={setCalendarValue} />
          <div className={style['buttons-wrapper']}>
            <Button
              text="очистить"
              theme="link"
              onClick={handleClearButtonClick}
            />
            <Button
              text="применить"
              theme="link"
              onClick={handleApplyButtonClick}
            />
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export { Calendar };
