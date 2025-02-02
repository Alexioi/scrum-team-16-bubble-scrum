'use client';

import React, { FC, useId } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

import { Gradient } from '@/components/atoms';
import color from '@/style/global/color.module.scss';

const colors = ['yellow', 'green', 'purple', 'gray'];

type Value = {
  name: string;
  value: number;
};

type Props = {
  data: Value[];
};

const Chart: FC<Props> = ({ data }) => {
  const id = useId();

  return (
    <PieChart width={120} height={120}>
      <defs>
        <Gradient
          startColor={color.yellow}
          endColor={color.orange}
          id={`${id}_yellow`}
        />
        <Gradient
          startColor={color.green}
          endColor={color.blue}
          id={`${id}_green`}
          x1={50}
          y1={30}
          x2={50}
          y2={150}
        />
        <Gradient
          startColor={color.purple}
          endColor={color.violet}
          id={`${id}_purple`}
        />
        <Gradient
          startColor={color.gray}
          endColor={color.grayDark}
          id={`${id}_gray`}
        />
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
          <Cell
            key={item.name}
            fill={`url(#${id}_${colors[i % colors.length]})`}
          />
        ))}
      </Pie>
    </PieChart>
  );
};

export { Chart };
