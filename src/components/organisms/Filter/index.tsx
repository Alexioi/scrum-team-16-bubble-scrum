'use client';

import { useState } from 'react';
import clsx from 'clsx';

import { Button, Typography } from '../../atoms';
import {
  ExpandableCheckboxList,
  Dropdown,
  MultiRangeSlider,
} from '../../molecules';
import { Calendar } from '..';
import {
  checkboxItems,
  guestData,
  guestVariants,
  roomData,
  roomVariants,
} from './data';
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
          <Dropdown
            hasButtons
            placeholder="Сколько гостей"
            variants={guestVariants}
            items={guestData}
            groups={[[0, 1], [2]]}
          />
        </div>
        <div className={style['range-slider']}>
          <MultiRangeSlider min={0} max={15000} onChange={() => {}} />
          <p className={style['range-text']}>
            Стоимость за сутки пребывания в номере
          </p>
        </div>
        <div className={style['rules-title']}>
          <Typography tag="h3">правила дома</Typography>
        </div>
        <div className={style.rules}>checkbox-list</div>
        <div className={style['availability-title']}>
          <Typography tag="h3">доступность</Typography>
        </div>
        <div className={style.availability}>checkbox-list</div>
        <div className={style['rooms-dropdown']}>
          <Typography tag="h3">удобства номера</Typography>
          <Dropdown
            hasButtons={false}
            placeholder="Сколько комнат"
            variants={roomVariants}
            items={roomData}
            groups={[[0], [1], [2]]}
          />
        </div>
        <div className={style['dropdown-list']}>
          <ExpandableCheckboxList
            listTitle="дополнительные удобства"
            checkboxItems={checkboxItems}
          />
        </div>
      </form>
      <div className={style['toggle-button']}>
        <Button theme="outlined" text="Фильтр" onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export { Filter };
