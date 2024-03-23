'use client';

import { useState } from 'react';

import { ReactCalendar } from '@/libs';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Calendar = () => {
  const [value, onChange] = useState<Value>();

  return <ReactCalendar value={value} onChange={onChange} />;
};

export { Calendar };
