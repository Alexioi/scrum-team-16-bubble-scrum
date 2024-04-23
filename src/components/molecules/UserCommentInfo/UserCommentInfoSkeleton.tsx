import clsx from 'clsx';

import { AvatarSkeleton } from '@/components/atoms';

import style from './style.module.scss';

const UserCommentInfoSkeleton = () => {
  return (
    <div className={style.user}>
      <AvatarSkeleton />
      <div className={style.skeleton_body}>
        <div className={clsx(style.name, style.skeleton_text)}>
          Контантин Константинов
        </div>
        <div className={clsx(style.skeleton_text, style.skeleton_date)}>
          3 недели назад
        </div>
      </div>
    </div>
  );
};

export { UserCommentInfoSkeleton };
