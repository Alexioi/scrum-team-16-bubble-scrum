'use client';

import { useState, FormEvent } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks';
import {
  UserInfo,
  Button,
  Card,
  ChangePassword,
  MaskInput,
  DangerErrorMessage,
  AvatarUpload,
} from '@/components';
import { changePhone, signOut } from '@/api';
import {
  authActions,
  selectAvatarUrl,
  selectPhone,
  selectUserInfoID,
} from '@/store';

import style from './style.module.scss';

const UserCard = () => {
  const dispatch = useAppDispatch();
  const phone = useAppSelector(selectPhone);
  const id = useAppSelector(selectUserInfoID);
  const avatarUrl = useAppSelector(selectAvatarUrl);
  const [phoneValue, setPhoneValue] = useState(phone);
  const [phoneError, setPhoneError] = useState('');

  const handleSignOutClick = () => {
    dispatch(authActions.reset());
    signOut();
  };

  const handlePhoneInputChange = (value: string) => {
    setPhoneValue(value);
  };

  const handlePhoneFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (phoneValue.length < 18) {
      setPhoneError('Введите номер полностью');
      return;
    }

    try {
      await changePhone(id, phoneValue);
      dispatch(authActions.changePhone(phoneValue));
      setPhoneError('');
    } catch (err) {
      if (err instanceof Error) {
        setPhoneError(err.message);
      }
    }
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
      <AvatarUpload userId={id} userAvatarUrl={avatarUrl} />
    </Card>
  );
};

export { UserCard };
