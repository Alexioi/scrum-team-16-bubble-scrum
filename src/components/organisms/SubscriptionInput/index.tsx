import { ButtonInput } from '@/components/molecules';
import React from 'react';
import ArrowForward from '@/images/decorative/arrow.svg';
import style from './style.module.scss';

const SubscriptionInput = () => {
  return (
    <ButtonInput
      icon={
        <svg className={style.subscriptionInput_icon} width={18} height={18}>
          <ArrowForward />
          <linearGradient id="linear">
            <stop offset="0%" stopColor="var(--color-stop-1)" />
            <stop offset="100%" stopColor="var(--color-stop-2)" />
          </linearGradient>
        </svg>
      }
      type="email"
      placeholder="Email"
      readOnly
    />
  );
};

export { SubscriptionInput };
