'use client';

import React, { FC, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import style from './style.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  type: 'text' | 'email' | 'password' | 'date';
  squareBottom?: boolean;
  active?: boolean;
};

const Input: FC<Props> = ({ type, squareBottom, active, ...standardProps }) => {
  return (
    <input
      className={clsx(style.input, {
        [style['input_square-bottom']]: squareBottom,
        [style.input_active]: active,
      })}
      type={type}
      name={standardProps.name}
      id={standardProps.id}
      value={standardProps.value}
      min={standardProps.min}
      max={standardProps.max}
      placeholder={standardProps.placeholder}
      readOnly={standardProps.readOnly}
      onClick={standardProps.onClick}
      inputMode={standardProps.inputMode}
      pattern={standardProps.pattern}
      onChange={standardProps.onChange}
      defaultValue={standardProps.defaultValue}
    />
  );
};

export { Input };
