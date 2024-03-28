'use client';

import { MultiRangeSlider } from '@/components';

const Home = () => {
  return (
    <MultiRangeSlider
      min={0}
      max={100}
      onChange={({ min, max }: { min: number; max: number }) =>
        console.log(`min = ${min}, max = ${max}`)
      }
    />
  );
};

export default Home;
