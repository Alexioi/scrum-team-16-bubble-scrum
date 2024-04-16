'use client';

import { FC } from 'react';

import style from './style.module.scss';

type Props = {
  text: string;
  isChecked: boolean;
  onClick(value: boolean): void;
};

const Toggle: FC<Props> = ({ text, isChecked, onClick }) => {
  const handleInputClick = () => {
    onClick(!isChecked);
  };

  return (
    <label className={style.toggle}>
      <input
        className={style.checkbox}
        type="checkbox"
        checked={isChecked}
        onChange={handleInputClick}
      />
      <span className={style.icon} />
      <span className={style.text}>{text}</span>
    </label>
  );
};

export { Toggle };
