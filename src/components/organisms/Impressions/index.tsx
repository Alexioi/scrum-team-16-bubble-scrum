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
  return (
    <div className={style.container}>
      <div className={style['chart-wrapper']}>
        <Chart data={data} />
        <p className={style.label}>
          <span className={style.label_count}>260</span>
          <span>голосов</span>
        </p>
      </div>
      <div className={style.legend}>
        <ul className={style['legend-list']}>
          <li className={style['legend-list_item']}>Великолепно</li>
          <li className={style['legend-list_item']}>Хорошо</li>
          <li className={style['legend-list_item']}>Удовлетворительно</li>
          <li className={style['legend-list_item']}>Разочарован</li>
        </ul>
      </div>
    </div>
  );
};

export { Impressions };
