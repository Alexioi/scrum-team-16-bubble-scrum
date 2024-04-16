'use client';

import { notFound } from 'next/navigation';

import style from './style.module.scss';

const Auth = ({ params }: { params: { pageName: string } }) => {
  if (!['login', 'registration'].includes(params.pageName)) {
    notFound();
  }

  return (
    <div className={style.registration}>
      <div className={style.form}>
        {params.pageName === 'login' && 'login'}
        {params.pageName === 'registration' && 'registration'}
      </div>
    </div>
  );
};

export default Auth;
