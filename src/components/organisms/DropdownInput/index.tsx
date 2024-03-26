'use client';

import { ButtonInput } from '@/components/molecules';
import React, { FC, useState } from 'react';
import ExpandMore from '@/images/decorative/expand-more.svg';
import { clsx } from 'clsx';
import style from './style.module.scss';

type Props = {
  expanded?: boolean;
  onClick?(): void;
};

const DropdownInput: FC<Props> = ({ onClick, expanded }) => {
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
          className={clsx(style.dropdownInputIcon, {
            [style.dropdownInputIcon__flipped]: isExpanded,
          })}
        >
          <ExpandMore />
        </svg>
      }
      onClick={handleClick}
      type="email"
      placeholder="Email"
      submit
    />
  );
};

export { DropdownInput };
