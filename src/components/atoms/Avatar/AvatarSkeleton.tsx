import clsx from 'clsx';

import style from './style.module.scss';

const AvatarSkeleton = () => {
  return <div className={clsx(style.avatar, style.skeleton)} />;
};

export { AvatarSkeleton };
