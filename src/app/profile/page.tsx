'use client';

import { redirect } from 'next/navigation';

import { BookingList, UserCard, Container } from '@/components';
import { selectUID } from '@/store';
import { useAppSelector } from '@/hooks';

import style from './style.module.scss';

const Profile = () => {
  const uid = useAppSelector(selectUID);

  if (uid === null) {
    return redirect('/');
  }

  return (
    <Container>
      <div className={style.page}>
        <UserCard />
        <BookingList />
      </div>
    </Container>
  );
};

export default Profile;
