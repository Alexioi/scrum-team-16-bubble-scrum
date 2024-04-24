import { FC } from 'react';

import { RoomFeature, Typography } from '@/components';

import { title } from './constants';
import style from './style.module.scss';

const RoomFeatures: FC = () => {
  const features = [
    { name: 'smile', title: 'Комфорт', text: 'Шумопоглощающие стены' },
    { name: 'house', title: 'Удобство', text: 'Окно в каждой из спален' },
    { name: 'flame', title: 'Уют', text: 'Номер оснащён камином' },
  ];

  return (
    <div className={style.about}>
      <Typography tag="h2">{title}</Typography>
      {features.map((item) => (
        <div key={item.name} className={style['feature-wrapper']}>
          <RoomFeature name={item.name} title={item.title} text={item.text} />
        </div>
      ))}
    </div>
  );
};

export { RoomFeatures };
