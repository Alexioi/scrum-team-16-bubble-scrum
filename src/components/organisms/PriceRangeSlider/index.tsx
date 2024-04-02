'use client';

import React, { FC } from 'react';

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
  // const [fromValue, setFromValue] = useState(from);

  const handleChange = ({
    minValue,
    maxValue,
  }: {
    minValue: number;
    maxValue: number;
  }) => {
    from = minValue;
    to = maxValue;
    console.log(from);
  };

  // useEffect(() => {
  //   setFromValue(from);
  // }, [from]);

  return (
    <div>
      <div className={style.header}>
        <Typography tag="h3">Диапазон цены</Typography>
        <span
          className={style.info}
        >{`${from.toLocaleString()}₽ - ${to.toLocaleString()}₽`}</span>
      </div>
      <MultiRangeSlider min={min} max={max} onChange={handleChange} />
    </div>
  );
};

export { PriceRangeSlider };
