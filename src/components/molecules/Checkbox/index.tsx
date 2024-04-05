'use client';

import { FC } from 'react';
import clsx from 'clsx';

import style from './style.module.scss';

type Props = {
  id: string;
  name: string;
  text: string;
  checked: boolean;
  disabled: boolean;
  description?: string;
  onChange?(
    callback: (state: { [key: string]: boolean }) => { [key: string]: boolean },
  ): void;
};

const Checkbox: FC<Props> = ({
  id,
  name,
  text,
  checked,
  disabled,
  description,
  onChange,
}) => {
  const handleCheckboxInputChange = () => {
    if (onChange) {
      onChange((prevState) => ({
        ...prevState,
        [name]: !checked,
      }));
    }
  };

  return (
    <div className={style.wrapper}>
      <label className={style.label} htmlFor={id}>
        <input
          className={clsx(style.input, {
            [style.input_disabled]: disabled,
          })}
          id={id}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxInputChange}
          disabled={disabled}
        />
        <span className={style['checkmark-square-border']}>
          <span className={style['checkmark-outer-item']} />
          <span className={style['checkmark-inner-item']} />
        </span>
        {description ? (
          <span className={style.text_bold}>{text}</span>
        ) : (
          <span className={style.text}>{text}</span>
        )}
      </label>
      {description && <span className={style.description}>{description}</span>}
    </div>
  );
};

export { Checkbox };