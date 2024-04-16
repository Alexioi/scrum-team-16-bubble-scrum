'use client';

import React, { FC } from 'react';
import { PieChart, Pie } from 'recharts';

type Value = {
  name: string;
  value: number;
};

type Props = {
  data: Value[];
};

const ImpressionsChart: FC<Props> = ({ data }) => {
  return (
    <PieChart width={120} height={120}>
      <Pie
        dataKey="value"
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={56}
        outerRadius={60}
        fill="#8884d8"
      />
    </PieChart>
  );
};

export { ImpressionsChart };
