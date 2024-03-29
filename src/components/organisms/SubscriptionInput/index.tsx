'use client';

import React, { FC, useId } from 'react';

import { Gradient } from '@/components/atoms/Gradient';
import { ButtonInput } from '@/components/molecules';
import ArrowForwardSVG from '@/images/decorative/arrow.svg';

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
            <g fill={`url(#${id})`}>
              <ArrowForwardSVG />
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
