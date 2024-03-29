'use client';

import { FC } from 'react';
import style from './style.module.scss';

type Props = {
  id: string;
  name: string;
  text: string;
  description?: string;
  disabled: boolean;
};

const Checkbox: FC<Props> = ({
  id,
  name,
  text,
  description,
  disabled,
}: Props) => {
  return (
    <div className={style.wrapper}>
      <label className={style.label} htmlFor={id}>
        <input
          className={`${style.input} ${disabled && 'input_disabled'}`}
          id={id}
          name={name}
          type="checkbox"
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
