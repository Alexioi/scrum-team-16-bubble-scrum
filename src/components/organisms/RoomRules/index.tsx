import { DotList, Typography } from '@/components';

import { title, rules } from './data';
import style from './style.module.scss';

const RoomRules = () => {
  return (
    <div className={style.rules}>
      <div className={style.title}>
        <Typography tag="h2">{title}</Typography>
      </div>
      <DotList items={rules} />
    </div>
  );
};

export { RoomRules };
