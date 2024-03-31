'use client';

import { FC, useState } from 'react';

import { Checkbox, Typography } from '@/components';

import style from './style.module.scss';

type Item = {
  id: string;
  name: string;
  text: string;
  checked: boolean;
  disabled: boolean;
  description?: string;
};

type Props = {
  listTitle: string;
  items: Item[];
};

const CheckboxList: FC<Props> = ({ listTitle, items }) => {
  const checkboxElementsInitialState = new Map(
    items.map((item) => [item.name, item.checked]),
  );

  const [checkedStatusMap, updateCheckedStatusMap] = useState(
    checkboxElementsInitialState,
  );

  return (
    <div>
      <div className={style.title}>
        <Typography tag="h3">{listTitle}</Typography>
      </div>
      <div className={style.list}>
        {items.map((item) => (
          <Checkbox
            key={item.id}
            id={item.id}
            name={item.name}
            text={item.text}
            checked={checkedStatusMap.get(item.name)!}
            disabled={item.disabled}
            description={item.description}
            onChange={updateCheckedStatusMap}
          />
        ))}
      </div>
    </div>
  );
};

export { CheckboxList };
