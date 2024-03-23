'use client';

import { useState } from 'react';
import clsx from 'clsx';

import MenuSVG from '@/images/decorative/menu.svg';

import { Button, NavigationLink } from '../../atoms';
import style from './style.module.scss';

type NavItem = {
  text: string;
  list?: { link: string; text: string }[];
  link?: string;
};

type Props = {
  navItems: NavItem[];
  username?: string;
};

const Header = ({ navItems, username }: Props) => {
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
          <div className={style.logo}>Toxin</div>
          <button
            type="button"
            className={style['burger-button']}
            onClick={handleBurgerButtonClick}
          >
            <MenuSVG />
          </button>
          <nav className={style.navigation}>
            <ul className={style.list}>
              {navItems.map((el) => {
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
            {username === undefined ? (
              <>
                <Button
                  text="Войти"
                  theme="outlined"
                  link="/change-me"
                  size="low"
                />
                <Button
                  text="Зарегистрировать"
                  theme="default"
                  link="/change-me"
                  size="low"
                />
              </>
            ) : (
              <span className={style.username}>{username}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
