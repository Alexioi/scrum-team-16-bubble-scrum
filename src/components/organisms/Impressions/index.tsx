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
        <ul>
          <li>Великолепно</li>
          <li>Хорошо</li>
          <li>Удовлетворительно</li>
          <li>Разочарован</li>
        </ul>
      </div>
    </div>
  );
};

export { Impressions };
