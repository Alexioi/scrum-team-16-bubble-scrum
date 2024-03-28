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
  min: number;
  max: number;
};

type Props = {
  min: number;
  max: number;
  onChange(limits: OnChangeProps): void;
};

const MultiRangeSlider: FC<Props> = ({ min, max, onChange }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (!maxValRef.current) {
      return;
    }
    const minPercent = getPercent(minValue);
    const maxPercent = getPercent(Number(maxValRef.current.value));

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minValue, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (!minValRef.current) {
      return;
    }
    const minPercent = getPercent(Number(minValRef.current.value));
    const maxPercent = getPercent(maxValue);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxValue, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minValue, max: maxValue });
  }, [minValue, maxValue, onChange]);

  return (
    <div className={style.container}>
      <input
        type="range"
        min={min}
        max={max}
        value={minValue}
        ref={minValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.min(Number(event.target.value), maxValue - 1);
          setMinValue(value);
          event.target.value = value.toString();
        }}
        className={clsx([style.thumb, style['thumb_z-index-3']], {
          [style['thumb_z-index-5']]: minValue > max - 100,
        })}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxValue}
        ref={maxValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.max(Number(event.target.value), minValue + 1);
          setMaxValue(value);
          event.target.value = value.toString();
        }}
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
