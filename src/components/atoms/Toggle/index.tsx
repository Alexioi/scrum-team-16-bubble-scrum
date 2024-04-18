'use client';

import { FC } from 'react';

import style from './style.module.scss';

type Props = {
  text: string;
  checked: boolean;
  onClick(value: boolean): void;
};

const Toggle: FC<Props> = ({ text, checked, onClick }) => {
  const handleInputClick = () => {
    onClick(!checked);
  };

  return (
    <label className={style.toggle}>
      <input
        className={style.checkbox}
        type="checkbox"
        checked={checked}
        onChange={handleInputClick}
      />
      <span className={style.icon} />
      <span className={style.text}>{text}</span>
    </label>
  );
};

export { Toggle };
