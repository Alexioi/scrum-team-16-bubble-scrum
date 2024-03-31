'use client';

import { FC, useState } from 'react';

import { Checkbox, Typography } from '@/components';

import style from './style.module.scss';

type CheckboxItem = {
  id: string;
  name: string;
  text: string;
  checked: boolean;
  disabled: boolean;
  description?: string;
};

type Props = {
  listTitle: string;
  checkboxItems: CheckboxItem[];
};

const CheckboxList: FC<Props> = ({ listTitle, checkboxItems }) => {
  const checkboxElementsInitialState = new Map(
    checkboxItems.map((item) => [item.name, item.checked]),
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
        {checkboxItems.map((item) => (
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
