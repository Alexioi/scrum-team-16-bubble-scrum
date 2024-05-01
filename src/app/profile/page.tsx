'use client';

import { redirect } from 'next/navigation';

import { selectUID } from '@/store';
import { useAppSelector } from '@/hooks';
import { UserInfo, Button } from '@/components';
import { logout } from '@/api';

const Profile = () => {
  const uid = useAppSelector(selectUID);

  if (uid === null) {
    return redirect('/');
  }

  return (
    <>
      <Button
        onClick={() => {
          logout();
        }}
        text="выход"
        type="button"
      />
      <UserInfo />
    </>
  );
};

export default Profile;
