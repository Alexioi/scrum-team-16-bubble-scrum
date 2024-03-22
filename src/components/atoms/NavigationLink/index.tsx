'use client';

import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';

import ExpandMoreSVG from '@/images/decorative/expand-more.svg';

import style from './style.module.scss';

type List = { text: string; link: string }[];

const NavigationLink = ({
  text,
  link,
  list,
}: {
  text: string;
  link?: string;
  list?: List;
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleNavigationButtonClick = () => {
    setIsOpened(!isOpened);
  };

  if (list !== undefined) {
    return (
      <li key={text} className={style['navigation-item']}>
        <div className={style['sub-navigation-menu']}>
          <button
            type="button"
            className={style['navigation-button']}
            onClick={handleNavigationButtonClick}
          >
            <span className={style['button-content']}>{text}</span>
            <ExpandMoreSVG />
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

  return 'Не указана ссылка';
};

export { NavigationLink };
