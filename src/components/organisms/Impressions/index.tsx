'use client';

import dynamic from 'next/dynamic';
import React from 'react';

import { selectRoom } from '@/store';
import { useAppSelector } from '@/hooks';
import { getObjectValuesSum, getPlural } from '@/helpers';

import { Skeleton } from './Skeleton';
import style from './style.module.scss';

const Chart = dynamic(
  () => import('@/libs/Chart').then((component) => component.Chart),
  { ssr: false },
);

const reviewNameLocale: { [key: string]: string } = {
  great: 'Великолепно',
  good: 'Хорошо',
  satisfactorily: 'Удовлетворительно',
  bad: 'Плохо',
};

const Impressions = () => {
  const room = useAppSelector(selectRoom);

  if (room === null) {
    return <Skeleton />;
  }

  const { reviews } = room;
  const count = getObjectValuesSum(reviews);

  return (
    <div className={style.container}>
      <div className={style['chart-wrapper']}>
        <Chart
          data={Object.entries(reviews).map((item) => ({
            name: item[0],
            value: item[1],
          }))}
        />
        <p className={style.label}>
          <span className={style.count}>{count}</span>
          <span>{getPlural(['голос', 'голоса', 'голосов'], count)}</span>
        </p>
      </div>
      <div className={style.legend}>
        <ul className={style['legend-list']}>
          {Object.keys(reviews).map((item) => (
            <li className={style['legend-list_item']} key={item}>
              {reviewNameLocale[item] === undefined
                ? item
                : reviewNameLocale[item]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { Impressions };
