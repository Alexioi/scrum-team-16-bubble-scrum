'use client';

/* eslint-disable jsx-a11y/label-has-associated-control */
import style from './style.module.scss';

interface CustomCheckboxProps {
  id: string;
  name: string;
  text: string;
  isDisabled: boolean;
}

const CustomCheckbox = ({
  id,
  name,
  text,
  isDisabled,
}: CustomCheckboxProps) => {
  return (
    <div className={style['custom-checkbox']}>
      <label className={style['custom-checkbox__label']}>
        <input
          className={`${style['custom-checkbox__input']} ${isDisabled && 'custom-checkbox__input--disabled'}`}
          id={id}
          name={name}
          type="checkbox"
          disabled={isDisabled}
        />
        <span className={style['custom-checkbox__checkmark-square-border']}>
          <span className={style['custom-checkbox__checkmark-outer-item']} />
          <span className={style['custom-checkbox__checkmark-inner-item']} />
        </span>
        <span className={style['custom-checkbox__text']}>{text}</span>
      </label>
    </div>
  );
};

export { CustomCheckbox };
