'use client';

import { Input } from '@/components/atoms';
import React, { FC, ReactNode } from 'react';
import style from './style.module.scss';

interface Props {
  icon: ReactNode;
  submit?: boolean;
  onClick?(): void;

  type: 'text' | 'email' | 'password' | 'date';
  name?: string;
  id?: string;
  value?: string;
  min?: number;
  max?: number;
  placeholder?: string;
  defaultValue?: string | number | readonly string[] | undefined;
  inputMode?:
    | 'text'
    | 'email'
    | 'search'
    | 'none'
    | 'tel'
    | 'url'
    | 'numeric'
    | 'decimal'
    | undefined;
  readOnly?: boolean;
}

const ButtonInput: FC<Props> = ({
  icon,
  submit,
  onClick,
  type,
  name,
  id,
  value,
  min,
  max,
  placeholder,
  inputMode,
  defaultValue,
  readOnly,
}) => {
  const inputOnClick = readOnly ? onClick : undefined;
  return (
    <div className={style.buttonInput}>
      <Input
        type={type}
        name={name}
        id={id}
        value={value}
        min={min}
        max={max}
        placeholder={placeholder}
        readOnly={readOnly}
        onClick={inputOnClick}
        inputMode={inputMode}
        defaultValue={defaultValue}
      />
      <button
        className={style.buttonInput__button}
        type={submit ? 'submit' : 'button'}
        onClick={onClick}
      >
        {icon}
      </button>
    </div>
  );
};

export { ButtonInput };
