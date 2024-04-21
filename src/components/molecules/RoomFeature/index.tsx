import { FC, useId } from 'react';

import SmileSVG from '@/images/decorative/smile.svg';
import HouseSVG from '@/images/decorative/house.svg';
import FlameSVG from '@/images/decorative/flame.svg';
import { Gradient } from '@/components';

import style from './style.module.scss';

type Props = {
  featureType: 'comfort' | 'convenience' | 'cosiness';
};

const RoomFeature: FC<Props> = ({ featureType }) => {
  const gradientId = useId();

  const featureTypeIconMap = {
    comfort: <SmileSVG />,
    convenience: <HouseSVG />,
    cosiness: <FlameSVG />,
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
        <div className={style.icon}>
          <svg height={43} width={40}>
            <g fill={`url(#${gradientId})`}>
              <Gradient
                id={gradientId}
                startColor="#BC9CFF"
                endColor="#8BA4F9"
              />
              {featureTypeIconMap[featureType]}
            </g>
          </svg>
        </div>
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
