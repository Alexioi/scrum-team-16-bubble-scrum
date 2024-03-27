'use client';

import React, { InputHTMLAttributes } from 'react';
import ReactInputDateMask from 'react-input-date-mask';
import clsx from 'clsx';
import style from './style.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'email' | 'password' | 'date';
  expanded?: boolean;
}

const Input: React.FC<Props> = ({ type, expanded, ...standardProps }) => {
  if (type === 'date') {
    return (
      <ReactInputDateMask
        mask="dd.mm.yyyy"
        className={clsx(style.input, { [style.input__expanded]: expanded })}
        id={standardProps.id}
        defaultValue={standardProps.defaultValue}
        value={standardProps.value}
        onClick={standardProps.onClick}
        onChange={standardProps.onChange}
      />
    );
  }

  return (
    <input
      className={clsx(style.input, { [style.input__expanded]: expanded })}
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
