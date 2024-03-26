'use client';

import React, { InputHTMLAttributes } from 'react';
import style from './style.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'email' | 'password' | 'date';
}

const Input: React.FC<Props> = ({ type, ...standardProps }) => {
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
      onClick={standardProps.onClick}
      inputMode={standardProps.inputMode}
      pattern={standardProps.pattern}
      defaultValue={standardProps.defaultValue}
    />
  );
};

export { Input };
