'use client';

import { useState } from 'react';
import clsx from 'clsx';

import MenuSVG from '@/images/decorative/menu.svg';

import { ButtonLink, NavigationLink, Logo } from '../../atoms';
import style from './style.module.scss';
import data from './data.json';

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
            <MenuSVG />
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
                  link="/change-me"
                  size="low"
                />
                <ButtonLink
                  text="Зарегистрировать"
                  theme="default"
                  link="/change-me"
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
