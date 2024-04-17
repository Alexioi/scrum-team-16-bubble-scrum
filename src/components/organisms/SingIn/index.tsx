import {
  Card,
  Typography,
  Input,
  Button,
  QuestionAboutAuth,
} from '@/components';

import style from './style.module.scss';

const SingIn = () => {
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
          />
        </div>
        <div className={style['password-input']}>
          <Input type="password" name="password" placeholder="Пароль" />
        </div>
        <div className={style['submit-button']}>
          <Button theme="long" text="войти" onClick={() => {}} />
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
