'use client';

import { FC } from 'react';

import { Checkbox, Typography } from '@/components';

import style from './style.module.scss';

type Item = {
  name: string;
  text: string;
  checked: boolean;
  disabled: boolean;
  description?: string;
};

type Props = {
  listTitle: string;
  items: Item[];
  onChange(name: string): void;
};

const CheckboxList: FC<Props> = ({ listTitle, items, onChange }) => {
  return (
    <div>
      <div className={style.title}>
        <Typography tag="h3">{listTitle}</Typography>
      </div>
      <div className={style.list}>
        {items.map((item) => (
          <Checkbox
            key={item.name}
            name={item.name}
            text={item.text}
            checked={item.checked}
            disabled={item.disabled}
            description={item.description}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
};

export { CheckboxList };
