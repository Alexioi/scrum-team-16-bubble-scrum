'use client';

import { redirect } from 'next/navigation';

import { AuthBackground, SignIn } from '@/components';
import { selectUID } from '@/store';
import { useAppSelector } from '@/hooks';

const SignInPage = () => {
  const uid = useAppSelector(selectUID);

  if (uid !== '') {
    return redirect('/');
  }

  return (
    <AuthBackground>
      <SignIn />
    </AuthBackground>
  );
};

export default SignInPage;
