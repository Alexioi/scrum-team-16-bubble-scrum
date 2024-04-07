'use client';

import { useState } from 'react';
import clsx from 'clsx';

import { actions, RootState } from '@/store';
import { useAppDispatch, useAppSelector } from '@/hooks';
import {
  Calendar,
  Dropdown,
  ExpandableCheckboxList,
  Button,
  Typography,
} from '@/components';

import { guestVariants, roomVariants } from './data';
import style from './style.module.scss';

const Filter = () => {
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useAppDispatch();
  const expandableListData = useAppSelector(
    (state: RootState) => state.filter.expandableListData,
  );
  const guestData = useAppSelector(
    (state: RootState) => state.filter.guestsData,
  );
  const roomData = useAppSelector((state: RootState) => state.filter.roomData);

  const handleButtonClick = () => {
    setIsOpened(!isOpened);
  };

  const handleCalendarChange = (value: string[] | null[]) => {
    dispatch(actions.filter.changeDates(value));
  };

  const handleExpandableCheckboxListChange = (name: string) => {
    dispatch(actions.filter.changeExpandableListData(name));
  };

  const handleGuestDropdownChange = (
    value: {
      name: string;
      counter: number;
    }[],
  ) => {
    dispatch(actions.filter.changeGuestData(value));
  };

  const handleRoomDropdownChange = (
    value: {
      name: string;
      counter: number;
    }[],
  ) => {
    dispatch(actions.filter.changeRoomData(value));
  };

  return (
    <div className={clsx(style.filter, { [style.filter_opened]: isOpened })}>
      <form className={style.form}>
        <Typography tag="h3">даты пребывания в отеле</Typography>
        <Calendar isSingle onChange={handleCalendarChange} />
        <div className={style['guests-dropdown']}>
          <Typography tag="h3">гости</Typography>
          <Dropdown
            hasButtons
            placeholder="Сколько гостей"
            variants={guestVariants}
            items={guestData.items}
            groups={guestData.groups}
            onChange={handleGuestDropdownChange}
          />
        </div>
        <div className={style['range-slider']}>
          rangeSlider
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
            items={roomData.items}
            groups={roomData.groups}
            onChange={handleRoomDropdownChange}
          />
        </div>
        <div className={style['dropdown-list']}>
          <ExpandableCheckboxList
            onChange={handleExpandableCheckboxListChange}
            listTitle="дополнительные удобства"
            items={expandableListData}
          />
        </div>
      </form>
      <div className={style['toggle-button']}>
        <Button
          theme="outlined"
          text="Фильтр"
          onClick={handleButtonClick}
          type="button"
        />
      </div>
    </div>
  );
};

export { Filter };
