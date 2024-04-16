'use client';

import dynamic from 'next/dynamic';

const ImpressionsChart = dynamic(
  () =>
    import('@/components/molecules/ImpressionsChart').then(
      (component) => component.ImpressionsChart,
    ),
  { ssr: false },
);

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
  return <ImpressionsChart data={data} />;
};

export default RoomPage;
