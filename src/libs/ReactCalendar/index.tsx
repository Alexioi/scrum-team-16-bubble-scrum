'use client';

import { FC, Dispatch, SetStateAction } from 'react';
import dynamic from 'next/dynamic';

import ArrowSVG from '@/images/decorative/arrow.svg';

import './style.scss';

const Calendar = dynamic(() => import('react-calendar'), { ssr: false });

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
      selectRange
      minDate={new Date()}
      minDetail="month"
      prevLabel={
        <svg height={18}>
          <ArrowSVG />
        </svg>
      }
      nextLabel={
        <svg height={18}>
          <ArrowSVG />
        </svg>
      }
    />
  );
};

export { ReactCalendar };
