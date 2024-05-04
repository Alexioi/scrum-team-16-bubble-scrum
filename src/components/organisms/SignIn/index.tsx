'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

import {
  Card,
  Typography,
  Input,
  Button,
  QuestionAboutAuth,
  DangerErrorMessage,
} from '@/components';
import { getUserInfo, login } from '@/api';
import { useAppDispatch } from '@/hooks';
import { authActions } from '@/store';
import { FIREBASE_AUTH_ERRORS } from '@/constants';
import { isErrorWithCode } from '@/helpers';

import style from './style.module.scss';

const SignIn = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const handleSignInButtonClick = () => {
    setError('');
  };
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(email, password);
      const result = await getUserInfo();

      if (result === null) {
        return;
      }

      const { uid, name, surname, sex, birthday, isSubscribed } = result;

      dispatch(authActions.changeUID(uid));
      dispatch(authActions.changeName(name));
      dispatch(authActions.changeSurname(surname));
      dispatch(authActions.changeSexByName(sex));
      dispatch(authActions.changeBirthday(birthday));
      dispatch(authActions.changeIsSubscribed(isSubscribed));
      dispatch(authActions.changeEmail(result.email));
    } catch (err) {
      if (
        isErrorWithCode(err) &&
        Object.keys(FIREBASE_AUTH_ERRORS).includes(err.code)
      ) {
        setError(FIREBASE_AUTH_ERRORS[err.code]);
      }
    }
  };

  return (
    <Card>
      <form onSubmit={handleFormSubmit}>
        <Typography tag="h1">Войти</Typography>
        <div className={style['login-input']}>
          <Input
            type="email"
            inputMode="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailInputChange}
            required
          />
        </div>
        <div className={style['password-input']}>
          <Input
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={handlePasswordInputChange}
            required
          />
        </div>
        <DangerErrorMessage>{error}</DangerErrorMessage>
        <div className={style['submit-button']}>
          <Button
            theme="long"
            text="войти"
            type="submit"
            onClick={handleSignInButtonClick}
          />
        </div>
      </form>
      <div className={style['question-about-auth']}>
        <QuestionAboutAuth
          questionText="Нет аккаунта на Toxin?"
          buttonLink="/sign-up"
          buttonText="создать"
        />
      </div>
    </Card>
  );
};

export { SignIn };
