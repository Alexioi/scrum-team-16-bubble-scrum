'use client';

import { useAppDispatch } from '@/hooks';
import { UserInfo, Button } from '@/components';
import { logout } from '@/api';
import { authActions } from '@/store';

const UserCard = () => {
  const dispatch = useAppDispatch();

  const handleLogoutClick = () => {
    dispatch(authActions.reset());
    logout();
  };

  return (
    <div>
      <UserInfo />
      <Button onClick={handleLogoutClick} text="выход" type="button" />
    </div>
  );
};

export { UserCard };
