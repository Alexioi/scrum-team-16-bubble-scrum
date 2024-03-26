'use client';

import { FC, Dispatch, SetStateAction } from 'react';
import Calendar from 'react-calendar';

import './style.scss';

type CalendarValue = Date | null | [Date | null, Date | null];

type Props = {
  value: CalendarValue;
  onChange: Dispatch<SetStateAction<CalendarValue>>;
};

const ReactCalendar: FC<Props> = ({ value, onChange }) => {
  return (
    <Calendar
      formatMonthYear={(_, date) => {
        const month = date.toLocaleString('default', { month: 'long' });
        const monthUpperFirstSymbol = month[0].toUpperCase() + month.slice(1);
        const year = date.getFullYear();

        return `${monthUpperFirstSymbol} ${year}`;
      }}
      onChange={onChange}
      value={value}
      locale="ru-RU"
      selectRange
      minDate={new Date()}
      minDetail="month"
    />
  );
};

export { ReactCalendar };
