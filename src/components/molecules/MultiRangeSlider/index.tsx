'use client';

import { ChangeEvent, FC, useCallback, useState, useRef } from 'react';
import clsx from 'clsx';

import style from './style.module.scss';

type OnChangeProps = {
  minValue: number;
  maxValue: number;
};

type Props = {
  min: number;
  max: number;
  onChange(limits: OnChangeProps): void;
};

const MultiRangeSlider: FC<Props> = ({ min, max, onChange }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const minValueRef = useRef<HTMLInputElement>(null);
  const maxValueRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  const onChangeMin = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = Math.min(Number(event.target.value), maxValue - 1);
    setMinValue(value);
    event.target.value = value.toString();

    if (maxValueRef.current && range.current) {
      const minPercent = getPercent(minValue);
      const maxPercent = getPercent(Number(maxValueRef.current.value));

      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }

    onChange({ minValue, maxValue });
  };

  const onChangeMax = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = Math.max(Number(event.target.value), minValue + 1);
    setMaxValue(value);
    event.target.value = value.toString();

    if (minValueRef.current && range.current) {
      const minPercent = getPercent(Number(minValueRef.current.value));
      const maxPercent = getPercent(maxValue);

      range.current.style.width = `${maxPercent - minPercent}%`;
    }

    onChange({ minValue, maxValue });
  };

  return (
    <div className={style.container}>
      <input
        type="range"
        min={min}
        max={max}
        value={minValue}
        ref={minValueRef}
        onChange={onChangeMin}
        className={clsx([style.thumb, style['thumb_z-index-3']], {
          [style['thumb_z-index-5']]: minValue > max - 100,
        })}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxValue}
        ref={maxValueRef}
        onChange={onChangeMax}
        className={clsx([style.thumb, style['thumb_z-index-4']])}
      />
      <div className={style.slider}>
        <div className={style.slider__track} />
        <div ref={range} className={style.slider__range} />
      </div>
    </div>
  );
};

export { MultiRangeSlider };
