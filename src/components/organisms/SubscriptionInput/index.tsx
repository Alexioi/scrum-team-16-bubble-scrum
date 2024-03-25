import { ButtonInput } from '@/components/molecules';
import React, { FC } from 'react';
import ArrowForward from '@/images/decorative/arrow.svg';

type Props = {
  onClick?(): void;
};

const SubscriptionInput: FC<Props> = ({ onClick }) => {
  return (
    <ButtonInput
      icon={
        <svg width={18} height={18}>
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
