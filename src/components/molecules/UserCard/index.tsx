'use client';

import { useState, FormEvent } from 'react';

import { useAppDispatch } from '@/hooks';
import {
  UserInfo,
  Button,
  Card,
  ChangePassword,
  MaskInput,
  DangerErrorMessage,
} from '@/components';
import { signOut } from '@/api';
import { authActions } from '@/store';

import style from './style.module.scss';

const UserCard = () => {
  const dispatch = useAppDispatch();
  const [phoneValue, setPhoneValue] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleSignOutClick = () => {
    dispatch(authActions.reset());
    signOut();
  };

  const handlePhoneInputChange = (value: string) => {
    setPhoneValue(value);
  };

  const handlePhoneFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (phoneValue.length < 18) {
      setPhoneError('Введите номер полностью');
      return;
    }

    setPhoneError('');
  };

  return (
    <Card>
      <UserInfo />
      <form onSubmit={handlePhoneFormSubmit} className={style.form}>
        <div className={style['input-wrapper']}>
          <MaskInput
            name="phone"
            mask="phone"
            value={phoneValue}
            onChange={handlePhoneInputChange}
            required
          />
          <Button theme="link" text="изменить" type="submit" />
        </div>
        <DangerErrorMessage>{phoneError}</DangerErrorMessage>
      </form>

      <Button onClick={handleSignOutClick} text="выход" type="button" />
      <ChangePassword />
    </Card>
  );
};

export { UserCard };
