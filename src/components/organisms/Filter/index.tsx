'use client';

import { useState } from 'react';
import clsx from 'clsx';

import { filterActions } from '@/store';
import { useAppDispatch, useAppSelector } from '@/hooks';
import {
  Calendar,
  Dropdown,
  ExpandableCheckboxList,
  Button,
  Typography,
  CheckboxList,
  PriceRangeSlider,
} from '@/components';

import { guestVariants, roomVariants } from './data';
import style from './style.module.scss';

const Filter = () => {
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useAppDispatch();
  const expandableListData = useAppSelector(
    (state) => state.filter.expandableList,
  );
  const guestData = useAppSelector((state) => state.filter.guests);
  const roomData = useAppSelector((state) => state.filter.rooms);
  const rulesList = useAppSelector((state) => state.filter.rulesList);
  const availabilityList = useAppSelector(
    (state) => state.filter.availabilityList,
  );
  const rangePrices = useAppSelector((state) => state.filter.rangePrices);

  const handleButtonClick = () => {
    setIsOpened(!isOpened);
  };

  const handleCalendarChange = (value: string[] | null[]) => {
    dispatch(filterActions.changeDates(value));
  };

  const handleExpandableCheckboxListChange = (name: string) => {
    dispatch(filterActions.changeExpandableListData(name));
  };

  const handleGuestDropdownChange = (
    value: {
      name: string;
      counter: number;
    }[],
  ) => {
    dispatch(filterActions.changeGuestData(value));
  };

  const handleRoomDropdownChange = (
    value: {
      name: string;
      counter: number;
    }[],
  ) => {
    dispatch(filterActions.changeRoomData(value));
  };

  const handleRulesListChange = (name: string) => {
    dispatch(filterActions.changeRulesList(name));
  };

  const handleAvailabilityListChange = (name: string) => {
    dispatch(filterActions.changeAvailabilityList(name));
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
          <PriceRangeSlider
            min={0}
            max={10000}
            from={rangePrices[0]}
            to={rangePrices[1]}
            title="диапазон цены"
            description="Стоимость за сутки пребывания в номере"
            onChange={(prices) => {
              dispatch(filterActions.changeRangePrices(prices));
            }}
          />
        </div>
        <div className={style.rules}>
          <CheckboxList
            items={rulesList}
            listTitle="правила дома"
            onChange={handleRulesListChange}
          />
        </div>
        <CheckboxList
          items={availabilityList}
          listTitle="доступность"
          onChange={handleAvailabilityListChange}
        />
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
