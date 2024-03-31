'use client';

import { FC, useState } from 'react';
import clsx from 'clsx';

import { Typography } from '@/components';
import { Checkbox } from '@/components/molecules';

import ExpandMore from '@/images/decorative/expand-more.svg';

import style from './style.module.scss';

type CheckboxItem = {
  id: string;
  name: string;
  text: string;
  checked: boolean;
  disabled: boolean;
};

type Props = {
  listTitle: string;
  checkboxItems: CheckboxItem[];
};

const ExpandableCheckboxList: FC<Props> = ({ listTitle, checkboxItems }) => {
  const [listOpened, setListOpened] = useState(false);

  const checkboxElementsInitialState = new Map(
    checkboxItems.map((item) => [item.name, item.checked]),
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
          {checkboxItems.map((item) => (
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
