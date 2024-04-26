'use client';

import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

import { selectRoom } from '@/store';
import { useAppSelector } from '@/hooks';
import { getPlural } from '@/helpers';

import { Skeleton } from './Skeleton';
import style from './style.module.scss';
import { getTitleByName } from './helpers';

const Chart = dynamic(
  () =>
    import('@/components/molecules/Chart').then((component) => component.Chart),
  { ssr: false },
);

const Impressions = () => {
  const room = useAppSelector(selectRoom);
  const [reviews, setReviews] = useState({
    great: 0,
    good: 0,
    satisfactorily: 0,
    bad: 0,
  });

  useEffect(() => {
    if (room === null) {
      return;
    }

    setReviews(room.reviews);
  }, [room]);

  const count = Object.values(reviews).reduce((sum, item) => sum + item, 0);

  if (room === null) {
    return <Skeleton />;
  }

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
          {Object.entries(reviews).map((item) => (
            <li className={style['legend-list_item']} key={item[0]}>
              {getTitleByName(item[0])}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { Impressions };
