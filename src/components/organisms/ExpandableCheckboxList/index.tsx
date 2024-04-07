'use client';

import { FC, useState } from 'react';

import { Typography, Checkbox, ExpandMoreIcon } from '@/components';

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
  onChange(name: string): void;
};

const ExpandableCheckboxList: FC<Props> = ({ listTitle, items, onChange }) => {
  const [listOpened, setListOpened] = useState(false);

  return (
    <div className={style.wrapper}>
      <button
        onClick={() => setListOpened(!listOpened)}
        className={style.button}
        type="button"
      >
        <Typography tag="h3">{listTitle}</Typography>
        <ExpandMoreIcon flipped={listOpened} />
      </button>
      {listOpened && (
        <div className={style.list}>
          {items.map((item) => (
            <Checkbox
              key={item.id}
              id={item.id}
              name={item.name}
              text={item.text}
              checked={item.checked}
              onChange={onChange}
              disabled={item.disabled}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export { ExpandableCheckboxList };
