'use client';

import { RootState, actions } from '@/store';
import { useAppDispatch, useAppSelector } from '@/hooks';

import style from './style.module.scss';

const HelloToxin = () => {
  const dispatch = useAppDispatch();
  const helloToxin = useAppSelector((state: RootState) => state.helloToxin);

  const onClickButton = () => {
    dispatch(actions.helloToxin.change('Hello, Toxin!'));
  };

  return (
    <div>
      <button type="button" onClick={onClickButton}>
        Hello
      </button>
      <span className={style.test}>{helloToxin.data}</span>
    </div>
  );
};

export { HelloToxin };
