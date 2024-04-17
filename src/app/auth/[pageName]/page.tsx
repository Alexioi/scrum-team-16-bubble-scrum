'use client';

import { notFound } from 'next/navigation';
import { useState } from 'react';

import { RadioButtons, Toggle, SingIn } from '@/components';

import style from './style.module.scss';

const Auth = ({ params }: { params: { pageName: string } }) => {
  const [radioButtonsValues, setRadioButtonsValues] = useState([
    { value: 'man', text: 'мужчина', isChecked: true },
    { value: 'woman', text: 'женщина', isChecked: false },
  ]);

  const [toggleValues, setToggleValues] = useState(true);

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
          <Toggle
            text="Получать спецпредложения"
            isChecked={toggleValues}
            onClick={setToggleValues}
          />
        </div>
        {params.pageName === 'sign-in' && <SingIn />}
        {params.pageName === 'sign-up' && 'sign-up'}
      </div>
    </div>
  );
};

export default Auth;
