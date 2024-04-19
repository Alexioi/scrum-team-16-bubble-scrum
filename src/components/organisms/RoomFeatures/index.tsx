import { FC } from 'react';

import { RoomFeature, Typography } from '@/components';

import style from './style.module.scss';

const RoomFeatures: FC = () => {
  const title = 'Сведения о номере';
  const features = [
    'comfort' as 'comfort',
    'convenience' as 'convenience',
    'cosiness' as 'cosiness',
  ];

  return (
    <div className={style.about}>
      <Typography tag="h2">{title}</Typography>
      {features.map((feature) => (
        <div key={feature} className={style['feature-wrapper']}>
          <RoomFeature featureType={feature} />
        </div>
      ))}
    </div>
  );
};

export { RoomFeatures };
