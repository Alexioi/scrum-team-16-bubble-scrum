'use client';

import { FormEvent } from 'react';
import clsx from 'clsx';

import { Input, Logo } from '@/components/atoms';

import style from './style.module.scss';
import { FooterSocial } from './FooterSocial';
import { FooterNavigation } from './FooterNavigation';

const Footer = () => {
  const onEmailSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.stopPropagation();
  };

  return (
    <footer className={style.footer}>
      <div className={style.up}>
        <div className={clsx(style.container, style.up__body)}>
          <div className={style.up__logo}>
            <Logo />
            <div className={style.up__desc}>
              Бронирование номеров в лучшем отеле 2019 года по версии ассоциации
              «Отельные взгляды»
            </div>
          </div>

          <FooterNavigation />

          <div className={style.up__subscribe}>
            <div className={style.up__title}>Подписка</div>
            <div className={style.up__desc}>
              Получайте специальные предложения и новости сервиса
            </div>
            <form className={style.up__form} onSubmit={onEmailSubmit}>
              <Input placeholder="Email" type="email" />
            </form>
          </div>
        </div>
      </div>
      <div className={style.down}>
        <div className={clsx(style.container, style.down__body)}>
          <div className={style.desc}>
            Copyright © 2018 Toxin отель. Все права защищены.
          </div>
          <FooterSocial />
        </div>
      </div>
    </footer>
  );
};

export { Footer };
