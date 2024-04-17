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

import style from './style.module.scss';

const SingUp = () => {
  const [toggleValue, setToggleValue] = useState(true);
  const [radioButtonsValues, setRadioButtonsValues] = useState([
    { value: 'man', text: 'мужчина', isChecked: true },
    { value: 'woman', text: 'женщина', isChecked: false },
  ]);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const handleSurnameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSurname(e.currentTarget.value);
  };
  const handleBirthdayInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBirthday(e.currentTarget.value);
  };
  const handleEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleSingUpButtonClick = () => {
    createNewUser(
      name,
      surname,
      radioButtonsValues.find((item) => {
        return item.isChecked;
      })?.value || 'man',
      birthday,
      email,
      password,
      toggleValue,
    );
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
            values={radioButtonsValues}
            onChange={setRadioButtonsValues}
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
            isChecked={toggleValue}
            onClick={setToggleValue}
          />
        </div>
        <div className={style['submit-button']}>
          <Button
            theme="long"
            text="зарегистрироваться"
            onClick={handleSingUpButtonClick}
          />
        </div>
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
