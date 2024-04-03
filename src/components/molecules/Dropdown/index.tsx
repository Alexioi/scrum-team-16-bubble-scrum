'use client';

import { useState, FC } from 'react';
import clsx from 'clsx';

import { DropdownInput } from '../../organisms';
import { Counter, Button } from '../../atoms';
import { calculateValue, isEmptyCounters } from './helpers';
import style from './style.module.scss';

type Props = {
  items: {
    name: string;
    counter: number;
  }[];
  groups: number[][];
  placeholder: string;
  variants: string[][];
  hasButtons?: boolean;
};

const Dropdown: FC<Props> = ({
  items,
  groups,
  placeholder,
  variants,
  hasButtons = false,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [values, setValues] = useState(items);
  const [result, setResult] = useState(
    calculateValue(
      groups,
      values.map((el) => {
        return el.counter;
      }),
      variants,
      placeholder,
    ),
  );

  const dropdownClasses = clsx(style.dropdown, {
    [style.dropdown_opened]: isOpened,
  });

  const makeChangeValue = (i: number) => {
    return (number: -1 | 1) => {
      const newValues = values.map((el, index) => {
        if (index === i) {
          const counter = el.counter + number;

          return { ...el, counter };
        }

        return el;
      });

      setValues(newValues);

      if (hasButtons) {
        return;
      }

      setResult(
        calculateValue(
          groups,
          newValues.map((el) => {
            return el.counter;
          }),
          variants,
          placeholder,
        ),
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
    setResult(placeholder);
  };

  const handleApplyButtonClick = () => {
    setIsOpened(false);
    setResult(
      calculateValue(
        groups,
        values.map((el) => {
          return el.counter;
        }),
        variants,
        placeholder,
      ),
    );
  };

  return (
    <div className={dropdownClasses}>
      <DropdownInput
        type="text"
        onClick={handleOpeningMenuClick}
        defaultValue={result}
        readOnly
        expanded={isOpened}
        squareBottom={isOpened}
      />
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
              {isEmptyCounters(values) && (
                <Button
                  text="очистить"
                  theme="link"
                  onClick={handleClearButtonClick}
                />
              )}
            </div>
            <div className={style['apply-button']}>
              <Button
                text="применить"
                theme="link"
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
