'use client';

import { useAppSelector } from '@/hooks';
import FacebookSVG from '@/images/decorative/facebook.svg';

import style from './style.module.scss';

const HelloToxin = () => {
  const helloToxin = useAppSelector((state) => state.helloToxin);

  const onClickButton = () => {};

  return (
    <div>
      <button type="button" onClick={onClickButton}>
        Hello
      </button>
      <span className={style.test}>{helloToxin.data}</span>
      <svg width={20} height={20}>
        <FacebookSVG />
      </svg>
    </div>
  );
};

export { HelloToxin };
