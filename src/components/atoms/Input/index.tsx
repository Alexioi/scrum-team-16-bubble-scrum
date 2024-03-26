'use client';

import React, { InputHTMLAttributes, useState } from 'react';
import { isDate } from 'validator';
import style from './style.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'email' | 'password' | 'date';
}

const Input: React.FC<Props> = ({ type, ...standardProps }) => {
  const [value, setValue] = useState(standardProps.value);
  const typeValue = type === 'date' ? 'text' : type;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (isDate(e.target.value, { format: 'DD.MM.YYYY' })) {
      setValue(e.target.value);
    }

    console.log(e.target.value);
    console.log(isDate(e.target.value));
    console.log(value);
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
