'use client';

import { FormEvent, useRef, useState } from 'react';

import { Button, Input, Modal, Typography } from '@/components/atoms';

import style from './style.module.scss';
import { FormErrors, formScheme } from './sheme';

const ChangePassword = () => {
  const errorsRef = useRef<FormErrors>({ _errors: [] });
  const [errors, setErrors] = useState<FormErrors>({ _errors: [] });
  const [isOpen, setIsOpen] = useState(false);

  const handlePasswordFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const formData = Object.fromEntries(data.entries());
    const validResult = formScheme.safeParse(formData);

    if ('error' in validResult) {
      const validErrors = validResult.error.format();
      errorsRef.current = validErrors;
    }

    if (validResult.success) {
      errorsRef.current = { _errors: [] };
    }

    if (formData['newPassword'] !== formData['repeatPassword']) {
      errorsRef.current = {
        ...errorsRef.current,
        repeatPassword: { _errors: ['Пароль не совпадает с введённым выше'] },
      };
    }

    setErrors(errorsRef.current);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} text="Изменить пароль" />
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <Typography tag="h2">Изменение пароля</Typography>
        <form className={style.form} onSubmit={handlePasswordFormSubmit}>
          <Input
            placeholder="Старый пароль"
            type="password"
            name="oldPassword"
            error={errors.oldPassword ? errors.oldPassword._errors[0] : ''}
          />
          <Input
            placeholder="Новый пароль"
            type="password"
            name="newPassword"
            error={errors.newPassword ? errors.newPassword._errors[0] : ''}
          />
          <Input
            placeholder="Повторите новый пароль"
            type="password"
            name="repeatPassword"
            error={
              errors.repeatPassword ? errors.repeatPassword._errors[0] : ''
            }
          />
          <div className={style.change_button}>
            <Button
              onClick={() => {}}
              type="submit"
              text="Изменить"
              theme="long"
            />
          </div>
        </form>
      </Modal>
    </>
  );
};

export { ChangePassword };
