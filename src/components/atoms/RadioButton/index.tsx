import { FC } from 'react';

import style from './style.module.scss';

type Props = {
  name: string;
  value: string;
  checked: boolean;
  text: string;
  onChange(): void;
};

const RadioButton: FC<Props> = ({ name, value, checked, text, onChange }) => {
  return (
    <label className={style.item}>
      <input
        className={style.input}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className={style.icon} />
      <span className={style.text}>{text}</span>
    </label>
  );
};

export { RadioButton };
