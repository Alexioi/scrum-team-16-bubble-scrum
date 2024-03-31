'use client';

import { FC, useState } from 'react';
import clsx from 'clsx';

import { Typography } from '@/components';
import { Checkbox } from '@/components/molecules';
import ExpandMore from '@/images/decorative/expand-more.svg';

import style from './style.module.scss';

type Item = {
  id: string;
  name: string;
  text: string;
  checked: boolean;
  disabled: boolean;
};

type Props = {
  listTitle: string;
  items: Item[];
};

const ExpandableCheckboxList: FC<Props> = ({ listTitle, items }) => {
  const [listOpened, setListOpened] = useState(false);

  const checkboxElementsInitialState = new Map(
    items.map((item) => [item.name, item.checked]),
  );

  const [checkedStatusMap, updateCheckedStatusMap] = useState(
    checkboxElementsInitialState,
  );

  return (
    <div className={style.wrapper}>
      <button
        onClick={() => setListOpened((prevState) => !prevState)}
        className={style.button}
      >
        <Typography tag="h3">{listTitle}</Typography>
        <svg
          className={clsx(style.icon, {
            [style.icon_rotated]: listOpened,
          })}
        >
          <ExpandMore />
        </svg>
      </button>
      {listOpened && (
        <div className={style.list}>
          {items.map((item) => (
            <Checkbox
              key={item.id}
              id={item.id}
              name={item.name}
              text={item.text}
              checked={checkedStatusMap.get(item.name)!}
              onChange={updateCheckedStatusMap}
              disabled={item.disabled}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export { ExpandableCheckboxList };
