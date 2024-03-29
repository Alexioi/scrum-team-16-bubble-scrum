'use client';

import { FC, useState } from 'react';

import { Checkbox } from '@/components/molecules';

import ExpandMore from '@/images/decorative/expand-more.svg';

import style from './style.module.scss';

type CheckboxItem = {
  id: string;
  name: string;
  text: string;
  disabled: boolean;
};

type Props = {
  listTitle: string;
  checkboxItems: CheckboxItem[];
};

const ExpandableCheckboxList: FC<Props> = ({ listTitle, checkboxItems }) => {
  const [listOpened, setListOpened] = useState(false);

  return (
    <div className={style.wrapper}>
      <button
        onClick={() => setListOpened((prevState) => !prevState)}
        className={style.button}
      >
        <span className={style.title}>{listTitle}</span>
        <svg className={`${style.icon} ${listOpened && style.icon_rotated}`}>
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
              disabled={item.disabled}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export { ExpandableCheckboxList };
