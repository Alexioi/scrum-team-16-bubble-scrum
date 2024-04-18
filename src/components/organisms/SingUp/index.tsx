'use client';

import { useState, ChangeEvent } from 'react';

import {
  Card,
  Typography,
  Input,
  Button,
  QuestionAboutAuth,
  RadioButtons,
  Toggle,
} from '@/components';
import { createNewUser } from '@/api';
import {
  authActions,
  selectName,
  selectSurname,
  selectSexes,
  selectBirthday,
  selectIsSubscribes,
} from '@/store';
import { useAppDispatch, useAppSelector } from '@/hooks';

import style from './style.module.scss';

const SingUp = () => {
  const dispatch = useAppDispatch();
  const isSubscribes = useAppSelector(selectIsSubscribes);
  const sex = useAppSelector(selectSexes);
  const name = useAppSelector(selectName);
  const surname = useAppSelector(selectSurname);
  const birthday = useAppSelector(selectBirthday);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(authActions.changeName(e.currentTarget.value));
  };
  const handleSurnameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(authActions.changeSurname(e.currentTarget.value));
  };
  const handleBirthdayInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(authActions.changeBirthday(e.currentTarget.value));
  };
  const handleEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const handleToggleClick = (value: boolean) => {
    dispatch(authActions.changeIsSubscribed(value));
  };
  const handleRadioButtonsChange = (
    value: { value: string; text: string; isChecked: boolean }[],
  ) => {
    dispatch(authActions.changeSex(value));
  };
  const handleSingUpButtonClick = async () => {
    try {
      const sexValue = sex.find((item) => {
        return item.isChecked;
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
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };

  return (
    <Card>
      <form>
        <Typography tag="h1">Регистрация аккаунта</Typography>
        <div className={style.name}>
          <Input
            type="text"
            name="name"
            placeholder="Имя"
            value={name}
            onChange={handleNameInputChange}
          />
        </div>
        <div className={style.surname}>
          <Input
            type="text"
            name="surname"
            placeholder="Фамилия"
            value={surname}
            onChange={handleSurnameInputChange}
          />
        </div>
        <div className={style['radio-buttons']}>
          <RadioButtons
            name="sex"
            values={sex}
            onChange={handleRadioButtonsChange}
          />
        </div>
        <div className={style.birthday}>
          <Typography tag="h3">дата рождения</Typography>
        </div>
        <div className={style['birthday-input']}>
          <Input
            type="text"
            name="birthday"
            placeholder="ДД.ММ.ГГГГ"
            value={birthday}
            onChange={handleBirthdayInputChange}
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
          />
        </div>
        <div className={style.password}>
          <Input
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={handlePasswordInputChange}
          />
        </div>
        <div className={style.toggle}>
          <Toggle
            text="Получать спецпредложения"
            isChecked={isSubscribes}
            onClick={handleToggleClick}
          />
        </div>

        <div className={style['submit-button']}>
          <Button
            theme="long"
            text="зарегистрироваться"
            onClick={handleSingUpButtonClick}
          />
        </div>
        {error}
      </form>
      <div className={style['question-about-auth']}>
        <QuestionAboutAuth
          questionText="Уже есть аккаунт на Toxin?"
          buttonLink="/auth/sign-in"
          buttonText="войти"
        />
      </div>
    </Card>
  );
};

export { SingUp };
