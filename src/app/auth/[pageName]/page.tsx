'use client';

import { notFound, redirect } from 'next/navigation';

import { SingIn, SingUp } from '@/components';
import { selectUID } from '@/store';
import { useAppSelector } from '@/hooks';

import style from './style.module.scss';

const Auth = ({ params }: { params: { pageName: string } }) => {
  const uid = useAppSelector(selectUID);

  if (uid !== '') {
    return redirect('/');
  }

  if (!['sign-in', 'sign-up'].includes(params.pageName)) {
    notFound();
  }

  return (
    <div className={style.registration}>
      <div className={style.form}>
        {params.pageName === 'sign-in' && <SingIn />}
        {params.pageName === 'sign-up' && <SingUp />}
      </div>
    </div>
  );
};

export default Auth;
