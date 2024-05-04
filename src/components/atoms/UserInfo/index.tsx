'use client';

import { Typography } from '@/components';
import { useAppSelector } from '@/hooks';
import {
  selectBirthday,
  selectEmail,
  selectName,
  selectSexes,
  selectSurname,
} from '@/store';

import style from './style.module.scss';

const UserInfo = () => {
  const name = useAppSelector(selectName);
  const surname = useAppSelector(selectSurname);
  const sexes = useAppSelector(selectSexes);
  const birthday = useAppSelector(selectBirthday);
  const email = useAppSelector(selectEmail);

  return (
    <div className={style['user-info']}>
      <Typography tag="span">
        Имя: {name} {surname}
      </Typography>
      <Typography tag="span">
        Пол:{' '}
        {
          sexes.find((item) => {
            return item.checked;
          })?.text
        }
      </Typography>
      <Typography tag="span">Дата рождения: {birthday}</Typography>
      <Typography tag="span">Почта: {email}</Typography>
    </div>
  );
};

export { UserInfo };
