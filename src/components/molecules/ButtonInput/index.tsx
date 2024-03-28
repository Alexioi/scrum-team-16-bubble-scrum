'use client';

import React, { FC, ReactNode } from 'react';

import { Input } from '@/components/atoms';

import style from './style.module.scss';

interface Props {
  type: 'text' | 'email' | 'password' | 'date';
  icon: ReactNode;
  submit?: boolean;
  name?: string;
  id?: string;
  value?: string;
  min?: number;
  max?: number;
  placeholder?: string;
  defaultValue?: string | number | readonly string[];
  inputMode?:
    | 'text'
    | 'email'
    | 'search'
    | 'none'
    | 'tel'
    | 'url'
    | 'numeric'
    | 'decimal';
  readOnly?: boolean;
  squareBottom?: boolean;
  onClick?(): void;
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
  squareBottom,
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
        squareBottom={squareBottom}
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
