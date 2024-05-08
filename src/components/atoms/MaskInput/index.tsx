'use client';

import { useState, ChangeEvent } from 'react';

import { Input } from '@/components';

import { makeMaskedPhone } from './helpers';

const MaskInput = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(makeMaskedPhone(e.target.value));
  };

  return (
    <Input
      type="tel"
      value={value}
      placeholder="+7 (875) 323-23-32"
      onChange={handleInputChange}
    />
  );
};

export { MaskInput };
