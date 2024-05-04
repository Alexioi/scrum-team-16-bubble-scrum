'use client';

import { useAppDispatch } from '@/hooks';
import { UserInfo, Button, Card } from '@/components';
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
      <Button onClick={handleSignOutClick} text="выход" type="button" />
    </Card>
  );
};

export { UserCard };
