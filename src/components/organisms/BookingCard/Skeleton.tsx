import { Card } from '@/components';

import style from './style.module.scss';

const Skeleton = () => {
  return (
    <Card>
      <div className={style['skeleton-wrapper']}>
        <div className={style.skeleton} />
        <div className={style.skeleton} />
      </div>
      {new Array(6)
        .fill(undefined)
        .map((_, i) => {
          return i;
        })
        .map((item) => {
          return <div key={item} className={style.skeleton} />;
        })}
      <div className={style['skeleton-button']} />
    </Card>
  );
};

export { Skeleton };
