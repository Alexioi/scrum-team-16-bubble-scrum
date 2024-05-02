'use client';

import { redirect } from 'next/navigation';

import { selectUID } from '@/store';
import { useAppSelector } from '@/hooks';

const Profile = () => {
  const uid = useAppSelector(selectUID);

  if (uid === null) {
    return redirect('/');
  }

  return null;
};

export default Profile;
