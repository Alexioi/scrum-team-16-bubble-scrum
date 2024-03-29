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

  const handleEmailSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <footer className={style.footer}>
      <div className={style.up}>
        <div className={clsx(style.container, style.body)}>
          <div className={style.logo}>
            <Logo />
            <div className={style.desc}>
              Бронирование номеров в лучшем отеле 2019 года по версии ассоциации
              «Отельные взгляды»
            </div>
          </div>

          <nav className={style.nav}>
            {linksData.map(({ title, links }) => (
              <div key={title}>
                <div className={style.title}>{title}</div>
                <ul className={style.list}>
                  {links.map(({ name, href }) => (
                    <li className={style.item} key={name}>
                      <Link className={style.link} href={href}>
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className={style.subscribe}>
            <div className={style.title}>Подписка</div>
            <div className={style.desc}>
              Получайте специальные предложения и новости сервиса
            </div>
            <form className={style.form} onSubmit={handleEmailSubmit}>
              <SubscriptionInput />
            </form>
          </div>
        </div>
      </div>
      <div className={style.down}>
        <div className={clsx(style.container, style.body)}>
          <div className={style.desc}>
            Copyright © 2018 Toxin отель. Все права защищены.
          </div>
          <ul className={style.social}>
            {socialData.map(({ href, icon }) => (
              <li key={href}>
                <Link href={href} className={style.link}>
                  <svg className={style.icon} fill={`url(#${gradientId})`}>
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
