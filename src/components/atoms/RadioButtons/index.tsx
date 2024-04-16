import { FC } from 'react';

import style from './style.module.scss';

type Value = { text: string; value: string; isChecked: boolean };

type Props = {
  name: string;
  values: Value[];
  onChange(value: Value[]): void;
};

const RadioButtons: FC<Props> = ({ name, values, onChange }) => {
  const handleInputClick = (index: number) => {
    const newValues = values.map((item, i) => {
      if (i === index) {
        return { ...item, isChecked: true };
      }

      return { ...item, isChecked: false };
    });

    onChange(newValues);
  };

  return (
    <div className={style['radio-buttons']}>
      {values.map((item, i) => {
        return (
          <label className={style.item} key={item.value}>
            <input
              className={style.input}
              type="radio"
              name={name}
              value={item.value}
              checked={item.isChecked}
              onChange={() => {
                handleInputClick(i);
              }}
            />
            <span className={style.icon} />
            <span className={style.text}>{item.text}</span>
          </label>
        );
      })}
    </div>
  );
};

export { RadioButtons };
