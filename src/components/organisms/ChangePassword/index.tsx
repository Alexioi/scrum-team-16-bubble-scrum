'use client';

import { FormEvent, useRef, useState } from 'react';
import clsx from 'clsx';

import { Button, Input, Modal, Typography } from '@/components/atoms';
import { updatePassword } from '@/api';

import style from './style.module.scss';
import { FormErrors, formScheme } from './sheme';

const ChangePassword = () => {
  const errorsRef = useRef<FormErrors>({ _errors: [] });
  const [errors, setErrors] = useState<FormErrors>({ _errors: [] });
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const handlePasswordFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
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

    if (
      errorsRef.current._errors.length === 0 &&
      errorsRef.current.repeatPassword === undefined
    ) {
      try {
        await updatePassword(
          formData['oldPassword'] as string,
          formData['repeatPassword'] as string,
        );
        setMessage({ type: 'success', text: 'Пароль успешно обновлён' });
      } catch (error) {
        if (error instanceof Error) {
          if (error.message === 'Пароль введён неверно') {
            errorsRef.current = {
              ...errorsRef.current,
              oldPassword: {
                _errors: ['Пароль введён неверно'],
              },
            };
          } else setMessage({ type: 'error', text: error.message });
        } else {
          setMessage({
            type: 'error',
            text: ' Произошла ошибка при изменении пароля',
          });
        }
      }
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
          {message && (
            <div
              className={clsx(style.message, [
                { [style.message_error]: message.type === 'error' },
              ])}
            >
              {message.text}
            </div>
          )}
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
