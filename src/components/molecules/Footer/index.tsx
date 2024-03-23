import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from '@/components/atoms/icons';
import Logo from '@/images/decorative/logo.svg';

import style from './style.module.scss';
import { footerLinks } from './footerLinks';

const Footer = () => {
  return (
    <footer>
      <div className={style.up}>
        <div className={clsx(style.container, style.up__body)}>
          <div>
            <Link href="/#">
              <Image src={Logo} alt="Лого" />
            </Link>
            <div className={style.up__desc}>
              Бронирование номеров в лучшем отеле 2019 года по версии ассоциации
              «Отельные взгляды»
            </div>
          </div>
          {footerLinks.map((column) => (
            <div key={column.name}>
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
          <div>
            <div className={style.up__title}>Подписка</div>
            <div className={style.up__desc}>
              Получайте специальные предложения и новости сервиса
            </div>
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
                <TwitterIcon />
              </Link>
            </li>
            <li>
              <Link href="/#" className={style.down__link}>
                <FacebookIcon />
              </Link>
            </li>
            <li>
              <Link href="/#" className={style.down__link}>
                <InstagramIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
