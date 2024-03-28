'use client';

import React, { FC, useId } from 'react';

import { ButtonInput } from '@/components/molecules';
import ArrowForward from '@/images/decorative/arrow.svg';
import { Gradient } from '@/components/atoms/Gradient';

type Props = {
  onClick?(): void;
};

const SubscriptionInput: FC<Props> = ({ onClick }) => {
  const id = useId();

  return (
    <ButtonInput
      icon={
        <svg width={18} height={18} fill={`url(#${id})`}>
          <Gradient id={id} startColor="#BC9CFF" endColor="#8BA4F9" />
          <ArrowForward />
        </svg>
      }
      onClick={onClick}
      type="email"
      placeholder="Email"
      submit
    />
  );
};

export { SubscriptionInput };
