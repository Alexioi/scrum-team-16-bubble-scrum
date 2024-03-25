'use client';

import { FormEvent } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import FacebookIcon from '@/images/decorative/facebook.svg';
import TwitterIcon from '@/images/decorative/twitter.svg';
import InstagramIcon from '@/images/decorative/instagram.svg';

import { Input, Logo, Gradient } from '@/components/atoms';

import style from './style.module.scss';
import { footerLinks } from './footerLinks';

const Footer = () => {
  const onEmailSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.stopPropagation();
  };

  return (
    <footer className={style.footer}>
      <div className={style.up}>
        <div className={clsx(style.container, style.up__body)}>
          <div>
            <Logo />
            <div className={style.up__desc}>
              Бронирование номеров в лучшем отеле 2019 года по версии ассоциации
              «Отельные взгляды»
            </div>
          </div>
          {footerLinks.map((column) => (
            <div key={column.name} className={style.up__column}>
              <div className={style.up__title}>{column.name}</div>
              <ul className={style.up__list}>
                {column.links.map((link) => (
                  <li key={link.name} className={style.up__item}>
                    <Link className={style.up__link} href={link.href}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
          <ul className={style.down__links}>
            <li>
              <Link href="/#" className={style.down__link}>
                <svg className={style.down__icon} fill="url(#twitter)">
                  <Gradient
                    startColor="#BC9CFF"
                    endColor="#8BA4F9"
                    id="twitter"
                  />
                  <TwitterIcon />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="/#" className={style.down__link}>
                <svg className={style.down__icon} fill="url(#facebook)">
                  <Gradient
                    startColor="#BC9CFF"
                    endColor="#8BA4F9"
                    id="facebook"
                  />
                  <FacebookIcon />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="/#" className={style.down__link}>
                <svg className={style.down__icon} fill="url(#instagram)">
                  <Gradient
                    startColor="#BC9CFF"
                    endColor="#8BA4F9"
                    id="instagram"
                  />
                  <InstagramIcon />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
