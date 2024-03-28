'use client';

import { MultiRangeSlider } from '@/components';

const Home = () => {
  return (
    <MultiRangeSlider
      min={0}
      max={100}
      onChange={({ min, max }: { min: number; max: number }) => min + max}
    />
  );
};

export default Home;
