'use client';

import { useState, ChangeEvent } from 'react';
import {
  Card,
  Typography,
  Input,
  Button,
  QuestionAboutAuth,
} from '@/components';
import { getUserData } from '@/api';
import { useAppDispatch } from '@/hooks';
import { authActions } from '@/store';

import style from './style.module.scss';

const SingIn = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const handleSingInButtonClick = async () => {
    const { uid, name, surname, sex, birthday, isSubscribed } =
      await getUserData(email, password);

    dispatch(authActions.changeUID(uid));
    dispatch(authActions.changeName(name));
    dispatch(authActions.changeSurname(surname));
    dispatch(authActions.changeSex(sex));
    dispatch(authActions.changeBirthday(birthday));
    dispatch(authActions.changeIsSubscribed(isSubscribed));
  };

  return (
    <Card>
      <form>
        <Typography tag="h1">Войти</Typography>
        <div className={style['login-input']}>
          <Input
            type="email"
            inputMode="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailInputChange}
          />
        </div>
        <div className={style['password-input']}>
          <Input
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={handlePasswordInputChange}
          />
        </div>
        <div className={style['submit-button']}>
          <Button theme="long" text="войти" onClick={handleSingInButtonClick} />
        </div>
      </form>
      <div className={style['question-about-auth']}>
        <QuestionAboutAuth
          questionText="Нет аккаунта на Toxin?"
          buttonLink="/auth/sign-up"
          buttonText="создать"
        />
      </div>
    </Card>
  );
};

export { SingIn };
