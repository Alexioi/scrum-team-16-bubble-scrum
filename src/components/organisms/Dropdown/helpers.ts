import { getPlural } from '@/helpers';

const calculateValue = (
  groups: number[][],
  countersValue: number[],
  variants: string[][],
  placeholder: string,
) => {
  const counters = groups.map((elements) => {
    const initialValue = 0;

    return elements.reduce((acc: number, el: number) => {
      return acc + countersValue[el];
    }, initialValue);
  });

  const value = variants.reduce((acc, el, i) => {
    const count = counters[i];
    const item = `${count} ${getPlural(el, count)}`;

    if (count === 0) {
      return acc;
    }

    if (acc === '') {
      return item;
    }

    return `${acc}, ${item}`;
  }, '');

  if (value === '') {
    return placeholder;
  }

  return value;
};

const isEmptyCounters = (
  values: {
    name: string;
    counter: number;
  }[],
) => {
  return (
    values.reduce((acc, el) => {
      return acc + el.counter;
    }, 0) > 0
  );
};

export { calculateValue, isEmptyCounters };
