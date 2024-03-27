'use client';

import { ButtonInput } from '@/components/molecules';
import React, { FC, useState } from 'react';
import ExpandMore from '@/images/decorative/expand-more.svg';
import { clsx } from 'clsx';
import style from './style.module.scss';

type Props = {
  type: 'text' | 'date';
  placeholder?: string;
  onClick?(): void;
  expanded?: boolean;
  readOnly?: boolean;
};

const DropdownInput: FC<Props> = ({
  type,
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
          className={clsx({
            [style.flipped]: isExpanded,
          })}
        >
          <ExpandMore />
        </svg>
      }
      onClick={handleClick}
      type={type}
      placeholder={placeholder}
      submit
      readOnly={readOnly}
      expanded={isExpanded}
    />
  );
};

export { DropdownInput };
