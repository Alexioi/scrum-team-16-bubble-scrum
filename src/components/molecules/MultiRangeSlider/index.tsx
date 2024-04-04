'use client';

import { ChangeEvent, FC, useCallback, useState, useRef } from 'react';
import clsx from 'clsx';

import style from './style.module.scss';

type Props = {
  min: number;
  max: number;
  onChange(minValue: number, maxValue: number): void;
};

const MultiRangeSlider: FC<Props> = ({ min, max, onChange }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const [width, setWidth] = useState(100);
  const [left, setLeft] = useState(0);
  const minValueRef = useRef<HTMLInputElement>(null);
  const maxValueRef = useRef<HTMLInputElement>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  const onChangeMin = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = Math.min(Number(event.target.value), maxValue - 1);
    setMinValue(value);
    event.target.value = value.toString();

    if (maxValueRef.current) {
      const minPercent = getPercent(value);
      const maxPercent = getPercent(Number(maxValueRef.current.value));

      setLeft(minPercent);
      setWidth(maxPercent - minPercent);
    }

    onChange(minValue, maxValue);
  };

  const onChangeMax = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = Math.max(Number(event.target.value), minValue + 1);
    setMaxValue(value);
    event.target.value = value.toString();

    if (minValueRef.current) {
      const minPercent = getPercent(Number(minValueRef.current.value));
      const maxPercent = getPercent(value);

      setWidth(maxPercent - minPercent);
    }

    onChange(minValue, maxValue);
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
        <div
          className={style.slider__range}
          style={{ width: `${width}%`, left: `${left}%` }}
        />
      </div>
    </div>
  );
};

export { MultiRangeSlider };
