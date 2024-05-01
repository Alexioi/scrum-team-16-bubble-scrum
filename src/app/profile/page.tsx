'use client';

import { redirect } from 'next/navigation';

import { selectUID } from '@/store';
import { useAppSelector } from '@/hooks';
import { UserInfo } from '@/components';

const Profile = () => {
  const uid = useAppSelector(selectUID);

  if (uid === null) {
    return redirect('/');
  }

  return <UserInfo />;
};

export default Profile;
