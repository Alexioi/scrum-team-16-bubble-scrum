'use client';

import { FormEvent, useId } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import { Gradient, Logo } from '@/components/atoms';

import { SubscriptionInput } from '../SubscriptionInput';
import style from './style.module.scss';
import { linksData, socialData } from './data';

const Footer = () => {
  const gradientId = useId();

  const onEmailSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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

          <nav className={style.up__nav}>
            {linksData.map(({ title, links }) => (
              <div key={title}>
                <div className={style.up__title}>{title}</div>
                <ul className={style.up__list}>
                  {links.map(({ name, href }) => (
                    <li className={style.up__item} key={name}>
                      <Link className={style.up__link} href={href}>
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className={style.up__subscribe}>
            <div className={style.up__title}>Подписка</div>
            <div className={style.up__desc}>
              Получайте специальные предложения и новости сервиса
            </div>
            <form className={style.up__form} onSubmit={onEmailSubmit}>
              <SubscriptionInput />
            </form>
          </div>
        </div>
      </div>
      <div className={style.down}>
        <div className={clsx(style.container, style.down__body)}>
          <div className={style.desc}>
            Copyright © 2018 Toxin отель. Все права защищены.
          </div>
          <ul className={style.down__social}>
            {socialData.map(({ href, icon }) => (
              <li key={href}>
                <Link href={href} className={style.down__link}>
                  <svg
                    className={style.down__icon}
                    fill={`url(#${gradientId})`}
                  >
                    {icon}
                  </svg>
                </Link>
              </li>
            ))}
            <Gradient startColor="#BC9CFF" endColor="#8BA4F9" id={gradientId} />
          </ul>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
