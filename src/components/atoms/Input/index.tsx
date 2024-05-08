'use client';

import { FC, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import style from './style.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  type: 'text' | 'email' | 'password' | 'date' | 'tel';
  squareBottom?: boolean;
  active?: boolean;
  error?: string;
};

const Input: FC<Props> = ({
  type,
  squareBottom,
  active,
  error,
  ...standardProps
}) => {
  return (
    <div>
      <input
        className={clsx(style.input, {
          [style['input_square-bottom']]: squareBottom,
          [style.input_active]: active,
          [style.input_error]: !!error,
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
      {error && <div className={style.error}>{error}</div>}
    </div>
  );
};

export { Input };
