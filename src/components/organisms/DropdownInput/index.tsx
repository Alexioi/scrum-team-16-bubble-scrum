'use client';

import { ButtonInput } from '@/components/molecules';
import React, { FC, useState } from 'react';
import ExpandMore from '@/images/decorative/expand-more.svg';
import { clsx } from 'clsx';
import style from './style.module.scss';

type Props = {
  type: 'text' | 'date';
  value?: string;
  defaultValue?: string | number | readonly string[] | undefined;
  placeholder?: string;
  onClick?(): void;
  expanded?: boolean;
  readOnly?: boolean;
};

const DropdownInput: FC<Props> = ({
  type,
  value,
  defaultValue,
  placeholder,
  onClick,
  expanded,
  readOnly,
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
    onClick?.();
  };

  return (
    <ButtonInput
      icon={
        <svg
          width={12}
          height={8}
          className={clsx(style.icon, {
            [style.icon__flipped]: isExpanded,
          })}
        >
          <ExpandMore />
        </svg>
      }
      type={type}
      value={value}
      defaultValue={defaultValue}
      onClick={handleClick}
      placeholder={placeholder}
      submit
      readOnly={readOnly}
      expanded={isExpanded}
    />
  );
};

export { DropdownInput };
