'use client';

import { FC, useState } from 'react';
import clsx from 'clsx';

import style from './style.module.scss';

type Props = {
  id: string;
  name: string;
  text: string;
  description?: string;
  checked: boolean;
  onChange?: (
    callback: (state: Map<string, boolean>) => Map<string, boolean>,
  ) => void;
  disabled: boolean;
};

const Checkbox: FC<Props> = ({
  id,
  name,
  text,
  description,
  checked,
  onChange,
  disabled,
}) => {
  const [checkedValue, setCheckedValue] = useState(checked);

  const handleCheckboxInputChange = () => {
    if (onChange) {
      onChange((prevState) => prevState.set(name, !checked));
    }
    setCheckedValue((prevState) => !prevState);
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
          checked={checkedValue}
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
