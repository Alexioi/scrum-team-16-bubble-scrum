'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

import {
  Card,
  Typography,
  Input,
  Button,
  QuestionAboutAuth,
  RadioButtonList,
  Toggle,
  DangerErrorMessage,
  MaskInput,
} from '@/components';
import { createNewUser } from '@/api';
import {
  authActions,
  selectName,
  selectSurname,
  selectSexes,
  selectBirthday,
  selectIsSubscribes,
  selectEmail,
} from '@/store';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { isErrorWithCode } from '@/helpers';
import { FIREBASE_AUTH_ERRORS } from '@/constants';

import style from './style.module.scss';
import { validateInputs } from './helpers';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const isSubscribes = useAppSelector(selectIsSubscribes);
  const sexes = useAppSelector(selectSexes);
  const name = useAppSelector(selectName);
  const surname = useAppSelector(selectSurname);
  const birthday = useAppSelector(selectBirthday);
  const email = useAppSelector(selectEmail);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(authActions.changeName(e.currentTarget.value));
  };
  const handleSurnameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(authActions.changeSurname(e.currentTarget.value));
  };
  const handleBirthdayInputChange = (value: string) => {
    dispatch(authActions.changeBirthday(value));
  };
  const handleEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(authActions.changeEmail(e.currentTarget.value));
  };
  const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const handleToggleClick = (value: boolean) => {
    dispatch(authActions.changeIsSubscribed(value));
  };
  const handleRadioButtonsChange = (
    value: { value: string; text: string; checked: boolean }[],
  ) => {
    dispatch(authActions.changeSex(value));
  };
  const handleSingUpButtonClick = () => {
    setError('');
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      validateInputs(name, surname, password, birthday);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
      return;
    }

    try {
      const sexValue = sexes.find((item) => {
        return item.checked;
      })?.value;

      const { uid } = await createNewUser(
        name,
        surname,
        sexValue === undefined ? 'man' : sexValue,
        birthday,
        email,
        password,
        isSubscribes,
      );

      dispatch(authActions.changeUID(uid));
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
        <Typography tag="h1">Регистрация аккаунта</Typography>
        <div className={style.name}>
          <Input
            type="text"
            name="name"
            placeholder="Имя"
            value={name}
            onChange={handleNameInputChange}
            required
          />
        </div>
        <div className={style.surname}>
          <Input
            type="text"
            name="surname"
            placeholder="Фамилия"
            value={surname}
            onChange={handleSurnameInputChange}
            required
          />
        </div>
        <div className={style['radio-buttons']}>
          <RadioButtonList
            name="sex"
            values={sexes}
            onChange={handleRadioButtonsChange}
          />
        </div>
        <div className={style.birthday}>
          <Typography tag="h3">дата рождения</Typography>
        </div>
        <div className={style['birthday-input']}>
          <MaskInput
            name="birthday"
            mask="date"
            value={birthday}
            onChange={handleBirthdayInputChange}
            required
          />
        </div>
        <div className={style.login}>
          <Typography tag="h3">данные для входа в сервис</Typography>
        </div>
        <div className={style.email}>
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
        <div className={style.password}>
          <Input
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={handlePasswordInputChange}
            required
          />
        </div>
        <div className={style.toggle}>
          <Toggle
            text="Получать спецпредложения"
            checked={isSubscribes}
            onClick={handleToggleClick}
          />
        </div>
        <DangerErrorMessage>{error}</DangerErrorMessage>
        <div className={style['submit-button']}>
          <Button
            theme="long"
            text="зарегистрироваться"
            type="submit"
            onClick={handleSingUpButtonClick}
          />
        </div>
      </form>
      <div className={style['question-about-auth']}>
        <QuestionAboutAuth
          questionText="Уже есть аккаунт на Toxin?"
          buttonLink="/sign-in"
          buttonText="войти"
        />
      </div>
    </Card>
  );
};

export { SignUp };
