import { FC } from 'react';

import SmileSVG from '@/images/decorative/smile.svg';
import HouseSVG from '@/images/decorative/house.svg';
import FlameSVG from '@/images/decorative/flame.svg';

type Props = {
  name: 'smile' | 'house' | 'flame';
};

const FeatureIcon: FC<Props> = ({ name }) => {
  switch (name) {
    case 'smile':
      return <SmileSVG />;
    case 'house':
      return <HouseSVG />;
    case 'flame':
      return <FlameSVG />;
    default:
      return null;
  }
};

export { FeatureIcon };
