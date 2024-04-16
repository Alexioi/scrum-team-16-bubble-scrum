'use client';

import React, { FC } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

import { Gradient } from '@/components/atoms';

const colors = ['yellow', 'green', 'purple', 'gray'];

type Value = {
  name: string;
  value: number;
};

type Props = {
  data: Value[];
};

const Chart: FC<Props> = ({ data }) => {
  return (
    <PieChart width={120} height={120}>
      <defs>
        <Gradient startColor="#ffe39c" endColor="#ffba9c" id="yellow" />
        <Gradient startColor="#6fcf97" endColor="#66d2ea" id="green" />
        <Gradient startColor="#bc9cff" endColor="#8ba4f9" id="purple" />
        <Gradient startColor="#909090" endColor="#3d4975" id="gray" />
      </defs>
      <Pie
        dataKey="value"
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={55}
        outerRadius={60}
        startAngle={-270}
        endAngle={90}
        paddingAngle={1}
      >
        {data.map((item, i) => (
          <Cell key={item.name} fill={`url(#${colors[i % colors.length]})`} />
        ))}
      </Pie>
    </PieChart>
  );
};

export { Chart };
