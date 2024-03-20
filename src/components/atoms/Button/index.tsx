'use client';

import Link from 'next/link';
import { clsx } from 'clsx';

import ArrowSVG from '@/images/decorative/arrow.svg';

import style from './style.module.scss';

const Button = ({
  onClick,
  theme,
  text,
  size,
  link,
  type = 'button',
}: {
  onClick?: () => void;
  text: string;
  theme: 'outlined' | 'default' | 'link' | 'long';
  link?: string;
  size?: 'low';
  type?: 'submit' | 'reset' | 'button';
}) => {
  const buttonClasses = clsx(style.button, {
    [style.button_theme_default]: theme === 'default',
    [style.button_theme_outlined]: theme === 'outlined',
    [style.button_theme_link]: theme === 'link',
    [style.button_theme_long]: theme === 'long',
    [style.button_size_low]: size === 'low',
  });

  if (link !== undefined) {
    return (
      <Link href={link} className={buttonClasses}>
        <span className={style.button__text}>{text}</span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses} type={type}>
      <span className={style.button__text}>{text}</span>
      {theme === 'long' && (
        <span className={style.button__arrow}>
          <svg className={style.button__icon}>
            <ArrowSVG />
          </svg>
        </span>
      )}
    </button>
  );
};

export { Button };
