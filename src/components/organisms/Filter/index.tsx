'use client';

import { useState } from 'react';
import clsx from 'clsx';

import { Button, Typography } from '../../atoms';
import { Calendar } from '..';
import style from './style.module.scss';

const Filter = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleButtonClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className={clsx(style.filter, { [style.filter_opened]: isOpened })}>
      <form className={style.form}>
        <Typography tag="h3">даты пребывания в отеле</Typography>
        <Calendar isSingle />
        <div className={style['guests-dropdown']}>
          <Typography tag="h3">гости</Typography>
          dropdown
        </div>
        <div className={style['range-slider']}>
          rangeSlider
          <p className={style['range-text']}>
            Стоимость за сутки пребывания в номере
          </p>
        </div>
        <div className={style['rules-title']}>heading</div>
        <div className={style.rules}>checkbox-list</div>
        <div className={style['availability-title']}>heading</div>
        <div className={style.availability}>checkbox-list</div>
        <div className={style['rooms-dropdown']}>dropdown</div>
        <div className={style['dropdown-list']}>dropdown-list</div>
      </form>
      <div className={style['toggle-button']}>
        <Button theme="outlined" text="Фильтр" onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export { Filter };
