'use client';

import dynamic from 'next/dynamic';
import React from 'react';

import { getPlural } from '@/helpers';
import style from './style.module.scss';

const Chart = dynamic(
  () =>
    import('@/components/molecules/Chart').then((component) => component.Chart),
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

const Impressions = () => {
  const count = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className={style.container}>
      <div className={style['chart-wrapper']}>
        <Chart data={data} />
        <p className={style.label}>
          <span className={style.count}>{count}</span>
          <span>{getPlural(['голос', 'голоса', 'голосов'], count)}</span>
        </p>
      </div>
      <div className={style.legend}>
        <ul className={style['legend-list']}>
          {data.map((item) => (
            <li className={style['legend-list_item']} key={item.name}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { Impressions };
