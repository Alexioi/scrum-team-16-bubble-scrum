'use client';

import { useState, FC } from 'react';
import clsx from 'clsx';

import {
  DropdownInput,
  Counter,
  Button,
  ClickAwayListener,
} from '@/components';

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
  onChange(
    value: {
      name: string;
      counter: number;
    }[],
  ): void;
};

const Dropdown: FC<Props> = ({
  items,
  groups,
  placeholder,
  variants,
  hasButtons = false,
  onChange,
}) => {
  const [values, setValues] = useState(items);
  const [isOpened, setIsOpened] = useState(false);
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

      onChange(newValues);

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
    const newValues = values.map((el) => {
      return { ...el, counter: 0 };
    });

    setValues(newValues);

    onChange(newValues);

    setResult(placeholder);
  };

  const handleApplyButtonClick = () => {
    onChange(values);

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
    <ClickAwayListener onClose={handleApplyButtonClick}>
      <div className={dropdownClasses}>
        <DropdownInput
          type="text"
          onClick={handleOpeningMenuClick}
          value={result}
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
    </ClickAwayListener>
  );
};

export { Dropdown };
