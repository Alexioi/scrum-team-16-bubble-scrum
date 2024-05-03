'use client';

import { useAppDispatch } from '@/hooks';
import { UserInfo, Button } from '@/components';
import { signOut } from '@/api';
import { authActions } from '@/store';

const UserCard = () => {
  const dispatch = useAppDispatch();

  const handleSignOutClick = () => {
    dispatch(authActions.reset());
    signOut();
  };

  return (
    <div>
      <UserInfo />
      <Button onClick={handleSignOutClick} text="выход" type="button" />
    </div>
  );
};

export { UserCard };
