import { FC } from 'react';

import { Typography } from '@/components';

import style from './style.module.scss';

type Props = {
  rules: string[];
};

const RoomRules: FC<Props> = ({ rules }) => {
  const title = 'Правила';

  return (
    <div className={style.rules}>
      <div className={style.title}>
        <Typography tag="h2">{title}</Typography>
      </div>
      <ul className={style.list}>
        {rules.map((rule) => (
          <li key={rule} className={style.item}>
            <span className={style.text}>{rule}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { RoomRules };
