import { FC, useId } from 'react';

import { Gradient } from '@/components';

import { FeatureIcon } from './FeatureIcon';
import style from './style.module.scss';

type Props = {
  name: 'smile' | 'house' | 'flame';
  title: string;
  text: string;
};

const RoomFeature: FC<Props> = ({ name, title, text }) => {
  const gradientId = useId();

  return (
    <div className={style.feature}>
      <div className={style.wrapper}>
        <div className={style.icon}>
          <svg height={43} width={40}>
            <g fill={`url(#${gradientId})`}>
              <Gradient
                id={gradientId}
                startColor="#BC9CFF"
                endColor="#8BA4F9"
              />
              <FeatureIcon name={name} />
            </g>
          </svg>
        </div>
        <div className={style.text}>
          <span className={style.title}>{title}</span>
          <span className={style.description}>{text}</span>
        </div>
      </div>
    </div>
  );
};

export { RoomFeature };
