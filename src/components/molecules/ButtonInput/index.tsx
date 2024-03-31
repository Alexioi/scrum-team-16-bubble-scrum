'use client';

import React, { FC, ReactNode } from 'react';

import { Input } from '@/components/atoms';

import style from './style.module.scss';

type Props = {
  type: 'text' | 'email' | 'password' | 'date';
  icon: ReactNode;
  submit?: boolean;
  name?: string;
  id?: string;
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
  active?: boolean;
  onClick?(): void;
};

const ButtonInput: FC<Props> = ({
  icon,
  submit,
  onClick,
  type,
  name,
  id,
  min,
  max,
  placeholder,
  inputMode,
  defaultValue,
  readOnly,
  squareBottom,
  active,
}) => {
  const inputOnClick = readOnly ? onClick : undefined;
  return (
    <div className={style['button-input']}>
      <Input
        type={type}
        name={name}
        id={id}
        min={min}
        max={max}
        placeholder={placeholder}
        readOnly={readOnly}
        onClick={inputOnClick}
        inputMode={inputMode}
        defaultValue={defaultValue}
        squareBottom={squareBottom}
        active={active}
      />
      <button
        className={style['button-input_button']}
        type={submit ? 'submit' : 'button'}
        onClick={onClick}
      >
        {icon}
      </button>
    </div>
  );
};

export { ButtonInput };
