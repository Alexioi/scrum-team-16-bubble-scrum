'use client';

import React, { FC, InputHTMLAttributes } from 'react';
import dynamic from 'next/dynamic';
import clsx from 'clsx';

import style from './style.module.scss';

const ReactInputDateMask = dynamic(() => import('react-input-date-mask'), {
  ssr: false,
});

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'email' | 'password' | 'date';
  squareBottom?: boolean;
}

const Input: FC<Props> = ({ type, squareBottom, ...standardProps }) => {
  const typeValue = type === 'date' ? 'text' : type;

  if (type === 'date' && !standardProps.readOnly) {
    return (
      <ReactInputDateMask
        mask="dd.mm.yyyy"
        className={clsx(style.input, {
          [style['input_square-bottom']]: squareBottom,
        })}
        id={standardProps.id}
        defaultValue={standardProps.defaultValue}
        inputValue={standardProps.value}
        onClick={standardProps.onClick}
        onChange={standardProps.onChange}
      />
    );
  }

  return (
    <input
      className={clsx(style.input, {
        [style['input_square-bottom']]: squareBottom,
      })}
      type={typeValue}
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
