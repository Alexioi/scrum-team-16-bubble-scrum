/* eslint-disable react/require-default-props */

'use client';

import React, { InputHTMLAttributes } from 'react';
import style from './style.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password' | 'date';
}

const Input: React.FC<Props> = ({ type = 'text', ...standardProps }) => {
  return (
    <input
      className={style.input}
      type={type}
      name={standardProps.name}
      id={standardProps.id}
      value={standardProps.value}
      min={standardProps.min}
      max={standardProps.max}
      placeholder={standardProps.placeholder}
      readOnly={standardProps.readOnly}
    />
  );
};

export { Input };
