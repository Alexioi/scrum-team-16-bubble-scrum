'use client';

import { FormEvent, useState } from 'react';

import { Button, Input, Modal, Typography } from '@/components/atoms';

import style from './style.module.scss';

const ChangePassword = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePasswordFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const data = new FormData(e.currentTarget);
    // const formData = Object.fromEntries(data.entries());
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
            name="oldPassrord"
          />
          <Input
            placeholder="Новый пароль"
            type="password"
            name="newPassrord"
          />
          <Input
            placeholder="Повторите новый пароль"
            type="password"
            name="repeatPassrord"
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
