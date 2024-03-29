'use client';

import React, { FC } from 'react';

import { ButtonInput } from '@/components/molecules';
import { ExpandMoreIcon } from '@/components/atoms';

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
      icon={<ExpandMoreIcon flipped={expanded} />}
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
