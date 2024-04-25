import style from './style.module.scss';

const Skeleton = () => {
  return (
    <ul className={style.list}>
      <li className={style['skeleton-item']} />
      <li className={style['skeleton-item']} />
      <li className={style['skeleton-item']} />
    </ul>
  );
};

export { Skeleton };
