'use client';

import { useState } from 'react';

import {
  Card,
  Typography,
  Input,
  Button,
  QuestionAboutAuth,
  RadioButtons,
  Toggle,
} from '@/components';

import style from './style.module.scss';

const SingUp = () => {
  const [toggleValues, setToggleValues] = useState(true);
  const [radioButtonsValues, setRadioButtonsValues] = useState([
    { value: 'man', text: 'мужчина', isChecked: true },
    { value: 'woman', text: 'женщина', isChecked: false },
  ]);

  return (
    <Card>
      <form>
        <Typography tag="h1">Регистрация аккаунта</Typography>
        <div className={style.name}>
          <Input type="text" name="name" placeholder="Имя" />
        </div>
        <div className={style.surname}>
          <Input type="text" name="surname" placeholder="Фамилия" />
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
          <Input type="text" name="birthday" placeholder="ДД.ММ.ГГГГ" />
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
          />
        </div>
        <div className={style.password}>
          <Input type="password" name="password" placeholder="Пароль" />
        </div>
        <div className={style.toggle}>
          <Toggle
            text="Получать спецпредложения"
            isChecked={toggleValues}
            onClick={setToggleValues}
          />
        </div>
        <div className={style['submit-button']}>
          <Button theme="long" text="войти" onClick={() => {}} />
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
