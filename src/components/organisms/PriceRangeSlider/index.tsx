'use client';

import React, { FC, useState } from 'react';

import { Typography } from '@/components/atoms';
import { MultiRangeSlider } from '@/components/molecules';

import style from './style.module.scss';

type Props = {
  min: number;
  max: number;
  from: number;
  to: number;
};

const PriceRangeSlider: FC<Props> = ({ min, max, from, to }) => {
  const [fromValue, setFromValue] = useState(from);
  const [toValue, setToValue] = useState(to);

  const handleChange = ({
    minValue,
    maxValue,
  }: {
    minValue: number;
    maxValue: number;
  }) => {
    from = minValue;
    to = maxValue;
    setFromValue(minValue);
    setToValue(maxValue);
  };

  return (
    <div>
      <div className={style.header}>
        <Typography tag="h3">Диапазон цены</Typography>
        <span className={style.info}>
          {`${fromValue.toLocaleString()}₽ - ${toValue.toLocaleString()}₽`}
        </span>
      </div>
      <MultiRangeSlider min={min} max={max} onChange={handleChange} />
      <p className={style.description}>
        Стоимость за сутки пребывания в номере
      </p>
    </div>
  );
};

export { PriceRangeSlider };
