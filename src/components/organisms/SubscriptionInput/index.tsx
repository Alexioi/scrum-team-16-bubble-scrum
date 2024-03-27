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
        <>
          <Gradient id={id} startColor="#BC9CFF" endColor="#8BA4F9" />
          <svg width={18} height={18}>
            <g fill={`url(${id})`}>
              <ArrowForward />
            </g>
          </svg>
        </>
      }
      onClick={onClick}
      type="email"
      placeholder="Email"
      submit
    />
  );
};

export { SubscriptionInput };
