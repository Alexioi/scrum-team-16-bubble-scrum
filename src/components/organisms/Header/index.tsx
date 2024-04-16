'use client';

import { useState } from 'react';
import clsx from 'clsx';

import MenuSVG from '@/images/decorative/menu.svg';

import { ButtonLink, NavigationLink, Logo } from '../../atoms';
import style from './style.module.scss';
import { data } from './data';

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleBurgerButtonClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div
      className={clsx(style.header, {
        [style['header_mobile-navigation-opened']]: isOpened,
      })}
    >
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.logo}>
            <Logo />
          </div>
          <button
            type="button"
            className={style['burger-button']}
            onClick={handleBurgerButtonClick}
          >
            <svg>
              <MenuSVG />
            </svg>
          </button>
          <nav className={style.navigation}>
            <ul className={style.list}>
              {data.navItems.map((el) => {
                return (
                  <NavigationLink
                    key={el.text}
                    text={el.text}
                    link={el.link}
                    list={el.list}
                  />
                );
              })}
            </ul>
          </nav>
          <div className={style.login}>
            {data.username === '' ? (
              <>
                <ButtonLink
                  text="Войти"
                  theme="outlined"
                  link="/auth/login"
                  size="low"
                />
                <ButtonLink
                  text="Зарегистрироваться"
                  theme="default"
                  link="/auth/registration"
                  size="low"
                />
              </>
            ) : (
              <span className={style.username}>{data.username}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
