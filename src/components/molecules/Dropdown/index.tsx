'use client';

import { useState, FC } from 'react';
import clsx from 'clsx';

import { Counter, Button } from '../../atoms';
import style from './style.module.scss';

type Props = {
  hasButtons: boolean;
  items: {
    name: string;
    counter: number;
    variants: string[];
  }[];
  groups: number[][];
};

const Dropdown: FC<Props> = ({ hasButtons, items, groups }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [values, setValues] = useState(items);

  console.log(groups);

  const dropdownClasses = clsx(style.dropdown, {
    [style.dropdown_opened]: isOpened,
  });

  const makeChangeValue = (i: number) => {
    return (number: -1 | 1) => {
      setValues(
        values.map((el, index) => {
          if (index === i) {
            const counter = el.counter + number;

            return { ...el, counter };
          }

          return el;
        }),
      );
    };
  };

  const handleOpeningMenuClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className={dropdownClasses}>
      <div>
        <input type="text" />
        <button onClick={handleOpeningMenuClick}>+</button>
      </div>
      <div className={style.menu}>
        <ul className={style.list}>
          {values.map((el, i) => {
            return (
              <Counter
                key={el.name}
                name={el.name}
                value={el.counter}
                changeValue={makeChangeValue(i)}
              />
            );
          })}
        </ul>
        {hasButtons && (
          <div className={style.buttons}>
            <div className={style['clear-button']}>
              <Button
                text="очистить"
                size="default"
                theme="link"
                type="button"
                onClick={() => {}}
              />
            </div>
            <div className={style['apply-button']}>
              <Button
                text="применить"
                size="default"
                theme="link"
                type="button"
                onClick={() => {}}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { Dropdown };
