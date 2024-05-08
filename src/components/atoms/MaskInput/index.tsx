'use client';

import { ChangeEvent, FC } from 'react';

import { Input } from '@/components';

import { makeMaskedPhone, makeMaskedDate } from './helpers';

type Props = {
  value: string;
  name: string;
  mask?: 'phone' | 'date';
  required?: boolean;
  onChange(value: string): void;
};

const MaskInput: FC<Props> = ({
  value,
  name,
  mask = 'date',
  required = false,
  onChange,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (mask === 'phone') {
      onChange(makeMaskedPhone(e.target.value));
    }

    if (mask === 'date') {
      onChange(makeMaskedDate(e.target.value));
    }
  };

  if (mask === 'phone') {
    return (
      <Input
        type="text"
        value={value}
        placeholder="+7 (875) 323-23-32"
        onChange={handleInputChange}
        required={required}
        name={name}
      />
    );
  }

  return (
    <Input
      type="tel"
      value={value}
      placeholder="ДД.ММ.ГГГГ"
      onChange={handleInputChange}
      required={required}
      name={name}
    />
  );
};

export { MaskInput };
