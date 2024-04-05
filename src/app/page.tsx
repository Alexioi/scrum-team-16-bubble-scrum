'use client';

import { PriceRangeSlider } from '@/components';

const Home = () => {
  return (
    <div style={{ width: '266px' }}>
      <PriceRangeSlider
        min={5000}
        max={10000}
        from={5000}
        to={10000}
        title="Диапазон цены"
        description="Стоимость за сутки пребывания в номере"
        onChange={(min: number, max: number) =>
          console.log(`min: ${min}, max: ${max}`)
        }
      />
    </div>
  );
};

export default Home;
