'use client';

import { useAppDispatch } from '@/hooks';
import {
  UserInfo,
  Button,
  Card,
  ChangePassword,
  MaskInput,
} from '@/components';
import { signOut } from '@/api';
import { authActions } from '@/store';
import { useState } from 'react';

const UserCard = () => {
  const dispatch = useAppDispatch();
  const [phoneValue, setPhoneValue] = useState('');

  const handleSignOutClick = () => {
    dispatch(authActions.reset());
    signOut();
  };

  const handlePhoneInputChange = (value: string) => {
    setPhoneValue(value);
  };

  return (
    <Card>
      <UserInfo />
      <MaskInput
        name="phone"
        mask="phone"
        value={phoneValue}
        onChange={handlePhoneInputChange}
      />
      <Button onClick={handleSignOutClick} text="выход" type="button" />
      <ChangePassword />
    </Card>
  );
};

export { UserCard };
