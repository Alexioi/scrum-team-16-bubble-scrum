'use client';

import { FC } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';

import style from './style.module.scss';

type Props = {
  text: string;
  link: string;
  theme?: 'outlined' | 'default' | 'link';
  size?: 'low' | 'default';
};

const ButtonLink: FC<Props> = ({
  text,
  link,
  theme = 'default',
  size = 'default',
}) => {
  const buttonClasses = clsx(style.button, {
    [style.button_theme_default]: theme === 'default',
    [style.button_theme_outlined]: theme === 'outlined',
    [style.button_theme_link]: theme === 'link',
    [style.button_size_low]: size === 'low',
  });

  return (
    <Link href={link} className={buttonClasses}>
      <span className={style.text}>{text}</span>
    </Link>
  );
};

export { ButtonLink };
