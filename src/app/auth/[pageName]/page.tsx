'use client';

import { notFound } from 'next/navigation';
import { useState } from 'react';

import { RadioButtons } from '@/components';

import style from './style.module.scss';

const Auth = ({ params }: { params: { pageName: string } }) => {
  const [radioButtonsValues, setRadioButtonsValues] = useState([
    { value: 'man', text: 'Мужчина', isChecked: true },
    { value: 'woman', text: 'Женщина', isChecked: false },
  ]);

  if (!['sign-in', 'sign-up'].includes(params.pageName)) {
    notFound();
  }

  return (
    <div className={style.registration}>
      <div className={style.form}>
        <div style={{ background: 'white', padding: '10px' }}>
          <RadioButtons
            name="sex"
            values={radioButtonsValues}
            onChange={setRadioButtonsValues}
          />
        </div>
        {params.pageName === 'sign-in' && 'sign-in'}
        {params.pageName === 'sign-up' && 'sign-up'}
      </div>
    </div>
  );
};

export default Auth;
