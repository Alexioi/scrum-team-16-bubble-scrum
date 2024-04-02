'use client';

import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
  useRef,
} from 'react';
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

  useEffect(() => {
    if (!maxValueRef.current || !range.current) {
      return;
    }
    const minPercent = getPercent(minValue);
    const maxPercent = getPercent(Number(maxValueRef.current.value));

    range.current.style.left = `${minPercent}%`;
    range.current.style.width = `${maxPercent - minPercent}%`;
  }, [minValue, getPercent]);

  useEffect(() => {
    if (!minValueRef.current || !range.current) {
      return;
    }
    const minPercent = getPercent(Number(minValueRef.current.value));
    const maxPercent = getPercent(maxValue);

    range.current.style.width = `${maxPercent - minPercent}%`;
  }, [maxValue, getPercent]);

  useEffect(() => {
    onChange({ minValue, maxValue });
  }, [minValue, maxValue, onChange]);

  const onChangeMin = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = Math.min(Number(event.target.value), maxValue - 1);
    setMinValue(value);
    event.target.value = value.toString();
  };

  const onChangeMax = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = Math.max(Number(event.target.value), minValue + 1);
    setMaxValue(value);
    event.target.value = value.toString();
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
