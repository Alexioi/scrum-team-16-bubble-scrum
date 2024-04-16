'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import style from './style.module.scss';

const Auth = ({ params }: { params: { pageName: string } }) => {
  const router = useRouter();

  useEffect(() => {
    if (!['login', 'registration'].includes(params.pageName)) {
      router.push('/404');
    }
  }, [params.pageName, router]);

  if (['login', 'registration'].includes(params.pageName)) {
    return (
      <div className={style.registration}>
        <div className={style.form}>
          {params.pageName === 'login' && 'login'}
          {params.pageName === 'registration' && 'registration'}
        </div>
      </div>
    );
  }

  return null;
};

export default Auth;
