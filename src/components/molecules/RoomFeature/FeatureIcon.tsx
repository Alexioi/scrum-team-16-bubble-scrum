import { FC } from 'react';

import SmileSVG from '@/images/decorative/smile.svg';
import HouseSVG from '@/images/decorative/house.svg';
import FlameSVG from '@/images/decorative/flame.svg';

type Props = {
  name: string;
};

const FeatureIcon: FC<Props> = ({ name }) => {
  if (name === 'smile') {
    return <SmileSVG />;
  }

  if (name === 'house') {
    return <HouseSVG />;
  }

  if (name === 'flame') {
    return <FlameSVG />;
  }

  return null;
};

export { FeatureIcon };
