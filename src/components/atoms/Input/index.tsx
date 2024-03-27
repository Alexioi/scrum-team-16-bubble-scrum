'use client';

import React, { InputHTMLAttributes, useState } from 'react';
import { isDate, isDateGreaterOrEqual } from './helpers';
import style from './style.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'email' | 'password' | 'date';
}

const Input: React.FC<Props> = ({ type, ...standardProps }) => {
  const [value, setValue] = useState(standardProps.value);
  const typeValue = type === 'date' ? 'text' : type;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(isDate(e.target.value));
    console.log(isDateGreaterOrEqual(e.target.value, '27.03.2024'));
    setValue(e.target.value);
  };

  return (
    <input
      className={style.input}
      type={typeValue}
      name={standardProps.name}
      id={standardProps.id}
      value={value}
      min={standardProps.min}
      max={standardProps.max}
      placeholder={standardProps.placeholder}
      readOnly={standardProps.readOnly}
      onClick={standardProps.onClick}
      inputMode={standardProps.inputMode}
      pattern={standardProps.pattern}
      onChange={handleChange}
      defaultValue={standardProps.defaultValue}
    />
  );
};

export { Input };
