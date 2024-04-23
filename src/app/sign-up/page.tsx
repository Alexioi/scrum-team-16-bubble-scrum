'use client';

import { redirect } from 'next/navigation';

import { AuthBackground, SignUp } from '@/components';
import { selectUID } from '@/store';
import { useAppSelector } from '@/hooks';

const SignUpPage = () => {
  const uid = useAppSelector(selectUID);

  if (uid !== '') {
    return redirect('/');
  }

  return (
    <AuthBackground>
      <SignUp />
    </AuthBackground>
  );
};

export default SignUpPage;
