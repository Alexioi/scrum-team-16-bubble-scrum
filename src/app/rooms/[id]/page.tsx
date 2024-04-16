'use client';

import { Impressions } from '@/components';

const data = [
  {
    name: 'Великолепно',
    value: 130,
  },
  {
    name: 'Хорошо',
    value: 65,
  },
  {
    name: 'Удовлетворительно',
    value: 65,
  },
  {
    name: 'Разочарован',
    value: 0,
  },
];

const RoomPage = () => {
  return <Impressions data={data} />;
};

export default RoomPage;
