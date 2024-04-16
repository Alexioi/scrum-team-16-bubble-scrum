'use client';

import { notFound } from 'next/navigation';

import style from './style.module.scss';

const Auth = ({ params }: { params: { pageName: string } }) => {
  if (!['sign-in', 'sign-up'].includes(params.pageName)) {
    notFound();
  }

  return (
    <div className={style.registration}>
      <div className={style.form}>
        {params.pageName === 'sign-in' && 'sign-in'}
        {params.pageName === 'sign-up' && 'sign-up'}
      </div>
    </div>
  );
};

export default Auth;
