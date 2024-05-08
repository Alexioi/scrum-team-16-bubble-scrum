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

const UserCard = () => {
  const dispatch = useAppDispatch();

  const handleSignOutClick = () => {
    dispatch(authActions.reset());
    signOut();
  };

  return (
    <Card>
      <UserInfo />
      <MaskInput />
      <Button onClick={handleSignOutClick} text="выход" type="button" />
      <ChangePassword />
    </Card>
  );
};

export { UserCard };
