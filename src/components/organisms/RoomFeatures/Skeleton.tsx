import { Typography } from '@/components/atoms';

import { title } from './constants';
import style from './style.module.scss';

const Skeleton = () => {
  return (
    <div className={style.about}>
      <Typography tag="h2">{title}</Typography>
      <div className={style.skeleton} />
    </div>
  );
};

export { Skeleton };
