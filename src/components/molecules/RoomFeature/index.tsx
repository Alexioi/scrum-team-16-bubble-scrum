import { FC } from 'react';

import FeatureComfortSVG from '@/images/decorative/feature-comfort.svg';
import FeatureConvenienceSVG from '@/images/decorative/feature-convenience.svg';
import FeatureCosinessSVG from '@/images/decorative/feature-cosiness.svg';

import style from './style.module.scss';

type Props = {
  featureType: 'comfort' | 'convenience' | 'cosiness';
};

const RoomFeature: FC<Props> = ({ featureType }) => {
  const featureTypeIconMap = {
    comfort: <FeatureComfortSVG />,
    convenience: <FeatureConvenienceSVG />,
    cosiness: <FeatureCosinessSVG />,
  };

  const featureTypeTitleMap = {
    comfort: 'Комфорт',
    convenience: 'Удобство',
    cosiness: 'Уют',
  };

  const featureTypeDescriptionMap = {
    comfort: 'Шумопоглощающие стены',
    convenience: 'Окно в каждой из спален',
    cosiness: 'Номер оснащён камином',
  };

  return (
    <div className={style.feature}>
      <div className={style.wrapper}>
        <div className={style.icon}>{featureTypeIconMap[featureType]}</div>
        <div className={style.text}>
          <span className={style.title}>
            {featureTypeTitleMap[featureType]}
          </span>
          <span className={style.description}>
            {featureTypeDescriptionMap[featureType]}
          </span>
        </div>
      </div>
    </div>
  );
};

export { RoomFeature };
