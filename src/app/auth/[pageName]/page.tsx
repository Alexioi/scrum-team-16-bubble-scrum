'use client';

import { notFound } from 'next/navigation';
import { useState } from 'react';

import { RadioButtonList } from '@/components';

import style from './style.module.scss';

const Auth = ({ params }: { params: { pageName: string } }) => {
  const [RadioButtonListValues, setRadioButtonListValues] = useState([
    { value: 'man', text: 'Мужчина', checked: true },
    { value: 'woman', text: 'Женщина', checked: false },
  ]);

  if (!['sign-in', 'sign-up'].includes(params.pageName)) {
    notFound();
  }

  return (
    <div className={style.registration}>
      <div className={style.form}>
        <div style={{ background: 'white', padding: '10px' }}>
          <RadioButtonList
            name="sex"
            values={RadioButtonListValues}
            onChange={setRadioButtonListValues}
          />
        </div>
        {params.pageName === 'sign-in' && 'sign-in'}
        {params.pageName === 'sign-up' && 'sign-up'}
      </div>
    </div>
  );
};

export default Auth;
