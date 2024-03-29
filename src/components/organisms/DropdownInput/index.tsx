'use client';

import React, { FC } from 'react';
import { clsx } from 'clsx';

import { ButtonInput } from '@/components/molecules';
import ExpandMoreSVG from '@/images/decorative/expand-more.svg';

import style from './style.module.scss';

type Props = {
  type: 'text' | 'date';
  value?: string;
  defaultValue?: string | number | readonly string[];
  placeholder?: string;
  expanded?: boolean;
  squareBottom?: boolean;
  readOnly?: boolean;
  onClick?(): void;
};

const DropdownInput: FC<Props> = ({
  type,
  value,
  defaultValue,
  placeholder,
  onClick,
  expanded,
  squareBottom,
  readOnly,
}) => {
  return (
    <ButtonInput
      icon={
        <svg
          width={12}
          height={8}
          className={clsx(style.icon, {
            [style.icon_flipped]: expanded,
          })}
        >
          <ExpandMoreSVG />
        </svg>
      }
      type={type}
      value={value}
      defaultValue={defaultValue}
      onClick={onClick}
      placeholder={placeholder}
      submit
      readOnly={readOnly}
      squareBottom={squareBottom}
      active={expanded}
    />
  );
};

export { DropdownInput };
