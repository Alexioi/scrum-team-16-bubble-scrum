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
  const [result, setResult] = useState(
    items
      .map((el) => {
        return el.counter;
      })
      .join(', '),
  );

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

  const handleClearButtonClick = () => {
    setValues(
      values.map((el) => {
        return { ...el, counter: 0 };
      }),
    );
    setResult('');
  };

  const handleApplyButtonClick = () => {
    setIsOpened(false);
    setResult(
      values
        .map((el) => {
          return el.counter;
        })
        .join(', '),
    );
  };

  return (
    <div className={dropdownClasses}>
      <div>
        <input type="text" defaultValue={result} placeholder="test" />
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
                onClick={handleClearButtonClick}
              />
            </div>
            <div className={style['apply-button']}>
              <Button
                text="применить"
                size="default"
                theme="link"
                type="button"
                onClick={handleApplyButtonClick}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { Dropdown };
