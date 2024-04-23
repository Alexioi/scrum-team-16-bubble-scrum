import clsx from 'clsx';

import { UserCommentInfoSkeleton } from '@/components/molecules';

import style from './style.module.scss';

const CommentCardSkeleton = () => {
  return (
    <div className={style.card}>
      <UserCommentInfoSkeleton />

      <div className={style.body}>
        <div className={style.like}>
          <div className={clsx(style.skeleton, style.skeleton_like)} />
        </div>
        <div className={style.skeleton}>
          Великолепный матрас на кровати в основной спальне! А пуфик вообще
          потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал
          комплименты повару — никто не жаловался из соседей.
        </div>
      </div>
    </div>
  );
};

export { CommentCardSkeleton };
