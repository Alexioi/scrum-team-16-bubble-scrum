'use client';

import React, { FC } from 'react';

import { ButtonInput } from '@/components/molecules';
import ArrowForward from '@/images/decorative/arrow.svg';
import { Gradient } from '@/components/atoms/Gradient';

type Props = {
  onClick?(): void;
};

const SubscriptionInput: FC<Props> = ({ onClick }) => {
  return (
    <ButtonInput
      icon={
        <>
          <Gradient
            id="subscription-gradient"
            startColor="#BC9CFF"
            endColor="#8BA4F9"
          />
          <svg width={18} height={18}>
            <g fill="url(#subscription-gradient)">
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
