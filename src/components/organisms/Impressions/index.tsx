'use client';

import dynamic from 'next/dynamic';
import React, { FC } from 'react';

import style from './style.module.scss';

const Chart = dynamic(
  () =>
    import('@/components/molecules/Chart').then((component) => component.Chart),
  { ssr: false },
);

type Value = {
  name: string;
  value: number;
};

type Props = {
  data: Value[];
};

const Impressions: FC<Props> = ({ data }) => {
  const count = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className={style.container}>
      <div className={style['chart-wrapper']}>
        <Chart data={data} />
        <p className={style.label}>
          <span className={style.count}>{count}</span>
          <span>голосов</span>
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
