'use client';

import Link from 'next/link';
import { useState, FC } from 'react';
import clsx from 'clsx';

import { ExpandMoreIcon } from '../ExpandMoreIcon';
import { ClickAwayListener } from '../ClickAwayListener';
import style from './style.module.scss';

type List = { text: string; link: string }[];

type Props = {
  text: string;
  link?: string;
  list?: List;
};

const NavigationLink: FC<Props> = ({ text, link, list }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleNavigationButtonClick = () => {
    setIsOpened(!isOpened);
  };

  if (list !== undefined) {
    return (
      <ClickAwayListener
        key={text}
        onClose={() => {
          setIsOpened(false);
        }}
      >
        <li className={style['navigation-item']}>
          <div className={style['sub-navigation-menu']}>
            <button
              type="button"
              className={style['navigation-button']}
              onClick={handleNavigationButtonClick}
            >
              <span className={style['button-content']}>{text}</span>
              <ExpandMoreIcon flipped={isOpened} />
            </button>
            <ul
              className={clsx(style['sub-navigation-list'], {
                [style['sub-navigation-list_opened']]: isOpened,
              })}
            >
              {list.map((el) => {
                return (
                  <li key={el.text} className={style['navigation-item']}>
                    <Link href={el.link} className={style['navigation-link']}>
                      {el.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </li>
      </ClickAwayListener>
    );
  }

  if (link !== undefined) {
    return (
      <li key={text} className={style['navigation-item']}>
        <Link className={style['navigation-link']} href={link}>
          {text}
        </Link>
      </li>
    );
  }

  return null;
};

export type { List };
export { NavigationLink };
