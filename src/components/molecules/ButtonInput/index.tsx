import { Input } from '@/components/atoms';
import React from 'react';
import style from './style.module.scss';

interface Props extends React.ComponentProps<typeof Input> {
  iconUrl: string;
  submit?: boolean;
  onClick?(): void;
}

const ButtonInput: React.FC<Props> = ({
  iconUrl,
  submit,
  onClick,
  ...inputProps
}) => {
  return (
    <div className={style.buttonInput}>
      <Input
        type={type}
        name={inputProps.name}
        id={inputProps.id}
        value={inputProps.value}
        min={inputProps.min}
        max={inputProps.max}
        placeholder={inputProps.placeholder}
        readOnly={inputProps.readOnly}
      />
      <button
        className="button-input__button"
        type={submit ? 'submit' : 'button'}
        onClick={onClick}
      >
        M
      </button>
    </div>
  );
};

export { ButtonInput };
