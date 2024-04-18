import { FC } from 'react';

import { RadioButton } from '@/components/atoms';

import style from './style.module.scss';

type Value = { text: string; value: string; checked: boolean };

type Props = {
  name: string;
  values: Value[];
  onChange(value: Value[]): void;
};

const RadioButtonList: FC<Props> = ({ name, values, onChange }) => {
  const handleInputClick = (index: number) => {
    const newValues = values.map((item, i) => {
      if (i === index) {
        return { ...item, checked: true };
      }

      return { ...item, checked: false };
    });

    onChange(newValues);
  };

  return (
    <div className={style['radio-buttons']}>
      {values.map((item, i) => {
        return (
          <RadioButton
            key={item.value}
            value={item.value}
            checked={item.checked}
            name={name}
            text={item.text}
            onChange={() => {
              handleInputClick(i);
            }}
          />
        );
      })}
    </div>
  );
};

export { RadioButtonList };
