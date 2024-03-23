'use client';

import Calendar from 'react-calendar';

import './style.scss';

const ReactCalendar = ({ value, onChange }: any) => {
  return (
    <Calendar
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
