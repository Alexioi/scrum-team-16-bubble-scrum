'use client';

import { redirect } from 'next/navigation';

import { BookingList, UserCard, Container } from '@/components';
import { selectUID } from '@/store';
import { useAppSelector } from '@/hooks';

const Profile = () => {
  const uid = useAppSelector(selectUID);

  if (uid === null) {
    return redirect('/');
  }

  return (
    <Container>
      <UserCard />
      <BookingList />
    </Container>
  );
};

export default Profile;
