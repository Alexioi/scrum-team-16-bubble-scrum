'use client';

import { FC, MouseEvent } from 'react';
import { clsx } from 'clsx';

import ArrowSVG from '@/images/decorative/arrow.svg';

import style from './style.module.scss';

type Props = {
  text: string;
  theme?: 'outlined' | 'default' | 'link' | 'long';
  type?: 'submit' | 'reset' | 'button';
  size?: 'low' | 'default';
  onClick?(e?: MouseEvent<HTMLButtonElement>): void;
};

const Button: FC<Props> = ({
  text,
  theme = 'default',
  size = 'default',
  type = 'button',
  onClick,
}) => {
  const buttonClasses = clsx(style.button, {
    [style.button_theme_default]: theme === 'default',
    [style.button_theme_outlined]: theme === 'outlined',
    [style.button_theme_link]: theme === 'link',
    [style.button_theme_long]: theme === 'long',
    [style.button_size_low]: size === 'low',
  });

  return (
    <button onClick={onClick} className={buttonClasses} type={type}>
      <span className={style.text}>{text}</span>
      {theme === 'long' && (
        <span className={style.arrow}>
          <svg className={style.icon}>
            <ArrowSVG />
          </svg>
        </span>
      )}
    </button>
  );
};

export { Button };
